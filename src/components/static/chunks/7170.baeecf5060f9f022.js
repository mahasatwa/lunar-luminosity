(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7170],
  {
    16080: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => n });
      var i = a(14472);
      function n(e) {
        return (0, i.a)(e).getFullYear();
      }
    },
    43757: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => n });
      var i = a(14472);
      function n(e) {
        return (0, i.a)(e).getMonth();
      }
    },
    65116: () => {},
    65365: (e, t, a) => {
      "use strict";
      a.d(t, {
        Yq: () => c,
        _D: () => u,
        az: () => d,
        nP: () => h,
        zL: () => o,
      });
      var i = a(12910),
        n = a(16080),
        r = a(43757),
        l = a(89223),
        s = a(81815);
      function o(e) {
        if (e)
          try {
            let t = new Date(e);
            if (!isNaN(t.getTime())) return t;
          } catch (e) {
            console.error(e);
          }
      }
      function d() {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          a = /^(\d{4})-(\d{2})-(\d{2})$/,
          i = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;
        return (null == t ? void 0 : t.match(a)) ||
          (null == t ? void 0 : t.match(i))
          ? ((null == t ? void 0 : t.match(a))
              ? (e = t.replace(a, "$2/$3/$1"))
              : (null == t ? void 0 : t.match(i)) &&
                (e = t.replace(i, "$2/$3/$1")),
            e)
          : t;
      }
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!e) return;
        let a = o(d(e)),
          n = t ? s.g : void 0;
        return a
          ? (0, i.GP)(a, t ? "yyyy年M月d日" : "LLL d, yyyy", { locale: n })
          : void 0;
      }
      function h(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || !t) return "";
        let c = o(d(e)),
          h = o(d(t));
        if (!c || !h) return "";
        let u = " – ",
          m = { locale: a ? s.g : void 0 },
          b = a ? "yyyy年M月d日" : "LLL d, yyyy";
        return (0, n.C)(c) !== (0, n.C)(h)
          ? (0, i.GP)(c, b, m) + u + (0, i.GP)(h, b, m)
          : (0, r.t)(c) !== (0, r.t)(h)
          ? (0, i.GP)(c, a ? "yyyy年M月d日" : "LLL d", m) +
            u +
            (0, i.GP)(h, a ? "M月d日" : "LLL d, yyyy", m)
          : (0, l.p)(c) !== (0, l.p)(h)
          ? (0, i.GP)(c, a ? "yyyy年M月d" : "LLL d", m) +
            u +
            (0, i.GP)(h, a ? "d日" : "d, yyyy", m)
          : (0, i.GP)(c, b, m);
      }
      function u(e) {
        if (!e) return "never";
        let t = Math.floor((new Date().getTime() - e.getTime()) / 1e3),
          a = t / 31536e3;
        return a > 1
          ? Math.floor(a) + " years ago"
          : (a = t / 2592e3) > 1
          ? Math.floor(a) + " months ago"
          : (a = t / 86400) > 1
          ? Math.floor(a) + " days ago"
          : (a = t / 3600) > 1
          ? Math.floor(a) + " hours ago"
          : (a = t / 60) > 1
          ? Math.floor(a) + " minutes ago"
          : Math.floor(t) + " seconds ago";
      }
    },
    67170: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { ArticleTease: () => u });
      var i = a(6029);
      a(65116);
      var n = a(50212),
        r = a(75287),
        l = a(88970),
        s = a(24999),
        o = a(90392),
        d = a(44292),
        c = a(41272);
      function h(e) {
        let { desc: t, editAttributes: a } = e;
        return t
          ? "string" == typeof t
            ? (0, i.jsx)("p", {
                ...(null == a ? void 0 : a.description),
                className: "hbs-article-tease__teaser",
                dangerouslySetInnerHTML: { __html: t },
              })
            : (0, i.jsx)("div", {
                ...(null == a ? void 0 : a.description),
                className: "hbs-article-tease__teaser",
                children: t,
              })
          : null;
      }
      function u(e) {
        let t,
          a,
          u,
          {
            byline: m,
            color: b,
            overline: g,
            customColor: _,
            image: f,
            video: y,
            kaltura: v,
            coverImage: p,
            imageInset: x,
            link: j,
            multiLinks: k,
            ariaLabel: w,
            tease: N,
            title: P,
            style: A = "expanded",
            theme: M,
            isLogo: L,
            isSmall: W,
            showSource: C,
            HeadingLevel: D = "h2",
            editAttributes: F,
            teaseContext: E,
            variant: S,
            onClick: T,
            downloadLink: B,
          } = e,
          z = f || v || y,
          G = (g && "expanded" === A) || "full" === A || "text-only" === A,
          I = "full" === A || "content" === A,
          O = "content" === A && !z,
          X = W && "content" === A,
          $ = "text-only" === A,
          Y = !$ && !O && "row" === E;
        j && (u = (0, d.i)(j));
        let q = (0, n.A)(
            "hbs-article-tease__arrow-icon hbs-icon",
            u && "hbs-article-tease__arrow-icon--external"
          ),
          H = _
            ? { backgroundColor: _ }
            : b
            ? { backgroundColor: o.fq[b] }
            : void 0;
        return (0, i.jsxs)("div", {
          ...(null == F ? void 0 : F.url),
          "data-theme": M || (!Y || z || M ? "unset" : "blue"),
          className: (0, n.A)(
            "hbs-article-tease",
            "hbs-article-tease--".concat(A),
            L && "hbs-article-tease--logo",
            !z && Y && "hbs-article-tease--no-image",
            X && "hbs-article-tease--small"
          ),
          children: [
            !O &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  f &&
                    !$ &&
                    (0, i.jsxs)("div", {
                      className: "hbs-article-tease__image",
                      children: [
                        (0, i.jsx)(c.N, {
                          style: H,
                          href: j,
                          className: (0, n.A)(
                            "hbs-article-tease__image__link",
                            p && "hbs-article-tease__image__link--cover"
                          ),
                          "aria-hidden": "true",
                          tabIndex: -1,
                          onClick: T,
                        }),
                        (0, i.jsx)(r.Z, {
                          image: { ...f, mobileWidth: 560 },
                          className: (0, n.A)(
                            L && "hbs-media-asset--logo",
                            x && "hbs-article-tease__media--inset",
                            p && "hbs-article-tease__media--cover",
                            "artwork" === S &&
                              "hbs-media-asset--no-aspect-ratio",
                            "profile-search" === S &&
                              "hbs-participant-story-media__image"
                          ),
                        }),
                      ],
                    }),
                  y &&
                    !$ &&
                    (0, i.jsx)(c.N, {
                      href: j,
                      "aria-label": w,
                      className: "hbs-article-tease__image",
                      children: (0, i.jsx)(r.Z, { video: y }),
                    }),
                  v &&
                    !$ &&
                    (0, i.jsx)("div", {
                      className: "hbs-article-tease__image",
                      children: (0, i.jsx)(r.Z, { kaltura: v }),
                    }),
                  (0, i.jsxs)("div", {
                    className: (0, n.A)(
                      "hbs-article-tease__content",
                      f || y || v || $ ? "" : "tease-without-media"
                    ),
                    children: [
                      G &&
                        (0, i.jsx)("span", {
                          className: "hbs-article-tease__overline",
                          children: (null == g ? void 0 : g.link)
                            ? (0, i.jsx)(c.N, {
                                href: g.link,
                                children: g.label,
                              })
                            : null == g
                            ? void 0
                            : g.label,
                        }),
                      (0, i.jsxs)(D, {
                        ...(null == F ? void 0 : F.title),
                        className: "hbs-article-tease__title hbs-text-h2",
                        children: [
                          !j &&
                            P &&
                            (0, i.jsx)("div", {
                              className: "hbs-article-tease__title__no-link",
                              children: P,
                            }),
                          j &&
                            P &&
                            "string" == typeof P &&
                            (0, i.jsx)(c.N, {
                              href: j,
                              "aria-label": w,
                              className: "hbs-article-tease__title__link",
                              dangerouslySetInnerHTML: { __html: P },
                              onClick: T,
                            }),
                          j &&
                            P &&
                            "string" != typeof P &&
                            (0, i.jsx)(c.N, {
                              href: j,
                              onClick: T,
                              "aria-label": w,
                              className: "hbs-article-tease__title__link",
                              children: P,
                            }),
                        ],
                      }),
                      I && N && (0, i.jsx)(h, { desc: N, editAttributes: F }),
                      k &&
                        (0, i.jsx)("ul", {
                          className: "hbs-article-tease__multi-link__list",
                          children: k.map((e) =>
                            (0, i.jsx)(
                              "li",
                              {
                                className:
                                  "hbs-article-tease__multi-link__item",
                                children: (0, i.jsx)(c.N, {
                                  className:
                                    "hbs-article-tease__multi-link__link",
                                  "aria-label": w,
                                  href: e.link,
                                  children: e.title,
                                }),
                              },
                              e.title
                            )
                          ),
                        }),
                      m &&
                        "content" !== A &&
                        (0, i.jsx)("div", {
                          className: "hbs-article-tease__meta",
                          children: (0, i.jsx)(l.K, { ...m, disableLinks: !0 }),
                        }),
                      C &&
                        t &&
                        j &&
                        a &&
                        !B &&
                        (0, i.jsxs)("div", {
                          className: "hbs-article-tease__source",
                          children: [
                            (0, i.jsxs)("p", {
                              className: "hbs-global-visually-hidden",
                              children: ["From ", a],
                            }),
                            (0, i.jsx)(c.N, {
                              className: "hbs-article-tease__source-link",
                              href: j,
                              "aria-hidden": !0,
                              tabIndex: -1,
                              children: t,
                            }),
                          ],
                        }),
                      B &&
                        (0, i.jsx)("div", {
                          className: "hbs-article-tease__download",
                          children: (0, i.jsx)(c.N, {
                            className: "hbs-article-tease__download-link",
                            href: B.link,
                            children: B.label,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            O &&
              !X &&
              (0, i.jsxs)("div", {
                className: (0, n.A)(
                  "hbs-article-tease__content__card hbs-article-tease__content--big",
                  j && "hbs-article-tease__content--link"
                ),
                children: [
                  (0, i.jsx)(D, {
                    ...(null == F ? void 0 : F.title),
                    className: "hbs-article-tease__title hbs-text-h2",
                    children: j
                      ? (0, i.jsx)(c.N, {
                          href: j,
                          "aria-label": w,
                          onClick: T,
                          children: P,
                        })
                      : P,
                  }),
                  I && N && (0, i.jsx)(h, { desc: N, editAttributes: F }),
                  j &&
                    (0, i.jsx)("div", {
                      className: "hbs-article-tease__arrow",
                      children: (0, i.jsx)(s.I, {
                        name: "arrow",
                        className: q,
                      }),
                    }),
                ],
              }),
            O &&
              X &&
              (0, i.jsxs)("div", {
                className: (0, n.A)(
                  "hbs-article-tease__content__card hbs-article-tease__content--small",
                  j && "hbs-article-tease__content--link"
                ),
                children: [
                  (0, i.jsxs)("div", {
                    className: "hbs-article-tease__content-wrapper--small",
                    children: [
                      (0, i.jsx)(D, {
                        ...(null == F ? void 0 : F.title),
                        className: "hbs-article-tease__title--small",
                        children: j
                          ? (0, i.jsx)(c.N, {
                              href: j,
                              "aria-label": w,
                              children: P,
                            })
                          : P,
                      }),
                      j &&
                        (0, i.jsx)("div", {
                          className: "hbs-article-tease__arrow",
                          children: (0, i.jsx)(s.I, {
                            name: "arrow",
                            className: q,
                          }),
                        }),
                    ],
                  }),
                  I && N && (0, i.jsx)(h, { desc: N, editAttributes: F }),
                ],
              }),
          ],
        });
      }
    },
    80680: () => {},
    81815: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => u });
      let i = {
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
      var n = a(22592);
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
      var l = a(19304);
      function s(e, t, a) {
        var i, n, r;
        let s = "eeee p";
        return ((i = e), (n = t), (r = a), +(0, l.k)(i, r) == +(0, l.k)(n, r))
          ? s
          : e.getTime() > t.getTime()
          ? "'下个'" + s
          : "'上个'" + s;
      }
      let o = {
        lastWeek: s,
        yesterday: "'昨天' p",
        today: "'今天' p",
        tomorrow: "'明天' p",
        nextWeek: s,
        other: "PP p",
      };
      var d = a(66146);
      let c = {
        ordinalNumber: (e, t) => {
          let a = Number(e);
          switch (null == t ? void 0 : t.unit) {
            case "date":
              return a.toString() + "日";
            case "hour":
              return a.toString() + "时";
            case "minute":
              return a.toString() + "分";
            case "second":
              return a.toString() + "秒";
            default:
              return "第 " + a.toString();
          }
        },
        era: (0, d.o)({
          values: {
            narrow: ["前", "公元"],
            abbreviated: ["前", "公元"],
            wide: ["公元前", "公元"],
          },
          defaultWidth: "wide",
        }),
        quarter: (0, d.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["第一季", "第二季", "第三季", "第四季"],
            wide: ["第一季度", "第二季度", "第三季度", "第四季度"],
          },
          defaultWidth: "wide",
          argumentCallback: (e) => e - 1,
        }),
        month: (0, d.o)({
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
        day: (0, d.o)({
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
        dayPeriod: (0, d.o)({
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
      var h = a(54644);
      let u = {
        code: "zh-CN",
        formatDistance: (e, t, a) => {
          let n;
          let r = i[e];
          return ((n =
            "string" == typeof r
              ? r
              : 1 === t
              ? r.one
              : r.other.replace("{{count}}", String(t))),
          null == a ? void 0 : a.addSuffix)
            ? a.comparison && a.comparison > 0
              ? n + "内"
              : n + "前"
            : n;
        },
        formatLong: r,
        formatRelative: (e, t, a, i) => {
          let n = o[e];
          return "function" == typeof n ? n(t, a, i) : n;
        },
        localize: c,
        match: {
          ordinalNumber: (0, a(400).K)({
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
    88970: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => d });
      var i = a(6029);
      a(80680);
      var n = a(50212),
        r = a(12910),
        l = a(75287),
        s = a(65365),
        o = a(41272);
      function d(e) {
        var t, a;
        let {
            authors: d,
            featuredAuthors: c,
            publicationDate: h,
            type: u = "Authors",
            headshots: m,
            disableLinks: b = !1,
            editAttributes: g,
          } = e,
          _ = null == d ? void 0 : d[0],
          f = null == c ? void 0 : c[0],
          y =
            _ &&
            (null === (t = _.name) || void 0 === t ? void 0 : t.length) < 50 &&
            d.map((e, t) => {
              var a;
              return (0, i.jsxs)(
                "span",
                {
                  className: "hbs-byline__author",
                  ...(null === (a = e.editAttributes) || void 0 === a
                    ? void 0
                    : a.name),
                  children: [
                    e.link && !b
                      ? (0, i.jsx)(o.N, { href: e.link, children: e.name })
                      : (0, i.jsx)("span", {
                          dangerouslySetInnerHTML: { __html: e.name },
                        }),
                    t !== d.length - 1 &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          2 !== d.length ? "," : "",
                          " ",
                          d.length > 1 && t === d.length - 2 && "and",
                          " ",
                        ],
                      }),
                  ],
                },
                t
              );
            }),
          v =
            f &&
            (null === (a = f.name) || void 0 === a ? void 0 : a.length) < 50 &&
            c.map((e, t) => {
              var a;
              return (0, i.jsxs)(
                "span",
                {
                  className: "hbs-byline__author",
                  ...(null === (a = e.editAttributes) || void 0 === a
                    ? void 0
                    : a.name),
                  children: [
                    " ",
                    e.link && !b
                      ? (0, i.jsx)(o.N, { href: e.link, children: e.name })
                      : e.name,
                    t !== c.length - 1 &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          2 !== c.length ? "," : "",
                          " ",
                          c.length > 1 && t === c.length - 2 && "and",
                          " ",
                        ],
                      }),
                  ],
                },
                t
              );
            }),
          p = (0, s.zL)((0, s.az)(h)),
          x = p
            ? (0, i.jsx)("time", {
                dateTime: (0, r.GP)(p, "yyyy-MM-dd"),
                ...(null == g ? void 0 : g.publicationDate),
                children: (0, r.GP)(p, "LLLL d, yyyy"),
              })
            : null,
          j = (0, n.A)("hbs-byline", m && c && "hbs-byline--headshots"),
          k = null == c ? void 0 : c.every((e) => e.avatar);
        return (0, i.jsxs)("div", {
          className: j,
          children: [
            "DateOnly" !== u &&
              m &&
              c &&
              c.length > 0 &&
              k &&
              (0, i.jsx)("span", {
                className: "hbs-byline__thumbnails",
                children: c.map((e, t) =>
                  (0, i.jsx)(
                    l.Z,
                    {
                      className: "hbs-byline__asset",
                      ...e.avatar,
                      hide: { caption: !0 },
                    },
                    t
                  )
                ),
              }),
            (0, i.jsx)("p", {
              className: "hbs-byline__text",
              children:
                "PeopleOnly" === u
                  ? v
                  : "DateOnly" === u
                  ? (0, i.jsxs)(i.Fragment, { children: ["Published ", x] })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        ("ShowAll" === u || "Featured" === u) && v
                          ? (0, i.jsxs)(i.Fragment, {
                              children: ["Featuring ", v, y || x ? ". " : " "],
                            })
                          : null,
                        "Featured" !== u && y
                          ? (0, i.jsxs)(i.Fragment, {
                              children: ["By ", y, " "],
                            })
                          : null,
                        x
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                "Featured" !== u && y ? " on " : "Published ",
                                " ",
                                x,
                                v ? "." : "",
                              ],
                            })
                          : null,
                      ],
                    }),
            }),
          ],
        });
      }
    },
    89223: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => n });
      var i = a(14472);
      function n(e) {
        return (0, i.a)(e).getDate();
      }
    },
    90392: (e, t, a) => {
      "use strict";
      a.d(t, { UP: () => o, V: () => d, du: () => r, fq: () => l });
      let i = {
          light: "#f6f4f2",
          white: "#ffffff",
          dark: "#222222",
          black: "#000000",
          crimson: "#a41034",
          red: "#e80538",
          purple: "#85609f",
          blue: "#aac8eb",
        },
        n = Object.entries(i).map((e) => {
          let [t] = e;
          return t;
        });
      Object.entries(i)
        .filter((e) => {
          let [t] = e;
          return !["purple", "blue"].includes(t);
        })
        .map((e) => {
          let [t] = e;
          return t;
        });
      let r = "light",
        l = {
          crimson: i.crimson,
          red2: i.red,
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
          blue4: i.blue,
          purple1: "#57116A",
          purple2: "#80408D",
          purple3: "#9B7FAF",
          purple4: "#C6B2D1",
          magenta1: "#78244C",
          magenta2: "#C9006B",
          magenta3: "#D86199",
          magenta4: "#E599BA",
          black: i.black,
          dark: i.dark,
          gray2: "#68666F",
          gray3: "#A3A0A2",
          gray4: "#D5D0CA",
          white: i.white,
          light: i.light,
        },
        s = [
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
      Object.entries(l).map((e) => {
        let [t] = e;
        return t;
      });
      let o = (e) => (e && s.includes(e) ? "dark" : "white"),
        d = (e) =>
          "red2" === e
            ? "red"
            : "blue4" === e
            ? "blue"
            : e && n.includes(e)
            ? e
            : e && s.includes(e)
            ? "plain-dark"
            : "plain-light";
      Object.keys({
        light: i.light,
        white: i.white,
        dark: i.dark,
        black: i.black,
        crimson: i.crimson,
      });
    },
  },
]);
//# sourceMappingURL=7170.baeecf5060f9f022.js.map
