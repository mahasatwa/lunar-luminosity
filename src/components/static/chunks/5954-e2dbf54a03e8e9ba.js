"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5954],
  {
    1713: (e, t, n) => {
      n.d(t, { A: () => q });
      var r,
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var i =
          ("function" == typeof SuppressedError && SuppressedError, n(55729)),
        c = "right-scroll-bar-position",
        u = "width-before-scroll-bar";
      function l(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var s = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        d = new WeakMap();
      function f(e) {
        return e;
      }
      var v = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            a,
            i =
              ((t = null),
              void 0 === n && (n = f),
              (r = []),
              (a = !1),
              {
                read: function () {
                  if (a)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, a);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (a = !0; r.length; ) {
                    var t = r;
                    (r = []), t.forEach(e);
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  a = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var o = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(o);
                    };
                  i(),
                    (r = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), r;
                      },
                    });
                },
              });
          return (i.options = o({ async: !0, ssr: !1 }, e)), i;
        })(),
        p = function () {},
        m = i.forwardRef(function (e, t) {
          var n,
            r,
            c,
            u,
            f = i.useRef(null),
            m = i.useState({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: p,
            }),
            h = m[0],
            y = m[1],
            g = e.forwardProps,
            E = e.children,
            b = e.className,
            w = e.removeScrollBar,
            C = e.enabled,
            S = e.shards,
            L = e.sideCar,
            k = e.noRelative,
            R = e.noIsolation,
            A = e.inert,
            N = e.allowPinchZoom,
            T = e.as,
            P = e.gapMode,
            O = a(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            x =
              ((n = [f, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return l(t, e);
                });
              }),
              ((c = (0, i.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return c.value;
                    },
                    set current(value) {
                      var e = c.value;
                      e !== value && ((c.value = value), c.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (u = c.facade),
              s(
                function () {
                  var e = d.get(u);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = u.current;
                    t.forEach(function (e) {
                      r.has(e) || l(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || l(e, o);
                      });
                  }
                  d.set(u, n);
                },
                [n]
              ),
              u),
            M = o(o({}, O), h);
          return i.createElement(
            i.Fragment,
            null,
            C &&
              i.createElement(L, {
                sideCar: v,
                removeScrollBar: w,
                shards: S,
                noRelative: k,
                noIsolation: R,
                inert: A,
                setCallbacks: y,
                allowPinchZoom: !!N,
                lockRef: f,
                gapMode: P,
              }),
            g
              ? i.cloneElement(i.Children.only(E), o(o({}, M), { ref: x }))
              : i.createElement(
                  void 0 === T ? "div" : T,
                  o({}, M, { className: b, ref: x }),
                  E
                )
          );
        });
      (m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (m.classNames = { fullWidth: u, zeroRight: c });
      var h = function (e) {
        var t = e.sideCar,
          n = a(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return i.createElement(r, o({}, n));
      };
      h.isSideCarExport = !0;
      var y = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = o)
                  : a.appendChild(document.createTextNode(o)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        g = function () {
          var e = y();
          return function (t, n) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        E = function () {
          var e = g();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        b = { left: 0, top: 0, right: 0, gap: 0 },
        w = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        C = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [w(n), w(r), w(o)];
        },
        S = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return b;
          var t = C(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        L = E(),
        k = "data-scroll-locked",
        R = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(k, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(c, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(k, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        A = function () {
          var e = parseInt(document.body.getAttribute(k) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        N = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(k, (A() + 1).toString()),
              function () {
                var e = A() - 1;
                e <= 0
                  ? document.body.removeAttribute(k)
                  : document.body.setAttribute(k, e.toString());
              }
            );
          }, []);
        },
        T = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          N();
          var a = i.useMemo(
            function () {
              return S(o);
            },
            [o]
          );
          return i.createElement(L, {
            styles: R(a, !t, o, n ? "" : "!important"),
          });
        },
        P = !1;
      if ("undefined" != typeof window)
        try {
          var O = Object.defineProperty({}, "passive", {
            get: function () {
              return (P = !0), !0;
            },
          });
          window.addEventListener("test", O, O),
            window.removeEventListener("test", O, O);
        } catch (e) {
          P = !1;
        }
      var x = !!P && { passive: !1 },
        M = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        D = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              W(e, r))
            ) {
              var o = F(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        W = function (e, t) {
          return "v" === e ? M(t, "overflowY") : M(t, "overflowX");
        },
        F = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        I = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            c = i * r,
            u = n.target,
            l = t.contains(u),
            s = !1,
            d = c > 0,
            f = 0,
            v = 0;
          do {
            if (!u) break;
            var p = F(e, u),
              m = p[0],
              h = p[1] - p[2] - i * m;
            (m || h) && W(e, u) && ((f += h), (v += m));
            var y = u.parentNode;
            u = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
          } while (
            (!l && u !== document.body) ||
            (l && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && c > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(v)) || (!o && -c > v)) && (s = !0),
            s
          );
        },
        j = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        B = function (e) {
          return [e.deltaX, e.deltaY];
        },
        _ = function (e) {
          return e && "current" in e ? e.current : e;
        },
        K = 0,
        X = [];
      let Y =
        (v.useMedium(function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(K++)[0],
            a = i.useState(E)[0],
            c = i.useRef(e);
          i.useEffect(
            function () {
              c.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, a = t.length; o < a; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(_), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = i.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !c.current.allowPinchZoom;
              var o,
                a = j(e),
                i = n.current,
                u = "deltaX" in e ? e.deltaX : i[0] - a[0],
                l = "deltaY" in e ? e.deltaY : i[1] - a[1],
                s = e.target,
                d = Math.abs(u) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = D(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = D(d, s))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || l) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var v = r.current || o;
              return I(v, t, e, "h" === v ? u : l, !0);
            }, []),
            l = i.useCallback(function (e) {
              if (X.length && X[X.length - 1] === a) {
                var n = "deltaY" in e ? B(e) : j(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (c.current.shards || [])
                    .map(_)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = i.useCallback(function (e, n, r, o) {
              var a = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            d = i.useCallback(function (e) {
              (n.current = j(e)), (r.current = void 0);
            }, []),
            f = i.useCallback(function (t) {
              s(t.type, B(t), t.target, u(t, e.lockRef.current));
            }, []),
            v = i.useCallback(function (t) {
              s(t.type, j(t), t.target, u(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              X.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: v,
              }),
              document.addEventListener("wheel", l, x),
              document.addEventListener("touchmove", l, x),
              document.addEventListener("touchstart", d, x),
              function () {
                (X = X.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", l, x),
                  document.removeEventListener("touchmove", l, x),
                  document.removeEventListener("touchstart", d, x);
              }
            );
          }, []);
          var p = e.removeScrollBar,
            m = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            m
              ? i.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            p
              ? i.createElement(T, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
                })
              : null
          );
        }),
        h);
      var z = i.forwardRef(function (e, t) {
        return i.createElement(m, o({}, e, { ref: t, sideCar: Y }));
      });
      z.classNames = m.classNames;
      let q = z;
    },
    9613: (e, t, n) => {
      n.d(t, { c: () => o });
      var r = n(55729);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    20184: (e, t, n) => {
      n.d(t, { Eq: () => s });
      var r = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        o = new WeakMap(),
        a = new WeakMap(),
        i = {},
        c = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        l = function (e, t, n, r) {
          var l = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var s = i[n],
            d = [],
            f = new Set(),
            v = new Set(l),
            p = function (e) {
              !(!e || f.has(e)) && (f.add(e), p(e.parentNode));
            };
          l.forEach(p);
          var m = function (e) {
            !(!e || v.has(e)) &&
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      i = null !== t && "false" !== t,
                      c = (o.get(e) || 0) + 1,
                      u = (s.get(e) || 0) + 1;
                    o.set(e, c),
                      s.set(e, u),
                      d.push(e),
                      1 === c && i && a.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      i || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            m(t),
            f.clear(),
            c++,
            function () {
              d.forEach(function (e) {
                var t = o.get(e) - 1,
                  i = s.get(e) - 1;
                o.set(e, t),
                  s.set(e, i),
                  t || (a.has(e) || e.removeAttribute(r), a.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --c ||
                  ((o = new WeakMap()),
                  (o = new WeakMap()),
                  (a = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var o = Array.from(Array.isArray(e) ? e : [e]),
            a = t || r(e);
          return a
            ? (o.push.apply(
                o,
                Array.from(a.querySelectorAll("[aria-live], script"))
              ),
              l(o, a, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    27555: (e, t, n) => {
      n.d(t, { qW: () => f });
      var r,
        o = n(55729),
        a = n(25269),
        i = n(19639),
        c = n(40041),
        u = n(9613),
        l = n(6029),
        s = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: f,
              onPointerDownOutside: m,
              onFocusOutside: h,
              onInteractOutside: y,
              onDismiss: g,
              ...E
            } = e,
            b = o.useContext(d),
            [w, C] = o.useState(null),
            S = w?.ownerDocument ?? globalThis?.document,
            [, L] = o.useState({}),
            k = (0, c.s)(t, (e) => C(e)),
            R = Array.from(b.layers),
            [A] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1),
            N = R.indexOf(A),
            T = w ? R.indexOf(w) : -1,
            P = b.layersWithOutsidePointerEventsDisabled.size > 0,
            O = T >= N,
            x = (function (e, t = globalThis?.document) {
              let n = (0, u.c)(e),
                r = o.useRef(!1),
                a = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = function () {
                            p("dismissableLayer.pointerDownOutside", n, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", a.current),
                            (a.current = r),
                            t.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : r();
                      } else t.removeEventListener("click", a.current);
                      r.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", a.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...b.branches].some((e) => e.contains(t));
              !O || n || (m?.(e), y?.(e), e.defaultPrevented || g?.());
            }, S),
            M = (function (e, t = globalThis?.document) {
              let n = (0, u.c)(e),
                r = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      p(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...b.branches].some((e) => e.contains(t)) ||
                (h?.(e), y?.(e), e.defaultPrevented || g?.());
            }, S);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, u.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              T === b.layers.size - 1 &&
                (f?.(e), !e.defaultPrevented && g && (e.preventDefault(), g()));
            }, S),
            o.useEffect(() => {
              if (w)
                return (
                  n &&
                    (0 === b.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = S.body.style.pointerEvents),
                      (S.body.style.pointerEvents = "none")),
                    b.layersWithOutsidePointerEventsDisabled.add(w)),
                  b.layers.add(w),
                  v(),
                  () => {
                    n &&
                      1 === b.layersWithOutsidePointerEventsDisabled.size &&
                      (S.body.style.pointerEvents = r);
                  }
                );
            }, [w, S, n, b]),
            o.useEffect(
              () => () => {
                w &&
                  (b.layers.delete(w),
                  b.layersWithOutsidePointerEventsDisabled.delete(w),
                  v());
              },
              [w, b]
            ),
            o.useEffect(() => {
              let e = () => L({});
              return (
                document.addEventListener(s, e),
                () => document.removeEventListener(s, e)
              );
            }, []),
            (0, l.jsx)(i.sG.div, {
              ...E,
              ref: k,
              style: {
                pointerEvents: P ? (O ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.m)(e.onFocusCapture, M.onFocusCapture),
              onBlurCapture: (0, a.m)(e.onBlurCapture, M.onBlurCapture),
              onPointerDownCapture: (0, a.m)(
                e.onPointerDownCapture,
                x.onPointerDownCapture
              ),
            })
          );
        });
      function v() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function p(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, i.hO)(o, a) : o.dispatchEvent(a);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(d),
            r = o.useRef(null),
            a = (0, c.s)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, l.jsx)(i.sG.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
    },
    41679: (e, t, n) => {
      n.d(t, { n: () => d });
      var r = n(55729),
        o = n(40041),
        a = n(19639),
        i = n(9613),
        c = n(6029),
        u = "focusScope.autoFocusOnMount",
        l = "focusScope.autoFocusOnUnmount",
        s = { bubbles: !1, cancelable: !0 },
        d = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: d = !1,
              onMountAutoFocus: h,
              onUnmountAutoFocus: y,
              ...g
            } = e,
            [E, b] = r.useState(null),
            w = (0, i.c)(h),
            C = (0, i.c)(y),
            S = r.useRef(null),
            L = (0, o.s)(t, (e) => b(e)),
            k = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          r.useEffect(() => {
            if (d) {
              let e = function (e) {
                  if (k.paused || !E) return;
                  let t = e.target;
                  E.contains(t)
                    ? (S.current = t)
                    : p(S.current, { select: !0 });
                },
                t = function (e) {
                  if (k.paused || !E) return;
                  let t = e.relatedTarget;
                  null === t || E.contains(t) || p(S.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && p(E);
              });
              return (
                E && n.observe(E, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [d, E, k.paused]),
            r.useEffect(() => {
              if (E) {
                m.add(k);
                let e = document.activeElement;
                if (!E.contains(e)) {
                  let t = new CustomEvent(u, s);
                  E.addEventListener(u, w),
                    E.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (p(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        f(E).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && p(E));
                }
                return () => {
                  E.removeEventListener(u, w),
                    setTimeout(() => {
                      let t = new CustomEvent(l, s);
                      E.addEventListener(l, C),
                        E.dispatchEvent(t),
                        t.defaultPrevented ||
                          p(e ?? document.body, { select: !0 }),
                        E.removeEventListener(l, C),
                        m.remove(k);
                    }, 0);
                };
              }
            }, [E, w, C, k]);
          let R = r.useCallback(
            (e) => {
              if ((!n && !d) || k.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, a] = (function (e) {
                    let t = f(e);
                    return [v(t, e), v(t.reverse(), e)];
                  })(t);
                o && a
                  ? e.shiftKey || r !== a
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && p(a, { select: !0 }))
                    : (e.preventDefault(), n && p(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, d, k.paused]
          );
          return (0, c.jsx)(a.sG.div, {
            tabIndex: -1,
            ...g,
            ref: L,
            onKeyDown: R,
          });
        });
      function f(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function v(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function p(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      d.displayName = "FocusScope";
      var m = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && n?.pause(), (e = h(e, t)).unshift(t);
          },
          remove(t) {
            (e = h(e, t)), e[0]?.resume();
          },
        };
      })();
      function h(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    50212: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = function () {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var a = t.length;
                  for (n = 0; n < a; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
    61486: (e, t, n) => {
      n.d(t, { Z: () => u });
      var r = n(55729),
        o = n(56760),
        a = n(19639),
        i = n(35896),
        c = n(6029),
        u = r.forwardRef((e, t) => {
          let { container: n, ...u } = e,
            [l, s] = r.useState(!1);
          (0, i.N)(() => s(!0), []);
          let d = n || (l && globalThis?.document?.body);
          return d
            ? o.createPortal((0, c.jsx)(a.sG.div, { ...u, ref: t }), d)
            : null;
        });
      u.displayName = "Portal";
    },
    74249: (e, t, n) => {
      n.d(t, { Oh: () => a });
      var r = n(55729),
        o = 0;
      function a() {
        r.useEffect(() => {
          let e = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement("afterbegin", e[0] ?? i()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? i()),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
  },
]);
//# sourceMappingURL=5954-e2dbf54a03e8e9ba.js.map
