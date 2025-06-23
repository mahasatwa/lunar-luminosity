"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1291],
  {
    11291: (e, t, n) => {
      n.d(t, {
        Mz: () => G,
        UC: () => U,
        ZL: () => q,
        bL: () => X,
        bm: () => Z,
        i3: () => K,
        l9: () => Y,
      });
      var r = n(55729),
        o = n(25269),
        i = n(40041),
        l = n(99829),
        a = n(27555),
        s = n(74249),
        f = n(41679),
        u = n(67913),
        c = n(20609),
        d = n(61486),
        p = n(78749),
        h = n(19639),
        g = n(97628),
        m = n(16697),
        x = n(20184),
        y = n(1713),
        v = n(6029),
        w = "Popover",
        [b, R] = (0, l.A)(w, [c.Bk]),
        A = (0, c.Bk)(),
        [C, P] = b(w),
        O = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              modal: a = !1,
            } = e,
            s = A(t),
            f = r.useRef(null),
            [d, p] = r.useState(!1),
            [h, g] = (0, m.i)({
              prop: o,
              defaultProp: i ?? !1,
              onChange: l,
              caller: w,
            });
          return (0, v.jsx)(c.bL, {
            ...s,
            children: (0, v.jsx)(C, {
              scope: t,
              contentId: (0, u.B)(),
              triggerRef: f,
              open: h,
              onOpenChange: g,
              onOpenToggle: r.useCallback(() => g((e) => !e), [g]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: r.useCallback(() => p(!0), []),
              onCustomAnchorRemove: r.useCallback(() => p(!1), []),
              modal: a,
              children: n,
            }),
          });
        };
      O.displayName = w;
      var E = "PopoverAnchor",
        L = r.forwardRef((e, t) => {
          let { __scopePopover: n, ...o } = e,
            i = P(E, n),
            l = A(n),
            { onCustomAnchorAdd: a, onCustomAnchorRemove: s } = i;
          return (
            r.useEffect(() => (a(), () => s()), [a, s]),
            (0, v.jsx)(c.Mz, { ...l, ...o, ref: t })
          );
        });
      L.displayName = E;
      var T = "PopoverTrigger",
        k = r.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            l = P(T, n),
            a = A(n),
            s = (0, i.s)(t, l.triggerRef),
            f = (0, v.jsx)(h.sG.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": l.open,
              "aria-controls": l.contentId,
              "data-state": V(l.open),
              ...r,
              ref: s,
              onClick: (0, o.m)(e.onClick, l.onOpenToggle),
            });
          return l.hasCustomAnchor
            ? f
            : (0, v.jsx)(c.Mz, { asChild: !0, ...a, children: f });
        });
      k.displayName = T;
      var S = "PopoverPortal",
        [j, D] = b(S, { forceMount: void 0 }),
        F = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = P(S, t);
          return (0, v.jsx)(j, {
            scope: t,
            forceMount: n,
            children: (0, v.jsx)(p.C, {
              present: n || i.open,
              children: (0, v.jsx)(d.Z, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      F.displayName = S;
      var N = "PopoverContent",
        H = r.forwardRef((e, t) => {
          let n = D(N, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            i = P(N, e.__scopePopover);
          return (0, v.jsx)(p.C, {
            present: r || i.open,
            children: i.modal
              ? (0, v.jsx)(z, { ...o, ref: t })
              : (0, v.jsx)(B, { ...o, ref: t }),
          });
        });
      H.displayName = N;
      var M = (0, g.TL)("PopoverContent.RemoveScroll"),
        z = r.forwardRef((e, t) => {
          let n = P(N, e.__scopePopover),
            l = r.useRef(null),
            a = (0, i.s)(t, l),
            s = r.useRef(!1);
          return (
            r.useEffect(() => {
              let e = l.current;
              if (e) return (0, x.Eq)(e);
            }, []),
            (0, v.jsx)(y.A, {
              as: M,
              allowPinchZoom: !0,
              children: (0, v.jsx)(W, {
                ...e,
                ref: a,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                  e.preventDefault(),
                    s.current || n.triggerRef.current?.focus();
                }),
                onPointerDownOutside: (0, o.m)(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      n = 0 === t.button && !0 === t.ctrlKey;
                    s.current = 2 === t.button || n;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: (0, o.m)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
              }),
            })
          );
        }),
        B = r.forwardRef((e, t) => {
          let n = P(N, e.__scopePopover),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, v.jsx)(W, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (o.current || n.triggerRef.current?.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let r = t.target;
              n.triggerRef.current?.contains(r) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        W = r.forwardRef((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: i,
              disableOutsidePointerEvents: l,
              onEscapeKeyDown: u,
              onPointerDownOutside: d,
              onFocusOutside: p,
              onInteractOutside: h,
              ...g
            } = e,
            m = P(N, n),
            x = A(n);
          return (
            (0, s.Oh)(),
            (0, v.jsx)(f.n, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, v.jsx)(a.qW, {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onInteractOutside: h,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onDismiss: () => m.onOpenChange(!1),
                children: (0, v.jsx)(c.UC, {
                  "data-state": V(m.open),
                  role: "dialog",
                  id: m.contentId,
                  ...x,
                  ...g,
                  ref: t,
                  style: {
                    ...g.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        $ = "PopoverClose",
        _ = r.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            i = P($, n);
          return (0, v.jsx)(h.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      _.displayName = $;
      var I = r.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          o = A(n);
        return (0, v.jsx)(c.i3, { ...o, ...r, ref: t });
      });
      function V(e) {
        return e ? "open" : "closed";
      }
      I.displayName = "PopoverArrow";
      var X = O,
        G = L,
        Y = k,
        q = F,
        U = H,
        Z = _,
        K = I;
    },
    20609: (e, t, n) => {
      n.d(t, {
        Mz: () => eZ,
        i3: () => eJ,
        UC: () => eK,
        bL: () => eU,
        Bk: () => eD,
      });
      var r = n(55729);
      let o = ["top", "right", "bottom", "left"],
        i = Math.min,
        l = Math.max,
        a = Math.round,
        s = Math.floor,
        f = (e) => ({ x: e, y: e }),
        u = { left: "right", right: "left", bottom: "top", top: "bottom" },
        c = { start: "end", end: "start" };
      function d(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function h(e) {
        return e.split("-")[1];
      }
      function g(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function x(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => c[e]);
      }
      function v(e) {
        return e.replace(/left|right|bottom|top/g, (e) => u[e]);
      }
      function w(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function b(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function R(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = x(t),
          a = g(x(t)),
          s = m(a),
          f = p(t),
          u = "y" === l,
          c = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          y = o[s] / 2 - i[s] / 2;
        switch (f) {
          case "top":
            r = { x: c, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: c, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: d };
            break;
          case "left":
            r = { x: o.x - i.width, y: d };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (h(t)) {
          case "start":
            r[a] -= y * (n && u ? -1 : 1);
            break;
          case "end":
            r[a] += y * (n && u ? -1 : 1);
        }
        return r;
      }
      let A = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          s = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          f = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: u, y: c } = R(f, r, s),
          d = r,
          p = {},
          h = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: g } = a[n],
            {
              x: m,
              y: x,
              data: y,
              reset: v,
            } = await g({
              x: u,
              y: c,
              initialPlacement: r,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: f,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (u = null != m ? m : u),
            (c = null != x ? x : c),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            v &&
              h <= 50 &&
              (h++,
              "object" == typeof v &&
                (v.placement && (d = v.placement),
                v.rects &&
                  (f =
                    !0 === v.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : v.rects),
                ({ x: u, y: c } = R(f, d, s))),
              (n = -1));
        }
        return { x: u, y: c, placement: d, strategy: o, middlewareData: p };
      };
      async function C(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
          {
            boundary: f = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: c = "floating",
            altBoundary: p = !1,
            padding: h = 0,
          } = d(t, e),
          g = w(h),
          m = a[p ? ("floating" === c ? "reference" : "floating") : c],
          x = b(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: f,
              rootBoundary: u,
              strategy: s,
            })
          ),
          y =
            "floating" === c
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          v = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          R = ((await (null == i.isElement ? void 0 : i.isElement(v))) &&
            (await (null == i.getScale ? void 0 : i.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          A = b(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: y,
                  offsetParent: v,
                  strategy: s,
                })
              : y
          );
        return {
          top: (x.top - A.top + g.top) / R.y,
          bottom: (A.bottom - x.bottom + g.bottom) / R.y,
          left: (x.left - A.left + g.left) / R.x,
          right: (A.right - x.right + g.right) / R.x,
        };
      }
      function P(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function O(e) {
        return o.some((t) => e[t] >= 0);
      }
      async function E(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = p(n),
          a = h(n),
          s = "y" === x(n),
          f = ["left", "top"].includes(l) ? -1 : 1,
          u = i && s ? -1 : 1,
          c = d(t, e),
          {
            mainAxis: g,
            crossAxis: m,
            alignmentAxis: y,
          } = "number" == typeof c
            ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: c.mainAxis || 0,
                crossAxis: c.crossAxis || 0,
                alignmentAxis: c.alignmentAxis,
              };
        return (
          a && "number" == typeof y && (m = "end" === a ? -1 * y : y),
          s ? { x: m * u, y: g * f } : { x: g * f, y: m * u }
        );
      }
      function L() {
        return "undefined" != typeof window;
      }
      function T(e) {
        return j(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function k(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function S(e) {
        var t;
        return null ==
          (t = (j(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function j(e) {
        return !!L() && (e instanceof Node || e instanceof k(e).Node);
      }
      function D(e) {
        return !!L() && (e instanceof Element || e instanceof k(e).Element);
      }
      function F(e) {
        return (
          !!L() && (e instanceof HTMLElement || e instanceof k(e).HTMLElement)
        );
      }
      function N(e) {
        return (
          !!L() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof k(e).ShadowRoot)
        );
      }
      function H(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = $(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function M(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function z(e) {
        let t = B(),
          n = D(e) ? $(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function B() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function W(e) {
        return ["html", "body", "#document"].includes(T(e));
      }
      function $(e) {
        return k(e).getComputedStyle(e);
      }
      function _(e) {
        return D(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function I(e) {
        if ("html" === T(e)) return e;
        let t = e.assignedSlot || e.parentNode || (N(e) && e.host) || S(e);
        return N(t) ? t.host : t;
      }
      function V(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = I(t);
            return W(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : F(n) && H(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = k(o);
        if (i) {
          let e = X(l);
          return t.concat(
            l,
            l.visualViewport || [],
            H(o) ? o : [],
            e && n ? V(e) : []
          );
        }
        return t.concat(o, V(o, [], n));
      }
      function X(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function G(e) {
        let t = $(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = F(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          s = a(n) !== i || a(r) !== l;
        return s && ((n = i), (r = l)), { width: n, height: r, $: s };
      }
      function Y(e) {
        return D(e) ? e : e.contextElement;
      }
      function q(e) {
        let t = Y(e);
        if (!F(t)) return f(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = G(t),
          l = (i ? a(n.width) : n.width) / r,
          s = (i ? a(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: l, y: s }
        );
      }
      let U = f(0);
      function Z(e) {
        let t = k(e);
        return B() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : U;
      }
      function K(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = Y(e),
          a = f(1);
        t && (r ? D(r) && (a = q(r)) : (a = q(e)));
        let s = (void 0 === (o = n) && (o = !1), r && (!o || r === k(l)) && o)
            ? Z(l)
            : f(0),
          u = (i.left + s.x) / a.x,
          c = (i.top + s.y) / a.y,
          d = i.width / a.x,
          p = i.height / a.y;
        if (l) {
          let e = k(l),
            t = r && D(r) ? k(r) : r,
            n = e,
            o = X(n);
          for (; o && r && t !== n; ) {
            let e = q(o),
              t = o.getBoundingClientRect(),
              r = $(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (u *= e.x),
              (c *= e.y),
              (d *= e.x),
              (p *= e.y),
              (u += i),
              (c += l),
              (o = X((n = k(o))));
          }
        }
        return b({ width: d, height: p, x: u, y: c });
      }
      function J(e, t) {
        let n = _(e).scrollLeft;
        return t ? t.left + n : K(S(e)).left + n;
      }
      function Q(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : J(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function ee(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = k(e),
              r = S(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              s = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = B();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: s };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = S(e),
              n = _(e),
              r = e.ownerDocument.body,
              o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = l(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -n.scrollLeft + J(e),
              s = -n.scrollTop;
            return (
              "rtl" === $(r).direction &&
                (a += l(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: s }
            );
          })(S(e));
        else if (D(t))
          r = (function (e, t) {
            let n = K(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = F(e) ? q(e) : f(1),
              l = e.clientWidth * i.x,
              a = e.clientHeight * i.y;
            return { width: l, height: a, x: o * i.x, y: r * i.y };
          })(t, n);
        else {
          let n = Z(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return b(r);
      }
      function et(e) {
        return "static" === $(e).position;
      }
      function en(e, t) {
        if (!F(e) || "fixed" === $(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return S(e) === n && (n = n.ownerDocument.body), n;
      }
      function er(e, t) {
        let n = k(e);
        if (M(e)) return n;
        if (!F(e)) {
          let t = I(e);
          for (; t && !W(t); ) {
            if (D(t) && !et(t)) return t;
            t = I(t);
          }
          return n;
        }
        let r = en(e, t);
        for (; r && ["table", "td", "th"].includes(T(r)) && et(r); )
          r = en(r, t);
        return r && W(r) && et(r) && !z(r)
          ? n
          : r ||
              (function (e) {
                let t = I(e);
                for (; F(t) && !W(t); ) {
                  if (z(t)) return t;
                  if (M(t)) break;
                  t = I(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eo = async function (e) {
          let t = this.getOffsetParent || er,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = F(t),
                o = S(t),
                i = "fixed" === n,
                l = K(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                s = f(0);
              if (r || (!r && !i)) {
                if ((("body" !== T(t) || H(o)) && (a = _(t)), r)) {
                  let e = K(t, !0, i, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else o && (s.x = J(o));
              }
              i && !r && o && (s.x = J(o));
              let u = !o || r || i ? f(0) : Q(o, a);
              return {
                x: l.left + a.scrollLeft - s.x - u.x,
                y: l.top + a.scrollTop - s.y - u.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ei = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = S(r),
              a = !!t && M(t.floating);
            if (r === l || (a && i)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              u = f(1),
              c = f(0),
              d = F(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== T(r) || H(l)) && (s = _(r)), F(r))
            ) {
              let e = K(r);
              (u = q(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop);
            }
            let p = !l || d || i ? f(0) : Q(l, s, !0);
            return {
              width: n.width * u.x,
              height: n.height * u.y,
              x: n.x * u.x - s.scrollLeft * u.x + c.x + p.x,
              y: n.y * u.y - s.scrollTop * u.y + c.y + p.y,
            };
          },
          getDocumentElement: S,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              a = [
                ...("clippingAncestors" === n
                  ? M(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = V(e, [], !1).filter(
                            (e) => D(e) && "body" !== T(e)
                          ),
                          o = null,
                          i = "fixed" === $(e).position,
                          l = i ? I(e) : e;
                        for (; D(l) && !W(l); ) {
                          let t = $(l),
                            n = z(l);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (H(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = I(t);
                                      return (
                                        !(r === n || !D(r) || W(r)) &&
                                        ("fixed" === $(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = I(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              s = a[0],
              f = a.reduce((e, n) => {
                let r = ee(t, n, o);
                return (
                  (e.top = l(r.top, e.top)),
                  (e.right = i(r.right, e.right)),
                  (e.bottom = i(r.bottom, e.bottom)),
                  (e.left = l(r.left, e.left)),
                  e
                );
              }, ee(t, s, o));
            return {
              width: f.right - f.left,
              height: f.bottom - f.top,
              x: f.left,
              y: f.top,
            };
          },
          getOffsetParent: er,
          getElementRects: eo,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = G(e);
            return { width: t, height: n };
          },
          getScale: q,
          isElement: D,
          isRTL: function (e) {
            return "rtl" === $(e).direction;
          },
        };
      function el(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let ea = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: a,
                platform: s,
                elements: f,
                middlewareData: u,
              } = t,
              { element: c, padding: p = 0 } = d(e, t) || {};
            if (null == c) return {};
            let y = w(p),
              v = { x: n, y: r },
              b = g(x(o)),
              R = m(b),
              A = await s.getDimensions(c),
              C = "y" === b,
              P = C ? "clientHeight" : "clientWidth",
              O = a.reference[R] + a.reference[b] - v[b] - a.floating[R],
              E = v[b] - a.reference[b],
              L = await (null == s.getOffsetParent
                ? void 0
                : s.getOffsetParent(c)),
              T = L ? L[P] : 0;
            (T && (await (null == s.isElement ? void 0 : s.isElement(L)))) ||
              (T = f.floating[P] || a.floating[R]);
            let k = T / 2 - A[R] / 2 - 1,
              S = i(y[C ? "top" : "left"], k),
              j = i(y[C ? "bottom" : "right"], k),
              D = T - A[R] - j,
              F = T / 2 - A[R] / 2 + (O / 2 - E / 2),
              N = l(S, i(F, D)),
              H =
                !u.arrow &&
                null != h(o) &&
                F !== N &&
                a.reference[R] / 2 - (F < S ? S : j) - A[R] / 2 < 0,
              M = H ? (F < S ? F - S : F - D) : 0;
            return {
              [b]: v[b] + M,
              data: {
                [b]: N,
                centerOffset: F - N - M,
                ...(H && { alignmentOffset: M }),
              },
              reset: H,
            };
          },
        }),
        es = (e, t, n) => {
          let r = new Map(),
            o = { platform: ei, ...n },
            i = { ...o.platform, _c: r };
          return A(e, t, { ...o, platform: i });
        };
      var ef = n(56760),
        eu = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function ec(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!ec(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !ec(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ed(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ep(e, t) {
        let n = ed(e);
        return Math.round(t * n) / n;
      }
      function eh(e) {
        let t = r.useRef(e);
        return (
          eu(() => {
            t.current = e;
          }),
          t
        );
      }
      let eg = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? ea({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? ea({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        em = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: i, placement: l, middlewareData: a } = t,
                    s = await E(t, e);
                  return l ===
                    (null == (n = a.offset) ? void 0 : n.placement) &&
                    null != (r = a.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ex = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: a = !0,
                      crossAxis: s = !1,
                      limiter: f = {
                        fn: (e) => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...u
                    } = d(e, t),
                    c = { x: n, y: r },
                    h = await C(t, u),
                    m = x(p(o)),
                    y = g(m),
                    v = c[y],
                    w = c[m];
                  if (a) {
                    let e = "y" === y ? "top" : "left",
                      t = "y" === y ? "bottom" : "right",
                      n = v + h[e],
                      r = v - h[t];
                    v = l(n, i(v, r));
                  }
                  if (s) {
                    let e = "y" === m ? "top" : "left",
                      t = "y" === m ? "bottom" : "right",
                      n = w + h[e],
                      r = w - h[t];
                    w = l(n, i(w, r));
                  }
                  let b = f.fn({ ...t, [y]: v, [m]: w });
                  return {
                    ...b,
                    data: {
                      x: b.x - n,
                      y: b.y - r,
                      enabled: { [y]: a, [m]: s },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ey = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: i,
                      middlewareData: l,
                    } = t,
                    {
                      offset: a = 0,
                      mainAxis: s = !0,
                      crossAxis: f = !0,
                    } = d(e, t),
                    u = { x: n, y: r },
                    c = x(o),
                    h = g(c),
                    m = u[h],
                    y = u[c],
                    v = d(a, t),
                    w =
                      "number" == typeof v
                        ? { mainAxis: v, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...v };
                  if (s) {
                    let e = "y" === h ? "height" : "width",
                      t = i.reference[h] - i.floating[e] + w.mainAxis,
                      n = i.reference[h] + i.reference[e] - w.mainAxis;
                    m < t ? (m = t) : m > n && (m = n);
                  }
                  if (f) {
                    var b, R;
                    let e = "y" === h ? "width" : "height",
                      t = ["top", "left"].includes(p(o)),
                      n =
                        i.reference[c] -
                        i.floating[e] +
                        ((t && (null == (b = l.offset) ? void 0 : b[c])) || 0) +
                        (t ? 0 : w.crossAxis),
                      r =
                        i.reference[c] +
                        i.reference[e] +
                        (t
                          ? 0
                          : (null == (R = l.offset) ? void 0 : R[c]) || 0) -
                        (t ? w.crossAxis : 0);
                    y < n ? (y = n) : y > r && (y = r);
                  }
                  return { [h]: m, [c]: y };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ev = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r, o, i, l, a;
                  let {
                      placement: s,
                      middlewareData: f,
                      rects: u,
                      initialPlacement: c,
                      platform: w,
                      elements: b,
                    } = t,
                    {
                      mainAxis: R = !0,
                      crossAxis: A = !0,
                      fallbackPlacements: P,
                      fallbackStrategy: O = "bestFit",
                      fallbackAxisSideDirection: E = "none",
                      flipAlignment: L = !0,
                      ...T
                    } = d(e, t);
                  if (null != (n = f.arrow) && n.alignmentOffset) return {};
                  let k = p(s),
                    S = x(c),
                    j = p(c) === c,
                    D = await (null == w.isRTL ? void 0 : w.isRTL(b.floating)),
                    F =
                      P ||
                      (j || !L
                        ? [v(c)]
                        : (function (e) {
                            let t = v(e);
                            return [y(e), t, y(t)];
                          })(c)),
                    N = "none" !== E;
                  !P &&
                    N &&
                    F.push(
                      ...(function (e, t, n, r) {
                        let o = h(e),
                          i = (function (e, t, n) {
                            let r = ["left", "right"],
                              o = ["right", "left"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                              case "left":
                              case "right":
                                return t
                                  ? ["top", "bottom"]
                                  : ["bottom", "top"];
                              default:
                                return [];
                            }
                          })(p(e), "start" === n, r);
                        return (
                          o &&
                            ((i = i.map((e) => e + "-" + o)),
                            t && (i = i.concat(i.map(y)))),
                          i
                        );
                      })(c, L, E, D)
                    );
                  let H = [c, ...F],
                    M = await C(t, T),
                    z = [],
                    B = (null == (r = f.flip) ? void 0 : r.overflows) || [];
                  if ((R && z.push(M[k]), A)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = h(e),
                        o = g(x(e)),
                        i = m(o),
                        l =
                          "x" === o
                            ? r === (n ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === r
                            ? "bottom"
                            : "top";
                      return (
                        t.reference[i] > t.floating[i] && (l = v(l)), [l, v(l)]
                      );
                    })(s, u, D);
                    z.push(M[e[0]], M[e[1]]);
                  }
                  if (
                    ((B = [...B, { placement: s, overflows: z }]),
                    !z.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = f.flip) ? void 0 : o.index) || 0) + 1,
                      t = H[e];
                    if (t) {
                      let n = "alignment" === A && S !== x(t),
                        r = (null == (l = B[0]) ? void 0 : l.overflows[0]) > 0;
                      if (!n || r)
                        return {
                          data: { index: e, overflows: B },
                          reset: { placement: t },
                        };
                    }
                    let n =
                      null ==
                      (i = B.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1]
                      )[0])
                        ? void 0
                        : i.placement;
                    if (!n)
                      switch (O) {
                        case "bestFit": {
                          let e =
                            null ==
                            (a = B.filter((e) => {
                              if (N) {
                                let t = x(e.placement);
                                return t === S || "y" === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : a[0];
                          e && (n = e);
                          break;
                        }
                        case "initialPlacement":
                          n = c;
                      }
                    if (s !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ew = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var n, r;
                  let o, a;
                  let { placement: s, rects: f, platform: u, elements: c } = t,
                    { apply: g = () => {}, ...m } = d(e, t),
                    y = await C(t, m),
                    v = p(s),
                    w = h(s),
                    b = "y" === x(s),
                    { width: R, height: A } = f.floating;
                  "top" === v || "bottom" === v
                    ? ((o = v),
                      (a =
                        w ===
                        ((await (null == u.isRTL
                          ? void 0
                          : u.isRTL(c.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((a = v), (o = "end" === w ? "top" : "bottom"));
                  let P = A - y.top - y.bottom,
                    O = R - y.left - y.right,
                    E = i(A - y[o], P),
                    L = i(R - y[a], O),
                    T = !t.middlewareData.shift,
                    k = E,
                    S = L;
                  if (
                    (null != (n = t.middlewareData.shift) &&
                      n.enabled.x &&
                      (S = O),
                    null != (r = t.middlewareData.shift) &&
                      r.enabled.y &&
                      (k = P),
                    T && !w)
                  ) {
                    let e = l(y.left, 0),
                      t = l(y.right, 0),
                      n = l(y.top, 0),
                      r = l(y.bottom, 0);
                    b
                      ? (S =
                          R -
                          2 * (0 !== e || 0 !== t ? e + t : l(y.left, y.right)))
                      : (k =
                          A -
                          2 *
                            (0 !== n || 0 !== r ? n + r : l(y.top, y.bottom)));
                  }
                  await g({ ...t, availableWidth: S, availableHeight: k });
                  let j = await u.getDimensions(c.floating);
                  return R !== j.width || A !== j.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eb = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = d(e, t);
                  switch (r) {
                    case "referenceHidden": {
                      let e = P(
                        await C(t, { ...o, elementContext: "reference" }),
                        n.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: O(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = P(
                        await C(t, { ...o, altBoundary: !0 }),
                        n.floating
                      );
                      return { data: { escapedOffsets: e, escaped: O(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eR = (e, t) => ({ ...eg(e), options: [e, t] });
      var eA = n(19639),
        eC = n(6029),
        eP = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, eC.jsx)(eA.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, eC.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      eP.displayName = "Arrow";
      var eO = n(40041),
        eE = n(99829),
        eL = n(9613),
        eT = n(35896),
        ek = n(24347),
        eS = "Popper",
        [ej, eD] = (0, eE.A)(eS),
        [eF, eN] = ej(eS),
        eH = (e) => {
          let { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, eC.jsx)(eF, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      eH.displayName = eS;
      var eM = "PopperAnchor",
        ez = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...i } = e,
            l = eN(eM, n),
            a = r.useRef(null),
            s = (0, eO.s)(t, a);
          return (
            r.useEffect(() => {
              l.onAnchorChange(o?.current || a.current);
            }),
            o ? null : (0, eC.jsx)(eA.sG.div, { ...i, ref: s })
          );
        });
      ez.displayName = eM;
      var eB = "PopperContent",
        [eW, e$] = ej(eB),
        e_ = r.forwardRef((e, t) => {
          let {
              __scopePopper: n,
              side: o = "bottom",
              sideOffset: a = 0,
              align: f = "center",
              alignOffset: u = 0,
              arrowPadding: c = 0,
              avoidCollisions: d = !0,
              collisionBoundary: p = [],
              collisionPadding: h = 0,
              sticky: g = "partial",
              hideWhenDetached: m = !1,
              updatePositionStrategy: x = "optimized",
              onPlaced: y,
              ...v
            } = e,
            w = eN(eB, n),
            [b, R] = r.useState(null),
            A = (0, eO.s)(t, (e) => R(e)),
            [C, P] = r.useState(null),
            O = (0, ek.X)(C),
            E = O?.width ?? 0,
            L = O?.height ?? 0,
            T =
              "number" == typeof h
                ? h
                : { top: 0, right: 0, bottom: 0, left: 0, ...h },
            k = Array.isArray(p) ? p : [p],
            j = k.length > 0,
            D = { padding: T, boundary: k.filter(eG), altBoundary: j },
            {
              refs: F,
              floatingStyles: N,
              placement: H,
              isPositioned: M,
              middlewareData: z,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: o = [],
                  platform: i,
                  elements: { reference: l, floating: a } = {},
                  transform: s = !0,
                  whileElementsMounted: f,
                  open: u,
                } = e,
                [c, d] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = r.useState(o);
              ec(p, o) || h(o);
              let [g, m] = r.useState(null),
                [x, y] = r.useState(null),
                v = r.useCallback((e) => {
                  e !== A.current && ((A.current = e), m(e));
                }, []),
                w = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), y(e));
                }, []),
                b = l || g,
                R = a || x,
                A = r.useRef(null),
                C = r.useRef(null),
                P = r.useRef(c),
                O = null != f,
                E = eh(f),
                L = eh(i),
                T = eh(u),
                k = r.useCallback(() => {
                  if (!A.current || !C.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  L.current && (e.platform = L.current),
                    es(A.current, C.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== T.current };
                      S.current &&
                        !ec(P.current, t) &&
                        ((P.current = t),
                        ef.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, L, T]);
              eu(() => {
                !1 === u &&
                  P.current.isPositioned &&
                  ((P.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [u]);
              let S = r.useRef(!1);
              eu(
                () => (
                  (S.current = !0),
                  () => {
                    S.current = !1;
                  }
                ),
                []
              ),
                eu(() => {
                  if ((b && (A.current = b), R && (C.current = R), b && R)) {
                    if (E.current) return E.current(b, R, k);
                    k();
                  }
                }, [b, R, k, E, O]);
              let j = r.useMemo(
                  () => ({
                    reference: A,
                    floating: C,
                    setReference: v,
                    setFloating: w,
                  }),
                  [v, w]
                ),
                D = r.useMemo(() => ({ reference: b, floating: R }), [b, R]),
                F = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!D.floating) return e;
                  let t = ep(D.floating, c.x),
                    r = ep(D.floating, c.y);
                  return s
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ed(D.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, s, D.floating, c.x, c.y]);
              return r.useMemo(
                () => ({
                  ...c,
                  update: k,
                  refs: j,
                  elements: D,
                  floatingStyles: F,
                }),
                [c, k, j, D, F]
              );
            })({
              strategy: "fixed",
              placement: o + ("center" !== f ? "-" + f : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: a = !0,
                      ancestorResize: f = !0,
                      elementResize: u = "function" == typeof ResizeObserver,
                      layoutShift: c = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = r,
                    p = Y(e),
                    h = a || f ? [...(p ? V(p) : []), ...V(t)] : [];
                  h.forEach((e) => {
                    a && e.addEventListener("scroll", n, { passive: !0 }),
                      f && e.addEventListener("resize", n);
                  });
                  let g =
                      p && c
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = S(e);
                            function a() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function f(u, c) {
                                void 0 === u && (u = !1),
                                  void 0 === c && (c = 1),
                                  a();
                                let d = e.getBoundingClientRect(),
                                  { left: p, top: h, width: g, height: m } = d;
                                if ((u || t(), !g || !m)) return;
                                let x = s(h),
                                  y = s(o.clientWidth - (p + g)),
                                  v = {
                                    rootMargin:
                                      -x +
                                      "px " +
                                      -y +
                                      "px " +
                                      -s(o.clientHeight - (h + m)) +
                                      "px " +
                                      -s(p) +
                                      "px",
                                    threshold: l(0, i(1, c)) || 1,
                                  },
                                  w = !0;
                                function b(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== c) {
                                    if (!w) return f();
                                    r
                                      ? f(!1, r)
                                      : (n = setTimeout(() => {
                                          f(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== r ||
                                    el(d, e.getBoundingClientRect()) ||
                                    f(),
                                    (w = !1);
                                }
                                try {
                                  r = new IntersectionObserver(b, {
                                    ...v,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(b, v);
                                }
                                r.observe(e);
                              })(!0),
                              a
                            );
                          })(p, n)
                        : null,
                    m = -1,
                    x = null;
                  u &&
                    ((x = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        x &&
                        (x.unobserve(t),
                        cancelAnimationFrame(m),
                        (m = requestAnimationFrame(() => {
                          var e;
                          null == (e = x) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !d && x.observe(p),
                    x.observe(t));
                  let y = d ? K(e) : null;
                  return (
                    d &&
                      (function t() {
                        let r = K(e);
                        y && !el(y, r) && n(),
                          (y = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      h.forEach((e) => {
                        a && e.removeEventListener("scroll", n),
                          f && e.removeEventListener("resize", n);
                      }),
                        null == g || g(),
                        null == (e = x) || e.disconnect(),
                        (x = null),
                        d && cancelAnimationFrame(o);
                    }
                  );
                })(...e, { animationFrame: "always" === x }),
              elements: { reference: w.anchor },
              middleware: [
                em({ mainAxis: a + L, alignmentAxis: u }),
                d &&
                  ex({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === g ? ey() : void 0,
                    ...D,
                  }),
                d && ev({ ...D }),
                ew({
                  ...D,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      l = e.floating.style;
                    l.setProperty("--radix-popper-available-width", `${n}px`),
                      l.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      l.setProperty("--radix-popper-anchor-width", `${o}px`),
                      l.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                C && eR({ element: C, padding: c }),
                eY({ arrowWidth: E, arrowHeight: L }),
                m && eb({ strategy: "referenceHidden", ...D }),
              ],
            }),
            [B, W] = eq(H),
            $ = (0, eL.c)(y);
          (0, eT.N)(() => {
            M && $?.();
          }, [M, $]);
          let _ = z.arrow?.x,
            I = z.arrow?.y,
            X = z.arrow?.centerOffset !== 0,
            [G, q] = r.useState();
          return (
            (0, eT.N)(() => {
              b && q(window.getComputedStyle(b).zIndex);
            }, [b]),
            (0, eC.jsx)("div", {
              ref: F.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...N,
                transform: M ? N.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: G,
                "--radix-popper-transform-origin": [
                  z.transformOrigin?.x,
                  z.transformOrigin?.y,
                ].join(" "),
                ...(z.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, eC.jsx)(eW, {
                scope: n,
                placedSide: B,
                onArrowChange: P,
                arrowX: _,
                arrowY: I,
                shouldHideArrow: X,
                children: (0, eC.jsx)(eA.sG.div, {
                  "data-side": B,
                  "data-align": W,
                  ...v,
                  ref: A,
                  style: { ...v.style, animation: M ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      e_.displayName = eB;
      var eI = "PopperArrow",
        eV = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eX = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = e$(eI, n),
            i = eV[o.placedSide];
          return (0,
          eC.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, eC.jsx)(eP, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function eG(e) {
        return null !== e;
      }
      eX.displayName = eI;
      var eY = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: n, rects: r, middlewareData: o } = t,
            i = o.arrow?.centerOffset !== 0,
            l = i ? 0 : e.arrowWidth,
            a = i ? 0 : e.arrowHeight,
            [s, f] = eq(n),
            u = { start: "0%", center: "50%", end: "100%" }[f],
            c = (o.arrow?.x ?? 0) + l / 2,
            d = (o.arrow?.y ?? 0) + a / 2,
            p = "",
            h = "";
          return (
            "bottom" === s
              ? ((p = i ? u : `${c}px`), (h = `${-a}px`))
              : "top" === s
              ? ((p = i ? u : `${c}px`), (h = `${r.floating.height + a}px`))
              : "right" === s
              ? ((p = `${-a}px`), (h = i ? u : `${d}px`))
              : "left" === s &&
                ((p = `${r.floating.width + a}px`), (h = i ? u : `${d}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function eq(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var eU = eH,
        eZ = ez,
        eK = e_,
        eJ = eX;
    },
    24347: (e, t, n) => {
      n.d(t, { X: () => i });
      var r = n(55729),
        o = n(35896);
      function i(e) {
        let [t, n] = r.useState(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
  },
]);
//# sourceMappingURL=1291-f157bcd74a6327ef.js.map
