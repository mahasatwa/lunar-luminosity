(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    36021: (e, n, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return t(95367);
        },
      ]);
    },
    95367: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => s });
      var a = t(6029),
        r = t(95669),
        i = t.n(r);
      function s(e) {
        var n;
        let { Component: t, pageProps: r } = e,
          s =
            (null === (n = r.currentPage) || void 0 === n
              ? void 0
              : n.alternateLinks) || [];
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(i(), {
              children: [
                (0, a.jsx)("meta", { charSet: "utf-8" }),
                (0, a.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, a.jsx)("link", {
                  rel: "icon",
                  type: "image/ico",
                  href: "/static-assets/favicon.ico",
                }),
                Object.values(s).map((e) =>
                  (0, a.jsx)(
                    "link",
                    { rel: "alternate", hrefLang: e.hrefLang, href: e.href },
                    e.hrefLang
                  )
                ),
              ],
            }),
            (0, a.jsx)(t, { ...r }),
          ],
        });
      }
    },
    95669: (e, n, t) => {
      e.exports = t(97186);
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [6593, 8792], () => (n(36021), n(33023))), (_N_E = e.O());
  },
]);
//# sourceMappingURL=_app-aa8d7642cb915260.js.map
