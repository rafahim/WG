(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");
  // Elements are looked up fresh every time (Next.js can replace the server HTML after this script
  // has run, which left the old listeners attached to detached nodes = dead hamburger).
  const $=sel=>document.querySelector(sel);
  const getToggle=()=>$(".wg-menu-toggle"),getPanel=()=>$(".wg-nav-content"),getScrim=()=>$(".wg-nav-scrim"),getHeader=()=>$(".wg-site-header");
  let savedY=0,locked=false,previousFocus=null;
  const focusable=()=>{const panel=getPanel();return panel?[...panel.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length):[];};
  function openMenu(viaKeyboard=false){
    const toggle=getToggle(),panel=getPanel(),scrim=getScrim();
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
    const toggle=getToggle(),panel=getPanel(),scrim=getScrim();
    if(!locked)return;
    if(panel)panel.classList.remove("is-open");
    if(scrim)scrim.hidden=true;
    if(toggle){toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation menu");}
    document.documentElement.classList.remove("wg-menu-open");
    document.body.classList.remove("wg-menu-open");
    locked=false;
    // safety net: keep the exact scroll position the reader had (instant, not smooth)
    if(Math.abs((window.scrollY||0)-savedY)>1){
      const root=document.documentElement,prev=root.style.scrollBehavior;
      root.style.scrollBehavior="auto";window.scrollTo(0,savedY);root.style.scrollBehavior=prev;
    }
    if(restoreFocus&&toggle)toggle.focus({preventScroll:true});
    else if(previousFocus instanceof HTMLElement)previousFocus.blur();
  }
  // Event delegation: works no matter how many times the header DOM is re-created.
  document.addEventListener("click",ev=>{
    const t=ev.target instanceof Element?ev.target:null;
    if(!t)return;
    if(t.closest(".wg-menu-toggle")){ev.preventDefault();locked?closeMenu(true):openMenu(ev.detail===0);return;}
    if(locked&&t.closest(".wg-nav-scrim")){closeMenu(true);return;}
    if(locked&&t.closest(".wg-nav-content a"))closeMenu(false);
  });
  // If the DOM was swapped while the menu was "open", make sure state can never get stuck.
  new MutationObserver(()=>{const p=getPanel();if(locked&&p&&!p.classList.contains("is-open")&&!document.querySelector(".wg-menu-toggle[aria-expanded=true]")){locked=false;document.documentElement.classList.remove("wg-menu-open");document.body.classList.remove("wg-menu-open");}}).observe(document.body,{childList:true,subtree:true});
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
    const header=getHeader();if(header)header.classList.toggle("is-scrolled",scrollY>8);
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
