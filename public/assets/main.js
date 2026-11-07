(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");
  const header=document.querySelector(".wg-site-header");
  const toggle=document.querySelector(".wg-menu-toggle");
  const panel=document.querySelector(".wg-nav-content");
  const scrim=document.querySelector(".wg-nav-scrim");
  let savedY=0,locked=false,previousFocus=null;
  const focusable=()=>panel?[...panel.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length):[];
  function openMenu(viaKeyboard=false){
    if(!toggle||!panel||locked)return;
    savedY=window.scrollY||window.pageYOffset||0;
    previousFocus=document.activeElement;
    locked=true;
    document.documentElement.classList.add("wg-menu-open");
    document.body.classList.add("wg-menu-open");
    panel.classList.add("is-open");
    if(scrim)scrim.hidden=false;
    toggle.setAttribute("aria-expanded","true");
    toggle.setAttribute("aria-label","Close navigation menu");
    if(viaKeyboard)requestAnimationFrame(()=>focusable()[0]?.focus({preventScroll:true}));
  }
  function closeMenu(restoreFocus=false){
    if(!toggle||!panel||!locked)return;
    panel.classList.remove("is-open");
    if(scrim)scrim.hidden=true;
    toggle.setAttribute("aria-expanded","false");
    toggle.setAttribute("aria-label","Open navigation menu");
    document.documentElement.classList.remove("wg-menu-open");
    document.body.classList.remove("wg-menu-open");
    locked=false;
    // safety net: keep the exact scroll position the reader had (instant, not smooth)
    if(Math.abs((window.scrollY||0)-savedY)>1){
      const root=document.documentElement,prev=root.style.scrollBehavior;
      root.style.scrollBehavior="auto";window.scrollTo(0,savedY);root.style.scrollBehavior=prev;
    }
    if(restoreFocus)toggle.focus({preventScroll:true});
    else if(previousFocus instanceof HTMLElement)previousFocus.blur();
  }
  toggle?.addEventListener("click",ev=>locked?closeMenu(true):openMenu(ev.detail===0));
  scrim?.addEventListener("click",()=>closeMenu(true));
  panel?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>closeMenu(false)));
  document.addEventListener("keydown",e=>{
    if(!locked)return;
    if(e.key==="Escape"){e.preventDefault();closeMenu(true);return;}
    if(e.key==="Tab"){
      const els=focusable();
      if(!els.length){e.preventDefault();return;}
      const first=els[0],last=els[els.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  window.addEventListener("resize",()=>{if(window.innerWidth>1060&&locked)closeMenu(false);},{passive:true});
  const progress=document.querySelector(".reading-progress"),top=document.querySelector(".back-top");
  function scrollUI(){
    if(locked)return;
    const doc=document.documentElement,max=doc.scrollHeight-innerHeight;
    if(progress)progress.style.width=(max>0?scrollY/max*100:0)+"%";
    if(top)top.classList.toggle("show",scrollY>500);
    if(header)header.classList.toggle("is-scrolled",scrollY>8);
  }
  window.addEventListener("scroll",scrollUI,{passive:true});scrollUI();
  top?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  const items=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");io.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
    items.forEach(item=>io.observe(item));
  }else items.forEach(item=>item.classList.add("is-visible"));
  const search=document.querySelector("[data-guide-search]");
  if(search){
    const cards=[...document.querySelectorAll("[data-guide-card]")],empty=document.querySelector(".empty-state");
    search.addEventListener("input",()=>{
      const q=search.value.trim().toLowerCase();let visible=0;
      cards.forEach(card=>{const match=(card.dataset.search||card.textContent||"").toLowerCase().includes(q);card.hidden=!match;if(match)visible++;});
      if(empty)empty.style.display=visible?"none":"block";
    });
    const initial=new URLSearchParams(location.search).get("q");
    if(initial){search.value=initial;search.dispatchEvent(new Event("input"));}
  }
})();
