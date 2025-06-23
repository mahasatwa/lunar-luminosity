(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3574],
  {
    16080: (e, t, i) => {
      "use strict";
      i.d(t, { C: () => n });
      var a = i(14472);
      function n(e) {
        return (0, a.a)(e).getFullYear();
      }
    },
    18570: (e, t, i) => {
      "use strict";
      i.d(t, { i: () => r });
      var a = i(6029),
        n = i(87972);
      function r(e) {
        return (t) => {
          let { entry: i, options: r } = t,
            { getEntry: l, createEditAttributes: s } = (0, n.U)(),
            d = l(i);
          return (null == d ? void 0 : d.fields) &&
            (null == d ? void 0 : d.metadata) &&
            (null == d ? void 0 : d.sys.id)
            ? (0, a.jsx)(e, { entry: d, options: r, createEditAttributes: s })
            : null;
        };
      }
    },
    43757: (e, t, i) => {
      "use strict";
      i.d(t, { t: () => n });
      var a = i(14472);
      function n(e) {
        return (0, a.a)(e).getMonth();
      }
    },
    57534: () => {},
    57957: (e, t, i) => {
      "use strict";
      i.d(t, { SQ: () => l, zD: () => s });
      var a = i(18907);
      let n = "/api/search/query";
      function r(e) {
        var t, i, a, n;
        return (null == e ? void 0 : e.query) === void 0
          ? {}
          : {
              from:
                null == e
                  ? void 0
                  : null === (t = e.from) || void 0 === t
                  ? void 0
                  : t.toString(),
              size:
                null == e
                  ? void 0
                  : null === (i = e.size) || void 0 === i
                  ? void 0
                  : i.toString(),
              index: e.index,
              query: e.query,
              facets:
                null == e
                  ? void 0
                  : null === (a = e.facets) || void 0 === a
                  ? void 0
                  : a.join(","),
              filters: null == e ? void 0 : e.filters,
              sort: null == e ? void 0 : e.sort,
              facetLimit:
                null == e
                  ? void 0
                  : null === (n = e.facetLimit) || void 0 === n
                  ? void 0
                  : n.toString(),
            };
      }
      function l(e) {
        var t;
        let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = null == e ? void 0 : e.size;
        i.dedupe && (l = (null != l ? l : 25) + 10);
        let s = { url: n, params: r({ ...e, size: l }) },
          o = (0, a.s)(s);
        return (
          i.dedupe &&
            (null === (t = o.data) || void 0 === t ? void 0 : t.hits) &&
            d({ search: e, options: i, data: o.data }),
          o
        );
      }
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = {
            method: "POST",
            url: n,
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              queries: e.map((e) => {
                let i = null == e ? void 0 : e.size;
                return (
                  t.dedupe && (i = (null != i ? i : 25) + 10),
                  r({ ...(null != e ? e : {}), size: i })
                );
              }),
            }),
          },
          l = (0, a.s)(i);
        return (
          t.dedupe &&
            l.data &&
            l.data.forEach((i, a) => d({ options: t, data: i, search: e[a] })),
          l
        );
      }
      function d(e) {
        var t, i;
        let { data: a, search: n, options: r } = e,
          l = [],
          s =
            null !==
              (i =
                null !== (t = null == n ? void 0 : n.size) && void 0 !== t
                  ? t
                  : r.defaultSize) && void 0 !== i
              ? i
              : 25;
        for (let e of a.hits)
          if (
            (l.some(
              (t) =>
                ("id" in t && "id" in e && t.id === e.id) ||
                ("HBSTitle" in t &&
                  "HBSTitle" in e &&
                  t.HBSTitle === e.HBSTitle)
            ) || l.push(e),
            l.length >= s)
          )
            break;
        a.hits = l;
      }
    },
    58012: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => a });
      let a = (0, i(48249).j)((e) => {
        let { entry: t, options: i = {} } = e;
        if (!t.fields.query) return null;
        let a = {
            ...i,
            query:
              i.query || "(" + t.fields.query + ") AND -HBSDataLifecycle:Draft",
            size: i.size || parseInt(t.fields.limit || "25", 10),
            index: i.index || t.fields.index || "modern",
          },
          n = t.fields.sort;
        return (
          a.sort ||
            !n ||
            ((a.sort = n.join(",")),
            a.sort ||
              ("legacy" !== t.fields.index &&
                "classnotes" !== t.fields.index) ||
              (a.sort = "HBSSortDate")),
          a
        );
      });
    },
    65365: (e, t, i) => {
      "use strict";
      i.d(t, {
        Yq: () => u,
        _D: () => m,
        az: () => o,
        nP: () => h,
        zL: () => d,
      });
      var a = i(12910),
        n = i(16080),
        r = i(43757),
        l = i(89223),
        s = i(81815);
      function d(e) {
        if (e)
          try {
            let t = new Date(e);
            if (!isNaN(t.getTime())) return t;
          } catch (e) {
            console.error(e);
          }
      }
      function o() {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = /^(\d{4})-(\d{2})-(\d{2})$/,
          a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;
        return (null == t ? void 0 : t.match(i)) ||
          (null == t ? void 0 : t.match(a))
          ? ((null == t ? void 0 : t.match(i))
              ? (e = t.replace(i, "$2/$3/$1"))
              : (null == t ? void 0 : t.match(a)) &&
                (e = t.replace(a, "$2/$3/$1")),
            e)
          : t;
      }
      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!e) return;
        let i = d(o(e)),
          n = t ? s.g : void 0;
        return i
          ? (0, a.GP)(i, t ? "yyyy年M月d日" : "LLL d, yyyy", { locale: n })
          : void 0;
      }
      function h(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || !t) return "";
        let u = d(o(e)),
          h = d(o(t));
        if (!u || !h) return "";
        let m = " – ",
          c = { locale: i ? s.g : void 0 },
          v = i ? "yyyy年M月d日" : "LLL d, yyyy";
        return (0, n.C)(u) !== (0, n.C)(h)
          ? (0, a.GP)(u, v, c) + m + (0, a.GP)(h, v, c)
          : (0, r.t)(u) !== (0, r.t)(h)
          ? (0, a.GP)(u, i ? "yyyy年M月d日" : "LLL d", c) +
            m +
            (0, a.GP)(h, i ? "M月d日" : "LLL d, yyyy", c)
          : (0, l.p)(u) !== (0, l.p)(h)
          ? (0, a.GP)(u, i ? "yyyy年M月d" : "LLL d", c) +
            m +
            (0, a.GP)(h, i ? "d日" : "d, yyyy", c)
          : (0, a.GP)(u, v, c);
      }
      function m(e) {
        if (!e) return "never";
        let t = Math.floor((new Date().getTime() - e.getTime()) / 1e3),
          i = t / 31536e3;
        return i > 1
          ? Math.floor(i) + " years ago"
          : (i = t / 2592e3) > 1
          ? Math.floor(i) + " months ago"
          : (i = t / 86400) > 1
          ? Math.floor(i) + " days ago"
          : (i = t / 3600) > 1
          ? Math.floor(i) + " hours ago"
          : (i = t / 60) > 1
          ? Math.floor(i) + " minutes ago"
          : Math.floor(t) + " seconds ago";
      }
    },
    73574: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { ContentfulEventsTease: () => _ });
      var a = i(6029);
      i(57534);
      var n = i(55729),
        r = i(50212),
        l = i(25866);
      let s = ["crimson", "purple", "white", "dark", "blue", "red"];
      function d(e) {
        let { align: t = "full", children: i, headerContent: d } = e,
          o = (0, r.A)(
            "hbs-event-tease",
            "hbs-event-tease--count-".concat(n.Children.count(i))
          );
        return (0, a.jsxs)("div", {
          className: "hbs-global-align-".concat(
            t,
            " hbs-component--events-tease"
          ),
          "data-region": "cb__events-tease",
          children: [
            d && (0, a.jsx)(l.B, { ...d }),
            (0, a.jsx)("ul", {
              className: o,
              children: n.Children.map(i, (e, t) => {
                var i;
                return (
                  (0, n.isValidElement)(e) &&
                  (0, n.cloneElement)(e, {
                    theme:
                      null !== (i = e.props.theme) && void 0 !== i
                        ? i
                        : s[t % s.length],
                    HeadingLevel: d ? "h3" : "h2",
                  })
                );
              }),
            }),
          ],
        });
      }
      var o = i(55070),
        u = i(18570),
        h = i(58012),
        m = i(57957),
        c = i(79200),
        v = i(12910),
        f = i(65365),
        y = i(75287),
        p = i(41272),
        g = i(59946),
        b = i(44292);
      function x(e) {
        let t,
          { event: i, theme: l, HeadingLevel: s = "h2" } = e,
          d = (0, a.jsx)(n.Fragment, {});
        if (Array.isArray(i.date)) {
          let e = (0, f.zL)((0, f.az)(i.date[0])),
            t = (0, f.zL)((0, f.az)(i.date[1]));
          e &&
            t &&
            (d = (0, a.jsxs)("span", {
              className: "hbs-event-tease__date-range",
              children: [
                (0, a.jsxs)("time", {
                  className: "hbs-event-tease__time",
                  dateTime: (0, v.GP)(e, "yyyy-MM-dd"),
                  children: [
                    (0, a.jsx)("span", {
                      className: "hbs-event-tease__month",
                      children: (0, v.GP)(e, "MMM"),
                    }),
                    " ",
                    (0, a.jsx)("span", {
                      className: "hbs-event-tease__date",
                      children: (0, v.GP)(e, "dd"),
                    }),
                  ],
                }),
                (0, a.jsxs)("span", {
                  className: "hbs-event-tease__date-range-separator",
                  children: [
                    " ",
                    (0, a.jsx)("span", {
                      className: "hbs-global-visually-hidden",
                      children: "–",
                    }),
                    " ",
                  ],
                }),
                (0, a.jsxs)("time", {
                  className: "hbs-event-tease__time",
                  dateTime: (0, v.GP)(t, "yyyy-MM-dd"),
                  children: [
                    (0, a.jsx)("span", {
                      className: "hbs-event-tease__month",
                      children: (0, v.GP)(t, "MMM"),
                    }),
                    " ",
                    (0, a.jsx)("span", {
                      className: "hbs-event-tease__date",
                      children: (0, v.GP)(t, "dd"),
                    }),
                  ],
                }),
              ],
            }));
        } else {
          let e = (0, f.zL)((0, f.az)(i.date));
          e &&
            (d = (0, a.jsxs)("time", {
              className: "hbs-event-tease__time",
              dateTime: (0, v.GP)(e, "yyyy-MM-dd"),
              children: [
                (0, a.jsx)("span", {
                  className: "hbs-event-tease__month",
                  children: (0, v.GP)(e, "MMM"),
                }),
                " ",
                (0, a.jsx)("span", {
                  className: "hbs-event-tease__date",
                  children: (0, v.GP)(e, "dd"),
                }),
              ],
            }));
        }
        let o = (0, a.jsx)(n.Fragment, {});
        if (i.time) {
          if ("string" == typeof i.time) {
            if ("All Day" === i.time)
              o = (0, a.jsx)("span", { children: "All Day" });
            else {
              let e = (0, f.zL)(i.time);
              e &&
                (o = (0, a.jsx)("time", {
                  dateTime: (0, v.GP)(e, "HH:mm:ss"),
                  children: (0, v.GP)(e, "h:mm aa"),
                }));
            }
          } else if (Array.isArray(i.time)) {
            let e = (0, f.zL)(i.time[0]),
              t = (0, f.zL)(i.time[1]);
            e &&
              t &&
              (o = (0, a.jsxs)("span", {
                children: [
                  (0, a.jsx)("time", {
                    dateTime: (0, v.GP)(e, "HH:mm:ss"),
                    children: (0, v.GP)(e, "h:mm aa"),
                  }),
                  (0, a.jsx)("span", {
                    className: "hbs-global-visually-hidden",
                    children: " to ",
                  }),
                  (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    children: " – ",
                  }),
                  (0, a.jsx)("time", {
                    dateTime: (0, v.GP)(t, "HH:mm:ss"),
                    children: (0, v.GP)(t, "h:mm aa"),
                  }),
                ],
              }));
          }
        }
        return (
          i.href && (t = (0, b.i)(i.href)),
          (0, a.jsx)("li", {
            className: "hbs-event-tease__item",
            children: (0, a.jsxs)("div", {
              className: "hbs-event-tease__item-child",
              "data-theme": l,
              children: [
                d,
                (0, a.jsxs)("div", {
                  className: "hbs-event-tease__item-link-wrapper",
                  children: [
                    (0, a.jsx)(s, {
                      className: "hbs-event-tease__item-title hbs-text-h2",
                      children: i.href
                        ? (0, a.jsxs)(p.N, {
                            className: "hbs-event-tease__item-link",
                            href: i.href,
                            children: [
                              i.title,
                              (0, a.jsxs)("span", {
                                className:
                                  "hbs-event-tease__item-arrow-wrapper",
                                children: [
                                  "\xa0",
                                  (0, a.jsx)(g.P, {
                                    className: (0, r.A)(
                                      "hbs-event-tease__item-arrow",
                                      t &&
                                        "hbs-event-tease__item-arrow--external"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : i.title,
                    }),
                    (0, a.jsxs)("dl", {
                      className: "hbs-event-tease__meta",
                      children: [
                        (0, a.jsx)("dt", {
                          className: "hbs-global-visually-hidden",
                          "aria-hidden": !i.location,
                          children: "Location",
                        }),
                        (0, a.jsx)("dd", {
                          "aria-hidden": !i.location,
                          children: i.location,
                        }),
                        (0, a.jsx)("dt", {
                          className: "hbs-global-visually-hidden",
                          "aria-hidden": !i.time,
                          children: "Time",
                        }),
                        (0, a.jsx)("dd", {
                          "aria-hidden": !i.time,
                          children: o,
                        }),
                      ],
                    }),
                  ],
                }),
                i.featuredImage &&
                  (0, a.jsx)(y.Z, {
                    image: i.featuredImage,
                    aspectRatio: "3/4",
                    className: "hbs-event-tease__media",
                  }),
              ],
            }),
          })
        );
      }
      let _ = (0, u.i)((e) => {
        let { entry: t } = e,
          i = (0, h.o)(t.fields.teasesQuery),
          { data: n } = (0, m.SQ)(i),
          r =
            (null == n
              ? void 0
              : n.hits.map((e) => (0, c.T)(e)).filter((e) => null !== e)) || [];
        return (0, a.jsx)(d, {
          align: t.fields.alignment,
          headerContent: (0, o.V)(t.fields.header),
          children: r.map((e) => (0, a.jsx)(x, { ...e }, e.event.href)),
        });
      });
    },
    79200: (e, t, i) => {
      "use strict";
      function a(e) {
        var t, i, a, n, r, l, s, d;
        let o = {
            type: "Event",
            title: e.title,
            href:
              null === (t = e.display) || void 0 === t ? void 0 : t.eventLink,
            dates: [],
            overline:
              null === (a = e.display) || void 0 === a
                ? void 0
                : null === (i = a.overline) || void 0 === i
                ? void 0
                : i.label,
            meta: [],
            featuredImage: void 0,
          },
          [u, h] =
            null !==
              (d =
                null === (r = e.display) || void 0 === r
                  ? void 0
                  : null === (n = r.dateRange) || void 0 === n
                  ? void 0
                  : n.map(String)) && void 0 !== d
              ? d
              : [];
        return (
          (o.dates = u && h ? (u === h ? [u] : [u, h]) : u ? [u] : []),
          (o.meta =
            null === (l = e.display) || void 0 === l ? void 0 : l.eventMeta),
          (null === (s = e.display) || void 0 === s ? void 0 : s.thumbnail) &&
            (o.featuredImage = {
              src: e.display.thumbnail.src,
              alt: e.display.thumbnail.alt,
            }),
          e.description && (o.blurb = e.description),
          o
        );
      }
      function n(e) {
        let t = new Date(),
          [i, a] = e.split(":").map((e) => e.trim()),
          n = e.toLowerCase().includes("pm");
        if (i && a) {
          let e = parseInt(i);
          return (
            t.setHours(n && 12 !== e ? e + 12 : e, parseInt(a)), t.toISOString()
          );
        }
        return e;
      }
      function r(e) {
        var t, i, a, r, l, s, d;
        let o = {
            event: {
              title: e.title,
              location: null !== (s = e.location) && void 0 !== s ? s : "",
              date: "",
              href:
                null === (t = e.display) || void 0 === t ? void 0 : t.eventLink,
              featuredImage: (
                null === (i = e.display) || void 0 === i ? void 0 : i.thumbnail
              )
                ? { src: e.display.thumbnail.src, alt: e.display.thumbnail.alt }
                : void 0,
            },
          },
          [u, h] =
            null !==
              (d =
                null === (r = e.display) || void 0 === r
                  ? void 0
                  : null === (a = r.dateRange) || void 0 === a
                  ? void 0
                  : a.map(String)) && void 0 !== d
              ? d
              : [];
        o.event.date = u && h ? (u === h ? u : [u, h]) : u || "";
        let m = (function (e) {
          if (e)
            for (let t of e) {
              let e = t.find((e) => {
                var t;
                return (
                  (null === (t = e.title) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) === "times"
                );
              });
              if (null == e ? void 0 : e.info)
                return (function (e) {
                  let t = e.split(" - ");
                  if (2 === t.length) return t.map(n);
                  if (1 === t.length) {
                    var i;
                    return n(null !== (i = t[0]) && void 0 !== i ? i : "");
                  }
                  return e;
                })(e.info);
            }
        })(null === (l = e.display) || void 0 === l ? void 0 : l.eventMeta);
        return (o.event.time = m), o;
      }
      i.d(t, { T: () => r, n: () => a });
    },
    81815: (e, t, i) => {
      "use strict";
      i.d(t, { g: () => m });
      let a = {
        lessThanXSeconds: { one: "不到 1 秒", other: "不到 {{count}} 秒" },
        xSeconds: { one: "1 秒", other: "{{count}} 秒" },
        halfAMinute: "半分钟",
        lessThanXMinutes: { one: "不到 1 分钟", other: "不到 {{count}} 分钟" },
        xMinutes: { one: "1 分钟", other: "{{count}} 分钟" },
        xHours: { one: "1 小时", other: "{{count}} 小时" },
        aboutXHours: { one: "大约 1 小时", other: "大约 {{count}} 小时" },
        xDays: { one: "1 天", other: "{{count}} 天" },
        aboutXWeeks: { one: "大约 1 个星期", other: "大约 {{count}} 个星期" },
        xWeeks: { one: "1 个星期", other: "{{count}} 个星期" },
        aboutXMonths: { one: "大约 1 个月", other: "大约 {{count}} 个月" },
        xMonths: { one: "1 个月", other: "{{count}} 个月" },
        aboutXYears: { one: "大约 1 年", other: "大约 {{count}} 年" },
        xYears: { one: "1 年", other: "{{count}} 年" },
        overXYears: { one: "超过 1 年", other: "超过 {{count}} 年" },
        almostXYears: { one: "将近 1 年", other: "将近 {{count}} 年" },
      };
      var n = i(22592);
      let r = {
        date: (0, n.k)({
          formats: {
            full: "y'年'M'月'd'日' EEEE",
            long: "y'年'M'月'd'日'",
            medium: "yyyy-MM-dd",
            short: "yy-MM-dd",
          },
          defaultWidth: "full",
        }),
        time: (0, n.k)({
          formats: {
            full: "zzzz a h:mm:ss",
            long: "z a h:mm:ss",
            medium: "a h:mm:ss",
            short: "a h:mm",
          },
          defaultWidth: "full",
        }),
        dateTime: (0, n.k)({
          formats: {
            full: "{{date}} {{time}}",
            long: "{{date}} {{time}}",
            medium: "{{date}} {{time}}",
            short: "{{date}} {{time}}",
          },
          defaultWidth: "full",
        }),
      };
      var l = i(19304);
      function s(e, t, i) {
        var a, n, r;
        let s = "eeee p";
        return ((a = e), (n = t), (r = i), +(0, l.k)(a, r) == +(0, l.k)(n, r))
          ? s
          : e.getTime() > t.getTime()
          ? "'下个'" + s
          : "'上个'" + s;
      }
      let d = {
        lastWeek: s,
        yesterday: "'昨天' p",
        today: "'今天' p",
        tomorrow: "'明天' p",
        nextWeek: s,
        other: "PP p",
      };
      var o = i(66146);
      let u = {
        ordinalNumber: (e, t) => {
          let i = Number(e);
          switch (null == t ? void 0 : t.unit) {
            case "date":
              return i.toString() + "日";
            case "hour":
              return i.toString() + "时";
            case "minute":
              return i.toString() + "分";
            case "second":
              return i.toString() + "秒";
            default:
              return "第 " + i.toString();
          }
        },
        era: (0, o.o)({
          values: {
            narrow: ["前", "公元"],
            abbreviated: ["前", "公元"],
            wide: ["公元前", "公元"],
          },
          defaultWidth: "wide",
        }),
        quarter: (0, o.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["第一季", "第二季", "第三季", "第四季"],
            wide: ["第一季度", "第二季度", "第三季度", "第四季度"],
          },
          defaultWidth: "wide",
          argumentCallback: (e) => e - 1,
        }),
        month: (0, o.o)({
          values: {
            narrow: [
              "一",
              "二",
              "三",
              "四",
              "五",
              "六",
              "七",
              "八",
              "九",
              "十",
              "十一",
              "十二",
            ],
            abbreviated: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            wide: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
            ],
          },
          defaultWidth: "wide",
        }),
        day: (0, o.o)({
          values: {
            narrow: ["日", "一", "二", "三", "四", "五", "六"],
            short: ["日", "一", "二", "三", "四", "五", "六"],
            abbreviated: [
              "周日",
              "周一",
              "周二",
              "周三",
              "周四",
              "周五",
              "周六",
            ],
            wide: [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: (0, o.o)({
          values: {
            narrow: {
              am: "上",
              pm: "下",
              midnight: "凌晨",
              noon: "午",
              morning: "早",
              afternoon: "下午",
              evening: "晚",
              night: "夜",
            },
            abbreviated: {
              am: "上午",
              pm: "下午",
              midnight: "凌晨",
              noon: "中午",
              morning: "早晨",
              afternoon: "中午",
              evening: "晚上",
              night: "夜间",
            },
            wide: {
              am: "上午",
              pm: "下午",
              midnight: "凌晨",
              noon: "中午",
              morning: "早晨",
              afternoon: "中午",
              evening: "晚上",
              night: "夜间",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "上",
              pm: "下",
              midnight: "凌晨",
              noon: "午",
              morning: "早",
              afternoon: "下午",
              evening: "晚",
              night: "夜",
            },
            abbreviated: {
              am: "上午",
              pm: "下午",
              midnight: "凌晨",
              noon: "中午",
              morning: "早晨",
              afternoon: "中午",
              evening: "晚上",
              night: "夜间",
            },
            wide: {
              am: "上午",
              pm: "下午",
              midnight: "凌晨",
              noon: "中午",
              morning: "早晨",
              afternoon: "中午",
              evening: "晚上",
              night: "夜间",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      var h = i(54644);
      let m = {
        code: "zh-CN",
        formatDistance: (e, t, i) => {
          let n;
          let r = a[e];
          return ((n =
            "string" == typeof r
              ? r
              : 1 === t
              ? r.one
              : r.other.replace("{{count}}", String(t))),
          null == i ? void 0 : i.addSuffix)
            ? i.comparison && i.comparison > 0
              ? n + "内"
              : n + "前"
            : n;
        },
        formatLong: r,
        formatRelative: (e, t, i, a) => {
          let n = d[e];
          return "function" == typeof n ? n(t, i, a) : n;
        },
        localize: u,
        match: {
          ordinalNumber: (0, i(400).K)({
            matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
            parsePattern: /\d+/i,
            valueCallback: (e) => parseInt(e, 10),
          }),
          era: (0, h.A)({
            matchPatterns: {
              narrow: /^(前)/i,
              abbreviated: /^(前)/i,
              wide: /^(公元前|公元)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^(前)/i, /^(公元)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, h.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^第[一二三四]刻/i,
              wide: /^第[一二三四]刻钟/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i],
            },
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
          }),
          month: (0, h.A)({
            matchPatterns: {
              narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
              abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
              wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^一/i,
                /^二/i,
                /^三/i,
                /^四/i,
                /^五/i,
                /^六/i,
                /^七/i,
                /^八/i,
                /^九/i,
                /^十(?!(一|二))/i,
                /^十一/i,
                /^十二/i,
              ],
              any: [
                /^一|1/i,
                /^二|2/i,
                /^三|3/i,
                /^四|4/i,
                /^五|5/i,
                /^六|6/i,
                /^七|7/i,
                /^八|8/i,
                /^九|9/i,
                /^十(?!(一|二))|10/i,
                /^十一|11/i,
                /^十二|12/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, h.A)({
            matchPatterns: {
              narrow: /^[一二三四五六日]/i,
              short: /^[一二三四五六日]/i,
              abbreviated: /^周[一二三四五六日]/i,
              wide: /^星期[一二三四五六日]/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, h.A)({
            matchPatterns: {
              any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^上午?/i,
                pm: /^下午?/i,
                midnight: /^午夜/i,
                noon: /^[中正]午/i,
                morning: /^早上/i,
                afternoon: /^下午/i,
                evening: /^晚上?/i,
                night: /^凌晨/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      };
    },
    89223: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => n });
      var a = i(14472);
      function n(e) {
        return (0, a.a)(e).getDate();
      }
    },
  },
]);
//# sourceMappingURL=3574.eea0ba9b0fd253c7.js.map
