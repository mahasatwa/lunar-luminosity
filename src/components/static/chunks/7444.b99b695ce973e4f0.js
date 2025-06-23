(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7444],
  {
    36282: (e, l, a) => {
      "use strict";
      a.d(l, { G: () => t });
      var r = a(6029);
      a(52236);
      var s = a(50212),
        o = a(55729),
        n = a(24999);
      let t = (0, o.forwardRef)((e, l) => {
        let {
            searchTerm: a = "",
            handleSearch: t,
            handleKeydownSearch: c,
            handleMousedownSearch: d,
            onReset: i,
            hasDropdown: u = !1,
            placeholder: h,
            setShowDropdown: v,
            isSmall: p = !1,
            ..._
          } = e,
          [b, m] = (0, o.useState)(a);
        return (
          (0, o.useEffect)(() => {
            m(a);
          }, [a]),
          (0, r.jsxs)("div", {
            className: (0, s.A)("hbs-search-box", p && "hbs-search-box--small"),
            children: [
              (0, r.jsx)("input", {
                ..._,
                className: "hbs-search-box__input",
                type: "search",
                placeholder: h,
                value: b,
                "aria-label": h || "Search",
                onChange: function (e) {
                  e.currentTarget &&
                    (m(e.currentTarget.value),
                    u && (null == t || t(e.currentTarget.value)));
                },
                onKeyDown: c,
                onReset: () => {
                  m(""), i && i(), v && v(!1);
                },
                ref: l,
              }),
              (0, r.jsxs)("button", {
                className: "hbs-search-box__submit",
                type: "button",
                title: "Submit your search query.",
                "aria-expanded": _["aria-expanded"],
                "aria-controls": _["aria-controls"],
                onClick: () => {
                  null == v || v((e) => !e);
                },
                onMouseDown: d,
                tabIndex: -1,
                children: [
                  (0, r.jsx)("span", {
                    className: "hbs-global-visually-hidden",
                    children: "Search",
                  }),
                  (0, r.jsx)(n.I, { name: "search" }),
                ],
              }),
            ],
          })
        );
      });
    },
    47444: (e, l, a) => {
      "use strict";
      a.d(l, { H: () => v });
      var r = a(6029);
      a(84058);
      var s = a(50212),
        o = a(55729),
        n = a(27780),
        t = a(41272),
        c = a(80422),
        d = a(36282),
        i = a(24999),
        u = a(21009),
        h = a(85050);
      function v(e) {
        var l, a;
        let v,
          {
            searchTerm: p = "",
            handleSearch: _,
            hasDropdown: b = !1,
            onReset: m,
            placeholder: x,
            dropdownItems: g,
            dropdownSuggestions: w,
            dropdownCta: f,
            dropdownFooterLabel: y,
            isOverlay: j = !1,
            searchLink: N,
            onOpenCallback: k,
            editAttributes: S,
            site: A,
          } = e,
          [C, I] = (0, o.useState)(!1),
          [D, T] = (0, o.useState)(null),
          E = null !== D ? (null == g ? void 0 : g[D]) : null;
        C || null === D || T(null);
        let R = (0, o.useRef)(null),
          L = (0, o.useId)(),
          U = (0, o.useId)(),
          q = (0, o.useId)(),
          { pushDataLayer: H } = (0, u.v)(),
          K = {
            event: "search_results",
            event_data: {
              search_numresults: null == g ? void 0 : g.length,
              search_type: "search-primary",
              search_type_ahead: !1,
              top_search: !0,
              search_result_page_url: window.location.href,
              explore_search:
                null != A &&
                null !== (l = A.fields.title) &&
                void 0 !== l &&
                !!l.includes("Knowledge"),
            },
          },
          M = ((null == g ? void 0 : g.length) || 0) + 1,
          F = g && g.length > 0,
          P = (null == w ? void 0 : w.total) && w.total > 0,
          G = () => {
            if (R.current) {
              var e, l;
              let a = (
                  null === (e = R.current) || void 0 === e ? void 0 : e.value
                )
                  ? encodeURIComponent(
                      null === (l = R.current) || void 0 === l
                        ? void 0
                        : l.value
                    )
                  : void 0,
                r = N || "https://www.hbs.edu/search";
              window.location.href = a ? "".concat(r, "?q=").concat(a) : r;
            }
          },
          Q = (e) => {
            if (R.current || e) {
              var l, a;
              let r = (
                null === (l = R.current) || void 0 === l ? void 0 : l.value
              )
                ? encodeURIComponent(
                    null === (a = R.current) || void 0 === a ? void 0 : a.value
                  )
                : void 0;
              window.location.href = ""
                .concat(N || "https://www.hbs.edu/search", "?q=")
                .concat(r || e);
            }
          },
          B = {
            id: "".concat(L, "-").concat((null == g ? void 0 : g.length) || 0),
            "aria-selected":
              null !== D && D === (null == g ? void 0 : g.length),
            tabIndex: -1,
          },
          J = C || j,
          O = {},
          V = (0, r.jsxs)("div", {
            className: (0, s.A)(
              "hbs-search-box__dropdown",
              J && "hbs-search-box__dropdown--open",
              j && "hbs-search-box__dropdown--overlay"
            ),
            children: [
              (0, r.jsx)(d.G, {
                hasDropdown: b,
                searchTerm: p,
                handleSearch: function (e) {
                  e ? (null == _ || _(e), I(!0)) : "" !== e || j || I(!1);
                },
                placeholder: x,
                onReset: m,
                setShowDropdown: I,
                onKeyDown: (e) => {
                  switch (e.key) {
                    case "ArrowDown":
                      if (!F && !P) return;
                      I(!0),
                        T((e) => (null === e ? 0 : e === M - 1 ? 0 : e + 1)),
                        e.stopPropagation(),
                        e.preventDefault();
                      break;
                    case "ArrowUp":
                      if (!F && !P) return;
                      I(!0),
                        T((e) =>
                          null === e ? M - 1 : 0 === e ? M - 1 : e - 1
                        ),
                        e.stopPropagation(),
                        e.preventDefault();
                      break;
                    case "Escape":
                      C &&
                        !j &&
                        (e.stopPropagation(), e.preventDefault(), I(!1));
                      break;
                    case "Enter":
                      (null == E ? void 0 : E.url)
                        ? (window.location.href = E.url)
                        : I(!1);
                      break;
                    default:
                      "Home" !== e.key && "End" !== e.key && T(null);
                  }
                },
                handleKeydownSearch: (e) => {
                  if ("Enter" === e.key) {
                    var l;
                    e.preventDefault();
                    let a =
                      null == R
                        ? void 0
                        : null === (l = R.current) || void 0 === l
                        ? void 0
                        : l.value;
                    a && Q(a);
                  }
                },
                handleMousedownSearch: (e) => {
                  var l, a, r;
                  let s =
                    null === (l = e.currentTarget) || void 0 === l
                      ? void 0
                      : l.previousElementSibling;
                  (null === (r = e.currentTarget) || void 0 === r
                    ? void 0
                    : null === (a = r.previousElementSibling) || void 0 === a
                    ? void 0
                    : a.classList.contains("hbs-search-box__input")) &&
                    (e.preventDefault(), Q(s.value));
                },
                onFocus: () => {
                  var e, l;
                  null == R ||
                    null === (e = R.current) ||
                    void 0 === e ||
                    !e.value ||
                    (null == R
                      ? void 0
                      : null === (l = R.current) || void 0 === l
                      ? void 0
                      : l.value) === "" ||
                    !F ||
                    I(!0);
                },
                onBlur: () =>
                  void (
                    P ||
                    F ||
                    setTimeout(function () {
                      I(!1);
                    }, 300)
                  ),
                ref: R,
                autoFocus: j,
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": J,
                "aria-controls": L,
                "aria-activedescendant":
                  null !== D ? "".concat(L, "-").concat(D) : void 0,
              }),
              (0, r.jsx)("div", {
                id: L,
                tabIndex: -1,
                children:
                  J &&
                  (0, r.jsx)("div", {
                    className: (0, s.A)(
                      "hbs-search-box__dropdown-content",
                      (null == w ? void 0 : w.total) &&
                        w.total > 0 &&
                        "suggestions"
                    ),
                    children: (0, r.jsxs)("div", {
                      className: "hbs-search-box__dropdown-content-inner",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "hbs-search-box__dropdown-results-container",
                          children: [
                            F &&
                              (0, r.jsxs)("p", {
                                className:
                                  "hbs-search-box__dropdown-results-label",
                                id: U,
                                children: [
                                  "Top ",
                                  "" === p ? "Searches" : "Results",
                                ],
                              }),
                            g &&
                              g.length > 0 &&
                              (0, r.jsx)("ul", {
                                className: "hbs-search-box__dropdown-results",
                                "aria-labelledby": U,
                                children: g.map((e, l) => {
                                  var a, s, o, n, c;
                                  return (
                                    (O = e.display || {}),
                                    (null === (a = R.current) || void 0 === a
                                      ? void 0
                                      : a.value) &&
                                      (v = () => {
                                        var a;
                                        (K.event_data.search_term =
                                          null === (a = R.current) ||
                                          void 0 === a
                                            ? void 0
                                            : a.value),
                                          (K.event_data.search_result_title =
                                            e.title),
                                          (K.event_data.search_result_url =
                                            e.url),
                                          (K.event_data.search_result_position =
                                            l + 1),
                                          (K.event_data.search_numresults =
                                            void 0),
                                          H(K);
                                      }),
                                    (0, r.jsx)(
                                      "li",
                                      {
                                        className:
                                          "hbs-search-box__dropdown-result",
                                        children: (0, r.jsxs)(t.N, {
                                          href: e.url,
                                          className:
                                            "hbs-search-box__dropdown-result-link",
                                          tabIndex: -1,
                                          id: "".concat(L, "-").concat(l),
                                          onClick: v,
                                          "aria-selected": D === l,
                                          children: [
                                            (0, r.jsx)("p", {
                                              className:
                                                "hbs-search-box__dropdown-result-text",
                                              dangerouslySetInnerHTML: {
                                                __html:
                                                  (null === (s = e.highlight) ||
                                                  void 0 === s
                                                    ? void 0
                                                    : s.autocomplete) ||
                                                  e.autocomplete ||
                                                  (null === (o = e.highlight) ||
                                                  void 0 === o
                                                    ? void 0
                                                    : o.title) ||
                                                  e.title,
                                              },
                                            }),
                                            (null === (n = O.category) ||
                                            void 0 === n
                                              ? void 0
                                              : n.label) &&
                                              (0, r.jsx)("p", {
                                                className:
                                                  "hbs-search-box__dropdown-contentType",
                                                children:
                                                  null === (c = O.category) ||
                                                  void 0 === c
                                                    ? void 0
                                                    : c.label,
                                              }),
                                          ],
                                        }),
                                      },
                                      l
                                    )
                                  );
                                }),
                              }),
                            null == w
                              ? void 0
                              : null === (a = w.suggestions) || void 0 === a
                              ? void 0
                              : a.map((e, l) => {
                                  var a, s;
                                  return (
                                    e.group &&
                                    (null === (a = e.group) || void 0 === a
                                      ? void 0
                                      : a.length) > 0 &&
                                    (0, r.jsx)(
                                      "ul",
                                      {
                                        "aria-label": e.groupName,
                                        className:
                                          "hbs-search-box__dropdown-results group",
                                        "aria-labelledby": U,
                                        children:
                                          null == e
                                            ? void 0
                                            : null === (s = e.group) ||
                                              void 0 === s
                                            ? void 0
                                            : s.map(
                                                (l, a) => (
                                                  (v = () => {
                                                    var r;
                                                    (K.event_data.search_term =
                                                      null ===
                                                        (r = R.current) ||
                                                      void 0 === r
                                                        ? void 0
                                                        : r.value),
                                                      (K.event_data.search_result_title =
                                                        l.suggestion
                                                          ? (0, h.Q)(
                                                              l.suggestion
                                                            )
                                                          : l.suggestion),
                                                      (K.event_data.search_result_url =
                                                        l.conceptUri),
                                                      (K.event_data.search_result_position =
                                                        a + 1),
                                                      (K.event_data.explore_search_category =
                                                        e.groupName),
                                                      (K.event_data.search_type =
                                                        "search-secondary"),
                                                      (K.event_data.search_numresults =
                                                        void 0),
                                                      H(K);
                                                  }),
                                                  l.suggestion &&
                                                    (0, r.jsx)(
                                                      "li",
                                                      {
                                                        className:
                                                          "hbs-search-box__dropdown-result",
                                                        children: (0, r.jsx)(
                                                          t.N,
                                                          {
                                                            href: l.conceptUri,
                                                            className:
                                                              "hbs-search-box__dropdown-result-link",
                                                            onClick: v,
                                                            children: (0,
                                                            r.jsx)("p", {
                                                              className:
                                                                "hbs-search-box__dropdown-result-text",
                                                              dangerouslySetInnerHTML:
                                                                {
                                                                  __html:
                                                                    l.suggestion
                                                                      .replaceAll(
                                                                        "<b>",
                                                                        "<mark>"
                                                                      )
                                                                      .replaceAll(
                                                                        "</b>",
                                                                        "</mark>"
                                                                      ),
                                                                },
                                                            }),
                                                          },
                                                          a
                                                        ),
                                                      },
                                                      a
                                                    )
                                                )
                                              ),
                                      },
                                      l
                                    )
                                  );
                                }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "hbs-search-box__dropdown-footer",
                          children: [
                            f &&
                              (F || P
                                ? (0, r.jsx)(c.l, {
                                    ...f,
                                    ...B,
                                    type: "primary-button",
                                    isSmall: !0,
                                    onClick: G,
                                    "aria-describedby": q,
                                    className: "dropdown",
                                  })
                                : (0, r.jsx)(c.l, {
                                    ...f,
                                    ...B,
                                    type: "secondary-button",
                                    isSmall: !0,
                                    onClick: G,
                                    "aria-describedby": q,
                                    className: "dropdown",
                                    children: "View Results",
                                  })),
                            (0, r.jsx)("p", {
                              ...(null == S ? void 0 : S.dropdownFooterLabel),
                              className:
                                "hbs-search-box__dropdown-footer-label",
                              id: q,
                              children: y,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          });
        return j
          ? (0, r.jsxs)(n.bL, {
              onOpenChange: (e) => {
                e && k && k();
              },
              children: [
                (0, r.jsx)(n.l9, {
                  className: "hbs-search-box__overlay-trigger",
                  "aria-label": "Search",
                  children: (0, r.jsx)(i.I, { name: "search" }),
                }),
                (0, r.jsx)(n.ZL, {
                  children: (0, r.jsx)(n.hJ, {
                    className: "hbs-search-box__overlay",
                    children: (0, r.jsxs)(n.UC, {
                      className: "hbs-search-box__overlay-content",
                      children: [
                        V,
                        (0, r.jsx)(n.bm, {
                          className: "hbs-search-box__overlay-close",
                          children: "Close",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : V;
      }
    },
    52236: () => {},
    84058: () => {},
    85050: (e, l, a) => {
      "use strict";
      a.d(l, { Q: () => o });
      let r = [/<[^>]*>?/gm, /\u00AD/g, "&lt;", "&gt;"],
        s = [["&quot;", '"', "&apos;", "'", "&amp;", "&"]];
      function o(e) {
        let l = e;
        for (let e of ((l = l
          .replaceAll("<mark>", "[mark]")
          .replaceAll("</mark>", "[/mark]")),
        r))
          l = l.replaceAll(e, "");
        for (let [e, a] of s) l = l.replaceAll(e, a);
        return l
          .replaceAll("[mark]", "<mark>")
          .replaceAll("[/mark]", "</mark>");
      }
    },
  },
]);
//# sourceMappingURL=7444.b99b695ce973e4f0.js.map
