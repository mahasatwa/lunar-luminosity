(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5056, 5479, 7108],
  {
    2384: (e, t, r) => {
      "use strict";
      function n(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 45,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
        return (
          !!e && (e.length >= t || e.split(" ").some((e) => e.length >= r))
        );
      }
      r.d(t, { S: () => n });
    },
    18607: () => {},
    27780: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => er,
        VY: () => ea,
        ZL: () => ee,
        bL: () => Q,
        bm: () => ei,
        hE: () => en,
        hJ: () => et,
        l9: () => X,
      });
      var n = r(55729),
        a = r(25269),
        i = r(40041),
        s = r(99829),
        l = r(67913),
        o = r(16697),
        d = r(27555),
        c = r(41679),
        u = r(61486),
        p = r(78749),
        f = r(19639),
        h = r(74249),
        m = r(1713),
        _ = r(20184),
        g = r(97628),
        b = r(6029),
        v = "Dialog",
        [x, j] = (0, s.A)(v),
        [y, N] = x(v),
        k = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: a,
              defaultOpen: i,
              onOpenChange: s,
              modal: d = !0,
            } = e,
            c = n.useRef(null),
            u = n.useRef(null),
            [p, f] = (0, o.i)({
              prop: a,
              defaultProp: i ?? !1,
              onChange: s,
              caller: v,
            });
          return (0, b.jsx)(y, {
            scope: t,
            triggerRef: c,
            contentRef: u,
            contentId: (0, l.B)(),
            titleId: (0, l.B)(),
            descriptionId: (0, l.B)(),
            open: p,
            onOpenChange: f,
            onOpenToggle: n.useCallback(() => f((e) => !e), [f]),
            modal: d,
            children: r,
          });
        };
      k.displayName = v;
      var w = "DialogTrigger",
        D = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            s = N(w, r),
            l = (0, i.s)(t, s.triggerRef);
          return (0, b.jsx)(f.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": V(s.open),
            ...n,
            ref: l,
            onClick: (0, a.m)(e.onClick, s.onOpenToggle),
          });
        });
      D.displayName = w;
      var C = "DialogPortal",
        [R, I] = x(C, { forceMount: void 0 }),
        E = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: a,
              container: i,
            } = e,
            s = N(C, t);
          return (0, b.jsx)(R, {
            scope: t,
            forceMount: r,
            children: n.Children.map(a, (e) =>
              (0, b.jsx)(p.C, {
                present: r || s.open,
                children: (0, b.jsx)(u.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      E.displayName = C;
      var O = "DialogOverlay",
        A = n.forwardRef((e, t) => {
          let r = I(O, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...a } = e,
            i = N(O, e.__scopeDialog);
          return i.modal
            ? (0, b.jsx)(p.C, {
                present: n || i.open,
                children: (0, b.jsx)(L, { ...a, ref: t }),
              })
            : null;
        });
      A.displayName = O;
      var F = (0, g.TL)("DialogOverlay.RemoveScroll"),
        L = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = N(O, r);
          return (0, b.jsx)(m.A, {
            as: F,
            allowPinchZoom: !0,
            shards: [a.contentRef],
            children: (0, b.jsx)(f.sG.div, {
              "data-state": V(a.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        P = "DialogContent",
        T = n.forwardRef((e, t) => {
          let r = I(P, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...a } = e,
            i = N(P, e.__scopeDialog);
          return (0, b.jsx)(p.C, {
            present: n || i.open,
            children: i.modal
              ? (0, b.jsx)(W, { ...a, ref: t })
              : (0, b.jsx)(M, { ...a, ref: t }),
          });
        });
      T.displayName = P;
      var W = n.forwardRef((e, t) => {
          let r = N(P, e.__scopeDialog),
            s = n.useRef(null),
            l = (0, i.s)(t, r.contentRef, s);
          return (
            n.useEffect(() => {
              let e = s.current;
              if (e) return (0, _.Eq)(e);
            }, []),
            (0, b.jsx)(S, {
              ...e,
              ref: l,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, a.m)(e.onCloseAutoFocus, (e) => {
                e.preventDefault(), r.triggerRef.current?.focus();
              }),
              onPointerDownOutside: (0, a.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || r) && e.preventDefault();
              }),
              onFocusOutside: (0, a.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        M = n.forwardRef((e, t) => {
          let r = N(P, e.__scopeDialog),
            a = n.useRef(!1),
            i = n.useRef(!1);
          return (0, b.jsx)(S, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (a.current || r.triggerRef.current?.focus(),
                  t.preventDefault()),
                (a.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((a.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let n = t.target;
              r.triggerRef.current?.contains(n) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        S = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: a,
              onOpenAutoFocus: s,
              onCloseAutoFocus: l,
              ...o
            } = e,
            u = N(P, r),
            p = n.useRef(null),
            f = (0, i.s)(t, p);
          return (
            (0, h.Oh)(),
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(c.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: a,
                  onMountAutoFocus: s,
                  onUnmountAutoFocus: l,
                  children: (0, b.jsx)(d.qW, {
                    role: "dialog",
                    id: u.contentId,
                    "aria-describedby": u.descriptionId,
                    "aria-labelledby": u.titleId,
                    "data-state": V(u.open),
                    ...o,
                    ref: f,
                    onDismiss: () => u.onOpenChange(!1),
                  }),
                }),
                (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsx)(Y, { titleId: u.titleId }),
                    (0, b.jsx)(z, {
                      contentRef: p,
                      descriptionId: u.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        B = "DialogTitle",
        G = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = N(B, r);
          return (0, b.jsx)(f.sG.h2, { id: a.titleId, ...n, ref: t });
        });
      G.displayName = B;
      var $ = "DialogDescription",
        q = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = N($, r);
          return (0, b.jsx)(f.sG.p, { id: a.descriptionId, ...n, ref: t });
        });
      q.displayName = $;
      var U = "DialogClose",
        Z = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            i = N(U, r);
          return (0, b.jsx)(f.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, a.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function V(e) {
        return e ? "open" : "closed";
      }
      Z.displayName = U;
      var H = "DialogTitleWarning",
        [J, K] = (0, s.q)(H, {
          contentName: P,
          titleName: B,
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
            a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
          return (
            n.useEffect(() => {
              let r = e.current?.getAttribute("aria-describedby");
              t && r && !document.getElementById(t) && console.warn(a);
            }, [a, e, t]),
            null
          );
        },
        Q = k,
        X = D,
        ee = E,
        et = A,
        er = T,
        en = G,
        ea = q,
        ei = Z;
    },
    41272: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => a });
      var n = r(6029);
      let a = (0, r(55729).forwardRef)((e, t) => {
        let {
          href: r,
          target: a,
          children: i,
          className: s,
          rel: l,
          onClick: o,
          editAttributes: d,
          dataLayer: c,
          ...u
        } = e;
        return (
          a || (a = "_blank"),
          ((null == r ? void 0 : r.startsWith("/")) ||
            (null == r ? void 0 : r.includes(".hbs.edu"))) &&
            (a = r.includes("webassets.hbs.edu") ? "_blank" : "_self"),
          (0, n.jsx)("a", {
            ...d,
            href: r,
            target: a,
            className: s,
            rel: l,
            ...u,
            ref: t,
            onClick: (e) => {
              if (
                (null == c ? void 0 : c.event_data.explore_search) &&
                !c.event_data.explore_search_info_box_clicked
              ) {
                let e = "string" == typeof i ? i.trim() : "";
                c.event_data.explore_search_info_box_clicked = e;
              }
              o && o(e);
            },
            children: i,
          })
        );
      });
    },
    44292: (e, t, r) => {
      "use strict";
      function n(e) {
        if (!e) return !1;
        try {
          return !new URL(e).host.endsWith("hbs.edu");
        } catch (e) {
          return !1;
        }
      }
      r.d(t, { i: () => n });
    },
    61617: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { MediaTopper: () => o });
      var n = r(6029);
      r(18607);
      var a = r(50212),
        i = r(80422),
        s = r(75287),
        l = r(2384);
      function o(e) {
        let {
          title: t,
          hiddenTitle: r,
          assets: o,
          subtitle: d,
          cta: c,
          isSeamless: u = !1,
          theme: p = "light",
          editAttributes: f,
        } = e;
        if (!t) return null;
        let h = (0, a.A)(
            "hbs-media-topper hbs-topper",
            3 === o.length && "hbs-media-topper--3",
            u || "hbs-media-topper--w-background",
            !d && "hbs-media-topper--no-subtitle"
          ),
          m = (0, a.A)(
            "hbs-media-topper__title",
            (0, l.S)(t, 20, 18) && "hbs-media-topper__title--long"
          ),
          _ = d || c,
          g = r ? "div" : "h1";
        return (0, n.jsx)("div", {
          className: "hbs-media-topper-wrapper hbs-topper-wrapper",
          "data-theme": p,
          "data-region": "ct__page__media",
          children: (0, n.jsxs)("div", {
            className: h,
            children: [
              (0, n.jsxs)("div", {
                className: m,
                children: [
                  r &&
                    (0, n.jsx)("h1", {
                      className: "hbs-global-visually-hidden",
                      children: r,
                    }),
                  t &&
                    (0, n.jsx)(g, {
                      ...(null == f ? void 0 : f.title),
                      children: t,
                    }),
                ],
              }),
              _ &&
                (0, n.jsxs)("div", {
                  className: "hbs-media-topper__child",
                  children: [
                    d &&
                      (0, n.jsx)("div", {
                        ...(null == f ? void 0 : f.subtitle),
                        className: "hbs-media-topper__subtitle",
                        children: d,
                      }),
                    c &&
                      (0, n.jsx)("div", {
                        className: "hbs-media-topper__cta",
                        children: (0, n.jsx)(i.l, { ...c, isSmall: !0 }),
                      }),
                  ],
                }),
              (0, n.jsx)("div", {
                className: "hbs-media-topper__media",
                children: o.map(
                  (e, t) => (
                    (null == e ? void 0 : e.image) &&
                      ((e.image.loading = "eager"),
                      (e.image.aspectRatio =
                        1 === o.length
                          ? "16/9"
                          : 3 === o.length && 1 !== t
                          ? "3/4"
                          : "3/2")),
                    (0, n.jsx)(
                      "div",
                      {
                        className: "hbs-media-topper__media-asset",
                        children: (0, n.jsx)(s.Z, { ...e }),
                      },
                      t
                    )
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    65944: () => {},
    80422: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => u });
      var n = r(6029);
      r(65944);
      var a = r(55729),
        i = r(50212),
        s = r(24999),
        l = r(41272);
      let o = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"];
      var d = r(44292),
        c = r(21009);
      let u = (0, a.forwardRef)((e, t) => {
        let r,
          a,
          u,
          {
            children: p,
            className: f,
            href: h,
            onClick: m,
            dataLayer: _,
            type: g = "link",
            isSmall: b,
            isNested: v,
            icon: x,
            hideIcon: j,
            "aria-label": y,
            "aria-selected": N,
            "aria-describedby": k,
            id: w,
            tabIndex: D,
            editAttributes: C,
          } = e;
        h && (r = (0, d.i)(h)),
          !x &&
            h &&
            (x = !(function (e) {
              let t;
              if (!e) return !1;
              try {
                t = new URL(e).pathname;
              } catch (r) {
                t = e;
              }
              return o.some((e) => t.endsWith(e));
            })(h)
              ? "arrow"
              : "download");
        let { pushDataLayer: R } = (0, c.v)(),
          I = (0, i.A)(
            "hbs-cta-link",
            b && "hbs-cta-link--small",
            "hbs-cta-link--".concat(g),
            v ? "hbs-cta-link--nested" : "",
            f
          ),
          E = (0, i.A)(
            "hbs-cta-link__icon",
            "hbs-cta-link__icon--".concat(
              (null == x ? void 0 : x.toLowerCase()) || ""
            ),
            r && "hbs-cta-link__icon--external"
          );
        if ("string" == typeof p) {
          let e = p.trim().split(" ");
          (a = e.pop()), (u = e.join(" "));
        }
        let O = (0, n.jsxs)("span", {
            className: "hbs-cta-link__text-nowrap",
            children: [
              (0, n.jsx)("span", {
                className: "hbs-cta-link__text",
                children: p,
              }),
              !j && x && (0, n.jsx)(s.I, { name: x, className: E }),
            ],
          }),
          A = {
            className: I,
            ref: t,
            id: w,
            "aria-selected": N,
            "aria-describedby": k,
            "aria-label": y,
            tabIndex: D,
          };
        if (m)
          return (
            _ &&
              window.addEventListener("click", () => {
                R(_);
              }),
            (0, n.jsx)("button", { ...C, ...A, onClick: m, children: O })
          );
        if (
          "string" != typeof p ||
          "primary-button" === g ||
          "secondary-button" === g
        ) {
          let e;
          return (
            _ &&
              (e = () => {
                let e = "string" == typeof p ? p.trim() : "";
                (null == _ ? void 0 : _.event_data) &&
                  _.event.includes("program_finder") &&
                  ((_.event_data.program_action = _.event_data.program_action
                    ? _.event_data.program_action
                    : "program cta click"),
                  (_.event_data.program_name = y)),
                  _.event_data.explore_search &&
                    (_.event_data.explore_search_info_box_clicked = e),
                  "info_box_item_click" === _.event &&
                    ((_.event_data.infobox_item_link_text = e),
                    (_.event_data.infobox_item_url = h)),
                  R(_);
              }),
            (0, n.jsx)(l.N, {
              editAttributes: C,
              ...A,
              href: h,
              onClick: e,
              dataLayer: _,
              children: O,
            })
          );
        }
        let F = (0, n.jsxs)("span", {
          className: "hbs-cta-link__text",
          children: [
            u,
            " ",
            (0, n.jsxs)("span", {
              className: "hbs-cta-link__text-last",
              children: [
                a,
                !j && x && (0, n.jsx)(s.I, { name: x, className: E }),
              ],
            }),
          ],
        });
        return v
          ? (0, n.jsx)("span", {
              ...C,
              id: w,
              "aria-describedby": k,
              className: I,
              children: F,
            })
          : (0, n.jsx)(l.N, {
              editAttributes: C,
              ...A,
              href: h,
              dataLayer: _,
              "aria-label": "string" == typeof p ? y || p : void 0,
              children: F,
            });
      });
    },
  },
]);
//# sourceMappingURL=7108.077bb8ad6b4825d1.js.map
