!(function (t) {
  var e = {};
  function i(o) {
    if (e[o]) return e[o].exports;
    var s = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, o) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (i.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          i.d(
            o,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return o;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 2));
})([
  function (t, e, i) {
    "use strict";
    /*! npm.im/object-fit-images 3.2.4 */ var o = "bfred-it:object-fit-images",
      s = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
      n =
        "undefined" == typeof Image
          ? { style: { "object-position": 1 } }
          : new Image(),
      r = "object-fit" in n.style,
      l = "object-position" in n.style,
      a = "background-size" in n.style,
      d = "string" == typeof n.currentSrc,
      c = n.getAttribute,
      p = n.setAttribute,
      u = !1;
    function h(t, e, i) {
      var o =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
        (e || 1) +
        "' height='" +
        (i || 0) +
        "'%3E%3C/svg%3E";
      c.call(t, "src") !== o && p.call(t, "src", o);
    }
    function f(t, e) {
      t.naturalWidth ? e(t) : setTimeout(f, 100, t, e);
    }
    function v(t) {
      var e = (function (t) {
          for (
            var e, i = getComputedStyle(t).fontFamily, o = {};
            null !== (e = s.exec(i));

          )
            o[e[1]] = e[2];
          return o;
        })(t),
        i = t[o];
      if (((e["object-fit"] = e["object-fit"] || "fill"), !i.img)) {
        if ("fill" === e["object-fit"]) return;
        if (!i.skipTest && r && !e["object-position"]) return;
      }
      if (!i.img) {
        (i.img = new Image(t.width, t.height)),
          (i.img.srcset = c.call(t, "data-ofi-srcset") || t.srcset),
          (i.img.src = c.call(t, "data-ofi-src") || t.src),
          p.call(t, "data-ofi-src", t.src),
          t.srcset && p.call(t, "data-ofi-srcset", t.srcset),
          h(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
          t.srcset && (t.srcset = "");
        try {
          !(function (t) {
            var e = {
              get: function (e) {
                return t[o].img[e || "src"];
              },
              set: function (e, i) {
                return (
                  (t[o].img[i || "src"] = e),
                  p.call(t, "data-ofi-" + i, e),
                  v(t),
                  e
                );
              },
            };
            Object.defineProperty(t, "src", e),
              Object.defineProperty(t, "currentSrc", {
                get: function () {
                  return e.get("currentSrc");
                },
              }),
              Object.defineProperty(t, "srcset", {
                get: function () {
                  return e.get("srcset");
                },
                set: function (t) {
                  return e.set(t, "srcset");
                },
              });
          })(t);
        } catch (t) {
          window.console && console.warn("https://bit.ly/ofi-old-browser");
        }
      }
      !(function (t) {
        if (t.srcset && !d && window.picturefill) {
          var e = window.picturefill._;
          (t[e.ns] && t[e.ns].evaled) || e.fillImg(t, { reselect: !0 }),
            t[e.ns].curSrc ||
              ((t[e.ns].supported = !1), e.fillImg(t, { reselect: !0 })),
            (t.currentSrc = t[e.ns].curSrc || t.src);
        }
      })(i.img),
        (t.style.backgroundImage =
          'url("' +
          (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') +
          '")'),
        (t.style.backgroundPosition = e["object-position"] || "center"),
        (t.style.backgroundRepeat = "no-repeat"),
        (t.style.backgroundOrigin = "content-box"),
        /scale-down/.test(e["object-fit"])
          ? f(i.img, function () {
              i.img.naturalWidth > t.width || i.img.naturalHeight > t.height
                ? (t.style.backgroundSize = "contain")
                : (t.style.backgroundSize = "auto");
            })
          : (t.style.backgroundSize = e["object-fit"]
              .replace("none", "auto")
              .replace("fill", "100% 100%")),
        f(i.img, function (e) {
          h(t, e.naturalWidth, e.naturalHeight);
        });
    }
    function m(t, e) {
      var i = !u && !t;
      if (((e = e || {}), (t = t || "img"), (l && !e.skipTest) || !a))
        return !1;
      "img" === t
        ? (t = document.getElementsByTagName("img"))
        : "string" == typeof t
        ? (t = document.querySelectorAll(t))
        : "length" in t || (t = [t]);
      for (var s = 0; s < t.length; s++)
        (t[s][o] = t[s][o] || { skipTest: e.skipTest }), v(t[s]);
      i &&
        (document.body.addEventListener(
          "load",
          function (t) {
            "IMG" === t.target.tagName && m(t.target, { skipTest: e.skipTest });
          },
          !0
        ),
        (u = !0),
        (t = "img")),
        e.watchMQ &&
          window.addEventListener(
            "resize",
            m.bind(null, t, { skipTest: e.skipTest })
          );
    }
    (m.supportsObjectFit = r),
      (m.supportsObjectPosition = l),
      (function () {
        function t(t, e) {
          return t[o] && t[o].img && ("src" === e || "srcset" === e)
            ? t[o].img
            : t;
        }
        l ||
          ((HTMLImageElement.prototype.getAttribute = function (e) {
            return c.call(t(this, e), e);
          }),
          (HTMLImageElement.prototype.setAttribute = function (e, i) {
            return p.call(t(this, e), e, String(i));
          }));
      })(),
      (t.exports = m);
  },
  function (t, e, i) {
    (function (e) {
      t.exports = (function t(e, i, o) {
        function s(r, l) {
          if (!i[r]) {
            if (!e[r]) {
              if (n) return n(r, !0);
              var a = new Error("Cannot find module '" + r + "'");
              throw ((a.code = "MODULE_NOT_FOUND"), a);
            }
            var d = (i[r] = { exports: {} });
            e[r][0].call(
              d.exports,
              function (t) {
                var i = e[r][1][t];
                return s(i || t);
              },
              d,
              d.exports,
              t,
              e,
              i,
              o
            );
          }
          return i[r].exports;
        }
        for (var n = !1, r = 0; r < o.length; r++) s(o[r]);
        return s;
      })(
        {
          1: [
            function (t, e, i) {
              /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
              "use strict";
              var o = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;
              function r(t) {
                if (null == t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              }
              e.exports = (function () {
                try {
                  if (!Object.assign) return !1;
                  var t = new String("abc");
                  if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
                    return !1;
                  for (var e = {}, i = 0; i < 10; i++)
                    e["_" + String.fromCharCode(i)] = i;
                  if (
                    "0123456789" !==
                    Object.getOwnPropertyNames(e)
                      .map(function (t) {
                        return e[t];
                      })
                      .join("")
                  )
                    return !1;
                  var o = {};
                  return (
                    "abcdefghijklmnopqrst".split("").forEach(function (t) {
                      o[t] = t;
                    }),
                    "abcdefghijklmnopqrst" ===
                      Object.keys(Object.assign({}, o)).join("")
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? Object.assign
                : function (t, e) {
                    for (var i, l, a = r(t), d = 1; d < arguments.length; d++) {
                      for (var c in (i = Object(arguments[d])))
                        s.call(i, c) && (a[c] = i[c]);
                      if (o) {
                        l = o(i);
                        for (var p = 0; p < l.length; p++)
                          n.call(i, l[p]) && (a[l[p]] = i[l[p]]);
                      }
                    }
                    return a;
                  };
            },
            {},
          ],
          2: [
            function (t, e, i) {
              (function (t) {
                (function () {
                  var i, o, s, n, r, l;
                  "undefined" != typeof performance &&
                  null !== performance &&
                  performance.now
                    ? (e.exports = function () {
                        return performance.now();
                      })
                    : null != t && t.hrtime
                    ? ((e.exports = function () {
                        return (i() - r) / 1e6;
                      }),
                      (o = t.hrtime),
                      (n = (i = function () {
                        var t;
                        return 1e9 * (t = o())[0] + t[1];
                      })()),
                      (l = 1e9 * t.uptime()),
                      (r = n - l))
                    : Date.now
                    ? ((e.exports = function () {
                        return Date.now() - s;
                      }),
                      (s = Date.now()))
                    : ((e.exports = function () {
                        return new Date().getTime() - s;
                      }),
                      (s = new Date().getTime()));
                }.call(this));
              }.call(this, t("_process")));
            },
            { _process: 3 },
          ],
          3: [
            function (t, e, i) {
              var o,
                s,
                n = (e.exports = {});
              function r() {
                throw new Error("setTimeout has not been defined");
              }
              function l() {
                throw new Error("clearTimeout has not been defined");
              }
              function a(t) {
                if (o === setTimeout) return setTimeout(t, 0);
                if ((o === r || !o) && setTimeout)
                  return (o = setTimeout), setTimeout(t, 0);
                try {
                  return o(t, 0);
                } catch (e) {
                  try {
                    return o.call(null, t, 0);
                  } catch (e) {
                    return o.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  o = "function" == typeof setTimeout ? setTimeout : r;
                } catch (t) {
                  o = r;
                }
                try {
                  s = "function" == typeof clearTimeout ? clearTimeout : l;
                } catch (t) {
                  s = l;
                }
              })();
              var d,
                c = [],
                p = !1,
                u = -1;
              function h() {
                p &&
                  d &&
                  ((p = !1),
                  d.length ? (c = d.concat(c)) : (u = -1),
                  c.length && f());
              }
              function f() {
                if (!p) {
                  var t = a(h);
                  p = !0;
                  for (var e = c.length; e; ) {
                    for (d = c, c = []; ++u < e; ) d && d[u].run();
                    (u = -1), (e = c.length);
                  }
                  (d = null),
                    (p = !1),
                    (function (t) {
                      if (s === clearTimeout) return clearTimeout(t);
                      if ((s === l || !s) && clearTimeout)
                        return (s = clearTimeout), clearTimeout(t);
                      try {
                        s(t);
                      } catch (e) {
                        try {
                          return s.call(null, t);
                        } catch (e) {
                          return s.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function v(t, e) {
                (this.fun = t), (this.array = e);
              }
              function m() {}
              (n.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var i = 1; i < arguments.length; i++)
                    e[i - 1] = arguments[i];
                c.push(new v(t, e)), 1 !== c.length || p || a(f);
              }),
                (v.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (n.title = "browser"),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ""),
                (n.versions = {}),
                (n.on = m),
                (n.addListener = m),
                (n.once = m),
                (n.off = m),
                (n.removeListener = m),
                (n.removeAllListeners = m),
                (n.emit = m),
                (n.prependListener = m),
                (n.prependOnceListener = m),
                (n.listeners = function (t) {
                  return [];
                }),
                (n.binding = function (t) {
                  throw new Error("process.binding is not supported");
                }),
                (n.cwd = function () {
                  return "/";
                }),
                (n.chdir = function (t) {
                  throw new Error("process.chdir is not supported");
                }),
                (n.umask = function () {
                  return 0;
                });
            },
            {},
          ],
          4: [
            function (t, i, o) {
              (function (e) {
                for (
                  var o = t("performance-now"),
                    s = "undefined" == typeof window ? e : window,
                    n = ["moz", "webkit"],
                    r = "AnimationFrame",
                    l = s["request" + r],
                    a = s["cancel" + r] || s["cancelRequest" + r],
                    d = 0;
                  !l && d < n.length;
                  d++
                )
                  (l = s[n[d] + "Request" + r]),
                    (a =
                      s[n[d] + "Cancel" + r] || s[n[d] + "CancelRequest" + r]);
                if (!l || !a) {
                  var c = 0,
                    p = 0,
                    u = [];
                  (l = function (t) {
                    if (0 === u.length) {
                      var e = o(),
                        i = Math.max(0, 1e3 / 60 - (e - c));
                      (c = i + e),
                        setTimeout(function () {
                          var t = u.slice(0);
                          u.length = 0;
                          for (var e = 0; e < t.length; e++)
                            if (!t[e].cancelled)
                              try {
                                t[e].callback(c);
                              } catch (t) {
                                setTimeout(function () {
                                  throw t;
                                }, 0);
                              }
                        }, Math.round(i));
                    }
                    return (
                      u.push({ handle: ++p, callback: t, cancelled: !1 }), p
                    );
                  }),
                    (a = function (t) {
                      for (var e = 0; e < u.length; e++)
                        u[e].handle === t && (u[e].cancelled = !0);
                    });
                }
                (i.exports = function (t) {
                  return l.call(s, t);
                }),
                  (i.exports.cancel = function () {
                    a.apply(s, arguments);
                  }),
                  (i.exports.polyfill = function () {
                    (s.requestAnimationFrame = l), (s.cancelAnimationFrame = a);
                  });
              }.call(
                this,
                void 0 !== e
                  ? e
                  : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {}
              ));
            },
            { "performance-now": 2 },
          ],
          5: [
            function (t, e, i) {
              "use strict";
              var o = (function () {
                  function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                      var o = e[i];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o);
                    }
                  }
                  return function (e, i, o) {
                    return i && t(e.prototype, i), o && t(e, o), e;
                  };
                })(),
                s = t("raf"),
                n = t("object-assign"),
                r = {
                  propertyCache: {},
                  vendors: [
                    null,
                    ["-webkit-", "webkit"],
                    ["-moz-", "Moz"],
                    ["-o-", "O"],
                    ["-ms-", "ms"],
                  ],
                  clamp: function (t, e, i) {
                    return e < i
                      ? t < e
                        ? e
                        : t > i
                        ? i
                        : t
                      : t < i
                      ? i
                      : t > e
                      ? e
                      : t;
                  },
                  data: function (t, e) {
                    return r.deserialize(t.getAttribute("data-" + e));
                  },
                  deserialize: function (t) {
                    return (
                      "true" === t ||
                      ("false" !== t &&
                        ("null" === t
                          ? null
                          : !isNaN(parseFloat(t)) && isFinite(t)
                          ? parseFloat(t)
                          : t))
                    );
                  },
                  camelCase: function (t) {
                    return t.replace(/-+(.)?/g, function (t, e) {
                      return e ? e.toUpperCase() : "";
                    });
                  },
                  accelerate: function (t) {
                    r.css(
                      t,
                      "transform",
                      "translate3d(0,0,0) rotate(0.0001deg)"
                    ),
                      r.css(t, "transform-style", "preserve-3d"),
                      r.css(t, "backface-visibility", "hidden");
                  },
                  transformSupport: function (t) {
                    for (
                      var e = document.createElement("div"),
                        i = !1,
                        o = null,
                        s = !1,
                        n = null,
                        l = null,
                        a = 0,
                        d = r.vendors.length;
                      a < d;
                      a++
                    )
                      if (
                        (null !== r.vendors[a]
                          ? ((n = r.vendors[a][0] + "transform"),
                            (l = r.vendors[a][1] + "Transform"))
                          : ((n = "transform"), (l = "transform")),
                        void 0 !== e.style[l])
                      ) {
                        i = !0;
                        break;
                      }
                    switch (t) {
                      case "2D":
                        s = i;
                        break;
                      case "3D":
                        if (i) {
                          var c =
                              document.body || document.createElement("body"),
                            p = document.documentElement,
                            u = p.style.overflow,
                            h = !1;
                          document.body ||
                            ((h = !0),
                            (p.style.overflow = "hidden"),
                            p.appendChild(c),
                            (c.style.overflow = "hidden"),
                            (c.style.background = "")),
                            c.appendChild(e),
                            (e.style[l] = "translate3d(1px,1px,1px)"),
                            (s =
                              void 0 !==
                                (o = window
                                  .getComputedStyle(e)
                                  .getPropertyValue(n)) &&
                              o.length > 0 &&
                              "none" !== o),
                            (p.style.overflow = u),
                            c.removeChild(e),
                            h &&
                              (c.removeAttribute("style"),
                              c.parentNode.removeChild(c));
                        }
                    }
                    return s;
                  },
                  css: function (t, e, i) {
                    var o = r.propertyCache[e];
                    if (!o)
                      for (var s = 0, n = r.vendors.length; s < n; s++)
                        if (
                          ((o =
                            null !== r.vendors[s]
                              ? r.camelCase(r.vendors[s][1] + "-" + e)
                              : e),
                          void 0 !== t.style[o])
                        ) {
                          r.propertyCache[e] = o;
                          break;
                        }
                    t.style[o] = i;
                  },
                },
                l = {
                  relativeInput: !1,
                  clipRelativeInput: !1,
                  inputElement: null,
                  hoverOnly: !1,
                  calibrationThreshold: 100,
                  calibrationDelay: 500,
                  supportDelay: 500,
                  calibrateX: !1,
                  calibrateY: !0,
                  invertX: !0,
                  invertY: !0,
                  limitX: !1,
                  limitY: !1,
                  scalarX: 10,
                  scalarY: 10,
                  frictionX: 0.1,
                  frictionY: 0.1,
                  originX: 0.5,
                  originY: 0.5,
                  pointerEvents: !1,
                  precision: 1,
                  onReady: null,
                  selector: null,
                },
                a = (function () {
                  function t(e, i) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.element = e);
                    var o = {
                      calibrateX: r.data(this.element, "calibrate-x"),
                      calibrateY: r.data(this.element, "calibrate-y"),
                      invertX: r.data(this.element, "invert-x"),
                      invertY: r.data(this.element, "invert-y"),
                      limitX: r.data(this.element, "limit-x"),
                      limitY: r.data(this.element, "limit-y"),
                      scalarX: r.data(this.element, "scalar-x"),
                      scalarY: r.data(this.element, "scalar-y"),
                      frictionX: r.data(this.element, "friction-x"),
                      frictionY: r.data(this.element, "friction-y"),
                      originX: r.data(this.element, "origin-x"),
                      originY: r.data(this.element, "origin-y"),
                      pointerEvents: r.data(this.element, "pointer-events"),
                      precision: r.data(this.element, "precision"),
                      relativeInput: r.data(this.element, "relative-input"),
                      clipRelativeInput: r.data(
                        this.element,
                        "clip-relative-input"
                      ),
                      hoverOnly: r.data(this.element, "hover-only"),
                      inputElement: document.querySelector(
                        r.data(this.element, "input-element")
                      ),
                      selector: r.data(this.element, "selector"),
                    };
                    for (var s in o) null === o[s] && delete o[s];
                    n(this, l, o, i),
                      this.inputElement || (this.inputElement = this.element),
                      (this.calibrationTimer = null),
                      (this.calibrationFlag = !0),
                      (this.enabled = !1),
                      (this.depthsX = []),
                      (this.depthsY = []),
                      (this.raf = null),
                      (this.bounds = null),
                      (this.elementPositionX = 0),
                      (this.elementPositionY = 0),
                      (this.elementWidth = 0),
                      (this.elementHeight = 0),
                      (this.elementCenterX = 0),
                      (this.elementCenterY = 0),
                      (this.elementRangeX = 0),
                      (this.elementRangeY = 0),
                      (this.calibrationX = 0),
                      (this.calibrationY = 0),
                      (this.inputX = 0),
                      (this.inputY = 0),
                      (this.motionX = 0),
                      (this.motionY = 0),
                      (this.velocityX = 0),
                      (this.velocityY = 0),
                      (this.onMouseMove = this.onMouseMove.bind(this)),
                      (this.onDeviceOrientation =
                        this.onDeviceOrientation.bind(this)),
                      (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                      (this.onOrientationTimer =
                        this.onOrientationTimer.bind(this)),
                      (this.onMotionTimer = this.onMotionTimer.bind(this)),
                      (this.onCalibrationTimer =
                        this.onCalibrationTimer.bind(this)),
                      (this.onAnimationFrame =
                        this.onAnimationFrame.bind(this)),
                      (this.onWindowResize = this.onWindowResize.bind(this)),
                      (this.windowWidth = null),
                      (this.windowHeight = null),
                      (this.windowCenterX = null),
                      (this.windowCenterY = null),
                      (this.windowRadiusX = null),
                      (this.windowRadiusY = null),
                      (this.portrait = !1),
                      (this.desktop = !navigator.userAgent.match(
                        /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                      )),
                      (this.motionSupport =
                        !!window.DeviceMotionEvent && !this.desktop),
                      (this.orientationSupport =
                        !!window.DeviceOrientationEvent && !this.desktop),
                      (this.orientationStatus = 0),
                      (this.motionStatus = 0),
                      this.initialise();
                  }
                  return (
                    o(t, [
                      {
                        key: "initialise",
                        value: function () {
                          void 0 === this.transform2DSupport &&
                            ((this.transform2DSupport =
                              r.transformSupport("2D")),
                            (this.transform3DSupport =
                              r.transformSupport("3D"))),
                            this.transform3DSupport &&
                              r.accelerate(this.element),
                            "static" ===
                              window
                                .getComputedStyle(this.element)
                                .getPropertyValue("position") &&
                              (this.element.style.position = "relative"),
                            this.pointerEvents ||
                              (this.element.style.pointerEvents = "none"),
                            this.updateLayers(),
                            this.updateDimensions(),
                            this.enable(),
                            this.queueCalibration(this.calibrationDelay);
                        },
                      },
                      {
                        key: "doReadyCallback",
                        value: function () {
                          this.onReady && this.onReady();
                        },
                      },
                      {
                        key: "updateLayers",
                        value: function () {
                          this.selector
                            ? (this.layers = this.element.querySelectorAll(
                                this.selector
                              ))
                            : (this.layers = this.element.children),
                            this.layers.length ||
                              console.warn(
                                "ParallaxJS: Your scene does not have any layers."
                              ),
                            (this.depthsX = []),
                            (this.depthsY = []);
                          for (var t = 0; t < this.layers.length; t++) {
                            var e = this.layers[t];
                            this.transform3DSupport && r.accelerate(e),
                              (e.style.position = t ? "absolute" : "relative"),
                              (e.style.display = "block"),
                              (e.style.left = 0),
                              (e.style.top = 0);
                            var i = r.data(e, "depth") || 0;
                            this.depthsX.push(r.data(e, "depth-x") || i),
                              this.depthsY.push(r.data(e, "depth-y") || i);
                          }
                        },
                      },
                      {
                        key: "updateDimensions",
                        value: function () {
                          (this.windowWidth = window.innerWidth),
                            (this.windowHeight = window.innerHeight),
                            (this.windowCenterX =
                              this.windowWidth * this.originX),
                            (this.windowCenterY =
                              this.windowHeight * this.originY),
                            (this.windowRadiusX = Math.max(
                              this.windowCenterX,
                              this.windowWidth - this.windowCenterX
                            )),
                            (this.windowRadiusY = Math.max(
                              this.windowCenterY,
                              this.windowHeight - this.windowCenterY
                            ));
                        },
                      },
                      {
                        key: "updateBounds",
                        value: function () {
                          (this.bounds =
                            this.inputElement.getBoundingClientRect()),
                            (this.elementPositionX = this.bounds.left),
                            (this.elementPositionY = this.bounds.top),
                            (this.elementWidth = this.bounds.width),
                            (this.elementHeight = this.bounds.height),
                            (this.elementCenterX =
                              this.elementWidth * this.originX),
                            (this.elementCenterY =
                              this.elementHeight * this.originY),
                            (this.elementRangeX = Math.max(
                              this.elementCenterX,
                              this.elementWidth - this.elementCenterX
                            )),
                            (this.elementRangeY = Math.max(
                              this.elementCenterY,
                              this.elementHeight - this.elementCenterY
                            ));
                        },
                      },
                      {
                        key: "queueCalibration",
                        value: function (t) {
                          clearTimeout(this.calibrationTimer),
                            (this.calibrationTimer = setTimeout(
                              this.onCalibrationTimer,
                              t
                            ));
                        },
                      },
                      {
                        key: "enable",
                        value: function () {
                          this.enabled ||
                            ((this.enabled = !0),
                            this.orientationSupport
                              ? ((this.portrait = !1),
                                window.addEventListener(
                                  "deviceorientation",
                                  this.onDeviceOrientation
                                ),
                                (this.detectionTimer = setTimeout(
                                  this.onOrientationTimer,
                                  this.supportDelay
                                )))
                              : this.motionSupport
                              ? ((this.portrait = !1),
                                window.addEventListener(
                                  "devicemotion",
                                  this.onDeviceMotion
                                ),
                                (this.detectionTimer = setTimeout(
                                  this.onMotionTimer,
                                  this.supportDelay
                                )))
                              : ((this.calibrationX = 0),
                                (this.calibrationY = 0),
                                (this.portrait = !1),
                                window.addEventListener(
                                  "mousemove",
                                  this.onMouseMove
                                ),
                                this.doReadyCallback()),
                            window.addEventListener(
                              "resize",
                              this.onWindowResize
                            ),
                            (this.raf = s(this.onAnimationFrame)));
                        },
                      },
                      {
                        key: "disable",
                        value: function () {
                          this.enabled &&
                            ((this.enabled = !1),
                            this.orientationSupport
                              ? window.removeEventListener(
                                  "deviceorientation",
                                  this.onDeviceOrientation
                                )
                              : this.motionSupport
                              ? window.removeEventListener(
                                  "devicemotion",
                                  this.onDeviceMotion
                                )
                              : window.removeEventListener(
                                  "mousemove",
                                  this.onMouseMove
                                ),
                            window.removeEventListener(
                              "resize",
                              this.onWindowResize
                            ),
                            s.cancel(this.raf));
                        },
                      },
                      {
                        key: "calibrate",
                        value: function (t, e) {
                          (this.calibrateX =
                            void 0 === t ? this.calibrateX : t),
                            (this.calibrateY =
                              void 0 === e ? this.calibrateY : e);
                        },
                      },
                      {
                        key: "invert",
                        value: function (t, e) {
                          (this.invertX = void 0 === t ? this.invertX : t),
                            (this.invertY = void 0 === e ? this.invertY : e);
                        },
                      },
                      {
                        key: "friction",
                        value: function (t, e) {
                          (this.frictionX = void 0 === t ? this.frictionX : t),
                            (this.frictionY =
                              void 0 === e ? this.frictionY : e);
                        },
                      },
                      {
                        key: "scalar",
                        value: function (t, e) {
                          (this.scalarX = void 0 === t ? this.scalarX : t),
                            (this.scalarY = void 0 === e ? this.scalarY : e);
                        },
                      },
                      {
                        key: "limit",
                        value: function (t, e) {
                          (this.limitX = void 0 === t ? this.limitX : t),
                            (this.limitY = void 0 === e ? this.limitY : e);
                        },
                      },
                      {
                        key: "origin",
                        value: function (t, e) {
                          (this.originX = void 0 === t ? this.originX : t),
                            (this.originY = void 0 === e ? this.originY : e);
                        },
                      },
                      {
                        key: "setInputElement",
                        value: function (t) {
                          (this.inputElement = t), this.updateDimensions();
                        },
                      },
                      {
                        key: "setPosition",
                        value: function (t, e, i) {
                          (e = e.toFixed(this.precision) + "px"),
                            (i = i.toFixed(this.precision) + "px"),
                            this.transform3DSupport
                              ? r.css(
                                  t,
                                  "transform",
                                  "translate3d(" + e + "," + i + ",0)"
                                )
                              : this.transform2DSupport
                              ? r.css(
                                  t,
                                  "transform",
                                  "translate(" + e + "," + i + ")"
                                )
                              : ((t.style.left = e), (t.style.top = i));
                        },
                      },
                      {
                        key: "onOrientationTimer",
                        value: function () {
                          this.orientationSupport &&
                          0 === this.orientationStatus
                            ? (this.disable(),
                              (this.orientationSupport = !1),
                              this.enable())
                            : this.doReadyCallback();
                        },
                      },
                      {
                        key: "onMotionTimer",
                        value: function () {
                          this.motionSupport && 0 === this.motionStatus
                            ? (this.disable(),
                              (this.motionSupport = !1),
                              this.enable())
                            : this.doReadyCallback();
                        },
                      },
                      {
                        key: "onCalibrationTimer",
                        value: function () {
                          this.calibrationFlag = !0;
                        },
                      },
                      {
                        key: "onWindowResize",
                        value: function () {
                          this.updateDimensions();
                        },
                      },
                      {
                        key: "onAnimationFrame",
                        value: function () {
                          this.updateBounds();
                          var t = this.inputX - this.calibrationX,
                            e = this.inputY - this.calibrationY;
                          (Math.abs(t) > this.calibrationThreshold ||
                            Math.abs(e) > this.calibrationThreshold) &&
                            this.queueCalibration(0),
                            this.portrait
                              ? ((this.motionX = this.calibrateX
                                  ? e
                                  : this.inputY),
                                (this.motionY = this.calibrateY
                                  ? t
                                  : this.inputX))
                              : ((this.motionX = this.calibrateX
                                  ? t
                                  : this.inputX),
                                (this.motionY = this.calibrateY
                                  ? e
                                  : this.inputY)),
                            (this.motionX *=
                              this.elementWidth * (this.scalarX / 100)),
                            (this.motionY *=
                              this.elementHeight * (this.scalarY / 100)),
                            isNaN(parseFloat(this.limitX)) ||
                              (this.motionX = r.clamp(
                                this.motionX,
                                -this.limitX,
                                this.limitX
                              )),
                            isNaN(parseFloat(this.limitY)) ||
                              (this.motionY = r.clamp(
                                this.motionY,
                                -this.limitY,
                                this.limitY
                              )),
                            (this.velocityX +=
                              (this.motionX - this.velocityX) * this.frictionX),
                            (this.velocityY +=
                              (this.motionY - this.velocityY) * this.frictionY);
                          for (var i = 0; i < this.layers.length; i++) {
                            var o = this.layers[i],
                              n = this.depthsX[i],
                              l = this.depthsY[i],
                              a =
                                this.velocityX * (n * (this.invertX ? -1 : 1)),
                              d =
                                this.velocityY * (l * (this.invertY ? -1 : 1));
                            this.setPosition(o, a, d);
                          }
                          this.raf = s(this.onAnimationFrame);
                        },
                      },
                      {
                        key: "rotate",
                        value: function (t, e) {
                          var i = (t || 0) / 30,
                            o = (e || 0) / 30,
                            s = this.windowHeight > this.windowWidth;
                          this.portrait !== s &&
                            ((this.portrait = s), (this.calibrationFlag = !0)),
                            this.calibrationFlag &&
                              ((this.calibrationFlag = !1),
                              (this.calibrationX = i),
                              (this.calibrationY = o)),
                            (this.inputX = i),
                            (this.inputY = o);
                        },
                      },
                      {
                        key: "onDeviceOrientation",
                        value: function (t) {
                          var e = t.beta,
                            i = t.gamma;
                          null !== e &&
                            null !== i &&
                            ((this.orientationStatus = 1), this.rotate(e, i));
                        },
                      },
                      {
                        key: "onDeviceMotion",
                        value: function (t) {
                          var e = t.rotationRate.beta,
                            i = t.rotationRate.gamma;
                          null !== e &&
                            null !== i &&
                            ((this.motionStatus = 1), this.rotate(e, i));
                        },
                      },
                      {
                        key: "onMouseMove",
                        value: function (t) {
                          var e = t.clientX,
                            i = t.clientY;
                          if (
                            this.hoverOnly &&
                            (e < this.elementPositionX ||
                              e > this.elementPositionX + this.elementWidth ||
                              i < this.elementPositionY ||
                              i > this.elementPositionY + this.elementHeight)
                          )
                            return (this.inputX = 0), void (this.inputY = 0);
                          this.relativeInput
                            ? (this.clipRelativeInput &&
                                ((e = Math.max(e, this.elementPositionX)),
                                (e = Math.min(
                                  e,
                                  this.elementPositionX + this.elementWidth
                                )),
                                (i = Math.max(i, this.elementPositionY)),
                                (i = Math.min(
                                  i,
                                  this.elementPositionY + this.elementHeight
                                ))),
                              this.elementRangeX &&
                                this.elementRangeY &&
                                ((this.inputX =
                                  (e -
                                    this.elementPositionX -
                                    this.elementCenterX) /
                                  this.elementRangeX),
                                (this.inputY =
                                  (i -
                                    this.elementPositionY -
                                    this.elementCenterY) /
                                  this.elementRangeY)))
                            : this.windowRadiusX &&
                              this.windowRadiusY &&
                              ((this.inputX =
                                (e - this.windowCenterX) / this.windowRadiusX),
                              (this.inputY =
                                (i - this.windowCenterY) / this.windowRadiusY));
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.disable(),
                            clearTimeout(this.calibrationTimer),
                            clearTimeout(this.detectionTimer),
                            this.element.removeAttribute("style");
                          for (var t = 0; t < this.layers.length; t++)
                            this.layers[t].removeAttribute("style");
                          delete this.element, delete this.layers;
                        },
                      },
                      {
                        key: "version",
                        value: function () {
                          return "3.1.0";
                        },
                      },
                    ]),
                    t
                  );
                })();
              e.exports = a;
            },
            { "object-assign": 1, raf: 4 },
          ],
        },
        {},
        [5]
      )(5);
    }.call(this, i(5)));
  },
  function (t, e, i) {
    t.exports = i(6);
  },
  function (t, e, i) {
    var o, s, n;
    !(function (r) {
      "use strict";
      (s = [i(4)]),
        void 0 ===
          (n =
            "function" ==
            typeof (o = function (t) {
              var e = window.Slick || {};
              (((i = 0),
              (e = function (e, o) {
                var s,
                  n = this;
                (n.defaults = {
                  accessibility: !0,
                  adaptiveHeight: !1,
                  appendArrows: t(e),
                  appendDots: t(e),
                  arrows: !0,
                  asNavFor: null,
                  prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                  nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                  autoplay: !1,
                  autoplaySpeed: 3e3,
                  centerMode: !1,
                  centerPadding: "50px",
                  cssEase: "ease",
                  customPaging: function (e, i) {
                    return t('<button type="button" />').text(i + 1);
                  },
                  dots: !1,
                  dotsClass: "slick-dots",
                  draggable: !0,
                  easing: "linear",
                  edgeFriction: 0.35,
                  fade: !1,
                  focusOnSelect: !1,
                  focusOnChange: !1,
                  infinite: !0,
                  initialSlide: 0,
                  lazyLoad: "ondemand",
                  mobileFirst: !1,
                  pauseOnHover: !0,
                  pauseOnFocus: !0,
                  pauseOnDotsHover: !1,
                  respondTo: "window",
                  responsive: null,
                  rows: 1,
                  rtl: !1,
                  slide: "",
                  slidesPerRow: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 500,
                  swipe: !0,
                  swipeToSlide: !1,
                  touchMove: !0,
                  touchThreshold: 5,
                  useCSS: !0,
                  useTransform: !0,
                  variableWidth: !1,
                  vertical: !1,
                  verticalSwiping: !1,
                  waitForAnimate: !0,
                  zIndex: 1e3,
                }),
                  (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                  }),
                  t.extend(n, n.initials),
                  (n.activeBreakpoint = null),
                  (n.animType = null),
                  (n.animProp = null),
                  (n.breakpoints = []),
                  (n.breakpointSettings = []),
                  (n.cssTransitions = !1),
                  (n.focussed = !1),
                  (n.interrupted = !1),
                  (n.hidden = "hidden"),
                  (n.paused = !0),
                  (n.positionProp = null),
                  (n.respondTo = null),
                  (n.rowCount = 1),
                  (n.shouldClick = !0),
                  (n.$slider = t(e)),
                  (n.$slidesCache = null),
                  (n.transformType = null),
                  (n.transitionType = null),
                  (n.visibilityChange = "visibilitychange"),
                  (n.windowWidth = 0),
                  (n.windowTimer = null),
                  (s = t(e).data("slick") || {}),
                  (n.options = t.extend({}, n.defaults, o, s)),
                  (n.currentSlide = n.options.initialSlide),
                  (n.originalSettings = n.options),
                  void 0 !== document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                      (n.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                      (n.visibilityChange = "webkitvisibilitychange")),
                  (n.autoPlay = t.proxy(n.autoPlay, n)),
                  (n.autoPlayClear = t.proxy(n.autoPlayClear, n)),
                  (n.autoPlayIterator = t.proxy(n.autoPlayIterator, n)),
                  (n.changeSlide = t.proxy(n.changeSlide, n)),
                  (n.clickHandler = t.proxy(n.clickHandler, n)),
                  (n.selectHandler = t.proxy(n.selectHandler, n)),
                  (n.setPosition = t.proxy(n.setPosition, n)),
                  (n.swipeHandler = t.proxy(n.swipeHandler, n)),
                  (n.dragHandler = t.proxy(n.dragHandler, n)),
                  (n.keyHandler = t.proxy(n.keyHandler, n)),
                  (n.instanceUid = i++),
                  (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                  n.registerBreakpoints(),
                  n.init(!0);
              })).prototype.activateADA = function () {
                this.$slideTrack
                  .find(".slick-active")
                  .attr({ "aria-hidden": "false" })
                  .find("a, input, button, select")
                  .attr({ tabindex: "0" });
              }),
                (e.prototype.addSlide = e.prototype.slickAdd =
                  function (e, i, o) {
                    var s = this;
                    if ("boolean" == typeof i) (o = i), (i = null);
                    else if (i < 0 || i >= s.slideCount) return !1;
                    s.unload(),
                      "number" == typeof i
                        ? 0 === i && 0 === s.$slides.length
                          ? t(e).appendTo(s.$slideTrack)
                          : o
                          ? t(e).insertBefore(s.$slides.eq(i))
                          : t(e).insertAfter(s.$slides.eq(i))
                        : !0 === o
                        ? t(e).prependTo(s.$slideTrack)
                        : t(e).appendTo(s.$slideTrack),
                      (s.$slides = s.$slideTrack.children(this.options.slide)),
                      s.$slideTrack.children(this.options.slide).detach(),
                      s.$slideTrack.append(s.$slides),
                      s.$slides.each(function (e, i) {
                        t(i).attr("data-slick-index", e);
                      }),
                      (s.$slidesCache = s.$slides),
                      s.reinit();
                  }),
                (e.prototype.animateHeight = function () {
                  var t = this;
                  if (
                    1 === t.options.slidesToShow &&
                    !0 === t.options.adaptiveHeight &&
                    !1 === t.options.vertical
                  ) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({ height: e }, t.options.speed);
                  }
                }),
                (e.prototype.animateSlide = function (e, i) {
                  var o = {},
                    s = this;
                  s.animateHeight(),
                    !0 === s.options.rtl &&
                      !1 === s.options.vertical &&
                      (e = -e),
                    !1 === s.transformsEnabled
                      ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                            { left: e },
                            s.options.speed,
                            s.options.easing,
                            i
                          )
                        : s.$slideTrack.animate(
                            { top: e },
                            s.options.speed,
                            s.options.easing,
                            i
                          )
                      : !1 === s.cssTransitions
                      ? (!0 === s.options.rtl &&
                          (s.currentLeft = -s.currentLeft),
                        t({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                            duration: s.options.speed,
                            easing: s.options.easing,
                            step: function (t) {
                              (t = Math.ceil(t)),
                                !1 === s.options.vertical
                                  ? ((o[s.animType] =
                                      "translate(" + t + "px, 0px)"),
                                    s.$slideTrack.css(o))
                                  : ((o[s.animType] =
                                      "translate(0px," + t + "px)"),
                                    s.$slideTrack.css(o));
                            },
                            complete: function () {
                              i && i.call();
                            },
                          }
                        ))
                      : (s.applyTransition(),
                        (e = Math.ceil(e)),
                        !1 === s.options.vertical
                          ? (o[s.animType] =
                              "translate3d(" + e + "px, 0px, 0px)")
                          : (o[s.animType] =
                              "translate3d(0px," + e + "px, 0px)"),
                        s.$slideTrack.css(o),
                        i &&
                          setTimeout(function () {
                            s.disableTransition(), i.call();
                          }, s.options.speed));
                }),
                (e.prototype.getNavTarget = function () {
                  var e = this.options.asNavFor;
                  return e && null !== e && (e = t(e).not(this.$slider)), e;
                }),
                (e.prototype.asNavFor = function (e) {
                  var i = this.getNavTarget();
                  null !== i &&
                    "object" == typeof i &&
                    i.each(function () {
                      var i = t(this).slick("getSlick");
                      i.unslicked || i.slideHandler(e, !0);
                    });
                }),
                (e.prototype.applyTransition = function (t) {
                  var e = this,
                    i = {};
                  !1 === e.options.fade
                    ? (i[e.transitionType] =
                        e.transformType +
                        " " +
                        e.options.speed +
                        "ms " +
                        e.options.cssEase)
                    : (i[e.transitionType] =
                        "opacity " +
                        e.options.speed +
                        "ms " +
                        e.options.cssEase),
                    !1 === e.options.fade
                      ? e.$slideTrack.css(i)
                      : e.$slides.eq(t).css(i);
                }),
                (e.prototype.autoPlay = function () {
                  var t = this;
                  t.autoPlayClear(),
                    t.slideCount > t.options.slidesToShow &&
                      (t.autoPlayTimer = setInterval(
                        t.autoPlayIterator,
                        t.options.autoplaySpeed
                      ));
                }),
                (e.prototype.autoPlayClear = function () {
                  this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                }),
                (e.prototype.autoPlayIterator = function () {
                  var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                  t.paused ||
                    t.interrupted ||
                    t.focussed ||
                    (!1 === t.options.infinite &&
                      (1 === t.direction &&
                      t.currentSlide + 1 === t.slideCount - 1
                        ? (t.direction = 0)
                        : 0 === t.direction &&
                          ((e = t.currentSlide - t.options.slidesToScroll),
                          t.currentSlide - 1 == 0 && (t.direction = 1))),
                    t.slideHandler(e));
                }),
                (e.prototype.buildArrows = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    ((e.$prevArrow = t(e.options.prevArrow).addClass(
                      "slick-arrow"
                    )),
                    (e.$nextArrow = t(e.options.nextArrow).addClass(
                      "slick-arrow"
                    )),
                    e.slideCount > e.options.slidesToShow
                      ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                        e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                        !0 !== e.options.infinite &&
                          e.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"))
                      : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (e.prototype.buildDots = function () {
                  var e,
                    i,
                    o = this;
                  if (
                    !0 === o.options.dots &&
                    o.slideCount > o.options.slidesToShow
                  ) {
                    for (
                      o.$slider.addClass("slick-dotted"),
                        i = t("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                      e <= o.getDotCount();
                      e += 1
                    )
                      i.append(
                        t("<li />").append(
                          o.options.customPaging.call(this, o, e)
                        )
                      );
                    (o.$dots = i.appendTo(o.options.appendDots)),
                      o.$dots.find("li").first().addClass("slick-active");
                  }
                }),
                (e.prototype.buildOut = function () {
                  var e = this;
                  (e.$slides = e.$slider
                    .children(e.options.slide + ":not(.slick-cloned)")
                    .addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.$slides.each(function (e, i) {
                      t(i)
                        .attr("data-slick-index", e)
                        .data("originalStyling", t(i).attr("style") || "");
                    }),
                    e.$slider.addClass("slick-slider"),
                    (e.$slideTrack =
                      0 === e.slideCount
                        ? t('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                            .wrapAll('<div class="slick-track"/>')
                            .parent()),
                    (e.$list = e.$slideTrack
                      .wrap('<div class="slick-list"/>')
                      .parent()),
                    e.$slideTrack.css("opacity", 0),
                    (!0 !== e.options.centerMode &&
                      !0 !== e.options.swipeToSlide) ||
                      (e.options.slidesToScroll = 1),
                    t("img[data-lazy]", e.$slider)
                      .not("[src]")
                      .addClass("slick-loading"),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.buildDots(),
                    e.updateDots(),
                    e.setSlideClasses(
                      "number" == typeof e.currentSlide ? e.currentSlide : 0
                    ),
                    !0 === e.options.draggable && e.$list.addClass("draggable");
                }),
                (e.prototype.buildRows = function () {
                  var t,
                    e,
                    i,
                    o,
                    s,
                    n,
                    r,
                    l = this;
                  if (
                    ((o = document.createDocumentFragment()),
                    (n = l.$slider.children()),
                    l.options.rows > 0)
                  ) {
                    for (
                      r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        t = 0;
                      t < s;
                      t++
                    ) {
                      var a = document.createElement("div");
                      for (e = 0; e < l.options.rows; e++) {
                        var d = document.createElement("div");
                        for (i = 0; i < l.options.slidesPerRow; i++) {
                          var c = t * r + (e * l.options.slidesPerRow + i);
                          n.get(c) && d.appendChild(n.get(c));
                        }
                        a.appendChild(d);
                      }
                      o.appendChild(a);
                    }
                    l.$slider.empty().append(o),
                      l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                          width: 100 / l.options.slidesPerRow + "%",
                          display: "inline-block",
                        });
                  }
                }),
                (e.prototype.checkResponsive = function (e, i) {
                  var o,
                    s,
                    n,
                    r = this,
                    l = !1,
                    a = r.$slider.width(),
                    d = window.innerWidth || t(window).width();
                  if (
                    ("window" === r.respondTo
                      ? (n = d)
                      : "slider" === r.respondTo
                      ? (n = a)
                      : "min" === r.respondTo && (n = Math.min(d, a)),
                    r.options.responsive &&
                      r.options.responsive.length &&
                      null !== r.options.responsive)
                  ) {
                    for (o in ((s = null), r.breakpoints))
                      r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                          ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                          : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                    null !== s
                      ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || i) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                            ? r.unslick(s)
                            : ((r.options = t.extend(
                                {},
                                r.originalSettings,
                                r.breakpointSettings[s]
                              )),
                              !0 === e &&
                                (r.currentSlide = r.options.initialSlide),
                              r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                            ? r.unslick(s)
                            : ((r.options = t.extend(
                                {},
                                r.originalSettings,
                                r.breakpointSettings[s]
                              )),
                              !0 === e &&
                                (r.currentSlide = r.options.initialSlide),
                              r.refresh(e)),
                          (l = s))
                      : null !== r.activeBreakpoint &&
                        ((r.activeBreakpoint = null),
                        (r.options = r.originalSettings),
                        !0 === e && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e),
                        (l = s)),
                      e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
                  }
                }),
                (e.prototype.changeSlide = function (e, i) {
                  var o,
                    s,
                    n = this,
                    r = t(e.currentTarget);
                  switch (
                    (r.is("a") && e.preventDefault(),
                    r.is("li") || (r = r.closest("li")),
                    (o =
                      n.slideCount % n.options.slidesToScroll != 0
                        ? 0
                        : (n.slideCount - n.currentSlide) %
                          n.options.slidesToScroll),
                    e.data.message)
                  ) {
                    case "previous":
                      (s =
                        0 === o
                          ? n.options.slidesToScroll
                          : n.options.slidesToShow - o),
                        n.slideCount > n.options.slidesToShow &&
                          n.slideHandler(n.currentSlide - s, !1, i);
                      break;
                    case "next":
                      (s = 0 === o ? n.options.slidesToScroll : o),
                        n.slideCount > n.options.slidesToShow &&
                          n.slideHandler(n.currentSlide + s, !1, i);
                      break;
                    case "index":
                      var l =
                        0 === e.data.index
                          ? 0
                          : e.data.index ||
                            r.index() * n.options.slidesToScroll;
                      n.slideHandler(n.checkNavigable(l), !1, i),
                        r.children().trigger("focus");
                      break;
                    default:
                      return;
                  }
                }),
                (e.prototype.checkNavigable = function (t) {
                  var e, i;
                  if (
                    ((i = 0),
                    t > (e = this.getNavigableIndexes())[e.length - 1])
                  )
                    t = e[e.length - 1];
                  else
                    for (var o in e) {
                      if (t < e[o]) {
                        t = i;
                        break;
                      }
                      i = e[o];
                    }
                  return t;
                }),
                (e.prototype.cleanUpEvents = function () {
                  var e = this;
                  e.options.dots &&
                    null !== e.$dots &&
                    (t("li", e.$dots)
                      .off("click.slick", e.changeSlide)
                      .off("mouseenter.slick", t.proxy(e.interrupt, e, !0))
                      .off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                    !0 === e.options.accessibility &&
                      e.$dots.off("keydown.slick", e.keyHandler)),
                    e.$slider.off("focus.slick blur.slick"),
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                      e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                      !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                          e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                          e.$nextArrow.off("keydown.slick", e.keyHandler))),
                    e.$list.off(
                      "touchstart.slick mousedown.slick",
                      e.swipeHandler
                    ),
                    e.$list.off(
                      "touchmove.slick mousemove.slick",
                      e.swipeHandler
                    ),
                    e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                    e.$list.off(
                      "touchcancel.slick mouseleave.slick",
                      e.swipeHandler
                    ),
                    e.$list.off("click.slick", e.clickHandler),
                    t(document).off(e.visibilityChange, e.visibility),
                    e.cleanUpSlideEvents(),
                    !0 === e.options.accessibility &&
                      e.$list.off("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect &&
                      t(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                    t(window).off(
                      "orientationchange.slick.slick-" + e.instanceUid,
                      e.orientationChange
                    ),
                    t(window).off(
                      "resize.slick.slick-" + e.instanceUid,
                      e.resize
                    ),
                    t("[draggable!=true]", e.$slideTrack).off(
                      "dragstart",
                      e.preventDefault
                    ),
                    t(window).off(
                      "load.slick.slick-" + e.instanceUid,
                      e.setPosition
                    );
                }),
                (e.prototype.cleanUpSlideEvents = function () {
                  var e = this;
                  e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
                    e.$list.off(
                      "mouseleave.slick",
                      t.proxy(e.interrupt, e, !1)
                    );
                }),
                (e.prototype.cleanUpRows = function () {
                  var t,
                    e = this;
                  e.options.rows > 0 &&
                    ((t = e.$slides.children().children()).removeAttr("style"),
                    e.$slider.empty().append(t));
                }),
                (e.prototype.clickHandler = function (t) {
                  !1 === this.shouldClick &&
                    (t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault());
                }),
                (e.prototype.destroy = function (e) {
                  var i = this;
                  i.autoPlayClear(),
                    (i.touchObject = {}),
                    i.cleanUpEvents(),
                    t(".slick-cloned", i.$slider).detach(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow &&
                      i.$prevArrow.length &&
                      (i.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      i.htmlExpr.test(i.options.prevArrow) &&
                        i.$prevArrow.remove()),
                    i.$nextArrow &&
                      i.$nextArrow.length &&
                      (i.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      i.htmlExpr.test(i.options.nextArrow) &&
                        i.$nextArrow.remove()),
                    i.$slides &&
                      (i.$slides
                        .removeClass(
                          "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                          t(this).attr(
                            "style",
                            t(this).data("originalStyling")
                          );
                        }),
                      i.$slideTrack.children(this.options.slide).detach(),
                      i.$slideTrack.detach(),
                      i.$list.detach(),
                      i.$slider.append(i.$slides)),
                    i.cleanUpRows(),
                    i.$slider.removeClass("slick-slider"),
                    i.$slider.removeClass("slick-initialized"),
                    i.$slider.removeClass("slick-dotted"),
                    (i.unslicked = !0),
                    e || i.$slider.trigger("destroy", [i]);
                }),
                (e.prototype.disableTransition = function (t) {
                  var e = this,
                    i = {};
                  (i[e.transitionType] = ""),
                    !1 === e.options.fade
                      ? e.$slideTrack.css(i)
                      : e.$slides.eq(t).css(i);
                }),
                (e.prototype.fadeSlide = function (t, e) {
                  var i = this;
                  !1 === i.cssTransitions
                    ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
                      i.$slides
                        .eq(t)
                        .animate(
                          { opacity: 1 },
                          i.options.speed,
                          i.options.easing,
                          e
                        ))
                    : (i.applyTransition(t),
                      i.$slides
                        .eq(t)
                        .css({ opacity: 1, zIndex: i.options.zIndex }),
                      e &&
                        setTimeout(function () {
                          i.disableTransition(t), e.call();
                        }, i.options.speed));
                }),
                (e.prototype.fadeSlideOut = function (t) {
                  var e = this;
                  !1 === e.cssTransitions
                    ? e.$slides
                        .eq(t)
                        .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                        )
                    : (e.applyTransition(t),
                      e.$slides
                        .eq(t)
                        .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
                }),
                (e.prototype.filterSlides = e.prototype.slickFilter =
                  function (t) {
                    var e = this;
                    null !== t &&
                      ((e.$slidesCache = e.$slides),
                      e.unload(),
                      e.$slideTrack.children(this.options.slide).detach(),
                      e.$slidesCache.filter(t).appendTo(e.$slideTrack),
                      e.reinit());
                  }),
                (e.prototype.focusHandler = function () {
                  var e = this;
                  e.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick blur.slick", "*", function (i) {
                      i.stopImmediatePropagation();
                      var o = t(this);
                      setTimeout(function () {
                        e.options.pauseOnFocus &&
                          ((e.focussed = o.is(":focus")), e.autoPlay());
                      }, 0);
                    });
                }),
                (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
                  function () {
                    return this.currentSlide;
                  }),
                (e.prototype.getDotCount = function () {
                  var t = this,
                    e = 0,
                    i = 0,
                    o = 0;
                  if (!0 === t.options.infinite)
                    if (t.slideCount <= t.options.slidesToShow) ++o;
                    else
                      for (; e < t.slideCount; )
                        ++o,
                          (e = i + t.options.slidesToScroll),
                          (i +=
                            t.options.slidesToScroll <= t.options.slidesToShow
                              ? t.options.slidesToScroll
                              : t.options.slidesToShow);
                  else if (!0 === t.options.centerMode) o = t.slideCount;
                  else if (t.options.asNavFor)
                    for (; e < t.slideCount; )
                      ++o,
                        (e = i + t.options.slidesToScroll),
                        (i +=
                          t.options.slidesToScroll <= t.options.slidesToShow
                            ? t.options.slidesToScroll
                            : t.options.slidesToShow);
                  else
                    o =
                      1 +
                      Math.ceil(
                        (t.slideCount - t.options.slidesToShow) /
                          t.options.slidesToScroll
                      );
                  return o - 1;
                }),
                (e.prototype.getLeft = function (t) {
                  var e,
                    i,
                    o,
                    s,
                    n = this,
                    r = 0;
                  return (
                    (n.slideOffset = 0),
                    (i = n.$slides.first().outerHeight(!0)),
                    !0 === n.options.infinite
                      ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                            n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                            !0 === n.options.centerMode &&
                            (2 === n.options.slidesToShow
                              ? (s = -1.5)
                              : 1 === n.options.slidesToShow && (s = -2)),
                          (r = i * n.options.slidesToShow * s)),
                        n.slideCount % n.options.slidesToScroll != 0 &&
                          t + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (t > n.slideCount
                            ? ((n.slideOffset =
                                (n.options.slidesToShow - (t - n.slideCount)) *
                                n.slideWidth *
                                -1),
                              (r =
                                (n.options.slidesToShow - (t - n.slideCount)) *
                                i *
                                -1))
                            : ((n.slideOffset =
                                (n.slideCount % n.options.slidesToScroll) *
                                n.slideWidth *
                                -1),
                              (r =
                                (n.slideCount % n.options.slidesToScroll) *
                                i *
                                -1))))
                      : t + n.options.slidesToShow > n.slideCount &&
                        ((n.slideOffset =
                          (t + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                        (r = (t + n.options.slidesToShow - n.slideCount) * i)),
                    n.slideCount <= n.options.slidesToShow &&
                      ((n.slideOffset = 0), (r = 0)),
                    !0 === n.options.centerMode &&
                    n.slideCount <= n.options.slidesToShow
                      ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                            2 -
                          (n.slideWidth * n.slideCount) / 2)
                      : !0 === n.options.centerMode && !0 === n.options.infinite
                      ? (n.slideOffset +=
                          n.slideWidth *
                            Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                      : !0 === n.options.centerMode &&
                        ((n.slideOffset = 0),
                        (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                    (e =
                      !1 === n.options.vertical
                        ? t * n.slideWidth * -1 + n.slideOffset
                        : t * i * -1 + r),
                    !0 === n.options.variableWidth &&
                      ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                          ? n.$slideTrack.children(".slick-slide").eq(t)
                          : n.$slideTrack
                              .children(".slick-slide")
                              .eq(t + n.options.slidesToShow)),
                      (e =
                        !0 === n.options.rtl
                          ? o[0]
                            ? -1 *
                              (n.$slideTrack.width() -
                                o[0].offsetLeft -
                                o.width())
                            : 0
                          : o[0]
                          ? -1 * o[0].offsetLeft
                          : 0),
                      !0 === n.options.centerMode &&
                        ((o =
                          n.slideCount <= n.options.slidesToShow ||
                          !1 === n.options.infinite
                            ? n.$slideTrack.children(".slick-slide").eq(t)
                            : n.$slideTrack
                                .children(".slick-slide")
                                .eq(t + n.options.slidesToShow + 1)),
                        (e =
                          !0 === n.options.rtl
                            ? o[0]
                              ? -1 *
                                (n.$slideTrack.width() -
                                  o[0].offsetLeft -
                                  o.width())
                              : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                    e
                  );
                }),
                (e.prototype.getOption = e.prototype.slickGetOption =
                  function (t) {
                    return this.options[t];
                  }),
                (e.prototype.getNavigableIndexes = function () {
                  var t,
                    e = this,
                    i = 0,
                    o = 0,
                    s = [];
                  for (
                    !1 === e.options.infinite
                      ? (t = e.slideCount)
                      : ((i = -1 * e.options.slidesToScroll),
                        (o = -1 * e.options.slidesToScroll),
                        (t = 2 * e.slideCount));
                    i < t;

                  )
                    s.push(i),
                      (i = o + e.options.slidesToScroll),
                      (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                          ? e.options.slidesToScroll
                          : e.options.slidesToShow);
                  return s;
                }),
                (e.prototype.getSlick = function () {
                  return this;
                }),
                (e.prototype.getSlideCount = function () {
                  var e,
                    i,
                    o = this;
                  return (
                    (i =
                      !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                    !0 === o.options.swipeToSlide
                      ? (o.$slideTrack
                          .find(".slick-slide")
                          .each(function (s, n) {
                            if (
                              n.offsetLeft - i + t(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                            )
                              return (e = n), !1;
                          }),
                        Math.abs(
                          t(e).attr("data-slick-index") - o.currentSlide
                        ) || 1)
                      : o.options.slidesToScroll
                  );
                }),
                (e.prototype.goTo = e.prototype.slickGoTo =
                  function (t, e) {
                    this.changeSlide(
                      { data: { message: "index", index: parseInt(t) } },
                      e
                    );
                  }),
                (e.prototype.init = function (e) {
                  var i = this;
                  t(i.$slider).hasClass("slick-initialized") ||
                    (t(i.$slider).addClass("slick-initialized"),
                    i.buildRows(),
                    i.buildOut(),
                    i.setProps(),
                    i.startLoad(),
                    i.loadSlider(),
                    i.initializeEvents(),
                    i.updateArrows(),
                    i.updateDots(),
                    i.checkResponsive(!0),
                    i.focusHandler()),
                    e && i.$slider.trigger("init", [i]),
                    !0 === i.options.accessibility && i.initADA(),
                    i.options.autoplay && ((i.paused = !1), i.autoPlay());
                }),
                (e.prototype.initADA = function () {
                  var e = this,
                    i = Math.ceil(e.slideCount / e.options.slidesToShow),
                    o = e.getNavigableIndexes().filter(function (t) {
                      return t >= 0 && t < e.slideCount;
                    });
                  e.$slides
                    .add(e.$slideTrack.find(".slick-cloned"))
                    .attr({ "aria-hidden": "true", tabindex: "-1" })
                    .find("a, input, button, select")
                    .attr({ tabindex: "-1" }),
                    null !== e.$dots &&
                      (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function (i) {
                          var s = o.indexOf(i);
                          if (
                            (t(this).attr({
                              role: "tabpanel",
                              id: "slick-slide" + e.instanceUid + i,
                              tabindex: -1,
                            }),
                            -1 !== s)
                          ) {
                            var n = "slick-slide-control" + e.instanceUid + s;
                            t("#" + n).length &&
                              t(this).attr({ "aria-describedby": n });
                          }
                        }),
                      e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                          var n = o[s];
                          t(this).attr({ role: "presentation" }),
                            t(this)
                              .find("button")
                              .first()
                              .attr({
                                role: "tab",
                                id: "slick-slide-control" + e.instanceUid + s,
                                "aria-controls":
                                  "slick-slide" + e.instanceUid + n,
                                "aria-label": s + 1 + " of " + i,
                                "aria-selected": null,
                                tabindex: "-1",
                              });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
                  for (
                    var s = e.currentSlide, n = s + e.options.slidesToShow;
                    s < n;
                    s++
                  )
                    e.options.focusOnChange
                      ? e.$slides.eq(s).attr({ tabindex: "0" })
                      : e.$slides.eq(s).removeAttr("tabindex");
                  e.activateADA();
                }),
                (e.prototype.initArrowEvents = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow
                      .off("click.slick")
                      .on(
                        "click.slick",
                        { message: "previous" },
                        t.changeSlide
                      ),
                    t.$nextArrow
                      .off("click.slick")
                      .on("click.slick", { message: "next" }, t.changeSlide),
                    !0 === t.options.accessibility &&
                      (t.$prevArrow.on("keydown.slick", t.keyHandler),
                      t.$nextArrow.on("keydown.slick", t.keyHandler)));
                }),
                (e.prototype.initDotEvents = function () {
                  var e = this;
                  !0 === e.options.dots &&
                    e.slideCount > e.options.slidesToShow &&
                    (t("li", e.$dots).on(
                      "click.slick",
                      { message: "index" },
                      e.changeSlide
                    ),
                    !0 === e.options.accessibility &&
                      e.$dots.on("keydown.slick", e.keyHandler)),
                    !0 === e.options.dots &&
                      !0 === e.options.pauseOnDotsHover &&
                      e.slideCount > e.options.slidesToShow &&
                      t("li", e.$dots)
                        .on("mouseenter.slick", t.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                }),
                (e.prototype.initSlideEvents = function () {
                  var e = this;
                  e.options.pauseOnHover &&
                    (e.$list.on(
                      "mouseenter.slick",
                      t.proxy(e.interrupt, e, !0)
                    ),
                    e.$list.on(
                      "mouseleave.slick",
                      t.proxy(e.interrupt, e, !1)
                    ));
                }),
                (e.prototype.initializeEvents = function () {
                  var e = this;
                  e.initArrowEvents(),
                    e.initDotEvents(),
                    e.initSlideEvents(),
                    e.$list.on(
                      "touchstart.slick mousedown.slick",
                      { action: "start" },
                      e.swipeHandler
                    ),
                    e.$list.on(
                      "touchmove.slick mousemove.slick",
                      { action: "move" },
                      e.swipeHandler
                    ),
                    e.$list.on(
                      "touchend.slick mouseup.slick",
                      { action: "end" },
                      e.swipeHandler
                    ),
                    e.$list.on(
                      "touchcancel.slick mouseleave.slick",
                      { action: "end" },
                      e.swipeHandler
                    ),
                    e.$list.on("click.slick", e.clickHandler),
                    t(document).on(
                      e.visibilityChange,
                      t.proxy(e.visibility, e)
                    ),
                    !0 === e.options.accessibility &&
                      e.$list.on("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect &&
                      t(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                    t(window).on(
                      "orientationchange.slick.slick-" + e.instanceUid,
                      t.proxy(e.orientationChange, e)
                    ),
                    t(window).on(
                      "resize.slick.slick-" + e.instanceUid,
                      t.proxy(e.resize, e)
                    ),
                    t("[draggable!=true]", e.$slideTrack).on(
                      "dragstart",
                      e.preventDefault
                    ),
                    t(window).on(
                      "load.slick.slick-" + e.instanceUid,
                      e.setPosition
                    ),
                    t(e.setPosition);
                }),
                (e.prototype.initUI = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.show(), t.$nextArrow.show()),
                    !0 === t.options.dots &&
                      t.slideCount > t.options.slidesToShow &&
                      t.$dots.show();
                }),
                (e.prototype.keyHandler = function (t) {
                  var e = this;
                  t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === t.keyCode && !0 === e.options.accessibility
                      ? e.changeSlide({
                          data: {
                            message: !0 === e.options.rtl ? "next" : "previous",
                          },
                        })
                      : 39 === t.keyCode &&
                        !0 === e.options.accessibility &&
                        e.changeSlide({
                          data: {
                            message: !0 === e.options.rtl ? "previous" : "next",
                          },
                        }));
                }),
                (e.prototype.lazyLoad = function () {
                  var e,
                    i,
                    o,
                    s = this;
                  function n(e) {
                    t("img[data-lazy]", e).each(function () {
                      var e = t(this),
                        i = t(this).attr("data-lazy"),
                        o = t(this).attr("data-srcset"),
                        n =
                          t(this).attr("data-sizes") ||
                          s.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                      (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                          o && (e.attr("srcset", o), n && e.attr("sizes", n)),
                            e
                              .attr("src", i)
                              .animate({ opacity: 1 }, 200, function () {
                                e.removeAttr(
                                  "data-lazy data-srcset data-sizes"
                                ).removeClass("slick-loading");
                              }),
                            s.$slider.trigger("lazyLoaded", [s, e, i]);
                        });
                      }),
                        (r.onerror = function () {
                          e
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            s.$slider.trigger("lazyLoadError", [s, e, i]);
                        }),
                        (r.src = i);
                    });
                  }
                  if (
                    (!0 === s.options.centerMode
                      ? !0 === s.options.infinite
                        ? (o =
                            (i =
                              s.currentSlide +
                              (s.options.slidesToShow / 2 + 1)) +
                            s.options.slidesToShow +
                            2)
                        : ((i = Math.max(
                            0,
                            s.currentSlide - (s.options.slidesToShow / 2 + 1)
                          )),
                          (o =
                            s.options.slidesToShow / 2 +
                            1 +
                            2 +
                            s.currentSlide))
                      : ((i = s.options.infinite
                          ? s.options.slidesToShow + s.currentSlide
                          : s.currentSlide),
                        (o = Math.ceil(i + s.options.slidesToShow)),
                        !0 === s.options.fade &&
                          (i > 0 && i--, o <= s.slideCount && o++)),
                    (e = s.$slider.find(".slick-slide").slice(i, o)),
                    "anticipated" === s.options.lazyLoad)
                  )
                    for (
                      var r = i - 1,
                        l = o,
                        a = s.$slider.find(".slick-slide"),
                        d = 0;
                      d < s.options.slidesToScroll;
                      d++
                    )
                      r < 0 && (r = s.slideCount - 1),
                        (e = (e = e.add(a.eq(r))).add(a.eq(l))),
                        r--,
                        l++;
                  n(e),
                    s.slideCount <= s.options.slidesToShow
                      ? n(s.$slider.find(".slick-slide"))
                      : s.currentSlide >= s.slideCount - s.options.slidesToShow
                      ? n(
                          s.$slider
                            .find(".slick-cloned")
                            .slice(0, s.options.slidesToShow)
                        )
                      : 0 === s.currentSlide &&
                        n(
                          s.$slider
                            .find(".slick-cloned")
                            .slice(-1 * s.options.slidesToShow)
                        );
                }),
                (e.prototype.loadSlider = function () {
                  var t = this;
                  t.setPosition(),
                    t.$slideTrack.css({ opacity: 1 }),
                    t.$slider.removeClass("slick-loading"),
                    t.initUI(),
                    "progressive" === t.options.lazyLoad &&
                      t.progressiveLazyLoad();
                }),
                (e.prototype.next = e.prototype.slickNext =
                  function () {
                    this.changeSlide({ data: { message: "next" } });
                  }),
                (e.prototype.orientationChange = function () {
                  this.checkResponsive(), this.setPosition();
                }),
                (e.prototype.pause = e.prototype.slickPause =
                  function () {
                    this.autoPlayClear(), (this.paused = !0);
                  }),
                (e.prototype.play = e.prototype.slickPlay =
                  function () {
                    var t = this;
                    t.autoPlay(),
                      (t.options.autoplay = !0),
                      (t.paused = !1),
                      (t.focussed = !1),
                      (t.interrupted = !1);
                  }),
                (e.prototype.postSlide = function (e) {
                  var i = this;
                  i.unslicked ||
                    (i.$slider.trigger("afterChange", [i, e]),
                    (i.animating = !1),
                    i.slideCount > i.options.slidesToShow && i.setPosition(),
                    (i.swipeLeft = null),
                    i.options.autoplay && i.autoPlay(),
                    !0 === i.options.accessibility &&
                      (i.initADA(),
                      i.options.focusOnChange &&
                        t(i.$slides.get(i.currentSlide))
                          .attr("tabindex", 0)
                          .focus()));
                }),
                (e.prototype.prev = e.prototype.slickPrev =
                  function () {
                    this.changeSlide({ data: { message: "previous" } });
                  }),
                (e.prototype.preventDefault = function (t) {
                  t.preventDefault();
                }),
                (e.prototype.progressiveLazyLoad = function (e) {
                  e = e || 1;
                  var i,
                    o,
                    s,
                    n,
                    r,
                    l = this,
                    a = t("img[data-lazy]", l.$slider);
                  a.length
                    ? ((i = a.first()),
                      (o = i.attr("data-lazy")),
                      (s = i.attr("data-srcset")),
                      (n =
                        i.attr("data-sizes") || l.$slider.attr("data-sizes")),
                      ((r = document.createElement("img")).onload =
                        function () {
                          s && (i.attr("srcset", s), n && i.attr("sizes", n)),
                            i
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                            !0 === l.options.adaptiveHeight && l.setPosition(),
                            l.$slider.trigger("lazyLoaded", [l, i, o]),
                            l.progressiveLazyLoad();
                        }),
                      (r.onerror = function () {
                        e < 3
                          ? setTimeout(function () {
                              l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (i
                              .removeAttr("data-lazy")
                              .removeClass("slick-loading")
                              .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, i, o]),
                            l.progressiveLazyLoad());
                      }),
                      (r.src = o))
                    : l.$slider.trigger("allImagesLoaded", [l]);
                }),
                (e.prototype.refresh = function (e) {
                  var i,
                    o,
                    s = this;
                  (o = s.slideCount - s.options.slidesToShow),
                    !s.options.infinite &&
                      s.currentSlide > o &&
                      (s.currentSlide = o),
                    s.slideCount <= s.options.slidesToShow &&
                      (s.currentSlide = 0),
                    (i = s.currentSlide),
                    s.destroy(!0),
                    t.extend(s, s.initials, { currentSlide: i }),
                    s.init(),
                    e ||
                      s.changeSlide(
                        { data: { message: "index", index: i } },
                        !1
                      );
                }),
                (e.prototype.registerBreakpoints = function () {
                  var e,
                    i,
                    o,
                    s = this,
                    n = s.options.responsive || null;
                  if ("array" === t.type(n) && n.length) {
                    for (e in ((s.respondTo = s.options.respondTo || "window"),
                    n))
                      if (
                        ((o = s.breakpoints.length - 1), n.hasOwnProperty(e))
                      ) {
                        for (i = n[e].breakpoint; o >= 0; )
                          s.breakpoints[o] &&
                            s.breakpoints[o] === i &&
                            s.breakpoints.splice(o, 1),
                            o--;
                        s.breakpoints.push(i),
                          (s.breakpointSettings[i] = n[e].settings);
                      }
                    s.breakpoints.sort(function (t, e) {
                      return s.options.mobileFirst ? t - e : e - t;
                    });
                  }
                }),
                (e.prototype.reinit = function () {
                  var e = this;
                  (e.$slides = e.$slideTrack
                    .children(e.options.slide)
                    .addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.currentSlide >= e.slideCount &&
                      0 !== e.currentSlide &&
                      (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                    e.slideCount <= e.options.slidesToShow &&
                      (e.currentSlide = 0),
                    e.registerBreakpoints(),
                    e.setProps(),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.updateArrows(),
                    e.initArrowEvents(),
                    e.buildDots(),
                    e.updateDots(),
                    e.initDotEvents(),
                    e.cleanUpSlideEvents(),
                    e.initSlideEvents(),
                    e.checkResponsive(!1, !0),
                    !0 === e.options.focusOnSelect &&
                      t(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                    e.setSlideClasses(
                      "number" == typeof e.currentSlide ? e.currentSlide : 0
                    ),
                    e.setPosition(),
                    e.focusHandler(),
                    (e.paused = !e.options.autoplay),
                    e.autoPlay(),
                    e.$slider.trigger("reInit", [e]);
                }),
                (e.prototype.resize = function () {
                  var e = this;
                  t(window).width() !== e.windowWidth &&
                    (clearTimeout(e.windowDelay),
                    (e.windowDelay = window.setTimeout(function () {
                      (e.windowWidth = t(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                    }, 50)));
                }),
                (e.prototype.removeSlide = e.prototype.slickRemove =
                  function (t, e, i) {
                    var o = this;
                    if (
                      ((t =
                        "boolean" == typeof t
                          ? !0 === (e = t)
                            ? 0
                            : o.slideCount - 1
                          : !0 === e
                          ? --t
                          : t),
                      o.slideCount < 1 || t < 0 || t > o.slideCount - 1)
                    )
                      return !1;
                    o.unload(),
                      !0 === i
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                            .children(this.options.slide)
                            .eq(t)
                            .remove(),
                      (o.$slides = o.$slideTrack.children(this.options.slide)),
                      o.$slideTrack.children(this.options.slide).detach(),
                      o.$slideTrack.append(o.$slides),
                      (o.$slidesCache = o.$slides),
                      o.reinit();
                  }),
                (e.prototype.setCSS = function (t) {
                  var e,
                    i,
                    o = this,
                    s = {};
                  !0 === o.options.rtl && (t = -t),
                    (e =
                      "left" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (s[o.positionProp] = t),
                    !1 === o.transformsEnabled
                      ? o.$slideTrack.css(s)
                      : ((s = {}),
                        !1 === o.cssTransitions
                          ? ((s[o.animType] =
                              "translate(" + e + ", " + i + ")"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                              "translate3d(" + e + ", " + i + ", 0px)"),
                            o.$slideTrack.css(s)));
                }),
                (e.prototype.setDimensions = function () {
                  var t = this;
                  !1 === t.options.vertical
                    ? !0 === t.options.centerMode &&
                      t.$list.css({ padding: "0px " + t.options.centerPadding })
                    : (t.$list.height(
                        t.$slides.first().outerHeight(!0) *
                          t.options.slidesToShow
                      ),
                      !0 === t.options.centerMode &&
                        t.$list.css({
                          padding: t.options.centerPadding + " 0px",
                        })),
                    (t.listWidth = t.$list.width()),
                    (t.listHeight = t.$list.height()),
                    !1 === t.options.vertical && !1 === t.options.variableWidth
                      ? ((t.slideWidth = Math.ceil(
                          t.listWidth / t.options.slidesToShow
                        )),
                        t.$slideTrack.width(
                          Math.ceil(
                            t.slideWidth *
                              t.$slideTrack.children(".slick-slide").length
                          )
                        ))
                      : !0 === t.options.variableWidth
                      ? t.$slideTrack.width(5e3 * t.slideCount)
                      : ((t.slideWidth = Math.ceil(t.listWidth)),
                        t.$slideTrack.height(
                          Math.ceil(
                            t.$slides.first().outerHeight(!0) *
                              t.$slideTrack.children(".slick-slide").length
                          )
                        ));
                  var e =
                    t.$slides.first().outerWidth(!0) -
                    t.$slides.first().width();
                  !1 === t.options.variableWidth &&
                    t.$slideTrack
                      .children(".slick-slide")
                      .width(t.slideWidth - e);
                }),
                (e.prototype.setFade = function () {
                  var e,
                    i = this;
                  i.$slides.each(function (o, s) {
                    (e = i.slideWidth * o * -1),
                      !0 === i.options.rtl
                        ? t(s).css({
                            position: "relative",
                            right: e,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0,
                          })
                        : t(s).css({
                            position: "relative",
                            left: e,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0,
                          });
                  }),
                    i.$slides
                      .eq(i.currentSlide)
                      .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
                }),
                (e.prototype.setHeight = function () {
                  var t = this;
                  if (
                    1 === t.options.slidesToShow &&
                    !0 === t.options.adaptiveHeight &&
                    !1 === t.options.vertical
                  ) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e);
                  }
                }),
                (e.prototype.setOption = e.prototype.slickSetOption =
                  function () {
                    var e,
                      i,
                      o,
                      s,
                      n,
                      r = this,
                      l = !1;
                    if (
                      ("object" === t.type(arguments[0])
                        ? ((o = arguments[0]),
                          (l = arguments[1]),
                          (n = "multiple"))
                        : "string" === t.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === t.type(arguments[1])
                            ? (n = "responsive")
                            : void 0 !== arguments[1] && (n = "single")),
                      "single" === n)
                    )
                      r.options[o] = s;
                    else if ("multiple" === n)
                      t.each(o, function (t, e) {
                        r.options[t] = e;
                      });
                    else if ("responsive" === n)
                      for (i in s)
                        if ("array" !== t.type(r.options.responsive))
                          r.options.responsive = [s[i]];
                        else {
                          for (e = r.options.responsive.length - 1; e >= 0; )
                            r.options.responsive[e].breakpoint ===
                              s[i].breakpoint &&
                              r.options.responsive.splice(e, 1),
                              e--;
                          r.options.responsive.push(s[i]);
                        }
                    l && (r.unload(), r.reinit());
                  }),
                (e.prototype.setPosition = function () {
                  var t = this;
                  t.setDimensions(),
                    t.setHeight(),
                    !1 === t.options.fade
                      ? t.setCSS(t.getLeft(t.currentSlide))
                      : t.setFade(),
                    t.$slider.trigger("setPosition", [t]);
                }),
                (e.prototype.setProps = function () {
                  var t = this,
                    e = document.body.style;
                  (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                    "top" === t.positionProp
                      ? t.$slider.addClass("slick-vertical")
                      : t.$slider.removeClass("slick-vertical"),
                    (void 0 === e.WebkitTransition &&
                      void 0 === e.MozTransition &&
                      void 0 === e.msTransition) ||
                      (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                    t.options.fade &&
                      ("number" == typeof t.options.zIndex
                        ? t.options.zIndex < 3 && (t.options.zIndex = 3)
                        : (t.options.zIndex = t.defaults.zIndex)),
                    void 0 !== e.OTransform &&
                      ((t.animType = "OTransform"),
                      (t.transformType = "-o-transform"),
                      (t.transitionType = "OTransition"),
                      void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (t.animType = !1)),
                    void 0 !== e.MozTransform &&
                      ((t.animType = "MozTransform"),
                      (t.transformType = "-moz-transform"),
                      (t.transitionType = "MozTransition"),
                      void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (t.animType = !1)),
                    void 0 !== e.webkitTransform &&
                      ((t.animType = "webkitTransform"),
                      (t.transformType = "-webkit-transform"),
                      (t.transitionType = "webkitTransition"),
                      void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (t.animType = !1)),
                    void 0 !== e.msTransform &&
                      ((t.animType = "msTransform"),
                      (t.transformType = "-ms-transform"),
                      (t.transitionType = "msTransition"),
                      void 0 === e.msTransform && (t.animType = !1)),
                    void 0 !== e.transform &&
                      !1 !== t.animType &&
                      ((t.animType = "transform"),
                      (t.transformType = "transform"),
                      (t.transitionType = "transition")),
                    (t.transformsEnabled =
                      t.options.useTransform &&
                      null !== t.animType &&
                      !1 !== t.animType);
                }),
                (e.prototype.setSlideClasses = function (t) {
                  var e,
                    i,
                    o,
                    s,
                    n = this;
                  if (
                    ((i = n.$slider
                      .find(".slick-slide")
                      .removeClass("slick-active slick-center slick-current")
                      .attr("aria-hidden", "true")),
                    n.$slides.eq(t).addClass("slick-current"),
                    !0 === n.options.centerMode)
                  ) {
                    var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (e = Math.floor(n.options.slidesToShow / 2)),
                      !0 === n.options.infinite &&
                        (t >= e && t <= n.slideCount - 1 - e
                          ? n.$slides
                              .slice(t - e + r, t + e + 1)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : ((o = n.options.slidesToShow + t),
                            i
                              .slice(o - e + 1 + r, o + e + 2)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")),
                        0 === t
                          ? i
                              .eq(i.length - 1 - n.options.slidesToShow)
                              .addClass("slick-center")
                          : t === n.slideCount - 1 &&
                            i
                              .eq(n.options.slidesToShow)
                              .addClass("slick-center")),
                      n.$slides.eq(t).addClass("slick-center");
                  } else
                    t >= 0 && t <= n.slideCount - n.options.slidesToShow
                      ? n.$slides
                          .slice(t, t + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : i.length <= n.options.slidesToShow
                      ? i.addClass("slick-active").attr("aria-hidden", "false")
                      : ((s = n.slideCount % n.options.slidesToShow),
                        (o =
                          !0 === n.options.infinite
                            ? n.options.slidesToShow + t
                            : t),
                        n.options.slidesToShow == n.options.slidesToScroll &&
                        n.slideCount - t < n.options.slidesToShow
                          ? i
                              .slice(o - (n.options.slidesToShow - s), o + s)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : i
                              .slice(o, o + n.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
                  ("ondemand" !== n.options.lazyLoad &&
                    "anticipated" !== n.options.lazyLoad) ||
                    n.lazyLoad();
                }),
                (e.prototype.setupInfinite = function () {
                  var e,
                    i,
                    o,
                    s = this;
                  if (
                    (!0 === s.options.fade && (s.options.centerMode = !1),
                    !0 === s.options.infinite &&
                      !1 === s.options.fade &&
                      ((i = null), s.slideCount > s.options.slidesToShow))
                  ) {
                    for (
                      o =
                        !0 === s.options.centerMode
                          ? s.options.slidesToShow + 1
                          : s.options.slidesToShow,
                        e = s.slideCount;
                      e > s.slideCount - o;
                      e -= 1
                    )
                      (i = e - 1),
                        t(s.$slides[i])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", i - s.slideCount)
                          .prependTo(s.$slideTrack)
                          .addClass("slick-cloned");
                    for (e = 0; e < o + s.slideCount; e += 1)
                      (i = e),
                        t(s.$slides[i])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", i + s.slideCount)
                          .appendTo(s.$slideTrack)
                          .addClass("slick-cloned");
                    s.$slideTrack
                      .find(".slick-cloned")
                      .find("[id]")
                      .each(function () {
                        t(this).attr("id", "");
                      });
                  }
                }),
                (e.prototype.interrupt = function (t) {
                  t || this.autoPlay(), (this.interrupted = t);
                }),
                (e.prototype.selectHandler = function (e) {
                  var i = this,
                    o = t(e.target).is(".slick-slide")
                      ? t(e.target)
                      : t(e.target).parents(".slick-slide"),
                    s = parseInt(o.attr("data-slick-index"));
                  s || (s = 0),
                    i.slideCount <= i.options.slidesToShow
                      ? i.slideHandler(s, !1, !0)
                      : i.slideHandler(s);
                }),
                (e.prototype.slideHandler = function (t, e, i) {
                  var o,
                    s,
                    n,
                    r,
                    l,
                    a,
                    d = this;
                  if (
                    ((e = e || !1),
                    !(
                      (!0 === d.animating && !0 === d.options.waitForAnimate) ||
                      (!0 === d.options.fade && d.currentSlide === t)
                    ))
                  )
                    if (
                      (!1 === e && d.asNavFor(t),
                      (o = t),
                      (l = d.getLeft(o)),
                      (r = d.getLeft(d.currentSlide)),
                      (d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft),
                      !1 === d.options.infinite &&
                        !1 === d.options.centerMode &&
                        (t < 0 ||
                          t > d.getDotCount() * d.options.slidesToScroll))
                    )
                      !1 === d.options.fade &&
                        ((o = d.currentSlide),
                        !0 !== i && d.slideCount > d.options.slidesToShow
                          ? d.animateSlide(r, function () {
                              d.postSlide(o);
                            })
                          : d.postSlide(o));
                    else if (
                      !1 === d.options.infinite &&
                      !0 === d.options.centerMode &&
                      (t < 0 || t > d.slideCount - d.options.slidesToScroll)
                    )
                      !1 === d.options.fade &&
                        ((o = d.currentSlide),
                        !0 !== i && d.slideCount > d.options.slidesToShow
                          ? d.animateSlide(r, function () {
                              d.postSlide(o);
                            })
                          : d.postSlide(o));
                    else {
                      if (
                        (d.options.autoplay && clearInterval(d.autoPlayTimer),
                        (s =
                          o < 0
                            ? d.slideCount % d.options.slidesToScroll != 0
                              ? d.slideCount -
                                (d.slideCount % d.options.slidesToScroll)
                              : d.slideCount + o
                            : o >= d.slideCount
                            ? d.slideCount % d.options.slidesToScroll != 0
                              ? 0
                              : o - d.slideCount
                            : o),
                        (d.animating = !0),
                        d.$slider.trigger("beforeChange", [
                          d,
                          d.currentSlide,
                          s,
                        ]),
                        (n = d.currentSlide),
                        (d.currentSlide = s),
                        d.setSlideClasses(d.currentSlide),
                        d.options.asNavFor &&
                          (a = (a = d.getNavTarget()).slick("getSlick"))
                            .slideCount <= a.options.slidesToShow &&
                          a.setSlideClasses(d.currentSlide),
                        d.updateDots(),
                        d.updateArrows(),
                        !0 === d.options.fade)
                      )
                        return (
                          !0 !== i
                            ? (d.fadeSlideOut(n),
                              d.fadeSlide(s, function () {
                                d.postSlide(s);
                              }))
                            : d.postSlide(s),
                          void d.animateHeight()
                        );
                      !0 !== i && d.slideCount > d.options.slidesToShow
                        ? d.animateSlide(l, function () {
                            d.postSlide(s);
                          })
                        : d.postSlide(s);
                    }
                }),
                (e.prototype.startLoad = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.hide(), t.$nextArrow.hide()),
                    !0 === t.options.dots &&
                      t.slideCount > t.options.slidesToShow &&
                      t.$dots.hide(),
                    t.$slider.addClass("slick-loading");
                }),
                (e.prototype.swipeDirection = function () {
                  var t,
                    e,
                    i,
                    o,
                    s = this;
                  return (
                    (t = s.touchObject.startX - s.touchObject.curX),
                    (e = s.touchObject.startY - s.touchObject.curY),
                    (i = Math.atan2(e, t)),
                    (o = Math.round((180 * i) / Math.PI)) < 0 &&
                      (o = 360 - Math.abs(o)),
                    (o <= 45 && o >= 0) || (o <= 360 && o >= 315)
                      ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                      : o >= 135 && o <= 225
                      ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                      : !0 === s.options.verticalSwiping
                      ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                      : "vertical"
                  );
                }),
                (e.prototype.swipeEnd = function (t) {
                  var e,
                    i,
                    o = this;
                  if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                    return (o.scrolling = !1), !1;
                  if (
                    ((o.interrupted = !1),
                    (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                    void 0 === o.touchObject.curX)
                  )
                    return !1;
                  if (
                    (!0 === o.touchObject.edgeHit &&
                      o.$slider.trigger("edge", [o, o.swipeDirection()]),
                    o.touchObject.swipeLength >= o.touchObject.minSwipe)
                  ) {
                    switch ((i = o.swipeDirection())) {
                      case "left":
                      case "down":
                        (e = o.options.swipeToSlide
                          ? o.checkNavigable(o.currentSlide + o.getSlideCount())
                          : o.currentSlide + o.getSlideCount()),
                          (o.currentDirection = 0);
                        break;
                      case "right":
                      case "up":
                        (e = o.options.swipeToSlide
                          ? o.checkNavigable(o.currentSlide - o.getSlideCount())
                          : o.currentSlide - o.getSlideCount()),
                          (o.currentDirection = 1);
                    }
                    "vertical" != i &&
                      (o.slideHandler(e),
                      (o.touchObject = {}),
                      o.$slider.trigger("swipe", [o, i]));
                  } else
                    o.touchObject.startX !== o.touchObject.curX &&
                      (o.slideHandler(o.currentSlide), (o.touchObject = {}));
                }),
                (e.prototype.swipeHandler = function (t) {
                  var e = this;
                  if (
                    !(
                      !1 === e.options.swipe ||
                      ("ontouchend" in document && !1 === e.options.swipe) ||
                      (!1 === e.options.draggable &&
                        -1 !== t.type.indexOf("mouse"))
                    )
                  )
                    switch (
                      ((e.touchObject.fingerCount =
                        t.originalEvent && void 0 !== t.originalEvent.touches
                          ? t.originalEvent.touches.length
                          : 1),
                      (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                      !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                          e.listHeight / e.options.touchThreshold),
                      t.data.action)
                    ) {
                      case "start":
                        e.swipeStart(t);
                        break;
                      case "move":
                        e.swipeMove(t);
                        break;
                      case "end":
                        e.swipeEnd(t);
                    }
                }),
                (e.prototype.swipeMove = function (t) {
                  var e,
                    i,
                    o,
                    s,
                    n,
                    r,
                    l = this;
                  return (
                    (n =
                      void 0 !== t.originalEvent
                        ? t.originalEvent.touches
                        : null),
                    !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                      ((e = l.getLeft(l.currentSlide)),
                      (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : t.clientX),
                      (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : t.clientY),
                      (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                          Math.pow(l.touchObject.curX - l.touchObject.startX, 2)
                        )
                      )),
                      (r = Math.round(
                        Math.sqrt(
                          Math.pow(l.touchObject.curY - l.touchObject.startY, 2)
                        )
                      )),
                      !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                            (l.touchObject.swipeLength = r),
                          (i = l.swipeDirection()),
                          void 0 !== t.originalEvent &&
                            l.touchObject.swipeLength > 4 &&
                            ((l.swiping = !0), t.preventDefault()),
                          (s =
                            (!1 === l.options.rtl ? 1 : -1) *
                            (l.touchObject.curX > l.touchObject.startX
                              ? 1
                              : -1)),
                          !0 === l.options.verticalSwiping &&
                            (s =
                              l.touchObject.curY > l.touchObject.startY
                                ? 1
                                : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                            ((0 === l.currentSlide && "right" === i) ||
                              (l.currentSlide >= l.getDotCount() &&
                                "left" === i)) &&
                            ((o =
                              l.touchObject.swipeLength *
                              l.options.edgeFriction),
                            (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                            ? (l.swipeLeft = e + o * s)
                            : (l.swipeLeft =
                                e + o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                            (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                            !1 !== l.options.touchMove &&
                            (!0 === l.animating
                              ? ((l.swipeLeft = null), !1)
                              : void l.setCSS(l.swipeLeft))))
                  );
                }),
                (e.prototype.swipeStart = function (t) {
                  var e,
                    i = this;
                  if (
                    ((i.interrupted = !0),
                    1 !== i.touchObject.fingerCount ||
                      i.slideCount <= i.options.slidesToShow)
                  )
                    return (i.touchObject = {}), !1;
                  void 0 !== t.originalEvent &&
                    void 0 !== t.originalEvent.touches &&
                    (e = t.originalEvent.touches[0]),
                    (i.touchObject.startX = i.touchObject.curX =
                      void 0 !== e ? e.pageX : t.clientX),
                    (i.touchObject.startY = i.touchObject.curY =
                      void 0 !== e ? e.pageY : t.clientY),
                    (i.dragging = !0);
                }),
                (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
                  function () {
                    var t = this;
                    null !== t.$slidesCache &&
                      (t.unload(),
                      t.$slideTrack.children(this.options.slide).detach(),
                      t.$slidesCache.appendTo(t.$slideTrack),
                      t.reinit());
                  }),
                (e.prototype.unload = function () {
                  var e = this;
                  t(".slick-cloned", e.$slider).remove(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow &&
                      e.htmlExpr.test(e.options.prevArrow) &&
                      e.$prevArrow.remove(),
                    e.$nextArrow &&
                      e.htmlExpr.test(e.options.nextArrow) &&
                      e.$nextArrow.remove(),
                    e.$slides
                      .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                      )
                      .attr("aria-hidden", "true")
                      .css("width", "");
                }),
                (e.prototype.unslick = function (t) {
                  var e = this;
                  e.$slider.trigger("unslick", [e, t]), e.destroy();
                }),
                (e.prototype.updateArrows = function () {
                  var t = this;
                  Math.floor(t.options.slidesToShow / 2),
                    !0 === t.options.arrows &&
                      t.slideCount > t.options.slidesToShow &&
                      !t.options.infinite &&
                      (t.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      t.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      0 === t.currentSlide
                        ? (t.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          t.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : ((t.currentSlide >=
                            t.slideCount - t.options.slidesToShow &&
                            !1 === t.options.centerMode) ||
                            (t.currentSlide >= t.slideCount - 1 &&
                              !0 === t.options.centerMode)) &&
                          (t.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          t.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false")));
                }),
                (e.prototype.updateDots = function () {
                  var t = this;
                  null !== t.$dots &&
                    (t.$dots.find("li").removeClass("slick-active").end(),
                    t.$dots
                      .find("li")
                      .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                      .addClass("slick-active"));
                }),
                (e.prototype.visibility = function () {
                  var t = this;
                  t.options.autoplay &&
                    (document[t.hidden]
                      ? (t.interrupted = !0)
                      : (t.interrupted = !1));
                }),
                (t.fn.slick = function () {
                  var t,
                    i,
                    o = this,
                    s = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    r = o.length;
                  for (t = 0; t < r; t++)
                    if (
                      ("object" == typeof s || void 0 === s
                        ? (o[t].slick = new e(o[t], s))
                        : (i = o[t].slick[s].apply(o[t].slick, n)),
                      void 0 !== i)
                    )
                      return i;
                  return o;
                });
              var i;
            })
              ? o.apply(e, s)
              : o) || (t.exports = n);
    })();
  },
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    var o = i(0),
      s = i.n(o);
    i(3);
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    var r = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.scrollTop = $(window).scrollTop()),
          (this.windowHeight = $(window).height()),
          (this.currentElements = e),
          (this.result = []),
          (this.offset = 0),
          (this.height = 0),
          (this.center = 0);
      }
      var e, i, o;
      return (
        (e = t),
        (i = [
          {
            key: "updatePar",
            value: function () {
              (this.result = []),
                this.updateScroll(),
                (this.windowHeight = $(window).height());
            },
          },
          {
            key: "updateScroll",
            value: function () {
              return (this.scrollTop = $(window).scrollTop());
            },
          },
          {
            key: "elInWindowAll",
            value: function () {
              var t = this;
              return (
                this.updatePar(),
                this.currentElements.each(function (e, i) {
                  (t.offset = $(i).offset().top),
                    (t.height = $(i).outerHeight()),
                    t.scrollTop <= t.offset &&
                      t.height + t.offset < t.scrollTop + t.windowHeight &&
                      t.result.push(i);
                }),
                this.result
              );
            },
          },
          {
            key: "elInWindowCenter",
            value: function () {
              var t = this;
              return (
                this.updatePar(),
                this.currentElements.each(function (e, i) {
                  (t.offset = $(i).offset().top),
                    (t.center = $(i).outerHeight() / 2),
                    t.scrollTop <= t.offset &&
                      t.center + t.offset < t.scrollTop + t.windowHeight &&
                      t.result.push(i);
                }),
                this.result
              );
            },
          },
          {
            key: "elInWindowTopBottom",
            value: function () {
              var t = this;
              return (
                this.updatePar(),
                this.currentElements.each(function (e, i) {
                  (t.offset = $(i).offset().top),
                    (t.height = $(i).outerHeight()),
                    t.scrollTop <= t.height + t.offset &&
                      t.offset < t.scrollTop + t.windowHeight &&
                      t.result.push(i);
                }),
                this.result
              );
            },
          },
          {
            key: "elInWindowTop",
            value: function () {
              var t = this;
              return (
                this.updatePar(),
                this.currentElements.each(function (e, i) {
                  (t.offset = $(i).offset().top),
                    t.scrollTop <= t.offset &&
                      t.offset < t.scrollTop + t.windowHeight &&
                      t.result.push(i);
                }),
                this.result
              );
            },
          },
        ]) && n(e.prototype, i),
        o && n(e, o),
        t
      );
    })();
    function l(t, e) {
      if ("#" === $(e).attr("href")[0]) {
        t.preventDefault();
        try {
          var i = e.hash,
            o = $(i).offset().top;
          $("html, body").stop().animate({ scrollTop: o }, 600);
        } catch (t) {}
      }
    }
    var a,
      d,
      c,
      p,
      u = new r($(".visible_section_js"));
    function h(t) {
      if ((d = u.elInWindowTop()[0])) {
        if (((c = $(d).attr("id")), $(a).attr("href") == "#" + c)) return;
        (p = "a[href='#".concat(c, "']")),
          $(a).removeClass("active"),
          $(t).find(p).addClass("active"),
          (a = $(p));
      } else $(".link_js").removeClass("active");
    }
    var f = new r($(".visible_button_js"));
    function v(t) {
      0 == f.elInWindowTopBottom().length
        ? t.addClass("active")
        : t.removeClass("active");
    }
    var m = i(1),
      w = i.n(m);
    $(function () {
      s()();
      var t,
        e = $("#floating_button_js"),
        i = $("#hamburger_js"),
        o = $("#nav_mob_js"),
        n = $(".link_js"),
        a = (document.getElementById("rotate_el_js"), $("#menu_js")),
        d = new Date();
      d.setHours(23), d.setMinutes(59), d.setSeconds(59);
      var c = { theme: "light", headings: timer_data };
      function p(s) {
        if (s.matches)
          if (
            ((function (t, e, i) {
              i.on("click", function (i) {
                this.closest("#nav_mob_js") &&
                  (t.removeClass("active"), $(this).closest(e).slideUp(300)),
                  l(i, this);
              });
            })(i, o, n),
            (function (t, e) {
              t.on("click", function () {
                $(this).toggleClass("active"), e.stop().slideToggle(300);
              });
            })(i, o),
            v(e),
            $(".scrollme_js").addClass("scrollme animateme"),
            window.scrollme.body_height)
          ) {
            var r = window.scrollme;
            (r.body_height =
              r.body_width =
              r.viewport_height =
              r.viewport_width =
              r.viewport_top =
                0),
              window.scrollme.destroy_elements(),
              window.scrollme.init_elements(),
              window.scrollme.on_resize();
          } else window.scrollme.init();
        else {
          !(function (t) {
            t.on("click", function (t) {
              l(t, this);
            });
          })(n),
            (t = document.querySelectorAll(".parallax_js"));
          var a = !0,
            p = !1,
            u = void 0;
          try {
            for (
              var h, f = t[Symbol.iterator]();
              !(a = (h = f.next()).done);
              a = !0
            ) {
              var m = h.value;
              new w.a(m);
            }
          } catch (t) {
            (p = !0), (u = t);
          } finally {
            try {
              a || null == f.return || f.return();
            } finally {
              if (p) throw u;
            }
          }
          $("#flipdown_top").children().length ||
            new FlipDown(d.getTime() / 1e3, "flipdown_top", c)
              .start()
              .ifEnded(function () {
                console.log("The countdown has ended!");
              }),
            $(".scrollme_js").removeClass("scrollme animateme"),
            window.scrollme.destroy_elements();
        }
      }
      function u() {
        (y = []),
          g.each(function () {
            var t = {};
            (t.top = $(this).offset().top),
              (t.bottom = t.top + $(this).innerHeight()),
              y.push(t);
          }),
          g.removeClass("animate"),
          m.updatePar();
      }
      new FlipDown(d.getTime() / 1e3, "flipdown_bottom", c)
        .start()
        .ifEnded(function () {
          console.log("The countdown has ended!");
        }),
        (function () {
          var t = $("#slider1_js"),
            e = $("#slider2_js"),
            i = $(".result__img"),
            o = $("#rotate_el_js_1"),
            s = $("#slider_result_name_js"),
            n = $("#slider_result_img1_js"),
            r = $("#slider_result_img2_js"),
            l = !1,
            a = !1,
            d = 0,
            c = 0,
            p = 0;
          function u(t) {
            if (($(i).removeAttr("style"), t.matches))
              (p = 1),
                a && ($(e).slick("unslick"), (a = !1), (c = 0)),
                $(s).slick({
                  infinite: !0,
                  arrows: !1,
                  fade: !0,
                  dots: !0,
                  appendDots: $("#result_mob_dots_js"),
                  asNavFor: ".slider_result_mob_js",
                  autoplay: !0,
                  autoplaySpeed: 2e3,
                }),
                $(n).slick({
                  arrows: !1,
                  asNavFor: ".slider_result_mob_js",
                  autoplay: !0,
                  autoplaySpeed: 2e3,
                  touchMove: !1,
                  draggable: !0,
                }),
                $(r).slick({
                  arrows: !1,
                  asNavFor: ".slider_result_mob_js",
                  autoplay: !0,
                  autoplaySpeed: 2e3,
                  touchMove: !1,
                  draggable: !0,
                }),
                (d = 0),
                $(s).on("beforeChange", function (t, e, s, n) {
                  p != s &&
                    ((p = s),
                    (d += 60),
                    $(i).css({
                      transform: "rotate(".concat(d, "deg)"),
                      transition: "0.3s",
                    }),
                    $(o).css({ animation: "rezult_sc 0.3s" }));
                }),
                $(s).on("afterChange", function (t, e, s) {
                  d >= 360 &&
                    ((d = 0),
                    $(i).css({ transform: "rotate(0deg)", transition: "0s" })),
                    $(o).removeAttr("style");
                }),
                (l = !0);
            else {
              if (
                ((p = 0),
                l &&
                  ($(s).slick("unslick"),
                  $(n).slick("unslick"),
                  $(r).slick("unslick"),
                  (l = !1),
                  (d = 0)),
                a)
              )
                return;
              $(e).slick({
                initialSlide: 1,
                infinite: !0,
                dots: !1,
                touchMove: !1,
                draggable: !1,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: !0,
                centerPadding: "0",
                autoplay: !0,
                autoplaySpeed: 2e3,
              }),
                (c = 0),
                $(e).on("beforeChange", function (t, e, s, n) {
                  p != s &&
                    ((p = s),
                    (c += 60),
                    $(i).css({
                      transform: "rotate(".concat(c, "deg)"),
                      transition: "0.4s",
                    }),
                    $(o).css({ animation: "rezult_sc 0.4s" }));
                }),
                $(e).on("afterChange", function (t, e, s) {
                  c >= 360 &&
                    ((c = 0),
                    $(i).css({ transform: "rotate(0deg)", transition: "0s" })),
                    $(o).removeAttr("style");
                }),
                (a = !0);
            }
          }
          $(t).slick({
            infinite: !0,
            dots: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
          var h = window.matchMedia("(max-width: 1140px)");
          u(h), h.addListener(u);
        })(),
        h(a),
        $(window).on("scroll", function () {
          h(a);
        });
      var f = window.matchMedia("(max-width: 1140px)"),
        m = new r($(".visible_anim_js")),
        g = $(".js-slider"),
        y = [];
      u(),
        $(window).on("scroll", function () {
          var t = m.updateScroll() + m.windowHeight / 2;
          g.each(function (e) {
            t > y[e].top &&
              y[e].bottom > t &&
              !$(this).hasClass("anim") &&
              ($(this).find(".slick-slider").slick("slickNext"),
              $(this).addClass("anim"));
          }),
            f.matches && v(e);
        }),
        $(window).on("resize", function () {
          u();
        }),
        p(f),
        f.addListener(p),
        f.addEventListener("change", p);
    });
  },
]);
$(document).ready(function () {
  var navWrap = $(".nav__wrapper"),
    humbgr = $(".hamburger"),
    linkNav = $(".link_js");
  navWrap.css({ position: "sticky", top: "0", "z-index": "1202" });
  $(".header, .header-mob").css("position", "sticky");
  humbgr.on("click", function () {
    if (humbgr.hasClass("active")) {
      navWrap.css({ position: "sticky", "z-index": "10001", top: "0" });
      $(".header, .header-mob").css("position", "fixed");
    } else {
      navWrap.css({ position: "sticky", "z-index": "1000" });
      $(".header, .header-mob").css("position", "sticky");
    }
  });
  linkNav.on("click", function () {
    $(".header, .header-mob").css("position", "sticky");
  });
});
