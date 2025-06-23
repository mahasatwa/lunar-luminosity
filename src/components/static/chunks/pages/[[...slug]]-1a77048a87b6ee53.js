(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [243],
  {
    60317: (e, n, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[[...slug]]",
        function () {
          return l(94750);
        },
      ]);
    },
    94750: (e, n, l) => {
      "use strict";
      l.r(n), l.d(n, { __N_SSP: () => x, default: () => b });
      var r = l(6029);
      l(91370);
      var i = l(55729),
        t = l(71024),
        o = l.n(t),
        s = l(95669),
        u = l.n(s),
        a = l(16150),
        c = l(69473),
        d = l(21126),
        _ = l(87365),
        f = l(87972),
        h = l(85761),
        w = l(48300);
      let v = o()(
        () =>
          Promise.all([
            l.e(1162),
            l.e(3489),
            l.e(8997),
            l.e(9985),
            l.e(5758),
            l.e(2406),
            l.e(6422),
            l.e(699),
            l.e(4818),
            l.e(3452),
            l.e(63),
            l.e(5954),
            l.e(4379),
            l.e(1291),
            l.e(5559),
            l.e(2229),
            l.e(4999),
            l.e(5287),
            l.e(9263),
            l.e(4989),
            l.e(3980),
          ])
            .then(l.bind(l, 3980))
            .then((e) => ({ default: e.Error404Page })),
        { loadableGenerated: { webpack: () => [3980] } }
      );
      function j() {
        let { entry: e, status: n } = (0, h.l)(),
          { useContentfulLiveUpdates: l } = (0, f.U)(),
          i = l(e);
        return i && 404 !== n
          ? (0, r.jsx)(_.b, { entry: i })
          : (0, r.jsx)(v, {});
      }
      function p(e) {
        let { locale: n, children: l } = e;
        return (0, r.jsx)(c.i, { locale: n, children: l });
      }
      var x = !0;
      function b(e) {
        var n;
        return (
          (0, i.useEffect)(() => {
            window.props = e;
          }, [e]),
          (0, r.jsx)(w.t, {
            location: e.request,
            framework: { Head: u() },
            children: (0, r.jsx)(a.g, {
              components: d.b,
              children: (0, r.jsx)(h.B, {
                ...e,
                children: (0, r.jsx)(p, {
                  locale: null == e ? void 0 : e.locale,
                  children: (0, r.jsx)(f.p, {
                    isPreview:
                      null == e
                        ? void 0
                        : null === (n = e.contentful) || void 0 === n
                        ? void 0
                        : n.isPreview,
                    children: (0, r.jsx)(j, {}),
                  }),
                }),
              }),
            }),
          })
        );
      }
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [5866, 3638, 7079, 636, 6593, 8792], () => n(60317)), (_N_E = e.O());
  },
]);
//# sourceMappingURL=[[...slug]]-1a77048a87b6ee53.js.map
