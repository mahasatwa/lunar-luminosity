(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4520],
  {
    18570: (e, s, i) => {
      "use strict";
      i.d(s, { i: () => d });
      var t = i(6029),
        l = i(87972);
      function d(e) {
        return (s) => {
          let { entry: i, options: d } = s,
            { getEntry: n, createEditAttributes: r } = (0, l.U)(),
            c = n(i);
          return (null == c ? void 0 : c.fields) &&
            (null == c ? void 0 : c.metadata) &&
            (null == c ? void 0 : c.sys.id)
            ? (0, t.jsx)(e, { entry: c, options: d, createEditAttributes: r })
            : null;
        };
      }
    },
    24520: (e, s, i) => {
      "use strict";
      i.r(s), i.d(s, { ContentfulPageSectionHeader: () => c });
      var t = i(6029),
        l = i(18570),
        d = i(39263),
        n = i(62302),
        r = i(91014);
      let c = (0, l.i)((e) => {
        let { entry: s, createEditAttributes: i } = e;
        return (0, t.jsx)(n.X, {
          title: s.fields.title,
          subTitle: s.fields.subtitle,
          description:
            s.fields.description &&
            (0, t.jsx)(d.Q, { document: s.fields.description }),
          cta: (0, r.T)(s.fields.link),
          editAttributes: {
            title: i({ entry: s, fieldId: "title" }),
            subTitle: i({ entry: s, fieldId: "subtitle" }),
            description: i({ entry: s, fieldId: "description" }),
          },
        });
      });
    },
    39868: () => {},
    62302: (e, s, i) => {
      "use strict";
      i.d(s, { X: () => n });
      var t = i(6029);
      i(39868);
      var l = i(50212),
        d = i(80422);
      function n(e) {
        let {
            title: s,
            subTitle: i,
            description: n,
            cta: r,
            editAttributes: c,
          } = e,
          a = (s && s.length > 50) || (i && i.length > 50),
          h = (0, l.A)(
            "hbs-section-header__hgroup",
            a ? "hbs-section-header__hgroup--long" : ""
          ),
          o = n || r;
        return (0, t.jsx)("div", {
          className: "hbs-global-align-full hbs-component--section-header",
          children: (0, t.jsx)("div", {
            className: "hbs-section-header",
            children: (0, t.jsxs)("div", {
              className: "hbs-section-header-inner",
              children: [
                (0, t.jsxs)("div", {
                  className: h,
                  children: [
                    s &&
                      (0, t.jsx)("h2", {
                        className: "hbs-section-header__title",
                        ...(null == c ? void 0 : c.title),
                        children: s,
                      }),
                    i &&
                      (0, t.jsx)("p", {
                        className: "hbs-section-header__subtitle",
                        ...(null == c ? void 0 : c.subTitle),
                        children: i,
                      }),
                  ],
                }),
                o &&
                  (0, t.jsx)("div", {
                    className: (0, l.A)(
                      "hbs-section-header__dek",
                      !n && "hbs-section-header__dek--no-desc"
                    ),
                    children: (0, t.jsxs)("div", {
                      ...(null == c ? void 0 : c.description),
                      children: [
                        n,
                        r && (0, t.jsx)(d.l, { ...r, isSmall: !0 }),
                      ],
                    }),
                  }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=4520.82be6f5aecd1cae0.js.map
