/* Wishly Guide AdSense settings.
   Publisher verification script is loaded site-wide in app/layout.tsx.
   Manual display units remain off until Google approval and real ad-slot IDs are configured.
   Auto Ads can be managed in the AdSense account after the site is approved.
*/
window.WISHLY_ADS = {
  enabled: false,
  publisherId: "ca-pub-9101632317352495",
  autoAds: false,
  slots: {
    "home-inline": "REPLACE_WITH_HOME_AD_SLOT_ID",
    "guide-index": "REPLACE_WITH_GUIDE_INDEX_SLOT_ID",
    "article-mid": "REPLACE_WITH_ARTICLE_AD_SLOT_ID",
    "article-inline": "REPLACE_WITH_ARTICLE_AD_SLOT_ID"
  }
};
