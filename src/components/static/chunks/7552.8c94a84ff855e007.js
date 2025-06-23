"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7552],
  {
    18570: (e, t, i) => {
      i.d(t, { i: () => n });
      var l = i(6029),
        d = i(87972);
      function n(e) {
        return (t) => {
          let { entry: i, options: n } = t,
            { getEntry: a, createEditAttributes: r } = (0, d.U)(),
            s = a(i);
          return (null == s ? void 0 : s.fields) &&
            (null == s ? void 0 : s.metadata) &&
            (null == s ? void 0 : s.sys.id)
            ? (0, l.jsx)(e, { entry: s, options: n, createEditAttributes: r })
            : null;
        };
      }
    },
    76812: (e, t, i) => {
      i.d(t, { h: () => s });
      var l = i(6029),
        d = i(48249),
        n = i(39263),
        a = i(74487),
        r = i(87972);
      let s = (0, d.j)((e) => {
        var t, i, d, s, u, o, f;
        let { entry: v, createEditAttributes: b } = e,
          { getEntryUrl: h, getEntries: m, getEntry: c } = (0, r.U)(),
          A = {
            title: (0, l.jsx)(n.Q, { document: v.fields.title }),
            subtitle: (0, l.jsx)(n.Q, { document: v.fields.subtitle }),
            align: v.fields.alignment,
            theme: v.fields.theme,
            mediaAlignment: v.fields.mediaAlignment,
            editAttributes: {
              block: b({ entry: v }),
              title: b({ entry: v, fieldId: "title" }),
              subtitle: b({ entry: v, fieldId: "subtitle" }),
            },
          };
        null === (t = m(v.fields.media)) ||
          void 0 === t ||
          t.forEach((e) => {
            let t = (0, a.N2)(e);
            t && (A.media ? A.media.push(t) : (A.media = [t]));
          }),
          v.fields.links &&
            (A.ctaList = {
              items: m(v.fields.links).map((e) => ({
                children: e.fields.text,
                href: h(e),
                editAttributes: b({ entry: e, fieldId: "text" }),
              })),
            });
        let p = c(v.fields.button);
        return (
          p &&
            ((A.primaryCta = {
              type: "primary-button",
              href: h(v.fields.button),
              "aria-label": p.fields.ariaLabel,
              children: p.fields.text,
              editAttributes: b({ entry: p, fieldId: "text" }),
            }),
            (null === (d = A.ctaList) || void 0 === d
              ? void 0
              : null === (i = d.items) || void 0 === i
              ? void 0
              : i[0]) &&
              ((A.secondaryCta = {
                editAttributes:
                  null === (s = A.ctaList.items[0]) || void 0 === s
                    ? void 0
                    : s.editAttributes,
                children:
                  null === (u = A.ctaList.items[0]) || void 0 === u
                    ? void 0
                    : u.children,
                href:
                  null === (o = A.ctaList.items[0]) || void 0 === o
                    ? void 0
                    : o.href,
                "aria-label":
                  null === (f = A.ctaList.items[0]) || void 0 === f
                    ? void 0
                    : f["aria-label"],
              }),
              (A.ctaList = void 0))),
          A
        );
      });
    },
    77552: (e, t, i) => {
      i.r(t), i.d(t, { ContentfulCtaBanner: () => b });
      var l = i(6029),
        d = i(18570),
        n = i(76812),
        a = i(71024),
        r = i.n(a),
        s = i(48249),
        u = i(39263);
      let o = (0, s.j)((e) => {
          let { entry: t, createEditAttributes: i } = e,
            d = (0, n.h)(t),
            a = {
              ...d,
              editAttributes: { ...(null == d ? void 0 : d.editAttributes) },
            };
          return (
            t.fields.overline &&
              ((a.overline = (0, l.jsx)(u.Q, { document: t.fields.overline })),
              a.editAttributes &&
                (a.editAttributes.overline = i({
                  entry: t,
                  fieldId: "overline",
                }))),
            a
          );
        }),
        f = r()(
          () =>
            Promise.all([i.e(4330), i.e(7842)])
              .then(i.bind(i, 47842))
              .then((e) => ({ default: e.Cta })),
          { loadableGenerated: { webpack: () => [47842] } }
        ),
        v = r()(
          () =>
            Promise.all([i.e(470), i.e(8805), i.e(4654)])
              .then(i.bind(i, 54654))
              .then((e) => ({ default: e.CtaCard })),
          { loadableGenerated: { webpack: () => [54654] } }
        ),
        b = (0, d.i)((e) => {
          var t;
          let { entry: i, options: d } = e,
            a =
              null !== (t = null == d ? void 0 : d.headerAbove) &&
              void 0 !== t &&
              t;
          if ("Large Text" === i.fields.style) {
            let e = (0, n.h)(i);
            return (
              e && (e.HeadingLevel = a ? "h3" : "h2"), (0, l.jsx)(f, { ...e })
            );
          }
          let r = o(i);
          return (
            r && (r.HeadingLevel = a ? "h3" : "h2"), (0, l.jsx)(v, { ...r })
          );
        });
    },
  },
]);
//# sourceMappingURL=7552.8c94a84ff855e007.js.map
