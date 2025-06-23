"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1476],
  {
    61476: (e, r, t) => {
      t.d(r, {
        UC: () => W,
        Y9: () => $,
        bL: () => B,
        l9: () => F,
        q7: () => K,
      });
      var n = t(55729),
        o = t(99829),
        a = t(70140),
        l = t(40041),
        i = t(25269),
        s = t(16697),
        d = t(19639),
        c = t(73318),
        u = t(67913),
        f = t(71979),
        p = t(6029),
        m = "Accordion",
        v = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [b, x, h] = (0, a.N)(m),
        [w, y] = (0, o.A)(m, [h, c.z3]),
        C = (0, c.z3)(),
        R = n.forwardRef((e, r) => {
          let { type: t, ...n } = e;
          return (0, p.jsx)(b.Provider, {
            scope: e.__scopeAccordion,
            children:
              "multiple" === t
                ? (0, p.jsx)(I, { ...n, ref: r })
                : (0, p.jsx)(k, { ...n, ref: r }),
          });
        });
      R.displayName = m;
      var [j, g] = w(m),
        [A, N] = w(m, { collapsible: !1 }),
        k = n.forwardRef((e, r) => {
          let {
              value: t,
              defaultValue: o,
              onValueChange: a = () => {},
              collapsible: l = !1,
              ...i
            } = e,
            [d, c] = (0, s.i)({
              prop: t,
              defaultProp: o ?? "",
              onChange: a,
              caller: m,
            });
          return (0, p.jsx)(j, {
            scope: e.__scopeAccordion,
            value: n.useMemo(() => (d ? [d] : []), [d]),
            onItemOpen: c,
            onItemClose: n.useCallback(() => l && c(""), [l, c]),
            children: (0, p.jsx)(A, {
              scope: e.__scopeAccordion,
              collapsible: l,
              children: (0, p.jsx)(M, { ...i, ref: r }),
            }),
          });
        }),
        I = n.forwardRef((e, r) => {
          let {
              value: t,
              defaultValue: o,
              onValueChange: a = () => {},
              ...l
            } = e,
            [i, d] = (0, s.i)({
              prop: t,
              defaultProp: o ?? [],
              onChange: a,
              caller: m,
            }),
            c = n.useCallback((e) => d((r = []) => [...r, e]), [d]),
            u = n.useCallback(
              (e) => d((r = []) => r.filter((r) => r !== e)),
              [d]
            );
          return (0, p.jsx)(j, {
            scope: e.__scopeAccordion,
            value: i,
            onItemOpen: c,
            onItemClose: u,
            children: (0, p.jsx)(A, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(M, { ...l, ref: r }),
            }),
          });
        }),
        [_, D] = w(m),
        M = n.forwardRef((e, r) => {
          let {
              __scopeAccordion: t,
              disabled: o,
              dir: a,
              orientation: s = "vertical",
              ...c
            } = e,
            u = n.useRef(null),
            m = (0, l.s)(u, r),
            h = x(t),
            w = "ltr" === (0, f.jH)(a),
            y = (0, i.m)(e.onKeyDown, (e) => {
              if (!v.includes(e.key)) return;
              let r = e.target,
                t = h().filter((e) => !e.ref.current?.disabled),
                n = t.findIndex((e) => e.ref.current === r),
                o = t.length;
              if (-1 === n) return;
              e.preventDefault();
              let a = n,
                l = o - 1,
                i = () => {
                  (a = n + 1) > l && (a = 0);
                },
                d = () => {
                  (a = n - 1) < 0 && (a = l);
                };
              switch (e.key) {
                case "Home":
                  a = 0;
                  break;
                case "End":
                  a = l;
                  break;
                case "ArrowRight":
                  "horizontal" === s && (w ? i() : d());
                  break;
                case "ArrowDown":
                  "vertical" === s && i();
                  break;
                case "ArrowLeft":
                  "horizontal" === s && (w ? d() : i());
                  break;
                case "ArrowUp":
                  "vertical" === s && d();
              }
              let c = a % o;
              t[c].ref.current?.focus();
            });
          return (0, p.jsx)(_, {
            scope: t,
            disabled: o,
            direction: a,
            orientation: s,
            children: (0, p.jsx)(b.Slot, {
              scope: t,
              children: (0, p.jsx)(d.sG.div, {
                ...c,
                "data-orientation": s,
                ref: m,
                onKeyDown: o ? void 0 : y,
              }),
            }),
          });
        }),
        O = "AccordionItem",
        [S, L] = w(O),
        E = n.forwardRef((e, r) => {
          let { __scopeAccordion: t, value: n, ...o } = e,
            a = D(O, t),
            l = g(O, t),
            i = C(t),
            s = (0, u.B)(),
            d = (n && l.value.includes(n)) || !1,
            f = a.disabled || e.disabled;
          return (0, p.jsx)(S, {
            scope: t,
            open: d,
            disabled: f,
            triggerId: s,
            children: (0, p.jsx)(c.bL, {
              "data-orientation": a.orientation,
              "data-state": q(d),
              ...i,
              ...o,
              ref: r,
              disabled: f,
              open: d,
              onOpenChange: (e) => {
                e ? l.onItemOpen(n) : l.onItemClose(n);
              },
            }),
          });
        });
      E.displayName = O;
      var P = "AccordionHeader",
        T = n.forwardRef((e, r) => {
          let { __scopeAccordion: t, ...n } = e,
            o = D(m, t),
            a = L(P, t);
          return (0, p.jsx)(d.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": q(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: r,
          });
        });
      T.displayName = P;
      var z = "AccordionTrigger",
        G = n.forwardRef((e, r) => {
          let { __scopeAccordion: t, ...n } = e,
            o = D(m, t),
            a = L(z, t),
            l = N(z, t),
            i = C(t);
          return (0, p.jsx)(b.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(c.l9, {
              "aria-disabled": (a.open && !l.collapsible) || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...i,
              ...n,
              ref: r,
            }),
          });
        });
      G.displayName = z;
      var H = "AccordionContent",
        U = n.forwardRef((e, r) => {
          let { __scopeAccordion: t, ...n } = e,
            o = D(m, t),
            a = L(H, t),
            l = C(t);
          return (0, p.jsx)(c.UC, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...l,
            ...n,
            ref: r,
            style: {
              "--radix-accordion-content-height":
                "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width":
                "var(--radix-collapsible-content-width)",
              ...e.style,
            },
          });
        });
      function q(e) {
        return e ? "open" : "closed";
      }
      U.displayName = H;
      var B = R,
        K = E,
        $ = T,
        F = G,
        W = U;
    },
    70140: (e, r, t) => {
      t.d(r, { N: () => s });
      var n = t(55729),
        o = t(99829),
        a = t(40041),
        l = t(97628),
        i = t(6029);
      function s(e) {
        let r = e + "CollectionProvider",
          [t, s] = (0, o.A)(r),
          [d, c] = t(r, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          u = (e) => {
            let { scope: r, children: t } = e,
              o = n.useRef(null),
              a = n.useRef(new Map()).current;
            return (0, i.jsx)(d, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t,
            });
          };
        u.displayName = r;
        let f = e + "CollectionSlot",
          p = (0, l.TL)(f),
          m = n.forwardRef((e, r) => {
            let { scope: t, children: n } = e,
              o = c(f, t),
              l = (0, a.s)(r, o.collectionRef);
            return (0, i.jsx)(p, { ref: l, children: n });
          });
        m.displayName = f;
        let v = e + "CollectionItemSlot",
          b = "data-radix-collection-item",
          x = (0, l.TL)(v),
          h = n.forwardRef((e, r) => {
            let { scope: t, children: o, ...l } = e,
              s = n.useRef(null),
              d = (0, a.s)(r, s),
              u = c(v, t);
            return (
              n.useEffect(
                () => (
                  u.itemMap.set(s, { ref: s, ...l }),
                  () => void u.itemMap.delete(s)
                )
              ),
              (0, i.jsx)(x, { [b]: "", ref: d, children: o })
            );
          });
        return (
          (h.displayName = v),
          [
            { Provider: u, Slot: m, ItemSlot: h },
            function (r) {
              let t = c(e + "CollectionConsumer", r);
              return n.useCallback(() => {
                let e = t.collectionRef.current;
                if (!e) return [];
                let r = Array.from(e.querySelectorAll(`[${b}]`));
                return Array.from(t.itemMap.values()).sort(
                  (e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current)
                );
              }, [t.collectionRef, t.itemMap]);
            },
            s,
          ]
        );
      }
      var d = new WeakMap();
      function c(e, r) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, r);
        let t = (function (e, r) {
          let t = e.length,
            n = u(r),
            o = n >= 0 ? n : t + n;
          return o < 0 || o >= t ? -1 : o;
        })(e, r);
        return -1 === t ? void 0 : e[t];
      }
      function u(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e);
      }
    },
    71979: (e, r, t) => {
      t.d(r, { jH: () => a });
      var n = t(55729);
      t(6029);
      var o = n.createContext(void 0);
      function a(e) {
        let r = n.useContext(o);
        return e || r || "ltr";
      }
    },
    73318: (e, r, t) => {
      t.d(r, {
        Ke: () => R,
        UC: () => k,
        bL: () => A,
        l9: () => N,
        z3: () => v,
      });
      var n = t(55729),
        o = t(25269),
        a = t(99829),
        l = t(16697),
        i = t(35896),
        s = t(40041),
        d = t(19639),
        c = t(78749),
        u = t(67913),
        f = t(6029),
        p = "Collapsible",
        [m, v] = (0, a.A)(p),
        [b, x] = m(p),
        h = n.forwardRef((e, r) => {
          let {
              __scopeCollapsible: t,
              open: o,
              defaultOpen: a,
              disabled: i,
              onOpenChange: s,
              ...c
            } = e,
            [m, v] = (0, l.i)({
              prop: o,
              defaultProp: a ?? !1,
              onChange: s,
              caller: p,
            });
          return (0, f.jsx)(b, {
            scope: t,
            disabled: i,
            contentId: (0, u.B)(),
            open: m,
            onOpenToggle: n.useCallback(() => v((e) => !e), [v]),
            children: (0, f.jsx)(d.sG.div, {
              "data-state": g(m),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: r,
            }),
          });
        });
      h.displayName = p;
      var w = "CollapsibleTrigger",
        y = n.forwardRef((e, r) => {
          let { __scopeCollapsible: t, ...n } = e,
            a = x(w, t);
          return (0, f.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": a.contentId,
            "aria-expanded": a.open || !1,
            "data-state": g(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            disabled: a.disabled,
            ...n,
            ref: r,
            onClick: (0, o.m)(e.onClick, a.onOpenToggle),
          });
        });
      y.displayName = w;
      var C = "CollapsibleContent",
        R = n.forwardRef((e, r) => {
          let { forceMount: t, ...n } = e,
            o = x(C, e.__scopeCollapsible);
          return (0, f.jsx)(c.C, {
            present: t || o.open,
            children: ({ present: e }) =>
              (0, f.jsx)(j, { ...n, ref: r, present: e }),
          });
        });
      R.displayName = C;
      var j = n.forwardRef((e, r) => {
        let { __scopeCollapsible: t, present: o, children: a, ...l } = e,
          c = x(C, t),
          [u, p] = n.useState(o),
          m = n.useRef(null),
          v = (0, s.s)(r, m),
          b = n.useRef(0),
          h = b.current,
          w = n.useRef(0),
          y = w.current,
          R = c.open || u,
          j = n.useRef(R),
          A = n.useRef(void 0);
        return (
          n.useEffect(() => {
            let e = requestAnimationFrame(() => (j.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, i.N)(() => {
            let e = m.current;
            if (e) {
              (A.current = A.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none");
              let r = e.getBoundingClientRect();
              (b.current = r.height),
                (w.current = r.width),
                j.current ||
                  ((e.style.transitionDuration = A.current.transitionDuration),
                  (e.style.animationName = A.current.animationName)),
                p(o);
            }
          }, [c.open, o]),
          (0, f.jsx)(d.sG.div, {
            "data-state": g(c.open),
            "data-disabled": c.disabled ? "" : void 0,
            id: c.contentId,
            hidden: !R,
            ...l,
            ref: v,
            style: {
              "--radix-collapsible-content-height": h ? `${h}px` : void 0,
              "--radix-collapsible-content-width": y ? `${y}px` : void 0,
              ...e.style,
            },
            children: R && a,
          })
        );
      });
      function g(e) {
        return e ? "open" : "closed";
      }
      var A = h,
        N = y,
        k = R;
    },
  },
]);
//# sourceMappingURL=1476.d8cd095486d6221c.js.map
