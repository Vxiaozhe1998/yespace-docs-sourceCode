!(function (e) {
  var t,
    n,
    c,
    o,
    i,
    d =
      '<svg><symbol id="yyzb" viewBox="0 0 1024 1024"><path d="M501.097 819.37l11.466 11.807 11.469-11.807c0.717-0.717 71.434-73.667 141.172-163.211 95.188-122.172 143.47-216.060 143.47-279.039 0-73.71-31.012-142.91-87.29-194.842-55.839-51.571-130.027-79.971-208.822-79.971-78.814 0-152.979 28.399-208.82 79.97-56.299 51.933-87.291 121.133-87.291 194.842 0 62.979 48.282 156.867 143.468 279.039 69.741 89.545 140.458 162.495 141.177 163.212zM512.561 277.126c56.38 0 102.268 46.546 102.268 103.743 0 57.235-45.888 103.78-102.268 103.78-56.377 0-102.266-46.546-102.266-103.78 0-57.197 45.889-103.743 102.266-103.743zM686.902 753.717l-25.627 25.607c16.793 10.81 26.722 22.895 26.722 34.543 0 32.986-76.142 69.837-178.068 69.837-101.927 0-178.069-36.852-178.069-69.837 0-12.724 11.548-25.967 31.33-37.534l-23.214-27.359c-27.142 17.628-43.077 39.965-43.077 64.853 0 60.028 91.557 105.298 213.030 105.298 121.472 0 213.009-45.231 213.009-105.298-0.038-22.656-13.162-43.278-36.035-60.109z"  ></path></symbol><symbol id="yyjiaofuriqi" viewBox="0 0 1024 1024"><path d="M718.6 227.3c13.2 0 24.5-8.2 24.5-18.6V83.3c0-10.4-10.9-18.6-24.5-18.6-13.2 0-24.1 8.2-24.1 18.6v125.3c0 10.5 10.5 18.7 24.1 18.7zM305.4 227.3c13.2 0 24.1-8.2 24.1-18.6V83.3c0-10.4-10.9-18.6-24.1-18.6-13.2 0-24.5 8.2-24.5 18.6v125.3c0 10.5 10.9 18.7 24.5 18.7z"  ></path><path d="M949.3 230.9c0-47.7-44-86.3-98.5-86.3H770v64.5c0 24.5-22.7 44.5-50.9 44.5s-50.9-20-50.9-44.5v-64.5H354.9v64.5c0 24.5-22.7 44.5-50.9 44.5s-50.9-20-50.9-44.5v-64.5h-79.9c-54.5 0-98.5 38.6-98.5 86.3V319h875v-88.1h-0.4zM74.3 873c0 47.7 44 86.3 98.5 86.3h677.5c54.5 0 98.5-38.6 98.5-86.3V363.1H74.3V873z m238.4-255.2c14.5-12.7 38.6-8.2 51.3 6.4L469.3 745 680 503c12.7-14.5 35-16.8 50.9-5.4 16.3 11.8 11.8 40 1.4 50.4L492.5 824c-12.7 14.5-33.1 14.5-45.9 0l-134-153c-12.2-14.6-15.4-39.6 0.1-53.2z"  ></path></symbol></svg>',
    l = (l = document.getElementsByTagName("script"))[
      l.length - 1
    ].getAttribute("data-injectcss"),
    a = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    i || ((i = !0), c());
  }
  function r() {
    try {
      o.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function () {
    var e, t;
    ((t = document.createElement("div")).innerHTML = d),
      (d = null),
      (e = t.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (e = document.body).firstChild ? a(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((c = t),
        (o = e.document),
        (i = !1),
        r(),
        (o.onreadystatechange = function () {
          "complete" == o.readyState && ((o.onreadystatechange = null), s());
        }));
})(window);
