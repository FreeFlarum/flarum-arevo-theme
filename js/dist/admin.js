(() => {
  var e = {
      n: (r) => {
        var o = r && r.__esModule ? () => r.default : () => r;
        return e.d(o, { a: o }), o;
      },
      d: (r, o) => {
        for (var a in o) e.o(o, a) && !e.o(r, a) && Object.defineProperty(r, a, { enumerable: !0, get: o[a] });
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
    const a = flarum.core.compat['admin/app'];
    e.n(a)().initializers.add('freeflarum/flarum-arevo-theme', function () {
      console.log('[freeflarum/flarum-arevo-theme] Admin loaded!');
    });
  })(),
    (module.exports = r);
})();
//# sourceMappingURL=admin.js.map
