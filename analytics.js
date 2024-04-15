"use strict";

const addGTMandGA = () => {
  const head = document.querySelector("head");
  const body = document.querySelector("body");

  const gtm = `<script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MMS6WVB');</script>`;

  const gtmNoScript = `
            <noscript 
              id="GTM-MMS6WVB"
            >
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-MMS6WVB"
                height="0" 
                width="0" 
                style="display:none;visibility:hidden">
              </iframe>
            </noscript>
  `;
  const ga = `
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-DNSYMVZ30V"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-DNSYMVZ30V');
  </script>
  `;

  if (!head.querySelector('script[src*="GTM-MMS6WVB"]')) {
    head.insertAdjacentHTML("afterbegin", gtm);
  }
  if (!head.querySelector('script[src*="G-DNSYMVZ30V"]')) {
    head.insertAdjacentHTML("afterbegin", ga);
  }
  if (!body.querySelector('noscript[id="GTM-MMS6WVB"]')) {
    body.insertAdjacentHTML("afterbegin", gtmNoScript);
  }
};

addGTMandGA();
