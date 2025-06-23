(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5559],
  {
    3050: (e, t, n) => {
      "use strict";
      var r,
        o,
        i = n(8066);
      (t.nA = void 0),
        (function (e) {
          (e.DOCUMENT = "document"),
            (e.PARAGRAPH = "paragraph"),
            (e.HEADING_1 = "heading-1"),
            (e.HEADING_2 = "heading-2"),
            (e.HEADING_3 = "heading-3"),
            (e.HEADING_4 = "heading-4"),
            (e.HEADING_5 = "heading-5"),
            (e.HEADING_6 = "heading-6"),
            (e.OL_LIST = "ordered-list"),
            (e.UL_LIST = "unordered-list"),
            (e.LIST_ITEM = "list-item"),
            (e.HR = "hr"),
            (e.QUOTE = "blockquote"),
            (e.EMBEDDED_ENTRY = "embedded-entry-block"),
            (e.EMBEDDED_ASSET = "embedded-asset-block"),
            (e.EMBEDDED_RESOURCE = "embedded-resource-block"),
            (e.TABLE = "table"),
            (e.TABLE_ROW = "table-row"),
            (e.TABLE_CELL = "table-cell"),
            (e.TABLE_HEADER_CELL = "table-header-cell");
        })(t.nA || (t.nA = {})),
        (t.XD = void 0),
        (function (e) {
          (e.ASSET_HYPERLINK = "asset-hyperlink"),
            (e.EMBEDDED_ENTRY = "embedded-entry-inline"),
            (e.EMBEDDED_RESOURCE = "embedded-resource-inline"),
            (e.ENTRY_HYPERLINK = "entry-hyperlink"),
            (e.HYPERLINK = "hyperlink"),
            (e.RESOURCE_HYPERLINK = "resource-hyperlink");
        })(t.XD || (t.XD = {})),
        (t.j7 = void 0),
        (function (e) {
          (e.BOLD = "bold"),
            (e.ITALIC = "italic"),
            (e.UNDERLINE = "underline"),
            (e.CODE = "code"),
            (e.SUPERSCRIPT = "superscript"),
            (e.SUBSCRIPT = "subscript"),
            (e.STRIKETHROUGH = "strikethrough");
        })(t.j7 || (t.j7 = {}));
      var a = function (e, t) {
        return (a =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        a(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      function s(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
      var c = [
          t.nA.PARAGRAPH,
          t.nA.HEADING_1,
          t.nA.HEADING_2,
          t.nA.HEADING_3,
          t.nA.HEADING_4,
          t.nA.HEADING_5,
          t.nA.HEADING_6,
          t.nA.OL_LIST,
          t.nA.UL_LIST,
          t.nA.HR,
          t.nA.QUOTE,
          t.nA.EMBEDDED_ENTRY,
          t.nA.EMBEDDED_ASSET,
          t.nA.EMBEDDED_RESOURCE,
          t.nA.TABLE,
        ],
        l = [
          t.nA.PARAGRAPH,
          t.nA.HEADING_1,
          t.nA.HEADING_2,
          t.nA.HEADING_3,
          t.nA.HEADING_4,
          t.nA.HEADING_5,
          t.nA.HEADING_6,
          t.nA.OL_LIST,
          t.nA.UL_LIST,
          t.nA.HR,
          t.nA.QUOTE,
          t.nA.EMBEDDED_ENTRY,
          t.nA.EMBEDDED_ASSET,
          t.nA.EMBEDDED_RESOURCE,
        ],
        d =
          (t.nA.TABLE,
          t.nA.TABLE_ROW,
          t.nA.TABLE_CELL,
          t.nA.TABLE_HEADER_CELL,
          t.nA.HR,
          t.nA.EMBEDDED_ENTRY,
          t.nA.EMBEDDED_ASSET,
          t.nA.EMBEDDED_RESOURCE,
          ((r = {})[t.nA.OL_LIST] = [t.nA.LIST_ITEM]),
          (r[t.nA.UL_LIST] = [t.nA.LIST_ITEM]),
          (r[t.nA.LIST_ITEM] = l),
          (r[t.nA.QUOTE] = [t.nA.PARAGRAPH]),
          (r[t.nA.TABLE] = [t.nA.TABLE_ROW]),
          (r[t.nA.TABLE_ROW] = [t.nA.TABLE_CELL, t.nA.TABLE_HEADER_CELL]),
          (r[t.nA.TABLE_CELL] = [t.nA.PARAGRAPH, t.nA.UL_LIST, t.nA.OL_LIST]),
          (r[t.nA.TABLE_HEADER_CELL] = [t.nA.PARAGRAPH]),
          r),
        f = [
          t.nA.HEADING_1,
          t.nA.HEADING_2,
          t.nA.HEADING_3,
          t.nA.HEADING_4,
          t.nA.HEADING_5,
          t.nA.HEADING_6,
        ];
      function p(e, t) {
        for (var n = 0, r = Object.keys(e); n < r.length; n++)
          if (t === e[r[n]]) return !0;
        return !1;
      }
      s([t.nA.PARAGRAPH], f, !0),
        t.nA.DOCUMENT,
        t.nA.PARAGRAPH,
        t.nA.HEADING_1,
        t.nA.HEADING_2,
        t.nA.HEADING_3,
        t.nA.HEADING_4,
        t.nA.HEADING_5,
        t.nA.HEADING_6,
        t.nA.OL_LIST,
        t.nA.UL_LIST,
        t.nA.LIST_ITEM,
        t.nA.HR,
        t.nA.QUOTE,
        t.nA.EMBEDDED_ENTRY,
        t.nA.EMBEDDED_ASSET,
        t.XD.HYPERLINK,
        t.XD.ENTRY_HYPERLINK,
        t.XD.ASSET_HYPERLINK,
        t.XD.EMBEDDED_ENTRY,
        t.j7.BOLD,
        t.j7.CODE,
        t.j7.ITALIC,
        t.j7.UNDERLINE,
        t.nA.DOCUMENT,
        t.nA.PARAGRAPH;
      var E = Object.freeze({
          __proto__: null,
          isBlock: function (e) {
            return p(t.nA, e.nodeType);
          },
          isInline: function (e) {
            return p(t.XD, e.nodeType);
          },
          isText: function (e) {
            return "text" === e.nodeType;
          },
        }),
        h = function (e) {
          var t = e.path,
            n = e.property,
            r = e.typeName,
            o = e.value;
          return {
            details: 'The type of "'
              .concat(n, '" is incorrect, expected type: ')
              .concat(r),
            name: "type",
            path: t.toArray(),
            type: r,
            value: o,
          };
        },
        v = function (e) {
          var t = e.min,
            n = e.value;
          return {
            name: "size",
            min: t,
            path: e.path.toArray(),
            details: "Size must be at least ".concat(t),
            value: n,
          };
        },
        A = function (e) {
          var t = e.max,
            n = e.value;
          return {
            name: "size",
            max: t,
            path: e.path.toArray(),
            details: "Size must be at most ".concat(t),
            value: n,
          };
        },
        L = function (e) {
          var t = e.expected,
            n = e.value,
            r = e.path;
          return {
            details: "Value must be one of expected values",
            name: "in",
            expected: s([], t, !0).sort(),
            path: r.toArray(),
            value: n,
          };
        },
        _ = function (e) {
          var t = e.property,
            n = e.path;
          return {
            details: 'The property "'.concat(t, '" is not expected'),
            name: "unexpected",
            path: n.toArray(),
          };
        },
        g = function (e) {
          var t = e.property,
            n = e.path;
          return {
            details: 'The property "'.concat(t, '" is required here'),
            name: "required",
            path: n.toArray(),
          };
        },
        m = (function () {
          function e(e, t) {
            var n = this;
            (this.obj = e),
              (this.path = t),
              (this._errors = []),
              (this.catch = function () {
                for (var e, t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                (e = n._errors).push.apply(e, t);
              }),
              (this.exists = function (e) {
                return (
                  e in n.obj ||
                  (n.catch(g({ property: e, path: n.path.of(e) })), !1)
                );
              }),
              (this.object = function (e) {
                var t,
                  r = e ? n.obj[e] : n.obj;
                if (e && !n.exists(e)) return !1;
                if (i(r)) return !0;
                var o = e ? n.path.of(e) : n.path,
                  a =
                    null !== (t = null != e ? e : n.path.last()) && void 0 !== t
                      ? t
                      : "value";
                return (
                  n.catch(
                    h({ typeName: "Object", property: a, path: o, value: r })
                  ),
                  !1
                );
              }),
              (this.string = function (e) {
                var t = n.obj[e];
                return (
                  (!e || !!n.exists(e)) &&
                  ("string" == typeof t ||
                    (n.catch(
                      h({
                        typeName: "String",
                        property: e,
                        path: n.path.of(e),
                        value: t,
                      })
                    ),
                    !1))
                );
              }),
              (this.number = function (e, t) {
                var r = n.obj[e];
                return (
                  (!!t && !(e in n.obj)) ||
                  (!!n.exists(e) &&
                    (!("number" != typeof r || Number.isNaN(r)) ||
                      (n.catch(
                        h({
                          typeName: "Number",
                          property: e,
                          path: n.path.of(e),
                          value: r,
                        })
                      ),
                      !1)))
                );
              }),
              (this.array = function (e) {
                var t = n.obj[e];
                return (
                  (!e || !!n.exists(e)) &&
                  (!!Array.isArray(t) ||
                    (n.catch(
                      h({
                        typeName: "Array",
                        property: e,
                        path: n.path.of(e),
                        value: t,
                      })
                    ),
                    !1))
                );
              }),
              (this.enum = function (e, t) {
                var r = n.obj[e];
                return (
                  !!("string" == typeof r && t.includes(r)) ||
                  (n.catch(L({ expected: t, value: r, path: n.path.of(e) })),
                  !1)
                );
              }),
              (this.empty = function (e) {
                if (!n.array(e)) return !1;
                var t = n.obj[e];
                return (
                  0 === t.length ||
                  (n.catch(A({ max: 0, value: t, path: n.path.of(e) })), !1)
                );
              }),
              (this.minLength = function (e, t) {
                if (!n.array(e)) return !1;
                var r = n.obj[e];
                return (
                  r.length >= t ||
                  (n.catch(v({ min: t, value: r, path: n.path.of(e) })), !1)
                );
              }),
              (this.noAdditionalProperties = function (e) {
                var t = Object.keys(n.obj)
                  .sort()
                  .filter(function (t) {
                    return !e.includes(t);
                  });
                return (
                  t.forEach(function (e) {
                    return n.catch(_({ property: e, path: n.path.of(e) }));
                  }),
                  0 === t.length
                );
              }),
              (this.each = function (e, t) {
                if (n.array(e)) {
                  var r = n.obj[e],
                    o = !1;
                  r.forEach(function (r, i) {
                    if (!o) {
                      var a = t(r, n.path.of(e).of(i));
                      a.length > 0 && (o = !0), n.catch.apply(n, a);
                    }
                  });
                }
              });
          }
          return (
            Object.defineProperty(e.prototype, "errors", {
              get: function () {
                var e = this,
                  t = function (e) {
                    return JSON.stringify({ details: e.details, path: e.path });
                  };
                return this._errors.filter(function (n, r) {
                  return (
                    e._errors.findIndex(function (e) {
                      return t(n) === t(e);
                    }) === r
                  );
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        y = [],
        D = (function () {
          function e(e, t) {
            (this.contentRule = e), (this.validateData = t);
          }
          return (
            (e.prototype.assert = function (e, t) {
              var n,
                r,
                o = new m(e, t);
              if (!o.object()) return o.errors;
              o.noAdditionalProperties(["nodeType", "data", "content"]);
              var i = Array.isArray(this.contentRule)
                  ? { nodeTypes: this.contentRule }
                  : this.contentRule(e, t),
                a = i.nodeTypes,
                u = i.min,
                s = void 0 === u ? 0 : u;
              if (0 === a.length && s > 0)
                throw Error(
                  "Invalid content rule. Cannot have enforce a 'min' of ".concat(
                    s,
                    " with no nodeTypes"
                  )
                );
              if (
                (o.minLength("content", s),
                0 === a.length
                  ? o.empty("content")
                  : o.each("content", function (e, t) {
                      var n = new m(e, t);
                      return n.object() && n.enum("nodeType", a), n.errors;
                    }),
                o.object("data"))
              ) {
                var c =
                  null !==
                    (r =
                      null === (n = this.validateData) || void 0 === n
                        ? void 0
                        : n.call(this, e.data, t.of("data"))) && void 0 !== r
                    ? r
                    : [];
                o.catch.apply(o, c);
              }
              return o.errors;
            }),
            e
          );
        })(),
        S = (function (e) {
          function t(t, n) {
            var r =
              e.call(this, n, function (e, t) {
                return r.assertLink(e, t);
              }) || this;
            return (
              (r.linkType = t),
              (r.assertLink = function (e, t) {
                var n = new m(e, t);
                if (n.object("target")) {
                  var o = new m(e.target.sys, t.of("target").of("sys"));
                  o.object() &&
                    (o.enum("type", [r.type]),
                    o.enum("linkType", [r.linkType]),
                    "Link" === r.type
                      ? (o.string("id"),
                        o.noAdditionalProperties(["type", "linkType", "id"]))
                      : "ResourceLink" === r.type &&
                        (o.string("urn"),
                        o.noAdditionalProperties(["type", "linkType", "urn"]))),
                    n.catch.apply(n, o.errors);
                }
                return n.noAdditionalProperties(["target"]), n.errors;
              }),
              (r.type = r.linkType.startsWith("Contentful:")
                ? "ResourceLink"
                : "Link"),
              r
            );
          }
          return u(t, e), t;
        })(D),
        O = (function (e) {
          function t() {
            var t =
              e.call(this, ["text"], function (e, n) {
                return t.assertLink(e, n);
              }) || this;
            return (
              (t.assertLink = function (e, t) {
                var n = new m(e, t);
                return (
                  n.string("uri"), n.noAdditionalProperties(["uri"]), n.errors
                );
              }),
              t
            );
          }
          return u(t, e), t;
        })(D),
        T = function (e, t) {
          return new D(e, t);
        },
        C = function (e, t) {
          return new S(e, t);
        },
        b = T(s(s([], Object.values(t.XD), !0), ["text"], !1).sort()),
        R = T([t.nA.LIST_ITEM]),
        I = C("Entry", y),
        N = T(
          function () {
            return { nodeTypes: [t.nA.PARAGRAPH], min: 1 };
          },
          function (e, t) {
            var n = new m(e, t);
            return (
              n.noAdditionalProperties(["colspan", "rowspan"]),
              n.number("colspan", !0),
              n.number("rowspan", !0),
              n.errors
            );
          }
        );
      ((o = {})[t.nA.DOCUMENT] = T(c)),
        (o[t.nA.PARAGRAPH] = b),
        (o[t.nA.HEADING_1] = b),
        (o[t.nA.HEADING_2] = b),
        (o[t.nA.HEADING_3] = b),
        (o[t.nA.HEADING_4] = b),
        (o[t.nA.HEADING_5] = b),
        (o[t.nA.HEADING_6] = b),
        (o[t.nA.QUOTE] = T(d[t.nA.QUOTE])),
        (o[t.nA.EMBEDDED_ENTRY] = I),
        (o[t.nA.EMBEDDED_ASSET] = C("Asset", y)),
        (o[t.nA.EMBEDDED_RESOURCE] = C("Contentful:Entry", y)),
        (o[t.nA.HR] = T(y)),
        (o[t.nA.OL_LIST] = R),
        (o[t.nA.UL_LIST] = R),
        (o[t.nA.LIST_ITEM] = T(s([], l, !0).sort())),
        (o[t.nA.TABLE] = T(function () {
          return { nodeTypes: [t.nA.TABLE_ROW], min: 1 };
        })),
        (o[t.nA.TABLE_ROW] = T(function () {
          return {
            nodeTypes: [t.nA.TABLE_CELL, t.nA.TABLE_HEADER_CELL],
            min: 1,
          };
        })),
        (o[t.nA.TABLE_CELL] = N),
        (o[t.nA.TABLE_HEADER_CELL] = N),
        (o[t.XD.HYPERLINK] = new O()),
        (o[t.XD.EMBEDDED_ENTRY] = I),
        (o[t.XD.EMBEDDED_RESOURCE] = C("Contentful:Entry", y)),
        (o[t.XD.ENTRY_HYPERLINK] = C("Entry", ["text"])),
        (o[t.XD.ASSET_HYPERLINK] = C("Asset", ["text"])),
        (o[t.XD.RESOURCE_HYPERLINK] = C("Contentful:Entry", ["text"])),
        (t._$ = E);
    },
    8066: (e) => {
      "use strict";
      e.exports = (e) => {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      };
    },
    23059: (e, t, n) => {
      "use strict";
      n.d(t, { Nn: () => tV, eB: () => tX, v9: () => tz });
      var r = n(55729),
        o = "(prefers-reduced-motion: reduce)";
      function i(e) {
        e.length = 0;
      }
      function a(e, t, n) {
        return Array.prototype.slice.call(e, t, n);
      }
      function u(e) {
        return e.bind.apply(e, [null].concat(a(arguments, 1)));
      }
      var s = setTimeout,
        c = function () {};
      function l(e) {
        return requestAnimationFrame(e);
      }
      function d(e, t) {
        return typeof t === e;
      }
      function f(e) {
        return null !== e && d("object", e);
      }
      var p = Array.isArray,
        E = u(d, "function"),
        h = u(d, "string"),
        v = u(d, "undefined");
      function A(e) {
        try {
          return (
            e instanceof (e.ownerDocument.defaultView || window).HTMLElement
          );
        } catch (e) {
          return !1;
        }
      }
      function L(e) {
        return p(e) ? e : [e];
      }
      function _(e, t) {
        L(e).forEach(t);
      }
      function g(e, t) {
        return e.indexOf(t) > -1;
      }
      function m(e, t) {
        return e.push.apply(e, L(t)), e;
      }
      function y(e, t, n) {
        e &&
          _(t, function (t) {
            t && e.classList[n ? "add" : "remove"](t);
          });
      }
      function D(e, t) {
        y(e, h(t) ? t.split(" ") : t, !0);
      }
      function S(e, t) {
        _(t, e.appendChild.bind(e));
      }
      function O(e, t) {
        _(e, function (e) {
          var n = (t || e).parentNode;
          n && n.insertBefore(e, t);
        });
      }
      function T(e, t) {
        return A(e) && (e.msMatchesSelector || e.matches).call(e, t);
      }
      function C(e, t) {
        var n = e ? a(e.children) : [];
        return t
          ? n.filter(function (e) {
              return T(e, t);
            })
          : n;
      }
      function b(e, t) {
        return t ? C(e, t)[0] : e.firstElementChild;
      }
      var R = Object.keys;
      function I(e, t, n) {
        return (
          e &&
            (n ? R(e).reverse() : R(e)).forEach(function (n) {
              "__proto__" !== n && t(e[n], n);
            }),
          e
        );
      }
      function N(e) {
        return (
          a(arguments, 1).forEach(function (t) {
            I(t, function (n, r) {
              e[r] = t[r];
            });
          }),
          e
        );
      }
      function B(e) {
        return (
          a(arguments, 1).forEach(function (t) {
            I(t, function (t, n) {
              p(t)
                ? (e[n] = t.slice())
                : f(t)
                ? (e[n] = B({}, f(e[n]) ? e[n] : {}, t))
                : (e[n] = t);
            });
          }),
          e
        );
      }
      function P(e, t) {
        _(t || R(e), function (t) {
          delete e[t];
        });
      }
      function H(e, t) {
        _(e, function (e) {
          _(t, function (t) {
            e && e.removeAttribute(t);
          });
        });
      }
      function w(e, t, n) {
        f(t)
          ? I(t, function (t, n) {
              w(e, n, t);
            })
          : _(e, function (e) {
              null === n || "" === n ? H(e, t) : e.setAttribute(t, String(n));
            });
      }
      function x(e, t, n) {
        var r = document.createElement(e);
        return t && (h(t) ? D(r, t) : w(r, t)), n && S(n, r), r;
      }
      function M(e, t, n) {
        if (v(n)) return getComputedStyle(e)[t];
        null !== n && (e.style[t] = "" + n);
      }
      function K(e, t) {
        M(e, "display", t);
      }
      function j(e) {
        (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
      }
      function k(e, t) {
        return e.getAttribute(t);
      }
      function G(e, t) {
        return e && e.classList.contains(t);
      }
      function U(e) {
        return e.getBoundingClientRect();
      }
      function Y(e) {
        _(e, function (e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        });
      }
      function F(e) {
        return b(new DOMParser().parseFromString(e, "text/html").body);
      }
      function W(e, t) {
        e.preventDefault(),
          t && (e.stopPropagation(), e.stopImmediatePropagation());
      }
      function z(e, t) {
        return e && e.querySelector(t);
      }
      function X(e, t) {
        return t ? a(e.querySelectorAll(t)) : [];
      }
      function V(e, t) {
        y(e, t, !1);
      }
      function q(e) {
        return e.timeStamp;
      }
      function Q(e) {
        return h(e) ? e : e ? e + "px" : "";
      }
      var $ = "splide",
        Z = "data-" + $;
      function J(e, t) {
        if (!e) throw Error("[" + $ + "] " + (t || ""));
      }
      var ee = Math.min,
        et = Math.max,
        en = Math.floor,
        er = Math.ceil,
        eo = Math.abs;
      function ei(e, t, n, r) {
        var o = ee(t, n),
          i = et(t, n);
        return r ? o < e && e < i : o <= e && e <= i;
      }
      function ea(e, t, n) {
        var r = ee(t, n),
          o = et(t, n);
        return ee(et(r, e), o);
      }
      function eu(e) {
        return +(e > 0) - +(e < 0);
      }
      function es(e, t) {
        return (
          _(t, function (t) {
            e = e.replace("%s", "" + t);
          }),
          e
        );
      }
      function ec(e) {
        return e < 10 ? "0" + e : "" + e;
      }
      var el = {};
      function ed() {
        var e = [];
        function t(e, t, n) {
          _(e, function (e) {
            e &&
              _(t, function (t) {
                t.split(" ").forEach(function (t) {
                  var r = t.split(".");
                  n(e, r[0], r[1]);
                });
              });
          });
        }
        return {
          bind: function (n, r, o, i) {
            t(n, r, function (t, n, r) {
              var a = "addEventListener" in t,
                u = a
                  ? t.removeEventListener.bind(t, n, o, i)
                  : t.removeListener.bind(t, o);
              a ? t.addEventListener(n, o, i) : t.addListener(o),
                e.push([t, n, r, o, u]);
            });
          },
          unbind: function (n, r, o) {
            t(n, r, function (t, n, r) {
              e = e.filter(function (e) {
                return (
                  e[0] !== t ||
                  e[1] !== n ||
                  e[2] !== r ||
                  (!!o && e[3] !== o) ||
                  (e[4](), !1)
                );
              });
            });
          },
          dispatch: function (e, t, n) {
            var r;
            return (
              "function" == typeof CustomEvent
                ? (r = new CustomEvent(t, { bubbles: !0, detail: n }))
                : (r = document.createEvent("CustomEvent")).initCustomEvent(
                    t,
                    !0,
                    !1,
                    n
                  ),
              e.dispatchEvent(r),
              r
            );
          },
          destroy: function () {
            e.forEach(function (e) {
              e[4]();
            }),
              i(e);
          },
        };
      }
      var ef = "mounted",
        ep = "ready",
        eE = "move",
        eh = "moved",
        ev = "click",
        eA = "active",
        eL = "inactive",
        e_ = "visible",
        eg = "hidden",
        em = "refresh",
        ey = "updated",
        eD = "resize",
        eS = "resized",
        eO = "drag",
        eT = "dragging",
        eC = "dragged",
        eb = "scroll",
        eR = "scrolled",
        eI = "destroy",
        eN = "arrows:mounted",
        eB = "arrows:updated",
        eP = "pagination:mounted",
        eH = "pagination:updated",
        ew = "navigation:mounted",
        ex = "autoplay:play",
        eM = "autoplay:playing",
        eK = "autoplay:pause",
        ej = "lazyload:loaded";
      function ek(e) {
        var t = e ? e.event.bus : document.createDocumentFragment(),
          n = ed();
        return (
          e && e.event.on(eI, n.destroy),
          N(n, {
            bus: t,
            on: function (e, r) {
              n.bind(t, L(e).join(" "), function (e) {
                r.apply(r, p(e.detail) ? e.detail : []);
              });
            },
            off: u(n.unbind, t),
            emit: function (e) {
              n.dispatch(t, e, a(arguments, 1));
            },
          })
        );
      }
      function eG(e, t, n, r) {
        var o,
          i,
          a = Date.now,
          u = 0,
          s = !0,
          c = 0;
        function d() {
          if (!s) {
            if (
              ((u = e ? ee((a() - o) / e, 1) : 1),
              n && n(u),
              u >= 1 && (t(), (o = a()), r && ++c >= r))
            )
              return f();
            i = l(d);
          }
        }
        function f() {
          s = !0;
        }
        function p() {
          i && cancelAnimationFrame(i), (u = 0), (i = 0), (s = !0);
        }
        return {
          start: function (t) {
            t || p(), (o = a() - (t ? u * e : 0)), (s = !1), (i = l(d));
          },
          rewind: function () {
            (o = a()), (u = 0), n && n(u);
          },
          pause: f,
          cancel: p,
          set: function (t) {
            e = t;
          },
          isPaused: function () {
            return s;
          },
        };
      }
      var eU = "Arrow",
        eY = eU + "Left",
        eF = eU + "Right",
        eW = eU + "Up",
        ez = eU + "Down",
        eX = {
          width: ["height"],
          left: ["top", "right"],
          right: ["bottom", "left"],
          x: ["y"],
          X: ["Y"],
          Y: ["X"],
          ArrowLeft: [eW, eF],
          ArrowRight: [ez, eY],
        },
        eV = "role",
        eq = "tabindex",
        eQ = "aria-",
        e$ = eQ + "controls",
        eZ = eQ + "current",
        eJ = eQ + "selected",
        e0 = eQ + "label",
        e1 = eQ + "labelledby",
        e4 = eQ + "hidden",
        e2 = eQ + "orientation",
        e5 = eQ + "roledescription",
        e6 = eQ + "live",
        e3 = eQ + "busy",
        e9 = eQ + "atomic",
        e7 = [eV, eq, "disabled", e$, eZ, e0, e1, e4, e2, e5],
        e8 = $ + "__",
        te = e8 + "track",
        tt = e8 + "list",
        tn = e8 + "slide",
        tr = tn + "--clone",
        to = tn + "__container",
        ti = e8 + "arrows",
        ta = e8 + "arrow",
        tu = ta + "--prev",
        ts = ta + "--next",
        tc = e8 + "pagination",
        tl = tc + "__page",
        td = e8 + "progress__bar",
        tf = e8 + "toggle",
        tp = e8 + "sr",
        tE = "is-active",
        th = "is-prev",
        tv = "is-next",
        tA = "is-visible",
        tL = "is-loading",
        t_ = "is-focus-in",
        tg = "is-overflow",
        tm = [tE, tA, th, tv, tL, t_, tg],
        ty = "touchstart mousedown",
        tD = "touchmove mousemove",
        tS = "touchend touchcancel mouseup click",
        tO = "slide",
        tT = "loop",
        tC = "fade",
        tb = Z + "-interval",
        tR = { passive: !1, capture: !0 },
        tI = { Spacebar: " ", Right: eF, Left: eY, Up: eW, Down: ez };
      function tN(e) {
        return tI[(e = h(e) ? e : e.key)] || e;
      }
      var tB = "keydown",
        tP = Z + "-lazy",
        tH = tP + "-srcset",
        tw = "[" + tP + "], [" + tH + "]",
        tx = [" ", "Enter"],
        tM = Object.freeze({
          __proto__: null,
          Media: function (e, t, n) {
            var r = e.state,
              i = n.breakpoints || {},
              a = n.reducedMotion || {},
              u = ed(),
              s = [];
            function c(e) {
              e && u.destroy();
            }
            function l(e, t) {
              var n = matchMedia(t);
              u.bind(n, "change", d), s.push([e, n]);
            }
            function d() {
              var t = r.is(7),
                o = n.direction,
                i = s.reduce(function (e, t) {
                  return B(e, t[1].matches ? t[0] : {});
                }, {});
              P(n),
                f(i),
                n.destroy
                  ? e.destroy("completely" === n.destroy)
                  : t
                  ? (c(!0), e.mount())
                  : o !== n.direction && e.refresh();
            }
            function f(t, o, i) {
              B(n, t),
                o && B(Object.getPrototypeOf(n), t),
                (i || !r.is(1)) && e.emit(ey, n);
            }
            return {
              setup: function () {
                var e = "min" === n.mediaQuery;
                R(i)
                  .sort(function (t, n) {
                    return e ? +t - +n : +n - +t;
                  })
                  .forEach(function (t) {
                    l(i[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)");
                  }),
                  l(a, o),
                  d();
              },
              destroy: c,
              reduce: function (e) {
                matchMedia(o).matches && (e ? B(n, a) : P(n, R(a)));
              },
              set: f,
            };
          },
          Direction: function (e, t, n) {
            return {
              resolve: function (e, t, r) {
                var o =
                  "rtl" !== (r = r || n.direction) || t
                    ? "ttb" === r
                      ? 0
                      : -1
                    : 1;
                return (
                  (eX[e] && eX[e][o]) ||
                  e.replace(/width|left|right/i, function (e, t) {
                    var n = eX[e.toLowerCase()][o] || e;
                    return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                  })
                );
              },
              orient: function (e) {
                return e * ("rtl" === n.direction ? 1 : -1);
              },
            };
          },
          Elements: function (e, t, n) {
            var r,
              o,
              a,
              u = ek(e),
              s = u.on,
              c = u.bind,
              l = e.root,
              d = n.i18n,
              f = {},
              p = [],
              h = [],
              v = [];
            function A() {
              (o = b((r = g("." + te)), "." + tt)),
                J(r && o, "A track/list element is missing."),
                m(p, C(o, "." + tn + ":not(." + tr + ")")),
                I(
                  {
                    arrows: ti,
                    pagination: tc,
                    prev: tu,
                    next: ts,
                    bar: td,
                    toggle: tf,
                  },
                  function (e, t) {
                    f[t] = g("." + e);
                  }
                ),
                N(f, { root: l, track: r, list: o, slides: p }),
                (function () {
                  var e = l.id || "" + $ + ec((el[$] = (el[$] || 0) + 1)),
                    t = n.role;
                  (l.id = e),
                    (r.id = r.id || e + "-track"),
                    (o.id = o.id || e + "-list"),
                    !k(l, eV) && "SECTION" !== l.tagName && t && w(l, eV, t),
                    w(l, e5, d.carousel),
                    w(o, eV, "presentation");
                })(),
                _();
            }
            function L(e) {
              var t = e7.concat("style");
              i(p), V(l, h), V(r, v), H([r, o], t), H(l, e ? t : ["style", e5]);
            }
            function _() {
              V(l, h),
                V(r, v),
                (h = S($)),
                (v = S(te)),
                D(l, h),
                D(r, v),
                w(l, e0, n.label),
                w(l, e1, n.labelledby);
            }
            function g(e) {
              var t = z(l, e);
              return t &&
                (function (e, t) {
                  if (E(e.closest)) return e.closest(t);
                  for (var n = e; n && 1 === n.nodeType && !T(n, t); )
                    n = n.parentElement;
                  return n;
                })(t, "." + $) === l
                ? t
                : void 0;
            }
            function S(e) {
              return [
                e + "--" + n.type,
                e + "--" + n.direction,
                n.drag && e + "--draggable",
                n.isNavigation && e + "--nav",
                e === $ && tE,
              ];
            }
            return N(f, {
              setup: A,
              mount: function () {
                s(em, L),
                  s(em, A),
                  s(ey, _),
                  c(
                    document,
                    ty + " keydown",
                    function (e) {
                      a = "keydown" === e.type;
                    },
                    { capture: !0 }
                  ),
                  c(l, "focusin", function () {
                    y(l, t_, !!a);
                  });
              },
              destroy: L,
            });
          },
          Slides: function (e, t, n) {
            var r = ek(e),
              o = r.on,
              a = r.emit,
              s = r.bind,
              c = t.Elements,
              l = c.slides,
              d = c.list,
              f = [];
            function p() {
              l.forEach(function (e, t) {
                m(e, t, -1);
              });
            }
            function v() {
              R(function (e) {
                e.destroy();
              }),
                i(f);
            }
            function m(t, n, r) {
              var o = (function (e, t, n, r) {
                var o,
                  i = ek(e),
                  a = i.on,
                  s = i.emit,
                  c = i.bind,
                  l = e.Components,
                  d = e.root,
                  f = e.options,
                  p = f.isNavigation,
                  E = f.updateOnMove,
                  h = f.i18n,
                  v = f.pagination,
                  A = f.slideFocus,
                  L = l.Direction.resolve,
                  _ = k(r, "style"),
                  g = k(r, e0),
                  m = n > -1,
                  D = b(r, "." + to);
                function S() {
                  var o = e.splides
                    .map(function (e) {
                      var n = e.splide.Components.Slides.getAt(t);
                      return n ? n.slide.id : "";
                    })
                    .join(" ");
                  w(r, e0, es(h.slideX, (m ? n : t) + 1)),
                    w(r, e$, o),
                    w(r, eV, A ? "button" : ""),
                    A && H(r, e5);
                }
                function O() {
                  o || T();
                }
                function T() {
                  if (!o) {
                    var n,
                      i = e.index;
                    (n = C()) !== G(r, tE) &&
                      (y(r, tE, n),
                      w(r, eZ, (p && n) || ""),
                      s(n ? eA : eL, R)),
                      (function () {
                        var t = (function () {
                            if (e.is(tC)) return C();
                            var t = U(l.Elements.track),
                              n = U(r),
                              o = L("left", !0),
                              i = L("right", !0);
                            return en(t[o]) <= er(n[o]) && en(n[i]) <= er(t[i]);
                          })(),
                          n = !t && (!C() || m);
                        if (
                          (e.state.is([4, 5]) || w(r, e4, n || ""),
                          w(X(r, f.focusableNodes || ""), eq, n ? -1 : ""),
                          A && w(r, eq, n ? -1 : 0),
                          t !== G(r, tA) && (y(r, tA, t), s(t ? e_ : eg, R)),
                          !t && document.activeElement === r)
                        ) {
                          var o = l.Slides.getAt(e.index);
                          o && j(o.slide);
                        }
                      })(),
                      y(r, th, t === i - 1),
                      y(r, tv, t === i + 1);
                  }
                }
                function C() {
                  var r = e.index;
                  return r === t || (f.cloneStatus && r === n);
                }
                var R = {
                  index: t,
                  slideIndex: n,
                  slide: r,
                  container: D,
                  isClone: m,
                  mount: function () {
                    m ||
                      ((r.id = d.id + "-slide" + ec(t + 1)),
                      w(r, eV, v ? "tabpanel" : "group"),
                      w(r, e5, h.slide),
                      w(r, e0, g || es(h.slideLabel, [t + 1, e.length]))),
                      c(r, "click", u(s, ev, R)),
                      c(r, "keydown", u(s, "sk", R)),
                      a([eh, "sh", eR], T),
                      a(ew, S),
                      E && a(eE, O);
                  },
                  destroy: function () {
                    (o = !0),
                      i.destroy(),
                      V(r, tm),
                      H(r, e7),
                      w(r, "style", _),
                      w(r, e0, g || "");
                  },
                  update: T,
                  style: function (e, t, n) {
                    M((n && D) || r, e, t);
                  },
                  isWithin: function (n, r) {
                    var o = eo(n - t);
                    return (
                      !m && (f.rewind || e.is(tT)) && (o = ee(o, e.length - o)),
                      o <= r
                    );
                  },
                };
                return R;
              })(e, n, r, t);
              o.mount(),
                f.push(o),
                f.sort(function (e, t) {
                  return e.index - t.index;
                });
            }
            function C(e) {
              return e
                ? I(function (e) {
                    return !e.isClone;
                  })
                : f;
            }
            function R(e, t) {
              C(t).forEach(e);
            }
            function I(e) {
              return f.filter(
                E(e)
                  ? e
                  : function (t) {
                      return h(e) ? T(t.slide, e) : g(L(e), t.index);
                    }
              );
            }
            return {
              mount: function () {
                p(), o(em, v), o(em, p);
              },
              destroy: v,
              update: function () {
                R(function (e) {
                  e.update();
                });
              },
              register: m,
              get: C,
              getIn: function (e) {
                var r = t.Controller,
                  o = r.toIndex(e),
                  i = r.hasFocus() ? 1 : n.perPage;
                return I(function (e) {
                  return ei(e.index, o, o + i - 1);
                });
              },
              getAt: function (e) {
                return I(e)[0];
              },
              add: function (e, t) {
                _(e, function (e) {
                  if ((h(e) && (e = F(e)), A(e))) {
                    var r,
                      o,
                      i,
                      c,
                      f = l[t];
                    f ? O(e, f) : S(d, e),
                      D(e, n.classes.slide),
                      (r = e),
                      (o = u(a, eD)),
                      (c = (i = X(r, "img")).length)
                        ? i.forEach(function (e) {
                            s(e, "load error", function () {
                              --c || o();
                            });
                          })
                        : o();
                  }
                }),
                  a(em);
              },
              remove: function (e) {
                Y(
                  I(e).map(function (e) {
                    return e.slide;
                  })
                ),
                  a(em);
              },
              forEach: R,
              filter: I,
              style: function (e, t, n) {
                R(function (r) {
                  r.style(e, t, n);
                });
              },
              getLength: function (e) {
                return e ? l.length : f.length;
              },
              isEnough: function () {
                return f.length > n.perPage;
              },
            };
          },
          Layout: function (e, t, n) {
            var r,
              o,
              i,
              a = ek(e),
              s = a.on,
              c = a.bind,
              l = a.emit,
              d = t.Slides,
              p = t.Direction.resolve,
              E = t.Elements,
              h = E.root,
              v = E.track,
              A = E.list,
              L = d.getAt,
              _ = d.style;
            function g() {
              (r = "ttb" === n.direction),
                M(h, "maxWidth", Q(n.width)),
                M(v, p("paddingLeft"), D(!1)),
                M(v, p("paddingRight"), D(!0)),
                m(!0);
            }
            function m(e) {
              var t,
                a = U(h);
              (e || o.width !== a.width || o.height !== a.height) &&
                (M(
                  v,
                  "height",
                  ((t = ""),
                  r &&
                    (J((t = S()), "height or heightRatio is missing."),
                    (t = "calc(" + t + " - " + D(!1) + " - " + D(!0) + ")")),
                  t)
                ),
                _(p("marginRight"), Q(n.gap)),
                _(
                  "width",
                  n.autoWidth ? null : Q(n.fixedWidth) || (r ? "" : O())
                ),
                _(
                  "height",
                  Q(n.fixedHeight) || (r ? (n.autoHeight ? null : O()) : S()),
                  !0
                ),
                (o = a),
                l(eS),
                i !== (i = N()) && (y(h, tg, i), l("overflow", i)));
            }
            function D(e) {
              var t = n.padding,
                r = p(e ? "right" : "left");
              return (t && Q(t[r] || (f(t) ? 0 : t))) || "0px";
            }
            function S() {
              return Q(n.height || U(A).width * n.heightRatio);
            }
            function O() {
              var e = Q(n.gap);
              return (
                "calc((100%" +
                (e && " + " + e) +
                ")/" +
                (n.perPage || 1) +
                (e && " - " + e) +
                ")"
              );
            }
            function T() {
              return U(A)[p("width")];
            }
            function C(e, t) {
              var n = L(e || 0);
              return n ? U(n.slide)[p("width")] + (t ? 0 : I()) : 0;
            }
            function b(e, t) {
              var n = L(e);
              return n
                ? eo(U(n.slide)[p("right")] - U(A)[p("left")]) + (t ? 0 : I())
                : 0;
            }
            function R(t) {
              return b(e.length - 1) - b(0) + C(0, t);
            }
            function I() {
              var e = L(0);
              return (e && parseFloat(M(e.slide, p("marginRight")))) || 0;
            }
            function N() {
              return e.is(tC) || R(!0) > T();
            }
            return {
              mount: function () {
                var e;
                g(),
                  c(
                    window,
                    "resize load",
                    ((e = eG(0, u(l, eD), null, 1)),
                    function () {
                      e.isPaused() && e.start();
                    })
                  ),
                  s([ey, em], g),
                  s(eD, m);
              },
              resize: m,
              listSize: T,
              slideSize: C,
              sliderSize: R,
              totalSize: b,
              getPadding: function (e) {
                return (
                  parseFloat(M(v, p("padding" + (e ? "Right" : "Left")))) || 0
                );
              },
              isOverflow: N,
            };
          },
          Clones: function (e, t, n) {
            var r,
              o = ek(e),
              a = o.on,
              u = t.Elements,
              s = t.Slides,
              c = t.Direction.resolve,
              l = [];
            function d() {
              a(em, f),
                a([ey, eD], E),
                (r = h()) &&
                  ((function (t) {
                    var r = s.get().slice(),
                      o = r.length;
                    if (o) {
                      for (; r.length < t; ) m(r, r);
                      m(r.slice(-t), r.slice(0, t)).forEach(function (i, a) {
                        var c,
                          d,
                          f,
                          p = a < t,
                          E =
                            ((c = i.slide),
                            (d = a),
                            D((f = c.cloneNode(!0)), n.classes.clone),
                            (f.id = e.root.id + "-clone" + ec(d + 1)),
                            f);
                        p ? O(E, r[0].slide) : S(u.list, E),
                          m(l, E),
                          s.register(E, a - t + (p ? 0 : o), i.index);
                      });
                    }
                  })(r),
                  t.Layout.resize(!0));
            }
            function f() {
              p(), d();
            }
            function p() {
              Y(l), i(l), o.destroy();
            }
            function E() {
              var e = h();
              r !== e && (r < e || !e) && o.emit(em);
            }
            function h() {
              var r = n.clones;
              if (e.is(tT)) {
                if (v(r)) {
                  var o = n[c("fixedWidth")] && t.Layout.slideSize(0);
                  r =
                    (o && er(U(u.track)[c("width")] / o)) ||
                    (n[c("autoWidth")] && e.length) ||
                    2 * n.perPage;
                }
              } else r = 0;
              return r;
            }
            return { mount: d, destroy: p };
          },
          Move: function (e, t, n) {
            var r,
              o = ek(e),
              i = o.on,
              a = o.emit,
              u = e.state.set,
              s = t.Layout,
              c = s.slideSize,
              l = s.getPadding,
              d = s.totalSize,
              f = s.listSize,
              p = s.sliderSize,
              E = t.Direction,
              h = E.resolve,
              A = E.orient,
              L = t.Elements,
              _ = L.list,
              g = L.track;
            function m() {
              t.Controller.isBusy() ||
                (t.Scroll.cancel(), y(e.index), t.Slides.update());
            }
            function y(e) {
              D(C(e, !0));
            }
            function D(n, r) {
              if (!e.is(tC)) {
                var o = r
                  ? n
                  : (function (n) {
                      if (e.is(tT)) {
                        var r = T(n),
                          o = r > t.Controller.getEnd();
                        (r < 0 || o) && (n = S(n, o));
                      }
                      return n;
                    })(n);
                M(_, "transform", "translate" + h("X") + "(" + o + "px)"),
                  n !== o && a("sh");
              }
            }
            function S(e, t) {
              var n = e - R(t),
                r = p();
              return e - A(r * (er(eo(n) / r) || 1)) * (t ? 1 : -1);
            }
            function O() {
              D(b(), !0), r.cancel();
            }
            function T(e) {
              for (
                var n = t.Slides.get(), r = 0, o = 1 / 0, i = 0;
                i < n.length;
                i++
              ) {
                var a = n[i].index,
                  u = eo(C(a, !0) - e);
                if (u <= o) (o = u), (r = a);
                else break;
              }
              return r;
            }
            function C(t, r) {
              var o,
                i,
                a,
                u = A(
                  d(t - 1) -
                    ((o = t),
                    "center" === (i = n.focus)
                      ? (f() - c(o, !0)) / 2
                      : +i * c(o) || 0)
                );
              return r
                ? ((a = u),
                  n.trimSpace && e.is(tO) && (a = ea(a, 0, A(p(!0) - f()))),
                  a)
                : u;
            }
            function b() {
              var e = h("left");
              return U(_)[e] - U(g)[e] + A(l(!1));
            }
            function R(e) {
              return C(e ? t.Controller.getEnd() : 0, !!n.trimSpace);
            }
            return {
              mount: function () {
                (r = t.Transition), i([ef, eS, ey, em], m);
              },
              move: function (e, t, n, o) {
                var i, s;
                e !== t &&
                  ((i = e > n),
                  (s = A(S(b(), i))),
                  i ? s >= 0 : s <= _[h("scrollWidth")] - U(g)[h("width")]) &&
                  (O(), D(S(b(), e > n), !0)),
                  u(4),
                  a(eE, t, n, e),
                  r.start(t, function () {
                    u(3), a(eh, t, n, e), o && o();
                  });
              },
              jump: y,
              translate: D,
              shift: S,
              cancel: O,
              toIndex: T,
              toPosition: C,
              getPosition: b,
              getLimit: R,
              exceededLimit: function (e, t) {
                t = v(t) ? b() : t;
                var n = !0 !== e && A(t) < A(R(!1)),
                  r = !1 !== e && A(t) > A(R(!0));
                return n || r;
              },
              reposition: m,
            };
          },
          Controller: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s = ek(e),
              c = s.on,
              l = s.emit,
              d = t.Move,
              f = d.getPosition,
              p = d.getLimit,
              E = d.toPosition,
              A = t.Slides,
              L = A.isEnough,
              _ = A.getLength,
              g = n.omitEnd,
              m = e.is(tT),
              y = e.is(tO),
              D = u(R, !1),
              S = u(R, !0),
              O = n.start || 0,
              T = O;
            function C() {
              (o = _(!0)), (i = n.perMove), (a = n.perPage), (r = B());
              var e = ea(O, 0, g ? r : o - 1);
              e !== O && ((O = e), d.reposition());
            }
            function b() {
              r !== B() && l("ei");
            }
            function R(e, t) {
              var n = i || (x() ? 1 : a),
                o = I(O + n * (e ? -1 : 1), O, !(i || x()));
              return -1 === o && y && !(1 > eo(f() - p(!e)))
                ? e
                  ? 0
                  : r
                : t
                ? o
                : N(o);
            }
            function I(t, u, s) {
              if (L() || x()) {
                var c = (function (t) {
                  if (y && "move" === n.trimSpace && t !== O)
                    for (
                      var r = f();
                      r === E(t, !0) && ei(t, 0, e.length - 1, !n.rewind);

                    )
                      t < O ? --t : ++t;
                  return t;
                })(t);
                c !== t && ((u = t), (t = c), (s = !1)),
                  t < 0 || t > r
                    ? (t =
                        !i && (ei(0, t, u, !0) || ei(r, u, t, !0))
                          ? P(H(t))
                          : m
                          ? s
                            ? t < 0
                              ? -(o % a || a)
                              : o
                            : t
                          : n.rewind
                          ? t < 0
                            ? r
                            : 0
                          : -1)
                    : s && t !== u && (t = P(H(u) + (t < u ? -1 : 1)));
              } else t = -1;
              return t;
            }
            function N(e) {
              return m ? (e + o) % o || 0 : e;
            }
            function B() {
              for (var e = o - (x() || (m && i) ? 1 : a); g && e-- > 0; )
                if (E(o - 1, !0) !== E(e, !0)) {
                  e++;
                  break;
                }
              return ea(e, 0, o - 1);
            }
            function P(e) {
              return ea(x() ? e : a * e, 0, r);
            }
            function H(e) {
              return x() ? ee(e, r) : en((e >= r ? o - 1 : e) / a);
            }
            function w(e) {
              e !== O && ((T = O), (O = e));
            }
            function x() {
              return !v(n.focus) || n.isNavigation;
            }
            function M() {
              return e.state.is([4, 5]) && !!n.waitForTransition;
            }
            return {
              mount: function () {
                C(), c([ey, em, "ei"], C), c(eS, b);
              },
              go: function (e, t, n) {
                if (!M()) {
                  var o = (function (e) {
                      var t = O;
                      if (h(e)) {
                        var n = e.match(/([+\-<>])(\d+)?/) || [],
                          o = n[1],
                          i = n[2];
                        "+" === o || "-" === o
                          ? (t = I(O + +("" + o + (+i || 1)), O))
                          : ">" === o
                          ? (t = i ? P(+i) : D(!0))
                          : "<" === o && (t = S(!0));
                      } else t = m ? e : ea(e, 0, r);
                      return t;
                    })(e),
                    i = N(o);
                  i > -1 && (t || i !== O) && (w(i), d.move(o, i, T, n));
                }
              },
              scroll: function (e, n, o, i) {
                t.Scroll.scroll(e, n, o, function () {
                  var e = N(d.toIndex(f()));
                  w(g ? ee(e, r) : e), i && i();
                });
              },
              getNext: D,
              getPrev: S,
              getAdjacent: R,
              getEnd: B,
              setIndex: w,
              getIndex: function (e) {
                return e ? T : O;
              },
              toIndex: P,
              toPage: H,
              toDest: function (e) {
                var t = d.toIndex(e);
                return y ? ea(t, 0, r) : t;
              },
              hasFocus: x,
              isBusy: M,
            };
          },
          Arrows: function (e, t, n) {
            var r,
              o,
              i = ek(e),
              a = i.on,
              s = i.bind,
              c = i.emit,
              l = n.classes,
              d = n.i18n,
              f = t.Elements,
              p = t.Controller,
              E = f.arrows,
              h = f.track,
              v = E,
              A = f.prev,
              L = f.next,
              _ = {};
            function g() {
              var e;
              (e = n.arrows) &&
                !(A && L) &&
                ((v = E || x("div", l.arrows)),
                (A = C(!0)),
                (L = C(!1)),
                (r = !0),
                S(v, [A, L]),
                E || O(v, h)),
                A &&
                  L &&
                  (N(_, { prev: A, next: L }),
                  K(v, e ? "" : "none"),
                  D(v, (o = ti + "--" + n.direction)),
                  e &&
                    (a([ef, eh, em, eR, "ei"], b),
                    s(L, "click", u(T, ">")),
                    s(A, "click", u(T, "<")),
                    b(),
                    w([A, L], e$, h.id),
                    c(eN, A, L))),
                a(ey, m);
            }
            function m() {
              y(), g();
            }
            function y() {
              i.destroy(),
                V(v, o),
                r ? (Y(E ? [A, L] : v), (A = L = null)) : H([A, L], e7);
            }
            function T(e) {
              p.go(e, !0);
            }
            function C(e) {
              return F(
                '<button class="' +
                  l.arrow +
                  " " +
                  (e ? l.prev : l.next) +
                  '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                  (n.arrowPath ||
                    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                  '" />'
              );
            }
            function b() {
              if (A && L) {
                var t = e.index,
                  n = p.getPrev(),
                  r = p.getNext(),
                  o = n > -1 && t < n ? d.last : d.prev,
                  i = r > -1 && t > r ? d.first : d.next;
                (A.disabled = n < 0),
                  (L.disabled = r < 0),
                  w(A, e0, o),
                  w(L, e0, i),
                  c(eB, A, L, n, r);
              }
            }
            return { arrows: _, mount: g, destroy: y, update: b };
          },
          Autoplay: function (e, t, n) {
            var r,
              o,
              i = ek(e),
              a = i.on,
              u = i.bind,
              s = i.emit,
              c = eG(n.interval, e.go.bind(e, ">"), function (e) {
                var t = d.bar;
                t && M(t, "width", 100 * e + "%"), s(eM, e);
              }),
              l = c.isPaused,
              d = t.Elements,
              f = t.Elements,
              p = f.root,
              E = f.toggle,
              h = n.autoplay,
              v = "pause" === h;
            function A() {
              l() &&
                t.Slides.isEnough() &&
                (c.start(!n.resetProgress), (o = r = v = !1), g(), s(ex));
            }
            function L(e) {
              void 0 === e && (e = !0),
                (v = !!e),
                g(),
                l() || (c.pause(), s(eK));
            }
            function _() {
              v || (r || o ? L(!1) : A());
            }
            function g() {
              E && (y(E, tE, !v), w(E, e0, n.i18n[v ? "play" : "pause"]));
            }
            function m(e) {
              var r = t.Slides.getAt(e);
              c.set((r && +k(r.slide, tb)) || n.interval);
            }
            return {
              mount: function () {
                h &&
                  (n.pauseOnHover &&
                    u(p, "mouseenter mouseleave", function (e) {
                      (r = "mouseenter" === e.type), _();
                    }),
                  n.pauseOnFocus &&
                    u(p, "focusin focusout", function (e) {
                      (o = "focusin" === e.type), _();
                    }),
                  E &&
                    u(E, "click", function () {
                      v ? A() : L(!0);
                    }),
                  a([eE, eb, em], c.rewind),
                  a(eE, m),
                  E && w(E, e$, d.track.id),
                  v || A(),
                  g());
              },
              destroy: c.cancel,
              play: A,
              pause: L,
              isPaused: l,
            };
          },
          Cover: function (e, t, n) {
            var r = ek(e).on;
            function o(e) {
              t.Slides.forEach(function (t) {
                var n = b(t.container || t.slide, "img");
                n && n.src && i(e, n, t);
              });
            }
            function i(e, t, n) {
              n.style(
                "background",
                e ? 'center/cover no-repeat url("' + t.src + '")' : "",
                !0
              ),
                K(t, e ? "none" : "");
            }
            return {
              mount: function () {
                n.cover && (r(ej, u(i, !0)), r([ef, ey, em], u(o, !0)));
              },
              destroy: u(o, !1),
            };
          },
          Scroll: function (e, t, n) {
            var r,
              o,
              i = ek(e),
              a = i.on,
              s = i.emit,
              c = e.state.set,
              l = t.Move,
              d = l.getPosition,
              f = l.getLimit,
              p = l.exceededLimit,
              E = l.translate,
              h = e.is(tO),
              v = 1;
            function A(e, n, i, a, f) {
              var E = d();
              if ((g(), i && (!h || !p()))) {
                var A = t.Layout.sliderSize(),
                  m = eu(e) * A * en(eo(e) / A) || 0;
                e = l.toPosition(t.Controller.toDest(e % A)) + m;
              }
              var y = 1 > eo(E - e);
              (v = 1),
                (n = y ? 0 : n || et(eo(e - E) / 1.5, 800)),
                (o = a),
                (r = eG(n, L, u(_, E, e, f), 1)),
                c(5),
                s(eb),
                r.start();
            }
            function L() {
              c(3), o && o(), s(eR);
            }
            function _(e, t, r, i) {
              var a,
                u,
                s = d(),
                c =
                  (e +
                    (t - e) *
                      ((a = i),
                      (u = n.easingFunc) ? u(a) : 1 - Math.pow(1 - a, 4)) -
                    s) *
                  v;
              E(s + c),
                h &&
                  !r &&
                  p() &&
                  ((v *= 0.6), 10 > eo(c) && A(f(p(!0)), 600, !1, o, !0));
            }
            function g() {
              r && r.cancel();
            }
            function m() {
              r && !r.isPaused() && (g(), L());
            }
            return {
              mount: function () {
                a(eE, g), a([ey, em], m);
              },
              destroy: g,
              scroll: A,
              cancel: m,
            };
          },
          Drag: function (e, t, n) {
            var r,
              o,
              i,
              a,
              u,
              s,
              l,
              d,
              p = ek(e),
              E = p.on,
              h = p.emit,
              v = p.bind,
              A = p.unbind,
              L = e.state,
              _ = t.Move,
              g = t.Scroll,
              m = t.Controller,
              y = t.Elements.track,
              D = t.Media.reduce,
              S = t.Direction,
              O = S.resolve,
              C = S.orient,
              b = _.getPosition,
              R = _.exceededLimit,
              I = !1;
            function N() {
              var e = n.drag;
              (l = !e), (a = "free" === e);
            }
            function B(e) {
              if (((s = !1), !l)) {
                var t,
                  r,
                  o = k(e);
                (t = e.target),
                  (r = n.noDrag),
                  T(t, "." + tl + ", ." + ta) ||
                    (r && T(t, r)) ||
                    (!o && e.button) ||
                    (m.isBusy()
                      ? W(e, !0)
                      : ((d = o ? y : window),
                        (u = L.is([4, 5])),
                        (i = null),
                        v(d, tD, P, tR),
                        v(d, tS, H, tR),
                        _.cancel(),
                        g.cancel(),
                        x(e)));
              }
            }
            function P(t) {
              if ((L.is(6) || (L.set(6), h(eO)), t.cancelable)) {
                if (u) {
                  _.translate(r + M(t) / (I && e.is(tO) ? 5 : 1));
                  var o,
                    i,
                    a,
                    c,
                    l,
                    d,
                    p = K(t) > 200,
                    E = I !== (I = R());
                  (p || E) && x(t), (s = !0), h(eT), W(t);
                } else {
                  eo(M((o = t))) > eo(M(o, !0)) &&
                    ((i = t),
                    (l = ((c = f((a = n.dragMinThreshold))) && a.mouse) || 0),
                    (d = (c ? a.touch : +a) || 10),
                    (u = eo(M(i)) > (k(i) ? d : l)),
                    W(t));
                }
              }
            }
            function H(r) {
              var o, i, s, c;
              L.is(6) && (L.set(3), h(eC)),
                u &&
                  ((s =
                    ((o = i =
                      (function (t) {
                        if (e.is(tT) || !I) {
                          var n = K(t);
                          if (n && n < 200) return M(t) / n;
                        }
                        return 0;
                      })(r)),
                    b() +
                      eu(o) *
                        ee(
                          eo(o) * (n.flickPower || 600),
                          a
                            ? 1 / 0
                            : t.Layout.listSize() * (n.flickMaxPages || 1)
                        ))),
                  (c = n.rewind && n.rewindByDrag),
                  D(!1),
                  a
                    ? m.scroll(s, 0, n.snap)
                    : e.is(tC)
                    ? m.go(0 > C(eu(i)) ? (c ? "<" : "-") : c ? ">" : "+")
                    : e.is(tO) && I && c
                    ? m.go(R(!0) ? ">" : "<")
                    : m.go(m.toDest(s), !0),
                  D(!0),
                  W(r)),
                A(d, tD, P),
                A(d, tS, H),
                (u = !1);
            }
            function w(e) {
              !l && s && W(e, !0);
            }
            function x(e) {
              (i = o), (o = e), (r = b());
            }
            function M(e, t) {
              return j(e, t) - j((o === e && i) || o, t);
            }
            function K(e) {
              return q(e) - q((o === e && i) || o);
            }
            function j(e, t) {
              return (k(e) ? e.changedTouches[0] : e)[
                "page" + O(t ? "Y" : "X")
              ];
            }
            function k(e) {
              return (
                "undefined" != typeof TouchEvent && e instanceof TouchEvent
              );
            }
            return {
              mount: function () {
                v(y, tD, c, tR),
                  v(y, tS, c, tR),
                  v(y, ty, B, tR),
                  v(y, "click", w, { capture: !0 }),
                  v(y, "dragstart", W),
                  E([ef, ey], N);
              },
              disable: function (e) {
                l = e;
              },
              isDragging: function () {
                return u;
              },
            };
          },
          Keyboard: function (e, t, n) {
            var r,
              o,
              i = ek(e),
              a = i.on,
              u = i.bind,
              c = i.unbind,
              l = e.root,
              d = t.Direction.resolve;
            function f() {
              var e = n.keyboard;
              e && u((r = "global" === e ? window : l), tB, h);
            }
            function p() {
              c(r, tB);
            }
            function E() {
              var e = o;
              (o = !0),
                s(function () {
                  o = e;
                });
            }
            function h(t) {
              if (!o) {
                var n = tN(t);
                n === d(eY) ? e.go("<") : n === d(eF) && e.go(">");
              }
            }
            return {
              mount: function () {
                f(), a(ey, p), a(ey, f), a(eE, E);
              },
              destroy: p,
              disable: function (e) {
                o = e;
              },
            };
          },
          LazyLoad: function (e, t, n) {
            var r = ek(e),
              o = r.on,
              a = r.off,
              s = r.bind,
              c = r.emit,
              l = "sequential" === n.lazyLoad,
              d = [eh, eR],
              f = [];
            function p() {
              i(f),
                t.Slides.forEach(function (e) {
                  X(e.slide, tw).forEach(function (t) {
                    var r = k(t, tP),
                      o = k(t, tH);
                    if (r !== t.src || o !== t.srcset) {
                      var i = n.classes.spinner,
                        a = t.parentElement,
                        u = b(a, "." + i) || x("span", i, a);
                      f.push([t, e, u]), t.src || K(t, "none");
                    }
                  });
                }),
                l ? A() : (a(d), o(d, E), E());
            }
            function E() {
              (f = f.filter(function (t) {
                var r = n.perPage * ((n.preloadPages || 1) + 1) - 1;
                return !t[1].isWithin(e.index, r) || h(t);
              })).length || a(d);
            }
            function h(e) {
              var t = e[0];
              D(e[1].slide, tL),
                s(t, "load error", u(v, e)),
                w(t, "src", k(t, tP)),
                w(t, "srcset", k(t, tH)),
                H(t, tP),
                H(t, tH);
            }
            function v(e, t) {
              var n = e[0],
                r = e[1];
              V(r.slide, tL),
                "error" !== t.type && (Y(e[2]), K(n, ""), c(ej, n, r), c(eD)),
                l && A();
            }
            function A() {
              f.length && h(f.shift());
            }
            return {
              mount: function () {
                n.lazyLoad && (p(), o(em, p));
              },
              destroy: u(i, f),
              check: E,
            };
          },
          Pagination: function (e, t, n) {
            var r,
              o,
              s = ek(e),
              c = s.on,
              l = s.emit,
              d = s.bind,
              f = t.Slides,
              p = t.Elements,
              E = t.Controller,
              h = E.hasFocus,
              v = E.getIndex,
              A = E.go,
              L = t.Direction.resolve,
              _ = p.pagination,
              g = [];
            function m() {
              r && (Y(_ ? a(r.children) : r), V(r, o), i(g), (r = null)),
                s.destroy();
            }
            function y(e) {
              A(">" + e, !0);
            }
            function S(e, t) {
              var n = g.length,
                r = tN(t),
                o = O(),
                i = -1;
              r === L(eF, !1, o)
                ? (i = ++e % n)
                : r === L(eY, !1, o)
                ? (i = (--e + n) % n)
                : "Home" === r
                ? (i = 0)
                : "End" === r && (i = n - 1);
              var a = g[i];
              a && (j(a.button), A(">" + i), W(t, !0));
            }
            function O() {
              return n.paginationDirection || n.direction;
            }
            function T(e) {
              return g[E.toPage(e)];
            }
            function C() {
              var e = T(v(!0)),
                t = T(v());
              if (e) {
                var n = e.button;
                V(n, tE), H(n, eJ), w(n, eq, -1);
              }
              if (t) {
                var o = t.button;
                D(o, tE), w(o, eJ, !0), w(o, eq, "");
              }
              l(eH, { list: r, items: g }, e, t);
            }
            return {
              items: g,
              mount: function t() {
                m(), c([ey, em, "ei"], t);
                var i = n.pagination;
                _ && K(_, i ? "" : "none"),
                  i &&
                    (c([eE, eb, eR], C),
                    (function () {
                      var t = e.length,
                        i = n.classes,
                        a = n.i18n,
                        s = n.perPage,
                        c = h() ? E.getEnd() + 1 : er(t / s);
                      D(
                        (r = _ || x("ul", i.pagination, p.track.parentElement)),
                        (o = tc + "--" + O())
                      ),
                        w(r, eV, "tablist"),
                        w(r, e0, a.select),
                        w(r, e2, "ttb" === O() ? "vertical" : "");
                      for (var l = 0; l < c; l++) {
                        var v = x("li", null, r),
                          A = x("button", { class: i.page, type: "button" }, v),
                          L = f.getIn(l).map(function (e) {
                            return e.slide.id;
                          }),
                          m = !h() && s > 1 ? a.pageX : a.slideX;
                        d(A, "click", u(y, l)),
                          n.paginationKeyboard && d(A, "keydown", u(S, l)),
                          w(v, eV, "presentation"),
                          w(A, eV, "tab"),
                          w(A, e$, L.join(" ")),
                          w(A, e0, es(m, l + 1)),
                          w(A, eq, -1),
                          g.push({ li: v, button: A, page: l });
                      }
                    })(),
                    C(),
                    l(eP, { list: r, items: g }, T(e.index)));
              },
              destroy: m,
              getAt: T,
              update: C,
            };
          },
          Sync: function (e, t, n) {
            var r = n.isNavigation,
              o = n.slideFocus,
              a = [];
            function s() {
              var t, n;
              e.splides.forEach(function (t) {
                t.isParent || (l(e, t.splide), l(t.splide, e));
              }),
                r &&
                  ((n = (t = ek(e)).on)(ev, f),
                  n("sk", p),
                  n([ef, ey], d),
                  a.push(t),
                  t.emit(ew, e.splides));
            }
            function c() {
              a.forEach(function (e) {
                e.destroy();
              }),
                i(a);
            }
            function l(e, t) {
              var n = ek(e);
              n.on(eE, function (e, n, r) {
                t.go(t.is(tT) ? r : e);
              }),
                a.push(n);
            }
            function d() {
              w(t.Elements.list, e2, "ttb" === n.direction ? "vertical" : "");
            }
            function f(t) {
              e.go(t.index);
            }
            function p(e, t) {
              g(tx, tN(t)) && (f(e), W(t));
            }
            return {
              setup: u(t.Media.set, { slideFocus: v(o) ? r : o }, !0),
              mount: s,
              destroy: c,
              remount: function () {
                c(), s();
              },
            };
          },
          Wheel: function (e, t, n) {
            var r = ek(e).bind,
              o = 0;
            function i(r) {
              if (r.cancelable) {
                var i,
                  a = r.deltaY,
                  u = a < 0,
                  s = q(r),
                  c = n.wheelMinThreshold || 0,
                  l = n.wheelSleep || 0;
                eo(a) > c && s - o > l && (e.go(u ? "<" : ">"), (o = s)),
                  (i = u),
                  (!n.releaseWheel ||
                    e.state.is(4) ||
                    -1 !== t.Controller.getAdjacent(i)) &&
                    W(r);
              }
            }
            return {
              mount: function () {
                n.wheel && r(t.Elements.track, "wheel", i, tR);
              },
            };
          },
          Live: function (e, t, n) {
            var r = ek(e).on,
              o = t.Elements.track,
              i = n.live && !n.isNavigation,
              a = x("span", tp),
              s = eG(90, u(c, !1));
            function c(e) {
              w(o, e3, e), e ? (S(o, a), s.start()) : (Y(a), s.cancel());
            }
            function l(e) {
              i && w(o, e6, e ? "off" : "polite");
            }
            return {
              mount: function () {
                i &&
                  (l(!t.Autoplay.isPaused()),
                  w(o, e9, !0),
                  (a.textContent = "…"),
                  r(ex, u(l, !0)),
                  r(eK, u(l, !1)),
                  r([eh, eR], u(c, !0)));
              },
              disable: l,
              destroy: function () {
                H(o, [e6, e9, e3]), Y(a);
              },
            };
          },
        }),
        tK = {
          type: "slide",
          role: "region",
          speed: 400,
          perPage: 1,
          cloneStatus: !0,
          arrows: !0,
          pagination: !0,
          paginationKeyboard: !0,
          interval: 5e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          resetProgress: !0,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          drag: !0,
          direction: "ltr",
          trimSpace: !0,
          focusableNodes: "a, button, textarea, input, select, iframe",
          live: !0,
          classes: {
            slide: tn,
            clone: tr,
            arrows: ti,
            arrow: ta,
            prev: tu,
            next: ts,
            pagination: tc,
            page: tl,
            spinner: e8 + "spinner",
          },
          i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
            carousel: "carousel",
            slide: "slide",
            select: "Select a slide to show",
            slideLabel: "%s of %s",
          },
          reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
        };
      function tj(e, t, n) {
        var r = t.Slides;
        function o() {
          r.forEach(function (e) {
            e.style("transform", "translateX(-" + 100 * e.index + "%)");
          });
        }
        return {
          mount: function () {
            ek(e).on([ef, em], o);
          },
          start: function (e, t) {
            r.style("transition", "opacity " + n.speed + "ms " + n.easing),
              s(t);
          },
          cancel: c,
        };
      }
      function tk(e, t, n) {
        var r,
          o = t.Move,
          i = t.Controller,
          a = t.Scroll,
          s = t.Elements.list,
          c = u(M, s, "transition");
        function l() {
          c(""), a.cancel();
        }
        return {
          mount: function () {
            ek(e).bind(s, "transitionend", function (e) {
              e.target === s && r && (l(), r());
            });
          },
          start: function (t, u) {
            var s = o.toPosition(t, !0),
              l = o.getPosition(),
              d = (function (t) {
                var r = n.rewindSpeed;
                if (e.is(tO) && r) {
                  var o = i.getIndex(!0),
                    a = i.getEnd();
                  if ((0 === o && t >= a) || (o >= a && 0 === t)) return r;
                }
                return n.speed;
              })(t);
            eo(s - l) >= 1 && d >= 1
              ? n.useScroll
                ? a.scroll(s, d, !1, u)
                : (c("transform " + d + "ms " + n.easing),
                  o.translate(s, !0),
                  (r = u))
              : (o.jump(t), u());
          },
          cancel: l,
        };
      }
      var tG = (function () {
        function e(t, n) {
          (this.event = ek()),
            (this.Components = {}),
            (this.state =
              ((r = 1),
              {
                set: function (e) {
                  r = e;
                },
                is: function (e) {
                  return g(L(e), r);
                },
              })),
            (this.splides = []),
            (this._o = {}),
            (this._E = {});
          var r,
            o = h(t) ? z(document, t) : t;
          J(o, o + " is invalid."),
            (this.root = o),
            (n = B(
              { label: k(o, e0) || "", labelledby: k(o, e1) || "" },
              tK,
              e.defaults,
              n || {}
            ));
          try {
            B(n, JSON.parse(k(o, Z)));
          } catch (e) {
            J(!1, "Invalid JSON");
          }
          this._o = Object.create(B({}, n));
        }
        var t = e.prototype;
        return (
          (t.mount = function (e, t) {
            var n = this,
              r = this.state,
              o = this.Components;
            return (
              J(r.is([1, 7]), "Already mounted!"),
              r.set(1),
              (this._C = o),
              (this._T = t || this._T || (this.is(tC) ? tj : tk)),
              (this._E = e || this._E),
              I(N({}, tM, this._E, { Transition: this._T }), function (e, t) {
                var r = e(n, o, n._o);
                (o[t] = r), r.setup && r.setup();
              }),
              I(o, function (e) {
                e.mount && e.mount();
              }),
              this.emit(ef),
              D(this.root, "is-initialized"),
              r.set(3),
              this.emit(ep),
              this
            );
          }),
          (t.sync = function (e) {
            return (
              this.splides.push({ splide: e }),
              e.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this._C.Sync.remount(), e.Components.Sync.remount()),
              this
            );
          }),
          (t.go = function (e) {
            return this._C.Controller.go(e), this;
          }),
          (t.on = function (e, t) {
            return this.event.on(e, t), this;
          }),
          (t.off = function (e) {
            return this.event.off(e), this;
          }),
          (t.emit = function (e) {
            var t;
            return (
              (t = this.event).emit.apply(t, [e].concat(a(arguments, 1))), this
            );
          }),
          (t.add = function (e, t) {
            return this._C.Slides.add(e, t), this;
          }),
          (t.remove = function (e) {
            return this._C.Slides.remove(e), this;
          }),
          (t.is = function (e) {
            return this._o.type === e;
          }),
          (t.refresh = function () {
            return this.emit(em), this;
          }),
          (t.destroy = function (e) {
            void 0 === e && (e = !0);
            var t = this.event,
              n = this.state;
            return (
              n.is(1)
                ? ek(this).on(ep, this.destroy.bind(this, e))
                : (I(
                    this._C,
                    function (t) {
                      t.destroy && t.destroy(e);
                    },
                    !0
                  ),
                  t.emit(eI),
                  t.destroy(),
                  e && i(this.splides),
                  n.set(7)),
              this
            );
          }),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(e.prototype, [
            {
              key: "options",
              get: function () {
                return this._o;
              },
              set: function (e) {
                this._C.Media.set(e, !0, !0);
              },
            },
            {
              key: "length",
              get: function () {
                return this._C.Slides.getLength(!0);
              },
            },
            {
              key: "index",
              get: function () {
                return this._C.Controller.getIndex();
              },
            },
          ]),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      })();
      (tG.defaults = {}),
        (tG.STATES = {
          CREATED: 1,
          MOUNTED: 2,
          IDLE: 3,
          MOVING: 4,
          SCROLLING: 5,
          DRAGGING: 6,
          DESTROYED: 7,
        });
      var tU = [
        [ef, "onMounted"],
        [ep, "onReady"],
        [eE, "onMove"],
        [eh, "onMoved"],
        [ev, "onClick"],
        [eA, "onActive"],
        [eL, "onInactive"],
        [e_, "onVisible"],
        [eg, "onHidden"],
        [em, "onRefresh"],
        [ey, "onUpdated"],
        [eD, "onResize"],
        [eS, "onResized"],
        [eO, "onDrag"],
        [eT, "onDragging"],
        [eC, "onDragged"],
        [eb, "onScroll"],
        [eR, "onScrolled"],
        [eI, "onDestroy"],
        [eN, "onArrowsMounted"],
        [eB, "onArrowsUpdated"],
        [eP, "onPaginationMounted"],
        [eH, "onPaginationUpdated"],
        [ew, "onNavigationMounted"],
        [ex, "onAutoplayPlay"],
        [eM, "onAutoplayPlaying"],
        [eK, "onAutoplayPause"],
        [ej, "onLazyLoadLoaded"],
      ];
      function tY(...e) {
        return e.filter(Boolean).join(" ");
      }
      function tF(e) {
        return null !== e && "object" == typeof e;
      }
      function tW(e, t) {
        return (
          !(function (e, t) {
            if (e) {
              let n = Object.keys(e);
              for (let r = 0; r < n.length; r++) {
                let o = n[r];
                if ("__proto__" !== o && !1 === t(e[o], o)) break;
              }
            }
          })(t, (t, n) => {
            Array.isArray(t)
              ? (e[n] = t.slice())
              : tF(t)
              ? (e[n] = tW(tF(e[n]) ? e[n] : {}, t))
              : (e[n] = t);
          }),
          e
        );
      }
      var tz = ({ children: e, className: t, ...n }) =>
          r.createElement(
            "div",
            { className: tY("splide__track", t), ...n },
            r.createElement("ul", { className: "splide__list" }, e)
          ),
        tX = class extends r.Component {
          constructor() {
            super(...arguments),
              (this.splideRef = r.createRef()),
              (this.slides = []);
          }
          componentDidMount() {
            let { options: e, extensions: t, transition: n } = this.props,
              { current: r } = this.splideRef;
            r &&
              ((this.splide = new tG(r, e)),
              this.bind(this.splide),
              this.splide.mount(t, n),
              (this.options = tW({}, e || {})),
              (this.slides = this.getSlides()));
          }
          componentWillUnmount() {
            this.splide && (this.splide.destroy(), (this.splide = void 0)),
              (this.options = void 0),
              (this.slides.length = 0);
          }
          componentDidUpdate() {
            var e;
            if (!this.splide) return;
            let { options: t } = this.props;
            t &&
              !(function e(t, n) {
                if (Array.isArray(t) && Array.isArray(n))
                  return (
                    t.length === n.length && !t.some((t, r) => !e(t, n[r]))
                  );
                if (tF(t) && tF(n)) {
                  let r = Object.keys(t),
                    o = Object.keys(n);
                  return (
                    r.length === o.length &&
                    !r.some(
                      (r) =>
                        !Object.prototype.hasOwnProperty.call(n, r) ||
                        !e(t[r], n[r])
                    )
                  );
                }
                return t === n;
              })(this.options, t) &&
              ((this.splide.options = t), (this.options = tW({}, t)));
            let n = this.getSlides();
            ((e = this.slides).length !== n.length ||
              e.some((e, t) => e !== n[t])) &&
              (this.splide.refresh(), (this.slides = n));
          }
          sync(e) {
            var t;
            null == (t = this.splide) || t.sync(e);
          }
          go(e) {
            var t;
            null == (t = this.splide) || t.go(e);
          }
          getSlides() {
            var e;
            if (this.splide) {
              let t =
                null == (e = this.splide.Components.Elements)
                  ? void 0
                  : e.list.children;
              return (t && Array.prototype.slice.call(t)) || [];
            }
            return [];
          }
          bind(e) {
            tU.forEach(([t, n]) => {
              let r = this.props[n];
              "function" == typeof r &&
                e.on(t, (...t) => {
                  r(e, ...t);
                });
            });
          }
          omit(e, t) {
            return (
              t.forEach((t) => {
                Object.prototype.hasOwnProperty.call(e, t) && delete e[t];
              }),
              e
            );
          }
          render() {
            let {
              className: e,
              tag: t = "div",
              hasTrack: n = !0,
              children: o,
              ...i
            } = this.props;
            return r.createElement(
              t,
              {
                className: tY("splide", e),
                ref: this.splideRef,
                ...this.omit(i, ["options", ...tU.map((e) => e[1])]),
              },
              n ? r.createElement(tz, null, o) : o
            );
          }
        },
        tV = ({ children: e, className: t, ...n }) =>
          r.createElement("li", { className: tY("splide__slide", t), ...n }, e);
    },
    27780: (e, t, n) => {
      "use strict";
      n.d(t, {
        UC: () => en,
        VY: () => eo,
        ZL: () => ee,
        bL: () => Z,
        bm: () => ei,
        hE: () => er,
        hJ: () => et,
        l9: () => J,
      });
      var r = n(55729),
        o = n(25269),
        i = n(40041),
        a = n(99829),
        u = n(67913),
        s = n(16697),
        c = n(27555),
        l = n(41679),
        d = n(61486),
        f = n(78749),
        p = n(19639),
        E = n(74249),
        h = n(1713),
        v = n(20184),
        A = n(97628),
        L = n(6029),
        _ = "Dialog",
        [g, m] = (0, a.A)(_),
        [y, D] = g(_),
        S = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              modal: c = !0,
            } = e,
            l = r.useRef(null),
            d = r.useRef(null),
            [f, p] = (0, s.i)({
              prop: o,
              defaultProp: i ?? !1,
              onChange: a,
              caller: _,
            });
          return (0, L.jsx)(y, {
            scope: t,
            triggerRef: l,
            contentRef: d,
            contentId: (0, u.B)(),
            titleId: (0, u.B)(),
            descriptionId: (0, u.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: n,
          });
        };
      S.displayName = _;
      var O = "DialogTrigger",
        T = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            a = D(O, n),
            u = (0, i.s)(t, a.triggerRef);
          return (0, L.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": z(a.open),
            ...r,
            ref: u,
            onClick: (0, o.m)(e.onClick, a.onOpenToggle),
          });
        });
      T.displayName = O;
      var C = "DialogPortal",
        [b, R] = g(C, { forceMount: void 0 }),
        I = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: o,
              container: i,
            } = e,
            a = D(C, t);
          return (0, L.jsx)(b, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e) =>
              (0, L.jsx)(f.C, {
                present: n || a.open,
                children: (0, L.jsx)(d.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      I.displayName = C;
      var N = "DialogOverlay",
        B = r.forwardRef((e, t) => {
          let n = R(N, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = D(N, e.__scopeDialog);
          return i.modal
            ? (0, L.jsx)(f.C, {
                present: r || i.open,
                children: (0, L.jsx)(H, { ...o, ref: t }),
              })
            : null;
        });
      B.displayName = N;
      var P = (0, A.TL)("DialogOverlay.RemoveScroll"),
        H = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = D(N, n);
          return (0, L.jsx)(h.A, {
            as: P,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, L.jsx)(p.sG.div, {
              "data-state": z(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        w = "DialogContent",
        x = r.forwardRef((e, t) => {
          let n = R(w, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = D(w, e.__scopeDialog);
          return (0, L.jsx)(f.C, {
            present: r || i.open,
            children: i.modal
              ? (0, L.jsx)(M, { ...o, ref: t })
              : (0, L.jsx)(K, { ...o, ref: t }),
          });
        });
      x.displayName = w;
      var M = r.forwardRef((e, t) => {
          let n = D(w, e.__scopeDialog),
            a = r.useRef(null),
            u = (0, i.s)(t, n.contentRef, a);
          return (
            r.useEffect(() => {
              let e = a.current;
              if (e) return (0, v.Eq)(e);
            }, []),
            (0, L.jsx)(j, {
              ...e,
              ref: u,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                e.preventDefault(), n.triggerRef.current?.focus();
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        K = r.forwardRef((e, t) => {
          let n = D(w, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, L.jsx)(j, {
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
        j = r.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: u,
              ...s
            } = e,
            d = D(w, n),
            f = r.useRef(null),
            p = (0, i.s)(t, f);
          return (
            (0, E.Oh)(),
            (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)(l.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: u,
                  children: (0, L.jsx)(c.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": z(d.open),
                    ...s,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, L.jsxs)(L.Fragment, {
                  children: [
                    (0, L.jsx)(Q, { titleId: d.titleId }),
                    (0, L.jsx)($, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        k = "DialogTitle",
        G = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = D(k, n);
          return (0, L.jsx)(p.sG.h2, { id: o.titleId, ...r, ref: t });
        });
      G.displayName = k;
      var U = "DialogDescription",
        Y = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = D(U, n);
          return (0, L.jsx)(p.sG.p, { id: o.descriptionId, ...r, ref: t });
        });
      Y.displayName = U;
      var F = "DialogClose",
        W = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = D(F, n);
          return (0, L.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function z(e) {
        return e ? "open" : "closed";
      }
      W.displayName = F;
      var X = "DialogTitleWarning",
        [V, q] = (0, a.q)(X, {
          contentName: w,
          titleName: k,
          docsSlug: "dialog",
        }),
        Q = ({ titleId: e }) => {
          let t = q(X),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return (
            r.useEffect(() => {
              e && !document.getElementById(e) && console.error(n);
            }, [n, e]),
            null
          );
        },
        $ = ({ contentRef: e, descriptionId: t }) => {
          let n = q("DialogDescriptionWarning"),
            o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
          return (
            r.useEffect(() => {
              let n = e.current?.getAttribute("aria-describedby");
              t && n && !document.getElementById(t) && console.warn(o);
            }, [o, e, t]),
            null
          );
        },
        Z = S,
        J = T,
        ee = I,
        et = B,
        en = x,
        er = G,
        eo = Y,
        ei = W;
    },
    83071: (e, t, n) => {
      "use strict";
      n.d(t, { UC: () => w, ZL: () => H, bL: () => B, l9: () => P });
      var r,
        o = n(55729),
        i = n(25269),
        a = n(99829),
        u = n(16697),
        s = n(40041),
        c = n(20609),
        l = n(61486),
        d = n(78749),
        f = n(19639),
        p = n(27555),
        E = n(6029),
        h = "HoverCard",
        [v, A] = (0, a.A)(h, [c.Bk]),
        L = (0, c.Bk)(),
        [_, g] = v(h),
        m = (e) => {
          let {
              __scopeHoverCard: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: a,
              openDelay: s = 700,
              closeDelay: l = 300,
            } = e,
            d = L(t),
            f = o.useRef(0),
            p = o.useRef(0),
            v = o.useRef(!1),
            A = o.useRef(!1),
            [g, m] = (0, u.i)({
              prop: r,
              defaultProp: i ?? !1,
              onChange: a,
              caller: h,
            }),
            y = o.useCallback(() => {
              clearTimeout(p.current),
                (f.current = window.setTimeout(() => m(!0), s));
            }, [s, m]),
            D = o.useCallback(() => {
              clearTimeout(f.current),
                v.current ||
                  A.current ||
                  (p.current = window.setTimeout(() => m(!1), l));
            }, [l, m]),
            S = o.useCallback(() => m(!1), [m]);
          return (
            o.useEffect(
              () => () => {
                clearTimeout(f.current), clearTimeout(p.current);
              },
              []
            ),
            (0, E.jsx)(_, {
              scope: t,
              open: g,
              onOpenChange: m,
              onOpen: y,
              onClose: D,
              onDismiss: S,
              hasSelectionRef: v,
              isPointerDownOnContentRef: A,
              children: (0, E.jsx)(c.bL, { ...d, children: n }),
            })
          );
        };
      m.displayName = h;
      var y = "HoverCardTrigger",
        D = o.forwardRef((e, t) => {
          let { __scopeHoverCard: n, ...r } = e,
            o = g(y, n),
            a = L(n);
          return (0, E.jsx)(c.Mz, {
            asChild: !0,
            ...a,
            children: (0, E.jsx)(f.sG.a, {
              "data-state": o.open ? "open" : "closed",
              ...r,
              ref: t,
              onPointerEnter: (0, i.m)(e.onPointerEnter, N(o.onOpen)),
              onPointerLeave: (0, i.m)(e.onPointerLeave, N(o.onClose)),
              onFocus: (0, i.m)(e.onFocus, o.onOpen),
              onBlur: (0, i.m)(e.onBlur, o.onClose),
              onTouchStart: (0, i.m)(e.onTouchStart, (e) => e.preventDefault()),
            }),
          });
        });
      D.displayName = y;
      var S = "HoverCardPortal",
        [O, T] = v(S, { forceMount: void 0 }),
        C = (e) => {
          let {
              __scopeHoverCard: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = g(S, t);
          return (0, E.jsx)(O, {
            scope: t,
            forceMount: n,
            children: (0, E.jsx)(d.C, {
              present: n || i.open,
              children: (0, E.jsx)(l.Z, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      C.displayName = S;
      var b = "HoverCardContent",
        R = o.forwardRef((e, t) => {
          let n = T(b, e.__scopeHoverCard),
            { forceMount: r = n.forceMount, ...o } = e,
            a = g(b, e.__scopeHoverCard);
          return (0, E.jsx)(d.C, {
            present: r || a.open,
            children: (0, E.jsx)(I, {
              "data-state": a.open ? "open" : "closed",
              ...o,
              onPointerEnter: (0, i.m)(e.onPointerEnter, N(a.onOpen)),
              onPointerLeave: (0, i.m)(e.onPointerLeave, N(a.onClose)),
              ref: t,
            }),
          });
        });
      R.displayName = b;
      var I = o.forwardRef((e, t) => {
        let {
            __scopeHoverCard: n,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onInteractOutside: d,
            ...f
          } = e,
          h = g(b, n),
          v = L(n),
          A = o.useRef(null),
          _ = (0, s.s)(t, A),
          [m, y] = o.useState(!1);
        return (
          o.useEffect(() => {
            if (m) {
              let e = document.body;
              return (
                (r = e.style.userSelect || e.style.webkitUserSelect),
                (e.style.userSelect = "none"),
                (e.style.webkitUserSelect = "none"),
                () => {
                  (e.style.userSelect = r), (e.style.webkitUserSelect = r);
                }
              );
            }
          }, [m]),
          o.useEffect(() => {
            if (A.current) {
              let e = () => {
                y(!1),
                  (h.isPointerDownOnContentRef.current = !1),
                  setTimeout(() => {
                    document.getSelection()?.toString() !== "" &&
                      (h.hasSelectionRef.current = !0);
                  });
              };
              return (
                document.addEventListener("pointerup", e),
                () => {
                  document.removeEventListener("pointerup", e),
                    (h.hasSelectionRef.current = !1),
                    (h.isPointerDownOnContentRef.current = !1);
                }
              );
            }
          }, [h.isPointerDownOnContentRef, h.hasSelectionRef]),
          o.useEffect(() => {
            A.current &&
              (function (e) {
                let t = [],
                  n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: (e) =>
                      e.tabIndex >= 0
                        ? NodeFilter.FILTER_ACCEPT
                        : NodeFilter.FILTER_SKIP,
                  });
                for (; n.nextNode(); ) t.push(n.currentNode);
                return t;
              })(A.current).forEach((e) => e.setAttribute("tabindex", "-1"));
          }),
          (0, E.jsx)(p.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onInteractOutside: d,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: (0, i.m)(l, (e) => {
              e.preventDefault();
            }),
            onDismiss: h.onDismiss,
            children: (0, E.jsx)(c.UC, {
              ...v,
              ...f,
              onPointerDown: (0, i.m)(f.onPointerDown, (e) => {
                e.currentTarget.contains(e.target) && y(!0),
                  (h.hasSelectionRef.current = !1),
                  (h.isPointerDownOnContentRef.current = !0);
              }),
              ref: _,
              style: {
                ...f.style,
                userSelect: m ? "text" : void 0,
                WebkitUserSelect: m ? "text" : void 0,
                "--radix-hover-card-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-hover-card-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-hover-card-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-hover-card-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-hover-card-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            }),
          })
        );
      });
      function N(e) {
        return (t) => ("touch" === t.pointerType ? void 0 : e());
      }
      o.forwardRef((e, t) => {
        let { __scopeHoverCard: n, ...r } = e,
          o = L(n);
        return (0, E.jsx)(c.i3, { ...o, ...r, ref: t });
      }).displayName = "HoverCardArrow";
      var B = m,
        P = D,
        H = C,
        w = R;
    },
    84797: (e, t, n) => {
      "use strict";
      var r,
        o,
        i = n(55729),
        a = (function (e) {
          return e && "object" == typeof e && "default" in e ? e.default : e;
        })(i),
        u = function () {
          return (u =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        s =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : {};
      function c(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function l(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var d = l(function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BLOCKS = void 0),
          ((n = t.BLOCKS || (t.BLOCKS = {})).DOCUMENT = "document"),
          (n.PARAGRAPH = "paragraph"),
          (n.HEADING_1 = "heading-1"),
          (n.HEADING_2 = "heading-2"),
          (n.HEADING_3 = "heading-3"),
          (n.HEADING_4 = "heading-4"),
          (n.HEADING_5 = "heading-5"),
          (n.HEADING_6 = "heading-6"),
          (n.OL_LIST = "ordered-list"),
          (n.UL_LIST = "unordered-list"),
          (n.LIST_ITEM = "list-item"),
          (n.HR = "hr"),
          (n.QUOTE = "blockquote"),
          (n.EMBEDDED_ENTRY = "embedded-entry-block"),
          (n.EMBEDDED_ASSET = "embedded-asset-block"),
          (n.EMBEDDED_RESOURCE = "embedded-resource-block"),
          (n.TABLE = "table"),
          (n.TABLE_ROW = "table-row"),
          (n.TABLE_CELL = "table-cell"),
          (n.TABLE_HEADER_CELL = "table-header-cell");
      });
      c(d), d.BLOCKS;
      var f = l(function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.INLINES = void 0),
          ((n = t.INLINES || (t.INLINES = {})).HYPERLINK = "hyperlink"),
          (n.ENTRY_HYPERLINK = "entry-hyperlink"),
          (n.ASSET_HYPERLINK = "asset-hyperlink"),
          (n.RESOURCE_HYPERLINK = "resource-hyperlink"),
          (n.EMBEDDED_ENTRY = "embedded-entry-inline"),
          (n.EMBEDDED_RESOURCE = "embedded-resource-inline");
      });
      c(f), f.INLINES;
      var p = l(function (e, t) {
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          ((r = n || (n = {})).BOLD = "bold"),
          (r.ITALIC = "italic"),
          (r.UNDERLINE = "underline"),
          (r.CODE = "code"),
          (r.SUPERSCRIPT = "superscript"),
          (r.SUBSCRIPT = "subscript"),
          (t.default = n);
      });
      c(p);
      var E = l(function (e, t) {
        var n,
          r =
            (s && s.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 == arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                  (!r && o in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, o)),
                    (r[o] = t[o]));
              return e.concat(r || Array.prototype.slice.call(t));
            },
          o =
            (s && s.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.V1_MARKS =
            t.V1_NODE_TYPES =
            t.TEXT_CONTAINERS =
            t.HEADINGS =
            t.CONTAINERS =
            t.VOID_BLOCKS =
            t.TABLE_BLOCKS =
            t.LIST_ITEM_BLOCKS =
            t.TOP_LEVEL_BLOCKS =
              void 0);
        var i = o(p);
        (t.TOP_LEVEL_BLOCKS = [
          d.BLOCKS.PARAGRAPH,
          d.BLOCKS.HEADING_1,
          d.BLOCKS.HEADING_2,
          d.BLOCKS.HEADING_3,
          d.BLOCKS.HEADING_4,
          d.BLOCKS.HEADING_5,
          d.BLOCKS.HEADING_6,
          d.BLOCKS.OL_LIST,
          d.BLOCKS.UL_LIST,
          d.BLOCKS.HR,
          d.BLOCKS.QUOTE,
          d.BLOCKS.EMBEDDED_ENTRY,
          d.BLOCKS.EMBEDDED_ASSET,
          d.BLOCKS.EMBEDDED_RESOURCE,
          d.BLOCKS.TABLE,
        ]),
          (t.LIST_ITEM_BLOCKS = [
            d.BLOCKS.PARAGRAPH,
            d.BLOCKS.HEADING_1,
            d.BLOCKS.HEADING_2,
            d.BLOCKS.HEADING_3,
            d.BLOCKS.HEADING_4,
            d.BLOCKS.HEADING_5,
            d.BLOCKS.HEADING_6,
            d.BLOCKS.OL_LIST,
            d.BLOCKS.UL_LIST,
            d.BLOCKS.HR,
            d.BLOCKS.QUOTE,
            d.BLOCKS.EMBEDDED_ENTRY,
            d.BLOCKS.EMBEDDED_ASSET,
            d.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.TABLE_BLOCKS = [
            d.BLOCKS.TABLE,
            d.BLOCKS.TABLE_ROW,
            d.BLOCKS.TABLE_CELL,
            d.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (t.VOID_BLOCKS = [
            d.BLOCKS.HR,
            d.BLOCKS.EMBEDDED_ENTRY,
            d.BLOCKS.EMBEDDED_ASSET,
            d.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          ((n = {})[d.BLOCKS.OL_LIST] = [d.BLOCKS.LIST_ITEM]),
          (n[d.BLOCKS.UL_LIST] = [d.BLOCKS.LIST_ITEM]),
          (n[d.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (n[d.BLOCKS.QUOTE] = [d.BLOCKS.PARAGRAPH]),
          (n[d.BLOCKS.TABLE] = [d.BLOCKS.TABLE_ROW]),
          (n[d.BLOCKS.TABLE_ROW] = [
            d.BLOCKS.TABLE_CELL,
            d.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (n[d.BLOCKS.TABLE_CELL] = [d.BLOCKS.PARAGRAPH]),
          (n[d.BLOCKS.TABLE_HEADER_CELL] = [d.BLOCKS.PARAGRAPH]),
          (t.CONTAINERS = n),
          (t.HEADINGS = [
            d.BLOCKS.HEADING_1,
            d.BLOCKS.HEADING_2,
            d.BLOCKS.HEADING_3,
            d.BLOCKS.HEADING_4,
            d.BLOCKS.HEADING_5,
            d.BLOCKS.HEADING_6,
          ]),
          (t.TEXT_CONTAINERS = r([d.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
          (t.V1_NODE_TYPES = [
            d.BLOCKS.DOCUMENT,
            d.BLOCKS.PARAGRAPH,
            d.BLOCKS.HEADING_1,
            d.BLOCKS.HEADING_2,
            d.BLOCKS.HEADING_3,
            d.BLOCKS.HEADING_4,
            d.BLOCKS.HEADING_5,
            d.BLOCKS.HEADING_6,
            d.BLOCKS.OL_LIST,
            d.BLOCKS.UL_LIST,
            d.BLOCKS.LIST_ITEM,
            d.BLOCKS.HR,
            d.BLOCKS.QUOTE,
            d.BLOCKS.EMBEDDED_ENTRY,
            d.BLOCKS.EMBEDDED_ASSET,
            f.INLINES.HYPERLINK,
            f.INLINES.ENTRY_HYPERLINK,
            f.INLINES.ASSET_HYPERLINK,
            f.INLINES.EMBEDDED_ENTRY,
            "text",
          ]),
          (t.V1_MARKS = [
            i.default.BOLD,
            i.default.CODE,
            i.default.ITALIC,
            i.default.UNDERLINE,
          ]);
      });
      c(E),
        E.V1_MARKS,
        E.V1_NODE_TYPES,
        E.TEXT_CONTAINERS,
        E.HEADINGS,
        E.CONTAINERS,
        E.VOID_BLOCKS,
        E.TABLE_BLOCKS,
        E.LIST_ITEM_BLOCKS,
        E.TOP_LEVEL_BLOCKS;
      var h = l(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      c(h);
      var v = l(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      c(v);
      var A = l(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            nodeType: d.BLOCKS.DOCUMENT,
            data: {},
            content: [
              {
                nodeType: d.BLOCKS.PARAGRAPH,
                data: {},
                content: [{ nodeType: "text", value: "", marks: [], data: {} }],
              },
            ],
          });
      });
      c(A);
      var L = l(function (e, t) {
        function n(e, t) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++)
            if (t === e[r[n]]) return !0;
          return !1;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isText = t.isBlock = t.isInline = void 0),
          (t.isInline = function (e) {
            return n(f.INLINES, e.nodeType);
          }),
          (t.isBlock = function (e) {
            return n(d.BLOCKS, e.nodeType);
          }),
          (t.isText = function (e) {
            return "text" === e.nodeType;
          });
      });
      c(L), L.isText, L.isBlock, L.isInline;
      var _ = l(function (e, t) {
        var n =
            (s && s.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (!o ||
                    ("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          r =
            (s && s.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (s && s.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r);
            },
          i =
            (s && s.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var o in e)
                  "default" !== o &&
                    Object.prototype.hasOwnProperty.call(e, o) &&
                    n(t, e, o);
              return r(t, e), t;
            },
          a =
            (s && s.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.helpers =
            t.EMPTY_DOCUMENT =
            t.MARKS =
            t.INLINES =
            t.BLOCKS =
              void 0),
          Object.defineProperty(t, "BLOCKS", {
            enumerable: !0,
            get: function () {
              return d.BLOCKS;
            },
          }),
          Object.defineProperty(t, "INLINES", {
            enumerable: !0,
            get: function () {
              return f.INLINES;
            },
          }),
          Object.defineProperty(t, "MARKS", {
            enumerable: !0,
            get: function () {
              return a(p).default;
            },
          }),
          o(E, t),
          o(h, t),
          o(v, t),
          Object.defineProperty(t, "EMPTY_DOCUMENT", {
            enumerable: !0,
            get: function () {
              return a(A).default;
            },
          }),
          (t.helpers = i(L));
      });
      c(_);
      var g = _.helpers;
      _.EMPTY_DOCUMENT;
      var m = _.MARKS,
        y = _.INLINES,
        D = _.BLOCKS,
        S =
          (((r = {})[D.DOCUMENT] = function (e, t) {
            return t;
          }),
          (r[D.PARAGRAPH] = function (e, t) {
            return a.createElement("p", null, t);
          }),
          (r[D.HEADING_1] = function (e, t) {
            return a.createElement("h1", null, t);
          }),
          (r[D.HEADING_2] = function (e, t) {
            return a.createElement("h2", null, t);
          }),
          (r[D.HEADING_3] = function (e, t) {
            return a.createElement("h3", null, t);
          }),
          (r[D.HEADING_4] = function (e, t) {
            return a.createElement("h4", null, t);
          }),
          (r[D.HEADING_5] = function (e, t) {
            return a.createElement("h5", null, t);
          }),
          (r[D.HEADING_6] = function (e, t) {
            return a.createElement("h6", null, t);
          }),
          (r[D.EMBEDDED_ENTRY] = function (e, t) {
            return a.createElement("div", null, t);
          }),
          (r[D.EMBEDDED_RESOURCE] = function (e, t) {
            return a.createElement("div", null, t);
          }),
          (r[D.UL_LIST] = function (e, t) {
            return a.createElement("ul", null, t);
          }),
          (r[D.OL_LIST] = function (e, t) {
            return a.createElement("ol", null, t);
          }),
          (r[D.LIST_ITEM] = function (e, t) {
            return a.createElement("li", null, t);
          }),
          (r[D.QUOTE] = function (e, t) {
            return a.createElement("blockquote", null, t);
          }),
          (r[D.HR] = function () {
            return a.createElement("hr", null);
          }),
          (r[D.TABLE] = function (e, t) {
            return a.createElement(
              "table",
              null,
              a.createElement("tbody", null, t)
            );
          }),
          (r[D.TABLE_ROW] = function (e, t) {
            return a.createElement("tr", null, t);
          }),
          (r[D.TABLE_HEADER_CELL] = function (e, t) {
            return a.createElement("th", null, t);
          }),
          (r[D.TABLE_CELL] = function (e, t) {
            return a.createElement("td", null, t);
          }),
          (r[y.ASSET_HYPERLINK] = function (e) {
            return T(y.ASSET_HYPERLINK, e);
          }),
          (r[y.ENTRY_HYPERLINK] = function (e) {
            return T(y.ENTRY_HYPERLINK, e);
          }),
          (r[y.RESOURCE_HYPERLINK] = function (e) {
            return C(y.RESOURCE_HYPERLINK, e);
          }),
          (r[y.EMBEDDED_ENTRY] = function (e) {
            return T(y.EMBEDDED_ENTRY, e);
          }),
          (r[y.EMBEDDED_RESOURCE] = function (e, t) {
            return C(y.EMBEDDED_RESOURCE, e);
          }),
          (r[y.HYPERLINK] = function (e, t) {
            return a.createElement("a", { href: e.data.uri }, t);
          }),
          r),
        O =
          (((o = {})[m.BOLD] = function (e) {
            return a.createElement("b", null, e);
          }),
          (o[m.ITALIC] = function (e) {
            return a.createElement("i", null, e);
          }),
          (o[m.UNDERLINE] = function (e) {
            return a.createElement("u", null, e);
          }),
          (o[m.CODE] = function (e) {
            return a.createElement("code", null, e);
          }),
          (o[m.SUPERSCRIPT] = function (e) {
            return a.createElement("sup", null, e);
          }),
          (o[m.SUBSCRIPT] = function (e) {
            return a.createElement("sub", null, e);
          }),
          o);
      function T(e, t) {
        return a.createElement(
          "span",
          { key: t.data.target.sys.id },
          "type: ",
          t.nodeType,
          " id: ",
          t.data.target.sys.id
        );
      }
      function C(e, t) {
        return a.createElement(
          "span",
          { key: t.data.target.sys.urn },
          "type: ",
          t.nodeType,
          " urn: ",
          t.data.target.sys.urn
        );
      }
      t.i = function (e, t) {
        return (void 0 === t && (t = {}), e)
          ? (function e(t, n) {
              var r = n.renderNode,
                o = n.renderMark,
                u = n.renderText,
                s = n.preserveWhitespace;
              if (g.isText(t)) {
                var c = u ? u(t.value) : t.value;
                if (s) {
                  var l = (c = c.replace(/ {2,}/g, function (e) {
                      return "&nbsp;".repeat(e.length);
                    })).split("\n"),
                    d = [];
                  l.forEach(function (e, t) {
                    d.push(e),
                      t !== l.length - 1 && d.push(a.createElement("br", null));
                  }),
                    (c = d);
                }
                return t.marks.reduce(function (e, t) {
                  return o[t.type] ? o[t.type](e) : e;
                }, c);
              }
              var f = t.content.map(function (t, r) {
                var o;
                return (
                  (o = e(t, n)),
                  i.isValidElement(o) && null === o.key
                    ? i.cloneElement(o, { key: r })
                    : o
                );
              });
              return t.nodeType && r[t.nodeType]
                ? r[t.nodeType](t, f)
                : a.createElement(a.Fragment, null, f);
            })(e, {
              renderNode: u(u({}, S), t.renderNode),
              renderMark: u(u({}, O), t.renderMark),
              renderText: t.renderText,
              preserveWhitespace: t.preserveWhitespace,
            })
          : null;
      };
    },
    97911: () => {},
  },
]);
//# sourceMappingURL=5559-887cdb851d5ddcd6.js.map
