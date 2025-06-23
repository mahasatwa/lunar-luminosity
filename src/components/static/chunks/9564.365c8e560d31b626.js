(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9564],
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
    7113: (e, i, l) => {
      "use strict";
      l.d(i, { I: () => n });
      var t = l(6029),
        s = l(55729),
        r = l(36683),
        a = l(16150);
      function n(e) {
        let { name: i, props: l, children: o } = e,
          { getLazyComponentByName: u } = (0, a.y)(),
          c = u(i);
        return c
          ? (0, t.jsx)(r.t, {
              children: (0, t.jsx)(s.Suspense, {
                children: (0, t.jsx)(c, {
                  ...(l || {}),
                  children:
                    o &&
                    (Array.isArray(o)
                      ? (0, t.jsx)(d, { components: o })
                      : (0, t.jsx)(n, { ...o })),
                }),
              }),
            })
          : (console.error("ERROR: could not find lazy component ".concat(i)),
            null);
      }
      function d(e) {
        let { components: i } = e;
        return i && Array.isArray(i)
          ? (0, t.jsx)(t.Fragment, {
              children: i.map((e, i) => (0, t.jsx)(n, { ...e }, i)),
            })
          : null;
      }
    },
    16912: () => {},
    18570: (e, i, l) => {
      "use strict";
      l.d(i, { i: () => r });
      var t = l(6029),
        s = l(87972);
      function r(e) {
        return (i) => {
          let { entry: l, options: r } = i,
            { getEntry: a, createEditAttributes: n } = (0, s.U)(),
            d = a(l);
          return (null == d ? void 0 : d.fields) &&
            (null == d ? void 0 : d.metadata) &&
            (null == d ? void 0 : d.sys.id)
            ? (0, t.jsx)(e, { entry: d, options: r, createEditAttributes: n })
            : null;
        };
      }
    },
    28423: (e, i, l) => {
      "use strict";
      l.d(i, { z: () => o });
      var t = l(6029);
      l(16912);
      var s = l(55729),
        r = l(50212),
        a = l(25866),
        n = l(7113);
      function d(e) {
        let { tease: i, teaseStyle: l, headingLevel: s } = e;
        return i.props
          ? ((i.props.style = l),
            (i.props.HeadingLevel = s),
            "ArticleTease" === i.name &&
              ((i.props.teaseContext = "feed"),
              i.props.image &&
                "artwork" !== i.props.variant &&
                (i.props.image.aspectRatio = "3/2"),
              i.props.image &&
                ("profile" === i.props.variant ||
                  "profile-search" === i.props.variant) &&
                (i.props.image.aspectRatio = "1/1")),
            "BookTease" === i.name && (i.props.style = "content"),
            "ProgramTease" === i.name &&
              i.props.image &&
              (i.props.image.aspectRatio = "3/2"),
            "SocialMediaTease" === i.name &&
              i.props.image &&
              (i.props.image.aspectRatio = "1/1"),
            (0, t.jsx)("li", {
              className: "hbs-tease-feed__item",
              children: (0, t.jsx)(n.I, { ...i }),
            }))
          : null;
      }
      let o = (0, s.forwardRef)(function (e, i) {
        var l;
        let {
            items: s,
            headerContent: n,
            align: o = "center",
            teaseStyle: u = "expanded",
            totalHits: c,
            error: h,
            searchInfo: v,
            sortByOptions: y,
            HeadingLevel: p = "h2",
            HeadingLevelTease: f,
          } = e,
          m = (0, r.A)(
            "hbs-global-align-".concat(o),
            "hbs-component--tease-feed"
          ),
          b = [
            ...new Set(
              s
                .map((e) => {
                  var i;
                  return null === (i = e.props) || void 0 === i
                    ? void 0
                    : i.type;
                })
                .filter(Boolean)
            ),
          ],
          g =
            1 === b.length
              ? "__".concat(
                  null === (l = b[0]) || void 0 === l ? void 0 : l.toLowerCase()
                )
              : "",
          x = "hbs-tease-feed__list hbs-tease-feed__".concat(u);
        return (0,
        t.jsx)("div", { ref: i, className: m, "data-region": "cb__tease-feed".concat(g), children: (0, t.jsxs)("div", { className: "hbs-tease-feed", children: [n && (0, t.jsx)(a.B, { ...n, HeadingLevel: p }), (v || y) && (0, t.jsxs)("div", { className: "hbs-tease-feed__header", children: [v && (0, t.jsx)("div", { className: "hbs-tease-feed__search-info", children: v }), y && (0, t.jsxs)("div", { className: "hbs-tease-feed__sort-info", children: [(0, t.jsx)("p", { children: "Sorting By" }), (0, t.jsx)("div", { className: "hbs-tease-feed__sort__select", children: (0, t.jsx)("select", { id: "sort-select", onChange: y.onChange, value: y.selectedOption, children: y.options.map((e, i) => (0, t.jsx)("option", { value: e.value, children: e.label }, i)) }) })] })] }), s.length > 0 ? (0, t.jsx)("ul", { className: x, children: s.map((e, i) => (0, t.jsx)(d, { tease: e, teaseStyle: u, headingLevel: f }, i)) }) : h ? (0, t.jsx)("div", { className: "hbs-no-results", children: (0, t.jsx)("p", { className: "title", children: h }) }) : 0 === c && (0, t.jsxs)("div", { className: "hbs-no-results", children: [(0, t.jsx)("p", { className: "title", children: "No results found" }), (0, t.jsx)("p", { children: "Suggestions:" }), (0, t.jsxs)("ul", { children: [(0, t.jsx)("li", { children: "Make sure all words are spelled correctly." }), (0, t.jsx)("li", { children: "Try different keywords." }), (0, t.jsx)("li", { children: "Try more general keywords." }), (0, t.jsx)("li", { children: "Try fewer keywords." })] })] })] }) });
      });
    },
    57957: (e, i, l) => {
      "use strict";
      l.d(i, { SQ: () => a, zD: () => n });
      var t = l(18907);
      let s = "/api/search/query";
      function r(e) {
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
      function a(e) {
        var i;
        let l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = null == e ? void 0 : e.size;
        l.dedupe && (a = (null != a ? a : 25) + 10);
        let n = { url: s, params: r({ ...e, size: a }) },
          o = (0, t.s)(n);
        return (
          l.dedupe &&
            (null === (i = o.data) || void 0 === i ? void 0 : i.hits) &&
            d({ search: e, options: l, data: o.data }),
          o
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
                  r({ ...(null != e ? e : {}), size: l })
                );
              }),
            }),
          },
          a = (0, t.s)(l);
        return (
          i.dedupe &&
            a.data &&
            a.data.forEach((l, t) => d({ options: i, data: l, search: e[t] })),
          a
        );
      }
      function d(e) {
        var i, l;
        let { data: t, search: s, options: r } = e,
          a = [],
          n =
            null !==
              (l =
                null !== (i = null == s ? void 0 : s.size) && void 0 !== i
                  ? i
                  : r.defaultSize) && void 0 !== l
              ? l
              : 25;
        for (let e of t.hits)
          if (
            (a.some(
              (i) =>
                ("id" in i && "id" in e && i.id === e.id) ||
                ("HBSTitle" in i &&
                  "HBSTitle" in e &&
                  i.HBSTitle === e.HBSTitle)
            ) || a.push(e),
            a.length >= n)
          )
            break;
        t.hits = a;
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
    73e3: (e, i, l) => {
      "use strict";
      l.d(i, { sM: () => a, e9: () => n, NQ: () => r });
      var t = l(85050),
        s = l(3450);
      function r(e, i, l) {
        return (0, s.M)("modernArticle", e)
          ? n(e, i)
          : (0, s.M)("legacyArticle", e)
          ? a(e, l)
          : void 0;
      }
      function a(e, i) {
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
        var l, r, a, n, d, o, u, c, h, v, y, p, f, m, b, g, x, S, j, A, _;
        let k = e.description;
        (null === (l = e.subset) || void 0 === l
          ? void 0
          : l.includes("legacy")) &&
          !k &&
          (k = e.body),
          (null === (r = e.highlight) || void 0 === r
            ? void 0
            : r.description) &&
            Array.isArray(
              null === (a = e.highlight) || void 0 === a
                ? void 0
                : a.description
            ) &&
            (k =
              null === (h = e.highlight) || void 0 === h
                ? void 0
                : h.description[0]),
          (null === (n = e.highlight) || void 0 === n ? void 0 : n.body) &&
            Array.isArray(
              null === (d = e.highlight) || void 0 === d ? void 0 : d.body
            ) &&
            (k = (function (e) {
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
              null === (v = e.highlight) || void 0 === v ? void 0 : v.body[0]
            )),
          !k && e.body && (k = e.body.substring(0, 500).trim());
        let B = {
          type: "Article",
          title: e.title,
          link: e.url,
          tease: k && (0, t.Q)(k),
        };
        if ((0, s.M)("modern", e)) {
          if (
            (i &&
            (null === (y = e.display) || void 0 === y ? void 0 : y.site) === i
              ? (null === (S = e.display) || void 0 === S ? void 0 : S.overline)
                ? (B.overline = e.display.overline)
                : (null === (j = e.display) || void 0 === j
                    ? void 0
                    : j.category) && (B.overline = e.display.category)
              : (
                  null === (p = e.display) || void 0 === p
                    ? void 0
                    : p.siteOverline
                )
              ? (B.overline = e.display.siteOverline)
              : (null === (f = e.display) || void 0 === f
                  ? void 0
                  : f.category) && (B.overline = e.display.category),
            (null === (b = e.display) || void 0 === b
              ? void 0
              : null === (m = b.thumbnail) || void 0 === m
              ? void 0
              : m.src) &&
              ((B.image = e.display.thumbnail),
              e.display.thumbnail.gravity &&
                (B.image.gravity = e.display.thumbnail.gravity),
              e.display.thumbnail.aspectRatio &&
                (B.image.aspectRatio = e.display.thumbnail.aspectRatio)),
            (null === (g = e.display) || void 0 === g ? void 0 : g.date) &&
              (B.byline = { publicationDate: e.display.date }),
            null === (x = e.display) || void 0 === x ? void 0 : x.byline)
          ) {
            if (
              (null === (A = e.display.byline[0]) || void 0 === A
                ? void 0
                : A.label) &&
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
              B.byline
                ? (s !== i &&
                    ((B.byline.authors = [{ name: s }]),
                    (B.byline.type = "ShowAll")),
                  l !== i &&
                    ((B.byline.featuredAuthors = [{ name: l }]),
                    (B.byline.type = "ShowAll")))
                : (s !== i &&
                    (B.byline = { authors: [{ name: s }], type: "ShowAll" }),
                  l !== i &&
                    (B.byline = {
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
                  null === (_ = e.subset) || void 0 === _
                    ? void 0
                    : _.includes("artwork")
                )
                  ? (B.byline = { authors: i, type: "ShowAll" })
                  : B.byline
                  ? (B.byline.authors = i)
                  : (B.byline = { authors: i });
            }
            e.display.downloadLink && (B.downloadLink = e.display.downloadLink),
              e.display.caseHead &&
                (B.display = {
                  caseHead: e.display.caseHead,
                  caseCategory: e.display.caseCategory,
                });
          }
        } else
          e.source
            ? (B.overline = { label: e.source })
            : e.contentType && (B.overline = { label: e.contentType });
        return (
          (null === (o = e.subset) || void 0 === o
            ? void 0
            : o.includes("artwork")) && (B.variant = "artwork"),
          ((null === (u = e.subset) || void 0 === u
            ? void 0
            : u.includes("participantStory")) ||
            (null === (c = e.subset) || void 0 === c
              ? void 0
              : c.includes("profilePages"))) &&
            (B.variant = "profile"),
          B
        );
      }
    },
    85050: (e, i, l) => {
      "use strict";
      l.d(i, { Q: () => r });
      let t = [/<[^>]*>?/gm, /\u00AD/g, "&lt;", "&gt;"],
        s = [["&quot;", '"', "&apos;", "'", "&amp;", "&"]];
      function r(e) {
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
    89564: (e, i, l) => {
      "use strict";
      l.r(i), l.d(i, { ContentfulHierarchicalTease: () => S });
      var t = l(6029),
        s = l(18570),
        r = l(39263),
        a = l(57957);
      l(96590);
      var n = l(67170),
        d = l(28423),
        o = l(25866),
        u = l(80422);
      function c(e) {
        let {
          componentHeader: i,
          overline: l,
          title: s,
          subheading: r,
          cta: a,
          editAttributes: n,
        } = e;
        return i
          ? (0, t.jsx)(o.B, {
              ...i,
              className: "hbs-hierarchical-tease__component-header",
            })
          : (0, t.jsxs)("div", {
              className: "hbs-hierarchical-tease__content",
              children: [
                l &&
                  (0, t.jsx)("p", {
                    ...(null == n ? void 0 : n.overline),
                    className: "hbs-hierarchical-tease__overline",
                    children: l,
                  }),
                s &&
                  (0, t.jsx)("h2", {
                    ...(null == n ? void 0 : n.title),
                    className: "hbs-hierarchical-tease__title",
                    children: s,
                  }),
                r &&
                  (0, t.jsx)("div", {
                    ...(null == n ? void 0 : n.subheading),
                    className: "hbs-hierarchical-tease__subheading",
                    children: r,
                  }),
                a &&
                  (0, t.jsx)("div", {
                    className: "hbs-hierarchical-tease__cta",
                    children: (0, t.jsx)(u.l, {
                      ...a,
                      isSmall: !0,
                      children: a.children,
                    }),
                  }),
              ],
            });
      }
      function h(e) {
        let {
            header: i,
            articles: l,
            feedTeaseStyle: s,
            editAttributes: r,
          } = e,
          a = l[0],
          o = l.slice(1, l.length > 4 ? 3 : l.length);
        return (
          (null == a ? void 0 : a.image) && (a.image.aspectRatio = "3/2"),
          (null == a ? void 0 : a.video) && (a.video.aspectRatio = "3/2"),
          a && i && (a.HeadingLevel = "h3"),
          (0, t.jsx)("div", {
            className:
              "hbs-global-align-full hbs-component--hierarchical-tease",
            "data-region": "cb__hierarchical-tease",
            children: (0, t.jsxs)("div", {
              className: "hbs-hierarchical-tease",
              children: [
                i && (0, t.jsx)(c, { ...i }),
                (0, t.jsxs)("div", {
                  ...(null == r ? void 0 : r.query),
                  className: "hbs-hierarchical-tease__articles",
                  children: [
                    (0, t.jsx)("div", {
                      className: "hbs-hierarchical-tease__big-preview",
                      children: a && (0, t.jsx)(n.ArticleTease, { ...a }),
                    }),
                    (0, t.jsx)("div", {
                      className: "hbs-hierarchical-tease__small-preview",
                      children: (0, t.jsx)(d.z, {
                        HeadingLevelTease: i ? "h3" : "h2",
                        items: o.map((e) => ({
                          name: "ArticleTease",
                          props: e,
                        })),
                        teaseStyle: s,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var v = l(58012),
        y = l(73e3),
        p = l(91014),
        f = l(1204),
        m = l(85761),
        b = l(87972);
      let g = (e) => {
          var i;
          let { entry: l, createEditAttributes: s } = e,
            r = (0, m.l)(),
            { getEntry: n } = (0, b.U)(),
            d = n(r.site),
            o = (0, f.V)(d),
            u = l.fields.teasesCurated || [],
            c = [],
            { data: v } = (0, a.SQ)({
              index: "modern",
              query: u.map((e) => "id:".concat(e)).join(" OR "),
              size:
                (null === (i = l.fields.teasesCurated) || void 0 === i
                  ? void 0
                  : i.length) || 25,
            }),
            p =
              null == v
                ? void 0
                : v.hits.toSorted((e, i) => u.indexOf(e.id) - u.indexOf(i.id));
          if (!p || 0 === p.length) return null;
          let g = 0,
            x = [];
          return (
            p.forEach((e) => {
              if (g < 4) {
                var i;
                let l = (0, y.NQ)(e, o),
                  t =
                    null == l
                      ? void 0
                      : null === (i = l.title) || void 0 === i
                      ? void 0
                      : i.toString();
                l && t && !x.includes(t) && (c.push(l), x.push(t), g++);
              }
            }),
            (0, t.jsx)(h, {
              articles: c,
              feedTeaseStyle: l.fields.feedTeaseStyle,
              header: {
                componentHeader: {
                  isSmall: !1,
                  title: l.fields.title,
                  editAttributes: { title: s({ entry: l, fieldId: "title" }) },
                },
              },
              editAttributes: {
                query: s({ entry: l.fields.query, fieldId: "query" }),
              },
            })
          );
        },
        x = (e) => {
          var i, l;
          let { entry: s, createEditAttributes: n } = e,
            d = (0, m.l)(),
            { getEntry: o } = (0, b.U)(),
            u = o(d.site),
            c = (0, f.V)(u),
            g = [],
            x = (0, v.o)(s.fields.query);
          x && (x.size = 6);
          let S = 0,
            j = (0, a.SQ)(x);
          if (
            Array.isArray(
              null === (i = j.data) || void 0 === i ? void 0 : i.hits
            )
          ) {
            let e = [];
            null === (l = j.data) ||
              void 0 === l ||
              l.hits.map(async (i) => {
                if (S < 4) {
                  var l;
                  let t = (0, y.NQ)(i, c),
                    s =
                      null == t
                        ? void 0
                        : null === (l = t.title) || void 0 === l
                        ? void 0
                        : l.toString();
                  t && s && !e.includes(s) && (g.push(t), e.push(s), S++);
                }
              });
          }
          return "standard" === s.fields.headerSize ||
            void 0 === s.fields.headerSize
            ? (0, t.jsx)(h, {
                articles: g,
                feedTeaseStyle: s.fields.feedTeaseStyle,
                header: {
                  componentHeader: {
                    isSmall: !1,
                    title: s.fields.title,
                    editAttributes: {
                      title: n({ entry: s, fieldId: "title" }),
                    },
                  },
                },
                editAttributes: {
                  query: n({ entry: s.fields.query, fieldId: "query" }),
                },
              })
            : (0, t.jsx)(h, {
                articles: g,
                feedTeaseStyle: s.fields.feedTeaseStyle,
                header: {
                  title: s.fields.title,
                  overline: s.fields.overline,
                  cta: (0, p.T)(s.fields.link),
                  subheading: (0, t.jsx)(r.Q, {
                    document: s.fields.description,
                  }),
                  editAttributes: {
                    title: n({ entry: s, fieldId: "title" }),
                    overline: n({ entry: s, fieldId: "overline" }),
                    subheading: n({ entry: s, fieldId: "description" }),
                  },
                },
                editAttributes: {
                  query: n({ entry: s.fields.query, fieldId: "query" }),
                },
              });
        },
        S = (0, s.i)((e) => {
          let { entry: i, createEditAttributes: l } = e;
          return i.fields.teasesCurated
            ? (0, t.jsx)(g, { entry: i, createEditAttributes: l })
            : i.fields.query
            ? (0, t.jsx)(x, { entry: i, createEditAttributes: l })
            : null;
        });
    },
    96590: () => {},
  },
]);
//# sourceMappingURL=9564.365c8e560d31b626.js.map
