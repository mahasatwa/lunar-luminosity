(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9263],
  {
    1750: (e, i, t) => {
      "use strict";
      t.d(i, { m: () => r });
      var l = t(6029);
      t(78480);
      var s = t(83071),
        n = t(11291),
        a = t(24999);
      function r(e) {
        let { text: i, title: t, children: r } = e;
        return (0, l.jsxs)("div", {
          className: "hbs-tooltip",
          children: [
            (0, l.jsx)("div", {
              className: "hbs-tooltip--hover",
              children: (0, l.jsxs)(s.bL, {
                children: [
                  (0, l.jsx)(s.l9, {
                    className: "hbs-tooltip__trigger-wrapper",
                    children: (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: "hbs-tooltip-highlight",
                          children: r,
                        }),
                        (0, l.jsxs)("button", {
                          className: "hbs-tooltip__trigger",
                          "aria-describedby":
                            null == i
                              ? void 0
                              : i.toString().toLowerCase().replaceAll(" ", "_"),
                          children: [
                            (0, l.jsx)("span", {
                              className: "hbs-global-visually-hidden",
                              children: "More Info tooltip",
                            }),
                            (0, l.jsx)(a.I, {
                              name: "questionMark",
                              className: "hbs-tooltip__trigger-icon",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(s.ZL, {
                    children: (0, l.jsx)(s.UC, {
                      className: "hbs-tooltip__content",
                      side: "top",
                      sideOffset: 5,
                      children: (0, l.jsxs)("div", {
                        id:
                          null == i
                            ? void 0
                            : i.toString().toLowerCase().replaceAll(" ", "_"),
                        children: [
                          t &&
                            (0, l.jsx)("h5", {
                              className: "hbs-tooltip__title",
                              children: t,
                            }),
                          (0, l.jsx)("p", { children: i }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, l.jsx)("div", {
              className: "hbs-tooltip--popover",
              children: (0, l.jsxs)(n.bL, {
                children: [
                  (0, l.jsx)(n.l9, {
                    className: "hbs-tooltip__trigger-wrapper",
                    children: (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: "hbs-tooltip-highlight",
                          children: r,
                        }),
                        (0, l.jsxs)("div", {
                          className: "hbs-tooltip__trigger",
                          children: [
                            (0, l.jsx)("span", {
                              className: "hbs-global-visually-hidden",
                              children: i,
                            }),
                            (0, l.jsx)(a.I, {
                              name: "questionMark",
                              className: "hbs-tooltip__trigger-icon",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(n.ZL, {
                    children: (0, l.jsxs)(n.UC, {
                      className: "hbs-tooltip__content",
                      side: "top",
                      sideOffset: 5,
                      children: [
                        (0, l.jsxs)(n.bm, {
                          className: "hbs-tooltip__close",
                          children: [
                            (0, l.jsx)(a.I, {
                              name: "close",
                              className: "hbs-tooltip__close-icon",
                            }),
                            (0, l.jsx)("span", {
                              className: "hbs-global-visually-hidden",
                              children: "Close",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          children: [
                            t &&
                              (0, l.jsx)("h5", {
                                className: "hbs-tooltip__title",
                                children: t,
                              }),
                            (0, l.jsx)("p", { children: i }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    2608: (e, i, t) => {
      "use strict";
      t.d(i, { F: () => o });
      var l = t(6029);
      t(20326);
      var s = t(55729),
        n = t(50212),
        a = t(25866),
        r = t(85765),
        d = t(75287);
      function o(e) {
        let {
            header: i,
            align: t = "center",
            height: o,
            embedId: c,
            embedSourceTitle: h,
            HeadingLevel: u = "h2",
          } = e,
          f = (0, n.A)(
            "hbs-global-align-".concat(t),
            "hbs-component--data-wrapper-embed"
          );
        return (
          (0, s.useEffect)(() => {
            (0, r.k)("https://datawrapper.dwcdn.net/".concat(c, "/embed.js"), {
              dataTarget: "#datawrapper-vis-".concat(c),
            });
          }, [c]),
          (0, l.jsx)("div", {
            className: f,
            "data-region": "cb__data-wrapper-embed",
            children: (0, l.jsxs)("div", {
              className: "hbs-data-wrapper-embed",
              children: [
                i &&
                  (0, l.jsx)("div", {
                    className: "hbs-data-wrapper-embed__header",
                    children: (0, l.jsx)(a.B, { ...i, HeadingLevel: u }),
                  }),
                (0, l.jsx)("div", {
                  style: { minHeight: "".concat(o, "px") },
                  id: "datawrapper-vis-".concat(c),
                  children: (0, l.jsx)("noscript", {
                    children: (0, l.jsx)(d.Z, {
                      image: {
                        src: "https://datawrapper.dwcdn.net/".concat(
                          c,
                          "/full.png"
                        ),
                        alt: h,
                      },
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    9702: (e, i, t) => {
      "use strict";
      t.d(i, { O: () => a });
      var l = t(6029);
      t(27016);
      var s = t(50212),
        n = t(25866);
      function a(e) {
        let {
            header: i,
            embedSourceUrl: t,
            embedSourceTitle: a,
            height: r,
            align: d = "center",
            HeadingLevel: o = "h2",
          } = e,
          c = (0, s.A)(
            "hbs-global-align-".concat(d),
            "hbs-component--data-visualization-embed"
          );
        return (0, l.jsx)("div", {
          className: c,
          "data-region": "cb__data-visualization-embed",
          children: (0, l.jsxs)("div", {
            className: "hbs-data-visualization-embed",
            children: [
              i &&
                (0, l.jsx)("div", {
                  className: "hbs-data-visualization-embed__header",
                  children: (0, l.jsx)(n.B, { ...i, HeadingLevel: o }),
                }),
              t
                ? (0, l.jsx)("iframe", {
                    src: t,
                    width: "100%",
                    height: r || 400,
                    title: a,
                  })
                : null,
            ],
          }),
        });
      }
    },
    12384: () => {},
    16371: (e, i, t) => {
      "use strict";
      t.d(i, { h: () => r, w: () => a });
      var l = t(6029);
      t(36325);
      var s = t(41272),
        n = t(69473);
      function a(e) {
        var i, t;
        let { footnotes: a } = e,
          { t: r } = (0, n.c)();
        return a.length < 1
          ? null
          : (0, l.jsxs)("div", {
              className: "footnotes",
              children: [
                a[0] &&
                  (null === (i = a[0]) || void 0 === i
                    ? void 0
                    : i.disclaimer) &&
                  (0, l.jsx)(l.Fragment, {
                    children: a.map((e, i) => {
                      let { children: t, editAttributes: s } = e;
                      return (0, l.jsx)(
                        "div",
                        { id: "footnote-".concat(i + 1), ...s, children: t },
                        i
                      );
                    }),
                  }),
                a[0] &&
                  !(null === (t = a[0]) || void 0 === t
                    ? void 0
                    : t.disclaimer) &&
                  (0, l.jsx)("ol", {
                    children: a.map((e, i) => {
                      let { children: t, editAttributes: n } = e;
                      return (0, l.jsxs)(
                        "li",
                        {
                          id: "footnote-".concat(i + 1),
                          ...n,
                          children: [
                            t,
                            (0, l.jsxs)(s.N, {
                              target: "_self",
                              href: "#footnote-marker-".concat(i + 1),
                              className: "footnote__back",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "footnote__back__text",
                                  children: r("backToText"),
                                }),
                                " ↑",
                              ],
                            }),
                          ],
                        },
                        i
                      );
                    }),
                  }),
              ],
            });
      }
      function r(e) {
        let { index: i, editAttributes: t } = e;
        return (0, l.jsx)("span", {
          ...t,
          className: "footnote-marker",
          id: "footnote-marker-".concat(i),
          children: (0, l.jsx)(s.N, {
            target: "_self",
            href: "#footnote-".concat(i),
            className: "footnote-marker__link",
            "aria-label": "Scroll to Footnote ".concat(i),
            children: i,
          }),
        });
      }
    },
    18907: (e, i, t) => {
      "use strict";
      t.d(i, { G: () => a, s: () => r });
      var l = t(43071),
        s = t(34379);
      class n extends Error {
        constructor(...e) {
          super(...e), (this.status = 500), (this.info = {});
        }
      }
      async function a(e) {
        let { url: i, method: t, params: s, headers: a, body: r } = e,
          d = new URLSearchParams(),
          o = !1;
        if (
          (s &&
            Object.entries(s).forEach((e) => {
              let [i, t] = e;
              t && (d.set(i, t), (o = !0));
            }),
          i.startsWith("/"))
        ) {
          let e = new URL(location.href).searchParams.get(l.rW);
          e && d.set("environment", e);
        }
        o && (i += "?" + d.toString());
        let c = await fetch(i, { method: t, headers: a, body: r });
        if (!c.ok) {
          let e = new n("An error occurred while fetching the data.");
          throw ((e.info = await c.json()), (e.status = c.status), e);
        }
        return c.json();
      }
      function r(e) {
        return (0, s.Ay)(e || null, a, {
          revalidateOnMount: !0,
          refreshInterval: 0,
          refreshWhenHidden: !1,
          refreshWhenOffline: !1,
          revalidateOnReconnect: !1,
          revalidateIfStale: !1,
          revalidateOnFocus: !1,
          errorRetryCount: 3,
          errorRetryInterval: 1e3,
          keepPreviousData: !0,
          onSuccess: (e, i) => {
            console.info("useFetch success", { key: i, data: e });
          },
          onErrorRetry: (i, t, l, s, n) => {
            let { retryCount: a } = n;
            console.info("useFetch error", {
              key: t,
              error: i,
              props: e,
              retryCount: a,
            }),
              404 !== i.status &&
                (a >= 3 ||
                  setTimeout(() => {
                    console.info("useFetch retry", {
                      key: t,
                      props: e,
                      retryCount: a,
                    }),
                      s({ retryCount: a });
                  }, 5e3));
          },
        });
      }
    },
    20326: () => {},
    21785: (e, i, t) => {
      "use strict";
      t.d(i, { d: () => a });
      var l = t(55729);
      let { TABLET: s, DESKTOP: n } = t(84880).LO;
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [i, t] = (0, l.useState)({
            isMobile: !1,
            isTablet: !1,
            isDesktop: !1,
            ...e,
          });
        return (
          (0, l.useEffect)(() => {
            let e = window.matchMedia(
                "(min-width: "
                  .concat(s, "px) and (max-width: ")
                  .concat(n - 1, "px)")
              ),
              i = (e) => {
                e.matches
                  ? t({ isMobile: !1, isTablet: !0, isDesktop: !1 })
                  : window.innerWidth < n
                  ? t({ isMobile: !0, isTablet: !1, isDesktop: !1 })
                  : t({ isMobile: !1, isTablet: !1, isDesktop: !0 });
              };
            return (
              e.addEventListener("change", i),
              t({
                isMobile: !e.matches && window.innerWidth < n,
                isTablet: e.matches,
                isDesktop: !e.matches && window.innerWidth > s,
              }),
              () => {
                e.removeEventListener("change", i);
              }
            );
          }, []),
          i
        );
      }
    },
    25231: (e, i, t) => {
      "use strict";
      t.d(i, { t: () => n });
      var l = t(48249),
        s = t(87972);
      let n = (0, l.j)((e) => {
        let { entry: i, createEditAttributes: t } = e,
          { getEntryUrl: l } = (0, s.U)();
        return {
          href: l(i),
          "aria-label": i.fields.ariaLabel,
          children: i.fields.text,
          editAttributes: t({ entry: i, fieldId: "text" }),
        };
      });
    },
    25866: (e, i, t) => {
      "use strict";
      t.d(i, { B: () => a });
      var l = t(6029);
      t(26808);
      var s = t(50212),
        n = t(80422);
      function a(e) {
        let {
          align: i,
          className: t,
          description: a,
          isSmall: r = !0,
          link: d,
          linkText: o,
          ariaLabel: c,
          title: h,
          anchored: u,
          borderPosition: f = "top",
          HeadingLevel: v = "h2",
          titleId: m,
          editAttributes: p,
        } = e;
        if (!h) return null;
        let x = d
          ? (0, l.jsx)(n.l, {
              editAttributes: null == p ? void 0 : p.linkText,
              href: d,
              "aria-label": c,
              isSmall: !0,
              children: o,
            })
          : null;
        return (0, l.jsx)("div", {
          className: (0, s.A)(
            i && "hbs-global-align-".concat(i),
            t,
            "hbs-component--component-header"
          ),
          children: (0, l.jsx)("div", {
            className: (0, s.A)(
              "hbs-component-header",
              "hbs-component-header--".concat(r ? "small" : "large"),
              !r && u && "hbs-component-header--anchored",
              !r && "bottom" === f && "hbs-component-header--border-".concat(f),
              r && "hbs-component-header--border-".concat(f)
            ),
            children: (0, l.jsxs)("div", {
              className: "hbs-component-header__inner",
              children: [
                (0, l.jsxs)("div", {
                  className: "hbs-component-header__wrapper",
                  children: [
                    (0, l.jsx)(v, {
                      className: "hbs-component-header__title",
                      id: m,
                      ...(null == p ? void 0 : p.title),
                      children: h,
                    }),
                    a &&
                      (0, l.jsx)("span", {
                        ...(null == p ? void 0 : p.description),
                        className: "hbs-component-header__description",
                        children: a,
                      }),
                  ],
                }),
                x &&
                  (r
                    ? x
                    : (0, l.jsx)("div", {
                        className: "hbs-component-header__cta",
                        children: x,
                      })),
              ],
            }),
          }),
        });
      }
    },
    26660: (e, i, t) => {
      "use strict";
      t.d(i, { R: () => a });
      var l = t(48249),
        s = t(87972);
      let n = (e) => {
          if (e)
            return e
              .toLowerCase()
              .replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, i) {
                return 0 === i ? e : e.toUpperCase();
              })
              .replace(/\s+/g, "");
        },
        a = (0, l.j)((e) => {
          var i;
          let { entry: t, createEditAttributes: l } = e,
            { getEntries: a } = (0, s.U)(),
            r = { links: [] };
          return (
            (null == t ? void 0 : t.fields) &&
              (null === (i = a(t.fields.socialMediaLink)) ||
                void 0 === i ||
                i.forEach((e) => {
                  r.links.push({
                    href: e.fields.url,
                    title: "HBS " + e.fields.socialMedia,
                    icon: n(e.fields.socialMedia),
                    ariaLabel: e.fields.ariaLabel,
                    editAttributes: l({ entry: e, fieldId: "url" }),
                  });
                })),
            r
          );
        });
    },
    26808: () => {},
    27016: () => {},
    36325: () => {},
    38388: (e, i, t) => {
      "use strict";
      t.d(i, { a: () => r });
      var l = t(6029);
      t(80542);
      var s = t(50212),
        n = t(41272),
        a = t(75287);
      function r(e) {
        let {
            align: i,
            quote: t,
            theme: r,
            attribution: d,
            hideQuoteMarks: o,
            editAttributes: c,
          } = e,
          h = (0, s.A)(
            i && "hbs-global-align-".concat(i),
            "hbs-component--pull-quote"
          ),
          u = (null == d ? void 0 : d.titles) || [],
          f = (0, s.A)(
            r
              ? "hbs-pullquote--themed".concat("wide" === i ? "__wide" : "")
              : "",
            "hbs-pullquote"
          );
        return (0, l.jsx)("div", {
          className: h,
          "data-theme": r,
          children: (0, l.jsx)("div", {
            className: "hbs-pullquote__content",
            children: (0, l.jsxs)("blockquote", {
              className: f,
              children: [
                (0, l.jsx)("div", {
                  className: (0, s.A)("hbs-pullquote__text", o && "hidequote"),
                  ...(null == c ? void 0 : c.quote),
                  children: t,
                }),
                d &&
                  (0, l.jsxs)("div", {
                    className: "hbs-pull-quote__attribution",
                    ...(null == c ? void 0 : c.attribution),
                    children: [
                      (0, l.jsx)(a.Z, { image: d.portrait }),
                      (0, l.jsxs)("span", {
                        children: [
                          d.link
                            ? (0, l.jsx)(n.N, {
                                href: d.link,
                                children: d.name,
                              })
                            : d.name,
                          u.length > 0 &&
                            (0, l.jsx)("span", {
                              children: "; ".concat(u.join(", ")),
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          }),
        });
      }
    },
    39263: (e, i, t) => {
      "use strict";
      t.d(i, { Q: () => C, v: () => R });
      var l = t(6029),
        s = t(55729),
        n = t(3050),
        a = t(84797),
        r = t(16682),
        d = t(41272),
        o = t(75287),
        c = t(74487),
        h = t(16371),
        u = t(1750),
        f = t(25231),
        v = t(87972),
        m = t(80422),
        p = t(51102),
        x = t(91014),
        b = t(61778),
        j = t(48249),
        g = t(18907);
      let _ = (0, j.j)((e) => {
        var i;
        let { entry: t, createEditAttributes: s } = e;
        if (!t.fields.uri) return;
        let { data: n } = (0, g.s)({
          url: "/api/fetch/tooltip-graph",
          params: { uri: t.fields.uri, type: "Companies" },
        });
        if (!n) return;
        let a = (0, l.jsx)("ul", {
          children: n.publications.map((e, i) =>
            (0, l.jsx)(
              "li",
              {
                children: (0, l.jsx)(d.N, {
                  href: e.link,
                  target: e.target,
                  children: e.text,
                }),
              },
              i
            )
          ),
        });
        return {
          title: t.fields.title,
          children:
            null !== (i = t.fields.highlightedText) && void 0 !== i
              ? i
              : n.search,
          text: a,
          editAttributes: {
            title: s({ entry: t, fieldId: "title" }),
            children: s({ entry: t, fieldId: "highlightedText" }),
          },
        };
      });
      var N = t(73427),
        k = t(85761),
        y = t(38388),
        I = t(54415),
        w = t(9702),
        A = t(2608),
        T = t(55070),
        L = t(74680),
        E = t(12530),
        H = t(48470);
      function R(e) {
        if ("string" != typeof e) return "";
        let i = e.split("\n");
        return i.map((e, t) =>
          (0, l.jsxs)(
            s.Fragment,
            { children: [e, t !== i.length - 1 && (0, l.jsx)("br", {})] },
            t
          )
        );
      }
      function C(e) {
        let { document: i, ...t } = e,
          { includes: s } = (0, k.l)(),
          {
            createEditAttributes: j,
            getEntry: g,
            getEntryUrl: D,
            getEntries: O,
          } = (0, v.U)();
        if (
          !i ||
          !Array.isArray(null == i ? void 0 : i.content) ||
          i.content.length < 1
        )
          return null;
        let P = i.content[0];
        if (
          1 === i.content.length &&
          (null == P ? void 0 : P.nodeType) === n.nA.PARAGRAPH
        ) {
          if (!P.content || 0 === P.content.length) return null;
          let e = P.content[0];
          if (
            1 === P.content.length &&
            (null == e ? void 0 : e.nodeType) === "text" &&
            (!e.value || (e.value && "" === e.value.trim()))
          )
            return null;
        }
        let S = 0,
          M = i.content.filter((e) => e.nodeType === n.nA.HEADING_2).length,
          U = i.content.filter((e) => e.nodeType === n.nA.HEADING_3).length,
          W = i.content.filter((e) => e.nodeType === n.nA.HEADING_4).length,
          G = i.content.filter((e) => e.nodeType === n.nA.HEADING_5).length,
          q = i.content.filter((e) => e.nodeType === n.nA.HEADING_6).length,
          Q = [];
        0 !== M && Q.push("h2"),
          0 !== U && Q.push("h3"),
          0 !== W && Q.push("h4"),
          0 !== G && Q.push("h5"),
          0 !== q && Q.push("h6");
        let B = ["h2", "h3", "h4", "h5", "h6", "h6", "h6", "h6"],
          F = (e) => {
            let { children: i } = e;
            return (0, l.jsx)("strong", { children: i });
          },
          z = (e) => {
            let { children: i } = e;
            return (0, l.jsx)("em", { children: i });
          };
        return (0, a.i)(i, {
          renderMark: {
            [n.j7.BOLD]: (e) => (0, l.jsx)(F, { children: e }),
            [n.j7.ITALIC]: (e) => (0, l.jsx)(z, { children: e }),
          },
          renderText: R,
          renderNode: {
            [n.XD.HYPERLINK]: (e, i) => {
              if (!e.data.uri) return null;
              if (e.nodeType === n.XD.HYPERLINK) {
                let t = e.data.uri;
                if (t) return (0, l.jsx)(d.N, { href: t, children: i });
              }
            },
            [n.XD.ASSET_HYPERLINK]: (e, i) => {
              if (e.nodeType === n.XD.ASSET_HYPERLINK) {
                if (!e.data.target) return null;
                let t = (0, N.s)({ includes: s, asset: e.data.target });
                if (t) return (0, l.jsx)(d.N, { href: t, children: i });
              }
              return null;
            },
            [n.XD.ENTRY_HYPERLINK]: (e, i) => {
              var t, s;
              if (
                !(null == e
                  ? void 0
                  : null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.target)
              )
                return null;
              if (e.nodeType === n.XD.ENTRY_HYPERLINK) {
                let t = D(
                  null == e
                    ? void 0
                    : null === (s = e.data) || void 0 === s
                    ? void 0
                    : s.target
                );
                if (t) return (0, l.jsx)(d.N, { href: t, children: i });
              }
            },
            [n.nA.PARAGRAPH]: (e, i) =>
              (null == t ? void 0 : t.disableParagraphs)
                ? i
                : (0, l.jsx)("p", { children: i }),
            [n.nA.HEADING_2]: (e, i) => {
              if ((null == t ? void 0 : t.resetHeaders) && B[Q.indexOf("h2")]) {
                let e =
                  "h2" === t.resetHeaders
                    ? B[Q.indexOf("h2")]
                    : "h3" === t.resetHeaders
                    ? B[Q.indexOf("h2") + 1]
                    : "h4" === t.resetHeaders
                    ? B[Q.indexOf("h2") + 2]
                    : B[Q.indexOf("h2") + 3];
                return (0, l.jsx)(e, { className: "hbs-text-h2", children: i });
              }
              return (0, l.jsx)("h2", { children: i });
            },
            [n.nA.HEADING_3]: (e, i) => {
              if ((null == t ? void 0 : t.resetHeaders) && B[Q.indexOf("h3")]) {
                let e =
                  "h2" === t.resetHeaders
                    ? B[Q.indexOf("h3")]
                    : "h3" === t.resetHeaders
                    ? B[Q.indexOf("h3") + 1]
                    : "h4" === t.resetHeaders
                    ? B[Q.indexOf("h3") + 2]
                    : B[Q.indexOf("h3") + 3];
                return (0, l.jsx)(e, { className: "hbs-text-h3", children: i });
              }
              return (0, l.jsx)("h3", { children: i });
            },
            [n.nA.HEADING_4]: (e, i) => {
              if ((null == t ? void 0 : t.resetHeaders) && B[Q.indexOf("h4")]) {
                let e =
                  "h2" === t.resetHeaders
                    ? B[Q.indexOf("h4")]
                    : "h3" === t.resetHeaders
                    ? B[Q.indexOf("h4") + 1]
                    : "h4" === t.resetHeaders
                    ? B[Q.indexOf("h4") + 2]
                    : B[Q.indexOf("h4") + 3];
                return (0, l.jsx)(e, { className: "hbs-text-h4", children: i });
              }
              return (0, l.jsx)("h4", { children: i });
            },
            [n.nA.HEADING_5]: (e, i) => {
              if ((null == t ? void 0 : t.resetHeaders) && B[Q.indexOf("h5")]) {
                let e =
                  "h2" === t.resetHeaders
                    ? B[Q.indexOf("h5")]
                    : "h3" === t.resetHeaders
                    ? B[Q.indexOf("h5") + 1]
                    : "h4" === t.resetHeaders
                    ? B[Q.indexOf("h5") + 2]
                    : B[Q.indexOf("h5") + 3];
                return (0, l.jsx)(e, { className: "hbs-text-h5", children: i });
              }
              return (0, l.jsx)("h5", { children: i });
            },
            [n.nA.HEADING_6]: (e, i) => {
              if ((null == t ? void 0 : t.resetHeaders) && B[Q.indexOf("h6")]) {
                let e =
                  "h2" === t.resetHeaders
                    ? B[Q.indexOf("h6")]
                    : "h3" === t.resetHeaders
                    ? B[Q.indexOf("h6") + 1]
                    : "h4" === t.resetHeaders
                    ? B[Q.indexOf("h6") + 2]
                    : B[Q.indexOf("h6") + 3];
                return (0, l.jsx)(e, { className: "hbs-text-h6", children: i });
              }
              return (0, l.jsx)("h6", { children: i });
            },
            [n.nA.HR]: () => (0, l.jsx)("hr", { "aria-hidden": "true" }),
            [n.XD.EMBEDDED_ENTRY]: (e) => {
              var i;
              let t = g(
                null == e
                  ? void 0
                  : null === (i = e.data) || void 0 === i
                  ? void 0
                  : i.target
              );
              if ((0, r.I)("link", t))
                return (0, l.jsx)(d.N, { ...(0, f.t)(t) });
              if ((0, r.I)("footnote", t))
                return (
                  S++,
                  (0, l.jsx)(h.h, {
                    index: S,
                    editAttributes: j({ entry: t, fieldId: "text" }),
                  })
                );
              if ((0, r.I)("tooltip", t)) {
                let e = _(t);
                if (!(null == e ? void 0 : e.text)) return;
                return (0, l.jsx)(u.m, { ...e });
              }
            },
            [n.nA.EMBEDDED_ENTRY]: (e) => {
              var i, t;
              let s = g(
                null == e
                  ? void 0
                  : null === (i = e.data) || void 0 === i
                  ? void 0
                  : i.target
              );
              if ((0, r.I)("image", s))
                return (0, l.jsx)(o.Z, { ...(0, c.$2)(s) });
              if ((0, r.I)("mediaCarousel", s)) {
                let e = g(s.fields.header),
                  i = {
                    headerContent: e ? (0, T.V)(e) : void 0,
                    items: [],
                    align: s.fields.alignment,
                    HeadingLevel: "h3",
                  };
                return (
                  O(s.fields.mediaCarouselItem).forEach((e) => {
                    let t = (0, c.$2)(e.fields.media),
                      l = (0, x.T)(e.fields.ctaLink);
                    t && i.items.push({ media: t, ctaLink: l });
                  }),
                  (0, l.jsx)("div", {
                    className: "embedded-carousel",
                    children: (0, l.jsx)(H.X, { ...i }),
                  })
                );
              }
              if ((0, r.I)("video", s))
                return (0, l.jsx)(o.Z, { ...(0, c.$2)(s) });
              if ((0, r.I)("pullQuote", s))
                return (0, l.jsx)(y.a, {
                  align: s.fields.alignment,
                  quote: (0, l.jsx)(C, { document: s.fields.quoteText }),
                  attribution: (0, I.y)(s.fields.attribution),
                  hideQuoteMarks: s.fields.hideQuoteMarks,
                });
              if ((0, r.I)("dataVisualizationEmbed", s))
                return (0, l.jsx)(w.O, {
                  header: s.fields.header ? (0, T.V)(s.fields.header) : void 0,
                  HeadingLevel: "h3",
                  embedSourceUrl: s.fields.embedSourceUrl,
                  embedSourceTitle: s.fields.embedSourceTitle,
                  height: s.fields.height,
                  align: s.fields.alignment,
                });
              if ((0, r.I)("dataWrapperEmbed", s))
                return s.fields.embedId
                  ? (0, l.jsx)(A.F, {
                      header: s.fields.header
                        ? (0, T.V)(s.fields.header)
                        : void 0,
                      HeadingLevel: "h3",
                      embedId: s.fields.embedId,
                      embedSourceTitle: s.fields.embedSourceTitle,
                      height: s.fields.height,
                      align: s.fields.alignment,
                    })
                  : null;
              if ((0, r.I)("flourishEmbed", s))
                return s.fields.embedSourceUrl
                  ? (0, l.jsx)(L.C, {
                      headerContent: (0, T.V)(s.fields.header),
                      HeadingLevel: "h3",
                      align: s.fields.alignment,
                      embedSourceUrl: s.fields.embedSourceUrl,
                    })
                  : null;
              if ((0, r.I)("wowzaEmbed", s)) {
                if (s.fields.videoPath) {
                  let e = (0, c.N2)(s.fields.media);
                  return (0, l.jsx)(E.U, {
                    videoPath: s.fields.videoPath,
                    media: null == e ? void 0 : e.image,
                  });
                }
                return null;
              }
              if ((0, r.I)("simpleCta", s) && s.fields.links) {
                if (
                  (null === (t = s.fields.links) || void 0 === t
                    ? void 0
                    : t.length) !== 1 &&
                  "primary button" !== s.fields.linkType &&
                  "secondary button" !== s.fields.linkType
                )
                  return (0, l.jsx)(p.r, {
                    hideIcon: s.fields.hideIcon,
                    ...(0, b.H)(s.fields.links),
                  });
                {
                  let e = (0, x.T)(s.fields.links[0]);
                  return (
                    e &&
                      ((e.hideIcon = s.fields.hideIcon),
                      s.fields.linkType &&
                        (e.type = s.fields.linkType.replace(" ", "-"))),
                    (0, l.jsx)(m.l, { ...e })
                  );
                }
              }
            },
          },
          ...t,
        });
      }
    },
    41272: (e, i, t) => {
      "use strict";
      t.d(i, { N: () => s });
      var l = t(6029);
      let s = (0, t(55729).forwardRef)((e, i) => {
        let {
          href: t,
          target: s,
          children: n,
          className: a,
          rel: r,
          onClick: d,
          editAttributes: o,
          dataLayer: c,
          ...h
        } = e;
        return (
          s || (s = "_blank"),
          ((null == t ? void 0 : t.startsWith("/")) ||
            (null == t ? void 0 : t.includes(".hbs.edu"))) &&
            (s = t.includes("webassets.hbs.edu") ? "_blank" : "_self"),
          (0, l.jsx)("a", {
            ...o,
            href: t,
            target: s,
            className: a,
            rel: r,
            ...h,
            ref: i,
            onClick: (e) => {
              if (
                (null == c ? void 0 : c.event_data.explore_search) &&
                !c.event_data.explore_search_info_box_clicked
              ) {
                let e = "string" == typeof n ? n.trim() : "";
                c.event_data.explore_search_info_box_clicked = e;
              }
              d && d(e);
            },
            children: n,
          })
        );
      });
    },
    43071: (e, i, t) => {
      "use strict";
      t.d(i, { e8: () => s, rW: () => l });
      let l = "environment",
        s = {
          DEFAULT: "GTM-N2NWNWX",
          ONLINE: "GTM-MW34RML",
          EXED: "GTM-TLS4CQL",
          MY: "GTM-WNLL79Z",
        };
    },
    44292: (e, i, t) => {
      "use strict";
      function l(e) {
        if (!e) return !1;
        try {
          return !new URL(e).host.endsWith("hbs.edu");
        } catch (e) {
          return !1;
        }
      }
      t.d(i, { i: () => l });
    },
    48249: (e, i, t) => {
      "use strict";
      t.d(i, { j: () => s });
      var l = t(87972);
      function s(e) {
        return (i, t) => {
          let { getEntry: s, createEditAttributes: n } = (0, l.U)(),
            a = s(i);
          if (
            (null == a ? void 0 : a.fields) &&
            (null == a ? void 0 : a.metadata) &&
            (null == a ? void 0 : a.sys.id)
          )
            try {
              return e({ entry: a, options: t, createEditAttributes: n });
            } catch (e) {
              console.error(e);
              return;
            }
        };
      }
    },
    48470: (e, i, t) => {
      "use strict";
      t.d(i, { X: () => u });
      var l = t(6029),
        s = t(55729);
      t(12384);
      var n = t(50212),
        a = t(23059);
      t(97911);
      var r = t(75287),
        d = t(25866),
        o = t(96768),
        c = t(21785),
        h = t(80422);
      function u(e) {
        let {
            headerContent: i,
            items: t,
            align: u = "full",
            HeadingLevel: f = "h2",
          } = e,
          v = (0, n.A)("hbs-global-align-".concat(u)),
          { isMobile: m } = (0, c.d)(),
          [p, x] = (0, s.useState)(0),
          b = (0, s.useId)(),
          j = (0, s.useRef)(null),
          g = (0, s.useRef)(null),
          _ = (0, s.useRef)(null),
          N = (0, l.jsx)(o.U, {
            variant: "prev",
            onClick: () => {
              g.current && g.current.go("<");
            },
            "data-testid": "media-carousel-button-left",
            className: "hbs-media-carousel__button--prev",
          }),
          k = (0, l.jsx)(o.U, {
            variant: "next",
            onClick: () => {
              g.current && g.current.go(">");
            },
            "data-testid": "media-carousel-button-left",
            className: "hbs-media-carousel__button--next",
          }),
          y = t.length ? [t[t.length - 1], ...t.slice(0, -1)] : [],
          I = t.length ? [...t.slice(1), t[0]] : [],
          w = (0, s.useRef)(null),
          A = (e, i) => "".concat(i, "-").concat(e, "-").concat(p),
          T = (e) => {
            let i = w.current;
            i &&
              (i
                .querySelectorAll(".hbs-media-carousel__item")
                .forEach((i, t) => {
                  t !== e &&
                    i
                      .querySelectorAll('[id^="kaltura-player-"]')
                      .forEach((e) => {
                        let i = new CustomEvent("resetKalturaPlayer");
                        e.dispatchEvent(i);
                        let t = e.id;
                        window.kWidget && window.kWidget.destroy(t);
                      });
                }),
              x(e),
              j.current && j.current.go(e),
              _.current && _.current.go(e));
          };
        return (0, l.jsxs)("div", {
          className: v,
          "data-region": "cb__media-carousel",
          children: [
            (0, l.jsx)(d.B, {
              ...(i ? { ...i, titleId: b } : i),
              HeadingLevel: f,
            }),
            (0, l.jsxs)("div", {
              className: "hbs-media-carousel",
              ref: w,
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "hbs-media-carousel__container hbs-media-carousel__container--previous",
                  children: [
                    (0, l.jsx)("div", {
                      "aria-hidden": !0,
                      children: (0, l.jsx)(a.eB, {
                        options: {
                          type: "loop",
                          drag: !1,
                          arrows: !1,
                          pagination: !1,
                          paginationKeyboard: !1,
                          speed: 600,
                        },
                        hasTrack: !1,
                        ref: j,
                        children: (0, l.jsx)(a.v9, {
                          children: y.map((e, i) =>
                            (0, l.jsx)(
                              a.Nn,
                              {
                                className: "hbs-media-carousel__item",
                                children: (0, l.jsx)(r.Z, { ...e.media }),
                              },
                              A(i, "prev")
                            )
                          ),
                        }),
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "hbs-media-carousel__controls",
                      children: N,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "hbs-media-carousel__container hbs-media-carousel__container--current",
                  children: [
                    (0, l.jsx)(a.eB, {
                      ...(i
                        ? { "aria-labelledby": b }
                        : { "aria-label": "Media Carousel" }),
                      options: {
                        type: "loop",
                        drag: m,
                        arrows: !1,
                        pagination: !1,
                        speed: 600,
                        clones: 0,
                        rewind: !0,
                        rewindByDrag: !0,
                      },
                      hasTrack: !1,
                      ref: g,
                      onMove: (e, i, t, l) => {
                        T(l);
                      },
                      children: (0, l.jsx)(a.v9, {
                        children: t.map((e, i) =>
                          (0, l.jsxs)(
                            a.Nn,
                            {
                              className: "hbs-media-carousel__item",
                              children: [
                                (0, s.createElement)(r.Z, {
                                  ...e.media,
                                  key: A(i, "media"),
                                }),
                                e.ctaLink &&
                                  (0, l.jsx)(h.l, {
                                    ...e.ctaLink,
                                    isSmall: !0,
                                  }),
                              ],
                            },
                            A(i, "slide")
                          )
                        ),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "hbs-media-carousel__controls",
                      children: [N, k],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "hbs-media-carousel__container hbs-media-carousel__container--next",
                  children: [
                    (0, l.jsx)("div", {
                      "aria-hidden": !0,
                      children: (0, l.jsx)(a.eB, {
                        options: {
                          type: "loop",
                          drag: !1,
                          arrows: !1,
                          pagination: !1,
                          paginationKeyboard: !1,
                          speed: 600,
                        },
                        hasTrack: !1,
                        ref: _,
                        children: (0, l.jsx)(a.v9, {
                          children: I.map((e, i) =>
                            (0, l.jsx)(
                              a.Nn,
                              {
                                className: "hbs-media-carousel__item",
                                children: (0, l.jsx)(r.Z, { ...e.media }),
                              },
                              A(i, "next")
                            )
                          ),
                        }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "hbs-media-carousel__controls",
                      children: [N, k],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    49844: () => {},
    51102: (e, i, t) => {
      "use strict";
      t.d(i, { r: () => a });
      var l = t(6029);
      t(49844);
      var s = t(50212),
        n = t(80422);
      function a(e) {
        let {
          items: i,
          className: t,
          label: a,
          hideIcon: r = !1,
          HeadingLevel: d = "p",
        } = e;
        return i
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                a &&
                  (0, l.jsx)(d, {
                    className: "hbs-cta-list-label",
                    children: a,
                  }),
                (0, l.jsx)("ul", {
                  className: (0, s.A)("hbs-cta-list", t),
                  children: i.map((e, i) => {
                    let {
                      children: t,
                      className: a,
                      href: d,
                      editAttributes: o,
                      hideIcon: c,
                    } = e;
                    return (0, l.jsx)(
                      "li",
                      {
                        ...o,
                        className: (0, s.A)("hbs-cta-list-item", a),
                        children: (0, l.jsx)(n.l, {
                          className: "hbs-cta-list-item__link",
                          href: d,
                          hideIcon: r || c,
                          children: t,
                        }),
                      },
                      i
                    );
                  }),
                }),
              ],
            })
          : null;
      }
    },
    54415: (e, i, t) => {
      "use strict";
      t.d(i, { y: () => c });
      var l = t(6029),
        s = t(48249),
        n = t(74487),
        a = t(39263),
        r = t(26660),
        d = t(61030),
        o = t(87972);
      let c = (0, s.j)((e) => {
        let { entry: i, createEditAttributes: t } = e,
          { getPersonLink: s } = (0, o.U)(),
          c = (0, d.H)(i),
          h = (0, n.RC)(i);
        return {
          type: "Person",
          name: c,
          bio: (0, l.jsx)(a.Q, { document: i.fields.bio }),
          social: (0, r.R)(i),
          link: s(i),
          email: i.fields.email,
          phone: i.fields.phone,
          titles: Array.isArray(i.fields.jobTitles) ? i.fields.jobTitles : [],
          portrait: null == h ? void 0 : h.image,
          editAttributes: {
            name: t({ entry: i, fieldId: "firstName" }),
            titles: t({ entry: i, fieldId: "jobTitles" }),
          },
        };
      });
    },
    55070: (e, i, t) => {
      "use strict";
      t.d(i, { V: () => r });
      var l = t(6029),
        s = t(39263),
        n = t(48249),
        a = t(87972);
      let r = (0, n.j)((e) => {
        var i, t, n, r, d, o, c;
        let { entry: h, createEditAttributes: u } = e,
          { getEntryUrl: f, getEntry: v } = (0, a.U)(),
          m = v(null === (i = h.fields) || void 0 === i ? void 0 : i.link);
        return {
          title: null === (t = h.fields) || void 0 === t ? void 0 : t.title,
          link: f(m),
          linkText: null == m ? void 0 : m.fields.text,
          ariaLabel: null == m ? void 0 : m.fields.ariaLabel,
          isSmall:
            (null === (n = h.fields) || void 0 === n ? void 0 : n.size) ===
            "small",
          description: (
            null === (r = h.fields) || void 0 === r ? void 0 : r.description
          )
            ? (0, l.jsx)(s.Q, {
                document:
                  null === (d = h.fields) || void 0 === d
                    ? void 0
                    : d.description,
              })
            : void 0,
          borderPosition:
            (null === (o = h.fields) || void 0 === o
              ? void 0
              : o.borderPosition) || void 0,
          HeadingLevel:
            (null === (c = h.fields) || void 0 === c
              ? void 0
              : c.headingLevel) || void 0,
          editAttributes: {
            title: u({ entry: h, fieldId: "title" }),
            description: u({ entry: h, fieldId: "description" }),
            linkText: u({ entry: h.fields.link, fieldId: "text" }),
          },
        };
      });
    },
    57518: () => {},
    61030: (e, i, t) => {
      "use strict";
      function l(e) {
        if (!(null == e ? void 0 : e.fields)) return "";
        if ("title" in e.fields) {
          var i;
          return null !== (i = e.fields.title) && void 0 !== i ? i : "";
        }
        return e.fields.displayName
          ? e.fields.displayName
          : [
              e.fields.firstName,
              e.fields.middleName,
              e.fields.lastName,
              e.fields.nameSuffix,
            ]
              .filter((e) => e)
              .join(" ");
      }
      t.d(i, { H: () => l });
    },
    61778: (e, i, t) => {
      "use strict";
      t.d(i, { H: () => s });
      var l = t(91014);
      function s(e) {
        if (!Array.isArray(e)) return;
        let i = { items: [] };
        return (
          e.forEach((e) => {
            var t;
            let s = (0, l.T)(e);
            s && (null === (t = i.items) || void 0 === t || t.push(s));
          }),
          i
        );
      }
    },
    65944: () => {},
    74487: (e, i, t) => {
      "use strict";
      t.d(i, { N2: () => c, RC: () => u, $2: () => h });
      var l = t(6029),
        s = t(61030),
        n = t(16682),
        a = t(87972),
        r = t(48249);
      let d = (e) => {
        var i;
        let t =
          null === (i = e.sys.updatedAt) || void 0 === i
            ? void 0
            : i.split("T")[0];
        return "https://www.hbs.edu/api/headshot/"
          .concat(e.fields.hbsEnterpriseID, "?")
          .concat(t);
      };
      var o = t(39263);
      let c = (0, r.j)((e) => {
          var i,
            t,
            s,
            r,
            d,
            c,
            h,
            u,
            f,
            v,
            m,
            p,
            x,
            b,
            j,
            g,
            _,
            N,
            k,
            y,
            I,
            w,
            A,
            T,
            L,
            E,
            H,
            R,
            C,
            D,
            O,
            P,
            S,
            M,
            U;
          let { entry: W, createEditAttributes: G } = e,
            { getAsset: q, getEntry: Q } = (0, a.U)(),
            B = q(W.fields.asset);
          if (
            (0, n.I)("image", W) &&
            (null == B
              ? void 0
              : null === (t = B.fields) || void 0 === t
              ? void 0
              : null === (i = t.file) || void 0 === i
              ? void 0
              : i.url)
          ) {
            let e = {
              src:
                null == B
                  ? void 0
                  : null === (r = B.fields) || void 0 === r
                  ? void 0
                  : null === (s = r.file) || void 0 === s
                  ? void 0
                  : s.url,
              alt:
                (null === (d = W.fields.altText) || void 0 === d
                  ? void 0
                  : d.toLowerCase()) === "na"
                  ? void 0
                  : W.fields.altText,
              editAttributes: { src: G({ entry: W, fieldId: "asset" }) },
            };
            return (
              W.fields.caption &&
                W.fields.showCaption &&
                (e.caption = (0, l.jsx)(o.Q, {
                  document: W.fields.caption,
                  disableParagraphs: !0,
                })),
              W.fields.imageGravity && (e.gravity = W.fields.imageGravity),
              (null == B
                ? void 0
                : null === (f = B.fields) || void 0 === f
                ? void 0
                : null === (u = f.file) || void 0 === u
                ? void 0
                : null === (h = u.details) || void 0 === h
                ? void 0
                : null === (c = h.image) || void 0 === c
                ? void 0
                : c.width) &&
                (e.width = B.fields.file.details.image.width.toString()),
              (null == B
                ? void 0
                : null === (x = B.fields) || void 0 === x
                ? void 0
                : null === (p = x.file) || void 0 === p
                ? void 0
                : null === (m = p.details) || void 0 === m
                ? void 0
                : null === (v = m.image) || void 0 === v
                ? void 0
                : v.height) &&
                (e.height = B.fields.file.details.image.height.toString()),
              (null == B
                ? void 0
                : null === (_ = B.fields) || void 0 === _
                ? void 0
                : null === (g = _.file) || void 0 === g
                ? void 0
                : null === (j = g.details) || void 0 === j
                ? void 0
                : null === (b = j.image) || void 0 === b
                ? void 0
                : b.width) &&
                (null == B
                  ? void 0
                  : null === (I = B.fields) || void 0 === I
                  ? void 0
                  : null === (y = I.file) || void 0 === y
                  ? void 0
                  : null === (k = y.details) || void 0 === k
                  ? void 0
                  : null === (N = k.image) || void 0 === N
                  ? void 0
                  : N.height) &&
                (e.intrinsicAspectRatio = ""
                  .concat(B.fields.file.details.image.width, "/")
                  .concat(B.fields.file.details.image.height)),
              { image: e }
            );
          }
          if ((0, n.I)("wowzaEmbed", W)) {
            let e = Q(W.fields.media),
              i =
                null === (T = q(null == e ? void 0 : e.fields.asset)) ||
                void 0 === T
                  ? void 0
                  : null === (A = T.fields) || void 0 === A
                  ? void 0
                  : null === (w = A.file) || void 0 === w
                  ? void 0
                  : w.url,
              t = null == e ? void 0 : e.fields.caption;
            return {
              wowzaEmbed: {
                videoPath:
                  null !== (L = W.fields.videoPath) && void 0 !== L ? L : "",
                caption: t ? (0, l.jsx)(o.Q, { document: t }) : void 0,
                media: { src: null != i ? i : "" },
              },
            };
          }
          if ((0, n.I)("video", W)) {
            if (W.fields.externalURL)
              return {
                embed: {
                  title: W.fields.title || "",
                  src: W.fields.externalURL,
                  description:
                    null == B
                      ? void 0
                      : null === (R = B.fields) || void 0 === R
                      ? void 0
                      : R.description,
                  width: 16,
                  height: 9,
                },
              };
            if (W.fields.kalturaId)
              return {
                kaltura: {
                  entryId: W.fields.kalturaId,
                  threePlayId: W.fields.threePlayID,
                  threePlayProjectId: W.fields.threePlayProjectID,
                  title: W.fields.title,
                  duration: W.fields.duration,
                  description: (0, l.jsx)(o.Q, {
                    document: W.fields.description,
                  }),
                  caption: W.fields.caption
                    ? (0, l.jsx)(o.Q, { document: W.fields.caption })
                    : W.fields.kalturaCaption
                    ? (0, l.jsx)(o.Q, { document: W.fields.kalturaCaption })
                    : void 0,
                  hide: {
                    caption:
                      null === (C = W.fields.hideCaption) || void 0 === C || C,
                  },
                },
              };
            if (
              (null == B
                ? void 0
                : null === (H = B.fields) || void 0 === H
                ? void 0
                : null === (E = H.file) || void 0 === E
                ? void 0
                : E.url) &&
              B.fields.file.contentType
            ) {
              let e =
                null ===
                  (S = q(
                    null === (D = Q(W.fields.backupImage)) || void 0 === D
                      ? void 0
                      : D.fields.asset
                  )) || void 0 === S
                  ? void 0
                  : null === (P = S.fields) || void 0 === P
                  ? void 0
                  : null === (O = P.file) || void 0 === O
                  ? void 0
                  : O.url;
              return {
                video: {
                  src: B.fields.file.url,
                  backupImage: e,
                  mimeType: B.fields.file.contentType,
                  description:
                    null == B
                      ? void 0
                      : null === (M = B.fields) || void 0 === M
                      ? void 0
                      : M.description,
                  caption: W.fields.caption
                    ? (0, l.jsx)(o.Q, {
                        document: W.fields.caption,
                        disableParagraphs: !0,
                      })
                    : void 0,
                  hide: {
                    caption:
                      null === (U = W.fields.hideCaption) || void 0 === U || U,
                  },
                  editAttributes: { src: G({ entry: W, fieldId: "asset" }) },
                },
              };
            }
          }
        }),
        h = (0, r.j)((e) => {
          let { entry: i } = e,
            t = c(i);
          return (
            (0, n.I)("image", i) &&
              (null == t ? void 0 : t.image) &&
              (i.fields.caption &&
                (t.image.caption = (0, l.jsx)(o.Q, {
                  document: i.fields.caption,
                })),
              i.fields.alignment &&
                ((t.image.align = "align-".concat(i.fields.alignment)),
                ("left" === i.fields.alignment ||
                  "right" === i.fields.alignment) &&
                  (t.image.mobileWidth = 300))),
            (0, n.I)("video", i) &&
              ((null == t ? void 0 : t.video)
                ? (t.video.align = "align-center")
                : (null == t ? void 0 : t.embed) && (t.embed.align = "center")),
            t
          );
        }),
        u = (0, r.j)((e) => {
          let { entry: i } = e,
            { getIsPersonPastHbsFaculty: t, getEntry: l } = (0, a.U)(),
            r = (e) => {
              if ((0, n.I)("personWrapper", e)) {
                let i = l(e.fields.person);
                if (!i) return;
                return r(i);
              }
              if (!((0, n.I)("organization", e) || t(e))) return e;
            },
            o = r(i);
          if (!o) return;
          let { image: h, hbsEnterpriseID: u } = o.fields;
          if (h) return c(h);
          if (u) {
            let e = (0, s.H)(o);
            return { image: { src: d(o), alt: "Headshot of ".concat(e) } };
          }
        });
    },
    74680: (e, i, t) => {
      "use strict";
      t.d(i, { C: () => d });
      var l = t(6029),
        s = t(50212),
        n = t(55729),
        a = t(85765),
        r = t(25866);
      function d(e) {
        let i,
          {
            headerContent: t,
            embedSourceUrl: d,
            align: o = "center",
            HeadingLevel: c = "h2",
          } = e,
          h = (0, s.A)(
            "hbs-global-align-".concat(o),
            "hbs-component--flourish-embed"
          ),
          u = "visualisation",
          f = d.match(/\/visualisation\/(\d+)/);
        if (f) (i = f[1]), (u = "visualisation");
        else {
          let e = d.match(/\/story\/(\d+)/);
          e && ((i = e[1]), (u = "story"));
        }
        return (
          (0, n.useEffect)(() => {
            i
              ? (0, a.k)("https://public.flourish.studio/resources/embed.js", {
                  defer: !0,
                })
              : console.warn("Chart ID not found in the URL");
          }, [i]),
          (0, l.jsxs)("div", {
            className: h,
            "data-region": "cb__flourish-embed",
            children: [
              t && (0, l.jsx)(r.B, { ...t, HeadingLevel: c }),
              (0, l.jsx)("div", {
                className: "hbs-flourish-embed",
                children: (0, l.jsx)("div", {
                  className: "flourish-embed flourish-chart",
                  "data-src": "".concat(u, "/").concat(i, "?2123658"),
                  children: (0, l.jsx)("noscript", {
                    children: (0, l.jsx)("img", {
                      src: "https://public.flourish.studio/"
                        .concat(u, "/")
                        .concat(i, "/thumbnail"),
                      width: "100%",
                      alt: "chart visualization",
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    78480: () => {},
    80422: (e, i, t) => {
      "use strict";
      t.d(i, { l: () => h });
      var l = t(6029);
      t(65944);
      var s = t(55729),
        n = t(50212),
        a = t(24999),
        r = t(41272);
      let d = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"];
      var o = t(44292),
        c = t(21009);
      let h = (0, s.forwardRef)((e, i) => {
        let t,
          s,
          h,
          {
            children: u,
            className: f,
            href: v,
            onClick: m,
            dataLayer: p,
            type: x = "link",
            isSmall: b,
            isNested: j,
            icon: g,
            hideIcon: _,
            "aria-label": N,
            "aria-selected": k,
            "aria-describedby": y,
            id: I,
            tabIndex: w,
            editAttributes: A,
          } = e;
        v && (t = (0, o.i)(v)),
          !g &&
            v &&
            (g = !(function (e) {
              let i;
              if (!e) return !1;
              try {
                i = new URL(e).pathname;
              } catch (t) {
                i = e;
              }
              return d.some((e) => i.endsWith(e));
            })(v)
              ? "arrow"
              : "download");
        let { pushDataLayer: T } = (0, c.v)(),
          L = (0, n.A)(
            "hbs-cta-link",
            b && "hbs-cta-link--small",
            "hbs-cta-link--".concat(x),
            j ? "hbs-cta-link--nested" : "",
            f
          ),
          E = (0, n.A)(
            "hbs-cta-link__icon",
            "hbs-cta-link__icon--".concat(
              (null == g ? void 0 : g.toLowerCase()) || ""
            ),
            t && "hbs-cta-link__icon--external"
          );
        if ("string" == typeof u) {
          let e = u.trim().split(" ");
          (s = e.pop()), (h = e.join(" "));
        }
        let H = (0, l.jsxs)("span", {
            className: "hbs-cta-link__text-nowrap",
            children: [
              (0, l.jsx)("span", {
                className: "hbs-cta-link__text",
                children: u,
              }),
              !_ && g && (0, l.jsx)(a.I, { name: g, className: E }),
            ],
          }),
          R = {
            className: L,
            ref: i,
            id: I,
            "aria-selected": k,
            "aria-describedby": y,
            "aria-label": N,
            tabIndex: w,
          };
        if (m)
          return (
            p &&
              window.addEventListener("click", () => {
                T(p);
              }),
            (0, l.jsx)("button", { ...A, ...R, onClick: m, children: H })
          );
        if (
          "string" != typeof u ||
          "primary-button" === x ||
          "secondary-button" === x
        ) {
          let e;
          return (
            p &&
              (e = () => {
                let e = "string" == typeof u ? u.trim() : "";
                (null == p ? void 0 : p.event_data) &&
                  p.event.includes("program_finder") &&
                  ((p.event_data.program_action = p.event_data.program_action
                    ? p.event_data.program_action
                    : "program cta click"),
                  (p.event_data.program_name = N)),
                  p.event_data.explore_search &&
                    (p.event_data.explore_search_info_box_clicked = e),
                  "info_box_item_click" === p.event &&
                    ((p.event_data.infobox_item_link_text = e),
                    (p.event_data.infobox_item_url = v)),
                  T(p);
              }),
            (0, l.jsx)(r.N, {
              editAttributes: A,
              ...R,
              href: v,
              onClick: e,
              dataLayer: p,
              children: H,
            })
          );
        }
        let C = (0, l.jsxs)("span", {
          className: "hbs-cta-link__text",
          children: [
            h,
            " ",
            (0, l.jsxs)("span", {
              className: "hbs-cta-link__text-last",
              children: [
                s,
                !_ && g && (0, l.jsx)(a.I, { name: g, className: E }),
              ],
            }),
          ],
        });
        return j
          ? (0, l.jsx)("span", {
              ...A,
              id: I,
              "aria-describedby": y,
              className: L,
              children: C,
            })
          : (0, l.jsx)(r.N, {
              editAttributes: A,
              ...R,
              href: v,
              dataLayer: p,
              "aria-label": "string" == typeof u ? N || u : void 0,
              children: C,
            });
      });
    },
    80542: () => {},
    91014: (e, i, t) => {
      "use strict";
      t.d(i, { T: () => a });
      var l = t(48249),
        s = t(16682),
        n = t(87972);
      let a = (0, l.j)((e) => {
        let i,
          t,
          l,
          { entry: a, createEditAttributes: r } = e,
          { getEntryUrl: d } = (0, n.U)();
        return (
          (0, s.I)("link", a)
            ? ((i = d(a)), (t = a.fields.text), (l = a.fields.ariaLabel))
            : (0, s.I)("socialMediaLink", a) &&
              ((i = a.fields.url), (t = a.fields.socialMedia)),
          {
            href: i,
            children: t,
            "aria-label": l,
            editAttributes: r({ entry: a, fieldId: "text" }),
          }
        );
      });
    },
    96768: (e, i, t) => {
      "use strict";
      t.d(i, { U: () => a });
      var l = t(6029);
      t(57518);
      var s = t(50212),
        n = t(24999);
      function a(e) {
        let { variant: i, ...t } = e,
          a = "prev" === i ? "Previous" : "Next";
        return (0, l.jsxs)("button", {
          type: "button",
          title: a,
          ...t,
          className: (0, s.A)("hbs-arrow-button--".concat(i), t.className),
          children: [
            (0, l.jsx)("span", {
              className: "hbs-global-visually-hidden",
              children: a,
            }),
            (0, l.jsx)(n.I, { name: "arrow" }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=9263-946bf110b2de4768.js.map
