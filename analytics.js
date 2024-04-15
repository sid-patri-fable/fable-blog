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

const retentionB2B = () => {
  const head = document.querySelector("head");

  const retentionScript = `
    <script id="retention-script">!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("5Z6PVLH3JG6R");}();</script>
  `;

  if (!head.querySelector("script#retention-script")) {
    head.insertAdjacentHTML("afterbegin", retentionScript);
  }
};

retentionB2B();
addGTMandGA();
