(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");
  const header = document.querySelector(".premium-nav");
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const accountToggle = document.querySelector("[data-wg-account-toggle]");
  const accountMenu = document.querySelector("[data-wg-account-menu]");
  const accountScrim = document.querySelector("[data-wg-account-scrim]");
  const accountClose = document.querySelector("[data-wg-account-close]");
  const closeNav = () => {
    if (!menu || !nav) return;
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("guide-menu-open");
  };
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      document.body.classList.toggle("guide-menu-open", open);
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));
  }
  const closeAccount = () => {
    if (!accountToggle || !accountMenu) return;
    accountMenu.hidden = true;
    if (accountScrim) accountScrim.hidden = true;
    accountToggle.setAttribute("aria-expanded", "false");
    accountToggle.classList.remove("is-open");
  };
  if (accountToggle && accountMenu) {
    accountToggle.addEventListener("click", () => {
      const open = accountMenu.hidden;
      accountMenu.hidden = !open;
      if (accountScrim) accountScrim.hidden = !open;
      accountToggle.setAttribute("aria-expanded", String(open));
      accountToggle.classList.toggle("is-open", open);
    });
    accountClose?.addEventListener("click", closeAccount);
    accountScrim?.addEventListener("click", closeAccount);
    accountMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeAccount));
  }
  document.addEventListener("pointerdown", event => {
    if (nav?.classList.contains("open") && header && !header.contains(event.target)) closeNav();
    if (accountMenu && !accountMenu.hidden && header && !header.contains(event.target)) closeAccount();
  });
  document.addEventListener("keydown", event => { if (event.key === "Escape") { closeNav(); closeAccount(); } });
  const scrollHeader = () => { if (header) header.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", scrollHeader, {passive:true}); scrollHeader();
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
    }), {threshold:.12, rootMargin:"0px 0px -35px 0px"});
    items.forEach(item => io.observe(item));
  } else items.forEach(item => item.classList.add("is-visible"));
  const progress = document.querySelector(".reading-progress"), top = document.querySelector(".back-top");
  function scrollUI() {
    const doc = document.documentElement, max = doc.scrollHeight - innerHeight;
    if (progress) progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    if (top) top.classList.toggle("show", scrollY > 500);
  }
  window.addEventListener("scroll", scrollUI, {passive:true}); scrollUI();
  if (top) top.addEventListener("click", () => scrollTo({top:0, behavior:"smooth"}));
  const search = document.querySelector("[data-guide-search]");
  if (search) {
    const cards = [...document.querySelectorAll("[data-guide-card]")], empty = document.querySelector(".empty-state");
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase(); let visible = 0;
      cards.forEach(card => { const match = (card.dataset.search || card.textContent || "").toLowerCase().includes(query); card.hidden = !match; if (match) visible++; });
      if (empty) empty.style.display = visible ? "none" : "block";
    });
  }
})();
