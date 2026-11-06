(() => {
  "use strict";
  const config = window.WISHLY_ADS || {};
  const publisherId = String(config.publisherId || "");
  const validPublisher = /^ca-pub-[0-9]{10,}$/.test(publisherId);
  if (!config.enabled || !validPublisher) return;

  const hosts = [...document.querySelectorAll(".ad-slot[data-ad-key]")];
  const configured = hosts.map(host => ({host, slot: String((config.slots || {})[host.dataset.adKey] || "")}))
    .filter(item => /^[0-9]{6,}$/.test(item.slot));
  if (configured.length === 0 && !config.autoAds) return;

  const activate = () => {
    if (config.autoAds || !configured.length) return;
    window.adsbygoogle = window.adsbygoogle || [];
    configured.forEach(({host, slot}) => {
      if (host.dataset.adLoaded === "true") return;
      const render = host.querySelector(".ad-render");
      if (!render) return;
      const unit = document.createElement("ins");
      unit.className = "adsbygoogle";
      unit.style.display = "block";
      unit.dataset.adClient = publisherId;
      unit.dataset.adSlot = slot;
      unit.dataset.adFormat = "auto";
      unit.dataset.fullWidthResponsive = "true";
      render.appendChild(unit);
      host.classList.add("is-active");
      host.dataset.adLoaded = "true";
      try { window.adsbygoogle.push({}); }
      catch (error) { console.warn("Wishly Guide ad unit could not be initialized.", error); }
    });
  };

  const existing = document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
  if (window.adsbygoogle) activate();
  else if (existing) existing.addEventListener("load", activate, {once:true});
  else {
    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(publisherId)}`;
    script.addEventListener("load", activate, {once:true});
    document.head.appendChild(script);
  }
})();
