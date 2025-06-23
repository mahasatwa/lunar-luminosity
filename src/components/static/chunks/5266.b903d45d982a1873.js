(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5266],
  {
    10850: () => {},
    18570: (e, t, i) => {
      "use strict";
      i.d(t, { i: () => n });
      var l = i(6029),
        s = i(87972);
      function n(e) {
        return (t) => {
          let { entry: i, options: n } = t,
            { getEntry: r, createEditAttributes: a } = (0, s.U)(),
            d = r(i);
          return (null == d ? void 0 : d.fields) &&
            (null == d ? void 0 : d.metadata) &&
            (null == d ? void 0 : d.sys.id)
            ? (0, l.jsx)(e, { entry: d, options: n, createEditAttributes: a })
            : null;
        };
      }
    },
    34077: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => a });
      var l = i(48249),
        s = i(74487),
        n = i(87972),
        r = i(16682);
      let a = (0, l.j)((e) => {
        let t,
          { entry: i, createEditAttributes: l } = e,
          { getPersonLink: a, getEntityName: d, getEntry: o } = (0, n.U)();
        return (
          (t = (0, r.I)("personWrapper", i) ? o(i.fields.person) : i),
          {
            name: d(i),
            titles: (null == t ? void 0 : t.fields.jobTitles) || [],
            link: a(i),
            portrait: (0, s.RC)(i),
            email: null == t ? void 0 : t.fields.email,
            editAttributes: {
              name: l({ entry: t, fieldId: "firstName" }),
              titles: l({ entry: t, fieldId: "jobTitles" }),
            },
          }
        );
      });
    },
    55266: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { ContentfulSectionIntroText: () => v });
      var l = i(6029),
        s = i(18570);
      i(10850);
      var n = i(50212),
        r = i(75287),
        a = i(55358);
      function d(e) {
        let {
            asset: t,
            relatedPeople: i,
            intro: s,
            text: d,
            align: o = "full",
            editAttributes: c,
          } = e,
          p = (0, n.A)(
            o && "hbs-global-align-".concat(o),
            "hbs-component--section-intro-text"
          ),
          u = (0, n.A)(
            "hbs-section-intro-text",
            t && "hbs-section-intro-text--has-asset"
          );
        return (0, l.jsx)("div", {
          className: p,
          "data-region": "cb__section-intro-text",
          children: (0, l.jsxs)("div", {
            className: u,
            children: [
              (0, l.jsxs)("div", {
                className: "hbs-section-intro-text__content",
                children: [
                  s &&
                    (0, l.jsx)("div", {
                      ...(null == c ? void 0 : c.intro),
                      className: "hbs-section-intro-text__intro",
                      children: s,
                    }),
                  d &&
                    (0, l.jsx)("div", {
                      ...(null == c ? void 0 : c.text),
                      className: "hbs-section-intro-text__text",
                      children: d,
                    }),
                ],
              }),
              t &&
                (0, l.jsx)("div", {
                  className: "hbs-section-intro-text__media",
                  children: (0, l.jsx)("div", {
                    className: "hbs-section-intro-text__media-wrapper",
                    children: (0, l.jsx)(r.Z, { ...t }),
                  }),
                }),
              !t &&
                i &&
                (0, l.jsxs)("div", {
                  className: "hbs-section-intro-text__related-people",
                  children: [
                    (0, l.jsx)("h2", {
                      className: "hbs-section-intro-text__related-people-title",
                      children: i.title,
                    }),
                    (0, l.jsx)(a.F, { ...i }),
                  ],
                }),
            ],
          }),
        });
      }
      var o = i(39263),
        c = i(74487),
        p = i(48249),
        u = i(87972),
        h = i(34077),
        m = i(16682);
      let x = (0, p.j)((e) => {
          let { entry: t } = e,
            { getEntries: i, getEntry: s } = (0, u.U)(),
            n = { people: [] };
          return (
            t.fields.peopleHeading
              ? (n.title = (0, l.jsx)(o.Q, {
                  document: t.fields.peopleHeading,
                }))
              : (n.title = "Related People"),
            i(t.fields.people).forEach((e) => {
              var t, i;
              if ((0, m.I)("person", e)) {
                let i = (0, h.Z)(e);
                i && (null === (t = n.people) || void 0 === t || t.push(i));
              }
              if ((0, m.I)("cpdPerson", e)) {
                let t = s(e.fields.person);
                if (t) {
                  (t.fields.displayName = e.fields.displayName),
                    (t.fields.image = e.fields.thumbnail);
                  let l = (0, h.Z)(t);
                  l && (null === (i = n.people) || void 0 === i || i.push(l));
                }
              }
            }),
            n
          );
        }),
        v = (0, s.i)((e) => {
          let { entry: t, options: i, createEditAttributes: s } = e,
            n = (0, c.N2)(t.fields.media);
          return (
            (null == n ? void 0 : n.kaltura) && (n.kaltura.withModal = !0),
            (0, l.jsx)(d, {
              intro:
                t.fields.intro && (0, l.jsx)(o.Q, { document: t.fields.intro }),
              text:
                t.fields.bodyText &&
                (0, l.jsx)(o.Q, { document: t.fields.bodyText }),
              asset: n,
              relatedPeople: t.fields.people ? x(t) : void 0,
              align: null == i ? void 0 : i.alignment,
              editAttributes: {
                intro: s({ entry: t, fieldId: "intro" }),
                text: s({ entry: t, fieldId: "bodyText" }),
              },
            })
          );
        });
    },
    55358: (e, t, i) => {
      "use strict";
      i.d(t, { F: () => d });
      var l = i(6029);
      i(91095);
      var s = i(75287),
        n = i(41272);
      function r(e) {
        return (0, l.jsx)("li", {
          className: "hbs-article-related-people__item",
          children: e.link
            ? (0, l.jsx)(n.N, {
                className: "hbs-article-related-people__link",
                href: e.link,
                children: (0, l.jsx)(a, { ...e }),
              })
            : (0, l.jsx)(a, { ...e }),
        });
      }
      function a(e) {
        var t, i, n, r;
        return (
          (null === (t = e.portrait) || void 0 === t ? void 0 : t.image) &&
            (e.portrait.image.mobileWidth = 130),
          (0, l.jsxs)("div", {
            className: "hbs-article-related-people__content",
            children: [
              e.portrait &&
                (0, l.jsx)("div", {
                  className: "hbs-article-related-people__portrait",
                  children: (0, l.jsx)(s.Z, {
                    ...e.portrait,
                    aspectRatio: "1/1",
                  }),
                }),
              (0, l.jsx)("h3", {
                className: "hbs-article-related-people__member-name",
                ...(null === (i = e.editAttributes) || void 0 === i
                  ? void 0
                  : i.name),
                children: e.name,
              }),
              (0, l.jsx)("span", {
                className: "hbs-article-related-people__member-title",
                ...(null === (n = e.editAttributes) || void 0 === n
                  ? void 0
                  : n.titles),
                children:
                  null === (r = e.titles) || void 0 === r
                    ? void 0
                    : r.join(", "),
              }),
            ],
          })
        );
      }
      function d(e) {
        let { people: t } = e;
        if (t)
          return (0, l.jsx)("ul", {
            className: "hbs-article-related-people",
            "data-region": "cs__related-people",
            children: t.map((e, t) => (0, l.jsx)(r, { ...e }, t)),
          });
      }
    },
    91095: () => {},
  },
]);
//# sourceMappingURL=5266.b903d45d982a1873.js.map
