!function(e){function t(t){for(var s,o,u=t[0],j=t[1],l=t[2],i=0,m=[];i<u.length;i++)o=u[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);for(c&&c(t);m.length;)m.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,u=1;u<r.length;u++){var j=r[u];0!==a[j]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={11:0},n=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static/assets/";var u=window.webpackJsonp=window.webpackJsonp||[],j=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=j;n.push([3400,0,4]),r()}({1063:function(e,t,r){var s={"./af":544,"./af.js":544,"./ar":545,"./ar-dz":546,"./ar-dz.js":546,"./ar-kw":547,"./ar-kw.js":547,"./ar-ly":548,"./ar-ly.js":548,"./ar-ma":549,"./ar-ma.js":549,"./ar-sa":550,"./ar-sa.js":550,"./ar-tn":551,"./ar-tn.js":551,"./ar.js":545,"./az":552,"./az.js":552,"./be":553,"./be.js":553,"./bg":554,"./bg.js":554,"./bm":555,"./bm.js":555,"./bn":556,"./bn.js":556,"./bo":557,"./bo.js":557,"./br":558,"./br.js":558,"./bs":559,"./bs.js":559,"./ca":560,"./ca.js":560,"./cs":561,"./cs.js":561,"./cv":562,"./cv.js":562,"./cy":563,"./cy.js":563,"./da":564,"./da.js":564,"./de":565,"./de-at":566,"./de-at.js":566,"./de-ch":567,"./de-ch.js":567,"./de.js":565,"./dv":568,"./dv.js":568,"./el":569,"./el.js":569,"./en-au":570,"./en-au.js":570,"./en-ca":571,"./en-ca.js":571,"./en-gb":572,"./en-gb.js":572,"./en-ie":573,"./en-ie.js":573,"./en-il":574,"./en-il.js":574,"./en-nz":575,"./en-nz.js":575,"./eo":576,"./eo.js":576,"./es":577,"./es-do":578,"./es-do.js":578,"./es-us":579,"./es-us.js":579,"./es.js":577,"./et":580,"./et.js":580,"./eu":581,"./eu.js":581,"./fa":582,"./fa.js":582,"./fi":583,"./fi.js":583,"./fo":584,"./fo.js":584,"./fr":585,"./fr-ca":586,"./fr-ca.js":586,"./fr-ch":587,"./fr-ch.js":587,"./fr.js":585,"./fy":588,"./fy.js":588,"./gd":589,"./gd.js":589,"./gl":590,"./gl.js":590,"./gom-latn":591,"./gom-latn.js":591,"./gu":592,"./gu.js":592,"./he":593,"./he.js":593,"./hi":594,"./hi.js":594,"./hr":595,"./hr.js":595,"./hu":596,"./hu.js":596,"./hy-am":597,"./hy-am.js":597,"./id":598,"./id.js":598,"./is":599,"./is.js":599,"./it":600,"./it.js":600,"./ja":601,"./ja.js":601,"./jv":602,"./jv.js":602,"./ka":603,"./ka.js":603,"./kk":604,"./kk.js":604,"./km":605,"./km.js":605,"./kn":606,"./kn.js":606,"./ko":607,"./ko.js":607,"./ku":608,"./ku.js":608,"./ky":609,"./ky.js":609,"./lb":610,"./lb.js":610,"./lo":611,"./lo.js":611,"./lt":612,"./lt.js":612,"./lv":613,"./lv.js":613,"./me":614,"./me.js":614,"./mi":615,"./mi.js":615,"./mk":616,"./mk.js":616,"./ml":617,"./ml.js":617,"./mn":618,"./mn.js":618,"./mr":619,"./mr.js":619,"./ms":620,"./ms-my":621,"./ms-my.js":621,"./ms.js":620,"./mt":622,"./mt.js":622,"./my":623,"./my.js":623,"./nb":624,"./nb.js":624,"./ne":625,"./ne.js":625,"./nl":626,"./nl-be":627,"./nl-be.js":627,"./nl.js":626,"./nn":628,"./nn.js":628,"./pa-in":629,"./pa-in.js":629,"./pl":630,"./pl.js":630,"./pt":631,"./pt-br":632,"./pt-br.js":632,"./pt.js":631,"./ro":633,"./ro.js":633,"./ru":634,"./ru.js":634,"./sd":635,"./sd.js":635,"./se":636,"./se.js":636,"./si":637,"./si.js":637,"./sk":638,"./sk.js":638,"./sl":639,"./sl.js":639,"./sq":640,"./sq.js":640,"./sr":641,"./sr-cyrl":642,"./sr-cyrl.js":642,"./sr.js":641,"./ss":643,"./ss.js":643,"./sv":644,"./sv.js":644,"./sw":645,"./sw.js":645,"./ta":646,"./ta.js":646,"./te":647,"./te.js":647,"./tet":648,"./tet.js":648,"./tg":649,"./tg.js":649,"./th":650,"./th.js":650,"./tl-ph":651,"./tl-ph.js":651,"./tlh":652,"./tlh.js":652,"./tr":653,"./tr.js":653,"./tzl":654,"./tzl.js":654,"./tzm":655,"./tzm-latn":656,"./tzm-latn.js":656,"./tzm.js":655,"./ug-cn":657,"./ug-cn.js":657,"./uk":658,"./uk.js":658,"./ur":659,"./ur.js":659,"./uz":660,"./uz-latn":661,"./uz-latn.js":661,"./uz.js":660,"./vi":662,"./vi.js":662,"./x-pseudo":663,"./x-pseudo.js":663,"./yo":664,"./yo.js":664,"./zh-cn":665,"./zh-cn.js":665,"./zh-hk":666,"./zh-hk.js":666,"./zh-tw":667,"./zh-tw.js":667};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id=1063},3400:function(e,t,r){e.exports=r(888)},888:function(e,t,r){"use strict";r.r(t);r(1062);var s=r(13),a=r.n(s),n=r(3),o=r(34),u=(r(270),r(39)),j=r.n(u),l=r(16),c=r.n(l),i=r(809),m=r.n(i);var b=r(45);var g=r(30),f=r.n(g),d=r(682),p=r.n(d),O=r(455),h=r.n(O),y=r(683),N=r.n(y),F=r(684),v=r.n(F),V=r(685),k=r.n(V),w=r(686),z=r.n(w),_=r(456),S=r.n(_),$=r(71),D=r(681),x=r.n(D);var E=r(20),T=r(103);if("undefined"!=typeof window){const e=document.getElementById("app"),t=e?JSON.parse(e.getAttribute("data-bootstrap")||"{}"):{};if(t.common&&t.common.language_pack){const e=t.common.language_pack;Object(n.configure)({languagePack:e}),a.a.locale(t.common.locale)}else Object(n.configure)()}else Object(n.configure)();!function(){const e=document.querySelector("#csrf_token"),t=e?e.value:null,r=function(e=document.cookie){var t,r;return m()(c()(t=j()(r=e.split("; ")).call(r,e=>e)).call(t,e=>e.split("=")))}().csrf_access_token||"";o.SupersetClient.configure({protocol:window.location&&window.location.protocol||"",host:window.location&&window.location.host||"",csrfToken:t||r}).init().catch(e=>{b.logging.warn("Error initializing SupersetClient",e)})}(),function(){var e,t;const r=Object($.getCategoricalSchemeRegistry)();f()(e=[x.a,p.a,h.a,N.a,v.a,k.a]).call(e,e=>{f()(e).call(e,e=>{r.registerValue(e.id,e)})}),r.setDefaultKey("supersetColors");const s=Object($.getSequentialSchemeRegistry)();f()(t=[z.a,S.a]).call(t,e=>{f()(e).call(e,e=>{s.registerValue(e.id,e)})}),s.setDefaultKey("superset_seq_1")}(),Object(E.getNumberFormatterRegistry)().registerValue(",0",Object(E.getNumberFormatter)(",.4~f")).registerValue("null",Object(E.getNumberFormatter)(",.4~f")).registerValue("%",Object(E.getNumberFormatter)(".0%")).registerValue(".",Object(E.getNumberFormatter)(".4~f")).registerValue(",f",Object(E.getNumberFormatter)(",d")).registerValue(",r",Object(E.getNumberFormatter)(",.4f")).registerValue("0f",Object(E.getNumberFormatter)(",d")).registerValue(",#",Object(E.getNumberFormatter)(",.4~f")).registerValue("$,f",Object(E.getNumberFormatter)("$,d")).registerValue("0%",Object(E.getNumberFormatter)(".0%")).registerValue("f",Object(E.getNumberFormatter)(",d")).registerValue(",.",Object(E.getNumberFormatter)(",.4~f")).registerValue(".1%f",Object(E.getNumberFormatter)(".1%")).registerValue("1%",Object(E.getNumberFormatter)(".0%")).registerValue("3%",Object(E.getNumberFormatter)(".0%")).registerValue(",%",Object(E.getNumberFormatter)(",.0%")).registerValue(".r",Object(E.getNumberFormatter)(".4~f")).registerValue("$,.0",Object(E.getNumberFormatter)("$,d")).registerValue("$,.1",Object(E.getNumberFormatter)("$,.1~f")).registerValue(",0s",Object(E.getNumberFormatter)(",.4~f")).registerValue("%%%",Object(E.getNumberFormatter)(".0%")).registerValue(",0f",Object(E.getNumberFormatter)(",d")).registerValue("+,%",Object(E.getNumberFormatter)("+,.0%")).registerValue("$f",Object(E.getNumberFormatter)("$,d")).registerValue("+,",Object(E.getNumberFormatter)(E.NumberFormats.INTEGER_SIGNED)).registerValue(",2f",Object(E.getNumberFormatter)(",.4~f")).registerValue(",g",Object(E.getNumberFormatter)(",.4~f")).registerValue("int",Object(E.getNumberFormatter)(E.NumberFormats.INTEGER)).registerValue(".0%f",Object(E.getNumberFormatter)(".1%")).registerValue("$,0",Object(E.getNumberFormatter)("$,.4f")).registerValue("$,0f",Object(E.getNumberFormatter)("$,.4f")).registerValue("$,.f",Object(E.getNumberFormatter)("$,.4f")).registerValue("DURATION",Object(E.createDurationFormatter)()).registerValue("DURATION_SUB",Object(E.createDurationFormatter)({formatSubMilliseconds:!0})),Object(T.getTimeFormatterRegistry)().registerValue("smart_date",T.smartDateFormatter).registerValue("smart_date_verbose",T.smartDateVerboseFormatter).setDefaultKey("smart_date")}});