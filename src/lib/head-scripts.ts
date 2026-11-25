import { CONSENT_DENIED_REGIONS, CONSENT_STORAGE_KEY } from "./consent.ts";
import { GA_MEASUREMENT_ID, GTM_ID } from "./site.ts";

/** Inline consent defaults. Must run before the Google tag. */
export function consentBootSource(): string {
  const regions = JSON.stringify(CONSENT_DENIED_REGIONS);
  const key = JSON.stringify(CONSENT_STORAGE_KEY);
  return [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){dataLayer.push(arguments);}",
    "window.gtag=gtag;",
    `gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",region:${regions},wait_for_update:500});`,
    'gtag("consent","default",{ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",analytics_storage:"granted"});',
    "try{",
    `var raw=localStorage.getItem(${key});`,
    "if(raw){",
    "var saved=JSON.parse(raw);",
    'if(saved&&typeof saved.exp==="number"&&saved.exp>Date.now()&&(saved.choice==="accepted"||saved.choice==="rejected")){',
    'var state=saved.choice==="accepted"?"granted":"denied";',
    'gtag("consent","update",{ad_storage:state,ad_user_data:state,ad_personalization:state,analytics_storage:state});',
    'window.dataLayer.push({event:"consent_update",consent_choice:saved.choice});',
    `}else{localStorage.removeItem(${key});}`,
    "}",
    "}catch(e){}",
  ].join("");
}

/** Google Tag Manager bootstrap. The container id is the public GTM_ID. */
export function gtmBootSource(): string {
  const id = JSON.stringify(GTM_ID);
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer",${id});`;
}

/** Direct GA4 config. Used only while GTM_ID is empty. Consent defaults already ran. */
export function gtagConfigSource(): string {
  const id = JSON.stringify(GA_MEASUREMENT_ID);
  return `gtag("js",new Date());gtag("config",${id});`;
}
