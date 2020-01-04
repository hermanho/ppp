function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3F3D":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("6nr9"),b=function(){function l(n){_classCallCheck(this,l),this.settings=n}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"setDarkTheme",value:function(l){this.settings.setDarkMode(l),document.body.classList.toggle("dark",l)}},{key:"changeTheme",value:function(l){this.setDarkTheme(l.target.checked)}},{key:"resetThemePreference",value:function(){this.settings.resetThemePreferences(),this.setDarkTheme(this.settings.getDarkMode())}}]),l}(),o=function l(){_classCallCheck(this,l)},i=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),c=u("s7LF"),s=u("SVse"),f=e.zb({encapsulation:0,styles:[""],data:{}});function p(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-button",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.resetThemePreference()&&e),e}),r.F,r.c)),e.Ab(1,49152,null,0,a.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,1,"ion-icon",[["name","undo"]],null,null,null,r.O,r.l)),e.Ab(3,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"undo")}),null)}function h(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,15,"ion-header",[],null,null,null,r.N,r.k)),e.Ab(1,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,13,"ion-toolbar",[],null,null,null,r.fb,r.C)),e.Ab(3,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.G,r.d)),e.Ab(5,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Mb(l,8).onClick(u)&&t),t}),r.E,r.b)),e.Ab(7,49152,null,0,a.g,[e.j,e.p,e.F],{defaultHref:[0,"defaultHref"]},null),e.Ab(8,16384,null,0,a.h,[[2,a.ib],a.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.Bb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,r.G,r.d)),e.Ab(10,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(11,0,null,0,1,"ion-menu-button",[],null,null,null,r.V,r.t)),e.Ab(12,49152,null,0,a.R,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,2,"ion-title",[],null,null,null,r.db,r.A)),e.Ab(14,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Rb(-1,0,["Settings"])),(l()(),e.Bb(16,0,null,null,14,"ion-content",[],null,null,null,r.L,r.i)),e.Ab(17,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,12,"ion-item-group",[],null,null,null,r.Q,r.o)),e.Ab(19,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(20,0,null,0,10,"ion-item",[],null,null,null,r.R,r.m)),e.Ab(21,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(22,0,null,0,2,"ion-label",[],null,null,null,r.S,r.p)),e.Ab(23,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Rb(-1,0,["Dark Theme"])),(l()(),e.Bb(25,0,null,0,3,"ion-toggle",[["name","darkTheme"],["slot","end"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,b=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,28)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,28)._handleIonChange(u.target)&&t),"ionChange"===n&&(t=!1!==b.changeTheme(u)&&t),t}),r.eb,r.B)),e.Ob(5120,null,c.c,(function(l){return[l]}),[a.c]),e.Ab(27,49152,null,0,a.Bb,[e.j,e.p,e.F],{checked:[0,"checked"],name:[1,"name"]},null),e.Ab(28,16384,null,0,a.c,[e.p],null,null),(l()(),e.qb(16777216,null,0,1,null,p)),e.Ab(30,16384,null,0,s.i,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"/"),l(n,8,0,"/"),l(n,27,0,u.settings.getDarkMode(),"darkTheme"),l(n,30,0,!1)}),null)}var d=e.xb("app-settings",b,(function(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,1,"app-settings",[],null,null,null,h,f)),e.Ab(1,114688,null,0,b,[t.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=u("iInd");u.d(n,"SettingsPageModuleNgFactory",(function(){return k}));var k=e.yb(o,[],(function(l){return e.Jb([e.Kb(512,e.m,e.jb,[[8,[i.a,d]],[3,e.m],e.D]),e.Kb(4608,s.k,s.j,[e.z,[2,s.r]]),e.Kb(4608,c.g,c.g,[]),e.Kb(4608,a.b,a.b,[e.F,e.g]),e.Kb(4608,a.Gb,a.Gb,[a.b,e.m,e.w]),e.Kb(4608,a.Jb,a.Jb,[a.b,e.m,e.w]),e.Kb(1073742336,s.b,s.b,[]),e.Kb(1073742336,c.f,c.f,[]),e.Kb(1073742336,c.b,c.b,[]),e.Kb(1073742336,a.Eb,a.Eb,[]),e.Kb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),e.Kb(1073742336,o,o,[]),e.Kb(1024,g.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);