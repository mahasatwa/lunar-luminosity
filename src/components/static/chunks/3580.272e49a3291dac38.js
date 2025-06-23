(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3580],
  {
    346: (e, t, n) => {
      "use strict";
      n.d(t, {
        UC: () => ew,
        q7: () => eh,
        N_: () => eg,
        B8: () => eb,
        bL: () => ev,
        Pb: () => em,
        l9: () => ey,
        LM: () => eE,
      });
      var o = n(55729),
        r = n(56760),
        i = n(99829),
        a = n(25269),
        u = n(19639),
        s = n(16697),
        l = n(40041),
        c = n(71979),
        d = n(78749),
        f = n(67913),
        p = n(70140),
        v = n(27555),
        m = n(38719),
        b = n(35896),
        h = n(9613),
        y = n(6029),
        g = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        }),
        w = o.forwardRef((e, t) =>
          (0, y.jsx)(u.sG.span, { ...e, ref: t, style: { ...g, ...e.style } })
        );
      w.displayName = "VisuallyHidden";
      var E = "NavigationMenu",
        [T, O, R] = (0, p.N)(E),
        [D, x, C] = (0, p.N)(E),
        [k, P] = (0, i.A)(E, [R, C]),
        [N, F] = k(E),
        [S, j] = k(E),
        I = o.forwardRef((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: r,
              onValueChange: i,
              defaultValue: a,
              delayDuration: d = 200,
              skipDelayDuration: f = 300,
              orientation: p = "horizontal",
              dir: v,
              ...m
            } = e,
            [b, h] = o.useState(null),
            g = (0, l.s)(t, (e) => h(e)),
            w = (0, c.jH)(v),
            T = o.useRef(0),
            O = o.useRef(0),
            R = o.useRef(0),
            [D, x] = o.useState(!0),
            [C, k] = (0, s.i)({
              prop: r,
              onChange: (e) => {
                let t = f > 0;
                "" !== e
                  ? (window.clearTimeout(R.current), t && x(!1))
                  : (window.clearTimeout(R.current),
                    (R.current = window.setTimeout(() => x(!0), f))),
                  i?.(e);
              },
              defaultProp: a ?? "",
              caller: E,
            }),
            P = o.useCallback(() => {
              window.clearTimeout(O.current),
                (O.current = window.setTimeout(() => k(""), 150));
            }, [k]),
            N = o.useCallback(
              (e) => {
                window.clearTimeout(O.current), k(e);
              },
              [k]
            ),
            F = o.useCallback(
              (e) => {
                C === e
                  ? window.clearTimeout(O.current)
                  : (T.current = window.setTimeout(() => {
                      window.clearTimeout(O.current), k(e);
                    }, d));
              },
              [C, k, d]
            );
          return (
            o.useEffect(
              () => () => {
                window.clearTimeout(T.current),
                  window.clearTimeout(O.current),
                  window.clearTimeout(R.current);
              },
              []
            ),
            (0, y.jsx)(M, {
              scope: n,
              isRootMenu: !0,
              value: C,
              dir: w,
              orientation: p,
              rootNavigationMenu: b,
              onTriggerEnter: (e) => {
                window.clearTimeout(T.current), D ? F(e) : N(e);
              },
              onTriggerLeave: () => {
                window.clearTimeout(T.current), P();
              },
              onContentEnter: () => window.clearTimeout(O.current),
              onContentLeave: P,
              onItemSelect: (e) => {
                k((t) => (t === e ? "" : e));
              },
              onItemDismiss: () => k(""),
              children: (0, y.jsx)(u.sG.nav, {
                "aria-label": "Main",
                "data-orientation": p,
                dir: w,
                ...m,
                ref: g,
              }),
            })
          );
        });
      I.displayName = E;
      var L = "NavigationMenuSub",
        A = o.forwardRef((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: o,
              onValueChange: r,
              defaultValue: i,
              orientation: a = "horizontal",
              ...l
            } = e,
            c = F(L, n),
            [d, f] = (0, s.i)({
              prop: o,
              onChange: r,
              defaultProp: i ?? "",
              caller: L,
            });
          return (0, y.jsx)(M, {
            scope: n,
            isRootMenu: !1,
            value: d,
            dir: c.dir,
            orientation: a,
            rootNavigationMenu: c.rootNavigationMenu,
            onTriggerEnter: (e) => f(e),
            onItemSelect: (e) => f(e),
            onItemDismiss: () => f(""),
            children: (0, y.jsx)(u.sG.div, {
              "data-orientation": a,
              ...l,
              ref: t,
            }),
          });
        });
      A.displayName = L;
      var M = (e) => {
          let {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              dir: i,
              orientation: a,
              children: u,
              value: s,
              onItemSelect: l,
              onItemDismiss: c,
              onTriggerEnter: d,
              onTriggerLeave: p,
              onContentEnter: v,
              onContentLeave: b,
            } = e,
            [g, w] = o.useState(null),
            [E, O] = o.useState(new Map()),
            [R, D] = o.useState(null);
          return (0, y.jsx)(N, {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: r,
            value: s,
            previousValue: (0, m.Z)(s),
            baseId: (0, f.B)(),
            dir: i,
            orientation: a,
            viewport: g,
            onViewportChange: w,
            indicatorTrack: R,
            onIndicatorTrackChange: D,
            onTriggerEnter: (0, h.c)(d),
            onTriggerLeave: (0, h.c)(p),
            onContentEnter: (0, h.c)(v),
            onContentLeave: (0, h.c)(b),
            onItemSelect: (0, h.c)(l),
            onItemDismiss: (0, h.c)(c),
            onViewportContentChange: o.useCallback((e, t) => {
              O((n) => (n.set(e, t), new Map(n)));
            }, []),
            onViewportContentRemove: o.useCallback((e) => {
              O((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
            }, []),
            children: (0, y.jsx)(T.Provider, {
              scope: t,
              children: (0, y.jsx)(S, { scope: t, items: E, children: u }),
            }),
          });
        },
        _ = "NavigationMenuList",
        G = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...o } = e,
            r = F(_, n),
            i = (0, y.jsx)(u.sG.ul, {
              "data-orientation": r.orientation,
              ...o,
              ref: t,
            });
          return (0, y.jsx)(u.sG.div, {
            style: { position: "relative" },
            ref: r.onIndicatorTrackChange,
            children: (0, y.jsx)(T.Slot, {
              scope: n,
              children: r.isRootMenu
                ? (0, y.jsx)(er, { asChild: !0, children: i })
                : i,
            }),
          });
        });
      G.displayName = _;
      var K = "NavigationMenuItem",
        [B, U] = k(K),
        H = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, value: r, ...i } = e,
            a = (0, f.B)(),
            s = o.useRef(null),
            l = o.useRef(null),
            c = o.useRef(null),
            d = o.useRef(() => {}),
            p = o.useRef(!1),
            v = o.useCallback((e = "start") => {
              if (s.current) {
                d.current();
                let t = eu(s.current);
                t.length && es("start" === e ? t : t.reverse());
              }
            }, []),
            m = o.useCallback(() => {
              if (s.current) {
                let e = eu(s.current);
                e.length &&
                  (d.current = (function (e) {
                    return (
                      e.forEach((e) => {
                        (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                          e.setAttribute("tabindex", "-1");
                      }),
                      () => {
                        e.forEach((e) => {
                          let t = e.dataset.tabindex;
                          e.setAttribute("tabindex", t);
                        });
                      }
                    );
                  })(e));
              }
            }, []);
          return (0, y.jsx)(B, {
            scope: n,
            value: r || a || "LEGACY_REACT_AUTO_VALUE",
            triggerRef: l,
            contentRef: s,
            focusProxyRef: c,
            wasEscapeCloseRef: p,
            onEntryKeyDown: v,
            onFocusProxyEnter: v,
            onRootContentClose: m,
            onContentFocusOutside: m,
            children: (0, y.jsx)(u.sG.li, { ...i, ref: t }),
          });
        });
      H.displayName = K;
      var V = "NavigationMenuTrigger",
        W = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, disabled: r, ...i } = e,
            s = F(V, e.__scopeNavigationMenu),
            c = U(V, e.__scopeNavigationMenu),
            d = o.useRef(null),
            f = (0, l.s)(d, c.triggerRef, t),
            p = ed(s.baseId, c.value),
            v = ef(s.baseId, c.value),
            m = o.useRef(!1),
            b = o.useRef(!1),
            h = c.value === s.value;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)(T.ItemSlot, {
                scope: n,
                value: c.value,
                children: (0, y.jsx)(ea, {
                  asChild: !0,
                  children: (0, y.jsx)(u.sG.button, {
                    id: p,
                    disabled: r,
                    "data-disabled": r ? "" : void 0,
                    "data-state": ec(h),
                    "aria-expanded": h,
                    "aria-controls": v,
                    ...i,
                    ref: f,
                    onPointerEnter: (0, a.m)(e.onPointerEnter, () => {
                      (b.current = !1), (c.wasEscapeCloseRef.current = !1);
                    }),
                    onPointerMove: (0, a.m)(
                      e.onPointerMove,
                      ep(() => {
                        r ||
                          b.current ||
                          c.wasEscapeCloseRef.current ||
                          m.current ||
                          (s.onTriggerEnter(c.value), (m.current = !0));
                      })
                    ),
                    onPointerLeave: (0, a.m)(
                      e.onPointerLeave,
                      ep(() => {
                        r || (s.onTriggerLeave(), (m.current = !1));
                      })
                    ),
                    onClick: (0, a.m)(e.onClick, () => {
                      s.onItemSelect(c.value), (b.current = h);
                    }),
                    onKeyDown: (0, a.m)(e.onKeyDown, (e) => {
                      let t = {
                        horizontal: "ArrowDown",
                        vertical: "rtl" === s.dir ? "ArrowLeft" : "ArrowRight",
                      }[s.orientation];
                      h &&
                        e.key === t &&
                        (c.onEntryKeyDown(), e.preventDefault());
                    }),
                  }),
                }),
              }),
              h &&
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(w, {
                      "aria-hidden": !0,
                      tabIndex: 0,
                      ref: c.focusProxyRef,
                      onFocus: (e) => {
                        let t = c.contentRef.current,
                          n = e.relatedTarget,
                          o = n === d.current,
                          r = t?.contains(n);
                        (o || !r) && c.onFocusProxyEnter(o ? "start" : "end");
                      },
                    }),
                    s.viewport && (0, y.jsx)("span", { "aria-owns": v }),
                  ],
                }),
            ],
          });
        });
      W.displayName = V;
      var q = "navigationMenu.linkSelect",
        $ = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, active: o, onSelect: r, ...i } = e;
          return (0, y.jsx)(ea, {
            asChild: !0,
            children: (0, y.jsx)(u.sG.a, {
              "data-active": o ? "" : void 0,
              "aria-current": o ? "page" : void 0,
              ...i,
              ref: t,
              onClick: (0, a.m)(
                e.onClick,
                (e) => {
                  let t = e.target,
                    n = new CustomEvent(q, { bubbles: !0, cancelable: !0 });
                  if (
                    (t.addEventListener(q, (e) => r?.(e), { once: !0 }),
                    (0, u.hO)(t, n),
                    !n.defaultPrevented && !e.metaKey)
                  ) {
                    let e = new CustomEvent(Q, { bubbles: !0, cancelable: !0 });
                    (0, u.hO)(t, e);
                  }
                },
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      $.displayName = "NavigationMenuLink";
      var z = "NavigationMenuIndicator";
      o.forwardRef((e, t) => {
        let { forceMount: n, ...o } = e,
          i = F(z, e.__scopeNavigationMenu),
          a = !!i.value;
        return i.indicatorTrack
          ? r.createPortal(
              (0, y.jsx)(d.C, {
                present: n || a,
                children: (0, y.jsx)(Y, { ...o, ref: t }),
              }),
              i.indicatorTrack
            )
          : null;
      }).displayName = z;
      var Y = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...r } = e,
            i = F(z, n),
            a = O(n),
            [s, l] = o.useState(null),
            [c, d] = o.useState(null),
            f = "horizontal" === i.orientation,
            p = !!i.value;
          o.useEffect(() => {
            let e = a(),
              t = e.find((e) => e.value === i.value)?.ref.current;
            t && l(t);
          }, [a, i.value]);
          let v = () => {
            s &&
              d({
                size: f ? s.offsetWidth : s.offsetHeight,
                offset: f ? s.offsetLeft : s.offsetTop,
              });
          };
          return (
            el(s, v),
            el(i.indicatorTrack, v),
            c
              ? (0, y.jsx)(u.sG.div, {
                  "aria-hidden": !0,
                  "data-state": p ? "visible" : "hidden",
                  "data-orientation": i.orientation,
                  ...r,
                  ref: t,
                  style: {
                    position: "absolute",
                    ...(f
                      ? {
                          left: 0,
                          width: c.size + "px",
                          transform: `translateX(${c.offset}px)`,
                        }
                      : {
                          top: 0,
                          height: c.size + "px",
                          transform: `translateY(${c.offset}px)`,
                        }),
                    ...r.style,
                  },
                })
              : null
          );
        }),
        Z = "NavigationMenuContent",
        X = o.forwardRef((e, t) => {
          let { forceMount: n, ...o } = e,
            r = F(Z, e.__scopeNavigationMenu),
            i = U(Z, e.__scopeNavigationMenu),
            u = (0, l.s)(i.contentRef, t),
            s = i.value === r.value,
            c = {
              value: i.value,
              triggerRef: i.triggerRef,
              focusProxyRef: i.focusProxyRef,
              wasEscapeCloseRef: i.wasEscapeCloseRef,
              onContentFocusOutside: i.onContentFocusOutside,
              onRootContentClose: i.onRootContentClose,
              ...o,
            };
          return r.viewport
            ? (0, y.jsx)(J, { forceMount: n, ...c, ref: u })
            : (0, y.jsx)(d.C, {
                present: n || s,
                children: (0, y.jsx)(ee, {
                  "data-state": ec(s),
                  ...c,
                  ref: u,
                  onPointerEnter: (0, a.m)(e.onPointerEnter, r.onContentEnter),
                  onPointerLeave: (0, a.m)(
                    e.onPointerLeave,
                    ep(r.onContentLeave)
                  ),
                  style: {
                    pointerEvents: !s && r.isRootMenu ? "none" : void 0,
                    ...c.style,
                  },
                }),
              });
        });
      X.displayName = Z;
      var J = o.forwardRef((e, t) => {
          let { onViewportContentChange: n, onViewportContentRemove: o } = F(
            Z,
            e.__scopeNavigationMenu
          );
          return (
            (0, b.N)(() => {
              n(e.value, { ref: t, ...e });
            }, [e, t, n]),
            (0, b.N)(() => () => o(e.value), [e.value, o]),
            null
          );
        }),
        Q = "navigationMenu.rootContentDismiss",
        ee = o.forwardRef((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: r,
              triggerRef: i,
              focusProxyRef: u,
              wasEscapeCloseRef: s,
              onRootContentClose: c,
              onContentFocusOutside: d,
              ...f
            } = e,
            p = F(Z, n),
            m = o.useRef(null),
            b = (0, l.s)(m, t),
            h = ed(p.baseId, r),
            g = ef(p.baseId, r),
            w = O(n),
            E = o.useRef(null),
            { onItemDismiss: T } = p;
          o.useEffect(() => {
            let e = m.current;
            if (p.isRootMenu && e) {
              let t = () => {
                T(),
                  c(),
                  e.contains(document.activeElement) && i.current?.focus();
              };
              return (
                e.addEventListener(Q, t), () => e.removeEventListener(Q, t)
              );
            }
          }, [p.isRootMenu, e.value, i, T, c]);
          let R = o.useMemo(() => {
            let e = w().map((e) => e.value);
            "rtl" === p.dir && e.reverse();
            let t = e.indexOf(p.value),
              n = e.indexOf(p.previousValue),
              o = r === p.value,
              i = n === e.indexOf(r);
            if (!o && !i) return E.current;
            let a = (() => {
              if (t !== n) {
                if (o && -1 !== n) return t > n ? "from-end" : "from-start";
                if (i && -1 !== t) return t > n ? "to-start" : "to-end";
              }
              return null;
            })();
            return (E.current = a), a;
          }, [p.previousValue, p.value, p.dir, w, r]);
          return (0, y.jsx)(er, {
            asChild: !0,
            children: (0, y.jsx)(v.qW, {
              id: g,
              "aria-labelledby": h,
              "data-motion": R,
              "data-orientation": p.orientation,
              ...f,
              ref: b,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                let e = new Event(Q, { bubbles: !0, cancelable: !0 });
                m.current?.dispatchEvent(e);
              },
              onFocusOutside: (0, a.m)(e.onFocusOutside, (e) => {
                d();
                let t = e.target;
                p.rootNavigationMenu?.contains(t) && e.preventDefault();
              }),
              onPointerDownOutside: (0, a.m)(e.onPointerDownOutside, (e) => {
                let t = e.target,
                  n = w().some((e) => e.ref.current?.contains(t)),
                  o = p.isRootMenu && p.viewport?.contains(t);
                (n || o || !p.isRootMenu) && e.preventDefault();
              }),
              onKeyDown: (0, a.m)(e.onKeyDown, (e) => {
                let t = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !t) {
                  let t = eu(e.currentTarget),
                    n = document.activeElement,
                    o = t.findIndex((e) => e === n);
                  es(
                    e.shiftKey
                      ? t.slice(0, o).reverse()
                      : t.slice(o + 1, t.length)
                  )
                    ? e.preventDefault()
                    : u.current?.focus();
                }
              }),
              onEscapeKeyDown: (0, a.m)(e.onEscapeKeyDown, (e) => {
                s.current = !0;
              }),
            }),
          });
        }),
        et = "NavigationMenuViewport",
        en = o.forwardRef((e, t) => {
          let { forceMount: n, ...o } = e,
            r = !!F(et, e.__scopeNavigationMenu).value;
          return (0, y.jsx)(d.C, {
            present: n || r,
            children: (0, y.jsx)(eo, { ...o, ref: t }),
          });
        });
      en.displayName = et;
      var eo = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, children: r, ...i } = e,
            s = F(et, n),
            c = (0, l.s)(t, s.onViewportChange),
            f = j(Z, e.__scopeNavigationMenu),
            [p, v] = o.useState(null),
            [m, b] = o.useState(null),
            h = p ? p?.width + "px" : void 0,
            g = p ? p?.height + "px" : void 0,
            w = !!s.value,
            E = w ? s.value : s.previousValue;
          return (
            el(m, () => {
              m && v({ width: m.offsetWidth, height: m.offsetHeight });
            }),
            (0, y.jsx)(u.sG.div, {
              "data-state": ec(w),
              "data-orientation": s.orientation,
              ...i,
              ref: c,
              style: {
                pointerEvents: !w && s.isRootMenu ? "none" : void 0,
                "--radix-navigation-menu-viewport-width": h,
                "--radix-navigation-menu-viewport-height": g,
                ...i.style,
              },
              onPointerEnter: (0, a.m)(e.onPointerEnter, s.onContentEnter),
              onPointerLeave: (0, a.m)(e.onPointerLeave, ep(s.onContentLeave)),
              children: Array.from(f.items).map(
                ([e, { ref: t, forceMount: n, ...o }]) => {
                  let r = E === e;
                  return (0, y.jsx)(
                    d.C,
                    {
                      present: n || r,
                      children: (0, y.jsx)(ee, {
                        ...o,
                        ref: (0, l.t)(t, (e) => {
                          r && e && b(e);
                        }),
                      }),
                    },
                    e
                  );
                }
              ),
            })
          );
        }),
        er = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...o } = e,
            r = F("FocusGroup", n);
          return (0, y.jsx)(D.Provider, {
            scope: n,
            children: (0, y.jsx)(D.Slot, {
              scope: n,
              children: (0, y.jsx)(u.sG.div, { dir: r.dir, ...o, ref: t }),
            }),
          });
        }),
        ei = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        ea = o.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...o } = e,
            r = x(n),
            i = F("FocusGroupItem", n);
          return (0, y.jsx)(D.ItemSlot, {
            scope: n,
            children: (0, y.jsx)(u.sG.button, {
              ...o,
              ref: t,
              onKeyDown: (0, a.m)(e.onKeyDown, (e) => {
                if (["Home", "End", ...ei].includes(e.key)) {
                  let t = r().map((e) => e.ref.current);
                  if (
                    ([
                      "rtl" === i.dir ? "ArrowRight" : "ArrowLeft",
                      "ArrowUp",
                      "End",
                    ].includes(e.key) && t.reverse(),
                    ei.includes(e.key))
                  ) {
                    let n = t.indexOf(e.currentTarget);
                    t = t.slice(n + 1);
                  }
                  setTimeout(() => es(t)), e.preventDefault();
                }
              }),
            }),
          });
        });
      function eu(e) {
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
      function es(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      function el(e, t) {
        let n = (0, h.c)(t);
        (0, b.N)(() => {
          let t = 0;
          if (e) {
            let o = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
            });
            return (
              o.observe(e),
              () => {
                window.cancelAnimationFrame(t), o.unobserve(e);
              }
            );
          }
        }, [e, n]);
      }
      function ec(e) {
        return e ? "open" : "closed";
      }
      function ed(e, t) {
        return `${e}-trigger-${t}`;
      }
      function ef(e, t) {
        return `${e}-content-${t}`;
      }
      function ep(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      var ev = I,
        em = A,
        eb = G,
        eh = H,
        ey = W,
        eg = $,
        ew = X,
        eE = en;
    },
    4140: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    7807: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          focusable: () => P,
          getTabIndex: () => p,
          isFocusable: () => S,
          isTabbable: () => N,
          tabbable: () => k,
        });
      var o = [
          "input:not([inert])",
          "select:not([inert])",
          "textarea:not([inert])",
          "a[href]:not([inert])",
          "button:not([inert])",
          "[tabindex]:not(slot):not([inert])",
          "audio[controls]:not([inert])",
          "video[controls]:not([inert])",
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          "details>summary:first-of-type:not([inert])",
          "details:not([inert])",
        ],
        r = o.join(","),
        i = "undefined" == typeof Element,
        a = i
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        u =
          !i && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e
                  ? void 0
                  : null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        s = function e(t, n) {
          void 0 === n && (n = !0);
          var o,
            r =
              null == t
                ? void 0
                : null === (o = t.getAttribute) || void 0 === o
                ? void 0
                : o.call(t, "inert");
          return "" === r || "true" === r || (n && t && e(t.parentNode));
        },
        l = function (e) {
          var t,
            n =
              null == e
                ? void 0
                : null === (t = e.getAttribute) || void 0 === t
                ? void 0
                : t.call(e, "contenteditable");
          return "" === n || "true" === n;
        },
        c = function (e, t, n) {
          if (s(e)) return [];
          var o = Array.prototype.slice.apply(e.querySelectorAll(r));
          return t && a.call(e, r) && o.unshift(e), (o = o.filter(n));
        },
        d = function e(t, n, o) {
          for (var i = [], u = Array.from(t); u.length; ) {
            var l = u.shift();
            if (!s(l, !1)) {
              if ("SLOT" === l.tagName) {
                var c = l.assignedElements(),
                  d = e(c.length ? c : l.children, !0, o);
                o.flatten
                  ? i.push.apply(i, d)
                  : i.push({ scopeParent: l, candidates: d });
              } else {
                a.call(l, r) &&
                  o.filter(l) &&
                  (n || !t.includes(l)) &&
                  i.push(l);
                var f =
                    l.shadowRoot ||
                    ("function" == typeof o.getShadowRoot &&
                      o.getShadowRoot(l)),
                  p =
                    !s(f, !1) && (!o.shadowRootFilter || o.shadowRootFilter(l));
                if (f && p) {
                  var v = e(!0 === f ? l.children : f.children, !0, o);
                  o.flatten
                    ? i.push.apply(i, v)
                    : i.push({ scopeParent: l, candidates: v });
                } else u.unshift.apply(u, l.children);
              }
            }
          }
          return i;
        },
        f = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        p = function (e) {
          if (!e) throw Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || l(e)) &&
            !f(e)
            ? 0
            : e.tabIndex;
        },
        v = function (e, t) {
          var n = p(e);
          return n < 0 && t && !f(e) ? 0 : n;
        },
        m = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        b = function (e) {
          return "INPUT" === e.tagName;
        },
        h = function (e, t) {
          for (var n = 0; n < e.length; n++)
            if (e[n].checked && e[n].form === t) return e[n];
        },
        y = function (e) {
          if (!e.name) return !0;
          var t,
            n = e.form || u(e),
            o = function (e) {
              return n.querySelectorAll(
                'input[type="radio"][name="' + e + '"]'
              );
            };
          if (
            "undefined" != typeof window &&
            void 0 !== window.CSS &&
            "function" == typeof window.CSS.escape
          )
            t = o(window.CSS.escape(e.name));
          else
            try {
              t = o(e.name);
            } catch (e) {
              return (
                console.error(
                  "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                  e.message
                ),
                !1
              );
            }
          var r = h(t, e.form);
          return !r || r === e;
        },
        g = function (e) {
          return b(e) && "radio" === e.type && !y(e);
        },
        w = function (e) {
          var t,
            n,
            o,
            r,
            i,
            a,
            s,
            l = e && u(e),
            c = null === (t = l) || void 0 === t ? void 0 : t.host,
            d = !1;
          if (l && l !== e)
            for (
              d = !!(
                (null !== (n = c) &&
                  void 0 !== n &&
                  null !== (o = n.ownerDocument) &&
                  void 0 !== o &&
                  o.contains(c)) ||
                (null != e &&
                  null !== (r = e.ownerDocument) &&
                  void 0 !== r &&
                  r.contains(e))
              );
              !d && c;

            )
              d = !!(
                null !==
                  (a = c =
                    null === (i = l = u(c)) || void 0 === i
                      ? void 0
                      : i.host) &&
                void 0 !== a &&
                null !== (s = a.ownerDocument) &&
                void 0 !== s &&
                s.contains(c)
              );
          return d;
        },
        E = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            o = t.height;
          return 0 === n && 0 === o;
        },
        T = function (e, t) {
          var n = t.displayCheck,
            o = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var r = a.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (a.call(r, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return E(e);
          } else {
            if ("function" == typeof o) {
              for (var i = e; e; ) {
                var s = e.parentElement,
                  l = u(e);
                if (s && !s.shadowRoot && !0 === o(s)) return E(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : s || l === e.ownerDocument
                  ? s
                  : l.host;
              }
              e = i;
            }
            if (w(e)) return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
          }
          return !1;
        },
        O = function (e) {
          if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
              if ("FIELDSET" === t.tagName && t.disabled) {
                for (var n = 0; n < t.children.length; n++) {
                  var o = t.children.item(n);
                  if ("LEGEND" === o.tagName)
                    return (
                      !!a.call(t, "fieldset[disabled] *") || !o.contains(e)
                    );
                }
                return !0;
              }
              t = t.parentElement;
            }
          return !1;
        },
        R = function (e, t) {
          return !(
            t.disabled ||
            s(t) ||
            (b(t) && "hidden" === t.type) ||
            T(t, e) ||
            ("DETAILS" === t.tagName &&
              Array.prototype.slice.apply(t.children).some(function (e) {
                return "SUMMARY" === e.tagName;
              })) ||
            O(t)
          );
        },
        D = function (e, t) {
          return !(g(t) || 0 > p(t)) && !!R(e, t);
        },
        x = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!isNaN(t) || !!(t >= 0);
        },
        C = function e(t) {
          var n = [],
            o = [];
          return (
            t.forEach(function (t, r) {
              var i = !!t.scopeParent,
                a = i ? t.scopeParent : t,
                u = v(a, i),
                s = i ? e(t.candidates) : a;
              0 === u
                ? i
                  ? n.push.apply(n, s)
                  : n.push(a)
                : o.push({
                    documentOrder: r,
                    tabIndex: u,
                    item: t,
                    isScope: i,
                    content: s,
                  });
            }),
            o
              .sort(m)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        k = function (e, t) {
          var n;
          return C(
            (t = t || {}).getShadowRoot
              ? d([e], t.includeContainer, {
                  filter: D.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: x,
                })
              : c(e, t.includeContainer, D.bind(null, t))
          );
        },
        P = function (e, t) {
          var n;
          return (t = t || {}).getShadowRoot
            ? d([e], t.includeContainer, {
                filter: R.bind(null, t),
                flatten: !0,
                getShadowRoot: t.getShadowRoot,
              })
            : c(e, t.includeContainer, R.bind(null, t));
        },
        N = function (e, t) {
          if (((t = t || {}), !e)) throw Error("No node provided");
          return !1 !== a.call(e, r) && D(t, e);
        },
        F = o.concat("iframe").join(","),
        S = function (e, t) {
          if (((t = t || {}), !e)) throw Error("No node provided");
          return !1 !== a.call(e, F) && R(t, e);
        };
    },
    9536: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { createFocusTrap: () => m });
      var o = n(7807);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                var o, r;
                (o = t),
                  (r = n[t]),
                  (o = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o) return o;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(o)) in e
                    ? Object.defineProperty(e, o, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[o] = r);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var u = {
          activateTrap: function (e, t) {
            if (e.length > 0) {
              var n = e[e.length - 1];
              n !== t && n._setPausedState(!0);
            }
            var o = e.indexOf(t);
            -1 === o || e.splice(o, 1), e.push(t);
          },
          deactivateTrap: function (e, t) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1),
              e.length > 0 &&
                !e[e.length - 1]._isManuallyPaused() &&
                e[e.length - 1]._setPausedState(!1);
          },
        },
        s = function (e) {
          return (
            (null == e ? void 0 : e.key) === "Tab" ||
            (null == e ? void 0 : e.keyCode) === 9
          );
        },
        l = function (e) {
          return s(e) && !e.shiftKey;
        },
        c = function (e) {
          return s(e) && e.shiftKey;
        },
        d = function (e) {
          return setTimeout(e, 0);
        },
        f = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          return "function" == typeof e ? e.apply(void 0, n) : e;
        },
        p = function (e) {
          return e.target.shadowRoot && "function" == typeof e.composedPath
            ? e.composedPath()[0]
            : e.target;
        },
        v = [],
        m = function (e, t) {
          var n,
            i = (null == t ? void 0 : t.document) || document,
            m = (null == t ? void 0 : t.trapStack) || v,
            b = a(
              {
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
                isKeyForward: l,
                isKeyBackward: c,
              },
              t
            ),
            h = {
              containers: [],
              containerGroups: [],
              tabbableGroups: [],
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              manuallyPaused: !1,
              delayInitialFocusTimer: void 0,
              recentNavEvent: void 0,
            },
            y = function (e, t, n) {
              return e && void 0 !== e[t] ? e[t] : b[n || t];
            },
            g = function (e, t) {
              var n =
                "function" == typeof (null == t ? void 0 : t.composedPath)
                  ? t.composedPath()
                  : void 0;
              return h.containerGroups.findIndex(function (t) {
                var o = t.container,
                  r = t.tabbableNodes;
                return (
                  o.contains(e) ||
                  (null == n ? void 0 : n.includes(o)) ||
                  r.find(function (t) {
                    return t === e;
                  })
                );
              });
            },
            w = function (e) {
              var t,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                o = n.hasFallback,
                a = n.params,
                u = b[e];
              if (
                ("function" == typeof u &&
                  (u = u.apply(
                    void 0,
                    (function (e) {
                      if (Array.isArray(e)) return r(e);
                    })((t = void 0 === a ? [] : a)) ||
                      (function (e) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != e[Symbol.iterator]) ||
                          null != e["@@iterator"]
                        )
                          return Array.from(e);
                      })(t) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return r(e, void 0);
                          var n = {}.toString.call(e).slice(8, -1);
                          return (
                            "Object" === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            "Map" === n || "Set" === n
                              ? Array.from(e)
                              : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? r(e, t)
                              : void 0
                          );
                        }
                      })(t) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                  )),
                !0 === u && (u = void 0),
                !u)
              ) {
                if (void 0 === u || !1 === u) return u;
                throw Error(
                  "`".concat(
                    e,
                    "` was specified but was not a node, or did not return a node"
                  )
                );
              }
              var s = u;
              if ("string" == typeof u) {
                try {
                  s = i.querySelector(u);
                } catch (t) {
                  throw Error(
                    "`"
                      .concat(e, '` appears to be an invalid selector; error="')
                      .concat(t.message, '"')
                  );
                }
                if (!s && !(void 0 !== o && o))
                  throw Error(
                    "`".concat(e, "` as selector refers to no known node")
                  );
              }
              return s;
            },
            E = function () {
              var e = w("initialFocus", { hasFallback: !0 });
              if (!1 === e) return !1;
              if (
                void 0 === e ||
                (e && !(0, o.isFocusable)(e, b.tabbableOptions))
              ) {
                if (g(i.activeElement) >= 0) e = i.activeElement;
                else {
                  var t = h.tabbableGroups[0];
                  e = (t && t.firstTabbableNode) || w("fallbackFocus");
                }
              } else null === e && (e = w("fallbackFocus"));
              if (!e)
                throw Error(
                  "Your focus-trap needs to have at least one focusable element"
                );
              return e;
            },
            T = function () {
              if (
                ((h.containerGroups = h.containers.map(function (e) {
                  var t = (0, o.tabbable)(e, b.tabbableOptions),
                    n = (0, o.focusable)(e, b.tabbableOptions),
                    r = t.length > 0 ? t[0] : void 0,
                    i = t.length > 0 ? t[t.length - 1] : void 0,
                    a = n.find(function (e) {
                      return (0, o.isTabbable)(e);
                    }),
                    u = n
                      .slice()
                      .reverse()
                      .find(function (e) {
                        return (0, o.isTabbable)(e);
                      }),
                    s = !!t.find(function (e) {
                      return (0, o.getTabIndex)(e) > 0;
                    });
                  return {
                    container: e,
                    tabbableNodes: t,
                    focusableNodes: n,
                    posTabIndexesFound: s,
                    firstTabbableNode: r,
                    lastTabbableNode: i,
                    firstDomTabbableNode: a,
                    lastDomTabbableNode: u,
                    nextTabbableNode: function (e) {
                      var r =
                          !(arguments.length > 1) ||
                          void 0 === arguments[1] ||
                          arguments[1],
                        i = t.indexOf(e);
                      return i < 0
                        ? r
                          ? n.slice(n.indexOf(e) + 1).find(function (e) {
                              return (0, o.isTabbable)(e);
                            })
                          : n
                              .slice(0, n.indexOf(e))
                              .reverse()
                              .find(function (e) {
                                return (0, o.isTabbable)(e);
                              })
                        : t[i + (r ? 1 : -1)];
                    },
                  };
                })),
                (h.tabbableGroups = h.containerGroups.filter(function (e) {
                  return e.tabbableNodes.length > 0;
                })),
                h.tabbableGroups.length <= 0 && !w("fallbackFocus"))
              )
                throw Error(
                  "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
                );
              if (
                h.containerGroups.find(function (e) {
                  return e.posTabIndexesFound;
                }) &&
                h.containerGroups.length > 1
              )
                throw Error(
                  "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
                );
            },
            O = function (e) {
              var t = e.activeElement;
              return t
                ? t.shadowRoot && null !== t.shadowRoot.activeElement
                  ? O(t.shadowRoot)
                  : t
                : void 0;
            },
            R = function (e) {
              if (!1 !== e && e !== O(document)) {
                if (!e || !e.focus) {
                  R(E());
                  return;
                }
                e.focus({ preventScroll: !!b.preventScroll }),
                  (h.mostRecentlyFocusedNode = e),
                  e.tagName &&
                    "input" === e.tagName.toLowerCase() &&
                    "function" == typeof e.select &&
                    e.select();
              }
            },
            D = function (e) {
              var t = w("setReturnFocus", { params: [e] });
              return t || (!1 !== t && e);
            },
            x = function (e) {
              var t = e.target,
                n = e.event,
                r = e.isBackward,
                i = void 0 !== r && r;
              (t = t || p(n)), T();
              var a = null;
              if (h.tabbableGroups.length > 0) {
                var u = g(t, n),
                  l = u >= 0 ? h.containerGroups[u] : void 0;
                if (u < 0)
                  a = i
                    ? h.tabbableGroups[h.tabbableGroups.length - 1]
                        .lastTabbableNode
                    : h.tabbableGroups[0].firstTabbableNode;
                else if (i) {
                  var c = h.tabbableGroups.findIndex(function (e) {
                    var n = e.firstTabbableNode;
                    return t === n;
                  });
                  if (
                    (c < 0 &&
                      (l.container === t ||
                        ((0, o.isFocusable)(t, b.tabbableOptions) &&
                          !(0, o.isTabbable)(t, b.tabbableOptions) &&
                          !l.nextTabbableNode(t, !1))) &&
                      (c = u),
                    c >= 0)
                  ) {
                    var d = 0 === c ? h.tabbableGroups.length - 1 : c - 1,
                      f = h.tabbableGroups[d];
                    a =
                      (0, o.getTabIndex)(t) >= 0
                        ? f.lastTabbableNode
                        : f.lastDomTabbableNode;
                  } else s(n) || (a = l.nextTabbableNode(t, !1));
                } else {
                  var v = h.tabbableGroups.findIndex(function (e) {
                    var n = e.lastTabbableNode;
                    return t === n;
                  });
                  if (
                    (v < 0 &&
                      (l.container === t ||
                        ((0, o.isFocusable)(t, b.tabbableOptions) &&
                          !(0, o.isTabbable)(t, b.tabbableOptions) &&
                          !l.nextTabbableNode(t))) &&
                      (v = u),
                    v >= 0)
                  ) {
                    var m = v === h.tabbableGroups.length - 1 ? 0 : v + 1,
                      y = h.tabbableGroups[m];
                    a =
                      (0, o.getTabIndex)(t) >= 0
                        ? y.firstTabbableNode
                        : y.firstDomTabbableNode;
                  } else s(n) || (a = l.nextTabbableNode(t));
                }
              } else a = w("fallbackFocus");
              return a;
            },
            C = function (e) {
              if (!(g(p(e), e) >= 0)) {
                if (f(b.clickOutsideDeactivates, e)) {
                  n.deactivate({ returnFocus: b.returnFocusOnDeactivate });
                  return;
                }
                !f(b.allowOutsideClick, e) && e.preventDefault();
              }
            },
            k = function (e) {
              var t = p(e),
                n = g(t, e) >= 0;
              if (n || t instanceof Document)
                n && (h.mostRecentlyFocusedNode = t);
              else {
                e.stopImmediatePropagation();
                var r,
                  i = !0;
                if (h.mostRecentlyFocusedNode) {
                  if ((0, o.getTabIndex)(h.mostRecentlyFocusedNode) > 0) {
                    var a = g(h.mostRecentlyFocusedNode),
                      u = h.containerGroups[a].tabbableNodes;
                    if (u.length > 0) {
                      var s = u.findIndex(function (e) {
                        return e === h.mostRecentlyFocusedNode;
                      });
                      s >= 0 &&
                        (b.isKeyForward(h.recentNavEvent)
                          ? s + 1 < u.length && ((r = u[s + 1]), (i = !1))
                          : s - 1 >= 0 && ((r = u[s - 1]), (i = !1)));
                    }
                  } else
                    h.containerGroups.some(function (e) {
                      return e.tabbableNodes.some(function (e) {
                        return (0, o.getTabIndex)(e) > 0;
                      });
                    }) || (i = !1);
                } else i = !1;
                i &&
                  (r = x({
                    target: h.mostRecentlyFocusedNode,
                    isBackward: b.isKeyBackward(h.recentNavEvent),
                  })),
                  r ? R(r) : R(h.mostRecentlyFocusedNode || E());
              }
              h.recentNavEvent = void 0;
            },
            P = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              h.recentNavEvent = e;
              var n = x({ event: e, isBackward: t });
              n && (s(e) && e.preventDefault(), R(n));
            },
            N = function (e) {
              (b.isKeyForward(e) || b.isKeyBackward(e)) &&
                P(e, b.isKeyBackward(e));
            },
            F = function (e) {
              ((null == e ? void 0 : e.key) === "Escape" ||
                (null == e ? void 0 : e.key) === "Esc" ||
                (null == e ? void 0 : e.keyCode) === 27) &&
                !1 !== f(b.escapeDeactivates, e) &&
                (e.preventDefault(), n.deactivate());
            },
            S = function (e) {
              !(
                g(p(e), e) >= 0 ||
                f(b.clickOutsideDeactivates, e) ||
                f(b.allowOutsideClick, e)
              ) && (e.preventDefault(), e.stopImmediatePropagation());
            },
            j = function () {
              if (h.active)
                return (
                  u.activateTrap(m, n),
                  (h.delayInitialFocusTimer = b.delayInitialFocus
                    ? d(function () {
                        R(E());
                      })
                    : R(E())),
                  i.addEventListener("focusin", k, !0),
                  i.addEventListener("mousedown", C, {
                    capture: !0,
                    passive: !1,
                  }),
                  i.addEventListener("touchstart", C, {
                    capture: !0,
                    passive: !1,
                  }),
                  i.addEventListener("click", S, { capture: !0, passive: !1 }),
                  i.addEventListener("keydown", N, {
                    capture: !0,
                    passive: !1,
                  }),
                  i.addEventListener("keydown", F),
                  n
                );
            },
            I = function () {
              if (h.active)
                return (
                  i.removeEventListener("focusin", k, !0),
                  i.removeEventListener("mousedown", C, !0),
                  i.removeEventListener("touchstart", C, !0),
                  i.removeEventListener("click", S, !0),
                  i.removeEventListener("keydown", N, !0),
                  i.removeEventListener("keydown", F),
                  n
                );
            },
            L =
              "undefined" != typeof window && "MutationObserver" in window
                ? new MutationObserver(function (e) {
                    e.some(function (e) {
                      return Array.from(e.removedNodes).some(function (e) {
                        return e === h.mostRecentlyFocusedNode;
                      });
                    }) && R(E());
                  })
                : void 0,
            A = function () {
              L &&
                (L.disconnect(),
                h.active &&
                  !h.paused &&
                  h.containers.map(function (e) {
                    L.observe(e, { subtree: !0, childList: !0 });
                  }));
            };
          return (
            Object.defineProperties(
              (n = {
                get active() {
                  return h.active;
                },
                get paused() {
                  return h.paused;
                },
                activate: function (e) {
                  if (h.active) return this;
                  var t = y(e, "onActivate"),
                    n = y(e, "onPostActivate"),
                    o = y(e, "checkCanFocusTrap");
                  o || T(),
                    (h.active = !0),
                    (h.paused = !1),
                    (h.nodeFocusedBeforeActivation = i.activeElement),
                    null == t || t();
                  var r = function () {
                    o && T(), j(), A(), null == n || n();
                  };
                  return o ? o(h.containers.concat()).then(r, r) : r(), this;
                },
                deactivate: function (e) {
                  if (!h.active) return this;
                  var t = a(
                    {
                      onDeactivate: b.onDeactivate,
                      onPostDeactivate: b.onPostDeactivate,
                      checkCanReturnFocus: b.checkCanReturnFocus,
                    },
                    e
                  );
                  clearTimeout(h.delayInitialFocusTimer),
                    (h.delayInitialFocusTimer = void 0),
                    I(),
                    (h.active = !1),
                    (h.paused = !1),
                    A(),
                    u.deactivateTrap(m, n);
                  var o = y(t, "onDeactivate"),
                    r = y(t, "onPostDeactivate"),
                    i = y(t, "checkCanReturnFocus"),
                    s = y(t, "returnFocus", "returnFocusOnDeactivate");
                  null == o || o();
                  var l = function () {
                    d(function () {
                      s && R(D(h.nodeFocusedBeforeActivation)),
                        null == r || r();
                    });
                  };
                  return (
                    s && i
                      ? i(D(h.nodeFocusedBeforeActivation)).then(l, l)
                      : l(),
                    this
                  );
                },
                pause: function (e) {
                  return h.active
                    ? ((h.manuallyPaused = !0), this._setPausedState(!0, e))
                    : this;
                },
                unpause: function (e) {
                  return h.active
                    ? ((h.manuallyPaused = !1), m[m.length - 1] !== this)
                      ? this
                      : this._setPausedState(!1, e)
                    : this;
                },
                updateContainerElements: function (e) {
                  return (
                    (h.containers = []
                      .concat(e)
                      .filter(Boolean)
                      .map(function (e) {
                        return "string" == typeof e ? i.querySelector(e) : e;
                      })),
                    h.active && T(),
                    A(),
                    this
                  );
                },
              }),
              {
                _isManuallyPaused: {
                  value: function () {
                    return h.manuallyPaused;
                  },
                },
                _setPausedState: {
                  value: function (e, t) {
                    if (h.paused === e) return this;
                    if (((h.paused = e), e)) {
                      var n = y(t, "onPause"),
                        o = y(t, "onPostPause");
                      null == n || n(), I(), A(), null == o || o();
                    } else {
                      var r = y(t, "onUnpause"),
                        i = y(t, "onPostUnpause");
                      null == r || r(), T(), j(), A(), null == i || i();
                    }
                    return this;
                  },
                },
              }
            ),
            n.updateContainerElements(e),
            n
          );
        };
    },
    27780: (e, t, n) => {
      "use strict";
      n.d(t, {
        UC: () => en,
        VY: () => er,
        ZL: () => ee,
        bL: () => J,
        bm: () => ei,
        hE: () => eo,
        hJ: () => et,
        l9: () => Q,
      });
      var o = n(55729),
        r = n(25269),
        i = n(40041),
        a = n(99829),
        u = n(67913),
        s = n(16697),
        l = n(27555),
        c = n(41679),
        d = n(61486),
        f = n(78749),
        p = n(19639),
        v = n(74249),
        m = n(1713),
        b = n(20184),
        h = n(97628),
        y = n(6029),
        g = "Dialog",
        [w, E] = (0, a.A)(g),
        [T, O] = w(g),
        R = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: a,
              modal: l = !0,
            } = e,
            c = o.useRef(null),
            d = o.useRef(null),
            [f, p] = (0, s.i)({
              prop: r,
              defaultProp: i ?? !1,
              onChange: a,
              caller: g,
            });
          return (0, y.jsx)(T, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, u.B)(),
            titleId: (0, u.B)(),
            descriptionId: (0, u.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p((e) => !e), [p]),
            modal: l,
            children: n,
          });
        };
      R.displayName = g;
      var D = "DialogTrigger",
        x = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...o } = e,
            a = O(D, n),
            u = (0, i.s)(t, a.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": q(a.open),
            ...o,
            ref: u,
            onClick: (0, r.m)(e.onClick, a.onOpenToggle),
          });
        });
      x.displayName = D;
      var C = "DialogPortal",
        [k, P] = w(C, { forceMount: void 0 }),
        N = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: i,
            } = e,
            a = O(C, t);
          return (0, y.jsx)(k, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e) =>
              (0, y.jsx)(f.C, {
                present: n || a.open,
                children: (0, y.jsx)(d.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      N.displayName = C;
      var F = "DialogOverlay",
        S = o.forwardRef((e, t) => {
          let n = P(F, e.__scopeDialog),
            { forceMount: o = n.forceMount, ...r } = e,
            i = O(F, e.__scopeDialog);
          return i.modal
            ? (0, y.jsx)(f.C, {
                present: o || i.open,
                children: (0, y.jsx)(I, { ...r, ref: t }),
              })
            : null;
        });
      S.displayName = F;
      var j = (0, h.TL)("DialogOverlay.RemoveScroll"),
        I = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...o } = e,
            r = O(F, n);
          return (0, y.jsx)(m.A, {
            as: j,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": q(r.open),
              ...o,
              ref: t,
              style: { pointerEvents: "auto", ...o.style },
            }),
          });
        }),
        L = "DialogContent",
        A = o.forwardRef((e, t) => {
          let n = P(L, e.__scopeDialog),
            { forceMount: o = n.forceMount, ...r } = e,
            i = O(L, e.__scopeDialog);
          return (0, y.jsx)(f.C, {
            present: o || i.open,
            children: i.modal
              ? (0, y.jsx)(M, { ...r, ref: t })
              : (0, y.jsx)(_, { ...r, ref: t }),
          });
        });
      A.displayName = L;
      var M = o.forwardRef((e, t) => {
          let n = O(L, e.__scopeDialog),
            a = o.useRef(null),
            u = (0, i.s)(t, n.contentRef, a);
          return (
            o.useEffect(() => {
              let e = a.current;
              if (e) return (0, b.Eq)(e);
            }, []),
            (0, y.jsx)(G, {
              ...e,
              ref: u,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, r.m)(e.onCloseAutoFocus, (e) => {
                e.preventDefault(), n.triggerRef.current?.focus();
              }),
              onPointerDownOutside: (0, r.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, r.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        _ = o.forwardRef((e, t) => {
          let n = O(L, e.__scopeDialog),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, y.jsx)(G, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (r.current || n.triggerRef.current?.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let o = t.target;
              n.triggerRef.current?.contains(o) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        G = o.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: a,
              onCloseAutoFocus: u,
              ...s
            } = e,
            d = O(L, n),
            f = o.useRef(null),
            p = (0, i.s)(t, f);
          return (
            (0, v.Oh)(),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(c.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: u,
                  children: (0, y.jsx)(l.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": q(d.open),
                    ...s,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(Z, { titleId: d.titleId }),
                    (0, y.jsx)(X, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        K = "DialogTitle",
        B = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...o } = e,
            r = O(K, n);
          return (0, y.jsx)(p.sG.h2, { id: r.titleId, ...o, ref: t });
        });
      B.displayName = K;
      var U = "DialogDescription",
        H = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...o } = e,
            r = O(U, n);
          return (0, y.jsx)(p.sG.p, { id: r.descriptionId, ...o, ref: t });
        });
      H.displayName = U;
      var V = "DialogClose",
        W = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...o } = e,
            i = O(V, n);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function q(e) {
        return e ? "open" : "closed";
      }
      W.displayName = V;
      var $ = "DialogTitleWarning",
        [z, Y] = (0, a.q)($, {
          contentName: L,
          titleName: K,
          docsSlug: "dialog",
        }),
        Z = ({ titleId: e }) => {
          let t = Y($),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return (
            o.useEffect(() => {
              e && !document.getElementById(e) && console.error(n);
            }, [n, e]),
            null
          );
        },
        X = ({ contentRef: e, descriptionId: t }) => {
          let n = Y("DialogDescriptionWarning"),
            r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
          return (
            o.useEffect(() => {
              let n = e.current?.getAttribute("aria-describedby");
              t && n && !document.getElementById(t) && console.warn(r);
            }, [r, e, t]),
            null
          );
        },
        J = R,
        Q = x,
        ee = N,
        et = S,
        en = A,
        eo = B,
        er = H,
        ei = W;
    },
    38719: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var o = n(55729);
      function r(e) {
        let t = o.useRef({ value: e, previous: e });
        return o.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    50105: (e, t, n) => {
      "use strict";
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function i(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function a(e) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e) {
        var t = (function (e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== o(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      var s = n(55729),
        l = n(56121),
        c = n(9536).createFocusTrap,
        d = n(7807).isFocusable,
        f = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && r(e, t);
          })(c, e);
          var t,
            n,
            l =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = a(c);
                return (
                  (e = t
                    ? Reflect.construct(n, arguments, a(this).constructor)
                    : n.apply(this, arguments)),
                  (function (e, t) {
                    if (t && ("object" === o(t) || "function" == typeof t))
                      return t;
                    if (void 0 !== t)
                      throw TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return i(e);
                  })(this, e)
                );
              });
          function c(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, c),
              (t = i((r = l.call(this, e)))),
              (n = "getNodeForOption"),
              (o = function (e) {
                var t,
                  n,
                  o =
                    null !== (t = this.internalOptions[e]) && void 0 !== t
                      ? t
                      : this.originalOptions[e];
                if ("function" == typeof o) {
                  for (
                    var r = arguments.length,
                      i = Array(r > 1 ? r - 1 : 0),
                      a = 1;
                    a < r;
                    a++
                  )
                    i[a - 1] = arguments[a];
                  o = o.apply(void 0, i);
                }
                if ((!0 === o && (o = void 0), !o)) {
                  if (void 0 === o || !1 === o) return o;
                  throw Error(
                    "`".concat(
                      e,
                      "` was specified but was not a node, or did not return a node"
                    )
                  );
                }
                var u = o;
                if (
                  "string" == typeof o &&
                  !(u =
                    null === (n = this.getDocument()) || void 0 === n
                      ? void 0
                      : n.querySelector(o))
                )
                  throw Error(
                    "`".concat(e, "` as selector refers to no known node")
                  );
                return u;
              }),
              (n = u(n)) in t
                ? Object.defineProperty(t, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = o),
              (r.handleDeactivate = r.handleDeactivate.bind(i(r))),
              (r.handlePostDeactivate = r.handlePostDeactivate.bind(i(r))),
              (r.handleClickOutsideDeactivates =
                r.handleClickOutsideDeactivates.bind(i(r))),
              (r.internalOptions = {
                returnFocusOnDeactivate: !1,
                checkCanReturnFocus: null,
                onDeactivate: r.handleDeactivate,
                onPostDeactivate: r.handlePostDeactivate,
                clickOutsideDeactivates: r.handleClickOutsideDeactivates,
              }),
              (r.originalOptions = {
                returnFocusOnDeactivate: !0,
                onDeactivate: null,
                onPostDeactivate: null,
                checkCanReturnFocus: null,
                clickOutsideDeactivates: !1,
              });
            var t,
              n,
              o,
              r,
              a = e.focusTrapOptions;
            for (var s in a)
              if (Object.prototype.hasOwnProperty.call(a, s)) {
                if (
                  "returnFocusOnDeactivate" === s ||
                  "onDeactivate" === s ||
                  "onPostDeactivate" === s ||
                  "checkCanReturnFocus" === s ||
                  "clickOutsideDeactivates" === s
                ) {
                  r.originalOptions[s] = a[s];
                  continue;
                }
                r.internalOptions[s] = a[s];
              }
            return (
              (r.outsideClick = null),
              (r.focusTrapElements = e.containerElements || []),
              r.updatePreviousElement(),
              r
            );
          }
          return (
            (n = [
              {
                key: "getDocument",
                value: function () {
                  return (
                    this.props.focusTrapOptions.document ||
                    ("undefined" != typeof document ? document : void 0)
                  );
                },
              },
              {
                key: "getReturnFocusNode",
                value: function () {
                  var e = this.getNodeForOption(
                    "setReturnFocus",
                    this.previouslyFocusedElement
                  );
                  return e || (!1 !== e && this.previouslyFocusedElement);
                },
              },
              {
                key: "updatePreviousElement",
                value: function () {
                  var e = this.getDocument();
                  e && (this.previouslyFocusedElement = e.activeElement);
                },
              },
              {
                key: "deactivateTrap",
                value: function () {
                  this.focusTrap &&
                    this.focusTrap.active &&
                    this.focusTrap.deactivate({
                      returnFocus: !1,
                      checkCanReturnFocus: null,
                      onDeactivate: this.originalOptions.onDeactivate,
                    });
                },
              },
              {
                key: "handleClickOutsideDeactivates",
                value: function (e) {
                  var t =
                    "function" ==
                    typeof this.originalOptions.clickOutsideDeactivates
                      ? this.originalOptions.clickOutsideDeactivates.call(
                          null,
                          e
                        )
                      : this.originalOptions.clickOutsideDeactivates;
                  return (
                    t &&
                      (this.outsideClick = {
                        target: e.target,
                        allowDeactivation: t,
                      }),
                    t
                  );
                },
              },
              {
                key: "handleDeactivate",
                value: function () {
                  this.originalOptions.onDeactivate &&
                    this.originalOptions.onDeactivate.call(null),
                    this.deactivateTrap();
                },
              },
              {
                key: "handlePostDeactivate",
                value: function () {
                  var e = this,
                    t = function () {
                      var t = e.getReturnFocusNode(),
                        n = !!(
                          e.originalOptions.returnFocusOnDeactivate &&
                          null != t &&
                          t.focus &&
                          (!e.outsideClick ||
                            (e.outsideClick.allowDeactivation &&
                              !d(
                                e.outsideClick.target,
                                e.internalOptions.tabbableOptions
                              )))
                        ),
                        o = e.internalOptions.preventScroll;
                      n && t.focus({ preventScroll: void 0 !== o && o }),
                        e.originalOptions.onPostDeactivate &&
                          e.originalOptions.onPostDeactivate.call(null),
                        (e.outsideClick = null);
                    };
                  this.originalOptions.checkCanReturnFocus
                    ? this.originalOptions.checkCanReturnFocus
                        .call(null, this.getReturnFocusNode())
                        .then(t, t)
                    : t();
                },
              },
              {
                key: "setupFocusTrap",
                value: function () {
                  this.focusTrap
                    ? this.props.active &&
                      !this.focusTrap.active &&
                      (this.focusTrap.activate(),
                      this.props.paused && this.focusTrap.pause())
                    : this.focusTrapElements.some(Boolean) &&
                      ((this.focusTrap = this.props._createFocusTrap(
                        this.focusTrapElements,
                        this.internalOptions
                      )),
                      this.props.active && this.focusTrap.activate(),
                      this.props.paused && this.focusTrap.pause());
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.active && this.setupFocusTrap();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  if (this.focusTrap) {
                    e.containerElements !== this.props.containerElements &&
                      this.focusTrap.updateContainerElements(
                        this.props.containerElements
                      );
                    var t = !e.active && this.props.active,
                      n = e.active && !this.props.active,
                      o = !e.paused && this.props.paused,
                      r = e.paused && !this.props.paused;
                    if (
                      (t &&
                        (this.updatePreviousElement(),
                        this.focusTrap.activate()),
                      n)
                    ) {
                      this.deactivateTrap();
                      return;
                    }
                    o && this.focusTrap.pause(), r && this.focusTrap.unpause();
                  } else
                    e.containerElements !== this.props.containerElements &&
                      (this.focusTrapElements = this.props.containerElements),
                      this.props.active &&
                        (this.updatePreviousElement(), this.setupFocusTrap());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.deactivateTrap();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.children
                      ? s.Children.only(this.props.children)
                      : void 0;
                  if (t) {
                    if (t.type && t.type === s.Fragment)
                      throw Error(
                        "A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element."
                      );
                    return s.cloneElement(t, {
                      ref: function (n) {
                        var o = e.props.containerElements;
                        t &&
                          ("function" == typeof t.ref
                            ? t.ref(n)
                            : t.ref && (t.ref.current = n)),
                          (e.focusTrapElements = o || [n]);
                      },
                    });
                  }
                  return null;
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, u(o.key), o);
              }
            })(c.prototype, n),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
        })(s.Component),
        p = "undefined" == typeof Element ? Function : Element;
      (f.propTypes = {
        active: l.bool,
        paused: l.bool,
        focusTrapOptions: l.shape({
          document: l.object,
          onActivate: l.func,
          onPostActivate: l.func,
          checkCanFocusTrap: l.func,
          onPause: l.func,
          onPostPause: l.func,
          onUnpause: l.func,
          onPostUnpause: l.func,
          onDeactivate: l.func,
          onPostDeactivate: l.func,
          checkCanReturnFocus: l.func,
          initialFocus: l.oneOfType([
            l.instanceOf(p),
            l.string,
            l.bool,
            l.func,
          ]),
          fallbackFocus: l.oneOfType([l.instanceOf(p), l.string, l.func]),
          escapeDeactivates: l.oneOfType([l.bool, l.func]),
          clickOutsideDeactivates: l.oneOfType([l.bool, l.func]),
          returnFocusOnDeactivate: l.bool,
          setReturnFocus: l.oneOfType([
            l.instanceOf(p),
            l.string,
            l.bool,
            l.func,
          ]),
          allowOutsideClick: l.oneOfType([l.bool, l.func]),
          preventScroll: l.bool,
          tabbableOptions: l.shape({
            displayCheck: l.oneOf([
              "full",
              "legacy-full",
              "non-zero-area",
              "none",
            ]),
            getShadowRoot: l.oneOfType([l.bool, l.func]),
          }),
          trapStack: l.array,
          isKeyForward: l.func,
          isKeyBackward: l.func,
        }),
        containerElements: l.arrayOf(l.instanceOf(p)),
        children: l.oneOfType([l.element, l.instanceOf(p)]),
      }),
        (f.defaultProps = {
          active: !0,
          paused: !1,
          focusTrapOptions: {},
          _createFocusTrap: c,
        }),
        (e.exports = f);
    },
    56121: (e, t, n) => {
      e.exports = n(61847)();
    },
    61847: (e, t, n) => {
      "use strict";
      var o = n(4140);
      function r() {}
      function i() {}
      (i.resetWarningCache = r),
        (e.exports = function () {
          function e(e, t, n, r, i, a) {
            if (a !== o) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: r,
          };
          return (n.PropTypes = n), n;
        });
    },
    65885: (e, t, n) => {
      "use strict";
      n.d(t, { fY: () => g, mh: () => y });
      var o = !1;
      if ("undefined" != typeof window) {
        var r = {
          get passive() {
            o = !0;
            return;
          },
        };
        window.addEventListener("testPassive", null, r),
          window.removeEventListener("testPassive", null, r);
      }
      var i =
          "undefined" != typeof window &&
          window.navigator &&
          window.navigator.platform &&
          (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            ("MacIntel" === window.navigator.platform &&
              window.navigator.maxTouchPoints > 1)),
        a = [],
        u = !1,
        s = -1,
        l = void 0,
        c = void 0,
        d = void 0,
        f = function (e) {
          return a.some(function (t) {
            return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
          });
        },
        p = function (e) {
          var t = e || window.event;
          return (
            !!f(t.target) ||
            t.touches.length > 1 ||
            (t.preventDefault && t.preventDefault(), !1)
          );
        },
        v = function (e) {
          if (void 0 === d) {
            var t = !!e && !0 === e.reserveScrollBarGap,
              n = window.innerWidth - document.documentElement.clientWidth;
            if (t && n > 0) {
              var o = parseInt(
                window
                  .getComputedStyle(document.body)
                  .getPropertyValue("padding-right"),
                10
              );
              (d = document.body.style.paddingRight),
                (document.body.style.paddingRight = o + n + "px");
            }
          }
          void 0 === l &&
            ((l = document.body.style.overflow),
            (document.body.style.overflow = "hidden"));
        },
        m = function () {
          void 0 !== d &&
            ((document.body.style.paddingRight = d), (d = void 0)),
            void 0 !== l && ((document.body.style.overflow = l), (l = void 0));
        },
        b = function () {
          if (void 0 !== c) {
            var e = -parseInt(document.body.style.top, 10),
              t = -parseInt(document.body.style.left, 10);
            (document.body.style.position = c.position),
              (document.body.style.top = c.top),
              (document.body.style.left = c.left),
              window.scrollTo(t, e),
              (c = void 0);
          }
        },
        h = function (e, t) {
          var n = e.targetTouches[0].clientY - s;
          return (
            !f(e.target) &&
            (t && 0 === t.scrollTop && n > 0
              ? p(e)
              : t && t.scrollHeight - t.scrollTop <= t.clientHeight && n < 0
              ? p(e)
              : (e.stopPropagation(), !0))
          );
        },
        y = function (e, t) {
          if (!e) {
            console.error(
              "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
            );
            return;
          }
          !a.some(function (t) {
            return t.targetElement === e;
          }) &&
            ((a = [].concat(
              (function (e) {
                if (!Array.isArray(e)) return Array.from(e);
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              })(a),
              [{ targetElement: e, options: t || {} }]
            )),
            i
              ? window.requestAnimationFrame(function () {
                  if (void 0 === c) {
                    c = {
                      position: document.body.style.position,
                      top: document.body.style.top,
                      left: document.body.style.left,
                    };
                    var e = window,
                      t = e.scrollY,
                      n = e.scrollX,
                      o = e.innerHeight;
                    (document.body.style.position = "fixed"),
                      (document.body.style.top = -t),
                      (document.body.style.left = -n),
                      setTimeout(function () {
                        return window.requestAnimationFrame(function () {
                          var e = o - window.innerHeight;
                          e && t >= o && (document.body.style.top = -(t + e));
                        });
                      }, 300);
                  }
                })
              : v(t),
            i &&
              ((e.ontouchstart = function (e) {
                1 === e.targetTouches.length &&
                  (s = e.targetTouches[0].clientY);
              }),
              (e.ontouchmove = function (t) {
                1 === t.targetTouches.length && h(t, e);
              }),
              u ||
                (document.addEventListener(
                  "touchmove",
                  p,
                  o ? { passive: !1 } : void 0
                ),
                (u = !0))));
        },
        g = function (e) {
          if (!e) {
            console.error(
              "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
            );
            return;
          }
          (a = a.filter(function (t) {
            return t.targetElement !== e;
          })),
            i &&
              ((e.ontouchstart = null),
              (e.ontouchmove = null),
              u &&
                0 === a.length &&
                (document.removeEventListener(
                  "touchmove",
                  p,
                  o ? { passive: !1 } : void 0
                ),
                (u = !1))),
            i ? b() : m();
        };
    },
    95478: (e, t, n) => {
      "use strict";
      n.d(t, { Y0: () => F });
      var o = n(55729);
      function r(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          ((null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function i(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform
          )
        );
      }
      function a(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      let u = a(function () {
          return i(/^Mac/i);
        }),
        s = a(function () {
          return i(/^iPhone/i);
        }),
        l = a(function () {
          return i(/^iPad/i) || (u() && navigator.maxTouchPoints > 1);
        }),
        c = a(function () {
          return s() || l();
        });
      a(function () {
        return u() || c();
      }),
        a(function () {
          return r(/AppleWebKit/i) && !d();
        });
      let d = a(function () {
          return r(/Chrome/i);
        }),
        f = a(function () {
          return r(/Android/i);
        });
      a(function () {
        return r(/Firefox/i);
      });
      let p = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        v = (e) =>
          e && "window" in e && e.window === e ? e : p(e).defaultView || window,
        m = null,
        b = new Set(),
        h = new Map(),
        y = !1,
        g = !1,
        w = { Tab: !0, Escape: !0 };
      function E(e, t) {
        for (let n of b) n(e, t);
      }
      function T(e) {
        (y = !0),
          !(
            e.metaKey ||
            (!u() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key
          ) && ((m = "keyboard"), E("keyboard", e));
      }
      function O(e) {
        (m = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((y = !0), E("pointer", e));
      }
      function R(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (f() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((y = !0), (m = "virtual"));
      }
      function D(e) {
        e.target !== window &&
          e.target !== document &&
          e.isTrusted &&
          (y || g || ((m = "virtual"), E("virtual", e)), (y = !1), (g = !1));
      }
      function x() {
        (y = !1), (g = !0);
      }
      function C(e) {
        if ("undefined" == typeof window || h.get(v(e))) return;
        let t = v(e),
          n = p(e),
          o = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (y = !0), o.apply(this, arguments);
        }),
          n.addEventListener("keydown", T, !0),
          n.addEventListener("keyup", T, !0),
          n.addEventListener("click", R, !0),
          t.addEventListener("focus", D, !0),
          t.addEventListener("blur", x, !1),
          "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", O, !0),
              n.addEventListener("pointermove", O, !0),
              n.addEventListener("pointerup", O, !0))
            : (n.addEventListener("mousedown", O, !0),
              n.addEventListener("mousemove", O, !0),
              n.addEventListener("mouseup", O, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              k(e);
            },
            { once: !0 }
          ),
          h.set(t, { focus: o });
      }
      let k = (e, t) => {
        let n = v(e),
          o = p(e);
        t && o.removeEventListener("DOMContentLoaded", t),
          h.has(n) &&
            ((n.HTMLElement.prototype.focus = h.get(n).focus),
            o.removeEventListener("keydown", T, !0),
            o.removeEventListener("keyup", T, !0),
            o.removeEventListener("click", R, !0),
            n.removeEventListener("focus", D, !0),
            n.removeEventListener("blur", x, !1),
            "undefined" != typeof PointerEvent
              ? (o.removeEventListener("pointerdown", O, !0),
                o.removeEventListener("pointermove", O, !0),
                o.removeEventListener("pointerup", O, !0))
              : (o.removeEventListener("mousedown", O, !0),
                o.removeEventListener("mousemove", O, !0),
                o.removeEventListener("mouseup", O, !0)),
            h.delete(n));
      };
      function P() {
        return "pointer" !== m;
      }
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let n = p(void 0);
          "loading" !== n.readyState
            ? C(void 0)
            : ((t = () => {
                C(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
            () => k(e, t);
        })();
      let N = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function F(e = {}) {
        var t, n, r;
        let { isTextInput: i, autoFocus: a } = e,
          [u, s] = (0, o.useState)(a || P());
        return (
          (t = (e) => {
            s(e);
          }),
          (n = [i]),
          (r = { isTextInput: i }),
          C(),
          (0, o.useEffect)(() => {
            let e = (e, n) => {
              (function (e, t, n) {
                let o = p(null == n ? void 0 : n.target),
                  r =
                    "undefined" != typeof window
                      ? v(null == n ? void 0 : n.target).HTMLInputElement
                      : HTMLInputElement,
                  i =
                    "undefined" != typeof window
                      ? v(null == n ? void 0 : n.target).HTMLTextAreaElement
                      : HTMLTextAreaElement,
                  a =
                    "undefined" != typeof window
                      ? v(null == n ? void 0 : n.target).HTMLElement
                      : HTMLElement,
                  u =
                    "undefined" != typeof window
                      ? v(null == n ? void 0 : n.target).KeyboardEvent
                      : KeyboardEvent;
                return !(
                  (e =
                    e ||
                    (o.activeElement instanceof r &&
                      !N.has(o.activeElement.type)) ||
                    o.activeElement instanceof i ||
                    (o.activeElement instanceof a &&
                      o.activeElement.isContentEditable)) &&
                  "keyboard" === t &&
                  n instanceof u &&
                  !w[n.key]
                );
              })(!!(null == r ? void 0 : r.isTextInput), e, n) && t(P());
            };
            return (
              b.add(e),
              () => {
                b.delete(e);
              }
            );
          }, n),
          { isFocusVisible: u }
        );
      }
    },
  },
]);
//# sourceMappingURL=3580.272e49a3291dac38.js.map
