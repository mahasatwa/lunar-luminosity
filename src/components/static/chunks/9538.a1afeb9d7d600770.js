(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9538],
  {
    4322: () => {},
    27762: (e, r, s) => {
      "use strict";
      s.d(r, { X: () => l, v: () => i });
      var a = s(6029),
        t = s(55729),
        n = s(21009);
      let o = (0, t.createContext)([[], (e) => e]);
      function i(e) {
        let { children: r, programs: s } = e,
          [i, l] = (0, t.useState)([]),
          { pushDataLayer: c } = (0, n.v)();
        (0, t.useEffect)(() => {
          let e = new URLSearchParams(window.location.search).get("programs");
          e &&
            l(
              e
                .split(",")
                .map((e) =>
                  s.find((r) => r.id === e.replace("coursePage-", ""))
                )
                .filter((e) => !!e)
                .map((e) => ({ ...e, activeSessionIndex: 0 }))
            );
        }, [s]);
        let d = (0, t.useRef)(""),
          h = (0, t.useRef)();
        return (
          (0, t.useEffect)(() => {
            let e = new URLSearchParams(window.location.search),
              r = e.get("programs"),
              s = !1;
            if (!r || !i.length) return;
            let a = i.map((e) => e.id).join(",");
            if (
              (e.delete("programs"),
              e.set("programs", a),
              d.current.split(",").sort().join() === a.split(",").sort().join())
            )
              return;
            (s = !0),
              c({
                event: "program_finder_comparison",
                event_data: { compared_programs: a },
              }),
              (d.current = a);
            let t = e.toString(),
              n = new URL(
                ""
                  .concat(window.location.origin)
                  .concat(window.location.pathname, "?")
                  .concat(t)
              );
            h.current &&
              h.current !== n.href &&
              window.history.pushState({}, "", n.href),
              (h.current = n.href);
          }, [i, c]),
          (0, t.useEffect)(() => {
            window.onpopstate = (e) => {
              e.state && history.go(0);
            };
          }),
          (0, a.jsx)(o.Provider, { value: [i, l], children: r })
        );
      }
      function l() {
        let [e, r] = (0, t.useContext)(o);
        return {
          programsToCompare: e,
          setProgramsToCompare: r,
          addProgramToCompare: (e) => {
            r((r) => [...r, e]);
          },
          removeProgramToCompare: (e) => {
            r((r) => r.filter((r) => r.id !== e.id));
          },
          reorderProgramToCompare: (e, s) => {
            r((r) => {
              let a = r.findIndex((r) => r.id === e.id);
              return r.splice(a, 1), r.splice(a + s, 0, e), [...r];
            });
          },
        };
      }
    },
    39868: () => {},
    60920: (e, r, s) => {
      "use strict";
      s.d(r, { l: () => a });
      let a = (e) => {
        var r;
        return null === (r = e.Entry) || void 0 === r
          ? void 0
          : r.some(
              (e) =>
                "teaseRowProgramCards" === e.sys.contentType.sys.id ||
                "teaseRowCourseCards" === e.sys.contentType.sys.id
            );
      };
    },
    62302: (e, r, s) => {
      "use strict";
      s.d(r, { X: () => o });
      var a = s(6029);
      s(39868);
      var t = s(50212),
        n = s(80422);
      function o(e) {
        let {
            title: r,
            subTitle: s,
            description: o,
            cta: i,
            editAttributes: l,
          } = e,
          c = (r && r.length > 50) || (s && s.length > 50),
          d = (0, t.A)(
            "hbs-section-header__hgroup",
            c ? "hbs-section-header__hgroup--long" : ""
          ),
          h = o || i;
        return (0, a.jsx)("div", {
          className: "hbs-global-align-full hbs-component--section-header",
          children: (0, a.jsx)("div", {
            className: "hbs-section-header",
            children: (0, a.jsxs)("div", {
              className: "hbs-section-header-inner",
              children: [
                (0, a.jsxs)("div", {
                  className: d,
                  children: [
                    r &&
                      (0, a.jsx)("h2", {
                        className: "hbs-section-header__title",
                        ...(null == l ? void 0 : l.title),
                        children: r,
                      }),
                    s &&
                      (0, a.jsx)("p", {
                        className: "hbs-section-header__subtitle",
                        ...(null == l ? void 0 : l.subTitle),
                        children: s,
                      }),
                  ],
                }),
                h &&
                  (0, a.jsx)("div", {
                    className: (0, t.A)(
                      "hbs-section-header__dek",
                      !o && "hbs-section-header__dek--no-desc"
                    ),
                    children: (0, a.jsxs)("div", {
                      ...(null == l ? void 0 : l.description),
                      children: [
                        o,
                        i && (0, a.jsx)(n.l, { ...i, isSmall: !0 }),
                      ],
                    }),
                  }),
              ],
            }),
          }),
        });
      }
    },
    62517: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => d });
      var a = s(6029),
        t = s(18570),
        n = s(16682),
        o = s(93949),
        i = s(87365),
        l = s(87972),
        c = s(85761);
      let d = (0, t.i)((e) => {
        var r, s;
        let t,
          { entry: d, options: h } = e,
          { getEntries: m } = (0, l.U)(),
          p = (0, c.l)(),
          u = [],
          g = (0, n.I)("knowledgeBaseArticlePage", d),
          _ = (0, n.I)("archivePage", d),
          v = (0, n.I)("articlePage", d),
          b = (0, n.I)("detailPage", d),
          f = (0, n.I)("databasePage", d),
          y = (0, n.I)("datasetPage", d),
          x = (0, n.I)("articlePageSettings", d);
        t = g
          ? m(d.fields.body)
          : _
          ? (null == h ? void 0 : h.key)
            ? m(d.fields[h.key])
            : []
          : v || b || f || y || x || (0, n.I)("eventDetailPage", d)
          ? m(d.fields.preFooterContent)
          : m(d.fields.blocks);
        let j =
          null === (r = p.session) || void 0 === r ? void 0 : r.user.roles;
        if (null == j ? void 0 : j.length) {
          let e =
            null == t
              ? void 0
              : t.filter((e) => {
                  if (
                    (0, n.I)("audienceBlocksWrapper", e) &&
                    e.fields.permissions
                  ) {
                    let r = m(e.fields.permissions),
                      s = !1;
                    return (
                      r.forEach((e) => {
                        let r = e.fields.roleCode;
                        r && j.includes(r) && (s = !0);
                      }),
                      s
                    );
                  }
                  return !1;
                });
          (null == e ? void 0 : e.length) &&
            (t =
              m(
                null === (s = e[0]) || void 0 === s ? void 0 : s.fields.blocks
              ) || []);
        }
        return (
          null == t ||
            t.forEach((e) => {
              if ((0, n.I)("pageSectionTheme", e))
                u.push({ theme: e.fields.theme, blocks: [] });
              else if (0 === u.length)
                u.push({ blocks: [e], theme: g ? "white" : void 0 });
              else {
                var r;
                null === (r = u[u.length - 1]) ||
                  void 0 === r ||
                  r.blocks.push(e);
              }
            }),
          (0, a.jsx)(a.Fragment, {
            children: u.map((e, r) => {
              let { theme: s, blocks: t } = e;
              if (t.length < 1) return null;
              let n = [],
                l = !1;
              return (
                t.forEach((e, r) => {
                  let s = { headerAbove: l };
                  n.push((0, a.jsx)(i.b, { entry: e, options: s }, r)),
                    ("pageSectionHeader" === e.sys.contentType.sys.id ||
                      "sideBySideSectionIntro" === e.sys.contentType.sys.id) &&
                      (l = !0);
                }),
                (0, a.jsx)(o.d, { theme: s, children: n }, r)
              );
            }),
          })
        );
      });
    },
    73339: () => {},
    90474: (e, r, s) => {
      "use strict";
      s.d(r, { a: () => d });
      var a = s(6029);
      s(4322);
      var t = s(50212),
        n = s(24999),
        o = s(80422),
        i = s(27762),
        l = s(21009),
        c = s(55729);
      function d(e) {
        let {
            programFinderUrl: r,
            isHBSOnline: s,
            requestInfoUrl: d,
            dataLayer: h = {
              event: "program_finder_result_click",
              event_data: {},
            },
          } = e,
          [m, p] = (0, c.useState)(!1),
          { programsToCompare: u, removeProgramToCompare: g } = (0, i.X)(),
          { pushDataLayer: _ } = (0, l.v)(),
          [v, b] = (0, c.useState)(u.length);
        if (
          (v !== u.length && (b(u.length), v < u.length && p(!1)), u.length < 1)
        )
          return null;
        let f = (0, t.A)(
            "hbs-program-comparison-tray__inner",
            m && "hbs-program-comparison-tray__inner--hidden",
            s && "hbs-program-comparison-tray__inner--online"
          ),
          y = u.map((e) => e.id).join(","),
          x = new URL(r || window.location.href, window.location.origin);
        return (
          y && x.searchParams.set("programs", y),
          (0, a.jsxs)("div", {
            className: (0, t.A)(
              "hbs-program-comparison-tray",
              s && "hbs-program-comparison-tray--online"
            ),
            children: [
              (0, a.jsxs)("h2", {
                className: "hbs-global-visually-hidden",
                children: ["Compare ", s ? "Courses" : "Programs"],
              }),
              (0, a.jsxs)("button", {
                onClick: () => p(!1),
                className: (0, t.A)(
                  "hbs-program-comparison-tray__fab",
                  !m && "hbs-program-comparison-tray__fab--hidden"
                ),
                children: [
                  (0, a.jsx)(n.I, {
                    name: "compare",
                    className: "hbs-program-comparison-tray__fab-icon",
                  }),
                  (0, a.jsx)("span", {
                    className: "hbs-global-visually-hidden",
                    children: "Show comparison tray",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: f,
                children: [
                  (0, a.jsxs)("button", {
                    onClick: () => p(!0),
                    className: "hbs-program-comparison-tray__hide",
                    "aria-label": "Hide comparison tray",
                    children: ["Hide", (0, a.jsx)(n.I, { name: "close" })],
                  }),
                  (0, a.jsx)("div", {
                    className: "hbs-program-comparison-tray__track",
                    children: (0, a.jsx)("ul", {
                      className: "hbs-program-comparison-tray__list",
                      children: u.map((e) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className: "hbs-program-comparison-tray__item",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "hbs-program-comparison-tray__item-title",
                                children: e.title,
                              }),
                              (0, a.jsxs)("button", {
                                onClick: () => {
                                  g(e),
                                    h.event ||
                                      (h.event = "program_finder_result_click"),
                                    h.event_data
                                      ? ((h.event_data.program_action =
                                          "compare remove click"),
                                        (h.event_data.program_name = e.title),
                                        _(h))
                                      : (h.event_data = {
                                          program_action:
                                            "compare remove click",
                                          program_name: e.title,
                                        }),
                                    _(h);
                                },
                                className:
                                  "hbs-program-comparison-tray__remove",
                                children: [
                                  (0, a.jsxs)("span", {
                                    className: "hbs-global-visually-hidden",
                                    children: ["Remove ", e.title],
                                  }),
                                  (0, a.jsx)(n.I, { name: "close" }),
                                ],
                              }),
                            ],
                          },
                          e.id
                        )
                      ),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "hbs-program-comparison-tray__actions",
                    children: [
                      (0, a.jsxs)(o.l, {
                        className: (0, t.A)(
                          "hbs-program-comparison-tray__compare",
                          u.length < 2 &&
                            "hbs-program-comparison-tray__compare--disabled"
                        ),
                        href: x.toString(),
                        isSmall: !0,
                        type: "primary-button",
                        children: ["Compare ", s ? "Courses" : "Programs"],
                      }),
                      s &&
                        d &&
                        (0, a.jsx)(o.l, {
                          className: "hbs-program-comparison-tray__compare",
                          href: d,
                          isSmall: !0,
                          type: "secondary-button",
                          icon: "arrow",
                          children: "Request Info",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    93949: (e, r, s) => {
      "use strict";
      s.d(r, { d: () => i });
      var a = s(6029);
      s(73339);
      var t = s(50212),
        n = s(90392),
        o = s(62302);
      function i(e) {
        let {
            children: r,
            theme: s = n.du,
            spacing: i = "both",
            header: l,
          } = e,
          c = (0, t.A)(
            "hbs-page-section",
            "both" !== i && "hbs-page-section--".concat(i)
          );
        return (0, a.jsx)("section", {
          className: c,
          "data-theme": s,
          "data-region": "p__page-section",
          children: (0, a.jsx)("div", {
            className: "hbs-page-section__width",
            children: (0, a.jsxs)("div", {
              className: "hbs-page-section__content",
              children: [l && (0, a.jsx)(o.X, { ...l }), r],
            }),
          }),
        });
      }
    },
    99952: (e, r, s) => {
      "use strict";
      s.d(r, { U: () => l });
      var a = s(6029),
        t = s(87972),
        n = s(3050),
        o = s(16682),
        i = s(39263);
      function l(e) {
        let { getEntry: r, createEditAttributes: s } = (0, t.U)(),
          l = [];
        if (!Array.isArray(e)) return l;
        let c = (e) => {
          if (e.nodeType === n.XD.EMBEDDED_ENTRY) {
            let t = r(e.data.target);
            (0, o.I)("footnote", t) &&
              l.push({
                children: (0, a.jsx)(i.Q, {
                  document: t.fields.text,
                  disableParagraphs: !0,
                }),
                editAttributes: s({ entry: t, fieldId: "text" }),
              });
          }
          "content" in e && e.content.forEach(c);
        };
        return (
          e.forEach((e) => {
            let s = r(e);
            if ((0, o.I)("richText", s)) {
              var a, t;
              null === (t = s.fields) ||
                void 0 === t ||
                null === (a = t.text) ||
                void 0 === a ||
                a.content.forEach((e) => {
                  e.content.forEach((e) => c(e));
                });
            }
          }),
          l
        );
      }
    },
  },
]);
//# sourceMappingURL=9538.a1afeb9d7d600770.js.map
