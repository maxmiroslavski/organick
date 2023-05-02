function Tw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Nw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ws={},Ow={get exports(){return Ws},set exports(e){Ws=e}},Bl={},b={},Rw={get exports(){return b},set exports(e){b=e}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),Aw=Symbol.for("react.portal"),Iw=Symbol.for("react.fragment"),Dw=Symbol.for("react.strict_mode"),Mw=Symbol.for("react.profiler"),Lw=Symbol.for("react.provider"),jw=Symbol.for("react.context"),Vw=Symbol.for("react.forward_ref"),Fw=Symbol.for("react.suspense"),$w=Symbol.for("react.memo"),zw=Symbol.for("react.lazy"),gp=Symbol.iterator;function Bw(e){return e===null||typeof e!="object"?null:(e=gp&&e[gp]||e["@@iterator"],typeof e=="function"?e:null)}var My={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ly=Object.assign,jy={};function is(e,t,n){this.props=e,this.context=t,this.refs=jy,this.updater=n||My}is.prototype.isReactComponent={};is.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};is.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vy(){}Vy.prototype=is.prototype;function Cf(e,t,n){this.props=e,this.context=t,this.refs=jy,this.updater=n||My}var Pf=Cf.prototype=new Vy;Pf.constructor=Cf;Ly(Pf,is.prototype);Pf.isPureReactComponent=!0;var yp=Array.isArray,Fy=Object.prototype.hasOwnProperty,Ef={current:null},$y={key:!0,ref:!0,__self:!0,__source:!0};function zy(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Fy.call(t,r)&&!$y.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oo,type:e,key:s,ref:o,props:i,_owner:Ef.current}}function Uw(e,t){return{$$typeof:Oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oo}function Ww(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vp=/\/+/g;function $u(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ww(""+e.key):t.toString(36)}function ya(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Oo:case Aw:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$u(o,0):r,yp(i)?(n="",e!=null&&(n=e.replace(vp,"$&/")+"/"),ya(i,t,n,"",function(u){return u})):i!=null&&(Tf(i)&&(i=Uw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",yp(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+$u(s,a);o+=ya(s,t,n,l,i)}else if(l=Bw(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+$u(s,a++),o+=ya(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(e,t,n){if(e==null)return e;var r=[],i=0;return ya(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Hw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var kt={current:null},va={transition:null},Qw={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:va,ReactCurrentOwner:Ef};ge.Children={map:qo,forEach:function(e,t,n){qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qo(e,function(){t++}),t},toArray:function(e){return qo(e,function(t){return t})||[]},only:function(e){if(!Tf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=is;ge.Fragment=Iw;ge.Profiler=Mw;ge.PureComponent=Cf;ge.StrictMode=Dw;ge.Suspense=Fw;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qw;ge.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ly({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ef.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Fy.call(t,l)&&!$y.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oo,type:e.type,key:i,ref:s,props:r,_owner:o}};ge.createContext=function(e){return e={$$typeof:jw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lw,_context:e},e.Consumer=e};ge.createElement=zy;ge.createFactory=function(e){var t=zy.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:Vw,render:e}};ge.isValidElement=Tf;ge.lazy=function(e){return{$$typeof:zw,_payload:{_status:-1,_result:e},_init:Hw}};ge.memo=function(e,t){return{$$typeof:$w,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=va.transition;va.transition={};try{e()}finally{va.transition=t}};ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ge.useCallback=function(e,t){return kt.current.useCallback(e,t)};ge.useContext=function(e){return kt.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return kt.current.useDeferredValue(e)};ge.useEffect=function(e,t){return kt.current.useEffect(e,t)};ge.useId=function(){return kt.current.useId()};ge.useImperativeHandle=function(e,t,n){return kt.current.useImperativeHandle(e,t,n)};ge.useInsertionEffect=function(e,t){return kt.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return kt.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return kt.current.useMemo(e,t)};ge.useReducer=function(e,t,n){return kt.current.useReducer(e,t,n)};ge.useRef=function(e){return kt.current.useRef(e)};ge.useState=function(e){return kt.current.useState(e)};ge.useSyncExternalStore=function(e,t,n){return kt.current.useSyncExternalStore(e,t,n)};ge.useTransition=function(){return kt.current.useTransition()};ge.version="18.2.0";(function(e){e.exports=ge})(Rw);const pt=Nw(b),Bc=Tw({__proto__:null,default:pt},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zw=b,qw=Symbol.for("react.element"),Kw=Symbol.for("react.fragment"),Gw=Object.prototype.hasOwnProperty,Yw=Zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xw={key:!0,ref:!0,__self:!0,__source:!0};function By(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Gw.call(t,r)&&!Xw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qw,type:e,key:s,ref:o,props:i,_owner:Yw.current}}Bl.Fragment=Kw;Bl.jsx=By;Bl.jsxs=By;(function(e){e.exports=Bl})(Ow);const Nf=Ws.Fragment,p=Ws.jsx,T=Ws.jsxs;var Uc={},Da={},Jw={get exports(){return Da},set exports(e){Da=e}},Vt={},Wc={},e_={get exports(){return Wc},set exports(e){Wc=e}},Uy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,X){var ee=D.length;D.push(X);e:for(;0<ee;){var te=ee-1>>>1,V=D[te];if(0<i(V,X))D[te]=X,D[ee]=V,ee=te;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var X=D[0],ee=D.pop();if(ee!==X){D[0]=ee;e:for(var te=0,V=D.length,z=V>>>1;te<z;){var B=2*(te+1)-1,ie=D[B],P=B+1,ce=D[P];if(0>i(ie,ee))P<V&&0>i(ce,ie)?(D[te]=ce,D[P]=ee,te=P):(D[te]=ie,D[B]=ee,te=B);else if(P<V&&0>i(ce,ee))D[te]=ce,D[P]=ee,te=P;else break e}}return X}function i(D,X){var ee=D.sortIndex-X.sortIndex;return ee!==0?ee:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=D)r(u),X.sortIndex=X.expirationTime,t(l,X);else break;X=n(u)}}function w(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,Se(k);else{var X=n(u);X!==null&&ve(w,X.startTime-D)}}function k(D,X){v=!1,x&&(x=!1,y(E),E=-1),m=!0;var ee=f;try{for(g(X),d=n(l);d!==null&&(!(d.expirationTime>X)||D&&!oe());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var V=te(d.expirationTime<=X);X=e.unstable_now(),typeof V=="function"?d.callback=V:d===n(l)&&r(l),g(X)}else r(l);d=n(l)}if(d!==null)var z=!0;else{var B=n(u);B!==null&&ve(w,B.startTime-X),z=!1}return z}finally{d=null,f=ee,m=!1}}var R=!1,N=null,E=-1,L=5,$=-1;function oe(){return!(e.unstable_now()-$<L)}function G(){if(N!==null){var D=e.unstable_now();$=D;var X=!0;try{X=N(!0,D)}finally{X?q():(R=!1,N=null)}}else R=!1}var q;if(typeof h=="function")q=function(){h(G)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,re=J.port2;J.port1.onmessage=G,q=function(){re.postMessage(null)}}else q=function(){_(G,0)};function Se(D){N=D,R||(R=!0,q())}function ve(D,X){E=_(function(){D(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Se(k))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var ee=f;f=X;try{return D()}finally{f=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ee=f;f=D;try{return X()}finally{f=ee}},e.unstable_scheduleCallback=function(D,X,ee){var te=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?te+ee:te):ee=te,D){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=ee+V,D={id:c++,callback:X,priorityLevel:D,startTime:ee,expirationTime:V,sortIndex:-1},ee>te?(D.sortIndex=ee,t(u,D),n(l)===null&&D===n(u)&&(x?(y(E),E=-1):x=!0,ve(w,ee-te))):(D.sortIndex=V,t(l,D),v||m||(v=!0,Se(k))),D},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(D){var X=f;return function(){var ee=f;f=X;try{return D.apply(this,arguments)}finally{f=ee}}}})(Uy);(function(e){e.exports=Uy})(e_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=b,Mt=Wc;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hy=new Set,Hs={};function si(e,t){Wi(e,t),Wi(e+"Capture",t)}function Wi(e,t){for(Hs[e]=t,e=0;e<t.length;e++)Hy.add(t[e])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,t_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},wp={};function n_(e){return Hc.call(wp,e)?!0:Hc.call(xp,e)?!1:t_.test(e)?wp[e]=!0:(xp[e]=!0,!1)}function r_(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i_(e,t,n,r){if(t===null||typeof t>"u"||r_(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ct(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ut[e]=new Ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ut[t]=new Ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ut[e]=new Ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ut[e]=new Ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ut[e]=new Ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ut[e]=new Ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ut[e]=new Ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ut[e]=new Ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ut[e]=new Ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var Of=/[\-:]([a-z])/g;function Rf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Of,Rf);ut[t]=new Ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Of,Rf);ut[t]=new Ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Of,Rf);ut[t]=new Ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ut[e]=new Ct(e,1,!1,e.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ut[e]=new Ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function Af(e,t,n,r){var i=ut.hasOwnProperty(t)?ut[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i_(t,n,i,r)&&(n=null),r||i===null?n_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bn=Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),Qy=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),_p=Symbol.iterator;function cs(e){return e===null||typeof e!="object"?null:(e=_p&&e[_p]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,zu;function _s(e){if(zu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||""}return`
`+zu+e}var Bu=!1;function Uu(e,t){if(!e||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_s(e):""}function s_(e){switch(e.tag){case 5:return _s(e.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return e=Uu(e.type,!1),e;case 11:return e=Uu(e.type.render,!1),e;case 1:return e=Uu(e.type,!0),e;default:return""}}function Kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yi:return"Fragment";case gi:return"Portal";case Qc:return"Profiler";case If:return"StrictMode";case Zc:return"Suspense";case qc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zy:return(e.displayName||"Context")+".Consumer";case Qy:return(e._context.displayName||"Context")+".Provider";case Df:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mf:return t=e.displayName||null,t!==null?t:Kc(e.type)||"Memo";case Zn:t=e._payload,e=e._init;try{return Kc(e(t))}catch{}}return null}function o_(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(t);case 8:return t===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ky(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function a_(e){var t=Ky(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=a_(e))}function Gy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ky(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gc(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yy(e,t){t=t.checked,t!=null&&Af(e,"checked",t,!1)}function Yc(e,t){Yy(e,t);var n=xr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xc(e,t.type,xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xc(e,t,n){(t!=="number"||Ma(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ss=Array.isArray;function Ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Ss(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xr(n)}}function Xy(e,t){var n=xr(t.value),r=xr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yo,ev=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l_=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(e){l_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ts[t]=Ts[e]})});function tv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ts.hasOwnProperty(e)&&Ts[e]?(""+t).trim():t+"px"}function nv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var u_=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(e,t){if(t){if(u_[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function nd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rd=null;function Lf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var id=null,Di=null,Mi=null;function Pp(e){if(e=Io(e)){if(typeof id!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Zl(t),id(e.stateNode,e.type,t))}}function rv(e){Di?Mi?Mi.push(e):Mi=[e]:Di=e}function iv(){if(Di){var e=Di,t=Mi;if(Mi=Di=null,Pp(e),t)for(e=0;e<t.length;e++)Pp(t[e])}}function sv(e,t){return e(t)}function ov(){}var Wu=!1;function av(e,t,n){if(Wu)return e(t,n);Wu=!0;try{return sv(e,t,n)}finally{Wu=!1,(Di!==null||Mi!==null)&&(ov(),iv())}}function Zs(e,t){var n=e.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var sd=!1;if(Mn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){sd=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{sd=!1}function c_(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ns=!1,La=null,ja=!1,od=null,d_={onError:function(e){Ns=!0,La=e}};function f_(e,t,n,r,i,s,o,a,l){Ns=!1,La=null,c_.apply(d_,arguments)}function h_(e,t,n,r,i,s,o,a,l){if(f_.apply(this,arguments),Ns){if(Ns){var u=La;Ns=!1,La=null}else throw Error(A(198));ja||(ja=!0,od=u)}}function oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ep(e){if(oi(e)!==e)throw Error(A(188))}function p_(e){var t=e.alternate;if(!t){if(t=oi(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ep(i),e;if(s===r)return Ep(i),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function uv(e){return e=p_(e),e!==null?cv(e):null}function cv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cv(e);if(t!==null)return t;e=e.sibling}return null}var dv=Mt.unstable_scheduleCallback,Tp=Mt.unstable_cancelCallback,m_=Mt.unstable_shouldYield,g_=Mt.unstable_requestPaint,Ue=Mt.unstable_now,y_=Mt.unstable_getCurrentPriorityLevel,jf=Mt.unstable_ImmediatePriority,fv=Mt.unstable_UserBlockingPriority,Va=Mt.unstable_NormalPriority,v_=Mt.unstable_LowPriority,hv=Mt.unstable_IdlePriority,Ul=null,vn=null;function x_(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Ul,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:S_,w_=Math.log,__=Math.LN2;function S_(e){return e>>>=0,e===0?32:31-(w_(e)/__|0)|0}var Xo=64,Jo=4194304;function bs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bs(a):(s&=o,s!==0&&(r=bs(s)))}else o=n&~i,o!==0?r=bs(o):s!==0&&(r=bs(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function b_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k_(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=b_(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ad(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pv(){var e=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),e}function Hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ro(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function C_(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var be=0;function mv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gv,Ff,yv,vv,xv,ld=!1,ea=[],sr=null,or=null,ar=null,qs=new Map,Ks=new Map,Yn=[],P_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Np(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":qs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(t.pointerId)}}function fs(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Io(t),t!==null&&Ff(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function E_(e,t,n,r,i){switch(t){case"focusin":return sr=fs(sr,e,t,n,r,i),!0;case"dragenter":return or=fs(or,e,t,n,r,i),!0;case"mouseover":return ar=fs(ar,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return qs.set(s,fs(qs.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ks.set(s,fs(Ks.get(s)||null,e,t,n,r,i)),!0}return!1}function wv(e){var t=$r(e.target);if(t!==null){var n=oi(t);if(n!==null){if(t=n.tag,t===13){if(t=lv(n),t!==null){e.blockedOn=t,xv(e.priority,function(){yv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ud(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rd=r,n.target.dispatchEvent(r),rd=null}else return t=Io(n),t!==null&&Ff(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){xa(e)&&n.delete(t)}function T_(){ld=!1,sr!==null&&xa(sr)&&(sr=null),or!==null&&xa(or)&&(or=null),ar!==null&&xa(ar)&&(ar=null),qs.forEach(Op),Ks.forEach(Op)}function hs(e,t){e.blockedOn===t&&(e.blockedOn=null,ld||(ld=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,T_)))}function Gs(e){function t(i){return hs(i,e)}if(0<ea.length){hs(ea[0],e);for(var n=1;n<ea.length;n++){var r=ea[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&hs(sr,e),or!==null&&hs(or,e),ar!==null&&hs(ar,e),qs.forEach(t),Ks.forEach(t),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)wv(n),n.blockedOn===null&&Yn.shift()}var Li=Bn.ReactCurrentBatchConfig,$a=!0;function N_(e,t,n,r){var i=be,s=Li.transition;Li.transition=null;try{be=1,$f(e,t,n,r)}finally{be=i,Li.transition=s}}function O_(e,t,n,r){var i=be,s=Li.transition;Li.transition=null;try{be=4,$f(e,t,n,r)}finally{be=i,Li.transition=s}}function $f(e,t,n,r){if($a){var i=ud(e,t,n,r);if(i===null)tc(e,t,r,za,n),Np(e,r);else if(E_(i,e,t,n,r))r.stopPropagation();else if(Np(e,r),t&4&&-1<P_.indexOf(e)){for(;i!==null;){var s=Io(i);if(s!==null&&gv(s),s=ud(e,t,n,r),s===null&&tc(e,t,r,za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tc(e,t,r,null,n)}}var za=null;function ud(e,t,n,r){if(za=null,e=Lf(r),e=$r(e),e!==null)if(t=oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function _v(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y_()){case jf:return 1;case fv:return 4;case Va:case v_:return 16;case hv:return 536870912;default:return 16}default:return 16}}var tr=null,zf=null,wa=null;function Sv(){if(wa)return wa;var e,t=zf,n=t.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return wa=i.slice(e,1<r?1-r:void 0)}function _a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function Rp(){return!1}function Ft(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:Rp,this.isPropagationStopped=Rp,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=Ft(ss),Ao=$e({},ss,{view:0,detail:0}),R_=Ft(Ao),Qu,Zu,ps,Wl=$e({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ps&&(ps&&e.type==="mousemove"?(Qu=e.screenX-ps.screenX,Zu=e.screenY-ps.screenY):Zu=Qu=0,ps=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),Ap=Ft(Wl),A_=$e({},Wl,{dataTransfer:0}),I_=Ft(A_),D_=$e({},Ao,{relatedTarget:0}),qu=Ft(D_),M_=$e({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=Ft(M_),j_=$e({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V_=Ft(j_),F_=$e({},ss,{data:0}),Ip=Ft(F_),$_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B_[e])?!!t[e]:!1}function Uf(){return U_}var W_=$e({},Ao,{key:function(e){if(e.key){var t=$_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H_=Ft(W_),Q_=$e({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Ft(Q_),Z_=$e({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),q_=Ft(Z_),K_=$e({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),G_=Ft(K_),Y_=$e({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X_=Ft(Y_),J_=[9,13,27,32],Wf=Mn&&"CompositionEvent"in window,Os=null;Mn&&"documentMode"in document&&(Os=document.documentMode);var eS=Mn&&"TextEvent"in window&&!Os,bv=Mn&&(!Wf||Os&&8<Os&&11>=Os),Mp=String.fromCharCode(32),Lp=!1;function kv(e,t){switch(e){case"keyup":return J_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vi=!1;function tS(e,t){switch(e){case"compositionend":return Cv(t);case"keypress":return t.which!==32?null:(Lp=!0,Mp);case"textInput":return e=t.data,e===Mp&&Lp?null:e;default:return null}}function nS(e,t){if(vi)return e==="compositionend"||!Wf&&kv(e,t)?(e=Sv(),wa=zf=tr=null,vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bv&&t.locale!=="ko"?null:t.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rS[e.type]:t==="textarea"}function Pv(e,t,n,r){rv(r),t=Ba(t,"onChange"),0<t.length&&(n=new Bf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rs=null,Ys=null;function iS(e){jv(e,0)}function Hl(e){var t=_i(e);if(Gy(t))return e}function sS(e,t){if(e==="change")return t}var Ev=!1;if(Mn){var Ku;if(Mn){var Gu="oninput"in document;if(!Gu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Gu=typeof Vp.oninput=="function"}Ku=Gu}else Ku=!1;Ev=Ku&&(!document.documentMode||9<document.documentMode)}function Fp(){Rs&&(Rs.detachEvent("onpropertychange",Tv),Ys=Rs=null)}function Tv(e){if(e.propertyName==="value"&&Hl(Ys)){var t=[];Pv(t,Ys,e,Lf(e)),av(iS,t)}}function oS(e,t,n){e==="focusin"?(Fp(),Rs=t,Ys=n,Rs.attachEvent("onpropertychange",Tv)):e==="focusout"&&Fp()}function aS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(Ys)}function lS(e,t){if(e==="click")return Hl(t)}function uS(e,t){if(e==="input"||e==="change")return Hl(t)}function cS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:cS;function Xs(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hc.call(t,i)||!dn(e[i],t[i]))return!1}return!0}function $p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,t){var n=$p(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$p(n)}}function Nv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ov(){for(var e=window,t=Ma();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ma(e.document)}return t}function Hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dS(e){var t=Ov(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nv(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=zp(n,s);var o=zp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fS=Mn&&"documentMode"in document&&11>=document.documentMode,xi=null,cd=null,As=null,dd=!1;function Bp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||xi==null||xi!==Ma(r)||(r=xi,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),As&&Xs(As,r)||(As=r,r=Ba(cd,"onSelect"),0<r.length&&(t=new Bf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xi)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wi={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Yu={},Rv={};Mn&&(Rv=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function Ql(e){if(Yu[e])return Yu[e];if(!wi[e])return e;var t=wi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rv)return Yu[e]=t[n];return e}var Av=Ql("animationend"),Iv=Ql("animationiteration"),Dv=Ql("animationstart"),Mv=Ql("transitionend"),Lv=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Lv.set(e,t),si(t,[e])}for(var Xu=0;Xu<Up.length;Xu++){var Ju=Up[Xu],hS=Ju.toLowerCase(),pS=Ju[0].toUpperCase()+Ju.slice(1);Er(hS,"on"+pS)}Er(Av,"onAnimationEnd");Er(Iv,"onAnimationIteration");Er(Dv,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Mv,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function Wp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,h_(r,t,void 0,e),e.currentTarget=null}function jv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wp(i,a,u),s=l}}}if(ja)throw e=od,ja=!1,od=null,e}function Ne(e,t){var n=t[gd];n===void 0&&(n=t[gd]=new Set);var r=e+"__bubble";n.has(r)||(Vv(t,e,2,!1),n.add(r))}function ec(e,t,n){var r=0;t&&(r|=4),Vv(n,e,r,t)}var ra="_reactListening"+Math.random().toString(36).slice(2);function Js(e){if(!e[ra]){e[ra]=!0,Hy.forEach(function(n){n!=="selectionchange"&&(mS.has(n)||ec(n,!1,e),ec(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ra]||(t[ra]=!0,ec("selectionchange",!1,t))}}function Vv(e,t,n,r){switch(_v(t)){case 1:var i=N_;break;case 4:i=O_;break;default:i=$f}n=i.bind(null,t,n,e),i=void 0,!sd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tc(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}av(function(){var u=s,c=Lf(n),d=[];e:{var f=Lv.get(e);if(f!==void 0){var m=Bf,v=e;switch(e){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":m=H_;break;case"focusin":v="focus",m=qu;break;case"focusout":v="blur",m=qu;break;case"beforeblur":case"afterblur":m=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=q_;break;case Av:case Iv:case Dv:m=L_;break;case Mv:m=G_;break;case"scroll":m=R_;break;case"wheel":m=X_;break;case"copy":case"cut":case"paste":m=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Dp}var x=(t&4)!==0,_=!x&&e==="scroll",y=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,y!==null&&(w=Zs(h,y),w!=null&&x.push(eo(h,w,g)))),_)break;h=h.return}0<x.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==rd&&(v=n.relatedTarget||n.fromElement)&&($r(v)||v[Ln]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?$r(v):null,v!==null&&(_=oi(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Ap,w="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Dp,w="onPointerLeave",y="onPointerEnter",h="pointer"),_=m==null?f:_i(m),g=v==null?f:_i(v),f=new x(w,h+"leave",m,n,c),f.target=_,f.relatedTarget=g,w=null,$r(c)===u&&(x=new x(y,h+"enter",v,n,c),x.target=g,x.relatedTarget=_,w=x),_=w,m&&v)t:{for(x=m,y=v,h=0,g=x;g;g=di(g))h++;for(g=0,w=y;w;w=di(w))g++;for(;0<h-g;)x=di(x),h--;for(;0<g-h;)y=di(y),g--;for(;h--;){if(x===y||y!==null&&x===y.alternate)break t;x=di(x),y=di(y)}x=null}else x=null;m!==null&&Hp(d,f,m,x,!1),v!==null&&_!==null&&Hp(d,_,v,x,!0)}}e:{if(f=u?_i(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=sS;else if(jp(f))if(Ev)k=uS;else{k=aS;var R=oS}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=lS);if(k&&(k=k(e,u))){Pv(d,k,n,c);break e}R&&R(e,f,u),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Xc(f,"number",f.value)}switch(R=u?_i(u):window,e){case"focusin":(jp(R)||R.contentEditable==="true")&&(xi=R,cd=u,As=null);break;case"focusout":As=cd=xi=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,Bp(d,n,c);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":Bp(d,n,c)}var N;if(Wf)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else vi?kv(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(bv&&n.locale!=="ko"&&(vi||E!=="onCompositionStart"?E==="onCompositionEnd"&&vi&&(N=Sv()):(tr=c,zf="value"in tr?tr.value:tr.textContent,vi=!0)),R=Ba(u,E),0<R.length&&(E=new Ip(E,e,null,n,c),d.push({event:E,listeners:R}),N?E.data=N:(N=Cv(n),N!==null&&(E.data=N)))),(N=eS?tS(e,n):nS(e,n))&&(u=Ba(u,"onBeforeInput"),0<u.length&&(c=new Ip("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}jv(d,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ba(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(e,n),s!=null&&r.unshift(eo(e,s,i)),s=Zs(e,t),s!=null&&r.push(eo(e,s,i))),e=e.return}return r}function di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hp(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Zs(n,s),l!=null&&o.unshift(eo(n,l,a))):i||(l=Zs(n,s),l!=null&&o.push(eo(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function Qp(e){return(typeof e=="string"?e:""+e).replace(gS,`
`).replace(yS,"")}function ia(e,t,n){if(t=Qp(t),Qp(e)!==t&&n)throw Error(A(425))}function Ua(){}var fd=null,hd=null;function pd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(e){return Zp.resolve(null).then(e).catch(wS)}:md;function wS(e){setTimeout(function(){throw e})}function nc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gs(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var os=Math.random().toString(36).slice(2),gn="__reactFiber$"+os,to="__reactProps$"+os,Ln="__reactContainer$"+os,gd="__reactEvents$"+os,_S="__reactListeners$"+os,SS="__reactHandles$"+os;function $r(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ln]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qp(e);e!==null;){if(n=e[gn])return n;e=qp(e)}return t}e=n,n=e.parentNode}return null}function Io(e){return e=e[gn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _i(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Zl(e){return e[to]||null}var yd=[],Si=-1;function Tr(e){return{current:e}}function Ae(e){0>Si||(e.current=yd[Si],yd[Si]=null,Si--)}function Te(e,t){Si++,yd[Si]=e.current,e.current=t}var wr={},mt=Tr(wr),Tt=Tr(!1),Kr=wr;function Hi(e,t){var n=e.type.contextTypes;if(!n)return wr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(e){return e=e.childContextTypes,e!=null}function Wa(){Ae(Tt),Ae(mt)}function Kp(e,t,n){if(mt.current!==wr)throw Error(A(168));Te(mt,t),Te(Tt,n)}function Fv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,o_(e)||"Unknown",i));return $e({},n,r)}function Ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wr,Kr=mt.current,Te(mt,e),Te(Tt,Tt.current),!0}function Gp(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Fv(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,Ae(Tt),Ae(mt),Te(mt,e)):Ae(Tt),Te(Tt,n)}var Pn=null,ql=!1,rc=!1;function $v(e){Pn===null?Pn=[e]:Pn.push(e)}function bS(e){ql=!0,$v(e)}function Nr(){if(!rc&&Pn!==null){rc=!0;var e=0,t=be;try{var n=Pn;for(be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pn=null,ql=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),dv(jf,Nr),i}finally{be=t,rc=!1}}return null}var bi=[],ki=0,Qa=null,Za=0,Ht=[],Qt=0,Gr=null,En=1,Tn="";function Dr(e,t){bi[ki++]=Za,bi[ki++]=Qa,Qa=e,Za=t}function zv(e,t,n){Ht[Qt++]=En,Ht[Qt++]=Tn,Ht[Qt++]=Gr,Gr=e;var r=En;e=Tn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-an(t)+i|n<<i|r,Tn=s+e}else En=1<<s|n<<i|r,Tn=e}function Qf(e){e.return!==null&&(Dr(e,1),zv(e,1,0))}function Zf(e){for(;e===Qa;)Qa=bi[--ki],bi[ki]=null,Za=bi[--ki],bi[ki]=null;for(;e===Gr;)Gr=Ht[--Qt],Ht[Qt]=null,Tn=Ht[--Qt],Ht[Qt]=null,En=Ht[--Qt],Ht[Qt]=null}var Dt=null,It=null,De=!1,nn=null;function Bv(e,t){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,It=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gr!==null?{id:En,overflow:Tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,It=null,!0):!1;default:return!1}}function vd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xd(e){if(De){var t=It;if(t){var n=t;if(!Yp(e,t)){if(vd(e))throw Error(A(418));t=lr(n.nextSibling);var r=Dt;t&&Yp(e,t)?Bv(r,n):(e.flags=e.flags&-4097|2,De=!1,Dt=e)}}else{if(vd(e))throw Error(A(418));e.flags=e.flags&-4097|2,De=!1,Dt=e}}}function Xp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function sa(e){if(e!==Dt)return!1;if(!De)return Xp(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pd(e.type,e.memoizedProps)),t&&(t=It)){if(vd(e))throw Uv(),Error(A(418));for(;t;)Bv(e,t),t=lr(t.nextSibling)}if(Xp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=lr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=Dt?lr(e.stateNode.nextSibling):null;return!0}function Uv(){for(var e=It;e;)e=lr(e.nextSibling)}function Qi(){It=Dt=null,De=!1}function qf(e){nn===null?nn=[e]:nn.push(e)}var kS=Bn.ReactCurrentBatchConfig;function en(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qa=Tr(null),Ka=null,Ci=null,Kf=null;function Gf(){Kf=Ci=Ka=null}function Yf(e){var t=qa.current;Ae(qa),e._currentValue=t}function wd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ji(e,t){Ka=e,Kf=Ci=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(Kf!==e)if(e={context:e,memoizedValue:t,next:null},Ci===null){if(Ka===null)throw Error(A(308));Ci=e,Ka.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var zr=null;function Xf(e){zr===null?zr=[e]:zr.push(e)}function Wv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xf(t)):(n.next=i.next,i.next=n),t.interleaved=n,jn(e,r)}function jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function Jf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jn(e,n)}return i=r.interleaved,i===null?(t.next=t,Xf(r)):(t.next=i.next,i.next=t),r.interleaved=t,jn(e,n)}function Sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vf(e,n)}}function Jp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ga(e,t,n,r){var i=e.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=$e({},d,f);break e;case 2:qn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Xr|=o,e.lanes=o,e.memoizedState=d}}function em(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Qv=new Wy.Component().refs;function _d(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Kl={isMounted:function(e){return(e=e._reactInternals)?oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=St(),i=dr(e),s=Rn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(ln(t,e,i,r),Sa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=St(),i=dr(e),s=Rn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(ln(t,e,i,r),Sa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=St(),r=dr(e),i=Rn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(ln(t,e,r,n),Sa(t,e,r))}};function tm(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function Zv(e,t,n){var r=!1,i=wr,s=t.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=Nt(t)?Kr:mt.current,r=t.contextTypes,s=(r=r!=null)?Hi(e,i):wr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function nm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Kl.enqueueReplaceState(t,t.state,null)}function Sd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Qv,Jf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=Nt(t)?Kr:mt.current,i.context=Hi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(_d(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Kl.enqueueReplaceState(i,i.state,null),Ga(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ms(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Qv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rm(e){var t=e._init;return t(e._payload)}function qv(e){function t(y,h){if(e){var g=y.deletions;g===null?(y.deletions=[h],y.flags|=16):g.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=fr(y,h),y.index=0,y.sibling=null,y}function s(y,h,g){return y.index=g,e?(g=y.alternate,g!==null?(g=g.index,g<h?(y.flags|=2,h):g):(y.flags|=2,h)):(y.flags|=1048576,h)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,h,g,w){return h===null||h.tag!==6?(h=cc(g,y.mode,w),h.return=y,h):(h=i(h,g),h.return=y,h)}function l(y,h,g,w){var k=g.type;return k===yi?c(y,h,g.props.children,w,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zn&&rm(k)===h.type)?(w=i(h,g.props),w.ref=ms(y,h,g),w.return=y,w):(w=Ta(g.type,g.key,g.props,null,y.mode,w),w.ref=ms(y,h,g),w.return=y,w)}function u(y,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=dc(g,y.mode,w),h.return=y,h):(h=i(h,g.children||[]),h.return=y,h)}function c(y,h,g,w,k){return h===null||h.tag!==7?(h=Zr(g,y.mode,w,k),h.return=y,h):(h=i(h,g),h.return=y,h)}function d(y,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cc(""+h,y.mode,g),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ko:return g=Ta(h.type,h.key,h.props,null,y.mode,g),g.ref=ms(y,null,h),g.return=y,g;case gi:return h=dc(h,y.mode,g),h.return=y,h;case Zn:var w=h._init;return d(y,w(h._payload),g)}if(Ss(h)||cs(h))return h=Zr(h,y.mode,g,null),h.return=y,h;oa(y,h)}return null}function f(y,h,g,w){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(y,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:return g.key===k?l(y,h,g,w):null;case gi:return g.key===k?u(y,h,g,w):null;case Zn:return k=g._init,f(y,h,k(g._payload),w)}if(Ss(g)||cs(g))return k!==null?null:c(y,h,g,w,null);oa(y,g)}return null}function m(y,h,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(g)||null,a(h,y,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ko:return y=y.get(w.key===null?g:w.key)||null,l(h,y,w,k);case gi:return y=y.get(w.key===null?g:w.key)||null,u(h,y,w,k);case Zn:var R=w._init;return m(y,h,g,R(w._payload),k)}if(Ss(w)||cs(w))return y=y.get(g)||null,c(h,y,w,k,null);oa(h,w)}return null}function v(y,h,g,w){for(var k=null,R=null,N=h,E=h=0,L=null;N!==null&&E<g.length;E++){N.index>E?(L=N,N=null):L=N.sibling;var $=f(y,N,g[E],w);if($===null){N===null&&(N=L);break}e&&N&&$.alternate===null&&t(y,N),h=s($,h,E),R===null?k=$:R.sibling=$,R=$,N=L}if(E===g.length)return n(y,N),De&&Dr(y,E),k;if(N===null){for(;E<g.length;E++)N=d(y,g[E],w),N!==null&&(h=s(N,h,E),R===null?k=N:R.sibling=N,R=N);return De&&Dr(y,E),k}for(N=r(y,N);E<g.length;E++)L=m(N,y,E,g[E],w),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?E:L.key),h=s(L,h,E),R===null?k=L:R.sibling=L,R=L);return e&&N.forEach(function(oe){return t(y,oe)}),De&&Dr(y,E),k}function x(y,h,g,w){var k=cs(g);if(typeof k!="function")throw Error(A(150));if(g=k.call(g),g==null)throw Error(A(151));for(var R=k=null,N=h,E=h=0,L=null,$=g.next();N!==null&&!$.done;E++,$=g.next()){N.index>E?(L=N,N=null):L=N.sibling;var oe=f(y,N,$.value,w);if(oe===null){N===null&&(N=L);break}e&&N&&oe.alternate===null&&t(y,N),h=s(oe,h,E),R===null?k=oe:R.sibling=oe,R=oe,N=L}if($.done)return n(y,N),De&&Dr(y,E),k;if(N===null){for(;!$.done;E++,$=g.next())$=d(y,$.value,w),$!==null&&(h=s($,h,E),R===null?k=$:R.sibling=$,R=$);return De&&Dr(y,E),k}for(N=r(y,N);!$.done;E++,$=g.next())$=m(N,y,E,$.value,w),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?E:$.key),h=s($,h,E),R===null?k=$:R.sibling=$,R=$);return e&&N.forEach(function(G){return t(y,G)}),De&&Dr(y,E),k}function _(y,h,g,w){if(typeof g=="object"&&g!==null&&g.type===yi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:e:{for(var k=g.key,R=h;R!==null;){if(R.key===k){if(k=g.type,k===yi){if(R.tag===7){n(y,R.sibling),h=i(R,g.props.children),h.return=y,y=h;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zn&&rm(k)===R.type){n(y,R.sibling),h=i(R,g.props),h.ref=ms(y,R,g),h.return=y,y=h;break e}n(y,R);break}else t(y,R);R=R.sibling}g.type===yi?(h=Zr(g.props.children,y.mode,w,g.key),h.return=y,y=h):(w=Ta(g.type,g.key,g.props,null,y.mode,w),w.ref=ms(y,h,g),w.return=y,y=w)}return o(y);case gi:e:{for(R=g.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(y,h.sibling),h=i(h,g.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=dc(g,y.mode,w),h.return=y,y=h}return o(y);case Zn:return R=g._init,_(y,h,R(g._payload),w)}if(Ss(g))return v(y,h,g,w);if(cs(g))return x(y,h,g,w);oa(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,g),h.return=y,y=h):(n(y,h),h=cc(g,y.mode,w),h.return=y,y=h),o(y)):n(y,h)}return _}var Zi=qv(!0),Kv=qv(!1),Do={},xn=Tr(Do),no=Tr(Do),ro=Tr(Do);function Br(e){if(e===Do)throw Error(A(174));return e}function eh(e,t){switch(Te(ro,t),Te(no,e),Te(xn,Do),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ed(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ed(t,e)}Ae(xn),Te(xn,t)}function qi(){Ae(xn),Ae(no),Ae(ro)}function Gv(e){Br(ro.current);var t=Br(xn.current),n=ed(t,e.type);t!==n&&(Te(no,e),Te(xn,n))}function th(e){no.current===e&&(Ae(xn),Ae(no))}var je=Tr(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ic=[];function nh(){for(var e=0;e<ic.length;e++)ic[e]._workInProgressVersionPrimary=null;ic.length=0}var ba=Bn.ReactCurrentDispatcher,sc=Bn.ReactCurrentBatchConfig,Yr=0,Fe=null,Ke=null,nt=null,Xa=!1,Is=!1,io=0,CS=0;function ct(){throw Error(A(321))}function rh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dn(e[n],t[n]))return!1;return!0}function ih(e,t,n,r,i,s){if(Yr=s,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ba.current=e===null||e.memoizedState===null?NS:OS,e=n(r,i),Is){s=0;do{if(Is=!1,io=0,25<=s)throw Error(A(301));s+=1,nt=Ke=null,t.updateQueue=null,ba.current=RS,e=n(r,i)}while(Is)}if(ba.current=Ja,t=Ke!==null&&Ke.next!==null,Yr=0,nt=Ke=Fe=null,Xa=!1,t)throw Error(A(300));return e}function sh(){var e=io!==0;return io=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Fe.memoizedState=nt=e:nt=nt.next=e,nt}function Gt(){if(Ke===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=nt===null?Fe.memoizedState:nt.next;if(t!==null)nt=t,Ke=e;else{if(e===null)throw Error(A(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},nt===null?Fe.memoizedState=nt=e:nt=nt.next=e}return nt}function so(e,t){return typeof t=="function"?t(e):t}function oc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Fe.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,dn(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Fe.lanes|=s,Xr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ac(e){var t=Gt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);dn(s,t.memoizedState)||(Et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Yv(){}function Xv(e,t){var n=Fe,r=Gt(),i=t(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,oh(t0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,oo(9,e0.bind(null,n,r,i,t),void 0,null),it===null)throw Error(A(349));Yr&30||Jv(n,t,i)}return i}function Jv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function e0(e,t,n,r){t.value=n,t.getSnapshot=r,n0(t)&&r0(e)}function t0(e,t,n){return n(function(){n0(t)&&r0(e)})}function n0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dn(e,n)}catch{return!0}}function r0(e){var t=jn(e,1);t!==null&&ln(t,e,1,-1)}function im(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},t.queue=e,e=e.dispatch=TS.bind(null,Fe,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function i0(){return Gt().memoizedState}function ka(e,t,n,r){var i=pn();Fe.flags|=e,i.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Gl(e,t,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&rh(r,o.deps)){i.memoizedState=oo(t,n,s,r);return}}Fe.flags|=e,i.memoizedState=oo(1|t,n,s,r)}function sm(e,t){return ka(8390656,8,e,t)}function oh(e,t){return Gl(2048,8,e,t)}function s0(e,t){return Gl(4,2,e,t)}function o0(e,t){return Gl(4,4,e,t)}function a0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function l0(e,t,n){return n=n!=null?n.concat([e]):null,Gl(4,4,a0.bind(null,t,e),n)}function ah(){}function u0(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function c0(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function d0(e,t,n){return Yr&21?(dn(n,t)||(n=pv(),Fe.lanes|=n,Xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function PS(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var r=sc.transition;sc.transition={};try{e(!1),t()}finally{be=n,sc.transition=r}}function f0(){return Gt().memoizedState}function ES(e,t,n){var r=dr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},h0(e))p0(t,n);else if(n=Wv(e,t,n,r),n!==null){var i=St();ln(n,e,r,i),m0(n,t,r)}}function TS(e,t,n){var r=dr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(h0(e))p0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dn(a,o)){var l=t.interleaved;l===null?(i.next=i,Xf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Wv(e,t,i,r),n!==null&&(i=St(),ln(n,e,r,i),m0(n,t,r))}}function h0(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function p0(e,t){Is=Xa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function m0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vf(e,n)}}var Ja={readContext:Kt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},NS={readContext:Kt,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:sm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ka(4194308,4,a0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return ka(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ES.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:im,useDebugValue:ah,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=im(!1),t=e[0];return e=PS.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,i=pn();if(De){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),it===null)throw Error(A(349));Yr&30||Jv(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,sm(t0.bind(null,r,s,e),[e]),r.flags|=2048,oo(9,e0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=pn(),t=it.identifierPrefix;if(De){var n=Tn,r=En;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=CS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},OS={readContext:Kt,useCallback:u0,useContext:Kt,useEffect:oh,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:c0,useReducer:oc,useRef:i0,useState:function(){return oc(so)},useDebugValue:ah,useDeferredValue:function(e){var t=Gt();return d0(t,Ke.memoizedState,e)},useTransition:function(){var e=oc(so)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Yv,useSyncExternalStore:Xv,useId:f0,unstable_isNewReconciler:!1},RS={readContext:Kt,useCallback:u0,useContext:Kt,useEffect:oh,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:c0,useReducer:ac,useRef:i0,useState:function(){return ac(so)},useDebugValue:ah,useDeferredValue:function(e){var t=Gt();return Ke===null?t.memoizedState=e:d0(t,Ke.memoizedState,e)},useTransition:function(){var e=ac(so)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Yv,useSyncExternalStore:Xv,useId:f0,unstable_isNewReconciler:!1};function Ki(e,t){try{var n="",r=t;do n+=s_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function lc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var AS=typeof WeakMap=="function"?WeakMap:Map;function g0(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Id=r),bd(e,t)},n}function y0(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function om(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new AS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=QS.bind(null,e,t,n),t.then(e,e))}function am(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var IS=Bn.ReactCurrentOwner,Et=!1;function xt(e,t,n,r){t.child=e===null?Kv(t,null,n,r):Zi(t,e.child,n,r)}function um(e,t,n,r,i){n=n.render;var s=t.ref;return ji(t,i),r=ih(e,t,n,r,s,i),n=sh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(De&&n&&Qf(t),t.flags|=1,xt(e,t,r,i),t.child)}function cm(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,v0(e,t,s,r,i)):(e=Ta(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&e.ref===t.ref)return Vn(e,t,i)}return t.flags|=1,e=fr(s,r),e.ref=t.ref,e.return=t,t.child=e}function v0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Xs(s,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Vn(e,t,i)}return kd(e,t,n,r,i)}function x0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Ei,At),At|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Ei,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Ei,At),At|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Te(Ei,At),At|=r;return xt(e,t,i,n),t.child}function w0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kd(e,t,n,r,i){var s=Nt(n)?Kr:mt.current;return s=Hi(t,s),ji(t,i),n=ih(e,t,n,r,s,i),r=sh(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(De&&r&&Qf(t),t.flags|=1,xt(e,t,n,i),t.child)}function dm(e,t,n,r,i){if(Nt(n)){var s=!0;Ha(t)}else s=!1;if(ji(t,i),t.stateNode===null)Ca(e,t),Zv(t,n,r),Sd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=Nt(n)?Kr:mt.current,u=Hi(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&nm(t,o,r,u),qn=!1;var f=t.memoizedState;o.state=f,Ga(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Tt.current||qn?(typeof c=="function"&&(_d(t,n,c,r),l=t.memoizedState),(a=qn||tm(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:en(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=Nt(n)?Kr:mt.current,l=Hi(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&nm(t,o,r,l),qn=!1,f=t.memoizedState,o.state=f,Ga(t,r,o,i);var v=t.memoizedState;a!==d||f!==v||Tt.current||qn?(typeof m=="function"&&(_d(t,n,m,r),v=t.memoizedState),(u=qn||tm(t,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Cd(e,t,n,r,s,i)}function Cd(e,t,n,r,i,s){w0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Gp(t,n,!1),Vn(e,t,s);r=t.stateNode,IS.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Zi(t,e.child,null,s),t.child=Zi(t,null,a,s)):xt(e,t,a,s),t.memoizedState=r.state,i&&Gp(t,n,!0),t.child}function _0(e){var t=e.stateNode;t.pendingContext?Kp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kp(e,t.context,!1),eh(e,t.containerInfo)}function fm(e,t,n,r,i){return Qi(),qf(i),t.flags|=256,xt(e,t,n,r),t.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Ed(e){return{baseLanes:e,cachePool:null,transitions:null}}function S0(e,t,n){var r=t.pendingProps,i=je.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(je,i&1),e===null)return xd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,r,0,null),e=Zr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ed(n),t.memoizedState=Pd,e):lh(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return DS(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Pd,r}return s=e.child,e=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lh(e,t){return t=Jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,n,r){return r!==null&&qf(r),Zi(t,e.child,null,n),e=lh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function DS(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=lc(Error(A(422))),aa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Zi(t,e.child,null,o),t.child.memoizedState=Ed(o),t.memoizedState=Pd,s);if(!(t.mode&1))return aa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=lc(s,r,void 0),aa(e,t,o,r)}if(a=(o&e.childLanes)!==0,Et||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(e,i),ln(r,e,i,-1))}return ph(),r=lc(Error(A(421))),aa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ZS.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,It=lr(i.nextSibling),Dt=t,De=!0,nn=null,e!==null&&(Ht[Qt++]=En,Ht[Qt++]=Tn,Ht[Qt++]=Gr,En=e.id,Tn=e.overflow,Gr=t),t=lh(t,r.children),t.flags|=4096,t)}function hm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wd(e.return,t,n)}function uc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(xt(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Te(je,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ya(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ya(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uc(t,!0,n,null,s);break;case"together":uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ca(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function MS(e,t,n){switch(t.tag){case 3:_0(t),Qi();break;case 5:Gv(t);break;case 1:Nt(t.type)&&Ha(t);break;case 4:eh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Te(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Te(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?S0(e,t,n):(Te(je,je.current&1),e=Vn(e,t,n),e!==null?e.sibling:null);Te(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return b0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,x0(e,t,n)}return Vn(e,t,n)}var k0,Td,C0,P0;k0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};C0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Br(xn.current);var s=null;switch(n){case"input":i=Gc(e,i),r=Gc(e,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=Jc(e,i),r=Jc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ua)}td(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ne("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};P0=function(e,t,n,r){n!==r&&(t.flags|=4)};function gs(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function LS(e,t,n){var r=t.pendingProps;switch(Zf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return Nt(t.type)&&Wa(),dt(t),null;case 3:return r=t.stateNode,qi(),Ae(Tt),Ae(mt),nh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(Ld(nn),nn=null))),Td(e,t),dt(t),null;case 5:th(t);var i=Br(ro.current);if(n=t.type,e!==null&&t.stateNode!=null)C0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return dt(t),null}if(e=Br(xn.current),sa(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[gn]=t,r[to]=s,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)Ne(ks[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Sp(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":kp(r,s),Ne("invalid",r)}td(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,e),i=["children",""+a]):Hs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Go(r),bp(r,s,!0);break;case"textarea":Go(r),Cp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ua)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[gn]=t,e[to]=r,k0(e,t,!1,!1),t.stateNode=e;e:{switch(o=nd(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),i=r;break;case"iframe":case"object":case"embed":Ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)Ne(ks[i],e);i=r;break;case"source":Ne("error",e),i=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=r;break;case"details":Ne("toggle",e),i=r;break;case"input":Sp(e,r),i=Gc(e,r),Ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":kp(e,r),i=Jc(e,r),Ne("invalid",e);break;default:i=r}td(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nv(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ev(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qs(e,l):typeof l=="number"&&Qs(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ne("scroll",e):l!=null&&Af(e,s,l,o))}switch(n){case"input":Go(e),bp(e,r,!1);break;case"textarea":Go(e),Cp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ii(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)P0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Br(ro.current),Br(xn.current),sa(t)){if(r=t.stateNode,n=t.memoizedProps,r[gn]=t,(s=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:ia(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=t,t.stateNode=r}return dt(t),null;case 13:if(Ae(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&It!==null&&t.mode&1&&!(t.flags&128))Uv(),Qi(),t.flags|=98560,s=!1;else if(s=sa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[gn]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),s=!1}else nn!==null&&(Ld(nn),nn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Ye===0&&(Ye=3):ph())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return qi(),Td(e,t),e===null&&Js(t.stateNode.containerInfo),dt(t),null;case 10:return Yf(t.type._context),dt(t),null;case 17:return Nt(t.type)&&Wa(),dt(t),null;case 19:if(Ae(je),s=t.memoizedState,s===null)return dt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ya(e),o!==null){for(t.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(je,je.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ue()>Gi&&(t.flags|=128,r=!0,gs(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ya(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return dt(t),null}else 2*Ue()-s.renderingStartTime>Gi&&n!==1073741824&&(t.flags|=128,r=!0,gs(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ue(),t.sibling=null,n=je.current,Te(je,r?n&1|2:n&1),t):(dt(t),null);case 22:case 23:return hh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function jS(e,t){switch(Zf(t),t.tag){case 1:return Nt(t.type)&&Wa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(),Ae(Tt),Ae(mt),nh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return th(t),null;case 13:if(Ae(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(je),null;case 4:return qi(),null;case 10:return Yf(t.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var la=!1,ht=!1,VS=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Pi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Nd(e,t,n){try{n()}catch(r){ze(e,t,r)}}var pm=!1;function FS(e,t){if(fd=$a,e=Ov(),Hf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:e,selectionRange:n},$a=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,_=v.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:en(t.type,x),_);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){ze(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return v=pm,pm=!1,v}function Ds(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nd(t,n,s)}i=i.next}while(i!==r)}}function Yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Od(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function E0(e){var t=e.alternate;t!==null&&(e.alternate=null,E0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[to],delete t[gd],delete t[_S],delete t[SS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function T0(e){return e.tag===5||e.tag===3||e.tag===4}function mm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||T0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ua));else if(r!==4&&(e=e.child,e!==null))for(Rd(e,t,n),e=e.sibling;e!==null;)Rd(e,t,n),e=e.sibling}function Ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ad(e,t,n),e=e.sibling;e!==null;)Ad(e,t,n),e=e.sibling}var at=null,tn=!1;function Wn(e,t,n){for(n=n.child;n!==null;)N0(e,t,n),n=n.sibling}function N0(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:ht||Pi(n,t);case 6:var r=at,i=tn;at=null,Wn(e,t,n),at=r,tn=i,at!==null&&(tn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(tn?(e=at,n=n.stateNode,e.nodeType===8?nc(e.parentNode,n):e.nodeType===1&&nc(e,n),Gs(e)):nc(at,n.stateNode));break;case 4:r=at,i=tn,at=n.stateNode.containerInfo,tn=!0,Wn(e,t,n),at=r,tn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nd(n,t,o),i=i.next}while(i!==r)}Wn(e,t,n);break;case 1:if(!ht&&(Pi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,t,a)}Wn(e,t,n);break;case 21:Wn(e,t,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Wn(e,t,n),ht=r):Wn(e,t,n);break;default:Wn(e,t,n)}}function gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new VS),t.forEach(function(r){var i=qS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,tn=!1;break e;case 3:at=a.stateNode.containerInfo,tn=!0;break e;case 4:at=a.stateNode.containerInfo,tn=!0;break e}a=a.return}if(at===null)throw Error(A(160));N0(s,o,i),at=null,tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)O0(t,e),t=t.sibling}function O0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),hn(e),r&4){try{Ds(3,e,e.return),Yl(3,e)}catch(x){ze(e,e.return,x)}try{Ds(5,e,e.return)}catch(x){ze(e,e.return,x)}}break;case 1:Jt(t,e),hn(e),r&512&&n!==null&&Pi(n,n.return);break;case 5:if(Jt(t,e),hn(e),r&512&&n!==null&&Pi(n,n.return),e.flags&32){var i=e.stateNode;try{Qs(i,"")}catch(x){ze(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yy(i,s),nd(a,o);var u=nd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?nv(i,d):c==="dangerouslySetInnerHTML"?ev(i,d):c==="children"?Qs(i,d):Af(i,c,d,u)}switch(a){case"input":Yc(i,s);break;case"textarea":Xy(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ii(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ii(i,!!s.multiple,s.defaultValue,!0):Ii(i,!!s.multiple,s.multiple?[]:"",!1))}i[to]=s}catch(x){ze(e,e.return,x)}}break;case 6:if(Jt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){ze(e,e.return,x)}}break;case 3:if(Jt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gs(t.containerInfo)}catch(x){ze(e,e.return,x)}break;case 4:Jt(t,e),hn(e);break;case 13:Jt(t,e),hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dh=Ue())),r&4&&gm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(u=ht)||c,Jt(t,e),ht=u):Jt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(Q=e,c=e.child;c!==null;){for(d=Q=c;Q!==null;){switch(f=Q,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ds(4,f,f.return);break;case 1:Pi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ze(r,n,x)}}break;case 5:Pi(f,f.return);break;case 22:if(f.memoizedState!==null){vm(d);continue}}m!==null?(m.return=f,Q=m):vm(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tv("display",o))}catch(x){ze(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ze(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jt(t,e),hn(e),r&4&&gm(e);break;case 21:break;default:Jt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(T0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qs(i,""),r.flags&=-33);var s=mm(e);Ad(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mm(e);Rd(e,a,o);break;default:throw Error(A(161))}}catch(l){ze(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $S(e,t,n){Q=e,R0(e)}function R0(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||la;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ht;a=la;var u=ht;if(la=o,(ht=l)&&!u)for(Q=i;Q!==null;)o=Q,l=o.child,o.tag===22&&o.memoizedState!==null?xm(i):l!==null?(l.return=o,Q=l):xm(i);for(;s!==null;)Q=s,R0(s),s=s.sibling;Q=i,la=a,ht=u}ym(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):ym(e)}}function ym(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||Yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&em(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}em(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Gs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ht||t.flags&512&&Od(t)}catch(f){ze(t,t.return,f)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function vm(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function xm(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yl(4,t)}catch(l){ze(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ze(t,i,l)}}var s=t.return;try{Od(t)}catch(l){ze(t,s,l)}break;case 5:var o=t.return;try{Od(t)}catch(l){ze(t,o,l)}}}catch(l){ze(t,t.return,l)}if(t===e){Q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Q=a;break}Q=t.return}}var zS=Math.ceil,el=Bn.ReactCurrentDispatcher,uh=Bn.ReactCurrentOwner,qt=Bn.ReactCurrentBatchConfig,we=0,it=null,Ze=null,lt=0,At=0,Ei=Tr(0),Ye=0,ao=null,Xr=0,Xl=0,ch=0,Ms=null,Pt=null,dh=0,Gi=1/0,Cn=null,tl=!1,Id=null,cr=null,ua=!1,nr=null,nl=0,Ls=0,Dd=null,Pa=-1,Ea=0;function St(){return we&6?Ue():Pa!==-1?Pa:Pa=Ue()}function dr(e){return e.mode&1?we&2&&lt!==0?lt&-lt:kS.transition!==null?(Ea===0&&(Ea=pv()),Ea):(e=be,e!==0||(e=window.event,e=e===void 0?16:_v(e.type)),e):1}function ln(e,t,n,r){if(50<Ls)throw Ls=0,Dd=null,Error(A(185));Ro(e,n,r),(!(we&2)||e!==it)&&(e===it&&(!(we&2)&&(Xl|=n),Ye===4&&Xn(e,lt)),Ot(e,r),n===1&&we===0&&!(t.mode&1)&&(Gi=Ue()+500,ql&&Nr()))}function Ot(e,t){var n=e.callbackNode;k_(e,t);var r=Fa(e,e===it?lt:0);if(r===0)n!==null&&Tp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tp(n),t===1)e.tag===0?bS(wm.bind(null,e)):$v(wm.bind(null,e)),xS(function(){!(we&6)&&Nr()}),n=null;else{switch(mv(r)){case 1:n=jf;break;case 4:n=fv;break;case 16:n=Va;break;case 536870912:n=hv;break;default:n=Va}n=F0(n,A0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function A0(e,t){if(Pa=-1,Ea=0,we&6)throw Error(A(327));var n=e.callbackNode;if(Vi()&&e.callbackNode!==n)return null;var r=Fa(e,e===it?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var i=we;we|=2;var s=D0();(it!==e||lt!==t)&&(Cn=null,Gi=Ue()+500,Qr(e,t));do try{WS();break}catch(a){I0(e,a)}while(1);Gf(),el.current=s,we=i,Ze!==null?t=0:(it=null,lt=0,t=Ye)}if(t!==0){if(t===2&&(i=ad(e),i!==0&&(r=i,t=Md(e,i))),t===1)throw n=ao,Qr(e,0),Xn(e,r),Ot(e,Ue()),n;if(t===6)Xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!BS(i)&&(t=rl(e,r),t===2&&(s=ad(e),s!==0&&(r=s,t=Md(e,s))),t===1))throw n=ao,Qr(e,0),Xn(e,r),Ot(e,Ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Mr(e,Pt,Cn);break;case 3:if(Xn(e,r),(r&130023424)===r&&(t=dh+500-Ue(),10<t)){if(Fa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){St(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=md(Mr.bind(null,e,Pt,Cn),t);break}Mr(e,Pt,Cn);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zS(r/1960))-r,10<r){e.timeoutHandle=md(Mr.bind(null,e,Pt,Cn),r);break}Mr(e,Pt,Cn);break;case 5:Mr(e,Pt,Cn);break;default:throw Error(A(329))}}}return Ot(e,Ue()),e.callbackNode===n?A0.bind(null,e):null}function Md(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(Qr(e,t).flags|=256),e=rl(e,t),e!==2&&(t=Pt,Pt=n,t!==null&&Ld(t)),e}function Ld(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function BS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xn(e,t){for(t&=~ch,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function wm(e){if(we&6)throw Error(A(327));Vi();var t=Fa(e,0);if(!(t&1))return Ot(e,Ue()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=ad(e);r!==0&&(t=r,n=Md(e,r))}if(n===1)throw n=ao,Qr(e,0),Xn(e,t),Ot(e,Ue()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mr(e,Pt,Cn),Ot(e,Ue()),null}function fh(e,t){var n=we;we|=1;try{return e(t)}finally{we=n,we===0&&(Gi=Ue()+500,ql&&Nr())}}function Jr(e){nr!==null&&nr.tag===0&&!(we&6)&&Vi();var t=we;we|=1;var n=qt.transition,r=be;try{if(qt.transition=null,be=1,e)return e()}finally{be=r,qt.transition=n,we=t,!(we&6)&&Nr()}}function hh(){At=Ei.current,Ae(Ei)}function Qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vS(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wa();break;case 3:qi(),Ae(Tt),Ae(mt),nh();break;case 5:th(r);break;case 4:qi();break;case 13:Ae(je);break;case 19:Ae(je);break;case 10:Yf(r.type._context);break;case 22:case 23:hh()}n=n.return}if(it=e,Ze=e=fr(e.current,null),lt=At=t,Ye=0,ao=null,ch=Xl=Xr=0,Pt=Ms=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return e}function I0(e,t){do{var n=Ze;try{if(Gf(),ba.current=Ja,Xa){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xa=!1}if(Yr=0,nt=Ke=Fe=null,Is=!1,io=0,uh.current=null,n===null||n.return===null){Ye=1,ao=t,Ze=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=am(o);if(m!==null){m.flags&=-257,lm(m,o,a,s,t),m.mode&1&&om(s,u,t),t=m,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){om(s,u,t),ph();break e}l=Error(A(426))}}else if(De&&a.mode&1){var _=am(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),lm(_,o,a,s,t),qf(Ki(l,a));break e}}s=l=Ki(l,a),Ye!==4&&(Ye=2),Ms===null?Ms=[s]:Ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=g0(s,l,t);Jp(s,y);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cr===null||!cr.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=y0(s,a,t);Jp(s,w);break e}}s=s.return}while(s!==null)}L0(n)}catch(k){t=k,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(1)}function D0(){var e=el.current;return el.current=Ja,e===null?Ja:e}function ph(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),it===null||!(Xr&268435455)&&!(Xl&268435455)||Xn(it,lt)}function rl(e,t){var n=we;we|=2;var r=D0();(it!==e||lt!==t)&&(Cn=null,Qr(e,t));do try{US();break}catch(i){I0(e,i)}while(1);if(Gf(),we=n,el.current=r,Ze!==null)throw Error(A(261));return it=null,lt=0,Ye}function US(){for(;Ze!==null;)M0(Ze)}function WS(){for(;Ze!==null&&!m_();)M0(Ze)}function M0(e){var t=V0(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?L0(e):Ze=t,uh.current=null}function L0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jS(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ze=null;return}}else if(n=LS(n,t,At),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);Ye===0&&(Ye=5)}function Mr(e,t,n){var r=be,i=qt.transition;try{qt.transition=null,be=1,HS(e,t,n,r)}finally{qt.transition=i,be=r}return null}function HS(e,t,n,r){do Vi();while(nr!==null);if(we&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(e,s),e===it&&(Ze=it=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,F0(Va,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=be;be=1;var a=we;we|=4,uh.current=null,FS(e,n),O0(n,e),dS(hd),$a=!!fd,hd=fd=null,e.current=n,$S(n),g_(),we=a,be=o,qt.transition=s}else e.current=n;if(ua&&(ua=!1,nr=e,nl=i),s=e.pendingLanes,s===0&&(cr=null),x_(n.stateNode),Ot(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tl)throw tl=!1,e=Id,Id=null,e;return nl&1&&e.tag!==0&&Vi(),s=e.pendingLanes,s&1?e===Dd?Ls++:(Ls=0,Dd=e):Ls=0,Nr(),null}function Vi(){if(nr!==null){var e=mv(nl),t=qt.transition,n=be;try{if(qt.transition=null,be=16>e?16:e,nr===null)var r=!1;else{if(e=nr,nr=null,nl=0,we&6)throw Error(A(331));var i=we;for(we|=4,Q=e.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Q=u;Q!==null;){var c=Q;switch(c.tag){case 0:case 11:case 15:Ds(8,c,s)}var d=c.child;if(d!==null)d.return=c,Q=d;else for(;Q!==null;){c=Q;var f=c.sibling,m=c.return;if(E0(c),c===u){Q=null;break}if(f!==null){f.return=m,Q=f;break}Q=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ds(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,Q=y;break e}Q=s.return}}var h=e.current;for(Q=h;Q!==null;){o=Q;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Q=g;else e:for(o=h;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(k){ze(a,a.return,k)}if(a===o){Q=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Q=w;break e}Q=a.return}}if(we=i,Nr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Ul,e)}catch{}r=!0}return r}finally{be=n,qt.transition=t}}return!1}function _m(e,t,n){t=Ki(n,t),t=g0(e,t,1),e=ur(e,t,1),t=St(),e!==null&&(Ro(e,1,t),Ot(e,t))}function ze(e,t,n){if(e.tag===3)_m(e,e,n);else for(;t!==null;){if(t.tag===3){_m(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Ki(n,e),e=y0(t,e,1),t=ur(t,e,1),e=St(),t!==null&&(Ro(t,1,e),Ot(t,e));break}}t=t.return}}function QS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=St(),e.pingedLanes|=e.suspendedLanes&n,it===e&&(lt&n)===n&&(Ye===4||Ye===3&&(lt&130023424)===lt&&500>Ue()-dh?Qr(e,0):ch|=n),Ot(e,t)}function j0(e,t){t===0&&(e.mode&1?(t=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):t=1);var n=St();e=jn(e,t),e!==null&&(Ro(e,t,n),Ot(e,n))}function ZS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),j0(e,n)}function qS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),j0(e,n)}var V0;V0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,MS(e,t,n);Et=!!(e.flags&131072)}else Et=!1,De&&t.flags&1048576&&zv(t,Za,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ca(e,t),e=t.pendingProps;var i=Hi(t,mt.current);ji(t,n),i=ih(null,t,r,e,i,n);var s=sh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(r)?(s=!0,Ha(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jf(t),i.updater=Kl,t.stateNode=i,i._reactInternals=t,Sd(t,r,e,n),t=Cd(null,t,r,!0,s,n)):(t.tag=0,De&&s&&Qf(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ca(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=GS(r),e=en(r,e),i){case 0:t=kd(null,t,r,e,n);break e;case 1:t=dm(null,t,r,e,n);break e;case 11:t=um(null,t,r,e,n);break e;case 14:t=cm(null,t,r,en(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),kd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),dm(e,t,r,i,n);case 3:e:{if(_0(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Hv(e,t),Ga(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ki(Error(A(423)),t),t=fm(e,t,r,n,i);break e}else if(r!==i){i=Ki(Error(A(424)),t),t=fm(e,t,r,n,i);break e}else for(It=lr(t.stateNode.containerInfo.firstChild),Dt=t,De=!0,nn=null,n=Kv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){t=Vn(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return Gv(t),e===null&&xd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,pd(r,i)?o=null:s!==null&&pd(r,s)&&(t.flags|=32),w0(e,t),xt(e,t,o,n),t.child;case 6:return e===null&&xd(t),null;case 13:return S0(e,t,n);case 4:return eh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zi(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),um(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Te(qa,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Tt.current){t=Vn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wd(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wd(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ji(t,n),i=Kt(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),cm(e,t,r,i,n);case 15:return v0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Ca(e,t),t.tag=1,Nt(r)?(e=!0,Ha(t)):e=!1,ji(t,n),Zv(t,r,i),Sd(t,r,i,n),Cd(null,t,r,!0,e,n);case 19:return b0(e,t,n);case 22:return x0(e,t,n)}throw Error(A(156,t.tag))};function F0(e,t){return dv(e,t)}function KS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,n,r){return new KS(e,t,n,r)}function mh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function GS(e){if(typeof e=="function")return mh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Df)return 11;if(e===Mf)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ta(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")mh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case yi:return Zr(n.children,i,s,t);case If:o=8,i|=8;break;case Qc:return e=Zt(12,n,t,i|2),e.elementType=Qc,e.lanes=s,e;case Zc:return e=Zt(13,n,t,i),e.elementType=Zc,e.lanes=s,e;case qc:return e=Zt(19,n,t,i),e.elementType=qc,e.lanes=s,e;case qy:return Jl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qy:o=10;break e;case Zy:o=9;break e;case Df:o=11;break e;case Mf:o=14;break e;case Zn:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Zt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Zr(e,t,n,r){return e=Zt(7,e,r,t),e.lanes=n,e}function Jl(e,t,n,r){return e=Zt(22,e,r,t),e.elementType=qy,e.lanes=n,e.stateNode={isHidden:!1},e}function cc(e,t,n){return e=Zt(6,e,null,t),e.lanes=n,e}function dc(e,t,n){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function YS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gh(e,t,n,r,i,s,o,a,l){return e=new YS(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Zt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(s),e}function XS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $0(e){if(!e)return wr;e=e._reactInternals;e:{if(oi(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Nt(n))return Fv(e,n,t)}return t}function z0(e,t,n,r,i,s,o,a,l){return e=gh(n,r,!0,e,i,s,o,a,l),e.context=$0(null),n=e.current,r=St(),i=dr(n),s=Rn(r,i),s.callback=t??null,ur(n,s,i),e.current.lanes=i,Ro(e,i,r),Ot(e,r),e}function eu(e,t,n,r){var i=t.current,s=St(),o=dr(i);return n=$0(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,o),e!==null&&(ln(e,i,o,s),Sa(e,i,o)),o}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yh(e,t){Sm(e,t),(e=e.alternate)&&Sm(e,t)}function JS(){return null}var B0=typeof reportError=="function"?reportError:function(e){console.error(e)};function vh(e){this._internalRoot=e}tu.prototype.render=vh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));eu(e,t,null,null)};tu.prototype.unmount=vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jr(function(){eu(null,e,null,null)}),t[Ln]=null}};function tu(e){this._internalRoot=e}tu.prototype.unstable_scheduleHydration=function(e){if(e){var t=vv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&wv(e)}};function xh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bm(){}function eb(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=il(o);s.call(u)}}var o=z0(t,r,e,0,null,!1,!1,"",bm);return e._reactRootContainer=o,e[Ln]=o.current,Js(e.nodeType===8?e.parentNode:e),Jr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=il(l);a.call(u)}}var l=gh(e,0,!1,null,null,!1,!1,"",bm);return e._reactRootContainer=l,e[Ln]=l.current,Js(e.nodeType===8?e.parentNode:e),Jr(function(){eu(t,l,n,r)}),l}function ru(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=il(o);a.call(l)}}eu(t,o,e,i)}else o=eb(n,t,e,i,r);return il(o)}gv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bs(t.pendingLanes);n!==0&&(Vf(t,n|1),Ot(t,Ue()),!(we&6)&&(Gi=Ue()+500,Nr()))}break;case 13:Jr(function(){var r=jn(e,1);if(r!==null){var i=St();ln(r,e,1,i)}}),yh(e,1)}};Ff=function(e){if(e.tag===13){var t=jn(e,134217728);if(t!==null){var n=St();ln(t,e,134217728,n)}yh(e,134217728)}};yv=function(e){if(e.tag===13){var t=dr(e),n=jn(e,t);if(n!==null){var r=St();ln(n,e,t,r)}yh(e,t)}};vv=function(){return be};xv=function(e,t){var n=be;try{return be=e,t()}finally{be=n}};id=function(e,t,n){switch(t){case"input":if(Yc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zl(r);if(!i)throw Error(A(90));Gy(r),Yc(r,i)}}}break;case"textarea":Xy(e,n);break;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}};sv=fh;ov=Jr;var tb={usingClientEntryPoint:!1,Events:[Io,_i,Zl,rv,iv,fh]},ys={findFiberByHostInstance:$r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nb={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uv(e),e===null?null:e.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{Ul=ca.inject(nb),vn=ca}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tb;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(t))throw Error(A(200));return XS(e,t,null,n)};Vt.createRoot=function(e,t){if(!xh(e))throw Error(A(299));var n=!1,r="",i=B0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gh(e,1,!1,null,null,n,!1,r,i),e[Ln]=t.current,Js(e.nodeType===8?e.parentNode:e),new vh(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=uv(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return Jr(e)};Vt.hydrate=function(e,t,n){if(!nu(t))throw Error(A(200));return ru(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!xh(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=B0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=z0(t,null,e,1,n??null,i,!1,s,o),e[Ln]=t.current,Js(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new tu(t)};Vt.render=function(e,t,n){if(!nu(t))throw Error(A(200));return ru(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!nu(e))throw Error(A(40));return e._reactRootContainer?(Jr(function(){ru(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1};Vt.unstable_batchedUpdates=fh;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nu(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return ru(e,t,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Vt})(Jw);var km=Da;Uc.createRoot=km.createRoot,Uc.hydrateRoot=km.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(this,arguments)}var rr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rr||(rr={}));const Cm="popstate";function rb(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return jd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sl(i)}return sb(t,n,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ib(){return Math.random().toString(36).substr(2,8)}function Pm(e,t){return{usr:e.state,key:e.key,idx:t}}function jd(e,t,n,r){return n===void 0&&(n=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?as(t):t,{state:n,key:t&&t.key||r||ib()})}function sl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function as(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=rr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(lo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=rr.Pop;let _=c(),y=_==null?null:_-u;u=_,l&&l({action:a,location:x.location,delta:y})}function f(_,y){a=rr.Push;let h=jd(x.location,_,y);n&&n(h,_),u=c()+1;let g=Pm(h,u),w=x.createHref(h);try{o.pushState(g,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:x.location,delta:1})}function m(_,y){a=rr.Replace;let h=jd(x.location,_,y);n&&n(h,_),u=c();let g=Pm(h,u),w=x.createHref(h);o.replaceState(g,"",w),s&&l&&l({action:a,location:x.location,delta:0})}function v(_){let y=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof _=="string"?_:sl(_);return Xe(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let x={get action(){return a},get location(){return e(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cm,d),l=_,()=>{i.removeEventListener(Cm,d),l=null}},createHref(_){return t(i,_)},createURL:v,encodeLocation(_){let y=v(_);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:m,go(_){return o.go(_)}};return x}var Em;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Em||(Em={}));function ob(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?as(t):t,i=_h(r.pathname||"/",n);if(i==null)return null;let s=U0(e);ab(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=gb(s[a],xb(i));return o}function U0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),U0(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:pb(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of W0(s.path))i(s,o,l)}),t}function W0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=W0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function ab(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lb=/^:\w+$/,ub=3,cb=2,db=1,fb=10,hb=-2,Tm=e=>e==="*";function pb(e,t){let n=e.split("/"),r=n.length;return n.some(Tm)&&(r+=hb),t&&(r+=cb),n.filter(i=>!Tm(i)).reduce((i,s)=>i+(lb.test(s)?ub:s===""?db:fb),r)}function mb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function gb(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=yb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:hr([i,c.pathname]),pathnameBase:bb(hr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=hr([i,c.pathnameBase]))}return s}function yb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=wb(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function vb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xb(e){try{return decodeURI(e)}catch(t){return wh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wb(e,t){try{return decodeURIComponent(e)}catch(n){return wh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function _h(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function _b(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?as(e):e;return{pathname:n?n.startsWith("/")?n:Sb(n,t):t,search:kb(r),hash:Cb(i)}}function Sb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Q0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=as(e):(i=lo({},e),Xe(!i.pathname||!i.pathname.includes("?"),fc("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),fc("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),fc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=_b(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),bb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Tb=typeof Object.is=="function"?Object.is:Eb,{useState:Nb,useEffect:Ob,useLayoutEffect:Rb,useDebugValue:Ab}=Bc;function Ib(e,t,n){const r=t(),[{inst:i},s]=Nb({inst:{value:r,getSnapshot:t}});return Rb(()=>{i.value=r,i.getSnapshot=t,hc(i)&&s({inst:i})},[e,r,t]),Ob(()=>(hc(i)&&s({inst:i}),e(()=>{hc(i)&&s({inst:i})})),[e]),Ab(r),r}function hc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Tb(n,r)}catch{return!0}}function Db(e,t,n){return t()}const Mb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lb=!Mb,jb=Lb?Db:Ib;"useSyncExternalStore"in Bc&&(e=>e.useSyncExternalStore)(Bc);const Z0=b.createContext(null),q0=b.createContext(null),Mo=b.createContext(null),iu=b.createContext(null),ai=b.createContext({outlet:null,matches:[]}),K0=b.createContext(null);function Vd(){return Vd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vd.apply(this,arguments)}function Vb(e,t){let{relative:n}=t===void 0?{}:t;Lo()||Xe(!1);let{basename:r,navigator:i}=b.useContext(Mo),{hash:s,pathname:o,search:a}=Y0(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Lo(){return b.useContext(iu)!=null}function jo(){return Lo()||Xe(!1),b.useContext(iu).location}function Fb(){Lo()||Xe(!1);let{basename:e,navigator:t}=b.useContext(Mo),{matches:n}=b.useContext(ai),{pathname:r}=jo(),i=JSON.stringify(H0(n).map(a=>a.pathnameBase)),s=b.useRef(!1);return b.useEffect(()=>{s.current=!0}),b.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let u=Q0(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:hr([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function G0(){let{matches:e}=b.useContext(ai),t=e[e.length-1];return t?t.params:{}}function Y0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(ai),{pathname:i}=jo(),s=JSON.stringify(H0(r).map(o=>o.pathnameBase));return b.useMemo(()=>Q0(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function $b(e,t){Lo()||Xe(!1);let{navigator:n}=b.useContext(Mo),r=b.useContext(q0),{matches:i}=b.useContext(ai),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=jo(),u;if(t){var c;let x=typeof t=="string"?as(t):t;a==="/"||(c=x.pathname)!=null&&c.startsWith(a)||Xe(!1),u=x}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=ob(e,{pathname:f}),v=Wb(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:hr([a,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:hr([a,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,r||void 0);return t&&v?b.createElement(iu.Provider,{value:{location:Vd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rr.Pop}},v):v}function zb(){let e=qb(),t=Pb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,s)}class Bb extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(ai.Provider,{value:this.props.routeContext},b.createElement(K0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ub(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Z0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ai.Provider,{value:t},r)}function Wb(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Xe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=b.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=b.createElement(zb,null));let c=t.concat(r.slice(0,a+1)),d=()=>{let f=s;return l?f=u:o.route.Component?f=b.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),b.createElement(Ub,{match:o,routeContext:{outlet:s,matches:c},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?b.createElement(Bb,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Nm;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Nm||(Nm={}));var ol;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ol||(ol={}));function Hb(e){let t=b.useContext(q0);return t||Xe(!1),t}function Qb(e){let t=b.useContext(ai);return t||Xe(!1),t}function Zb(e){let t=Qb(),n=t.matches[t.matches.length-1];return n.route.id||Xe(!1),n.route.id}function qb(){var e;let t=b.useContext(K0),n=Hb(ol.UseRouteError),r=Zb(ol.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Hn(e){Xe(!1)}function Kb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1}=e;Lo()&&Xe(!1);let a=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=as(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,v=b.useMemo(()=>{let x=_h(u,a);return x==null?null:{location:{pathname:x,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return v==null?null:b.createElement(Mo.Provider,{value:l},b.createElement(iu.Provider,{children:n,value:v}))}function Gb(e){let{children:t,location:n}=e,r=b.useContext(Z0),i=r&&!t?r.router.routes:Fd(t);return $b(i,n)}var Om;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Om||(Om={}));new Promise(()=>{});function Fd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Fd(r.props.children,s));return}r.type!==Hn&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $d(){return $d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$d.apply(this,arguments)}function Yb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Xb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jb(e,t){return e.button===0&&(!t||t==="_self")&&!Xb(e)}const ek=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function tk(e){let{basename:t,children:n,window:r}=e,i=b.useRef();i.current==null&&(i.current=rb({window:r,v5Compat:!0}));let s=i.current,[o,a]=b.useState({action:s.action,location:s.location});return b.useLayoutEffect(()=>s.listen(a),[s]),b.createElement(Kb,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const nk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=Yb(t,ek),{basename:f}=b.useContext(Mo),m,v=!1;if(typeof u=="string"&&rk.test(u)&&(m=u,nk)){let h=new URL(window.location.href),g=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=_h(g.pathname,f);g.origin===h.origin&&w!=null?u=w+g.search+g.hash:v=!0}let x=Vb(u,{relative:i}),_=ik(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(h){r&&r(h),h.defaultPrevented||_(h)}return b.createElement("a",$d({},d,{href:m||x,onClick:v||s?r:y,ref:n,target:l}))});var Rm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Rm||(Rm={}));var Am;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Am||(Am={}));function ik(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=Fb(),l=jo(),u=Y0(e,{relative:o});return b.useCallback(c=>{if(Jb(c,n)){c.preventDefault();let d=r!==void 0?r:sl(l)===sl(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var al={},sk={get exports(){return al},set exports(e){al=e}},ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh=Symbol.for("react.element"),bh=Symbol.for("react.portal"),su=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),uu=Symbol.for("react.context"),ok=Symbol.for("react.server_context"),cu=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),fu=Symbol.for("react.suspense_list"),hu=Symbol.for("react.memo"),pu=Symbol.for("react.lazy"),ak=Symbol.for("react.offscreen"),X0;X0=Symbol.for("react.module.reference");function Yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sh:switch(e=e.type,e){case su:case au:case ou:case du:case fu:return e;default:switch(e=e&&e.$$typeof,e){case ok:case uu:case cu:case pu:case hu:case lu:return e;default:return t}}case bh:return t}}}ke.ContextConsumer=uu;ke.ContextProvider=lu;ke.Element=Sh;ke.ForwardRef=cu;ke.Fragment=su;ke.Lazy=pu;ke.Memo=hu;ke.Portal=bh;ke.Profiler=au;ke.StrictMode=ou;ke.Suspense=du;ke.SuspenseList=fu;ke.isAsyncMode=function(){return!1};ke.isConcurrentMode=function(){return!1};ke.isContextConsumer=function(e){return Yt(e)===uu};ke.isContextProvider=function(e){return Yt(e)===lu};ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sh};ke.isForwardRef=function(e){return Yt(e)===cu};ke.isFragment=function(e){return Yt(e)===su};ke.isLazy=function(e){return Yt(e)===pu};ke.isMemo=function(e){return Yt(e)===hu};ke.isPortal=function(e){return Yt(e)===bh};ke.isProfiler=function(e){return Yt(e)===au};ke.isStrictMode=function(e){return Yt(e)===ou};ke.isSuspense=function(e){return Yt(e)===du};ke.isSuspenseList=function(e){return Yt(e)===fu};ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===su||e===au||e===ou||e===du||e===fu||e===ak||typeof e=="object"&&e!==null&&(e.$$typeof===pu||e.$$typeof===hu||e.$$typeof===lu||e.$$typeof===uu||e.$$typeof===cu||e.$$typeof===X0||e.getModuleId!==void 0)};ke.typeOf=Yt;(function(e){e.exports=ke})(sk);function lk(e){function t(V,z,B,ie,P){for(var ce=0,F=0,Pe=0,me=0,he,le,Be=0,yt=0,xe,S=xe=he=0,C=0,O=0,Z=0,j=0,I=B.length,Y=I-1,ye,H="",Ee="",us="",Ar="",zt;C<I;){if(le=B.charCodeAt(C),C===Y&&F+me+Pe+ce!==0&&(F!==0&&(le=F===47?10:47),me=Pe=ce=0,I++,Y++),F+me+Pe+ce===0){if(C===Y&&(0<O&&(H=H.replace(f,"")),0<H.trim().length)){switch(le){case 32:case 9:case 59:case 13:case 10:break;default:H+=B.charAt(C)}le=59}switch(le){case 123:for(H=H.trim(),he=H.charCodeAt(0),xe=1,j=++C;C<I;){switch(le=B.charCodeAt(C)){case 123:xe++;break;case 125:xe--;break;case 47:switch(le=B.charCodeAt(C+1)){case 42:case 47:e:{for(S=C+1;S<Y;++S)switch(B.charCodeAt(S)){case 47:if(le===42&&B.charCodeAt(S-1)===42&&C+2!==S){C=S+1;break e}break;case 10:if(le===47){C=S+1;break e}}C=S}}break;case 91:le++;case 40:le++;case 34:case 39:for(;C++<Y&&B.charCodeAt(C)!==le;);}if(xe===0)break;C++}switch(xe=B.substring(j,C),he===0&&(he=(H=H.replace(d,"").trim()).charCodeAt(0)),he){case 64:switch(0<O&&(H=H.replace(f,"")),le=H.charCodeAt(1),le){case 100:case 109:case 115:case 45:O=z;break;default:O=Se}if(xe=t(z,O,xe,le,P+1),j=xe.length,0<D&&(O=n(Se,H,Z),zt=a(3,xe,O,z,q,G,j,le,P,ie),H=O.join(""),zt!==void 0&&(j=(xe=zt.trim()).length)===0&&(le=0,xe="")),0<j)switch(le){case 115:H=H.replace(R,o);case 100:case 109:case 45:xe=H+"{"+xe+"}";break;case 107:H=H.replace(h,"$1 $2"),xe=H+"{"+xe+"}",xe=re===1||re===2&&s("@"+xe,3)?"@-webkit-"+xe+"@"+xe:"@"+xe;break;default:xe=H+xe,ie===112&&(xe=(Ee+=xe,""))}else xe="";break;default:xe=t(z,n(z,H,Z),xe,ie,P+1)}us+=xe,xe=Z=O=S=he=0,H="",le=B.charCodeAt(++C);break;case 125:case 59:if(H=(0<O?H.replace(f,""):H).trim(),1<(j=H.length))switch(S===0&&(he=H.charCodeAt(0),he===45||96<he&&123>he)&&(j=(H=H.replace(" ",":")).length),0<D&&(zt=a(1,H,z,V,q,G,Ee.length,ie,P,ie))!==void 0&&(j=(H=zt.trim()).length)===0&&(H="\0\0"),he=H.charCodeAt(0),le=H.charCodeAt(1),he){case 0:break;case 64:if(le===105||le===99){Ar+=H+B.charAt(C);break}default:H.charCodeAt(j-1)!==58&&(Ee+=i(H,he,le,H.charCodeAt(2)))}Z=O=S=he=0,H="",le=B.charCodeAt(++C)}}switch(le){case 13:case 10:F===47?F=0:1+he===0&&ie!==107&&0<H.length&&(O=1,H+="\0"),0<D*ee&&a(0,H,z,V,q,G,Ee.length,ie,P,ie),G=1,q++;break;case 59:case 125:if(F+me+Pe+ce===0){G++;break}default:switch(G++,ye=B.charAt(C),le){case 9:case 32:if(me+ce+F===0)switch(Be){case 44:case 58:case 9:case 32:ye="";break;default:le!==32&&(ye=" ")}break;case 0:ye="\\0";break;case 12:ye="\\f";break;case 11:ye="\\v";break;case 38:me+F+ce===0&&(O=Z=1,ye="\f"+ye);break;case 108:if(me+F+ce+J===0&&0<S)switch(C-S){case 2:Be===112&&B.charCodeAt(C-3)===58&&(J=Be);case 8:yt===111&&(J=yt)}break;case 58:me+F+ce===0&&(S=C);break;case 44:F+Pe+me+ce===0&&(O=1,ye+="\r");break;case 34:case 39:F===0&&(me=me===le?0:me===0?le:me);break;case 91:me+F+Pe===0&&ce++;break;case 93:me+F+Pe===0&&ce--;break;case 41:me+F+ce===0&&Pe--;break;case 40:if(me+F+ce===0){if(he===0)switch(2*Be+3*yt){case 533:break;default:he=1}Pe++}break;case 64:F+Pe+me+ce+S+xe===0&&(xe=1);break;case 42:case 47:if(!(0<me+ce+Pe))switch(F){case 0:switch(2*le+3*B.charCodeAt(C+1)){case 235:F=47;break;case 220:j=C,F=42}break;case 42:le===47&&Be===42&&j+2!==C&&(B.charCodeAt(j+2)===33&&(Ee+=B.substring(j,C+1)),ye="",F=0)}}F===0&&(H+=ye)}yt=Be,Be=le,C++}if(j=Ee.length,0<j){if(O=z,0<D&&(zt=a(2,Ee,O,V,q,G,j,ie,P,ie),zt!==void 0&&(Ee=zt).length===0))return Ar+Ee+us;if(Ee=O.join(",")+"{"+Ee+"}",re*J!==0){switch(re!==2||s(Ee,2)||(J=0),J){case 111:Ee=Ee.replace(w,":-moz-$1")+Ee;break;case 112:Ee=Ee.replace(g,"::-webkit-input-$1")+Ee.replace(g,"::-moz-$1")+Ee.replace(g,":-ms-input-$1")+Ee}J=0}}return Ar+Ee+us}function n(V,z,B){var ie=z.trim().split(_);z=ie;var P=ie.length,ce=V.length;switch(ce){case 0:case 1:var F=0;for(V=ce===0?"":V[0]+" ";F<P;++F)z[F]=r(V,z[F],B).trim();break;default:var Pe=F=0;for(z=[];F<P;++F)for(var me=0;me<ce;++me)z[Pe++]=r(V[me]+" ",ie[F],B).trim()}return z}function r(V,z,B){var ie=z.charCodeAt(0);switch(33>ie&&(ie=(z=z.trim()).charCodeAt(0)),ie){case 38:return z.replace(y,"$1"+V.trim());case 58:return V.trim()+z.replace(y,"$1"+V.trim());default:if(0<1*B&&0<z.indexOf("\f"))return z.replace(y,(V.charCodeAt(0)===58?"":"$1")+V.trim())}return V+z}function i(V,z,B,ie){var P=V+";",ce=2*z+3*B+4*ie;if(ce===944){V=P.indexOf(":",9)+1;var F=P.substring(V,P.length-1).trim();return F=P.substring(0,V).trim()+F+";",re===1||re===2&&s(F,1)?"-webkit-"+F+F:F}if(re===0||re===2&&!s(P,1))return P;switch(ce){case 1015:return P.charCodeAt(10)===97?"-webkit-"+P+P:P;case 951:return P.charCodeAt(3)===116?"-webkit-"+P+P:P;case 963:return P.charCodeAt(5)===110?"-webkit-"+P+P:P;case 1009:if(P.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+P+P;case 978:return"-webkit-"+P+"-moz-"+P+P;case 1019:case 983:return"-webkit-"+P+"-moz-"+P+"-ms-"+P+P;case 883:if(P.charCodeAt(8)===45)return"-webkit-"+P+P;if(0<P.indexOf("image-set(",11))return P.replace(oe,"$1-webkit-$2")+P;break;case 932:if(P.charCodeAt(4)===45)switch(P.charCodeAt(5)){case 103:return"-webkit-box-"+P.replace("-grow","")+"-webkit-"+P+"-ms-"+P.replace("grow","positive")+P;case 115:return"-webkit-"+P+"-ms-"+P.replace("shrink","negative")+P;case 98:return"-webkit-"+P+"-ms-"+P.replace("basis","preferred-size")+P}return"-webkit-"+P+"-ms-"+P+P;case 964:return"-webkit-"+P+"-ms-flex-"+P+P;case 1023:if(P.charCodeAt(8)!==99)break;return F=P.substring(P.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+P+"-ms-flex-pack"+F+P;case 1005:return v.test(P)?P.replace(m,":-webkit-")+P.replace(m,":-moz-")+P:P;case 1e3:switch(F=P.substring(13).trim(),z=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(z)){case 226:F=P.replace(k,"tb");break;case 232:F=P.replace(k,"tb-rl");break;case 220:F=P.replace(k,"lr");break;default:return P}return"-webkit-"+P+"-ms-"+F+P;case 1017:if(P.indexOf("sticky",9)===-1)break;case 975:switch(z=(P=V).length-10,F=(P.charCodeAt(z)===33?P.substring(0,z):P).substring(V.indexOf(":",7)+1).trim(),ce=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:P=P.replace(F,"-webkit-"+F)+";"+P;break;case 207:case 102:P=P.replace(F,"-webkit-"+(102<ce?"inline-":"")+"box")+";"+P.replace(F,"-webkit-"+F)+";"+P.replace(F,"-ms-"+F+"box")+";"+P}return P+";";case 938:if(P.charCodeAt(5)===45)switch(P.charCodeAt(6)){case 105:return F=P.replace("-items",""),"-webkit-"+P+"-webkit-box-"+F+"-ms-flex-"+F+P;case 115:return"-webkit-"+P+"-ms-flex-item-"+P.replace(E,"")+P;default:return"-webkit-"+P+"-ms-flex-line-pack"+P.replace("align-content","").replace(E,"")+P}break;case 973:case 989:if(P.charCodeAt(3)!==45||P.charCodeAt(4)===122)break;case 931:case 953:if($.test(V)===!0)return(F=V.substring(V.indexOf(":")+1)).charCodeAt(0)===115?i(V.replace("stretch","fill-available"),z,B,ie).replace(":fill-available",":stretch"):P.replace(F,"-webkit-"+F)+P.replace(F,"-moz-"+F.replace("fill-",""))+P;break;case 962:if(P="-webkit-"+P+(P.charCodeAt(5)===102?"-ms-"+P:"")+P,B+ie===211&&P.charCodeAt(13)===105&&0<P.indexOf("transform",10))return P.substring(0,P.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+P}return P}function s(V,z){var B=V.indexOf(z===1?":":"{"),ie=V.substring(0,z!==3?B:10);return B=V.substring(B+1,V.length-1),X(z!==2?ie:ie.replace(L,"$1"),B,z)}function o(V,z){var B=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return B!==z+";"?B.replace(N," or ($1)").substring(4):"("+z+")"}function a(V,z,B,ie,P,ce,F,Pe,me,he){for(var le=0,Be=z,yt;le<D;++le)switch(yt=ve[le].call(c,V,Be,B,ie,P,ce,F,Pe,me,he)){case void 0:case!1:case!0:case null:break;default:Be=yt}if(Be!==z)return Be}function l(V){switch(V){case void 0:case null:D=ve.length=0;break;default:if(typeof V=="function")ve[D++]=V;else if(typeof V=="object")for(var z=0,B=V.length;z<B;++z)l(V[z]);else ee=!!V|0}return l}function u(V){return V=V.prefix,V!==void 0&&(X=null,V?typeof V!="function"?re=1:(re=2,X=V):re=0),u}function c(V,z){var B=V;if(33>B.charCodeAt(0)&&(B=B.trim()),te=B,B=[te],0<D){var ie=a(-1,z,B,B,q,G,0,0,0,0);ie!==void 0&&typeof ie=="string"&&(z=ie)}var P=t(Se,B,z,0,0);return 0<D&&(ie=a(-2,P,B,B,q,G,P.length,0,0,0),ie!==void 0&&(P=ie)),te="",J=0,G=q=1,P}var d=/^\0+/g,f=/[\0\r\f]/g,m=/: */g,v=/zoo|gra/,x=/([,: ])(transform)/g,_=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,w=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,E=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,G=1,q=1,J=0,re=1,Se=[],ve=[],D=0,X=null,ee=0,te="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var uk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ck(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var dk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Im=ck(function(e){return dk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),zd={},fk={get exports(){return zd},set exports(e){zd=e}},Ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=typeof Symbol=="function"&&Symbol.for,kh=st?Symbol.for("react.element"):60103,Ch=st?Symbol.for("react.portal"):60106,mu=st?Symbol.for("react.fragment"):60107,gu=st?Symbol.for("react.strict_mode"):60108,yu=st?Symbol.for("react.profiler"):60114,vu=st?Symbol.for("react.provider"):60109,xu=st?Symbol.for("react.context"):60110,Ph=st?Symbol.for("react.async_mode"):60111,wu=st?Symbol.for("react.concurrent_mode"):60111,_u=st?Symbol.for("react.forward_ref"):60112,Su=st?Symbol.for("react.suspense"):60113,hk=st?Symbol.for("react.suspense_list"):60120,bu=st?Symbol.for("react.memo"):60115,ku=st?Symbol.for("react.lazy"):60116,pk=st?Symbol.for("react.block"):60121,mk=st?Symbol.for("react.fundamental"):60117,gk=st?Symbol.for("react.responder"):60118,yk=st?Symbol.for("react.scope"):60119;function $t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case kh:switch(e=e.type,e){case Ph:case wu:case mu:case yu:case gu:case Su:return e;default:switch(e=e&&e.$$typeof,e){case xu:case _u:case ku:case bu:case vu:return e;default:return t}}case Ch:return t}}}function J0(e){return $t(e)===wu}Ce.AsyncMode=Ph;Ce.ConcurrentMode=wu;Ce.ContextConsumer=xu;Ce.ContextProvider=vu;Ce.Element=kh;Ce.ForwardRef=_u;Ce.Fragment=mu;Ce.Lazy=ku;Ce.Memo=bu;Ce.Portal=Ch;Ce.Profiler=yu;Ce.StrictMode=gu;Ce.Suspense=Su;Ce.isAsyncMode=function(e){return J0(e)||$t(e)===Ph};Ce.isConcurrentMode=J0;Ce.isContextConsumer=function(e){return $t(e)===xu};Ce.isContextProvider=function(e){return $t(e)===vu};Ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===kh};Ce.isForwardRef=function(e){return $t(e)===_u};Ce.isFragment=function(e){return $t(e)===mu};Ce.isLazy=function(e){return $t(e)===ku};Ce.isMemo=function(e){return $t(e)===bu};Ce.isPortal=function(e){return $t(e)===Ch};Ce.isProfiler=function(e){return $t(e)===yu};Ce.isStrictMode=function(e){return $t(e)===gu};Ce.isSuspense=function(e){return $t(e)===Su};Ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===mu||e===wu||e===yu||e===gu||e===Su||e===hk||typeof e=="object"&&e!==null&&(e.$$typeof===ku||e.$$typeof===bu||e.$$typeof===vu||e.$$typeof===xu||e.$$typeof===_u||e.$$typeof===mk||e.$$typeof===gk||e.$$typeof===yk||e.$$typeof===pk)};Ce.typeOf=$t;(function(e){e.exports=Ce})(fk);var Eh=zd,vk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wk={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ex={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Th={};Th[Eh.ForwardRef]=wk;Th[Eh.Memo]=ex;function Dm(e){return Eh.isMemo(e)?ex:Th[e.$$typeof]||vk}var _k=Object.defineProperty,Sk=Object.getOwnPropertyNames,Mm=Object.getOwnPropertySymbols,bk=Object.getOwnPropertyDescriptor,kk=Object.getPrototypeOf,Lm=Object.prototype;function tx(e,t,n){if(typeof t!="string"){if(Lm){var r=kk(t);r&&r!==Lm&&tx(e,r,n)}var i=Sk(t);Mm&&(i=i.concat(Mm(t)));for(var s=Dm(e),o=Dm(t),a=0;a<i.length;++a){var l=i[a];if(!xk[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=bk(t,l);try{_k(e,l,u)}catch{}}}}return e}var Ck=tx;function Nn(){return(Nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var jm=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Bd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!al.typeOf(e)},ll=Object.freeze([]),pr=Object.freeze({});function uo(e){return typeof e=="function"}function Vm(e){return e.displayName||e.name||"Component"}function Nh(e){return e&&typeof e.styledComponentId=="string"}var Yi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Oh=typeof window<"u"&&"HTMLElement"in window,Pk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Vo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ek=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Vo(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Na=new Map,ul=new Map,js=1,da=function(e){if(Na.has(e))return Na.get(e);for(;ul.has(js);)js++;var t=js++;return Na.set(e,t),ul.set(t,e),t},Tk=function(e){return ul.get(e)},Nk=function(e,t){t>=js&&(js=t+1),Na.set(e,t),ul.set(t,e)},Ok="style["+Yi+'][data-styled-version="5.3.9"]',Rk=new RegExp("^"+Yi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ak=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Ik=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Rk);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(Nk(u,l),Ak(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},Dk=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},nx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Yi))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Yi,"active"),r.setAttribute("data-styled-version","5.3.9");var o=Dk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Mk=function(){function e(n){var r=this.element=nx(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Vo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Lk=function(){function e(n){var r=this.element=nx(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),jk=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Fm=Oh,Vk={isServer:!Oh,useCSSOMInjection:!Pk},rx=function(){function e(n,r,i){n===void 0&&(n=pr),r===void 0&&(r={}),this.options=Nn({},Vk,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Oh&&Fm&&(Fm=!1,function(s){for(var o=document.querySelectorAll(Ok),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Yi)!=="active"&&(Ik(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return da(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Nn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new jk(o):s?new Mk(o):new Lk(o),new Ek(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(da(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(da(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(da(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=Tk(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Yi+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},e}(),Fk=/(a)(d)/gi,$m=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ud(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$m(t%52)+n;return($m(t%52)+n).replace(Fk,"$1-$2")}var Ti=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ix=function(e){return Ti(5381,e)};function $k(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(uo(n)&&!Nh(n))return!1}return!0}var zk=ix("5.3.9"),Bk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$k(t),this.componentId=n,this.baseHash=Ti(zk,n),this.baseStyle=r,rx.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Xi(this.rules,t,n,r).join(""),a=Ud(Ti(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ti(this.baseHash,r.hash),d="",f=0;f<u;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var v=Xi(m,t,n,r),x=Array.isArray(v)?v.join(""):v;c=Ti(c,x+f),d+=x}}if(d){var _=Ud(c>>>0);if(!n.hasNameForId(i,_)){var y=r(d,"."+_,void 0,i);n.insertRules(i,_,y)}s.push(_)}}return s.join(" ")},e}(),Uk=/^\s*\/\/.*$/gm,Wk=[":","[",".","#"];function Hk(e){var t,n,r,i,s=e===void 0?pr:e,o=s.options,a=o===void 0?pr:o,l=s.plugins,u=l===void 0?ll:l,c=new lk(a),d=[],f=function(x){function _(y){if(y)try{x(y+"}")}catch{}}return function(y,h,g,w,k,R,N,E,L,$){switch(y){case 1:if(L===0&&h.charCodeAt(0)===64)return x(h+";"),"";break;case 2:if(E===0)return h+"/*|*/";break;case 3:switch(E){case 102:case 112:return x(g[0]+h),"";default:return h+($===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(_)}}}(function(x){d.push(x)}),m=function(x,_,y){return _===0&&Wk.indexOf(y[n.length])!==-1||y.match(i)?x:"."+t};function v(x,_,y,h){h===void 0&&(h="&");var g=x.replace(Uk,""),w=_&&y?y+" "+_+" { "+g+" }":g;return t=h,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(y||!_?"":_,w)}return c.use([].concat(u,[function(x,_,y){x===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,m))},f,function(x){if(x===-2){var _=d;return d=[],_}}])),v.hash=u.length?u.reduce(function(x,_){return _.name||Vo(15),Ti(x,_.name)},5381).toString():"",v}var sx=pt.createContext();sx.Consumer;var ox=pt.createContext(),Qk=(ox.Consumer,new rx),Wd=Hk();function Zk(){return b.useContext(sx)||Qk}function qk(){return b.useContext(ox)||Wd}var Kk=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Wd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Vo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Wd),this.name+t.hash},e}(),Gk=/([A-Z])/,Yk=/([A-Z])/g,Xk=/^ms-/,Jk=function(e){return"-"+e.toLowerCase()};function zm(e){return Gk.test(e)?e.replace(Yk,Jk).replace(Xk,"-ms-"):e}var Bm=function(e){return e==null||e===!1||e===""};function Xi(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Xi(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Bm(e))return"";if(Nh(e))return"."+e.styledComponentId;if(uo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Xi(l,t,n,r)}var u;return e instanceof Kk?n?(e.inject(n,r),e.getName(r)):e:Bd(e)?function c(d,f){var m,v,x=[];for(var _ in d)d.hasOwnProperty(_)&&!Bm(d[_])&&(Array.isArray(d[_])&&d[_].isCss||uo(d[_])?x.push(zm(_)+":",d[_],";"):Bd(d[_])?x.push.apply(x,c(d[_],_)):x.push(zm(_)+": "+(m=_,(v=d[_])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||m in uk?String(v).trim():v+"px")+";"));return f?[f+" {"].concat(x,["}"]):x}(e):e.toString()}var Um=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function eC(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return uo(e)||Bd(e)?Um(Xi(jm(ll,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Um(Xi(jm(e,n)))}var tC=function(e,t,n){return n===void 0&&(n=pr),e.theme!==n.theme&&e.theme||t||n.theme},nC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rC=/(^-|-$)/g;function pc(e){return e.replace(nC,"-").replace(rC,"")}var iC=function(e){return Ud(ix(e)>>>0)};function fa(e){return typeof e=="string"&&!0}var Hd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},sC=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function oC(e,t,n){var r=e[n];Hd(t)&&Hd(r)?ax(r,t):e[n]=t}function ax(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Hd(o))for(var a in o)sC(a)&&oC(e,o[a],a)}return e}var lx=pt.createContext();lx.Consumer;var mc={};function ux(e,t,n){var r=Nh(e),i=!fa(e),s=t.attrs,o=s===void 0?ll:s,a=t.componentId,l=a===void 0?function(h,g){var w=typeof h!="string"?"sc":pc(h);mc[w]=(mc[w]||0)+1;var k=w+"-"+iC("5.3.9"+w+mc[w]);return g?g+"-"+k:k}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(h){return fa(h)?"styled."+h:"Styled("+Vm(h)+")"}(e):u,d=t.displayName&&t.componentId?pc(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,m=t.shouldForwardProp;r&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(h,g,w){return e.shouldForwardProp(h,g,w)&&t.shouldForwardProp(h,g,w)}:e.shouldForwardProp);var v,x=new Bk(n,d,r?e.componentStyle:void 0),_=x.isStatic&&o.length===0,y=function(h,g){return function(w,k,R,N){var E=w.attrs,L=w.componentStyle,$=w.defaultProps,oe=w.foldedComponentIds,G=w.shouldForwardProp,q=w.styledComponentId,J=w.target,re=function(ie,P,ce){ie===void 0&&(ie=pr);var F=Nn({},P,{theme:ie}),Pe={};return ce.forEach(function(me){var he,le,Be,yt=me;for(he in uo(yt)&&(yt=yt(F)),yt)F[he]=Pe[he]=he==="className"?(le=Pe[he],Be=yt[he],le&&Be?le+" "+Be:le||Be):yt[he]}),[F,Pe]}(tC(k,b.useContext(lx),$)||pr,k,E),Se=re[0],ve=re[1],D=function(ie,P,ce,F){var Pe=Zk(),me=qk(),he=P?ie.generateAndInjectStyles(pr,Pe,me):ie.generateAndInjectStyles(ce,Pe,me);return he}(L,N,Se),X=R,ee=ve.$as||k.$as||ve.as||k.as||J,te=fa(ee),V=ve!==k?Nn({},k,{},ve):k,z={};for(var B in V)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?z.as=V[B]:(G?G(B,Im,ee):!te||Im(B))&&(z[B]=V[B]));return k.style&&ve.style!==k.style&&(z.style=Nn({},k.style,{},ve.style)),z.className=Array.prototype.concat(oe,q,D!==q?D:null,k.className,ve.className).filter(Boolean).join(" "),z.ref=X,b.createElement(ee,z)}(v,h,g,_)};return y.displayName=c,(v=pt.forwardRef(y)).attrs=f,v.componentStyle=x,v.displayName=c,v.shouldForwardProp=m,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ll,v.styledComponentId=d,v.target=r?e.target:e,v.withComponent=function(h){var g=t.componentId,w=function(R,N){if(R==null)return{};var E,L,$={},oe=Object.keys(R);for(L=0;L<oe.length;L++)E=oe[L],N.indexOf(E)>=0||($[E]=R[E]);return $}(t,["componentId"]),k=g&&g+"-"+(fa(h)?h:pc(Vm(h)));return ux(h,Nn({},w,{attrs:f,componentId:k}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?ax({},e.defaultProps,h):h}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&Ck(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Qd=function(e){return function t(n,r,i){if(i===void 0&&(i=pr),!al.isValidElementType(r))return Vo(1,String(r));var s=function(){return n(r,i,eC.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Nn({},i,{},o))},s.attrs=function(o){return t(n,r,Nn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(ux,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Qd[e]=Qd(e)});const de=Qd,aC=de.header`
	padding: 50px 160px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.menu {
		display: flex;
		align-items: center;
	}

	.menu__header-logo {
		display: flex;
		align-items: center;
	}

	.header-logo__text {
		margin-left: 10px;
		font-size: 38px;
		color: #274c5b;
		font-family: 'Roboto-Bold';
	}

	.navbar__list {
		display: flex;
		font-family: 'Roboto-Bold';
		margin-left: 100px;
		gap: 50px;
		font-size: 20px;
	}

	.item__link {
		color: #274c5b;
	}

	.actions {
		display: flex;
		align-items: center;
	}

	.cart__btn {
		width: 160px;
		height: 65px;
		border-radius: 35px;
		background: transparent;
		border: 1px solid #e0e0e0;
		display: flex;
		align-items: center;
		padding: 5px;
		cursor: pointer;
	}

	.btn__text {
		font-family: 'Roboto-Medium';
		font-size: 18px;
		color: #274c5b;
		margin-left: 10px;
	}

	@media (max-width: 1440px) {
		padding: 50px 30px;
	}

	@media (max-width: 1024px) {
		display: none;
	}
`;var cl={},lC={get exports(){return cl},set exports(e){cl=e}},cx={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=b;function uC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cC=typeof Object.is=="function"?Object.is:uC,dC=Ji.useState,fC=Ji.useEffect,hC=Ji.useLayoutEffect,pC=Ji.useDebugValue;function mC(e,t){var n=t(),r=dC({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return hC(function(){i.value=n,i.getSnapshot=t,gc(i)&&s({inst:i})},[e,n,t]),fC(function(){return gc(i)&&s({inst:i}),e(function(){gc(i)&&s({inst:i})})},[e]),pC(n),n}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cC(e,n)}catch{return!0}}function gC(e,t){return t()}var yC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?gC:mC;cx.useSyncExternalStore=Ji.useSyncExternalStore!==void 0?Ji.useSyncExternalStore:yC;(function(e){e.exports=cx})(lC);var Zd={},vC={get exports(){return Zd},set exports(e){Zd=e}},dx={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu=b,xC=cl;function wC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _C=typeof Object.is=="function"?Object.is:wC,SC=xC.useSyncExternalStore,bC=Cu.useRef,kC=Cu.useEffect,CC=Cu.useMemo,PC=Cu.useDebugValue;dx.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=bC(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=CC(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var v=o.value;if(i(v,m))return d=v}return d=m}if(v=d,_C(c,m))return v;var x=r(m);return i!==void 0&&i(v,x)?v:(c=m,d=x)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=SC(e,s[0],s[1]);return kC(function(){o.hasValue=!0,o.value=a},[a]),PC(a),a};(function(e){e.exports=dx})(vC);function EC(e){e()}let fx=EC;const TC=e=>fx=e,NC=()=>fx,_r=b.createContext(null);function hx(){return b.useContext(_r)}const OC=()=>{throw new Error("uSES not initialized!")};let px=OC;const RC=e=>{px=e},AC=(e,t)=>e===t;function IC(e=_r){const t=e===_r?hx:()=>b.useContext(e);return function(r,i=AC){const{store:s,subscription:o,getServerState:a}=t(),l=px(o.addNestedSub,s.getState,a||s.getState,r,i);return b.useDebugValue(l),l}}const Rh=IC();function DC(){const e=NC();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const Wm={notify(){},get:()=>[]};function MC(e,t){let n,r=Wm;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=DC())}function u(){n&&(n(),n=void 0,r.clear(),r=Wm)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const LC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jC=LC?b.useLayoutEffect:b.useEffect;function VC({store:e,context:t,children:n,serverState:r}){const i=b.useMemo(()=>{const a=MC(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=b.useMemo(()=>e.getState(),[e]);jC(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]);const o=t||_r;return pt.createElement(o.Provider,{value:i},n)}function mx(e=_r){const t=e===_r?hx:()=>b.useContext(e);return function(){const{store:r}=t();return r}}const FC=mx();function $C(e=_r){const t=e===_r?FC:mx(e);return function(){return t().dispatch}}const Fo=$C();RC(Zd.useSyncExternalStoreWithSelector);TC(Da.unstable_batchedUpdates);function rn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Sr(e){return!!e&&!!e[Ie]}function Fn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===KC}(e)||Array.isArray(e)||!!e[Ym]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ym])||Ah(e)||Ih(e))}function ei(e,t,n){n===void 0&&(n=!1),ls(e)===0?(n?Object.keys:$i)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function ls(e){var t=e[Ie];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Ah(e)?2:Ih(e)?3:0}function Fi(e,t){return ls(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zC(e,t){return ls(e)===2?e.get(t):e[t]}function gx(e,t,n){var r=ls(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function yx(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Ah(e){return ZC&&e instanceof Map}function Ih(e){return qC&&e instanceof Set}function Lr(e){return e.o||e.t}function Dh(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=xx(e);delete t[Ie];for(var n=$i(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Mh(e,t){return t===void 0&&(t=!1),Lh(e)||Sr(e)||!Fn(e)||(ls(e)>1&&(e.set=e.add=e.clear=e.delete=BC),Object.freeze(e),t&&ei(e,function(n,r){return Mh(r,!0)},!0)),e}function BC(){rn(2)}function Lh(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function wn(e){var t=Yd[e];return t||rn(18,e),t}function UC(e,t){Yd[e]||(Yd[e]=t)}function qd(){return co}function yc(e,t){t&&(wn("Patches"),e.u=[],e.s=[],e.v=t)}function dl(e){Kd(e),e.p.forEach(WC),e.p=null}function Kd(e){e===co&&(co=e.l)}function Hm(e){return co={p:[],l:co,h:e,m:!0,_:0}}function WC(e){var t=e[Ie];t.i===0||t.i===1?t.j():t.g=!0}function vc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||wn("ES5").S(t,e,r),r?(n[Ie].P&&(dl(t),rn(4)),Fn(e)&&(e=fl(t,e),t.l||hl(t,e)),t.u&&wn("Patches").M(n[Ie].t,e,t.u,t.s)):e=fl(t,n,[]),dl(t),t.u&&t.v(t.u,t.s),e!==vx?e:void 0}function fl(e,t,n){if(Lh(t))return t;var r=t[Ie];if(!r)return ei(t,function(a,l){return Qm(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return hl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Dh(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),ei(s,function(a,l){return Qm(e,r,i,a,l,n,o)}),hl(e,i,!1),n&&e.u&&wn("Patches").N(r,n,e.u,e.s)}return r.o}function Qm(e,t,n,r,i,s,o){if(Sr(i)){var a=fl(e,i,s&&t&&t.i!==3&&!Fi(t.R,r)?s.concat(r):void 0);if(gx(n,r,a),!Sr(a))return;e.m=!1}else o&&n.add(i);if(Fn(i)&&!Lh(i)){if(!e.h.D&&e._<1)return;fl(e,i),t&&t.A.l||hl(e,i)}}function hl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Mh(t,n)}function xc(e,t){var n=e[Ie];return(n?Lr(n):e)[t]}function Zm(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Jn(e){e.P||(e.P=!0,e.l&&Jn(e.l))}function wc(e){e.o||(e.o=Dh(e.t))}function Gd(e,t,n){var r=Ah(t)?wn("MapSet").F(t,n):Ih(t)?wn("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:qd(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=fo;o&&(l=[a],u=Cs);var c=Proxy.revocable(l,u),d=c.revoke,f=c.proxy;return a.k=f,a.j=d,f}(t,n):wn("ES5").J(t,n);return(n?n.A:qd()).p.push(r),r}function HC(e){return Sr(e)||rn(22,e),function t(n){if(!Fn(n))return n;var r,i=n[Ie],s=ls(n);if(i){if(!i.P&&(i.i<4||!wn("ES5").K(i)))return i.t;i.I=!0,r=qm(n,s),i.I=!1}else r=qm(n,s);return ei(r,function(o,a){i&&zC(i.t,o)===a||gx(r,o,t(a))}),s===3?new Set(r):r}(e)}function qm(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Dh(e)}function QC(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Ie];return fo.get(l,s)},set:function(l){var u=this[Ie];fo.set(u,s,l)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Ie];if(!a.P)switch(a.i){case 5:r(a)&&Jn(a);break;case 4:n(a)&&Jn(a)}}}function n(s){for(var o=s.t,a=s.k,l=$i(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ie){var d=o[c];if(d===void 0&&!Fi(o,c))return!0;var f=a[c],m=f&&f[Ie];if(m?m.t!==d:!yx(f,d))return!0}}var v=!!o[Ie];return l.length!==$i(o).length+(v?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};UC("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,d){if(c){for(var f=Array(d.length),m=0;m<d.length;m++)Object.defineProperty(f,""+m,e(m,!0));return f}var v=xx(d);delete v[Ie];for(var x=$i(v),_=0;_<x.length;_++){var y=x[_];v[y]=e(y,c||!!v[y].enumerable)}return Object.create(Object.getPrototypeOf(d),v)}(a,s),u={i:a?5:4,A:o?o.A:qd(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ie,{value:u,writable:!0}),l},S:function(s,o,a){a?Sr(o)&&o[Ie].A===s&&t(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ie];if(c){var d=c.t,f=c.k,m=c.R,v=c.i;if(v===4)ei(f,function(g){g!==Ie&&(d[g]!==void 0||Fi(d,g)?m[g]||l(f[g]):(m[g]=!0,Jn(c)))}),ei(d,function(g){f[g]!==void 0||Fi(f,g)||(m[g]=!1,Jn(c))});else if(v===5){if(r(c)&&(Jn(c),m.length=!0),f.length<d.length)for(var x=f.length;x<d.length;x++)m[x]=!1;else for(var _=d.length;_<f.length;_++)m[_]=!0;for(var y=Math.min(f.length,d.length),h=0;h<y;h++)f.hasOwnProperty(h)||(m[h]=!0),m[h]===void 0&&l(f[h])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var Km,co,jh=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",ZC=typeof Map<"u",qC=typeof Set<"u",Gm=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",vx=jh?Symbol.for("immer-nothing"):((Km={})["immer-nothing"]=!0,Km),Ym=jh?Symbol.for("immer-draftable"):"__$immer_draftable",Ie=jh?Symbol.for("immer-state"):"__$immer_state",KC=""+Object.prototype.constructor,$i=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,xx=Object.getOwnPropertyDescriptors||function(e){var t={};return $i(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Yd={},fo={get:function(e,t){if(t===Ie)return e;var n=Lr(e);if(!Fi(n,t))return function(i,s,o){var a,l=Zm(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Fn(r)?r:r===xc(e.t,t)?(wc(e),e.o[t]=Gd(e.A.h,r,e)):r},has:function(e,t){return t in Lr(e)},ownKeys:function(e){return Reflect.ownKeys(Lr(e))},set:function(e,t,n){var r=Zm(Lr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=xc(Lr(e),t),s=i==null?void 0:i[Ie];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(yx(n,i)&&(n!==void 0||Fi(e.t,t)))return!0;wc(e),Jn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return xc(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,wc(e),Jn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Lr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){rn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){rn(12)}},Cs={};ei(fo,function(e,t){Cs[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Cs.deleteProperty=function(e,t){return Cs.set.call(this,e,t,void 0)},Cs.set=function(e,t,n){return fo.set.call(this,e[0],t,n,e[0])};var GC=function(){function e(n){var r=this;this.O=Gm,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(x){var _=this;x===void 0&&(x=a);for(var y=arguments.length,h=Array(y>1?y-1:0),g=1;g<y;g++)h[g-1]=arguments[g];return l.produce(x,function(w){var k;return(k=s).call.apply(k,[_,w].concat(h))})}}var u;if(typeof s!="function"&&rn(6),o!==void 0&&typeof o!="function"&&rn(7),Fn(i)){var c=Hm(r),d=Gd(r,i,void 0),f=!0;try{u=s(d),f=!1}finally{f?dl(c):Kd(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(x){return yc(c,o),vc(x,c)},function(x){throw dl(c),x}):(yc(c,o),vc(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===vx&&(u=void 0),r.D&&Mh(u,!0),o){var m=[],v=[];wn("Patches").M(i,u,m,v),o(m,v)}return u}rn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];return r.produceWithPatches(u,function(m){return i.apply(void 0,[m].concat(d))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Fn(n)||rn(8),Sr(n)&&(n=HC(n));var r=Hm(this),i=Gd(this,n,void 0);return i[Ie].C=!0,Kd(r),i},t.finishDraft=function(n,r){var i=n&&n[Ie],s=i.A;return yc(s,r),vc(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Gm&&rn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=wn("Patches").$;return Sr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),Lt=new GC,wx=Lt.produce;Lt.produceWithPatches.bind(Lt);Lt.setAutoFreeze.bind(Lt);Lt.setUseProxies.bind(Lt);Lt.applyPatches.bind(Lt);Lt.createDraft.bind(Lt);Lt.finishDraft.bind(Lt);function ho(e){return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ho(e)}function YC(e,t){if(ho(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ho(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function XC(e){var t=YC(e,"string");return ho(t)==="symbol"?t:String(t)}function JC(e,t,n){return t=XC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Jm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xm(Object(n),!0).forEach(function(r){JC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ft(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var eg=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),_c=function(){return Math.random().toString(36).substring(7).split("").join(".")},pl={INIT:"@@redux/INIT"+_c(),REPLACE:"@@redux/REPLACE"+_c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+_c()}};function eP(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function _x(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ft(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ft(1));return n(_x)(e,t)}if(typeof e!="function")throw new Error(ft(2));var i=e,s=t,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(ft(3));return s}function d(x){if(typeof x!="function")throw new Error(ft(4));if(l)throw new Error(ft(5));var _=!0;return u(),a.push(x),function(){if(_){if(l)throw new Error(ft(6));_=!1,u();var h=a.indexOf(x);a.splice(h,1),o=null}}}function f(x){if(!eP(x))throw new Error(ft(7));if(typeof x.type>"u")throw new Error(ft(8));if(l)throw new Error(ft(9));try{l=!0,s=i(s,x)}finally{l=!1}for(var _=o=a,y=0;y<_.length;y++){var h=_[y];h()}return x}function m(x){if(typeof x!="function")throw new Error(ft(10));i=x,f({type:pl.REPLACE})}function v(){var x,_=d;return x={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(ft(11));function g(){h.next&&h.next(c())}g();var w=_(g);return{unsubscribe:w}}},x[eg]=function(){return this},x}return f({type:pl.INIT}),r={dispatch:f,subscribe:d,getState:c,replaceReducer:m},r[eg]=v,r}function tP(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:pl.INIT});if(typeof r>"u")throw new Error(ft(12));if(typeof n(void 0,{type:pl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ft(13))})}function nP(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{tP(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,d={},f=0;f<s.length;f++){var m=s[f],v=n[m],x=l[m],_=v(x,u);if(typeof _>"u")throw u&&u.type,new Error(ft(14));d[m]=_,c=c||_!==x}return c=c||s.length!==Object.keys(l).length,c?d:l}}function ml(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function rP(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(ft(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(l){return l(o)});return s=ml.apply(void 0,a)(i.dispatch),Jm(Jm({},i),{},{dispatch:s})}}}function Sx(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var bx=Sx();bx.withExtraArgument=Sx;const tg=bx;var kx=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),iP=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},es=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},sP=Object.defineProperty,oP=Object.defineProperties,aP=Object.getOwnPropertyDescriptors,ng=Object.getOwnPropertySymbols,lP=Object.prototype.hasOwnProperty,uP=Object.prototype.propertyIsEnumerable,rg=function(e,t,n){return t in e?sP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},mr=function(e,t){for(var n in t||(t={}))lP.call(t,n)&&rg(e,n,t[n]);if(ng)for(var r=0,i=ng(t);r<i.length;r++){var n=i[r];uP.call(t,n)&&rg(e,n,t[n])}return e},Sc=function(e,t){return oP(e,aP(t))},cP=function(e,t,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(e,t)).next())})},dP=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ml:ml.apply(null,arguments)};function fP(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var hP=function(e){kx(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,es([void 0],n[0].concat(this)))):new(t.bind.apply(t,es([void 0],n.concat(this))))},t}(Array),pP=function(e){kx(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,es([void 0],n[0].concat(this)))):new(t.bind.apply(t,es([void 0],n.concat(this))))},t}(Array);function Xd(e){return Fn(e)?wx(e,function(){}):e}function mP(e){return typeof e=="boolean"}function gP(){return function(t){return yP(t)}}function yP(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new hP;return n&&(mP(n)?r.push(tg):r.push(tg.withExtraArgument(n.extraArgument))),r}var vP=!0;function xP(e){var t=gP(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,f=d===void 0?void 0:d,m;if(typeof i=="function")m=i;else if(fP(i))m=nP(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=o;typeof v=="function"&&(v=v(t));var x=rP.apply(void 0,v),_=ml;l&&(_=dP(mr({trace:!vP},typeof l=="object"&&l)));var y=new pP(x),h=y;Array.isArray(f)?h=es([x],f):typeof f=="function"&&(h=f(y));var g=_.apply(void 0,h);return _x(m,c,g)}function gr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return mr(mr({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Cx(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function wP(e){return typeof e=="function"}function _P(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Cx(t):[t,n,r],s=i[0],o=i[1],a=i[2],l;if(wP(e))l=function(){return Xd(e())};else{var u=Xd(e);l=function(){return u}}function c(d,f){d===void 0&&(d=l());var m=es([s[f.type]],o.filter(function(v){var x=v.matcher;return x(f)}).map(function(v){var x=v.reducer;return x}));return m.filter(function(v){return!!v}).length===0&&(m=[a]),m.reduce(function(v,x){if(x)if(Sr(v)){var _=v,y=x(_,f);return y===void 0?v:y}else{if(Fn(v))return wx(v,function(h){return x(h,f)});var y=x(v,f);if(y===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return v},d)}return c.getInitialState=l,c}function SP(e,t){return e+"/"+t}function Px(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Xd(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var d=r[c],f=SP(t,c),m,v;"reducer"in d?(m=d.reducer,v=d.prepare):m=d,s[c]=m,o[f]=m,a[c]=v?gr(f,v):gr(f)});function l(){var c=typeof e.extraReducers=="function"?Cx(e.extraReducers):[e.extraReducers],d=c[0],f=d===void 0?{}:d,m=c[1],v=m===void 0?[]:m,x=c[2],_=x===void 0?void 0:x,y=mr(mr({},f),o);return _P(n,function(h){for(var g in y)h.addCase(g,y[g]);for(var w=0,k=v;w<k.length;w++){var R=k[w];h.addMatcher(R.matcher,R.reducer)}_&&h.addDefaultCase(_)})}var u;return{name:t,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var bP="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",kP=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=bP[Math.random()*64|0];return t},CP=["name","message","stack","code"],bc=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),ig=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),PP=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=CP;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=gr(t+"/fulfilled",function(u,c,d,f){return{payload:u,meta:Sc(mr({},f||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),s=gr(t+"/pending",function(u,c,d){return{payload:void 0,meta:Sc(mr({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=gr(t+"/rejected",function(u,c,d,f,m){return{payload:f,error:(r&&r.serializeError||PP)(u||"Rejected"),meta:Sc(mr({},m||{}),{arg:d,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,f){var m=r!=null&&r.idGenerator?r.idGenerator(u):kP(),v=new a,x;function _(h){x=h,v.abort()}var y=function(){return cP(this,null,function(){var h,g,w,k,R,N,E;return iP(this,function(L){switch(L.label){case 0:return L.trys.push([0,4,,5]),k=(h=r==null?void 0:r.condition)==null?void 0:h.call(r,u,{getState:d,extra:f}),TP(k)?[4,k]:[3,2];case 1:k=L.sent(),L.label=2;case 2:if(k===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=new Promise(function($,oe){return v.signal.addEventListener("abort",function(){return oe({name:"AbortError",message:x||"Aborted"})})}),c(s(m,u,(g=r==null?void 0:r.getPendingMeta)==null?void 0:g.call(r,{requestId:m,arg:u},{getState:d,extra:f}))),[4,Promise.race([R,Promise.resolve(n(u,{dispatch:c,getState:d,extra:f,requestId:m,signal:v.signal,abort:_,rejectWithValue:function($,oe){return new bc($,oe)},fulfillWithValue:function($,oe){return new ig($,oe)}})).then(function($){if($ instanceof bc)throw $;return $ instanceof ig?i($.payload,m,u,$.meta):i($,m,u)})])];case 3:return w=L.sent(),[3,5];case 4:return N=L.sent(),w=N instanceof bc?o(null,m,u,N.payload,N.meta):o(N,m,u),[3,5];case 5:return E=r&&!r.dispatchConditionRejection&&o.match(w)&&w.meta.condition,E||c(w),[2,w]}})})}();return Object.assign(y,{abort:_,requestId:m,arg:u,unwrap:function(){return y.then(EP)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function EP(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function TP(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Vh="listenerMiddleware";gr(Vh+"/add");gr(Vh+"/removeAll");gr(Vh+"/remove");var sg;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);QC();const NP={isShown:!1},Ex=Px({name:"ui",initialState:NP,reducers:{toggleCart(e){e.isShown=!e.isShown}}}),{toggleCart:gl}=Ex.actions,Tx=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Pu=b.createContext({}),Eu=b.createContext(null),Tu=typeof document<"u",yl=Tu?b.useLayoutEffect:b.useEffect,Nx=b.createContext({strict:!1});function OP(e,t,n,r){const{visualElement:i}=b.useContext(Pu),s=b.useContext(Nx),o=b.useContext(Eu),a=b.useContext(Tx).reducedMotion,l=b.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;return b.useInsertionEffect(()=>{u&&u.update(n,o)}),yl(()=>{u&&u.render()}),b.useEffect(()=>{u&&u.updateFeatures()}),(window.HandoffAppearAnimations?yl:b.useEffect)(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}function Ni(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function RP(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ni(n)&&(n.current=r))},[t])}function po(e){return typeof e=="string"||Array.isArray(e)}function Nu(e){return typeof e=="object"&&typeof e.start=="function"}const Fh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$h=["initial",...Fh];function Ou(e){return Nu(e.animate)||$h.some(t=>po(e[t]))}function Ox(e){return!!(Ou(e)||e.variants)}function AP(e,t){if(Ou(e)){const{initial:n,animate:r}=e;return{initial:n===!1||po(n)?n:void 0,animate:po(r)?r:void 0}}return e.inherit!==!1?t:{}}function IP(e){const{initial:t,animate:n}=AP(e,b.useContext(Pu));return b.useMemo(()=>({initial:t,animate:n}),[og(t),og(n)])}function og(e){return Array.isArray(e)?e.join(" "):e}const ag={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mo={};for(const e in ag)mo[e]={isEnabled:t=>ag[e].some(n=>!!t[n])};function DP(e){for(const t in e)mo[t]={...mo[t],...e[t]}}function zh(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Vs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let MP=1;function LP(){return zh(()=>{if(Vs.hasEverUpdated)return MP++})}const Bh=b.createContext({}),Rx=b.createContext({}),jP=Symbol.for("motionComponentSymbol");function VP({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&DP(e);function s(a,l){let u;const c={...b.useContext(Tx),...a,layoutId:FP(a)},{isStatic:d}=c,f=IP(a),m=d?void 0:LP(),v=r(a,d);if(!d&&Tu){f.visualElement=OP(i,v,c,t);const x=b.useContext(Rx),_=b.useContext(Nx).strict;f.visualElement&&(u=f.visualElement.loadFeatures(c,_,e,m,x))}return b.createElement(Pu.Provider,{value:f},u&&f.visualElement?b.createElement(u,{visualElement:f.visualElement,...c}):null,n(i,a,m,RP(v,f.visualElement,l),v,d,f.visualElement))}const o=b.forwardRef(s);return o[jP]=i,o}function FP({layoutId:e}){const t=b.useContext(Bh).id;return t&&e!==void 0?t+"-"+e:e}function $P(e){function t(r,i={}){return VP(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const zP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Uh(e){return typeof e!="string"||e.includes("-")?!1:!!(zP.indexOf(e)>-1||/[A-Z]/.test(e))}const vl={};function BP(e){Object.assign(vl,e)}const $o=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],li=new Set($o);function Ax(e,{layout:t,layoutId:n}){return li.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!vl[e]||e==="opacity")}const Rt=e=>!!(e&&e.getVelocity),UP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},WP=$o.length;function HP(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<WP;o++){const a=$o[o];if(e[a]!==void 0){const l=UP[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}const Ix=e=>t=>typeof t=="string"&&t.startsWith(e),Dx=Ix("--"),Jd=Ix("var(--"),QP=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,ZP=(e,t)=>t&&typeof e=="number"?t.transform(e):e,ti=(e,t,n)=>Math.min(Math.max(n,e),t),ui={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fs={...ui,transform:e=>ti(0,1,e)},ha={...ui,default:1},$s=e=>Math.round(e*1e5)/1e5,Ru=/(-)?([\d]*\.?[\d])+/g,Mx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,qP=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function zo(e){return typeof e=="string"}const Bo=e=>({test:t=>zo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Qn=Bo("deg"),_n=Bo("%"),se=Bo("px"),KP=Bo("vh"),GP=Bo("vw"),lg={..._n,parse:e=>_n.parse(e)/100,transform:e=>_n.transform(e*100)},ug={...ui,transform:Math.round},Lx={borderWidth:se,borderTopWidth:se,borderRightWidth:se,borderBottomWidth:se,borderLeftWidth:se,borderRadius:se,radius:se,borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomRightRadius:se,borderBottomLeftRadius:se,width:se,maxWidth:se,height:se,maxHeight:se,size:se,top:se,right:se,bottom:se,left:se,padding:se,paddingTop:se,paddingRight:se,paddingBottom:se,paddingLeft:se,margin:se,marginTop:se,marginRight:se,marginBottom:se,marginLeft:se,rotate:Qn,rotateX:Qn,rotateY:Qn,rotateZ:Qn,scale:ha,scaleX:ha,scaleY:ha,scaleZ:ha,skew:Qn,skewX:Qn,skewY:Qn,distance:se,translateX:se,translateY:se,translateZ:se,x:se,y:se,z:se,perspective:se,transformPerspective:se,opacity:Fs,originX:lg,originY:lg,originZ:se,zIndex:ug,fillOpacity:Fs,strokeOpacity:Fs,numOctaves:ug};function Wh(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const f=t[d];if(Dx(d)){s[d]=f;continue}const m=Lx[d],v=ZP(f,m);if(li.has(d)){if(l=!0,o[d]=v,!c)continue;f!==(m.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=HP(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:f="50%",originZ:m=0}=a;i.transformOrigin=`${d} ${f} ${m}`}}const Hh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function jx(e,t,n){for(const r in t)!Rt(t[r])&&!Ax(r,n)&&(e[r]=t[r])}function YP({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Hh();return Wh(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function XP(e,t,n){const r=e.style||{},i={};return jx(i,r,e),Object.assign(i,YP(e,t,n)),e.transformValues?e.transformValues(i):i}function JP(e,t,n){const r={},i=XP(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const e2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function xl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e2.has(e)}let Vx=e=>!xl(e);function t2(e){e&&(Vx=t=>t.startsWith("on")?!xl(t):e(t))}try{t2(require("@emotion/is-prop-valid").default)}catch{}function n2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Vx(i)||n===!0&&xl(i)||!t&&!xl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function cg(e,t,n){return typeof e=="string"?e:se.transform(t+n*e)}function r2(e,t,n){const r=cg(t,e.x,e.width),i=cg(n,e.y,e.height);return`${r} ${i}`}const i2={offset:"stroke-dashoffset",array:"stroke-dasharray"},s2={offset:"strokeDashoffset",array:"strokeDasharray"};function o2(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?i2:s2;e[s.offset]=se.transform(-r);const o=se.transform(t),a=se.transform(n);e[s.array]=`${o} ${a}`}function Qh(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,d,f){if(Wh(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:v,dimensions:x}=e;m.transform&&(x&&(v.transform=m.transform),delete m.transform),x&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=r2(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),o!==void 0&&o2(m,o,a,l,!1)}const Fx=()=>({...Hh(),attrs:{}}),Zh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function a2(e,t,n,r){const i=b.useMemo(()=>{const s=Fx();return Qh(s,t,{enableHardwareAcceleration:!1},Zh(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};jx(s,e.style,e),i.style={...s,...i.style}}return i}function l2(e=!1){return(n,r,i,s,{latestValues:o},a)=>{const u=(Uh(n)?a2:JP)(r,o,a,n),d={...n2(r,typeof n=="string",e),...u,ref:s},{children:f}=r,m=b.useMemo(()=>Rt(f)?f.get():f,[f]);return i&&(d["data-projection-id"]=i),b.createElement(n,{...d,children:m})}}const qh=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function $x(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const zx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bx(e,t,n,r){$x(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(zx.has(i)?i:qh(i),t.attrs[i])}function Kh(e,t){const{style:n}=e,r={};for(const i in n)(Rt(n[i])||t.style&&Rt(t.style[i])||Ax(i,e))&&(r[i]=n[i]);return r}function Ux(e,t){const n=Kh(e,t);for(const r in e)if(Rt(e[r])||Rt(t[r])){const i=$o.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Gh(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}const wl=e=>Array.isArray(e),u2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),c2=e=>wl(e)?e[e.length-1]||0:e;function Oa(e){const t=Rt(e)?e.get():e;return u2(t)?t.toValue():t}function d2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:f2(r,i,s,e),renderState:t()};return n&&(o.mount=a=>n(r,a,o)),o}const Wx=e=>(t,n)=>{const r=b.useContext(Pu),i=b.useContext(Eu),s=()=>d2(e,t,r,i);return n?s():zh(s)};function f2(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=Oa(s[f]);let{initial:o,animate:a}=e;const l=Ou(e),u=Ox(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;return d&&typeof d!="boolean"&&!Nu(d)&&(Array.isArray(d)?d:[d]).forEach(m=>{const v=Gh(e,m);if(!v)return;const{transitionEnd:x,transition:_,...y}=v;for(const h in y){let g=y[h];if(Array.isArray(g)){const w=c?g.length-1:0;g=g[w]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}),i}const h2={useVisualState:Wx({scrapeMotionValuesFromProps:Ux,createRenderState:Fx,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Qh(n,r,{enableHardwareAcceleration:!1},Zh(t.tagName),e.transformTemplate),Bx(t,n)}})},p2={useVisualState:Wx({scrapeMotionValuesFromProps:Kh,createRenderState:Hh})};function m2(e,{forwardMotionProps:t=!1},n,r){return{...Uh(e)?h2:p2,preloadedFeatures:n,useRender:l2(t),createVisualElement:r,Component:e}}function On(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Hx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Au(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const g2=e=>t=>Hx(t)&&e(t,Au(t));function An(e,t,n,r){return On(e,t,g2(n),r)}const y2=(e,t)=>n=>t(e(n)),yr=(...e)=>e.reduce(y2);function Qx(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const dg=Qx("dragHorizontal"),fg=Qx("dragVertical");function Zx(e){let t=!1;if(e==="y")t=fg();else if(e==="x")t=dg();else{const n=dg(),r=fg();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function qx(){const e=Zx(!0);return e?(e(),!1):!0}class Or{constructor(t){this.isMounted=!1,this.node=t}update(){}}function v2(e){let t=[],n=[],r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&i,f=d?t:n;return u&&o.add(l),f.indexOf(l)===-1&&(f.push(l),d&&i&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),o.has(c)&&(a.schedule(c),e())}i=!1,s&&(s=!1,a.process(l))}};return a}const rt={delta:0,timestamp:0,isProcessing:!1},x2=40;let ef=!0,go=!1;const Iu=["read","update","preRender","render","postRender"],zi=Iu.reduce((e,t)=>(e[t]=v2(()=>go=!0),e),{}),w2=e=>zi[e].process(rt),Kx=e=>{go=!1,rt.delta=ef?1e3/60:Math.max(Math.min(e-rt.timestamp,x2),1),rt.timestamp=e,rt.isProcessing=!0,Iu.forEach(w2),rt.isProcessing=!1,go&&(ef=!1,requestAnimationFrame(Kx))},_2=()=>{go=!0,ef=!0,rt.isProcessing||requestAnimationFrame(Kx)},Me=Iu.reduce((e,t)=>{const n=zi[t];return e[t]=(r,i=!1,s=!1)=>(go||_2(),n.schedule(r,i,s)),e},{});function $n(e){Iu.forEach(t=>zi[t].cancel(e))}function hg(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.type==="touch"||qx())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&Me.update(()=>a[r](s,o))};return An(e.current,n,i,{passive:!e.getProps()[r]})}class S2 extends Or{mount(){this.unmount=yr(hg(this.node,!0),hg(this.node,!1))}unmount(){}}class b2 extends Or{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=yr(On(this.node.current,"focus",()=>this.onFocus()),On(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Gx=(e,t)=>t?e===t?!0:Gx(e,t.parentElement):!1,Ge=e=>e;function kc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Au(n))}class k2 extends Or{constructor(){super(...arguments),this.removeStartListeners=Ge,this.removeEndListeners=Ge,this.removeAccessibleListeners=Ge,this.startPointerPress=(t,n)=>{if(this.removeEndListeners(),this.isPressing)return;const r=this.node.getProps(),s=An(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c}=this.node.getProps();Me.update(()=>{Gx(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=An(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=yr(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||kc("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&Me.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=On(this.node.current,"keyup",o),kc("down",(a,l)=>{this.startPress(a,l)})},n=On(this.node.current,"keydown",t),r=()=>{this.isPressing&&kc("cancel",(s,o)=>this.cancelPress(s,o))},i=On(this.node.current,"blur",r);this.removeAccessibleListeners=yr(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Me.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!qx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Me.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=An(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=On(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=yr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const tf=new WeakMap,Cc=new WeakMap,C2=e=>{const t=tf.get(e.target);t&&t(e)},P2=e=>{e.forEach(C2)};function E2({root:e,...t}){const n=e||document;Cc.has(n)||Cc.set(n,{});const r=Cc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(P2,{root:e,...t})),r[i]}function T2(e,t,n){const r=E2(t);return tf.set(e,n),r.observe(e),()=>{tf.delete(e),r.unobserve(e)}}const N2={some:0,all:1};class O2 extends Or{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:N2[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return T2(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(R2(t,n))&&this.startObserver()}unmount(){}}function R2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const A2={inView:{Feature:O2},tap:{Feature:k2},focus:{Feature:b2},hover:{Feature:S2}};function Yx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function I2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function D2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Du(e,t,n){const r=e.getProps();return Gh(r,t,n!==void 0?n:r.custom,I2(e),D2(e))}const M2="framerAppearId",L2="data-"+qh(M2);let j2=Ge,Yh=Ge;const vr=e=>e*1e3,In=e=>e/1e3,V2={current:!1},Xx=e=>Array.isArray(e)&&typeof e[0]=="number";function Jx(e){return!!(!e||typeof e=="string"&&e1[e]||Xx(e)||Array.isArray(e)&&e.every(Jx))}const Ps=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,e1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ps([0,.65,.55,1]),circOut:Ps([.55,0,1,.45]),backIn:Ps([.31,.01,.66,-.59]),backOut:Ps([.33,1.53,.69,.99])};function t1(e){if(e)return Xx(e)?Ps(e):Array.isArray(e)?e.map(t1):e1[e]}function F2(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=t1(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const pg={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},Pc={},n1={};for(const e in pg)n1[e]=()=>(Pc[e]===void 0&&(Pc[e]=pg[e]()),Pc[e]);function $2(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const r1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,z2=1e-7,B2=12;function U2(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=r1(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>z2&&++a<B2);return o}function Uo(e,t,n,r){if(e===t&&n===r)return Ge;const i=s=>U2(s,0,1,e,n);return s=>s===0||s===1?s:r1(i(s),t,r)}const W2=Uo(.42,0,1,1),H2=Uo(0,0,.58,1),i1=Uo(.42,0,.58,1),Q2=e=>Array.isArray(e)&&typeof e[0]!="number",s1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,o1=e=>t=>1-e(1-t),a1=e=>1-Math.sin(Math.acos(e)),Xh=o1(a1),Z2=s1(Xh),l1=Uo(.33,1.53,.69,.99),Jh=o1(l1),q2=s1(Jh),K2=e=>(e*=2)<1?.5*Jh(e):.5*(2-Math.pow(2,-10*(e-1))),G2={linear:Ge,easeIn:W2,easeInOut:i1,easeOut:H2,circIn:a1,circInOut:Z2,circOut:Xh,backIn:Jh,backInOut:q2,backOut:l1,anticipate:K2},mg=e=>{if(Array.isArray(e)){Yh(e.length===4);const[t,n,r,i]=e;return Uo(t,n,r,i)}else if(typeof e=="string")return G2[e];return e},ep=(e,t)=>n=>!!(zo(n)&&qP.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),u1=(e,t,n)=>r=>{if(!zo(r))return r;const[i,s,o,a]=r.match(Ru);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Y2=e=>ti(0,255,e),Ec={...ui,transform:e=>Math.round(Y2(e))},Ur={test:ep("rgb","red"),parse:u1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ec.transform(e)+", "+Ec.transform(t)+", "+Ec.transform(n)+", "+$s(Fs.transform(r))+")"};function X2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const nf={test:ep("#"),parse:X2,transform:Ur.transform},Oi={test:ep("hsl","hue"),parse:u1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+_n.transform($s(t))+", "+_n.transform($s(n))+", "+$s(Fs.transform(r))+")"},vt={test:e=>Ur.test(e)||nf.test(e)||Oi.test(e),parse:e=>Ur.test(e)?Ur.parse(e):Oi.test(e)?Oi.parse(e):nf.parse(e),transform:e=>zo(e)?e:e.hasOwnProperty("red")?Ur.transform(e):Oi.transform(e)},Ve=(e,t,n)=>-n*e+n*t+e;function Tc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function J2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Tc(l,a,e+1/3),s=Tc(l,a,e),o=Tc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Nc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},eE=[nf,Ur,Oi],tE=e=>eE.find(t=>t.test(e));function gg(e){const t=tE(e);let n=t.parse(e);return t===Oi&&(n=J2(n)),n}const c1=(e,t)=>{const n=gg(e),r=gg(t),i={...n};return s=>(i.red=Nc(n.red,r.red,s),i.green=Nc(n.green,r.green,s),i.blue=Nc(n.blue,r.blue,s),i.alpha=Ve(n.alpha,r.alpha,s),Ur.transform(i))};function nE(e){var t,n;return isNaN(e)&&zo(e)&&(((t=e.match(Ru))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Mx))===null||n===void 0?void 0:n.length)||0)>0}const d1={regex:QP,countKey:"Vars",token:"${v}",parse:Ge},f1={regex:Mx,countKey:"Colors",token:"${c}",parse:vt.parse},h1={regex:Ru,countKey:"Numbers",token:"${n}",parse:ui.parse};function Oc(e,{regex:t,countKey:n,token:r,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function _l(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Oc(n,d1),Oc(n,f1),Oc(n,h1),n}function p1(e){return _l(e).values}function m1(e){const{values:t,numColors:n,numVars:r,tokenised:i}=_l(e),s=t.length;return o=>{let a=i;for(let l=0;l<s;l++)l<r?a=a.replace(d1.token,o[l]):l<r+n?a=a.replace(f1.token,vt.transform(o[l])):a=a.replace(h1.token,$s(o[l]));return a}}const rE=e=>typeof e=="number"?0:e;function iE(e){const t=p1(e);return m1(e)(t.map(rE))}const br={test:nE,parse:p1,createTransformer:m1,getAnimatableNone:iE},g1=(e,t)=>n=>`${n>0?t:e}`;function y1(e,t){return typeof e=="number"?n=>Ve(e,t,n):vt.test(e)?c1(e,t):e.startsWith("var(")?g1(e,t):x1(e,t)}const v1=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>y1(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},sE=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=y1(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},x1=(e,t)=>{const n=br.createTransformer(t),r=_l(e),i=_l(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?yr(v1(r.values,i.values),n):g1(e,t)},yo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},yg=(e,t)=>n=>Ve(e,t,n);function oE(e){return typeof e=="number"?yg:typeof e=="string"?vt.test(e)?c1:x1:Array.isArray(e)?v1:typeof e=="object"?sE:yg}function aE(e,t,n){const r=[],i=n||oE(e[0]),s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ge:t;a=yr(l,a)}r.push(a)}return r}function w1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Yh(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=aE(t,r,i),a=o.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=yo(e[c],e[c+1],u);return o[c](d)};return n?u=>l(ti(e[0],e[s-1],u)):l}function lE(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=yo(0,t,r);e.push(Ve(n,1,i))}}function uE(e){const t=[0];return lE(t,e.length-1),t}function cE(e,t){return e.map(n=>n*t)}function dE(e,t){return e.map(()=>t||i1).splice(0,e.length-1)}function Sl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Q2(r)?r.map(mg):mg(r),s={done:!1,value:t[0]},o=cE(n&&n.length===t.length?n:uE(t),e),a=w1(o,t,{ease:Array.isArray(i)?i:dE(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}function _1(e,t){return t?e*(1e3/t):0}const fE=5;function S1(e,t,n){const r=Math.max(t-fE,0);return _1(n-e(r),t-r)}const Rc=.001,hE=.01,vg=10,pE=.05,mE=1;function gE({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;j2(e<=vr(vg));let o=1-t;o=ti(pE,mE,o),e=ti(hE,vg,In(e)),o<1?(i=u=>{const c=u*o,d=c*e,f=c-n,m=rf(u,o),v=Math.exp(-d);return Rc-f/m*v},s=u=>{const d=u*o*e,f=d*n+n,m=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=rf(Math.pow(u,2),o);return(-i(u)+Rc>0?-1:1)*((f-m)*v)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Rc+c*d},s=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=vE(i,s,a);if(e=vr(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const yE=12;function vE(e,t,n){let r=n;for(let i=1;i<yE;i++)r=r-e(r)/t(r);return r}function rf(e,t){return e*Math.sqrt(1-t*t)}const xE=["duration","bounce"],wE=["stiffness","damping","mass"];function xg(e,t){return t.some(n=>e[n]!==void 0)}function _E(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!xg(e,wE)&&xg(e,xE)){const n=gE(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function b1({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,velocity:c,duration:d,isResolvedFromDuration:f}=_E(r),m=c?-In(c):0,v=l/(2*Math.sqrt(a*u)),x=s-i,_=In(Math.sqrt(a/u)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let h;if(v<1){const g=rf(_,v);h=w=>{const k=Math.exp(-v*_*w);return s-k*((m+v*_*x)/g*Math.sin(g*w)+x*Math.cos(g*w))}}else if(v===1)h=g=>s-Math.exp(-_*g)*(x+(m+_*x)*g);else{const g=_*Math.sqrt(v*v-1);h=w=>{const k=Math.exp(-v*_*w),R=Math.min(g*w,300);return s-k*((m+v*_*x)*Math.sinh(R)+g*x*Math.cosh(R))/g}}return{calculatedDuration:f&&d||null,next:g=>{const w=h(g);if(f)o.done=g>=d;else{let k=m;g!==0&&(v<1?k=S1(h,g,w):k=0);const R=Math.abs(k)<=n,N=Math.abs(s-w)<=t;o.done=R&&N}return o.value=o.done?s:w,o}}}function wg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},m=E=>a!==void 0&&E<a||l!==void 0&&E>l,v=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let x=n*t;const _=d+x,y=o===void 0?_:o(_);y!==_&&(x=y-d);const h=E=>-x*Math.exp(-E/r),g=E=>y+h(E),w=E=>{const L=h(E),$=g(E);f.done=Math.abs(L)<=u,f.value=f.done?y:$};let k,R;const N=E=>{m(f.value)&&(k=E,R=b1({keyframes:[f.value,v(f.value)],velocity:S1(g,E,f.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return N(0),{calculatedDuration:null,next:E=>{let L=!1;return!R&&k===void 0&&(L=!0,w(E),N(E)),k!==void 0&&E>k?R.next(E-k):(!L&&w(E),f)}}}const SE=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Me.update(t,!0),stop:()=>$n(t),now:()=>rt.isProcessing?rt.timestamp:performance.now()}},_g=2e4;function Sg(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<_g;)t+=n,r=e.next(t);return t>=_g?1/0:t}const bE={decay:wg,inertia:wg,tween:Sl,keyframes:Sl,spring:b1};function bl({autoplay:e=!0,delay:t=0,driver:n=SE,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let m=1,v=!1,x,_;const y=()=>{x&&x(),_=new Promise(te=>{x=te})};y();let h;const g=bE[i]||Sl;let w;g!==Sl&&typeof r[0]!="number"&&(w=w1([0,100],r,{clamp:!1}),r=[0,100]);const k=g({...f,keyframes:r});let R;a==="mirror"&&(R=g({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let N="idle",E=null,L=null,$=null;k.calculatedDuration===null&&s&&(k.calculatedDuration=Sg(k));const{calculatedDuration:oe}=k;let G=1/0,q=1/0;oe!==null&&(G=oe+o,q=G*(s+1)-o);let J=0;const re=te=>{if(L===null)return;m>0&&(L=Math.min(L,te)),E!==null?J=E:J=(te-L)*m;const V=J-t,z=V<0;J=Math.max(V,0),N==="finished"&&E===null&&(J=q);let B=J,ie=k;if(s){const Pe=J/G;let me=Math.floor(Pe),he=Pe%1;!he&&Pe>=1&&(he=1),he===1&&me--,me=Math.min(me,s+1);const le=!!(me%2);le&&(a==="reverse"?(he=1-he,o&&(he-=o/G)):a==="mirror"&&(ie=R));let Be=ti(0,1,he);J>q&&(Be=a==="reverse"&&le?1:0),B=Be*G}const P=z?{done:!1,value:r[0]}:ie.next(B);w&&(P.value=w(P.value));let{done:ce}=P;!z&&oe!==null&&(ce=J>=q);const F=E===null&&(N==="finished"||N==="running"&&ce||m<0&&J<=0);return d&&d(P.value),F&&D(),P},Se=()=>{h&&h.stop(),h=void 0},ve=()=>{N="idle",Se(),y(),L=$=null},D=()=>{N="finished",c&&c(),Se(),y()},X=()=>{if(v)return;h||(h=n(re));const te=h.now();l&&l(),E!==null?L=te-E:(!L||N==="finished")&&(L=te),$=L,E=null,N="running",h.start()};e&&X();const ee={then(te,V){return _.then(te,V)},get time(){return In(J)},set time(te){te=vr(te),J=te,E!==null||!h||m===0?E=te:L=h.now()-te/m},get duration(){const te=k.calculatedDuration===null?Sg(k):k.calculatedDuration;return In(te)},get speed(){return m},set speed(te){te===m||!h||(m=te,ee.time=In(J))},get state(){return N},play:X,pause:()=>{N="paused",E=J},stop:()=>{v=!0,N!=="idle"&&(N="idle",u&&u(),ve())},cancel:()=>{$!==null&&re($),ve()},complete:()=>{N="finished"},sample:te=>(L=0,re(te))};return ee}const kE=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),pa=10,CE=2e4,PE=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Jx(t.ease);function EE(e,t,{onUpdate:n,onComplete:r,...i}){if(!(n1.waapi()&&kE.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l;const u=()=>{l=new Promise(y=>{a=y})};u();let{keyframes:c,duration:d=300,ease:f,times:m}=i;if(PE(t,i)){const y=bl({...i,repeat:0,delay:0});let h={done:!1,value:c[0]};const g=[];let w=0;for(;!h.done&&w<CE;)h=y.sample(w),g.push(h.value),w+=pa;m=void 0,c=g,d=w-pa,f="linear"}const v=F2(e.owner.current,t,c,{...i,duration:d,ease:f,times:m}),x=()=>v.cancel(),_=()=>{Me.update(x),a(),u()};return v.onfinish=()=>{e.set($2(c,i)),r&&r(),_()},{then(y,h){return l.then(y,h)},get time(){return In(v.currentTime||0)},set time(y){v.currentTime=vr(y)},get speed(){return v.playbackRate},set speed(y){v.playbackRate=y},get duration(){return In(d)},play:()=>{o||(v.play(),$n(x))},pause:()=>v.pause(),stop:()=>{if(o=!0,v.playState==="idle")return;const{currentTime:y}=v;if(y){const h=bl({...i,autoplay:!1});e.setWithVelocity(h.sample(y-pa).value,h.sample(y).value,pa)}_()},complete:()=>v.finish(),cancel:_}}function TE({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Ge,pause:Ge,stop:Ge,then:s=>(s(),Promise.resolve()),cancel:Ge,complete:Ge});return t?bl({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const NE={type:"spring",stiffness:500,damping:25,restSpeed:10},OE=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),RE={type:"keyframes",duration:.8},AE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IE=(e,{keyframes:t})=>t.length>2?RE:li.has(e)?e.startsWith("scale")?OE(t[1]):NE:AE,sf=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&br.test(t)&&!t.startsWith("url(")),DE=new Set(["brightness","contrast","saturate","opacity"]);function ME(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ru)||[];if(!r)return e;const i=n.replace(r,"");let s=DE.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const LE=/([a-z-]*)\(.*?\)/g,of={...br,getAnimatableNone:e=>{const t=e.match(LE);return t?t.map(ME).join(" "):e}},jE={...Lx,color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,filter:of,WebkitFilter:of},tp=e=>jE[e];function np(e,t){let n=tp(e);return n!==of&&(n=br),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function VE({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function bg(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function kg(e){return typeof e=="number"?0:np("",e)}function k1(e,t){return e[t]||e.default||e}function FE(e,[...t]){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n===0?e:t[n-1]);return t}function $E(e,t,n,r){const i=sf(t,n);let s=r.from!==void 0?r.from:e.get();return s==="none"&&i&&typeof n=="string"?s=np(t,n):bg(s)&&typeof n=="string"?s=kg(n):!Array.isArray(n)&&bg(n)&&typeof s=="string"&&(n=kg(s)),Array.isArray(n)?FE(s,n):[s,n]}const rp=(e,t,n,r={})=>i=>{const s=k1(r,e)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-vr(o);const l=$E(t,e,n,s),u=l[0],c=l[l.length-1],d=sf(e,u),f=sf(e,c);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(VE(s)||(m={...m,...IE(e,m)}),m.duration&&(m.duration=vr(m.duration)),m.repeatDelay&&(m.repeatDelay=vr(m.repeatDelay)),!d||!f||V2.current||s.type===!1)return TE(m);if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=EE(t,e,m);if(v)return v}return bl(m)};function kl(e){return!!(Rt(e)&&e.add)}const zE=e=>/^\-?\d*\.?\d+$/.test(e),BE=e=>/^0[^.\s]+$/.test(e);function ip(e,t){e.indexOf(t)===-1&&e.push(t)}function sp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class op{constructor(){this.subscriptions=[]}add(t){return ip(this.subscriptions,t),()=>sp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const UE=e=>!isNaN(parseFloat(e));class WE{constructor(t,n={}){this.version="10.12.4",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=rt;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,Me.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Me.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=UE(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new op);const r=this.events[t].add(n);return t==="change"?()=>{r(),Me.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?_1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ts(e,t){return new WE(e,t)}const C1=e=>t=>t.test(e),HE={test:e=>e==="auto",parse:e=>e},P1=[ui,se,_n,Qn,GP,KP,HE],vs=e=>P1.find(C1(e)),QE=[...P1,vt,br],ZE=e=>QE.find(C1(e));function qE(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ts(n))}function KE(e,t){const n=Du(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=c2(s[o]);qE(e,o,a)}}function GE(e,t,n){var r,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(zE(c)||BE(c))?c=parseFloat(c):!ZE(c)&&br.test(u)&&(c=np(l,u)),e.addValue(l,ts(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function YE(e,t){return t?(t[e]||t.default||t).from:void 0}function XE(e,t,n){const r={};for(const i in e){const s=YE(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function JE({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function E1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d),m=a[d];if(!f||m===void 0||c&&JE(c,d))continue;const v={delay:n,elapsed:0,...s};if(window.HandoffAppearAnimations&&!f.hasAnimated){const _=e.getProps()[L2];_&&(v.elapsed=window.HandoffAppearAnimations(_,d,f,Me))}f.start(rp(d,f,m,e.shouldReduceMotion&&li.has(d)?{type:!1}:v));const x=f.animation;kl(l)&&(l.add(d),x.then(()=>l.remove(d))),u.push(x)}return o&&Promise.all(u).then(()=>{o&&KE(e,o)}),u}function af(e,t,n={}){const r=Du(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(E1(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=i;return eT(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function eT(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(tT).forEach((u,c)=>{u.notify("AnimationStart",t),o.push(af(u,t,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function tT(e,t){return e.sortNodePosition(t)}function nT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>af(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=af(e,t,n);else{const i=typeof t=="function"?Du(e,t,n.custom):t;r=Promise.all(E1(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const rT=[...Fh].reverse(),iT=Fh.length;function sT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>nT(e,n,r)))}function oT(e){let t=sT(e);const n=lT();let r=!0;const i=(l,u)=>{const c=Du(e,u);if(c){const{transition:d,transitionEnd:f,...m}=c;l={...l,...m,...f}}return l};function s(l){t=l(e)}function o(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],m=new Set;let v={},x=1/0;for(let y=0;y<iT;y++){const h=rT[y],g=n[h],w=c[h]!==void 0?c[h]:d[h],k=po(w),R=h===u?g.isActive:null;R===!1&&(x=y);let N=w===d[h]&&w!==c[h]&&k;if(N&&r&&e.manuallyAnimateOnMount&&(N=!1),g.protectedKeys={...v},!g.isActive&&R===null||!w&&!g.prevProp||Nu(w)||typeof w=="boolean")continue;const E=aT(g.prevProp,w);let L=E||h===u&&g.isActive&&!N&&k||y>x&&k;const $=Array.isArray(w)?w:[w];let oe=$.reduce(i,{});R===!1&&(oe={});const{prevResolvedValues:G={}}=g,q={...G,...oe},J=re=>{L=!0,m.delete(re),g.needsAnimating[re]=!0};for(const re in q){const Se=oe[re],ve=G[re];v.hasOwnProperty(re)||(Se!==ve?wl(Se)&&wl(ve)?!Yx(Se,ve)||E?J(re):g.protectedKeys[re]=!0:Se!==void 0?J(re):m.add(re):Se!==void 0&&m.has(re)?J(re):g.protectedKeys[re]=!0)}g.prevProp=w,g.prevResolvedValues=oe,g.isActive&&(v={...v,...oe}),r&&e.blockInitialAnimation&&(L=!1),L&&!N&&f.push(...$.map(re=>({animation:re,options:{type:h,...l}})))}if(m.size){const y={};m.forEach(h=>{const g=e.getBaseTarget(h);g!==void 0&&(y[h]=g)}),f.push({animation:y})}let _=!!f.length;return r&&c.initial===!1&&!e.manuallyAnimateOnMount&&(_=!1),r=!1,_?t(f):Promise.resolve()}function a(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var v;return(v=m.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=o(c,l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function aT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Yx(t,e):!1}function Ir(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lT(){return{animate:Ir(!0),whileInView:Ir(),whileHover:Ir(),whileTap:Ir(),whileDrag:Ir(),whileFocus:Ir(),exit:Ir()}}class uT extends Or{constructor(t){super(t),t.animationState||(t.animationState=oT(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Nu(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let cT=0;class dT extends Or{constructor(){super(...arguments),this.id=cT++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const fT={animation:{Feature:uT},exit:{Feature:dT}},Cg=(e,t)=>Math.abs(e-t);function hT(e,t){const n=Cg(e.x,t.x),r=Cg(e.y,t.y);return Math.sqrt(n**2+r**2)}class T1{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Ic(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=hT(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:m}=rt;this.history.push({...f,timestamp:m});const{onStart:v,onMove:x}=this.handlers;c||(v&&v(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=Ac(c,this.transformPagePoint),Me.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:d,onSessionEnd:f}=this.handlers,m=Ic(u.type==="pointercancel"?this.lastMoveEventInfo:Ac(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,m),f&&f(u,m)},!Hx(t))return;this.handlers=n,this.transformPagePoint=r;const i=Au(t),s=Ac(i,this.transformPagePoint),{point:o}=s,{timestamp:a}=rt;this.history=[{...o,timestamp:a}];const{onSessionStart:l}=n;l&&l(t,Ic(s,this.history)),this.removeListeners=yr(An(window,"pointermove",this.handlePointerMove),An(window,"pointerup",this.handlePointerUp),An(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$n(this.updatePoint)}}function Ac(e,t){return t?{point:t(e.point)}:e}function Pg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ic({point:e},t){return{point:e,delta:Pg(e,N1(t)),offset:Pg(e,pT(t)),velocity:mT(t,.1)}}function pT(e){return e[0]}function N1(e){return e[e.length-1]}function mT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=N1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>vr(t)));)n--;if(!r)return{x:0,y:0};const s=In(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function jt(e){return e.max-e.min}function lf(e,t=0,n=.01){return Math.abs(e-t)<=n}function Eg(e,t,n,r=.5){e.origin=r,e.originPoint=Ve(t.min,t.max,e.origin),e.scale=jt(n)/jt(t),(lf(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Ve(n.min,n.max,e.origin)-e.originPoint,(lf(e.translate)||isNaN(e.translate))&&(e.translate=0)}function zs(e,t,n,r){Eg(e.x,t.x,n.x,r?r.originX:void 0),Eg(e.y,t.y,n.y,r?r.originY:void 0)}function Tg(e,t,n){e.min=n.min+t.min,e.max=e.min+jt(t)}function gT(e,t,n){Tg(e.x,t.x,n.x),Tg(e.y,t.y,n.y)}function Ng(e,t,n){e.min=t.min-n.min,e.max=e.min+jt(t)}function Bs(e,t,n){Ng(e.x,t.x,n.x),Ng(e.y,t.y,n.y)}function yT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ve(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ve(n,e,r.max):Math.min(e,n)),e}function Og(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function vT(e,{top:t,left:n,bottom:r,right:i}){return{x:Og(e.x,n,i),y:Og(e.y,t,r)}}function Rg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function xT(e,t){return{x:Rg(e.x,t.x),y:Rg(e.y,t.y)}}function wT(e,t){let n=.5;const r=jt(e),i=jt(t);return i>r?n=yo(t.min,t.max-r,e.min):r>i&&(n=yo(e.min,e.max-i,t.min)),ti(0,1,n)}function _T(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const uf=.35;function ST(e=uf){return e===!1?e=0:e===!0&&(e=uf),{x:Ag(e,"left","right"),y:Ag(e,"top","bottom")}}function Ag(e,t,n){return{min:Ig(e,t),max:Ig(e,n)}}function Ig(e,t){return typeof e=="number"?e:e[t]||0}const Dg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Us=()=>({x:Dg(),y:Dg()}),Mg=()=>({min:0,max:0}),We=()=>({x:Mg(),y:Mg()});function mn(e){return[e("x"),e("y")]}function O1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function bT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function kT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Dc(e){return e===void 0||e===1}function cf({scale:e,scaleX:t,scaleY:n}){return!Dc(e)||!Dc(t)||!Dc(n)}function jr(e){return cf(e)||R1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function R1(e){return Lg(e.x)||Lg(e.y)}function Lg(e){return e&&e!=="0%"}function Cl(e,t,n){const r=e-n,i=t*r;return n+i}function jg(e,t,n,r,i){return i!==void 0&&(e=Cl(e,i,r)),Cl(e,n,r)+t}function df(e,t=0,n=1,r,i){e.min=jg(e.min,t,n,r,i),e.max=jg(e.max,t,n,r,i)}function A1(e,{x:t,y:n}){df(e.x,t.translate,t.scale,t.originPoint),df(e.y,n.translate,n.scale,n.originPoint)}function CT(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ri(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,A1(e,o)),r&&jr(s.latestValues)&&Ri(e,s.latestValues))}t.x=Vg(t.x),t.y=Vg(t.y)}function Vg(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Kn(e,t){e.min=e.min+t,e.max=e.max+t}function Fg(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=Ve(e.min,e.max,s);df(e,t[n],t[r],o,t.scale)}const PT=["x","scaleX","originX"],ET=["y","scaleY","originY"];function Ri(e,t){Fg(e.x,t,PT),Fg(e.y,t,ET)}function I1(e,t){return O1(kT(e.getBoundingClientRect(),t))}function TT(e,t,n){const r=I1(e,n),{scroll:i}=t;return i&&(Kn(r.x,i.offset.x),Kn(r.y,i.offset.y)),r}const NT=new WeakMap;class OT{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=l=>{this.stopAnimation(),n&&this.snapToCursor(Au(l,"page").point)},s=(l,u)=>{const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();if(c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Zx(c),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mn(v=>{let x=this.getAxisMotionValue(v).get()||0;if(_n.test(x)){const{projection:_}=this.visualElement;if(_&&_.layout){const y=_.layout.layoutBox[v];y&&(x=jt(y)*(parseFloat(x)/100))}}this.originPoint[v]=x}),f&&Me.update(()=>f(l,u),!1,!0);const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},o=(l,u)=>{const{dragPropagation:c,dragDirectionLock:d,onDirectionLock:f,onDrag:m}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:v}=u;if(d&&this.currentDirection===null){this.currentDirection=RT(v),this.currentDirection!==null&&f&&f(this.currentDirection);return}this.updateAxis("x",u.point,v),this.updateAxis("y",u.point,v),this.visualElement.render(),m&&m(l,u)},a=(l,u)=>this.stop(l,u);this.panSession=new T1(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Me.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ma(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=yT(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&Ni(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=vT(r.layoutBox,t):this.constraints=!1,this.elastic=ST(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&mn(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=_T(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ni(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=TT(r,i.root,this.visualElement.getTransformPagePoint());let o=xT(i.layout.layoutBox,s);if(n){const a=n(bT(o));this.hasMutatedConstraints=!!a,a&&(o=O1(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=mn(c=>{if(!ma(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const f=i?200:1e6,m=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(rp(t,r,0,n))}stopAnimation(){mn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){mn(n=>{const{drag:r}=this.getProps();if(!ma(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-Ve(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ni(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};mn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=wT({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),mn(o=>{if(!ma(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(Ve(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;NT.set(this.visualElement,this);const t=this.visualElement.current,n=An(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ni(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=On(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(mn(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=uf,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ma(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function RT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class AT extends Or{constructor(t){super(t),this.removeGroupControls=Ge,this.removeListeners=Ge,this.controls=new OT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ge}unmount(){this.removeGroupControls(),this.removeListeners()}}const $g=e=>(t,n)=>{e&&Me.update(()=>e(t,n))};class IT extends Or{constructor(){super(...arguments),this.removePointerDownListener=Ge}onPointerDown(t){this.session=new T1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:$g(t),onStart:$g(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Me.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=An(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function DT(){const e=b.useContext(Eu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}function zg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const xs={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(se.test(e))e=parseFloat(e);else return e;const n=zg(e,t.target.x),r=zg(e,t.target.y);return`${n}% ${r}%`}},MT={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=br.parse(e);if(i.length>5)return r;const s=br.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=Ve(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class LT extends pt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;BP(jT),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Vs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||Me.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function D1(e){const[t,n]=DT(),r=b.useContext(Bh);return pt.createElement(LT,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Rx),isPresent:t,safeToRemove:n})}const jT={borderRadius:{...xs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xs,borderTopRightRadius:xs,borderBottomLeftRadius:xs,borderBottomRightRadius:xs,boxShadow:MT},M1=["TopLeft","TopRight","BottomLeft","BottomRight"],VT=M1.length,Bg=e=>typeof e=="string"?parseFloat(e):e,Ug=e=>typeof e=="number"||se.test(e);function FT(e,t,n,r,i,s){i?(e.opacity=Ve(0,n.opacity!==void 0?n.opacity:1,$T(r)),e.opacityExit=Ve(t.opacity!==void 0?t.opacity:1,0,zT(r))):s&&(e.opacity=Ve(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<VT;o++){const a=`border${M1[o]}Radius`;let l=Wg(t,a),u=Wg(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Ug(l)===Ug(u)?(e[a]=Math.max(Ve(Bg(l),Bg(u),r),0),(_n.test(u)||_n.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Ve(t.rotate||0,n.rotate||0,r))}function Wg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const $T=L1(0,.5,Xh),zT=L1(.5,.95,Ge);function L1(e,t,n){return r=>r<e?0:r>t?1:n(yo(e,t,r))}function Hg(e,t){e.min=t.min,e.max=t.max}function Bt(e,t){Hg(e.x,t.x),Hg(e.y,t.y)}function Qg(e,t,n,r,i){return e-=t,e=Cl(e,1/n,r),i!==void 0&&(e=Cl(e,1/i,r)),e}function BT(e,t=0,n=1,r=.5,i,s=e,o=e){if(_n.test(t)&&(t=parseFloat(t),t=Ve(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Ve(s.min,s.max,r);e===s&&(a-=t),e.min=Qg(e.min,t,n,a,i),e.max=Qg(e.max,t,n,a,i)}function Zg(e,t,[n,r,i],s,o){BT(e,t[n],t[r],t[i],t.scale,s,o)}const UT=["x","scaleX","originX"],WT=["y","scaleY","originY"];function qg(e,t,n,r){Zg(e.x,t,UT,n?n.x:void 0,r?r.x:void 0),Zg(e.y,t,WT,n?n.y:void 0,r?r.y:void 0)}function Kg(e){return e.translate===0&&e.scale===1}function j1(e){return Kg(e.x)&&Kg(e.y)}function ff(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Gg(e){return jt(e.x)/jt(e.y)}class HT{constructor(){this.members=[]}add(t){ip(this.members,t),t.scheduleRender()}remove(t){if(sp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Yg(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const QT=(e,t)=>e.depth-t.depth;class ZT{constructor(){this.children=[],this.isDirty=!1}add(t){ip(this.children,t),this.isDirty=!0}remove(t){sp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(QT),this.isDirty=!1,this.children.forEach(t)}}function qT(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&($n(r),e(s-t))};return Me.read(r,!0),()=>$n(r)}function KT(e){window.MotionDebug&&window.MotionDebug.record(e)}function GT(e){return e instanceof SVGElement&&e.tagName!=="svg"}function YT(e,t,n){const r=Rt(e)?e:ts(e);return r.start(rp("",r,t,n)),r.animation}const Xg=["","X","Y","Z"],Jg=1e3;let XT=0;const Vr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function V1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o,a={},l=t==null?void 0:t()){this.id=XT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{Vr.totalNodes=Vr.resolvedTargetDeltas=Vr.recalculatedProjection=0,this.nodes.forEach(tN),this.nodes.forEach(sN),this.nodes.forEach(oN),this.nodes.forEach(nN),KT(Vr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=o,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,o&&this.root.registerPotentialNode(o,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new ZT)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new op),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}registerPotentialNode(o,a){this.potentialNodes.set(o,a)}mount(o,a=!1){if(this.instance)return;this.isSVG=GT(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=qT(f,250),Vs.hasAnimatedSinceResize&&(Vs.hasAnimatedSinceResize=!1,this.nodes.forEach(ty))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||dN,{onLayoutAnimationStart:_,onLayoutAnimationComplete:y}=c.getProps(),h=!this.targetLayout||!ff(this.targetLayout,v)||m,g=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const w={...k1(x,"layout"),onPlay:_,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else!f&&this.animationProgress===0&&ty(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$n(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(aN),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ey);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(fN),this.potentialNodes.clear()),this.nodes.forEach(iN),this.nodes.forEach(JT),this.nodes.forEach(eN),this.clearAllSnapshots(),zi.update.process(rt),zi.preRender.process(rt),zi.render.process(rt))}clearAllSnapshots(){this.nodes.forEach(rN),this.sharedNodes.forEach(lN)}scheduleUpdateProjection(){Me.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!j1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||jr(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),hN(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return We();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Kn(a.x,l.offset.x),Kn(a.y,l.offset.y)),a}removeElementScroll(o){const a=We();Bt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Bt(a,o);const{scroll:f}=this.root;f&&(Kn(a.x,-f.offset.x),Kn(a.y,-f.offset.y))}Kn(a.x,c.offset.x),Kn(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=We();Bt(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ri(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),jr(c.latestValues)&&Ri(l,c.latestValues)}return jr(this.latestValues)&&Ri(l,this.latestValues),l}removeTransform(o){const a=We();Bt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!jr(u.latestValues))continue;cf(u.latestValues)&&u.updateSnapshot();const c=We(),d=u.measurePageBox();Bt(c,d),qg(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return jr(this.latestValues)&&qg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==rt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=rt.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Bs(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),Bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Bt(this.target,this.layout.layoutBox),A1(this.target,this.targetDelta)):Bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Bs(this.relativeTargetOrigin,this.target,m.target),Bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||cf(this.parent.latestValues)||R1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===rt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Bt(this.layoutCorrected,this.layout.layoutBox),CT(this.layoutCorrected,this.treeScale,this.path,l);const{target:f}=a;if(!f)return;this.projectionDelta||(this.projectionDelta=Us(),this.projectionDeltaWithTransform=Us());const m=this.treeScale.x,v=this.treeScale.y,x=this.projectionTransform;zs(this.projectionDelta,this.layoutCorrected,f,this.latestValues),this.projectionTransform=Yg(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==m||this.treeScale.y!==v)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f)),Vr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Us();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=We(),m=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=m!==v,_=this.getStack(),y=!_||_.members.length<=1,h=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(cN));this.animationProgress=0;let g;this.mixTargetDelta=w=>{const k=w/1e3;ny(d.x,o.x,k),ny(d.y,o.y,k),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bs(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),uN(this.relativeTarget,this.relativeTargetOrigin,f,k),g&&ff(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=We()),Bt(g,this.relativeTarget)),x&&(this.animationValues=c,FT(c,u,this.latestValues,k,h,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($n(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Me.update(()=>{Vs.hasAnimatedSinceResize=!0,this.currentAnimation=YT(0,Jg,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Jg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&F1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||We();const d=jt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=jt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Bt(a,l),Ri(a,c),zs(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new HT),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Xg.length;c++){const d="rotate"+Xg[c];l[d]&&(u[d]=l[d],o.setStaticValue(d,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o={}){var a,l;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Oa(o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Oa(o.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Yg(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:m,y:v}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in vl){if(f[x]===void 0)continue;const{correct:_,applyTo:y}=vl[x],h=u.transform==="none"?f[x]:_(f[x],d);if(y){const g=y.length;for(let w=0;w<g;w++)u[y[w]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=d===this?Oa(o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ey),this.root.sharedNodes.clear()}}}function JT(e){e.updateLayout()}function eN(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?mn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],m=jt(f);f.min=r[d].min,f.max=f.min+m}):F1(s,n.layoutBox,r)&&mn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],m=jt(r[d]);f.max=f.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+m)});const a=Us();zs(a,r,n.layoutBox);const l=Us();o?zs(l,e.applyTransform(i,!0),n.measuredBox):zs(l,r,n.layoutBox);const u=!j1(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:m}=d;if(f&&m){const v=We();Bs(v,n.layoutBox,f.layoutBox);const x=We();Bs(x,r,m.layoutBox),ff(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function tN(e){Vr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nN(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function rN(e){e.clearSnapshot()}function ey(e){e.clearMeasurements()}function iN(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ty(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function sN(e){e.resolveTargetDelta()}function oN(e){e.calcProjection()}function aN(e){e.resetRotation()}function lN(e){e.removeLeadSnapshot()}function ny(e,t,n){e.translate=Ve(t.translate,0,n),e.scale=Ve(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ry(e,t,n,r){e.min=Ve(t.min,n.min,r),e.max=Ve(t.max,n.max,r)}function uN(e,t,n,r){ry(e.x,t.x,n.x,r),ry(e.y,t.y,n.y,r)}function cN(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const dN={duration:.45,ease:[.4,0,.1,1]};function fN(e,t){let n=e.root;for(let s=e.path.length-1;s>=0;s--)if(e.path[s].instance){n=e.path[s];break}const i=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);i&&e.mount(i,!0)}function iy(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function hN(e){iy(e.x),iy(e.y)}function F1(e,t,n){return e==="position"||e==="preserve-aspect"&&!lf(Gg(t),Gg(n),.2)}const pN=V1({attachResizeListener:(e,t)=>On(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Mc={current:void 0},$1=V1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Mc.current){const e=new pN(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Mc.current=e}return Mc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),mN={pan:{Feature:IT},drag:{Feature:AT,ProjectionNode:$1,MeasureLayout:D1}},gN=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function yN(e){const t=gN.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function hf(e,t,n=1){const[r,i]=yN(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);return s?s.trim():Jd(i)?hf(i,t,n+1):i}function vN(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!Jd(s))return;const o=hf(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!Jd(s))continue;const o=hf(s,r);o&&(t[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const xN=new Set(["width","height","top","left","right","bottom","x","y"]),z1=e=>xN.has(e),wN=e=>Object.keys(e).some(z1),sy=e=>e===ui||e===se,oy=(e,t)=>parseFloat(e.split(", ")[t]),ay=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return oy(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?oy(s[1],e):0}},_N=new Set(["x","y","z"]),SN=$o.filter(e=>!_N.has(e));function bN(e){const t=[];return SN.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ly={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ay(4,13),y:ay(5,14)},kN=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=ly[u](r,s)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=ly[u](l,s)}),e},CN=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(z1);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=vs(c);const f=t[l];let m;if(wl(f)){const v=f.length,x=f[0]===null?1:0;c=f[x],d=vs(c);for(let _=x;_<v&&f[_]!==null;_++)m?Yh(vs(f[_])===m):m=vs(f[_])}else m=vs(f);if(d!==m)if(sy(d)&&sy(m)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&m===se&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(m!=null&&m.transform)&&(c===0||f===0)?c===0?u.set(m.transform(c)):t[l]=d.transform(f):(o||(s=bN(e),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=kN(t,e,a);return s.length&&s.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Tu&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function PN(e,t,n,r){return wN(t)?CN(e,t,n,r):{target:t,transitionEnd:r}}const EN=(e,t,n,r)=>{const i=vN(e,t,r);return t=i.target,r=i.transitionEnd,PN(e,t,n,r)},pf={current:null},B1={current:!1};function TN(){if(B1.current=!0,!!Tu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>pf.current=e.matches;e.addListener(t),t()}else pf.current=!1}function NN(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(Rt(s))e.addValue(i,s),kl(r)&&r.add(i);else if(Rt(o))e.addValue(i,ts(s,{owner:e})),kl(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,ts(a!==void 0?a:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const uy=new WeakMap,U1=Object.keys(mo),ON=U1.length,cy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],RN=$h.length;class AN{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Me.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Ou(n),this.isVariantNode=Ox(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const f=c[d];a[d]!==void 0&&Rt(f)&&(f.set(a[d],!1),kl(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,uy.set(t,this),this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),B1.current||TN(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:pf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){uy.delete(this.current),this.projection&&this.projection.unmount(),$n(this.notifyUpdate),$n(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=li.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Me.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s,o){let a,l;for(let u=0;u<ON;u++){const c=U1[u],{isEnabled:d,Feature:f,ProjectionNode:m,MeasureLayout:v}=mo[c];m&&(a=m),d(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),v&&(l=v))}if(!this.projection&&a){this.projection=new a(s,this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:d,dragConstraints:f,layoutScroll:m,layoutRoot:v}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!d||f&&Ni(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:m,layoutRoot:v})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update(this.props,this.prevProps):(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<cy.length;r++){const i=cy[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=NN(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<RN;r++){const i=$h[r],s=this.props[i];(po(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ts(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Gh(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Rt(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new op),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class W1 extends AN{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},s){let o=XE(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){GE(this,r,o);const a=EN(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function IN(e){return window.getComputedStyle(e)}class DN extends W1{readValueFromInstance(t,n){if(li.has(n)){const r=tp(n);return r&&r.default||0}else{const r=IN(t),i=(Dx(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return I1(t,n)}build(t,n,r,i){Wh(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Kh(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Rt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){$x(t,n,r,i)}}class MN extends W1{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(li.has(n)){const r=tp(n);return r&&r.default||0}return n=zx.has(n)?n:qh(n),t.getAttribute(n)}measureInstanceViewportBox(){return We()}scrapeMotionValuesFromProps(t,n){return Ux(t,n)}build(t,n,r,i){Qh(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Bx(t,n,r,i)}mount(t){this.isSVGTag=Zh(t.tagName),super.mount(t)}}const LN=(e,t)=>Uh(e)?new MN(t,{enableHardwareAcceleration:!1}):new DN(t,{enableHardwareAcceleration:!0}),jN={layout:{ProjectionNode:$1,MeasureLayout:D1}},VN={...fT,...A2,...mN,...jN},Je=$P((e,t)=>m2(e,t,VN,LN));function H1(){const e=b.useRef(!1);return yl(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function FN(){const e=H1(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>Me.postRender(r),[r]),t]}class $N extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function zN({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),b.createElement($N,{isPresent:t,childRef:r,sizeRef:i},b.cloneElement(e,{ref:r}))}const Lc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=zh(BN),l=b.useId(),u=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),s?void 0:[n]);return b.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),b.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=b.createElement(zN,{isPresent:n},e)),b.createElement(Eu.Provider,{value:u},e)};function BN(){return new Map}function UN(e){return b.useEffect(()=>()=>e(),[])}const pi=e=>e.key||"";function WN(e,t){e.forEach(n=>{const r=pi(n);t.set(r,n)})}function HN(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const mf=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{let[a]=FN();const l=b.useContext(Bh).forceRender;l&&(a=l);const u=H1(),c=HN(e);let d=c;const f=new Set,m=b.useRef(d),v=b.useRef(new Map).current,x=b.useRef(!0);if(yl(()=>{x.current=!1,WN(c,v),m.current=d}),UN(()=>{x.current=!0,v.clear(),f.clear()}),x.current)return b.createElement(b.Fragment,null,d.map(g=>b.createElement(Lc,{key:pi(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},g)));d=[...d];const _=m.current.map(pi),y=c.map(pi),h=_.length;for(let g=0;g<h;g++){const w=_[g];y.indexOf(w)===-1&&f.add(w)}return o==="wait"&&f.size&&(d=[]),f.forEach(g=>{if(y.indexOf(g)!==-1)return;const w=v.get(g);if(!w)return;const k=_.indexOf(g),R=()=>{v.delete(g),f.delete(g);const N=m.current.findIndex(E=>E.key===g);if(m.current.splice(N,1),!f.size){if(m.current=c,u.current===!1)return;a(),r&&r()}};d.splice(k,0,b.createElement(Lc,{key:pi(w),isPresent:!1,onExitComplete:R,custom:t,presenceAffectsLayout:s,mode:o},w))}),d=d.map(g=>{const w=g.key;return f.has(w)?g:b.createElement(Lc,{key:pi(g),isPresent:!0,presenceAffectsLayout:s,mode:o},g)}),b.createElement(b.Fragment,null,f.size?d:d.map(g=>b.cloneElement(g)))},QN="/organick/assets/burger-menu-svgrepo-com-43238a25.svg",ZN="/organick/assets/close-md-svgrepo-com-992749c3.svg",qN=de.div`
	display: none;
	padding: 15px 30px;
	position: relative;

	.burger-menu {
		border: none;
		background: none;
		outline: none;
		z-index: 10;
		cursor: pointer;
		z-index: 60;
	}

	.burger-menu__icon {
		width: 50px;
		height: 50px;
	}

	.menu {
		position: absolute;
		height: 100vh;
		width: 350px;
		background: #e0e0e0;
		top: 0;
		right: 0;
		z-index: 10;
	}

	.menu__list {
		margin-top: 80px;
		margin-left: 30px;
	}

	.list__item {
		font-family: 'Roboto-Medium';
		font-size: 28px;
		color: #274c5b;
		cursor: pointer;
		padding: 10px 0;
	}

	.item__link {
		color: #274c5b;
	}

	@media (max-width: 1024px) {
		display: block;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
		padding: 15px 15px;
	}

	@media (max-width: 425px) {
		.menu {
			width: 100%;
		}

		.menu__list {
			margin-left: 0px;

			text-align: center;
		}

		.burger-menu__icon {
			width: 45px;
			height: 45px;
		}

		.list__item {
			font-size: 32px;
			padding: 15px 0;
		}
	}

	@media (max-width: 375px) {
		.burger-menu__icon {
			width: 40px;
			height: 40px;
		}
	}
`,Q1="/organick/assets/organick-logo-830ea84a.svg",Z1=()=>T(KN,{children:[p("img",{className:"img-logo",src:Q1,alt:"organick-logo"}),p("h1",{className:"header-logo__text",children:"Organick"})]}),KN=de.div`
	display: flex;
	align-items: center;

	.img-logo {
		@media (max-width: 768px) {
			height: 50px;
			width: 100%;
		}
	}

	.header-logo__text {
		margin-left: 10px;
		font-size: 38px;
		color: #274c5b;
		font-family: 'Roboto-Bold';
		@media (max-width: 768px) {
			font-size: 34px;
		}
	}
`,GN=()=>{const[e,t]=b.useState(!1),n=Fo(),r=()=>{t(!1),n(gl())};return T(qN,{children:[p(mf,{children:T("button",{onClick:()=>t(!e),className:"burger-menu",children:[!e&&p(Je.img,{initial:{rotate:0,opacity:0},animate:{rotate:180,opacity:1},exit:{rotate:0,opacity:0},transition:{duration:.3},className:"burger-menu__icon",src:QN,alt:""}),e&&p(Je.img,{initial:{rotate:0,opacity:0},animate:{rotate:180,opacity:1},exit:{rotate:0,opacity:0},transition:{duration:.3},className:"burger-menu__icon",src:ZN,alt:""})]})}),p(Re,{to:"/",children:p(Z1,{})}),p(mf,{children:e&&p(Je.div,{initial:{x:400},animate:{x:0},exit:{x:400},transition:{duration:.2},className:"menu",children:T("ul",{className:"menu__list",children:[p("li",{className:"list__item",children:p(Re,{onClick:()=>t(!1),className:"item__link",to:"/",children:"Home"})}),p("li",{className:"list__item",children:p(Re,{onClick:()=>t(!1),className:"item__link",to:"/about",children:"About"})}),p("li",{className:"list__item",children:p(Re,{onClick:()=>t(!1),className:"item__link",to:"/shop",children:"Shop"})}),p("li",{className:"list__item",children:p(Re,{onClick:()=>t(!1),className:"item__link",to:"/news",children:"News"})}),p("li",{className:"list__item",children:p(Re,{onClick:()=>t(!1),className:"item__link",to:"/contact",children:"Contact"})}),p("li",{onClick:r,className:"list__item",children:"Cart"})]})})})]})},YN="/organick/assets/cart-icon-6104136e.svg",XN=()=>{const[e,t]=b.useState(!1),n=Fo(),i=Rh(s=>s.cart.items).reduce((s,o)=>s+o.itemAmount,0);return b.useEffect(()=>{t(!0),setTimeout(()=>{t(!1)},100)},[i]),T(JN,{whileHover:{scale:1.05},initial:{scale:1},animate:{scale:e?1.15:1},transition:{duration:.4,type:"spring"},onClick:()=>n(gl()),className:"cart__btn",children:[p("img",{className:"img-cart",src:YN,alt:"cart-icon"}),T("span",{className:"btn__text",children:["Cart (",i,")"]})]})},JN=de(Je.button)`
	width: 160px;
	height: 65px;
	border-radius: 35px;
	background: transparent;
	border: 1px solid #e0e0e0;
	display: flex;
	align-items: center;
	padding: 5px;
	cursor: pointer;

	.img-cart {
		height: 100%;
	}

	@media (max-width: 1024px) {
		margin-right: 50px;
		width: 140px;
		height: 55px;
	}

	@media (max-width: 768px) {
		display: none;
	}

	.btn__text {
		font-family: 'Roboto-Medium';
		font-size: 18px;
		color: #274c5b;
		margin-left: 10px;
	}
`,eO=()=>T(Nf,{children:[p(GN,{}),T(aC,{children:[T("div",{className:"menu",children:[p(Re,{to:"/",className:"menu__header-logo",children:p(Z1,{})}),p("nav",{className:"menu__navbar",children:T("ul",{className:"navbar__list",children:[p("li",{className:"list__item",children:p(Re,{className:"item__link",to:"/",children:"Home"})}),p("li",{className:"list__item",children:p(Re,{className:"item__link",to:"/about",children:"About"})}),p("li",{className:"list__item",children:p(Re,{className:"item__link",to:"/shop",children:"Shop"})}),p("li",{className:"list__item",children:p(Re,{className:"item__link",to:"/news",children:"News"})}),p("li",{className:"list__item",children:p(Re,{className:"item__link",to:"/contact",children:"Contact"})})]})})]}),p("div",{className:"actions",children:p("div",{className:"actions__cart",children:p(XN,{})})})]})]}),tO="/organick/assets/homepageTopBanner-5786c8f0.jpg",nO=de.div`
	width: 100%;
	min-height: 900px;
	background: url(${tO});
	display: flex;
	align-items: center;
	padding-left: 260px;

	.title__main-text {
		font-family: 'Roboto-Bold';
		font-size: 70px;
		max-width: 530px;
		color: #274c5b;
		margin: 10px 0 10px;
	}

	@media (max-width: 1440px) {
		padding-left: 200px;
	}

	@media (max-width: 1024px) {
		padding-left: 100px;
		min-height: 750px;
	}

	@media (max-width: 768px) {
		padding: 0 40px;
		min-height: 600px;
		justify-content: center;

		.heading {
			text-align: center;
		}

		.link-btn {
			display: flex;
			justify-content: center;
		}

		.title__main-text {
			font-size: 54px;
			text-align: center;
			margin: 0 0 20px;
		}
	}

	@media (max-width: 425px) {
		min-height: 500px;
		padding: 0 15px;

		.title__main-text {
			font-size: 46px;
		}
	}

	@media (max-width: 375px) {
		.title__main-text {
			font-size: 42px;
		}
	}
`,rO="/organick/assets/btn-arrow-icon-fbefe7b3.svg",Rr=e=>{const{children:t,backgroundColor:n,textColor:r,padding:i,border:s,onClick:o}=e;return T(iO,{whileTap:{scale:.9},whileHover:{scale:1.05},backgroundColor:n,textColor:r,padding:i,border:s,onClick:o,children:[t,p("img",{className:"btn__arrow-icon",src:rO,alt:""})]})},iO=de(Je.button).attrs(e=>({backgroundColor:e.backgroundColor,textColor:e.textColor,padding:e.padding,border:e.border}))`
	padding: ${e=>e.padding?e.padding:"10px 10px"};
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto-Bold';
	font-weight: 700;
	font-size: 20px;
	color: ${e=>e.textColor};
	background: ${e=>e.backgroundColor};
	border: ${e=>e.border?e.border:"none"};
	border-radius: 15px;
	cursor: pointer;

	@media (max-width: 1024px) {
		padding: 25px 20px;
	}

	@media (max-width: 425px) {
		padding: 25px 20px;
		font-size: 16px;
	}

	.btn__arrow-icon {
		margin-left: 10px;
	}
`,Xt=de.h2`
	font-family: 'Yellowtail';
	font-weight: 400;
	font-size: 36px;
	color: #7eb693;

	@media (max-width: 1440px) {
		font-size: 32px;
	}

	@media (max-width: 768px) {
		font-size: 28px;
	}
`,sO=()=>p(nO,{children:T("div",{className:"title",children:[p(Xt,{className:"heading",children:"100% Natural Food"}),T("h1",{className:"title__main-text",children:["Choose the best healthier way ",p("br",{})," of life"]}),p(Re,{to:"/about",className:"link-btn",children:p(Rr,{padding:"30px 40px",backgroundColor:"#EFD372",textColor:"#274C5B",children:"Explore Now"})})]})}),oO=de(Je.div)`
	display: flex;
	justify-content: center;
	margin: 120px 0;
	gap: 30px;
	flex-wrap: wrap;
	padding: 0 50px;

	@media (max-width: 768px) {
		margin: 60px 0;
		flex-direction: column;
		padding: 0 30px;
	}

	@media (max-width: 425px) {
		margin: 60px 0;
		flex-direction: column;
		padding: 0 15px;
	}
`,aO=de.div.attrs(e=>({backgroundImage:e.backgroundImage,titleColor:e.titleColor,textColor:e.textColor}))`
	background: url(${e=>e.backgroundImage}) no-repeat center
		center/cover;
	height: 360px;
	width: 660px;
	padding-left: 50px;
	display: flex;
	align-items: center;
	border-radius: 30px;

	.content__heading {
		color: ${e=>e.titleColor};
		font-family: 'Yellowtail';
		font-weight: 400;
		font-size: 36px;
	}

	.content__description {
		font-family: 'Roboto-Bold';
		font-size: 40px;
		max-width: 260px;
		color: ${e=>e.textColor};
	}
	@media (max-width: 1440px) {
		width: 550px;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 30px;
		height: 300px;
	}

	@media (max-width: 425px) {
		width: 100%;
		padding: 20px;
		height: 300px;
	}
`,lO=({img:e,title:t,titleColor:n,text:r,textColor:i})=>p(Re,{to:"/shop",children:p(aO,{backgroundImage:e,titleColor:n,textColor:i,children:T("div",{className:"content",children:[p("h3",{className:"content__heading",children:t}),p("p",{className:"content__description",children:r})]})})});class Wo{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const vo=typeof window>"u"||"Deno"in window;function Ut(){}function uO(e,t){return typeof e=="function"?e(t):e}function gf(e){return typeof e=="number"&&e>=0&&e!==1/0}function q1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Es(e,t,n){return Mu(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function Gn(e,t,n){return Mu(e)?[{...t,queryKey:e},n]:[e||{},t]}function dy(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=e;if(Mu(o)){if(r){if(t.queryHash!==ap(o,t.options))return!1}else if(!Pl(t.queryKey,o))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||typeof i<"u"&&i!==t.state.fetchStatus||s&&!s(t))}function fy(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:s}=e;if(Mu(s)){if(!t.options.mutationKey)return!1;if(n){if(Wr(t.options.mutationKey)!==Wr(s))return!1}else if(!Pl(t.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function ap(e,t){return((t==null?void 0:t.queryKeyHashFn)||Wr)(e)}function Wr(e){return JSON.stringify(e,(t,n)=>yf(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Pl(e,t){return K1(e,t)}function K1(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!K1(e[n],t[n])):!1}function G1(e,t){if(e===t)return e;const n=py(e)&&py(t);if(n||yf(e)&&yf(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),s=i.length,o=n?[]:{};let a=0;for(let l=0;l<s;l++){const u=n?l:i[l];o[u]=G1(e[u],t[u]),o[u]===e[u]&&a++}return r===s&&a===r?e:o}return t}function hy(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function py(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function yf(e){if(!my(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!my(n)||!n.hasOwnProperty("isPrototypeOf"))}function my(e){return Object.prototype.toString.call(e)==="[object Object]"}function Mu(e){return Array.isArray(e)}function Y1(e){return new Promise(t=>{setTimeout(t,e)})}function gy(e){Y1(0).then(e)}function cO(){if(typeof AbortController=="function")return new AbortController}function vf(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?G1(e,t):t}class dO extends Wo{constructor(){super(),this.setup=t=>{if(!vo&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const El=new dO;class fO extends Wo{constructor(){super(),this.setup=t=>{if(!vo&&window.addEventListener){const n=()=>t();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const Tl=new fO;function hO(e){return Math.min(1e3*2**e,3e4)}function Lu(e){return(e??"online")==="online"?Tl.isOnline():!0}class X1{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function Ra(e){return e instanceof X1}function J1(e){let t=!1,n=0,r=!1,i,s,o;const a=new Promise((_,y)=>{s=_,o=y}),l=_=>{r||(m(new X1(_)),e.abort==null||e.abort())},u=()=>{t=!0},c=()=>{t=!1},d=()=>!El.isFocused()||e.networkMode!=="always"&&!Tl.isOnline(),f=_=>{r||(r=!0,e.onSuccess==null||e.onSuccess(_),i==null||i(),s(_))},m=_=>{r||(r=!0,e.onError==null||e.onError(_),i==null||i(),o(_))},v=()=>new Promise(_=>{i=y=>{const h=r||!d();return h&&_(y),h},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),x=()=>{if(r)return;let _;try{_=e.fn()}catch(y){_=Promise.reject(y)}Promise.resolve(_).then(f).catch(y=>{var h,g;if(r)return;const w=(h=e.retry)!=null?h:3,k=(g=e.retryDelay)!=null?g:hO,R=typeof k=="function"?k(n,y):k,N=w===!0||typeof w=="number"&&n<w||typeof w=="function"&&w(n,y);if(t||!N){m(y);return}n++,e.onFail==null||e.onFail(n,y),Y1(R).then(()=>{if(d())return v()}).then(()=>{t?m(y):x()})})};return Lu(e.networkMode)?x():v().then(x),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:u,continueRetry:c}}const lp=console;function pO(){let e=[],t=0,n=c=>{c()},r=c=>{c()};const i=c=>{let d;t++;try{d=c()}finally{t--,t||a()}return d},s=c=>{t?e.push(c):gy(()=>{n(c)})},o=c=>(...d)=>{s(()=>{c(...d)})},a=()=>{const c=e;e=[],c.length&&gy(()=>{r(()=>{c.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:o,schedule:s,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Qe=pO();class ew{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),gf(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(vo?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class mO extends ew{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||lp,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||gO(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=vf(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(Ut).catch(Ut):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!q1(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var s;return(s=this.retryer)==null||s.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const m=this.observers.find(v=>v.options.queryFn);m&&this.setOptions(m.options)}Array.isArray(this.options.queryKey);const o=cO(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(a);const u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};if(l(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta})}const f=m=>{if(Ra(m)&&m.silent||this.dispatch({type:"error",error:m}),!Ra(m)){var v,x,_,y;(v=(x=this.cache.config).onError)==null||v.call(x,m,this),(_=(y=this.cache.config).onSettled)==null||_.call(y,this.state.data,m,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=J1({fn:c.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:m=>{var v,x,_,y;if(typeof m>"u"){f(new Error("undefined"));return}this.setData(m),(v=(x=this.cache.config).onSuccess)==null||v.call(x,m,this),(_=(y=this.cache.config).onSettled)==null||_.call(y,m,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:f,onFail:(m,v)=>{this.dispatch({type:"failed",failureCount:m,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,s;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:Lu(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=t.dataUpdatedAt)!=null?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Ra(o)&&o.revert&&this.revertState?{...this.revertState}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Qe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function gO(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class yO extends Wo{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const s=n.queryKey,o=(i=n.queryHash)!=null?i:ap(s,n);let a=this.get(o);return a||(a=new mO({cache:this,logger:t.getLogger(),queryKey:s,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(s)}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){Qe.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Gn(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>dy(r,i))}findAll(t,n){const[r]=Gn(t,n);return Object.keys(r).length>0?this.queries.filter(i=>dy(r,i)):this.queries}notify(t){Qe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Qe.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){Qe.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class vO extends ew{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||lp,this.observers=[],this.state=t.state||xO(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var N;return this.retryer=J1({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(E,L)=>{this.dispatch({type:"failed",failureCount:E,error:L})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(N=this.options.retry)!=null?N:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,s,o,a,l,u,c;if(!n){var d,f,m,v;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(f=this.mutationCache.config).onMutate)==null?void 0:d.call(f,this.state.variables,this));const E=await((m=(v=this.options).onMutate)==null?void 0:m.call(v,this.state.variables));E!==this.state.context&&this.dispatch({type:"loading",context:E,variables:this.state.variables})}const N=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,N,this.state.variables,this.state.context,this)),await((s=(o=this.options).onSuccess)==null?void 0:s.call(o,N,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,N,null,this.state.variables,this.state.context,this)),await((u=(c=this.options).onSettled)==null?void 0:u.call(c,N,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:N}),N}catch(N){try{var x,_,y,h,g,w,k,R;throw await((x=(_=this.mutationCache.config).onError)==null?void 0:x.call(_,N,this.state.variables,this.state.context,this)),await((y=(h=this.options).onError)==null?void 0:y.call(h,N,this.state.variables,this.state.context)),await((g=(w=this.mutationCache.config).onSettled)==null?void 0:g.call(w,void 0,N,this.state.variables,this.state.context,this)),await((k=(R=this.options).onSettled)==null?void 0:k.call(R,void 0,N,this.state.variables,this.state.context)),N}finally{this.dispatch({type:"error",error:N})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Lu(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),Qe.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function xO(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class wO extends Wo{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new vO({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){Qe.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>fy(t,n))}findAll(t){return this.mutations.filter(n=>fy(t,n))}notify(t){Qe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Qe.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(Ut)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function _O(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,s,o;const a=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,l=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,u=l==null?void 0:l.pageParam,c=(l==null?void 0:l.direction)==="forward",d=(l==null?void 0:l.direction)==="backward",f=((s=e.state.data)==null?void 0:s.pages)||[],m=((o=e.state.data)==null?void 0:o.pageParams)||[];let v=m,x=!1;const _=R=>{Object.defineProperty(R,"signal",{enumerable:!0,get:()=>{var N;if((N=e.signal)!=null&&N.aborted)x=!0;else{var E;(E=e.signal)==null||E.addEventListener("abort",()=>{x=!0})}return e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),h=(R,N,E,L)=>(v=L?[N,...v]:[...v,N],L?[E,...R]:[...R,E]),g=(R,N,E,L)=>{if(x)return Promise.reject("Cancelled");if(typeof E>"u"&&!N&&R.length)return Promise.resolve(R);const $={queryKey:e.queryKey,pageParam:E,meta:e.options.meta};_($);const oe=y($);return Promise.resolve(oe).then(q=>h(R,E,q,L))};let w;if(!f.length)w=g([]);else if(c){const R=typeof u<"u",N=R?u:yy(e.options,f);w=g(f,R,N)}else if(d){const R=typeof u<"u",N=R?u:SO(e.options,f);w=g(f,R,N,!0)}else{v=[];const R=typeof e.options.getNextPageParam>"u";w=(a&&f[0]?a(f[0],0,f):!0)?g([],R,m[0]):Promise.resolve(h([],m[0],f[0]));for(let E=1;E<f.length;E++)w=w.then(L=>{if(a&&f[E]?a(f[E],E,f):!0){const oe=R?m[E]:yy(e.options,L);return g(L,R,oe)}return Promise.resolve(h(L,m[E],f[E]))})}return w.then(R=>({pages:R,pageParams:v}))}}}}function yy(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function SO(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class bO{constructor(t={}){this.queryCache=t.queryCache||new yO,this.mutationCache=t.mutationCache||new wO,this.logger=t.logger||lp,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=El.subscribe(()=>{El.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Tl.subscribe(()=>{Tl.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Gn(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=Es(t,n,r),s=this.getQueryData(i.queryKey);return s?Promise.resolve(s):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),s=i==null?void 0:i.state.data,o=uO(n,s);if(typeof o>"u")return;const a=Es(t),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(o,{...r,manual:!0})}setQueriesData(t,n,r){return Qe.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Gn(t,n),i=this.queryCache;Qe.batch(()=>{i.findAll(r).forEach(s=>{i.remove(s)})})}resetQueries(t,n,r){const[i,s]=Gn(t,n,r),o=this.queryCache,a={type:"active",...i};return Qe.batch(()=>(o.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,s)))}cancelQueries(t,n,r){const[i,s={}]=Gn(t,n,r);typeof s.revert>"u"&&(s.revert=!0);const o=Qe.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(s)));return Promise.all(o).then(Ut).catch(Ut)}invalidateQueries(t,n,r){const[i,s]=Gn(t,n,r);return Qe.batch(()=>{var o,a;if(this.queryCache.findAll(i).forEach(u=>{u.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(o=(a=i.refetchType)!=null?a:i.type)!=null?o:"active"};return this.refetchQueries(l,s)})}refetchQueries(t,n,r){const[i,s]=Gn(t,n,r),o=Qe.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var u;return l.fetch(void 0,{...s,cancelRefetch:(u=s==null?void 0:s.cancelRefetch)!=null?u:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(o).then(Ut);return s!=null&&s.throwOnError||(a=a.catch(Ut)),a}fetchQuery(t,n,r){const i=Es(t,n,r),s=this.defaultQueryOptions(i);typeof s.retry>"u"&&(s.retry=!1);const o=this.queryCache.build(this,s);return o.isStaleByTime(s.staleTime)?o.fetch(s):Promise.resolve(o.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(Ut).catch(Ut)}fetchInfiniteQuery(t,n,r){const i=Es(t,n,r);return i.behavior=_O(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(Ut).catch(Ut)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>Wr(t)===Wr(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>Pl(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>Wr(t)===Wr(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>Pl(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=ap(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class kO extends Wo{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),vy(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return xf(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return xf(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),hy(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const s=this.hasListeners();s&&xy(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),s&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const o=this.computeRefetchInterval();s&&(this.currentQuery!==i||this.options.enabled!==r.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Ut)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),vo||this.currentResult.isStale||!gf(this.options.staleTime))return;const n=q1(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(vo||this.options.enabled===!1||!gf(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||El.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,s=this.currentResult,o=this.currentResultState,a=this.currentResultOptions,l=t!==r,u=l?t.state:this.currentQueryInitialState,c=l?this.currentResult:this.previousQueryResult,{state:d}=t;let{dataUpdatedAt:f,error:m,errorUpdatedAt:v,fetchStatus:x,status:_}=d,y=!1,h=!1,g;if(n._optimisticResults){const E=this.hasListeners(),L=!E&&vy(t,n),$=E&&xy(t,r,n,i);(L||$)&&(x=Lu(t.options.networkMode)?"fetching":"paused",f||(_="loading")),n._optimisticResults==="isRestoring"&&(x="idle")}if(n.keepPreviousData&&!d.dataUpdatedAt&&c!=null&&c.isSuccess&&_!=="error")g=c.data,f=c.dataUpdatedAt,_=c.status,y=!0;else if(n.select&&typeof d.data<"u")if(s&&d.data===(o==null?void 0:o.data)&&n.select===this.selectFn)g=this.selectResult;else try{this.selectFn=n.select,g=n.select(d.data),g=vf(s==null?void 0:s.data,g,n),this.selectResult=g,this.selectError=null}catch(E){this.selectError=E}else g=d.data;if(typeof n.placeholderData<"u"&&typeof g>"u"&&_==="loading"){let E;if(s!=null&&s.isPlaceholderData&&n.placeholderData===(a==null?void 0:a.placeholderData))E=s.data;else if(E=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof E<"u")try{E=n.select(E),this.selectError=null}catch(L){this.selectError=L}typeof E<"u"&&(_="success",g=vf(s==null?void 0:s.data,E,n),h=!0)}this.selectError&&(m=this.selectError,g=this.selectResult,v=Date.now(),_="error");const w=x==="fetching",k=_==="loading",R=_==="error";return{status:_,fetchStatus:x,isLoading:k,isSuccess:_==="success",isError:R,isInitialLoading:k&&w,data:g,dataUpdatedAt:f,error:m,errorUpdatedAt:v,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>u.dataUpdateCount||d.errorUpdateCount>u.errorUpdateCount,isFetching:w,isRefetching:w&&!k,isLoadingError:R&&d.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:h,isPreviousData:y,isRefetchError:R&&d.dataUpdatedAt!==0,isStale:up(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,hy(r,n))return;this.currentResult=r;const i={cache:!0},s=()=>{if(!n)return!0;const{notifyOnChangeProps:o}=this.options;if(o==="all"||!o&&!this.trackedProps.size)return!0;const a=new Set(o??this.trackedProps);return this.options.useErrorBoundary&&a.add("error"),Object.keys(this.currentResult).some(l=>{const u=l;return this.currentResult[u]!==n[u]&&a.has(u)})};(t==null?void 0:t.listeners)!==!1&&s()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Ra(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Qe.batch(()=>{if(t.onSuccess){var n,r,i,s;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(s=this.options).onSettled)==null||i.call(s,this.currentResult.data,null)}else if(t.onError){var o,a,l,u;(o=(a=this.options).onError)==null||o.call(a,this.currentResult.error),(l=(u=this.options).onSettled)==null||l.call(u,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(c=>{c(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function CO(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function vy(e,t){return CO(e,t)||e.state.dataUpdatedAt>0&&xf(e,t,t.refetchOnMount)}function xf(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&up(e,t)}return!1}function xy(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&up(e,n)}function up(e,t){return e.isStaleByTime(t.staleTime)}const PO=cl.useSyncExternalStore,wy=b.createContext(void 0),tw=b.createContext(!1);function nw(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=wy),window.ReactQueryClientContext):wy)}const EO=({context:e}={})=>{const t=b.useContext(nw(e,b.useContext(tw)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},TO=({client:e,children:t,context:n,contextSharing:r=!1})=>{b.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=nw(n,r);return b.createElement(tw.Provider,{value:!n&&r},b.createElement(i.Provider,{value:e},t))},rw=b.createContext(!1),NO=()=>b.useContext(rw);rw.Provider;function OO(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const RO=b.createContext(OO()),AO=()=>b.useContext(RO);function IO(e,t){return typeof e=="function"?e(...t):!!e}const DO=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},MO=e=>{b.useEffect(()=>{e.clearReset()},[e])},LO=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&IO(n,[e.error,r]),jO=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},VO=(e,t)=>e.isLoading&&e.isFetching&&!t,FO=(e,t,n)=>(e==null?void 0:e.suspense)&&VO(t,n),$O=(e,t,n)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{n.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function zO(e,t){const n=EO({context:e.context}),r=NO(),i=AO(),s=n.defaultQueryOptions(e);s._optimisticResults=r?"isRestoring":"optimistic",s.onError&&(s.onError=Qe.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=Qe.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=Qe.batchCalls(s.onSettled)),jO(s),DO(s,i),MO(i);const[o]=b.useState(()=>new t(n,s)),a=o.getOptimisticResult(s);if(PO(b.useCallback(l=>r?()=>{}:o.subscribe(Qe.batchCalls(l)),[o,r]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),b.useEffect(()=>{o.setOptions(s,{listeners:!1})},[s,o]),FO(s,a,r))throw $O(s,o,i);if(LO({result:a,errorResetBoundary:i,useErrorBoundary:s.useErrorBoundary,query:o.getCurrentQuery()}))throw a.error;return s.notifyOnChangeProps?a:o.trackResult(a)}function Un(e,t,n){const r=Es(e,t,n);return zO(r,kO)}const BO=()=>{const{data:e}=Un(["offers"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/offerData.json")).json());return p(oO,{children:e==null?void 0:e.map((t,n)=>p(lO,{img:t.img,title:t.title,titleColor:t.titleColor,text:t.text,textColor:t.textColor},n))})},UO=de.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 180px;
	padding: 0 50px;

	.image__inner {
		width: 800px;
	}

	.content__text-smaller {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		color: #525c60;
		max-width: 690px;
		margin-top: 15px;
	}

	.list {
		margin-top: 45px;
	}

	.list__item {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
	}

	.link-btn {
		display: flex;
	}

	.item__description {
		margin-left: 30px;
	}

	.description__heading {
		font-family: 'Roboto-Bold';
		font-size: 25px;
		color: #274c5b;
	}

	.description__text {
		margin-top: 5px;
		font-family: 'Open Sans';
		font-size: 18px;
		color: #525c60;
		max-width: 440px;
	}

	@media (max-width: 1440px) {
		.item__description {
			margin-left: 10px;
		}
		.image__inner {
			max-width: 500px;
		}
	}

	@media (max-width: 1024px) {
		.image {
			display: none;
		}
		.list {
			margin-top: 20px;
		}
		.list__item {
			margin-bottom: 15px;
		}
	}

	@media (max-width: 768px) {
		padding: 0 30px;
		margin-bottom: 100px;
		padding: 0 30px;

		.heading {
			text-align: center;
		}

		.subtext {
			text-align: center;
		}

		.list {
			margin-bottom: 30px;
			text-align: center;
		}

		.list__item {
			text-align: center;
			justify-content: center;
		}

		.item__icon {
			display: none;
		}

		.link-btn {
			justify-content: center;
		}

		.content__text-smaller {
			text-align: center;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;
	}
`,WO="/organick/assets/aboutUsFruitImage-ef406db8.jpg",HO="/organick/assets/organic-food-icon-b91e082d.svg",QO="/organick/assets/quality-standards-icon-816e1a0b.svg",et=de.p`
	font-family: 'Roboto-Bold';
	font-style: normal;
	font-weight: 800;
	font-size: 50px;
	color: #274c5b;

	@media (max-width: 1440px) {
		font-size: 42px;
	}

	@media (max-width: 768px) {
		font-size: 36px;
	}
`,ZO=()=>T(UO,{children:[p("div",{className:"image",children:p("img",{className:"image__inner",src:WO,alt:""})}),T("div",{className:"content",children:[p(Xt,{className:"heading",children:"About Us"}),p(et,{className:"subtext",children:"We Believe in Working Accredited Farmers"}),p("p",{className:"content__text-smaller",children:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}),T("ul",{className:"list",children:[T("li",{className:"list__item",children:[p("img",{className:"item__icon",src:HO,alt:""}),T("div",{className:"item__description",children:[p("span",{className:"description__heading",children:"Organic Foods Only"}),p("p",{className:"description__text",children:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"})]})]}),T("li",{className:"list__item",children:[p("img",{className:"item__icon",src:QO,alt:""}),T("div",{className:"item__description",children:[p("span",{className:"description__heading",children:"Quality Standards"}),p("p",{className:"description__text",children:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"})]})]})]}),p(Re,{to:"/shop",className:"link-btn",children:p(Rr,{backgroundColor:"#274C5B",textColor:"#fff",padding:"25px 50px",children:"Shop Now"})})]})]}),qO=de.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 200px;

	.products {
		margin: 40px 0 120px;
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0 200px;
	}

	@media (max-width: 1440px) {
		.products {
			padding: 0 100px;
		}
	}

	@media (max-width: 1024px) {
		margin: 30px 0 20px;
		.products {
			padding: 0 30px;
			margin: 40px 0 60px;
		}
	}

	@media (max-width: 768px) {
		margin-bottom: 100px;
	}

	@media (max-width: 425px) {
		padding: 0 10px;
	}
`,_t="/organick/assets/star-icon-58e2706e.svg",KO=de.div.attrs(e=>({background:e.background}))`
	background: #f9f8f8 url(${e=>e.background}) no-repeat center
		center;
	min-width: 330px;
	border-radius: 30px;
	min-height: 480px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-size: 100%;
	transition: 0.25s;
	cursor: pointer;

	:hover {
		background-size: 105%;
	}

	.item__image {
		height: 320px;
		margin-top: 10px;
	}

	.item__category {
		align-self: flex-start;
		padding: 5px 15px;
		background: #274c5b;
		color: #fff;
		font-family: 'Open Sans';
		font-weight: 600;
		font-size: 15px;
		text-align: center;
		border-radius: 10px;
		margin: 25px 0 0 25px;
	}

	.item__description {
		padding: 0 30px 20px;
	}

	.description__name {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 23px;
		color: #274c5b;
	}

	.description__border {
		margin: 10px 0px 5px;
		border-bottom: 1px solid #dedddd;
	}

	.description__price {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.price__info {
		display: flex;
		align-items: center;
	}

	.info__old-price {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 20px;
		text-align: center;
		color: #b8b8b8;
		text-decoration: line-through;
	}

	.info__new-price {
		font-family: 'Open Sans';
		font-weight: 700;
		font-size: 18px;
		color: #274c5b;
		margin-left: 10px;
	}

	@media (max-width: 425px) {
		min-width: 300px;
		min-height: 440px;

		.info__old-price {
			font-size: 14px;
		}

		.info__new-price {
			margin-left: 5px;
			font-size: 16px;
		}
	}
`,ju=e=>{const{category:t,image:n,name:r,oldPrice:i,newPrice:s,id:o}=e;return p(Re,{to:"/shop/"+o,children:T(KO,{background:n,children:[p("div",{className:"item__category",children:t}),T("div",{className:"item__description",children:[p("h3",{className:"description__name",children:r}),p("div",{className:"description__border"}),T("div",{className:"description__price",children:[T("div",{className:"price__info",children:[T("span",{className:"info__old-price",children:["$",i,".00"]}),T("span",{className:"info__new-price",children:["$",s,".00"]})]}),T("div",{className:"price__rating",children:[p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""})]})]})]})]})})},GO=()=>{const{data:e}=Un(["products"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/productItems.json")).json());return T(qO,{children:[p(Xt,{children:"Categories"}),p(et,{children:"Our Products"}),p("div",{className:"products",children:e==null?void 0:e.slice(0,8).map((t,n)=>p(ju,{id:t.id,category:t.category,image:t.image,name:t.name,oldPrice:t.oldPrice,newPrice:t.newPrice},n))}),p(Re,{to:"/shop",children:p(Rr,{textColor:"#fff",backgroundColor:"#274C5B",padding:"30px 45px",children:"Load More"})})]})},YO="/organick/assets/testimonial-2f8610ae.jpg",XO=de.div`
	background: url(${YO}) no-repeat center;
	min-height: 1000px;
	padding: 20px 40px;

	.heading {
		text-align: center;
	}

	.subheading {
		text-align: center;
	}

	.paragraph {
		text-align: center;
		max-width: 1000px;
	}

	.customer {
		margin-top: 60px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.customer__rating {
		margin-top: 20px;
	}

	.rating__star {
		width: 25px;
	}

	.customer__comment {
		margin-top: 25px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
		width: 780px;
		text-align: center;
	}

	.customer__name {
		margin-top: 20px;
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 600;
		font-size: 25px;
		line-height: 29px;
		color: #274c5b;
	}

	.customer__role {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 165.4%;
		color: #525c60;
	}

	.border {
		margin: 100px 0;
		border-bottom: 1px solid #e0e0e0;
		width: 100%;
	}

	.achivments {
		display: flex;
		justify-content: center;
		gap: 20px;
	}

	.achivments__item {
		border: 5px solid #7eb693;
		background: #f1f1f1;
		height: 210px;
		width: 210px;
		border-radius: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.item__number {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 50px;
		color: #274c5b;
	}

	.item__comment {
		font-family: 'Open Sans';
		font-weight: 600;
		font-size: 18px;
		color: #274c5b;
	}

	@media (max-width: 1440px) {
		min-height: 800px;

		.border {
			margin: 50px 0;
		}

		.achivments__item {
			transform: scale(0.8);
			height: 190px;
			width: 190px;
		}

		.item__number {
			font-size: 42px;
		}

		.item__comment {
			font-size: 16px;
		}
	}

	@media (max-width: 1024px) {
		.achivments__item {
			height: 160px;
			width: 160px;
		}

		.item__number {
			font-size: 36px;
		}
	}

	@media (max-width: 768px) {
		.border {
			margin: 25px 0;
		}

		.achivments {
			flex-wrap: wrap;
			margin-top: 25px;
			gap: 0;
		}
	}
`,ga=({number:e,comment:t})=>T("div",{className:"achivments__item",children:[p("span",{className:"item__number",children:e}),p("span",{className:"item__comment",children:t})]}),JO="/organick/assets/sara-taylor-aaf400a0.jpg",qe=de.p`
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 165.4%;
	color: #525c60;
`,eR=()=>T(XO,{children:[p(Xt,{className:"heading",children:"Testimonial"}),p(et,{className:"subheading",children:"What Our Customer Saying?"}),T("div",{className:"customer",children:[p("img",{src:JO,alt:""}),T("div",{className:"customer__rating",children:[p("img",{className:"rating__star",src:_t,alt:""}),p("img",{className:"rating__star",src:_t,alt:""}),p("img",{className:"rating__star",src:_t,alt:""}),p("img",{className:"rating__star",src:_t,alt:""}),p("img",{className:"rating__star",src:_t,alt:""})]}),p(qe,{className:"paragraph",children:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."}),p("span",{className:"customer__name",children:"Sara Taylor"}),p("span",{className:"customer__role",children:"Consumer"})]}),p("div",{className:"border"}),T("div",{className:"achivments",children:[p(ga,{number:"100%",comment:"Organic"}),p(ga,{number:"285",comment:"Active Product"}),p(ga,{number:"350+",comment:"Organic Orchads"}),p(ga,{number:"25+",comment:"Years of Farming"})]})]}),tR=de.div`
	padding: 150px 150px;
	background: #274c5b;
	min-height: 1050px;

	.description {
		margin-bottom: 50px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.description__text {
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 800;
		font-size: 50px;
		line-height: 59px;
		color: #ffffff;
		display: block;
	}

	.products {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	@media (max-width: 1440px) {
		padding: 150px 100px;
		.description__text {
			font-size: 42px;
		}
	}

	@media (max-width: 1024px) {
		padding: 75px 20px;

		.heading {
			text-align: center;
		}

		.description {
			flex-direction: column;
			align-items: center;
		}

		.description__text {
			margin-bottom: 15px;
		}
	}

	@media (max-width: 768px) {
		.description__text {
			text-align: center;
		}
	}
`,nR=()=>{const{data:e}=Un(["products"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/productItems.json")).json());return T(tR,{children:[T("div",{className:"description",children:[T("div",{className:"",children:[p(Xt,{className:"heading",children:"Offer"}),p("span",{className:"description__text",children:"We Offer Organic For You"})]}),p(Re,{to:"/shop",children:p(Rr,{textColor:"#274C5B",backgroundColor:"#EFD372",padding:"25px 40px",children:"View All Product"})})]}),p("div",{className:"products",children:e==null?void 0:e.slice(0,4).map((t,n)=>p(ju,{id:t.id,category:t.category,image:t.image,name:t.name,oldPrice:t.oldPrice,newPrice:t.newPrice},n))})]})},rR="/organick/assets/eco-friendly-image-3530031e.jpg",iR=de.div`
	display: flex;
	align-items: center;
	position: relative;

	.content {
		position: absolute;
		padding: 80px;
		left: 880px;
		background: #fff;
		border-radius: 25px;
		min-width: 800px;
	}

	.image {
		background: url(${rR}) no-repeat center center/cover;
		height: 1000px;
		width: 1000px;
	}

	.content__heading {
		max-width: 500px;
	}

	.content__list {
		margin-top: 35px;
		display: flex;
		flex-direction: column;
		gap: 35px;
	}

	.item__heading {
		font-family: 'Roboto-Medium';
		font-size: 25px;
		color: #274c5b;
	}

	.item__text {
		font-family: 'Open Sans';
		font-size: 18px;
		color: #525c60;
		line-height: 150%;
		max-width: 650px;
		margin-top: 5px;
	}

	@media (max-width: 1440px) {
		.content {
			padding: 50px;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
		}

		.image {
			height: 800px;
			width: 100%;
		}

		.content__list {
			margin-top: 20px;
			gap: 20px;
		}
	}

	@media (max-width: 1024px) {
		.content {
			min-width: 700px;
		}

		.image {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.content {
			min-width: 100%;
			padding: 30px;
			border-radius: 0;
		}

		.content__list {
			gap: 10px;
		}

		.image {
			height: 850px;
		}
	}

	@media (max-width: 425px) {
		height: 1000px;
	}
`,sR=({heading:e,text:t})=>T("li",{className:"list__item",children:[p("span",{className:"item__heading",children:e}),p("p",{className:"item__text",children:t})]}),oR=[{heading:"Start with Our Company First",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."},{heading:"Learn How to Grow Yourself",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."},{heading:"Farming Strategies of Today",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."}],aR=()=>T(iR,{children:[p("div",{className:"image"}),T("div",{className:"content",children:[p(Xt,{children:"Eco Friendly"}),p(et,{className:"content__heading",children:"Econis is a Friendly Organic Store"}),p("ul",{className:"content__list",children:oR.map((e,t)=>p(sR,{text:e.text,heading:e.heading},t))})]})]}),lR=de.div`
	background: #f1f8f4;
	padding: 180px 0;
	display: flex;
	justify-content: center;
	gap: 40px;
	flex-wrap: wrap;
	align-items: center;

	@media (max-width: 1024px) {
		padding: 100px 0;
	}
`,uR=de.div.attrs(e=>e.background)`
	background: url(${e=>e.background}) no-repeat center center;
	width: 600px;
	height: 600px;

	display: flex;
	justify-content: center;
	align-items: center;

	.item__title {
		width: 250px;
		border-radius: 20px;
		padding: 30px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #fff;

		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 500;
		font-size: 25px;
		line-height: 29px;

		color: #274c5b;
	}

	@media (max-width: 1440px) {
		width: 500px;
		height: 500px;
	}

	@media (max-width: 425px) {
		width: 400px;
		height: 400px;
	}
`,cR=({background:e,title:t})=>p(uR,{background:e,children:p("div",{className:"item__title",children:p("span",{className:"title__text",children:t})})}),dR="/organick/assets/organic-juice-e86219ae.jpg",fR="/organick/assets/organic-food-1511b52e.jpg",hR="/organick/assets/organic-cookies-ca6eba0f.jpg",pR=[{image:dR,title:"Organic Juice"},{image:fR,title:"Organic Food"},{image:hR,title:"Organic Cookies"}],mR=()=>p(lR,{children:pR.map((e,t)=>p(cR,{background:e.image,title:e.title},t))}),gR=de.div`
	padding: 0 150px;
	margin: 180px 0 200px;

	.description {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.subtext {
		max-width: 800px;
		margin-right: 15px;
	}

	.news {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		gap: 45px;
		flex-wrap: wrap;
	}

	@media (max-width: 1440px) {
		padding: 0 120px;
		margin: 100px 0 100px;
	}

	@media (max-width: 1024px) {
		padding: 0 60px;
		margin: 100px 0;

		.description {
			flex-direction: column;
			align-items: flex-start;
		}

		.subtext {
			display: block;
			margin: 10px 0 15px;
			margin-right: 20px;
		}
	}

	@media (max-width: 768px) {
		padding: 0 20px;
		margin: 50px 0;
	}
`,iw="/organick/assets/person-icon-40d4dea1.svg",yR=de.div.attrs(e=>e.backgroundImage)`
	background: url(${e=>e.backgroundImage}) no-repeat center/cover;
	min-height: 600px;
	max-width: 700px;
	padding: 30px;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.item__date {
		background: #fff;
		width: 80px;
		height: 80px;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 800;
		font-size: 20px;
		color: #274c5b;
	}

	.item__content {
		padding: 50px;
		background: #fff;
		border-radius: 25px;
	}

	.author__name {
		margin-left: 5px;
		font-family: 'Roboto-Medium';
		font-size: 18px;
		color: #274c5b;
	}

	.content__title {
		font-family: 'Roboto-Bold';
		font-size: 25px;
		color: #274c5b;
		margin-top: 15px;
	}

	.content__text {
		margin: 5px 0 20px;
		font-family: 'Open Sans';
		font-size: 18px;
		line-height: 140%;
		color: #525c60;
	}

	@media (max-width: 1024px) {
		padding: 20px;
		min-height: 500px;

		.item__content {
			padding: 35px;
		}
	}

	@media (max-width: 768px) {
		min-height: 425px;
		width: 100%;

		.content__title {
			margin-bottom: 25px;
		}

		.content__text {
			display: none;
		}
	}
`,sw=({backgroundImage:e,date:t,author:n,title:r,text:i,id:s})=>T(yR,{backgroundImage:e,children:[p("div",{className:"item__date",children:t}),T("div",{className:"item__content",children:[T("div",{className:"content__author",children:[p("img",{src:iw,alt:""}),p("span",{className:"author__name",children:n})]}),p("h3",{className:"content__title",children:r}),p("p",{className:"content__text",children:i}),p(Re,{to:"/news/"+s,children:p(Rr,{backgroundColor:"#EFD372",textColor:"#274C5B",padding:"30px 50px",children:"Read More"})})]})]}),vR=()=>{const{data:e}=Un(["news"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/news.json")).json());return T(gR,{children:[T("div",{className:"description",children:[T("div",{children:[p(Xt,{className:"heading",children:"News"}),p(et,{className:"subtext",children:"Discover weekly content about organic food, & more"})]}),p(Re,{to:"/news",children:p(Rr,{backgroundColor:"transparent",textColor:"#274C5B",border:"2px solid #274C5B",padding:"25px 45px",children:"More News"})})]}),p("div",{className:"news",children:e==null?void 0:e.slice(0,2).map((t,n)=>p(sw,{backgroundImage:t.image,author:t.author,date:t.date,id:t.id,text:t.description,title:t.title},n))})]})},xR="/organick/assets/newsletter-background-b852b8f5.jpg",wR=de.div`
	padding: 100px 70px;
	height: 320px;
	margin: 0 150px;
	background: url(${xR}) no-repeat center center/cover;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 25px;

	.title {
		font-family: 'Roboto-Medium';
		font-size: 50px;
		max-width: 360px;
		color: #ffffff;
	}

	.form__input {
		padding: 30px 20px;
		font-family: 'Roboto-Medium';
		font-size: 18px;
		min-width: 350px;
		border: none;
		outline: none;
		border-radius: 20px;
		color: #274c5b;
	}

	.form__input::placeholder {
		color: #ababab;
		font-style: italic;
	}

	.form__btn {
		padding: 30px 20px;
		font-family: 'Roboto-Medium';
		background: #274c5b;
		font-size: 18px;
		color: #fff;
		min-width: 220px;
		border: none;
		outline: none;
		border-radius: 20px;
		margin-left: 5px;
		cursor: pointer;
	}

	@media (max-width: 1440px) {
		height: 225px;
		padding: 80px 30px;

		.title {
			max-width: 250px;
			font-size: 36px;
		}

		.form__btn {
			min-width: 125px;
			font-size: 16px;
			border-radius: 10px;
			padding: 20px 10px;
		}

		.form__input {
			min-width: 250px;
			font-size: 16px;
			border-radius: 10px;
			padding: 20px 15px;
		}
	}

	@media (max-width: 1024px) {
		flex-direction: column;
		height: 100%;

		.title {
			text-align: center;
			margin-bottom: 20px;
		}

		.form {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.form__btn {
			width: 100%;
			margin-left: 0;
		}

		.form__input {
			min-width: 300px;
		}
	}

	@media (max-width: 768px) {
		margin: 0 20px;
	}

	@media (max-width: 425px) {
		padding: 50px 20px;
	}

	@media (max-width: 375px) {
		.form__input {
			min-width: 100%;
		}
	}
`,ci=()=>T(wR,{children:[p("h2",{className:"title",children:"Subscribe to our Newsletter"}),T("form",{action:"",className:"form",children:[p("input",{className:"form__input",type:"text",placeholder:"Your Email Address"}),p("button",{className:"form__btn",children:"Subscribe"})]})]}),_R=()=>T(Je.div,{initial:{opacity:0},animate:{opacity:1},children:[p(sO,{}),p(BO,{}),p(ZO,{}),p(GO,{}),p(eR,{}),p(nR,{}),p(aR,{}),p(mR,{}),p(vR,{}),p(ci,{})]}),SR="/organick/assets/tractor-icon-5e26d9be.svg",bR="/organick/assets/fabric-icon-1e7b4595.svg",kR="/organick/assets/aboutVeggie-ec1c72c3.png",CR=de.div`
	margin-top: 150px;
	display: flex;
	align-items: center;

	.about-us {
		margin: 0 20px;
	}

	.image {
		width: 45%;
	}

	.image__inner {
		width: 100%;
	}

	.subheading {
		margin-bottom: 20px;
	}

	.about-us__paragraph {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
		margin-bottom: 25px;
		max-width: 680px;
	}

	.about-us__list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
		margin-bottom: 50px;
	}

	.list__item {
		display: flex;
		align-items: center;
		max-width: 300px;
	}

	.item__text {
		margin-left: 10px;
		font-family: 'Roboto-Medium';
		font-size: 25px;
		color: #274c5b;
	}

	@media (max-width: 1024px) {
		margin-top: 80px;

		.image {
			display: none;
		}

		.about-us {
			margin: 0 20px;
		}
	}

	@media (max-width: 768px) {
		.about-us__list {
			flex-wrap: wrap;
		}
	}
`,PR=()=>T(CR,{children:[p("div",{className:"image",children:p("img",{className:"image__inner",src:kR,alt:""})}),T("div",{className:"about-us",children:[p(Xt,{className:"heading",children:"About Us"}),p(et,{className:"subheading",children:"We do Creative Things for Success"}),p("p",{className:"about-us__paragraph",children:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}),p("p",{className:"about-us__paragraph",children:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}),T("ul",{className:"about-us__list",children:[T("li",{className:"list__item",children:[p("img",{src:SR,alt:""}),p("span",{className:"item__text",children:"Modern Agriculture Equipment"})]}),T("li",{className:"list__item",children:[p("img",{src:bR,alt:""}),p("span",{className:"item__text",children:"No growth hormones are used"})]})]}),p(Re,{to:"/shop",children:p(Rr,{backgroundColor:"#274C5B",textColor:"#fff",padding:"30px 40px",children:"Explore More"})})]})]}),ER="/organick/assets/about-us-page-greens-19308afe.jpg",_y="/organick/assets/green-circe-icon-283748df.svg",TR="/organick/assets/why-chose-us-about-us-cart-icon-4bb83428.svg",NR="/organick/assets/why-chose-us-about-us-fresh-icon-8897a5d9.svg",OR="/organick/assets/why-chose-us-about-us-support-icon-8a4d1375.svg",RR="/organick/assets/why-chose-us-about-us-secured-icon-65524fdb.svg",AR=[{icon:TR,title:"Return Policy",text:"Simply dummy text of the printintypesetting industry."},{icon:NR,title:"100% Fresh",text:"Simply dummy text of the printintypesetting industry."},{icon:OR,title:"Support 24/7",text:"Simply dummy text of the printintypesetting industry."},{icon:RR,title:"Secured Payment",text:"Simply dummy text of the printintypesetting industry."}],IR=de.div`
	background: #f9f8f8;
	padding: 190px 200px;
	margin-top: 50px;

	.banner-section {
		display: flex;
		align-items: center;
	}

	.greens-image {
		width: 1500px;
	}

	.image {
		width: 100%;
	}

	.description {
		margin-right: 50px;
	}

	.description__paragraph {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
		margin: 25px 0;
	}

	.description__list {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.list__item {
		display: flex;
		align-items: center;
		margin-bottom: 40px;
		min-width: 300px;
		padding: 20px 30px;
		background: #ececec;
		border-radius: 30px;

		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 23px;

		color: #274c5b;
	}

	.item__text {
		margin-left: 5px;
	}

	.image {
		border-radius: 20px;
	}

	.achivments {
		margin-top: 90px;
	}

	.achivments__list {
		display: flex;
		align-items: center;
		gap: 25px;
		justify-content: center;
	}

	@media (max-width: 1440px) {
		padding: 100px 50px;
	}

	@media (max-width: 1024px) {
		.greens-image {
			display: none;
		}

		.achivments {
			margin-top: 30px;
		}

		.achivments__list {
			flex-wrap: wrap;
		}
	}

	@media (max-width: 768px) {
		padding: 100px 25px;
	}

	@media (max-width: 425px) {
		.list__item {
			min-width: 100%;
			padding: 20px 20px;
		}
	}
`,DR=de.li`
	background: #fff;
	width: 250px;
	height: 330px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
	padding: 0 25px;

	.item__heading {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 25px;
		line-height: 29px;
		margin-top: 10px;
		color: #274c5b;
	}

	.item__text {
		margin-top: 15px;
		text-align: center;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		/* or 30px */

		text-align: center;

		color: #525c60;
	}
`,MR=({icon:e,title:t,text:n})=>T(DR,{children:[p("div",{className:"",children:p("img",{src:e,alt:""})}),p("h3",{className:"item__heading",children:t}),p("p",{className:"item__text",children:n})]}),LR=()=>T(IR,{children:[T("div",{className:"banner-section",children:[T("div",{className:"description",children:[p(Xt,{className:"heading",children:"Why Choose us?"}),p(et,{className:"subheading",children:"We do not buy from the open market & traders."}),p("p",{className:"description__paragraph",children:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard the 1500s, when an unknown"}),T("ul",{className:"description__list",children:[T("li",{className:"list__item",children:[p("img",{className:"item__icon",src:_y,alt:""}),p("span",{className:"item__text",children:"100% Natural Product"})]}),T("li",{className:"list__item",children:[p("img",{className:"item__icon",src:_y,alt:""}),p("span",{className:"item__text",children:"Increases resistance"})]})]})]}),p("div",{className:"greens-image",children:p("img",{className:"image",src:ER,alt:""})})]}),p("div",{className:"achivments",children:p("ul",{className:"achivments__list",children:AR.map((e,t)=>p(MR,{icon:e.icon,title:e.title,text:e.text},t))})})]}),jR="/organick/assets/giovaniBacardo-22a68460.jpg",VR="/organick/assets/marianneLoreno-d2edd5b0.jpg",FR="/organick/assets/rigaPelore-c6489414.jpg",$R=[{image:jR,name:"Giovani Bacardo",role:"Farmer"},{image:VR,name:"Marianne Loreno",role:"Designer"},{image:FR,name:"Riga Pelore",role:"Farmer"}],zR=de.div`
	margin-top: 180px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 0 100px;
	margin-bottom: 140px;

	.text {
		margin: 20px 0 30px;
		max-width: 850px;
		text-align: center;
	}

	.team-members {
		display: flex;
		justify-content: center;
		gap: 20px;
	}

	@media (max-width: 1440px) {
		.team-members {
			flex-wrap: wrap;
		}
	}

	@media (max-width: 1024px) {
		margin-top: 120px;
		padding: 0 50px;
		.text {
			max-width: 100%;
			margin: 20px 0 20px;
		}
	}

	@media (max-width: 768px) {
		margin-top: 80px;
	}

	@media (max-width: 425px) {
		margin-top: 50px;
		padding: 0 20px;
	}
`,BR=de.div.attrs(e=>{e.image})`
	display: flex;
	flex-direction: column;
	background: #f9f8f8;
	border-radius: 25px;
	/* max-width: 200px; */

	.image {
		background: url(${e=>e.image}) no-repeat center center/cover;
		min-height: 500px;
		min-width: 500px;
	}

	.name {
		font-size: 25px;
	}

	.role {
		font-size: 22px;
	}

	.person__description {
		padding: 30px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.social-media__icon {
		margin-left: 10px;
	}

	@media (max-width: 768px) {
		.image {
			min-width: 400px;
			min-height: 400px;
		}

		.person__description {
			flex-direction: column;
			align-items: center;
		}

		.role {
			text-align: center;
			margin-bottom: 10px;
		}
	}

	@media (max-width: 425px) {
		.image {
			min-width: 350px;
			min-height: 350px;
		}
	}
`,UR="/organick/assets/instagramIcon-5d27dc43.svg",WR="/organick/assets/facebookIcon-b0ba33a5.svg",HR="/organick/assets/tweeterIcon-73e74d6e.svg",QR=({image:e,name:t,role:n})=>T(BR,{image:e,children:[p("div",{className:"image"}),T("div",{className:"person__description",children:[T("div",{className:"description__content",children:[p(et,{className:"name",children:t}),p(Xt,{className:"role",children:n})]}),T("div",{className:"description__social-media",children:[p("img",{className:"social-media__icon",src:UR,alt:""}),p("img",{className:"social-media__icon",src:WR,alt:""}),p("img",{className:"social-media__icon",src:HR,alt:""})]})]})]}),ZR=()=>T(zR,{children:[p(Xt,{children:"Team"}),p(et,{children:"Our Organic Experts"}),p(qe,{className:"text",children:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}),p("div",{className:"team-members",children:$R.map((e,t)=>p(QR,{image:e.image,role:e.role,name:e.name},t))})]}),Vu=({heading:e,background:t})=>p(qR,{background:t,children:p("h2",{className:"heading",children:e})}),qR=de.div.attrs(e=>e.background)`
	background: url(${e=>e.background}) center center;
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: center;

	.heading {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 70px;
		line-height: 82px;
		color: #274c5b;
	}

	@media (max-width: 1024px) {
		height: 400px;
		.heading {
			font-size: 62px;
		}
	}

	@media (max-width: 768px) {
		height: 350px;
		.heading {
			font-size: 56px;
		}
	}

	@media (max-width: 425px) {
		height: 300px;
		.heading {
			font-size: 50px;
		}
	}
`,KR="/organick/assets/AboutUsBannerImage-f0f7be40.jpg",GR=()=>T(Je.div,{initial:{opacity:0},animate:{opacity:1},children:[p(Vu,{background:KR,heading:"About Us"}),p(PR,{}),p(LR,{}),p(ZR,{}),p(ci,{})]}),YR="/organick/assets/shopPageBanner-b9132616.jpg",XR=de.div`
	margin: 90px 0 140px;
	padding: 0 120px;
	display: flex;
	gap: 30px;
	flex-wrap: wrap;
	justify-content: center;
`,JR=()=>{const{data:e}=Un(["products"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/productItems.json")).json());return p(XR,{children:e==null?void 0:e.map((t,n)=>p(ju,{id:t.id,category:t.category,image:t.image,name:t.name,oldPrice:t.oldPrice,newPrice:t.newPrice},n))})},eA=()=>T(Je.div,{initial:{opacity:0},animate:{opacity:1},children:[p(Vu,{background:YR,heading:"Shop"}),p(JR,{}),p(ci,{})]}),tA=de.div.attrs(e=>e.background)`
	padding: 0 200px;
	margin: 50px 0;

	.product {
		display: flex;
		gap: 80px;
		align-items: center;
	}

	.product__image {
		background: url(${e=>e.background}) no-repeat center
			center/cover;
		height: 500px;
		min-width: 500px;
		border-radius: 25px;
		padding: 30px;
		display: flex;
	}

	.image__category {
		align-self: flex-start;
		background: #274c5b;
		padding: 7px 15px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		text-align: center;
		border-radius: 10px;
		color: #ffffff;
	}

	.desription__heading {
		font-family: 'Roboto-Bold';
		font-size: 40px;
		color: #274c5b;
	}

	.description__stars {
		margin-top: 10px;
		display: flex;
		gap: 2px;
	}

	.description__price {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-top: 10px;
	}

	.price__old {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		text-align: center;
		text-decoration: line-through;
		color: #b8b8b8;
	}

	.price__new {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		color: #274c5b;
	}

	.description__paragraph {
		margin-top: 25px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
	}

	.description__actions {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 35px;
	}

	.actions__quantity {
		font-family: 'Roboto-Bold';
		font-size: 20px;
		color: #274c5b;
	}

	.actions__form {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.form__input {
		padding: 25px;
		padding-left: 30px;
		width: 125px;
		outline: none;
		border-radius: 20px;
		text-align: center;
		border: 2px solid #274c5b;
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		color: #274c5b;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-top: 90px;
	}

	.actions__btn {
		padding: 25px 60px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 25px;
		line-height: 34px;
		text-align: center;
		background: #eff6f1;
		border: none;
		outline: none;
		border-radius: 25px;
		color: #274c5b;
		cursor: pointer;
	}

	.actions-active {
		color: #ffffff;
		background: #274c5b;
	}

	.additional-description__paragraph {
		margin-top: 30px;
		text-align: center;
	}

	@media (max-width: 1440px) {
		padding: 0 50px;

		.product {
			gap: 40px;
		}

		.product__image {
			min-width: 400px;
		}

		.desription__heading {
			font-size: 36px;
		}

		.description__paragraph {
			font-size: 16px;
		}

		.price__old {
			font-size: 18px;
		}

		.price__new {
			font-size: 22px;
		}
	}

	@media (max-width: 1024px) {
		.product__image {
			min-width: 300px;
		}
		.description__actions {
			flex-wrap: wrap;
		}
		.actions__form {
			flex-wrap: wrap;
		}
	}

	@media (max-width: 768px) {
		padding: 0 30px;

		.product {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.product__image {
			min-width: 400px;
			max-height: 400px;
			align-self: flex-start;
		}

		.actions {
			justify-content: flex-start;
		}

		.actions__btn {
			padding: 25px 30px;
			font-size: 20px;
		}

		.actions-active {
			color: #ffffff;
			background: #274c5b;
		}

		.paragraph {
			font-size: 16px;
			text-align: left;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;

		.actions {
			margin-top: 60px;
			flex-wrap: wrap;
		}

		.actions__btn {
			width: 100%;
		}

		.product__image {
			min-width: 250px;
			max-height: 250px;
		}
		.form__input {
			padding: 22px;
			width: 100px;
		}
	}
`,nA=localStorage.getItem("cart")!==null?JSON.parse(localStorage.getItem("cart")||"[]"):[],rA={items:nA},ow=Px({name:"cart",initialState:rA,reducers:{addItem(e,t){const n=localStorage.getItem("cart");n&&JSON.parse(n);const r=t.payload,i=e.items.find(s=>s.id===r.id);i?(i.itemAmount+=r.itemAmountNum,i.totalPrice=i.price*i.itemAmount):e.items.push({image:r.image,itemAmount:r.itemAmountNum,id:r.id,name:r.name,price:r.newPrice,totalPrice:r.newPrice*r.itemAmountNum}),localStorage.setItem("cart",JSON.stringify(e.items))},removeItem(e,t){const n=t.payload,r=e.items.find(i=>i.id===n);r.itemAmount===1?e.items=e.items.filter(i=>i.id!==n):(r.itemAmount--,r.totalPrice=r.totalPrice-r.price),localStorage.setItem("cart",JSON.stringify(e.items))},removeAllItems(e,t){const n=t.payload;e.items=e.items.filter(r=>r.id!==n),localStorage.setItem("cart",JSON.stringify(e.items))}}}),{addItem:aw,removeItem:iA,removeAllItems:sA}=ow.actions,oA=()=>{const e=Fo(),[t,n]=b.useState("product-description"),[r,i]=b.useState(1),s=G0(),{data:o,isLoading:a}=Un(["item"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/productItems.json")).json());if(b.useEffect(()=>i(1),[s]),!a){const[{category:l,image:u,name:c,newPrice:d,oldPrice:f,id:m}]=o.filter(x=>x.id===s.name);return T(tA,{background:u,children:[T("div",{className:"product",children:[p("div",{className:"product__image",children:p("h2",{className:"image__category",children:l})}),T("div",{className:"product__desription",children:[p("h2",{className:"desription__heading",children:c}),T("div",{className:"description__stars",children:[p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""}),p("img",{src:_t,alt:""})]}),T("div",{className:"description__price",children:[T("span",{className:"price__old",children:["$",f,".00"]}),T("span",{className:"price__new",children:["$",d,".00"]})]}),p("p",{className:"description__paragraph",children:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}),T("div",{className:"description__actions",children:[p("span",{className:"actions__quantity",children:"Quantity :"}),T("form",{className:"actions__form",action:"",children:[p("input",{className:"form__input",type:"number",min:1,onChange:x=>i(+x.target.value),value:r}),p(Rr,{backgroundColor:"#274C5B",textColor:"#fff",padding:"25px 40px",onClick:x=>{x.preventDefault();const _=+r;e(aw({image:u,itemAmountNum:_,name:c,id:m,newPrice:d}))},children:"Add To Cart"})]})]})]})]}),T("div",{className:"additional-description",children:[T("div",{className:"actions",children:[p("button",{onClick:()=>n("product-description"),className:`actions__btn ${t==="product-description"?"actions__btn actions-active":""}`,children:"Product Description"}),p("button",{onClick:()=>n("about-info"),className:`actions__btn ${t==="about-info"?"actions__btn actions-active":""}`,children:"Additional Info"})]}),t==="product-description"?p(qe,{className:"additional-description__paragraph paragraph",children:"Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw."}):p("p",{children:p(qe,{className:"additional-description__paragraph paragraph",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consectetur quis odit velit accusamus enim voluptatum voluptas, expedita, error eaque eos! Adipisci quidem rem illum velit ut dicta placeat in accusamus eligendi dolore non voluptatem laboriosam eius est consequatur nesciunt possimus quasi rerum exercitationem voluptatum voluptatibus, iste labore odit. Veniam nisi perspiciatis odio ut officiis suscipit vitae magni dolor fugiat."})})]})]})}return null},aA=de.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 150px;

	.products {
		padding: 0 120px;
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		justify-content: center;
		margin: 40px 0 150px;
	}

	@media (max-width: 768px) {
		.products {
			padding: 0 80px;
		}
	}

	@media (max-width: 425px) {
		.products {
			padding: 0 20px;
		}
	}
`,lA=()=>{const{data:e}=Un(["products"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/productItems.json")).json());return T(aA,{children:[p(et,{className:"heading",children:"Related Products"}),p("div",{className:"products",children:e==null?void 0:e.slice(0,4).map((t,n)=>p(ju,{id:t.id,category:t.category,image:t.image,name:t.name,oldPrice:t.oldPrice,newPrice:t.newPrice},n))})]})},uA=()=>T(Je.div,{initial:{opacity:0},animate:{opacity:1},children:[p(oA,{}),p(lA,{}),p(ci,{})]}),cA="/organick/assets/NewsBanner-a0efb0c3.jpg",dA=de.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	gap: 45px;
	padding: 160px;
	flex-wrap: wrap;

	@media (max-width: 1440px) {
		padding: 0 120px;
		margin: 100px 0 100px;
	}

	@media (max-width: 1024px) {
		padding: 0 60px;
		margin: 100px 0;
	}

	@media (max-width: 768px) {
		padding: 0 20px;
		margin: 50px 0;
	}
`,fA=()=>{const{data:e}=Un(["news"],async()=>await(await fetch("https://organick-df998-default-rtdb.firebaseio.com/news.json")).json());return p(dA,{children:e==null?void 0:e.map((t,n)=>p(sw,{backgroundImage:t.image,author:t.author,date:t.date,id:t.id,text:t.description,title:t.title},n))})},hA=()=>T(Je.div,{initial:{opacity:0},animate:{opacity:1},children:[p(Vu,{heading:"Recent News",background:cA}),p(fA,{}),p(ci,{})]});function pA(){const{pathname:e}=jo();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const mA="/organick/assets/banngerImage-d9799b01.jpg",gA="/organick/assets/contactBananaImage-00632f6a.jpg",yA="/organick/assets/contactMessageIcon-2dbf7a1e.svg",vA="/organick/assets/contactPhoneIcon-e5d77d35.svg",xA="/organick/assets/contactInstagram-6e73ade0.svg",wA="/organick/assets/contactFacebook-cc3a66f1.svg",_A="/organick/assets/contactTweeter-ff7f999a.svg",SA="/organick/assets/contactPinterest-f34a742f.svg",bA=de.div`
	padding: 0 260px;
	margin: 200px 0 100px;
	display: flex;
	align-items: center;
	gap: 75px;

	.banner-image {
		min-width: 500px;
	}

	.banner-image__inner {
		border-radius: 25px;
		width: 100%;
	}

	.description__paragraph {
		margin-top: 15px;
	}

	.description__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.list__item {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.item__info {
		display: flex;
		flex-direction: column;
	}

	.info__name {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 25px;

		color: #274c5b;
	}

	.info__data {
		font-family: 'Open Sans';
		font-size: 18px;
		color: #525c60;
	}

	.description__social-media {
		margin-top: 30px;
		display: flex;
		gap: 15px;
	}

	@media (max-width: 1440px) {
		padding: 70px;
		margin: 150px 0 100px;

		.banner-image {
			min-width: 400px;
		}
	}

	@media (max-width: 1024px) {
		margin: 75px 0 50px;
		padding: 50px;
		.banner-image {
			display: none;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;
		.item__icon {
			width: 80px;
		}
		.info__name {
			font-size: 22px;
		}

		.info__data {
			font-size: 16px;
		}
	}

	@media (max-width: 375px) {
		.item__icon {
			width: 60px;
		}
	}
`,kA=()=>T(bA,{children:[p("div",{className:"banner-image",children:p("img",{className:"banner-image__inner",src:gA,alt:""})}),T("div",{className:"description",children:[p(et,{children:"We'd love to talk about how we can work together."}),p(qe,{className:"description__paragraph",children:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}),T("ul",{className:"description__list",children:[T("li",{className:"list__item",children:[p("img",{className:"item__icon",src:yA,alt:""}),T("div",{className:"item__info",children:[p("span",{className:"info__name",children:"Email"}),p("span",{className:"info__data",children:"support@organic.com"})]})]}),T("li",{className:"list__item",children:[p("img",{className:"item__icon",src:vA,alt:""}),T("div",{className:"item__info",children:[p("span",{className:"info__name",children:"Contact Us"}),p("span",{className:"info__data",children:"+01 123 456 789"})]})]})]}),T("div",{className:"description__social-media",children:[p("img",{src:xA,alt:""}),p("img",{src:wA,alt:""}),p("img",{src:_A,alt:""}),p("img",{src:SA,alt:""})]})]})]}),Sy="/organick/assets/locationIcon-f6e64b4a.svg",CA="/organick/assets/contactLocationGreenBackground-5f6ea9ce.jpg",PA=de.div`
	margin: 0 260px;
	margin-bottom: 80px;
	background: url(${CA}) no-repeat center center/cover;
	min-height: 750px;
	border-radius: 25px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	/* padding: 0 100px; */

	.info {
		background: #fff;
		max-width: 500px;
		padding: 45px;
		margin-right: 100px;
		border-radius: 25px;
	}

	.info__text {
		margin-top: 20px;
	}

	.list__item {
		display: flex;
		align-items: center;
	}

	.info__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.location__city {
		font-family: 'Open Sans';
		font-weight: 700;
		font-size: 18px;

		color: #525c60;
	}

	.item__location {
		margin-left: 10px;
	}

	@media (max-width: 1440px) {
		margin: 0 60px;
	}

	@media (max-width: 1024px) {
		justify-content: center;

		.info {
			padding: 30px;
			max-width: 500px;
			margin-right: 0px;
		}
	}

	@media (max-width: 768px) {
		margin: 0 20px;
		.info {
			width: 100%;
			margin: 25px;
		}
	}

	@media (max-width: 425px) {
		width: 100%;
		margin: 0;
		border-radius: 0;
		.info {
			padding: 20px;
			border-radius: 0;
			margin: 0;
			width: 100%;
		}
	}
`,EA=()=>p(PA,{children:T("div",{className:"info",children:[p(Xt,{children:"Location"}),p(et,{children:"Our Farms"}),p(qe,{className:"info__text",children:"Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using."}),T("ul",{className:"info__list",children:[T("li",{className:"list__item",children:[p("img",{src:Sy,alt:""}),T("div",{className:"item__location",children:[p("span",{className:"location__city",children:"New York, USA:"}),p(qe,{children:"299 Park Avenue New York, New York 10171"})]})]}),T("li",{className:"list__item",children:[p("img",{src:Sy,alt:""}),T("div",{className:"item__location",children:[p("span",{className:"location__city",children:"London, UK:"}),p(qe,{children:"30 Stamford Street, London SE1 9LQ"})]})]})]})]})});var _e;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function n(i){throw new Error}e.assertNever=n,e.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},e.getValidEnumValues=i=>{const s=e.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),o={};for(const a of s)o[a]=i[a];return e.objectValues(o)},e.objectValues=i=>e.objectKeys(i).map(function(s){return i[s]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},e.find=(i,s)=>{for(const o of i)if(s(o))return o},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}e.joinValues=r,e.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(_e||(_e={}));var wf;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(wf||(wf={}));const U=_e.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),er=e=>{switch(typeof e){case"undefined":return U.undefined;case"string":return U.string;case"number":return isNaN(e)?U.nan:U.number;case"boolean":return U.boolean;case"function":return U.function;case"bigint":return U.bigint;case"symbol":return U.symbol;case"object":return Array.isArray(e)?U.array:e===null?U.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?U.promise:typeof Map<"u"&&e instanceof Map?U.map:typeof Set<"u"&&e instanceof Set?U.set:typeof Date<"u"&&e instanceof Date?U.date:U.object;default:return U.unknown}},M=_e.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),TA=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class un extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(s){return s.message},r={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let a=r,l=0;for(;l<o.path.length;){const u=o.path[l];l===o.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(o))):a[u]=a[u]||{_errors:[]},a=a[u],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,_e.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}un.create=e=>new un(e);const xo=(e,t)=>{let n;switch(e.code){case M.invalid_type:e.received===U.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case M.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,_e.jsonStringifyReplacer)}`;break;case M.unrecognized_keys:n=`Unrecognized key(s) in object: ${_e.joinValues(e.keys,", ")}`;break;case M.invalid_union:n="Invalid input";break;case M.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${_e.joinValues(e.options)}`;break;case M.invalid_enum_value:n=`Invalid enum value. Expected ${_e.joinValues(e.options)}, received '${e.received}'`;break;case M.invalid_arguments:n="Invalid function arguments";break;case M.invalid_return_type:n="Invalid function return type";break;case M.invalid_date:n="Invalid date";break;case M.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:_e.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case M.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case M.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case M.custom:n="Invalid input";break;case M.invalid_intersection_types:n="Intersection results could not be merged";break;case M.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case M.not_finite:n="Number must be finite";break;default:n=t.defaultError,_e.assertNever(e)}return{message:n}};let lw=xo;function NA(e){lw=e}function Nl(){return lw}const Ol=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,s=[...n,...i.path||[]],o={...i,path:s};let a="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)a=u(o,{data:t,defaultError:a}).message;return{...i,path:s,message:i.message||a}},OA=[];function W(e,t){const n=Ol({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Nl(),xo].filter(r=>!!r)});e.common.issues.push(n)}class gt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const i of n){if(i.status==="aborted")return ue;i.status==="dirty"&&t.dirty(),r.push(i.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return gt.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const i of n){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return ue;s.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),(typeof o.value<"u"||i.alwaysSet)&&(r[s.value]=o.value)}return{status:t.value,value:r}}}const ue=Object.freeze({status:"aborted"}),uw=e=>({status:"dirty",value:e}),bt=e=>({status:"valid",value:e}),_f=e=>e.status==="aborted",Sf=e=>e.status==="dirty",Rl=e=>e.status==="valid",Al=e=>typeof Promise<"u"&&e instanceof Promise;var ne;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(ne||(ne={}));class Sn{constructor(t,n,r,i){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const by=(e,t)=>{if(Rl(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new un(e.common.issues);return this._error=n,this._error}}};function fe(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:i}}class pe{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return er(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:er(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new gt,ctx:{common:t.parent.common,data:t.data,parsedType:er(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Al(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:er(t)},s=this._parseSync({data:t,path:i.path,parent:i});return by(i,s)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:er(t)},i=this._parse({data:t,path:r.path,parent:r}),s=await(Al(i)?i:Promise.resolve(i));return by(r,s)}refine(t,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,s)=>{const o=t(i),a=()=>s.addIssue({code:M.custom,...r(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(t,n){return this._refinement((r,i)=>t(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(t){return new fn({schema:this,typeName:ae.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return Dn.create(this,this._def)}nullable(){return ii.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return cn.create(this,this._def)}promise(){return rs.create(this,this._def)}or(t){return bo.create([this,t],this._def)}and(t){return ko.create(this,t,this._def)}transform(t){return new fn({...fe(this._def),schema:this,typeName:ae.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new No({...fe(this._def),innerType:this,defaultValue:n,typeName:ae.ZodDefault})}brand(){return new dw({typeName:ae.ZodBranded,type:this,...fe(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ll({...fe(this._def),innerType:this,catchValue:n,typeName:ae.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return Ho.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const RA=/^c[^\s-]{8,}$/i,AA=/^[a-z][a-z0-9]*$/,IA=/[0-9A-HJKMNP-TV-Z]{26}/,DA=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,MA=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,LA=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,jA=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,VA=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,FA=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function $A(e,t){return!!((t==="v4"||!t)&&jA.test(e)||(t==="v6"||!t)&&VA.test(e))}class on extends pe{constructor(){super(...arguments),this._regex=(t,n,r)=>this.refinement(i=>t.test(i),{validation:n,code:M.invalid_string,...ne.errToObj(r)}),this.nonempty=t=>this.min(1,ne.errToObj(t)),this.trim=()=>new on({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new on({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new on({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==U.string){const s=this._getOrReturnCtx(t);return W(s,{code:M.invalid_type,expected:U.string,received:s.parsedType}),ue}const r=new gt;let i;for(const s of this._def.checks)if(s.kind==="min")t.data.length<s.value&&(i=this._getOrReturnCtx(t,i),W(i,{code:M.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="max")t.data.length>s.value&&(i=this._getOrReturnCtx(t,i),W(i,{code:M.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="length"){const o=t.data.length>s.value,a=t.data.length<s.value;(o||a)&&(i=this._getOrReturnCtx(t,i),o?W(i,{code:M.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):a&&W(i,{code:M.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),r.dirty())}else if(s.kind==="email")MA.test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"email",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="emoji")LA.test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"emoji",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="uuid")DA.test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"uuid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid")RA.test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"cuid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid2")AA.test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"cuid2",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="ulid")IA.test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"ulid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),W(i,{validation:"url",code:M.invalid_string,message:s.message}),r.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"regex",code:M.invalid_string,message:s.message}),r.dirty())):s.kind==="trim"?t.data=t.data.trim():s.kind==="includes"?t.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(t,i),W(i,{code:M.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),r.dirty()):s.kind==="toLowerCase"?t.data=t.data.toLowerCase():s.kind==="toUpperCase"?t.data=t.data.toUpperCase():s.kind==="startsWith"?t.data.startsWith(s.value)||(i=this._getOrReturnCtx(t,i),W(i,{code:M.invalid_string,validation:{startsWith:s.value},message:s.message}),r.dirty()):s.kind==="endsWith"?t.data.endsWith(s.value)||(i=this._getOrReturnCtx(t,i),W(i,{code:M.invalid_string,validation:{endsWith:s.value},message:s.message}),r.dirty()):s.kind==="datetime"?FA(s).test(t.data)||(i=this._getOrReturnCtx(t,i),W(i,{code:M.invalid_string,validation:"datetime",message:s.message}),r.dirty()):s.kind==="ip"?$A(t.data,s.version)||(i=this._getOrReturnCtx(t,i),W(i,{validation:"ip",code:M.invalid_string,message:s.message}),r.dirty()):_e.assertNever(s);return{status:r.value,value:t.data}}_addCheck(t){return new on({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...ne.errToObj(t)})}url(t){return this._addCheck({kind:"url",...ne.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...ne.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...ne.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...ne.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...ne.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...ne.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...ne.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...ne.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...ne.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...ne.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...ne.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...ne.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...ne.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...ne.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...ne.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}on.create=e=>{var t;return new on({checks:[],typeName:ae.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...fe(e)})};function zA(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r,s=parseInt(e.toFixed(i).replace(".","")),o=parseInt(t.toFixed(i).replace(".",""));return s%o/Math.pow(10,i)}class kr extends pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==U.number){const s=this._getOrReturnCtx(t);return W(s,{code:M.invalid_type,expected:U.number,received:s.parsedType}),ue}let r;const i=new gt;for(const s of this._def.checks)s.kind==="int"?_e.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),W(r,{code:M.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(r=this._getOrReturnCtx(t,r),W(r,{code:M.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(r=this._getOrReturnCtx(t,r),W(r,{code:M.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?zA(t.data,s.value)!==0&&(r=this._getOrReturnCtx(t,r),W(r,{code:M.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),W(r,{code:M.not_finite,message:s.message}),i.dirty()):_e.assertNever(s);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ne.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ne.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ne.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ne.toString(n))}setLimit(t,n,r,i){return new kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:ne.toString(i)}]})}_addCheck(t){return new kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:ne.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ne.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ne.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ne.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ne.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ne.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:ne.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ne.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ne.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&_e.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}kr.create=e=>new kr({checks:[],typeName:ae.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...fe(e)});class Cr extends pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==U.bigint){const s=this._getOrReturnCtx(t);return W(s,{code:M.invalid_type,expected:U.bigint,received:s.parsedType}),ue}let r;const i=new gt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(r=this._getOrReturnCtx(t,r),W(r,{code:M.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(r=this._getOrReturnCtx(t,r),W(r,{code:M.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?t.data%s.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),W(r,{code:M.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):_e.assertNever(s);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ne.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ne.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ne.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ne.toString(n))}setLimit(t,n,r,i){return new Cr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:ne.toString(i)}]})}_addCheck(t){return new Cr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ne.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ne.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ne.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ne.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ne.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Cr.create=e=>{var t;return new Cr({checks:[],typeName:ae.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...fe(e)})};class wo extends pe{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==U.boolean){const r=this._getOrReturnCtx(t);return W(r,{code:M.invalid_type,expected:U.boolean,received:r.parsedType}),ue}return bt(t.data)}}wo.create=e=>new wo({typeName:ae.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...fe(e)});class ni extends pe{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==U.date){const s=this._getOrReturnCtx(t);return W(s,{code:M.invalid_type,expected:U.date,received:s.parsedType}),ue}if(isNaN(t.data.getTime())){const s=this._getOrReturnCtx(t);return W(s,{code:M.invalid_date}),ue}const r=new gt;let i;for(const s of this._def.checks)s.kind==="min"?t.data.getTime()<s.value&&(i=this._getOrReturnCtx(t,i),W(i,{code:M.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),r.dirty()):s.kind==="max"?t.data.getTime()>s.value&&(i=this._getOrReturnCtx(t,i),W(i,{code:M.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),r.dirty()):_e.assertNever(s);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new ni({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:ne.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:ne.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}ni.create=e=>new ni({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:ae.ZodDate,...fe(e)});class Il extends pe{_parse(t){if(this._getType(t)!==U.symbol){const r=this._getOrReturnCtx(t);return W(r,{code:M.invalid_type,expected:U.symbol,received:r.parsedType}),ue}return bt(t.data)}}Il.create=e=>new Il({typeName:ae.ZodSymbol,...fe(e)});class _o extends pe{_parse(t){if(this._getType(t)!==U.undefined){const r=this._getOrReturnCtx(t);return W(r,{code:M.invalid_type,expected:U.undefined,received:r.parsedType}),ue}return bt(t.data)}}_o.create=e=>new _o({typeName:ae.ZodUndefined,...fe(e)});class So extends pe{_parse(t){if(this._getType(t)!==U.null){const r=this._getOrReturnCtx(t);return W(r,{code:M.invalid_type,expected:U.null,received:r.parsedType}),ue}return bt(t.data)}}So.create=e=>new So({typeName:ae.ZodNull,...fe(e)});class ns extends pe{constructor(){super(...arguments),this._any=!0}_parse(t){return bt(t.data)}}ns.create=e=>new ns({typeName:ae.ZodAny,...fe(e)});class qr extends pe{constructor(){super(...arguments),this._unknown=!0}_parse(t){return bt(t.data)}}qr.create=e=>new qr({typeName:ae.ZodUnknown,...fe(e)});class zn extends pe{_parse(t){const n=this._getOrReturnCtx(t);return W(n,{code:M.invalid_type,expected:U.never,received:n.parsedType}),ue}}zn.create=e=>new zn({typeName:ae.ZodNever,...fe(e)});class Dl extends pe{_parse(t){if(this._getType(t)!==U.undefined){const r=this._getOrReturnCtx(t);return W(r,{code:M.invalid_type,expected:U.void,received:r.parsedType}),ue}return bt(t.data)}}Dl.create=e=>new Dl({typeName:ae.ZodVoid,...fe(e)});class cn extends pe{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),i=this._def;if(n.parsedType!==U.array)return W(n,{code:M.invalid_type,expected:U.array,received:n.parsedType}),ue;if(i.exactLength!==null){const o=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(o||a)&&(W(n,{code:o?M.too_big:M.too_small,minimum:a?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(W(n,{code:M.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(W(n,{code:M.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>i.type._parseAsync(new Sn(n,o,n.path,a)))).then(o=>gt.mergeArray(r,o));const s=[...n.data].map((o,a)=>i.type._parseSync(new Sn(n,o,n.path,a)));return gt.mergeArray(r,s)}get element(){return this._def.type}min(t,n){return new cn({...this._def,minLength:{value:t,message:ne.toString(n)}})}max(t,n){return new cn({...this._def,maxLength:{value:t,message:ne.toString(n)}})}length(t,n){return new cn({...this._def,exactLength:{value:t,message:ne.toString(n)}})}nonempty(t){return this.min(1,t)}}cn.create=(e,t)=>new cn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ae.ZodArray,...fe(t)});function mi(e){if(e instanceof Le){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Dn.create(mi(r))}return new Le({...e._def,shape:()=>t})}else return e instanceof cn?new cn({...e._def,type:mi(e.element)}):e instanceof Dn?Dn.create(mi(e.unwrap())):e instanceof ii?ii.create(mi(e.unwrap())):e instanceof bn?bn.create(e.items.map(t=>mi(t))):e}class Le extends pe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=_e.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==U.object){const u=this._getOrReturnCtx(t);return W(u,{code:M.invalid_type,expected:U.object,received:u.parsedType}),ue}const{status:r,ctx:i}=this._processInputParams(t),{shape:s,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof zn&&this._def.unknownKeys==="strip"))for(const u in i.data)o.includes(u)||a.push(u);const l=[];for(const u of o){const c=s[u],d=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Sn(i,d,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof zn){const u=this._def.unknownKeys;if(u==="passthrough")for(const c of a)l.push({key:{status:"valid",value:c},value:{status:"valid",value:i.data[c]}});else if(u==="strict")a.length>0&&(W(i,{code:M.unrecognized_keys,keys:a}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const c of a){const d=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Sn(i,d,i.path,c)),alwaysSet:c in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const c of l){const d=await c.key;u.push({key:d,value:await c.value,alwaysSet:c.alwaysSet})}return u}).then(u=>gt.mergeObjectSync(r,u)):gt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return ne.errToObj,new Le({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var i,s,o,a;const l=(o=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=ne.errToObj(t).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new Le({...this._def,unknownKeys:"strip"})}passthrough(){return new Le({...this._def,unknownKeys:"passthrough"})}extend(t){return new Le({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new Le({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ae.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new Le({...this._def,catchall:t})}pick(t){const n={};return _e.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Le({...this._def,shape:()=>n})}omit(t){const n={};return _e.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new Le({...this._def,shape:()=>n})}deepPartial(){return mi(this)}partial(t){const n={};return _e.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];t&&!t[r]?n[r]=i:n[r]=i.optional()}),new Le({...this._def,shape:()=>n})}required(t){const n={};return _e.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let s=this.shape[r];for(;s instanceof Dn;)s=s._def.innerType;n[r]=s}}),new Le({...this._def,shape:()=>n})}keyof(){return cw(_e.objectKeys(this.shape))}}Le.create=(e,t)=>new Le({shape:()=>e,unknownKeys:"strip",catchall:zn.create(),typeName:ae.ZodObject,...fe(t)});Le.strictCreate=(e,t)=>new Le({shape:()=>e,unknownKeys:"strict",catchall:zn.create(),typeName:ae.ZodObject,...fe(t)});Le.lazycreate=(e,t)=>new Le({shape:e,unknownKeys:"strip",catchall:zn.create(),typeName:ae.ZodObject,...fe(t)});class bo extends pe{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function i(s){for(const a of s)if(a.result.status==="valid")return a.result;for(const a of s)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=s.map(a=>new un(a.ctx.common.issues));return W(n,{code:M.invalid_union,unionErrors:o}),ue}if(n.common.async)return Promise.all(r.map(async s=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await s._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(i);{let s;const o=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},c=l._parseSync({data:n.data,path:n.path,parent:u});if(c.status==="valid")return c;c.status==="dirty"&&!s&&(s={result:c,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(s)return n.common.issues.push(...s.ctx.common.issues),s.result;const a=o.map(l=>new un(l));return W(n,{code:M.invalid_union,unionErrors:a}),ue}}get options(){return this._def.options}}bo.create=(e,t)=>new bo({options:e,typeName:ae.ZodUnion,...fe(t)});const Aa=e=>e instanceof Po?Aa(e.schema):e instanceof fn?Aa(e.innerType()):e instanceof Eo?[e.value]:e instanceof Pr?e.options:e instanceof To?Object.keys(e.enum):e instanceof No?Aa(e._def.innerType):e instanceof _o?[void 0]:e instanceof So?[null]:null;class Fu extends pe{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==U.object)return W(n,{code:M.invalid_type,expected:U.object,received:n.parsedType}),ue;const r=this.discriminator,i=n.data[r],s=this.optionsMap.get(i);return s?n.common.async?s._parseAsync({data:n.data,path:n.path,parent:n}):s._parseSync({data:n.data,path:n.path,parent:n}):(W(n,{code:M.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),ue)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const i=new Map;for(const s of n){const o=Aa(s.shape[t]);if(!o)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of o){if(i.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);i.set(a,s)}}return new Fu({typeName:ae.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...fe(r)})}}function bf(e,t){const n=er(e),r=er(t);if(e===t)return{valid:!0,data:e};if(n===U.object&&r===U.object){const i=_e.objectKeys(t),s=_e.objectKeys(e).filter(a=>i.indexOf(a)!==-1),o={...e,...t};for(const a of s){const l=bf(e[a],t[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(n===U.array&&r===U.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let s=0;s<e.length;s++){const o=e[s],a=t[s],l=bf(o,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===U.date&&r===U.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class ko extends pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=(s,o)=>{if(_f(s)||_f(o))return ue;const a=bf(s.value,o.value);return a.valid?((Sf(s)||Sf(o))&&n.dirty(),{status:n.value,value:a.data}):(W(r,{code:M.invalid_intersection_types}),ue)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([s,o])=>i(s,o)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}ko.create=(e,t,n)=>new ko({left:e,right:t,typeName:ae.ZodIntersection,...fe(n)});class bn extends pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==U.array)return W(r,{code:M.invalid_type,expected:U.array,received:r.parsedType}),ue;if(r.data.length<this._def.items.length)return W(r,{code:M.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ue;!this._def.rest&&r.data.length>this._def.items.length&&(W(r,{code:M.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const s=[...r.data].map((o,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Sn(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(s).then(o=>gt.mergeArray(n,o)):gt.mergeArray(n,s)}get items(){return this._def.items}rest(t){return new bn({...this._def,rest:t})}}bn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new bn({items:e,typeName:ae.ZodTuple,rest:null,...fe(t)})};class Co extends pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==U.object)return W(r,{code:M.invalid_type,expected:U.object,received:r.parsedType}),ue;const i=[],s=this._def.keyType,o=this._def.valueType;for(const a in r.data)i.push({key:s._parse(new Sn(r,a,r.path,a)),value:o._parse(new Sn(r,r.data[a],r.path,a))});return r.common.async?gt.mergeObjectAsync(n,i):gt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof pe?new Co({keyType:t,valueType:n,typeName:ae.ZodRecord,...fe(r)}):new Co({keyType:on.create(),valueType:t,typeName:ae.ZodRecord,...fe(n)})}}class Ml extends pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==U.map)return W(r,{code:M.invalid_type,expected:U.map,received:r.parsedType}),ue;const i=this._def.keyType,s=this._def.valueType,o=[...r.data.entries()].map(([a,l],u)=>({key:i._parse(new Sn(r,a,r.path,[u,"key"])),value:s._parse(new Sn(r,l,r.path,[u,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of o){const u=await l.key,c=await l.value;if(u.status==="aborted"||c.status==="aborted")return ue;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),a.set(u.value,c.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of o){const u=l.key,c=l.value;if(u.status==="aborted"||c.status==="aborted")return ue;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),a.set(u.value,c.value)}return{status:n.value,value:a}}}}Ml.create=(e,t,n)=>new Ml({valueType:t,keyType:e,typeName:ae.ZodMap,...fe(n)});class ri extends pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==U.set)return W(r,{code:M.invalid_type,expected:U.set,received:r.parsedType}),ue;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(W(r,{code:M.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(W(r,{code:M.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const s=this._def.valueType;function o(l){const u=new Set;for(const c of l){if(c.status==="aborted")return ue;c.status==="dirty"&&n.dirty(),u.add(c.value)}return{status:n.value,value:u}}const a=[...r.data.values()].map((l,u)=>s._parse(new Sn(r,l,r.path,u)));return r.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(t,n){return new ri({...this._def,minSize:{value:t,message:ne.toString(n)}})}max(t,n){return new ri({...this._def,maxSize:{value:t,message:ne.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}ri.create=(e,t)=>new ri({valueType:e,minSize:null,maxSize:null,typeName:ae.ZodSet,...fe(t)});class Bi extends pe{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==U.function)return W(n,{code:M.invalid_type,expected:U.function,received:n.parsedType}),ue;function r(a,l){return Ol({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Nl(),xo].filter(u=>!!u),issueData:{code:M.invalid_arguments,argumentsError:l}})}function i(a,l){return Ol({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Nl(),xo].filter(u=>!!u),issueData:{code:M.invalid_return_type,returnTypeError:l}})}const s={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof rs?bt(async(...a)=>{const l=new un([]),u=await this._def.args.parseAsync(a,s).catch(f=>{throw l.addIssue(r(a,f)),l}),c=await o(...u);return await this._def.returns._def.type.parseAsync(c,s).catch(f=>{throw l.addIssue(i(c,f)),l})}):bt((...a)=>{const l=this._def.args.safeParse(a,s);if(!l.success)throw new un([r(a,l.error)]);const u=o(...l.data),c=this._def.returns.safeParse(u,s);if(!c.success)throw new un([i(u,c.error)]);return c.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Bi({...this._def,args:bn.create(t).rest(qr.create())})}returns(t){return new Bi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Bi({args:t||bn.create([]).rest(qr.create()),returns:n||qr.create(),typeName:ae.ZodFunction,...fe(r)})}}class Po extends pe{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Po.create=(e,t)=>new Po({getter:e,typeName:ae.ZodLazy,...fe(t)});class Eo extends pe{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return W(n,{received:n.data,code:M.invalid_literal,expected:this._def.value}),ue}return{status:"valid",value:t.data}}get value(){return this._def.value}}Eo.create=(e,t)=>new Eo({value:e,typeName:ae.ZodLiteral,...fe(t)});function cw(e,t){return new Pr({values:e,typeName:ae.ZodEnum,...fe(t)})}class Pr extends pe{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return W(n,{expected:_e.joinValues(r),received:n.parsedType,code:M.invalid_type}),ue}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return W(n,{received:n.data,code:M.invalid_enum_value,options:r}),ue}return bt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Pr.create(t)}exclude(t){return Pr.create(this.options.filter(n=>!t.includes(n)))}}Pr.create=cw;class To extends pe{_parse(t){const n=_e.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==U.string&&r.parsedType!==U.number){const i=_e.objectValues(n);return W(r,{expected:_e.joinValues(i),received:r.parsedType,code:M.invalid_type}),ue}if(n.indexOf(t.data)===-1){const i=_e.objectValues(n);return W(r,{received:r.data,code:M.invalid_enum_value,options:i}),ue}return bt(t.data)}get enum(){return this._def.values}}To.create=(e,t)=>new To({values:e,typeName:ae.ZodNativeEnum,...fe(t)});class rs extends pe{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==U.promise&&n.common.async===!1)return W(n,{code:M.invalid_type,expected:U.promise,received:n.parsedType}),ue;const r=n.parsedType===U.promise?n.data:Promise.resolve(n.data);return bt(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}rs.create=(e,t)=>new rs({type:e,typeName:ae.ZodPromise,...fe(t)});class fn extends pe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ae.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=this._def.effect||null;if(i.type==="preprocess"){const o=i.transform(r.data);return r.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}const s={addIssue:o=>{W(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(s.addIssue=s.addIssue.bind(s),i.type==="refinement"){const o=a=>{const l=i.refinement(a,s);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?ue:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?ue:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Rl(o))return o;const a=i.transform(o.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Rl(o)?Promise.resolve(i.transform(o.value,s)).then(a=>({status:n.value,value:a})):o);_e.assertNever(i)}}fn.create=(e,t,n)=>new fn({schema:e,typeName:ae.ZodEffects,effect:t,...fe(n)});fn.createWithPreprocess=(e,t,n)=>new fn({schema:t,effect:{type:"preprocess",transform:e},typeName:ae.ZodEffects,...fe(n)});class Dn extends pe{_parse(t){return this._getType(t)===U.undefined?bt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Dn.create=(e,t)=>new Dn({innerType:e,typeName:ae.ZodOptional,...fe(t)});class ii extends pe{_parse(t){return this._getType(t)===U.null?bt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}ii.create=(e,t)=>new ii({innerType:e,typeName:ae.ZodNullable,...fe(t)});class No extends pe{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===U.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}No.create=(e,t)=>new No({innerType:e,typeName:ae.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...fe(t)});class Ll extends pe{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Al(i)?i.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new un(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new un(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Ll.create=(e,t)=>new Ll({innerType:e,typeName:ae.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...fe(t)});class jl extends pe{_parse(t){if(this._getType(t)!==U.nan){const r=this._getOrReturnCtx(t);return W(r,{code:M.invalid_type,expected:U.nan,received:r.parsedType}),ue}return{status:"valid",value:t.data}}}jl.create=e=>new jl({typeName:ae.ZodNaN,...fe(e)});const BA=Symbol("zod_brand");class dw extends pe{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Ho extends pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?ue:s.status==="dirty"?(n.dirty(),uw(s.value)):this._def.out._parseAsync({data:s.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?ue:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(t,n){return new Ho({in:t,out:n,typeName:ae.ZodPipeline})}}const fw=(e,t={},n)=>e?ns.create().superRefine((r,i)=>{var s,o;if(!e(r)){const a=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(o=(s=a.fatal)!==null&&s!==void 0?s:n)!==null&&o!==void 0?o:!0,u=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...u,fatal:l})}}):ns.create(),UA={object:Le.lazycreate};var ae;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(ae||(ae={}));const WA=(e,t={message:`Input not instance of ${e.name}`})=>fw(n=>n instanceof e,t),hw=on.create,pw=kr.create,HA=jl.create,QA=Cr.create,mw=wo.create,ZA=ni.create,qA=Il.create,KA=_o.create,GA=So.create,YA=ns.create,XA=qr.create,JA=zn.create,e5=Dl.create,t5=cn.create,n5=Le.create,r5=Le.strictCreate,i5=bo.create,s5=Fu.create,o5=ko.create,a5=bn.create,l5=Co.create,u5=Ml.create,c5=ri.create,d5=Bi.create,f5=Po.create,h5=Eo.create,p5=Pr.create,m5=To.create,g5=rs.create,ky=fn.create,y5=Dn.create,v5=ii.create,x5=fn.createWithPreprocess,w5=Ho.create,_5=()=>hw().optional(),S5=()=>pw().optional(),b5=()=>mw().optional(),k5={string:e=>on.create({...e,coerce:!0}),number:e=>kr.create({...e,coerce:!0}),boolean:e=>wo.create({...e,coerce:!0}),bigint:e=>Cr.create({...e,coerce:!0}),date:e=>ni.create({...e,coerce:!0})},C5=ue;var fi=Object.freeze({__proto__:null,defaultErrorMap:xo,setErrorMap:NA,getErrorMap:Nl,makeIssue:Ol,EMPTY_PATH:OA,addIssueToContext:W,ParseStatus:gt,INVALID:ue,DIRTY:uw,OK:bt,isAborted:_f,isDirty:Sf,isValid:Rl,isAsync:Al,get util(){return _e},get objectUtil(){return wf},ZodParsedType:U,getParsedType:er,ZodType:pe,ZodString:on,ZodNumber:kr,ZodBigInt:Cr,ZodBoolean:wo,ZodDate:ni,ZodSymbol:Il,ZodUndefined:_o,ZodNull:So,ZodAny:ns,ZodUnknown:qr,ZodNever:zn,ZodVoid:Dl,ZodArray:cn,ZodObject:Le,ZodUnion:bo,ZodDiscriminatedUnion:Fu,ZodIntersection:ko,ZodTuple:bn,ZodRecord:Co,ZodMap:Ml,ZodSet:ri,ZodFunction:Bi,ZodLazy:Po,ZodLiteral:Eo,ZodEnum:Pr,ZodNativeEnum:To,ZodPromise:rs,ZodEffects:fn,ZodTransformer:fn,ZodOptional:Dn,ZodNullable:ii,ZodDefault:No,ZodCatch:Ll,ZodNaN:jl,BRAND:BA,ZodBranded:dw,ZodPipeline:Ho,custom:fw,Schema:pe,ZodSchema:pe,late:UA,get ZodFirstPartyTypeKind(){return ae},coerce:k5,any:YA,array:t5,bigint:QA,boolean:mw,date:ZA,discriminatedUnion:s5,effect:ky,enum:p5,function:d5,instanceof:WA,intersection:o5,lazy:f5,literal:h5,map:u5,nan:HA,nativeEnum:m5,never:JA,null:GA,nullable:v5,number:pw,object:n5,oboolean:b5,onumber:S5,optional:y5,ostring:_5,pipeline:w5,preprocess:x5,promise:g5,record:l5,set:c5,strictObject:r5,string:hw,symbol:qA,transformer:ky,tuple:a5,undefined:KA,union:i5,unknown:XA,void:e5,NEVER:C5,ZodIssueCode:M,quotelessJson:TA,ZodError:un}),Qo=e=>e.type==="checkbox",Ai=e=>e instanceof Date,wt=e=>e==null;const gw=e=>typeof e=="object";var tt=e=>!wt(e)&&!Array.isArray(e)&&gw(e)&&!Ai(e),P5=e=>tt(e)&&e.target?Qo(e.target)?e.target.checked:e.target.value:e,E5=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,T5=(e,t)=>e.has(E5(t)),N5=e=>{const t=e.constructor&&e.constructor.prototype;return tt(t)&&t.hasOwnProperty("isPrototypeOf")},cp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Fr(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(cp&&(e instanceof Blob||e instanceof FileList))&&(n||tt(e)))if(t=n?[]:{},!Array.isArray(e)&&!N5(e))t=e;else for(const r in e)t[r]=Fr(e[r]);else return e;return t}var Zo=e=>Array.isArray(e)?e.filter(Boolean):[],He=e=>e===void 0,K=(e,t,n)=>{if(!t||!tt(e))return n;const r=Zo(t.split(/[,[\].]+?/)).reduce((i,s)=>wt(i)?i:i[s],e);return He(r)||r===e?He(e[t])?n:e[t]:r};const Cy={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},sn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},kn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};pt.createContext(null);var O5=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==sn.all&&(t._proxyFormState[o]=!r||sn.all),n&&(n[o]=!0),e[o]}});return i},Wt=e=>tt(e)&&!Object.keys(e).length,R5=(e,t,n,r)=>{n(e);const{name:i,...s}=e;return Wt(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||sn.all))},jc=e=>Array.isArray(e)?e:[e];function A5(e){const t=pt.useRef(e);t.current=e,pt.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var yn=e=>typeof e=="string",I5=(e,t,n,r,i)=>yn(e)?(r&&t.watch.add(e),K(n,e,i)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),K(n,s))):(r&&(t.watchAll=!0),n),dp=e=>/^\w*$/.test(e),yw=e=>Zo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Oe(e,t,n){let r=-1;const i=dp(t)?[t]:yw(t),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=e[a];l=tt(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[a]=l,e=e[a]}return e}var vw=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const kf=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=K(e,r);if(i){const{_f:s,...o}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else tt(o)&&kf(o,t)}}};var Py=e=>({isOnSubmit:!e||e===sn.onSubmit,isOnBlur:e===sn.onBlur,isOnChange:e===sn.onChange,isOnAll:e===sn.all,isOnTouch:e===sn.onTouched}),Ey=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),D5=(e,t,n)=>{const r=Zo(K(e,n));return Oe(r,"root",t[n]),Oe(e,n,r),e},Ui=e=>typeof e=="boolean",fp=e=>e.type==="file",ir=e=>typeof e=="function",Vl=e=>{if(!cp)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ia=e=>yn(e),hp=e=>e.type==="radio",Fl=e=>e instanceof RegExp;const Ty={value:!1,isValid:!1},Ny={value:!0,isValid:!0};var xw=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!He(e[0].attributes.value)?He(e[0].value)||e[0].value===""?Ny:{value:e[0].value,isValid:!0}:Ny:Ty}return Ty};const Oy={isValid:!1,value:null};var ww=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Oy):Oy;function Ry(e,t,n="validate"){if(Ia(e)||Array.isArray(e)&&e.every(Ia)||Ui(e)&&!e)return{type:n,message:Ia(e)?e:"",ref:t}}var hi=e=>tt(e)&&!Fl(e)?e:{value:e,message:""},Ay=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:m,name:v,valueAsNumber:x,mount:_,disabled:y}=e._f,h=K(t,v);if(!_||y)return{};const g=o?o[0]:s,w=G=>{r&&g.reportValidity&&(g.setCustomValidity(Ui(G)?"":G||""),g.reportValidity())},k={},R=hp(s),N=Qo(s),E=R||N,L=(x||fp(s))&&He(s.value)&&He(h)||Vl(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,$=vw.bind(null,v,n,k),oe=(G,q,J,re=kn.maxLength,Se=kn.minLength)=>{const ve=G?q:J;k[v]={type:G?re:Se,message:ve,ref:s,...$(G?re:Se,ve)}};if(i?!Array.isArray(h)||!h.length:a&&(!E&&(L||wt(h))||Ui(h)&&!h||N&&!xw(o).isValid||R&&!ww(o).isValid)){const{value:G,message:q}=Ia(a)?{value:!!a,message:a}:hi(a);if(G&&(k[v]={type:kn.required,message:q,ref:g,...$(kn.required,q)},!n))return w(q),k}if(!L&&(!wt(c)||!wt(d))){let G,q;const J=hi(d),re=hi(c);if(!wt(h)&&!isNaN(h)){const Se=s.valueAsNumber||h&&+h;wt(J.value)||(G=Se>J.value),wt(re.value)||(q=Se<re.value)}else{const Se=s.valueAsDate||new Date(h),ve=ee=>new Date(new Date().toDateString()+" "+ee),D=s.type=="time",X=s.type=="week";yn(J.value)&&h&&(G=D?ve(h)>ve(J.value):X?h>J.value:Se>new Date(J.value)),yn(re.value)&&h&&(q=D?ve(h)<ve(re.value):X?h<re.value:Se<new Date(re.value))}if((G||q)&&(oe(!!G,J.message,re.message,kn.max,kn.min),!n))return w(k[v].message),k}if((l||u)&&!L&&(yn(h)||i&&Array.isArray(h))){const G=hi(l),q=hi(u),J=!wt(G.value)&&h.length>+G.value,re=!wt(q.value)&&h.length<+q.value;if((J||re)&&(oe(J,G.message,q.message),!n))return w(k[v].message),k}if(f&&!L&&yn(h)){const{value:G,message:q}=hi(f);if(Fl(G)&&!h.match(G)&&(k[v]={type:kn.pattern,message:q,ref:s,...$(kn.pattern,q)},!n))return w(q),k}if(m){if(ir(m)){const G=await m(h,t),q=Ry(G,g);if(q&&(k[v]={...q,...$(kn.validate,q.message)},!n))return w(q.message),k}else if(tt(m)){let G={};for(const q in m){if(!Wt(G)&&!n)break;const J=Ry(await m[q](h,t),g,q);J&&(G={...J,...$(q,J.message)},w(J.message),n&&(k[v]=G))}if(!Wt(G)&&(k[v]={ref:g,...G},!n))return k}}return w(!0),k};function M5(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=He(e)?r++:e[t[r++]];return e}function L5(e){for(const t in e)if(!He(e[t]))return!1;return!0}function ot(e,t){const n=Array.isArray(t)?t:dp(t)?[t]:yw(t),r=n.length===1?e:M5(e,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(tt(r)&&Wt(r)||Array.isArray(r)&&L5(r))&&ot(e,n.slice(0,-1)),e}function Vc(){let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next&&s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}}var $l=e=>wt(e)||!gw(e);function Hr(e,t){if($l(e)||$l(t))return e===t;if(Ai(e)&&Ai(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(Ai(s)&&Ai(o)||tt(s)&&tt(o)||Array.isArray(s)&&Array.isArray(o)?!Hr(s,o):s!==o)return!1}}return!0}var _w=e=>e.type==="select-multiple",j5=e=>hp(e)||Qo(e),Fc=e=>Vl(e)&&e.isConnected,Sw=e=>{for(const t in e)if(ir(e[t]))return!0;return!1};function zl(e,t={}){const n=Array.isArray(e);if(tt(e)||n)for(const r in e)Array.isArray(e[r])||tt(e[r])&&!Sw(e[r])?(t[r]=Array.isArray(e[r])?[]:{},zl(e[r],t[r])):wt(e[r])||(t[r]=!0);return t}function bw(e,t,n){const r=Array.isArray(e);if(tt(e)||r)for(const i in e)Array.isArray(e[i])||tt(e[i])&&!Sw(e[i])?He(t)||$l(n[i])?n[i]=Array.isArray(e[i])?zl(e[i],[]):{...zl(e[i])}:bw(e[i],wt(t)?{}:t[i],n[i]):n[i]=!Hr(e[i],t[i]);return n}var $c=(e,t)=>bw(e,t,zl(t)),kw=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>He(e)?e:t?e===""?NaN:e&&+e:n&&yn(e)?new Date(e):r?r(e):e;function zc(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return fp(t)?t.files:hp(t)?ww(e.refs).value:_w(t)?[...t.selectedOptions].map(({value:n})=>n):Qo(t)?xw(e.refs).value:kw(He(t.value)?e.ref.value:t.value,e)}var V5=(e,t,n,r)=>{const i={};for(const s of e){const o=K(t,s);o&&Oe(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ws=e=>He(e)?e:Fl(e)?e.source:tt(e)?Fl(e.value)?e.value.source:e.value:e,F5=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Iy(e,t,n){const r=K(e,n);if(r||dp(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=K(t,s),a=K(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var $5=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,z5=(e,t)=>!Zo(K(e,t)).length&&ot(e,t);const B5={mode:sn.onSubmit,reValidateMode:sn.onChange,shouldFocusError:!0};function U5(e={},t){let n={...B5,...e},r={submitCount:0,isDirty:!1,isLoading:ir(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=tt(n.defaultValues)||tt(n.values)?Fr(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Fr(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Vc(),array:Vc(),state:Vc()},m=e.resetOptions&&e.resetOptions.keepDirtyValues,v=Py(n.mode),x=Py(n.reValidateMode),_=n.criteriaMode===sn.all,y=S=>C=>{clearTimeout(c),c=setTimeout(S,C)},h=async S=>{if(d.isValid||S){const C=n.resolver?Wt((await L()).errors):await oe(i,!0);C!==r.isValid&&f.state.next({isValid:C})}},g=S=>d.isValidating&&f.state.next({isValidating:S}),w=(S,C=[],O,Z,j=!0,I=!0)=>{if(Z&&O){if(a.action=!0,I&&Array.isArray(K(i,S))){const Y=O(K(i,S),Z.argA,Z.argB);j&&Oe(i,S,Y)}if(I&&Array.isArray(K(r.errors,S))){const Y=O(K(r.errors,S),Z.argA,Z.argB);j&&Oe(r.errors,S,Y),z5(r.errors,S)}if(d.touchedFields&&I&&Array.isArray(K(r.touchedFields,S))){const Y=O(K(r.touchedFields,S),Z.argA,Z.argB);j&&Oe(r.touchedFields,S,Y)}d.dirtyFields&&(r.dirtyFields=$c(s,o)),f.state.next({name:S,isDirty:q(S,C),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Oe(o,S,C)},k=(S,C)=>{Oe(r.errors,S,C),f.state.next({errors:r.errors})},R=(S,C,O,Z)=>{const j=K(i,S);if(j){const I=K(o,S,He(O)?K(s,S):O);He(I)||Z&&Z.defaultChecked||C?Oe(o,S,C?I:zc(j._f)):Se(S,I),a.mount&&h()}},N=(S,C,O,Z,j)=>{let I=!1,Y=!1;const ye={name:S};if(!O||Z){d.isDirty&&(Y=r.isDirty,r.isDirty=ye.isDirty=q(),I=Y!==ye.isDirty);const H=Hr(K(s,S),C);Y=K(r.dirtyFields,S),H?ot(r.dirtyFields,S):Oe(r.dirtyFields,S,!0),ye.dirtyFields=r.dirtyFields,I=I||d.dirtyFields&&Y!==!H}if(O){const H=K(r.touchedFields,S);H||(Oe(r.touchedFields,S,O),ye.touchedFields=r.touchedFields,I=I||d.touchedFields&&H!==O)}return I&&j&&f.state.next(ye),I?ye:{}},E=(S,C,O,Z)=>{const j=K(r.errors,S),I=d.isValid&&Ui(C)&&r.isValid!==C;if(e.delayError&&O?(u=y(()=>k(S,O)),u(e.delayError)):(clearTimeout(c),u=null,O?Oe(r.errors,S,O):ot(r.errors,S)),(O?!Hr(j,O):j)||!Wt(Z)||I){const Y={...Z,...I&&Ui(C)?{isValid:C}:{},errors:r.errors,name:S};r={...r,...Y},f.state.next(Y)}g(!1)},L=async S=>n.resolver(o,n.context,V5(S||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),$=async S=>{const{errors:C}=await L();if(S)for(const O of S){const Z=K(C,O);Z?Oe(r.errors,O,Z):ot(r.errors,O)}else r.errors=C;return C},oe=async(S,C,O={valid:!0})=>{for(const Z in S){const j=S[Z];if(j){const{_f:I,...Y}=j;if(I){const ye=l.array.has(I.name),H=await Ay(j,o,_,n.shouldUseNativeValidation&&!C,ye);if(H[I.name]&&(O.valid=!1,C))break;!C&&(K(H,I.name)?ye?D5(r.errors,H,I.name):Oe(r.errors,I.name,H[I.name]):ot(r.errors,I.name))}Y&&await oe(Y,C,O)}}return O.valid},G=()=>{for(const S of l.unMount){const C=K(i,S);C&&(C._f.refs?C._f.refs.every(O=>!Fc(O)):!Fc(C._f.ref))&&P(S)}l.unMount=new Set},q=(S,C)=>(S&&C&&Oe(o,S,C),!Hr(te(),s)),J=(S,C,O)=>I5(S,l,{...a.mount?o:He(C)?s:yn(S)?{[S]:C}:C},O,C),re=S=>Zo(K(a.mount?o:s,S,e.shouldUnregister?K(s,S,[]):[])),Se=(S,C,O={})=>{const Z=K(i,S);let j=C;if(Z){const I=Z._f;I&&(!I.disabled&&Oe(o,S,kw(C,I)),j=Vl(I.ref)&&wt(C)?"":C,_w(I.ref)?[...I.ref.options].forEach(Y=>Y.selected=j.includes(Y.value)):I.refs?Qo(I.ref)?I.refs.length>1?I.refs.forEach(Y=>(!Y.defaultChecked||!Y.disabled)&&(Y.checked=Array.isArray(j)?!!j.find(ye=>ye===Y.value):j===Y.value)):I.refs[0]&&(I.refs[0].checked=!!j):I.refs.forEach(Y=>Y.checked=Y.value===j):fp(I.ref)?I.ref.value="":(I.ref.value=j,I.ref.type||f.values.next({name:S,values:{...o}})))}(O.shouldDirty||O.shouldTouch)&&N(S,j,O.shouldTouch,O.shouldDirty,!0),O.shouldValidate&&ee(S)},ve=(S,C,O)=>{for(const Z in C){const j=C[Z],I=`${S}.${Z}`,Y=K(i,I);(l.array.has(S)||!$l(j)||Y&&!Y._f)&&!Ai(j)?ve(I,j,O):Se(I,j,O)}},D=(S,C,O={})=>{const Z=K(i,S),j=l.array.has(S),I=Fr(C);Oe(o,S,I),j?(f.array.next({name:S,values:{...o}}),(d.isDirty||d.dirtyFields)&&O.shouldDirty&&f.state.next({name:S,dirtyFields:$c(s,o),isDirty:q(S,I)})):Z&&!Z._f&&!wt(I)?ve(S,I,O):Se(S,I,O),Ey(S,l)&&f.state.next({...r}),f.values.next({name:S,values:{...o}}),!a.mount&&t()},X=async S=>{const C=S.target;let O=C.name,Z=!0;const j=K(i,O),I=()=>C.type?zc(j._f):P5(S);if(j){let Y,ye;const H=I(),Ee=S.type===Cy.BLUR||S.type===Cy.FOCUS_OUT,us=!F5(j._f)&&!n.resolver&&!K(r.errors,O)&&!j._f.deps||$5(Ee,K(r.touchedFields,O),r.isSubmitted,x,v),Ar=Ey(O,l,Ee);Oe(o,O,H),Ee?(j._f.onBlur&&j._f.onBlur(S),u&&u(0)):j._f.onChange&&j._f.onChange(S);const zt=N(O,H,Ee,!1),Pw=!Wt(zt)||Ar;if(!Ee&&f.values.next({name:O,type:S.type,values:{...o}}),us)return d.isValid&&h(),Pw&&f.state.next({name:O,...Ar?{}:zt});if(!Ee&&Ar&&f.state.next({...r}),g(!0),n.resolver){const{errors:pp}=await L([O]),Ew=Iy(r.errors,i,O),mp=Iy(pp,i,Ew.name||O);Y=mp.error,O=mp.name,ye=Wt(pp)}else Y=(await Ay(j,o,_,n.shouldUseNativeValidation))[O],Z=isNaN(H)||H===K(o,O,H),Z&&(Y?ye=!1:d.isValid&&(ye=await oe(i,!0)));Z&&(j._f.deps&&ee(j._f.deps),E(O,ye,Y,zt))}},ee=async(S,C={})=>{let O,Z;const j=jc(S);if(g(!0),n.resolver){const I=await $(He(S)?S:j);O=Wt(I),Z=S?!j.some(Y=>K(I,Y)):O}else S?(Z=(await Promise.all(j.map(async I=>{const Y=K(i,I);return await oe(Y&&Y._f?{[I]:Y}:Y)}))).every(Boolean),!(!Z&&!r.isValid)&&h()):Z=O=await oe(i);return f.state.next({...!yn(S)||d.isValid&&O!==r.isValid?{}:{name:S},...n.resolver||!S?{isValid:O}:{},errors:r.errors,isValidating:!1}),C.shouldFocus&&!Z&&kf(i,I=>I&&K(r.errors,I),S?j:l.mount),Z},te=S=>{const C={...s,...a.mount?o:{}};return He(S)?C:yn(S)?K(C,S):S.map(O=>K(C,O))},V=(S,C)=>({invalid:!!K((C||r).errors,S),isDirty:!!K((C||r).dirtyFields,S),isTouched:!!K((C||r).touchedFields,S),error:K((C||r).errors,S)}),z=S=>{S&&jc(S).forEach(C=>ot(r.errors,C)),f.state.next({errors:S?r.errors:{}})},B=(S,C,O)=>{const Z=(K(i,S,{_f:{}})._f||{}).ref;Oe(r.errors,S,{...C,ref:Z}),f.state.next({name:S,errors:r.errors,isValid:!1}),O&&O.shouldFocus&&Z&&Z.focus&&Z.focus()},ie=(S,C)=>ir(S)?f.values.subscribe({next:O=>S(J(void 0,C),O)}):J(S,C,!0),P=(S,C={})=>{for(const O of S?jc(S):l.mount)l.mount.delete(O),l.array.delete(O),C.keepValue||(ot(i,O),ot(o,O)),!C.keepError&&ot(r.errors,O),!C.keepDirty&&ot(r.dirtyFields,O),!C.keepTouched&&ot(r.touchedFields,O),!n.shouldUnregister&&!C.keepDefaultValue&&ot(s,O);f.values.next({values:{...o}}),f.state.next({...r,...C.keepDirty?{isDirty:q()}:{}}),!C.keepIsValid&&h()},ce=(S,C={})=>{let O=K(i,S);const Z=Ui(C.disabled);return Oe(i,S,{...O||{},_f:{...O&&O._f?O._f:{ref:{name:S}},name:S,mount:!0,...C}}),l.mount.add(S),O?Z&&Oe(o,S,C.disabled?void 0:K(o,S,zc(O._f))):R(S,!0,C.value),{...Z?{disabled:C.disabled}:{},...n.shouldUseNativeValidation?{required:!!C.required,min:ws(C.min),max:ws(C.max),minLength:ws(C.minLength),maxLength:ws(C.maxLength),pattern:ws(C.pattern)}:{},name:S,onChange:X,onBlur:X,ref:j=>{if(j){ce(S,C),O=K(i,S);const I=He(j.value)&&j.querySelectorAll&&j.querySelectorAll("input,select,textarea")[0]||j,Y=j5(I),ye=O._f.refs||[];if(Y?ye.find(H=>H===I):I===O._f.ref)return;Oe(i,S,{_f:{...O._f,...Y?{refs:[...ye.filter(Fc),I,...Array.isArray(K(s,S))?[{}]:[]],ref:{type:I.type,name:S}}:{ref:I}}}),R(S,!1,void 0,I)}else O=K(i,S,{}),O._f&&(O._f.mount=!1),(n.shouldUnregister||C.shouldUnregister)&&!(T5(l.array,S)&&a.action)&&l.unMount.add(S)}}},F=()=>n.shouldFocusError&&kf(i,S=>S&&K(r.errors,S),l.mount),Pe=(S,C)=>async O=>{O&&(O.preventDefault&&O.preventDefault(),O.persist&&O.persist());let Z=Fr(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:j,values:I}=await L();r.errors=j,Z=I}else await oe(i);ot(r.errors,"root"),Wt(r.errors)?(f.state.next({errors:{}}),await S(Z,O)):(C&&await C({...r.errors},O),F(),setTimeout(F)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Wt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},me=(S,C={})=>{K(i,S)&&(He(C.defaultValue)?D(S,K(s,S)):(D(S,C.defaultValue),Oe(s,S,C.defaultValue)),C.keepTouched||ot(r.touchedFields,S),C.keepDirty||(ot(r.dirtyFields,S),r.isDirty=C.defaultValue?q(S,K(s,S)):q()),C.keepError||(ot(r.errors,S),d.isValid&&h()),f.state.next({...r}))},he=(S,C={})=>{const O=S||s,Z=Fr(O),j=S&&!Wt(S)?Z:s;if(C.keepDefaultValues||(s=O),!C.keepValues){if(C.keepDirtyValues||m)for(const I of l.mount)K(r.dirtyFields,I)?Oe(j,I,K(o,I)):D(I,K(j,I));else{if(cp&&He(S))for(const I of l.mount){const Y=K(i,I);if(Y&&Y._f){const ye=Array.isArray(Y._f.refs)?Y._f.refs[0]:Y._f.ref;if(Vl(ye)){const H=ye.closest("form");if(H){H.reset();break}}}}i={}}o=e.shouldUnregister?C.keepDefaultValues?Fr(s):{}:Z,f.array.next({values:{...j}}),f.values.next({values:{...j}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!d.isValid||!!C.keepIsValid,a.watch=!!e.shouldUnregister,f.state.next({submitCount:C.keepSubmitCount?r.submitCount:0,isDirty:C.keepDirty?r.isDirty:!!(C.keepDefaultValues&&!Hr(S,s)),isSubmitted:C.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:C.keepDirtyValues?r.dirtyFields:C.keepDefaultValues&&S?$c(s,S):{},touchedFields:C.keepTouched?r.touchedFields:{},errors:C.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},le=(S,C)=>he(ir(S)?S(o):S,C);return{control:{register:ce,unregister:P,getFieldState:V,_executeSchema:L,_getWatch:J,_getDirty:q,_updateValid:h,_removeUnmounted:G,_updateFieldArray:w,_getFieldArray:re,_reset:he,_resetDefaultValues:()=>ir(n.defaultValues)&&n.defaultValues().then(S=>{le(S,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:S=>{r={...r,...S}},_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(S){a=S},get _defaultValues(){return s},get _names(){return l},set _names(S){l=S},get _formState(){return r},set _formState(S){r=S},get _options(){return n},set _options(S){n={...n,...S}}},trigger:ee,register:ce,handleSubmit:Pe,watch:ie,setValue:D,getValues:te,reset:le,resetField:me,clearErrors:z,unregister:P,setError:B,setFocus:(S,C={})=>{const O=K(i,S),Z=O&&O._f;if(Z){const j=Z.refs?Z.refs[0]:Z.ref;j.focus&&(j.focus(),C.shouldSelect&&j.select())}},getFieldState:V}}function W5(e={}){const t=pt.useRef(),[n,r]=pt.useState({isDirty:!1,isValidating:!1,isLoading:ir(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ir(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...U5(e,()=>r(s=>({...s}))),formState:n});const i=t.current.control;return i._options=e,A5({subject:i._subjects.state,next:s=>{R5(s,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),pt.useEffect(()=>{e.values&&!Hr(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),pt.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=O5(n,i),t.current}var Dy=function(e,t,n){if(e&&"reportValidity"in e){var r=K(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},Cw=function(e,t){var n=function(i){var s=t.fields[i];s&&s.ref&&"reportValidity"in s.ref?Dy(s.ref,i,e):s.refs&&s.refs.forEach(function(o){return Dy(o,i,e)})};for(var r in t.fields)n(r)},H5=function(e,t){t.shouldUseNativeValidation&&Cw(e,t);var n={};for(var r in e){var i=K(t.fields,r);Oe(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},Q5=function(e,t){for(var n={};e.length;){var r=e[0],i=r.code,s=r.message,o=r.path.join(".");if(!n[o])if("unionErrors"in r){var a=r.unionErrors[0].errors[0];n[o]={message:a.message,type:a.code}}else n[o]={message:s,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(c){return c.errors.forEach(function(d){return e.push(d)})}),t){var l=n[o].types,u=l&&l[r.code];n[o]=vw(o,t,n,i,u?[].concat(u,r.message):r.message)}e.shift()}return n},Z5=function(e,t,n){return n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=Promise.resolve(e[n.mode==="sync"?"parse":"parseAsync"](r,t)).then(function(u){return s.shouldUseNativeValidation&&Cw({},s),{errors:{},values:n.raw?r:u}})}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(function(a){return a.errors!=null}(o))return{values:{},errors:H5(Q5(o.errors,!s.shouldUseNativeValidation&&s.criteriaMode==="all"),s)};throw o}))}catch(o){return Promise.reject(o)}}};const q5=de.form`
	margin: 100px 0 120px;
	padding: 0 450px;
	display: flex;
	gap: 45px;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	.form__element {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.element__input {
		width: 100%;
		padding: 20px;
		margin-top: 15px;
		font-family: 'Roboto-Medium';
		font-weight: 400;
		font-size: 22px;
		outline: none;
		color: #274c5b;
		border: 1px solid #ababab;
		border-radius: 15px;
	}

	.element__input::placeholder {
		color: #ababab;

		font-style: italic;
	}

	.message__text {
		margin-top: 15px;
		font-family: 'Roboto-Medium';
		font-weight: 400;
		font-size: 22px;
		outline: none;
		color: #274c5b;
		border: 1px solid #ababab;
		border-radius: 15px;
		padding: 20px;
		height: 300px;
	}

	.message__text::placeholder {
		color: #ababab;

		font-style: italic;
	}

	.element__label {
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 100;
		font-size: 18px;
		line-height: 21px;
		color: #274c5b;
	}

	.form__message {
		display: flex;
		flex-direction: column;
		width: 100%;
		position: relative;
	}

	.message__text {
		width: 100%;
	}

	.form__btn {
		padding: 30px 20px;
		font-family: 'Roboto-Medium';
		background: #274c5b;
		font-size: 18px;
		color: #fff;
		min-width: 250px;
		align-self: flex-start;
		text-align: center;
		border: none;
		outline: none;
		border-radius: 20px;
		margin-left: 5px;
		cursor: pointer;
	}

	.element__error {
		position: absolute;
		color: #ff7373;
		bottom: -25px;
		left: 0;
	}

	@media (max-width: 1440px) {
		padding: 0 200px;
	}

	@media (max-width: 1024px) {
		padding: 0 100px;
	}

	@media (max-width: 768px) {
		padding: 0 30px;
		.element__input {
			padding: 20px 15px;
			font-size: 20px;
		}

		.form__btn {
			align-self: center;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;

		.element__input {
			padding: 18px 15px;
			margin-top: 10px;
			font-size: 18px;
		}
	}
`,K5=()=>{const e=fi.object({fullName:fi.string().min(1),email:fi.string().email(),company:fi.string().min(1),subject:fi.string().min(1),message:fi.string().min(1)}),{register:t,handleSubmit:n,formState:{errors:r},reset:i}=W5({resolver:Z5(e)});return T(q5,{onSubmit:n(o=>{console.log("Done",o),i()}),children:[T("div",{className:"form__element",children:[p("label",{className:"element__label",htmlFor:"",children:"Full Name*"}),p("input",{...t("fullName"),placeholder:"Your Full Name",className:"element__input",type:"text",style:{border:r.fullName?"1px solid #ff7373":"1px solid #ababab"}}),r.fullName&&p("span",{className:"element__error",children:"Full Name must contain at least 1 character"})]}),T("div",{className:"form__element",children:[p("label",{className:"element__label",htmlFor:"",children:"Your Email*"}),p("input",{...t("email"),placeholder:"Your Email Address",className:"element__input",type:"text",style:{border:r.email?"1px solid #ff7373":"1px solid #ababab"}}),r.email&&p("span",{className:"element__error",children:"Please enter valid email address"})]}),T("div",{className:"form__element",children:[p("label",{className:"element__label",htmlFor:"",children:"Company*"}),p("input",{...t("company"),placeholder:"Your Company Name",className:"element__input",type:"text",style:{border:r.company?"1px solid #ff7373":"1px solid #ababab"}}),r.company&&p("span",{className:"element__error",children:"Company name must contain at least 1 character"})]}),T("div",{className:"form__element",children:[p("label",{className:"element__label",htmlFor:"",children:"Subject*"}),p("input",{...t("subject"),placeholder:"How Can We Help You?",className:"element__input",type:"text",style:{border:r.subject?"1px solid #ff7373":"1px solid #ababab"}}),r.subject&&p("span",{className:"element__error",children:"Please specify the subject of your request"})]}),T("div",{className:"form__message",children:[p("label",{className:"element__label",htmlFor:"",children:"Message*"}),p("textarea",{...t("message"),placeholder:"Your Message",className:"message__text",style:{border:r.message?"1px solid #ff7373":"1px solid #ababab"}}),r.message&&p("span",{className:"element__error",children:"Please enter your message"})]}),p("button",{className:"form__btn",children:"Send Message"})]})},G5=()=>T(Je.div,{initial:{opacity:0},animate:{opacity:1},children:[p(Vu,{heading:"Contact Us",background:mA}),p(kA,{}),p(EA,{}),p(K5,{}),p(ci,{})]}),Y5=de.div.attrs(e=>e.background)`
	margin-bottom: 200px;
	.banner {
		background: url(${e=>e.background}) no-repeat center
			center/cover;
		height: 650px;
		width: 100%;
		position: relative;
		z-index: 1;
	}

	.banner__description {
		border-radius: 25px;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		bottom: -40%;
		min-width: 1400px;
		box-shadow: 0px 20px 36px rgba(204, 204, 204, 0.4);
		background: #fff;
		padding: 80px;
		z-index: 1;
	}

	.description__post-info {
		display: flex;
		align-items: center;
		gap: 30px;
	}

	.post-info__date {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.date__posted-on {
		font-family: 'Roboto-Medium';
		font-weight: 600;
		font-size: 18px;
		color: #274c5b;
	}

	.date__full-date {
		font-family: 'Roboto-Medium';
		font-weight: 100;
		font-size: 18px;
		color: #274c5b;
	}

	.post-info__author {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.author__name {
		font-family: 'Roboto-Medium';
		font-weight: 100;
		font-size: 18px;
		color: #274c5b;
	}

	.description__heading {
		margin: 20px 0 30px;
		max-width: 100%;
	}

	@media (max-width: 1440px) {
		.banner {
			min-height: 550px;
		}
		.banner__description {
			min-width: 900px;
			padding: 60px;
		}
	}

	@media (max-width: 1024px) {
		margin-bottom: 100px;
		.banner__description {
			min-width: 700px;
			padding: 40px;
		}
	}

	@media (max-width: 768px) {
		margin-bottom: 75px;
		.banner {
			min-height: 600px;
			display: flex;
			justify-content: center;
			flex-direction: column;
		}

		.banner__description {
			border-radius: 0px;
			position: static;
			margin: auto;
			min-width: 100%;
			padding: 30px;
			transform: translate(0%, 0%);
		}

		.description__post-info {
			flex-wrap: wrap;
		}
	}
`,X5=()=>{const e=G0(),{data:t,isLoading:n}=Un(["news"],async()=>(await fetch("https://organick-df998-default-rtdb.firebaseio.com/news.json")).json());if(!n){const[{author:r,description:i,fullDate:s,image:o,title:a}]=t.filter(l=>l.id===e.name);return p(Y5,{background:o,children:p("div",{className:"banner",children:T("div",{className:"banner__description",children:[T("div",{className:"description__post-info",children:[T("div",{className:"post-info__date",children:[p("span",{className:"date__posted-on",children:"Posted On:"}),p("span",{className:"date__full-date",children:s})]}),T("div",{className:"post-info__author",children:[p("img",{src:iw,alt:""}),p("span",{className:"author__name",children:r})]})]}),p(et,{className:"description__heading",children:a}),p(qe,{children:i})]})})})}return null},J5=de.div`
	padding: 0 200px;

	.heading {
		margin: 25px 0 35px;
	}

	.list {
		margin-top: 30px;
		list-style: disc;
		color: #525c60;
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.subheading {
		margin: 50px 0 20px;
		font-size: 35px;
	}

	.numeric {
		list-style: decimal;
		margin-bottom: 100px;
	}

	@media (max-width: 1024px) {
		padding: 0 150px;
	}

	@media (max-width: 768px) {
		padding: 0 50px;
	}

	@media (max-width: 425px) {
		padding: 0 20px;
	}
`,e4=()=>T(J5,{children:[p(qe,{children:"Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology."}),p(et,{className:"heading",children:"Advantages Of Organick Food"}),p(qe,{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}),T("ul",{className:"list",children:[p("li",{children:p(qe,{children:"Publishing packages and web pageLorem Ipsum as their default"})}),p("li",{children:p(qe,{children:"Content here, content here', making it look like readable"})}),p("li",{children:p(qe,{children:"Packages and web pageLorem Ipsum as their default"})})]}),p(et,{className:"subheading",children:"Make perfect organic product with us"}),p(qe,{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}),T("ol",{className:"list numeric",children:[p("li",{children:p(qe,{children:"Publishing packages and web pageLorem Ipsum as their default"})}),p("li",{children:p(qe,{children:"Content here, content here', making it look like readable"})}),p("li",{children:p(qe,{children:"Packages and web pageLorem Ipsum as their default"})}),p("li",{children:p(qe,{children:"More-or-less normal distribution of letters"})})]})]}),t4=()=>T(Je.div,{initial:{opacity:0},animate:{opacity:1},children:[p(X5,{}),p(e4,{}),p(ci,{})]}),n4="/organick/assets/cross-small-svgrepo-com-0aaec425.svg",r4=de(Je.div)`
	min-width: 700px;
	height: 700px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 30;
	padding: 40px;
	background: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 25px;
	z-index: 65;

	.heading {
		font-size: 30px;
		margin-bottom: 10px;
	}

	.close-icon {
		position: absolute;
		width: 60px;
		height: 60px;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}

	.underline {
		border-bottom: 1px solid #929799;
	}

	.item__imgage {
		height: 125px;
		width: 125px;
	}

	.list {
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		padding-right: 20px;
	}

	.total-price__name {
		font-size: 26px;
	}

	.total-price {
		margin-top: 40px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.order__btn {
		margin-top: 30px;
		background: #274c5b;
		padding: 20px;
		outline: none;
		border: none;
		color: #fff;
		font-family: 'Roboto-Medium';
		font-size: 22px;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		height: 80%;
		min-width: 100%;
		border-radius: 0;
		padding: 25px;

		.list {
			padding-right: 10px;
		}
	}
`,i4=de.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 60;
	background: rgba(0, 0, 0, 0.75);
`,s4="/organick/assets/plusIcon-5be7cf93.svg",o4="/organick/assets/minusIcon-4dea605f.svg",a4="/organick/assets/trash-svgrepo-com-a3394364.svg",l4=de.li.attrs(e=>e.background)`
	padding: 20px 0;
	border-bottom: 1px solid #929799;
	display: flex;
	justify-content: space-between;
	.description__image {
		background: url(${e=>e.background}) no-repeat center
			center/cover;
		height: 80px;
		width: 80px;
	}

	.item__description {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.description__name {
		font-size: 20px;
	}

	.right {
		display: flex;
		align-items: center;
		margin-left: 15px;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.actions__btn {
		background: transparent;
		outline: none;
		border: none;
		cursor: pointer;
	}

	.actions__count {
		/* border: 1px solid #929799; */
		padding: 5px;
		font-size: 16px;
		color: #274c5b;
		font-family: 'Roboto-Medium';
	}

	.right__amount {
		margin-left: 30px;
		margin-bottom: 2px;
		font-family: 'Roboto-Bold';
		font-size: 20px;
		color: #274c5b;
	}

	.right__remove-all {
		margin-left: 5px;
		padding: 5px;
	}

	.rigtn__remove-btn {
		background: transparent;
		border: none;
		display: flex;
		align-items: center;
		margin-left: 10px;
		cursor: pointer;
	}
	.remove-all__icon {
		width: 45px;
		height: 45px;
		margin-bottom: 2px;
	}

	@media (max-width: 768px) {
		.description__image {
			width: 60px;
			height: 60px;
		}

		.description__name {
			font-size: 16px;
		}

		.actions {
			gap: 10px;
		}

		.right__amount {
			font-size: 16px;
		}

		.right__amount {
			margin-left: 20px;
		}

		.remove-all__icon {
			width: 35px;
			height: 35px;
		}
	}

	@media (max-width: 425px) {
		.description__image {
			display: none;
		}
	}
`,u4=({id:e,image:t,itemAmount:n,name:r,totalPrice:i})=>{const s=Fo();return T(l4,{background:t,children:[T("div",{className:"item__description",children:[p("div",{className:"description__image"}),p(et,{className:"description__name",children:r})]}),T("div",{className:"right",children:[T("div",{className:"actions",children:[p(Je.button,{whileTap:{scale:.7},whileHover:{scale:1.1},className:"actions__btn",onClick:()=>s(iA(e)),children:p("img",{src:o4,alt:""})}),p("div",{className:"actions__count",children:n}),p(Je.button,{whileTap:{scale:.7},whileHover:{scale:1.1},onClick:()=>s(aw({id:e,itemAmountNum:1})),className:"actions__btn",children:p("img",{src:s4,alt:""})})]}),T("span",{className:"right__amount",children:["$",i,".00"]}),p(Je.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>s(sA(e)),className:"rigtn__remove-btn",children:p("img",{className:"remove-all__icon",src:a4,alt:""})})]})]})},c4=()=>{const e=Fo(),t=Rh(r=>r.cart.items),n=t.reduce((r,i)=>r+i.totalPrice,0);return T(Nf,{children:[p(i4,{onClick:()=>e(gl())}),T(r4,{initial:{opacity:0},animate:{opacity:1},children:[p("img",{onClick:()=>e(gl()),className:"close-icon",src:n4,alt:""}),T("div",{className:"",children:[p(et,{className:"heading",children:"Order"}),p("div",{className:"underline"})]}),p("ul",{className:"list",children:t.map((r,i)=>p(u4,{id:r.id,image:r.image,itemAmount:r.itemAmount,name:r.name,price:r.newPrice,totalPrice:r.totalPrice},i))}),T("div",{className:"total-price",children:[p(et,{className:"total-price__name",children:"Total"}),T(et,{className:"total-price__name",children:["$",n,".00"]})]}),p(Je.button,{whileTap:{scale:.95},transition:{duration:.1},className:"order__btn",children:"PROCEED TO CHECKOUT"})]})]})},d4="/organick/assets/ToTopIcon-da673da5.svg",f4=()=>{const[e,t]=b.useState(0);b.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]);const n=()=>{t(window.pageYOffset)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return p(Nf,{children:p(mf,{children:e>100&&p(Je.div,{initial:{x:200},animate:{x:0},transition:{duration:.5},exit:{x:200},style:{position:"fixed",right:30,bottom:30,zIndex:100},children:p(h4,{onClick:r,children:p("img",{src:d4,alt:""})})},"button")})})},h4=de.button`
	border: none;
	background: transparent;
	cursor: pointer;
	background: #bebebe;
	width: 70px;
	height: 70px;
	border-radius: 100px;
	transform: scale(1);
	transition: 0.15s;

	@media (max-width: 1440px) {
		width: 50px;
		height: 50px;
		opacity: 0.5;
	}

	:hover {
		transform: scale(1.1);
	}

	img {
		width: 80%;
	}
`,p4=()=>{const e=Rh(t=>t.ui.isShown);return T("main",{children:[p(pA,{}),p(f4,{}),e&&p(c4,{}),T(Gb,{children:[p(Hn,{path:"/",element:p(_R,{})}),p(Hn,{path:"about",element:p(GR,{})}),p(Hn,{path:"shop",element:p(eA,{})}),p(Hn,{path:"news",element:p(hA,{})}),p(Hn,{path:"contact",element:p(G5,{})}),p(Hn,{path:"shop/:name",element:p(uA,{})}),p(Hn,{path:"news/:name",element:p(t4,{})})]})]})},m4="/organick/assets/footer-instagram-icon-f6a6cad6.svg",g4="/organick/assets/footer-facebook-icon-c356aaa0.svg",y4="/organick/assets/footer-twitter-icon-4fe074ab.svg",v4="/organick/assets/footer-pinterest-icon-9df926a8.svg",x4=de.div`
	margin: 110px 0 70px;
	display: flex;
	justify-content: center;

	.left-block {
		text-align: right;
		min-width: 250px;
	}

	.left-block__heading {
		font-family: 'Roboto-Medium';
		font-weight: 700;
		font-size: 30px;
		color: #274c5b;
	}

	.left-block__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.list__item {
		display: flex;
		flex-direction: column;
	}

	.item__contact {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		color: #525c60;
	}

	.item__info {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 200;
		font-size: 18px;
		color: #525c60;
	}

	.center-block {
		padding: 0 60px;
		margin: 0 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-left: 1px solid #d5d5d5;
		border-right: 1px solid #d5d5d5;
	}

	.center-block__heading {
		display: flex;
		align-items: center;
		font-family: 'Roboto-Bold';
		font-size: 28px;
		color: #274c5b;
	}

	.heading__text {
		margin-left: 10px;
		max-width: 500px;
	}

	.center-block__paragraph {
		margin-top: 15px;
		max-width: 540px;
		text-align: center;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 150%;
		text-align: center;
		color: #525c60;
	}

	.right-block {
		text-align: left;
		min-width: 240px;
	}

	.right-block__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.list__item--link {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		color: #525c60;
	}

	.center-block__icons {
		margin-top: 50px;
		display: flex;
		gap: 15px;
	}

	.icons__item {
		cursor: pointer;
	}

	@media (max-width: 1440px) {
		margin: 110px 0 30px;

		.center-block {
			padding: 0 20px;
			margin: 0 20px;
		}

		.center-block__paragraph {
			max-width: 450px;
		}
	}

	@media (max-width: 1024px) {
		margin: 60px 0 30px;
		flex-direction: column;
		gap: 45px;

		.left-block {
			text-align: center;
			order: 3;
		}

		.left-block__list {
			margin-top: 15px;
		}

		.center-block__icons {
			margin-top: 25px;
		}

		.center-block {
			border: none;
		}

		.right-block {
			text-align: center;
			order: 3;
		}

		.right-block__list {
			margin-top: 15px;
		}
	}

	@media (max-width: 375px) {
		.center-block__icons {
			flex-wrap: wrap;
			justify-content: center;
		}

		.heading__text {
			font-size: 30px;
		}
	}
`,w4=()=>T(x4,{children:[T("div",{className:"left-block",children:[p("span",{className:"left-block__heading",children:"Contact Us"}),T("ul",{className:"left-block__list",children:[T("li",{className:"list__item",children:[p("span",{className:"item__contact",children:"Email"}),p("span",{className:"item__info",children:"needhelp@Organia.com"})]}),T("li",{className:"list__item",children:[p("span",{className:"item__contact",children:"Phone"}),p("span",{className:"item__info",children:"666 888 888"})]}),T("li",{className:"list__item",children:[p("span",{className:"item__contact",children:"Address"}),p("span",{className:"item__info",children:"88 Road, Borklyn Street, USA"})]})]})]}),T("div",{className:"center-block",children:[T("div",{className:"center-block__heading",children:[p("img",{src:Q1,alt:""}),p("h2",{className:"heading__text",children:"Organick"})]}),p("p",{className:"center-block__paragraph",children:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing"}),T("div",{className:"center-block__icons",children:[p("img",{className:"icons__item",src:m4,alt:""}),p("img",{className:"icons__item",src:g4,alt:""}),p("img",{className:"icons__item",src:y4,alt:""}),p("img",{className:"icons__item",src:v4,alt:""})]})]}),T("div",{className:"right-block",children:[p("span",{className:"left-block__heading",children:"Pages"}),T("ul",{className:"right-block__list",children:[p("li",{className:"list__item--link",children:p(Re,{to:"/",children:"Home"})}),p("li",{className:"list__item--link",children:p(Re,{to:"/about",children:"About"})}),p("li",{className:"list__item--link",children:p(Re,{to:"/shop",children:"Shop"})}),p("li",{className:"list__item--link",children:p(Re,{to:"/news",children:"News"})})]})]})]}),_4=()=>T("div",{children:[p(eO,{}),p(p4,{}),p(w4,{})]});const S4=xP({reducer:{ui:Ex.reducer,cart:ow.reducer}}),b4=new bO({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});Uc.createRoot(document.getElementById("root")).render(p(tk,{children:p(TO,{client:b4,children:p(pt.StrictMode,{children:p(VC,{store:S4,children:p(_4,{})})})})}));
