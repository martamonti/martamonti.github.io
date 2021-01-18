$(document).ready(function() {
    $(".animsition").animsition({
      inClass: "fade-in",
      outClass: "fade-out",
      inDuration: 600,
      outDuration: 600,
      linkElement: ".animsition-link",
      loading: !1,
      loadingParentElement: "body",
      loadingClass: "loading",
      loadingInner: "",
      timeout: !0,
      timeoutCountdown: 0,
      onLoadEvent: !0,
      browser: ["animation-duration", "-webkit-animation-duration"],
      overlay: !1,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "body",
      transition: function(t) {
        window.location.href = t
      }
    })
  }),
  function(t, e) {
    var o = e(t, t.document);
    t.lazySizes = o, "object" == typeof module && module.exports && (module.exports = o)
  }(window, function t(e, o) {
    "use strict";
    if (o.getElementsByClassName) {
      var i, n, a = o.documentElement,
        r = e.Date,
        s = e.HTMLPictureElement,
        l = "addEventListener",
        c = "getAttribute",
        d = e[l],
        u = e.setTimeout,
        f = e.requestAnimationFrame || u,
        p = e.requestIdleCallback,
        m = /^picture$/i,
        g = ["load", "error", "lazyincluded", "_lazyloaded"],
        h = {},
        b = Array.prototype.forEach,
        y = function(t, e) {
          return h[e] || (h[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), h[e].test(t[c]("class") || "") && h[e]
        },
        v = function(t, e) {
          y(t, e) || t.setAttribute("class", (t[c]("class") || "").trim() + " " + e)
        },
        z = function(t, e) {
          var o;
          (o = y(t, e)) && t.setAttribute("class", (t[c]("class") || "").replace(o, " "))
        },
        w = function(t, e, o) {
          var i = o ? l : "removeEventListener";
          o && w(t, e), g.forEach(function(o) {
            t[i](o, e)
          })
        },
        C = function(t, e, n, a, r) {
          var s = o.createEvent("CustomEvent");
          return n || (n = {}), n.instance = i, s.initCustomEvent(e, !a, !r, n), t.dispatchEvent(s), s
        },
        x = function(t, o) {
          var i;
          !s && (i = e.picturefill || n.pf) ? i({
            reevaluate: !0,
            elements: [t]
          }) : o && o.src && (t.src = o.src)
        },
        E = function(t, e) {
          return (getComputedStyle(t, null) || {})[e]
        },
        j = function(t, e, o) {
          for (o = o || t.offsetWidth; o < n.minSize && e && !t._lazysizesWidth;) o = e.offsetWidth, e = e.parentNode;
          return o
        },
        A = function() {
          var t, e, i = [],
            n = [],
            a = i,
            r = function() {
              var o = a;
              for (a = i.length ? n : i, t = !0, e = !1; o.length;) o.shift()();
              t = !1
            },
            s = function(i, n) {
              t && !n ? i.apply(this, arguments) : (a.push(i), e || (e = !0, (o.hidden ? u : f)(r)))
            };
          return s._lsFlush = r, s
        }(),
        k = function(t, e) {
          return e ? function() {
            A(t)
          } : function() {
            var e = this,
              o = arguments;
            A(function() {
              t.apply(e, o)
            })
          }
        },
        M = function(t) {
          var e, o = 0,
            i = 125,
            n = 666,
            a = n,
            s = function() {
              e = !1, o = r.now(), t()
            },
            l = p ? function() {
              p(s, {
                timeout: a
              }), a !== n && (a = n)
            } : k(function() {
              u(s)
            }, !0);
          return function(t) {
            var n;
            (t = t === !0) && (a = 44), e || (e = !0, n = i - (r.now() - o), n < 0 && (n = 0), t || n < 9 && p ? l() : u(l, n))
          }
        },
        B = function(t) {
          var e, o, i = 99,
            n = function() {
              e = null, t()
            },
            a = function() {
              var t = r.now() - o;
              t < i ? u(a, i - t) : (p || n)(n)
            };
          return function() {
            o = r.now(), e || (e = u(a, i))
          }
        },
        P = function() {
          var t, s, f, p, g, h, j, P, Y, _, I, O, T, D, S = /^img$/i,
            W = /^iframe$/i,
            F = "onscroll" in e && !/glebot/.test(navigator.userAgent),
            L = 0,
            R = 0,
            q = 0,
            H = -1,
            X = function(t) {
              q--, t && t.target && w(t.target, X), (!t || q < 0 || !t.target) && (q = 0)
            },
            Q = function(t, e) {
              var i, n = t,
                r = "hidden" == E(o.body, "visibility") || "hidden" != E(t, "visibility");
              for (P -= e, I += e, Y -= e, _ += e; r && (n = n.offsetParent) && n != o.body && n != a;) r = (E(n, "opacity") || 1) > 0, r && "visible" != E(n, "overflow") && (i = n.getBoundingClientRect(), r = _ > i.left && Y < i.right && I > i.top - 1 && P < i.bottom + 1);
              return r
            },
            G = function() {
              var e, r, l, d, u, f, m, g, b, y = i.elements;
              if ((p = n.loadMode) && q < 8 && (e = y.length)) {
                r = 0, H++, null == T && ("expand" in n || (n.expand = a.clientHeight > 500 && a.clientWidth > 500 ? 500 : 370), O = n.expand, T = O * n.expFactor), R < T && q < 1 && H > 2 && p > 2 && !o.hidden ? (R = T, H = 0) : R = p > 1 && H > 1 && q < 6 ? O : L;
                for (; r < e; r++)
                  if (y[r] && !y[r]._lazyRace)
                    if (F)
                      if ((g = y[r][c]("data-expand")) && (f = 1 * g) || (f = R), b !== f && (h = innerWidth + f * D, j = innerHeight + f, m = f * -1, b = f), l = y[r].getBoundingClientRect(), (I = l.bottom) >= m && (P = l.top) <= j && (_ = l.right) >= m * D && (Y = l.left) <= h && (I || _ || Y || P) && (n.loadHidden || "hidden" != E(y[r], "visibility")) && (s && q < 3 && !g && (p < 3 || H < 4) || Q(y[r], f))) {
                        if (ot(y[r]), u = !0, q > 9) break
                      } else !u && s && !d && q < 4 && H < 4 && p > 2 && (t[0] || n.preloadAfterLoad) && (t[0] || !g && (I || _ || Y || P || "auto" != y[r][c](n.sizesAttr))) && (d = t[0] || y[r]);
                else ot(y[r]);
                d && !u && ot(d)
              }
            },
            J = M(G),
            K = function(t) {
              v(t.target, n.loadedClass), z(t.target, n.loadingClass), w(t.target, V), C(t.target, "lazyloaded")
            },
            U = k(K),
            V = function(t) {
              U({
                target: t.target
              })
            },
            Z = function(t, e) {
              try {
                t.contentWindow.location.replace(e)
              } catch (o) {
                t.src = e
              }
            },
            tt = function(t) {
              var e, o = t[c](n.srcsetAttr);
              (e = n.customMedia[t[c]("data-media") || t[c]("media")]) && t.setAttribute("media", e), o && t.setAttribute("srcset", o)
            },
            et = k(function(t, e, o, i, a) {
              var r, s, l, d, p, g;
              (p = C(t, "lazybeforeunveil", e)).defaultPrevented || (i && (o ? v(t, n.autosizesClass) : t.setAttribute("sizes", i)), s = t[c](n.srcsetAttr), r = t[c](n.srcAttr), a && (l = t.parentNode, d = l && m.test(l.nodeName || "")), g = e.firesLoad || "src" in t && (s || r || d), p = {
                target: t
              }, g && (w(t, X, !0), clearTimeout(f), f = u(X, 2500), v(t, n.loadingClass), w(t, V, !0)), d && b.call(l.getElementsByTagName("source"), tt), s ? t.setAttribute("srcset", s) : r && !d && (W.test(t.nodeName) ? Z(t, r) : t.src = r), a && (s || d) && x(t, {
                src: r
              })), t._lazyRace && delete t._lazyRace, z(t, n.lazyClass), A(function() {
                (!g || t.complete && t.naturalWidth > 1) && (g ? X(p) : q--, K(p))
              }, !0)
            }),
            ot = function(t) {
              var e, o = S.test(t.nodeName),
                i = o && (t[c](n.sizesAttr) || t[c]("sizes")),
                a = "auto" == i;
              (!a && s || !o || !t[c]("src") && !t.srcset || t.complete || y(t, n.errorClass)) && (e = C(t, "lazyunveilread").detail, a && N.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, q++, et(t, e, a, i, o))
            },
            it = function() {
              if (!s) {
                if (r.now() - g < 999) return void u(it, 999);
                var t = B(function() {
                  n.loadMode = 3, J()
                });
                s = !0, n.loadMode = 3, J(), d("scroll", function() {
                  3 == n.loadMode && (n.loadMode = 2), t()
                }, !0)
              }
            };
          return {
            _: function() {
              g = r.now(), i.elements = o.getElementsByClassName(n.lazyClass), t = o.getElementsByClassName(n.lazyClass + " " + n.preloadClass), D = n.hFac, d("scroll", J, !0), d("resize", J, !0), e.MutationObserver ? new MutationObserver(J).observe(a, {
                childList: !0,
                subtree: !0,
                attributes: !0
              }) : (a[l]("DOMNodeInserted", J, !0), a[l]("DOMAttrModified", J, !0), setInterval(J, 999)), d("hashchange", J, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                o[l](t, J, !0)
              }), /d$|^c/.test(o.readyState) ? it() : (d("load", it), o[l]("DOMContentLoaded", J), u(it, 2e4)), i.elements.length ? (G(), A._lsFlush()) : J()
            },
            checkElems: J,
            unveil: ot
          }
        }(),
        N = function() {
          var t, e = k(function(t, e, o, i) {
              var n, a, r;
              if (t._lazysizesWidth = i, i += "px", t.setAttribute("sizes", i), m.test(e.nodeName || ""))
                for (n = e.getElementsByTagName("source"), a = 0, r = n.length; a < r; a++) n[a].setAttribute("sizes", i);
              o.detail.dataAttr || x(t, o.detail)
            }),
            i = function(t, o, i) {
              var n, a = t.parentNode;
              a && (i = j(t, a, i), n = C(t, "lazybeforesizes", {
                width: i,
                dataAttr: !!o
              }), n.defaultPrevented || (i = n.detail.width, i && i !== t._lazysizesWidth && e(t, a, n, i)))
            },
            a = function() {
              var e, o = t.length;
              if (o)
                for (e = 0; e < o; e++) i(t[e])
            },
            r = B(a);
          return {
            _: function() {
              t = o.getElementsByClassName(n.autosizesClass), d("resize", r)
            },
            checkElems: r,
            updateElem: i
          }
        }(),
        Y = function() {
          Y.i || (Y.i = !0, N._(), P._())
        };
      return function() {
        var t, o = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: .8,
          loadMode: 2,
          loadHidden: !0
        };
        n = e.lazySizesConfig || e.lazysizesConfig || {};
        for (t in o) t in n || (n[t] = o[t]);
        e.lazySizesConfig = n, u(function() {
          n.init && Y()
        })
      }(), i = {
        cfg: n,
        autoSizer: N,
        loader: P,
        init: Y,
        uP: x,
        aC: v,
        rC: z,
        hC: y,
        fire: C,
        gW: j,
        rAF: A
      }
    }
  }), $(window).on("load", function() {
    $(".cell-project").delay(0).queue(function(t) {
      $(this).css({
        padding: "17px 55px 10px 0"
      }), t()
    }), $(".storyContainer").css({
      transform: "scale(1)",
      opacity: "1"
    }), $(".storyContainer").delay(1e3).queue(function(t) {
      $(this).removeClass("ease"), t()
    })
  }), $(document).ready(function() {
    var t = ["About"],
      e = {
        x: 0,
        y: 0
      };
    $(document).mousemove(function(o) {
      var i = t[Math.floor(Math.random() * t.length)],
        n = $(".serviceCarousel p");
      (o.pageX > e.x + 50 || o.pageY > e.y + 50 || o.pageY < e.y - 50 || o.pageX < e.x - 50) && (e.x = o.pageX, e.y = o.pageY, n.stop().animate({
        opacity: "1"
      }, 1, function() {
        $(this).text(i), $(this).stop().animate({
          opacity: "1"
        }, 1)
      }))
    }), $(".closeBtn").click(function() {
      $(".storyContainer").addClass("ease"), $(".storyContainer").css({
        transform: "scale(0)",
        opacity: "0"
      })
    }), $(".storyContainer").draggable({
      grid: !1,
      snap: "body",
      snapMode: "inner",
      snapTolerance: 40,
      start: function(t, e) {
        $(this).css({
          left: "auto",
          right: "auto",
          top: "auto",
          bottom: "auto"
        })
      },
      stop: function(t, e) {
        var o = $(window).width() / 2,
          i = $(window).height() / 2;
        e.position.left > o ? $(this).css({
          left: "auto",
          right: 15
        }) : $(this).css({
          right: "auto",
          left: 15
        }), e.position.top > i ? $(this).css({
          top: "auto",
          bottom: 15
        }) : $(this).css({
          bottom: "auto",
          top: 15
        })
      }
    }), $("header").fadeIn(), new Clipboard(".btn-clipboard"), $(".btn-clipboard").click(function() {
      $(".btn-clipboard").text("Copied!")
    }), $(".table-row").hover(function() {
      $('.project-thumb-big[data-project="' + $(this).attr("href") + '"]').fadeIn(0), $(".table-row:nth-child(2)").css({
        opacity: "0.3"
      }), $(".project-thumb-big").css({
        filter: "gray",
        "-webkit-filter": "grayscale(0%)"
      })
    }, function() {
      $('.project-thumb-big[data-project="' + $(this).attr("href") + '"]').fadeOut(0), $(".project-thumb-big:first-child").fadeIn(0), $(".project-thumb-big").css({
        "-webkit-filter": "grayscale(100%)"
      }), $(".table-row:nth-child(2)").css({
        opacity: "1"
      }), $(".table-row:nth-child(2)").hover(function() {
        $(".table-row:nth-child(2)").css({
          opacity: "1"
        })
      })
    });
    var o = $("body").css("background-color");
    "rgb(17, 17, 17)" === o ? ($("body, .logo, nav a, p, a").css({
        color: "#fff"
      }), $("footer").css({
        "background-color": "rgba(0, 0, 0, 0.85)"
      }), $("nav svg").css({
        fill: "#fff)"
      }), $(".borderBottom").css({
        "border-bottom": "1px solid white"
      })) : ($("body, .logo, nav a, p, a").css({
        color: "#000"
      }), $(".project-thumb-big p, .project-thumb-big").css({
        color: "#fff"
      }), $("svg path").css({
        fill: "#000000"
      }), $("svg").css({
        fill: "#000)"
      }), $(".borderBottom").css({
        "border-bottom": "1px solid black"
      }), $("#Star").css({
        fill: "#000000"
      }), $("header").delay(800).queue(function(t) {
        $(this).css("background-color", "rgba(255, 255, 255, 0.95)"), t()
      })), $(".project-next").hover(function() {
        $("main").css({
          opacity: "0.2"
        }), $(".image-hover").css({
          bottom: "70px",
          visibility: "visible",
          opacity: "1"
        })
      }, function() {
        $("main").css({
          opacity: "1"
        }), $(".image-hover").css({
          bottom: "60px",
          visibility: "hidden",
          opacity: "0"
        })
      }), $(".scroll").click(function(t) {
        t.preventDefault(), $("html,body").animate({
          scrollTop: $(this.hash).offset().top
        }, 600, "easeInOutCubic")
      }),
      function($) {
        var t = !1,
          e = $("<div/>", {
            appendTo: "body",
            id: "tooltip"
          });
        $(document).mousemove(function(o) {
          t && e.css({
            top: o.pageY + 20,
            left: o.pageX + 20
          })
        }), $.fn.tooltip = function() {
          return this.each(function() {
            $(this).hover(function() {
              t = !0, e.html($(this).data("tooltip")).fadeTo(300, 1)
            }, function() {
              t = !1, e.hide()
            })
          })
        }
      }(jQuery), $(".project-thumb").tooltip()
  }), $(".project-thumb").hover(function() {
    $("#tooltip").css({
      "background-color": "white",
      padding: "20px"
    })
  }, function() {}), $(".all-projects").click(function() {
    $(".overlay").fadeIn(), $(".overlay").css({
      top: "20%"
    }), $(".overlay-bg").delay(300).fadeIn(), $(".headerProjects").css({
      top: "25px"
    }), $(".axis").css({
      "-webkit-transform": "rotateY(0deg)",
      "-moz-transform": "rotateY(0deg)",
      "-o-transform": "rotateY(0deg)",
      "-ms-transform": "rotateY(0deg)",
      transform: "rotateY(0deg)",
      opacity: "1"
    })
  }), $(".overlay-bg, .closeProjects").click(function() {
    $(".overlay").fadeOut(), $(".overlay").css({
      top: "100%"
    }), $(".overlay-bg").fadeOut(), $(".blurredBody, header").css({
      "-webkit-filter": "blur(0px)",
      "-moz-filter": "blur(0px)",
      "-o-filter": "blur(0px)",
      filter: "blur(0px)"
    }), $(".blurredBody").css({
      "margin-top": "0px"
    }), $(".headerProjects").css({
      top: "-25px"
    }), $(".axis").delay(200).queue(function(t) {
      $(this).css({
        "-webkit-transform": "rotateY(-30deg)",
        "-moz-transform": "rotateY(-30deg)",
        "-o-transform": "rotateY(-30deg)",
        "-ms-transform": "rotateY(-30deg)",
        transform: "rotateY(-30deg)",
        opacity: "0.5"
      }), t()
    })
  }), $(".overlay-bg").hover(function() {
    $(".overlay").css({
      "margin-top": "150px"
    })
  }, function() {
    $(".overlay").css({
      "margin-top": "0px"
    })
  });
var percent = .2;
$(window).scroll(function() {
  $(window).scrollTop() < percent && ($(".overlay").fadeOut(), $(".overlay").css({
    top: "100%"
  }), $(".overlay-bg").fadeOut(), $(".blurredBody, header").css({
    "-webkit-filter": "blur(0px)",
    "-moz-filter": "blur(0px)",
    "-o-filter": "blur(0px)",
    filter: "blur(0px)"
  }), $(".headerProjects").css({
    top: "-25px"
  }), $(".blurredBody").css({
    "margin-top": "0px"
  })), $(window).scrollTop() > 200 ? $(".closeProjects").fadeIn(300) : $(".closeProjects").fadeOut()
}), $(window).scroll(function() {
  $(window).scrollTop() + $(window).height() > $(document).height() - 100 ? ($(".project-to-top").css({
    "padding-top": "4px",
    visibility: "visible"
  }), $(".project-info").fadeOut()) : ($(".project-to-top").css({
    "padding-top": "54px",
    visibility: "hidden"
  }), $(".project-info").fadeIn())
});
