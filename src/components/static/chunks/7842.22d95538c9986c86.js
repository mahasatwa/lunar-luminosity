(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7842],
  {
    47842: (a, s, t) => {
      "use strict";
      t.r(s), t.d(s, { Cta: () => n });
      var e = t(6029);
      t(75144);
      var c = t(50212),
        l = t(80422),
        h = t(51102),
        i = t(75287);
      function n(a) {
        let {
            align: s,
            ctaList: t,
            primaryCta: n,
            secondaryCta: r,
            subtitle: d,
            theme: _,
            title: b,
            media: o,
            mediaAlignment: m = "right",
            editAttributes: p,
            HeadingLevel: u = "h2",
          } = a,
          x = (!t && n) || r,
          j = o && o.length > 0,
          v = (0, c.A)(
            "hbs-global-align-".concat(s || (j ? "full" : "center")),
            "hbs-component--cta"
          );
        return (0, e.jsx)("div", {
          ...(null == p ? void 0 : p.block),
          className: v,
          "data-region": "cb__cta__large__".concat(t ? "linklist" : "button"),
          children: (0, e.jsx)("div", {
            className: (0, c.A)(
              "hbs-cta",
              o
                ? "hbs-cta--asset hbs-cta--asset-count-".concat(o.length)
                : "hbs-cta--text-only",
              "hbs-cta--".concat(_ ? "themed" : "flat")
            ),
            "data-theme": _,
            children: (0, e.jsxs)("div", {
              className: (0, c.A)(
                "hbs-cta__wrapper",
                "left" === m
                  ? "hbs-cta__wrapper--media-left"
                  : "hbs-cta__wrapper--media-right"
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: "hbs-cta__content",
                  children: [
                    b &&
                      (0, e.jsx)(u, {
                        ...(null == p ? void 0 : p.title),
                        className: "hbs-cta__title",
                        children: b,
                      }),
                    d &&
                      (0, e.jsx)("div", {
                        ...(null == p ? void 0 : p.subtitle),
                        className: "hbs-cta__subtitle",
                        children: d,
                      }),
                    x &&
                      (0, e.jsxs)("div", {
                        className: "hbs-cta__cta-wrapper",
                        children: [
                          n && (0, e.jsx)(l.l, { ...n, children: n.children }),
                          r && (0, e.jsx)(l.l, { ...r, children: r.children }),
                        ],
                      }),
                    t &&
                      (0, e.jsx)("div", {
                        className: "hbs-cta__cta-wrapper",
                        children: (0, e.jsx)(h.r, { ...t }),
                      }),
                  ],
                }),
                o &&
                  (0, e.jsx)("div", {
                    className: "hbs-cta__media",
                    children: o.map((a, s) =>
                      (0, e.jsx)(
                        i.Z,
                        {
                          ...a,
                          aspectRatio:
                            1 === o.length ? "3/2" : 1 === s ? "3/2" : "3/4",
                        },
                        s
                      )
                    ),
                  }),
              ],
            }),
          }),
        });
      }
    },
    75144: () => {},
  },
]);
//# sourceMappingURL=7842.22d95538c9986c86.js.map
