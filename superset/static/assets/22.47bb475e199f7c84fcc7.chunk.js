(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1631:function(t,e,i){var a;!function(n,r,o){if(n){for(var s,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},c={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},h={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},d=1;d<20;++d)l[111+d]="f"+d;for(d=0;d<=9;++d)l[d+96]=d.toString();b.prototype.bind=function(t,e,i){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,i),this},b.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},b.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},b.prototype.reset=function(){return this._callbacks={},this._directMap={},this},b.prototype.stopCallback=function(t,e){return!((" "+e.className+" ").indexOf(" mousetrap ")>-1)&&(!function t(e,i){return null!==e&&e!==r&&(e===i||t(e.parentNode,i))}(e,this.target)&&("INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable))},b.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},b.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(l[e]=t[e]);s=null},b.init=function(){var t=b(r);for(var e in t)"_"!==e.charAt(0)&&(b[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},b.init(),n.Mousetrap=b,t.exports&&(t.exports=b),void 0===(a=function(){return b}.call(e,i,e,t))||(t.exports=a)}function p(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)}function f(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return l[t.which]?l[t.which]:c[t.which]?c[t.which]:String.fromCharCode(t.which).toLowerCase()}function g(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function m(t,e,i){return i||(i=function(){if(!s)for(var t in s={},l)t>95&&t<112||l.hasOwnProperty(t)&&(s[l[t]]=t);return s}()[t]?"keydown":"keypress"),"keypress"==i&&e.length&&(i="keydown"),i}function v(t,e){var i,a,n,r=[];for(i=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),n=0;n<i.length;++n)a=i[n],h[a]&&(a=h[a]),e&&"keypress"!=e&&u[a]&&(a=u[a],r.push("shift")),g(a)&&r.push(a);return{key:a,modifiers:r,action:e=m(a,r,e)}}function b(t){var e=this;if(t=t||r,!(e instanceof b))return new b(t);e.target=t,e._callbacks={},e._directMap={};var i,a={},n=!1,o=!1,s=!1;function l(t){t=t||{};var e,i=!1;for(e in a)t[e]?i=!0:a[e]=0;i||(s=!1)}function c(t,i,n,r,o,s){var l,c,u,h,d=[],p=n.type;if(!e._callbacks[t])return[];for("keyup"==p&&g(t)&&(i=[t]),l=0;l<e._callbacks[t].length;++l)if(c=e._callbacks[t][l],(r||!c.seq||a[c.seq]==c.level)&&p==c.action&&("keypress"==p&&!n.metaKey&&!n.ctrlKey||(u=i,h=c.modifiers,u.sort().join(",")===h.sort().join(",")))){var f=!r&&c.combo==o,m=r&&c.seq==r&&c.level==s;(f||m)&&e._callbacks[t].splice(l,1),d.push(c)}return d}function u(t,i,a,n){e.stopCallback(i,i.target||i.srcElement,a,n)||!1===t(i,a)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(i),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(i))}function h(t){"number"!=typeof t.which&&(t.which=t.keyCode);var i=f(t);i&&("keyup"!=t.type||n!==i?e.handleKey(i,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):n=!1)}function d(t,e,r,o){function c(e){return function(){s=e,++a[t],clearTimeout(i),i=setTimeout(l,1e3)}}function h(e){u(r,e,t),"keyup"!==o&&(n=f(e)),setTimeout(l,10)}a[t]=0;for(var d=0;d<e.length;++d){var p=d+1===e.length?h:c(o||v(e[d+1]).action);m(e[d],p,o,t,d)}}function m(t,i,a,n,r){e._directMap[t+":"+a]=i;var o,s=(t=t.replace(/\s+/g," ")).split(" ");s.length>1?d(t,s,i,a):(o=v(t,a),e._callbacks[o.key]=e._callbacks[o.key]||[],c(o.key,o.modifiers,{type:o.action},n,t,r),e._callbacks[o.key][n?"unshift":"push"]({callback:i,modifiers:o.modifiers,action:o.action,seq:n,level:r,combo:t}))}e._handleKey=function(t,e,i){var a,n=c(t,e,i),r={},h=0,d=!1;for(a=0;a<n.length;++a)n[a].seq&&(h=Math.max(h,n[a].level));for(a=0;a<n.length;++a)if(n[a].seq){if(n[a].level!=h)continue;d=!0,r[n[a].seq]=1,u(n[a].callback,i,n[a].combo,n[a].seq)}else d||u(n[a].callback,i,n[a].combo);var p="keypress"==i.type&&o;i.type!=s||g(t)||p||l(r),o=d&&"keydown"==i.type},e._bindMultiple=function(t,e,i){for(var a=0;a<t.length;++a)m(t[a],e,i)},p(t,"keypress",h),p(t,"keydown",h),p(t,"keyup",h)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},3690:function(t,e,i){"use strict";i.d(e,"a",(function(){return q}));var a=i(1342),n=i(62),r=i(30),o=i(28),s=i(800);function l(t,e){var i=s.c([],e,t);return s.b(i,i,1/i[3]),i}var c=i(143),u=i(203),h=i(1033);function d(t,e){if(!t)throw new Error(e||"@math.gl/web-mercator: assertion failed.")}var p=Math.PI,f=p/4,g=p/180,m=180/p;function v(t){return Math.pow(2,t)}function b(t){var e=Object(n.a)(t,2),i=e[0],a=e[1];d(Number.isFinite(i)),d(Number.isFinite(a)&&a>=-90&&a<=90,"invalid latitude");var r=a*g;return[512*(i*g+p)/(2*p),512*(p+Math.log(Math.tan(f+.5*r)))/(2*p)]}function y(t){var e=Object(n.a)(t,2),i=e[0],a=e[1],r=i/512*(2*p)-p,o=2*(Math.atan(Math.exp(a/512*(2*p)-p))-f);return[r*m,o*m]}function w(t){var e=t.latitude,i=t.longitude,a=t.highPrecision,n=void 0!==a&&a;d(Number.isFinite(e)&&Number.isFinite(i));var r={},o=Math.cos(e*g),s=512/360/o,l=512/4003e4/o;if(r.unitsPerMeter=[l,l,l],r.metersPerUnit=[1/l,1/l,1/l],r.unitsPerDegree=[512/360,s,l],r.degreesPerUnit=[.703125,1/s,1/l],n){var c=g*Math.tan(e*g)/o,u=512/360*c/2,h=512/4003e4*c,p=h/s*l;r.unitsPerDegree2=[0,u,h],r.unitsPerMeter2=[p,0,p]}return r}function x(t){var e=t.height,i=t.pitch,a=t.bearing,n=t.altitude,r=t.scale,o=t.center,s=void 0===o?null:o,l=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];return c.o(l,l,[0,0,-n]),c.k(l,l,-i*g),c.m(l,l,a*g),r/=e,c.n(l,l,[r,r,r]),s&&c.o(l,l,h.d([],s)),l}function P(t){var e=t.width,i=t.height,a=t.pitch,n=function(t){var e=t.width,i=t.height,a=t.altitude,n=void 0===a?1.5:a,r=t.pitch,o=void 0===r?0:r,s=t.nearZMultiplier,l=void 0===s?1:s,c=t.farZMultiplier,u=void 0===c?1:c,h=o*g,d=Math.atan(.5/n),p=Math.sin(d)*n/Math.sin(Math.min(Math.max(Math.PI/2-h-d,.01),Math.PI-.01));return{fov:2*d,aspect:e/i,focalDistance:n,near:l,far:(Math.sin(h)*p+n)*u}}({width:e,height:i,altitude:t.altitude,pitch:a,nearZMultiplier:t.nearZMultiplier,farZMultiplier:t.farZMultiplier}),r=n.fov,o=n.aspect,s=n.near,l=n.far;return c.i([],r,o,s,l)}function C(t,e){var i=Object(n.a)(t,3),a=i[0],r=i[1],o=i[2],s=void 0===o?0:o;return d(Number.isFinite(a)&&Number.isFinite(r)&&Number.isFinite(s)),l(e,[a,r,s,1])}function M(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=Object(n.a)(t,3),r=a[0],o=a[1],s=a[2];if(d(Number.isFinite(r)&&Number.isFinite(o),"invalid pixel coordinate"),Number.isFinite(s)){var c=l(e,[r,o,s,1]);return c}var h=l(e,[r,o,0,1]),p=l(e,[r,o,1,1]),f=h[2],g=p[2],m=f===g?0:((i||0)-f)/(g-f);return u.d([],h,p,m)}function j(t){var e=t.width,i=t.height,a=t.bounds,r=t.minExtent,o=void 0===r?0:r,s=t.maxZoom,l=void 0===s?24:s,c=t.padding,u=void 0===c?0:c,h=t.offset,p=void 0===h?[0,0]:h,f=Object(n.a)(a,2),g=Object(n.a)(f[0],2),m=g[0],v=g[1],b=Object(n.a)(f[1],2),y=b[0],w=b[1];if(Number.isFinite(u)){u={top:u,bottom:u,left:u,right:u}}else d(Number.isFinite(u.top)&&Number.isFinite(u.bottom)&&Number.isFinite(u.left)&&Number.isFinite(u.right));var x=new S({width:e,height:i,longitude:0,latitude:0,zoom:0}),P=x.project([m,w]),C=x.project([y,v]),M=[Math.max(Math.abs(C[0]-P[0]),o),Math.max(Math.abs(C[1]-P[1]),o)],j=[e-u.left-u.right-2*Math.abs(p[0]),i-u.top-u.bottom-2*Math.abs(p[1])];d(j[0]>0&&j[1]>0);var _=j[0]/M[0],k=j[1]/M[1],O=(u.right-u.left)/2/_,F=(u.bottom-u.top)/2/k,R=[(C[0]+P[0])/2+O,(C[1]+P[1])/2+F],L=x.unproject(R),E=Math.min(l,x.zoom+Math.log2(Math.abs(Math.min(_,k))));return d(Number.isFinite(E)),{longitude:L[0],latitude:L[1],zoom:E}}var _=Math.PI/180;function k(t){var e,i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.width,r=t.height,o=t.unproject,s={targetZ:a},l=o([0,r],s),c=o([n,r],s),u=Math.atan(.5/t.altitude),h=(90-t.pitch)*_;return u>h-.01?(e=O(t,0,a),i=O(t,n,a)):(e=o([0,0],s),i=o([n,0],s)),[l,c,i,e]}function O(t,e,i){var a=t.pixelUnprojectionMatrix,n=l(a,[e,0,1,1]),r=l(a,[e,t.height,1,1]),o=(i*t.distanceScales.unitsPerMeter[2]-n[2])/(r[2]-n[2]),s=y(u.d([],n,r,o));return s[2]=i,s}var S=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:1,height:1},i=e.width,a=e.height,n=e.latitude,o=void 0===n?0:n,s=e.longitude,l=void 0===s?0:s,c=e.zoom,u=void 0===c?0:c,h=e.pitch,d=void 0===h?0:h,p=e.bearing,f=void 0===p?0:p,g=e.altitude,m=void 0===g?1.5:g,y=e.nearZMultiplier,C=void 0===y?.02:y,M=e.farZMultiplier,j=void 0===M?1.01:M;Object(r.a)(this,t),i=i||1,a=a||1;var _=v(u);m=Math.max(.75,m);var k=b([l,o]);k[2]=0,this.projectionMatrix=P({width:i,height:a,pitch:d,altitude:m,nearZMultiplier:C,farZMultiplier:j}),this.viewMatrix=x({height:a,scale:_,center:k,pitch:d,bearing:f,altitude:m}),this.width=i,this.height=a,this.scale=_,this.latitude=o,this.longitude=l,this.zoom=u,this.pitch=d,this.bearing=f,this.altitude=m,this.center=k,this.distanceScales=w(this),this._initMatrices(),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),Object.freeze(this)}return Object(o.a)(t,[{key:"_initMatrices",value:function(){var t=this.width,e=this.height,i=this.projectionMatrix,a=this.viewMatrix,n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];c.g(n,n,i),c.g(n,n,a),this.viewProjectionMatrix=n;var r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];c.n(r,r,[t/2,-e/2,1]),c.o(r,r,[1,-1,0]),c.g(r,r,n);var o=c.e([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r);if(!o)throw new Error("Pixel project matrix not invertible");this.pixelProjectionMatrix=r,this.pixelUnprojectionMatrix=o}},{key:"equals",value:function(e){return e instanceof t&&(e.width===this.width&&e.height===this.height&&c.b(e.projectionMatrix,this.projectionMatrix)&&c.b(e.viewMatrix,this.viewMatrix))}},{key:"project",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.topLeft,a=void 0===i||i,r=this.projectPosition(t),o=C(r,this.pixelProjectionMatrix),s=Object(n.a)(o,2),l=s[0],c=s[1],u=a?c:this.height-c;return 2===t.length?[l,u]:[l,u,o[2]]}},{key:"unproject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.topLeft,a=void 0===i||i,r=e.targetZ,o=void 0===r?void 0:r,s=Object(n.a)(t,3),l=s[0],c=s[1],u=s[2],h=a?c:this.height-c,d=o&&o*this.distanceScales.unitsPerMeter[2],p=M([l,h,u],this.pixelUnprojectionMatrix,d),f=this.unprojectPosition(p),g=Object(n.a)(f,3),m=g[0],v=g[1],b=g[2];return Number.isFinite(u)?[m,v,b]:Number.isFinite(o)?[m,v,o]:[m,v]}},{key:"projectPosition",value:function(t){var e=b(t),i=Object(n.a)(e,2);return[i[0],i[1],(t[2]||0)*this.distanceScales.unitsPerMeter[2]]}},{key:"unprojectPosition",value:function(t){var e=y(t),i=Object(n.a)(e,2);return[i[0],i[1],(t[2]||0)*this.distanceScales.metersPerUnit[2]]}},{key:"projectFlat",value:function(t){return b(t)}},{key:"unprojectFlat",value:function(t){return y(t)}},{key:"getMapCenterByLngLatPosition",value:function(t){var e=t.lngLat,i=M(t.pos,this.pixelUnprojectionMatrix),a=b(e),n=u.a([],a,u.e([],i));return y(u.a([],this.center,n))}},{key:"getLocationAtPoint",value:function(t){var e=t.lngLat,i=t.pos;return this.getMapCenterByLngLatPosition({lngLat:e,pos:i})}},{key:"fitBounds",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.width,n=this.height,r=j(Object.assign({width:a,height:n,bounds:e},i)),o=r.longitude,s=r.latitude,l=r.zoom;return new t({width:a,height:n,longitude:o,latitude:s,zoom:l})}},{key:"getBounds",value:function(t){var e=this.getBoundingRegion(t),i=Math.min.apply(Math,Object(a.a)(e.map((function(t){return t[0]})))),n=Math.max.apply(Math,Object(a.a)(e.map((function(t){return t[0]}))));return[[i,Math.min.apply(Math,Object(a.a)(e.map((function(t){return t[1]}))))],[n,Math.max.apply(Math,Object(a.a)(e.map((function(t){return t[1]}))))]]}},{key:"getBoundingRegion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return k(this,t.z||0)}}]),t}();var F=i(14);const R=[-90,90],L=[-180,180];function E(t,e,i){let[a,n]=t,[r,o]=e;return void 0===i&&(i=.25),a<n?[a,n]:[Math.max(r,a-i),Math.min(o,n+i)]}function A(){return(A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}function q(t,e){let{points:i,width:a,height:n,minExtent:r,maxZoom:o,offset:s,padding:l=20}=e;const{bearing:c,pitch:u}=t,h=function(t){const e=E(Object(F.extent)(t,t=>t[1]),R),i=E(Object(F.extent)(t,t=>t[0]),L);return[[i[0],e[0]],[i[1],e[1]]]}(i);try{return A({},j({bounds:h,width:a,height:n,minExtent:r,maxZoom:o,offset:s,padding:l}),{bearing:c,pitch:u})}catch(t){console.error("Could not fit viewport",t)}return t}},3695:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(13),n=i.n(a);const r=[1,0,1,0,0,0,0];function o(t,e){const i=parseInt(n()(e).format("x"),10);return parseInt(n()(e).add(t).format("x"),10)-i}function s(t,e){const i=n()(Math.min(...t)),a=n()(Math.max(...t));let s,l,c;if(e.includes("/")){const t=e.split("/",2);t[0].endsWith("Z")?(l=n()(t[0]),s=n.a.duration(t[1])):(l=n()(t[1]),s=n.a.duration(t[0]))}else s=n.a.duration(e),l=function(t,e){const i=n()(t).subtract(e),a=t.toArray(),o=i.toArray(),s=a.map((t,e)=>o[e]!==t).indexOf(!0),l=a.map((t,e)=>{if(e===s){const i=t-o[e];return t-(t-r[e])%i}return e<s||-1===s?t:r[e]});return n()(l)}(i,s);const u=i.valueOf();for(c=l.clone();c.valueOf()<u;)c.add(s);for(;c.valueOf()>u;)c.subtract(s);let h;const d=a.valueOf();for(h=l.clone();h.valueOf()>d;)h.subtract(s);for(;h.valueOf()<d;)h.add(s);const p=null!=e?[c,c.clone().add(s)]:[c,h],f=t.every(t=>null===t);return{start:parseInt(c.format("x"),10),end:parseInt(h.format("x"),10),getStep:o.bind(this,s),values:p.map(t=>parseInt(t.format("x"),10)),disabled:f}}},3698:function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var a=i(1),n=i.n(a),r=i(0),o=i.n(r),s=i(3697),l=i(1631),c=i.n(l),u=i(3),h=i(2463),d=i.n(h);i(2635),i(3702);function p(t){return n.a.createElement("span",{className:"BootstrapSliderWrapper"},n.a.createElement(d.a,t))}i(3703);const f={start:o.a.number.isRequired,step:o.a.number.isRequired,end:o.a.number.isRequired,values:o.a.array.isRequired,onChange:o.a.func,loopDuration:o.a.number,maxFrames:o.a.number,orientation:o.a.oneOf(["horizontal","vertical"]),reversed:o.a.bool,disabled:o.a.bool,range:o.a.bool};class g extends n.a.PureComponent{constructor(t){super(t),this.state={intervalId:null};const e=t.end-t.start,i=Math.min(t.maxFrames,e/t.step),a=e/i;this.intervalMilliseconds=t.loopDuration/i,this.increment=a<t.step?t.step:a-a%t.step,this.onChange=this.onChange.bind(this),this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.stepBackward=this.stepBackward.bind(this),this.stepForward=this.stepForward.bind(this),this.getPlayClass=this.getPlayClass.bind(this),this.formatter=this.formatter.bind(this)}componentDidMount(){c.a.bind(["space"],this.play)}componentWillUnmount(){c.a.unbind(["space"])}onChange(t){this.props.onChange(t.target.value),null!=this.state.intervalId&&this.pause()}getPlayClass(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}play(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{const t=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:t})}}pause(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}stepForward(){const{start:t,end:e,step:i,values:a,disabled:n}=this.props;if(n)return;const r=(Array.isArray(a)?a:[a,a+i]).map(t=>t+this.increment),o=r[1]>e?r[0]-t:0;this.props.onChange(r.map(t=>t-o))}stepBackward(){const{start:t,end:e,step:i,values:a,disabled:n}=this.props;if(n)return;const r=(Array.isArray(a)?a:[a,a+i]).map(t=>t-this.increment),o=r[0]<t?e-r[1]:0;this.props.onChange(r.map(t=>t+o))}formatter(t){if(this.props.disabled)return Object(u.t)("Data has no time steps");let e=t;return Array.isArray(t)?t[0]===t[1]&&(e=[t[0]]):e=[t],e.map(t=>new Date(t).toUTCString()).join(" : ")}render(){const{start:t,end:e,step:i,orientation:a,reversed:r,disabled:o,range:s,values:l}=this.props;return n.a.createElement("div",{className:"play-slider"},n.a.createElement("div",{className:"play-slider-controls padded"},n.a.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),n.a.createElement("i",{className:this.getPlayClass(),onClick:this.play}),n.a.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),n.a.createElement("div",{className:"play-slider-scrobbler padded"},n.a.createElement(p,{value:s?l:l[0],range:s,formatter:this.formatter,change:this.onChange,min:t,max:e,step:i,orientation:a,reversed:r,disabled:o?"disabled":"enabled"})))}}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}g.propTypes=f,g.defaultProps={onChange:()=>{},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0};const v={getLayers:o.a.func.isRequired,start:o.a.number.isRequired,end:o.a.number.isRequired,getStep:o.a.func,values:o.a.array.isRequired,aggregation:o.a.bool,disabled:o.a.bool,viewport:o.a.object.isRequired,children:o.a.node,mapStyle:o.a.string,mapboxApiAccessToken:o.a.string.isRequired,setControlValue:o.a.func,onValuesChange:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired};class b extends n.a.PureComponent{constructor(){super(...arguments),m(this,"containerRef",n.a.createRef()),m(this,"setTooltip",t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)})}render(){const{start:t,end:e,getStep:i,disabled:a,aggregation:r,children:o,getLayers:l,values:c,onValuesChange:u,viewport:h,setControlValue:d,mapStyle:p,mapboxApiAccessToken:f,height:m,width:v}=this.props,b=l(c);return n.a.createElement("div",null,n.a.createElement(s.a,{ref:this.containerRef,viewport:h,layers:b,setControlValue:d,mapStyle:p,mapboxApiAccessToken:f,bottomMargin:a?0:20,width:v,height:m}),!a&&n.a.createElement(g,{start:t,end:e,step:i(t),values:c,range:!r,onChange:u}),o)}}b.propTypes=v,b.defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:()=>{},onValuesChange:()=>{}}},3702:function(t,e,i){},3703:function(t,e,i){},3704:function(t,e,i){"use strict";i.d(e,"b",(function(){return j})),i.d(e,"a",(function(){return _}));var a=i(1),n=i.n(a),r=i(0),o=i.n(r),s=i(261),l=i(3697),c=i(72),u=i(3698),h=i(3705),d=i(3709),p=i(3695),f=i(3694),g=i(3690);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const{getScale:b}=c.CategoricalColorNamespace;const y={formData:o.a.object.isRequired,mapboxApiKey:o.a.string.isRequired,setControlValue:o.a.func.isRequired,viewport:o.a.object.isRequired,getLayer:o.a.func.isRequired,getPoints:o.a.func.isRequired,payload:o.a.object.isRequired,onAddFilter:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired};class w extends n.a.PureComponent{constructor(t){super(t),v(this,"containerRef",n.a.createRef()),v(this,"setTooltip",t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)}),this.state=this.getStateFromProps(t),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(t){t.payload.form_data!==this.state.formData&&this.setState(m({},this.getStateFromProps(t)))}onValuesChange(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})}getStateFromProps(t,e){const i=t.payload.data.features||[],a=i.map(t=>t.__timestamp),n=function(t,e){const i=t.color_picker||{r:0,g:0,b:0,a:1},a=[i.r,i.g,i.b,255*i.a],n=b(t.color_scheme),r={};return e.forEach(e=>{if(null!=e.cat_color&&!r.hasOwnProperty(e.cat_color)){let o;o=t.dimension?Object(d.hexToRGB)(n(e.cat_color),255*i.a):a,r[e.cat_color]={color:o,enabled:!0}}}),r}(t.formData,i);if(e&&t.payload.form_data===e.formData)return m({},e,{categories:n});const r=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",{start:o,end:s,getStep:l,values:c,disabled:u}=Object(p.a)(a,r),{width:h,height:f,formData:v}=t;let{viewport:y}=t;return v.autozoom&&(y=Object(g.a)(y,{width:h,height:f,points:t.getPoints(i)})),{start:o,end:s,getStep:l,values:c,disabled:u,viewport:y,selected:[],lastClick:0,formData:t.payload.form_data,categories:n}}getLayers(t){const{getLayer:e,payload:i,formData:a,onAddFilter:n}=this.props;let r=i.data.features?[...i.data.features]:[];if(r=this.addColor(r,a),a.js_data_mutator){r=Object(f.a)(a.js_data_mutator)(r)}r=t[0]===t[1]||t[1]===this.end?r.filter(e=>e.__timestamp>=t[0]&&e.__timestamp<=t[1]):r.filter(e=>e.__timestamp>=t[0]&&e.__timestamp<t[1]);const o=this.state.categories;return a.dimension&&(r=r.filter(t=>o[t.cat_color]&&o[t.cat_color].enabled)),[e(a,m({},i,{data:m({},i.data,{features:r})}),n,this.setTooltip)]}addColor(t,e){const i=e.color_picker||{r:0,g:0,b:0,a:1},a=b(e.color_scheme);return t.map(t=>{let n;return e.dimension?(n=Object(d.hexToRGB)(a(t.cat_color),255*i.a),m({},t,{color:n})):t})}toggleCategory(t){const e=this.state.categories[t],i=m({},this.state.categories,{[t]:m({},e,{enabled:!e.enabled})});Object.values(i).every(t=>!t.enabled)&&Object.values(i).forEach(t=>{t.enabled=!0}),this.setState({categories:i})}showSingleCategory(t){const e=m({},this.state.categories);Object.values(e).forEach(t=>{t.enabled=!1}),e[t].enabled=!0,this.setState({categories:e})}render(){return n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(u.a,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},n.a.createElement(h.a,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))}}function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}function P(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}w.propTypes=y;const C={formData:o.a.object.isRequired,payload:o.a.object.isRequired,setControlValue:o.a.func.isRequired,viewport:o.a.object.isRequired,onAddFilter:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired},M={onAddFilter(){}};function j(t,e){class i extends n.a.PureComponent{constructor(t){super(t),P(this,"containerRef",n.a.createRef()),P(this,"setTooltip",t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)});const{width:i,height:a,formData:r}=t;let{viewport:o}=t;r.autozoom&&(o=Object(g.a)(o,{width:i,height:a,points:e(t.payload.data.features)})),this.state={viewport:o,layer:this.computeLayer(t)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(t){const e=x({},t.formData,{viewport:null}),i=x({},this.props.formData,{viewport:null});Object(s.isEqual)(e,i)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})}onViewportChange(t){this.setState({viewport:t})}computeLayer(e){const{formData:i,payload:a,onAddFilter:n}=e;return t(i,a,n,this.setTooltip)}render(){const{formData:t,payload:e,setControlValue:i,height:a,width:r}=this.props,{layer:o,viewport:s}=this.state;return n.a.createElement(l.a,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:s,layers:[o],mapStyle:t.mapbox_style,setControlValue:i,width:r,height:a,onViewportChange:this.onViewportChange})}}return i.propTypes=C,i.defaultProps=M,i}function _(t,e){function i(i){const{formData:a,payload:r,setControlValue:o,viewport:s,width:l,height:c}=i;return n.a.createElement(w,{formData:a,mapboxApiKey:r.data.mapboxApiKey,setControlValue:o,viewport:s,getLayer:t,payload:r,getPoints:e,width:l,height:c})}return i.propTypes=C,i.defaultProps=M,i}},3705:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i(1),n=i.n(a),r=i(0),o=i.n(r),s=i(21);i(3706);const l={categories:o.a.object,toggleCategory:o.a.func,showSingleCategory:o.a.func,format:o.a.string,position:o.a.oneOf([null,"tl","tr","bl","br"])};class c extends n.a.PureComponent{format(t){if(!this.props.format)return t;const e=parseFloat(t);return Object(s.formatNumber)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(t.includes(" - ")){const e=t.split(" - ");return this.format(e[0])+" - "+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map(t=>{let[e,i]=t;const a={color:"rgba("+i.color.join(", ")+")"},r=i.enabled?"◼":"◻";return n.a.createElement("li",{key:e},n.a.createElement("a",{href:"#",onClick:()=>this.props.toggleCategory(e),onDoubleClick:()=>this.props.showSingleCategory(e)},n.a.createElement("span",{style:a},r)," ",this.formatCategoryLabel(e)))}),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return n.a.createElement("div",{className:"legend",style:e},n.a.createElement("ul",{className:"categories"},t))}}c.propTypes=l,c.defaultProps={categories:{},toggleCategory:()=>{},showSingleCategory:()=>{},format:null,position:"tr"}},3706:function(t,e,i){},3713:function(t,e){},3758:function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var a=i(30),n=i(28),r=i(53),o=i(48),s=i(785),l=i(54),c=i(3746),u=i(3718),h=i(3943),d=i(3818),p=i(3778),f=h.a.fp64LowPart,g=[0,0,0,255],m={radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,fp64:!1,filled:!0,getPosition:{type:"accessor",value:function(t){return t.position}},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:g},getLineColor:{type:"accessor",value:g},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}},v=function(t){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"getShaders",value:function(t){return{vs:"#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  float outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  unitPosition = positions.xy;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  vec3 offset = positions * project_pixel_size(outerRadiusPixels);\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity) / 255.;\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity) / 255.;\n  picking_setPickingColor(instancePickingColors);\n}\n",fs:"#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n\n  float distToCenter = length(unitPosition);\n\n  if (distToCenter > 1.0) {\n    discard;\n  } \n  if (distToCenter > innerUnitRadius) {\n    gl_FragColor = vLineColor;\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n",modules:[this.use64bitProjection()?"project64":"project32","picking"]}}},{key:"initializeState",value:function(){this.getAttributeManager().addInstanced({instancePositions:{size:3,transition:!0,accessor:"getPosition"},instancePositions64xyLow:{size:2,accessor:"getPosition",update:this.calculateInstancePositions64xyLow},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:4,transition:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}},{key:"updateState",value:function(t){var i=t.props,a=t.oldProps,n=t.changeFlags;if(Object(s.a)(Object(o.a)(e.prototype),"updateState",this).call(this,{props:i,oldProps:a,changeFlags:n}),i.fp64!==a.fp64){var r=this.context.gl;this.state.model&&this.state.model.delete(),this.setState({model:this._getModel(r)}),this.getAttributeManager().invalidateAll()}}},{key:"draw",value:function(t){var e=t.uniforms,i=this.context.viewport,a=this.props,n=a.radiusScale,r=a.radiusMinPixels,o=a.radiusMaxPixels,s=a.stroked,l=a.filled,c=a.lineWidthUnits,u=a.lineWidthScale,h=a.lineWidthMinPixels,d=a.lineWidthMaxPixels,p="pixels"===c?i.distanceScales.metersPerPixel[2]:1;this.state.model.setUniforms(Object.assign({},e,{stroked:s?1:0,filled:l,radiusScale:n,radiusMinPixels:r,radiusMaxPixels:o,lineWidthScale:u*p,lineWidthMinPixels:h,lineWidthMaxPixels:d})).draw()}},{key:"_getModel",value:function(t){return new d.a(t,Object.assign(this.getShaders(),{id:this.props.id,geometry:new p.a({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,-1,1,0,1,1,0,1,-1,0])}}}),isInstanced:!0,shaderCache:this.context.shaderCache}))}},{key:"calculateInstancePositions64xyLow",value:function(t,e){var i=e.startRow,a=e.endRow,n=this.use64bitPositions();if(t.constant=!n,n){var r=this.props,o=r.data,s=r.getPosition,l=t.value,u=i*t.size,h=Object(c.a)(o,i,a),d=h.iterable,p=h.objectInfo,g=!0,m=!1,v=void 0;try{for(var b,y=d[Symbol.iterator]();!(g=(b=y.next()).done);g=!0){var w=b.value;p.index++;var x=s(w,p);l[u++]=f(x[0]),l[u++]=f(x[1])}}catch(t){m=!0,v=t}finally{try{g||null==y.return||y.return()}finally{if(m)throw v}}}else t.value=new Float32Array(2)}}]),e}(u.a);v.layerName="ScatterplotLayer",v.defaultProps=m},3827:function(t,e,i){"use strict";i.r(e),i.d(e,"getLayer",(function(){return h}));var a=i(3758),n=i(1),r=i.n(n),o=i(3),s=i(3700),l=i(3704),c=i(3701);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}function h(t,e,i,n){const l=t,h=e.data.features.map(t=>{let e=(i=l.point_unit,a=t.radius,("square_m"===i?Math.sqrt(a/Math.PI):"radius_m"===i?a:"radius_km"===i?1e3*a:"radius_miles"===i?1609.34*a:"square_km"===i?1e3*Math.sqrt(a/Math.PI):"square_miles"===i?1609.34*Math.sqrt(a/Math.PI):null)||10);var i,a;if(l.multiplier&&(e*=l.multiplier),t.color)return u({},t,{radius:e});const n=l.color_picker||{r:0,g:0,b:0,a:1};return u({},t,{radius:e,color:[n.r,n.g,n.b,255*n.a]})});return new a.a(u({id:"scatter-layer-"+l.slice_id,data:h,fp64:!0,getFillColor:t=>t.color,getRadius:t=>t.radius,radiusMinPixels:l.min_radius||null,radiusMaxPixels:l.max_radius||null,stroked:!1},Object(s.a)(l,n,function(t){return e=>r.a.createElement("div",{className:"deckgl-tooltip"},r.a.createElement(c.a,{label:Object(o.t)("Longitude and Latitude")+": ",value:e.object.position[0]+", "+e.object.position[1]}),e.object.cat_color&&r.a.createElement(c.a,{label:Object(o.t)("Category")+": ",value:""+e.object.cat_color}),e.object.metric&&r.a.createElement(c.a,{label:t.point_radius_fixed.value.label+": ",value:""+e.object.metric}))}(l))))}e.default=Object(l.a)(h,(function(t){return t.map(t=>t.position)}))}}]);