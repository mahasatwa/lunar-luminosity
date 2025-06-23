(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2009],
  {
    15641: (e, t, i) => {
      "use strict";
      i.d(t, { n: () => h });
      var l = i(6029),
        n = i(87511),
        s = i(94416);
      function r(e) {
        let {
            gtagId: t,
            title: i = "Harvard Business School",
            description: r = "Harvard Business School",
            siteName: a = "Harvard Business School",
            canonicalUrl: d,
            type: o = "website",
            image: u,
            twitterCard: c = "summary",
            twitterCreator: f = "@HarvardHBS",
            twitterSite: p = "@HarvardHBS",
            metaOverride: m,
            children: h,
            openGraphDescription: g,
            noFollow: b,
            noIndex: v,
            convertId: y,
            pageLoadEventData: x,
            articleStructuredData: I,
            eventStructuredData: w,
          } = e,
          j = (0, s.qE)((e) => e.framework.Head),
          k = (0, n.L)(null == u ? void 0 : u.src),
          _ = {
            "og:title": i,
            "og:description": null != g ? g : r,
            "og:url": d,
            "og:type": o,
            "og:site_name": a,
            "og:image": k,
            "og:image:width": null == u ? void 0 : u.width,
            "og:image:height": null == u ? void 0 : u.height,
            "og:image:alt": null == u ? void 0 : u.alt,
            "twitter:title": i,
            "twitter:description": r,
            "twitter:card": c,
            "twitter:creator": f,
            "twitter:site": p,
            "twitter:image": k,
            "twitter:image:alt": null == u ? void 0 : u.alt,
            ...m,
          };
        return (0, l.jsxs)(j, {
          children: [
            (0, l.jsx)("link", {
              rel: "preconnect",
              href: "https://cloudinary.hbs.edu",
            }),
            v &&
              (0, l.jsx)(
                "meta",
                { name: "robots", content: "noindex" },
                "robots-noindex"
              ),
            b &&
              (0, l.jsx)(
                "meta",
                { name: "robots", content: "nofollow" },
                "robots-nofollow"
              ),
            (0, l.jsx)("title", { children: i }),
            r ? (0, l.jsx)("meta", { name: "description", content: r }) : null,
            Object.entries(_).map((e) => {
              let [t, i] = e;
              return i && (0, l.jsx)("meta", { property: t, content: i }, t);
            }),
            d && (0, l.jsx)("link", { rel: "canonical", href: d }),
            y &&
              (0, l.jsx)("script", {
                src: "https://cdn-4.convertexperiments.com/js/".concat(
                  y,
                  ".js"
                ),
              }),
            I &&
              (0, l.jsx)(
                "script",
                {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                      "@context": "http://schema.org",
                      "@type": "Article",
                      publisher: {
                        "@type": "Organization",
                        name: "Harvard Business School",
                      },
                      url: I.url,
                      name: I.name,
                      image: I.image,
                      articleBody: I.articleBody,
                      datePublished: I.datePublished,
                      articleSection: I.articleSection,
                      author: I.author && { "@type": "Person", name: I.author },
                    }),
                  },
                },
                "article-structured-data"
              ),
            w &&
              (0, l.jsx)(
                "script",
                {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                      "@context": "http://schema.org",
                      "@type": "Event",
                      name: w.name,
                      startDate: w.startDate,
                      endDate: w.endDate,
                      eventAttendanceMode: w.eventAttendanceMode,
                      eventStatus: w.eventStatus,
                      location: w.location,
                      image: w.image,
                      description: w.description,
                      offers: w.offers,
                      organizer: w.organizer,
                    }),
                  },
                },
                "event-structured-data"
              ),
            x &&
              (0, l.jsx)(
                "script",
                {
                  dangerouslySetInnerHTML: {
                    __html:
                      '\n                window.dataLayer = window.dataLater|| [];\n                window.dataLayer.push({ event: "page_load", event_data: '.concat(
                        JSON.stringify(x),
                        " });"
                      ),
                  },
                },
                "gtm-init"
              ),
            t &&
              (0, l.jsx)(
                "script",
                {
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n              })(window,document,'script','dataLayer','".concat(
                        t,
                        "');\n            "
                      ),
                  },
                },
                "gtm-script"
              ),
            h,
          ],
        });
      }
      var a = i(74487),
        d = i(87972),
        o = i(85761),
        u = i(43071),
        c = i(63822),
        f = i(16682),
        p = i(85050);
      function m(e) {
        return e && "object" == typeof e && Array.isArray(e.content)
          ? (0, p.Q)((0, c.C)(e).replace(/\s\s+/g, " "))
          : "";
      }
      function h(e) {
        var t, i, n, s, c, p, h;
        let { entry: g, ...b } = e,
          { request: v, ...y } = (0, o.l)(),
          {
            getEntry: x,
            site: I,
            isEditorMode: w,
            isPageLoaded: j,
          } = (0, d.U)();
        g = x(g);
        let { title: k, description: _ } = (function (e) {
            let { title: t, description: i } = e,
              { entry: l } = (0, o.l)(),
              { getEntry: n, site: s } = (0, d.U)(),
              r = n(l);
            if (!t || !i) {
              if (null == r ? void 0 : r.fields) {
                if (
                  "topper" in r.fields &&
                  r.fields.topper &&
                  "object" == typeof r.fields.topper
                ) {
                  let e = n(r.fields.topper);
                  e &&
                    (!t &&
                      "title" in e.fields &&
                      "string" == typeof e.fields.title &&
                      (t = e.fields.title),
                    !i &&
                      "subtitle" in e.fields &&
                      e.fields.subtitle &&
                      ("string" == typeof e.fields.subtitle
                        ? (i = e.fields.subtitle)
                        : "object" == typeof e.fields.subtitle &&
                          (i = m(e.fields.subtitle))));
                }
                if (
                  (!t && r.fields.title && (t = r.fields.title),
                  !t &&
                    (0, f.I)("participantStory", r) &&
                    r.fields.subTitle &&
                    (t = r.fields.subTitle),
                  !i || i.length < 30)
                ) {
                  if ((0, f.I)("profilePage", r)) {
                    if (r.fields.profile) {
                      let e = n(r.fields.profile);
                      if (
                        ((0, f.I)("person", e) &&
                          e.fields.bio &&
                          (i = m(e.fields.bio)),
                        (0, f.I)("schoolLeadershipPersonDetails", e))
                      ) {
                        let t = n(e.fields.person);
                        (null == t ? void 0 : t.fields.bio) &&
                          (i = m(t.fields.bio));
                      }
                    }
                  } else {
                    let e = [];
                    for (let t of ("body" in r.fields &&
                      Array.isArray(r.fields.body) &&
                      (e = r.fields.body),
                    "blocks" in r.fields &&
                      Array.isArray(r.fields.blocks) &&
                      (e = r.fields.blocks),
                    e)) {
                      let e = n(t);
                      if ((0, f.I)("richText", e) && e.fields.text) {
                        i = m(e.fields.text);
                        break;
                      }
                      if ((0, f.I)("ctaBanner", e) && e.fields.subtitle) {
                        i = m(e.fields.subtitle);
                        break;
                      }
                      if ((0, f.I)("sectionIntroText", e)) {
                        if (e.fields.intro) {
                          i = m(e.fields.intro);
                          break;
                        }
                        if (e.fields.bodyText) {
                          i = m(e.fields.bodyText);
                          break;
                        }
                      }
                      if ((0, f.I)("timelineEvent", e)) {
                        if (e.fields.title) {
                          i = m(e.fields.title);
                          break;
                        }
                        if (e.fields.description) {
                          i = m(e.fields.description);
                          break;
                        }
                      }
                    }
                  }
                }
              }
              (null == s ? void 0 : s.fields.title) &&
                (t =
                  t && s.fields.title !== t
                    ? t + " | " + s.fields.title
                    : s.fields.title + " | Harvard Business School");
            }
            return (
              t || (t = "Harvard Business School"),
              i || (i = t),
              { title: t, description: (i = i.substring(0, 160)) }
            );
          })({
            title:
              null !==
                (c =
                  null !== (s = b.title) && void 0 !== s
                    ? s
                    : null == g
                    ? void 0
                    : g.fields.title) && void 0 !== c
                ? c
                : "",
            description:
              null !==
                (h =
                  null !== (p = b.description) && void 0 !== p
                    ? p
                    : null == g
                    ? void 0
                    : g.fields.description) && void 0 !== h
                ? h
                : "",
          }),
          S = x(
            null == g
              ? void 0
              : null === (t = g.fields) || void 0 === t
              ? void 0
              : t.openGraphMedia
          ),
          P = (0, a.N2)(S),
          N = null == g ? void 0 : g.fields.canonicalUrl;
        N || (N = "https://".concat(v.host).concat(v.path));
        let B = u.e8.DEFAULT;
        (null == I ? void 0 : I.fields.domain) === "exed" && (B = u.e8.EXED),
          (null == I ? void 0 : I.fields.domain) === "online" &&
            (B = u.e8.ONLINE),
          (null == I ? void 0 : I.fields.domain) === "my" && (B = u.e8.MY);
        let H = { ...b.pageLoadEventData };
        return (
          (null == I ? void 0 : I.fields.slug) &&
            (H.profile_code =
              "/" === I.fields.slug ? I.fields.domain : I.fields.slug),
          (null === (n = y.session) || void 0 === n
            ? void 0
            : null === (i = n.user) || void 0 === i
            ? void 0
            : i.id) && (H.pid = y.session.user.id),
          v.query.gtag &&
            (B = "false" === v.query.gtag ? void 0 : v.query.gtag),
          (!j || w) && (B = void 0),
          (0, l.jsx)(r, {
            gtagId: B,
            title: k,
            description: _,
            canonicalUrl: N,
            openGraphDescription:
              null == g ? void 0 : g.fields.openGraphDescription,
            image: null == P ? void 0 : P.image,
            noIndex: null == g ? void 0 : g.fields.noIndex,
            noFollow: null == g ? void 0 : g.fields.noFollow,
            convertId: null == g ? void 0 : g.fields.convertId,
            ...b,
            pageLoadEventData: H,
          })
        );
      }
    },
    22691: (e, t, i) => {
      "use strict";
      i.d(t, { B: () => u });
      var l = i(6029),
        n = i(55729);
      i(88160), i(28142);
      var s = i(24999),
        r = i(41272);
      function a(e) {
        let { title: t, link: i, isCurrent: n = !1 } = e;
        return t
          ? (0, l.jsxs)("li", {
              className: "hbs-breadcrumbs-item",
              children: [
                n
                  ? (0, l.jsx)("span", {
                      className: "hbs-breadcrumbs-item__link",
                      "aria-current": "true",
                      children: t,
                    })
                  : (0, l.jsx)(r.N, {
                      className: "hbs-breadcrumbs-item__link",
                      target: "_self",
                      title: t,
                      href: i,
                      children: t,
                    }),
                (0, l.jsx)(s.I, { name: "caret" }),
              ],
            })
          : null;
      }
      var d = i(21785),
        o = i(90392);
      function u(e) {
        let {
            breadcrumbs: t,
            theme: i = o.du,
            rootLink: r = "/",
            siteType: u,
          } = e,
          {
            isMobile: c,
            isTablet: f,
            isDesktop: p,
          } = (0, d.d)({ isMobile: !0 }),
          [m, h] = (0, n.useState)(!1);
        if (!t || t.length < 1) return null;
        let g = [
          {
            link: r,
            title: c
              ? "internal" === u
                ? "myHBS"
                : "HBS"
              : "internal" === u
              ? "myHBS"
              : "Harvard Business School",
          },
          ...t,
        ];
        t.unshift();
        let b = p ? g.length : f ? 4 : 2,
          v = b + 1 < g.length && !m;
        return (0, l.jsx)("div", {
          className: "hbs-breadcrumbs__wrapper noindex",
          "data-theme": i,
          children: (0, l.jsx)("nav", {
            className: "hbs-breadcrumbs",
            "aria-label": "Breadcrumbs",
            children: (0, l.jsx)("div", {
              className: "hbs-breadcrumbs__content",
              children: (0, l.jsxs)("ol", {
                className: "hbs-breadcrumbs__list",
                children: [
                  v
                    ? (0, l.jsxs)("li", {
                        className: "hbs-breadcrumbs-item",
                        children: [
                          (0, l.jsx)("button", {
                            className: "hbs-breadcrumbs-item__link",
                            "aria-label": "Show more",
                            onClick: () => {
                              h(!0);
                            },
                            children: "...",
                          }),
                          (0, l.jsx)(s.I, { name: "caret" }),
                        ],
                      })
                    : null,
                  (v ? g.slice(g.length - b, g.length) : g).map((e, t) =>
                    (0, n.createElement)(a, { ...e, key: t })
                  ),
                ],
              }),
            }),
          }),
        });
      }
    },
    28142: () => {},
    80207: (e, t, i) => {
      "use strict";
      i.d(t, { b: () => r });
      var l = i(85761),
        n = i(87972),
        s = i(16682);
      function r() {
        var e, t;
        let { map: i, request: r, currentPage: a, entry: d } = (0, l.l)(),
          { site: o, getEntry: u } = (0, n.U)(),
          c = r.domain,
          f =
            (null == o ? void 0 : o.fields.domain) === "my"
              ? "internal"
              : "external",
          p = {
            breadcrumbs: [],
            rootLink:
              "internal" === f
                ? "https://inside.hbs.edu/myhbs.aspx"
                : "www" === c
                ? "/"
                : "https://www.hbs.edu",
            theme: void 0,
            siteType: f,
          },
          m = { menu: [] },
          h = [],
          g = u(d);
        if ((0, s.I)("landingPage", g)) {
          let t = u(
            null == g
              ? void 0
              : null === (e = g.fields.blocks) || void 0 === e
              ? void 0
              : e[0]
          );
          (0, s.I)("pageSectionTheme", t) && (p.theme = t.fields.theme);
        } else if ((0, s.I)("archivePage", g)) {
          let e = u(
            null == g
              ? void 0
              : null === (t = g.fields.topContent) || void 0 === t
              ? void 0
              : t[0]
          );
          (0, s.I)("pageSectionTheme", e) && (p.theme = e.fields.theme);
        }
        if (!o || !a || a.hidden) return { breadcrumbs: p, navigation: m };
        let b = (e) => e.url.replace("".concat(c, ".hbs.edu"), ""),
          v = (e) => {
            let t = b(e) || "/";
            if (
              !p.breadcrumbs.find((e) => e.link === t) &&
              (p.breadcrumbs.unshift({
                title: e.title,
                link: t,
                isCurrent: e.id === a.id,
              }),
              e.parentPageId)
            ) {
              let t = i.find((t) => t.id === e.parentPageId);
              t && v(t);
            }
          };
        v(a),
          i.forEach((e) => {
            !e.hidden &&
              e.parentPageId &&
              e.parentPageId === a.id &&
              h.push({ id: e.id, title: e.title, link: b(e) });
          });
        let y = i.find((e) => e.id === a.parentPageId),
          x = y
            ? i.find((e) => e.id === (null == y ? void 0 : y.parentPageId))
            : null,
          I = [],
          w = (null == x ? void 0 : x.parentPageId) && 0 === h.length;
        if (
          (i.forEach((e) => {
            if (!e.hidden) {
              if (w) {
                if (y && y.parentPageId === e.parentPageId) {
                  m.menu.push({
                    id: e.id,
                    title: e.title,
                    link: b(e),
                    isCurrent: !1,
                  });
                  return;
                }
                if (e.parentPageId === a.parentPageId) {
                  I.push({
                    id: e.id,
                    title: e.title,
                    link: b(e),
                    isCurrent: e.id === a.id,
                  });
                  return;
                }
              }
              !w &&
                e.parentPageId &&
                e.parentPageId === a.parentPageId &&
                m.menu.push({
                  id: e.id,
                  title: e.title,
                  link: b(e),
                  isCurrent: e.id === a.id,
                });
            }
          }),
          y)
        ) {
          let e = b(y) || "/";
          if (
            ("/" !== e && e.startsWith("/") && (e = e.substring(1)),
            e === o.fields.slug)
          ) {
            if (0 === h.length)
              return { breadcrumbs: p, navigation: { menu: [] } };
            (m.heading = { text: a.title }), (m.menu = h);
          } else if (w && y.parentPageId) {
            let e = i.find((e) => e.id === y.parentPageId);
            e && (m.heading = { text: e.title, link: b(e) });
          } else m.heading = { text: y.title, link: b(y) };
        }
        return (
          m.menu.forEach((e) => {
            e.isCurrent && h.length > 0 && (e.submenu = h),
              w && e.id === a.parentPageId && (e.submenu = I);
          }),
          { breadcrumbs: p, navigation: m }
        );
      }
    },
    88160: () => {},
  },
]);
//# sourceMappingURL=2009.c0d7180ff51d8bdb.js.map
