"use strict";

/*
* Kohost v1.0.0 (https://themeforest.net/user/themetags)
* Copyright 2020 Themetags
* Licensed under ThemeForest License
*/
// TABLE OF CONTENTS
//  1. preloader
//  2. page scrolling feature - requires jQuery Easing plugin
//  3. fixed navbar
//  4. back to top
//  5. counter up js
//  6. tooltip
//  7. our clients logo carousel
//  8. magnify popup video
// 9. client-testimonial one item carousel
// 10. client-testimonial two
// 11. monthly and yearly pricing switch
// 12. coming soon count
// 13. contact form
// 14. custom vps hosting plan js
jQuery(function ($) {
  'use strict'; // 1. preloader

  $(window).ready(function () {
    $('#preloader').delay(200).fadeOut('fade');
  }); // 2. mega menu js

  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 767.98,
    hideTimeOut: 0
  }); // Off Canvas Menu Open & Close

  $('#offCanvas').on('click', function () {
    $('.nav-offcanvas').addClass('open');
    $('.offcanvas-overlay').addClass('on');
  });
  $('#offCanvasClose, .offcanvas-overlay').on('click', function () {
    $('.nav-offcanvas').removeClass('open');
    $('.offcanvas-overlay').removeClass('on');
  }); // 3. fixed navbar

  $(window).on('scroll', function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 0) {
      $('.main-header-menu-wrap').addClass('affix');
      $('.scroll-to-target').addClass('open');
    } else {
      $('.main-header-menu-wrap').removeClass('affix');
      $('.scroll-to-target').removeClass('open');
    } // checks if window is scrolled more than 500px, adds/removes top to target class


    if ($(this).scrollTop() > 500) {
      $('.scroll-to-target').addClass('open');
    } else {
      $('.scroll-to-target').removeClass('open');
    }
  }); // 4. back to top

  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target'); // animate

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
    });
  } // 5. counter up js


  $('.count-number').rCounter(); // 6. tooltip

  $('.custom-map-location li span').tooltip('show');
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); // 7. our clients logo carousel

  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }); // 8. magnify popup video

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  }); // 9. client-testimonial one item carousel

  $('.client-testimonial-1').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  }); // 10. client-testimonial one item carousel

  $('.client-testimonial-2').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  }); // 11. monthly and yearly pricing switch

  $("#js-contcheckbox").change(function () {
    if (this.checked) {
      $('.monthly-price').css('display', 'none');
      $('.yearly-price').css('display', 'block');
      $('.afterinput').addClass('text-success');
      $('.beforeinput').removeClass('text-success');
    } else {
      $('.monthly-price').css('display', 'block');
      $('.yearly-price').css('display', 'none');
      $('.afterinput').removeClass('text-success');
      $('.beforeinput').addClass('text-success');
    }
  }); // 12. coming soon count

  $('#clock').countdown('2022/06/17', function (event) {
    $(this).html(event.strftime('' + '<div class="row">' + '<div class="col">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Jour(s)</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Heure(s)</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minute(s)</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconde(s)</h5>' + '</div>' + '</div>'));
  }); // 13. contact form

  if ($("#contactForm").length) {
    $("#contactForm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        submitMSG(false, '#contact');
      } else {
        // everything looks good!
        event.preventDefault();
        submitContactForm();
      }
    });
  }

  function submitContactForm() {
    // Initiate Variables With Form Content
    var name = $('#contactForm input[name="name"]').val();
    var email = $('#contactForm input[name="email"]').val();
    var message = $('#contactForm textarea[name="message"]').val();

    if (name && email && message) {
      $.ajax({
        type: "POST",
        url: "libs/contact-form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function success(text) {
          if (text == "success") {
            formSuccess();
          } else {
            submitMSG(false, '#contact');
          }
        }
      });
    } else {
      submitMSG(false, '#contact');
    }
  }

  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, '#contact');
  }

  function submitMSG(valid, parentSelector) {
    if (valid) {
      $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
      $(parentSelector + " .message-box div").removeClass('alert-danger').addClass('alert-success').text('Form submitted successfully');
    } else {
      $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
      $(parentSelector + " .message-box div").removeClass('alert-success').addClass('alert-danger').text('Found error in the form. Please check again.');
    }
  } // 14. custom vps hosting plan js
  //**************************** Need to change ********************
  // Change according to your plans
  //****************************************************************
  // vpsPlan      = VPS plan or package number
  // vpsCore      = VPS Core value from your plan
  // vpsMemory    = VPS Memory from your plan
  // vpsStorage   = VPS Storage value from your plan
  // vpsBandwidth = VPS bandwidth value from your plan
  // vpsPrice     = VPS price from your plan
  // vpsWHmcsUrl  = VPS plan url. Check from your WHMCS panel
  //****************************************************************


  var vpsPriceInfo = [{
    "vpsPlan": 1,
    "vpsCore": "8-24",
    "vpsMemory": 512,
    "vpsStorage": 30,
    "vpsBandwidth": 125,
    "vpsPrice": 9.99,
    "vpsWHmcsUrl": "https://ifastnet.com/portal/cart.php?aff=28302&a=confproduct&i=1"
  }, {
    "vpsPlan": 2,
    "vpsCore": "8-24",
    "vpsMemory": 756,
    "vpsStorage": 40,
    "vpsBandwidth": 200,
    "vpsPrice": 19.99,
    "vpsWHmcsUrl": "https://ifastnet.com/portal/cart.php?aff=28302&a=confproduct&i=3"
  }, {
    "vpsPlan": 3,
    "vpsCore": "8-24",
    "vpsMemory": 1024,
    "vpsStorage": 50,
    "vpsBandwidth": 300,
    "vpsPrice": 29.99,
    "vpsWHmcsUrl": "https://ifastnet.com/portal/cart.php?aff=28302&a=confproduct&i=4"
  }, {
    "vpsPlan": 4,
    "vpsCore": "8-24",
    "vpsMemory": 1256,
    "vpsStorage": 80,
    "vpsBandwidth": 400,
    "vpsPrice": 42.99,
    "vpsWHmcsUrl": "https://ifastnet.com/portal/cart.php?aff=28302&a=confproduct&i=5"
  }, {
    "vpsPlan": 5,
    "vpsCore": "8-24",
    "vpsMemory": 1512,
    "vpsStorage": 125,
    "vpsBandwidth": 600,
    "vpsPrice": 55.99,
    "vpsWHmcsUrl": "https://ifastnet.com/portal/cart.php?aff=28302&a=confproduct&i=6"
  }, {
    "vpsPlan": 6,
    "vpsCore": "8-24",
    "vpsMemory": 2048,
    "vpsStorage": 200,
    "vpsBandwidth": 1000,
    "vpsPrice": 65.99,
    "vpsWHmcsUrl": "https://ifastnet.com/portal/cart.php?aff=28302&a=confproduct&i=7"
  }];
  var cPlan = $('#c-plan');

  if (cPlan.length) {
    cPlan.slider({
      tooltip: 'always'
    });
    cPlan.on("slide", function (e) {
      $.each(vpsPriceInfo, function (index, vpsObj) {
        if (vpsObj.vpsPlan == e.value) {
          setVpsValue(vpsObj);
        }
      });
    });
    initSlider();
  }

  function initSlider() {
    cPlan.value = cPlan.data("slider-value");
    var defaultVpsCore = parseInt(cPlan.value);
    $.each(vpsPriceInfo, function (index, vpsObj) {
      // defaultVpsCore is default valeu to show. For my demo, I have set 6 from HTML.
      // vps-hosting.html: <input id="c-plan" type="text" data-slider-min="1" data-slider-max="12" data-slider-step="1" data-slider-value="6" data-currency="$" data-unit="GB">. 
      // You need to change accourting to your need.
      if (vpsObj.vpsPlan == defaultVpsCore) {
        $('.slider .tooltip', '#custom-plan').append('<div class="tooltip-up"></div>');
        $('.slider .tooltip-inner', '#custom-plan').attr("data-unit", cPlan.data("unit"));
        $('.slider .tooltip-up', '#custom-plan').attr("data-currency", cPlan.data("currency"));
        setVpsValue(vpsObj);
      }
    });
  }

  function setVpsValue(vpsObj) {
    $('.slider .tooltip-up', '#custom-plan').text(vpsObj.vpsPrice);
    $('.vpsPrice', '#custom-plan').text(cPlan.data("currency") + vpsObj.vpsPrice);
    $('.vpsCore span', '#custom-plan').text(vpsObj.vpsCore);
    $('.vpsMemory span', '#custom-plan').text(vpsObj.vpsMemory);
    $('.vpsStorage span', '#custom-plan').text(vpsObj.vpsStorage);
    $('.vpsBandwidth span', '#custom-plan').text(vpsObj.vpsBandwidth);
    $('.vpsWHmcsUrl', '#custom-plan').attr("href", vpsObj.vpsWHmcsUrl);
  } // 16. hero slider one


  $('.hero-slider-one').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    margin: 0,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    animateOut: "slideOutLeft",
    animateIn: "slideInRight"
  });
}); // JQuery end
// FontAwesome Pro start
window.FontAwesomeKitConfig = {
    "asyncLoading": {
        "enabled": false
    },
    "autoA11y": {
        "enabled": true
    },
    "baseUrl": "https://kit-pro.fontawesome.com",
    "detectConflictsUntil": null,
    "license": "pro",
    "method": "css",
    "minify": {
        "enabled": true
    },
    "v4FontFaceShim": {
        "enabled": true
    },
    "v4shim": {
        "enabled": true
    },
    "version": "latest"
};
! function() {
    function r(e) {
        var t, n = [],
            i = document,
            o = i.documentElement.doScroll,
            r = "DOMContentLoaded",
            a = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
        a || i.addEventListener(r, t = function() {
            for (i.removeEventListener(r, t), a = 1; t = n.shift();) t()
        }), a ? setTimeout(e, 0) : n.push(e)
    }! function() {
        if (!(void 0 === window.Element || "classList" in document.documentElement)) {
            var e, t, n, i = Array.prototype,
                o = i.push,
                r = i.splice,
                a = i.join;
            d.prototype = {
                add: function(e) {
                    this.contains(e) || (o.call(this, e), this.el.className = this.toString())
                },
                contains: function(e) {
                    return -1 != this.el.className.indexOf(e)
                },
                item: function(e) {
                    return this[e] || null
                },
                remove: function(e) {
                    if (this.contains(e)) {
                        for (var t = 0; t < this.length && this[t] != e; t++);
                        r.call(this, t, 1), this.el.className = this.toString()
                    }
                },
                toString: function() {
                    return a.call(this, " ")
                },
                toggle: function(e) {
                    return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
                }
            }, window.DOMTokenList = d, e = Element.prototype, t = "classList", n = function() {
                return new d(this)
            }, Object.defineProperty ? Object.defineProperty(e, t, {
                get: n
            }) : e.__defineGetter__(t, n)
        }

        function d(e) {
            for (var t = (this.el = e).className.replace(/^\s+|\s+$/g, "").split(/\s+/), n = 0; n < t.length; n++) o.call(this, t[n])
        }
    }();

    function a(e) {
        var t, n, i, o;
        prefixesArray = e || ["fa"], prefixesSelectorString = "." + Array.prototype.join.call(e, ",."), t = document.querySelectorAll(prefixesSelectorString), Array.prototype.forEach.call(t, function(e) {
            n = e.getAttribute("title"), e.setAttribute("aria-hidden", "true"), i = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only"), n && i && ((o = document.createElement("span")).innerHTML = n, o.classList.add("sr-only"), e.parentNode.insertBefore(o, e.nextSibling))
        })
    }
    var d = function(e, t) {
            var n = document.createElement("link");
            n.href = e, n.media = "all", n.rel = "stylesheet", t && t.detectingConflicts && t.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)), document.getElementsByTagName("head")[0].appendChild(n)
        },
        c = function(e, t) {
            ! function(e, t) {
                var n, i = t && t.before || void 0,
                    o = t && t.media || void 0,
                    r = window.document,
                    a = r.createElement("link");
                if (t && t.detectingConflicts && t.detectionIgnoreAttr && a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)), i) n = i;
                else {
                    var d = (r.body || r.getElementsByTagName("head")[0]).childNodes;
                    n = d[d.length - 1]
                }
                var c = r.styleSheets;
                a.rel = "stylesheet", a.href = e, a.media = "only x",
                    function e(t) {
                        if (r.body) return t();
                        setTimeout(function() {
                            e(t)
                        })
                    }(function() {
                        n.parentNode.insertBefore(a, i ? n : n.nextSibling)
                    });
                var s = function(e) {
                    for (var t = a.href, n = c.length; n--;)
                        if (c[n].href === t) return e();
                    setTimeout(function() {
                        s(e)
                    })
                };

                function l() {
                    a.addEventListener && a.removeEventListener("load", l), a.media = o || "all"
                }
                a.addEventListener && a.addEventListener("load", l), (a.onloadcssdefined = s)(l)
            }(e, t)
        },
        e = function(e, t, n) {
            var i = t && void 0 !== t.autoFetchSvg ? t.autoFetchSvg : void 0,
                o = t && void 0 !== t.async ? t.async : void 0,
                r = t && void 0 !== t.autoA11y ? t.autoA11y : void 0,
                a = document.createElement("script"),
                d = document.scripts[0];
            a.src = e, void 0 !== r && a.setAttribute("data-auto-a11y", r ? "true" : "false"), i && (a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), a.setAttribute("data-fetch-svg-from", t.fetchSvgFrom)), o && a.setAttributeNode(document.createAttribute("defer")), n && n.detectingConflicts && n.detectionIgnoreAttr && a.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)), d.parentNode.appendChild(a)
        };

    function s(e, t) {
        var n = t && t.addOn || "",
            i = t && t.baseFilename || e.license + n,
            o = t && t.minify ? ".min" : "",
            r = t && t.fileSuffix || e.method,
            a = t && t.subdir || e.method;
        return e.baseUrl + "/releases/" + ("latest" === e.version ? "latest" : "v".concat(e.version)) + "/" + a + "/" + i + o + "." + r
    }
    var t, n, i, o, l;
    try {
        if (window.FontAwesomeKitConfig) {
            var u, f = window.FontAwesomeKitConfig,
                m = {
                    detectingConflicts: f.detectConflictsUntil && new Date <= new Date(f.detectConflictsUntil),
                    detectionIgnoreAttr: "data-fa-detection-ignore",
                    detectionTimeoutAttr: "data-fa-detection-timeout",
                    detectionTimeout: null
                };
            "js" === f.method && (o = m, l = {
                async: (i = f).asyncLoading.enabled,
                autoA11y: i.autoA11y.enabled
            }, "pro" === i.license && (l.autoFetchSvg = !0, l.fetchSvgFrom = i.baseUrl + "/releases/" + ("latest" === i.version ? "latest" : "v".concat(i.version)) + "/svgs"), i.v4shim.enabled && e(s(i, {
                addOn: "-v4-shims",
                minify: i.minify.enabled
            })), e(s(i, {
                minify: i.minify.enabled
            }), l, o)), "css" === f.method && function(e, t) {
                var n, i = a.bind(a, ["fa", "fab", "fas", "far", "fal", "fad"]);
                e.autoA11y.enabled && (r(i), n = i, "undefined" != typeof MutationObserver && new MutationObserver(n).observe(document, {
                    childList: !0,
                    subtree: !0
                })), e.v4shim.enabled && (e.license, e.asyncLoading.enabled ? c(s(e, {
                    addOn: "-v4-shims",
                    minify: e.minify.enabled
                }), t) : d(s(e, {
                    addOn: "-v4-shims",
                    minify: e.minify.enabled
                }), t));
                e.v4FontFaceShim.enabled && (e.asyncLoading.enabled ? c(s(e, {
                    addOn: "-v4-font-face",
                    minify: e.minify.enabled
                }), t) : d(s(e, {
                    addOn: "-v4-font-face",
                    minify: e.minify.enabled
                }), t));
                var o = s(e, {
                    minify: e.minify.enabled
                });
                e.asyncLoading.enabled ? c(o, t) : d(o, t)
            }(f, m), m.detectingConflicts && ((u = document.currentScript.getAttribute(m.detectionTimeoutAttr)) && (m.detectionTimeout = u), document.currentScript.setAttributeNode(document.createAttribute(m.detectionIgnoreAttr)), t = f, n = m, r(function() {
                var e = document.createElement("script");
                n && n.detectionIgnoreAttr && e.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)), n && n.detectionTimeoutAttr && n.detectionTimeout && e.setAttribute(n.detectionTimeoutAttr, n.detectionTimeout), e.src = s(t, {
                    baseFilename: "conflict-detection",
                    fileSuffix: "js",
                    subdir: "js",
                    minify: t.minify.enabled
                }), e.async = !0, document.body.appendChild(e)
            }))
        }
    } catch (e) {}
}();