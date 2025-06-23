(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4538],
  {
    11048: () => {},
    18570: (e, t, l) => {
      "use strict";
      l.d(t, { i: () => i });
      var a = l(6029),
        s = l(87972);
      function i(e) {
        return (t) => {
          let { entry: l, options: i } = t,
            { getEntry: n, createEditAttributes: d } = (0, s.U)(),
            r = n(l);
          return (null == r ? void 0 : r.fields) &&
            (null == r ? void 0 : r.metadata) &&
            (null == r ? void 0 : r.sys.id)
            ? (0, a.jsx)(e, { entry: r, options: i, createEditAttributes: d })
            : null;
        };
      }
    },
    34538: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { ContentfulHeroStatement: () => v });
      var a = l(6029);
      l(98634);
      var s = l(50212),
        i = l(80422),
        n = l(51102),
        d = l(75287);
      function r(e) {
        let { label: t, text: l, credit: s, creditLink: n } = e;
        return (0, a.jsxs)("div", {
          className: "quote-card-content",
          children: [
            (0, a.jsx)("span", {
              className: "quote-card-content__overline",
              children: t,
            }),
            (0, a.jsxs)("div", {
              className: "quote-card-content__text-mod",
              children: [
                (0, a.jsx)("blockquote", {
                  children: (0, a.jsxs)("p", {
                    className: "quote-card-content__text",
                    children: ["“", l, "”"],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "quote-card-content__credit-mod",
                  children: [
                    (0, a.jsx)("span", {
                      className: "quote-card-content__credit",
                      children: s,
                    }),
                    (null == n ? void 0 : n.link) &&
                      (0, a.jsx)(i.l, {
                        isSmall: !0,
                        className: "quote-card-content__credit-link",
                        href: n.link,
                        children: n.label,
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      l(11048);
      var o = l(55729);
      function c(e) {
        let {
            ctaList: t,
            button: l,
            media: c,
            subhead: h,
            theme: u = "white",
            title: m,
            isCard: _ = !0,
            quote: v,
            align: b = "full",
            mediaAlignment: x = "left",
            HeadingLevel: f = "h2",
            editAttributes: j,
          } = e,
          k = (0, o.useRef)(null),
          N = !!(t && l),
          p = (0, s.A)(
            "hbs-hero-statement__card",
            N && "hbs-hero-statement__card--cta",
            !N && "hbs-hero-statement__card--text-only"
          ),
          g = [
            !v && l && "button",
            !v && t && "linklist",
            v && "quote",
            !N && !v && "text-only",
            (null == c ? void 0 : c.kaltura) && "kaltura",
          ]
            .filter(Boolean)
            .join("__"),
          y = "cb__hero-statement__"
            .concat(_ ? "card" : "flat")
            .concat(g && "__".concat(g));
        return (0, a.jsx)("div", {
          className: "hbs-component--hero-statement hbs-global-align-".concat(
            b
          ),
          "data-region": y,
          children: (0, a.jsxs)("div", {
            className: (0, s.A)(
              _
                ? "hbs-hero-statement hbs-hero-statement--card"
                : "hbs-hero-statement hbs-hero-statement--flat",
              "hbs-hero-statement--image-".concat(x)
            ),
            "data-theme": u,
            children: [
              (0, a.jsx)("div", {
                className: "hbs-hero-statement__content",
                children: (0, a.jsx)("div", {
                  className: p,
                  children: (0, a.jsx)("div", {
                    className: "hbs-hero-statement__card-inner",
                    children: v
                      ? (0, a.jsx)(r, { ...v })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            m &&
                              (0, a.jsx)(f, {
                                ...(null == j ? void 0 : j.title),
                                className: "hbs-hero-statement__title",
                                children: m,
                              }),
                            h &&
                              (0, a.jsx)("div", {
                                ...(null == j ? void 0 : j.subhead),
                                className: "hbs-hero-statement__subhead",
                                children: h,
                              }),
                            (null == c ? void 0 : c.kaltura) &&
                              (0, a.jsx)("div", {
                                className:
                                  "hbs-hero-statement__trigger-container",
                                children: (0, a.jsx)("button", {
                                  type: "button",
                                  className:
                                    "hbs-hero-statement__modal-trigger",
                                  onClick:
                                    (null == c ? void 0 : c.kaltura) &&
                                    (() => {
                                      k.current && k.current.click();
                                    }),
                                  "aria-hidden": !0,
                                  tabIndex: -1,
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "hbs-hero-statement__kaltura-text",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "hbs-hero-statement__kaltura-text-prompt",
                                        children: "Play",
                                      }),
                                      " ",
                                      (null == c
                                        ? void 0
                                        : c.kaltura.duration) &&
                                        (0, a.jsxs)("span", {
                                          className:
                                            "hbs-hero-statement__kaltura-duration",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className:
                                                "hbs-global-visually-hidden",
                                              children: "Video duration:",
                                            }),
                                            null == c
                                              ? void 0
                                              : c.kaltura.duration,
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            (t || l) &&
                              !(null == c ? void 0 : c.kaltura) &&
                              (0, a.jsxs)("div", {
                                className: "hbs-hero-statement__cta",
                                children: [
                                  l &&
                                    (0, a.jsx)(i.l, {
                                      ...l,
                                      type: "primary-button",
                                    }),
                                  t && (0, a.jsx)(n.r, { ...t }),
                                ],
                              }),
                          ],
                        }),
                  }),
                }),
              }),
              c &&
                (0, a.jsx)("div", {
                  className: (0, s.A)(
                    "hbs-hero-statement__media",
                    (null == c ? void 0 : c.kaltura) &&
                      "hbs-hero-statement__media--kaltura"
                  ),
                  children: (0, a.jsx)(d.Z, {
                    ref: k,
                    ...c,
                    aspectRatio: "3/2",
                  }),
                }),
            ],
          }),
        });
      }
      var h = l(18570),
        u = l(39263),
        m = l(74487),
        _ = l(87972);
      let v = (0, h.i)((e) => {
        var t, l, s, i;
        let { entry: n, options: d, createEditAttributes: r } = e,
          { getEntryUrl: o, getEntry: h, getEntries: v } = (0, _.U)(),
          b =
            null !== (s = null == d ? void 0 : d.headerAbove) &&
            void 0 !== s &&
            s,
          x = {
            title: n.fields.title,
            align: n.fields.alignment,
            theme: n.fields.theme,
            isCard: "card" === n.fields.style,
            HeadingLevel: b ? "h3" : "h2",
            subhead: (0, a.jsx)(u.Q, { document: n.fields.description }),
            mediaAlignment: n.fields.mediaAlignment,
            editAttributes: {
              title: r({ entry: n, fieldId: "title" }),
              subhead: r({ entry: n, fieldId: "description" }),
            },
          },
          f = h(n.fields.button);
        if (
          ((null == f
            ? void 0
            : null === (t = f.fields) || void 0 === t
            ? void 0
            : t.text) &&
            (x.button = {
              children: null == f ? void 0 : f.fields.text,
              href: o(n.fields.button),
              "aria-label": f.fields.ariaLabel,
              editAttributes: r({ entry: f, fieldId: "title" }),
            }),
          !(null == f
            ? void 0
            : null === (l = f.fields) || void 0 === l
            ? void 0
            : l.text) && n.fields.links)
        ) {
          let e = { items: [] };
          null ===
            (i = v(x.button ? n.fields.links.slice(0, 1) : n.fields.links)) ||
            void 0 === i ||
            i.forEach((t) => {
              var l, a, s;
              (null == t
                ? void 0
                : null === (l = t.fields) || void 0 === l
                ? void 0
                : l.text) &&
                (null === (s = e.items) ||
                  void 0 === s ||
                  s.push({
                    href: o(t),
                    children:
                      null === (a = t.fields) || void 0 === a ? void 0 : a.text,
                    "aria-label": t.fields.ariaLabel,
                    editAttributes: r({ entry: t, fieldId: "title" }),
                  }));
            }),
            (x.ctaList = e);
        }
        let j = (0, m.N2)(n.fields.media);
        return (
          j && (j.kaltura && (j.kaltura.withModal = !0), (x.media = j)),
          (0, a.jsx)(c, { ...x })
        );
      });
    },
    98634: () => {},
  },
]);
//# sourceMappingURL=4538.10e6f5765d185466.js.map
