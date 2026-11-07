import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const appDir = path.join(root, 'app');
const errors = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenCanonicals = new Map();
const pageFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name === 'page.tsx') pageFiles.push(file);
  }
}

function property(objectNode, name) {
  if (!objectNode || !ts.isObjectLiteralExpression(objectNode)) return null;
  const found = objectNode.properties.find((item) => {
    if (!ts.isPropertyAssignment(item)) return false;
    const key = item.name;
    return (ts.isIdentifier(key) || ts.isStringLiteral(key)) && key.text === name;
  });
  return found?.initializer ?? null;
}

function literal(node, constants) {
  if (!node) return null;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isIdentifier(node)) return constants.get(node.text) ?? null;
  return null;
}

function reportDuplicate(map, value, route, label) {
  if (!value) return;
  const previous = map.get(value);
  if (previous) errors.push(`Duplicate ${label}: ${route} duplicates ${previous}`);
  else map.set(value, route);
}

walk(appDir);

for (const file of pageFiles) {
  const sourceText = fs.readFileSync(file, 'utf8');
  const source = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const constants = new Map();
  let metadataNode = null;

  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name)) continue;
      const value = literal(declaration.initializer, constants);
      if (value !== null) constants.set(declaration.name.text, value);
      if (declaration.name.text === 'metadata') metadataNode = declaration.initializer;
    }
  }

  const relative = path.relative(appDir, path.dirname(file)).split(path.sep).join('/');
  const route = !relative || relative === '.' ? '/' : `/${relative}/`;
  const title = literal(property(metadataNode, 'title'), constants);
  const description = literal(property(metadataNode, 'description'), constants);
  const alternates = property(metadataNode, 'alternates');
  const canonical = literal(property(alternates, 'canonical'), constants);
  const openGraph = property(metadataNode, 'openGraph');
  const twitter = property(metadataNode, 'twitter');
  const ogTitle = literal(property(openGraph, 'title'), constants);
  const ogDescription = literal(property(openGraph, 'description'), constants);
  const ogImages = property(openGraph, 'images');
  const twitterTitle = literal(property(twitter, 'title'), constants);
  const twitterDescription = literal(property(twitter, 'description'), constants);
  const twitterImages = property(twitter, 'images');

  for (const [label, value] of [
    ['title', title], ['description', description], ['canonical', canonical],
    ['Open Graph title', ogTitle], ['Open Graph description', ogDescription],
    ['Open Graph image', ogImages], ['Twitter title', twitterTitle],
    ['Twitter description', twitterDescription], ['Twitter image', twitterImages]
  ]) {
    if (value === null || value === undefined || value === '') errors.push(`${route}: missing ${label}`);
  }

  if (title && title.length > 70) errors.push(`${route}: title exceeds 70 characters (${title.length})`);
  if (description && description.length > 160) errors.push(`${route}: description exceeds 160 characters (${description.length})`);
  if (canonical && !canonical.startsWith('/')) errors.push(`${route}: canonical should be a site-relative path`);
  if (canonical && !canonical.endsWith('/')) errors.push(`${route}: canonical should end with a slash for static export`);
  if (canonical && canonical !== route) errors.push(`${route}: canonical path points to ${canonical}`);

  reportDuplicate(seenTitles, title, route, 'title');
  reportDuplicate(seenDescriptions, description, route, 'description');
  reportDuplicate(seenCanonicals, canonical, route, 'canonical');
}

if (errors.length) {
  console.error(`FAIL: metadata audit found ${errors.length} issue(s)`);
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}

console.log(`PASS: ${pageFiles.length} pages have unique titles, descriptions and canonicals.`);
console.log('PASS: Open Graph and Twitter metadata are present on every route.');
console.log('PASS: All audited titles are <= 70 characters and descriptions <= 160 characters.');
