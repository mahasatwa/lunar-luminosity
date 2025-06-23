(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5287],
  {
    11832: () => {},
    12530: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => l });
      var s = a(6029);
      a(46248);
      var i = a(55729),
        r = a(85765),
        n = a(21009);
      function l(e) {
        let { videoPath: t, media: a, caption: l } = e,
          d = (0, i.useRef)(null),
          { pushDataLayer: c } = (0, n.v)();
        return (
          (0, i.useEffect)(() => {
            let e = d.current;
            if (!e) return;
            let t = () => {
              c({
                event: "video",
                event_data: {
                  video_title: "livestream",
                  video_type: "livestream",
                },
              });
            };
            return (
              e.addEventListener("play", t),
              () => {
                e.removeEventListener("play", t);
              }
            );
          }, [c]),
          (0, i.useEffect)(() => {
            t
              ? (0, r.k)("https://vjs.zencdn.net/7.11.4/video.min.js", {
                  defer: !0,
                })
              : console.warn("video.js script not loaded");
          }, [t]),
          (0, i.useEffect)(() => {
            let e = document.head.appendChild(
                Object.assign(document.createElement("link"), {
                  rel: "stylesheet",
                  href: "https://vjs.zencdn.net/7.11.4/video-js.css",
                })
              ),
              t = document.querySelector(".hbs-topper.hbs-statistics-topper");
            return (
              t && t.classList.add("hbs-wowza-embed-topper"),
              () => {
                document.head.removeChild(e);
              }
            );
          }, []),
          (0, s.jsxs)("div", {
            className: "hbs-media-asset",
            children: [
              (0, s.jsxs)("video", {
                ref: d,
                id: "hbs-wowza-video",
                className: "video-js vjs-big-play-centered",
                controls: !0,
                preload: "none",
                "data-setup": '{"suppressNotSupportedError": true}',
                poster: (null == a ? void 0 : a.src) || void 0,
                children: [
                  (0, s.jsx)("source", {
                    src: t,
                    type: "application/x-mpegURL",
                  }),
                  (0, s.jsx)("p", {
                    className: "vjs-no-js",
                    children:
                      "To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video.",
                  }),
                ],
              }),
              (0, s.jsx)("figcaption", {
                children: (0, s.jsx)("span", {
                  className: "hbs-media-asset__caption-text",
                  children: (0, s.jsx)("div", { children: l }),
                }),
              }),
            ],
          })
        );
      }
    },
    13076: () => {},
    21009: (e, t, a) => {
      "use strict";
      function s() {
        return {
          pushDataLayer: (e) => {
            var t, a;
            null === (a = window) ||
              void 0 === a ||
              null === (t = a.dataLayer) ||
              void 0 === t ||
              t.push(e);
          },
        };
      }
      a.d(t, { v: () => s });
    },
    45624: () => {},
    46248: () => {},
    75287: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => _ });
      var s = a(6029);
      a(11832);
      var i = a(55729),
        r = a(50212),
        n = a(87511),
        l = a(94416);
      let d = (0, i.forwardRef)((e, t) => {
        let {
            align: a,
            gravity: i,
            alt: d = "",
            caption: c,
            className: o,
            aspectRatio: u,
            intrinsicAspectRatio: h,
            height: m = "auto",
            hide: p,
            src: v,
            mobileWidth: y = 600,
            loading: b = "lazy",
            width: f = "100%",
            quality: g,
            editAttributes: _,
          } = e,
          x = (0, l.qE)((e) => e.framework.Head),
          j = {};
        (null == f ? void 0 : f.includes("px")) &&
          ((j.width = parseInt(f.replace("px", ""))),
          j.width < y && (y = j.width)),
          u
            ? (j.ratio = u.replace("/", ":"))
            : h && ((j.ratio = h.replace("/", ":")), (u = h)),
          !u &&
            (null == m ? void 0 : m.includes("px")) &&
            (j.height = parseInt(m.replace("px", ""))),
          i && (j.gravity = i),
          g && (j.quality = g);
        let w = (0, n.L)(v, j),
          N = (0, n.L)(v, { ...j, width: y }),
          k = "(max-width: 600px) ".concat(y, "px"),
          L = "".concat(N, " ").concat(y, "w, ").concat(w),
          E = "center center";
        return (
          "west" === j.gravity && (E = "left"),
          "north" === j.gravity && (E = "top"),
          "east" === j.gravity && (E = "right"),
          "south" === j.gravity && (E = "bottom"),
          "center" === j.gravity && (E = "center"),
          "auto" === j.gravity && (E = "inherit"),
          (0, s.jsxs)(s.Fragment, {
            children: [
              "eager" === b &&
                (0, s.jsx)(x, {
                  children: (0, s.jsx)("link", {
                    rel: "preload",
                    as: "image",
                    href: w,
                    imageSrcSet: L,
                    imageSizes: k,
                  }),
                }),
              (0, s.jsxs)("figure", {
                className: (0, r.A)(
                  "hbs-media-asset hbs-media-asset--image",
                  a && "hbs-global-".concat(a),
                  "hbs-media-asset--loaded",
                  o
                ),
                children: [
                  (0, s.jsx)("span", {
                    ...(null == _ ? void 0 : _.src),
                    className: "hbs-media-asset__wrapper",
                    children: (0, s.jsx)("img", {
                      alt: d,
                      width: f,
                      height: u ? "auto" : m,
                      loading: b,
                      src: w,
                      srcSet: L,
                      sizes: k,
                      ref: t,
                      fetchpriority: "eager" === b ? "high" : "low",
                      style: u
                        ? {
                            aspectRatio: u,
                            objectFit: "cover",
                            objectPosition: E,
                          }
                        : {},
                    }),
                  }),
                  !(null == p ? void 0 : p.caption) &&
                    c &&
                    (0, s.jsx)("figcaption", {
                      children: (0, s.jsx)("span", {
                        className: "hbs-media-asset__caption-text",
                        children: c,
                      }),
                    }),
                ],
              }),
            ],
          })
        );
      });
      var c = a(53027),
        o = a(4761);
      function u(e) {
        let {
            align: t,
            description: a,
            backupImage: n,
            caption: l,
            className: u,
            hide: h,
            inline: m = !0,
            autoplay: p = !0,
            src: v,
            mimeType: y,
            width: b = "100%",
            aspectRatio: f,
            editAttributes: g,
          } = e,
          [_, x] = (0, i.useState)(!1),
          [j, w] = (0, i.useState)(m && p),
          N = (0, i.useRef)(null),
          k = (0, i.useRef)(null),
          L = (0, i.useRef)(null),
          E = (0, i.useRef)(null),
          P = (0, i.useRef)(null),
          I = (function () {
            let [e, t] = (0, i.useState)(!1);
            return (
              (0, i.useEffect)(() => {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                  a = (e) => t(e.matches);
                return (
                  e.addEventListener("change", a),
                  t(e.matches),
                  () => e.removeEventListener("change", a)
                );
              }, []),
              e
            );
          })(),
          R = (0, i.useId)(),
          S = (0, r.A)(
            "hbs-media-asset hbs-media-asset--video",
            t && "hbs-global-".concat(t),
            _ && "hbs-media-asset--loaded",
            n && "hidden with-backup-image",
            u
          ),
          C = m && {
            autoPlay: p,
            controls: !1,
            loop: !0,
            muted: !0,
            playsInline: !0,
          };
        (0, i.useEffect)(() => {
          let e = L.current;
          e && p && (I ? e.pause() : e.play());
        }, [I]),
          (0, i.useEffect)(() => {
            let e = N.current;
            function t() {
              let t = k.current,
                a = E.current;
              (null == e
                ? void 0
                : e.classList.contains("hbs-media-asset--loaded")) ||
                null == e ||
                e.classList.add("hbs-media-asset--loaded"),
                (null == t
                  ? void 0
                  : t.classList.contains("hbs-media-asset__wrapper")) ||
                  null == t ||
                  t.classList.add("hbs-media-asset__wrapper"),
                null == e || e.classList.remove("hidden"),
                null == a || a.classList.add("hidden");
            }
            !_ ||
              (null == e
                ? void 0
                : e.classList.contains("hbs-media-asset--loaded")) ||
              (x(!0), t()),
              (null == e
                ? void 0
                : e.classList.contains("hbs-media-asset--loaded")) && t();
          }, [_, k, E]),
          (0, i.useEffect)(() => {
            let e = () => {
              let e = N.current;
              if (
                null == e
                  ? void 0
                  : e.classList.contains("hbs-media-asset--loaded")
              ) {
                let t = k.current,
                  a = E.current;
                (null == e
                  ? void 0
                  : e.classList.contains("hbs-media-asset--loaded")) ||
                  null == e ||
                  e.classList.add("hbs-media-asset--loaded"),
                  (null == t
                    ? void 0
                    : t.classList.contains("hbs-media-asset__wrapper")) ||
                    null == t ||
                    t.classList.add("hbs-media-asset__wrapper"),
                  null == e || e.classList.remove("hidden"),
                  null == a || a.classList.add("hidden");
              }
            };
            return (
              window.addEventListener("canplay", e),
              () => window.removeEventListener("canplay", e)
            );
          }, []);
        let z = (e) => {
          e.stopPropagation();
          let t = L.current;
          t && (t.paused ? t.play() : t.pause(), w(!t.paused));
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("figure", {
              className: S,
              ref: N,
              children: [
                (0, s.jsxs)("span", {
                  ...(null == g ? void 0 : g.src),
                  className: n
                    ? "media-span-wrapper"
                    : "hbs-media-asset__wrapper",
                  ref: k,
                  children: [
                    (0, s.jsxs)("video", {
                      id: "video-".concat(R),
                      ref: L,
                      width: b,
                      poster: n,
                      ...C,
                      onCanPlay: () => x(!0),
                      onClick: z,
                      style: f
                        ? {
                            aspectRatio: f,
                            objectFit: "cover",
                            objectPosition: "center center",
                          }
                        : {},
                      "aria-label": a ? "Video of ".concat(a) : "",
                      children: [
                        (0, s.jsx)("source", { src: v, type: y }),
                        (0, s.jsx)("p", {
                          children:
                            "Sorry, your browser doesn't support embedded videos.",
                        }),
                      ],
                    }),
                    (0, s.jsx)("button", {
                      className: "hbs-media-asset__pause",
                      "aria-hidden": "true",
                      onClick: z,
                      children: j
                        ? (0, s.jsx)(c._, {
                            className: "hbs-media-asset__pause-icon",
                          })
                        : (0, s.jsx)(o.A, {
                            className: "hbs-media-asset__pause-icon",
                          }),
                    }),
                  ],
                }),
                !(null == h ? void 0 : h.caption) &&
                  l &&
                  (0, s.jsx)("figcaption", {
                    className: "hbs-media-asset__caption",
                    children: (0, s.jsx)("span", {
                      className: "hbs-media-asset__caption-text",
                      children: (0, s.jsx)("p", { children: l }),
                    }),
                  }),
              ],
            }),
            n &&
              (0, s.jsx)("span", {
                className: "backup-image",
                ref: E,
                children: (0, s.jsx)(d, { ref: P, src: n, width: b, alt: a }),
              }),
          ],
        });
      }
      var h = a(27780),
        m = a(84880);
      a(45624);
      var p = a(85765),
        v = a(21009);
      function y(e) {
        let {
            hide: t,
            caption: a,
            description: n,
            duration: l,
            entryId: d,
            title: c,
            withModal: o,
            className: u,
            threePlayId: h,
            threePlayProjectId: y,
          } = e,
          b = (0, i.useId)().replace(/:/g, ""),
          f = (0, i.useRef)(null),
          [g, _] = (0, i.useState)(null != o && o),
          { pushDataLayer: x } = (0, v.v)(),
          j = (0, i.useRef)(g),
          w = "kaltura-player-".concat(d, "-").concat(b),
          N = "threePlay-".concat(d),
          k = !!(h && y),
          L = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(() => {
            g &&
              (0, p.k)(m.KI, {
                onload: () => {
                  var e;
                  if (
                    (null === (e = f.current) ||
                      void 0 === e ||
                      e.classList.add("hbs-global-visually-hidden"),
                    window.kWidget)
                  )
                    try {
                      window.kWidget.embed({
                        entry_id: d,
                        targetId: w,
                        wid: "_".concat(m.sd),
                        uiconf_id: m.P$,
                        flashvars: { autoPlay: !0 },
                        readyCallback: (e) => {
                          (L.current = !0),
                            (function (e, t) {
                              try {
                                let a;
                                let s = document.getElementById(e);
                                (s.duration = 0),
                                  (s.currentTime = 0),
                                  (s.zero = !1),
                                  (s.twentyfive = !1),
                                  (s.fifty = !1),
                                  (s.seventyfive = !1),
                                  (s.hundred = !1);
                                let i = s.evaluate(
                                    "{mediaProxy.entry.name} : {mediaProxy.entry.name}"
                                  ),
                                  r = s.evaluate("{mediaProxy.isLive}")
                                    ? "livestream"
                                    : "recorded";
                                s.kBind("mediaReady", function () {
                                  var t, a, s;
                                  let r = document.getElementById(e),
                                    n =
                                      null == r
                                        ? void 0
                                        : null ===
                                            (s = r.querySelector("iframe")) ||
                                          void 0 === s
                                        ? void 0
                                        : null === (a = s.contentDocument) ||
                                          void 0 === a
                                        ? void 0
                                        : null ===
                                            (t = a.querySelector("title")) ||
                                          void 0 === t
                                        ? void 0
                                        : t.text,
                                    l = e.split("-")[2];
                                  (i && " : " !== i) ||
                                    (i = "".concat(n, " : ").concat(l));
                                }),
                                  s.kBind("playerUpdatePlayhead", function (e) {
                                    let n = 0;
                                    s.evaluate("{duration}") &&
                                      (n = Number(s.evaluate("{duration}"))),
                                      (a = {
                                        event: "video",
                                        event_data: {
                                          video_title: i,
                                          video_duration: n,
                                          video_milestone: 0,
                                          video_type: r,
                                        },
                                      });
                                    let l = Math.round((e / n) * 100);
                                    (s.currentTime = e),
                                      l > 0 &&
                                        (s.zero ||
                                          ((a.event_data.video_milestone = 1),
                                          t(a),
                                          (s.zero = !0)),
                                        l >= 25 &&
                                          !s.twentyfive &&
                                          ((a.event_data.video_milestone = 25),
                                          (0, v.v)().pushDataLayer(a),
                                          (s.twentyfive = !0)),
                                        l >= 50 &&
                                          !s.fifty &&
                                          ((a.event_data.video_milestone = 50),
                                          (0, v.v)().pushDataLayer(a),
                                          (s.fifty = !0)),
                                        l >= 75 &&
                                          !s.seventyfive &&
                                          ((a.event_data.video_milestone = 75),
                                          (0, v.v)().pushDataLayer(a),
                                          (s.seventyfive = !0)),
                                        l >= 90 &&
                                          !s.hundred &&
                                          ((a.event_data.video_milestone = 100),
                                          (0, v.v)().pushDataLayer(a),
                                          (s.hundred = !0)));
                                  });
                              } catch (e) {
                                console.error(e);
                              }
                            })(e, x);
                          let t = document.getElementById(e);
                          if (
                            ((null == t ? void 0 : t.sendNotification) &&
                              setTimeout(() => {
                                t.sendNotification("doPlay");
                              }, 100),
                            h && y)
                          ) {
                            let e = (function (e) {
                              let {
                                threePlayId: t,
                                threePlayProjectId: a,
                                videoTargetId: s,
                                threePlayTargetId: i,
                              } = e;
                              if (!t || !a || !i || !s) return null;
                              let r = new URL(
                                "https://plugin.3playmedia.com/ajax.js"
                              );
                              return (
                                r.searchParams.set("pt", "602"),
                                r.searchParams.set("mf", t),
                                r.searchParams.set("p", a),
                                r.searchParams.set("target", i),
                                r.searchParams.set("vembed", "0"),
                                r.searchParams.set("video_target", s),
                                r.searchParams.set("p3sdk_version", "1.10.7"),
                                r.href
                              );
                            })({
                              threePlayId: h,
                              threePlayProjectId: y,
                              videoTargetId: w,
                              threePlayTargetId: N,
                            });
                            (0, p.k)(e, { allowDuplicates: !0 });
                          }
                        },
                      });
                    } catch (e) {
                      console.error("Failed to embed Kaltura player:", e),
                        _(!1),
                        (L.current = !1);
                    }
                },
              });
          }, [g, w, d, h, y, N, x]),
          (0, i.useEffect)(() => {
            let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    !e.isIntersecting &&
                      L.current &&
                      window.kWidget &&
                      (window.kWidget.destroy(w),
                      _(!1),
                      (L.current = !1),
                      f.current &&
                        f.current.classList.remove(
                          "hbs-global-visually-hidden"
                        ));
                  });
                },
                { threshold: [0] }
              ),
              t = document.getElementById(w);
            return (
              t && e.observe(t),
              () => {
                e.disconnect(),
                  window.kWidget &&
                    L.current &&
                    (window.kWidget.destroy(w), _(!1), (L.current = !1));
              }
            );
          }, [w]),
          (0, i.useEffect)(() => {
            g ||
              (() => {
                let e = document.getElementById(w);
                if (e) {
                  let t = document.getElementById("".concat(w, "_playBtn"));
                  t && (t.style.display = "block");
                  let a = e.querySelector(".kWidgetCentered");
                  a && (a.style.display = "block"),
                    f.current &&
                      f.current.classList.remove("hbs-global-visually-hidden");
                }
              })();
          }, [g, w]),
          (0, i.useEffect)(() => {
            var e;
            let t =
                null === (e = document.getElementById(w)) || void 0 === e
                  ? void 0
                  : e.closest(".hbs-kaltura-embed"),
              a = () => {
                _(!1), (L.current = !1);
              };
            return (
              t && t.addEventListener("resetKalturaPlayer", a),
              () => {
                t && t.removeEventListener("resetKalturaPlayer", a);
              }
            );
          }, [w]),
          (0, s.jsxs)("figure", {
            className: (0, r.A)("hbs-media-asset", u),
            children: [
              (0, s.jsxs)("div", {
                className: "hbs-kaltura-embed",
                "data-chromatic": "ignore",
                children: [
                  (0, s.jsx)("div", {
                    className: "hbs-kaltura-embed__responsive-spacer",
                  }),
                  (0, s.jsx)("div", {
                    id: w,
                    className: "hbs-kaltura-embed__player",
                    children: (0, s.jsxs)("div", {
                      style: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      },
                      children: [
                        (0, s.jsx)("button", {
                          onClick: () => !0 !== g && _(!0),
                          "aria-label": c
                            ? "Play ".concat(c, " video")
                            : "Play video content",
                          className: "kWidgetCentered kWidgetPlayBtn",
                          id: "".concat(w, "_playBtn"),
                        }),
                        (0, s.jsx)("img", {
                          loading: "lazy",
                          alt: "",
                          className: "kWidgetCentered",
                          src: "https://cdnsecakmi.kaltura.com/p/"
                            .concat(m.sd, "/thumbnail/entry_id/")
                            .concat(d, "/width/", 650, "/type/1"),
                        }),
                      ],
                    }),
                  }),
                  !j.current &&
                    (0, s.jsxs)("div", {
                      className: "hbs-media-asset__kaltura-text",
                      ref: f,
                      children: [
                        (0, s.jsx)("span", {
                          className: "hbs-media-asset__kaltura-text-prompt",
                          "aria-hidden": "true",
                          children: "Play",
                        }),
                        " ",
                        l &&
                          (0, s.jsxs)("span", {
                            className: "hbs-media-asset__kaltura-duration",
                            children: [
                              (0, s.jsx)("span", {
                                className: "hbs-global-visually-hidden",
                                children: "Video duration:",
                              }),
                              l,
                            ],
                          }),
                      ],
                    }),
                ],
              }),
              k &&
                (0, s.jsx)("div", { id: N, className: "hbs-threeplay-embed" }),
              n &&
                (0, s.jsx)("div", {
                  className: "hbs-global-visually-hidden",
                  children: n,
                }),
              !(null == t ? void 0 : t.caption) &&
                a &&
                (0, s.jsx)("figcaption", {
                  children: (0, s.jsx)("span", {
                    className: "hbs-media-asset__caption-text",
                    children: (0, s.jsx)("div", { children: a }),
                  }),
                }),
            ],
          })
        );
      }
      let b = (0, i.forwardRef)((e, t) => {
        let { kaltura: a, className: n, aspectRatio: l, hide: d } = e,
          [c, o] = (0, i.useState)(!1),
          u = "https://cdnsecakmi.kaltura.com/p/"
            .concat(m.sd, "/thumbnail/entry_id/")
            .concat(a.entryId, "/width/2000/type/1/quality/100"),
          p = l
            ? {
                aspectRatio: l,
                objectFit: "cover",
                objectPosition: "center center",
              }
            : {},
          v = a.title
            ? "Play ".concat(a.title, " video")
            : "Play video content";
        return (0, s.jsxs)(h.bL, {
          open: c,
          onOpenChange: o,
          children: [
            (0, s.jsxs)("div", {
              className: (0, r.A)("hbs-media-asset__modal-trigger-wrapper", n),
              children: [
                (null == d ? void 0 : d.focusables)
                  ? (0, s.jsxs)("div", {
                      className: "hbs-media-asset__modal-trigger",
                      children: [
                        (0, s.jsx)("img", {
                          src: u,
                          alt: "",
                          loading: "lazy",
                          style: p,
                        }),
                        (0, s.jsx)("span", {
                          className: "hbs-global-visually-hidden",
                          children: v,
                        }),
                      ],
                    })
                  : (0, s.jsxs)(h.l9, {
                      ref: t,
                      className: "hbs-media-asset__modal-trigger",
                      children: [
                        (0, s.jsx)("img", {
                          src: u,
                          alt: "",
                          loading: "lazy",
                          style: p,
                        }),
                        (0, s.jsx)("span", {
                          className: "hbs-global-visually-hidden",
                          children: v,
                        }),
                      ],
                    }),
                (0, s.jsxs)("div", {
                  className: "hbs-media-asset__kaltura-text",
                  children: [
                    (0, s.jsx)("span", {
                      className: "hbs-media-asset__kaltura-text-prompt",
                      "aria-hidden": "true",
                      children: "Play",
                    }),
                    " ",
                    a.duration &&
                      (0, s.jsxs)("span", {
                        className: "hbs-media-asset__kaltura-duration",
                        children: [
                          (0, s.jsx)("span", {
                            className: "hbs-global-visually-hidden",
                            children: "Video duration:",
                          }),
                          a.duration,
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(h.ZL, {
              children: (0, s.jsx)(h.hJ, {
                className: "hbs-media-asset__modal-overlay",
                children: (0, s.jsx)(h.UC, {
                  className: "hbs-media-asset__modal-content",
                  children: (0, s.jsxs)("div", {
                    className: "hbs-media-asset__modal-content-inner",
                    children: [
                      (0, s.jsx)(h.bm, {
                        className: "hbs-media-asset__modal-content-close",
                        "aria-label": "Close popup",
                        children: "✕",
                      }),
                      (0, s.jsx)(y, { ...a }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      });
      var f = a(83362),
        g = a(12530);
      let _ = (0, i.forwardRef)((e, t) => {
        let {
          className: a,
          hide: i,
          image: r,
          video: n,
          kaltura: l,
          embed: c,
          aspectRatio: o,
          wowzaEmbed: h,
        } = e;
        return r
          ? (0, s.jsx)(d, { aspectRatio: o, ...r, hide: i, className: a })
          : n
          ? (0, s.jsx)(u, { aspectRatio: o, ...n, hide: i, className: a })
          : c
          ? (0, s.jsx)(f.C, { ...c, className: a })
          : h
          ? (0, s.jsx)(g.U, { ...h })
          : l
          ? l.withModal
            ? (0, s.jsx)(b, {
                aspectRatio: o,
                ref: t,
                kaltura: l,
                hide: i,
                className: a,
              })
            : (0, s.jsx)(y, { ...l, className: a })
          : null;
      });
    },
    83362: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => r });
      var s = a(6029);
      a(13076);
      var i = a(50212);
      function r(e) {
        let {
            align: t = "center",
            type: a,
            src: r,
            aspectRatio: n = !0,
            width: l,
            height: d,
            title: c,
            className: o,
          } = e,
          u = !n && 56.25,
          h = "Podcast: ".concat(c);
        return (
          l && d && n && (u = (d / l) * 100),
          (0, s.jsx)("div", {
            className: (0, i.A)(
              t && "hbs-global-align-".concat(t),
              o,
              "hbs-embed-align-wrapper"
            ),
            children: (0, s.jsx)("div", {
              className: (0, i.A)(
                "hbs-embed-wrapper",
                n && "hbs-embed-wrapper--aspect-ratio"
              ),
              style: { paddingTop: "".concat(n ? u : "0", "%") },
              children: (0, s.jsx)("embed", {
                "data-chromatic": "ignore",
                className: "hbs-embed",
                type: a,
                src: r,
                width: n ? "100%" : l,
                height: n ? "100%" : d,
                title: c,
                "aria-label": h,
              }),
            }),
          })
        );
      }
    },
    84880: (e, t, a) => {
      "use strict";
      a.d(t, { KI: () => n, LO: () => s, P$: () => r, sd: () => i });
      let s = {
          MOBILE: 300,
          TABLET: 600,
          DESKTOP: 1024,
          DESKTOP_LG: 1200,
          DESKTOP_XL: 1340,
        },
        i = 1423662,
        r = 0x178eb4b,
        n = "https://cdnapisec.kaltura.com/p/"
          .concat(i, "/sp/")
          .concat(i, "00/embedIframeJs/uiconf_id/")
          .concat(r, "/partner_id/")
          .concat(i);
    },
    85765: (e, t, a) => {
      "use strict";
      function s(e, t) {
        if (!e) return;
        let {
          type: a,
          onload: s,
          allowDuplicates: i,
          dataTarget: r,
          defer: n,
          dataQpTargetId: l,
        } = t || {};
        if (!document.querySelector("script[src='".concat(e, "']")) || i) {
          let t = document.createElement("script");
          return (
            (t.src = e),
            a && (t.type = a),
            s && (t.onload = s),
            r && (t.dataset.target = r),
            l && t.setAttribute("data-qp-target-id", l),
            n && (t.defer = n),
            document.head.appendChild(t),
            t
          );
        }
        s && s();
      }
      a.d(t, { k: () => s }), a(55729);
    },
    87511: (e, t, a) => {
      "use strict";
      function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return "";
        if (
          (e.startsWith("//") && (e = "https:" + e),
          !e.startsWith("http") ||
            e.includes(".chromatic.") ||
            e.includes("hbs-design-system.netlify.app") ||
            e.includes("designsystem.hbs.edu"))
        )
          return e;
        let a = encodeURIComponent(e),
          s = "f_" + (t.format || "webp"),
          i = "c_fill";
        t.crop && (i = "c_".concat(t.crop));
        let r = "q_auto";
        if (t.quality) {
          let e = Number(t.quality);
          r = isNaN(e) ? t.quality.toString() : "q_".concat(e);
        }
        let n = [r];
        return (
          (t.width || t.height || t.ratio) && n.push(i),
          "Left" === t.gravity && (t.gravity = "west"),
          "Top" === t.gravity && (t.gravity = "north"),
          "Right" === t.gravity && (t.gravity = "east"),
          "Bottom" === t.gravity && (t.gravity = "south"),
          "Center" === t.gravity && (t.gravity = "center"),
          "Auto" === t.gravity && (t.gravity = "auto"),
          t.width && n.push("w_".concat(t.width)),
          t.height && n.push("h_".concat(t.height)),
          t.rotate && n.push("a_".concat(t.rotate)),
          t.ratio && n.push("ar_".concat(t.ratio)),
          t.gravity && n.push("g_".concat(t.gravity)),
          t.opacity && n.push("o_".concat(t.opacity)),
          t.zoom && n.push("z_".concat(t.zoom)),
          "https://cloudinary.hbs.edu/hbsit/image/fetch/"
            .concat(n.join(","), "/")
            .concat(s, "/")
            .concat(a)
        );
      }
      a.d(t, { L: () => s });
    },
  },
]);
//# sourceMappingURL=5287-67fd6f9c1db0206c.js.map
