"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5056],
  {
    27780: (e, t, r) => {
      r.d(t, {
        UC: () => er,
        VY: () => eo,
        ZL: () => ee,
        bL: () => Q,
        bm: () => el,
        hE: () => en,
        hJ: () => et,
        l9: () => X,
      });
      var n = r(55729),
        o = r(25269),
        l = r(40041),
        a = r(99829),
        i = r(67913),
        s = r(16697),
        d = r(27555),
        u = r(41679),
        c = r(61486),
        f = r(78749),
        p = r(19639),
        g = r(74249),
        h = r(1713),
        m = r(20184),
        v = r(97628),
        b = r(6029),
        x = "Dialog",
        [_, D] = (0, a.A)(x),
        [y, C] = _(x),
        R = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: l,
              onOpenChange: a,
              modal: d = !0,
            } = e,
            u = n.useRef(null),
            c = n.useRef(null),
            [f, p] = (0, s.i)({
              prop: o,
              defaultProp: l ?? !1,
              onChange: a,
              caller: x,
            });
          return (0, b.jsx)(y, {
            scope: t,
            triggerRef: u,
            contentRef: c,
            contentId: (0, i.B)(),
            titleId: (0, i.B)(),
            descriptionId: (0, i.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: d,
            children: r,
          });
        };
      R.displayName = x;
      var j = "DialogTrigger",
        w = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = C(j, r),
            i = (0, l.s)(t, a.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": V(a.open),
            ...n,
            ref: i,
            onClick: (0, o.m)(e.onClick, a.onOpenToggle),
          });
        });
      w.displayName = j;
      var I = "DialogPortal",
        [N, O] = _(I, { forceMount: void 0 }),
        E = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: l,
            } = e,
            a = C(I, t);
          return (0, b.jsx)(N, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, b.jsx)(f.C, {
                present: r || a.open,
                children: (0, b.jsx)(c.Z, {
                  asChild: !0,
                  container: l,
                  children: e,
                }),
              })
            ),
          });
        };
      E.displayName = I;
      var k = "DialogOverlay",
        F = n.forwardRef((e, t) => {
          let r = O(k, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            l = C(k, e.__scopeDialog);
          return l.modal
            ? (0, b.jsx)(f.C, {
                present: n || l.open,
                children: (0, b.jsx)(P, { ...o, ref: t }),
              })
            : null;
        });
      F.displayName = k;
      var A = (0, v.TL)("DialogOverlay.RemoveScroll"),
        P = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = C(k, r);
          return (0, b.jsx)(h.A, {
            as: A,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": V(o.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        T = "DialogContent",
        W = n.forwardRef((e, t) => {
          let r = O(T, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            l = C(T, e.__scopeDialog);
          return (0, b.jsx)(f.C, {
            present: n || l.open,
            children: l.modal
              ? (0, b.jsx)(B, { ...o, ref: t })
              : (0, b.jsx)(G, { ...o, ref: t }),
          });
        });
      W.displayName = T;
      var B = n.forwardRef((e, t) => {
          let r = C(T, e.__scopeDialog),
            a = n.useRef(null),
            i = (0, l.s)(t, r.contentRef, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, m.Eq)(e);
            }, []),
            (0, b.jsx)(M, {
              ...e,
              ref: i,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                e.preventDefault(), r.triggerRef.current?.focus();
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || r) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        G = n.forwardRef((e, t) => {
          let r = C(T, e.__scopeDialog),
            o = n.useRef(!1),
            l = n.useRef(!1);
          return (0, b.jsx)(M, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (o.current || r.triggerRef.current?.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (l.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (l.current = !0));
              let n = t.target;
              r.triggerRef.current?.contains(n) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  l.current &&
                  t.preventDefault();
            },
          });
        }),
        M = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: i,
              ...s
            } = e,
            c = C(T, r),
            f = n.useRef(null),
            p = (0, l.s)(t, f);
          return (
            (0, g.Oh)(),
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(u.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: i,
                  children: (0, b.jsx)(d.qW, {
                    role: "dialog",
                    id: c.contentId,
                    "aria-describedby": c.descriptionId,
                    "aria-labelledby": c.titleId,
                    "data-state": V(c.open),
                    ...s,
                    ref: p,
                    onDismiss: () => c.onOpenChange(!1),
                  }),
                }),
                (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsx)(Y, { titleId: c.titleId }),
                    (0, b.jsx)(z, {
                      contentRef: f,
                      descriptionId: c.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        $ = "DialogTitle",
        q = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = C($, r);
          return (0, b.jsx)(p.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      q.displayName = $;
      var L = "DialogDescription",
        S = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = C(L, r);
          return (0, b.jsx)(p.sG.p, { id: o.descriptionId, ...n, ref: t });
        });
      S.displayName = L;
      var U = "DialogClose",
        Z = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            l = C(U, r);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => l.onOpenChange(!1)),
          });
        });
      function V(e) {
        return e ? "open" : "closed";
      }
      Z.displayName = U;
      var H = "DialogTitleWarning",
        [J, K] = (0, a.q)(H, {
          contentName: T,
          titleName: $,
          docsSlug: "dialog",
        }),
        Y = ({ titleId: e }) => {
          let t = K(H),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return (
            n.useEffect(() => {
              e && !document.getElementById(e) && console.error(r);
            }, [r, e]),
            null
          );
        },
        z = ({ contentRef: e, descriptionId: t }) => {
          let r = K("DialogDescriptionWarning"),
            o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
          return (
            n.useEffect(() => {
              let r = e.current?.getAttribute("aria-describedby");
              t && r && !document.getElementById(t) && console.warn(o);
            }, [o, e, t]),
            null
          );
        },
        Q = R,
        X = w,
        ee = E,
        et = F,
        er = W,
        en = q,
        eo = S,
        el = Z;
    },
    41272: (e, t, r) => {
      r.d(t, { N: () => o });
      var n = r(6029);
      let o = (0, r(55729).forwardRef)((e, t) => {
        let {
          href: r,
          target: o,
          children: l,
          className: a,
          rel: i,
          onClick: s,
          editAttributes: d,
          dataLayer: u,
          ...c
        } = e;
        return (
          o || (o = "_blank"),
          ((null == r ? void 0 : r.startsWith("/")) ||
            (null == r ? void 0 : r.includes(".hbs.edu"))) &&
            (o = r.includes("webassets.hbs.edu") ? "_blank" : "_self"),
          (0, n.jsx)("a", {
            ...d,
            href: r,
            target: o,
            className: a,
            rel: i,
            ...c,
            ref: t,
            onClick: (e) => {
              if (
                (null == u ? void 0 : u.event_data.explore_search) &&
                !u.event_data.explore_search_info_box_clicked
              ) {
                let e = "string" == typeof l ? l.trim() : "";
                u.event_data.explore_search_info_box_clicked = e;
              }
              s && s(e);
            },
            children: l,
          })
        );
      });
    },
    44292: (e, t, r) => {
      r.d(t, { i: () => n });
      function n(e) {
        if (!e) return !1;
        try {
          return !new URL(e).host.endsWith("hbs.edu");
        } catch (e) {
          return !1;
        }
      }
    },
  },
]);
//# sourceMappingURL=5056.2f6272906eefbbda.js.map
