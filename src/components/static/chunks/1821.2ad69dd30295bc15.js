(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1821],
  {
    7113: (e, l, t) => {
      "use strict";
      t.d(l, { I: () => r });
      var i = t(6029),
        s = t(55729),
        a = t(36683),
        o = t(16150);
      function r(e) {
        let { name: l, props: t, children: d } = e,
          { getLazyComponentByName: p } = (0, o.y)(),
          u = p(l);
        return u
          ? (0, i.jsx)(a.t, {
              children: (0, i.jsx)(s.Suspense, {
                children: (0, i.jsx)(u, {
                  ...(t || {}),
                  children:
                    d &&
                    (Array.isArray(d)
                      ? (0, i.jsx)(n, { components: d })
                      : (0, i.jsx)(r, { ...d })),
                }),
              }),
            })
          : (console.error("ERROR: could not find lazy component ".concat(l)),
            null);
      }
      function n(e) {
        let { components: l } = e;
        return l && Array.isArray(l)
          ? (0, i.jsx)(i.Fragment, {
              children: l.map((e, l) => (0, i.jsx)(r, { ...e }, l)),
            })
          : null;
      }
    },
    8280: () => {},
    18570: (e, l, t) => {
      "use strict";
      t.d(l, { i: () => a });
      var i = t(6029),
        s = t(87972);
      function a(e) {
        return (l) => {
          let { entry: t, options: a } = l,
            { getEntry: o, createEditAttributes: r } = (0, s.U)(),
            n = o(t);
          return (null == n ? void 0 : n.fields) &&
            (null == n ? void 0 : n.metadata) &&
            (null == n ? void 0 : n.sys.id)
            ? (0, i.jsx)(e, { entry: n, options: a, createEditAttributes: r })
            : null;
        };
      }
    },
    32025: () => {},
    37752: (e, l, t) => {
      "use strict";
      t.d(l, { t: () => n });
      var i = t(6029);
      t(85084), t(32025), t(8280);
      var s = t(50212),
        a = t(25866),
        o = t(7113);
      function r(e) {
        let {
          tease: l,
          teaseStyle: t,
          headingLevel: s,
          showPhone: a,
          showJobTitle: r,
          articleImageInset: n,
        } = e;
        return l.props
          ? ("CTATease" !== l.name &&
              ((l.props.style = t), (l.props.HeadingLevel = s)),
            "ArticleTease" !== l.name ||
              ((l.props.teaseContext = "row"),
              (l.props.imageInset = n || l.props.imageInset),
              !l.props.image ||
                l.props.isLogo ||
                l.props.coverImage ||
                l.props.image.aspectRatio ||
                (l.props.image.aspectRatio = l.props.imageInset
                  ? "1/1"
                  : "3/2")),
            "PersonTease" === l.name &&
              ((l.props.isTeaseRow = !0),
              (l.props.hidePhone = !a),
              (l.props.hideJobTitle = !r)),
            (0, i.jsx)("li", {
              className: "hbs-tease-row__tease-mod",
              children: (0, i.jsx)(o.I, { ...l }),
            }))
          : null;
      }
      function n(e) {
        var l, t, o, n;
        let {
          align: d = "wide",
          className: p,
          headerContent: u,
          teases: c,
          teaseStyle: h,
          showPhone: v,
          showJobTitle: m,
          teasesPerRow: f,
          wrap: g = "no-wrap",
          imagesInset: w,
          HeadingLevel: b = "h2",
          HeadingLevelTease: x,
          editAttributes: y,
        } = e;
        Array.isArray(c) || (c = []);
        let j = f || c.length,
          k =
            c.some((e) => {
              var l;
              return (
                (null === (l = e.props) || void 0 === l ? void 0 : l.type) ===
                  "Article" && e.props.kaltura
              );
            }) &&
            c.some((e) => {
              var l;
              return (
                (null === (l = e.props) || void 0 === l ? void 0 : l.type) ===
                  "Article" && e.props.image
              );
            }),
          T = (0, s.A)(
            "hbs-global-align-".concat(d),
            "hbs-component--tease-row"
          ),
          A = (0, s.A)(
            "hbs-tease-row",
            "hbs-tease-row--".concat(j, "-up"),
            "hbs-tease-row--".concat(g),
            k && "hbs-tease-row--mixed-tease",
            p
          ),
          I =
            null === (o = c[0]) || void 0 === o
              ? void 0
              : null === (t = o.props) || void 0 === t
              ? void 0
              : null === (l = t.type) || void 0 === l
              ? void 0
              : l.toLowerCase();
        if (
          c.length < 2 &&
          "article" !== I &&
          "participantstory" !== I &&
          "person" !== I
        )
          return null;
        if ("article" === I) {
          let e = null === (n = c[0]) || void 0 === n ? void 0 : n.props;
          (null == e ? void 0 : e.isLogo)
            ? (I = "logo")
            : (null == e ? void 0 : e.kaltura)
            ? (I = "kaltura")
            : (null == e ? void 0 : e.byline) || (I = "content");
        }
        c.length < 3 &&
          (!f || "2" === f) &&
          c.forEach((e) => {
            var l, t;
            (null === (l = e.props) || void 0 === l ? void 0 : l.type) ===
              "Article" &&
              (null === (t = e.props) || void 0 === t ? void 0 : t.kaltura) &&
              (e.props.kaltura.withModal = !1);
          });
        let C = "cb__tease-row__".concat(I),
          L = x || (u ? "h3" : "h2");
        return (0, i.jsx)("div", {
          className: T,
          "data-region": C,
          children: (0, i.jsxs)("section", {
            className: "hbs-tease-row-container",
            children: [
              u && (0, i.jsx)(a.B, { ...u, HeadingLevel: b }),
              (0, i.jsx)("ul", {
                ...(null == y ? void 0 : y.teases),
                className: A,
                children: c.map((e, l) =>
                  (0, i.jsx)(
                    r,
                    {
                      tease: e,
                      teaseStyle: h,
                      headingLevel: L,
                      showPhone: v,
                      showJobTitle: m,
                      articleImageInset: w,
                    },
                    l
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    85084: () => {},
    91821: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { ContentfulTeaseRowContents: () => m });
      var i = t(6029),
        s = t(16682),
        a = t(37752),
        o = t(55070),
        r = t(48249),
        n = t(74487),
        d = t(39263),
        p = t(87972);
      let u = (0, r.j)((e) => {
        var l, t, s, a;
        let { entry: o, createEditAttributes: r } = e,
          { getEntryUrl: u, getEntry: c } = (0, p.U)(),
          h = (0, n.N2)(o.fields.media);
        return (
          (null == h ? void 0 : h.image) &&
            ((h.image.width = "600px"), (h.image.height = "450px")),
          (null == h ? void 0 : h.kaltura) && (h.kaltura.withModal = !0),
          {
            type: "Article",
            title: (0, i.jsx)(d.Q, {
              document:
                null === (l = o.fields) || void 0 === l ? void 0 : l.title,
              disableParagraphs: !0,
            }),
            link: u(null === (t = o.fields) || void 0 === t ? void 0 : t.link),
            ariaLabel:
              null === (s = c(o.fields.link)) || void 0 === s
                ? void 0
                : s.fields.ariaLabel,
            tease: (0, i.jsx)(d.Q, {
              document:
                null === (a = o.fields) || void 0 === a
                  ? void 0
                  : a.description,
            }),
            image: null == h ? void 0 : h.image,
            video: null == h ? void 0 : h.video,
            kaltura: null == h ? void 0 : h.kaltura,
            editAttributes: {
              title: r({ entry: o, fieldId: "title" }),
              tease: r({ entry: o.fields.link, fieldId: "url" }),
              description: r({ entry: o, fieldId: "description" }),
            },
          }
        );
      });
      var c = t(18570);
      let h = ["red", "black", "blue", "crimson", "purple"],
        v = ["dark", "light", "white"],
        m = (0, c.i)((e) => {
          var l, t;
          let { entry: r, options: n } = e,
            { getEntries: d } = (0, p.U)(),
            c = [],
            m =
              null !== (t = null == n ? void 0 : n.headerAbove) &&
              void 0 !== t &&
              t,
            f = (0, o.V)(r.fields.header);
          return (
            null === (l = d(r.fields.contentTeases)) ||
              void 0 === l ||
              l.forEach((e, l) => {
                if ((0, s.I)("contentTease", e)) {
                  let t = u(e);
                  if (t) {
                    if (
                      r.fields.teaseThemeConsistent ||
                      void 0 === r.fields.teaseThemeConsistent ||
                      null === r.fields.teaseThemeConsistent
                    )
                      t.theme = r.fields.teaseTheme;
                    else if (
                      !r.fields.teaseTheme ||
                      v.includes(r.fields.teaseTheme)
                    )
                      t.theme = h[l % h.length];
                    else {
                      let e = h.indexOf(r.fields.teaseTheme);
                      t.theme = h[(e + l) % h.length];
                    }
                    e.fields.media && (t.theme = void 0),
                      "small" === r.fields.teaseSize && (t.isSmall = !0),
                      c.push({ name: "ArticleTease", props: t });
                  }
                }
              }),
            (0, i.jsx)(a.t, {
              teases: c,
              wrap: r.fields.wrap ? "wrap" : "no-wrap",
              align: r.fields.alignment,
              teaseStyle: "content",
              teasesPerRow: r.fields.teasesPerRow,
              headerContent: f,
              HeadingLevel: m ? "h3" : "h2",
              HeadingLevelTease: m
                ? r.fields.header
                  ? "h4"
                  : "h3"
                : r.fields.header
                ? "h3"
                : "h2",
            })
          );
        });
    },
  },
]);
//# sourceMappingURL=1821.2ad69dd30295bc15.js.map
