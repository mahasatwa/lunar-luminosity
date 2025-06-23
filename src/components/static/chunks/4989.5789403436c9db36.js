(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4989],
  {
    3450: (e, i, l) => {
      "use strict";
      function t(e, i) {
        return (
          void 0 !== i &&
          ("modern" === e
            ? "url" in i && "title" in i
            : "hollis" === e
            ? "title" in i
            : "modernArticle" === e
            ? "contentType" in i && "Article" === i.contentType
            : "modernProgram" === e
            ? "contentType" in i && "Program" === i.contentType
            : "modernCourse" === e
            ? "contentType" in i && "Course" === i.contentType
            : "legacy" === e || "legacyArticle" === e
            ? "HBSLink" in i && "HBSTitle" in i
            : "knowledgeSuggest" === e && "Faculty" in i && "suggestions" in i)
        );
      }
      l.d(i, { M: () => t });
    },
    5575: (e, i, l) => {
      "use strict";
      l.d(i, { M: () => u });
      var t = l(6029),
        s = l(48249),
        d = l(39263),
        r = l(74487),
        n = l(61778),
        o = l(87972),
        a = l(85761);
      let u = (0, s.j)((e) => {
        let { entry: i, createEditAttributes: l } = e,
          { getEntryUrl: s, getEntry: u, site: f } = (0, o.U)(),
          { request: c } = (0, a.l)(),
          p = {
            spotTheme: i.fields.spotTheme,
            title: i.fields.title,
            hiddenTitle:
              c.path.substring(1) === (null == f ? void 0 : f.fields.slug)
                ? f.fields.title
                : void 0,
            subtitle: i.fields.subtitle
              ? (0, t.jsx)(d.Q, { document: i.fields.subtitle })
              : void 0,
            asset: i.fields.media ? (0, r.N2)(i.fields.media) : void 0,
            editAttributes: {
              title: l({ entry: i, fieldId: "title" }),
              subtitle: l({ entry: i, fieldId: "subtitle" }),
            },
          },
          v = u(i.fields.overlineLink);
        v &&
          (p.overline = {
            text: null == v ? void 0 : v.fields.text,
            link: s(i.fields.overlineLink),
            editAttributes: { text: l({ entry: v, fieldId: "text" }) },
          }),
          !v &&
            i.fields.overlineText &&
            (p.overline = {
              text: i.fields.overlineText,
              editAttributes: {
                text: l({ entry: i, fieldId: "overlineText" }),
              },
            });
        let h = u(i.fields.button);
        return (
          h &&
            (p.ctaButton = {
              href: s(i.fields.button),
              children: h.fields.text,
              editAttributes: l({ entry: h, fieldId: "text" }),
            }),
          !h && i.fields.links && (p.ctaList = (0, n.H)(i.fields.links)),
          p
        );
      });
    },
    7113: (e, i, l) => {
      "use strict";
      l.d(i, { I: () => n });
      var t = l(6029),
        s = l(55729),
        d = l(36683),
        r = l(16150);
      function n(e) {
        let { name: i, props: l, children: a } = e,
          { getLazyComponentByName: u } = (0, r.y)(),
          f = u(i);
        return f
          ? (0, t.jsx)(d.t, {
              children: (0, t.jsx)(s.Suspense, {
                children: (0, t.jsx)(f, {
                  ...(l || {}),
                  children:
                    a &&
                    (Array.isArray(a)
                      ? (0, t.jsx)(o, { components: a })
                      : (0, t.jsx)(n, { ...a })),
                }),
              }),
            })
          : (console.error("ERROR: could not find lazy component ".concat(i)),
            null);
      }
      function o(e) {
        let { components: i } = e;
        return i && Array.isArray(i)
          ? (0, t.jsx)(t.Fragment, {
              children: i.map((e, i) => (0, t.jsx)(n, { ...e }, i)),
            })
          : null;
      }
    },
    8426: (e, i, l) => {
      "use strict";
      l.d(i, { X: () => a });
      var t = l(6029),
        s = l(48249),
        d = l(74487),
        r = l(39263),
        n = l(91014),
        o = l(54956);
      let a = (0, s.j)((e) => {
        var i, l;
        let { entry: s, createEditAttributes: a } = e,
          u = {
            title: s.fields.title,
            intro: s.fields.description
              ? (0, t.jsx)(r.Q, { document: s.fields.description })
              : void 0,
            mediaAssetImage:
              null === (i = (0, d.N2)(s.fields.media)) || void 0 === i
                ? void 0
                : i.image,
            theme: s.fields.theme,
            featuredFaculty:
              s.fields.facultyHeading ||
              s.fields.facultyLink ||
              s.fields.faculty
                ? {
                    heading: s.fields.facultyHeading,
                    cta: (0, n.T)(s.fields.facultyLink),
                    people: [],
                    editAttributes: {
                      heading: a({ entry: s, fieldId: "facultyHeading" }),
                    },
                  }
                : void 0,
            editAttributes: {
              title: a({ entry: s, fieldId: "title" }),
              intro: a({ entry: s, fieldId: "description" }),
            },
          };
        return (
          null === (l = s.fields.faculty) ||
            void 0 === l ||
            l.forEach((e) => {
              let i = (0, o.R)(e);
              if (i) {
                var l, t;
                null === (t = u.featuredFaculty) ||
                  void 0 === t ||
                  null === (l = t.people) ||
                  void 0 === l ||
                  l.push(i);
              }
            }),
          u
        );
      });
    },
    12258: (e, i, l) => {
      "use strict";
      l.d(i, { O: () => a });
      var t = l(6029),
        s = l(48249),
        d = l(74487),
        r = l(39263),
        n = l(61778),
        o = l(98250);
      let a = (0, s.j)((e) => {
        var i;
        let { entry: l, createEditAttributes: s } = e,
          a = {
            title: l.fields.title,
            theme: l.fields.theme,
            asset: (0, d.N2)(l.fields.media),
            subheading: (0, t.jsx)(r.Q, {
              document: l.fields.subtitle,
              disableParagraphs: !0,
            }),
            cta: (0, n.H)(l.fields.links),
            stats: [],
            editAttributes: {
              title: s({ entry: l, fieldId: "title" }),
              subtitle: s({ entry: l, fieldId: "subtitle" }),
            },
          };
        return (
          null === (i = l.fields.statistics) ||
            void 0 === i ||
            i.forEach((e) => {
              var i;
              let l = (0, o.X)(e);
              l && (null === (i = a.stats) || void 0 === i || i.push(l));
            }),
          a
        );
      });
    },
    15844: (e, i, l) => {
      "use strict";
      l.d(i, { G6: () => f, KZ: () => a });
      var t = l(6029),
        s = l(55729),
        d = l(87972),
        r = l(16682),
        n = l(52229);
      let o = (0, s.createContext)({
          selectedOptions: {},
          onSelectedOptionChange: () => null,
          resetSelectedOptions: () => null,
          getSelectedOptionsESFilters: () => void 0,
        }),
        a = () => (0, s.useContext)(o);
      function u(e) {
        let i = [
            "+",
            "-",
            "&",
            "|",
            "!",
            "(",
            ")",
            "{",
            "}",
            "[",
            "]",
            "^",
            '"',
            "~",
            "*",
            "?",
            ":",
            "\\",
            "/",
            " ",
          ],
          l = "";
        for (let t of e) i.includes(t) ? (l += "\\".concat(t)) : (l += t);
        return l;
      }
      let f = (e) => {
        var i, l;
        let { topper: a, children: f } = e,
          c = (0, n.useSearchParams)(),
          { getEntry: p, getEntries: v } = (0, d.U)(),
          h = (0, s.useMemo)(() => p(a), [p, a]),
          m = (0, r.I)("selectTopper", h),
          [g, b] = (0, s.useState)(
            m &&
              (null === (i = h.fields.facets) || void 0 === i
                ? void 0
                : i.length)
              ? Object.fromEntries(
                  null === (l = v(h.fields.facets)) || void 0 === l
                    ? void 0
                    : l.map((e) => [
                        e.fields.field || "",
                        (e.fields.field && c.get(e.fields.field)) || "",
                      ])
                )
              : {}
          ),
          y = (0, s.useRef)();
        return (
          (0, s.useEffect)(() => {
            let e = new URL(window.location.href);
            Object.entries(g).forEach((i) => {
              let [l, t] = i;
              t ? e.searchParams.set(l, t) : e.searchParams.delete(l);
            }),
              Object.keys(g).length > 0 &&
                y.current !== e.href &&
                (window.history.pushState({}, "", e), (y.current = e.href));
          }, [g]),
          (0, t.jsx)(o.Provider, {
            value: {
              selectedOptions: g,
              getSelectedOptionsESFilters: (e) => {
                var i;
                if (!m) return;
                let l = "";
                for (let [i, t] of Object.entries(g))
                  if (t) {
                    let s = e ? " AND " : "";
                    i.includes("[") ||
                      (l += "".concat(s).concat(i, ':"').concat(t, '"'));
                  }
                let t = {};
                null === (i = v(h.fields.facets)) ||
                  void 0 === i ||
                  i.forEach((e) => {
                    if (e.fields.field && e.fields.field.includes("[")) {
                      let l = e.fields.field.match(/(.*?)\[(\d+)\]/);
                      if (l) {
                        var i;
                        let s = l[1];
                        t[s] || (t[s] = []),
                          null === (i = t[s]) ||
                            void 0 === i ||
                            i.push(g[e.fields.field]);
                      }
                    }
                  });
                let s = "";
                for (let [e, i] of Object.entries(t))
                  if (i.length > 0 && i.some((e) => !!e))
                    for (let l of ((s += "".concat(e, ":")), i))
                      0 === i.indexOf(l)
                        ? l
                          ? (s += u("".concat(l, ":")))
                          : (s += "*\\:")
                        : l
                        ? (s += u(l))
                        : (s += "*");
                return s && (l += "".concat(e ? " AND " : "").concat(s)), l;
              },
              onSelectedOptionChange: (e, i) => {
                b((l) => ({ ...l, [e]: i }));
              },
              resetSelectedOptions: () => {
                b((e) =>
                  Object.fromEntries(Object.keys(e).map((e) => [e, ""]))
                );
              },
            },
            children: f,
          })
        );
      };
    },
    16896: (e, i, l) => {
      "use strict";
      l.d(i, { L: () => B });
      var t = l(6029),
        s = l(16682),
        d = l(48249),
        r = l(87972);
      let n = (0, d.j)((e) => {
        let { entry: i, createEditAttributes: l } = e,
          { getEntryUrl: t, getEntries: d } = (0, r.U)(),
          n = (e) => {
            var i, r, o, a;
            let u = {
              title: "",
              editAttributes: { title: l({ entry: e, fieldId: "title" }) },
            };
            return (
              (0, s.I)("linkList", e)
                ? ((u.url = t(e.fields.link)),
                  (null === (i = e.fields) || void 0 === i
                    ? void 0
                    : i.title) && (u.title = e.fields.title),
                  (null === (r = e.fields) || void 0 === r
                    ? void 0
                    : r.links) &&
                    (u.submenu =
                      null === (o = d(e.fields.links)) || void 0 === o
                        ? void 0
                        : o.map((e) => n(e))))
                : (0, s.I)("link", e) &&
                  ((u.url = t(e)),
                  (null === (a = e.fields) || void 0 === a ? void 0 : a.text) &&
                    (u.title = e.fields.text)),
              u
            );
          };
        return n(i);
      });
      var o = l(90392);
      let a = o.du;
      var u = l(18907),
        f = l(85761),
        c = l(1204),
        p = l(52229),
        v = l(55729),
        h = l(74713),
        m = l(78408),
        g = l(39263),
        b = l(96e3),
        y = l(63822),
        k = l(91014),
        I = l(25231),
        x = l(74487);
      let T = (e, i) => {
          if ((0, s.I)("link", e))
            return { title: e.fields.text || "", url: i(e) };
          if ((0, s.I)("coursePage", e)) {
            let { title: l, description: t } = e.fields;
            return { title: l || "", description: (0, y.C)(t), url: i(e) };
          }
          if ((0, s.I)("articlePage", e)) {
            let {
                title: l,
                description: t,
                shortDescription: s,
                teaseImage: d,
                leadImage: r,
              } = e.fields,
              n = r ? (0, x.N2)(r) : (0, x.N2)(d);
            return {
              title: l || "",
              description: s ? (0, y.C)(s) : (0, y.C)(t),
              url: i(e),
              mediaAsset: n,
            };
          }
          if ((0, s.I)("databasePage", e) || (0, s.I)("datasetPage", e)) {
            let { title: l, description: t, shortDescription: s } = e.fields;
            return {
              title: l || "",
              description: s ? (0, y.C)(s) : (0, y.C)(t),
              url: i(e),
            };
          }
          if ((0, s.I)("podcastEpisodePage", e)) {
            let {
                title: l,
                description: t,
                subtitle: s,
                relatedImage: d,
              } = e.fields,
              r = (0, y.C)(t) || s,
              n = (0, x.N2)(d);
            return { title: l || "", description: r, url: i(e), mediaAsset: n };
          }
          if ((0, s.I)("programPage", e)) {
            let { title: l, description: t, media: s } = e.fields,
              d = (0, y.C)(t),
              r = (0, x.N2)(s);
            return { title: l || "", description: d, url: i(e), mediaAsset: r };
          }
          if ((0, s.I)("knowledgeBaseArticlePage", e)) {
            let { title: l, subtitle: t, shortDescription: s } = e.fields;
            return { title: l || "", description: (0, y.C)(t) || s, url: i(e) };
          }
          if ((0, s.I)("participantStory", e)) {
            let {
                title: l,
                subTitle: t,
                shortDescription: s,
                image: d,
              } = e.fields,
              r = t || (0, y.C)(s),
              n = (0, x.N2)(d);
            return { title: l || "", description: r, url: i(e), mediaAsset: n };
          }
          if ((0, s.I)("clubPage", e)) {
            let { title: l, image: t } = e.fields,
              s = (0, x.N2)(t);
            return {
              title: l || "",
              description: void 0,
              url: i(e),
              mediaAsset: s,
            };
          }
          if ((0, s.I)("landingPage", e)) {
            let { description: l, title: t } = e.fields;
            return { title: t || "", description: l, url: i(e) };
          }
          return {
            title: e.fields.title || "",
            description: void 0,
            url: i(e),
          };
        },
        S = (0, d.j)((e) => {
          let { entry: i } = e,
            { getEntry: l, getEntryUrl: t } = (0, r.U)(),
            d = (e) =>
              (null == e
                ? void 0
                : e
                    .map((e) => {
                      let i = l(e);
                      if (null == i ? void 0 : i.fields) return T(i, t);
                    })
                    .filter(b.T)) || [];
          return ((e) => {
            let i = {
              title: e.fields.title || "",
              layoutType: "vertical",
              pageGroups: [],
            };
            if (e.fields.singleTopLink) {
              let t = l(e.fields.singleTopLink);
              i.singleTopLink = (0, I.t)(t);
            }
            if (e.fields.cta) {
              let t = l(e.fields.cta);
              i.cta = (0, k.T)(t);
            }
            let { menu: r } = e.fields;
            if (null == r ? void 0 : r.length)
              return (
                r.length > 1 && (i.layoutType = "horizontal"),
                (i.pageGroups = r
                  .map((e) => {
                    let i = l(e);
                    if (!i) return;
                    let { menu: r, title: n } = i.fields;
                    if (r)
                      return {
                        title: n,
                        pageListOrLinks: r
                          .map((e) => {
                            let i = l(e);
                            if (i) {
                              if ((0, s.I)("pageList", i)) {
                                let {
                                  title: e,
                                  featureCard: l,
                                  featureDescription: t,
                                  featureLinks: s,
                                  featureLinksTitle: r,
                                  featureMedia: n,
                                  menu: o,
                                  topLinks: a,
                                } = i.fields;
                                return {
                                  title: e,
                                  featureCard: l,
                                  featureDescription: t,
                                  featureLinksTitle: r,
                                  featureMedia: n,
                                  featureLinks: d(s),
                                  menu: d(o),
                                  topLinks: d(a),
                                };
                              }
                              {
                                let e = l(i);
                                if (!(null == e ? void 0 : e.fields)) return;
                                return T(e, t);
                              }
                            }
                          })
                          .filter(b.T),
                      };
                  })
                  .filter(b.T)),
                i
              );
          })(i);
        }),
        A = (0, d.j)((e) => {
          var i, l, d, n;
          let { entry: o, createEditAttributes: a } = e,
            { getEntry: u, getEntryUrl: f } = (0, r.U)();
          if (
            (0, s.I)("link", o) &&
            (null === (i = o.fields) || void 0 === i ? void 0 : i.text)
          )
            return {
              id: o.sys.id,
              label: o.fields.text,
              link: f(o),
              editAttributes: { title: a({ entry: o, fieldId: "title" }) },
            };
          if (
            (0, s.I)("linkList", o) &&
            (null === (l = o.fields) || void 0 === l ? void 0 : l.title)
          ) {
            let e = u(o.fields.link),
              i = {
                items: [],
                header: {
                  label: (null == e ? void 0 : e.fields.text) || o.fields.title,
                  link: f(o.fields.link),
                  subtitle: (0, t.jsx)(g.Q, { document: o.fields.description }),
                  editAttributes: {
                    title: a({ entry: o, fieldId: "title" }),
                    subtitle: a({ entry: o, fieldId: "description" }),
                  },
                },
              };
            return (
              null === (n = o.fields) ||
                void 0 === n ||
                null === (d = n.links) ||
                void 0 === d ||
                d.forEach((e) => {
                  let l = A(e);
                  l && i.items.push(l);
                }),
              { id: o.sys.id, label: o.fields.title, submenu: i }
            );
          }
        });
      var j = l(26660);
      let w = async (e) => {
          let {
            term: i,
            setDropdownItems: l,
            setDropdownSuggestions: t,
            url: s,
            entry: d,
            hasSearchPage: r,
          } = e;
          if (i.length < 3 || !i || "" === i) {
            l([]);
            return;
          }
          if (i.length < 4 || !i || "" === i) {
            t({});
            return;
          }
          let n = (0, c.V)(d),
            o = await (0, u.G)({
              url: s,
              params: { term: i, site: n, hasSearchPage: r },
            });
          (0, m.Xe)(o) &&
            ("hits" in o && l(o.hits.map((e) => e)),
            "updatedSuggestions" in o &&
              o.updatedSuggestions &&
              t(o.updatedSuggestions));
        },
        B = (0, d.j)((e) => {
          var i, l, d, c, b, y, k, I, x, T, B, C, N, P;
          let L,
            H,
            { entry: D, createEditAttributes: E } = e,
            O = (0, p.useSearchParams)(),
            _ = D.fields.domain,
            F = (0, f.l)(),
            { getEntryUrl: U, getEntry: R, getEntries: W } = (0, r.U)(),
            [Q, M] = (0, v.useState)([]),
            [z, q] = (0, v.useState)(),
            K = R(F.site),
            X = (0, m.FB)(K),
            G =
              null === (i = R(F.searchPage)) || void 0 === i
                ? void 0
                : i.fields.url,
            V = R(D.fields.header);
          if (!V) return;
          let J = "/".concat(
              D.fields.slug && "/" !== D.fields.slug ? D.fields.slug : ""
            ),
            $ = "my" === D.fields.domain ? "internal" : "external",
            Y = D.fields.enableLogin,
            Z = !!F.pagePermissions || !!F.sitePermissions || !!Y,
            ee = R(V.fields.globalMenu),
            ei = R(null == ee ? void 0 : ee.fields.organization),
            el = F.entry,
            et = el && "search" === el.fields.slug && !el.fields.parentPageId,
            es = (0, s.I)("participantStory", el),
            ed = (0, s.I)("knowledgeBaseArticlePage", el),
            er = (0, s.I)("clubPage", el),
            en = (0, h.h)(null == el ? void 0 : el.fields.topper),
            eo = {
              domain: _,
              theme: es
                ? "dark"
                : ed
                ? el.fields.topperTheme
                : er
                ? "dark"
                : (function (e) {
                    var i, l, t, s, d;
                    return (null == e ? void 0 : e.name) === "CardTopper"
                      ? (null == e
                          ? void 0
                          : null === (l = e.props) || void 0 === l
                          ? void 0
                          : l.theme) || a
                      : (null == e ? void 0 : e.name) ===
                          "ParticipantStoryTopper" ||
                        (null == e ? void 0 : e.name) === "DashboardTopper"
                      ? "dark"
                      : (null == e ? void 0 : e.name) === "SplitTopper" &&
                        (null == e
                          ? void 0
                          : null === (t = e.props) || void 0 === t
                          ? void 0
                          : t.spotTheme)
                      ? (0, o.UP)(
                          null == e
                            ? void 0
                            : null === (s = e.props) || void 0 === s
                            ? void 0
                            : s.spotTheme
                        )
                      : (null == e ? void 0 : e.name) === "LargeAssetTopper"
                      ? (0, o.V)(
                          null == e
                            ? void 0
                            : null === (d = e.props) || void 0 === d
                            ? void 0
                            : d.spotTheme
                        )
                      : (null == e ? void 0 : e.props) &&
                        "theme" in e.props &&
                        (null == e
                          ? void 0
                          : null === (i = e.props) || void 0 === i
                          ? void 0
                          : i.theme)
                      ? e.props.theme
                      : a;
                  })(en),
              localNavigationItems: [],
              expandedNavigationItems: [],
              isHomepage: F.singletons.isWWWHomePage || et,
              globalMenu: {
                id: "global-menu",
                label: "Quick links",
                socialLinks:
                  null === (l = (0, j.R)(ei)) || void 0 === l
                    ? void 0
                    : l.links,
                items: [],
              },
              searchLink: U(F.searchPage),
              hasSearchOverlay: !0,
              search: {
                dropdownItems: Q,
                dropdownSuggestions: z,
                hasDropdown: !0,
                dropdownCta: {
                  children: "View Results",
                  href: U(F.searchPage),
                },
                handleSearch: (e) => {
                  w({
                    term: e,
                    setDropdownItems: M,
                    setDropdownSuggestions: q,
                    url: X,
                    entry: D,
                    hasSearchPage: G,
                  });
                },
              },
              editAttributes: {
                title: E({ entry: D, fieldId: "title" }),
                moreItemsTitle: E({ entry: V, fieldId: "moreItemsTitle" }),
              },
            };
          D.fields.title &&
            (eo.sectionTitle = { title: D.fields.title, url: J }),
            F.session &&
              ((eo.session = F.session),
              ("my" === D.fields.domain || "alumni" === D.fields.domain) &&
                (null === (k = F.session.user) || void 0 === k
                  ? void 0
                  : k.loggedIn) &&
                (null === (I = F.session.user) || void 0 === I
                  ? void 0
                  : I.id) !== "anonymous" &&
                (eo.headerBanner = {
                  title:
                    "Hello" +
                    ((
                      null === (x = F.session.user) || void 0 === x
                        ? void 0
                        : x.displayName
                    )
                      ? ", " + F.session.user.displayName
                      : ""),
                })),
            null === (d = W(V.fields.links)) ||
              void 0 === d ||
              d.forEach((e) => {
                var i, l;
                if ((0, s.I)("linkList", e)) {
                  let l = n(e);
                  l &&
                    (null === (i = eo.localNavigationItems) ||
                      void 0 === i ||
                      i.push(l));
                } else if ((0, s.I)("expandedMenu", e)) {
                  let i = S(e);
                  i &&
                    (null === (l = eo.expandedNavigationItems) ||
                      void 0 === l ||
                      l.push(i));
                }
              }),
            null === (c = W(null == ee ? void 0 : ee.fields.links)) ||
              void 0 === c ||
              c.forEach((e) => {
                var i, l;
                let t = A(e);
                t &&
                  (null === (l = eo.globalMenu) ||
                    void 0 === l ||
                    null === (i = l.items) ||
                    void 0 === i ||
                    i.push(t));
              });
          let ea = R(V.fields.alert);
          if ((null == ea ? void 0 : ea.fields.apiSource) === "Manual")
            eo.headerAlert = {
              title:
                null === (T = ea.fields) || void 0 === T ? void 0 : T.title,
              href: U(
                null === (B = ea.fields) || void 0 === B ? void 0 : B.link
              ),
              description: (0, t.jsx)(g.Q, { document: ea.fields.description }),
              editAttributes: {
                url: E({ entry: ea.fields.link, fieldId: "url" }),
                title: E({ entry: V.fields.alert, fieldId: "title" }),
                description: E({
                  entry: V.fields.alert,
                  fieldId: "description",
                }),
              },
            };
          else if (
            (null == ea ? void 0 : ea.fields.apiSource) === "ServiceNow MINC"
          ) {
            let e = O.get("mock"),
              i = O.get("minctest"),
              l = { ...(e && { mock: e }), ...(i && { minctest: i }) },
              { data: t } = (0, u.s)({
                url: "/api/servicenow/minc",
                params: l,
              });
            if (
              null == t
                ? void 0
                : null === (C = t.result) || void 0 === C
                ? void 0
                : C.length
            ) {
              let e = t.result[0];
              (null == e ? void 0 : e.type) === "Service Interruption" &&
                (eo.headerAlert = {
                  title: D.fields.title,
                  href: "https://hbs.service-now.com/support",
                  description:
                    "We are currently experiencing a service interruption related to " +
                    (null == e ? void 0 : e.cmdb_ci.display_value) +
                    ".  Please refer to the IT Service Portal for additional details.",
                  theme: "red",
                });
            }
          }
          let eu = R(F.contentReferences),
            ef = R(V.fields.callToAction),
            ec = U(ef),
            ep = (null == ef ? void 0 : ef.fields.isExternalUrl) || !1;
          if (ef) {
            let e =
              (null == eu ? void 0 : eu.fields.programFormRedirect) && ec && ep
                ? eu.fields.programFormRedirect + "?initurl=" + ec
                : ec;
            eo.cta = { text: ef.fields.text, link: e };
          }
          return (
            V.fields.moreItemsTitle &&
              (eo.moreItemsTitle = V.fields.moreItemsTitle),
            K &&
              "Working Knowledge" === K.fields.title &&
              ((eo.isWorkingKnowledge = !0),
              (eo.workingKnowledgeTagline = V.fields.tagline),
              (eo.workingKnowledgeTitleLink =
                "https://www.library.hbs.edu/working-knowledge")),
            !Y ||
            (null === (b = F.session) || void 0 === b
              ? void 0
              : b.user.loggedIn)
              ? (null === (y = F.session) || void 0 === y
                  ? void 0
                  : y.user.loggedIn) &&
                Z &&
                ((L = "Log Out"),
                (H =
                  null === (P = F.session) || void 0 === P
                    ? void 0
                    : P.logoutUrl))
              : ((L = "Log In"),
                (H =
                  null === (N = F.session) || void 0 === N
                    ? void 0
                    : N.loginUrl)),
            L
              ? (eo.logInOut = {
                  text: L,
                  children: L,
                  link: H,
                  href: H,
                  hideIcon: !1,
                })
              : (eo.logInOut = void 0),
            (eo.siteType = $),
            (eo.enableLogout = Z),
            "online" === _
              ? (eo.logoLink = "https://online.hbs.edu")
              : "internal" === $
              ? (eo.logoLink = "https://inside.hbs.edu/myhbs.aspx")
              : (eo.logoLink = "https://www.hbs.edu"),
            eo
          );
        });
    },
    18570: (e, i, l) => {
      "use strict";
      l.d(i, { i: () => d });
      var t = l(6029),
        s = l(87972);
      function d(e) {
        return (i) => {
          let { entry: l, options: d } = i,
            { getEntry: r, createEditAttributes: n } = (0, s.U)(),
            o = r(l);
          return (null == o ? void 0 : o.fields) &&
            (null == o ? void 0 : o.metadata) &&
            (null == o ? void 0 : o.sys.id)
            ? (0, t.jsx)(e, { entry: o, options: d, createEditAttributes: n })
            : null;
        };
      }
    },
    28631: (e, i, l) => {
      "use strict";
      l.d(i, { v: () => f });
      var t = l(6029),
        s = l(26660),
        d = l(41272),
        r = l(71901),
        n = l(48249),
        o = l(87972),
        a = l(25231),
        u = l(39263);
      let f = (0, n.j)((e) => {
        var i,
          l,
          n,
          f,
          c,
          p,
          v,
          h,
          m,
          g,
          b,
          y,
          k,
          I,
          x,
          T,
          S,
          A,
          j,
          w,
          B,
          C,
          N,
          P;
        let { entry: L, createEditAttributes: H } = e,
          { getEntryUrl: D, getEntry: E, site: O } = (0, o.U)(),
          _ = {
            displayPrimaryCTA: !1,
            footerBlocks: [],
            footerLegalItems: [],
            disclaimer: L.fields.disclaimer,
            siteType:
              (null == O ? void 0 : O.fields.domain) === "my"
                ? "internal"
                : "external",
          },
          F = E(L.fields.organization);
        if (F) {
          let e = [];
          (null === (l = F.fields) || void 0 === l ? void 0 : l.address) &&
            e.push({
              children: (0, t.jsx)(
                "p",
                {
                  children: (0, u.v)(
                    null === (h = F.fields) || void 0 === h ? void 0 : h.address
                  ),
                },
                1
              ),
              editAttributes: H({ entry: F, fieldId: "address" }),
            }),
            ((null === (n = F.fields) || void 0 === n ? void 0 : n.email) ||
              (null === (f = F.fields) || void 0 === f ? void 0 : f.phone)) &&
              e.push({
                children: (0, t.jsxs)("p", {
                  children: [
                    (null === (m = F.fields) || void 0 === m
                      ? void 0
                      : m.email) &&
                      (0, t.jsx)(d.N, {
                        href: "mailto:".concat(
                          null === (g = F.fields) || void 0 === g
                            ? void 0
                            : g.email
                        ),
                        children:
                          null === (b = F.fields) || void 0 === b
                            ? void 0
                            : b.email,
                      }),
                    (null === (y = F.fields) || void 0 === y
                      ? void 0
                      : y.phone) &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (null === (k = F.fields) || void 0 === k
                            ? void 0
                            : k.email) && (0, t.jsx)("br", {}),
                          (0, t.jsx)(d.N, {
                            href: "tel:".concat(
                              null === (I = F.fields) || void 0 === I
                                ? void 0
                                : I.phone.replace(/(?!^\+)\D/g, "")
                            ),
                            "aria-label":
                              null === (x = F.fields) || void 0 === x
                                ? void 0
                                : x.phone.replace(/\./g, "-"),
                            children:
                              null === (T = F.fields) || void 0 === T
                                ? void 0
                                : T.phone,
                          }),
                        ],
                      }),
                    (null === (S = F.fields) || void 0 === S
                      ? void 0
                      : S.fax) &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          ((null === (A = F.fields) || void 0 === A
                            ? void 0
                            : A.email) ||
                            (null === (j = F.fields) || void 0 === j
                              ? void 0
                              : j.phone)) &&
                            (0, t.jsx)("br", {}),
                          (0, t.jsx)("span", {
                            "aria-label": "Fax number ".concat(
                              null === (w = F.fields) || void 0 === w
                                ? void 0
                                : w.fax.replace(/\./g, "-")
                            ),
                            children: "".concat(
                              null === (B = F.fields) || void 0 === B
                                ? void 0
                                : B.fax,
                              " (fax)"
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                editAttributes: H({ entry: F, fieldId: "email" }),
              }),
            (null === (c = F.fields) || void 0 === c ? void 0 : c.hours) &&
              e.push({
                children: (0, t.jsx)("p", {
                  children: (0, u.v)(
                    null === (C = F.fields) || void 0 === C ? void 0 : C.hours
                  ),
                }),
                editAttributes: H({ entry: F, fieldId: "hours" }),
              }),
            null === (v = _.footerBlocks) ||
              void 0 === v ||
              v.push({
                title:
                  null === (p = F.fields) || void 0 === p ? void 0 : p.title,
                editAttributes: { title: H({ entry: F, fieldId: "title" }) },
                items: e,
              });
        }
        L.fields.links &&
          (null === (N = _.footerBlocks) ||
            void 0 === N ||
            N.push({
              items: L.fields.links.map((e, i) => ({
                children: (0, t.jsx)(d.N, { ...(0, a.t)(e) }, i),
                editAttributes: H({ entry: e, fieldId: "title" }),
              })),
            })),
          L.fields.organization &&
            (null === (P = _.footerBlocks) ||
              void 0 === P ||
              P.push({
                items: [
                  {
                    children: (0, t.jsx)(r.L, {
                      ...(0, s.R)(L.fields.organization),
                    }),
                  },
                ],
              }));
        let U = E(L.fields.cta);
        return (
          U &&
            ((_.displayPrimaryCTA = !0),
            (_.footerPrimaryCta = {
              title: U.fields.title,
              href: D(U.fields.link),
              description: (0, t.jsx)(u.Q, { document: U.fields.description }),
              editAttributes: {
                url: H({ entry: U.fields.link, fieldId: "url" }),
                title: H({ entry: U, fieldId: "title" }),
                description: H({ entry: U, fieldId: "description" }),
              },
            })),
          (_.footerLegalItems &&
            (null === (i = _.footerLegalItems) || void 0 === i
              ? void 0
              : i.length) !== 0) ||
            (_.footerLegalItems = [
              { children: "Site Map", href: "https://www.hbs.edu/siteindex/" },
              { children: "Jobs", href: "https://www.hbs.edu/employment" },
              {
                children: "Harvard University",
                href: "https://www.harvard.edu",
              },
              {
                children: "Trademarks",
                href: "https://trademark.harvard.edu/pages/trademark-notice/",
              },
              {
                children: "Policies",
                href: "https://www.hbs.edu/about/campus-and-culture/policies",
              },
              {
                children: "Accessibility",
                href: "https://accessibility.harvard.edu/",
              },
              {
                children: "Digital Accessibility",
                href: "https://accessibility.huit.harvard.edu/digital-accessibility-policy",
              },
            ]),
          _
        );
      });
    },
    30774: (e, i, l) => {
      "use strict";
      l.d(i, { b: () => v });
      var t = l(6029),
        s = l(55729),
        d = l(48249),
        r = l(87972),
        n = l(18907),
        o = l(39263),
        a = l(74487),
        u = l(61778),
        f = l(91014),
        c = l(85761),
        p = l(78408);
      let v = (0, d.j)((e) => {
        let { entry: i, createEditAttributes: l } = e,
          { getEntry: d, getEntryUrl: v, site: h } = (0, r.U)(),
          m = (0, c.l)(),
          [g, b] = (0, s.useState)([]),
          y = (0, p.oD)(m),
          k = (0, p.FB)(h),
          I = async (e) => {
            if (e.length < 3 || !e || "" === e) {
              b([]);
              return;
            }
            let i = await (0, n.G)({ url: k, params: { term: e } });
            y && (0, p.Xe)(i) && b(i.hits.map((e) => e));
          };
        return {
          theme: i.fields.theme,
          title: i.fields.title,
          hiddenTitle:
            m.request.path.substring(1) ===
              (null == h ? void 0 : h.fields.slug) ||
            ("/" === m.request.path &&
              (null == h ? void 0 : h.fields.domain) !== "www")
              ? null == h
                ? void 0
                : h.fields.title
              : void 0,
          searchDropdown: {
            placeholder: i.fields.searchPlaceholder,
            dropdownCta: (0, f.T)(i.fields.searchDropdownCta),
            dropdownFooterLabel: i.fields.searchDropdownFooterLabel,
            hasDropdown: y,
            searchLink: v(m.searchPage),
            handleSearch: (e) => {
              I(e);
            },
            dropdownItems: g,
            editAttributes: {
              dropdownFooterLabel: l({
                entry: i,
                fieldId: "searchDropdownFooterLabel",
              }),
            },
          },
          ctaLabel: i.fields.ctaLabel,
          ctaList: (0, u.H)(i.fields.ctaLinks),
          mediaAsset: (0, a.N2)(i.fields.media),
          mediaHighlightCaption: i.fields.mediaHighlightCaption
            ? (0, t.jsx)(o.Q, { document: i.fields.mediaHighlightCaption })
            : void 0,
          mediaLink: v(d(i.fields.mediaLink)),
          editAttributes: {
            title: l({ entry: i, fieldId: "title" }),
            mediaHighlightCaption: l({
              entry: i,
              fieldId: "mediaHighlightCaption",
            }),
          },
        };
      });
    },
    32732: (e, i, l) => {
      "use strict";
      l.d(i, { F: () => o });
      var t = l(48249),
        s = l(91014),
        d = l(74487),
        r = l(87972),
        n = l(39263);
      let o = (0, t.j)((e) => {
        var i, l;
        let { entry: t } = e,
          { getEntry: o } = (0, r.U)(),
          a = o(t.fields.event);
        if (
          !(null == a
            ? void 0
            : null === (i = a.fields) || void 0 === i
            ? void 0
            : i.title)
        )
          return;
        let u = [a.fields.startTime, a.fields.endTime].filter((e) => !!e),
          f = a.fields.description
            ? (0, n.Q)({ document: a.fields.description })
            : void 0,
          c = (0, d.N2)(t.fields.media);
        if (c)
          return {
            title: a.fields.title,
            description: null != f ? f : void 0,
            dates: u,
            location: a.fields.location
              ? {
                  title:
                    null === (l = a.fields.location) || void 0 === l
                      ? void 0
                      : l
                          .map((e) => {
                            var i;
                            return null === (i = o(e)) || void 0 === i
                              ? void 0
                              : i.fields.title;
                          })
                          .join(", "),
                }
              : void 0,
            cta: t.fields.cta ? (0, s.T)(t.fields.cta) : void 0,
            theme: t.fields.theme,
            media: c,
          };
      });
    },
    32768: (e, i, l) => {
      "use strict";
      l.d(i, { _: () => p });
      var t = l(48249),
        s = l(43160),
        d = l(75e3),
        r = l(73e3),
        n = l(90932),
        o = l(58012),
        a = l(57957),
        u = l(85761),
        f = l(87972),
        c = l(1204);
      let p = (0, t.j)((e) => {
        var i, l, t, p;
        let { entry: v } = e,
          { getEntry: h } = (0, f.U)(),
          m = { theme: v.fields.theme, stories: [] },
          { entry: g } = (0, u.l)(),
          b = (0, u.l)(),
          y = h(g),
          k = h(b.site),
          I = (0, c.V)(k);
        m.pageTitle = null == y ? void 0 : y.fields.title;
        let x = [],
          T = "",
          [S, ...A] = v.fields.articles || [];
        S &&
          ((m.heroTeaseContent = (0, s.F)(S)),
          (null === (t = m.heroTeaseContent) || void 0 === t
            ? void 0
            : t.title) && (T = m.heroTeaseContent.title)),
          v.fields.query ||
            null == A ||
            A.slice(0, 4).forEach((e) => {
              let i = (0, d.N)(e);
              i && m.stories.push(i);
            });
        let j = (0, o.o)(
          null == v
            ? void 0
            : null === (i = v.fields) || void 0 === i
            ? void 0
            : i.query
        );
        j && !j.size && (j.size = 5),
          (null == j ? void 0 : j.size) && (j.size = j.size + 2);
        let [w, ...B] =
          (null === (l = (0, a.SQ)(j).data) || void 0 === l
            ? void 0
            : l.hits) || [];
        w &&
          !v.fields.articles &&
          ((m.heroTeaseContent = (0, n.vf)(w)),
          (null === (p = m.heroTeaseContent) || void 0 === p
            ? void 0
            : p.title) && (T = m.heroTeaseContent.title));
        let C = 0,
          N = 4 - +!!v.fields.articles;
        return (
          null == B ||
            B.forEach((e) => {
              var i;
              let l = (0, r.NQ)(e, I),
                t =
                  null == l
                    ? void 0
                    : null === (i = l.title) || void 0 === i
                    ? void 0
                    : i.toString();
              l &&
                t &&
                l.title !== T &&
                !x.includes(t) &&
                C < N &&
                (m.stories.push(l), x.push(t), C++);
            }),
          m.heroTeaseContent &&
            ((m.heroTeaseContent.isTopper = !0),
            m.heroTeaseContent.media
              ? (m.heroTeaseContent.layout = "side-by-side-media-left")
              : (m.heroTeaseContent.layout = "text-only")),
          m
        );
      });
    },
    37627: (e, i, l) => {
      "use strict";
      l.d(i, { O: () => t });
      let t = (0, l(48249).j)((e) => {
        let { entry: i } = e;
        return { isBigArt: !0, theme: i.fields.theme };
      });
    },
    38131: (e, i, l) => {
      "use strict";
      l.d(i, { a: () => o });
      var t = l(6029),
        s = l(48249),
        d = l(39263),
        r = l(74487),
        n = l(91014);
      let o = (0, s.j)((e) => {
        let { entry: i, createEditAttributes: l } = e;
        return {
          type: "Simple",
          title: i.fields.title,
          theme: i.fields.theme,
          intro: (0, t.jsx)(d.Q, { document: i.fields.subtitle }),
          media: (0, r.N2)(i.fields.media),
          cta: (0, n.T)(i.fields.cta),
          editAttributes: {
            title: l({ entry: i, fieldId: "title" }),
            subtitle: l({ entry: i, fieldId: "subtitle" }),
          },
        };
      });
    },
    40001: (e, i, l) => {
      "use strict";
      l.d(i, { T: () => a });
      var t = l(6029),
        s = l(48249),
        d = l(39263),
        r = l(87972),
        n = l(15844),
        o = l(55729);
      let a = (0, s.j)((e) => {
        let { entry: i, options: l, createEditAttributes: s } = e,
          { getEntries: a } = (0, r.U)(),
          { selectedOptions: u, onSelectedOptionChange: f } = (0, n.KZ)(),
          c = {
            title: i.fields.title || "",
            description: i.fields.description
              ? (0, t.jsx)(d.Q, { document: i.fields.description })
              : void 0,
            theme: i.fields.theme,
            editAttributes: {
              title: s({ entry: i, fieldId: "title" }),
              description: s({ entry: i, fieldId: "description" }),
            },
          },
          p = a(i.fields.facets),
          v = [],
          h = (0, o.useRef)([]),
          m = (null == l ? void 0 : l.hiddenFacetKeys) || [],
          g = (null == l ? void 0 : l.hiddenFacetConditions) || void 0;
        p.forEach((e) => {
          if (e.fields.field && !m.includes(e.fields.field)) {
            let l = [];
            e.fields.terms &&
              l.push(
                { label: "Select One", value: "" },
                ...e.fields.terms.map((e) => ({ label: e, value: e }))
              );
            let t = u[e.fields.field];
            v.push({
              key: e.fields.field,
              label: e.fields.label || "",
              options: l,
              selectedOption: t || "",
              onChange: (i) => {
                f(e.fields.field, i.target.value);
              },
              editAttributes: { label: s({ entry: i, fieldId: "label" }) },
            });
          }
        });
        let [b, y] = (0, o.useState)([]);
        return (
          (c.items = b),
          (0, o.useEffect)(() => {
            let e = new URL(window.location.href);
            p.forEach((l) => {
              let t = !0;
              if (l.fields.field && m.includes(l.fields.field)) {
                var d, r;
                let i = e.searchParams.get(l.fields.field) || void 0,
                  s =
                    ((null == g ? void 0 : g.key) &&
                      (null ===
                        (d = e.searchParams.get(null == g ? void 0 : g.key)) ||
                      void 0 === d
                        ? void 0
                        : d.toLowerCase())) ||
                    void 0;
                i ||
                  s ===
                    (null == g
                      ? void 0
                      : null === (r = g.value) || void 0 === r
                      ? void 0
                      : r.toLowerCase()) ||
                  (t = !1);
              }
              if (l.fields.field && t) {
                let e = [];
                l.fields.terms &&
                  e.push(
                    { label: "Select One", value: "" },
                    ...l.fields.terms.map((e) => ({ label: e, value: e }))
                  );
                let t = u[l.fields.field];
                v.find((e) => e.key === l.fields.field) ||
                  v.push({
                    key: l.fields.field,
                    label: l.fields.label || "",
                    options: e,
                    selectedOption: t || "",
                    onChange: (e) => {
                      f(l.fields.field, e.target.value);
                    },
                    editAttributes: {
                      label: s({ entry: i, fieldId: "label" }),
                    },
                  });
              }
            }),
              JSON.stringify(v) !== JSON.stringify(h.current) &&
                (y(v), (h.current = v));
          }, [p, m, g, u, f, y]),
          c
        );
      });
    },
    42501: () => {},
    43160: (e, i, l) => {
      "use strict";
      l.d(i, { F: () => p });
      var t = l(6029),
        s = l(48249),
        d = l(74487),
        r = l(65149),
        n = l(39263),
        o = l(57957),
        a = l(16682),
        u = l(58012),
        f = l(90932),
        c = l(87972);
      let p = (0, s.j)((e) => {
        let { entry: i, createEditAttributes: l } = e,
          { getEntry: s, getEntryUrl: p } = (0, c.U)(),
          v = null;
        if ((0, a.I)("query", i)) {
          var h;
          (v = (0, u.o)(i)) && (v.size = 1);
          let e = (0, o.SQ)(v),
            l = (0, f.vf)(
              null == e
                ? void 0
                : null === (h = e.data) || void 0 === h
                ? void 0
                : h.hits[0]
            );
          if (l) return l;
        }
        if ((0, a.I)("articlePage", i)) {
          let e = {
            title: i.fields.title,
            link: p(i),
            byline: (0, r.u)(i),
            media: (0, d.N2)(i.fields.leadImage),
            subheading: (0, t.jsx)(n.Q, {
              document: i.fields.shortDescription || i.fields.description,
              disableParagraphs: !0,
            }),
          };
          e.byline && (e.byline.headshots = !0);
          let o = s(i.fields.overline);
          return (
            (null == o ? void 0 : o.fields.text) &&
              o.fields.url &&
              (e.overline = { label: o.fields.text, link: p(o) }),
            (e.editAttributes = {
              subheading: l({ entry: i, fieldId: "shortDescription" }),
              overline: l({ entry: o, fieldId: "text" }),
            }),
            e
          );
        }
        if ((0, a.I)("landingPage", i) || (0, a.I)("detailPage", i))
          return { title: i.fields.title, link: p(i) };
      });
    },
    48913: (e, i, l) => {
      "use strict";
      l.d(i, { $: () => c });
      var t = l(6029),
        s = l(48249),
        d = l(74487),
        r = l(39263),
        n = l(91014),
        o = l(54956),
        a = l(58012),
        u = l(57957),
        f = l(87972);
      let c = (0, s.j)((e) => {
        var i, l, s;
        let { entry: c, createEditAttributes: p } = e,
          { getIsPersonPastHbsFaculty: v } = (0, f.U)(),
          h = [],
          m = {
            title: c.fields.title,
            intro: c.fields.description
              ? (0, t.jsx)(r.Q, { document: c.fields.description })
              : void 0,
            mediaAssetImage:
              null === (i = (0, d.N2)(c.fields.media)) || void 0 === i
                ? void 0
                : i.image,
            theme: c.fields.theme,
            editAttributes: {
              title: p({ entry: c, fieldId: "title" }),
              intro: p({ entry: c, fieldId: "description" }),
            },
          };
        if (null === (l = c.fields.faculty) || void 0 === l ? void 0 : l.length)
          null === (s = c.fields.faculty) ||
            void 0 === s ||
            s.forEach((e) => {
              if (v(e)) return;
              let i = (0, o.R)(e);
              i && h.push(i);
            });
        else if (c.fields.query) {
          let e = (0, a.o)(c.fields.query),
            { data: i } = (0, u.SQ)(e),
            l = new Set(),
            t = [];
          (null == i ? void 0 : i.hits) &&
            (i.hits.forEach((e) => {
              var i;
              (null === (i = e.display) || void 0 === i
                ? void 0
                : i.personTeases) &&
                e.display.personTeases.forEach((e) => {
                  if (!l.has(e.name)) {
                    var i, s;
                    l.add(e.name);
                    let d = {
                      name: e.name,
                      titles: null !== (s = e.titles) && void 0 !== s ? s : [],
                      link: e.url,
                    };
                    (null === (i = e.thumbnail) || void 0 === i
                      ? void 0
                      : i.src) && (d.portrait = { image: e.thumbnail }),
                      e.url && t.push(d);
                  }
                });
            }),
            (h = t.slice(0, 5)));
        }
        let g = (0, n.T)(c.fields.facultyLink);
        return (
          h.length &&
            (m.featuredFaculty = {
              heading: c.fields.facultyHeading,
              cta: g,
              people: h,
              editAttributes: {
                heading: p({ entry: c, fieldId: "facultyHeading" }),
              },
            }),
          m
        );
      });
    },
    49291: (e, i, l) => {
      "use strict";
      l.d(i, { z: () => o });
      var t = l(6029),
        s = l(48249),
        d = l(39263),
        r = l(74487),
        n = l(91014);
      let o = (0, s.j)((e) => {
        let { entry: i, createEditAttributes: l } = e;
        return {
          type: "Card",
          title: i.fields.title || "",
          subtitle: (0, t.jsx)(d.Q, { document: i.fields.subtitle }),
          ctaList: {
            items: i.fields.ctaList
              ? i.fields.ctaList.map((e) => {
                  let i = (0, n.T)(e);
                  return i || { children: "" };
                })
              : void 0,
          },
          ctaButton: (0, n.T)(i.fields.ctaButton),
          media: (0, r.N2)(i.fields.media),
          theme: i.fields.theme,
          spotTheme: i.fields.spotTheme,
          editAttributes: {
            title: l({ entry: i, fieldId: "title" }),
            subtitle: l({ entry: i, fieldId: "subtitle" }),
          },
        };
      });
    },
    51626: () => {},
    54956: (e, i, l) => {
      "use strict";
      l.d(i, { R: () => n });
      var t = l(48249),
        s = l(74487),
        d = l(87972),
        r = l(16682);
      let n = (0, t.j)((e) => {
        let { entry: i, createEditAttributes: l } = e,
          { getPersonLink: t, getEntityName: n, getEntry: o } = (0, d.U)(),
          a = { name: "", titles: [] };
        if (i) {
          let e = (0, r.I)("personWrapper", i) ? o(i.fields.person) : i,
            d = (0, s.RC)(i);
          return (
            (null == d ? void 0 : d.image) &&
              ((d.image.width = "400px"), (d.image.height = "400px")),
            (a.name = n(i)),
            (a.titles = (null == e ? void 0 : e.fields.jobTitles) || [""]),
            (a.portrait = d || void 0),
            (a.link = t(i)),
            (a.editAttributes = {
              name: l({ entry: e, fieldId: "firstName" }),
              titles: l({ entry: e, fieldId: "jobTitles" }),
            }),
            a
          );
        }
      });
    },
    57957: (e, i, l) => {
      "use strict";
      l.d(i, { SQ: () => r, zD: () => n });
      var t = l(18907);
      let s = "/api/search/query";
      function d(e) {
        var i, l, t, s;
        return (null == e ? void 0 : e.query) === void 0
          ? {}
          : {
              from:
                null == e
                  ? void 0
                  : null === (i = e.from) || void 0 === i
                  ? void 0
                  : i.toString(),
              size:
                null == e
                  ? void 0
                  : null === (l = e.size) || void 0 === l
                  ? void 0
                  : l.toString(),
              index: e.index,
              query: e.query,
              facets:
                null == e
                  ? void 0
                  : null === (t = e.facets) || void 0 === t
                  ? void 0
                  : t.join(","),
              filters: null == e ? void 0 : e.filters,
              sort: null == e ? void 0 : e.sort,
              facetLimit:
                null == e
                  ? void 0
                  : null === (s = e.facetLimit) || void 0 === s
                  ? void 0
                  : s.toString(),
            };
      }
      function r(e) {
        var i;
        let l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = null == e ? void 0 : e.size;
        l.dedupe && (r = (null != r ? r : 25) + 10);
        let n = { url: s, params: d({ ...e, size: r }) },
          a = (0, t.s)(n);
        return (
          l.dedupe &&
            (null === (i = a.data) || void 0 === i ? void 0 : i.hits) &&
            o({ search: e, options: l, data: a.data }),
          a
        );
      }
      function n(e) {
        let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = {
            method: "POST",
            url: s,
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              queries: e.map((e) => {
                let l = null == e ? void 0 : e.size;
                return (
                  i.dedupe && (l = (null != l ? l : 25) + 10),
                  d({ ...(null != e ? e : {}), size: l })
                );
              }),
            }),
          },
          r = (0, t.s)(l);
        return (
          i.dedupe &&
            r.data &&
            r.data.forEach((l, t) => o({ options: i, data: l, search: e[t] })),
          r
        );
      }
      function o(e) {
        var i, l;
        let { data: t, search: s, options: d } = e,
          r = [],
          n =
            null !==
              (l =
                null !== (i = null == s ? void 0 : s.size) && void 0 !== i
                  ? i
                  : d.defaultSize) && void 0 !== l
              ? l
              : 25;
        for (let e of t.hits)
          if (
            (r.some(
              (i) =>
                ("id" in i && "id" in e && i.id === e.id) ||
                ("HBSTitle" in i &&
                  "HBSTitle" in e &&
                  i.HBSTitle === e.HBSTitle)
            ) || r.push(e),
            r.length >= n)
          )
            break;
        t.hits = r;
      }
    },
    58012: (e, i, l) => {
      "use strict";
      l.d(i, { o: () => t });
      let t = (0, l(48249).j)((e) => {
        let { entry: i, options: l = {} } = e;
        if (!i.fields.query) return null;
        let t = {
            ...l,
            query:
              l.query || "(" + i.fields.query + ") AND -HBSDataLifecycle:Draft",
            size: l.size || parseInt(i.fields.limit || "25", 10),
            index: l.index || i.fields.index || "modern",
          },
          s = i.fields.sort;
        return (
          t.sort ||
            !s ||
            ((t.sort = s.join(",")),
            t.sort ||
              ("legacy" !== i.fields.index &&
                "classnotes" !== i.fields.index) ||
              (t.sort = "HBSSortDate")),
          t
        );
      });
    },
    60872: (e, i, l) => {
      "use strict";
      l.d(i, { V: () => u });
      var t = l(6029),
        s = l(48249),
        d = l(39263),
        r = l(87972),
        n = l(74487),
        o = l(61030),
        a = l(69473);
      let u = (0, s.j)((e) => {
        var i, l, s, u, f, c, p, v, h, m;
        let { entry: g, options: b, createEditAttributes: y } = e,
          { getEntryUrl: k, getEntry: I, getEntries: x } = (0, r.U)(),
          { t: T } = (0, a.c)(),
          S = {
            title: g.fields.title,
            quote: g.fields.quote
              ? (0, t.jsx)(d.Q, {
                  document: g.fields.quote,
                  disableParagraphs: !0,
                })
              : void 0,
            infoItems: [],
            editAttributes: { quote: y({ entry: g, fieldId: "quote" }) },
          },
          A = I(g.fields.person),
          j =
            null === (i = I(g.fields.location)) || void 0 === i
              ? void 0
              : i.fields.title,
          w = (0, n.N2)(null == A ? void 0 : A.fields.image),
          B = g.fields.role;
        g.fields.title || (S.title = (0, o.H)(A)),
          g.fields.role ||
            (B =
              null == A
                ? void 0
                : null === (c = A.fields.jobTitles) || void 0 === c
                ? void 0
                : c.join(", ")),
          (null == w ? void 0 : w.image) &&
            ((S.mediaAsset = w), (S.mediaAsset.aspectRatio = "1/1"));
        let C =
            null ===
              (l = x(
                null == b
                  ? void 0
                  : null === (s = b.parentPage) || void 0 === s
                  ? void 0
                  : s.fields.industry
              )) || void 0 === l
              ? void 0
              : l.map((e) => e.fields.title).filter(Boolean),
          N =
            null ===
              (u = x(
                null == b
                  ? void 0
                  : null === (f = b.parentPage) || void 0 === f
                  ? void 0
                  : f.fields.program
              )) || void 0 === u
              ? void 0
              : u
                  .map((e) => ({ href: k(e), children: e.fields.title }))
                  .filter(Boolean);
        return (
          B &&
            (null === (p = S.infoItems) ||
              void 0 === p ||
              p.push({
                heading: T("role"),
                description: B,
                editAttribute: y({ entry: g, fieldId: "role" }),
              })),
          C.length > 0 &&
            (null === (v = S.infoItems) ||
              void 0 === v ||
              v.push({
                heading: T("industry"),
                description: C,
                editAttribute: y({ entry: g, fieldId: "industry" }),
              })),
          j &&
            (null === (h = S.infoItems) ||
              void 0 === h ||
              h.push({
                heading: T("location"),
                description: j,
                editAttribute: y({ entry: g, fieldId: "location" }),
              })),
          N &&
            (null === (m = S.infoItems) ||
              void 0 === m ||
              m.push({
                heading: T("program"),
                description: N,
                editAttribute: y({ entry: g, fieldId: "program" }),
              })),
          S
        );
      });
    },
    63822: (e, i, l) => {
      "use strict";
      l.d(i, { C: () => s });
      var t = l(3050);
      function s(e) {
        return e
          ? (function e(i) {
              let l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : " ";
              return (null == i ? void 0 : i.content)
                ? i.content.reduce((s, d, r) => {
                    let n = "";
                    if (t._$.isText(d)) n = d.value;
                    else if (
                      (t._$.isBlock(d) || t._$.isInline(d)) &&
                      !(n = e(d, l)).length
                    )
                      return s;
                    let o = i.content[r + 1];
                    return s + n + (o && t._$.isBlock(o) ? l : "");
                  }, "")
                : "";
            })(e)
          : "";
      }
    },
    64299: (e, i, l) => {
      "use strict";
      l.d(i, { S: () => o });
      var t = l(6029),
        s = l(87972),
        d = l(48249),
        r = l(74487),
        n = l(39263);
      let o = (0, d.j)((e) => {
        var i, l, d, o;
        let a, u;
        let { entry: f } = e,
          {
            getEntry: c,
            getEntries: p,
            getEntityName: v,
            getPersonLink: h,
          } = (0, s.U)(),
          m = {},
          g = c(f.fields.person);
        if (
          ((m.theme = f.fields.theme),
          g &&
            (null === (i = p(g.fields.academicUnit)) ||
              void 0 === i ||
              i.forEach((e) => {
                (null == e ? void 0 : e.fields.title) &&
                  (u = [u, e.fields.title].filter(Boolean).join(", "));
              })),
          g)
        ) {
          (m.titles = [
            ...(g.fields.jobTitles || []),
            ...(g.fields.secondaryPosition || []),
          ]),
            (m.name = v(g)),
            a || (a = (0, r.RC)(g)),
            (null == a
              ? void 0
              : null === (l = a.image) || void 0 === l
              ? void 0
              : l.src) &&
              (m.portrait = { ...a.image, width: "245px", height: "259px" });
          let e = h(g);
          !e &&
            p(
              null === (d = g.fields) || void 0 === d ? void 0 : d.personType
            ).some((e) => "HBS Faculty" === e.fields.title) &&
            (null === (o = g.fields) || void 0 === o
              ? void 0
              : o.hbsEnterpriseID) &&
            (e = "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=".concat(
              g.fields.hbsEnterpriseID
            )),
            e && (m.bioLink = { href: e, children: "Read full bio" }),
            g.fields.bio &&
              (m.bio = (0, t.jsx)(n.Q, { document: g.fields.bio }));
        }
        return m;
      });
    },
    65149: (e, i, l) => {
      "use strict";
      l.d(i, { u: () => o });
      var t = l(48249),
        s = l(16682),
        d = l(87972),
        r = l(74487);
      let n = (0, t.j)((e) => {
          let i,
            { entry: l, createEditAttributes: t } = e,
            { getPersonLink: n, getEntityName: o, getEntry: a } = (0, d.U)();
          if (
            ((i = (0, s.I)("personWrapper", l) ? a(l.fields.person) : l),
            (0, s.I)("person", i) || (0, s.I)("organization", i))
          )
            return {
              name: o(l),
              link: n(l),
              avatar: (0, r.RC)(l),
              editAttributes: { name: t({ entry: l, fieldId: "firstName" }) },
            };
        }),
        o = (0, t.j)((e) => {
          var i, l, t;
          let { entry: r, createEditAttributes: o } = e,
            { getIsPersonPastHbsFaculty: a } = (0, d.U)(),
            u = {
              type: "ShowAll",
              publicationDate: r.fields.publicationDate,
              editAttributes: {
                publicationDate: o({ entry: r, fieldId: "publicationDate" }),
              },
            };
          if (
            ((u.authors = []),
            (0, s.I)("articlePage", r) &&
              (null === (t = r.fields.authors) ||
                void 0 === t ||
                t.forEach((e) => {
                  var i;
                  let l = n(e);
                  l && (null === (i = u.authors) || void 0 === i || i.push(l));
                }),
              0 === u.authors.length && r.fields.legacyStoryBylineTypein))
          ) {
            let e = { name: r.fields.legacyStoryBylineTypein };
            u.authors.push(e);
          }
          return (
            (u.featuredAuthors = []),
            null === (i = r.fields.relatedFaculty) ||
              void 0 === i ||
              i.forEach((e) => {
                var i;
                if (a(e)) return;
                let l = n(e);
                l &&
                  (null === (i = u.featuredAuthors) ||
                    void 0 === i ||
                    i.push(l));
              }),
            (null === (l = u.featuredAuthors) || void 0 === l
              ? void 0
              : l.length) > 0 && (u.headshots = !0),
            u
          );
        });
    },
    70262: (e, i, l) => {
      "use strict";
      l.d(i, { X: () => t });
      let t = (0, l(48249).j)((e) => {
        let { entry: i } = e;
        return { variant: "article", spotTheme: i.fields.spotTheme };
      });
    },
    71901: (e, i, l) => {
      "use strict";
      l.d(i, { L: () => n });
      var t = l(6029);
      l(51626);
      var s = l(24999),
        d = l(41272);
      function r(e) {
        let {
          href: i,
          icon: l,
          title: r,
          print: n = !1,
          ariaLabel: o,
          editAttributes: a,
        } = e;
        return l && (i || n)
          ? n
            ? (0, t.jsxs)("button", {
                className: "hbs-social-media-link",
                onClick: () => window.print(),
                children: [
                  (0, t.jsx)(s.I, {
                    name: l,
                    className: "hbs-social-media-link__icon",
                  }),
                  (0, t.jsx)("span", {
                    className: "hbs-global-visually-hidden",
                    children: o || r,
                  }),
                ],
              })
            : (0, t.jsxs)(d.N, {
                editAttributes: a,
                className: "hbs-social-media-link",
                href: i,
                children: [
                  (0, t.jsx)("span", {
                    className: "hbs-social-media-link__text",
                    children: o || r,
                  }),
                  (0, t.jsx)(s.I, {
                    name: l,
                    className: "hbs-social-media-link__icon",
                  }),
                ],
              })
          : null;
      }
      function n(e) {
        let { links: i } = e;
        return !i || i.length < 1
          ? null
          : (0, t.jsx)("div", {
              className: "hbs-social-media-links",
              children: i.map((e, i) => (0, t.jsx)(r, { ...e }, i)),
            });
      }
    },
    73e3: (e, i, l) => {
      "use strict";
      l.d(i, { sM: () => r, e9: () => n, NQ: () => d });
      var t = l(85050),
        s = l(3450);
      function d(e, i, l) {
        return (0, s.M)("modernArticle", e)
          ? n(e, i)
          : (0, s.M)("legacyArticle", e)
          ? r(e, l)
          : void 0;
      }
      function r(e, i) {
        let l = {
          type: "Article",
          title: e.HBSTitle,
          link: e.HBSLink,
          tease: e.HBSDescription,
          byline: { publicationDate: e.HBSPubDate, type: "ShowAll" },
          sortDate: e.HBSSortDate,
        };
        if (
          (e.HBSSource && (l.overline = { label: e.HBSSource }), e.HBSByline)
        ) {
          let i = e.HBSByline,
            t = e.HBSByline;
          if (
            ((t.startsWith("by ") || t.startsWith("By ")) &&
              (t = t.substring(3)),
            (t.startsWith("by: ") || t.startsWith("By: ")) &&
              (t = t.substring(4)),
            (i.startsWith("re ") || i.startsWith("Re ")) &&
              (i = i.substring(3)),
            (i.startsWith("re: ") || i.startsWith("Re: ")) &&
              (i = i.substring(4)).indexOf(", ") > 0)
          ) {
            let e = "";
            i.split(", ").forEach((i) => {
              i.indexOf("@") > 0 || (e = e ? e + ", " + i : i);
            }),
              (i = e);
          }
          t !== e.HBSByline && (l.byline.authors = [{ name: t }]),
            i !== e.HBSByline && (l.byline.featuredAuthors = [{ name: i }]);
        }
        return e.HBSThumbnail && (l.image = { src: e.HBSThumbnail, ...i }), l;
      }
      function n(e, i) {
        var l, d, r, n, o, a, u, f, c, p, v, h, m, g, b, y, k, I, x, T, S;
        let A = e.description;
        (null === (l = e.subset) || void 0 === l
          ? void 0
          : l.includes("legacy")) &&
          !A &&
          (A = e.body),
          (null === (d = e.highlight) || void 0 === d
            ? void 0
            : d.description) &&
            Array.isArray(
              null === (r = e.highlight) || void 0 === r
                ? void 0
                : r.description
            ) &&
            (A =
              null === (c = e.highlight) || void 0 === c
                ? void 0
                : c.description[0]),
          (null === (n = e.highlight) || void 0 === n ? void 0 : n.body) &&
            Array.isArray(
              null === (o = e.highlight) || void 0 === o ? void 0 : o.body
            ) &&
            (A = (function (e) {
              if (!e) return;
              let i = e;
              return (
                e &&
                  e.indexOf(
                    "<span class='result_token' style='background-color:#ffc8c4;'>"
                  ) > -1 &&
                  e.indexOf("</span>") > -1 &&
                  (i = e
                    .replaceAll(
                      "<span class='result_token' style='background-color:#ffc8c4;'>",
                      "<mark>"
                    )
                    .replaceAll("</span>", "</mark>")),
                i
              );
            })(
              null === (p = e.highlight) || void 0 === p ? void 0 : p.body[0]
            )),
          !A && e.body && (A = e.body.substring(0, 500).trim());
        let j = {
          type: "Article",
          title: e.title,
          link: e.url,
          tease: A && (0, t.Q)(A),
        };
        if ((0, s.M)("modern", e)) {
          if (
            (i &&
            (null === (v = e.display) || void 0 === v ? void 0 : v.site) === i
              ? (null === (I = e.display) || void 0 === I ? void 0 : I.overline)
                ? (j.overline = e.display.overline)
                : (null === (x = e.display) || void 0 === x
                    ? void 0
                    : x.category) && (j.overline = e.display.category)
              : (
                  null === (h = e.display) || void 0 === h
                    ? void 0
                    : h.siteOverline
                )
              ? (j.overline = e.display.siteOverline)
              : (null === (m = e.display) || void 0 === m
                  ? void 0
                  : m.category) && (j.overline = e.display.category),
            (null === (b = e.display) || void 0 === b
              ? void 0
              : null === (g = b.thumbnail) || void 0 === g
              ? void 0
              : g.src) &&
              ((j.image = e.display.thumbnail),
              e.display.thumbnail.gravity &&
                (j.image.gravity = e.display.thumbnail.gravity),
              e.display.thumbnail.aspectRatio &&
                (j.image.aspectRatio = e.display.thumbnail.aspectRatio)),
            (null === (y = e.display) || void 0 === y ? void 0 : y.date) &&
              (j.byline = { publicationDate: e.display.date }),
            null === (k = e.display) || void 0 === k ? void 0 : k.byline)
          ) {
            if (
              (null === (T = e.display.byline[0]) || void 0 === T
                ? void 0
                : T.label) &&
              (e.display.byline[0].label.toLowerCase().startsWith("by") ||
                e.display.byline[0].label.toLowerCase().startsWith("re"))
            ) {
              let i = (0, t.Q)(e.display.byline[0].label),
                l = i,
                s = i;
              if (
                ((s.startsWith("by ") || s.startsWith("By ")) &&
                  (s = s.substring(3)),
                (s.startsWith("by: ") || s.startsWith("By: ")) &&
                  (s = s.substring(4)),
                (l.startsWith("re ") || l.startsWith("Re ")) &&
                  (l = l.substring(3)),
                (l.startsWith("re: ") || l.startsWith("Re: ")) &&
                  (l = l.substring(4)).indexOf(", ") > 0)
              ) {
                let e = "";
                l.split(", ").forEach((i) => {
                  i.indexOf("@") > 0 || (e = e ? e + ", " + i : i);
                }),
                  (l = e);
              }
              j.byline
                ? (s !== i &&
                    ((j.byline.authors = [{ name: s }]),
                    (j.byline.type = "ShowAll")),
                  l !== i &&
                    ((j.byline.featuredAuthors = [{ name: l }]),
                    (j.byline.type = "ShowAll")))
                : (s !== i &&
                    (j.byline = { authors: [{ name: s }], type: "ShowAll" }),
                  l !== i &&
                    (j.byline = {
                      featuredAuthors: [{ name: l }],
                      type: "ShowAll",
                    }));
            } else {
              let i = [],
                l = e.highlight;
              e.display.byline.forEach((e) => {
                if (e.label) {
                  let t = e.label;
                  if (
                    (null == l ? void 0 : l["author.text"]) &&
                    Array.isArray(null == l ? void 0 : l["author.text"]) &&
                    (null == l ? void 0 : l["author.text"][0])
                  ) {
                    let e = (null == l ? void 0 : l["author.text"][0])
                      ? null == l
                        ? void 0
                        : l["author.text"][0]
                            .replaceAll("<mark>", "")
                            .replaceAll("</mark>", "")
                      : "";
                    (null == l ? void 0 : l["author.text"][0]) &&
                      e === t &&
                      (t = null == l ? void 0 : l["author.text"][0]);
                  }
                  i.push({ name: t, link: e.link });
                }
              }),
                (
                  null === (S = e.subset) || void 0 === S
                    ? void 0
                    : S.includes("artwork")
                )
                  ? (j.byline = { authors: i, type: "ShowAll" })
                  : j.byline
                  ? (j.byline.authors = i)
                  : (j.byline = { authors: i });
            }
            e.display.downloadLink && (j.downloadLink = e.display.downloadLink),
              e.display.caseHead &&
                (j.display = {
                  caseHead: e.display.caseHead,
                  caseCategory: e.display.caseCategory,
                });
          }
        } else
          e.source
            ? (j.overline = { label: e.source })
            : e.contentType && (j.overline = { label: e.contentType });
        return (
          (null === (a = e.subset) || void 0 === a
            ? void 0
            : a.includes("artwork")) && (j.variant = "artwork"),
          ((null === (u = e.subset) || void 0 === u
            ? void 0
            : u.includes("participantStory")) ||
            (null === (f = e.subset) || void 0 === f
              ? void 0
              : f.includes("profilePages"))) &&
            (j.variant = "profile"),
          j
        );
      }
    },
    74713: (e, i, l) => {
      "use strict";
      l.d(i, { h: () => _ });
      var t = l(48249),
        s = l(16682),
        d = l(98788),
        r = l(37627),
        n = l(70262),
        o = l(49291),
        a = l(92050),
        u = l(12258),
        f = l(95133),
        c = l(6029),
        p = l(87972),
        v = l(74487),
        h = l(39263);
      let m = (0, t.j)((e) => {
        let { entry: i } = e,
          { getEntry: l, getEntries: t } = (0, p.U)(),
          s = { isPodcast: !0, theme: i.fields.theme },
          d = l(i.fields.podcastSeries);
        if (d) {
          (s.title = d.fields.title),
            (s.subtitle =
              d.fields.description &&
              (0, c.jsx)(h.Q, { document: d.fields.description })),
            (s.mediaAsset = (0, v.N2)(d.fields.relatedImage));
          let e = [];
          t(d.fields.socialMediaLink).forEach((i) => {
            i.fields.socialMedia &&
              i.fields.url &&
              e.push({ children: i.fields.socialMedia, href: i.fields.url });
          }),
            (s.ctaList = { items: e });
        }
        return s;
      });
      var g = l(38131),
        b = l(90869),
        y = l(32768),
        k = l(60872),
        I = l(85761),
        x = l(55729),
        T = l(78408),
        S = l(18907),
        A = l(91014);
      let j = (0, t.j)((e) => {
        let { entry: i, createEditAttributes: l } = e,
          { getEntryUrl: t, site: s } = (0, p.U)(),
          d = (0, I.l)(),
          [r, n] = (0, x.useState)(),
          [o, a] = (0, x.useState)([]),
          u = {
            theme: i.fields.theme,
            title: i.fields.title,
            placeholder: i.fields.placeholder,
            editAttributes: {
              title: l({ entry: i, fieldId: "title" }),
              placeholder: l({ entry: i, fieldId: "placeholder" }),
            },
          };
        if ("Suggestions" === i.fields.searchDropdownType) {
          var f, c, v;
          let e;
          let l = (0, T.oD)(d),
            p = (0, T.FB)(s, i.fields.searchDropdownType),
            h = async (e) => {
              if (!e || "" === e || e.length < 3) {
                a([]), n({});
                return;
              }
              let i = await (0, S.G)({ url: p, params: { term: e } });
              (0, T.Xe)(i) &&
                ("hits" in i && a(i.hits.map((e) => e)),
                "updatedSuggestions" in i &&
                  i.updatedSuggestions &&
                  n(i.updatedSuggestions));
            };
          (null === (f = d.currentPage) || void 0 === f ? void 0 : f.url) &&
            ((e = d.currentPage.url),
            (null === (c = d.currentPage) || void 0 === c
              ? void 0
              : c.url.indexOf(".hbs.edu")) > -1 &&
              (e =
                null === (v = d.currentPage) || void 0 === v
                  ? void 0
                  : v.url.split(".hbs.edu")[1])),
            (u.searchDropdown = {
              placeholder: i.fields.placeholder,
              dropdownFooterLabel: i.fields.searchDropdownFooterLabel,
              hasDropdown: l,
              searchLink: t(i.fields.searchDropdownCta) || e,
              dropdownCta: (0, A.T)(i.fields.searchDropdownCta),
              handleSearch: (e) => {
                h(e);
              },
              dropdownItems: o,
              dropdownSuggestions: r,
              site: s,
            });
        }
        return u;
      });
      var w = l(5575),
        B = l(30774),
        C = l(8426),
        N = l(48913),
        P = l(40001),
        L = l(64299);
      let H = (0, t.j)(() => {
        let { request: e } = (0, I.l)(),
          { site: i } = (0, p.U)(),
          l = {
            title: "Welcome",
            hiddenTitle:
              e.path.substring(1) === (null == i ? void 0 : i.fields.slug) ||
              ("/" === e.path &&
                (null == i ? void 0 : i.fields.domain) !== "www")
                ? null == i
                  ? void 0
                  : i.fields.title
                : void 0,
            items: [],
          },
          { data: t, error: s } = (0, S.s)({
            url: "/api/internal/alumni/me",
            params: {},
          });
        if (s)
          return (
            (l.title = "Sorry..."),
            (l.items = [
              {
                title: "Error",
                value:
                  "There was an error loading the alumni data. Please try again later.",
              },
            ]),
            l
          );
        if (t) {
          var d, r, n, o, a, u, f, v, h, m, g, b, y, k, x, T, A, j, w, B;
          let e =
              null == t
                ? void 0
                : null === (r = t.currentUserDetails) || void 0 === r
                ? void 0
                : null === (d = r.details) || void 0 === d
                ? void 0
                : d.classYear,
            i =
              null == t
                ? void 0
                : null === (o = t.currentUserDetails) || void 0 === o
                ? void 0
                : null === (n = o.details) || void 0 === n
                ? void 0
                : n.degree,
            s =
              null == t
                ? void 0
                : null === (u = t.currentUserDetails) || void 0 === u
                ? void 0
                : null === (a = u.details) || void 0 === a
                ? void 0
                : a.section;
          (l.title = "Welcome back, " + t.displayName),
            (l.items = [
              {
                title: "Current Company",
                value:
                  null !==
                    (T =
                      null === (v = t.currentEmployment) || void 0 === v
                        ? void 0
                        : null === (f = v.organization) || void 0 === f
                        ? void 0
                        : f.organizationName) && void 0 !== T
                    ? T
                    : "N/A",
              },
              {
                title: "Current Role",
                value:
                  null !==
                    (A =
                      null === (h = t.currentEmployment) || void 0 === h
                        ? void 0
                        : h.jobTitle) && void 0 !== A
                    ? A
                    : "N/A",
              },
              {
                title: "Location",
                value: ""
                  .concat(
                    null !==
                      (j =
                        null === (m = t.primaryHomeAddress) || void 0 === m
                          ? void 0
                          : m.city) && void 0 !== j
                      ? j
                      : ""
                  )
                  .concat(
                    (
                      null === (g = t.primaryHomeAddress) || void 0 === g
                        ? void 0
                        : g.city
                    )
                      ? ", "
                      : ""
                  )
                  .concat(
                    null !==
                      (w =
                        null === (b = t.primaryHomeAddress) || void 0 === b
                          ? void 0
                          : b.stateCode) && void 0 !== w
                      ? w
                      : ""
                  )
                  .concat(
                    (
                      null === (y = t.primaryHomeAddress) || void 0 === y
                        ? void 0
                        : y.stateCode
                    )
                      ? ", "
                      : ""
                  )
                  .concat(
                    null !==
                      (B =
                        null === (x = t.primaryHomeAddress) || void 0 === x
                          ? void 0
                          : null === (k = x.country) || void 0 === k
                          ? void 0
                          : k.description) && void 0 !== B
                      ? B
                      : ""
                  ),
              },
              {
                title: "Interests",
                value: (0, c.jsxs)(c.Fragment, {
                  children: [
                    t.interests
                      .sort((e, i) => e.sortOrder - i.sortOrder)
                      .slice(0, 1)
                      .map((e, i) =>
                        (0, c.jsx)("span", { children: e.desc }, i)
                      ),
                    t.interests.length > 1 &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          ", ",
                          "and ",
                          t.interests.length - 1,
                          " ",
                          t.interests.length > 3 ? "others" : "other",
                        ],
                      }),
                  ],
                }),
              },
              {
                title: "Clubs",
                value: (0, c.jsxs)(c.Fragment, {
                  children: [
                    t.clubs
                      .slice(0, 1)
                      .map((e, i) =>
                        (0, c.jsx)(
                          "span",
                          { children: e.club.clubDescription },
                          i
                        )
                      ),
                    t.clubs.length > 1 &&
                      (0, c.jsxs)(c.Fragment, {
                        children: [
                          ", ",
                          "and ",
                          t.clubs.length - 1,
                          " ",
                          t.clubs.length > 3 ? "others" : "other",
                        ],
                      }),
                  ],
                }),
              },
              {
                title: "HBS Affiliation",
                value: ""
                  .concat(i, " ")
                  .concat(e)
                  .concat(s ? ", Section " + s : ""),
              },
            ]),
            (l.info = { percentage: t.profilePercentComplete, href: "#" }),
            (l.cta = { href: "#", children: "Update Your Profile" });
        }
        return l;
      });
      var D = l(91082),
        E = l(92481),
        O = l(32732);
      let _ = (0, t.j)((e) => {
        let { entry: i, options: l } = e,
          { getEntries: t, getEntry: d } = (0, p.U)(),
          r = (0, I.l)();
        if ((0, s.I)("topperWrapperMulti", i)) {
          var n;
          let e =
              null === (n = t(i.fields.toppers)) || void 0 === n
                ? void 0
                : n.filter((e) => {
                    if ((0, s.I)("audienceTopperWrapper", e)) {
                      let i = t(e.fields.permissions),
                        l = !1;
                      return (
                        i.forEach((e) => {
                          var i;
                          let t = e.fields.roleCode;
                          t &&
                            (null === (i = r.session) || void 0 === i
                              ? void 0
                              : i.user.roles.includes(t)) &&
                            (l = !0);
                        }),
                        l
                      );
                    }
                    return !0;
                  }),
            o =
              null == e
                ? void 0
                : e.find((e) => (0, s.I)("audienceTopperWrapper", e));
          return (null == o ? void 0 : o.fields.topper)
            ? F(d(o.fields.topper), l)
            : F(null == e ? void 0 : e[0], l);
        }
        return F(i, l);
      });
      function F(e, i) {
        return (0, s.I)("simpleArticleTopper", e)
          ? { name: "ArticleTopper", props: (0, d.d)(e) }
          : (0, s.I)("bigArtTopper", e)
          ? { name: "ArticleTopper", props: (0, r.O)(e) }
          : (0, s.I)("splitArticleTopper", e)
          ? { name: "SplitTopper", props: (0, n.X)(e) }
          : (0, s.I)("splitPageTopperPodcast", e)
          ? { name: "SplitTopper", props: m(e) }
          : (0, s.I)("splitSearchTopper", e)
          ? { name: "SplitTopper", props: (0, B.b)(e) }
          : (0, s.I)("cardTopper", e)
          ? { name: "CardTopper", props: (0, o.z)(e) }
          : (0, s.I)("missionTopper", e)
          ? { name: "MissionTopper", props: (0, a.J)(e) }
          : (0, s.I)("mediaTopper", e)
          ? { name: "MediaTopper", props: (0, b.F)(e) }
          : (0, s.I)("simplePageTopper", e)
          ? { name: "SimplePageTopper", props: (0, g.a)(e) }
          : (0, s.I)("splitPageTopper", e)
          ? { name: "SplitTopper", props: (0, f.K)(e) }
          : (0, s.I)("editorialTopper", e)
          ? { name: "EditorialTopper", props: (0, y._)(e) }
          : (0, s.I)("statisticsTopper", e)
          ? { name: "StatisticsTopper", props: (0, u.O)(e) }
          : (0, s.I)("participantStoryTopper", e)
          ? { name: "ParticipantStoryTopper", props: (0, k.V)(e, i) }
          : (0, s.I)("searchTopper", e)
          ? { name: "SearchTopper", props: j(e) }
          : (0, s.I)("largeAssetTopper", e)
          ? { name: "LargeAssetTopper", props: (0, w.M)(e) }
          : (0, s.I)("featuredTermTopper", e)
          ? { name: "FeaturedTermTopper", props: (0, C.X)(e) }
          : (0, s.I)("wkFeaturedTermTopper", e)
          ? { name: "FeaturedTermTopper", props: (0, N.$)(e) }
          : (0, s.I)("selectTopper", e)
          ? { name: "SelectTopper", props: (0, P.T)(e) }
          : (0, s.I)("wkProfileTopper", e)
          ? { name: "ProfileTopper", props: (0, L.S)(e) }
          : (0, s.I)("dashboardTopper", e)
          ? { name: "DashboardTopper", props: H(e) }
          : (0, s.I)("directoryTopper", e)
          ? { name: "DirectoryTopper", props: (0, D.C)(e) }
          : (0, s.I)("eventTopper", e)
          ? { name: "EventTopper", props: (0, E.r)(e) }
          : (0, s.I)("eventMediaTopper", e)
          ? { name: "EventMediaTopper", props: (0, O.F)(e) }
          : void 0;
      }
    },
    75e3: (e, i, l) => {
      "use strict";
      l.d(i, { N: () => o });
      var t = l(48249),
        s = l(74487),
        d = l(63822),
        r = l(65149),
        n = l(87972);
      let o = (0, t.j)((e) => {
        var i, l, t, o;
        let { entry: a, createEditAttributes: u } = e,
          { getEntry: f, getEntryUrl: c } = (0, n.U)(),
          p = {
            type: "Article",
            title: null === (i = a.fields) || void 0 === i ? void 0 : i.title,
            link: c(a),
            byline: (0, r.u)(a),
            tease: (0, d.C)(
              null !==
                (o =
                  null === (l = a.fields) || void 0 === l
                    ? void 0
                    : l.description) && void 0 !== o
                ? o
                : null === (t = a.fields) || void 0 === t
                ? void 0
                : t.shortDescription
            ),
            editAttributes: { title: u({ entry: a, fieldId: "title" }) },
          },
          v = (0, s.N2)(a.fields.teaseImage || a.fields.leadImage);
        (null == v ? void 0 : v.image) &&
          ((v.image.width = "600px"), (v.image.height = "450px")),
          (p.image = null == v ? void 0 : v.image),
          (p.video = null == v ? void 0 : v.video),
          (p.kaltura = null == v ? void 0 : v.kaltura),
          p.kaltura && (p.kaltura.withModal = !0);
        let h = f(a.fields.overline);
        return (
          (null == h ? void 0 : h.fields.text) &&
            h.fields.url &&
            (p.overline = { label: h.fields.text, link: c(h) }),
          p
        );
      });
    },
    77925: (e, i, l) => {
      "use strict";
      l.d(i, { Y: () => c });
      var t = l(6029),
        s = l(55729);
      l(42501);
      var d = l(41272);
      function r(e) {
        let { title: i, items: l, editAttributes: d } = e;
        return (0, t.jsxs)("div", {
          className: "hbs-footer-block",
          children: [
            i &&
              (0, t.jsx)("p", {
                ...(null == d ? void 0 : d.title),
                className: "hbs-footer-block__title",
                children: i,
              }),
            null == l
              ? void 0
              : l.map((e, i) => {
                  let { editAttributes: l, children: t } = e;
                  return (0, s.createElement)(
                    "div",
                    { ...l, className: "hbs-footer-block-item", key: i },
                    t
                  );
                }),
          ],
        });
      }
      var n = l(24999);
      function o(e) {
        let { title: i, description: l, href: s, editAttributes: r } = e;
        return i && s
          ? (0, t.jsx)("div", {
              "data-theme": "crimson",
              className: "hbs-footer-primary-cta__link",
              children: (0, t.jsxs)("div", {
                className: "hbs-footer-primary-cta__wrapper",
                children: [
                  (0, t.jsx)("span", {
                    ...(null == r ? void 0 : r.title),
                    className: "hbs-footer-primary-cta__title hbs-text-h3",
                    children: (0, t.jsx)(d.N, {
                      href: s,
                      editAttributes: null == r ? void 0 : r.url,
                      children: i,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    ...(null == r ? void 0 : r.description),
                    className: "hbs-footer-primary-cta__description",
                    children: [
                      l,
                      (0, t.jsx)(n.I, {
                        name: "arrow",
                        className: "hbs-footer-primary-cta__icon",
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      }
      function a(e) {
        let {
          footerBlocks: i,
          footerLegalItems: l,
          footerPrimaryCta: n,
          displayPrimaryCTA: a,
          siteType: u,
          disclaimer: f,
        } = e;
        Array.isArray(i) || (i = []), Array.isArray(l) || (l = []);
        let c = a && n;
        return (0, t.jsxs)("footer", {
          className: "hbs-footer noindex",
          "data-region": "uc__site-footer".concat(c ? "__donation-cta" : ""),
          role: "contentinfo",
          children: [
            c && (0, t.jsx)(o, { ...n }),
            (0, t.jsx)("div", {
              className: "hbs-footer__content",
              "data-theme": "dark",
              children: (0, t.jsxs)("div", {
                className: "hbs-footer__content-wrapper",
                children: [
                  (0, t.jsx)("div", {
                    className: "hbs-footer-block",
                    children: (0, t.jsx)("div", {
                      className: "hbs-footer-block__heading",
                      children: (0, t.jsx)(d.N, {
                        href:
                          "internal" === u
                            ? "https://inside.hbs.edu/myhbs.aspx"
                            : "https://www.hbs.edu",
                        children:
                          "internal" === u
                            ? "myHBS"
                            : "Harvard Business School",
                      }),
                    }),
                  }),
                  i.map((e, i) => (0, s.createElement)(r, { ...e, key: i })),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className: "hbs-footer__legal",
              "data-theme": "dark",
              children: (0, t.jsxs)("div", {
                className: "hbs-footer__legal-wrapper",
                children: [
                  (0, t.jsx)("p", {
                    className: "hbs-footer__copyrights",
                    children: "\xa9 President & Fellows of Harvard College",
                  }),
                  (0, t.jsx)("div", {
                    className: "hbs-footer__legal-nav",
                    children: l.map((e, i) =>
                      (0, t.jsx)(
                        d.N,
                        { className: "hbs-footer-legal-item", ...e },
                        i
                      )
                    ),
                  }),
                  f &&
                    (0, t.jsx)("div", {
                      className: "hbs-footer-discrimination-notice",
                      children: f,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      var u = l(7113);
      let f = [];
      function c(e) {
        let { children: i, footer: l, header: d, gtmPageEvent: r, ...n } = e;
        return (
          (0, s.useEffect)(() => {
            r && (null == f || f.push(r));
          }, [r]),
          (0, t.jsxs)("div", {
            ...n,
            children: [
              (0, t.jsxs)("div", {
                children: [d && (0, t.jsx)(u.I, { ...d }), i],
              }),
              l && (0, t.jsx)(a, { ...l }),
            ],
          })
        );
      }
    },
    78408: (e, i, l) => {
      "use strict";
      l.d(i, { FB: () => d, Xe: () => t, oD: () => s });
      let t = (e) => {
          if ("object" == typeof e) {
            if ("hits" in e) return !!e.hits;
            if ("updatedSuggestions" in e) {
              var i;
              if (
                null === (i = e.updatedSuggestions) || void 0 === i
                  ? void 0
                  : i.suggestions
              )
                return !0;
            }
          }
          return !1;
        },
        s = (e) => "library" === e.request.domain,
        d = (e, i) =>
          (null == e ? void 0 : e.fields.title) === "Baker Library"
            ? "/api/fetch/baker-search"
            : (null == e ? void 0 : e.fields.domain) === "library" &&
              "Suggestions" === i
            ? "/api/fetch/knowledge-site-search"
            : "/api/fetch/site-search";
    },
    85050: (e, i, l) => {
      "use strict";
      l.d(i, { Q: () => d });
      let t = [/<[^>]*>?/gm, /\u00AD/g, "&lt;", "&gt;"],
        s = [["&quot;", '"', "&apos;", "'", "&amp;", "&"]];
      function d(e) {
        let i = e;
        for (let e of ((i = i
          .replaceAll("<mark>", "[mark]")
          .replaceAll("</mark>", "[/mark]")),
        t))
          i = i.replaceAll(e, "");
        for (let [e, l] of s) i = i.replaceAll(e, l);
        return i
          .replaceAll("[mark]", "<mark>")
          .replaceAll("[/mark]", "</mark>");
      }
    },
    90392: (e, i, l) => {
      "use strict";
      l.d(i, { UP: () => o, V: () => a, du: () => d, fq: () => r });
      let t = {
          light: "#f6f4f2",
          white: "#ffffff",
          dark: "#222222",
          black: "#000000",
          crimson: "#a41034",
          red: "#e80538",
          purple: "#85609f",
          blue: "#aac8eb",
        },
        s = Object.entries(t).map((e) => {
          let [i] = e;
          return i;
        });
      Object.entries(t)
        .filter((e) => {
          let [i] = e;
          return !["purple", "blue"].includes(i);
        })
        .map((e) => {
          let [i] = e;
          return i;
        });
      let d = "light",
        r = {
          crimson: t.crimson,
          red2: t.red,
          red3: "#ED5541",
          red4: "#E0B2A7",
          orange1: "#AE6429",
          orange2: "#E87D1E",
          orange4: "#F7C76B",
          yellow2: "#EBCD00",
          yellow3: "#F3E44D",
          green1: "#026833",
          green2: "#52A52E",
          green4: "#B3D56A",
          teal1: "#006085",
          teal3: "#56BAB3",
          teal4: "#9BD6C4",
          blue1: "#3B2883",
          blue3: "#7FA4D1",
          blue4: t.blue,
          purple1: "#57116A",
          purple2: "#80408D",
          purple3: "#9B7FAF",
          purple4: "#C6B2D1",
          magenta1: "#78244C",
          magenta2: "#C9006B",
          magenta3: "#D86199",
          magenta4: "#E599BA",
          black: t.black,
          dark: t.dark,
          gray2: "#68666F",
          gray3: "#A3A0A2",
          gray4: "#D5D0CA",
          white: t.white,
          light: t.light,
        },
        n = [
          "crimson",
          "red2",
          "orange1",
          "green1",
          "teal1",
          "blue1",
          "purple1",
          "purple2",
          "magenta1",
          "magenta2",
          "black",
          "dark",
          "gray2",
        ];
      Object.entries(r).map((e) => {
        let [i] = e;
        return i;
      });
      let o = (e) => (e && n.includes(e) ? "dark" : "white"),
        a = (e) =>
          "red2" === e
            ? "red"
            : "blue4" === e
            ? "blue"
            : e && s.includes(e)
            ? e
            : e && n.includes(e)
            ? "plain-dark"
            : "plain-light";
      Object.keys({
        light: t.light,
        white: t.white,
        dark: t.dark,
        black: t.black,
        crimson: t.crimson,
      });
    },
    90869: (e, i, l) => {
      "use strict";
      l.d(i, { F: () => u });
      var t = l(6029),
        s = l(48249),
        d = l(39263),
        r = l(74487),
        n = l(91014),
        o = l(85761),
        a = l(87972);
      let u = (0, s.j)((e) => {
        var i;
        let { entry: l, createEditAttributes: s } = e,
          { request: u } = (0, o.l)(),
          { site: f } = (0, a.U)(),
          c = {
            assets: [],
            title: l.fields.title,
            hiddenTitle:
              u.path.substring(1) === (null == f ? void 0 : f.fields.slug) ||
              ("/" === u.path &&
                (null == f ? void 0 : f.fields.domain) !== "www")
                ? null == f
                  ? void 0
                  : f.fields.title
                : void 0,
            theme: l.fields.theme,
            isSeamless: l.fields.isSeamless,
            editAttributes: {
              title: s({ entry: l, fieldId: "title" }),
              subtitle: s({ entry: l, fieldId: "subtitle" }),
            },
          },
          p = (0, n.T)(l.fields.ctaButton);
        return (
          p && ((c.cta = p), (c.cta.type = "primary-button")),
          l.fields.subtitle &&
            (c.subtitle = (0, t.jsx)(d.Q, { document: l.fields.subtitle })),
          null === (i = l.fields.media) ||
            void 0 === i ||
            i.forEach((e) => {
              let i = (0, r.N2)(e);
              i && c.assets.push(i);
            }),
          c
        );
      });
    },
    90932: (e, i, l) => {
      "use strict";
      l.d(i, { vf: () => s });
      var t = l(3450);
      function s(e) {
        return (0, t.M)("modern", e)
          ? (function (e) {
              if (e && "object" == typeof e) {
                let r = {};
                if (
                  (e.title && (r.title = e.title),
                  e.description && (r.subheading = e.description),
                  (0, t.M)("modern", e))
                ) {
                  var i, l, s, d;
                  if (
                    ((null === (l = e.display) || void 0 === l
                      ? void 0
                      : null === (i = l.thumbnail) || void 0 === i
                      ? void 0
                      : i.src) &&
                      (r.media = { image: { src: e.display.thumbnail.src } }),
                    null === (s = e.display) || void 0 === s
                      ? void 0
                      : s.byline)
                  ) {
                    let i = [];
                    e.display.byline.forEach((e) => {
                      e.label && i.push({ name: e.label, link: e.link });
                    }),
                      (r.byline = {
                        publicationDate: e.display.date,
                        authors: i,
                      });
                  }
                  (null === (d = e.display) || void 0 === d
                    ? void 0
                    : d.overline) &&
                    (r.overline = {
                      label: e.display.overline.label,
                      link: e.display.overline.link,
                    });
                }
                return e.url && (r.link = e.url), r;
              }
            })(e)
          : (0, t.M)("legacy", e)
          ? (function (e) {
              if (e && "object" == typeof e) {
                let i = {};
                if (
                  (e.HBSTitle && (i.title = e.HBSTitle),
                  e.HBSDescription && (i.subheading = e.HBSDescription),
                  e.HBSThumbnail &&
                    (i.media = { image: { src: e.HBSThumbnail } }),
                  e.HBSByline)
                ) {
                  let l = e.HBSByline;
                  l.startsWith("by ") && (l = l.substring(3)),
                    l.startsWith("By: ") && (l = l.substring(4)),
                    l.startsWith("Re: ") && (l = l.substring(4)),
                    (i.byline = {
                      publicationDate: e.HBSPubDate,
                      authors: [{ name: l }],
                    });
                }
                return (
                  e.HBSLink &&
                    ((i.link = e.HBSLink),
                    e.HBSSource &&
                      (i.overline = { label: e.HBSSource, link: e.HBSLink })),
                  i
                );
              }
            })(e)
          : void 0;
      }
    },
    91082: (e, i, l) => {
      "use strict";
      l.d(i, { C: () => d });
      var t = l(48249),
        s = l(18907);
      let d = (0, t.j)((e) => {
        let { entry: i } = e,
          l = [
            {
              group: "Employment",
              label: "Current Company",
              id: "currentOrganizationName",
              featured: !0,
            },
            {
              group: "Personal",
              label: "Interests",
              id: "interest",
              featured: !0,
            },
            {
              group: "Employment",
              label: "Industry",
              id: "industry",
              featured: !0,
            },
            {
              group: "Personal",
              label: "Home Country",
              id: "homeCountrySorted",
              featured: !0,
            },
            {
              group: "Education",
              label: "HBS Degree/Program",
              id: "degreeCode",
              featured: !1,
            },
            {
              group: "Education",
              label: "Harvard University",
              id: "nonHBSDegreeCode",
              featured: !1,
            },
            {
              group: "Education",
              label: "College",
              id: "nonHBSInstitutionName",
              featured: !1,
            },
            { group: "HBS", label: "Clubs Region", id: "club", featured: !1 },
            {
              group: "HBS",
              label: "Volunteer/Committee",
              id: "HBSVolunteerRoleDisplay",
              featured: !1,
            },
            {
              group: "Employment",
              label: "Company",
              id: "organizationName",
              featured: !1,
            },
            {
              group: "Employment",
              label: "Function",
              id: "JobFunction",
              featured: !1,
            },
            {
              group: "Employment",
              label: "Country",
              id: "officeCountrySorted",
              featured: !1,
            },
            {
              group: "Employment",
              label: "State",
              id: "officeStateDesc",
              featured: !1,
            },
            {
              group: "Employment",
              label: "Position",
              id: "positionLevel",
              featured: !1,
            },
            {
              group: "Employment",
              label: "Military Service",
              id: "militaryService",
              featured: !1,
            },
            {
              group: "Personal",
              label: "Gender",
              id: "genderLabel",
              featured: !1,
            },
            {
              group: "Personal",
              label: "Country of Origin",
              id: "countryOfOriginDesc",
              featured: !1,
            },
            {
              group: "Personal",
              label: "Home State",
              id: "homeStateDesc",
              featured: !1,
            },
            {
              group: "Personal",
              label: "Known Address",
              id: "knownAddress",
              featured: !1,
            },
          ],
          t = l.filter((e) => e.featured).map((e) => e.id),
          d = [];
        l.forEach((e) => {
          let { data: i } = (0, s.s)({
            url: "/api/internal/alumni/facets",
            params: { index: "AlumniDirectory", facet: e.id },
          });
          if (i) {
            if (d.some((i) => i.label === e.group)) {
              let l = d.find((i) => i.label === e.group);
              l &&
                l.filters.push({
                  label: e.label,
                  id: e.id,
                  options: i,
                  selectedOptions: [],
                  onChange: () => null,
                });
            } else
              d.push({
                label: e.group,
                filters: [
                  {
                    label: e.label,
                    id: e.id,
                    options: i,
                    selectedOptions: [],
                    onChange: () => null,
                  },
                ],
              });
          }
        });
        let r = {
          searchInputLabel: i.fields.searchPlaceholder,
          searchQuery: "",
          onSearchQueryChange: () => null,
          filterGroups: d,
          featuredFilterIds: t,
          onSubmitSearch: () => null,
        };
        return { title: i.fields.title, theme: i.fields.theme, search: r };
      });
    },
    92050: (e, i, l) => {
      "use strict";
      l.d(i, { J: () => f });
      var t = l(3050),
        s = l(16682),
        d = l(74487),
        r = l(6029),
        n = l(48249),
        o = l(39263),
        a = l(87972);
      let u = (0, n.j)((e) => {
          let { entry: i, createEditAttributes: l } = e,
            { getEntryUrl: t } = (0, a.U)(),
            s = (0, d.N2)(i.fields.media);
          if (s) {
            var n;
            return {
              media: s,
              cta: {
                text: (0, r.jsx)(o.Q, { document: i.fields.description }),
                linkText:
                  null === (n = i.fields) || void 0 === n ? void 0 : n.title,
                linkUrl: t(i.fields.link),
                editAttributes: {
                  url: l({ entry: i.fields.link, fieldId: "url" }),
                  text: l({ entry: i, fieldId: "description" }),
                  linkText: l({ entry: i, fieldId: "title" }),
                },
              },
            };
          }
        }),
        f = (0, n.j)((e) => {
          let { entry: i, createEditAttributes: l } = e,
            { getEntry: r } = (0, a.U)(),
            n = (0, d.N2)(i.fields.media);
          if (!n) return;
          let o = [];
          return (
            i.fields.text &&
              Array.isArray(i.fields.text.content) &&
              i.fields.text.content.forEach((e) => {
                (null == e ? void 0 : e.nodeType) === t.nA.PARAGRAPH &&
                  e.content.forEach((e) => {
                    let i = { text: "" };
                    if (
                      ("text" === e.nodeType && e.value && (i.text = e.value),
                      e.nodeType === t.XD.ENTRY_HYPERLINK)
                    ) {
                      var l, d;
                      (null === (l = e.content[0]) || void 0 === l
                        ? void 0
                        : l.nodeType) === "text" &&
                        (i.text = e.content[0].value);
                      let t = r(
                        null === (d = e.data) || void 0 === d
                          ? void 0
                          : d.target
                      );
                      (0, s.I)("missionTopperCard", t) && (i.details = u(t));
                    }
                    i.text && o.push(i);
                  });
              }),
            {
              parts: o,
              defaultMedia: n,
              editAttributes: {
                text: l({ entry: i, fieldId: "text" }),
                defaultMedia: l({ entry: i.fields.media, fieldId: "asset" }),
              },
            }
          );
        });
    },
    92481: (e, i, l) => {
      "use strict";
      l.d(i, { r: () => n });
      var t = l(48249),
        s = l(91014),
        d = l(39263),
        r = l(87972);
      let n = (0, t.j)((e) => {
        var i, l;
        let { entry: t } = e,
          { getEntry: n } = (0, r.U)(),
          o = n(t.fields.event);
        if (
          !(null == o
            ? void 0
            : null === (i = o.fields) || void 0 === i
            ? void 0
            : i.title)
        )
          return;
        let a = [o.fields.startTime, o.fields.endTime].filter((e) => !!e),
          u = o.fields.description
            ? (0, d.Q)({ document: o.fields.description })
            : void 0;
        return {
          title: o.fields.title,
          subtitle: null != u ? u : void 0,
          dates: a,
          location: o.fields.location
            ? {
                title:
                  null === (l = o.fields.location) || void 0 === l
                    ? void 0
                    : l
                        .map((e) => {
                          var i;
                          return null === (i = n(e)) || void 0 === i
                            ? void 0
                            : i.fields.title;
                        })
                        .join(", "),
              }
            : void 0,
          cta: t.fields.cta ? (0, s.T)(t.fields.cta) : void 0,
          theme: t.fields.theme,
        };
      });
    },
    95133: (e, i, l) => {
      "use strict";
      l.d(i, { K: () => f });
      var t = l(6029),
        s = l(48249),
        d = l(39263),
        r = l(74487),
        n = l(61778),
        o = l(91014),
        a = l(85761),
        u = l(87972);
      let f = (0, s.j)((e) => {
        let { entry: i, createEditAttributes: l } = e,
          { request: s } = (0, a.l)(),
          { site: f } = (0, u.U)();
        return {
          theme: i.fields.theme,
          title: i.fields.title,
          hiddenTitle:
            s.path.substring(1) === (null == f ? void 0 : f.fields.slug)
              ? f.fields.title
              : void 0,
          subtitle:
            i.fields.subtitle &&
            (0, t.jsx)(d.Q, { document: i.fields.subtitle }),
          mediaAsset: (0, r.N2)(i.fields.media),
          ctaList: (0, n.H)(i.fields.links),
          ctaButton: (0, o.T)(i.fields.ctaButton),
          editAttributes: {
            title: l({ entry: i, fieldId: "title" }),
            subtitle: l({ entry: i, fieldId: "subtitle" }),
          },
        };
      });
    },
    96e3: (e, i, l) => {
      "use strict";
      function t(e) {
        return !!e;
      }
      l.d(i, { T: () => t });
    },
    98250: (e, i, l) => {
      "use strict";
      l.d(i, { X: () => r });
      var t = l(6029),
        s = l(48249),
        d = l(39263);
      let r = (0, s.j)((e) => {
        let { entry: i, createEditAttributes: l } = e;
        return {
          figure: i.fields.value,
          unit: i.fields.suffix,
          prefixedUnit: i.fields.prefix,
          description: (0, t.jsx)(d.Q, {
            document: i.fields.title,
            disableParagraphs: !0,
          }),
          editAttributes: {
            value: l({ entry: i, fieldId: "value" }),
            description: l({ entry: i, fieldId: "title" }),
          },
        };
      });
    },
    98788: (e, i, l) => {
      "use strict";
      l.d(i, { d: () => t });
      let t = (0, l(48249).j)((e) => {
        let { entry: i } = e;
        return { theme: i.fields.theme };
      });
    },
  },
]);
//# sourceMappingURL=4989.5789403436c9db36.js.map
