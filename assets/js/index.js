(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/preline/dist/hs-ui.bundle.js
  var require_hs_ui_bundle = __commonJS({
    "node_modules/preline/dist/hs-ui.bundle.js"(exports, module) {
      !function(t, e) {
        if ("object" == typeof exports && "object" == typeof module)
          module.exports = e();
        else if ("function" == typeof define && define.amd)
          define([], e);
        else {
          var o = e();
          for (var n in o)
            ("object" == typeof exports ? exports : t)[n] = o[n];
        }
      }(self, function() {
        return (() => {
          "use strict";
          var t = { 661: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function i(t3, e3) {
              return i = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, i(t3, e3);
            }
            function a(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function c(t3) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, c(t3);
            }
            var s = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
              }(l, t3);
              var e3, o3, n3, s2, u = (n3 = l, s2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = c(n3);
                if (s2) {
                  var o4 = c(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return a(this, t4);
              });
              function l() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, l), u.call(this, ".hs-accordion");
              }
              return e3 = l, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target, n4 = o4.closest(t4.selector), r2 = o4.closest(".hs-accordion-toggle"), i2 = o4.closest(".hs-accordion-group");
                  n4 && i2 && r2 && (t4._hideAll(n4), t4.show(n4));
                });
              } }, { key: "show", value: function(t4) {
                var e4 = this;
                if (t4.classList.contains("active"))
                  return this.hide(t4);
                t4.classList.add("active");
                var o4 = t4.querySelector(".hs-accordion-content");
                o4.style.display = "block", o4.style.height = 0, setTimeout(function() {
                  o4.style.height = "".concat(o4.scrollHeight, "px");
                }), this.afterTransition(o4, function() {
                  t4.classList.contains("active") && (o4.style.height = "", e4._fireEvent("open", t4), e4._dispatch("open.hs.accordion", t4, t4));
                });
              } }, { key: "hide", value: function(t4) {
                var e4 = this, o4 = t4.querySelector(".hs-accordion-content");
                o4.style.height = "".concat(o4.scrollHeight, "px"), setTimeout(function() {
                  o4.style.height = 0;
                }), this.afterTransition(o4, function() {
                  t4.classList.contains("active") || (o4.style.display = "", e4._fireEvent("hide", t4), e4._dispatch("hide.hs.accordion", t4, t4));
                }), t4.classList.remove("active");
              } }, { key: "_hideAll", value: function(t4) {
                var e4 = this, o4 = t4.closest(".hs-accordion-group");
                o4.hasAttribute("data-hs-accordion-always-open") || o4.querySelectorAll(this.selector).forEach(function(o5) {
                  t4 !== o5 && e4.hide(o5);
                });
              } }]) && r(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), l;
            }(o2(765).Z);
            window.HSAccordion = new s(), document.addEventListener("load", window.HSAccordion.init());
          }, 795: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              (null == e3 || e3 > t3.length) && (e3 = t3.length);
              for (var o3 = 0, n3 = new Array(e3); o3 < e3; o3++)
                n3[o3] = t3[o3];
              return n3;
            }
            function i(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function a(t3, e3) {
              return a = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, a(t3, e3);
            }
            function c(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function s(t3) {
              return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, s(t3);
            }
            var u = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && a(t4, e4);
              }(f, t3);
              var e3, o3, n3, u2, l = (n3 = f, u2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = s(n3);
                if (u2) {
                  var o4 = s(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return c(this, t4);
              });
              function f() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, f), l.call(this, "[data-hs-collapse]");
              }
              return e3 = f, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target.closest(t4.selector);
                  if (o4) {
                    var n4 = document.querySelectorAll(o4.getAttribute("data-hs-collapse"));
                    t4.toggle(n4);
                  }
                });
              } }, { key: "toggle", value: function(t4) {
                var e4, o4 = this;
                t4.length && (e4 = t4, function(t5) {
                  if (Array.isArray(t5))
                    return r(t5);
                }(e4) || function(t5) {
                  if ("undefined" != typeof Symbol && null != t5[Symbol.iterator] || null != t5["@@iterator"])
                    return Array.from(t5);
                }(e4) || function(t5, e5) {
                  if (t5) {
                    if ("string" == typeof t5)
                      return r(t5, e5);
                    var o5 = Object.prototype.toString.call(t5).slice(8, -1);
                    return "Object" === o5 && t5.constructor && (o5 = t5.constructor.name), "Map" === o5 || "Set" === o5 ? Array.from(t5) : "Arguments" === o5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o5) ? r(t5, e5) : void 0;
                  }
                }(e4) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }()).forEach(function(t5) {
                  t5.classList.contains("hidden") ? o4.show(t5) : o4.hide(t5);
                });
              } }, { key: "show", value: function(t4) {
                var e4 = this;
                t4.classList.add("open"), t4.classList.remove("hidden"), t4.style.height = 0, document.querySelectorAll(this.selector).forEach(function(e5) {
                  t4.closest(e5.getAttribute("data-hs-collapse")) && e5.classList.add("open");
                }), t4.style.height = "".concat(t4.scrollHeight, "px"), this.afterTransition(t4, function() {
                  t4.classList.contains("open") && (t4.style.height = "", e4._fireEvent("open", t4), e4._dispatch("open.hs.collapse", t4, t4));
                });
              } }, { key: "hide", value: function(t4) {
                var e4 = this;
                t4.style.height = "".concat(t4.scrollHeight, "px"), setTimeout(function() {
                  t4.style.height = 0;
                }), t4.classList.remove("open"), this.afterTransition(t4, function() {
                  t4.classList.contains("open") || (t4.classList.add("hidden"), t4.style.height = null, e4._fireEvent("hide", t4), e4._dispatch("hide.hs.collapse", t4, t4), t4.querySelectorAll(".hs-mega-menu-content.block").forEach(function(t5) {
                    t5.classList.remove("block"), t5.classList.add("hidden");
                  }));
                }), document.querySelectorAll(this.selector).forEach(function(e5) {
                  t4.closest(e5.getAttribute("data-hs-collapse")) && e5.classList.remove("open");
                });
              } }]) && i(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), f;
            }(o2(765).Z);
            window.HSCollapse = new u(), document.addEventListener("load", window.HSCollapse.init());
          }, 483: (t2, e2, o2) => {
            var n2 = o2(714), r = o2(765), i = o2(422);
            function a(t3) {
              return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, a(t3);
            }
            function c(t3) {
              return function(t4) {
                if (Array.isArray(t4))
                  return s(t4);
              }(t3) || function(t4) {
                if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
                  return Array.from(t4);
              }(t3) || function(t4, e3) {
                if (t4) {
                  if ("string" == typeof t4)
                    return s(t4, e3);
                  var o3 = Object.prototype.toString.call(t4).slice(8, -1);
                  return "Object" === o3 && t4.constructor && (o3 = t4.constructor.name), "Map" === o3 || "Set" === o3 ? Array.from(t4) : "Arguments" === o3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o3) ? s(t4, e3) : void 0;
                }
              }(t3) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function s(t3, e3) {
              (null == e3 || e3 > t3.length) && (e3 = t3.length);
              for (var o3 = 0, n3 = new Array(e3); o3 < e3; o3++)
                n3[o3] = t3[o3];
              return n3;
            }
            function u(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function l(t3, e3) {
              return l = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, l(t3, e3);
            }
            function f(t3, e3) {
              if (e3 && ("object" === a(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function d(t3) {
              return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, d(t3);
            }
            var p = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && l(t4, e4);
              }(p2, t3);
              var e3, o3, r2, a2, s2 = (r2 = p2, a2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = d(r2);
                if (a2) {
                  var o4 = d(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return f(this, t4);
              });
              function p2() {
                var t4;
                return function(t5, e4) {
                  if (!(t5 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, p2), (t4 = s2.call(this, ".hs-dropdown")).positions = { top: "top", "top-left": "top-start", "top-right": "top-end", bottom: "bottom", "bottom-left": "bottom-start", "bottom-right": "bottom-end", right: "right", "right-top": "right-start", "right-bottom": "right-end", left: "left", "left-top": "left-start", "left-bottom": "left-end" }, t4.absoluteStrategyModifiers = [{ name: "applyStyles", fn: function(t5) {
                  t5.state.elements.popper.style.position = t5.state.styles.popper.position, t5.state.elements.popper.style.transform = t5.state.styles.popper.transform, t5.state.elements.popper.style.top = null, t5.state.elements.popper.style.bottom = null, t5.state.elements.popper.style.left = null, t5.state.elements.popper.style.right = null, t5.state.elements.popper.style.margin = 0;
                } }, { name: "computeStyles", options: { adaptive: false } }], t4._history = i.Z, t4;
              }
              return e3 = p2, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target, n3 = o4.closest(t4.selector), r3 = o4.closest(".hs-dropdown-menu");
                  if (n3 && n3.classList.contains("open") || t4._closeOthers(), r3) {
                    var i2 = n3.getAttribute("data-hs-dropdown-auto-close");
                    if ("false" == i2 || "inside" == i2)
                      return;
                  }
                  n3 && (n3.classList.contains("open") ? t4.close(n3) : t4.open(n3));
                }), document.addEventListener("mousemove", function(e4) {
                  var o4 = e4.target, n3 = o4.closest(t4.selector);
                  o4.closest(".hs-dropdown-menu"), !n3 || "hover" !== n3.getAttribute("data-hs-dropdown-trigger") || n3.classList.contains("open") || /iPad|iPhone|iPod/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || t4._hover(o4);
                }), document.addEventListener("keydown", this._keyboardSupport.bind(this));
              } }, { key: "_closeOthers", value: function() {
                var t4 = this;
                document.querySelectorAll("".concat(this.selector, ".open")).forEach(function(e4) {
                  var o4 = e4.getAttribute("data-hs-dropdown-auto-close");
                  "false" != o4 && "outside" != o4 && t4.close(e4);
                });
              } }, { key: "_hover", value: function(t4) {
                var e4 = this, o4 = t4.closest(this.selector);
                this.open(o4), document.addEventListener("mousemove", function t5(n3) {
                  n3.target.closest(e4.selector) || (e4.close(o4), document.removeEventListener("mousemove", t5, true));
                }, true);
              } }, { key: "close", value: function(t4) {
                var e4 = t4.querySelector(".hs-dropdown-menu");
                e4.style.margin = null, t4.classList.remove("open"), this.afterTransition(t4.querySelector("[data-hs-dropdown-transition]") || e4, function() {
                  t4.classList.contains("open") || (e4.classList.remove("block"), e4.classList.add("hidden"), e4.style.inset = null, e4.style.position = null);
                }), this._fireEvent("close", t4), this._dispatch("close.hs.dropdown", t4, t4);
              } }, { key: "open", value: function(t4) {
                var e4 = t4.querySelector(".hs-dropdown-menu"), o4 = t4.getAttribute("data-hs-dropdown-placement"), r3 = t4.getAttribute("data-hs-dropdown-strategy") || "fixed", i2 = t4.getAttribute("data-hs-dropdown-offset") || 10;
                (0, n2.fi)(t4, e4, { placement: this.positions[o4] || "bottom-start", strategy: r3, modifiers: [].concat(c("absolute" === r3 ? this.absoluteStrategyModifiers : []), [{ name: "offset", options: { offset: [0, i2] } }]) }), e4.style.margin = null, e4.classList.add("block"), e4.classList.remove("hidden"), setTimeout(function() {
                  t4.classList.add("open");
                }), this._fireEvent("open", t4), this._dispatch("open.hs.dropdown", t4, t4);
              } }, { key: "_keyboardSupport", value: function(t4) {
                var e4 = document.querySelector(".hs-dropdown.open");
                if (e4)
                  return 27 === t4.keyCode ? (t4.preventDefault(), this._esc(e4)) : 40 === t4.keyCode ? (t4.preventDefault(), this._down(e4)) : 38 === t4.keyCode ? (t4.preventDefault(), this._up(e4)) : 36 === t4.keyCode ? (t4.preventDefault(), this._start(e4)) : 35 === t4.keyCode ? (t4.preventDefault(), this._end(e4)) : void this._byChar(e4, t4.key);
              } }, { key: "_esc", value: function(t4) {
                this.close(t4);
              } }, { key: "_up", value: function(t4) {
                var e4 = t4.querySelector(".hs-dropdown-menu"), o4 = c(e4.querySelectorAll("a")).reverse().filter(function(t5) {
                  return !t5.disabled;
                }), n3 = e4.querySelector("a:focus"), r3 = o4.findIndex(function(t5) {
                  return t5 === n3;
                });
                r3 + 1 < o4.length && r3++, o4[r3].focus();
              } }, { key: "_down", value: function(t4) {
                var e4 = t4.querySelector(".hs-dropdown-menu"), o4 = c(e4.querySelectorAll("a")).filter(function(t5) {
                  return !t5.disabled;
                }), n3 = e4.querySelector("a:focus"), r3 = o4.findIndex(function(t5) {
                  return t5 === n3;
                });
                r3 + 1 < o4.length && r3++, o4[r3].focus();
              } }, { key: "_start", value: function(t4) {
                var e4 = c(t4.querySelector(".hs-dropdown-menu").querySelectorAll("a")).filter(function(t5) {
                  return !t5.disabled;
                });
                e4.length && e4[0].focus();
              } }, { key: "_end", value: function(t4) {
                var e4 = c(t4.querySelector(".hs-dropdown-menu").querySelectorAll("a")).reverse().filter(function(t5) {
                  return !t5.disabled;
                });
                e4.length && e4[0].focus();
              } }, { key: "_byChar", value: function(t4, e4) {
                var o4 = this, n3 = c(t4.querySelector(".hs-dropdown-menu").querySelectorAll("a")), r3 = function() {
                  return n3.findIndex(function(t5, n4) {
                    return t5.innerText.toLowerCase().charAt(0) === e4.toLowerCase() && o4._history.existsInHistory(n4);
                  });
                }, i2 = r3();
                -1 === i2 && (this._history.clearHistory(), i2 = r3()), -1 !== i2 && (n3[i2].focus(), this._history.addHistory(i2));
              } }, { key: "toggle", value: function(t4) {
                t4.classList.contains("open") ? this.close(t4) : this.open(t4);
              } }]) && u(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), p2;
            }(r.Z);
            window.HSDropdown = new p(), document.addEventListener("load", window.HSDropdown.init());
          }, 2: (t2, e2, o2) => {
            var n2 = o2(765), r = o2(422);
            function i(t3) {
              return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, i(t3);
            }
            function a(t3) {
              return function(t4) {
                if (Array.isArray(t4))
                  return c(t4);
              }(t3) || function(t4) {
                if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
                  return Array.from(t4);
              }(t3) || function(t4, e3) {
                if (t4) {
                  if ("string" == typeof t4)
                    return c(t4, e3);
                  var o3 = Object.prototype.toString.call(t4).slice(8, -1);
                  return "Object" === o3 && t4.constructor && (o3 = t4.constructor.name), "Map" === o3 || "Set" === o3 ? Array.from(t4) : "Arguments" === o3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o3) ? c(t4, e3) : void 0;
                }
              }(t3) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function c(t3, e3) {
              (null == e3 || e3 > t3.length) && (e3 = t3.length);
              for (var o3 = 0, n3 = new Array(e3); o3 < e3; o3++)
                n3[o3] = t3[o3];
              return n3;
            }
            function s(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function u(t3, e3) {
              return u = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, u(t3, e3);
            }
            function l(t3, e3) {
              if (e3 && ("object" === i(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function f(t3) {
              return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, f(t3);
            }
            var d = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && u(t4, e4);
              }(d2, t3);
              var e3, o3, n3, i2, c2 = (n3 = d2, i2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = f(n3);
                if (i2) {
                  var o4 = f(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return l(this, t4);
              });
              function d2() {
                var t4;
                return function(t5, e4) {
                  if (!(t5 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, d2), (t4 = c2.call(this, ".hs-mega-menu"))._history = r.Z, t4;
              }
              return e3 = d2, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target, n4 = o4.closest(t4.selector), r2 = o4.closest(".hs-mega-menu-content"), i3 = o4.closest(".hs-mega-menu-toggle");
                  if (!n4)
                    return t4._closeAll();
                  var a2 = n4.getAttribute("data-hs-mega-menu-trigger"), c3 = "flex" === window.getComputedStyle(n4.closest("nav")).display;
                  if (n4 && (n4.classList.contains("open") || n4.parentElement.closest(t4.selector)) || t4._closeOthers(), r2 && !i3) {
                    if ("false" == n4.getAttribute("data-hs-mega-menu-auto-close"))
                      return;
                    if (n4.parentElement.closest(t4.selector))
                      return t4._closeAll();
                    if ("hover" === a2 && n4.classList.contains("open"))
                      return t4.close(n4);
                  }
                  "hover" === a2 && c3 || (n4.classList.contains("open") ? t4.close(n4) : t4.open(n4));
                }), document.querySelectorAll('.hs-mega-menu[data-hs-mega-menu-trigger="hover"]').forEach(function(e4) {
                  e4.addEventListener("mouseenter", function(o4) {
                    e4.querySelector(".hs-mega-menu-content"), e4 && t4._hover(e4);
                  });
                }), document.addEventListener("keydown", this._keyboardSupport.bind(this));
              } }, { key: "_closeOthers", value: function() {
                var t4 = this;
                document.querySelectorAll("".concat(this.selector, ".open")).forEach(function(e4) {
                  "false" != e4.getAttribute("data-hs-mega-menu-auto-close") && t4.close(e4);
                });
              } }, { key: "_closeAll", value: function() {
                var t4 = this;
                document.querySelectorAll("".concat(this.selector)).forEach(function(e4) {
                  "false" != e4.getAttribute("data-hs-mega-menu-auto-close") && t4.close(e4);
                });
              } }, { key: "_hover", value: function(t4) {
                var e4 = this;
                "flex" === window.getComputedStyle(t4.closest("nav")).display && (this.open(t4), t4.addEventListener("mouseleave", function o4(n4) {
                  e4.close(t4), t4.removeEventListener("mouseleave", o4);
                }));
              } }, { key: "close", value: function(t4) {
                var e4 = t4.querySelector(".hs-mega-menu-content");
                t4.classList.remove("open"), this.afterTransition(e4, function() {
                  t4.classList.contains("open") || (e4.classList.remove("block"), e4.classList.add("hidden"), e4.style.right = null, e4.style.left = null, t4.querySelectorAll(".hs-mega-menu-content.block").forEach(function(t5) {
                    t5.classList.remove("block"), t5.classList.add("hidden");
                  }));
                }), this._fireEvent("close", t4), this._dispatch("close.hs.megaMenu", t4, t4);
              } }, { key: "open", value: function(t4) {
                var e4 = t4.querySelector(".hs-mega-menu-content");
                e4.classList.add("block"), e4.classList.remove("hidden");
                var o4 = e4.getBoundingClientRect();
                window.getComputedStyle(e4), parseInt(o4.left) + parseInt(o4.width) > window.innerWidth && (e4.style.right = "100%", e4.style.left = "unset"), setTimeout(function() {
                  t4.classList.add("open");
                }, 10), this._fireEvent("open", t4), this._dispatch("open.hs.megaMenu", t4, t4);
              } }, { key: "toggle", value: function(t4) {
                t4.classList.contains("open") ? this.close(t4) : this.open(t4);
              } }, { key: "_keyboardSupport", value: function(t4) {
                var e4 = document.querySelectorAll(".hs-mega-menu.open");
                if (e4.length) {
                  var o4 = e4[e4.length - 1];
                  return 27 === t4.keyCode ? (t4.preventDefault(), this._esc(o4)) : 40 === t4.keyCode ? (t4.preventDefault(), this._down(o4)) : 38 === t4.keyCode ? (t4.preventDefault(), this._up(o4)) : 36 === t4.keyCode ? (t4.preventDefault(), this._start(o4)) : 35 === t4.keyCode ? (t4.preventDefault(), this._end(o4)) : void this._byChar(o4, t4.key);
                }
              } }, { key: "_esc", value: function(t4) {
                if (this.close(t4), t4.closest(".hs-mega-menu-content")) {
                  var e4 = t4.querySelector(".hs-mega-menu-toggle");
                  e4 && e4.focus();
                }
              } }, { key: "_up", value: function(t4) {
                var e4 = t4.querySelector(".hs-mega-menu-content"), o4 = a(e4.querySelectorAll("a, button")).reverse().filter(function(t5) {
                  return !t5.disabled && t5.closest(".hs-mega-menu-content") === e4;
                }), n4 = e4.querySelector("a:focus") || e4.querySelector("button:focus"), r2 = o4.findIndex(function(t5) {
                  return t5 === n4;
                });
                r2 + 1 < o4.length && r2++, o4[r2].focus();
              } }, { key: "_down", value: function(t4) {
                var e4 = t4.querySelector(".hs-mega-menu-content"), o4 = a(e4.querySelectorAll("a, button")).filter(function(t5) {
                  return !t5.disabled && t5.closest(".hs-mega-menu-content") === e4;
                }), n4 = e4.querySelector("a:focus") || e4.querySelector("button:focus"), r2 = o4.findIndex(function(t5) {
                  return t5 === n4;
                });
                r2 + 1 < o4.length && r2++, o4[r2].focus();
              } }, { key: "_start", value: function(t4) {
                var e4 = t4.querySelector(".hs-mega-menu-content"), o4 = a(e4.querySelectorAll("a, button")).filter(function(t5) {
                  return !t5.disabled && t5.closest(".hs-mega-menu-content") === e4;
                });
                o4.length && o4[0].focus();
              } }, { key: "_end", value: function(t4) {
                var e4 = t4.querySelector(".hs-mega-menu-content"), o4 = a(e4.querySelectorAll("a, button")).reverse().filter(function(t5) {
                  return !t5.disabled && t5.closest(".hs-mega-menu-content") === e4;
                });
                o4.length && o4[0].focus();
              } }, { key: "_byChar", value: function(t4, e4) {
                var o4 = this, n4 = a(t4.querySelector(".hs-mega-menu-content").querySelectorAll("a, button")), r2 = function() {
                  return n4.findIndex(function(t5, n5) {
                    return t5.innerText.toLowerCase().charAt(0) === e4.toLowerCase() && o4._history.existsInHistory(n5);
                  });
                }, i3 = r2();
                -1 === i3 && (this._history.clearHistory(), i3 = r2()), -1 !== i3 && (n4[i3].focus(), this._history.addHistory(i3));
              } }]) && s(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), d2;
            }(n2.Z);
            window.HSMegaMenu = new d(), document.addEventListener("load", window.HSMegaMenu.init());
          }, 439: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function i(t3, e3) {
              return i = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, i(t3, e3);
            }
            function a(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function c(t3) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, c(t3);
            }
            var s = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
              }(l, t3);
              var e3, o3, n3, s2, u = (n3 = l, s2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = c(n3);
                if (s2) {
                  var o4 = c(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return a(this, t4);
              });
              function l() {
                var t4;
                return function(t5, e4) {
                  if (!(t5 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, l), (t4 = u.call(this, "[data-hs-modal]")).openNextModal = false, t4;
              }
              return e3 = l, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target.closest(t4.selector), n4 = e4.target.closest("[data-hs-modal-close]"), r2 = "true" === e4.target.getAttribute("aria-modal");
                  return n4 ? t4.close(n4.closest(".hs-modal.open")) : o4 ? t4.toggle(document.querySelector(o4.getAttribute("data-hs-modal"))) : void (r2 && t4._onBackdropClick(e4.target));
                }), document.addEventListener("keydown", function(e4) {
                  if (27 === e4.keyCode) {
                    var o4 = document.querySelector(".hs-modal.open");
                    if (!o4)
                      return;
                    setTimeout(function() {
                      "false" !== o4.getAttribute("data-hs-modal-keyboard") && t4.close(o4);
                    });
                  }
                });
              } }, { key: "toggle", value: function(t4) {
                t4 && (t4.classList.contains("hidden") ? this.open(t4) : this.close(t4));
              } }, { key: "open", value: function(t4) {
                var e4 = this;
                if (t4) {
                  var o4 = document.querySelector(".hs-modal.open");
                  if (o4)
                    return this.openNextModal = true, this.close(o4).then(function() {
                      e4.open(t4), e4.openNextModal = false;
                    });
                  document.body.style.overflow = "hidden", this._buildBackdrop(t4), t4.classList.remove("hidden"), t4.setAttribute("aria-modal", "true"), t4.setAttribute("tabindex", "-1"), setTimeout(function() {
                    t4.classList.contains("hidden") || (t4.classList.add("open"), e4._fireEvent("open", t4), e4._dispatch("open.hs.modal", t4, t4), e4._focusInput(t4));
                  }, 50);
                }
              } }, { key: "close", value: function(t4) {
                var e4 = this;
                return new Promise(function(o4) {
                  t4 && (t4.classList.remove("open"), t4.removeAttribute("aria-modal"), t4.removeAttribute("tabindex", "-1"), e4.afterTransition(t4.firstElementChild, function() {
                    t4.classList.add("hidden"), e4._destroyBackdrop(), e4._fireEvent("close", t4), e4._dispatch("close.hs.modal", t4, t4), document.body.style.overflow = "", o4(t4);
                  }));
                });
              } }, { key: "_onBackdropClick", value: function(t4) {
                "static" != t4.getAttribute("data-hs-modal-backdrop") && this.close(t4);
              } }, { key: "_buildBackdrop", value: function(t4) {
                var e4 = t4.getAttribute("data-hs-modal-backdrop-container") || false, o4 = document.createElement("div");
                document.querySelectorAll("[data-hs-modal-backdrop-template]").length > 1 || (e4 && ((o4 = document.querySelector(e4).cloneNode(true)).classList.remove("hidden"), o4.classList, function(t5) {
                  throw new TypeError('"backdropClasses" is read-only');
                }(), o4.classList = ""), o4.setAttribute("data-hs-modal-backdrop-template", ""), document.body.appendChild(o4), setTimeout(function() {
                  o4.classList = "transition duration fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80";
                }));
              } }, { key: "_destroyBackdrop", value: function() {
                var t4 = document.querySelector("[data-hs-modal-backdrop-template]");
                t4 && (this.openNextModal && (t4.style.transitionDuration = "".concat(1.8 * parseFloat(window.getComputedStyle(t4).transitionDuration.replace(/[^\d.-]/g, "")), "s")), t4.classList.add("opacity-0"), this.afterTransition(t4, function() {
                  t4.remove();
                }));
              } }, { key: "_focusInput", value: function(t4) {
                var e4 = t4.querySelector("[autofocus]");
                e4 && e4.focus();
              } }]) && r(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), l;
            }(o2(765).Z);
            window.HSModal = new s(), document.addEventListener("load", window.HSModal.init());
          }, 366: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function i(t3, e3) {
              return i = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, i(t3, e3);
            }
            function a(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function c(t3) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, c(t3);
            }
            var s = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
              }(l, t3);
              var e3, o3, n3, s2, u = (n3 = l, s2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = c(n3);
                if (s2) {
                  var o4 = c(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return a(this, t4);
              });
              function l() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, l), u.call(this, "[data-hs-offcanvas]");
              }
              return e3 = l, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target.closest(t4.selector);
                  o4 && t4.toggle(document.querySelector(o4.getAttribute("data-hs-offcanvas")));
                }), document.addEventListener("keydown", function(e4) {
                  if (27 === e4.keyCode) {
                    var o4 = document.querySelector(".hs-offcanvas.show");
                    if (!o4)
                      return;
                    "false" !== o4.getAttribute("data-hs-offcanvas-keyboard") && t4.close(o4);
                  }
                });
              } }, { key: "toggle", value: function(t4) {
                t4 && (t4.classList.contains("show") ? this.close(t4) : this.open(t4));
              } }, { key: "open", value: function(t4) {
                var e4 = this;
                if (t4) {
                  var o4 = document.querySelector(".hs-offcanvas.show"), n4 = "true" !== t4.getAttribute("data-hs-offcanvas-scroll");
                  if (o4)
                    return this.close(o4).then(function() {
                      return e4.open(t4);
                    });
                  this._buildBackdrop(t4), t4.classList.remove("hidden"), setTimeout(function() {
                    n4 && (document.body.style.overflow = "hidden"), t4.classList.add("show"), e4._fireEvent("show", t4), e4._dispatch("open.hs.offcanvas", t4, t4), t4.classList.remove("hidden");
                  });
                }
              } }, { key: "close", value: function(t4) {
                var e4 = this;
                return new Promise(function(o4) {
                  t4 && (t4.classList.remove("show"), e4.afterTransition(t4, function() {
                    t4.classList.contains("show") || (t4.classList.add("hidden"), e4._destroyBackdrop(), e4._fireEvent("close", t4), e4._dispatch("close.hs.offcanvas", t4, t4), document.body.style.overflow = "", o4(t4));
                  }));
                });
              } }, { key: "_buildBackdrop", value: function(t4) {
                var e4 = this, o4 = t4.getAttribute("data-hs-offcanvas-backdrop-container") || false, n4 = "false" !== t4.getAttribute("data-hs-offcanvas-close-on-backdrop");
                if ("false" !== t4.getAttribute("data-hs-offcanvas-backdrop")) {
                  var r2 = document.createElement("div");
                  o4 ? r2 = document.querySelector(o4).cloneNode(true) : r2.className = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 transition duration fixed inset-0 z-50", o4 && r2.classList.remove("hidden"), n4 && r2.addEventListener("click", function() {
                    return e4.close(t4);
                  }, true), r2.setAttribute("data-hs-offcanvas-backdrop-template", ""), document.body.appendChild(r2);
                }
              } }, { key: "_destroyBackdrop", value: function() {
                var t4 = document.querySelector("[data-hs-offcanvas-backdrop-template]");
                t4 && (t4.classList.add("opacity-0"), this.afterTransition(t4, function() {
                  t4.remove();
                }));
              } }]) && r(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), l;
            }(o2(765).Z);
            window.HSOffcanvas = new s(), document.addEventListener("load", window.HSOffcanvas.init());
          }, 181: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function i(t3, e3) {
              return i = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, i(t3, e3);
            }
            function a(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function c(t3) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, c(t3);
            }
            var s = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
              }(l, t3);
              var e3, o3, n3, s2, u = (n3 = l, s2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = c(n3);
                if (s2) {
                  var o4 = c(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return a(this, t4);
              });
              function l() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, l), u.call(this, "[data-hs-remove-element]");
              }
              return e3 = l, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target.closest(t4.selector);
                  if (o4) {
                    var n4 = document.querySelector(o4.getAttribute("data-hs-remove-element"));
                    n4 && (n4.classList.add("hs-removing"), t4.afterTransition(n4, function() {
                      n4.remove();
                    }));
                  }
                });
              } }]) && r(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), l;
            }(o2(765).Z);
            window.HSRemoveElement = new s(), document.addEventListener("load", window.HSRemoveElement.init());
          }, 778: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function i(t3, e3) {
              return i = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, i(t3, e3);
            }
            function a(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function c(t3) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, c(t3);
            }
            var s = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
              }(l, t3);
              var e3, o3, n3, s2, u = (n3 = l, s2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = c(n3);
                if (s2) {
                  var o4 = c(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return a(this, t4);
              });
              function l() {
                var t4;
                return function(t5, e4) {
                  if (!(t5 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, l), (t4 = u.call(this, "[data-hs-scrollspy] ")).activeSection = null, t4;
              }
              return e3 = l, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.querySelectorAll(this.selector).forEach(function(e4) {
                  var o4 = document.querySelector(e4.getAttribute("data-hs-scrollspy")), n4 = e4.querySelectorAll("[href]"), r2 = o4.children, i2 = parseInt(e4.getAttribute("data-hs-scrollspy-offset") || 0), a2 = e4.getAttribute("data-hs-scrollspy-scrollable-parent") ? document.querySelector(e4.getAttribute("data-hs-scrollspy-scrollable-parent")) : document;
                  Array.from(r2).forEach(function(c2) {
                    c2.getAttribute("id") && a2.addEventListener("scroll", function(a3) {
                      return t4._update({ $scrollspyEl: e4, $scrollspyContentEl: o4, links: n4, $sectionEl: c2, globalOffset: i2, sections: r2, ev: a3 });
                    });
                  }), n4.forEach(function(o5) {
                    o5.addEventListener("click", function(n5) {
                      n5.preventDefault(), "javascript:;" !== o5.getAttribute("href") && t4._scrollTo({ $scrollspyEl: e4, $scrollableEl: a2, $link: o5, globalOffset: i2 });
                    });
                  });
                });
              } }, { key: "_update", value: function(t4) {
                var e4 = t4.ev, o4 = t4.$scrollspyEl, n4 = (t4.sections, t4.links), r2 = t4.$sectionEl, i2 = t4.globalOffset, a2 = r2.getAttribute("data-hs-scrollspy-offset") || i2, c2 = e4.target === document ? 0 : parseInt(e4.target.getBoundingClientRect().top), s3 = parseInt(r2.getBoundingClientRect().top) - a2 - c2, u2 = r2.offsetHeight;
                if (s3 <= 0 && s3 + u2 > 0) {
                  if (this.activeSection === r2)
                    return;
                  n4.forEach(function(t5) {
                    t5.classList.remove("active");
                  });
                  var l2 = o4.querySelector('[href="#'.concat(r2.getAttribute("id"), '"]'));
                  if (l2) {
                    l2.classList.add("active");
                    var f = l2.closest("[data-hs-scrollspy-group]");
                    if (f) {
                      var d = f.querySelector("[href]");
                      d && d.classList.add("active");
                    }
                  }
                  this.activeSection = r2;
                }
              } }, { key: "_scrollTo", value: function(t4) {
                var e4 = t4.$scrollspyEl, o4 = t4.$scrollableEl, n4 = t4.$link, r2 = t4.globalOffset, i2 = document.querySelector(n4.getAttribute("href")), a2 = i2.getAttribute("data-hs-scrollspy-offset") || r2, c2 = o4 === document ? 0 : o4.offsetTop, s3 = i2.offsetTop - a2 - c2, u2 = o4 === document ? window : o4;
                this._fireEvent("scroll", e4), this._dispatch("scroll.hs.scrollspy", e4, e4), window.history.replaceState(null, null, n4.getAttribute("href")), u2.scrollTo({ top: s3, left: 0, behavior: "smooth" });
              } }]) && r(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), l;
            }(o2(765).Z);
            window.HSScrollspy = new s(), document.addEventListener("load", window.HSScrollspy.init());
          }, 493: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function i(t3, e3) {
              return i = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, i(t3, e3);
            }
            function a(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function c(t3) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, c(t3);
            }
            var s = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
              }(l, t3);
              var e3, o3, n3, s2, u = (n3 = l, s2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = c(n3);
                if (s2) {
                  var o4 = c(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return a(this, t4);
              });
              function l() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, l), u.call(this, "[data-hs-sidebar]");
              }
              return e3 = l, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target.closest(t4.selector);
                  o4 && t4.toggle(document.querySelector(o4.getAttribute("data-hs-sidebar")));
                }), document.addEventListener("keydown", function(e4) {
                  if (27 === e4.keyCode) {
                    var o4 = document.querySelector(".hs-sidebar.show");
                    if (!o4)
                      return;
                    "false" !== o4.getAttribute("data-hs-sidebar-keyboard") && t4.close(o4);
                  }
                }), window.addEventListener("resize", function() {
                  var e4 = document.querySelector(".hs-sidebar.show");
                  e4 && t4.close(e4);
                });
              } }, { key: "toggle", value: function(t4) {
                t4 && (t4.classList.contains("show") ? this.close(t4) : this.open(t4));
              } }, { key: "open", value: function(t4) {
                var e4 = this;
                if (t4) {
                  var o4 = document.querySelector(".hs-sidebar.show"), n4 = "true" !== t4.getAttribute("data-hs-sidebar-scroll");
                  if (o4)
                    return this.close(o4).then(function() {
                      return e4.open(t4);
                    });
                  this._buildBackdrop(t4), t4.classList.remove("hidden"), setTimeout(function() {
                    n4 && (document.body.style.overflow = "hidden"), t4.classList.add("show"), document.body.classList.add("sidebar-open"), e4._fireEvent("show", t4), e4._dispatch("open.hs.sidebarl", t4, t4);
                  });
                }
              } }, { key: "close", value: function(t4) {
                var e4 = this;
                return new Promise(function(o4) {
                  t4 && (t4.classList.remove("show"), document.body.classList.remove("sidebar-open"), e4.afterTransition(t4, function() {
                    t4.classList.add("hidden"), e4._destroyBackdrop(), e4._fireEvent("close", t4), e4._dispatch("close.hs.sidebarl", t4, t4), document.body.style.overflow = "", o4(t4);
                  }));
                });
              } }, { key: "_buildBackdrop", value: function(t4) {
                var e4 = this, o4 = t4.getAttribute("data-hs-sidebar-backdrop-container") || false, n4 = "false" !== t4.getAttribute("data-hs-sidebar-close-on-backdrop");
                if ("false" !== t4.getAttribute("data-hs-sidebar-backdrop")) {
                  var r2 = document.createElement("div");
                  o4 ? r2 = document.querySelector(o4).cloneNode(true) : r2.className = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 transition duration fixed inset-0 z-50", o4 && r2.classList.remove("hidden"), n4 && r2.addEventListener("click", function() {
                    return e4.close(t4);
                  }, true), r2.setAttribute("data-hs-sidebar-backdrop-template", ""), document.body.appendChild(r2);
                }
              } }, { key: "_destroyBackdrop", value: function() {
                var t4 = document.querySelector("[data-hs-sidebar-backdrop-template]");
                t4 && (t4.classList.add("opacity-0"), this.afterTransition(t4, function() {
                  t4.remove();
                }));
              } }]) && r(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), l;
            }(o2(765).Z);
            window.HSSideabr = new s(), document.addEventListener("load", window.HSSideabr.init());
          }, 572: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function i(t3, e3) {
              return i = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, i(t3, e3);
            }
            function a(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function c(t3) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, c(t3);
            }
            var s = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && i(t4, e4);
              }(l, t3);
              var e3, o3, n3, s2, u = (n3 = l, s2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = c(n3);
                if (s2) {
                  var o4 = c(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return a(this, t4);
              });
              function l() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, l), u.call(this, "[data-hs-smooth-scroll-to]");
              }
              return e3 = l, (o3 = [{ key: "init", value: function() {
                document.querySelectorAll(this.selector).forEach(this.scroll);
              } }, { key: "scroll", value: function(t4) {
                var e4 = t4.querySelector(t4.getAttribute("data-hs-smooth-scroll-to"));
                if (e4) {
                  var o4 = t4.getAttribute("data-hs-smooth-scroll-offset") || 0, n4 = e4.getBoundingClientRect().top - o4;
                  t4.scrollTo({ behavior: "smooth", top: n4 });
                }
              } }]) && r(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), l;
            }(o2(765).Z);
            window.HSSmoothScroll = new s(), document.addEventListener("load", window.HSSmoothScroll.init());
          }, 51: (t2, e2, o2) => {
            function n2(t3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, n2(t3);
            }
            function r(t3) {
              return function(t4) {
                if (Array.isArray(t4))
                  return i(t4);
              }(t3) || function(t4) {
                if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"])
                  return Array.from(t4);
              }(t3) || function(t4, e3) {
                if (t4) {
                  if ("string" == typeof t4)
                    return i(t4, e3);
                  var o3 = Object.prototype.toString.call(t4).slice(8, -1);
                  return "Object" === o3 && t4.constructor && (o3 = t4.constructor.name), "Map" === o3 || "Set" === o3 ? Array.from(t4) : "Arguments" === o3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o3) ? i(t4, e3) : void 0;
                }
              }(t3) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function i(t3, e3) {
              (null == e3 || e3 > t3.length) && (e3 = t3.length);
              for (var o3 = 0, n3 = new Array(e3); o3 < e3; o3++)
                n3[o3] = t3[o3];
              return n3;
            }
            function a(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function c(t3, e3) {
              return c = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, c(t3, e3);
            }
            function s(t3, e3) {
              if (e3 && ("object" === n2(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function u(t3) {
              return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, u(t3);
            }
            var l = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && c(t4, e4);
              }(f, t3);
              var e3, o3, n3, i2, l2 = (n3 = f, i2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = u(n3);
                if (i2) {
                  var o4 = u(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return s(this, t4);
              });
              function f() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, f), l2.call(this, "[data-hs-tab]");
              }
              return e3 = f, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("keydown", this._keyboardSupport.bind(this)), document.addEventListener("click", function(e4) {
                  var o4 = e4.target.closest(t4.selector);
                  o4 && t4.open(o4);
                }), document.querySelectorAll("[hs-data-tab-select]").forEach(function(e4) {
                  var o4 = document.querySelector(e4.getAttribute("hs-data-tab-select"));
                  o4 && o4.addEventListener("change", function(e5) {
                    var o5 = document.querySelector('[data-hs-tab="'.concat(e5.target.value, '"]'));
                    o5 && t4.open(o5);
                  });
                });
              } }, { key: "open", value: function(t4) {
                var e4 = document.querySelector(t4.getAttribute("data-hs-tab")), o4 = r(t4.parentElement.children), n4 = r(e4.parentElement.children), i3 = t4.closest("[hs-data-tab-select]"), a2 = i3 ? document.querySelector(i3.getAttribute("hs-data-tab-select")) : null;
                o4.forEach(function(t5) {
                  return t5.classList.remove("active");
                }), n4.forEach(function(t5) {
                  return t5.classList.add("hidden");
                }), t4.classList.add("active"), e4.classList.remove("hidden"), this._fireEvent("change", t4), this._dispatch("change.hs.tab", t4, t4), a2 && (a2.value = t4.getAttribute("data-hs-tab"));
              } }, { key: "_keyboardSupport", value: function(t4) {
                var e4 = t4.target.closest(this.selector);
                if (e4) {
                  var o4 = "true" === e4.closest('[role="tablist"]').getAttribute("data-hs-tabs-vertical");
                  return (o4 ? 38 === t4.keyCode : 37 === t4.keyCode) ? (t4.preventDefault(), this._left(e4)) : (o4 ? 40 === t4.keyCode : 39 === t4.keyCode) ? (t4.preventDefault(), this._right(e4)) : 36 === t4.keyCode ? (t4.preventDefault(), this._start(e4)) : 35 === t4.keyCode ? (t4.preventDefault(), this._end(e4)) : void 0;
                }
              } }, { key: "_right", value: function(t4) {
                var e4 = t4.closest('[role="tablist"]');
                if (e4) {
                  var o4 = r(e4.querySelectorAll(this.selector)).filter(function(t5) {
                    return !t5.disabled;
                  }), n4 = e4.querySelector("button:focus"), i3 = o4.findIndex(function(t5) {
                    return t5 === n4;
                  });
                  i3 + 1 < o4.length ? i3++ : i3 = 0, o4[i3].focus(), this.open(o4[i3]);
                }
              } }, { key: "_left", value: function(t4) {
                var e4 = t4.closest('[role="tablist"]');
                if (e4) {
                  var o4 = r(e4.querySelectorAll(this.selector)).filter(function(t5) {
                    return !t5.disabled;
                  }).reverse(), n4 = e4.querySelector("button:focus"), i3 = o4.findIndex(function(t5) {
                    return t5 === n4;
                  });
                  i3 + 1 < o4.length ? i3++ : i3 = 0, o4[i3].focus(), this.open(o4[i3]);
                }
              } }, { key: "_start", value: function(t4) {
                var e4 = t4.closest('[role="tablist"]');
                if (e4) {
                  var o4 = r(e4.querySelectorAll(this.selector)).filter(function(t5) {
                    return !t5.disabled;
                  });
                  o4.length && (o4[0].focus(), this.open(o4[0]));
                }
              } }, { key: "_end", value: function(t4) {
                var e4 = t4.closest('[role="tablist"]');
                if (e4) {
                  var o4 = r(e4.querySelectorAll(this.selector)).reverse().filter(function(t5) {
                    return !t5.disabled;
                  });
                  o4.length && (o4[0].focus(), this.open(o4[0]));
                }
              } }]) && a(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), f;
            }(o2(765).Z);
            window.HSTabs = new l(), document.addEventListener("load", window.HSTabs.init());
          }, 185: (t2, e2, o2) => {
            var n2 = o2(765), r = o2(714);
            function i(t3) {
              return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              }, i(t3);
            }
            function a(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            function c(t3, e3) {
              return c = Object.setPrototypeOf || function(t4, e4) {
                return t4.__proto__ = e4, t4;
              }, c(t3, e3);
            }
            function s(t3, e3) {
              if (e3 && ("object" === i(e3) || "function" == typeof e3))
                return e3;
              if (void 0 !== e3)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t4) {
                if (void 0 === t4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t4;
              }(t3);
            }
            function u(t3) {
              return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
                return t4.__proto__ || Object.getPrototypeOf(t4);
              }, u(t3);
            }
            var l = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && c(t4, e4);
              }(f, t3);
              var e3, o3, n3, i2, l2 = (n3 = f, i2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, e4 = u(n3);
                if (i2) {
                  var o4 = u(this).constructor;
                  t4 = Reflect.construct(e4, arguments, o4);
                } else
                  t4 = e4.apply(this, arguments);
                return s(this, t4);
              });
              function f() {
                return function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, f), l2.call(this, ".hs-tooltip");
              }
              return e3 = f, (o3 = [{ key: "init", value: function() {
                var t4 = this;
                document.addEventListener("click", function(e4) {
                  var o4 = e4.target.closest(t4.selector);
                  o4 && "focus" === o4.getAttribute("data-hs-tooltip-trigger") && t4._focus(o4), o4 && "click" === o4.getAttribute("data-hs-tooltip-trigger") && t4._click(o4);
                }), document.addEventListener("mousemove", function(e4) {
                  var o4 = e4.target.closest(t4.selector);
                  o4 && "focus" !== o4.getAttribute("data-hs-tooltip-trigger") && "click" !== o4.getAttribute("data-hs-tooltip-trigger") && t4._hover(o4);
                });
              } }, { key: "_hover", value: function(t4) {
                var e4 = this, o4 = t4.querySelector(".hs-tooltip-toggle"), n4 = t4.querySelector(".hs-tooltip-content"), i3 = t4.getAttribute("data-hs-tooltip-placement");
                (0, r.fi)(o4, n4, { placement: i3 || "top", strategy: "fixed", modifiers: [{ name: "offset", options: { offset: [0, 5] } }] }), this.show(t4), t4.addEventListener("mouseleave", function o5() {
                  e4.hide(t4), t4.removeEventListener("mouseleave", o5, true);
                }, true);
              } }, { key: "_focus", value: function(t4) {
                var e4 = this, o4 = t4.querySelector(".hs-tooltip-toggle"), n4 = t4.querySelector(".hs-tooltip-content"), i3 = t4.getAttribute("data-hs-tooltip-placement"), a2 = t4.getAttribute("data-hs-tooltip-strategy");
                (0, r.fi)(o4, n4, { placement: i3 || "top", strategy: a2 || "fixed", modifiers: [{ name: "offset", options: { offset: [0, 5] } }] }), this.show(t4), t4.addEventListener("blur", function o5() {
                  e4.hide(t4), t4.removeEventListener("blur", o5, true);
                }, true);
              } }, { key: "_click", value: function(t4) {
                var e4 = this;
                if (!t4.classList.contains("show")) {
                  var o4 = t4.querySelector(".hs-tooltip-toggle"), n4 = t4.querySelector(".hs-tooltip-content"), i3 = t4.getAttribute("data-hs-tooltip-placement"), a2 = t4.getAttribute("data-hs-tooltip-strategy");
                  (0, r.fi)(o4, n4, { placement: i3 || "top", strategy: a2 || "fixed", modifiers: [{ name: "offset", options: { offset: [0, 5] } }] }), this.show(t4);
                  var c2 = function o5(n5) {
                    setTimeout(function() {
                      e4.hide(t4), t4.removeEventListener("click", o5, true), t4.removeEventListener("blur", o5, true);
                    });
                  };
                  t4.addEventListener("blur", c2, true), t4.addEventListener("click", c2, true);
                }
              } }, { key: "show", value: function(t4) {
                var e4 = this;
                t4.querySelector(".hs-tooltip-content").classList.remove("hidden"), setTimeout(function() {
                  t4.classList.add("show"), e4._fireEvent("show", t4), e4._dispatch("show.hs.tooltip", t4, t4);
                });
              } }, { key: "hide", value: function(t4) {
                var e4 = t4.querySelector(".hs-tooltip-content");
                t4.classList.remove("show"), this._fireEvent("hide", t4), this._dispatch("hide.hs.tooltip", t4, t4), this.afterTransition(e4, function() {
                  t4.classList.contains("show") || e4.classList.add("hidden");
                });
              } }]) && a(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), f;
            }(n2.Z);
            window.HSTooltip = new l(), document.addEventListener("load", window.HSTooltip.init());
          }, 765: (t2, e2, o2) => {
            function n2(t3, e3) {
              for (var o3 = 0; o3 < e3.length; o3++) {
                var n3 = e3[o3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
              }
            }
            o2.d(e2, { Z: () => r });
            var r = function() {
              function t3(e4, o4) {
                !function(t4, e5) {
                  if (!(t4 instanceof e5))
                    throw new TypeError("Cannot call a class as a function");
                }(this, t3), this.$collection = [], this.selector = e4, this.config = o4, this.events = {};
              }
              var e3, o3;
              return e3 = t3, o3 = [{ key: "_fireEvent", value: function(t4) {
                var e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.events.hasOwnProperty(t4) && this.events[t4](e4);
              } }, { key: "_dispatch", value: function(t4, e4) {
                var o4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n3 = new CustomEvent(t4, { detail: { payload: o4 }, bubbles: true, cancelable: true, composed: false });
                e4.dispatchEvent(n3);
              } }, { key: "on", value: function(t4, e4) {
                this.events[t4] = e4;
              } }, { key: "afterTransition", value: function(t4, e4) {
                "all 0s ease 0s" !== window.getComputedStyle(t4, null).getPropertyValue("transition") ? t4.addEventListener("transitionend", function o4() {
                  e4(), t4.removeEventListener("transitionend", o4, true);
                }, true) : e4();
              } }], o3 && n2(e3.prototype, o3), Object.defineProperty(e3, "prototype", { writable: false }), t3;
            }();
          }, 422: (t2, e2, o2) => {
            o2.d(e2, { Z: () => n2 });
            const n2 = { historyIndex: -1, addHistory: function(t3) {
              this.historyIndex = t3;
            }, existsInHistory: function(t3) {
              return t3 > this.historyIndex;
            }, clearHistory: function() {
              this.historyIndex = -1;
            } };
          }, 714: (t2, e2, o2) => {
            function n2(t3) {
              if (null == t3)
                return window;
              if ("[object Window]" !== t3.toString()) {
                var e3 = t3.ownerDocument;
                return e3 && e3.defaultView || window;
              }
              return t3;
            }
            function r(t3) {
              return t3 instanceof n2(t3).Element || t3 instanceof Element;
            }
            function i(t3) {
              return t3 instanceof n2(t3).HTMLElement || t3 instanceof HTMLElement;
            }
            function a(t3) {
              return "undefined" != typeof ShadowRoot && (t3 instanceof n2(t3).ShadowRoot || t3 instanceof ShadowRoot);
            }
            o2.d(e2, { fi: () => st });
            var c = Math.max, s = Math.min, u = Math.round;
            function l(t3, e3) {
              void 0 === e3 && (e3 = false);
              var o3 = t3.getBoundingClientRect(), n3 = 1, r2 = 1;
              if (i(t3) && e3) {
                var a2 = t3.offsetHeight, c2 = t3.offsetWidth;
                c2 > 0 && (n3 = u(o3.width) / c2 || 1), a2 > 0 && (r2 = u(o3.height) / a2 || 1);
              }
              return { width: o3.width / n3, height: o3.height / r2, top: o3.top / r2, right: o3.right / n3, bottom: o3.bottom / r2, left: o3.left / n3, x: o3.left / n3, y: o3.top / r2 };
            }
            function f(t3) {
              var e3 = n2(t3);
              return { scrollLeft: e3.pageXOffset, scrollTop: e3.pageYOffset };
            }
            function d(t3) {
              return t3 ? (t3.nodeName || "").toLowerCase() : null;
            }
            function p(t3) {
              return ((r(t3) ? t3.ownerDocument : t3.document) || window.document).documentElement;
            }
            function y(t3) {
              return l(p(t3)).left + f(t3).scrollLeft;
            }
            function h(t3) {
              return n2(t3).getComputedStyle(t3);
            }
            function v(t3) {
              var e3 = h(t3), o3 = e3.overflow, n3 = e3.overflowX, r2 = e3.overflowY;
              return /auto|scroll|overlay|hidden/.test(o3 + r2 + n3);
            }
            function b(t3, e3, o3) {
              void 0 === o3 && (o3 = false);
              var r2, a2, c2 = i(e3), s2 = i(e3) && function(t4) {
                var e4 = t4.getBoundingClientRect(), o4 = u(e4.width) / t4.offsetWidth || 1, n3 = u(e4.height) / t4.offsetHeight || 1;
                return 1 !== o4 || 1 !== n3;
              }(e3), h2 = p(e3), b2 = l(t3, s2), m2 = { scrollLeft: 0, scrollTop: 0 }, g2 = { x: 0, y: 0 };
              return (c2 || !c2 && !o3) && (("body" !== d(e3) || v(h2)) && (m2 = (r2 = e3) !== n2(r2) && i(r2) ? { scrollLeft: (a2 = r2).scrollLeft, scrollTop: a2.scrollTop } : f(r2)), i(e3) ? ((g2 = l(e3, true)).x += e3.clientLeft, g2.y += e3.clientTop) : h2 && (g2.x = y(h2))), { x: b2.left + m2.scrollLeft - g2.x, y: b2.top + m2.scrollTop - g2.y, width: b2.width, height: b2.height };
            }
            function m(t3) {
              var e3 = l(t3), o3 = t3.offsetWidth, n3 = t3.offsetHeight;
              return Math.abs(e3.width - o3) <= 1 && (o3 = e3.width), Math.abs(e3.height - n3) <= 1 && (n3 = e3.height), { x: t3.offsetLeft, y: t3.offsetTop, width: o3, height: n3 };
            }
            function g(t3) {
              return "html" === d(t3) ? t3 : t3.assignedSlot || t3.parentNode || (a(t3) ? t3.host : null) || p(t3);
            }
            function w(t3) {
              return ["html", "body", "#document"].indexOf(d(t3)) >= 0 ? t3.ownerDocument.body : i(t3) && v(t3) ? t3 : w(g(t3));
            }
            function O(t3, e3) {
              var o3;
              void 0 === e3 && (e3 = []);
              var r2 = w(t3), i2 = r2 === (null == (o3 = t3.ownerDocument) ? void 0 : o3.body), a2 = n2(r2), c2 = i2 ? [a2].concat(a2.visualViewport || [], v(r2) ? r2 : []) : r2, s2 = e3.concat(c2);
              return i2 ? s2 : s2.concat(O(g(c2)));
            }
            function S(t3) {
              return ["table", "td", "th"].indexOf(d(t3)) >= 0;
            }
            function _(t3) {
              return i(t3) && "fixed" !== h(t3).position ? t3.offsetParent : null;
            }
            function k(t3) {
              for (var e3 = n2(t3), o3 = _(t3); o3 && S(o3) && "static" === h(o3).position; )
                o3 = _(o3);
              return o3 && ("html" === d(o3) || "body" === d(o3) && "static" === h(o3).position) ? e3 : o3 || function(t4) {
                var e4 = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (-1 !== navigator.userAgent.indexOf("Trident") && i(t4) && "fixed" === h(t4).position)
                  return null;
                for (var o4 = g(t4); i(o4) && ["html", "body"].indexOf(d(o4)) < 0; ) {
                  var n3 = h(o4);
                  if ("none" !== n3.transform || "none" !== n3.perspective || "paint" === n3.contain || -1 !== ["transform", "perspective"].indexOf(n3.willChange) || e4 && "filter" === n3.willChange || e4 && n3.filter && "none" !== n3.filter)
                    return o4;
                  o4 = o4.parentNode;
                }
                return null;
              }(t3) || e3;
            }
            var E = "top", j = "bottom", x = "right", A = "left", L = "auto", P = [E, j, x, A], q = "start", T = "end", R = "viewport", C = "popper", D = P.reduce(function(t3, e3) {
              return t3.concat([e3 + "-" + q, e3 + "-" + T]);
            }, []), B = [].concat(P, [L]).reduce(function(t3, e3) {
              return t3.concat([e3, e3 + "-" + q, e3 + "-" + T]);
            }, []), H = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
            function I(t3) {
              var e3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Set(), n3 = [];
              function r2(t4) {
                o3.add(t4.name), [].concat(t4.requires || [], t4.requiresIfExists || []).forEach(function(t5) {
                  if (!o3.has(t5)) {
                    var n4 = e3.get(t5);
                    n4 && r2(n4);
                  }
                }), n3.push(t4);
              }
              return t3.forEach(function(t4) {
                e3.set(t4.name, t4);
              }), t3.forEach(function(t4) {
                o3.has(t4.name) || r2(t4);
              }), n3;
            }
            var M = { placement: "bottom", modifiers: [], strategy: "absolute" };
            function W() {
              for (var t3 = arguments.length, e3 = new Array(t3), o3 = 0; o3 < t3; o3++)
                e3[o3] = arguments[o3];
              return !e3.some(function(t4) {
                return !(t4 && "function" == typeof t4.getBoundingClientRect);
              });
            }
            function N(t3) {
              void 0 === t3 && (t3 = {});
              var e3 = t3, o3 = e3.defaultModifiers, n3 = void 0 === o3 ? [] : o3, i2 = e3.defaultOptions, a2 = void 0 === i2 ? M : i2;
              return function(t4, e4, o4) {
                void 0 === o4 && (o4 = a2);
                var i3, c2, s2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, M, a2), modifiersData: {}, elements: { reference: t4, popper: e4 }, attributes: {}, styles: {} }, u2 = [], l2 = false, f2 = { state: s2, setOptions: function(o5) {
                  var i4 = "function" == typeof o5 ? o5(s2.options) : o5;
                  d2(), s2.options = Object.assign({}, a2, s2.options, i4), s2.scrollParents = { reference: r(t4) ? O(t4) : t4.contextElement ? O(t4.contextElement) : [], popper: O(e4) };
                  var c3, l3, p2 = function(t5) {
                    var e5 = I(t5);
                    return H.reduce(function(t6, o6) {
                      return t6.concat(e5.filter(function(t7) {
                        return t7.phase === o6;
                      }));
                    }, []);
                  }((c3 = [].concat(n3, s2.options.modifiers), l3 = c3.reduce(function(t5, e5) {
                    var o6 = t5[e5.name];
                    return t5[e5.name] = o6 ? Object.assign({}, o6, e5, { options: Object.assign({}, o6.options, e5.options), data: Object.assign({}, o6.data, e5.data) }) : e5, t5;
                  }, {}), Object.keys(l3).map(function(t5) {
                    return l3[t5];
                  })));
                  return s2.orderedModifiers = p2.filter(function(t5) {
                    return t5.enabled;
                  }), s2.orderedModifiers.forEach(function(t5) {
                    var e5 = t5.name, o6 = t5.options, n4 = void 0 === o6 ? {} : o6, r2 = t5.effect;
                    if ("function" == typeof r2) {
                      var i5 = r2({ state: s2, name: e5, instance: f2, options: n4 });
                      u2.push(i5 || function() {
                      });
                    }
                  }), f2.update();
                }, forceUpdate: function() {
                  if (!l2) {
                    var t5 = s2.elements, e5 = t5.reference, o5 = t5.popper;
                    if (W(e5, o5)) {
                      s2.rects = { reference: b(e5, k(o5), "fixed" === s2.options.strategy), popper: m(o5) }, s2.reset = false, s2.placement = s2.options.placement, s2.orderedModifiers.forEach(function(t6) {
                        return s2.modifiersData[t6.name] = Object.assign({}, t6.data);
                      });
                      for (var n4 = 0; n4 < s2.orderedModifiers.length; n4++)
                        if (true !== s2.reset) {
                          var r2 = s2.orderedModifiers[n4], i4 = r2.fn, a3 = r2.options, c3 = void 0 === a3 ? {} : a3, u3 = r2.name;
                          "function" == typeof i4 && (s2 = i4({ state: s2, options: c3, name: u3, instance: f2 }) || s2);
                        } else
                          s2.reset = false, n4 = -1;
                    }
                  }
                }, update: (i3 = function() {
                  return new Promise(function(t5) {
                    f2.forceUpdate(), t5(s2);
                  });
                }, function() {
                  return c2 || (c2 = new Promise(function(t5) {
                    Promise.resolve().then(function() {
                      c2 = void 0, t5(i3());
                    });
                  })), c2;
                }), destroy: function() {
                  d2(), l2 = true;
                } };
                if (!W(t4, e4))
                  return f2;
                function d2() {
                  u2.forEach(function(t5) {
                    return t5();
                  }), u2 = [];
                }
                return f2.setOptions(o4).then(function(t5) {
                  !l2 && o4.onFirstUpdate && o4.onFirstUpdate(t5);
                }), f2;
              };
            }
            var Z = { passive: true };
            function $(t3) {
              return t3.split("-")[0];
            }
            function V(t3) {
              return t3.split("-")[1];
            }
            function U(t3) {
              return ["top", "bottom"].indexOf(t3) >= 0 ? "x" : "y";
            }
            function z(t3) {
              var e3, o3 = t3.reference, n3 = t3.element, r2 = t3.placement, i2 = r2 ? $(r2) : null, a2 = r2 ? V(r2) : null, c2 = o3.x + o3.width / 2 - n3.width / 2, s2 = o3.y + o3.height / 2 - n3.height / 2;
              switch (i2) {
                case E:
                  e3 = { x: c2, y: o3.y - n3.height };
                  break;
                case j:
                  e3 = { x: c2, y: o3.y + o3.height };
                  break;
                case x:
                  e3 = { x: o3.x + o3.width, y: s2 };
                  break;
                case A:
                  e3 = { x: o3.x - n3.width, y: s2 };
                  break;
                default:
                  e3 = { x: o3.x, y: o3.y };
              }
              var u2 = i2 ? U(i2) : null;
              if (null != u2) {
                var l2 = "y" === u2 ? "height" : "width";
                switch (a2) {
                  case q:
                    e3[u2] = e3[u2] - (o3[l2] / 2 - n3[l2] / 2);
                    break;
                  case T:
                    e3[u2] = e3[u2] + (o3[l2] / 2 - n3[l2] / 2);
                }
              }
              return e3;
            }
            var F = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
            function X(t3) {
              var e3, o3 = t3.popper, r2 = t3.popperRect, i2 = t3.placement, a2 = t3.variation, c2 = t3.offsets, s2 = t3.position, l2 = t3.gpuAcceleration, f2 = t3.adaptive, d2 = t3.roundOffsets, y2 = t3.isFixed, v2 = c2.x, b2 = void 0 === v2 ? 0 : v2, m2 = c2.y, g2 = void 0 === m2 ? 0 : m2, w2 = "function" == typeof d2 ? d2({ x: b2, y: g2 }) : { x: b2, y: g2 };
              b2 = w2.x, g2 = w2.y;
              var O2 = c2.hasOwnProperty("x"), S2 = c2.hasOwnProperty("y"), _2 = A, L2 = E, P2 = window;
              if (f2) {
                var q2 = k(o3), R2 = "clientHeight", C2 = "clientWidth";
                q2 === n2(o3) && "static" !== h(q2 = p(o3)).position && "absolute" === s2 && (R2 = "scrollHeight", C2 = "scrollWidth"), q2 = q2, (i2 === E || (i2 === A || i2 === x) && a2 === T) && (L2 = j, g2 -= (y2 && P2.visualViewport ? P2.visualViewport.height : q2[R2]) - r2.height, g2 *= l2 ? 1 : -1), i2 !== A && (i2 !== E && i2 !== j || a2 !== T) || (_2 = x, b2 -= (y2 && P2.visualViewport ? P2.visualViewport.width : q2[C2]) - r2.width, b2 *= l2 ? 1 : -1);
              }
              var D2, B2 = Object.assign({ position: s2 }, f2 && F), H2 = true === d2 ? function(t4) {
                var e4 = t4.x, o4 = t4.y, n3 = window.devicePixelRatio || 1;
                return { x: u(e4 * n3) / n3 || 0, y: u(o4 * n3) / n3 || 0 };
              }({ x: b2, y: g2 }) : { x: b2, y: g2 };
              return b2 = H2.x, g2 = H2.y, l2 ? Object.assign({}, B2, ((D2 = {})[L2] = S2 ? "0" : "", D2[_2] = O2 ? "0" : "", D2.transform = (P2.devicePixelRatio || 1) <= 1 ? "translate(" + b2 + "px, " + g2 + "px)" : "translate3d(" + b2 + "px, " + g2 + "px, 0)", D2)) : Object.assign({}, B2, ((e3 = {})[L2] = S2 ? g2 + "px" : "", e3[_2] = O2 ? b2 + "px" : "", e3.transform = "", e3));
            }
            var Y = { left: "right", right: "left", bottom: "top", top: "bottom" };
            function G(t3) {
              return t3.replace(/left|right|bottom|top/g, function(t4) {
                return Y[t4];
              });
            }
            var J = { start: "end", end: "start" };
            function K(t3) {
              return t3.replace(/start|end/g, function(t4) {
                return J[t4];
              });
            }
            function Q(t3, e3) {
              var o3 = e3.getRootNode && e3.getRootNode();
              if (t3.contains(e3))
                return true;
              if (o3 && a(o3)) {
                var n3 = e3;
                do {
                  if (n3 && t3.isSameNode(n3))
                    return true;
                  n3 = n3.parentNode || n3.host;
                } while (n3);
              }
              return false;
            }
            function tt(t3) {
              return Object.assign({}, t3, { left: t3.x, top: t3.y, right: t3.x + t3.width, bottom: t3.y + t3.height });
            }
            function et(t3, e3) {
              return e3 === R ? tt(function(t4) {
                var e4 = n2(t4), o3 = p(t4), r2 = e4.visualViewport, i2 = o3.clientWidth, a2 = o3.clientHeight, c2 = 0, s2 = 0;
                return r2 && (i2 = r2.width, a2 = r2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (c2 = r2.offsetLeft, s2 = r2.offsetTop)), { width: i2, height: a2, x: c2 + y(t4), y: s2 };
              }(t3)) : r(e3) ? function(t4) {
                var e4 = l(t4);
                return e4.top = e4.top + t4.clientTop, e4.left = e4.left + t4.clientLeft, e4.bottom = e4.top + t4.clientHeight, e4.right = e4.left + t4.clientWidth, e4.width = t4.clientWidth, e4.height = t4.clientHeight, e4.x = e4.left, e4.y = e4.top, e4;
              }(e3) : tt(function(t4) {
                var e4, o3 = p(t4), n3 = f(t4), r2 = null == (e4 = t4.ownerDocument) ? void 0 : e4.body, i2 = c(o3.scrollWidth, o3.clientWidth, r2 ? r2.scrollWidth : 0, r2 ? r2.clientWidth : 0), a2 = c(o3.scrollHeight, o3.clientHeight, r2 ? r2.scrollHeight : 0, r2 ? r2.clientHeight : 0), s2 = -n3.scrollLeft + y(t4), u2 = -n3.scrollTop;
                return "rtl" === h(r2 || o3).direction && (s2 += c(o3.clientWidth, r2 ? r2.clientWidth : 0) - i2), { width: i2, height: a2, x: s2, y: u2 };
              }(p(t3)));
            }
            function ot(t3) {
              return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t3);
            }
            function nt(t3, e3) {
              return e3.reduce(function(e4, o3) {
                return e4[o3] = t3, e4;
              }, {});
            }
            function rt(t3, e3) {
              void 0 === e3 && (e3 = {});
              var o3 = e3, n3 = o3.placement, a2 = void 0 === n3 ? t3.placement : n3, u2 = o3.boundary, f2 = void 0 === u2 ? "clippingParents" : u2, y2 = o3.rootBoundary, v2 = void 0 === y2 ? R : y2, b2 = o3.elementContext, m2 = void 0 === b2 ? C : b2, w2 = o3.altBoundary, S2 = void 0 !== w2 && w2, _2 = o3.padding, A2 = void 0 === _2 ? 0 : _2, L2 = ot("number" != typeof A2 ? A2 : nt(A2, P)), q2 = m2 === C ? "reference" : C, T2 = t3.rects.popper, D2 = t3.elements[S2 ? q2 : m2], B2 = function(t4, e4, o4) {
                var n4 = "clippingParents" === e4 ? function(t5) {
                  var e5 = O(g(t5)), o5 = ["absolute", "fixed"].indexOf(h(t5).position) >= 0 && i(t5) ? k(t5) : t5;
                  return r(o5) ? e5.filter(function(t6) {
                    return r(t6) && Q(t6, o5) && "body" !== d(t6);
                  }) : [];
                }(t4) : [].concat(e4), a3 = [].concat(n4, [o4]), u3 = a3[0], l2 = a3.reduce(function(e5, o5) {
                  var n5 = et(t4, o5);
                  return e5.top = c(n5.top, e5.top), e5.right = s(n5.right, e5.right), e5.bottom = s(n5.bottom, e5.bottom), e5.left = c(n5.left, e5.left), e5;
                }, et(t4, u3));
                return l2.width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2.x = l2.left, l2.y = l2.top, l2;
              }(r(D2) ? D2 : D2.contextElement || p(t3.elements.popper), f2, v2), H2 = l(t3.elements.reference), I2 = z({ reference: H2, element: T2, strategy: "absolute", placement: a2 }), M2 = tt(Object.assign({}, T2, I2)), W2 = m2 === C ? M2 : H2, N2 = { top: B2.top - W2.top + L2.top, bottom: W2.bottom - B2.bottom + L2.bottom, left: B2.left - W2.left + L2.left, right: W2.right - B2.right + L2.right }, Z2 = t3.modifiersData.offset;
              if (m2 === C && Z2) {
                var $2 = Z2[a2];
                Object.keys(N2).forEach(function(t4) {
                  var e4 = [x, j].indexOf(t4) >= 0 ? 1 : -1, o4 = [E, j].indexOf(t4) >= 0 ? "y" : "x";
                  N2[t4] += $2[o4] * e4;
                });
              }
              return N2;
            }
            function it(t3, e3, o3) {
              return c(t3, s(e3, o3));
            }
            function at(t3, e3, o3) {
              return void 0 === o3 && (o3 = { x: 0, y: 0 }), { top: t3.top - e3.height - o3.y, right: t3.right - e3.width + o3.x, bottom: t3.bottom - e3.height + o3.y, left: t3.left - e3.width - o3.x };
            }
            function ct(t3) {
              return [E, x, j, A].some(function(e3) {
                return t3[e3] >= 0;
              });
            }
            var st = N({ defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
            }, effect: function(t3) {
              var e3 = t3.state, o3 = t3.instance, r2 = t3.options, i2 = r2.scroll, a2 = void 0 === i2 || i2, c2 = r2.resize, s2 = void 0 === c2 || c2, u2 = n2(e3.elements.popper), l2 = [].concat(e3.scrollParents.reference, e3.scrollParents.popper);
              return a2 && l2.forEach(function(t4) {
                t4.addEventListener("scroll", o3.update, Z);
              }), s2 && u2.addEventListener("resize", o3.update, Z), function() {
                a2 && l2.forEach(function(t4) {
                  t4.removeEventListener("scroll", o3.update, Z);
                }), s2 && u2.removeEventListener("resize", o3.update, Z);
              };
            }, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(t3) {
              var e3 = t3.state, o3 = t3.name;
              e3.modifiersData[o3] = z({ reference: e3.rects.reference, element: e3.rects.popper, strategy: "absolute", placement: e3.placement });
            }, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t3) {
              var e3 = t3.state, o3 = t3.options, n3 = o3.gpuAcceleration, r2 = void 0 === n3 || n3, i2 = o3.adaptive, a2 = void 0 === i2 || i2, c2 = o3.roundOffsets, s2 = void 0 === c2 || c2, u2 = { placement: $(e3.placement), variation: V(e3.placement), popper: e3.elements.popper, popperRect: e3.rects.popper, gpuAcceleration: r2, isFixed: "fixed" === e3.options.strategy };
              null != e3.modifiersData.popperOffsets && (e3.styles.popper = Object.assign({}, e3.styles.popper, X(Object.assign({}, u2, { offsets: e3.modifiersData.popperOffsets, position: e3.options.strategy, adaptive: a2, roundOffsets: s2 })))), null != e3.modifiersData.arrow && (e3.styles.arrow = Object.assign({}, e3.styles.arrow, X(Object.assign({}, u2, { offsets: e3.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: s2 })))), e3.attributes.popper = Object.assign({}, e3.attributes.popper, { "data-popper-placement": e3.placement });
            }, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(t3) {
              var e3 = t3.state;
              Object.keys(e3.elements).forEach(function(t4) {
                var o3 = e3.styles[t4] || {}, n3 = e3.attributes[t4] || {}, r2 = e3.elements[t4];
                i(r2) && d(r2) && (Object.assign(r2.style, o3), Object.keys(n3).forEach(function(t5) {
                  var e4 = n3[t5];
                  false === e4 ? r2.removeAttribute(t5) : r2.setAttribute(t5, true === e4 ? "" : e4);
                }));
              });
            }, effect: function(t3) {
              var e3 = t3.state, o3 = { popper: { position: e3.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
              return Object.assign(e3.elements.popper.style, o3.popper), e3.styles = o3, e3.elements.arrow && Object.assign(e3.elements.arrow.style, o3.arrow), function() {
                Object.keys(e3.elements).forEach(function(t4) {
                  var n3 = e3.elements[t4], r2 = e3.attributes[t4] || {}, a2 = Object.keys(e3.styles.hasOwnProperty(t4) ? e3.styles[t4] : o3[t4]).reduce(function(t5, e4) {
                    return t5[e4] = "", t5;
                  }, {});
                  i(n3) && d(n3) && (Object.assign(n3.style, a2), Object.keys(r2).forEach(function(t5) {
                    n3.removeAttribute(t5);
                  }));
                });
              };
            }, requires: ["computeStyles"] }, { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t3) {
              var e3 = t3.state, o3 = t3.options, n3 = t3.name, r2 = o3.offset, i2 = void 0 === r2 ? [0, 0] : r2, a2 = B.reduce(function(t4, o4) {
                return t4[o4] = function(t5, e4, o5) {
                  var n4 = $(t5), r3 = [A, E].indexOf(n4) >= 0 ? -1 : 1, i3 = "function" == typeof o5 ? o5(Object.assign({}, e4, { placement: t5 })) : o5, a3 = i3[0], c3 = i3[1];
                  return a3 = a3 || 0, c3 = (c3 || 0) * r3, [A, x].indexOf(n4) >= 0 ? { x: c3, y: a3 } : { x: a3, y: c3 };
                }(o4, e3.rects, i2), t4;
              }, {}), c2 = a2[e3.placement], s2 = c2.x, u2 = c2.y;
              null != e3.modifiersData.popperOffsets && (e3.modifiersData.popperOffsets.x += s2, e3.modifiersData.popperOffsets.y += u2), e3.modifiersData[n3] = a2;
            } }, { name: "flip", enabled: true, phase: "main", fn: function(t3) {
              var e3 = t3.state, o3 = t3.options, n3 = t3.name;
              if (!e3.modifiersData[n3]._skip) {
                for (var r2 = o3.mainAxis, i2 = void 0 === r2 || r2, a2 = o3.altAxis, c2 = void 0 === a2 || a2, s2 = o3.fallbackPlacements, u2 = o3.padding, l2 = o3.boundary, f2 = o3.rootBoundary, d2 = o3.altBoundary, p2 = o3.flipVariations, y2 = void 0 === p2 || p2, h2 = o3.allowedAutoPlacements, v2 = e3.options.placement, b2 = $(v2), m2 = s2 || (b2 !== v2 && y2 ? function(t4) {
                  if ($(t4) === L)
                    return [];
                  var e4 = G(t4);
                  return [K(t4), e4, K(e4)];
                }(v2) : [G(v2)]), g2 = [v2].concat(m2).reduce(function(t4, o4) {
                  return t4.concat($(o4) === L ? function(t5, e4) {
                    void 0 === e4 && (e4 = {});
                    var o5 = e4, n4 = o5.placement, r3 = o5.boundary, i3 = o5.rootBoundary, a3 = o5.padding, c3 = o5.flipVariations, s3 = o5.allowedAutoPlacements, u3 = void 0 === s3 ? B : s3, l3 = V(n4), f3 = l3 ? c3 ? D : D.filter(function(t6) {
                      return V(t6) === l3;
                    }) : P, d3 = f3.filter(function(t6) {
                      return u3.indexOf(t6) >= 0;
                    });
                    0 === d3.length && (d3 = f3);
                    var p3 = d3.reduce(function(e5, o6) {
                      return e5[o6] = rt(t5, { placement: o6, boundary: r3, rootBoundary: i3, padding: a3 })[$(o6)], e5;
                    }, {});
                    return Object.keys(p3).sort(function(t6, e5) {
                      return p3[t6] - p3[e5];
                    });
                  }(e3, { placement: o4, boundary: l2, rootBoundary: f2, padding: u2, flipVariations: y2, allowedAutoPlacements: h2 }) : o4);
                }, []), w2 = e3.rects.reference, O2 = e3.rects.popper, S2 = /* @__PURE__ */ new Map(), _2 = true, k2 = g2[0], T2 = 0; T2 < g2.length; T2++) {
                  var R2 = g2[T2], C2 = $(R2), H2 = V(R2) === q, I2 = [E, j].indexOf(C2) >= 0, M2 = I2 ? "width" : "height", W2 = rt(e3, { placement: R2, boundary: l2, rootBoundary: f2, altBoundary: d2, padding: u2 }), N2 = I2 ? H2 ? x : A : H2 ? j : E;
                  w2[M2] > O2[M2] && (N2 = G(N2));
                  var Z2 = G(N2), U2 = [];
                  if (i2 && U2.push(W2[C2] <= 0), c2 && U2.push(W2[N2] <= 0, W2[Z2] <= 0), U2.every(function(t4) {
                    return t4;
                  })) {
                    k2 = R2, _2 = false;
                    break;
                  }
                  S2.set(R2, U2);
                }
                if (_2)
                  for (var z2 = function(t4) {
                    var e4 = g2.find(function(e5) {
                      var o4 = S2.get(e5);
                      if (o4)
                        return o4.slice(0, t4).every(function(t5) {
                          return t5;
                        });
                    });
                    if (e4)
                      return k2 = e4, "break";
                  }, F2 = y2 ? 3 : 1; F2 > 0 && "break" !== z2(F2); F2--)
                    ;
                e3.placement !== k2 && (e3.modifiersData[n3]._skip = true, e3.placement = k2, e3.reset = true);
              }
            }, requiresIfExists: ["offset"], data: { _skip: false } }, { name: "preventOverflow", enabled: true, phase: "main", fn: function(t3) {
              var e3 = t3.state, o3 = t3.options, n3 = t3.name, r2 = o3.mainAxis, i2 = void 0 === r2 || r2, a2 = o3.altAxis, u2 = void 0 !== a2 && a2, l2 = o3.boundary, f2 = o3.rootBoundary, d2 = o3.altBoundary, p2 = o3.padding, y2 = o3.tether, h2 = void 0 === y2 || y2, v2 = o3.tetherOffset, b2 = void 0 === v2 ? 0 : v2, g2 = rt(e3, { boundary: l2, rootBoundary: f2, padding: p2, altBoundary: d2 }), w2 = $(e3.placement), O2 = V(e3.placement), S2 = !O2, _2 = U(w2), L2 = "x" === _2 ? "y" : "x", P2 = e3.modifiersData.popperOffsets, T2 = e3.rects.reference, R2 = e3.rects.popper, C2 = "function" == typeof b2 ? b2(Object.assign({}, e3.rects, { placement: e3.placement })) : b2, D2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), B2 = e3.modifiersData.offset ? e3.modifiersData.offset[e3.placement] : null, H2 = { x: 0, y: 0 };
              if (P2) {
                if (i2) {
                  var I2, M2 = "y" === _2 ? E : A, W2 = "y" === _2 ? j : x, N2 = "y" === _2 ? "height" : "width", Z2 = P2[_2], z2 = Z2 + g2[M2], F2 = Z2 - g2[W2], X2 = h2 ? -R2[N2] / 2 : 0, Y2 = O2 === q ? T2[N2] : R2[N2], G2 = O2 === q ? -R2[N2] : -T2[N2], J2 = e3.elements.arrow, K2 = h2 && J2 ? m(J2) : { width: 0, height: 0 }, Q2 = e3.modifiersData["arrow#persistent"] ? e3.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, tt2 = Q2[M2], et2 = Q2[W2], ot2 = it(0, T2[N2], K2[N2]), nt2 = S2 ? T2[N2] / 2 - X2 - ot2 - tt2 - D2.mainAxis : Y2 - ot2 - tt2 - D2.mainAxis, at2 = S2 ? -T2[N2] / 2 + X2 + ot2 + et2 + D2.mainAxis : G2 + ot2 + et2 + D2.mainAxis, ct2 = e3.elements.arrow && k(e3.elements.arrow), st2 = ct2 ? "y" === _2 ? ct2.clientTop || 0 : ct2.clientLeft || 0 : 0, ut = null != (I2 = null == B2 ? void 0 : B2[_2]) ? I2 : 0, lt = Z2 + at2 - ut, ft = it(h2 ? s(z2, Z2 + nt2 - ut - st2) : z2, Z2, h2 ? c(F2, lt) : F2);
                  P2[_2] = ft, H2[_2] = ft - Z2;
                }
                if (u2) {
                  var dt, pt = "x" === _2 ? E : A, yt = "x" === _2 ? j : x, ht = P2[L2], vt = "y" === L2 ? "height" : "width", bt = ht + g2[pt], mt = ht - g2[yt], gt = -1 !== [E, A].indexOf(w2), wt = null != (dt = null == B2 ? void 0 : B2[L2]) ? dt : 0, Ot = gt ? bt : ht - T2[vt] - R2[vt] - wt + D2.altAxis, St = gt ? ht + T2[vt] + R2[vt] - wt - D2.altAxis : mt, _t = h2 && gt ? function(t4, e4, o4) {
                    var n4 = it(t4, e4, o4);
                    return n4 > o4 ? o4 : n4;
                  }(Ot, ht, St) : it(h2 ? Ot : bt, ht, h2 ? St : mt);
                  P2[L2] = _t, H2[L2] = _t - ht;
                }
                e3.modifiersData[n3] = H2;
              }
            }, requiresIfExists: ["offset"] }, { name: "arrow", enabled: true, phase: "main", fn: function(t3) {
              var e3, o3 = t3.state, n3 = t3.name, r2 = t3.options, i2 = o3.elements.arrow, a2 = o3.modifiersData.popperOffsets, c2 = $(o3.placement), s2 = U(c2), u2 = [A, x].indexOf(c2) >= 0 ? "height" : "width";
              if (i2 && a2) {
                var l2 = function(t4, e4) {
                  return ot("number" != typeof (t4 = "function" == typeof t4 ? t4(Object.assign({}, e4.rects, { placement: e4.placement })) : t4) ? t4 : nt(t4, P));
                }(r2.padding, o3), f2 = m(i2), d2 = "y" === s2 ? E : A, p2 = "y" === s2 ? j : x, y2 = o3.rects.reference[u2] + o3.rects.reference[s2] - a2[s2] - o3.rects.popper[u2], h2 = a2[s2] - o3.rects.reference[s2], v2 = k(i2), b2 = v2 ? "y" === s2 ? v2.clientHeight || 0 : v2.clientWidth || 0 : 0, g2 = y2 / 2 - h2 / 2, w2 = l2[d2], O2 = b2 - f2[u2] - l2[p2], S2 = b2 / 2 - f2[u2] / 2 + g2, _2 = it(w2, S2, O2), L2 = s2;
                o3.modifiersData[n3] = ((e3 = {})[L2] = _2, e3.centerOffset = _2 - S2, e3);
              }
            }, effect: function(t3) {
              var e3 = t3.state, o3 = t3.options.element, n3 = void 0 === o3 ? "[data-popper-arrow]" : o3;
              null != n3 && ("string" != typeof n3 || (n3 = e3.elements.popper.querySelector(n3))) && Q(e3.elements.popper, n3) && (e3.elements.arrow = n3);
            }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t3) {
              var e3 = t3.state, o3 = t3.name, n3 = e3.rects.reference, r2 = e3.rects.popper, i2 = e3.modifiersData.preventOverflow, a2 = rt(e3, { elementContext: "reference" }), c2 = rt(e3, { altBoundary: true }), s2 = at(a2, n3), u2 = at(c2, r2, i2), l2 = ct(s2), f2 = ct(u2);
              e3.modifiersData[o3] = { referenceClippingOffsets: s2, popperEscapeOffsets: u2, isReferenceHidden: l2, hasPopperEscaped: f2 }, e3.attributes.popper = Object.assign({}, e3.attributes.popper, { "data-popper-reference-hidden": l2, "data-popper-escaped": f2 });
            } }] });
          } }, e = {};
          function o(n2) {
            var r = e[n2];
            if (void 0 !== r)
              return r.exports;
            var i = e[n2] = { exports: {} };
            return t[n2](i, i.exports, o), i.exports;
          }
          o.d = (t2, e2) => {
            for (var n2 in e2)
              o.o(e2, n2) && !o.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
          }, o.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), o.r = (t2) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          };
          var n = {};
          return o.r(n), o(483), o(185), o(661), o(51), o(439), o(366), o(795), o(572), o(181), o(2), o(493), o(778), n;
        })();
      });
    }
  });

  // index.js
  var import_hs_ui = __toESM(require_hs_ui_bundle());

  // vendor/preline/hs.theme-appearance.js
  var HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();
      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default";
      }
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");
      document.querySelector("html").classList.add(this.getOriginalAppearance());
      setTimeout(() => {
        $resetStylesEl.remove();
      });
      if (dispatchEvent) {
        window.dispatchEvent(new CustomEvent("on-hs-appearance-change", { detail: theme }));
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    }
  };
  HSThemeAppearance.init();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (HSThemeAppearance.getOriginalAppearance() === "auto") {
      HSThemeAppearance.setAppearance("auto", false);
    }
  });
  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll("[data-hs-theme-click-value]");
    const $switchableThemes = document.querySelectorAll("[data-hs-theme-switch]");
    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () => HSThemeAppearance.setAppearance($item.getAttribute("data-hs-theme-click-value"), true, $item));
    });
    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });
      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });
    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });

  // node_modules/@hotwired/stimulus/dist/stimulus.js
  var EventListener = class {
    constructor(eventTarget, eventName, eventOptions) {
      this.eventTarget = eventTarget;
      this.eventName = eventName;
      this.eventOptions = eventOptions;
      this.unorderedBindings = /* @__PURE__ */ new Set();
    }
    connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
      const extendedEvent = extendEvent(event);
      for (const binding of this.bindings) {
        if (extendedEvent.immediatePropagationStopped) {
          break;
        } else {
          binding.handleEvent(extendedEvent);
        }
      }
    }
    get bindings() {
      return Array.from(this.unorderedBindings).sort((left, right) => {
        const leftIndex = left.index, rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  };
  function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
      return event;
    } else {
      const { stopImmediatePropagation } = event;
      return Object.assign(event, {
        immediatePropagationStopped: false,
        stopImmediatePropagation() {
          this.immediatePropagationStopped = true;
          stopImmediatePropagation.call(this);
        }
      });
    }
  }
  var Dispatcher = class {
    constructor(application2) {
      this.application = application2;
      this.eventListenerMaps = /* @__PURE__ */ new Map();
      this.started = false;
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach((eventListener) => eventListener.connect());
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach((eventListener) => eventListener.disconnect());
      }
    }
    get eventListeners() {
      return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    }
    handleError(error2, message, detail = {}) {
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    fetchEventListenerForBinding(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      let eventListener = eventListenerMap.get(cacheKey);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }
      return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
      const eventListener = new EventListener(eventTarget, eventName, eventOptions);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
      let eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = /* @__PURE__ */ new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
      const parts = [eventName];
      Object.keys(eventOptions).sort().forEach((key) => {
        parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
      });
      return parts.join(":");
    }
  };
  var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;
  function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    return {
      eventTarget: parseEventTarget(matches[4]),
      eventName: matches[2],
      eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
      identifier: matches[5],
      methodName: matches[7]
    };
  }
  function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
      return window;
    } else if (eventTargetName == "document") {
      return document;
    }
  }
  function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token) => Object.assign(options, { [token.replace(/^!/, "")]: !/^!/.test(token) }), {});
  }
  function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
      return "window";
    } else if (eventTarget == document) {
      return "document";
    }
  }
  function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
  }
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
  }
  function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
  }
  var Action = class {
    constructor(element, index, descriptor) {
      this.element = element;
      this.index = index;
      this.eventTarget = descriptor.eventTarget || element;
      this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
      this.eventOptions = descriptor.eventOptions || {};
      this.identifier = descriptor.identifier || error("missing identifier");
      this.methodName = descriptor.methodName || error("missing method name");
    }
    static forToken(token) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content));
    }
    toString() {
      const eventNameSuffix = this.eventTargetName ? `@${this.eventTargetName}` : "";
      return `${this.eventName}${eventNameSuffix}->${this.identifier}#${this.methodName}`;
    }
    get params() {
      const params = {};
      const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`);
      for (const { name, value } of Array.from(this.element.attributes)) {
        const match = name.match(pattern);
        const key = match && match[1];
        if (key) {
          params[camelize(key)] = typecast(value);
        }
      }
      return params;
    }
    get eventTargetName() {
      return stringifyEventTarget(this.eventTarget);
    }
  };
  var defaultEventNames = {
    "a": (e) => "click",
    "button": (e) => "click",
    "form": (e) => "submit",
    "details": (e) => "toggle",
    "input": (e) => e.getAttribute("type") == "submit" ? "click" : "input",
    "select": (e) => "change",
    "textarea": (e) => "input"
  };
  function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
      return defaultEventNames[tagName](element);
    }
  }
  function error(message) {
    throw new Error(message);
  }
  function typecast(value) {
    try {
      return JSON.parse(value);
    } catch (o_O) {
      return value;
    }
  }
  var Binding = class {
    constructor(context, action) {
      this.context = context;
      this.action = action;
    }
    get index() {
      return this.action.index;
    }
    get eventTarget() {
      return this.action.eventTarget;
    }
    get eventOptions() {
      return this.action.eventOptions;
    }
    get identifier() {
      return this.context.identifier;
    }
    handleEvent(event) {
      if (this.willBeInvokedByEvent(event) && this.shouldBeInvokedPerSelf(event)) {
        this.processStopPropagation(event);
        this.processPreventDefault(event);
        this.invokeWithEvent(event);
      }
    }
    get eventName() {
      return this.action.eventName;
    }
    get method() {
      const method = this.controller[this.methodName];
      if (typeof method == "function") {
        return method;
      }
      throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    processStopPropagation(event) {
      if (this.eventOptions.stop) {
        event.stopPropagation();
      }
    }
    processPreventDefault(event) {
      if (this.eventOptions.prevent) {
        event.preventDefault();
      }
    }
    invokeWithEvent(event) {
      const { target, currentTarget } = event;
      try {
        const { params } = this.action;
        const actionEvent = Object.assign(event, { params });
        this.method.call(this.controller, actionEvent);
        this.context.logDebugActivity(this.methodName, { event, target, currentTarget, action: this.methodName });
      } catch (error2) {
        const { identifier, controller, element, index } = this;
        const detail = { identifier, controller, element, index, event };
        this.context.handleError(error2, `invoking action "${this.action}"`, detail);
      }
    }
    shouldBeInvokedPerSelf(event) {
      if (this.action.eventOptions.self === true) {
        return this.action.element === event.target;
      } else {
        return true;
      }
    }
    willBeInvokedByEvent(event) {
      const eventTarget = event.target;
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
    get controller() {
      return this.context.controller;
    }
    get methodName() {
      return this.action.methodName;
    }
    get element() {
      return this.scope.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  var ElementObserver = class {
    constructor(element, delegate) {
      this.mutationObserverInit = { attributes: true, childList: true, subtree: true };
      this.element = element;
      this.started = false;
      this.delegate = delegate;
      this.elements = /* @__PURE__ */ new Set();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
    pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }
      callback();
      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        const matches = new Set(this.matchElementsInTree());
        for (const element of Array.from(this.elements)) {
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (const element of Array.from(matches)) {
          this.addElement(element);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
    processAttributeChange(node, attributeName) {
      const element = node;
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
    processRemovedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
    processAddedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
    matchElement(element) {
      return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
      return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
      for (const element of this.matchElementsInTree(tree)) {
        processor.call(this, element);
      }
    }
    elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
    elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
    addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
    removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  };
  var AttributeObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeName = attributeName;
      this.delegate = delegate;
      this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
      return this.elementObserver.element;
    }
    get selector() {
      return `[${this.attributeName}]`;
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get started() {
      return this.elementObserver.started;
    }
    matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
      const match = this.matchElement(tree) ? [tree] : [];
      const matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
    elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
    elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
    elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  };
  var StringMapObserver = class {
    constructor(element, delegate) {
      this.element = element;
      this.delegate = delegate;
      this.started = false;
      this.stringMap = /* @__PURE__ */ new Map();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, { attributes: true, attributeOldValue: true });
        this.refresh();
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        for (const attributeName of this.knownAttributeNames) {
          this.refreshAttribute(attributeName, null);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      const attributeName = mutation.attributeName;
      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
    refreshAttribute(attributeName, oldValue) {
      const key = this.delegate.getStringMapKeyForAttribute(attributeName);
      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }
        const value = this.element.getAttribute(attributeName);
        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }
        if (value == null) {
          const oldValue2 = this.stringMap.get(attributeName);
          this.stringMap.delete(attributeName);
          if (oldValue2)
            this.stringMapKeyRemoved(key, attributeName, oldValue2);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
    stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
    stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
    get knownAttributeNames() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
      return Array.from(this.element.attributes).map((attribute) => attribute.name);
    }
    get recordedAttributeNames() {
      return Array.from(this.stringMap.keys());
    }
  };
  function add(map, key, value) {
    fetch(map, key).add(value);
  }
  function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
  }
  function fetch(map, key) {
    let values = map.get(key);
    if (!values) {
      values = /* @__PURE__ */ new Set();
      map.set(key, values);
    }
    return values;
  }
  function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) {
      map.delete(key);
    }
  }
  var Multimap = class {
    constructor() {
      this.valuesByKey = /* @__PURE__ */ new Map();
    }
    get keys() {
      return Array.from(this.valuesByKey.keys());
    }
    get values() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((values, set) => values.concat(Array.from(set)), []);
    }
    get size() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((size, set) => size + set.size, 0);
    }
    add(key, value) {
      add(this.valuesByKey, key, value);
    }
    delete(key, value) {
      del(this.valuesByKey, key, value);
    }
    has(key, value) {
      const values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
    hasKey(key) {
      return this.valuesByKey.has(key);
    }
    hasValue(value) {
      const sets = Array.from(this.valuesByKey.values());
      return sets.some((set) => set.has(value));
    }
    getValuesForKey(key) {
      const values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(([key, values]) => values.has(value)).map(([key, values]) => key);
    }
  };
  var TokenListObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeObserver = new AttributeObserver(element, attributeName, this);
      this.delegate = delegate;
      this.tokensByElement = new Multimap();
    }
    get started() {
      return this.attributeObserver.started;
    }
    start() {
      this.attributeObserver.start();
    }
    pause(callback) {
      this.attributeObserver.pause(callback);
    }
    stop() {
      this.attributeObserver.stop();
    }
    refresh() {
      this.attributeObserver.refresh();
    }
    get element() {
      return this.attributeObserver.element;
    }
    get attributeName() {
      return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
      const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
      tokens.forEach((token) => this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
      tokens.forEach((token) => this.tokenUnmatched(token));
    }
    tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
      const previousTokens = this.tokensByElement.getValuesForKey(element);
      const currentTokens = this.readTokensForElement(element);
      const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
    readTokensForElement(element) {
      const attributeName = this.attributeName;
      const tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  };
  function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content) => content.length).map((content, index) => ({ element, attributeName, content, index }));
  }
  function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({ length }, (_, index) => [left[index], right[index]]);
  }
  function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
  }
  var ValueListObserver = class {
    constructor(element, attributeName, delegate) {
      this.tokenListObserver = new TokenListObserver(element, attributeName, this);
      this.delegate = delegate;
      this.parseResultsByToken = /* @__PURE__ */ new WeakMap();
      this.valuesByTokenByElement = /* @__PURE__ */ new WeakMap();
    }
    get started() {
      return this.tokenListObserver.started;
    }
    start() {
      this.tokenListObserver.start();
    }
    stop() {
      this.tokenListObserver.stop();
    }
    refresh() {
      this.tokenListObserver.refresh();
    }
    get element() {
      return this.tokenListObserver.element;
    }
    get attributeName() {
      return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
    tokenUnmatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
    fetchParseResultForToken(token) {
      let parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    }
    fetchValuesByTokenForElement(element) {
      let valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = /* @__PURE__ */ new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    }
    parseToken(token) {
      try {
        const value = this.delegate.parseValueForToken(token);
        return { value };
      } catch (error2) {
        return { error: error2 };
      }
    }
  };
  var BindingObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.bindingsByAction = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
    stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
    get element() {
      return this.context.element;
    }
    get identifier() {
      return this.context.identifier;
    }
    get actionAttribute() {
      return this.schema.actionAttribute;
    }
    get schema() {
      return this.context.schema;
    }
    get bindings() {
      return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
      const binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
      const binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
    disconnectAllActions() {
      this.bindings.forEach((binding) => this.delegate.bindingDisconnected(binding));
      this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
      const action = Action.forToken(token);
      if (action.identifier == this.identifier) {
        return action;
      }
    }
    elementMatchedValue(element, action) {
      this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  };
  var ValueObserver = class {
    constructor(context, receiver) {
      this.context = context;
      this.receiver = receiver;
      this.stringMapObserver = new StringMapObserver(this.element, this);
      this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
      this.stringMapObserver.start();
      this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
      this.stringMapObserver.stop();
    }
    get element() {
      return this.context.element;
    }
    get controller() {
      return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
    stringMapKeyAdded(key, attributeName) {
      const descriptor = this.valueDescriptorMap[attributeName];
      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
    stringMapValueChanged(value, name, oldValue) {
      const descriptor = this.valueDescriptorNameMap[name];
      if (value === null)
        return;
      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }
      this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      const descriptor = this.valueDescriptorNameMap[key];
      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
    invokeChangedCallbacksForDefaultValues() {
      for (const { key, name, defaultValue, writer } of this.valueDescriptors) {
        if (defaultValue != void 0 && !this.controller.data.has(key)) {
          this.invokeChangedCallback(name, writer(defaultValue), void 0);
        }
      }
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
      const changedMethodName = `${name}Changed`;
      const changedMethod = this.receiver[changedMethodName];
      if (typeof changedMethod == "function") {
        const descriptor = this.valueDescriptorNameMap[name];
        try {
          const value = descriptor.reader(rawValue);
          let oldValue = rawOldValue;
          if (rawOldValue) {
            oldValue = descriptor.reader(rawOldValue);
          }
          changedMethod.call(this.receiver, value, oldValue);
        } catch (error2) {
          if (!(error2 instanceof TypeError))
            throw error2;
          throw new TypeError(`Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error2.message}`);
        }
      }
    }
    get valueDescriptors() {
      const { valueDescriptorMap } = this;
      return Object.keys(valueDescriptorMap).map((key) => valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
      const descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach((key) => {
        const descriptor = this.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
    hasValue(attributeName) {
      const descriptor = this.valueDescriptorNameMap[attributeName];
      const hasMethodName = `has${capitalize(descriptor.name)}`;
      return this.receiver[hasMethodName];
    }
  };
  var TargetObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.targetsByName = new Multimap();
    }
    start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
    stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
    tokenMatched({ element, content: name }) {
      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
    tokenUnmatched({ element, content: name }) {
      this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
      var _a;
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
      }
    }
    disconnectTarget(element, name) {
      var _a;
      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
      }
    }
    disconnectAllTargets() {
      for (const name of this.targetsByName.keys) {
        for (const element of this.targetsByName.getValuesForKey(name)) {
          this.disconnectTarget(element, name);
        }
      }
    }
    get attributeName() {
      return `data-${this.context.identifier}-target`;
    }
    get element() {
      return this.context.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  var Context = class {
    constructor(module, scope) {
      this.logDebugActivity = (functionName, detail = {}) => {
        const { identifier, controller, element } = this;
        detail = Object.assign({ identifier, controller, element }, detail);
        this.application.logDebugActivity(this.identifier, functionName, detail);
      };
      this.module = module;
      this.scope = scope;
      this.controller = new module.controllerConstructor(this);
      this.bindingObserver = new BindingObserver(this, this.dispatcher);
      this.valueObserver = new ValueObserver(this, this.controller);
      this.targetObserver = new TargetObserver(this, this);
      try {
        this.controller.initialize();
        this.logDebugActivity("initialize");
      } catch (error2) {
        this.handleError(error2, "initializing controller");
      }
    }
    connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();
      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error2) {
        this.handleError(error2, "connecting controller");
      }
    }
    disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error2) {
        this.handleError(error2, "disconnecting controller");
      }
      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
    get application() {
      return this.module.application;
    }
    get identifier() {
      return this.module.identifier;
    }
    get schema() {
      return this.application.schema;
    }
    get dispatcher() {
      return this.application.dispatcher;
    }
    get element() {
      return this.scope.element;
    }
    get parentElement() {
      return this.element.parentElement;
    }
    handleError(error2, message, detail = {}) {
      const { identifier, controller, element } = this;
      detail = Object.assign({ identifier, controller, element }, detail);
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
      this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
      this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    invokeControllerMethod(methodName, ...args) {
      const controller = this.controller;
      if (typeof controller[methodName] == "function") {
        controller[methodName](...args);
      }
    }
  };
  function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor2) => {
      getOwnStaticArrayValues(constructor2, propertyName).forEach((name) => values.add(name));
      return values;
    }, /* @__PURE__ */ new Set()));
  }
  function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor2) => {
      pairs.push(...getOwnStaticObjectPairs(constructor2, propertyName));
      return pairs;
    }, []);
  }
  function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
  }
  function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
  }
  function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
  }
  function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
  }
  function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
  }
  function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing) => {
      const properties = blessing(constructor);
      for (const key in properties) {
        const descriptor = blessedProperties[key] || {};
        blessedProperties[key] = Object.assign(descriptor, properties[key]);
      }
      return blessedProperties;
    }, {});
  }
  function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key) => {
      const descriptor = getShadowedDescriptor(prototype, properties, key);
      if (descriptor) {
        Object.assign(shadowProperties, { [key]: descriptor });
      }
      return shadowProperties;
    }, {});
  }
  function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
      const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
      if (shadowingDescriptor) {
        descriptor.get = shadowingDescriptor.get || descriptor.get;
        descriptor.set = shadowingDescriptor.set || descriptor.set;
      }
      return descriptor;
    }
  }
  var getOwnKeys = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
      return (object) => [
        ...Object.getOwnPropertyNames(object),
        ...Object.getOwnPropertySymbols(object)
      ];
    } else {
      return Object.getOwnPropertyNames;
    }
  })();
  var extend = (() => {
    function extendWithReflect(constructor) {
      function extended() {
        return Reflect.construct(constructor, arguments, new.target);
      }
      extended.prototype = Object.create(constructor.prototype, {
        constructor: { value: extended }
      });
      Reflect.setPrototypeOf(extended, constructor);
      return extended;
    }
    function testReflectExtension() {
      const a = function() {
        this.a.call(this);
      };
      const b = extendWithReflect(a);
      b.prototype.a = function() {
      };
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error2) {
      return (constructor) => class extended extends constructor {
      };
    }
  })();
  function blessDefinition(definition) {
    return {
      identifier: definition.identifier,
      controllerConstructor: bless(definition.controllerConstructor)
    };
  }
  var Module = class {
    constructor(application2, definition) {
      this.application = application2;
      this.definition = blessDefinition(definition);
      this.contextsByScope = /* @__PURE__ */ new WeakMap();
      this.connectedContexts = /* @__PURE__ */ new Set();
    }
    get identifier() {
      return this.definition.identifier;
    }
    get controllerConstructor() {
      return this.definition.controllerConstructor;
    }
    get contexts() {
      return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
      const context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
    disconnectContextForScope(scope) {
      const context = this.contextsByScope.get(scope);
      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
    fetchContextForScope(scope) {
      let context = this.contextsByScope.get(scope);
      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }
      return context;
    }
  };
  var ClassMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    has(name) {
      return this.data.has(this.getDataKey(name));
    }
    get(name) {
      return this.getAll(name)[0];
    }
    getAll(name) {
      const tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
    getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
      return `${name}-class`;
    }
    get data() {
      return this.scope.data;
    }
  };
  var DataMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
    set(key, value) {
      const name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
    has(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
    delete(key) {
      if (this.has(key)) {
        const name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
    getAttributeNameForKey(key) {
      return `data-${this.identifier}-${dasherize(key)}`;
    }
  };
  var Guide = class {
    constructor(logger) {
      this.warnedKeysByObject = /* @__PURE__ */ new WeakMap();
      this.logger = logger;
    }
    warn(object, key, message) {
      let warnedKeys = this.warnedKeysByObject.get(object);
      if (!warnedKeys) {
        warnedKeys = /* @__PURE__ */ new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }
      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  };
  function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
  }
  var TargetSet = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(targetName) {
      return this.find(targetName) != null;
    }
    find(...targetNames) {
      return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), void 0);
    }
    findAll(...targetNames) {
      return targetNames.reduce((targets, targetName) => [
        ...targets,
        ...this.findAllTargets(targetName),
        ...this.findAllLegacyTargets(targetName)
      ], []);
    }
    findTarget(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
      const attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map((element) => this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
      const targetDescriptor = `${this.identifier}.${targetName}`;
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
      if (element) {
        const { identifier } = this;
        const attributeName = this.schema.targetAttribute;
        const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
      }
      return element;
    }
    get guide() {
      return this.scope.guide;
    }
  };
  var Scope = class {
    constructor(schema, element, identifier, logger) {
      this.targets = new TargetSet(this);
      this.classes = new ClassMap(this);
      this.data = new DataMap(this);
      this.containsElement = (element2) => {
        return element2.closest(this.controllerSelector) === this.element;
      };
      this.schema = schema;
      this.element = element;
      this.identifier = identifier;
      this.guide = new Guide(logger);
    }
    findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
      return [
        ...this.element.matches(selector) ? [this.element] : [],
        ...this.queryElements(selector).filter(this.containsElement)
      ];
    }
    queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
  };
  var ScopeObserver = class {
    constructor(element, schema, delegate) {
      this.element = element;
      this.schema = schema;
      this.delegate = delegate;
      this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
      this.scopesByIdentifierByElement = /* @__PURE__ */ new WeakMap();
      this.scopeReferenceCounts = /* @__PURE__ */ new WeakMap();
    }
    start() {
      this.valueListObserver.start();
    }
    stop() {
      this.valueListObserver.stop();
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
      const { element, content: identifier } = token;
      const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      let scope = scopesByIdentifier.get(identifier);
      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }
      return scope;
    }
    elementMatchedValue(element, value) {
      const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
    elementUnmatchedValue(element, value) {
      const referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
    fetchScopesByIdentifierForElement(element) {
      let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = /* @__PURE__ */ new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    }
  };
  var Router = class {
    constructor(application2) {
      this.application = application2;
      this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
      this.scopesByIdentifier = new Multimap();
      this.modulesByIdentifier = /* @__PURE__ */ new Map();
    }
    get element() {
      return this.application.element;
    }
    get schema() {
      return this.application.schema;
    }
    get logger() {
      return this.application.logger;
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    get modules() {
      return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
      return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
    }
    start() {
      this.scopeObserver.start();
    }
    stop() {
      this.scopeObserver.stop();
    }
    loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      const module = new Module(this.application, definition);
      this.connectModule(module);
    }
    unloadIdentifier(identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    }
    getContextForElementAndIdentifier(element, identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find((context) => context.element == element);
      }
    }
    handleError(error2, message, detail) {
      this.application.handleError(error2, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.connectContextForScope(scope);
      }
    }
    scopeDisconnected(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
    connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.connectContextForScope(scope));
    }
    disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.disconnectContextForScope(scope));
    }
  };
  var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`
  };
  var Application = class {
    constructor(element = document.documentElement, schema = defaultSchema) {
      this.logger = console;
      this.debug = false;
      this.logDebugActivity = (identifier, functionName, detail = {}) => {
        if (this.debug) {
          this.logFormattedMessage(identifier, functionName, detail);
        }
      };
      this.element = element;
      this.schema = schema;
      this.dispatcher = new Dispatcher(this);
      this.router = new Router(this);
    }
    static start(element, schema) {
      const application2 = new Application(element, schema);
      application2.start();
      return application2;
    }
    async start() {
      await domReady();
      this.logDebugActivity("application", "starting");
      this.dispatcher.start();
      this.router.start();
      this.logDebugActivity("application", "start");
    }
    stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
      this.load({ identifier, controllerConstructor });
    }
    load(head, ...rest) {
      const definitions = Array.isArray(head) ? head : [head, ...rest];
      definitions.forEach((definition) => {
        if (definition.controllerConstructor.shouldLoad) {
          this.router.loadDefinition(definition);
        }
      });
    }
    unload(head, ...rest) {
      const identifiers = Array.isArray(head) ? head : [head, ...rest];
      identifiers.forEach((identifier) => this.router.unloadIdentifier(identifier));
    }
    get controllers() {
      return this.router.contexts.map((context) => context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
      const context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
    handleError(error2, message, detail) {
      var _a;
      this.logger.error(`%s

%o

%o`, message, error2, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error2);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
      detail = Object.assign({ application: this }, detail);
      this.logger.groupCollapsed(`${identifier} #${functionName}`);
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  };
  function domReady() {
    return new Promise((resolve) => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", () => resolve());
      } else {
        resolve();
      }
    });
  }
  function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
      return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
  }
  function propertiesForClassDefinition(key) {
    return {
      [`${key}Class`]: {
        get() {
          const { classes } = this;
          if (classes.has(key)) {
            return classes.get(key);
          } else {
            const attribute = classes.getAttributeName(key);
            throw new Error(`Missing attribute "${attribute}"`);
          }
        }
      },
      [`${key}Classes`]: {
        get() {
          return this.classes.getAll(key);
        }
      },
      [`has${capitalize(key)}Class`]: {
        get() {
          return this.classes.has(key);
        }
      }
    };
  }
  function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
      return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
  }
  function propertiesForTargetDefinition(name) {
    return {
      [`${name}Target`]: {
        get() {
          const target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
          }
        }
      },
      [`${name}Targets`]: {
        get() {
          return this.targets.findAll(name);
        }
      },
      [`has${capitalize(name)}Target`]: {
        get() {
          return this.targets.has(name);
        }
      }
    };
  }
  function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
      valueDescriptorMap: {
        get() {
          return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
            const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
            const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
            return Object.assign(result, { [attributeName]: valueDescriptor });
          }, {});
        }
      }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
      return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
  }
  function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
      [name]: {
        get() {
          const value = this.data.get(key);
          if (value !== null) {
            return read(value);
          } else {
            return definition.defaultValue;
          }
        },
        set(value) {
          if (value === void 0) {
            this.data.delete(key);
          } else {
            this.data.set(key, write(value));
          }
        }
      },
      [`has${capitalize(name)}`]: {
        get() {
          return this.data.has(key) || definition.hasCustomDefaultValue;
        }
      }
    };
  }
  function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
      controller,
      token,
      typeDefinition
    });
  }
  function parseValueTypeConstant(constant) {
    switch (constant) {
      case Array:
        return "array";
      case Boolean:
        return "boolean";
      case Number:
        return "number";
      case Object:
        return "object";
      case String:
        return "string";
    }
  }
  function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
    }
    if (Array.isArray(defaultValue))
      return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
      return "object";
  }
  function parseValueTypeObject(payload) {
    const typeFromObject = parseValueTypeConstant(payload.typeObject.type);
    if (!typeFromObject)
      return;
    const defaultValueType = parseValueTypeDefault(payload.typeObject.default);
    if (typeFromObject !== defaultValueType) {
      const propertyPath = payload.controller ? `${payload.controller}.${payload.token}` : payload.token;
      throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${payload.typeObject.default}" is of type "${defaultValueType}".`);
    }
    return typeFromObject;
  }
  function parseValueTypeDefinition(payload) {
    const typeFromObject = parseValueTypeObject({
      controller: payload.controller,
      token: payload.token,
      typeObject: payload.typeDefinition
    });
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeDefinition);
    const typeFromConstant = parseValueTypeConstant(payload.typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
      return type;
    const propertyPath = payload.controller ? `${payload.controller}.${payload.typeDefinition}` : payload.token;
    throw new Error(`Unknown value type "${propertyPath}" for "${payload.token}" value`);
  }
  function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant)
      return defaultValuesByType[constant];
    const defaultValue = typeDefinition.default;
    if (defaultValue !== void 0)
      return defaultValue;
    return typeDefinition;
  }
  function valueDescriptorForTokenAndTypeDefinition(payload) {
    const key = `${dasherize(payload.token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
      type,
      key,
      name: camelize(key),
      get defaultValue() {
        return defaultValueForDefinition(payload.typeDefinition);
      },
      get hasCustomDefaultValue() {
        return parseValueTypeDefault(payload.typeDefinition) !== void 0;
      },
      reader: readers[type],
      writer: writers[type] || writers.default
    };
  }
  var defaultValuesByType = {
    get array() {
      return [];
    },
    boolean: false,
    number: 0,
    get object() {
      return {};
    },
    string: ""
  };
  var readers = {
    array(value) {
      const array = JSON.parse(value);
      if (!Array.isArray(array)) {
        throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
      }
      return array;
    },
    boolean(value) {
      return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
      return Number(value);
    },
    object(value) {
      const object = JSON.parse(value);
      if (object === null || typeof object != "object" || Array.isArray(object)) {
        throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
      }
      return object;
    },
    string(value) {
      return value;
    }
  };
  var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
  };
  function writeJSON(value) {
    return JSON.stringify(value);
  }
  function writeString(value) {
    return `${value}`;
  }
  var Controller = class {
    constructor(context) {
      this.context = context;
    }
    static get shouldLoad() {
      return true;
    }
    get application() {
      return this.context.application;
    }
    get scope() {
      return this.context.scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get targets() {
      return this.scope.targets;
    }
    get classes() {
      return this.scope.classes;
    }
    get data() {
      return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
      const type = prefix ? `${prefix}:${eventName}` : eventName;
      const event = new CustomEvent(type, { detail, bubbles, cancelable });
      target.dispatchEvent(event);
      return event;
    }
  };
  Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing];
  Controller.targets = [];
  Controller.values = {};

  // controllers/application.js
  var application = Application.start();
  application.debug = false;
  window.Stimulus = application;

  // controllers/hello_controller.js
  var hello_controller_default = class extends Controller {
    connect() {
      this.element.textContent = "Hello World!";
    }
  };

  // controllers/index.js
  application.register("hello", hello_controller_default);
})();
/*! For license information please see hs-ui.bundle.js.LICENSE.txt */
