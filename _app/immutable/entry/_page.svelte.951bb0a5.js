import{S as Un,i as Vn,s as Xn,J as E,e as Mn,K as H,m as P,h as M,n as g,b as W,G as z,H as fn,L as kn,q as Jn,r as Kn,u as Wn,y as he,z as de,A as ge,g as me,d as xe,B as pe}from"../chunks/index.665560c8.js";const ye=[{country:"China",population:1439324},{country:"India",population:1380004},{country:"United States of America",population:331003},{country:"Indonesia",population:273524},{country:"Pakistan",population:220892},{country:"Brazil",population:212559},{country:"Nigeria",population:206140},{country:"Bangladesh",population:164689},{country:"Russian Federation",population:145934},{country:"Mexico",population:128933}];function K(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function be(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Yn(n){let e,t,r;n.length!==2?(e=K,t=(o,u)=>K(n(o),u),r=(o,u)=>n(o)-u):(e=n===K||n===be?n:we,t=n,r=n);function i(o,u,l=0,c=o.length){if(l<c){if(e(u,u)!==0)return c;do{const s=l+c>>>1;t(o[s],u)<0?l=s+1:c=s}while(l<c)}return l}function a(o,u,l=0,c=o.length){if(l<c){if(e(u,u)!==0)return c;do{const s=l+c>>>1;t(o[s],u)<=0?l=s+1:c=s}while(l<c)}return l}function f(o,u,l=0,c=o.length){const s=i(o,u,l,c-1);return s>l&&r(o[s-1],u)>-r(o[s],u)?s-1:s}return{left:i,center:f,right:a}}function we(){return 0}function Me(n){return n===null?NaN:+n}const ke=Yn(K),_e=ke.right;Yn(Me).center;const ve=_e;class _n extends Map{constructor(e,t=Ae){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[r,i]of e)this.set(r,i)}get(e){return super.get(vn(this,e))}has(e){return super.has(vn(this,e))}set(e,t){return super.set(Ne(this,e),t)}delete(e){return super.delete($e(this,e))}}function vn({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):t}function Ne({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):(n.set(r,t),t)}function $e({_intern:n,_key:e},t){const r=e(t);return n.has(r)&&(t=n.get(r),n.delete(r)),t}function Ae(n){return n!==null&&typeof n=="object"?n.valueOf():n}const Re=Math.sqrt(50),Se=Math.sqrt(10),Ee=Math.sqrt(2);function Y(n,e,t){const r=(e-n)/Math.max(0,t),i=Math.floor(Math.log10(r)),a=r/Math.pow(10,i),f=a>=Re?10:a>=Se?5:a>=Ee?2:1;let o,u,l;return i<0?(l=Math.pow(10,-i)/f,o=Math.round(n*l),u=Math.round(e*l),o/l<n&&++o,u/l>e&&--u,l=-l):(l=Math.pow(10,i)*f,o=Math.round(n/l),u=Math.round(e/l),o*l<n&&++o,u*l>e&&--u),u<o&&.5<=t&&t<2?Y(n,e,t*2):[o,u,l]}function He(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const r=e<n,[i,a,f]=r?Y(e,n,t):Y(n,e,t);if(!(a>=i))return[];const o=a-i+1,u=new Array(o);if(r)if(f<0)for(let l=0;l<o;++l)u[l]=(a-l)/-f;else for(let l=0;l<o;++l)u[l]=(a-l)*f;else if(f<0)for(let l=0;l<o;++l)u[l]=(i+l)/-f;else for(let l=0;l<o;++l)u[l]=(i+l)*f;return u}function un(n,e,t){return e=+e,n=+n,t=+t,Y(n,e,t)[2]}function Pe(n,e,t){e=+e,n=+n,t=+t;const r=e<n,i=r?un(e,n,t):un(n,e,t);return(r?-1:1)*(i<0?1/-i:i)}function je(n,e,t){n=+n,e=+e,t=(i=arguments.length)<2?(e=n,n=0,1):i<3?1:+t;for(var r=-1,i=Math.max(0,Math.ceil((e-n)/t))|0,a=new Array(i);++r<i;)a[r]=n+r*t;return a}function hn(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const Nn=Symbol("implicit");function Zn(){var n=new _n,e=[],t=[],r=Nn;function i(a){let f=n.get(a);if(f===void 0){if(r!==Nn)return r;n.set(a,f=e.push(a)-1)}return t[f%t.length]}return i.domain=function(a){if(!arguments.length)return e.slice();e=[],n=new _n;for(const f of a)n.has(f)||n.set(f,e.push(f)-1);return i},i.range=function(a){return arguments.length?(t=Array.from(a),i):t.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return Zn(e,t).unknown(r)},hn.apply(i,arguments),i}function Qn(){var n=Zn().unknown(void 0),e=n.domain,t=n.range,r=0,i=1,a,f,o=!1,u=0,l=0,c=.5;delete n.unknown;function s(){var h=e().length,b=i<r,m=b?i:r,N=b?r:i;a=(N-m)/Math.max(1,h-u+l*2),o&&(a=Math.floor(a)),m+=(N-m-a*(h-u))*c,f=a*(1-u),o&&(m=Math.round(m),f=Math.round(f));var _=je(h).map(function($){return m+a*$});return t(b?_.reverse():_)}return n.domain=function(h){return arguments.length?(e(h),s()):e()},n.range=function(h){return arguments.length?([r,i]=h,r=+r,i=+i,s()):[r,i]},n.rangeRound=function(h){return[r,i]=h,r=+r,i=+i,o=!0,s()},n.bandwidth=function(){return f},n.step=function(){return a},n.round=function(h){return arguments.length?(o=!!h,s()):o},n.padding=function(h){return arguments.length?(u=Math.min(1,l=+h),s()):u},n.paddingInner=function(h){return arguments.length?(u=Math.min(1,h),s()):u},n.paddingOuter=function(h){return arguments.length?(l=+h,s()):l},n.align=function(h){return arguments.length?(c=Math.max(0,Math.min(1,h)),s()):c},n.copy=function(){return Qn(e(),[r,i]).round(o).paddingInner(u).paddingOuter(l).align(c)},hn.apply(s(),arguments)}function dn(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function ne(n,e){var t=Object.create(n.prototype);for(var r in e)t[r]=e[r];return t}function L(){}var F=.7,Z=1/F,C="\\s*([+-]?\\d+)\\s*",B="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",k="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ie=/^#([0-9a-f]{3,8})$/,qe=new RegExp(`^rgb\\(${C},${C},${C}\\)$`),ze=new RegExp(`^rgb\\(${k},${k},${k}\\)$`),Ce=new RegExp(`^rgba\\(${C},${C},${C},${B}\\)$`),Oe=new RegExp(`^rgba\\(${k},${k},${k},${B}\\)$`),Fe=new RegExp(`^hsl\\(${B},${k},${k}\\)$`),Be=new RegExp(`^hsla\\(${B},${k},${k},${B}\\)$`),$n={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};dn(L,D,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:An,formatHex:An,formatHex8:De,formatHsl:Le,formatRgb:Rn,toString:Rn});function An(){return this.rgb().formatHex()}function De(){return this.rgb().formatHex8()}function Le(){return ee(this).formatHsl()}function Rn(){return this.rgb().formatRgb()}function D(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=Ie.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?Sn(e):t===3?new x(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?V(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?V(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=qe.exec(n))?new x(e[1],e[2],e[3],1):(e=ze.exec(n))?new x(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Ce.exec(n))?V(e[1],e[2],e[3],e[4]):(e=Oe.exec(n))?V(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Fe.exec(n))?Pn(e[1],e[2]/100,e[3]/100,1):(e=Be.exec(n))?Pn(e[1],e[2]/100,e[3]/100,e[4]):$n.hasOwnProperty(n)?Sn($n[n]):n==="transparent"?new x(NaN,NaN,NaN,0):null}function Sn(n){return new x(n>>16&255,n>>8&255,n&255,1)}function V(n,e,t,r){return r<=0&&(n=e=t=NaN),new x(n,e,t,r)}function Te(n){return n instanceof L||(n=D(n)),n?(n=n.rgb(),new x(n.r,n.g,n.b,n.opacity)):new x}function ln(n,e,t,r){return arguments.length===1?Te(n):new x(n,e,t,r??1)}function x(n,e,t,r){this.r=+n,this.g=+e,this.b=+t,this.opacity=+r}dn(x,ln,ne(L,{brighter(n){return n=n==null?Z:Math.pow(Z,n),new x(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?F:Math.pow(F,n),new x(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new x(j(this.r),j(this.g),j(this.b),Q(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:En,formatHex:En,formatHex8:Ge,formatRgb:Hn,toString:Hn}));function En(){return`#${S(this.r)}${S(this.g)}${S(this.b)}`}function Ge(){return`#${S(this.r)}${S(this.g)}${S(this.b)}${S((isNaN(this.opacity)?1:this.opacity)*255)}`}function Hn(){const n=Q(this.opacity);return`${n===1?"rgb(":"rgba("}${j(this.r)}, ${j(this.g)}, ${j(this.b)}${n===1?")":`, ${n})`}`}function Q(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function j(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function S(n){return n=j(n),(n<16?"0":"")+n.toString(16)}function Pn(n,e,t,r){return r<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new w(n,e,t,r)}function ee(n){if(n instanceof w)return new w(n.h,n.s,n.l,n.opacity);if(n instanceof L||(n=D(n)),!n)return new w;if(n instanceof w)return n;n=n.rgb();var e=n.r/255,t=n.g/255,r=n.b/255,i=Math.min(e,t,r),a=Math.max(e,t,r),f=NaN,o=a-i,u=(a+i)/2;return o?(e===a?f=(t-r)/o+(t<r)*6:t===a?f=(r-e)/o+2:f=(e-t)/o+4,o/=u<.5?a+i:2-a-i,f*=60):o=u>0&&u<1?0:f,new w(f,o,u,n.opacity)}function Ue(n,e,t,r){return arguments.length===1?ee(n):new w(n,e,t,r??1)}function w(n,e,t,r){this.h=+n,this.s=+e,this.l=+t,this.opacity=+r}dn(w,Ue,ne(L,{brighter(n){return n=n==null?Z:Math.pow(Z,n),new w(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?F:Math.pow(F,n),new w(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*e,i=2*t-r;return new x(an(n>=240?n-240:n+120,i,r),an(n,i,r),an(n<120?n+240:n-120,i,r),this.opacity)},clamp(){return new w(jn(this.h),X(this.s),X(this.l),Q(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Q(this.opacity);return`${n===1?"hsl(":"hsla("}${jn(this.h)}, ${X(this.s)*100}%, ${X(this.l)*100}%${n===1?")":`, ${n})`}`}}));function jn(n){return n=(n||0)%360,n<0?n+360:n}function X(n){return Math.max(0,Math.min(1,n||0))}function an(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const gn=n=>()=>n;function Ve(n,e){return function(t){return n+t*e}}function Xe(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(r){return Math.pow(n+r*e,t)}}function Je(n){return(n=+n)==1?te:function(e,t){return t-e?Xe(e,t,n):gn(isNaN(e)?t:e)}}function te(n,e){var t=e-n;return t?Ve(n,t):gn(isNaN(n)?e:n)}const In=function n(e){var t=Je(e);function r(i,a){var f=t((i=ln(i)).r,(a=ln(a)).r),o=t(i.g,a.g),u=t(i.b,a.b),l=te(i.opacity,a.opacity);return function(c){return i.r=f(c),i.g=o(c),i.b=u(c),i.opacity=l(c),i+""}}return r.gamma=n,r}(1);function Ke(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),i;return function(a){for(i=0;i<t;++i)r[i]=n[i]*(1-a)+e[i]*a;return r}}function We(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ye(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,i=new Array(r),a=new Array(t),f;for(f=0;f<r;++f)i[f]=mn(n[f],e[f]);for(;f<t;++f)a[f]=e[f];return function(o){for(f=0;f<r;++f)a[f]=i[f](o);return a}}function Ze(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function nn(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function Qe(n,e){var t={},r={},i;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(i in e)i in n?t[i]=mn(n[i],e[i]):r[i]=e[i];return function(a){for(i in t)r[i]=t[i](a);return r}}var cn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,on=new RegExp(cn.source,"g");function nt(n){return function(){return n}}function et(n){return function(e){return n(e)+""}}function tt(n,e){var t=cn.lastIndex=on.lastIndex=0,r,i,a,f=-1,o=[],u=[];for(n=n+"",e=e+"";(r=cn.exec(n))&&(i=on.exec(e));)(a=i.index)>t&&(a=e.slice(t,a),o[f]?o[f]+=a:o[++f]=a),(r=r[0])===(i=i[0])?o[f]?o[f]+=i:o[++f]=i:(o[++f]=null,u.push({i:f,x:nn(r,i)})),t=on.lastIndex;return t<e.length&&(a=e.slice(t),o[f]?o[f]+=a:o[++f]=a),o.length<2?u[0]?et(u[0].x):nt(e):(e=u.length,function(l){for(var c=0,s;c<e;++c)o[(s=u[c]).i]=s.x(l);return o.join("")})}function mn(n,e){var t=typeof e,r;return e==null||t==="boolean"?gn(e):(t==="number"?nn:t==="string"?(r=D(e))?(e=r,In):tt:e instanceof D?In:e instanceof Date?Ze:We(e)?Ke:Array.isArray(e)?Ye:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Qe:nn)(n,e)}function rt(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function it(n){return function(){return n}}function at(n){return+n}var qn=[0,1];function q(n){return n}function sn(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:it(isNaN(e)?NaN:.5)}function ot(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function ft(n,e,t){var r=n[0],i=n[1],a=e[0],f=e[1];return i<r?(r=sn(i,r),a=t(f,a)):(r=sn(r,i),a=t(a,f)),function(o){return a(r(o))}}function ut(n,e,t){var r=Math.min(n.length,e.length)-1,i=new Array(r),a=new Array(r),f=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++f<r;)i[f]=sn(n[f],n[f+1]),a[f]=t(e[f],e[f+1]);return function(o){var u=ve(n,o,1,r)-1;return a[u](i[u](o))}}function lt(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function ct(){var n=qn,e=qn,t=mn,r,i,a,f=q,o,u,l;function c(){var h=Math.min(n.length,e.length);return f!==q&&(f=ot(n[0],n[h-1])),o=h>2?ut:ft,u=l=null,s}function s(h){return h==null||isNaN(h=+h)?a:(u||(u=o(n.map(r),e,t)))(r(f(h)))}return s.invert=function(h){return f(i((l||(l=o(e,n.map(r),nn)))(h)))},s.domain=function(h){return arguments.length?(n=Array.from(h,at),c()):n.slice()},s.range=function(h){return arguments.length?(e=Array.from(h),c()):e.slice()},s.rangeRound=function(h){return e=Array.from(h),t=rt,c()},s.clamp=function(h){return arguments.length?(f=h?!0:q,c()):f!==q},s.interpolate=function(h){return arguments.length?(t=h,c()):t},s.unknown=function(h){return arguments.length?(a=h,s):a},function(h,b){return r=h,i=b,c()}}function st(){return ct()(q,q)}function ht(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function en(n,e){if((t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"))<0)return null;var t,r=n.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+n.slice(t+1)]}function O(n){return n=en(Math.abs(n)),n?n[1]:NaN}function dt(n,e){return function(t,r){for(var i=t.length,a=[],f=0,o=n[0],u=0;i>0&&o>0&&(u+o+1>r&&(o=Math.max(1,r-u)),a.push(t.substring(i-=o,i+o)),!((u+=o+1)>r));)o=n[f=(f+1)%n.length];return a.reverse().join(e)}}function gt(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var mt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function tn(n){if(!(e=mt.exec(n)))throw new Error("invalid format: "+n);var e;return new xn({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}tn.prototype=xn.prototype;function xn(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}xn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function xt(n){n:for(var e=n.length,t=1,r=-1,i;t<e;++t)switch(n[t]){case".":r=i=t;break;case"0":r===0&&(r=t),i=t;break;default:if(!+n[t])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var re;function pt(n,e){var t=en(n,e);if(!t)return n+"";var r=t[0],i=t[1],a=i-(re=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,f=r.length;return a===f?r:a>f?r+new Array(a-f+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+en(n,Math.max(0,e+a-1))[0]}function zn(n,e){var t=en(n,e);if(!t)return n+"";var r=t[0],i=t[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Cn={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:ht,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>zn(n*100,e),r:zn,s:pt,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function On(n){return n}var Fn=Array.prototype.map,Bn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function yt(n){var e=n.grouping===void 0||n.thousands===void 0?On:dt(Fn.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",a=n.numerals===void 0?On:gt(Fn.call(n.numerals,String)),f=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"−":n.minus+"",u=n.nan===void 0?"NaN":n.nan+"";function l(s){s=tn(s);var h=s.fill,b=s.align,m=s.sign,N=s.symbol,_=s.zero,$=s.width,rn=s.comma,A=s.precision,pn=s.trim,p=s.type;p==="n"?(rn=!0,p="g"):Cn[p]||(A===void 0&&(A=12),pn=!0,p="g"),(_||h==="0"&&b==="=")&&(_=!0,h="0",b="=");var le=N==="$"?t:N==="#"&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",ce=N==="$"?r:/[%p]/.test(p)?f:"",yn=Cn[p],se=/[defgprs%]/.test(p);A=A===void 0?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,A)):Math.max(0,Math.min(20,A));function bn(d){var R=le,y=ce,I,wn,T;if(p==="c")y=yn(d)+y,d="";else{d=+d;var G=d<0||1/d<0;if(d=isNaN(d)?u:yn(Math.abs(d),A),pn&&(d=xt(d)),G&&+d==0&&m!=="+"&&(G=!1),R=(G?m==="("?m:o:m==="-"||m==="("?"":m)+R,y=(p==="s"?Bn[8+re/3]:"")+y+(G&&m==="("?")":""),se){for(I=-1,wn=d.length;++I<wn;)if(T=d.charCodeAt(I),48>T||T>57){y=(T===46?i+d.slice(I+1):d.slice(I))+y,d=d.slice(0,I);break}}}rn&&!_&&(d=e(d,1/0));var U=R.length+d.length+y.length,v=U<$?new Array($-U+1).join(h):"";switch(rn&&_&&(d=e(v+d,v.length?$-y.length:1/0),v=""),b){case"<":d=R+d+y+v;break;case"=":d=R+v+d+y;break;case"^":d=v.slice(0,U=v.length>>1)+R+d+y+v.slice(U);break;default:d=v+R+d+y;break}return a(d)}return bn.toString=function(){return s+""},bn}function c(s,h){var b=l((s=tn(s),s.type="f",s)),m=Math.max(-8,Math.min(8,Math.floor(O(h)/3)))*3,N=Math.pow(10,-m),_=Bn[8+m/3];return function($){return b(N*$)+_}}return{format:l,formatPrefix:c}}var J,ie,ae;bt({thousands:",",grouping:[3],currency:["$",""]});function bt(n){return J=yt(n),ie=J.format,ae=J.formatPrefix,J}function wt(n){return Math.max(0,-O(Math.abs(n)))}function Mt(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(O(e)/3)))*3-O(Math.abs(n)))}function kt(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,O(e)-O(n))+1}function _t(n,e,t,r){var i=Pe(n,e,t),a;switch(r=tn(r??",f"),r.type){case"s":{var f=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(a=Mt(i,f))&&(r.precision=a),ae(r,f)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=kt(i,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=wt(i))&&(r.precision=a-(r.type==="%")*2);break}}return ie(r)}function vt(n){var e=n.domain;return n.ticks=function(t){var r=e();return He(r[0],r[r.length-1],t??10)},n.tickFormat=function(t,r){var i=e();return _t(i[0],i[i.length-1],t??10,r)},n.nice=function(t){t==null&&(t=10);var r=e(),i=0,a=r.length-1,f=r[i],o=r[a],u,l,c=10;for(o<f&&(l=f,f=o,o=l,l=i,i=a,a=l);c-- >0;){if(l=un(f,o,t),l===u)return r[i]=f,r[a]=o,e(r);if(l>0)f=Math.floor(f/l)*l,o=Math.ceil(o/l)*l;else if(l<0)f=Math.ceil(f*l)/l,o=Math.floor(o*l)/l;else break;u=l}return n},n}function oe(){var n=st();return n.copy=function(){return lt(n,oe())},hn.apply(n,arguments),vt(n)}function Dn(n,e,t){const r=n.slice();return r[8]=e[t],r}function Ln(n,e,t){const r=n.slice();return r[11]=e[t],r}function Tn(n){let e,t,r,i=n[11]+"",a,f;return{c(){e=E("g"),t=E("line"),r=E("text"),a=Jn(i),this.h()},l(o){e=H(o,"g",{transform:!0});var u=P(e);t=H(u,"line",{y2:!0,stroke:!0}),P(t).forEach(M),r=H(u,"text",{"text-anchor":!0,dy:!0,y:!0});var l=P(r);a=Kn(l,i),l.forEach(M),u.forEach(M),this.h()},h(){g(t,"y2",n[4]),g(t,"stroke","black"),g(r,"text-anchor","middle"),g(r,"dy",".7em"),g(r,"y",n[4]+3),g(e,"transform",f=`translate(${n[1](n[11])},0)`)},m(o,u){W(o,e,u),z(e,t),z(e,r),z(r,a)},p(o,u){u&2&&i!==(i=o[11]+"")&&Wn(a,i),u&2&&f!==(f=`translate(${o[1](o[11])},0)`)&&g(e,"transform",f)},d(o){o&&M(e)}}}function Gn(n){let e,t=n[8].country+"",r,i,a,f,o,u;return{c(){e=E("text"),r=Jn(t),a=E("rect"),this.h()},l(l){e=H(l,"text",{"text-anchor":!0,x:!0,dy:!0,y:!0});var c=P(e);r=Kn(c,t),c.forEach(M),a=H(l,"rect",{x:!0,y:!0,width:!0,height:!0}),P(a).forEach(M),this.h()},h(){g(e,"text-anchor","end"),g(e,"x","-3"),g(e,"dy",".3em"),g(e,"y",i=n[2](n[8].country)+n[2].bandwidth()/2),g(a,"x","0"),g(a,"y",f=n[2](n[8].country)),g(a,"width",o=n[1](n[8].population)),g(a,"height",u=n[2].bandwidth())},m(l,c){W(l,e,c),z(e,r),W(l,a,c)},p(l,c){c&1&&t!==(t=l[8].country+"")&&Wn(r,t),c&5&&i!==(i=l[2](l[8].country)+l[2].bandwidth()/2)&&g(e,"y",i),c&5&&f!==(f=l[2](l[8].country))&&g(a,"y",f),c&3&&o!==(o=l[1](l[8].population))&&g(a,"width",o),c&4&&u!==(u=l[2].bandwidth())&&g(a,"height",u)},d(l){l&&M(e),l&&M(a)}}}function Nt(n){let e,t,r,i=n[1].ticks(),a=[];for(let u=0;u<i.length;u+=1)a[u]=Tn(Ln(n,i,u));let f=n[0],o=[];for(let u=0;u<f.length;u+=1)o[u]=Gn(Dn(n,f,u));return{c(){e=E("svg"),t=E("g");for(let u=0;u<a.length;u+=1)a[u].c();r=Mn();for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=H(u,"svg",{width:!0,height:!0});var l=P(e);t=H(l,"g",{transform:!0});var c=P(t);for(let s=0;s<a.length;s+=1)a[s].l(c);r=Mn();for(let s=0;s<o.length;s+=1)o[s].l(c);c.forEach(M),l.forEach(M),this.h()},h(){g(t,"transform",`translate(${n[3].left},${n[3].top})`),g(e,"width",fe),g(e,"height",ue)},m(u,l){W(u,e,l),z(e,t);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(t,null);z(t,r);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(t,null)},p(u,[l]){if(l&18){i=u[1].ticks();let c;for(c=0;c<i.length;c+=1){const s=Ln(u,i,c);a[c]?a[c].p(s,l):(a[c]=Tn(s),a[c].c(),a[c].m(t,r))}for(;c<a.length;c+=1)a[c].d(1);a.length=i.length}if(l&7){f=u[0];let c;for(c=0;c<f.length;c+=1){const s=Dn(u,f,c);o[c]?o[c].p(s,l):(o[c]=Gn(s),o[c].c(),o[c].m(t,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=f.length}},i:fn,o:fn,d(u){u&&M(e),kn(a,u),kn(o,u)}}}let fe=800,ue=600;function $t(n,e,t){let r,i,a,f,{data:o}=e;const u={top:20,right:20,bottom:20,left:180},l=ue-u.top-u.bottom,c=fe-u.left-u.right;return n.$$set=s=>{"data"in s&&t(0,o=s.data)},n.$$.update=()=>{n.$$.dirty&1&&t(6,r=o.map(s=>s.country)),n.$$.dirty&1&&t(5,i=o.map(s=>+s.population)),n.$$.dirty&64&&t(2,a=Qn().domain(r).range([0,l]).padding(.1)),n.$$.dirty&32&&t(1,f=oe().domain([0,Math.max.apply(null,i)]).range([0,c]))},[o,f,a,u,l,i,r]}class At extends Un{constructor(e){super(),Vn(this,e,$t,Nt,Xn,{data:0})}}function Rt(n){let e,t;return e=new At({props:{data:ye}}),{c(){he(e.$$.fragment)},l(r){de(e.$$.fragment,r)},m(r,i){ge(e,r,i),t=!0},p:fn,i(r){t||(me(e.$$.fragment,r),t=!0)},o(r){xe(e.$$.fragment,r),t=!1},d(r){pe(e,r)}}}class Et extends Un{constructor(e){super(),Vn(this,e,null,Rt,Xn,{})}}export{Et as default};
