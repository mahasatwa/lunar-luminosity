(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4928],
  {
    4928: (e, n, s) => {
      "use strict";
      s.r(n), s.d(n, { ContentfulLandingPage: () => y });
      var a = s(6029),
        l = s(91112),
        r = s(16371),
        i = s(27762),
        d = s(90474),
        t = s(18570),
        o = s(87972),
        c = s(99952),
        h = s(80207),
        p = s(85761),
        b = s(60920),
        f = s(71024),
        g = s.n(f),
        m = s(15641),
        u = s(74713),
        x = s(28631),
        j = s(16896),
        v = s(62517);
      let _ = g()(
          () =>
            Promise.all([s.e(2189), s.e(4029), s.e(112)])
              .then(s.bind(s, 70112))
              .then((e) => ({ default: e.ContentfulHomePage })),
          { loadableGenerated: { webpack: () => [70112] } }
        ),
        y = (0, t.i)((e) => {
          let n,
            { entry: s } = e,
            { singletons: t, includes: f } = (0, p.l)(),
            { site: g, getEntry: y, getEntryUrl: k } = (0, o.U)(),
            { breadcrumbs: N } = (0, h.b)(),
            w = (0, c.U)(s.fields.blocks);
          if (t.isWWWHomePage) return (0, a.jsx)(_, { entry: s });
          let P = y(null == g ? void 0 : g.fields.contentReferences),
            C = (0, b.l)(f);
          if (P) {
            let e = null == P ? void 0 : P.fields.programFinderPage;
            e && (n = k(e));
          }
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(m.n, { entry: s.fields.seo }),
              (0, a.jsx)(l.n, {
                breadcrumbs: N,
                topper: (0, u.h)(s.fields.topper),
                header: { name: "SiteHeader", props: (0, j.L)(g) },
                footer: (0, x.v)(null == g ? void 0 : g.fields.footer),
                children: C
                  ? (0, a.jsxs)(i.v, {
                      programs: [],
                      children: [
                        (0, a.jsx)(v.A, { entry: s }),
                        (0, a.jsx)(r.w, { footnotes: w }),
                        (0, a.jsx)(d.a, {
                          contentReferences: P,
                          isHBSOnline:
                            (null == g ? void 0 : g.fields.domain) === "online",
                          programFinderUrl: n,
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(v.A, { entry: s }),
                        (0, a.jsx)(r.w, { footnotes: w }),
                      ],
                    }),
              }),
            ],
          });
        });
    },
    10988: () => {},
    62898: () => {},
    91112: (e, n, s) => {
      "use strict";
      s.d(n, { n: () => o });
      var a = s(6029);
      s(10988);
      var l = s(50212),
        r = s(77925),
        i = s(22691);
      s(62898);
      var d = s(7113);
      function t(e) {
        let { breadcrumbs: n, topper: s, children: l } = e;
        return (0, a.jsxs)("main", {
          id: "skipto-main",
          tabIndex: -1,
          children: [
            s && (0, a.jsx)(d.I, { ...s }),
            n && (0, a.jsx)(i.B, { ...n }),
            (0, a.jsx)("div", {
              className: "hbs-landing-page-body__wrapper",
              children: (0, a.jsx)("div", {
                className: "hbs-landing-page-body",
                children: (0, a.jsx)("div", {
                  className: "hbs-landing-page-body__main",
                  children: (0, a.jsx)("section", {
                    className: "hbs-page-body hbs-landing-page-body__content",
                    children: l,
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function o(e) {
        let {
          children: n,
          breadcrumbs: s,
          footer: i,
          header: d,
          topper: o,
        } = e;
        return (0, a.jsx)(r.Y, {
          footer: i,
          header: d,
          className: (0, l.A)(
            "hbs-page",
            "hbs-landing-page",
            (null == o ? void 0 : o.name) &&
              "hbs-page--".concat(null == o ? void 0 : o.name)
          ),
          children: (0, a.jsx)(t, { breadcrumbs: s, topper: o, children: n }),
        });
      }
    },
  },
]);
//# sourceMappingURL=4928.7807207fda7a438f.js.map
