/// <reference types="astro/client" />

interface Window {
  Alpine: import("alpinejs").Alpine;
}

declare namespace JSX {
  interface IntrinsicElements {
    script: astroHTML.JSX.HTMLScriptAttributes;
  }
}
