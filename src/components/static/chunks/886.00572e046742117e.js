(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [886],
  {
    886: (s, i, e) => {
      "use strict";
      e.r(i), e.d(i, { ContentfulSideBySideList: () => o });
      var t = e(6029),
        l = e(18570),
        d = e(55729);
      e(14548);
      var a = e(50212),
        n = e(80422),
        r = e(22230);
      function c(s) {
        let { lists: i } = s;
        return (0, t.jsx)("div", {
          className: "hbs-global-align-full hbs-component--side-by-side-list",
          "data-region": "cb__side-by-side-list",
          children: (0, t.jsx)("div", {
            className: "hbs-side-by-side-list",
            children: i.map((s, i) => {
              let {
                title: e,
                subtitle: l,
                items: c,
                statistics: u,
                editAttributes: h,
              } = s;
              if (!e) return null;
              let b = (0, a.A)(
                "hbs-side-by-side-list__items hbs-side-by-side-list__content",
                c && c.length > 3 && "hbs-side-by-side-list__content--long"
              );
              return (0, t.jsxs)(
                "div",
                {
                  className: "hbs-side-by-side-list__list-wrapper",
                  children: [
                    (0, t.jsxs)("header", {
                      className: "hbs-side-by-side-list__header",
                      children: [
                        (0, t.jsx)("h2", {
                          ...(null == h ? void 0 : h.title),
                          className: "hbs-side-by-side-list__title",
                          children: e,
                        }),
                        l &&
                          (0, t.jsx)("p", {
                            ...(null == h ? void 0 : h.subtitle),
                            className: "hbs-side-by-side-list__subtitle",
                            children: l,
                          }),
                      ],
                    }),
                    c &&
                      c.length > 0 &&
                      (0, t.jsx)("div", {
                        className: b,
                        children: (0, t.jsx)("ul", {
                          className: "hbs-side-by-side-list__list",
                          children: c.map((s, i) =>
                            (0, t.jsx)(
                              "li",
                              {
                                className: "hbs-side-by-side-list__item",
                                children: (0, t.jsx)(n.l, {
                                  ...s,
                                  className: "hbs-side-by-side-list__link",
                                }),
                              },
                              i
                            )
                          ),
                        }),
                      }),
                    u &&
                      u.length > 0 &&
                      (0, t.jsx)("div", {
                        className:
                          "hbs-statistics__list hbs-side-by-side-list__content",
                        children: u.map((s, i) =>
                          (0, t.jsx)(
                            "div",
                            {
                              className: "hbs-statistic__wrapper",
                              children: (0, d.createElement)(r.j, {
                                ...s,
                                key: i,
                              }),
                            },
                            i
                          )
                        ),
                      }),
                  ],
                },
                i
              );
            }),
          }),
        });
      }
      var u = e(39263),
        h = e(87972),
        b = e(91014),
        _ = e(16682);
      let f = (0, e(48249).j)((s) => {
          let { entry: i, createEditAttributes: e } = s;
          if (i.fields.value)
            return {
              figure: i.fields.value,
              description: (0, t.jsx)(u.Q, {
                document: i.fields.title,
                disableParagraphs: !0,
              }),
              unit: i.fields.suffix,
              prefixedUnit: i.fields.prefix,
              editAttributes: { value: e({ entry: i, fieldId: "value" }) },
            };
        }),
        o = (0, l.i)((s) => {
          let { entry: i, createEditAttributes: e } = s,
            { getEntries: l } = (0, h.U)(),
            d = { lists: [] },
            a = (s, d, a) => {
              if (!a) return;
              let n = { items: [], statistics: [], editAttributes: {} };
              return (
                s &&
                  i.fields[s] &&
                  ((n.title = (0, t.jsx)(u.Q, {
                    document: i.fields[s],
                    disableParagraphs: !0,
                  })),
                  (n.editAttributes.title = e({ entry: i, fieldId: s }))),
                d &&
                  i.fields[d] &&
                  ((n.subtitle = (0, t.jsx)(u.Q, {
                    document: i.fields[d],
                    disableParagraphs: !0,
                  })),
                  (n.editAttributes.subtitle = e({ entry: i, fieldId: d }))),
                l(a).forEach((s) => {
                  var i, e;
                  if ((0, _.I)("link", s)) {
                    let e = (0, b.T)(s);
                    e && (null === (i = n.items) || void 0 === i || i.push(e));
                  }
                  if ((0, _.I)("statistic", s)) {
                    let i = f(s);
                    i &&
                      (null === (e = n.statistics) ||
                        void 0 === e ||
                        e.push(i));
                  }
                }),
                n
              );
            },
            n = a(
              "firstListTitle",
              "firstListSubtitle",
              i.fields.firstListItems
            );
          n && d.lists.push(n);
          let r = a(
            "secondListTitle",
            "secondListSubtitle",
            i.fields.secondListItems
          );
          return r && d.lists.push(r), (0, t.jsx)(c, { ...d });
        });
    },
    14548: () => {},
    18570: (s, i, e) => {
      "use strict";
      e.d(i, { i: () => d });
      var t = e(6029),
        l = e(87972);
      function d(s) {
        return (i) => {
          let { entry: e, options: d } = i,
            { getEntry: a, createEditAttributes: n } = (0, l.U)(),
            r = a(e);
          return (null == r ? void 0 : r.fields) &&
            (null == r ? void 0 : r.metadata) &&
            (null == r ? void 0 : r.sys.id)
            ? (0, t.jsx)(s, { entry: r, options: d, createEditAttributes: n })
            : null;
        };
      }
    },
    22230: (s, i, e) => {
      "use strict";
      e.d(i, { j: () => l });
      var t = e(6029);
      function l(s) {
        let {
          figure: i,
          unit: e,
          description: l,
          prefixedUnit: d,
          editAttributes: a,
        } = s;
        return i
          ? (0, t.jsxs)("div", {
              className: "hbs-statistic",
              children: [
                (0, t.jsxs)("span", {
                  ...(null == a ? void 0 : a.value),
                  className: "hbs-statistic__figure",
                  children: [
                    d &&
                      (0, t.jsx)("sup", {
                        className:
                          "hbs-statistic__unit hbs-statistic__unit--prefix",
                        children: d,
                      }),
                    i.toLocaleString(),
                    e &&
                      (0, t.jsx)("sup", {
                        className: "hbs-statistic__unit",
                        children: e,
                      }),
                  ],
                }),
                l &&
                  (0, t.jsx)("div", {
                    ...(null == a ? void 0 : a.description),
                    className: "hbs-statistic__caption",
                    children: (0, t.jsx)("span", {
                      className: "hbs-statistic__caption-text",
                      children: l,
                    }),
                  }),
              ],
            })
          : null;
      }
      e(55600);
    },
    55600: () => {},
  },
]);
//# sourceMappingURL=886.00572e046742117e.js.map
