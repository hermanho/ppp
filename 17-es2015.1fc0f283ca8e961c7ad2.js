(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Pm0H:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=t("Gzjn"),a=t("XIv+");class o{constructor(l,n){this.location=l,this.psService=n,this.photoStandard=new a.b("__unknown__","Loading ..."),this._allStandards=n.getAllPhotoStandards(),this.photoStandard=n.getSelectedStandard()}ngOnInit(){this._selectableStandards=this._allStandards}get selectableStandards(){const l=null!=this._selectableStandards?this._selectableStandards:this._allStandards;let n=this.psService.getCountryCode();return n?((n=n.toLowerCase())&&l.sort((l,t)=>this.getCountryCode(l)===n?-1:this.getCountryCode(t)===n?1:0),l):l}setSelected(l){this.psService.setSelectedStandard(l),this.location.back()}getFlagClass(l){return"flag-icon flag-icon-"+this.getCountryCode(l)}getCountryCode(l){return l.id.substr(0,2)}filterPhotoStandard(l){const n=l.target.value.toLowerCase();this._selectableStandards=n?this._allStandards.filter(l=>l.country.toLowerCase().includes(n)||l.text.toLowerCase().includes(n)):this._allStandards}}class r{}var b=t("pMnS"),i=t("oBZk"),s=t("ZZ/e"),d=t("s7LF"),c=t("SVse"),p=u.zb({encapsulation:0,styles:[""],data:{}});function h(l){return u.Sb(0,[(l()(),u.Bb(0,0,null,null,9,"ion-item",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setSelected(l.context.$implicit)&&u),u}),i.R,i.m)),u.Ab(1,49152,null,0,s.H,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,0,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),u.Bb(3,0,null,0,2,"ion-label",[["class","ion-margin-start"]],null,null,null,i.S,i.p)),u.Ab(4,49152,null,0,s.N,[u.j,u.p,u.F],null,null),(l()(),u.Rb(5,0,[" "," "])),(l()(),u.Bb(6,0,null,0,3,"ion-button",[["icon-only",""]],null,null,null,i.F,i.c)),u.Ab(7,49152,null,0,s.k,[u.j,u.p,u.F],null,null),(l()(),u.Bb(8,0,null,0,1,"ion-icon",[["name","create"]],null,null,null,i.O,i.l)),u.Ab(9,49152,null,0,s.C,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(l,n){l(n,9,0,"create")}),(function(l,n){l(n,2,0,n.component.getFlagClass(n.context.$implicit)),l(n,5,0,n.context.$implicit.text)}))}function f(l){return u.Sb(0,[(l()(),u.Bb(0,0,null,null,15,"ion-header",[],null,null,null,i.N,i.k)),u.Ab(1,49152,null,0,s.B,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,13,"ion-toolbar",[],null,null,null,i.fb,i.C)),u.Ab(3,49152,null,0,s.Cb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.G,i.d)),u.Ab(5,49152,null,0,s.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Mb(l,8).onClick(t)&&e),e}),i.E,i.b)),u.Ab(7,49152,null,0,s.g,[u.j,u.p,u.F],{defaultHref:[0,"defaultHref"]},null),u.Ab(8,16384,null,0,s.h,[[2,s.ib],s.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),u.Bb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,i.G,i.d)),u.Ab(10,49152,null,0,s.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(11,0,null,0,1,"ion-menu-button",[],null,null,null,i.V,i.t)),u.Ab(12,49152,null,0,s.R,[u.j,u.p,u.F],null,null),(l()(),u.Bb(13,0,null,0,2,"ion-title",[],null,null,null,i.db,i.A)),u.Ab(14,49152,null,0,s.Ab,[u.j,u.p,u.F],null,null),(l()(),u.Rb(-1,0,["Available Photo Standards"])),(l()(),u.Bb(16,0,null,null,11,"ion-content",[],null,null,null,i.L,i.i)),u.Ab(17,49152,null,0,s.u,[u.j,u.p,u.F],null,null),(l()(),u.Bb(18,0,null,0,9,"ion-list",[],null,null,null,i.U,i.q)),u.Ab(19,49152,null,0,s.O,[u.j,u.p,u.F],null,null),(l()(),u.Bb(20,0,null,0,5,"ion-list-header",[["class","ion-no-padding"]],null,null,null,i.T,i.r)),u.Ab(21,49152,null,0,s.P,[u.j,u.p,u.F],null,null),(l()(),u.Bb(22,0,null,0,3,"ion-searchbar",[["placeholder","Search photo standards"]],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,a=l.component;return"ionBlur"===n&&(e=!1!==u.Mb(l,25)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Mb(l,25)._handleInputEvent(t.target)&&e),"ionInput"===n&&(e=!1!==a.filterPhotoStandard(t)&&e),e}),i.ab,i.x)),u.Ob(5120,null,d.c,(function(l){return[l]}),[s.Lb]),u.Ab(24,49152,null,0,s.kb,[u.j,u.p,u.F],{placeholder:[0,"placeholder"]},null),u.Ab(25,16384,null,0,s.Lb,[u.p],null,null),(l()(),u.qb(16777216,null,0,1,null,h)),u.Ab(27,278528,null,0,c.h,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,7,0,"/"),l(n,8,0,"/"),l(n,24,0,"Search photo standards"),l(n,27,0,t.selectableStandards)}),null)}function S(l){return u.Sb(0,[(l()(),u.Bb(0,0,null,null,1,"app-photo-standard",[],null,null,null,f,p)),u.Ab(1,114688,null,0,o,[c.f,e.a],null,null)],(function(l,n){l(n,1,0)}),null)}var g=u.xb("app-photo-standard",o,S,{},{},[]),A=t("iInd");t.d(n,"PhotoStandardPageModuleNgFactory",(function(){return F}));var F=u.yb(r,[],(function(l){return u.Jb([u.Kb(512,u.m,u.jb,[[8,[b.a,g]],[3,u.m],u.D]),u.Kb(4608,c.k,c.j,[u.z,[2,c.r]]),u.Kb(4608,d.g,d.g,[]),u.Kb(4608,s.b,s.b,[u.F,u.g]),u.Kb(4608,s.Gb,s.Gb,[s.b,u.m,u.w]),u.Kb(4608,s.Jb,s.Jb,[s.b,u.m,u.w]),u.Kb(1073742336,c.b,c.b,[]),u.Kb(1073742336,d.f,d.f,[]),u.Kb(1073742336,d.b,d.b,[]),u.Kb(1073742336,s.Eb,s.Eb,[]),u.Kb(1073742336,A.o,A.o,[[2,A.t],[2,A.m]]),u.Kb(1073742336,r,r,[]),u.Kb(1024,A.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);