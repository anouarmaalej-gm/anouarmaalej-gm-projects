// ...existing JavaScript from <script> blocks...
this.gbar_ = this.gbar_ || {};
(function (_) {
  var window = this;
  try {
    _.td = function (a, b, c) {
      if (!a.j)
        if (c instanceof Array)
          for (var d of c) _.td(a, b, d);
        else {
          d = (0, _.z)(a.C, a, b);
          const e = a.v + c;
          a.v++;
          b.dataset.eqid = e;
          a.B[e] = d;
          b && b.addEventListener
            ? b.addEventListener(c, d, !1)
            : b && b.attachEvent
            ? b.attachEvent("on" + c, d)
            : a.o.log(Error("D`" + b));
        }
    };
  } catch (e) {
    _._DumpException(e);
  }
})(this.gbar_);
// ...other JavaScript code...
