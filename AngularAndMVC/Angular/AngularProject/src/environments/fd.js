"use strict";
(self.webpackChunkAngularProject = self.webpackChunkAngularProject || []).push([[141], {
  159: (n, t, i) => {
    var e = i(481), r = i(845), o = i(895);

    class f {
    }

    f.ɵfac = function (n) {
      return new (n || f)
    };
    f.ɵcmp = r.Xpm({
      type: f, selectors: [["app-hello-world"]], decls: 2, vars: 0, template: function (n) {
        1 & n && (r.TgZ(0, "p"), r._uU(1, "hello-world works!"), r.qZA())
      }
    });

    class u {
    }

    u.ɵfac = function (n) {
      return new (n || u)
    };
    u.ɵmod = r.oAB({type: u, bootstrap: [f]});
    u.ɵinj = r.cJS({imports: [o.ez, e.b2]});
    e.q6().bootstrapModule(u).catch(n => console.error(n))
  }, 895: (n, t, i) => {
    function o() {
      return u
    }

    function s(n) {
      u || (u = n)
    }

    function l(n, t) {
      t = encodeURIComponent(t);
      for (const i of n.split(";")) {
        const n = i.indexOf("="), [r, u] = -1 == n ? [i, ""] : [i.slice(0, n), i.slice(n + 1)];
        if (r.trim() === t) return decodeURIComponent(u)
      }
      return null
    }

    i.d(t, {
      ED: () => v,
      HT: () => s,
      JF: () => w,
      K0: () => c,
      Mx: () => l,
      RF: () => f,
      bD: () => p,
      ez: () => y,
      n9: () => a,
      q: () => o,
      w_: () => h
    });
    var r = i(845);
    let u = null;

    class h {
    }

    const c = new r.OlP("DocumentToken");

    class e {
      constructor(n, t) {
        this._viewContainerRef = n;
        this._templateRef = t;
        this._created = !1
      }

      create() {
        this._created = !0;
        this._viewContainerRef.createEmbeddedView(this._templateRef)
      }

      destroy() {
        this._created = !1;
        this._viewContainerRef.clear()
      }

      enforceState(n) {
        n && !this._created ? this.create() : !n && this._created && this.destroy()
      }
    }

    let f = (() => {
      class n {
        constructor() {
          this._defaultViews = [];
          this._defaultUsed = !1;
          this._caseCount = 0;
          this._lastCaseCheckIndex = 0;
          this._lastCasesMatched = !1
        }

        set ngSwitch(n) {
          this._ngSwitch = n;
          0 === this._caseCount && this._updateDefaultCases(!0)
        }

        _addCase() {
          return this._caseCount++
        }

        _addDefault(n) {
          this._defaultViews.push(n)
        }

        _matchCase(n) {
          const t = n == this._ngSwitch;
          return this._lastCasesMatched = this._lastCasesMatched || t, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), t
        }

        _updateDefaultCases(n) {
          if (this._defaultViews.length > 0 && n !== this._defaultUsed) {
            this._defaultUsed = n;
            for (const t of this._defaultViews) t.enforceState(n)
          }
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)
      }, n.ɵdir = r.lG2({type: n, selectors: [["", "ngSwitch", ""]], inputs: {ngSwitch: "ngSwitch"}, standalone: !0}), n
    })(), a = (() => {
      class n {
        constructor(n, t, i) {
          this.ngSwitch = i;
          i._addCase();
          this._view = new e(n, t)
        }

        ngDoCheck() {
          this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.Y36(r.s_b), r.Y36(r.Rgc), r.Y36(f, 9))
      }, n.ɵdir = r.lG2({
        type: n,
        selectors: [["", "ngSwitchCase", ""]],
        inputs: {ngSwitchCase: "ngSwitchCase"},
        standalone: !0
      }), n
    })(), v = (() => {
      class n {
        constructor(n, t, i) {
          i._addDefault(new e(n, t))
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.Y36(r.s_b), r.Y36(r.Rgc), r.Y36(f, 9))
      }, n.ɵdir = r.lG2({type: n, selectors: [["", "ngSwitchDefault", ""]], standalone: !0}), n
    })(), y = (() => {
      class n {
      }

      return n.ɵfac = function (t) {
        return new (t || n)
      }, n.ɵmod = r.oAB({type: n}), n.ɵinj = r.cJS({}), n
    })();
    const p = "browser";

    class w {
    }
  }, 845: (n, t, i) => {
    function s(n) {
      return "function" == typeof n
    }

    function go(n) {
      const t = n(n => {
        Error.call(n), n.stack = (new Error).stack
      });
      return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
    }

    function lu(n, t) {
      if (n) {
        const i = n.indexOf(t);
        0 <= i && n.splice(i, 1)
      }
    }

    function ts(n) {
      return n instanceof ut || n && "closed" in n && s(n.remove) && s(n.add) && s(n.unsubscribe)
    }

    function is(n) {
      s(n) ? n() : n.unsubscribe()
    }

    function rs(n) {
      gi.setTimeout(() => {
        const {onUnhandledError: t} = yt;
        if (!t) throw n;
        t(n)
      })
    }

    function us() {
    }

    function au(n, t, i) {
      return {kind: n, value: t, error: i}
    }

    function nr(n) {
      if (yt.useDeprecatedSynchronousErrorHandling) {
        const t = !pt;
        if (t && (pt = {errorThrown: !1, error: null}), n(), t) {
          const {errorThrown: n, error: t} = pt;
          if (pt = null, n) throw t;
        }
      } else n()
    }

    function yu(n, t) {
      return tw.call(n, t)
    }

    function tr(n) {
      yt.useDeprecatedSynchronousErrorHandling ? function (n) {
        yt.useDeprecatedSynchronousErrorHandling && pt && (pt.errorThrown = !0, pt.error = n)
      }(n) : rs(n)
    }

    function pu(n, t) {
      const {onStoppedNotification: i} = yt;
      i && gi.setTimeout(() => i(n, t))
    }

    function fs(n) {
      return n
    }

    function es(n) {
      var t;
      return null !== (t = n ?? yt.Promise) && void 0 !== t ? t : Promise
    }

    function fi(n) {
      return t => {
        if (function (n) {
          return s(n?.lift)
        }(t)) return t.lift(function (t) {
          try {
            return n(t, this)
          } catch (i) {
            this.error(i)
          }
        });
        throw new TypeError("Unable to lift unknown Observable type");
      }
    }

    function ir(n, t, i, r, u) {
      return new fw(n, t, i, r, u)
    }

    function ni(n) {
      return this instanceof ni ? (this.v = n, this) : new ni(n)
    }

    function ew(n, t, i) {
      function e(n) {
        o[n] && (u[n] = function (t) {
          return new Promise(function (i, u) {
            r.push([n, t, i, u]) > 1 || f(n, t)
          })
        })
      }

      function f(n, t) {
        try {
          !function (n) {
            n.value instanceof ni ? Promise.resolve(n.value.v).then(h, c) : s(r[0][2], n)
          }(o[n](t))
        } catch (i) {
          s(r[0][3], i)
        }
      }

      function h(n) {
        f("next", n)
      }

      function c(n) {
        f("throw", n)
      }

      function s(n, t) {
        n(t);
        r.shift();
        r.length && f(r[0][0], r[0][1])
      }

      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var u, o = i.apply(n, t || []), r = [];
      return u = {}, e("next"), e("throw"), e("return"), u[Symbol.asyncIterator] = function () {
        return this
      }, u
    }

    function ow(n) {
      function i(i) {
        t[i] = n[i] && function (t) {
          return new Promise(function (r, u) {
            !function (n, t, i, r) {
              Promise.resolve(r).then(function (t) {
                n({value: t, done: i})
              }, t)
            }(r, u, (t = n[i](t)).done, t.value)
          })
        }
      }

      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, r = n[Symbol.asyncIterator];
      return r ? r.call(n) : (n = function (n) {
        var t = "function" == typeof Symbol && Symbol.iterator, i = t && n[t], r = 0;
        if (i) return i.call(n);
        if (n && "number" == typeof n.length) return {
          next: function () {
            return n && r >= n.length && (n = void 0), {value: n && n[r++], done: !n}
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }(n), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function () {
        return this
      }, t)
    }

    function cs(n) {
      return s(n?.then)
    }

    function ls(n) {
      return s(n[wu])
    }

    function as(n) {
      return Symbol.asyncIterator && s(n?.[Symbol.asyncIterator])
    }

    function vs(n) {
      return new TypeError(`You provided ${null !== n && "object" == typeof n ? "an invalid object" : `'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
    }

    function ps(n) {
      return s(n?.[ys])
    }

    function ws(n) {
      return ew(this, arguments, function* () {
        const t = n.getReader();
        try {
          for (; ;) {
            const {value: n, done: i} = yield ni(t.read());
            if (i) return yield ni(void 0);
            yield yield ni(n)
          }
        } finally {
          t.releaseLock()
        }
      })
    }

    function bs(n) {
      return s(n?.getReader)
    }

    function st(n) {
      if (n instanceof v) return n;
      if (null != n) {
        if (ls(n)) return function (n) {
          return new v(t => {
            const i = n[wu]();
            if (s(i.subscribe)) return i.subscribe(t);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
          })
        }(n);
        if (hs(n)) return function (n) {
          return new v(t => {
            for (let i = 0; i < n.length && !t.closed; i++) t.next(n[i]);
            t.complete()
          })
        }(n);
        if (cs(n)) return function (n) {
          return new v(t => {
            n.then(n => {
              t.closed || (t.next(n), t.complete())
            }, n => t.error(n)).then(null, rs)
          })
        }(n);
        if (as(n)) return ks(n);
        if (ps(n)) return function (n) {
          return new v(t => {
            for (const i of n) if (t.next(i), t.closed) return;
            t.complete()
          })
        }(n);
        if (bs(n)) return function (n) {
          return ks(ws(n))
        }(n)
      }
      throw vs(n);
    }

    function ks(n) {
      return new v(t => {
        (function (n, t) {
          var i, r, u, f;
          return function (n, t, i, r) {
            return new (i || (i = Promise))(function (u, f) {
              function o(n) {
                try {
                  e(r.next(n))
                } catch (t) {
                  f(t)
                }
              }

              function s(n) {
                try {
                  e(r.throw(n))
                } catch (t) {
                  f(t)
                }
              }

              function e(n) {
                n.done ? u(n.value) : function (n) {
                  return n instanceof i ? n : new i(function (t) {
                    t(n)
                  })
                }(n.value).then(o, s)
              }

              e((r = r.apply(n, t || [])).next())
            })
          }(this, void 0, void 0, function* () {
            try {
              for (i = ow(n); !(r = (yield i.next())).done;) if (t.next(r.value), t.closed) return
            } catch (e) {
              u = {error: e}
            } finally {
              try {
                r && !r.done && (f = i.return) && (yield f.call(i))
              } finally {
                if (u) throw u.error;
              }
            }
            t.complete()
          })
        })(n, t).catch(n => t.error(n))
      })
    }

    function ht(n, t, i, r = 0, u = !1) {
      const f = t.schedule(function () {
        i();
        u ? n.add(this.schedule(null, r)) : this.unsubscribe()
      }, r);
      if (n.add(f), !u) return f
    }

    function ds(n, t, i = 1 / 0) {
      return s(t) ? ds((i, r) => function (n, t) {
        return fi((i, r) => {
          let u = 0;
          i.subscribe(ir(r, i => {
            r.next(n.call(t, i, u++))
          }))
        })
      }((n, u) => t(i, n, r, u))(st(n(i, r))), i) : ("number" == typeof t && (i = t), fi((t, r) => function (n, t, i, r, u, f, e, o) {
        const h = [];
        let s = 0, y = 0, l = !1;
        const a = () => {
          l && !h.length && !s && t.complete()
        }, v = n => s < r ? c(n) : h.push(n), c = n => {
          f && t.next(n);
          s++;
          let o = !1;
          st(i(n, y++)).subscribe(ir(t, n => {
            u?.(n), f ? v(n) : t.next(n)
          }, () => {
            o = !0
          }, void 0, () => {
            if (o) try {
              for (s--; h.length && s < r;) {
                const n = h.shift();
                e ? ht(t, e, () => c(n)) : c(n)
              }
              a()
            } catch (n) {
              t.error(n)
            }
          }))
        };
        return n.subscribe(ir(t, v, () => {
          l = !0, a()
        })), () => {
          o?.()
        }
      }(t, r, n, i)))
    }

    function gs(n) {
      return n[n.length - 1]
    }

    function nh(n, t = 0) {
      return fi((i, r) => {
        i.subscribe(ir(r, i => ht(r, n, () => r.next(i), t), () => ht(r, n, () => r.complete(), t), i => ht(r, n, () => r.error(i), t)))
      })
    }

    function th(n, t = 0) {
      return fi((i, r) => {
        r.add(n.schedule(() => i.subscribe(r), t))
      })
    }

    function ih(n, t) {
      if (!n) throw new Error("Iterable cannot be null");
      return new v(i => {
        ht(i, t, () => {
          const r = n[Symbol.asyncIterator]();
          ht(i, t, () => {
            r.next().then(n => {
              n.done ? i.complete() : i.next(n.value)
            })
          }, 0, !0)
        })
      })
    }

    function hw(...n) {
      const i = function (n) {
        if (function (n) {
          return n && s(n.schedule)
        }(gs(n))) return n.pop()
      }(n), r = function (n, t) {
        return "number" == typeof gs(n) ? n.pop() : t
      }(n, 1 / 0), t = n;
      return t.length ? 1 === t.length ? st(t[0]) : function (n = 1 / 0) {
        return ds(fs, n)
      }(r)(function (n, t) {
        return t ? function (n, t) {
          if (null != n) {
            if (ls(n)) return function (n, t) {
              return st(n).pipe(th(t), nh(t))
            }(n, t);
            if (hs(n)) return function (n, t) {
              return new v(i => {
                let r = 0;
                return t.schedule(function () {
                  r === n.length ? i.complete() : (i.next(n[r++]), i.closed || this.schedule())
                })
              })
            }(n, t);
            if (cs(n)) return function (n, t) {
              return st(n).pipe(th(t), nh(t))
            }(n, t);
            if (as(n)) return ih(n, t);
            if (ps(n)) return function (n, t) {
              return new v(i => {
                let r;
                return ht(i, t, () => {
                  r = n[ys](), ht(i, t, () => {
                    let n, t;
                    try {
                      ({value: n, done: t}) => r.next()
                    } catch (u) {
                      return void i.error(u)
                    }
                    t ? i.complete() : i.next(n)
                  }, 0, !0)
                }), () => s(r?.return) && r.return()
              })
            }(n, t);
            if (bs(n)) return function (n, t) {
              return ih(ws(n), t)
            }(n, t)
          }
          throw vs(n);
        }(n, t) : st(n)
      }(t, i)) : sw
    }

    function bu(n, t, ...i) {
      if (!0 === t) return void n();
      if (!1 !== t) {
        const r = new ui({
          next: () => {
            r.unsubscribe(), n()
          }
        });
        return st(t(...i)).subscribe(r)
      }
    }

    function o(n) {
      for (let t in n) if (n[t] === o) return t;
      throw Error("Could not find renamed property on target object.");
    }

    function y(n) {
      if ("string" == typeof n) return n;
      if (Array.isArray(n)) return "[" + n.map(y).join(", ") + "]";
      if (null == n) return "" + n;
      if (n.overriddenName) return `${n.overriddenName}`;
      if (n.name) return `${n.name}`;
      const t = n.toString();
      if (null == t) return "" + t;
      const i = t.indexOf("\n");
      return -1 === i ? t : t.substring(0, i)
    }

    function rh(n, t) {
      return null == n || "" === n ? null === t ? "" : t : null == t || "" === t ? n : n + " " + t
    }

    function uh(n) {
      return n.__forward_ref__ = uh, n.toString = function () {
        return y(this())
      }, n
    }

    function w(n) {
      return function (n) {
        return "function" == typeof n && n.hasOwnProperty(cw) && n.__forward_ref__ === uh
      }(n) ? n() : n
    }

    function fh(n) {
      return n && !!n.ɵproviders
    }

    function eh(n) {
      return "string" == typeof n ? n : null == n ? "" : String(n)
    }

    function ku() {
      throw new e(-201, !1);
    }

    function lw(n, t) {
      null == n && function (n, t, i, r) {
        throw new Error(`ASSERTION ERROR: ${n}` + (null == r ? "" : ` [Expected=> ${i} ${r} ${t} <=Actual]`));
      }(t, n, null, "!=")
    }

    function b(n) {
      return {token: n.token, providedIn: n.providedIn || null, factory: n.factory, value: void 0}
    }

    function oh(n) {
      return {providers: n.providers || [], imports: n.imports || []}
    }

    function du(n) {
      return sh(n, ch) || sh(n, ah)
    }

    function sh(n, t) {
      return n.hasOwnProperty(t) ? n[t] : null
    }

    function hh(n) {
      return n && (n.hasOwnProperty(lh) || n.hasOwnProperty(aw)) ? n[lh] : null
    }

    function g(n) {
      const t = gu;
      return gu = n, t
    }

    function vh(n, t, i) {
      const r = du(n);
      return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : i & u.Optional ? null : void 0 !== t ? t : void ku(y(n))
    }

    function ti(n) {
      const t = oi;
      return oi = n, t
    }

    function yw(n, t = u.Default) {
      if (void 0 === oi) throw new e(-203, !1);
      return null === oi ? vh(n, void 0, t) : oi.get(n, t & u.Optional ? null : void 0, t)
    }

    function l(n, t = u.Default) {
      return (function () {
        return gu
      }() || yw)(w(n), t)
    }

    function ur(n) {
      return typeof n > "u" || "number" == typeof n ? n : 0 | (n.optional && 8) | (n.host && 1) | (n.self && 2) | (n.skipSelf && 4)
    }

    function tf(n) {
      const t = [];
      for (let i = 0; i < n.length; i++) {
        const r = w(n[i]);
        if (Array.isArray(r)) {
          if (0 === r.length) throw new e(900, !1);
          let n, i = u.Default;
          for (let t = 0; t < r.length; t++) {
            const u = r[t], f = pw(u);
            "number" == typeof f ? -1 === f ? n = u.token : i |= f : n = u
          }
          t.push(l(n, i))
        } else t.push(l(r))
      }
      return t
    }

    function ph(n, t) {
      return n[nf] = t, n.prototype[nf] = t, n
    }

    function pw(n) {
      return n[nf]
    }

    function rf(n) {
      return {toString: n}.toString()
    }

    function bh(n) {
      return rf(() => {
        const r = !0 === n.standalone, u = {}, i = {
          type: n.type,
          providersResolver: null,
          decls: n.decls,
          vars: n.vars,
          factory: null,
          template: n.template || null,
          consts: n.consts || null,
          ngContentSelectors: n.ngContentSelectors,
          hostBindings: n.hostBindings || null,
          hostVars: n.hostVars || 0,
          hostAttrs: n.hostAttrs || null,
          contentQueries: n.contentQueries || null,
          declaredInputs: u,
          inputs: null,
          outputs: null,
          exportAs: n.exportAs || null,
          onPush: n.changeDetection === ct.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          standalone: r,
          dependencies: r && n.dependencies || null,
          getStandaloneInjector: null,
          selectors: n.selectors || nt,
          viewQuery: n.viewQuery || null,
          features: n.features || null,
          data: n.data || {},
          encapsulation: n.encapsulation || et.Emulated,
          id: "c" + gw++,
          styles: n.styles || nt,
          _: null,
          setInput: null,
          schemas: n.schemas || null,
          tView: null,
          findHostDirectiveDefs: null,
          hostDirectives: null
        }, t = n.dependencies, f = n.features;
        return i.inputs = gh(n.inputs, u), i.outputs = gh(n.outputs), f && f.forEach(n => n(i)), i.directiveDefs = t ? () => ("function" == typeof t ? t() : t).map(nb).filter(kh) : null, i.pipeDefs = t ? () => ("function" == typeof t ? t() : t).map(tc).filter(kh) : null, i
      })
    }

    function nb(n) {
      return hi(n) || nc(n)
    }

    function kh(n) {
      return null !== n
    }

    function dh(n) {
      return rf(() => ({
        type: n.type,
        bootstrap: n.bootstrap || nt,
        declarations: n.declarations || nt,
        imports: n.imports || nt,
        exports: n.exports || nt,
        transitiveCompileScopes: null,
        schemas: n.schemas || null,
        id: n.id || null
      }))
    }

    function gh(n, t) {
      if (null == n) return fr;
      const i = {};
      for (const r in n) if (n.hasOwnProperty(r)) {
        let u = n[r], f = u;
        Array.isArray(u) && (f = u[1], u = u[0]);
        i[u] = r;
        t && (t[u] = f)
      }
      return i
    }

    function ib(n) {
      return {
        type: n.type,
        name: n.name,
        factory: null,
        pure: !1 !== n.pure,
        standalone: !0 === n.standalone,
        onDestroy: n.type.prototype.ngOnDestroy || null
      }
    }

    function hi(n) {
      return n[ww] || null
    }

    function nc(n) {
      return n[bw] || null
    }

    function tc(n) {
      return n[kw] || null
    }

    function wt(n) {
      return Array.isArray(n) && "object" == typeof n[1]
    }

    function ot(n) {
      return Array.isArray(n) && !0 === n[1]
    }

    function ic(n) {
      return 0 != (4 & n.flags)
    }

    function er(n) {
      return n.componentOffset > -1
    }

    function uf(n) {
      return 1 == (1 & n.flags)
    }

    function ci(n) {
      return null !== n.template
    }

    function rb(n) {
      return 0 != (256 & n[2])
    }

    function li(n) {
      return n.hasOwnProperty(wh) ? n[wh] : null
    }

    function rc() {
      return uc
    }

    function uc(n) {
      return n.type.prototype.ngOnChanges && (n.setInput = eb), fb
    }

    function fb() {
      const t = ec(this), n = t?.current;
      if (n) {
        const i = t.previous;
        if (i === fr) t.previous = n; else for (let t in n) i[t] = n[t];
        t.current = null;
        this.ngOnChanges(n)
      }
    }

    function eb(n, t, i, r) {
      const f = this.declaredInputs[i], u = ec(n) || function (n, t) {
        return n[fc] = t
      }(n, {previous: fr, current: null}), s = u.current || (u.current = {}), e = u.previous, o = e[f];
      s[f] = new ub(o && o.currentValue, t, e === fr);
      n[r] = t
    }

    function ec(n) {
      return n[fc] || null
    }

    function tt(n) {
      for (; Array.isArray(n);) n = n[0];
      return n
    }

    function k(n, t) {
      return tt(t[n.index])
    }

    function oc(n, t) {
      return n.data[t]
    }

    function lt(n, t) {
      const i = t[n];
      return wt(i) ? i : i[0]
    }

    function or(n) {
      return 64 == (64 & n[2])
    }

    function sr(n, t) {
      return null == t ? null : n[t]
    }

    function sc(n) {
      n[18] = 0
    }

    function ff(n, t) {
      n[5] += t;
      let r = n, i = n[3];
      for (; null !== i && (1 === t && 1 === r[5] || -1 === t && 0 === r[5]);) i[5] += t, r = i, i = i[3]
    }

    function hc() {
      return f.bindingsEnabled
    }

    function c() {
      return f.lFrame.lView
    }

    function bt() {
      return f.lFrame.tView
    }

    function ob(n) {
      return f.lFrame.contextLView = n, n[8]
    }

    function sb(n) {
      return f.lFrame.contextLView = null, n
    }

    function p() {
      let n = cc();
      for (; null !== n && 64 === n.type;) n = n.parent;
      return n
    }

    function cc() {
      return f.lFrame.currentTNode
    }

    function ai(n, t) {
      const i = f.lFrame;
      i.currentTNode = n;
      i.isParent = t
    }

    function lc() {
      return f.lFrame.isParent
    }

    function ac() {
      return f.lFrame.bindingIndex++
    }

    function hb(n, t) {
      const i = f.lFrame;
      i.bindingIndex = i.bindingRootIndex = n;
      ef(t)
    }

    function ef(n) {
      f.lFrame.currentDirectiveIndex = n
    }

    function vc(n) {
      f.lFrame.currentQueryIndex = n
    }

    function cb(n) {
      const t = n[1];
      return 2 === t.type ? t.declTNode : 1 === t.type ? n[6] : null
    }

    function yc(n, t, i) {
      if (i & u.SkipSelf) {
        let r = t, f = n;
        for (; !(r = r.parent, null !== r || i & u.Host || (r = cb(f), null === r || (f = f[15], 10 & r.type)));) ;
        if (null === r) return !1;
        t = r;
        n = f
      }
      const r = f.lFrame = pc();
      return r.currentTNode = t, r.lView = n, !0
    }

    function sf(n) {
      const t = pc(), i = n[1];
      f.lFrame = t;
      t.currentTNode = i.firstChild;
      t.lView = n;
      t.tView = i;
      t.contextLView = n;
      t.bindingIndex = i.bindingStartIndex;
      t.inI18n = !1
    }

    function pc() {
      const n = f.lFrame, t = null === n ? null : n.child;
      return null === t ? wc(n) : t
    }

    function wc(n) {
      const t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: n,
        child: null,
        inI18n: !1
      };
      return null !== n && (n.child = t), t
    }

    function bc() {
      const n = f.lFrame;
      return f.lFrame = n.parent, n.currentTNode = null, n.lView = null, n
    }

    function hf() {
      const n = bc();
      n.isParent = !0;
      n.tView = null;
      n.selectedIndex = -1;
      n.contextLView = null;
      n.elementDepthCount = 0;
      n.currentDirectiveIndex = -1;
      n.currentNamespace = null;
      n.bindingRootIndex = -1;
      n.bindingIndex = -1;
      n.currentQueryIndex = 0
    }

    function cf() {
      return f.lFrame.selectedIndex
    }

    function kt(n) {
      f.lFrame.selectedIndex = n
    }

    function lb() {
      f.lFrame.currentNamespace = "svg"
    }

    function ab() {
      !function () {
        f.lFrame.currentNamespace = null
      }()
    }

    function lf(n, t) {
      for (let i = t.directiveStart, r = t.directiveEnd; i < r; i++) {
        const o = n.data[i].type.prototype, {
          ngAfterContentInit: u,
          ngAfterContentChecked: t,
          ngAfterViewInit: f,
          ngAfterViewChecked: r,
          ngOnDestroy: e
        } = o;
        u && (n.contentHooks || (n.contentHooks = [])).push(-i, u);
        t && ((n.contentHooks || (n.contentHooks = [])).push(i, t), (n.contentCheckHooks || (n.contentCheckHooks = [])).push(i, t));
        f && (n.viewHooks || (n.viewHooks = [])).push(-i, f);
        r && ((n.viewHooks || (n.viewHooks = [])).push(i, r), (n.viewCheckHooks || (n.viewCheckHooks = [])).push(i, r));
        null != e && (n.destroyHooks || (n.destroyHooks = [])).push(i, e)
      }
    }

    function hr(n, t, i) {
      dc(n, t, 3, i)
    }

    function cr(n, t, i, r) {
      (3 & n[2]) === i && dc(n, t, i, r)
    }

    function af(n, t) {
      let i = n[2];
      (3 & i) === t && (i &= 2047, i += 1, n[2] = i)
    }

    function dc(n, t, i, r) {
      const f = r ?? -1, e = t.length - 1;
      let u = 0;
      for (let o = void 0 !== r ? 65535 & n[18] : 0; o < e; o++) if ("number" == typeof t[o + 1]) {
        if (u = t[o], null != r && u >= r) break
      } else t[o] < 0 && (n[18] += 65536), (u < f || -1 == f) && (vb(n, i, t, o), n[18] = (4294901760 & n[18]) + o + 2), o++
    }

    function vb(n, t, i, r) {
      const u = i[r] < 0, f = i[r + 1], e = n[u ? -i[r] : i[r]];
      if (u) {
        if (n[2] >> 11 < n[18] >> 16 && (3 & n[2]) === t) {
          n[2] += 2048;
          try {
            f.call(e)
          } finally {
          }
        }
      } else try {
        f.call(e)
      } finally {
      }
    }

    function yf(n, t, i) {
      let r = 0;
      for (; r < i.length;) {
        const u = i[r];
        if ("number" == typeof u) {
          if (0 !== u) break;
          r++;
          const f = i[r++], e = i[r++], o = i[r++];
          n.setAttribute(t, e, o, f)
        } else {
          const f = u, e = i[++r];
          yb(f) ? n.setProperty(t, f, e) : n.setAttribute(t, f, e);
          r++
        }
      }
      return r
    }

    function gc(n) {
      return 3 === n || 4 === n || 6 === n
    }

    function yb(n) {
      return 64 === n.charCodeAt(0)
    }

    function pf(n, t) {
      if (null !== t && 0 !== t.length) if (null === n || 0 === n.length) n = t.slice(); else {
        let i = -1;
        for (let r = 0; r < t.length; r++) {
          const u = t[r];
          "number" == typeof u ? i = u : 0 === i || pb(n, i, u, null, -1 === i || 2 === i ? t[++r] : null)
        }
      }
      return n
    }

    function pb(n, t, i, r, u) {
      let f = 0, e = n.length;
      if (-1 === t) e = -1; else for (; f < n.length;) {
        const i = n[f++];
        if ("number" == typeof i) {
          if (i === t) {
            e = -1;
            break
          }
          if (i > t) {
            e = f - 1;
            break
          }
        }
      }
      for (; f < n.length;) {
        const t = n[f];
        if ("number" == typeof t) break;
        if (t === i) {
          if (null === r) return void (null !== u && (n[f + 1] = u));
          if (r === n[f + 1]) return void (n[f + 2] = u)
        }
        f++;
        null !== r && f++;
        null !== u && f++
      }
      -1 !== e && (n.splice(e, 0, t), f = e + 1);
      n.splice(f++, 0, i);
      null !== r && n.splice(f++, 0, r);
      null !== u && n.splice(f++, 0, u)
    }

    function nl(n) {
      return -1 !== n
    }

    function lr(n) {
      return 32767 & n
    }

    function ar(n, t) {
      let r = function (n) {
        return n >> 16
      }(n), i = t;
      for (; r > 0;) i = i[15], r--;
      return i
    }

    function tl(n) {
      const t = wf;
      return wf = n, t
    }

    function il(n, t) {
      const f = rl(n, t);
      if (-1 !== f) return f;
      const r = t[1];
      r.firstCreatePass && (n.injectorIndex = t.length, bf(r.data, n), bf(t, null), bf(r.blueprint, null));
      const i = kf(n, t), u = n.injectorIndex;
      if (nl(i)) {
        const n = lr(i), r = ar(i, t), f = r[1].data;
        for (let i = 0; i < 8; i++) t[u + i] = r[n + i] | f[n + i]
      }
      return t[u + 8] = i, u
    }

    function bf(n, t) {
      n.push(0, 0, 0, 0, 0, 0, 0, 0, t)
    }

    function rl(n, t) {
      return -1 === n.injectorIndex || n.parent && n.parent.injectorIndex === n.injectorIndex || null === t[n.injectorIndex + 8] ? -1 : n.injectorIndex
    }

    function kf(n, t) {
      if (n.parent && -1 !== n.parent.injectorIndex) return n.parent.injectorIndex;
      let u = 0, i = null, r = t;
      for (; null !== r;) {
        if (i = cl(r), null === i) return -1;
        if (u++, r = r[15], -1 !== i.injectorIndex) return i.injectorIndex | u << 16
      }
      return -1
    }

    function bb(n, t, i) {
      !function (n, t, i) {
        let r;
        "string" == typeof i ? r = i.charCodeAt(0) || 0 : i.hasOwnProperty(si) && (r = i[si]);
        null == r && (r = i[si] = wb++);
        const u = 255 & r;
        t.data[n + (u >> 5)] |= 1 << u
      }(n, t, i)
    }

    function ul(n, t, i) {
      if (i & u.Optional || void 0 !== n) return n;
      ku()
    }

    function fl(n, t, i, r) {
      if (i & u.Optional && void 0 === r && (r = null), !(i & (u.Self | u.Host))) {
        const f = n[9], e = g(void 0);
        try {
          return f ? f.get(t, r, i & u.Optional) : vh(t, r, i & u.Optional)
        } finally {
          g(e)
        }
      }
      return ul(r, 0, i)
    }

    function el(n, t, i, r = u.Default, f) {
      if (null !== n) {
        if (1024 & t[2]) {
          const f = function (n, t, i, r, f) {
            let o = n, e = t;
            for (; null !== o && null !== e && 1024 & e[2] && !(256 & e[2]);) {
              const t = ol(o, e, i, r | u.Self, it);
              if (t !== it) return t;
              let n = o.parent;
              if (!n) {
                const t = e[21];
                if (t) {
                  const n = t.get(i, it, r);
                  if (n !== it) return n
                }
                n = cl(e);
                e = e[15]
              }
              o = n
            }
            return f
          }(n, t, i, r, it);
          if (f !== it) return f
        }
        const f = ol(n, t, i, r, it);
        if (f !== it) return f
      }
      return fl(t, i, r, f)
    }

    function ol(n, t, i, r, f) {
      const e = function (n) {
        if ("string" == typeof n) return n.charCodeAt(0) || 0;
        const t = n.hasOwnProperty(si) ? n[si] : void 0;
        return "number" == typeof t ? t >= 0 ? 255 & t : db : t
      }(i);
      if ("function" == typeof e) {
        if (!yc(t, n, r)) return r & u.Host ? ul(f, 0, r) : fl(t, i, r, f);
        try {
          const n = e(r);
          if (null != n || r & u.Optional) return n;
          ku()
        } finally {
          kc()
        }
      } else if ("number" == typeof e) {
        let s = null, f = rl(n, t), o = -1, h = r & u.Host ? t[16][6] : null;
        for ((-1 === f || r & u.SkipSelf) && (o = -1 === f ? kf(n, t) : t[f + 8], -1 !== o && hl(r, !1) ? (s = t[1], f = lr(o), t = ar(o, t)) : f = -1); -1 !== f;) {
          const n = t[1];
          if (sl(e, f, n.data)) {
            const n = kb(f, t, i, s, r, h);
            if (n !== it) return n
          }
          o = t[f + 8];
          -1 !== o && hl(r, t[1].data[f + 8] === h) && sl(e, f, t) ? (s = n, f = lr(o), t = ar(o, t)) : f = -1
        }
      }
      return f
    }

    function kb(n, t, i, r, f, e) {
      const s = t[1], o = s.data[n + 8], h = function (n, t, i, r, u) {
        const o = n.providerIndexes, s = t.data, e = 1048575 & o, f = n.directiveStart, h = o >> 20,
          c = u ? e + h : n.directiveEnd;
        for (let n = r ? e : e + h; n < c; n++) {
          const t = s[n];
          if (n < f && i === t || n >= f && t.type === i) return n
        }
        if (u) {
          const n = s[f];
          if (n && ci(n) && n.type === i) return f
        }
        return null
      }(o, s, i, null == r ? er(o) && wf : r != s && 0 != (3 & o.type), f & u.Host && e === o);
      return null !== h ? vi(t, s, h, o) : it
    }

    function vi(n, t, i, r) {
      let f = n[i];
      const o = t.data;
      if (function (n) {
        return n instanceof vf
      }(f)) {
        const s = f;
        s.resolving && function (n, t) {
          const i = t ? `. Dependency path: ${t.join(" > ")} > ${n}` : "";
          throw new e(-200, `Circular dependency in DI detected for ${n}${i}`);
        }(function (n) {
          return "function" == typeof n ? n.name || n.toString() : "object" == typeof n && null != n && "function" == typeof n.type ? n.type.name || n.type.toString() : eh(n)
        }(o[i]));
        const c = tl(s.canSeeViewProviders);
        s.resolving = !0;
        const h = s.injectImpl ? g(s.injectImpl) : null;
        yc(n, r, u.Default);
        try {
          f = n[i] = s.factory(void 0, o, n, r);
          t.firstCreatePass && i >= r.directiveStart && function (n, t, i) {
            const {ngOnChanges: f, ngOnInit: u, ngDoCheck: r} = t.type.prototype;
            if (f) {
              const r = uc(t);
              (i.preOrderHooks || (i.preOrderHooks = [])).push(n, r);
              (i.preOrderCheckHooks || (i.preOrderCheckHooks = [])).push(n, r)
            }
            u && (i.preOrderHooks || (i.preOrderHooks = [])).push(0 - n, u);
            r && ((i.preOrderHooks || (i.preOrderHooks = [])).push(n, r), (i.preOrderCheckHooks || (i.preOrderCheckHooks = [])).push(n, r))
          }(i, o[i], t)
        } finally {
          null !== h && g(h);
          tl(c);
          s.resolving = !1;
          kc()
        }
      }
      return f
    }

    function sl(n, t, i) {
      return !!(i[t + (n >> 5)] & 1 << n)
    }

    function hl(n, t) {
      return !(n & u.Self || n & u.Host && t)
    }

    function db() {
      return new yi(p(), c())
    }

    function cl(n) {
      const t = n[1], i = t.type;
      return 2 === i ? t.declTNode : 1 === i ? n[6] : null
    }

    function gb(n) {
      return function (n, t) {
        if ("class" === t) return n.classes;
        if ("style" === t) return n.styles;
        const i = n.attrs;
        if (i) {
          const r = i.length;
          let n = 0;
          for (; n < r;) {
            const u = i[n];
            if (gc(u)) break;
            if (0 === u) n += 2; else if ("number" == typeof u) for (n++; n < r && "string" == typeof i[n];) n++; else {
              if (u === t) return i[n + 1];
              n += 2
            }
          }
        }
        return null
      }(p(), n)
    }

    function ll(n, t, i) {
      return rf(() => {
        function r(...n) {
          function i(n, i, r) {
            const u = n.hasOwnProperty(vr) ? n[vr] : Object.defineProperty(n, vr, {value: []})[vr];
            for (; u.length <= r;) u.push(null);
            return (u[r] = u[r] || []).push(t), n
          }

          if (this instanceof r) return u.apply(this, n), this;
          const t = new r(...n);
          return i.annotation = t, i
        }

        const u = function (n) {
          return function (...t) {
            if (n) {
              const i = n(...t);
              for (const n in i) this[n] = i[n]
            }
          }
        }(t);
        return i && (r.prototype = Object.create(i.prototype)), r.prototype.ngMetadataName = n, r.annotationCls = r, r
      })
    }

    function df(n, t) {
      n.forEach(n => Array.isArray(n) ? df(n, t) : t(n))
    }

    function al(n, t, i) {
      t >= n.length ? n.push(i) : n.splice(t, 0, i)
    }

    function yr(n, t) {
      return t >= n.length - 1 ? n.pop() : n.splice(t, 1)[0]
    }

    function dt(n, t) {
      wt(t) ? (n[wl] = t[20], function (n) {
        pl.set(n[20], n)
      }(t)) : n[wl] = t
    }

    function gf(n, t) {
      return undefined(n, t)
    }

    function ne(n) {
      const t = n[3];
      return ot(t) ? t[3] : t
    }

    function te(n) {
      return bl(n[13])
    }

    function ie(n) {
      return bl(n[4])
    }

    function bl(n) {
      for (; null !== n && !ot(n);) n = n[4];
      return n
    }

    function ii(n, t, i, r, u) {
      if (null != r) {
        let e, o = !1;
        ot(r) ? e = r : wt(r) && (o = !0, r = r[0]);
        const f = tt(r);
        0 === n && null !== i ? null == u ? na(t, i, f) : pr(t, i, f, u || null, !0) : 1 === n && null !== i ? pr(t, i, f, u || null, !0) : 2 === n ? function (n, t, i) {
          const r = fe(n, t);
          r && function (n, t, i, r) {
            n.removeChild(t, i, r)
          }(n, r, t, i)
        }(t, f, o) : 3 === n && t.destroyNode(f);
        null != e && function (n, t, i, r, u) {
          const f = i[7];
          f !== tt(i) && ii(t, n, r, f, u);
          for (let u = 10; u < i.length; u++) {
            const e = i[u];
            pi(e[1], e, n, t, r, f)
          }
        }(t, n, e, i, u)
      }
    }

    function kl(n, t, i) {
      return n.createElement(t, i)
    }

    function dl(n, t) {
      const i = n[9], r = i.indexOf(t), u = t[3];
      512 & t[2] && (t[2] &= -513, ff(u, -1));
      i.splice(r, 1)
    }

    function re(n, t) {
      if (!(n.length <= 10)) {
        const r = 10 + t, i = n[r];
        if (i) {
          const u = i[17];
          null !== u && u !== n && dl(u, i);
          t > 0 && (n[r - 1][4] = i[4]);
          const f = yr(n, 10 + t);
          !function (n, t) {
            pi(n, t, t[a], 2, null, null);
            t[0] = null;
            t[6] = null
          }(i[1], i);
          const e = f[19];
          null !== e && e.detachView(f[1]);
          i[3] = null;
          i[4] = null;
          i[2] &= -65
        }
        return i
      }
    }

    function gl(n, t) {
      if (!(128 & t[2])) {
        const i = t[a];
        i.destroyNode && pi(n, t, i, 3, null, null), function (n) {
          let t = n[13];
          if (!t) return ue(n[1], n);
          for (; t;) {
            let i = null;
            if (wt(t)) i = t[13]; else {
              const n = t[10];
              n && (i = n)
            }
            if (!i) {
              for (; t && !t[4] && t !== n;) wt(t) && ue(t[1], t), t = t[3];
              null === t && (t = n);
              wt(t) && ue(t[1], t);
              i = t && t[4]
            }
            t = i
          }
        }(t)
      }
    }

    function ue(n, t) {
      if (!(128 & t[2])) {
        t[2] &= -65;
        t[2] |= 128, function (n, t) {
          let i;
          if (null != n && null != (i = n.destroyHooks)) for (let n = 0; n < i.length; n += 2) {
            const r = t[i[n]];
            if (!(r instanceof vf)) {
              const t = i[n + 1];
              if (Array.isArray(t)) for (let n = 0; n < t.length; n += 2) {
                const i = r[t[n]], u = t[n + 1];
                try {
                  u.call(i)
                } finally {
                }
              } else try {
                t.call(r)
              } finally {
              }
            }
          }
        }(n, t), function (n, t) {
          const i = n.cleanup, r = t[7];
          let u = -1;
          if (null !== i) for (let n = 0; n < i.length - 1; n += 2) if ("string" == typeof i[n]) {
            const t = i[n + 3];
            t >= 0 ? r[u = t]() : r[u = -t].unsubscribe();
            n += 2
          } else {
            const t = r[u = i[n + 1]];
            i[n].call(t)
          }
          if (null !== r) {
            for (let n = u + 1; n < r.length; n++) r[n]();
            t[7] = null
          }
        }(n, t);
        1 === t[1].type && t[a].destroy();
        const i = t[17];
        if (null !== i && ot(t[3])) {
          i !== t[3] && dl(i, t);
          const r = t[19];
          null !== r && r.detachView(n)
        }
        !function (n) {
          pl.delete(n[20])
        }(t)
      }
    }

    function tk(n, t, i) {
      return function (n, t, i) {
        let r = t;
        for (; null !== r && 40 & r.type;) r = (t = r).parent;
        if (null === r) return i[0];
        {
          const {componentOffset: t} = r;
          if (t > -1) {
            const {encapsulation: i} = n.data[r.directiveStart + t];
            if (i === et.None || i === et.Emulated) return null
          }
          return k(r, i)
        }
      }(n, t.parent, i)
    }

    function pr(n, t, i, r, u) {
      n.insertBefore(t, i, r, u)
    }

    function na(n, t, i) {
      n.appendChild(t, i)
    }

    function ta(n, t, i, r, u) {
      null !== r ? pr(n, t, i, r, u) : na(n, t, i)
    }

    function fe(n, t) {
      return n.parentNode(t)
    }

    function ee(n, t, i, r) {
      const u = tk(n, r, t), f = t[a], e = function (n, t, i) {
        return rk(n, t, i)
      }(r.parent || t[6], r, t);
      if (null != u) if (Array.isArray(i)) for (let n = 0; n < i.length; n++) ta(f, u, i[n], e, !1); else ta(f, u, i, e, !1)
    }

    function wr(n, t) {
      if (null !== t) {
        const i = t.type;
        if (3 & i) return k(t, n);
        if (4 & i) return oe(-1, n[t.index]);
        if (8 & i) {
          const i = t.child;
          if (null !== i) return wr(n, i);
          {
            const i = n[t.index];
            return ot(i) ? oe(-1, i) : tt(i)
          }
        }
        if (32 & i) return gf(t, n)() || tt(n[t.index]);
        {
          const i = ia(n, t);
          return null !== i ? Array.isArray(i) ? i[0] : wr(ne(n[16]), i) : wr(n, t.next)
        }
      }
      return null
    }

    function ia(n, t) {
      return null !== t ? n[16][6].projection[t.projection] : null
    }

    function oe(n, t) {
      const i = 10 + n + 1;
      if (i < t.length) {
        const n = t[i], r = n[1].firstChild;
        if (null !== r) return wr(n, r)
      }
      return t[7]
    }

    function se(n, t, i, r, u, f, e) {
      for (; null != i;) {
        const o = r[i.index], s = i.type;
        if (e && 0 === t && (o && dt(tt(o), r), i.flags |= 2), 32 != (32 & i.flags)) if (8 & s) se(n, t, i.child, r, u, f, !1), ii(t, n, u, o, f); else if (32 & s) {
          const s = gf(i, r);
          let e;
          for (; e = s();) ii(t, n, u, e, f);
          ii(t, n, u, o, f)
        } else 16 & s ? uk(n, t, r, i, u, f) : ii(t, n, u, o, f);
        i = e ? i.projectionNext : i.next
      }
    }

    function pi(n, t, i, r, u, f) {
      se(i, r, n.firstChild, t, u, f, !1)
    }

    function uk(n, t, i, r, u, f) {
      const o = i[16], e = o[6].projection[r.projection];
      if (Array.isArray(e)) for (let i = 0; i < e.length; i++) ii(t, n, u, e[i], f); else se(n, t, e, o[3], u, f, !0)
    }

    function ra(n, t, i) {
      "" === i ? n.removeAttribute(t, "class") : n.setAttribute(t, "class", i)
    }

    function ua(n, t, i) {
      const {mergedAttrs: r, classes: u, styles: f} = i;
      null !== r && yf(n, t, r);
      null !== u && ra(n, t, u);
      null !== f && function (n, t, i) {
        n.setAttribute(t, "style", i)
      }(n, t, f)
    }

    function fk(n) {
      ik = n
    }

    function ek(...n) {
      return {"ɵproviders": ok(0, n), "ɵfromNgModule": !0}
    }

    function ok(n, ...t) {
      const r = [], u = new Set;
      let i;
      return df(t, n => {
        const t = n;
        he(t, r, [], u) && (i || (i = []), i.push(t))
      }), void 0 !== i && ha(i, r), r
    }

    function ha(n, t) {
      for (let i = 0; i < n.length; i++) {
        const {providers: r} = n[i];
        ce(r, n => {
          t.push(n)
        })
      }
    }

    function he(n, t, i, r) {
      if (!(n = w(n))) return !1;
      let u = null, f = hh(n);
      const e = !f && hi(n);
      if (f || e) {
        if (e && !e.standalone) return !1;
        u = n
      } else {
        const t = n.ngModule;
        if (f = hh(t), !f) return !1;
        u = t
      }
      const o = r.has(u);
      if (e) {
        if (o) return !1;
        if (r.add(u), e.dependencies) {
          const n = "function" == typeof e.dependencies ? e.dependencies() : e.dependencies;
          for (const u of n) he(u, t, i, r)
        }
      } else {
        if (!f) return !1;
        {
          if (null != f.imports && !o) {
            let n;
            r.add(u);
            try {
              df(f.imports, u => {
                he(u, t, i, r) && (n || (n = []), n.push(u))
              })
            } finally {
            }
            void 0 !== n && ha(n, t)
          }
          if (!o) {
            const n = li(u) || (() => new u);
            t.push({provide: u, useFactory: n, deps: nt}, {provide: oa, useValue: u, multi: !0}, {
              provide: fa,
              useValue: () => l(u),
              multi: !0
            })
          }
          const n = f.providers;
          null == n || o || ce(n, n => {
            t.push(n)
          })
        }
      }
      return u !== n && void 0 !== n.providers
    }

    function ce(n, t) {
      for (let i of n) fh(i) && (i = i.ɵproviders), Array.isArray(i) ? ce(i, t) : t(i)
    }

    function ca(n) {
      return null !== n && "object" == typeof n && sk in n
    }

    function le(n) {
      return "function" == typeof n
    }

    function la() {
      return void 0 === ve && (ve = new sa), ve
    }

    function ye(n) {
      const t = du(n), i = null !== t ? t.factory : li(n);
      if (null !== i) return i;
      if (n instanceof h) throw new e(204, !1);
      if (n instanceof Function) return function (n) {
        const t = n.length;
        if (t > 0) throw function (n, t) {
          const i = [];
          for (let r = 0; r < n; r++) i.push(t);
          return i
        }(t, "?"), new e(204, !1);
        const i = function (n) {
          const t = n && (n[ch] || n[ah]);
          if (t) {
            const i = function (n) {
              if (n.hasOwnProperty("name")) return n.name;
              const t = ("" + n).match(/^function\s*([^\s(]+)/);
              return null === t ? "" : t[1]
            }(n);
            return console.warn(`DEPRECATED: DI is instantiating a token "${i}" that inherits its @Injectable decorator but does not provide one itself.
This will become an error in a future version of Angular. Please add @Injectable() to the "${i}" class.`), t
          }
          return null
        }(n);
        return null !== i ? () => i.factory(n) : () => new n
      }(n);
      throw new e(204, !1);
    }

    function ri(n, t, i = !1) {
      return {factory: n, value: t, multi: i ? [] : void 0}
    }

    function pe(n, t) {
      for (const i of n) Array.isArray(i) ? pe(i, t) : i && fh(i) ? pe(i.ɵproviders, t) : t(i)
    }

    function vk() {
      return kr(p(), c())
    }

    function kr(n, t) {
      return new va(k(n, t))
    }

    function ke(n) {
      return n.ngOriginalError
    }

    function wa(n, t, i) {
      let r = n.length;
      for (; ;) {
        const u = n.indexOf(t, i);
        if (-1 === u) return u;
        if (0 === u || n.charCodeAt(u - 1) <= 32) {
          const i = t.length;
          if (u + i === r || n.charCodeAt(u + i) <= 32) return u
        }
        i = u + 1
      }
    }

    function bk(n, t, i) {
      let r = 0;
      for (; r < n.length;) {
        let u = n[r++];
        if (i && "class" === u) {
          if (u = n[r], -1 !== wa(u.toLowerCase(), t, 0)) return !0
        } else if (1 === u) {
          for (; r < n.length && "string" == typeof (u = n[r++]);) if (u.toLowerCase() === t) return !0;
          return !1
        }
      }
      return !1
    }

    function ka(n) {
      return 4 === n.type && n.value !== ba
    }

    function kk(n, t, i) {
      return t === (4 !== n.type || i ? n.value : ba)
    }

    function dk(n, t, i) {
      let r = 4;
      const f = n.attrs || [], e = function (n) {
        for (let t = 0; t < n.length; t++) if (gc(n[t])) return t;
        return n.length
      }(f);
      let u = !1;
      for (let o = 0; o < t.length; o++) {
        const s = t[o];
        if ("number" != typeof s) {
          if (!u) if (4 & r) {
            if (r = 2 | 1 & r, "" !== s && !kk(n, s, i) || "" === s && 1 === t.length) {
              if (d(r)) return !1;
              u = !0
            }
          } else {
            const h = 8 & r ? s : t[++o];
            if (8 & r && null !== n.attrs) {
              if (!bk(n.attrs, h, i)) {
                if (d(r)) return !1;
                u = !0
              }
              continue
            }
            const c = gk(8 & r ? "class" : s, f, ka(n), i);
            if (-1 === c) {
              if (d(r)) return !1;
              u = !0;
              continue
            }
            if ("" !== h) {
              let n;
              n = c > e ? "" : f[c + 1].toLowerCase();
              const t = 8 & r ? n : null;
              if (t && -1 !== wa(t, h, 0) || 2 & r && h !== n) {
                if (d(r)) return !1;
                u = !0
              }
            }
          }
        } else {
          if (!u && !d(r) && !d(s)) return !1;
          if (u && d(s)) continue;
          u = !1;
          r = s | 1 & r
        }
      }
      return d(r) || u
    }

    function d(n) {
      return 0 == (1 & n)
    }

    function gk(n, t, i, r) {
      if (null === t) return -1;
      let u = 0;
      if (r || !i) {
        let i = !1;
        for (; u < t.length;) {
          const r = t[u];
          if (r === n) return u;
          if (3 === r || 6 === r) i = !0; else {
            if (1 === r || 2 === r) {
              let n = t[++u];
              for (; "string" == typeof n;) n = t[++u];
              continue
            }
            if (4 === r) break;
            if (0 === r) {
              u += 4;
              continue
            }
          }
          u += i ? 1 : 2
        }
        return -1
      }
      return function (n, t) {
        let i = n.indexOf(4);
        if (i > -1) for (i++; i < n.length;) {
          const r = n[i];
          if ("number" == typeof r) return -1;
          if (r === t) return i;
          i++
        }
        return -1
      }(t, n)
    }

    function nd(n, t, i = !1) {
      for (let r = 0; r < t.length; r++) if (dk(n, t[r], i)) return !0;
      return !1
    }

    function da(n, t) {
      return n ? ":not(" + t.trim() + ")" : t
    }

    function td(n) {
      let f = n[0], r = 1, i = 2, t = "", u = !1;
      for (; r < n.length;) {
        let e = n[r];
        if ("string" == typeof e) if (2 & i) {
          const i = n[++r];
          t += "[" + e + (i.length > 0 ? '="' + i + '"' : "") + "]"
        } else 8 & i ? t += "." + e : 4 & i && (t += " " + e); else "" === t || d(e) || (f += da(u, t), t = ""), i = e, u = u || !d(i);
        r++
      }
      return "" !== t && (f += da(u, t)), f
    }

    function id(n) {
      ga(bt(), c(), cf() + n, !1)
    }

    function ga(n, t, i, r) {
      if (!r) if (3 == (3 & t[2])) {
        const r = n.preOrderCheckHooks;
        null !== r && hr(t, r, i)
      } else {
        const r = n.preOrderHooks;
        null !== r && cr(t, r, 0, i)
      }
      kt(i)
    }

    function nv(n, t = null, i = null, r) {
      const u = tv(n, t, i, r);
      return u.resolveInjectorInitializers(), u
    }

    function tv(n, t = null, i = null, r, u = new Set) {
      const f = [i || nt, ek(n)];
      return r = r || ("object" == typeof n ? void 0 : y(n)), new ck(f, t || la(), r || null, u)
    }

    function iv(n, t = u.Default) {
      const i = c();
      return null === i ? l(n, t) : el(p(), i, w(n), t)
    }

    function rv(n, t) {
      const i = n.contentQueries;
      if (null !== i) for (let r = 0; r < i.length; r += 2) {
        const u = i[r + 1];
        if (-1 !== u) {
          const f = n.data[u];
          vc(i[r]);
          f.contentQueries(2, t[u], u)
        }
      }
    }

    function nu(n, t, i, r, u, f, e, o, s, h, c) {
      const l = t.blueprint.slice();
      return l[0] = u, l[2] = 76 | r, (null !== c || n && 1024 & n[2]) && (l[2] |= 1024), sc(l), l[3] = l[15] = n, l[8] = i, l[10] = e || n && n[10], l[a] = o || n && n[a], l[12] = s || n && n[12] || null, l[9] = h || n && n[9] || null, l[6] = f, l[20] = function () {
        return nk++
      }(), l[21] = c, l[16] = 2 == t.type ? n[16] : l, l
    }

    function tu(n, t, i, r, u) {
      let e = n.data[t];
      if (null === e) e = function (n, t, i, r, u) {
        const f = cc(), o = lc(), e = n.data[t] = function (n, t, i, r, u, f) {
          return {
            type: i,
            index: r,
            insertBeforeIndex: null,
            injectorIndex: t ? t.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            componentOffset: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            value: u,
            attrs: f,
            mergedAttrs: null,
            localNames: null,
            initialInputs: void 0,
            inputs: null,
            outputs: null,
            tViews: null,
            next: null,
            projectionNext: null,
            child: null,
            parent: t,
            projection: null,
            styles: null,
            stylesWithoutHost: null,
            residualStyles: void 0,
            classes: null,
            classesWithoutHost: null,
            residualClasses: void 0,
            classBindings: 0,
            styleBindings: 0
          }
        }(0, o ? f : f && f.parent, i, t, r, u);
        return null === n.firstChild && (n.firstChild = e), null !== f && (o ? null == f.child && null !== e.parent && (f.child = e) : null === f.next && (f.next = e)), e
      }(n, t, i, r, u), function () {
        return f.lFrame.inI18n
      }() && (e.flags |= 32); else if (64 & e.type) {
        e.type = i;
        e.value = r;
        e.attrs = u;
        const n = function () {
          const n = f.lFrame, t = n.currentTNode;
          return n.isParent ? t : t.parent
        }();
        e.injectorIndex = null === n ? -1 : n.injectorIndex
      }
      return ai(e, !0), e
    }

    function uv(n, t, i, r) {
      if (0 === i) return -1;
      const u = t.length;
      for (let u = 0; u < i; u++) t.push(r), n.blueprint.push(r), n.data.push(null);
      return u
    }

    function de(n, t, i) {
      sf(t);
      try {
        const r = n.viewQuery;
        null !== r && io(1, r, i);
        const u = n.template;
        null !== u && fv(n, t, u, 1, i);
        n.firstCreatePass && (n.firstCreatePass = !1);
        n.staticContentQueries && rv(n, t);
        n.staticViewQueries && io(2, n.viewQuery, i);
        const f = n.components;
        null !== f && function (n, t) {
          for (let i = 0; i < t.length; i++) hd(n, t[i])
        }(t, f)
      } catch (r) {
        throw n.firstCreatePass && (n.incompleteFirstPass = !0, n.firstCreatePass = !1), r;
      } finally {
        t[2] &= -5;
        hf()
      }
    }

    function iu(n, t, i, r) {
      const u = t[2];
      if (128 != (128 & u)) {
        sf(t);
        try {
          sc(t), function (n) {
            return f.lFrame.bindingIndex = n
          }(n.bindingStartIndex);
          null !== i && fv(n, t, i, 2, r);
          const e = 3 == (3 & u);
          if (e) {
            const i = n.preOrderCheckHooks;
            null !== i && hr(t, i, null)
          } else {
            const i = n.preOrderHooks;
            null !== i && cr(t, i, 0, null);
            af(t, 0)
          }
          if (function (n) {
            for (let t = te(n); null !== t; t = ie(t)) if (t[2]) {
              const n = t[9];
              for (let t = 0; t < n.length; t++) {
                const i = n[t];
                512 & i[2] || ff(i[3], 1);
                i[2] |= 512
              }
            }
          }(t), function (n) {
            for (let t = te(n); null !== t; t = ie(t)) for (let n = 10; n < t.length; n++) {
              const i = t[n], r = i[1];
              or(i) && iu(r, i, r.template, i[8])
            }
          }(t), null !== n.contentQueries && rv(n, t), e) {
            const i = n.contentCheckHooks;
            null !== i && hr(t, i)
          } else {
            const i = n.contentHooks;
            null !== i && cr(t, i, 1);
            af(t, 1)
          }
          !function (n, t) {
            const i = n.hostBindingOpCodes;
            if (null !== i) try {
              for (let n = 0; n < i.length; n++) {
                const r = i[n];
                if (r < 0) kt(~r); else {
                  const u = r, f = i[++n], e = i[++n];
                  hb(f, u);
                  e(2, t[u])
                }
              }
            } finally {
              kt(-1)
            }
          }(n, t);
          const o = n.components;
          null !== o && function (n, t) {
            for (let i = 0; i < t.length; i++) sd(n, t[i])
          }(t, o);
          const s = n.viewQuery;
          if (null !== s && io(2, s, r), e) {
            const i = n.viewCheckHooks;
            null !== i && hr(t, i)
          } else {
            const i = n.viewHooks;
            null !== i && cr(t, i, 2);
            af(t, 2)
          }
          !0 === n.firstUpdatePass && (n.firstUpdatePass = !1);
          t[2] &= -41;
          512 & t[2] && (t[2] &= -513, ff(t[3], -1))
        } finally {
          hf()
        }
      }
    }

    function fv(n, t, i, r, u) {
      const f = cf(), e = 2 & r;
      try {
        kt(-1);
        e && t.length > 22 && ga(n, t, 22, !1);
        i(r, u)
      } finally {
        kt(f)
      }
    }

    function ev(n, t, i) {
      if (ic(t)) {
        const r = t.directiveEnd;
        for (let u = t.directiveStart; u < r; u++) {
          const t = n.data[u];
          t.contentQueries && t.contentQueries(1, i[u], u)
        }
      }
    }

    function ov(n, t, i) {
      hc() && (function (n, t, i, r) {
        const u = i.directiveStart, e = i.directiveEnd;
        er(i) && function (n, t, i) {
          const r = k(t, n), f = hv(i), u = n[10],
            e = ru(n, nu(n, f, null, i.onPush ? 32 : 16, r, t, u, u.createRenderer(r, i), null, null, null));
          n[t.index] = e
        }(t, i, n.data[u + i.componentOffset]);
        n.firstCreatePass || il(i, t);
        dt(r, t);
        const f = i.initialInputs;
        for (let r = u; r < e; r++) {
          const e = n.data[r], o = vi(t, n, r, i);
          dt(o, t);
          null !== f && ed(0, r - u, o, e, 0, f);
          ci(e) && (lt(i.index, t)[8] = vi(t, n, r, i))
        }
      }(n, t, i, k(i, t)), 64 == (64 & i.flags) && pv(n, t, i))
    }

    function sv(n, t, i = k) {
      const r = t.localNames;
      if (null !== r) {
        let u = t.index + 1;
        for (let f = 0; f < r.length; f += 2) {
          const e = r[f + 1], o = -1 === e ? i(t, n) : n[e];
          n[u++] = o
        }
      }
    }

    function hv(n) {
      const t = n.tView;
      return null === t || t.incompleteFirstPass ? n.tView = ge(1, null, n.template, n.decls, n.vars, n.directiveDefs, n.pipeDefs, n.viewQuery, n.schemas, n.consts) : t
    }

    function ge(n, t, i, r, u, f, e, o, s, h) {
      const c = 22 + r, a = c + u, l = function (n, t) {
        const i = [];
        for (let r = 0; r < t; r++) i.push(r < n ? null : gr);
        return i
      }(c, a), v = "function" == typeof h ? h() : h;
      return l[1] = {
        type: n,
        blueprint: l,
        template: i,
        queries: null,
        viewQuery: o,
        declTNode: t,
        data: l.slice().fill(null, c),
        bindingStartIndex: c,
        expandoStartIndex: a,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: "function" == typeof f ? f() : f,
        pipeRegistry: "function" == typeof e ? e() : e,
        firstChild: null,
        schemas: s,
        consts: v,
        incompleteFirstPass: !1
      }
    }

    function cv(n, t, i, r) {
      for (let u in n) if (n.hasOwnProperty(u)) {
        i = null === i ? {} : i;
        const f = n[u];
        null === r ? lv(i, t, u, f) : r.hasOwnProperty(u) && lv(i, t, r[u], f)
      }
      return i
    }

    function lv(n, t, i, r) {
      n.hasOwnProperty(i) ? n[i].push(t, r) : n[i] = [t, r]
    }

    function av(n, t) {
      const i = lt(t, n);
      16 & i[2] || (i[2] |= 32)
    }

    function vv(n, t, i, r) {
      let u = !1;
      if (hc()) {
        const o = null === r ? null : {"": -1}, h = function (n, t) {
          const u = n.directiveRegistry;
          let i = null, r = null;
          if (u) for (let f = 0; f < u.length; f++) {
            const e = u[f];
            if (nd(t, e.selectors, !1)) if (i || (i = []), ci(e)) if (null !== e.findHostDirectiveDefs) {
              const u = [];
              r = r || new Map;
              e.findHostDirectiveDefs(e, u, r);
              i.unshift(...u, e);
              no(n, t, u.length)
            } else i.unshift(e), no(n, t, 0); else r = r || new Map, e.findHostDirectiveDefs?.(e, i, r), i.push(e)
          }
          return null === i ? null : [i, r]
        }(n, i);
        let f, s;
        null === h ? f = s = null : [f, s] = h;
        null !== f && (u = !0, yv(n, t, i, f, o, s));
        o && function (n, t, i) {
          if (t) {
            const r = n.localNames = [];
            for (let n = 0; n < t.length; n += 2) {
              const u = i[t[n + 1]];
              if (null == u) throw new e(-301, !1);
              r.push(t[n], u)
            }
          }
        }(i, r, o)
      }
      return i.mergedAttrs = pf(i.mergedAttrs, i.attrs), u
    }

    function yv(n, t, i, r, u, f) {
      for (let u = 0; u < r.length; u++) bb(il(i, t), n, r[u].type);
      !function (n, t, i) {
        n.flags |= 1;
        n.directiveStart = t;
        n.directiveEnd = t + i;
        n.providerIndexes = t
      }(i, n.data.length, r.length);
      for (let n = 0; n < r.length; n++) {
        const t = r[n];
        t.providersResolver && t.providersResolver(t)
      }
      let o = !1, s = !1, e = uv(n, t, r.length, null);
      for (let f = 0; f < r.length; f++) {
        const h = r[f];
        i.mergedAttrs = pf(i.mergedAttrs, h.hostAttrs);
        fd(n, i, t, e, h);
        ud(e, h, u);
        null !== h.contentQueries && (i.flags |= 4);
        (null !== h.hostBindings || null !== h.hostAttrs || 0 !== h.hostVars) && (i.flags |= 64);
        const c = h.type.prototype;
        !o && (c.ngOnChanges || c.ngOnInit || c.ngDoCheck) && ((n.preOrderHooks || (n.preOrderHooks = [])).push(i.index), o = !0);
        !s && (c.ngOnChanges || c.ngDoCheck) && ((n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(i.index), s = !0);
        e++
      }
      !function (n, t, i) {
        const o = t.directiveEnd, s = n.data, f = t.attrs, e = [];
        let r = null, u = null;
        for (let n = t.directiveStart; n < o; n++) {
          const h = s[n], o = i ? i.get(h) : null, c = o ? o.outputs : null;
          r = cv(h.inputs, n, r, o ? o.inputs : null);
          u = cv(h.outputs, n, u, c);
          const l = null === r || null === f || ka(t) ? null : od(r, n, f);
          e.push(l)
        }
        null !== r && (r.hasOwnProperty("class") && (t.flags |= 8), r.hasOwnProperty("style") && (t.flags |= 16));
        t.initialInputs = e;
        t.inputs = r;
        t.outputs = u
      }(n, i, f)
    }

    function pv(n, t, i) {
      const r = i.directiveStart, u = i.directiveEnd, e = i.index, o = function () {
        return f.lFrame.currentDirectiveIndex
      }();
      try {
        kt(e);
        for (let i = r; i < u; i++) {
          const r = n.data[i], u = t[i];
          ef(i);
          (null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs) && rd(r, u)
        }
      } finally {
        kt(-1);
        ef(o)
      }
    }

    function rd(n, t) {
      null !== n.hostBindings && n.hostBindings(1, t)
    }

    function no(n, t, i) {
      t.componentOffset = i;
      (n.components || (n.components = [])).push(t.index)
    }

    function ud(n, t, i) {
      if (i) {
        if (t.exportAs) for (let r = 0; r < t.exportAs.length; r++) i[t.exportAs[r]] = n;
        ci(t) && (i[""] = n)
      }
    }

    function fd(n, t, i, r, u) {
      n.data[r] = u;
      const e = u.factory || (u.factory = li(u.type)), f = new vf(e, ci(u), iv);
      n.blueprint[r] = f;
      i[r] = f, function (n, t, i, r, u) {
        const f = u.hostBindings;
        if (f) {
          let u = n.hostBindingOpCodes;
          null === u && (u = n.hostBindingOpCodes = []);
          const e = ~t.index;
          (function (n) {
            let t = n.length;
            for (; t > 0;) {
              const i = n[--t];
              if ("number" == typeof i && i < 0) return i
            }
            return 0
          })(u) != e && u.push(e);
          u.push(i, r, f)
        }
      }(n, t, r, uv(n, i, u.hostVars, gr), u)
    }

    function ed(n, t, i, r, u, f) {
      const e = f[t];
      if (null !== e) {
        const n = r.setInput;
        for (let t = 0; t < e.length;) {
          const o = e[t++], u = e[t++], f = e[t++];
          null !== n ? r.setInput(i, f, o, u) : i[u] = f
        }
      }
    }

    function od(n, t, i) {
      let u = null, r = 0;
      for (; r < i.length;) {
        const f = i[r];
        if (0 !== f) if (5 !== f) {
          if ("number" == typeof f) break;
          if (n.hasOwnProperty(f)) {
            null === u && (u = []);
            const e = n[f];
            for (let n = 0; n < e.length; n += 2) if (e[n] === t) {
              u.push(f, e[n + 1], i[r + 1]);
              break
            }
          }
          r += 2
        } else r += 2; else r += 4
      }
      return u
    }

    function wv(n, t, i, r) {
      return [n, !0, !1, t, null, 0, r, i, null, null]
    }

    function sd(n, t) {
      const i = lt(t, n);
      if (or(i)) {
        const n = i[1];
        48 & i[2] ? iu(n, i, n.template, i[8]) : i[5] > 0 && to(i)
      }
    }

    function to(n) {
      for (let t = te(n); null !== t; t = ie(t)) for (let n = 10; n < t.length; n++) {
        const i = t[n];
        if (or(i)) if (512 & i[2]) {
          const n = i[1];
          iu(n, i, n.template, i[8])
        } else i[5] > 0 && to(i)
      }
      const t = n[1].components;
      if (null !== t) for (let i = 0; i < t.length; i++) {
        const r = lt(t[i], n);
        or(r) && r[5] > 0 && to(r)
      }
    }

    function hd(n, t) {
      const i = lt(t, n), r = i[1];
      (function (n, t) {
        for (let i = t.length; i < n.blueprint.length; i++) t.push(n.blueprint[i])
      })(r, i);
      de(r, i, i[8])
    }

    function ru(n, t) {
      return n[13] ? n[14][4] = t : n[13] = t, n[14] = t, t
    }

    function bv(n) {
      for (; n;) {
        n[2] |= 32;
        const t = ne(n);
        if (rb(n) && !t) return n;
        n = t
      }
      return null
    }

    function kv(n, t, i, r = !0) {
      const u = t[10];
      u.begin && u.begin();
      try {
        iu(n, t, n.template, i)
      } catch (f) {
        throw r && ny(t, f), f;
      } finally {
        u.end && u.end()
      }
    }

    function io(n, t, i) {
      vc(0);
      t(n, i)
    }

    function dv(n) {
      return n[7] || (n[7] = [])
    }

    function gv(n) {
      return n.cleanup || (n.cleanup = [])
    }

    function ny(n, t) {
      const i = n[9], r = i ? i.get(dr, null) : null;
      r && r.handleError(t)
    }

    function ro(n, t, i, r, u) {
      for (let f = 0; f < i.length;) {
        const e = i[f++], o = i[f++], s = t[e], h = n.data[e];
        null !== h.setInput ? h.setInput(s, u, r, o) : s[o] = u
      }
    }

    function cd(n, t, i) {
      const r = function (n, t) {
        return tt(t[n])
      }(t, n);
      !function (n, t, i) {
        n.setValue(t, i)
      }(n[a], r, i)
    }

    function uo(n, t, i) {
      let r = i ? n.styles : null, u = i ? n.classes : null, f = 0;
      if (null !== t) for (let n = 0; n < t.length; n++) {
        const i = t[n];
        "number" == typeof i ? f = i : 1 == f ? u = rh(u, i) : 2 == f && (r = rh(r, i + ": " + t[++n] + ";"))
      }
      i ? n.styles = r : n.stylesWithoutHost = r;
      i ? n.classes = u : n.classesWithoutHost = u
    }

    function uu(n, t, i, r, u = !1) {
      for (; null !== i;) {
        const f = t[i.index];
        if (null !== f && r.push(tt(f)), ot(f)) for (let n = 10; n < f.length; n++) {
          const t = f[n], i = t[1].firstChild;
          null !== i && uu(t[1], t, i, r)
        }
        const e = i.type;
        if (8 & e) uu(n, t, i.child, r); else if (32 & e) {
          const u = gf(i, t);
          let n;
          for (; n = u();) r.push(n)
        } else if (16 & e) {
          const n = ia(t, i);
          if (Array.isArray(n)) r.push(...n); else {
            const i = ne(t[16]);
            uu(i[1], i, n, r, !0)
          }
        }
        i = u ? i.projectionNext : i.next
      }
      return r
    }

    function ty(n) {
      const t = [];
      for (let i in n) n.hasOwnProperty(i) && t.push({propName: n[i], templateName: i});
      return t
    }

    function pd() {
      const n = p();
      lf(c()[1], n)
    }

    function ry() {
      if (!fu) {
        const n = ft.Symbol;
        if (n && n.iterator) fu = n.iterator; else {
          const n = Object.getOwnPropertyNames(Map.prototype);
          for (let t = 0; t < n.length; ++t) {
            const i = n[t];
            "entries" !== i && "size" !== i && Map.prototype[i] === Map.prototype.entries && (fu = i)
          }
        }
      }
      return fu
    }

    function uy(n) {
      return !!fo(n) && (Array.isArray(n) || !(n instanceof Map) && ry() in n)
    }

    function fo(n) {
      return null !== n && ("function" == typeof n || "object" == typeof n)
    }

    function fy(n, t, i) {
      return !Object.is(n[t], i) && (n[t] = i, !0)
    }

    function wd(n, t, i, r, u, f, e, o) {
      const s = c(), l = bt(), y = n + 22, h = l.firstCreatePass ? function (n, t, i, r, u, f, e, o, s) {
        const c = t.consts, h = tu(t, n, 4, e || null, sr(c, o));
        vv(t, i, h, sr(c, s));
        lf(t, h);
        const l = h.tViews = ge(2, h, r, u, f, t.directiveRegistry, t.pipeRegistry, null, t.schemas, c);
        return null !== t.queries && (t.queries.template(t, h), l.queries = t.queries.embeddedTView(h)), h
      }(y, l, s, t, i, r, u, f, e) : l.data[y];
      ai(h, !1);
      const v = s[a].createComment("");
      ee(l, s, v, h);
      dt(v, s);
      ru(s, s[y] = wv(v, s, v, h));
      uf(h) && ov(l, s, h);
      null != e && sv(s, h, o)
    }

    function bd(n) {
      return function (n, t) {
        return n[t]
      }(function () {
        return f.lFrame.contextLView
      }(), 22 + n)
    }

    function ey(n, t, i) {
      const r = c();
      return fy(r, ac(), t) && function (n, t, i, r, u, f, e, o) {
        const c = k(t, i);
        let s, h = t.inputs;
        !o && null != h && (s = h[r]) ? (ro(n, i, s, r, u), er(t) && av(i, t.index)) : 3 & t.type && (r = function (n) {
          return "class" === n ? "className" : "for" === n ? "htmlFor" : "formaction" === n ? "formAction" : "innerHtml" === n ? "innerHTML" : "readonly" === n ? "readOnly" : "tabindex" === n ? "tabIndex" : n
        }(r), u = null != e ? e(u, t.value || "", r) : u, f.setProperty(c, r, u))
      }(bt(), function () {
        const n = f.lFrame;
        return oc(n.tView, n.selectedIndex)
      }(), r, n, t, r[a], i, !1), ey
    }

    function oy(n, t, i, r, u) {
      const f = u ? "class" : "style";
      ro(n, i, t.inputs[f], f, r)
    }

    function eo(n, t, i, r) {
      const u = c(), o = bt(), s = 22 + n, l = u[a], h = u[s] = kl(l, t, function () {
        return f.lFrame.currentNamespace
      }()), e = o.firstCreatePass ? function (n, t, i, r, u, f, e) {
        const s = t.consts, o = tu(t, n, 2, u, sr(s, f));
        return vv(t, i, o, sr(s, e)), null !== o.attrs && uo(o, o.attrs, !1), null !== o.mergedAttrs && uo(o, o.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, o), o
      }(s, o, u, 0, t, i, r) : o.data[s];
      return ai(e, !0), ua(l, h, e), 32 != (32 & e.flags) && ee(o, u, h, e), 0 === function () {
        return f.lFrame.elementDepthCount
      }() && dt(h, u), function () {
        f.lFrame.elementDepthCount++
      }(), uf(e) && (ov(o, u, e), ev(o, e, u)), null !== r && sv(u, e), eo
    }

    function oo() {
      let t = p();
      lc() ? function () {
        f.lFrame.isParent = !1
      }() : (t = t.parent, ai(t, !1));
      const n = t;
      !function () {
        f.lFrame.elementDepthCount--
      }();
      const i = bt();
      return i.firstCreatePass && (lf(i, t), ic(t) && i.queries.elementEnd(t)), null != n.classesWithoutHost && function (n) {
        return 0 != (8 & n.flags)
      }(n) && oy(i, n, c(), n.classesWithoutHost, !0), null != n.stylesWithoutHost && function (n) {
        return 0 != (16 & n.flags)
      }(n) && oy(i, n, c(), n.stylesWithoutHost, !1), oo
    }

    function sy(n, t, i, r) {
      return eo(n, t, i, r), oo(), sy
    }

    function kd() {
      return c()
    }

    function so(n) {
      return !!n && "function" == typeof n.then
    }

    function hy(n) {
      return !!n && "function" == typeof n.subscribe
    }

    function cy(n, t, i, r) {
      const u = c(), f = bt(), e = p();
      return function (n, t, i, r, u, f, e) {
        const v = uf(r), o = n.firstCreatePass && gv(n), c = t[8], s = dv(t);
        let l = !0;
        if (3 & r.type || e) {
          const a = k(r, t), p = e ? e(a) : a, y = s.length, w = e ? n => e(tt(n[r.index])) : r.index;
          let h = null;
          if (!e && v && (h = function (n, t, i, r) {
            const u = n.cleanup;
            if (null != u) for (let n = 0; n < u.length - 1; n += 2) {
              const f = u[n];
              if (f === i && u[n + 1] === r) {
                const i = t[7], r = u[n + 2];
                return i.length > r ? i[r] : null
              }
              "string" == typeof f && (n += 2)
            }
            return null
          }(n, t, u, r.index)), null !== h) (h.__ngLastListenerFn__ || h).__ngNextListenerFn__ = f, h.__ngLastListenerFn__ = f, l = !1; else {
            f = ay(r, t, c, f, !1);
            const n = i.listen(p, u, f);
            s.push(f, n);
            o && o.push(u, w, y, y + 1)
          }
        } else f = ay(r, t, c, f, !1);
        const a = r.outputs;
        let h;
        if (l && null !== a && (h = a[u])) {
          const n = h.length;
          if (n) for (let i = 0; i < n; i += 2) {
            const e = t[h[i]][h[i + 1]].subscribe(f), n = s.length;
            s.push(f, e);
            o && o.push(u, r.index, n, -(n + 1))
          }
        }
      }(f, u, u[a], e, n, t, r), cy
    }

    function ly(n, t, i, r) {
      try {
        return !1 !== i(r)
      } catch (u) {
        return ny(n, u), !1
      }
    }

    function ay(n, t, i, r, u) {
      return function f(i) {
        if (i === Function) return r;
        bv(n.componentOffset > -1 ? lt(n.index, t) : t);
        let e = ly(t, 0, r, i), o = f.__ngNextListenerFn__;
        for (; o;) e = ly(t, 0, o, i) && e, o = o.__ngNextListenerFn__;
        return u && !1 === e && (i.preventDefault(), i.returnValue = !1), e
      }
    }

    function gd(n, t = "") {
      const r = c(), i = bt(), u = n + 22, f = i.firstCreatePass ? tu(i, u, 1, t, null) : i.data[u],
        e = r[u] = function (n, t) {
          return n.createText(t)
        }(r[a], t);
      ee(i, r, e, f);
      ai(f, !1)
    }

    function vy(n, t, i) {
      const r = c(), u = function (n, t, i, r) {
        return fy(n, ac(), i) ? t + eh(i) + r : gr
      }(r, n, t, i);
      return u !== gr && cd(r, cf(), u), vy
    }

    function py(n) {
      const i = function (n) {
        return n.toLowerCase().replace(/_/g, "-")
      }(n);
      let t = wy(i);
      if (t) return t;
      const r = i.split("-")[0];
      if (t = wy(r), t) return t;
      if ("en" === r) return yy;
      throw new e(701, !1);
    }

    function ng(n) {
      return py(n)[r.PluralCase]
    }

    function wy(n) {
      return n in ho || (ho[n] = ft.ng && ft.ng.common && ft.ng.common.locales && ft.ng.common.locales[n]), ho[n]
    }

    function rg(n, t) {
      return new by(n, t ?? null)
    }

    function co(n) {
      return t => {
        setTimeout(n, void 0, t)
      }
    }

    function og() {
      return function (n, t) {
        return 4 & n.type ? new eg(t, n, kr(n, t)) : null
      }(p(), c())
    }

    function sg() {
      return function (n, t) {
        let i;
        const r = t[n.index];
        if (ot(r)) i = r; else {
          let u;
          if (8 & n.type) u = tt(r); else {
            const i = t[a];
            u = i.createComment("");
            const r = k(n, t);
            pr(i, fe(i, r), u, function (n, t) {
              return n.nextSibling(t)
            }(i, r), !1)
          }
          t[n.index] = i = wv(r, t, u, n);
          ru(t, i)
        }
        return new gy(i, n, t)
      }(p(), c())
    }

    function np(n) {
      return n[8]
    }

    function lo(n) {
      return n[8] || (n[8] = [])
    }

    function su() {
    }

    function vo() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()))
    }

    function po(n) {
      typeof Zone > "u" ? yg.then(() => {
        n && n.apply(null, null)
      }) : Zone.current.scheduleMicroTask("scheduleMicrotask", n)
    }

    function wo(n) {
      if (0 == n._nesting && !n.hasPendingMicrotasks && !n.isStable) try {
        n._nesting++;
        n.onMicrotaskEmpty.emit(null)
      } finally {
        if (n._nesting--, !n.hasPendingMicrotasks) try {
          n.runOutsideAngular(() => n.onStable.emit(null))
        } finally {
          n.isStable = !0
        }
      }
    }

    function bo(n) {
      n.hasPendingMicrotasks = !!(n._hasPendingMicrotasks || (n.shouldCoalesceEventChangeDetection || n.shouldCoalesceRunChangeDetection) && -1 !== n.lastRequestAnimationFrameId)
    }

    function rp(n) {
      n._nesting++;
      n.isStable && (n.isStable = !1, n.onUnstable.emit(null))
    }

    function up(n) {
      n._nesting--;
      wo(n)
    }

    function cp(n, t, i = []) {
      const r = `Platform: ${t}`, u = new h(r);
      return (t = []) => {
        let f = lp();
        if (!f || f.injector.get(sp, !1)) {
          const f = [...i, ...t, {provide: u, useValue: !0}];
          n ? n(f) : function (n) {
            if (di && !di.get(sp, !1)) throw new e(400, !1);
            di = n;
            const t = n.get(ap);
            (function (n) {
              const t = n.get(ip, null);
              t && t.forEach(n => n())
            })(n)
          }(function (n = [], t) {
            return bi.create({
              name: t,
              providers: [{provide: ae, useValue: "platform"}, {
                provide: hp,
                useValue: new Set([() => di = null])
              }, ...n]
            })
          }(f, r))
        }
        return function () {
          const n = lp();
          if (!n) throw new e(401, !1);
          return n
        }()
      }
    }

    function lp() {
      return di?.get(ap) ?? null
    }

    function vp(n, t) {
      return Array.isArray(t) ? t.reduce(vp, n) : {...n, ...t}
    }

    function hu(n, t) {
      const i = n.indexOf(t);
      i > -1 && n.splice(i, 1)
    }

    function kg() {
    }

    function gg(n) {
      return function (n, t, i) {
        if (er(n) && !i) {
          const i = lt(n.index, t);
          return new ki(i, i)
        }
        return 47 & n.type ? new ki(t[16], t) : null
      }(p(), c(), 16 == (16 & n))
    }

    function wp(n, t, i) {
      const r = n.previousIndex;
      if (null === r) return r;
      let u = 0;
      return i && r < i.length && (u = i[r]), r + t + u
    }

    function bp() {
      return new kp([new nn])
    }

    function dp() {
      return new gp([new en])
    }

    var u, ct, et, at, yy, r;
    i.d(t, {
      AFp: () => cg,
      ip1: () => tp,
      CZH: () => ao,
      hGG: () => cn,
      sBO: () => dg,
      EJc: () => vg,
      SBq: () => va,
      qLn: () => dr,
      OlP: () => h,
      zs3: () => bi,
      ZZ4: () => kp,
      aQg: () => gp,
      soG: () => yo,
      h0i: () => ou,
      R0b: () => rt,
      Lbi: () => lg,
      g9A: () => ip,
      Qsj: () => yk,
      FYo: () => ya,
      JOm: () => at,
      Rgc: () => ky,
      dDg: () => bg,
      eoX: () => op,
      GfV: () => pa,
      s_b: () => dy,
      ifc: () => et,
      Lck: () => rg,
      eFA: () => cp,
      G48: () => kg,
      _c5: () => hn,
      zSh: () => ae,
      wAp: () => r,
      vHH: () => e,
      lri: () => fp,
      rWj: () => ep,
      cg1: () => py,
      kL8: () => ng,
      dqk: () => ft,
      QGY: () => so,
      F4k: () => hy,
      RDi: () => fk,
      AaK: () => y,
      TTD: () => rc,
      xp6: () => id,
      Xpm: () => bh,
      lG2: () => tb,
      Yz7: () => b,
      cJS: () => oh,
      oAB: () => dh,
      Yjl: () => ib,
      Y36: () => iv,
      _UZ: () => sy,
      qZA: () => oo,
      TgZ: () => eo,
      EpF: () => kd,
      LFG: () => l,
      $8M: () => gb,
      NdJ: () => cy,
      kcU: () => ab,
      O4$: () => lb,
      Q6J: () => ey,
      MAs: () => bd,
      KtG: () => sb,
      CHM: () => ob,
      YNc: () => wd,
      _uU: () => gd,
      hij: () => vy
    });
    const cu = go(n => function (t) {
      n(this);
      this.message = t ? `${t.length} errors occurred during unsubscription:
${t.map((n, t) => `${t + 1}) ${n.toString()}`).join("\n  ")}` : "";
      this.name = "UnsubscriptionError";
      this.errors = t
    });

    class ut {
      constructor(n) {
        this.initialTeardown = n;
        this.closed = !1;
        this._parentage = null;
        this._finalizers = null
      }

      unsubscribe() {
        let n;
        if (!this.closed) {
          this.closed = !0;
          const {_parentage: t} = this;
          if (t) if (this._parentage = null, Array.isArray(t)) for (const n of t) n.remove(this); else t.remove(this);
          const {initialTeardown: i} = this;
          if (s(i)) try {
            i()
          } catch (t) {
            n = t instanceof cu ? t.errors : [t]
          }
          const {_finalizers: r} = this;
          if (r) {
            this._finalizers = null;
            for (const t of r) try {
              is(t)
            } catch (i) {
              n = n ?? [];
              i instanceof cu ? n = [...n, ...i.errors] : n.push(i)
            }
          }
          if (n) throw new cu(n);
        }
      }

      add(n) {
        var t;
        if (n && n !== this) if (this.closed) is(n); else {
          if (n instanceof ut) {
            if (n.closed || n._hasParent(this)) return;
            n._addParent(this)
          }
          (this._finalizers = null !== (t = this._finalizers) && void 0 !== t ? t : []).push(n)
        }
      }

      _hasParent(n) {
        const {_parentage: t} = this;
        return t === n || Array.isArray(t) && t.includes(n)
      }

      _addParent(n) {
        const {_parentage: t} = this;
        this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n
      }

      _removeParent(n) {
        const {_parentage: t} = this;
        t === n ? this._parentage = null : Array.isArray(t) && lu(t, n)
      }

      remove(n) {
        const {_finalizers: t} = this;
        t && lu(t, n);
        n instanceof ut && n._removeParent(this)
      }
    }

    ut.EMPTY = (() => {
      const n = new ut;
      return n.closed = !0, n
    })();
    const ns = ut.EMPTY;
    const yt = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1
    }, gi = {
      setTimeout(n, t, ...i) {
        const {delegate: r} = gi;
        return r?.setTimeout ? r.setTimeout(n, t, ...i) : setTimeout(n, t, ...i)
      }, clearTimeout(n) {
        const {delegate: t} = gi;
        return (t?.clearTimeout || clearTimeout)(n)
      }, delegate: void 0
    };
    const nw = au("C", void 0, void 0);
    let pt = null;

    class vu extends ut {
      constructor(n) {
        super();
        this.isStopped = !1;
        n ? (this.destination = n, ts(n) && n.add(this)) : this.destination = rw
      }

      static create(n, t, i) {
        return new ui(n, t, i)
      }

      next(n) {
        this.isStopped ? pu(function (n) {
          return au("N", n, void 0)
        }(n), this) : this._next(n)
      }

      error(n) {
        this.isStopped ? pu(function (n) {
          return au("E", void 0, n)
        }(n), this) : (this.isStopped = !0, this._error(n))
      }

      complete() {
        this.isStopped ? pu(nw, this) : (this.isStopped = !0, this._complete())
      }

      unsubscribe() {
        this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null)
      }

      _next(n) {
        this.destination.next(n)
      }

      _error(n) {
        try {
          this.destination.error(n)
        } finally {
          this.unsubscribe()
        }
      }

      _complete() {
        try {
          this.destination.complete()
        } finally {
          this.unsubscribe()
        }
      }
    }

    const tw = Function.prototype.bind;

    class iw {
      constructor(n) {
        this.partialObserver = n
      }

      next(n) {
        const {partialObserver: t} = this;
        if (t.next) try {
          t.next(n)
        } catch (i) {
          tr(i)
        }
      }

      error(n) {
        const {partialObserver: t} = this;
        if (t.error) try {
          t.error(n)
        } catch (i) {
          tr(i)
        } else tr(n)
      }

      complete() {
        const {partialObserver: n} = this;
        if (n.complete) try {
          n.complete()
        } catch (t) {
          tr(t)
        }
      }
    }

    class ui extends vu {
      constructor(n, t, i) {
        let r;
        if (super(), s(n) || !n) r = {next: n ?? void 0, error: t ?? void 0, complete: i ?? void 0}; else {
          let t;
          this && yt.useDeprecatedNextContext ? (t = Object.create(n), t.unsubscribe = () => this.unsubscribe(), r = {
            next: n.next && yu(n.next, t),
            error: n.error && yu(n.error, t),
            complete: n.complete && yu(n.complete, t)
          }) : r = n
        }
        this.destination = new iw(r)
      }
    }

    const rw = {
      closed: !0, next: us, error: function (n) {
        throw n;
      }, complete: us
    }, wu = "function" == typeof Symbol && Symbol.observable || "@@observable";
    let v = (() => {
      class n {
        constructor(n) {
          n && (this._subscribe = n)
        }

        lift(t) {
          const i = new n;
          return i.source = this, i.operator = t, i
        }

        subscribe(n, t, i) {
          const r = function (n) {
            return n && n instanceof vu || function (n) {
              return n && s(n.next) && s(n.error) && s(n.complete)
            }(n) && ts(n)
          }(n) ? n : new ui(n, t, i);
          return nr(() => {
            const {operator: n, source: t} = this;
            r.add(n ? n.call(r, t) : t ? this._subscribe(r) : this._trySubscribe(r))
          }), r
        }

        _trySubscribe(n) {
          try {
            return this._subscribe(n)
          } catch (t) {
            n.error(t)
          }
        }

        forEach(n, t) {
          return new (t = es(t))((t, i) => {
            const r = new ui({
              next: t => {
                try {
                  n(t)
                } catch (u) {
                  i(u);
                  r.unsubscribe()
                }
              }, error: i, complete: t
            });
            this.subscribe(r)
          })
        }

        _subscribe(n) {
          var t;
          if (null !== (t = this.source) && void 0 !== t) return t.subscribe(n)
        }

        [wu]() {
          return this
        }

        pipe(...n) {
          return function (n) {
            return 0 === n.length ? fs : 1 === n.length ? n[0] : function (t) {
              return n.reduce((n, t) => t(n), t)
            }
          }(n)(this)
        }

        toPromise(n) {
          return new (n = es(n))((n, t) => {
            let i;
            this.subscribe(n => i = n, n => t(n), () => n(i))
          })
        }
      }

      return n.create = t => new n(t), n
    })();
    const uw = go(n => function () {
      n(this);
      this.name = "ObjectUnsubscribedError";
      this.message = "object unsubscribed"
    });
    let os = (() => {
      class n extends v {
        constructor() {
          super();
          this.closed = !1;
          this.currentObservers = null;
          this.observers = [];
          this.isStopped = !1;
          this.hasError = !1;
          this.thrownError = null
        }

        lift(n) {
          const t = new ss(this, this);
          return t.operator = n, t
        }

        _throwIfClosed() {
          if (this.closed) throw new uw;
        }

        next(n) {
          nr(() => {
            if (this._throwIfClosed(), !this.isStopped) {
              this.currentObservers || (this.currentObservers = Array.from(this.observers));
              for (const t of this.currentObservers) t.next(n)
            }
          })
        }

        error(n) {
          nr(() => {
            if (this._throwIfClosed(), !this.isStopped) {
              this.hasError = this.isStopped = !0;
              this.thrownError = n;
              const {observers: t} = this;
              for (; t.length;) t.shift().error(n)
            }
          })
        }

        complete() {
          nr(() => {
            if (this._throwIfClosed(), !this.isStopped) {
              this.isStopped = !0;
              const {observers: n} = this;
              for (; n.length;) n.shift().complete()
            }
          })
        }

        unsubscribe() {
          this.isStopped = this.closed = !0;
          this.observers = this.currentObservers = null
        }

        get observed() {
          var n;
          return (null === (n = this.observers) || void 0 === n ? void 0 : n.length) > 0
        }

        _trySubscribe(n) {
          return this._throwIfClosed(), super._trySubscribe(n)
        }

        _subscribe(n) {
          return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
        }

        _innerSubscribe(n) {
          const {hasError: i, isStopped: r, observers: t} = this;
          return i || r ? ns : (this.currentObservers = null, t.push(n), new ut(() => {
            this.currentObservers = null, lu(t, n)
          }))
        }

        _checkFinalizedStatuses(n) {
          const {hasError: t, thrownError: i, isStopped: r} = this;
          t ? n.error(i) : r && n.complete()
        }

        asObservable() {
          const n = new v;
          return n.source = this, n
        }
      }

      return n.create = (n, t) => new ss(n, t), n
    })();

    class ss extends os {
      constructor(n, t) {
        super();
        this.destination = n;
        this.source = t
      }

      next(n) {
        var t, i;
        null === (i = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === i || i.call(t, n)
      }

      error(n) {
        var t, i;
        null === (i = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === i || i.call(t, n)
      }

      complete() {
        var n, t;
        null === (t = null === (n = this.destination) || void 0 === n ? void 0 : n.complete) || void 0 === t || t.call(n)
      }

      _subscribe(n) {
        var t, i;
        return null !== (i = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(n)) && void 0 !== i ? i : ns
      }
    }

    class fw extends vu {
      constructor(n, t, i, r, u, f) {
        super(n);
        this.onFinalize = u;
        this.shouldUnsubscribe = f;
        this._next = t ? function (i) {
          try {
            t(i)
          } catch (r) {
            n.error(r)
          }
        } : super._next;
        this._error = r ? function (t) {
          try {
            r(t)
          } catch (i) {
            n.error(i)
          } finally {
            this.unsubscribe()
          }
        } : super._error;
        this._complete = i ? function () {
          try {
            i()
          } catch (t) {
            n.error(t)
          } finally {
            this.unsubscribe()
          }
        } : super._complete
      }

      unsubscribe() {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          const {closed: t} = this;
          super.unsubscribe();
          t || (null === (n = this.onFinalize) || void 0 === n || n.call(this))
        }
      }
    }

    const hs = n => n && "number" == typeof n.length && "function" != typeof n;
    const ys = function () {
      return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }();
    const sw = new v(n => n.complete());
    const cw = o({__forward_ref__: o});

    class e extends Error {
      constructor(n, t) {
        super(function (n, t) {
          return `NG0${Math.abs(n)}${t ? ": " + t.trim() : ""}`
        }(n, t));
        this.code = n
      }
    }

    const ch = o({"ɵprov": o}), lh = o({"ɵinj": o}), ah = o({ngInjectableDef: o}), aw = o({ngInjectorDef: o});
    u = (() => ((u = u || {})[u.Default = 0] = "Default", u[u.Host = 1] = "Host", u[u.Self = 2] = "Self", u[u.SkipSelf = 4] = "SkipSelf", u[u.Optional = 8] = "Optional", u))();
    let gu;
    const ft = (() => typeof globalThis < "u" && globalThis || typeof global < "u" && global || typeof window < "u" && window || typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self)(),
      ei = {}, nf = "__NG_DI_FLAG__", rr = "ngTempTokenPath", vw = /\n/gm, yh = "__source";
    let oi;
    ct = (() => ((ct = ct || {})[ct.OnPush = 0] = "OnPush", ct[ct.Default = 1] = "Default", ct))();
    et = (() => {
      return (n = et || (et = {}))[n.Emulated = 0] = "Emulated", n[n.None = 2] = "None", n[n.ShadowDom = 3] = "ShadowDom", et;
      var n
    })();
    const fr = {}, nt = [], ww = o({"ɵcmp": o}), bw = o({"ɵdir": o}), kw = o({"ɵpipe": o}), dw = o({"ɵmod": o}),
      wh = o({"ɵfac": o}), si = o({__NG_ELEMENT_ID__: o});
    let gw = 0;
    const tb = bh;
    const a = 11;

    class ub {
      constructor(n, t, i) {
        this.previousValue = n;
        this.currentValue = t;
        this.firstChange = i
      }

      isFirstChange() {
        return this.firstChange
      }
    }

    rc.ngInherit = !0;
    const fc = "__ngSimpleChanges__";
    const f = {lFrame: wc(null), bindingsEnabled: !0};
    const kc = bc;

    class vf {
      constructor(n, t, i) {
        this.factory = n;
        this.resolving = !1;
        this.canSeeViewProviders = t;
        this.injectImpl = i
      }
    }

    let wf = !0;
    let wb = 0;
    const it = {};

    class yi {
      constructor(n, t) {
        this._tNode = n;
        this._lView = t
      }

      get(n, t, i) {
        return el(this._tNode, this._lView, n, ur(i), t)
      }
    }

    const vr = "__parameters__";

    class h {
      constructor(n, t) {
        this._desc = n;
        this.ngMetadataName = "InjectionToken";
        this.ɵprov = void 0;
        "number" == typeof t ? this.__NG_ELEMENT_ID__ = t : void 0 !== t && (this.ɵprov = b({
          token: this,
          providedIn: t.providedIn || "root",
          factory: t.factory
        }))
      }

      get multi() {
        return this
      }

      toString() {
        return `InjectionToken ${this._desc}`
      }
    }

    const vl = ph(ll("Optional"), 8), yl = ph(ll("SkipSelf"), 4);
    at = (() => ((at = at || {})[at.Important = 1] = "Important", at[at.DashCase = 2] = "DashCase", at))();
    const pl = new Map;
    let nk = 0;
    const wl = "__ngContext__";
    let ik, rk = function (n, t, i) {
      return 40 & n.type ? k(n, i) : null
    };
    const fa = new h("ENVIRONMENT_INITIALIZER"), ea = new h("INJECTOR", -1), oa = new h("INJECTOR_DEF_TYPES");

    class sa {
      get(n, t = ei) {
        if (t === ei) {
          const t = new Error(`NullInjectorError: No provider for ${y(n)}!`);
          throw t.name = "NullInjectorError", t;
        }
        return t
      }
    }

    const sk = o({provide: String, useValue: o});
    const ae = new h("Set Injector scope."), br = {}, hk = {};
    let ve;

    class wi {
    }

    class ck extends wi {
      get destroyed() {
        return this._destroyed
      }

      constructor(n, t, i, r) {
        super();
        this.parent = t;
        this.source = i;
        this.scopes = r;
        this.records = new Map;
        this._ngOnDestroyHooks = new Set;
        this._onDestroyHooks = [];
        this._destroyed = !1;
        pe(n, n => this.processProvider(n));
        this.records.set(ea, ri(void 0, this));
        r.has("environment") && this.records.set(wi, ri(void 0, this));
        const f = this.records.get(ae);
        null != f && "string" == typeof f.value && this.scopes.add(f.value);
        this.injectorDefTypes = new Set(this.get(oa.multi, nt, u.Self))
      }

      destroy() {
        this.assertNotDestroyed();
        this._destroyed = !0;
        try {
          for (const n of this._ngOnDestroyHooks) n.ngOnDestroy();
          for (const n of this._onDestroyHooks) n()
        } finally {
          this.records.clear();
          this._ngOnDestroyHooks.clear();
          this.injectorDefTypes.clear();
          this._onDestroyHooks.length = 0
        }
      }

      onDestroy(n) {
        this._onDestroyHooks.push(n)
      }

      runInContext(n) {
        this.assertNotDestroyed();
        const t = ti(this), i = g(void 0);
        try {
          return n()
        } finally {
          ti(t);
          g(i)
        }
      }

      get(n, t = ei, i = u.Default) {
        this.assertNotDestroyed();
        i = ur(i);
        const f = ti(this), e = g(void 0);
        try {
          if (!(i & u.SkipSelf)) {
            let t = this.records.get(n);
            if (void 0 === t) {
              const i = function (n) {
                return "function" == typeof n || "object" == typeof n && n instanceof h
              }(n) && du(n);
              t = i && this.injectableDefInScope(i) ? ri(ye(n), br) : null;
              this.records.set(n, t)
            }
            if (null != t) return this.hydrate(n, t)
          }
          return (i & u.Self ? la() : this.parent).get(n, t = i & u.Optional && t === ei ? null : t)
        } catch (r) {
          if ("NullInjectorError" === r.name) {
            if ((r[rr] = r[rr] || []).unshift(y(n)), f) throw r;
            return function (n, t, i, r) {
              const u = n[rr];
              throw t[yh] && u.unshift(t[yh]), n.message = function (n, t, i, r = null) {
                n = n && "\n" === n.charAt(0) && "ɵ" == n.charAt(1) ? n.slice(2) : n;
                let u = y(t);
                if (Array.isArray(t)) u = t.map(y).join(" -> "); else if ("object" == typeof t) {
                  let n = [];
                  for (let i in t) if (t.hasOwnProperty(i)) {
                    let r = t[i];
                    n.push(i + ":" + ("string" == typeof r ? JSON.stringify(r) : y(r)))
                  }
                  u = `{${n.join(", ")}}`
                }
                return `${i}${r ? "(" + r + ")" : ""}[${u}]: ${n.replace(vw, "\n  ")}`
              }("\n" + n.message, u, i, r), n.ngTokenPath = u, n[rr] = null, n;
            }(r, n, "R3InjectorError", this.source)
          }
          throw r;
        } finally {
          g(e);
          ti(f)
        }
      }

      resolveInjectorInitializers() {
        const n = ti(this), t = g(void 0);
        try {
          const n = this.get(fa.multi, nt, u.Self);
          for (const t of n) t()
        } finally {
          ti(n);
          g(t)
        }
      }

      toString() {
        const n = [], t = this.records;
        for (const i of t.keys()) n.push(y(i));
        return `R3Injector[${n.join(", ")}]`
      }

      assertNotDestroyed() {
        if (this._destroyed) throw new e(205, !1);
      }

      processProvider(n) {
        let t = le(n = w(n)) ? n : w(n && n.provide);
        const i = function (n) {
          return ca(n) ? ri(void 0, n.useValue) : ri(function (n) {
            let t;
            if (le(n)) {
              const t = w(n);
              return li(t) || ye(t)
            }
            if (ca(n)) t = () => w(n.useValue); else if (function (n) {
              return !(!n || !n.useFactory)
            }(n)) t = () => n.useFactory(...tf(n.deps || [])); else if (function (n) {
              return !(!n || !n.useExisting)
            }(n)) t = () => l(w(n.useExisting)); else {
              const i = w(n && (n.useClass || n.provide));
              if (!function (n) {
                return !!n.deps
              }(n)) return li(i) || ye(i);
              t = () => new i(...tf(n.deps))
            }
            return t
          }(n), br)
        }(n);
        if (le(n) || !0 !== n.multi) this.records.get(t); else {
          let i = this.records.get(t);
          i || (i = ri(void 0, br, !0), i.factory = () => tf(i.multi), this.records.set(t, i));
          t = n;
          i.multi.push(n)
        }
        this.records.set(t, i)
      }

      hydrate(n, t) {
        return t.value === br && (t.value = hk, t.value = t.factory()), "object" == typeof t.value && t.value && function (n) {
          return null !== n && "object" == typeof n && "function" == typeof n.ngOnDestroy
        }(t.value) && this._ngOnDestroyHooks.add(t.value), t.value
      }

      injectableDefInScope(n) {
        if (!n.providedIn) return !1;
        const t = w(n.providedIn);
        return "string" == typeof t ? "any" === t || this.scopes.has(t) : this.injectorDefTypes.has(t)
      }
    }

    class lk {
    }

    class aa {
    }

    class ak {
      resolveComponentFactory(n) {
        throw function (n) {
          const t = Error(`No component factory found for ${y(n)}. Did you add it to @NgModule.entryComponents?`);
          return t.ngComponent = n, t
        }(n);
      }
    }

    let we = (() => {
      class n {
      }

      return n.NULL = new ak, n
    })();
    let va = (() => {
      class n {
        constructor(n) {
          this.nativeElement = n
        }
      }

      return n.__NG_ELEMENT_ID__ = vk, n
    })();

    class ya {
    }

    let yk = (() => {
      class n {
      }

      return n.__NG_ELEMENT_ID__ = () => function () {
        const n = c(), t = lt(p().index, n);
        return (wt(t) ? t : n)[a]
      }(), n
    })(), pk = (() => {
      class n {
      }

      return n.ɵprov = b({token: n, providedIn: "root", factory: () => null}), n
    })();

    class pa {
      constructor(n) {
        this.full = n;
        this.major = n.split(".")[0];
        this.minor = n.split(".")[1];
        this.patch = n.split(".").slice(2).join(".")
      }
    }

    const wk = new pa("15.1.1"), be = {};

    class dr {
      constructor() {
        this._console = console
      }

      handleError(n) {
        const t = this._findOriginalError(n);
        this._console.error("ERROR", n);
        t && this._console.error("ORIGINAL ERROR", t)
      }

      _findOriginalError(n) {
        let t = n && ke(n);
        for (; t && ke(t);) t = ke(t);
        return t || null
      }
    }

    const ba = "ng-template";
    const gr = {};
    let bi = (() => {
      class n {
        static create(n, t) {
          if (Array.isArray(n)) return nv({name: ""}, t, n, "");
          {
            const t = n.name ?? "";
            return nv({name: t}, n.parent, n.providers, t)
          }
        }
      }

      return n.THROW_IF_NOT_FOUND = ei, n.NULL = new sa, n.ɵprov = b({
        token: n,
        providedIn: "any",
        factory: () => l(ea)
      }), n.__NG_ELEMENT_ID__ = -1, n
    })();

    class ki {
      get rootNodes() {
        const n = this._lView, t = n[1];
        return uu(t, n, t.firstChild, [])
      }

      constructor(n, t) {
        this._lView = n;
        this._cdRefInjectingView = t;
        this._appRef = null;
        this._attachedToViewContainer = !1
      }

      get context() {
        return this._lView[8]
      }

      set context(n) {
        this._lView[8] = n
      }

      get destroyed() {
        return 128 == (128 & this._lView[2])
      }

      destroy() {
        if (this._appRef) this._appRef.detachView(this); else if (this._attachedToViewContainer) {
          const n = this._lView[3];
          if (ot(n)) {
            const t = n[8], i = t ? t.indexOf(this) : -1;
            i > -1 && (re(n, i), yr(t, i))
          }
          this._attachedToViewContainer = !1
        }
        gl(this._lView[1], this._lView)
      }

      onDestroy(n) {
        !function (n, t, i, r) {
          const u = dv(t);
          null === i ? u.push(r) : (u.push(i), n.firstCreatePass && gv(n).push(r, u.length - 1))
        }(this._lView[1], this._lView, null, n)
      }

      markForCheck() {
        bv(this._cdRefInjectingView || this._lView)
      }

      detach() {
        this._lView[2] &= -65
      }

      reattach() {
        this._lView[2] |= 64
      }

      detectChanges() {
        kv(this._lView[1], this._lView, this.context)
      }

      checkNoChanges() {
      }

      attachToViewContainerRef() {
        if (this._appRef) throw new e(902, !1);
        this._attachedToViewContainer = !0
      }

      detachFromAppRef() {
        this._appRef = null, function (n, t) {
          pi(n, t, t[a], 2, null, null)
        }(this._lView[1], this._lView)
      }

      attachToAppRef(n) {
        if (this._attachedToViewContainer) throw new e(902, !1);
        this._appRef = n
      }
    }

    class ld extends ki {
      constructor(n) {
        super(n);
        this._view = n
      }

      detectChanges() {
        const n = this._view;
        kv(n[1], n, n[8], !1)
      }

      checkNoChanges() {
      }

      get context() {
        return null
      }
    }

    class ad extends we {
      constructor(n) {
        super();
        this.ngModule = n
      }

      resolveComponentFactory(n) {
        const t = hi(n);
        return new iy(t, this.ngModule)
      }
    }

    class vd {
      constructor(n, t) {
        this.injector = n;
        this.parentInjector = t
      }

      get(n, t, i) {
        i = ur(i);
        const r = this.injector.get(n, be, i);
        return r !== be || t === be ? r : this.parentInjector.get(n, t, i)
      }
    }

    class iy extends aa {
      get inputs() {
        return ty(this.componentDef.inputs)
      }

      get outputs() {
        return ty(this.componentDef.outputs)
      }

      constructor(n, t) {
        super();
        this.componentDef = n;
        this.ngModule = t;
        this.componentType = n.type;
        this.selector = function (n) {
          return n.map(td).join(",")
        }(n.selectors);
        this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : [];
        this.isBoundToModule = !!t
      }

      create(n, t, i, r) {
        let f = (r = r || this.ngModule) instanceof wi ? r : r?.injector;
        f && null !== this.componentDef.getStandaloneInjector && (f = this.componentDef.getStandaloneInjector(f) || f);
        const l = f ? new vd(n, f) : n, s = l.get(ya, null);
        if (null === s) throw new e(407, !1);
        const w = l.get(pk, null), o = s.createRenderer(null, this.componentDef),
          v = this.componentDef.selectors[0][0] || "div", h = i ? function (n, t, i) {
            return n.selectRootElement(t, i === et.ShadowDom)
          }(o, i, this.componentDef.encapsulation) : kl(o, v, function (n) {
            const t = n.toLowerCase();
            return "svg" === t ? "svg" : "math" === t ? "math" : null
          }(v)), b = this.componentDef.onPush ? 288 : 272, a = ge(0, null, null, 1, 0, null, null, null, null, null),
          u = nu(null, a, null, b, null, null, s, o, w, l, null);
        let y, c;
        sf(u);
        try {
          const n = this.componentDef;
          let r, f = null;
          n.findHostDirectiveDefs ? (r = [], f = new Map, n.findHostDirectiveDefs(n, r, f), r.push(n)) : r = [n];
          const e = function (n, t) {
            const i = n[1];
            return n[22] = t, tu(i, 22, 2, "#host", null)
          }(u, h), l = function (n, t, i, r, u, f, e, o) {
            const s = u[1];
            !function (n, t, i, r) {
              for (const i of n) t.mergedAttrs = pf(t.mergedAttrs, i.hostAttrs);
              null !== t.mergedAttrs && (uo(t, t.mergedAttrs, !0), null !== i && ua(r, i, t))
            }(r, n, t, e);
            const c = f.createRenderer(t, i),
              h = nu(u, hv(i), null, i.onPush ? 32 : 16, u[n.index], n, f, c, o || null, null, null);
            return s.firstCreatePass && no(s, n, r.length - 1), ru(u, h), u[n.index] = h
          }(e, h, n, r, u, s, o);
          c = oc(a, 22);
          h && function (n, t, i, r) {
            if (r) yf(n, i, ["ng-version", wk.full]); else {
              const {attrs: u, classes: r} = function (n) {
                const r = [], u = [];
                let t = 1, i = 2;
                for (; t < n.length;) {
                  let f = n[t];
                  if ("string" == typeof f) 2 === i ? "" !== f && r.push(f, n[++t]) : 8 === i && u.push(f); else {
                    if (!d(i)) break;
                    i = f
                  }
                  t++
                }
                return {attrs: r, classes: u}
              }(t.selectors[0]);
              u && yf(n, i, u);
              r && r.length > 0 && ra(n, i, r.join(" "))
            }
          }(o, n, h, i);
          void 0 !== t && function (n, t, i) {
            const r = n.projection = [];
            for (let n = 0; n < t.length; n++) {
              const t = i[n];
              r.push(null != t ? Array.from(t) : null)
            }
          }(c, this.ngContentSelectors, t);
          y = function (n, t, i, r, u, f) {
            const e = p(), o = u[1], h = k(e, u);
            yv(o, u, e, i, null, r);
            for (let n = 0; n < i.length; n++) dt(vi(u, o, e.directiveStart + n, e), u);
            pv(o, u, e);
            h && dt(h, u);
            const s = vi(u, o, e.directiveStart + e.componentOffset, e);
            if (n[8] = u[8] = s, null !== f) for (const n of f) n(s, t);
            return ev(o, e, n), s
          }(l, n, r, f, u, [pd]);
          de(a, u, null)
        } finally {
          hf()
        }
        return new yd(this.componentType, y, kr(c, u), u, c)
      }
    }

    class yd extends lk {
      constructor(n, t, i, r, u) {
        super();
        this.location = i;
        this._rootLView = r;
        this._tNode = u;
        this.instance = t;
        this.hostView = this.changeDetectorRef = new ld(r);
        this.componentType = n
      }

      setInput(n, t) {
        const i = this._tNode.inputs;
        let r;
        if (null !== i && (r = i[n])) {
          const i = this._rootLView;
          ro(i[1], i, r, n, t);
          av(i, this._tNode.index)
        }
      }

      get injector() {
        return new yi(this._tNode, this._rootLView)
      }

      destroy() {
        this.hostView.destroy()
      }

      onDestroy(n) {
        this.hostView.onDestroy(n)
      }
    }

    let fu = null;
    const dd = hy;
    const gt = void 0;
    yy = ["en", [["a", "p"], ["AM", "PM"], gt], [["AM", "PM"], gt, gt], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], gt, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], gt, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", gt, "{1} 'at' {0}", gt], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (n) {
      const t = Math.floor(Math.abs(n)), i = n.toString().replace(/^[^.]*\.?/, "").length;
      return 1 === t && 0 === i ? 1 : 5
    }];
    let ho = {};
    r = (() => ((r = r || {})[r.LocaleId = 0] = "LocaleId", r[r.DayPeriodsFormat = 1] = "DayPeriodsFormat", r[r.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", r[r.DaysFormat = 3] = "DaysFormat", r[r.DaysStandalone = 4] = "DaysStandalone", r[r.MonthsFormat = 5] = "MonthsFormat", r[r.MonthsStandalone = 6] = "MonthsStandalone", r[r.Eras = 7] = "Eras", r[r.FirstDayOfWeek = 8] = "FirstDayOfWeek", r[r.WeekendRange = 9] = "WeekendRange", r[r.DateFormat = 10] = "DateFormat", r[r.TimeFormat = 11] = "TimeFormat", r[r.DateTimeFormat = 12] = "DateTimeFormat", r[r.NumberSymbols = 13] = "NumberSymbols", r[r.NumberFormats = 14] = "NumberFormats", r[r.CurrencyCode = 15] = "CurrencyCode", r[r.CurrencySymbol = 16] = "CurrencySymbol", r[r.CurrencyName = 17] = "CurrencyName", r[r.Currencies = 18] = "Currencies", r[r.Directionality = 19] = "Directionality", r[r.PluralCase = 20] = "PluralCase", r[r.ExtraData = 21] = "ExtraData", r))();
    const eu = "en-US";
    let tg = eu;

    class ou {
    }

    class ig {
    }

    class by extends ou {
      constructor(n, t) {
        super();
        this._parent = t;
        this._bootstrapComponents = [];
        this.destroyCbs = [];
        this.componentFactoryResolver = new ad(this);
        const i = function (n, t) {
          const i = n[dw] || null;
          if (!i && !0 === t) throw new Error(`Type ${y(n)} does not have 'ɵmod' property.`);
          return i
        }(n);
        this._bootstrapComponents = function (n) {
          return n instanceof Function ? n() : n
        }(i.bootstrap);
        this._r3Injector = tv(n, t, [{provide: ou, useValue: this}, {
          provide: we,
          useValue: this.componentFactoryResolver
        }], y(n), new Set(["environment"]));
        this._r3Injector.resolveInjectorInitializers();
        this.instance = this._r3Injector.get(n)
      }

      get injector() {
        return this._r3Injector
      }

      destroy() {
        const n = this._r3Injector;
        n.destroyed || n.destroy();
        this.destroyCbs.forEach(n => n());
        this.destroyCbs = null
      }

      onDestroy(n) {
        this.destroyCbs.push(n)
      }
    }

    class ug extends ig {
      constructor(n) {
        super();
        this.moduleType = n
      }

      create(n) {
        return new by(this.moduleType, n)
      }
    }

    const vt = class extends os {
      constructor(n = !1) {
        super();
        this.__isAsync = n
      }

      emit(n) {
        super.next(n)
      }

      subscribe(n, t, i) {
        let r = n, f = t || (() => null), u = i;
        if (n && "object" == typeof n) {
          const t = n;
          r = t.next?.bind(t);
          f = t.error?.bind(t);
          u = t.complete?.bind(t)
        }
        this.__isAsync && (f = co(f), r && (r = co(r)), u && (u = co(u)));
        const e = super.subscribe({next: r, error: f, complete: u});
        return n instanceof ut && n.add(e), e
      }
    };
    let ky = (() => {
      class n {
      }

      return n.__NG_ELEMENT_ID__ = og, n
    })();
    const fg = ky, eg = class extends fg {
      constructor(n, t, i) {
        super();
        this._declarationLView = n;
        this._declarationTContainer = t;
        this.elementRef = i
      }

      createEmbeddedView(n, t) {
        const i = this._declarationTContainer.tViews,
          r = nu(this._declarationLView, i, n, 16, null, i.declTNode, null, null, null, null, t || null);
        r[17] = this._declarationLView[this._declarationTContainer.index];
        const u = this._declarationLView[19];
        return null !== u && (r[19] = u.createEmbeddedView(i)), de(i, r, n), new ki(r)
      }
    };
    let dy = (() => {
      class n {
      }

      return n.__NG_ELEMENT_ID__ = sg, n
    })();
    const hg = dy, gy = class extends hg {
      constructor(n, t, i) {
        super();
        this._lContainer = n;
        this._hostTNode = t;
        this._hostLView = i
      }

      get element() {
        return kr(this._hostTNode, this._hostLView)
      }

      get injector() {
        return new yi(this._hostTNode, this._hostLView)
      }

      get parentInjector() {
        const n = kf(this._hostTNode, this._hostLView);
        if (nl(n)) {
          const t = ar(n, this._hostLView), i = lr(n);
          return new yi(t[1].data[i + 8], t)
        }
        return new yi(null, this._hostLView)
      }

      clear() {
        for (; this.length > 0;) this.remove(this.length - 1)
      }

      get(n) {
        const t = np(this._lContainer);
        return null !== t && t[n] || null
      }

      get length() {
        return this._lContainer.length - 10
      }

      createEmbeddedView(n, t, i) {
        let r, u;
        "number" == typeof i ? r = i : null != i && (r = i.index, u = i.injector);
        const f = n.createEmbeddedView(t || {}, u);
        return this.insert(f, r), f
      }

      createComponent(n, t, i, r, u) {
        const f = n && !function (n) {
          return "function" == typeof n
        }(n);
        let e;
        if (f) e = t; else {
          const n = t || {};
          e = n.index;
          i = n.injector;
          r = n.projectableNodes;
          u = n.environmentInjector || n.ngModuleRef
        }
        const o = f ? n : new iy(hi(n)), s = i || this.parentInjector;
        if (!u && null == o.ngModule) {
          const n = (f ? s : this.parentInjector).get(wi, null);
          n && (u = n)
        }
        const h = o.create(s, r, void 0, u);
        return this.insert(h.hostView, e), h
      }

      insert(n, t) {
        const i = n._lView, f = i[1];
        if (function (n) {
          return ot(n[3])
        }(i)) {
          const t = this.indexOf(n);
          if (-1 !== t) this.detach(t); else {
            const t = i[3], r = new gy(t, t[6], t[3]);
            r.detach(r.indexOf(n))
          }
        }
        const u = this._adjustIndex(t), r = this._lContainer;
        !function (n, t, i, r) {
          const f = 10 + r, o = i.length;
          r > 0 && (i[f - 1][4] = t);
          r < o - 10 ? (t[4] = i[f], al(i, 10 + r, t)) : (i.push(t), t[4] = null);
          t[3] = i;
          const u = t[17];
          null !== u && i !== u && function (n, t) {
            const i = n[9];
            t[16] !== t[3][3][16] && (n[2] = !0);
            null === i ? n[9] = [t] : i.push(t)
          }(u, t);
          const e = t[19];
          null !== e && e.insertView(n);
          t[2] |= 64
        }(f, i, r, u);
        const s = oe(u, r), e = i[a], o = fe(e, r[7]);
        return null !== o && function (n, t, i, r, u, f) {
          r[0] = u;
          r[6] = t;
          pi(n, r, i, 1, u, f)
        }(f, r[6], e, i, o, s), n.attachToViewContainerRef(), al(lo(r), u, n), n
      }

      move(n, t) {
        return this.insert(n, t)
      }

      indexOf(n) {
        const t = np(this._lContainer);
        return null !== t ? t.indexOf(n) : -1
      }

      remove(n) {
        const i = this._adjustIndex(n, -1), t = re(this._lContainer, i);
        t && (yr(lo(this._lContainer), i), gl(t[1], t))
      }

      detach(n) {
        const t = this._adjustIndex(n, -1), i = re(this._lContainer, t);
        return i && null != yr(lo(this._lContainer), t) ? new ki(i) : null
      }

      _adjustIndex(n, t = 0) {
        return n ?? this.length + t
      }
    };
    const tp = new h("Application Initializer");
    let ao = (() => {
      class n {
        constructor(n) {
          this.appInits = n;
          this.resolve = su;
          this.reject = su;
          this.initialized = !1;
          this.done = !1;
          this.donePromise = new Promise((n, t) => {
            this.resolve = n, this.reject = t
          })
        }

        runInitializers() {
          if (!this.initialized) {
            const n = [], t = () => {
              this.done = !0, this.resolve()
            };
            if (this.appInits) for (let t = 0; t < this.appInits.length; t++) {
              const i = this.appInits[t]();
              if (so(i)) n.push(i); else if (dd(i)) {
                const t = new Promise((n, t) => {
                  i.subscribe({complete: n, error: t})
                });
                n.push(t)
              }
            }
            Promise.all(n).then(() => {
              t()
            }).catch(n => {
              this.reject(n)
            });
            0 === n.length && t();
            this.initialized = !0
          }
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(l(tp, 8))
      }, n.ɵprov = b({token: n, factory: n.ɵfac, providedIn: "root"}), n
    })();
    const cg = new h("AppId", {
      providedIn: "root", factory: function () {
        return `${vo()}${vo()}${vo()}`
      }
    });
    const ip = new h("Platform Initializer"),
      lg = new h("Platform ID", {providedIn: "platform", factory: () => "unknown"}), ag = new h("appBootstrapListener"),
      yo = new h("LocaleId", {
        providedIn: "root", factory: () => function (n, t = u.Default) {
          return l(n, ur(t))
        }(yo, u.Optional | u.SkipSelf) || function () {
          return typeof $localize < "u" && $localize.locale || eu
        }()
      }), vg = new h("DefaultCurrencyCode", {providedIn: "root", factory: () => "USD"}),
      yg = (() => Promise.resolve(0))();

    class rt {
      constructor({
                    enableLongStackTrace: i = !1,
                    shouldCoalesceEventChangeDetection: n = !1,
                    shouldCoalesceRunChangeDetection: t = !1
                  }) {
        if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new vt(!1), this.onMicrotaskEmpty = new vt(!1), this.onStable = new vt(!1), this.onError = new vt(!1), typeof Zone > "u") throw new e(908, !1);
        Zone.assertZonePatched();
        const r = this;
        r._nesting = 0;
        r._outer = r._inner = Zone.current;
        Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec));
        i && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec));
        r.shouldCoalesceEventChangeDetection = !t && n;
        r.shouldCoalesceRunChangeDetection = t;
        r.lastRequestAnimationFrameId = -1;
        r.nativeRequestAnimationFrame = function () {
          let n = ft.requestAnimationFrame, t = ft.cancelAnimationFrame;
          if (typeof Zone < "u" && n && t) {
            const i = n[Zone.__symbol__("OriginalDelegate")];
            i && (n = i);
            const r = t[Zone.__symbol__("OriginalDelegate")];
            r && (t = r)
          }
          return {nativeRequestAnimationFrame: n, nativeCancelAnimationFrame: t}
        }().nativeRequestAnimationFrame, function (n) {
          const t = () => {
            !function (n) {
              n.isCheckStableRunning || -1 !== n.lastRequestAnimationFrameId || (n.lastRequestAnimationFrameId = n.nativeRequestAnimationFrame.call(ft, () => {
                n.fakeTopEventTask || (n.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                  n.lastRequestAnimationFrameId = -1, bo(n), n.isCheckStableRunning = !0, wo(n), n.isCheckStableRunning = !1
                }, void 0, () => {
                }, () => {
                })), n.fakeTopEventTask.invoke()
              }), bo(n))
            }(n)
          };
          n._inner = n._inner.fork({
            name: "angular",
            properties: {isAngularZone: !0},
            onInvokeTask: (i, r, u, f, e, o) => {
              try {
                return rp(n), i.invokeTask(u, f, e, o)
              } finally {
                (n.shouldCoalesceEventChangeDetection && "eventTask" === f.type || n.shouldCoalesceRunChangeDetection) && t();
                up(n)
              }
            },
            onInvoke: (i, r, u, f, e, o, s) => {
              try {
                return rp(n), i.invoke(u, f, e, o, s)
              } finally {
                n.shouldCoalesceRunChangeDetection && t();
                up(n)
              }
            },
            onHasTask: (t, i, r, u) => {
              t.hasTask(r, u), i === r && ("microTask" == u.change ? (n._hasPendingMicrotasks = u.microTask, bo(n), wo(n)) : "macroTask" == u.change && (n.hasPendingMacrotasks = u.macroTask))
            },
            onHandleError: (t, i, r, u) => (t.handleError(r, u), n.runOutsideAngular(() => n.onError.emit(u)), !1)
          })
        }(r)
      }

      static isInAngularZone() {
        return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone")
      }

      static assertInAngularZone() {
        if (!rt.isInAngularZone()) throw new e(909, !1);
      }

      static assertNotInAngularZone() {
        if (rt.isInAngularZone()) throw new e(909, !1);
      }

      run(n, t, i) {
        return this._inner.run(n, t, i)
      }

      runTask(n, t, i, r) {
        const u = this._inner, f = u.scheduleEventTask("NgZoneEvent: " + r, n, pg, su, su);
        try {
          return u.runTask(f, t, i)
        } finally {
          u.cancelTask(f)
        }
      }

      runGuarded(n, t, i) {
        return this._inner.runGuarded(n, t, i)
      }

      runOutsideAngular(n) {
        return this._outer.run(n)
      }
    }

    const pg = {};

    class wg {
      constructor() {
        this.hasPendingMicrotasks = !1;
        this.hasPendingMacrotasks = !1;
        this.isStable = !0;
        this.onUnstable = new vt;
        this.onMicrotaskEmpty = new vt;
        this.onStable = new vt;
        this.onError = new vt
      }

      run(n, t, i) {
        return n.apply(t, i)
      }

      runGuarded(n, t, i) {
        return n.apply(t, i)
      }

      runOutsideAngular(n) {
        return n()
      }

      runTask(n, t, i) {
        return n.apply(t, i)
      }
    }

    const fp = new h(""), ep = new h("");
    let ko, bg = (() => {
      class n {
        constructor(n, t, i) {
          this._ngZone = n;
          this.registry = t;
          this._pendingCount = 0;
          this._isZoneStable = !0;
          this._didWork = !1;
          this._callbacks = [];
          this.taskTrackingZone = null;
          ko || (function (n) {
            ko = n
          }(i), i.addToWindow(t));
          this._watchAngularEvents();
          n.run(() => {
            this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone")
          })
        }

        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              this._didWork = !0, this._isZoneStable = !1
            }
          });
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.subscribe({
              next: () => {
                rt.assertNotInAngularZone(), po(() => {
                  this._isZoneStable = !0, this._runCallbacksIfReady()
                })
              }
            })
          })
        }

        increasePendingRequestCount() {
          return this._pendingCount += 1, this._didWork = !0, this._pendingCount
        }

        decreasePendingRequestCount() {
          if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
          return this._runCallbacksIfReady(), this._pendingCount
        }

        isStable() {
          return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
        }

        _runCallbacksIfReady() {
          if (this.isStable()) po(() => {
            for (; 0 !== this._callbacks.length;) {
              let n = this._callbacks.pop();
              clearTimeout(n.timeoutId);
              n.doneCb(this._didWork)
            }
            this._didWork = !1
          }); else {
            let n = this.getPendingTasks();
            this._callbacks = this._callbacks.filter(t => !t.updateCb || !t.updateCb(n) || (clearTimeout(t.timeoutId), !1));
            this._didWork = !0
          }
        }

        getPendingTasks() {
          return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
            source: n.source,
            creationLocation: n.creationLocation,
            data: n.data
          })) : []
        }

        addCallback(n, t, i) {
          let r = -1;
          t && t > 0 && (r = setTimeout(() => {
            this._callbacks = this._callbacks.filter(n => n.timeoutId !== r), n(this._didWork, this.getPendingTasks())
          }, t));
          this._callbacks.push({doneCb: n, timeoutId: r, updateCb: i})
        }

        whenStable(n, t, i) {
          if (i && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
          this.addCallback(n, t, i);
          this._runCallbacksIfReady()
        }

        getPendingRequestCount() {
          return this._pendingCount
        }

        registerApplication(n) {
          this.registry.registerApplication(n, this)
        }

        unregisterApplication(n) {
          this.registry.unregisterApplication(n)
        }

        findProviders() {
          return []
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(l(rt), l(op), l(ep))
      }, n.ɵprov = b({token: n, factory: n.ɵfac}), n
    })(), op = (() => {
      class n {
        constructor() {
          this._applications = new Map
        }

        registerApplication(n, t) {
          this._applications.set(n, t)
        }

        unregisterApplication(n) {
          this._applications.delete(n)
        }

        unregisterAllApplications() {
          this._applications.clear()
        }

        getTestability(n) {
          return this._applications.get(n) || null
        }

        getAllTestabilities() {
          return Array.from(this._applications.values())
        }

        getAllRootElements() {
          return Array.from(this._applications.keys())
        }

        findTestabilityInTree(n, t = !0) {
          return ko?.findTestabilityInTree(this, n, t) ?? null
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)
      }, n.ɵprov = b({token: n, factory: n.ɵfac, providedIn: "platform"}), n
    })(), di = null;
    const sp = new h("AllowMultipleToken"), hp = new h("PlatformDestroyListeners");
    let ap = (() => {
      class n {
        constructor(n) {
          this._injector = n;
          this._modules = [];
          this._destroyListeners = [];
          this._destroyed = !1
        }

        bootstrapModuleFactory(n, t) {
          const i = function (n, t) {
            let i;
            return i = "noop" === n ? new wg : ("zone.js" === n ? void 0 : n) || new rt(t), i
          }(t?.ngZone, function (n) {
            return {
              enableLongStackTrace: !1,
              shouldCoalesceEventChangeDetection: !(!n || !n.ngZoneEventCoalescing) || !1,
              shouldCoalesceRunChangeDetection: !(!n || !n.ngZoneRunCoalescing) || !1
            }
          }(t)), r = [{provide: rt, useValue: i}];
          return i.run(() => {
            const f = bi.create({providers: r, parent: this.injector, name: n.moduleType.name}), t = n.create(f),
              u = t.injector.get(dr, null);
            if (!u) throw new e(402, !1);
            return i.runOutsideAngular(() => {
              const n = i.onError.subscribe({
                next: n => {
                  u.handleError(n)
                }
              });
              t.onDestroy(() => {
                hu(this._modules, t), n.unsubscribe()
              })
            }), function (n, t, i) {
              try {
                const r = i();
                return so(r) ? r.catch(i => {
                  throw t.runOutsideAngular(() => n.handleError(i)), i;
                }) : r
              } catch (r) {
                throw t.runOutsideAngular(() => n.handleError(r)), r;
              }
            }(u, i, () => {
              const n = t.injector.get(ao);
              return n.runInitializers(), n.donePromise.then(() => (function (n) {
                lw(n, "Expected localeId to be defined");
                "string" == typeof n && (tg = n.toLowerCase().replace(/_/g, "-"))
              }(t.injector.get(yo, eu) || eu), this._moduleDoBootstrap(t), t))
            })
          })
        }

        bootstrapModule(n, t = []) {
          const i = vp({}, t);
          return function (n, t, i) {
            const r = new ug(i);
            return Promise.resolve(r)
          }(0, 0, n).then(n => this.bootstrapModuleFactory(n, i))
        }

        _moduleDoBootstrap(n) {
          const t = n.injector.get(yp);
          if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(n => t.bootstrap(n)); else {
            if (!n.instance.ngDoBootstrap) throw new e(-403, !1);
            n.instance.ngDoBootstrap(t)
          }
          this._modules.push(n)
        }

        onDestroy(n) {
          this._destroyListeners.push(n)
        }

        get injector() {
          return this._injector
        }

        destroy() {
          if (this._destroyed) throw new e(404, !1);
          this._modules.slice().forEach(n => n.destroy());
          this._destroyListeners.forEach(n => n());
          const n = this._injector.get(hp, null);
          n && (n.forEach(n => n()), n.clear());
          this._destroyed = !0
        }

        get destroyed() {
          return this._destroyed
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(l(bi))
      }, n.ɵprov = b({token: n, factory: n.ɵfac, providedIn: "platform"}), n
    })();
    let yp = (() => {
      class n {
        get destroyed() {
          return this._destroyed
        }

        get injector() {
          return this._injector
        }

        constructor(n, t, i) {
          this._zone = n;
          this._injector = t;
          this._exceptionHandler = i;
          this._bootstrapListeners = [];
          this._views = [];
          this._runningTick = !1;
          this._stable = !0;
          this._destroyed = !1;
          this._destroyListeners = [];
          this.componentTypes = [];
          this.components = [];
          this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this._zone.run(() => {
                this.tick()
              })
            }
          });
          const r = new v(n => {
            this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
              n.next(this._stable), n.complete()
            })
          }), u = new v(n => {
            let t;
            this._zone.runOutsideAngular(() => {
              t = this._zone.onStable.subscribe(() => {
                rt.assertNotInAngularZone(), po(() => {
                  !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, n.next(!0))
                })
              })
            });
            const i = this._zone.onUnstable.subscribe(() => {
              rt.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                n.next(!1)
              }))
            });
            return () => {
              t.unsubscribe(), i.unsubscribe()
            }
          });
          this.isStable = hw(r, u.pipe(function (n = {}) {
            const {
              connector: t = () => new xn,
              resetOnError: i = !0,
              resetOnComplete: r = !0,
              resetOnRefCountZero: u = !0
            } = n;
            return n => {
              let f, e, l, o = 0, s = !1, h = !1;
              const c = () => {
                e?.unsubscribe(), e = void 0
              }, a = () => {
                c(), f = l = void 0, s = h = !1
              }, v = () => {
                const n = f;
                a();
                n?.unsubscribe()
              };
              return fi((n, y) => {
                o++;
                h || s || c();
                const p = l = l ?? t();
                y.add(() => {
                  o--, 0 !== o || h || s || (e = bu(v, u))
                });
                p.subscribe(y);
                !f && o > 0 && (f = new ui({
                  next: n => p.next(n), error: n => {
                    h = !0, c(), e = bu(a, i, n), p.error(n)
                  }, complete: () => {
                    s = !0, c(), e = bu(a, r), p.complete()
                  }
                }), st(n).subscribe(f))
              })(n)
            }
          }()))
        }

        bootstrap(n, t) {
          const u = n instanceof aa;
          if (!this._injector.get(ao).done) throw!u && function (n) {
            const t = hi(n) || nc(n) || tc(n);
            return null !== t && t.standalone
          }(n), new e(405, !1);
          let r;
          r = u ? n : this._injector.get(we).resolveComponentFactory(n);
          this.componentTypes.push(r.componentType);
          const s = function (n) {
              return n.isBoundToModule
            }(r) ? void 0 : this._injector.get(ou), i = r.create(bi.NULL, [], t || r.selector, s),
            f = i.location.nativeElement, o = i.injector.get(fp, null);
          return o?.registerApplication(f), i.onDestroy(() => {
            this.detachView(i.hostView), hu(this.components, i), o?.unregisterApplication(f)
          }), this._loadComponent(i), i
        }

        tick() {
          if (this._runningTick) throw new e(101, !1);
          try {
            this._runningTick = !0;
            for (let n of this._views) n.detectChanges()
          } catch (n) {
            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n))
          } finally {
            this._runningTick = !1
          }
        }

        attachView(n) {
          const t = n;
          this._views.push(t);
          t.attachToAppRef(this)
        }

        detachView(n) {
          const t = n;
          hu(this._views, t);
          t.detachFromAppRef()
        }

        _loadComponent(n) {
          this.attachView(n.hostView);
          this.tick();
          this.components.push(n);
          const t = this._injector.get(ag, []);
          t.push(...this._bootstrapListeners);
          t.forEach(t => t(n))
        }

        ngOnDestroy() {
          if (!this._destroyed) try {
            this._destroyListeners.forEach(n => n());
            this._views.slice().forEach(n => n.destroy());
            this._onMicrotaskEmptySubscription.unsubscribe()
          } finally {
            this._destroyed = !0;
            this._views = [];
            this._bootstrapListeners = [];
            this._destroyListeners = []
          }
        }

        onDestroy(n) {
          return this._destroyListeners.push(n), () => hu(this._destroyListeners, n)
        }

        destroy() {
          if (this._destroyed) throw new e(406, !1);
          const n = this._injector;
          n.destroy && !n.destroyed && n.destroy()
        }

        get viewCount() {
          return this._views.length
        }

        warnIfDestroyed() {
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(l(rt), l(wi), l(dr))
      }, n.ɵprov = b({token: n, factory: n.ɵfac, providedIn: "root"}), n
    })();
    let dg = (() => {
      class n {
      }

      return n.__NG_ELEMENT_ID__ = gg, n
    })();

    class nn {
      constructor() {
      }

      supports(n) {
        return uy(n)
      }

      create(n) {
        return new rn(n)
      }
    }

    const tn = (n, t) => t;

    class rn {
      constructor(n) {
        this.length = 0;
        this._linkedRecords = null;
        this._unlinkedRecords = null;
        this._previousItHead = null;
        this._itHead = null;
        this._itTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._movesHead = null;
        this._movesTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
        this._identityChangesHead = null;
        this._identityChangesTail = null;
        this._trackByFn = n || tn
      }

      forEachItem(n) {
        let t;
        for (t = this._itHead; null !== t; t = t._next) n(t)
      }

      forEachOperation(n) {
        let r = this._itHead, i = this._removalsHead, u = 0, t = null;
        for (; r || i;) {
          const f = !i || r && r.currentIndex < wp(i, u, t) ? r : i, e = wp(f, u, t), o = f.currentIndex;
          if (f === i) u--, i = i._nextRemoved; else if (r = r._next, null == f.previousIndex) u++; else {
            t || (t = []);
            const n = e - u, i = o - u;
            if (n != i) {
              for (let r = 0; r < n; r++) {
                const u = r < t.length ? t[r] : t[r] = 0, f = u + r;
                i <= f && f < n && (t[r] = u + 1)
              }
              t[f.previousIndex] = i - n
            }
          }
          e !== o && n(f, e, o)
        }
      }

      forEachPreviousItem(n) {
        let t;
        for (t = this._previousItHead; null !== t; t = t._nextPrevious) n(t)
      }

      forEachAddedItem(n) {
        let t;
        for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t)
      }

      forEachMovedItem(n) {
        let t;
        for (t = this._movesHead; null !== t; t = t._nextMoved) n(t)
      }

      forEachRemovedItem(n) {
        let t;
        for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t)
      }

      forEachIdentityChange(n) {
        let t;
        for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) n(t)
      }

      diff(n) {
        if (null == n && (n = []), !uy(n)) throw new e(900, !1);
        return this.check(n) ? this : null
      }

      onDestroy() {
      }

      check(n) {
        this._reset();
        let r, u, i, t = this._itHead, f = !1;
        if (Array.isArray(n)) {
          this.length = n.length;
          for (let r = 0; r < this.length; r++) u = n[r], i = this._trackByFn(r, u), null !== t && Object.is(t.trackById, i) ? (f && (t = this._verifyReinsertion(t, u, i, r)), Object.is(t.item, u) || this._addIdentityChange(t, u)) : (t = this._mismatch(t, u, i, r), f = !0), t = t._next
        } else r = 0, function (n, t) {
          if (Array.isArray(n)) for (let i = 0; i < n.length; i++) t(n[i]); else {
            const r = n[ry()]();
            let i;
            for (; !(i = r.next()).done;) t(i.value)
          }
        }(n, n => {
          i = this._trackByFn(r, n), null !== t && Object.is(t.trackById, i) ? (f && (t = this._verifyReinsertion(t, n, i, r)), Object.is(t.item, n) || this._addIdentityChange(t, n)) : (t = this._mismatch(t, n, i, r), f = !0), t = t._next, r++
        }), this.length = r;
        return this._truncate(t), this.collection = n, this.isDirty
      }

      get isDirty() {
        return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
      }

      _reset() {
        if (this.isDirty) {
          let n;
          for (n = this._previousItHead = this._itHead; null !== n; n = n._next) n._nextPrevious = n._next;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) n.previousIndex = n.currentIndex;
          for (this._additionsHead = this._additionsTail = null, n = this._movesHead; null !== n; n = n._nextMoved) n.previousIndex = n.currentIndex;
          this._movesHead = this._movesTail = null;
          this._removalsHead = this._removalsTail = null;
          this._identityChangesHead = this._identityChangesTail = null
        }
      }

      _mismatch(n, t, i, r) {
        let u;
        return null === n ? u = this._itTail : (u = n._prev, this._remove(n)), null !== (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(i, null)) ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._reinsertAfter(n, u, r)) : null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(i, r)) ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._moveAfter(n, u, r)) : n = this._addAfter(new un(t, i), u, r), n
      }

      _verifyReinsertion(n, t, i, r) {
        let u = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(i, null);
        return null !== u ? n = this._reinsertAfter(u, n._prev, r) : n.currentIndex != r && (n.currentIndex = r, this._addToMoves(n, r)), n
      }

      _truncate(n) {
        for (; null !== n;) {
          const t = n._next;
          this._addToRemovals(this._unlink(n));
          n = t
        }
        null !== this._unlinkedRecords && this._unlinkedRecords.clear();
        null !== this._additionsTail && (this._additionsTail._nextAdded = null);
        null !== this._movesTail && (this._movesTail._nextMoved = null);
        null !== this._itTail && (this._itTail._next = null);
        null !== this._removalsTail && (this._removalsTail._nextRemoved = null);
        null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
      }

      _reinsertAfter(n, t, i) {
        null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
        const r = n._prevRemoved, u = n._nextRemoved;
        return null === r ? this._removalsHead = u : r._nextRemoved = u, null === u ? this._removalsTail = r : u._prevRemoved = r, this._insertAfter(n, t, i), this._addToMoves(n, i), n
      }

      _moveAfter(n, t, i) {
        return this._unlink(n), this._insertAfter(n, t, i), this._addToMoves(n, i), n
      }

      _addAfter(n, t, i) {
        return this._insertAfter(n, t, i), this._additionsTail = null === this._additionsTail ? this._additionsHead = n : this._additionsTail._nextAdded = n, n
      }

      _insertAfter(n, t, i) {
        const r = null === t ? this._itHead : t._next;
        return n._next = r, n._prev = t, null === r ? this._itTail = n : r._prev = n, null === t ? this._itHead = n : t._next = n, null === this._linkedRecords && (this._linkedRecords = new pp), this._linkedRecords.put(n), n.currentIndex = i, n
      }

      _remove(n) {
        return this._addToRemovals(this._unlink(n))
      }

      _unlink(n) {
        null !== this._linkedRecords && this._linkedRecords.remove(n);
        const t = n._prev, i = n._next;
        return null === t ? this._itHead = i : t._next = i, null === i ? this._itTail = t : i._prev = t, n
      }

      _addToMoves(n, t) {
        return n.previousIndex === t || (this._movesTail = null === this._movesTail ? this._movesHead = n : this._movesTail._nextMoved = n), n
      }

      _addToRemovals(n) {
        return null === this._unlinkedRecords && (this._unlinkedRecords = new pp), this._unlinkedRecords.put(n), n.currentIndex = null, n._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = n, n._prevRemoved = null) : (n._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = n), n
      }

      _addIdentityChange(n, t) {
        return n.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = n : this._identityChangesTail._nextIdentityChange = n, n
      }
    }

    class un {
      constructor(n, t) {
        this.item = n;
        this.trackById = t;
        this.currentIndex = null;
        this.previousIndex = null;
        this._nextPrevious = null;
        this._prev = null;
        this._next = null;
        this._prevDup = null;
        this._nextDup = null;
        this._prevRemoved = null;
        this._nextRemoved = null;
        this._nextAdded = null;
        this._nextMoved = null;
        this._nextIdentityChange = null
      }
    }

    class fn {
      constructor() {
        this._head = null;
        this._tail = null
      }

      add(n) {
        null === this._head ? (this._head = this._tail = n, n._nextDup = null, n._prevDup = null) : (this._tail._nextDup = n, n._prevDup = this._tail, n._nextDup = null, this._tail = n)
      }

      get(n, t) {
        let i;
        for (i = this._head; null !== i; i = i._nextDup) if ((null === t || t <= i.currentIndex) && Object.is(i.trackById, n)) return i;
        return null
      }

      remove(n) {
        const t = n._prevDup, i = n._nextDup;
        return null === t ? this._head = i : t._nextDup = i, null === i ? this._tail = t : i._prevDup = t, null === this._head
      }
    }

    class pp {
      constructor() {
        this.map = new Map
      }

      put(n) {
        const i = n.trackById;
        let t = this.map.get(i);
        t || (t = new fn, this.map.set(i, t));
        t.add(n)
      }

      get(n, t) {
        const i = this.map.get(n);
        return i ? i.get(n, t) : null
      }

      remove(n) {
        const t = n.trackById;
        return this.map.get(t).remove(n) && this.map.delete(t), n
      }

      get isEmpty() {
        return 0 === this.map.size
      }

      clear() {
        this.map.clear()
      }
    }

    class en {
      constructor() {
      }

      supports(n) {
        return n instanceof Map || fo(n)
      }

      create() {
        return new on
      }
    }

    class on {
      constructor() {
        this._records = new Map;
        this._mapHead = null;
        this._appendAfter = null;
        this._previousMapHead = null;
        this._changesHead = null;
        this._changesTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._removalsHead = null;
        this._removalsTail = null
      }

      get isDirty() {
        return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
      }

      forEachItem(n) {
        let t;
        for (t = this._mapHead; null !== t; t = t._next) n(t)
      }

      forEachPreviousItem(n) {
        let t;
        for (t = this._previousMapHead; null !== t; t = t._nextPrevious) n(t)
      }

      forEachChangedItem(n) {
        let t;
        for (t = this._changesHead; null !== t; t = t._nextChanged) n(t)
      }

      forEachAddedItem(n) {
        let t;
        for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t)
      }

      forEachRemovedItem(n) {
        let t;
        for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t)
      }

      diff(n) {
        if (n) {
          if (!(n instanceof Map || fo(n))) throw new e(900, !1);
        } else n = new Map;
        return this.check(n) ? this : null
      }

      onDestroy() {
      }

      check(n) {
        this._reset();
        let t = this._mapHead;
        if (this._appendAfter = null, this._forEach(n, (n, i) => {
          if (t && t.key === i) this._maybeAddToChanges(t, n), this._appendAfter = t, t = t._next; else {
            const r = this._getOrCreateRecordForKey(i, n);
            t = this._insertBeforeOrAppend(t, r)
          }
        }), t) {
          t._prev && (t._prev._next = null);
          this._removalsHead = t;
          for (let n = t; null !== n; n = n._nextRemoved) n === this._mapHead && (this._mapHead = null), this._records.delete(n.key), n._nextRemoved = n._next, n.previousValue = n.currentValue, n.currentValue = null, n._prev = null, n._next = null
        }
        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
      }

      _insertBeforeOrAppend(n, t) {
        if (n) {
          const i = n._prev;
          return t._next = n, t._prev = i, n._prev = t, i && (i._next = t), n === this._mapHead && (this._mapHead = t), this._appendAfter = n, n
        }
        return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
      }

      _getOrCreateRecordForKey(n, t) {
        if (this._records.has(n)) {
          const i = this._records.get(n);
          this._maybeAddToChanges(i, t);
          const r = i._prev, u = i._next;
          return r && (r._next = u), u && (u._prev = r), i._next = null, i._prev = null, i
        }
        const i = new sn(n);
        return this._records.set(n, i), i.currentValue = t, this._addToAdditions(i), i
      }

      _reset() {
        if (this.isDirty) {
          let n;
          for (this._previousMapHead = this._mapHead, n = this._previousMapHead; null !== n; n = n._next) n._nextPrevious = n._next;
          for (n = this._changesHead; null !== n; n = n._nextChanged) n.previousValue = n.currentValue;
          for (n = this._additionsHead; null != n; n = n._nextAdded) n.previousValue = n.currentValue;
          this._changesHead = this._changesTail = null;
          this._additionsHead = this._additionsTail = null;
          this._removalsHead = null
        }
      }

      _maybeAddToChanges(n, t) {
        Object.is(t, n.currentValue) || (n.previousValue = n.currentValue, n.currentValue = t, this._addToChanges(n))
      }

      _addToAdditions(n) {
        null === this._additionsHead ? this._additionsHead = this._additionsTail = n : (this._additionsTail._nextAdded = n, this._additionsTail = n)
      }

      _addToChanges(n) {
        null === this._changesHead ? this._changesHead = this._changesTail = n : (this._changesTail._nextChanged = n, this._changesTail = n)
      }

      _forEach(n, t) {
        n instanceof Map ? n.forEach(t) : Object.keys(n).forEach(i => t(n[i], i))
      }
    }

    class sn {
      constructor(n) {
        this.key = n;
        this.previousValue = null;
        this.currentValue = null;
        this._nextPrevious = null;
        this._next = null;
        this._prev = null;
        this._nextAdded = null;
        this._nextRemoved = null;
        this._nextChanged = null
      }
    }

    let kp = (() => {
      class n {
        constructor(n) {
          this.factories = n
        }

        static create(t, i) {
          if (null != i) {
            const n = i.factories.slice();
            t = t.concat(n)
          }
          return new n(t)
        }

        static extend(t) {
          return {provide: n, useFactory: i => n.create(t, i || bp()), deps: [[n, new yl, new vl]]}
        }

        find(n) {
          const t = this.factories.find(t => t.supports(n));
          if (null != t) return t;
          throw new e(901, !1);
        }
      }

      return n.ɵprov = b({token: n, providedIn: "root", factory: bp}), n
    })();
    let gp = (() => {
      class n {
        constructor(n) {
          this.factories = n
        }

        static create(t, i) {
          if (i) {
            const n = i.factories.slice();
            t = t.concat(n)
          }
          return new n(t)
        }

        static extend(t) {
          return {provide: n, useFactory: i => n.create(t, i || dp()), deps: [[n, new yl, new vl]]}
        }

        find(n) {
          const t = this.factories.find(t => t.supports(n));
          if (t) return t;
          throw new e(901, !1);
        }
      }

      return n.ɵprov = b({token: n, providedIn: "root", factory: dp}), n
    })();
    const hn = cp(null, "core", []);
    let cn = (() => {
      class n {
        constructor() {
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(l(yp))
      }, n.ɵmod = dh({type: n}), n.ɵinj = oh({}), n
    })()
  }, 481: (n, t, i) => {
    function d(n) {
      u.q().remove(n)
    }

    function a(n, t) {
      return t.flat(100).map(t => t.replace(l, n))
    }

    function g(n) {
      return t => {
        if ("__ngUnwrap__" === t) return n;
        !1 === n(t) && (t.preventDefault(), t.returnValue = !1)
      }
    }

    function nt(n) {
      return "TEMPLATE" === n.tagName && void 0 !== n.content
    }

    i.d(t, {b2: () => pt, q6: () => lt});
    var u = i(895), r = i(845);

    class it extends u.w_ {
      constructor() {
        super(...arguments);
        this.supportsDOMEvents = !0
      }
    }

    class p extends it {
      static makeCurrent() {
        u.HT(new p)
      }

      onAndCancel(n, t, i) {
        return n.addEventListener(t, i, !1), () => {
          n.removeEventListener(t, i, !1)
        }
      }

      dispatchEvent(n, t) {
        n.dispatchEvent(t)
      }

      remove(n) {
        n.parentNode && n.parentNode.removeChild(n)
      }

      createElement(n, t) {
        return (t = t || this.getDefaultDocument()).createElement(n)
      }

      createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle")
      }

      getDefaultDocument() {
        return document
      }

      isElementNode(n) {
        return n.nodeType === Node.ELEMENT_NODE
      }

      isShadowRoot(n) {
        return n instanceof DocumentFragment
      }

      getGlobalEventTarget(n, t) {
        return "window" === t ? window : "document" === t ? n : "body" === t ? n.body : null
      }

      getBaseHref() {
        const n = function () {
          return f = f || document.querySelector("base"), f ? f.getAttribute("href") : null
        }();
        return null == n ? null : function (n) {
          o = o || document.createElement("a");
          o.setAttribute("href", n);
          const t = o.pathname;
          return "/" === t.charAt(0) ? t : `/${t}`
        }(n)
      }

      resetBaseElement() {
        f = null
      }

      getUserAgent() {
        return window.navigator.userAgent
      }

      getCookie(n) {
        return u.Mx(document.cookie, n)
      }
    }

    let o, f = null;
    const w = new r.OlP("TRANSITION_ID"), rt = [{
      provide: r.ip1, useFactory: function (n, t, i) {
        return () => {
          i.get(r.CZH).donePromise.then(() => {
            const r = u.q(), i = t.querySelectorAll(`style[ng-transition="${n}"]`);
            for (let n = 0; n < i.length; n++) r.remove(i[n])
          })
        }
      }, deps: [w, u.K0, r.zs3], multi: !0
    }];
    let ut = (() => {
      class n {
        build() {
          return new XMLHttpRequest
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)
      }, n.ɵprov = r.Yz7({token: n, factory: n.ɵfac}), n
    })();
    const s = new r.OlP("EventManagerPlugins");
    let h = (() => {
      class n {
        constructor(n, t) {
          this._zone = t;
          this._eventNameToPlugin = new Map;
          n.forEach(n => n.manager = this);
          this._plugins = n.slice().reverse()
        }

        addEventListener(n, t, i) {
          return this._findPluginFor(t).addEventListener(n, t, i)
        }

        addGlobalEventListener(n, t, i) {
          return this._findPluginFor(t).addGlobalEventListener(n, t, i)
        }

        getZone() {
          return this._zone
        }

        _findPluginFor(n) {
          const t = this._eventNameToPlugin.get(n);
          if (t) return t;
          const i = this._plugins;
          for (let t = 0; t < i.length; t++) {
            const r = i[t];
            if (r.supports(n)) return this._eventNameToPlugin.set(n, r), r
          }
          throw new Error(`No event manager plugin found for event ${n}`);
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.LFG(s), r.LFG(r.R0b))
      }, n.ɵprov = r.Yz7({token: n, factory: n.ɵfac}), n
    })();

    class b {
      constructor(n) {
        this._doc = n
      }

      addGlobalEventListener(n, t, i) {
        const r = u.q().getGlobalEventTarget(this._doc, n);
        if (!r) throw new Error(`Unsupported event target ${r} for event ${t}`);
        return this.addEventListener(r, t, i)
      }
    }

    let k = (() => {
      class n {
        constructor() {
          this._stylesSet = new Set
        }

        addStyles(n) {
          const t = new Set;
          n.forEach(n => {
            this._stylesSet.has(n) || (this._stylesSet.add(n), t.add(n))
          });
          this.onStylesAdded(t)
        }

        onStylesAdded() {
        }

        getAllStyles() {
          return Array.from(this._stylesSet)
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)
      }, n.ɵprov = r.Yz7({token: n, factory: n.ɵfac}), n
    })(), e = (() => {
      class n extends k {
        constructor(n) {
          super();
          this._doc = n;
          this._hostNodes = new Map;
          this._hostNodes.set(n.head, [])
        }

        _addStylesToHost(n, t, i) {
          n.forEach(n => {
            const r = this._doc.createElement("style");
            r.textContent = n;
            i.push(t.appendChild(r))
          })
        }

        addHost(n) {
          const t = [];
          this._addStylesToHost(this._stylesSet, n, t);
          this._hostNodes.set(n, t)
        }

        removeHost(n) {
          const t = this._hostNodes.get(n);
          t && t.forEach(d);
          this._hostNodes.delete(n)
        }

        onStylesAdded(n) {
          this._hostNodes.forEach((t, i) => {
            this._addStylesToHost(n, i, t)
          })
        }

        ngOnDestroy() {
          this._hostNodes.forEach(n => n.forEach(d))
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.LFG(u.K0))
      }, n.ɵprov = r.Yz7({token: n, factory: n.ɵfac}), n
    })();
    const c = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
      math: "http://www.w3.org/1998/MathML/"
    }, l = /%COMP%/g;
    let v = (() => {
      class n {
        constructor(n, t, i) {
          this.eventManager = n;
          this.sharedStylesHost = t;
          this.appId = i;
          this.rendererByCompId = new Map;
          this.defaultRenderer = new y(n)
        }

        createRenderer(n, t) {
          if (!n || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case r.ifc.Emulated: {
              let i = this.rendererByCompId.get(t.id);
              return i || (i = new ft(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, i)), i.applyToHost(n), i
            }
            case r.ifc.ShadowDom:
              return new et(this.eventManager, this.sharedStylesHost, n, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const n = a(t.id, t.styles);
                this.sharedStylesHost.addStyles(n);
                this.rendererByCompId.set(t.id, this.defaultRenderer)
              }
              return this.defaultRenderer
          }
        }

        begin() {
        }

        end() {
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.LFG(h), r.LFG(e), r.LFG(r.AFp))
      }, n.ɵprov = r.Yz7({token: n, factory: n.ɵfac}), n
    })();

    class y {
      constructor(n) {
        this.eventManager = n;
        this.data = Object.create(null);
        this.destroyNode = null
      }

      destroy() {
      }

      createElement(n, t) {
        return t ? document.createElementNS(c[t] || t, n) : document.createElement(n)
      }

      createComment(n) {
        return document.createComment(n)
      }

      createText(n) {
        return document.createTextNode(n)
      }

      appendChild(n, t) {
        (nt(n) ? n.content : n).appendChild(t)
      }

      insertBefore(n, t, i) {
        n && (nt(n) ? n.content : n).insertBefore(t, i)
      }

      removeChild(n, t) {
        n && n.removeChild(t)
      }

      selectRootElement(n, t) {
        let i = "string" == typeof n ? document.querySelector(n) : n;
        if (!i) throw new Error(`The selector "${n}" did not match any elements`);
        return t || (i.textContent = ""), i
      }

      parentNode(n) {
        return n.parentNode
      }

      nextSibling(n) {
        return n.nextSibling
      }

      setAttribute(n, t, i, r) {
        if (r) {
          t = r + ":" + t;
          const u = c[r];
          u ? n.setAttributeNS(u, t, i) : n.setAttribute(t, i)
        } else n.setAttribute(t, i)
      }

      removeAttribute(n, t, i) {
        if (i) {
          const r = c[i];
          r ? n.removeAttributeNS(r, t) : n.removeAttribute(`${i}:${t}`)
        } else n.removeAttribute(t)
      }

      addClass(n, t) {
        n.classList.add(t)
      }

      removeClass(n, t) {
        n.classList.remove(t)
      }

      setStyle(n, t, i, u) {
        u & (r.JOm.DashCase | r.JOm.Important) ? n.style.setProperty(t, i, u & r.JOm.Important ? "important" : "") : n.style[t] = i
      }

      removeStyle(n, t, i) {
        i & r.JOm.DashCase ? n.style.removeProperty(t) : n.style[t] = ""
      }

      setProperty(n, t, i) {
        n[t] = i
      }

      setValue(n, t) {
        n.nodeValue = t
      }

      listen(n, t, i) {
        return "string" == typeof n ? this.eventManager.addGlobalEventListener(n, t, g(i)) : this.eventManager.addEventListener(n, t, g(i))
      }
    }

    class ft extends y {
      constructor(n, t, i, r) {
        super(n);
        this.component = i;
        const u = a(r + "-" + i.id, i.styles);
        t.addStyles(u);
        this.contentAttr = function (n) {
          return "_ngcontent-%COMP%".replace(l, n)
        }(r + "-" + i.id);
        this.hostAttr = function (n) {
          return "_nghost-%COMP%".replace(l, n)
        }(r + "-" + i.id)
      }

      applyToHost(n) {
        super.setAttribute(n, this.hostAttr, "")
      }

      createElement(n, t) {
        const i = super.createElement(n, t);
        return super.setAttribute(i, this.contentAttr, ""), i
      }
    }

    class et extends y {
      constructor(n, t, i, r) {
        super(n);
        this.sharedStylesHost = t;
        this.hostEl = i;
        this.shadowRoot = i.attachShadow({mode: "open"});
        this.sharedStylesHost.addHost(this.shadowRoot);
        const u = a(r.id, r.styles);
        for (let n = 0; n < u.length; n++) {
          const t = document.createElement("style");
          t.textContent = u[n];
          this.shadowRoot.appendChild(t)
        }
      }

      nodeOrShadowRoot(n) {
        return n === this.hostEl ? this.shadowRoot : n
      }

      destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot)
      }

      appendChild(n, t) {
        return super.appendChild(this.nodeOrShadowRoot(n), t)
      }

      insertBefore(n, t, i) {
        return super.insertBefore(this.nodeOrShadowRoot(n), t, i)
      }

      removeChild(n, t) {
        return super.removeChild(this.nodeOrShadowRoot(n), t)
      }

      parentNode(n) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))
      }
    }

    let ot = (() => {
      class n extends b {
        constructor(n) {
          super(n)
        }

        supports() {
          return !0
        }

        addEventListener(n, t, i) {
          return n.addEventListener(t, i, !1), () => this.removeEventListener(n, t, i)
        }

        removeEventListener(n, t, i) {
          return n.removeEventListener(t, i)
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.LFG(u.K0))
      }, n.ɵprov = r.Yz7({token: n, factory: n.ɵfac}), n
    })();
    const tt = ["alt", "control", "meta", "shift"], st = {
      "\b": "Backspace",
      "\t": "Tab",
      "": "Delete",
      "\x1b": "Escape",
      Del: "Delete",
      Esc: "Escape",
      Left: "ArrowLeft",
      Right: "ArrowRight",
      Up: "ArrowUp",
      Down: "ArrowDown",
      Menu: "ContextMenu",
      Scroll: "ScrollLock",
      Win: "OS"
    }, ht = {alt: n => n.altKey, control: n => n.ctrlKey, meta: n => n.metaKey, shift: n => n.shiftKey};
    let ct = (() => {
      class n extends b {
        constructor(n) {
          super(n)
        }

        supports(t) {
          return null != n.parseEventName(t)
        }

        addEventListener(t, i, r) {
          const f = n.parseEventName(i), e = n.eventCallback(f.fullKey, r, this.manager.getZone());
          return this.manager.getZone().runOutsideAngular(() => u.q().onAndCancel(t, f.domEventName, e))
        }

        static parseEventName(t) {
          const i = t.toLowerCase().split("."), u = i.shift();
          if (0 === i.length || "keydown" !== u && "keyup" !== u) return null;
          const e = n._normalizeKey(i.pop());
          let r = "", o = i.indexOf("code");
          if (o > -1 && (i.splice(o, 1), r = "code."), tt.forEach(n => {
            const t = i.indexOf(n);
            t > -1 && (i.splice(t, 1), r += n + ".")
          }), r += e, 0 != i.length || 0 === e.length) return null;
          const f = {};
          return f.domEventName = u, f.fullKey = r, f
        }

        static matchEventFullKeyCode(n, t) {
          let i = st[n.key] || n.key, r = "";
          return t.indexOf("code.") > -1 && (i = n.code, r = "code."), !(null == i || !i) && (i = i.toLowerCase(), " " === i ? i = "space" : "." === i && (i = "dot"), tt.forEach(t => {
            t !== i && ht[t](n) && (r += t + ".")
          }), r += i, r === t)
        }

        static eventCallback(t, i, r) {
          return u => {
            n.matchEventFullKeyCode(u, t) && r.runGuarded(() => i(u))
          }
        }

        static _normalizeKey(n) {
          return "esc" === n ? "escape" : n
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.LFG(u.K0))
      }, n.ɵprov = r.Yz7({token: n, factory: n.ɵfac}), n
    })();
    const lt = r.eFA(r._c5, "browser", [{provide: r.Lbi, useValue: u.bD}, {
      provide: r.g9A, useValue: function () {
        p.makeCurrent()
      }, multi: !0
    }, {
      provide: u.K0, useFactory: function () {
        return r.RDi(document), document
      }, deps: []
    }]), at = new r.OlP(""), vt = [{
      provide: r.rWj, useClass: class {
        addToWindow(n) {
          r.dqk.getAngularTestability = (t, i = !0) => {
            const r = n.findTestabilityInTree(t, i);
            if (null == r) throw new Error("Could not find testability for element.");
            return r
          };
          r.dqk.getAllAngularTestabilities = () => n.getAllTestabilities();
          r.dqk.getAllAngularRootElements = () => n.getAllRootElements();
          r.dqk.frameworkStabilizers || (r.dqk.frameworkStabilizers = []);
          r.dqk.frameworkStabilizers.push(n => {
            const i = r.dqk.getAllAngularTestabilities();
            let u = i.length, t = !1;
            const f = function (i) {
              t = t || i;
              u--;
              0 == u && n(t)
            };
            i.forEach(function (n) {
              n.whenStable(f)
            })
          })
        }

        findTestabilityInTree(n, t, i) {
          return null == t ? null : n.getTestability(t) ?? (i ? u.q().isShadowRoot(t) ? this.findTestabilityInTree(n, t.host, !0) : this.findTestabilityInTree(n, t.parentElement, !0) : null)
        }
      }, deps: []
    }, {provide: r.lri, useClass: r.dDg, deps: [r.R0b, r.eoX, r.rWj]}, {
      provide: r.dDg,
      useClass: r.dDg,
      deps: [r.R0b, r.eoX, r.rWj]
    }], yt = [{provide: r.zSh, useValue: "root"}, {
      provide: r.qLn, useFactory: function () {
        return new r.qLn
      }, deps: []
    }, {provide: s, useClass: ot, multi: !0, deps: [u.K0, r.R0b, r.Lbi]}, {
      provide: s,
      useClass: ct,
      multi: !0,
      deps: [u.K0]
    }, {provide: v, useClass: v, deps: [h, e, r.AFp]}, {provide: r.FYo, useExisting: v}, {
      provide: k,
      useExisting: e
    }, {provide: e, useClass: e, deps: [u.K0]}, {provide: h, useClass: h, deps: [s, r.R0b]}, {
      provide: u.JF,
      useClass: ut,
      deps: []
    }, []];
    let pt = (() => {
      class n {
        constructor() {
        }

        static withServerTransition(t) {
          return {ngModule: n, providers: [{provide: r.AFp, useValue: t.appId}, {provide: w, useExisting: r.AFp}, rt]}
        }
      }

      return n.ɵfac = function (t) {
        return new (t || n)(r.LFG(at, 12))
      }, n.ɵmod = r.oAB({type: n}), n.ɵinj = r.cJS({providers: [...yt, ...vt], imports: [u.ez, r.hGG]}), n
    })();
    typeof window < "u" && window
  }
}, n => {
  n(n.s = 159)
}])
