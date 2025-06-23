"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [63],
  {
    16697: (e, t, n) => {
      n.d(t, { i: () => l });
      var r,
        o = n(55729),
        i = n(35896),
        u =
          (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] ||
          i.N;
      function l({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [i, l, a] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = o.useState(e),
              i = o.useRef(n),
              l = o.useRef(t);
            return (
              u(() => {
                l.current = t;
              }, [t]),
              o.useEffect(() => {
                i.current !== n && (l.current?.(n), (i.current = n));
              }, [n, i]),
              [n, r, l]
            );
          })({ defaultProp: t, onChange: n }),
          s = void 0 !== e,
          c = s ? e : i;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== s) {
              let t = s ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${
                  e ? "controlled" : "uncontrolled"
                } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
              );
            }
            t.current = s;
          }, [s, r]);
        }
        return [
          c,
          o.useCallback(
            (t) => {
              if (s) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && a.current?.(n);
              } else l(t);
            },
            [s, e, l, a]
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    19639: (e, t, n) => {
      n.d(t, { hO: () => a, sG: () => l });
      var r = n(55729),
        o = n(56760),
        i = n(97628),
        u = n(6029),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, i.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let { asChild: o, ...i } = e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, u.jsx)(o ? n : t, { ...i, ref: r })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {});
      function a(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    25269: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    35896: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(55729),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    40041: (e, t, n) => {
      n.d(t, { s: () => u, t: () => i });
      var r = n(55729);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function i(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = o(e, t);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : o(e[t], null);
              }
            };
        };
      }
      function u(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    67913: (e, t, n) => {
      n.d(t, { B: () => a });
      var r,
        o = n(55729),
        i = n(35896),
        u =
          (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        l = 0;
      function a(e) {
        let [t, n] = o.useState(u());
        return (
          (0, i.N)(() => {
            e || n((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    78749: (e, t, n) => {
      n.d(t, { C: () => u });
      var r = n(55729),
        o = n(40041),
        i = n(35896),
        u = (e) => {
          let { present: t, children: n } = e,
            u = (function (e) {
              var t, n;
              let [o, u] = r.useState(),
                a = r.useRef(null),
                s = r.useRef(e),
                c = r.useRef("none"),
                [f, d] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => n[e][t] ?? e, t));
              return (
                r.useEffect(() => {
                  let e = l(a.current);
                  c.current = "mounted" === f ? e : "none";
                }, [f]),
                (0, i.N)(() => {
                  let t = a.current,
                    n = s.current;
                  if (n !== e) {
                    let r = c.current,
                      o = l(t);
                    e
                      ? d("MOUNT")
                      : "none" === o || t?.display === "none"
                      ? d("UNMOUNT")
                      : n && r !== o
                      ? d("ANIMATION_OUT")
                      : d("UNMOUNT"),
                      (s.current = e);
                  }
                }, [e, d]),
                (0, i.N)(() => {
                  if (o) {
                    let e;
                    let t = o.ownerDocument.defaultView ?? window,
                      n = (n) => {
                        let r = l(a.current).includes(n.animationName);
                        if (
                          n.target === o &&
                          r &&
                          (d("ANIMATION_END"), !s.current)
                        ) {
                          let n = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (e = t.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = n);
                            }));
                        }
                      },
                      r = (e) => {
                        e.target === o && (c.current = l(a.current));
                      };
                    return (
                      o.addEventListener("animationstart", r),
                      o.addEventListener("animationcancel", n),
                      o.addEventListener("animationend", n),
                      () => {
                        t.clearTimeout(e),
                          o.removeEventListener("animationstart", r),
                          o.removeEventListener("animationcancel", n),
                          o.removeEventListener("animationend", n);
                      }
                    );
                  }
                  d("ANIMATION_END");
                }, [o, d]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: r.useCallback((e) => {
                    (a.current = e ? getComputedStyle(e) : null), u(e);
                  }, []),
                }
              );
            })(t),
            a =
              "function" == typeof n
                ? n({ present: u.isPresent })
                : r.Children.only(n),
            s = (0, o.s)(
              u.ref,
              (function (e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n
                  ? e.ref
                  : (n =
                      (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                      "isReactWarning" in t &&
                      t.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(a)
            );
          return "function" == typeof n || u.isPresent
            ? r.cloneElement(a, { ref: s })
            : null;
        };
      function l(e) {
        return e?.animationName || "none";
      }
      u.displayName = "Presence";
    },
    97628: (e, t, n) => {
      n.d(t, { TL: () => u });
      var r = n(55729),
        o = n(40041),
        i = n(6029);
      function u(e) {
        let t = (function (e) {
            let t = r.forwardRef((e, t) => {
              let { children: n, ...i } = e;
              if (r.isValidElement(n)) {
                var u;
                let e, l;
                let a =
                    ((u = n),
                    (l =
                      (e = Object.getOwnPropertyDescriptor(
                        u.props,
                        "ref"
                      )?.get) &&
                      "isReactWarning" in e &&
                      e.isReactWarning)
                      ? u.ref
                      : (l =
                          (e = Object.getOwnPropertyDescriptor(
                            u,
                            "ref"
                          )?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning)
                      ? u.props.ref
                      : u.props.ref || u.ref),
                  s = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let o = e[r],
                        i = t[r];
                      /^on[A-Z]/.test(r)
                        ? o && i
                          ? (n[r] = (...e) => {
                              let t = i(...e);
                              return o(...e), t;
                            })
                          : o && (n[r] = o)
                        : "style" === r
                        ? (n[r] = { ...o, ...i })
                        : "className" === r &&
                          (n[r] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...n };
                  })(i, n.props);
                return (
                  n.type !== r.Fragment && (s.ref = t ? (0, o.t)(t, a) : a),
                  r.cloneElement(n, s)
                );
              }
              return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            return (t.displayName = `${e}.SlotClone`), t;
          })(e),
          n = r.forwardRef((e, n) => {
            let { children: o, ...u } = e,
              l = r.Children.toArray(o),
              s = l.find(a);
            if (s) {
              let e = s.props.children,
                o = l.map((t) =>
                  t !== s
                    ? t
                    : r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, i.jsx)(t, {
                ...u,
                ref: n,
                children: r.isValidElement(e)
                  ? r.cloneElement(e, void 0, o)
                  : null,
              });
            }
            return (0, i.jsx)(t, { ...u, ref: n, children: o });
          });
        return (n.displayName = `${e}.Slot`), n;
      }
      var l = Symbol("radix.slottable");
      function a(e) {
        return (
          r.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === l
        );
      }
    },
    99829: (e, t, n) => {
      n.d(t, { A: () => u, q: () => i });
      var r = n(55729),
        o = n(6029);
      function i(e, t) {
        let n = r.createContext(t),
          i = (e) => {
            let { children: t, ...i } = e,
              u = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, { value: u, children: t });
          };
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function u(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let u = r.createContext(i),
                l = n.length;
              n = [...n, i];
              let a = (t) => {
                let { scope: n, children: i, ...a } = t,
                  s = n?.[e]?.[l] || u,
                  c = r.useMemo(() => a, Object.values(a));
                return (0, o.jsx)(s.Provider, { value: c, children: i });
              };
              return (
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, o) {
                    let a = o?.[e]?.[l] || u,
                      s = r.useContext(a);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
  },
]);
//# sourceMappingURL=63-60d1d1a7aa39997c.js.map
