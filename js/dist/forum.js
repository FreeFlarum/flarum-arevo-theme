(() => {
  var e = {
      n: (r) => {
        var o = r && r.__esModule ? () => r.default : () => r;
        return e.d(o, { a: o }), o;
      },
      d: (r, o) => {
        for (var t in o) e.o(o, t) && !e.o(r, t) && Object.defineProperty(r, t, { enumerable: !0, get: o[t] });
      },
      o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
      r: (e) => {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    r = {};
  (() => {
    'use strict';
    e.r(r);
    const o = flarum.core.compat['common/app'];
    e.n(o)().initializers.add('freeflarum/flarum-arevo-theme', function () {
      console.log('[freeflarum/flarum-arevo-theme] Arevo loaded!');
    });
    const t = flarum.core.compat['forum/app'];
    e.n(t)().initializers.add('freeflarum/flarum-arevo-theme', function () {
      if (window.innerWidth > 768) {
        var e = document.querySelector('.item-newDiscussion');
        e.classList.add('new__item-newDiscussion');
        var r = document.querySelector('#header-secondary .item-search');
        r.parentNode.insertBefore(e, r.nextSibling);
      }
    });
  })(),
    (module.exports = r);
})();
//# sourceMappingURL=forum.js.map
