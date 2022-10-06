(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function X0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var No={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),q0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),Y0=Symbol.for("react.strict_mode"),Z0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),K0=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),gh=Symbol.iterator;function iv(n){return n===null||typeof n!="object"?null:(n=gh&&n[gh]||n["@@iterator"],typeof n=="function"?n:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},em=Object.assign,tm={};function Ts(n,e,t){this.props=n,this.context=e,this.refs=tm,this.updater=t||Kp}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ts.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function nm(){}nm.prototype=Ts.prototype;function sf(n,e,t){this.props=n,this.context=e,this.refs=tm,this.updater=t||Kp}var of=sf.prototype=new nm;of.constructor=sf;em(of,Ts.prototype);of.isPureReactComponent=!0;var vh=Array.isArray,im=Object.prototype.hasOwnProperty,af={current:null},rm={key:!0,ref:!0,__self:!0,__source:!0};function sm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)im.call(e,i)&&!rm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zo,type:n,key:s,ref:o,props:r,_owner:af.current}}function rv(n,e){return{$$typeof:zo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function lf(n){return typeof n=="object"&&n!==null&&n.$$typeof===zo}function sv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var xh=/\/+/g;function Wl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sv(""+n.key):e.toString(36)}function Da(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case zo:case q0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Wl(o,0):i,vh(r)?(t="",n!=null&&(t=n.replace(xh,"$&/")+"/"),Da(r,e,t,"",function(u){return u})):r!=null&&(lf(r)&&(r=rv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Wl(s,a);o+=Da(s,e,t,l,r)}else if(l=iv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Wl(s,a++),o+=Da(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(n,e,t){if(n==null)return n;var i=[],r=0;return Da(n,i,"","",function(s){return e.call(t,s,r++)}),i}function ov(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Ut={current:null},Ia={transition:null},av={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:af};Fe.Children={map:Ho,forEach:function(n,e,t){Ho(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ho(n,function(){e++}),e},toArray:function(n){return Ho(n,function(e){return e})||[]},only:function(n){if(!lf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Fe.Component=Ts;Fe.Fragment=$0;Fe.Profiler=Z0;Fe.PureComponent=sf;Fe.StrictMode=Y0;Fe.Suspense=ev;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av;Fe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=em({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)im.call(e,l)&&!rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:zo,type:n.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(n){return n={$$typeof:Q0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:J0,_context:n},n.Consumer=n};Fe.createElement=sm;Fe.createFactory=function(n){var e=sm.bind(null,n);return e.type=n,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(n){return{$$typeof:K0,render:n}};Fe.isValidElement=lf;Fe.lazy=function(n){return{$$typeof:nv,_payload:{_status:-1,_result:n},_init:ov}};Fe.memo=function(n,e){return{$$typeof:tv,type:n,compare:e===void 0?null:e}};Fe.startTransition=function(n){var e=Ia.transition;Ia.transition={};try{n()}finally{Ia.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(n,e){return Ut.current.useCallback(n,e)};Fe.useContext=function(n){return Ut.current.useContext(n)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(n){return Ut.current.useDeferredValue(n)};Fe.useEffect=function(n,e){return Ut.current.useEffect(n,e)};Fe.useId=function(){return Ut.current.useId()};Fe.useImperativeHandle=function(n,e,t){return Ut.current.useImperativeHandle(n,e,t)};Fe.useInsertionEffect=function(n,e){return Ut.current.useInsertionEffect(n,e)};Fe.useLayoutEffect=function(n,e){return Ut.current.useLayoutEffect(n,e)};Fe.useMemo=function(n,e){return Ut.current.useMemo(n,e)};Fe.useReducer=function(n,e,t){return Ut.current.useReducer(n,e,t)};Fe.useRef=function(n){return Ut.current.useRef(n)};Fe.useState=function(n){return Ut.current.useState(n)};Fe.useSyncExternalStore=function(n,e,t){return Ut.current.useSyncExternalStore(n,e,t)};Fe.useTransition=function(){return Ut.current.useTransition()};Fe.version="18.2.0";(function(n){n.exports=Fe})(No);const lv=X0(No.exports);var ec={},om={exports:{}},tn={},am={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,k){var U=P.length;P.push(k);e:for(;0<U;){var se=U-1>>>1,N=P[se];if(0<r(N,k))P[se]=k,P[U]=N,U=se;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var k=P[0],U=P.pop();if(U!==k){P[0]=U;e:for(var se=0,N=P.length,I=N>>>1;se<I;){var E=2*(se+1)-1,B=P[E],F=E+1,O=P[F];if(0>r(B,U))F<N&&0>r(O,B)?(P[se]=O,P[F]=U,se=F):(P[se]=B,P[E]=U,se=E);else if(F<N&&0>r(O,U))P[se]=O,P[F]=U,se=F;else break e}}return k}function r(P,k){var U=P.sortIndex-k.sortIndex;return U!==0?U:P.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,x=!1,g=!1,d=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var k=t(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=P)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(u)}}function y(P){if(g=!1,_(P),!x)if(t(l)!==null)x=!0,ne(w);else{var k=t(u);k!==null&&Y(y,k.startTime-P)}}function w(P,k){x=!1,g&&(g=!1,p(S),S=-1),m=!0;var U=h;try{for(_(k),f=t(l);f!==null&&(!(f.expirationTime>k)||P&&!Z());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var N=se(f.expirationTime<=k);k=n.unstable_now(),typeof N=="function"?f.callback=N:f===t(l)&&i(l),_(k)}else i(l);f=t(l)}if(f!==null)var I=!0;else{var E=t(u);E!==null&&Y(y,E.startTime-k),I=!1}return I}finally{f=null,h=U,m=!1}}var M=!1,b=null,S=-1,A=5,z=-1;function Z(){return!(n.unstable_now()-z<A)}function q(){if(b!==null){var P=n.unstable_now();z=P;var k=!0;try{k=b(!0,P)}finally{k?H():(M=!1,b=null)}}else M=!1}var H;if(typeof v=="function")H=function(){v(q)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=q,H=function(){K.postMessage(null)}}else H=function(){d(q,0)};function ne(P){b=P,M||(M=!0,H())}function Y(P,k){S=d(function(){P(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,ne(w))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var U=h;h=k;try{return P()}finally{h=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=h;h=P;try{return k()}finally{h=U}},n.unstable_scheduleCallback=function(P,k,U){var se=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?se+U:se):U=se,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,P={id:c++,callback:k,priorityLevel:P,startTime:U,expirationTime:N,sortIndex:-1},U>se?(P.sortIndex=U,e(u,P),t(l)===null&&P===t(u)&&(g?(p(S),S=-1):g=!0,Y(y,U-se))):(P.sortIndex=N,e(l,P),x||m||(x=!0,ne(w))),P},n.unstable_shouldYield=Z,n.unstable_wrapCallback=function(P){var k=h;return function(){var U=h;h=k;try{return P.apply(this,arguments)}finally{h=U}}}})(lm);(function(n){n.exports=lm})(am);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=No.exports,en=am.exports;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cm=new Set,fo={};function yr(n,e){ds(n,e),ds(n+"Capture",e)}function ds(n,e){for(fo[n]=e,n=0;n<e.length;n++)cm.add(e[n])}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_h={},yh={};function cv(n){return tc.call(yh,n)?!0:tc.call(_h,n)?!1:uv.test(n)?yh[n]=!0:(_h[n]=!0,!1)}function fv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function hv(n,e,t,i){if(e===null||typeof e>"u"||fv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Et[n]=new Bt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Et[e]=new Bt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Et[n]=new Bt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Et[n]=new Bt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Et[n]=new Bt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Et[n]=new Bt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Et[n]=new Bt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Et[n]=new Bt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Et[n]=new Bt(n,5,!1,n.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(uf,cf);Et[e]=new Bt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(uf,cf);Et[e]=new Bt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(uf,cf);Et[e]=new Bt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Et[n]=new Bt(n,1,!1,n.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Et[n]=new Bt(n,1,!1,n.toLowerCase(),null,!0,!0)});function ff(n,e,t,i){var r=Et.hasOwnProperty(e)?Et[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hv(e,t,r,i)&&(t=null),i||r===null?cv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var li=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),dm=Symbol.for("react.offscreen"),Sh=Symbol.iterator;function Ns(n){return n===null||typeof n!="object"?null:(n=Sh&&n[Sh]||n["@@iterator"],typeof n=="function"?n:null)}var et=Object.assign,jl;function Xs(n){if(jl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+n}var Xl=!1;function ql(n,e){if(!n||Xl)return"";Xl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Xs(n):""}function dv(n){switch(n.tag){case 5:return Xs(n.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return n=ql(n.type,!1),n;case 11:return n=ql(n.type.render,!1),n;case 1:return n=ql(n.type,!0),n;default:return""}}function sc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case jr:return"Fragment";case Wr:return"Portal";case nc:return"Profiler";case hf:return"StrictMode";case ic:return"Suspense";case rc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case hm:return(n.displayName||"Context")+".Consumer";case fm:return(n._context.displayName||"Context")+".Provider";case df:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pf:return e=n.displayName||null,e!==null?e:sc(n.type)||"Memo";case Si:e=n._payload,n=n._init;try{return sc(n(e))}catch{}}return null}function pv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mv(n){var e=pm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function jo(n){n._valueTracker||(n._valueTracker=mv(n))}function mm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=pm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Xa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function oc(n,e){var t=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function wh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gm(n,e){e=e.checked,e!=null&&ff(n,"checked",e,!1)}function ac(n,e){gm(n,e);var t=Fi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lc(n,e.type,t):e.hasOwnProperty("defaultValue")&&lc(n,e.type,Fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Mh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lc(n,e,t){(e!=="number"||Xa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var qs=Array.isArray;function rs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function uc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Eh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(qs(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fi(t)}}function vm(n,e){var t=Fi(e.value),i=Fi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Th(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function xm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?xm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xo,_m=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ho(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gv=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(n){gv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ks[e]=Ks[n]})});function ym(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ks.hasOwnProperty(n)&&Ks[n]?(""+e).trim():e+"px"}function Sm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=ym(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var vv=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(n,e){if(e){if(vv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function hc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function mf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pc=null,ss=null,os=null;function bh(n){if(n=Oo(n)){if(typeof pc!="function")throw Error(de(280));var e=n.stateNode;e&&(e=Ml(e),pc(n.stateNode,n.type,e))}}function wm(n){ss?os?os.push(n):os=[n]:ss=n}function Mm(){if(ss){var n=ss,e=os;if(os=ss=null,bh(n),e)for(n=0;n<e.length;n++)bh(e[n])}}function Em(n,e){return n(e)}function Tm(){}var $l=!1;function bm(n,e,t){if($l)return n(e,t);$l=!0;try{return Em(n,e,t)}finally{$l=!1,(ss!==null||os!==null)&&(Tm(),Mm())}}function po(n,e){var t=n.stateNode;if(t===null)return null;var i=Ml(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var mc=!1;if(ri)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){mc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{mc=!1}function xv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var eo=!1,qa=null,$a=!1,gc=null,_v={onError:function(n){eo=!0,qa=n}};function yv(n,e,t,i,r,s,o,a,l){eo=!1,qa=null,xv.apply(_v,arguments)}function Sv(n,e,t,i,r,s,o,a,l){if(yv.apply(this,arguments),eo){if(eo){var u=qa;eo=!1,qa=null}else throw Error(de(198));$a||($a=!0,gc=u)}}function Sr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Cm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(n){if(Sr(n)!==n)throw Error(de(188))}function wv(n){var e=n.alternate;if(!e){if(e=Sr(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Ch(r),n;if(s===i)return Ch(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function Am(n){return n=wv(n),n!==null?Lm(n):null}function Lm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Lm(n);if(e!==null)return e;n=n.sibling}return null}var Pm=en.unstable_scheduleCallback,Ah=en.unstable_cancelCallback,Mv=en.unstable_shouldYield,Ev=en.unstable_requestPaint,at=en.unstable_now,Tv=en.unstable_getCurrentPriorityLevel,gf=en.unstable_ImmediatePriority,Rm=en.unstable_UserBlockingPriority,Ya=en.unstable_NormalPriority,bv=en.unstable_LowPriority,Dm=en.unstable_IdlePriority,_l=null,Fn=null;function Cv(n){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(_l,n,void 0,(n.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:Pv,Av=Math.log,Lv=Math.LN2;function Pv(n){return n>>>=0,n===0?32:31-(Av(n)/Lv|0)|0}var qo=64,$o=4194304;function $s(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Za(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=$s(a):(s&=o,s!==0&&(i=$s(s)))}else o=t&~r,o!==0?i=$s(o):s!==0&&(i=$s(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Cn(e),r=1<<t,i|=n[t],e&=~r;return i}function Rv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Cn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=Rv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function vc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Im(){var n=qo;return qo<<=1,(qo&4194240)===0&&(qo=64),n}function Yl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ko(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Cn(e),n[e]=t}function Iv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Cn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function vf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Cn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Xe=0;function Nm(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zm,xf,km,Fm,Om,xc=!1,Yo=[],Ai=null,Li=null,Pi=null,mo=new Map,go=new Map,Ei=[],Nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(n,e){switch(n){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function ks(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oo(e),e!==null&&xf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function zv(n,e,t,i,r){switch(e){case"focusin":return Ai=ks(Ai,n,e,t,i,r),!0;case"dragenter":return Li=ks(Li,n,e,t,i,r),!0;case"mouseover":return Pi=ks(Pi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,ks(mo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,ks(go.get(s)||null,n,e,t,i,r)),!0}return!1}function Um(n){var e=er(n.target);if(e!==null){var t=Sr(e);if(t!==null){if(e=t.tag,e===13){if(e=Cm(t),e!==null){n.blockedOn=e,Om(n.priority,function(){km(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=_c(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);dc=i,t.target.dispatchEvent(i),dc=null}else return e=Oo(t),e!==null&&xf(e),n.blockedOn=t,!1;e.shift()}return!0}function Ph(n,e,t){Na(n)&&t.delete(e)}function kv(){xc=!1,Ai!==null&&Na(Ai)&&(Ai=null),Li!==null&&Na(Li)&&(Li=null),Pi!==null&&Na(Pi)&&(Pi=null),mo.forEach(Ph),go.forEach(Ph)}function Fs(n,e){n.blockedOn===e&&(n.blockedOn=null,xc||(xc=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,kv)))}function vo(n){function e(r){return Fs(r,n)}if(0<Yo.length){Fs(Yo[0],n);for(var t=1;t<Yo.length;t++){var i=Yo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ai!==null&&Fs(Ai,n),Li!==null&&Fs(Li,n),Pi!==null&&Fs(Pi,n),mo.forEach(e),go.forEach(e),t=0;t<Ei.length;t++)i=Ei[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ei.length&&(t=Ei[0],t.blockedOn===null);)Um(t),t.blockedOn===null&&Ei.shift()}var as=li.ReactCurrentBatchConfig,Ja=!0;function Fv(n,e,t,i){var r=Xe,s=as.transition;as.transition=null;try{Xe=1,_f(n,e,t,i)}finally{Xe=r,as.transition=s}}function Ov(n,e,t,i){var r=Xe,s=as.transition;as.transition=null;try{Xe=4,_f(n,e,t,i)}finally{Xe=r,as.transition=s}}function _f(n,e,t,i){if(Ja){var r=_c(n,e,t,i);if(r===null)su(n,e,i,Qa,t),Lh(n,i);else if(zv(r,n,e,t,i))i.stopPropagation();else if(Lh(n,i),e&4&&-1<Nv.indexOf(n)){for(;r!==null;){var s=Oo(r);if(s!==null&&zm(s),s=_c(n,e,t,i),s===null&&su(n,e,i,Qa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else su(n,e,i,null,t)}}var Qa=null;function _c(n,e,t,i){if(Qa=null,n=mf(i),n=er(n),n!==null)if(e=Sr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Cm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Qa=n,null}function Bm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tv()){case gf:return 1;case Rm:return 4;case Ya:case bv:return 16;case Dm:return 536870912;default:return 16}default:return 16}}var bi=null,yf=null,za=null;function Vm(){if(za)return za;var n,e=yf,t=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return za=r.slice(n,1<i?1-i:void 0)}function ka(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Zo(){return!0}function Rh(){return!1}function nn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zo:Rh,this.isPropagationStopped=Rh,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=nn(bs),Fo=et({},bs,{view:0,detail:0}),Uv=nn(Fo),Zl,Jl,Os,yl=et({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Os&&(Os&&n.type==="mousemove"?(Zl=n.screenX-Os.screenX,Jl=n.screenY-Os.screenY):Jl=Zl=0,Os=n),Zl)},movementY:function(n){return"movementY"in n?n.movementY:Jl}}),Dh=nn(yl),Bv=et({},yl,{dataTransfer:0}),Vv=nn(Bv),Gv=et({},Fo,{relatedTarget:0}),Ql=nn(Gv),Hv=et({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=nn(Hv),jv=et({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xv=nn(jv),qv=et({},bs,{data:0}),Ih=nn(qv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Zv[n])?!!e[n]:!1}function wf(){return Jv}var Qv=et({},Fo,{key:function(n){if(n.key){var e=$v[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ka(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(n){return n.type==="keypress"?ka(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ka(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kv=nn(Qv),ex=et({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=nn(ex),tx=et({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),nx=nn(tx),ix=et({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=nn(ix),sx=et({},yl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=nn(sx),ax=[9,13,27,32],Mf=ri&&"CompositionEvent"in window,to=null;ri&&"documentMode"in document&&(to=document.documentMode);var lx=ri&&"TextEvent"in window&&!to,Gm=ri&&(!Mf||to&&8<to&&11>=to),zh=String.fromCharCode(32),kh=!1;function Hm(n,e){switch(n){case"keyup":return ax.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xr=!1;function ux(n,e){switch(n){case"compositionend":return Wm(e);case"keypress":return e.which!==32?null:(kh=!0,zh);case"textInput":return n=e.data,n===zh&&kh?null:n;default:return null}}function cx(n,e){if(Xr)return n==="compositionend"||!Mf&&Hm(n,e)?(n=Vm(),za=yf=bi=null,Xr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gm&&e.locale!=="ko"?null:e.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!fx[n.type]:e==="textarea"}function jm(n,e,t,i){wm(i),e=Ka(e,"onChange"),0<e.length&&(t=new Sf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var no=null,xo=null;function hx(n){ng(n,0)}function Sl(n){var e=Yr(n);if(mm(e))return n}function dx(n,e){if(n==="change")return e}var Xm=!1;if(ri){var Kl;if(ri){var eu="oninput"in document;if(!eu){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),eu=typeof Oh.oninput=="function"}Kl=eu}else Kl=!1;Xm=Kl&&(!document.documentMode||9<document.documentMode)}function Uh(){no&&(no.detachEvent("onpropertychange",qm),xo=no=null)}function qm(n){if(n.propertyName==="value"&&Sl(xo)){var e=[];jm(e,xo,n,mf(n)),bm(hx,e)}}function px(n,e,t){n==="focusin"?(Uh(),no=e,xo=t,no.attachEvent("onpropertychange",qm)):n==="focusout"&&Uh()}function mx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sl(xo)}function gx(n,e){if(n==="click")return Sl(e)}function vx(n,e){if(n==="input"||n==="change")return Sl(e)}function xx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ln=typeof Object.is=="function"?Object.is:xx;function _o(n,e){if(Ln(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!tc.call(e,r)||!Ln(n[r],e[r]))return!1}return!0}function Bh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vh(n,e){var t=Bh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bh(t)}}function $m(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?$m(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ym(){for(var n=window,e=Xa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Xa(n.document)}return e}function Ef(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function _x(n){var e=Ym(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&$m(t.ownerDocument.documentElement,t)){if(i!==null&&Ef(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Vh(t,s);var o=Vh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yx=ri&&"documentMode"in document&&11>=document.documentMode,qr=null,yc=null,io=null,Sc=!1;function Gh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sc||qr==null||qr!==Xa(i)||(i=qr,"selectionStart"in i&&Ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),io&&_o(io,i)||(io=i,i=Ka(yc,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=qr)))}function Jo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var $r={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},tu={},Zm={};ri&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function wl(n){if(tu[n])return tu[n];if(!$r[n])return n;var e=$r[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Zm)return tu[n]=e[t];return n}var Jm=wl("animationend"),Qm=wl("animationiteration"),Km=wl("animationstart"),eg=wl("transitionend"),tg=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(n,e){tg.set(n,e),yr(e,[n])}for(var nu=0;nu<Hh.length;nu++){var iu=Hh[nu],Sx=iu.toLowerCase(),wx=iu[0].toUpperCase()+iu.slice(1);Bi(Sx,"on"+wx)}Bi(Jm,"onAnimationEnd");Bi(Qm,"onAnimationIteration");Bi(Km,"onAnimationStart");Bi("dblclick","onDoubleClick");Bi("focusin","onFocus");Bi("focusout","onBlur");Bi(eg,"onTransitionEnd");ds("onMouseEnter",["mouseout","mouseover"]);ds("onMouseLeave",["mouseout","mouseover"]);ds("onPointerEnter",["pointerout","pointerover"]);ds("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function Wh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Sv(i,e,void 0,n),n.currentTarget=null}function ng(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wh(r,a,u),s=l}}}if($a)throw n=gc,$a=!1,gc=null,n}function $e(n,e){var t=e[bc];t===void 0&&(t=e[bc]=new Set);var i=n+"__bubble";t.has(i)||(ig(e,n,2,!1),t.add(i))}function ru(n,e,t){var i=0;e&&(i|=4),ig(t,n,i,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[Qo]){n[Qo]=!0,cm.forEach(function(t){t!=="selectionchange"&&(Mx.has(t)||ru(t,!1,n),ru(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,ru("selectionchange",!1,e))}}function ig(n,e,t,i){switch(Bm(e)){case 1:var r=Fv;break;case 4:r=Ov;break;default:r=_f}t=r.bind(null,e,t,n),r=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function su(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}bm(function(){var u=s,c=mf(t),f=[];e:{var h=tg.get(n);if(h!==void 0){var m=Sf,x=n;switch(n){case"keypress":if(ka(t)===0)break e;case"keydown":case"keyup":m=Kv;break;case"focusin":x="focus",m=Ql;break;case"focusout":x="blur",m=Ql;break;case"beforeblur":case"afterblur":m=Ql;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nx;break;case Jm:case Qm:case Km:m=Wv;break;case eg:m=rx;break;case"scroll":m=Uv;break;case"wheel":m=ox;break;case"copy":case"cut":case"paste":m=Xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Nh}var g=(e&4)!==0,d=!g&&n==="scroll",p=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,p!==null&&(y=po(v,p),y!=null&&g.push(So(v,y,_)))),d)break;v=v.return}0<g.length&&(h=new m(h,x,null,t,c),f.push({event:h,listeners:g}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==dc&&(x=t.relatedTarget||t.fromElement)&&(er(x)||x[si]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?er(x):null,x!==null&&(d=Sr(x),x!==d||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(g=Dh,y="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=Nh,y="onPointerLeave",p="onPointerEnter",v="pointer"),d=m==null?h:Yr(m),_=x==null?h:Yr(x),h=new g(y,v+"leave",m,t,c),h.target=d,h.relatedTarget=_,y=null,er(c)===u&&(g=new g(p,v+"enter",x,t,c),g.target=_,g.relatedTarget=d,y=g),d=y,m&&x)t:{for(g=m,p=x,v=0,_=g;_;_=br(_))v++;for(_=0,y=p;y;y=br(y))_++;for(;0<v-_;)g=br(g),v--;for(;0<_-v;)p=br(p),_--;for(;v--;){if(g===p||p!==null&&g===p.alternate)break t;g=br(g),p=br(p)}g=null}else g=null;m!==null&&jh(f,h,m,g,!1),x!==null&&d!==null&&jh(f,d,x,g,!0)}}e:{if(h=u?Yr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var w=dx;else if(Fh(h))if(Xm)w=vx;else{w=mx;var M=px}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=gx);if(w&&(w=w(n,u))){jm(f,w,t,c);break e}M&&M(n,h,u),n==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&lc(h,"number",h.value)}switch(M=u?Yr(u):window,n){case"focusin":(Fh(M)||M.contentEditable==="true")&&(qr=M,yc=u,io=null);break;case"focusout":io=yc=qr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Gh(f,t,c);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Gh(f,t,c)}var b;if(Mf)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Xr?Hm(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Gm&&t.locale!=="ko"&&(Xr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Xr&&(b=Vm()):(bi=c,yf="value"in bi?bi.value:bi.textContent,Xr=!0)),M=Ka(u,S),0<M.length&&(S=new Ih(S,n,null,t,c),f.push({event:S,listeners:M}),b?S.data=b:(b=Wm(t),b!==null&&(S.data=b)))),(b=lx?ux(n,t):cx(n,t))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(c=new Ih("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=b))}ng(f,e)})}function So(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ka(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(n,t),s!=null&&i.unshift(So(n,s,r)),s=po(n,e),s!=null&&i.push(So(n,s,r))),n=n.return}return i}function br(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=po(t,s),l!=null&&o.unshift(So(t,l,a))):r||(l=po(t,s),l!=null&&o.push(So(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Ex=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function Xh(n){return(typeof n=="string"?n:""+n).replace(Ex,`
`).replace(Tx,"")}function Ko(n,e,t){if(e=Xh(e),Xh(n)!==e&&t)throw Error(de(425))}function el(){}var wc=null,Mc=null;function Ec(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tc=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(n){return qh.resolve(null).then(n).catch(Ax)}:Tc;function Ax(n){setTimeout(function(){throw n})}function ou(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vo(e)}function Ri(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function $h(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),zn="__reactFiber$"+Cs,wo="__reactProps$"+Cs,si="__reactContainer$"+Cs,bc="__reactEvents$"+Cs,Lx="__reactListeners$"+Cs,Px="__reactHandles$"+Cs;function er(n){var e=n[zn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[si]||t[zn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=$h(n);n!==null;){if(t=n[zn])return t;n=$h(n)}return e}n=t,t=n.parentNode}return null}function Oo(n){return n=n[zn]||n[si],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Yr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function Ml(n){return n[wo]||null}var Cc=[],Zr=-1;function Vi(n){return{current:n}}function Ye(n){0>Zr||(n.current=Cc[Zr],Cc[Zr]=null,Zr--)}function qe(n,e){Zr++,Cc[Zr]=n.current,n.current=e}var Oi={},Pt=Vi(Oi),Wt=Vi(!1),fr=Oi;function ps(n,e){var t=n.type.contextTypes;if(!t)return Oi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function jt(n){return n=n.childContextTypes,n!=null}function tl(){Ye(Wt),Ye(Pt)}function Yh(n,e,t){if(Pt.current!==Oi)throw Error(de(168));qe(Pt,e),qe(Wt,t)}function rg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,pv(n)||"Unknown",r));return et({},t,i)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Oi,fr=Pt.current,qe(Pt,n),qe(Wt,Wt.current),!0}function Zh(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=rg(n,e,fr),i.__reactInternalMemoizedMergedChildContext=n,Ye(Wt),Ye(Pt),qe(Pt,n)):Ye(Wt),qe(Wt,t)}var Jn=null,El=!1,au=!1;function sg(n){Jn===null?Jn=[n]:Jn.push(n)}function Rx(n){El=!0,sg(n)}function Gi(){if(!au&&Jn!==null){au=!0;var n=0,e=Xe;try{var t=Jn;for(Xe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Jn=null,El=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(n+1)),Pm(gf,Gi),r}finally{Xe=e,au=!1}}return null}var Jr=[],Qr=0,il=null,rl=0,an=[],ln=0,hr=null,Kn=1,ei="";function Zi(n,e){Jr[Qr++]=rl,Jr[Qr++]=il,il=n,rl=e}function og(n,e,t){an[ln++]=Kn,an[ln++]=ei,an[ln++]=hr,hr=n;var i=Kn;n=ei;var r=32-Cn(i)-1;i&=~(1<<r),t+=1;var s=32-Cn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Kn=1<<32-Cn(e)+r|t<<r|i,ei=s+n}else Kn=1<<s|t<<r|i,ei=n}function Tf(n){n.return!==null&&(Zi(n,1),og(n,1,0))}function bf(n){for(;n===il;)il=Jr[--Qr],Jr[Qr]=null,rl=Jr[--Qr],Jr[Qr]=null;for(;n===hr;)hr=an[--ln],an[ln]=null,ei=an[--ln],an[ln]=null,Kn=an[--ln],an[ln]=null}var Kt=null,Qt=null,Ze=!1,En=null;function ag(n,e){var t=fn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Jh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Kt=n,Qt=Ri(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Kt=n,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=hr!==null?{id:Kn,overflow:ei}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=fn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Kt=n,Qt=null,!0):!1;default:return!1}}function Ac(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lc(n){if(Ze){var e=Qt;if(e){var t=e;if(!Jh(n,e)){if(Ac(n))throw Error(de(418));e=Ri(t.nextSibling);var i=Kt;e&&Jh(n,e)?ag(i,t):(n.flags=n.flags&-4097|2,Ze=!1,Kt=n)}}else{if(Ac(n))throw Error(de(418));n.flags=n.flags&-4097|2,Ze=!1,Kt=n}}}function Qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kt=n}function ea(n){if(n!==Kt)return!1;if(!Ze)return Qh(n),Ze=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ec(n.type,n.memoizedProps)),e&&(e=Qt)){if(Ac(n))throw lg(),Error(de(418));for(;e;)ag(n,e),e=Ri(e.nextSibling)}if(Qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Qt=Ri(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Qt=null}}else Qt=Kt?Ri(n.stateNode.nextSibling):null;return!0}function lg(){for(var n=Qt;n;)n=Ri(n.nextSibling)}function ms(){Qt=Kt=null,Ze=!1}function Cf(n){En===null?En=[n]:En.push(n)}var Dx=li.ReactCurrentBatchConfig;function wn(n,e){if(n&&n.defaultProps){e=et({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var sl=Vi(null),ol=null,Kr=null,Af=null;function Lf(){Af=Kr=ol=null}function Pf(n){var e=sl.current;Ye(sl),n._currentValue=e}function Pc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ls(n,e){ol=n,Af=Kr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Ht=!0),n.firstContext=null)}function mn(n){var e=n._currentValue;if(Af!==n)if(n={context:n,memoizedValue:e,next:null},Kr===null){if(ol===null)throw Error(de(308));Kr=n,ol.dependencies={lanes:0,firstContext:n}}else Kr=Kr.next=n;return e}var tr=null;function Rf(n){tr===null?tr=[n]:tr.push(n)}function ug(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rf(e)):(t.next=r.next,r.next=t),e.interleaved=t,oi(n,i)}function oi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var wi=!1;function Df(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ti(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Be&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,oi(n,t)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,oi(n,t)}function Fa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vf(n,t)}}function Kh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function al(n,e,t,i){var r=n.updateQueue;wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,g=a;switch(h=e,m=t,g.tag){case 1:if(x=g.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=et({},f,h);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);pr|=o,n.lanes=o,n.memoizedState=f}}function ed(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var fg=new um.Component().refs;function Rc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:et({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Tl={isMounted:function(n){return(n=n._reactInternals)?Sr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=zt(),r=Ni(n),s=ti(i,r);s.payload=e,t!=null&&(s.callback=t),e=Di(n,s,r),e!==null&&(An(e,n,r,i),Fa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=zt(),r=Ni(n),s=ti(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Di(n,s,r),e!==null&&(An(e,n,r,i),Fa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=zt(),i=Ni(n),r=ti(t,i);r.tag=2,e!=null&&(r.callback=e),e=Di(n,r,i),e!==null&&(An(e,n,i,t),Fa(e,n,i))}};function td(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_o(t,i)||!_o(r,s):!0}function hg(n,e,t){var i=!1,r=Oi,s=e.contextType;return typeof s=="object"&&s!==null?s=mn(s):(r=jt(e)?fr:Pt.current,i=e.contextTypes,s=(i=i!=null)?ps(n,r):Oi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function nd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Tl.enqueueReplaceState(e,e.state,null)}function Dc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=fg,Df(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=mn(s):(s=jt(e)?fr:Pt.current,r.context=ps(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tl.enqueueReplaceState(r,r.state,null),al(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===fg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function ta(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function id(n){var e=n._init;return e(n._payload)}function dg(n){function e(p,v){if(n){var _=p.deletions;_===null?(p.deletions=[v],p.flags|=16):_.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=zi(p,v),p.index=0,p.sibling=null,p}function s(p,v,_){return p.index=_,n?(_=p.alternate,_!==null?(_=_.index,_<v?(p.flags|=2,v):_):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,_,y){return v===null||v.tag!==6?(v=pu(_,p.mode,y),v.return=p,v):(v=r(v,_),v.return=p,v)}function l(p,v,_,y){var w=_.type;return w===jr?c(p,v,_.props.children,y,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Si&&id(w)===v.type)?(y=r(v,_.props),y.ref=Us(p,v,_),y.return=p,y):(y=Ha(_.type,_.key,_.props,null,p.mode,y),y.ref=Us(p,v,_),y.return=p,y)}function u(p,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=mu(_,p.mode,y),v.return=p,v):(v=r(v,_.children||[]),v.return=p,v)}function c(p,v,_,y,w){return v===null||v.tag!==7?(v=ar(_,p.mode,y,w),v.return=p,v):(v=r(v,_),v.return=p,v)}function f(p,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pu(""+v,p.mode,_),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:return _=Ha(v.type,v.key,v.props,null,p.mode,_),_.ref=Us(p,null,v),_.return=p,_;case Wr:return v=mu(v,p.mode,_),v.return=p,v;case Si:var y=v._init;return f(p,y(v._payload),_)}if(qs(v)||Ns(v))return v=ar(v,p.mode,_,null),v.return=p,v;ta(p,v)}return null}function h(p,v,_,y){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(p,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:return _.key===w?l(p,v,_,y):null;case Wr:return _.key===w?u(p,v,_,y):null;case Si:return w=_._init,h(p,v,w(_._payload),y)}if(qs(_)||Ns(_))return w!==null?null:c(p,v,_,y,null);ta(p,_)}return null}function m(p,v,_,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(_)||null,a(v,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wo:return p=p.get(y.key===null?_:y.key)||null,l(v,p,y,w);case Wr:return p=p.get(y.key===null?_:y.key)||null,u(v,p,y,w);case Si:var M=y._init;return m(p,v,_,M(y._payload),w)}if(qs(y)||Ns(y))return p=p.get(_)||null,c(v,p,y,w,null);ta(v,y)}return null}function x(p,v,_,y){for(var w=null,M=null,b=v,S=v=0,A=null;b!==null&&S<_.length;S++){b.index>S?(A=b,b=null):A=b.sibling;var z=h(p,b,_[S],y);if(z===null){b===null&&(b=A);break}n&&b&&z.alternate===null&&e(p,b),v=s(z,v,S),M===null?w=z:M.sibling=z,M=z,b=A}if(S===_.length)return t(p,b),Ze&&Zi(p,S),w;if(b===null){for(;S<_.length;S++)b=f(p,_[S],y),b!==null&&(v=s(b,v,S),M===null?w=b:M.sibling=b,M=b);return Ze&&Zi(p,S),w}for(b=i(p,b);S<_.length;S++)A=m(b,p,S,_[S],y),A!==null&&(n&&A.alternate!==null&&b.delete(A.key===null?S:A.key),v=s(A,v,S),M===null?w=A:M.sibling=A,M=A);return n&&b.forEach(function(Z){return e(p,Z)}),Ze&&Zi(p,S),w}function g(p,v,_,y){var w=Ns(_);if(typeof w!="function")throw Error(de(150));if(_=w.call(_),_==null)throw Error(de(151));for(var M=w=null,b=v,S=v=0,A=null,z=_.next();b!==null&&!z.done;S++,z=_.next()){b.index>S?(A=b,b=null):A=b.sibling;var Z=h(p,b,z.value,y);if(Z===null){b===null&&(b=A);break}n&&b&&Z.alternate===null&&e(p,b),v=s(Z,v,S),M===null?w=Z:M.sibling=Z,M=Z,b=A}if(z.done)return t(p,b),Ze&&Zi(p,S),w;if(b===null){for(;!z.done;S++,z=_.next())z=f(p,z.value,y),z!==null&&(v=s(z,v,S),M===null?w=z:M.sibling=z,M=z);return Ze&&Zi(p,S),w}for(b=i(p,b);!z.done;S++,z=_.next())z=m(b,p,S,z.value,y),z!==null&&(n&&z.alternate!==null&&b.delete(z.key===null?S:z.key),v=s(z,v,S),M===null?w=z:M.sibling=z,M=z);return n&&b.forEach(function(q){return e(p,q)}),Ze&&Zi(p,S),w}function d(p,v,_,y){if(typeof _=="object"&&_!==null&&_.type===jr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:e:{for(var w=_.key,M=v;M!==null;){if(M.key===w){if(w=_.type,w===jr){if(M.tag===7){t(p,M.sibling),v=r(M,_.props.children),v.return=p,p=v;break e}}else if(M.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Si&&id(w)===M.type){t(p,M.sibling),v=r(M,_.props),v.ref=Us(p,M,_),v.return=p,p=v;break e}t(p,M);break}else e(p,M);M=M.sibling}_.type===jr?(v=ar(_.props.children,p.mode,y,_.key),v.return=p,p=v):(y=Ha(_.type,_.key,_.props,null,p.mode,y),y.ref=Us(p,v,_),y.return=p,p=y)}return o(p);case Wr:e:{for(M=_.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(p,v.sibling),v=r(v,_.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=mu(_,p.mode,y),v.return=p,p=v}return o(p);case Si:return M=_._init,d(p,v,M(_._payload),y)}if(qs(_))return x(p,v,_,y);if(Ns(_))return g(p,v,_,y);ta(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,_),v.return=p,p=v):(t(p,v),v=pu(_,p.mode,y),v.return=p,p=v),o(p)):t(p,v)}return d}var gs=dg(!0),pg=dg(!1),Uo={},On=Vi(Uo),Mo=Vi(Uo),Eo=Vi(Uo);function nr(n){if(n===Uo)throw Error(de(174));return n}function If(n,e){switch(qe(Eo,e),qe(Mo,n),qe(On,Uo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=cc(e,n)}Ye(On),qe(On,e)}function vs(){Ye(On),Ye(Mo),Ye(Eo)}function mg(n){nr(Eo.current);var e=nr(On.current),t=cc(e,n.type);e!==t&&(qe(Mo,n),qe(On,t))}function Nf(n){Mo.current===n&&(Ye(On),Ye(Mo))}var Je=Vi(0);function ll(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lu=[];function zf(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var Oa=li.ReactCurrentDispatcher,uu=li.ReactCurrentBatchConfig,dr=0,Ke=null,dt=null,vt=null,ul=!1,ro=!1,To=0,Ix=0;function Tt(){throw Error(de(321))}function kf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ln(n[t],e[t]))return!1;return!0}function Ff(n,e,t,i,r,s){if(dr=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=n===null||n.memoizedState===null?Fx:Ox,n=t(i,r),ro){s=0;do{if(ro=!1,To=0,25<=s)throw Error(de(301));s+=1,vt=dt=null,e.updateQueue=null,Oa.current=Ux,n=t(i,r)}while(ro)}if(Oa.current=cl,e=dt!==null&&dt.next!==null,dr=0,vt=dt=Ke=null,ul=!1,e)throw Error(de(300));return n}function Of(){var n=To!==0;return To=0,n}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ke.memoizedState=vt=n:vt=vt.next=n,vt}function gn(){if(dt===null){var n=Ke.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var e=vt===null?Ke.memoizedState:vt.next;if(e!==null)vt=e,dt=n;else{if(n===null)throw Error(de(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?Ke.memoizedState=vt=n:vt=vt.next=n}return vt}function bo(n,e){return typeof e=="function"?e(n):e}function cu(n){var e=gn(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=dt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ke.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Ln(i,e.memoizedState)||(Ht=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ke.lanes|=s,pr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function fu(n){var e=gn(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ln(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function gg(){}function vg(n,e){var t=Ke,i=gn(),r=e(),s=!Ln(i.memoizedState,r);if(s&&(i.memoizedState=r,Ht=!0),i=i.queue,Uf(yg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(t.flags|=2048,Co(9,_g.bind(null,t,i,r,e),void 0,null),yt===null)throw Error(de(349));(dr&30)!==0||xg(t,e,r)}return r}function xg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function _g(n,e,t,i){e.value=t,e.getSnapshot=i,Sg(e)&&wg(n)}function yg(n,e,t){return t(function(){Sg(e)&&wg(n)})}function Sg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ln(n,t)}catch{return!0}}function wg(n){var e=oi(n,1);e!==null&&An(e,n,1,-1)}function rd(n){var e=In();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},e.queue=n,n=n.dispatch=kx.bind(null,Ke,n),[e.memoizedState,n]}function Co(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Mg(){return gn().memoizedState}function Ua(n,e,t,i){var r=In();Ke.flags|=n,r.memoizedState=Co(1|e,t,void 0,i===void 0?null:i)}function bl(n,e,t,i){var r=gn();i=i===void 0?null:i;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,i!==null&&kf(i,o.deps)){r.memoizedState=Co(e,t,s,i);return}}Ke.flags|=n,r.memoizedState=Co(1|e,t,s,i)}function sd(n,e){return Ua(8390656,8,n,e)}function Uf(n,e){return bl(2048,8,n,e)}function Eg(n,e){return bl(4,2,n,e)}function Tg(n,e){return bl(4,4,n,e)}function bg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Cg(n,e,t){return t=t!=null?t.concat([n]):null,bl(4,4,bg.bind(null,e,n),t)}function Bf(){}function Ag(n,e){var t=gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Lg(n,e){var t=gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Pg(n,e,t){return(dr&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=t):(Ln(t,e)||(t=Im(),Ke.lanes|=t,pr|=t,n.baseState=!0),e)}function Nx(n,e){var t=Xe;Xe=t!==0&&4>t?t:4,n(!0);var i=uu.transition;uu.transition={};try{n(!1),e()}finally{Xe=t,uu.transition=i}}function Rg(){return gn().memoizedState}function zx(n,e,t){var i=Ni(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Dg(n))Ig(e,t);else if(t=ug(n,e,t,i),t!==null){var r=zt();An(t,n,i,r),Ng(t,e,i)}}function kx(n,e,t){var i=Ni(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Dg(n))Ig(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ln(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ug(n,e,r,i),t!==null&&(r=zt(),An(t,n,i,r),Ng(t,e,i))}}function Dg(n){var e=n.alternate;return n===Ke||e!==null&&e===Ke}function Ig(n,e){ro=ul=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ng(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vf(n,t)}}var cl={readContext:mn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Fx={readContext:mn,useCallback:function(n,e){return In().memoizedState=[n,e===void 0?null:e],n},useContext:mn,useEffect:sd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ua(4194308,4,bg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ua(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ua(4,2,n,e)},useMemo:function(n,e){var t=In();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=In();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=zx.bind(null,Ke,n),[i.memoizedState,n]},useRef:function(n){var e=In();return n={current:n},e.memoizedState=n},useState:rd,useDebugValue:Bf,useDeferredValue:function(n){return In().memoizedState=n},useTransition:function(){var n=rd(!1),e=n[0];return n=Nx.bind(null,n[1]),In().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ke,r=In();if(Ze){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),yt===null)throw Error(de(349));(dr&30)!==0||xg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,sd(yg.bind(null,i,s,n),[n]),i.flags|=2048,Co(9,_g.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=In(),e=yt.identifierPrefix;if(Ze){var t=ei,i=Kn;t=(i&~(1<<32-Cn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=To++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ix++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ox={readContext:mn,useCallback:Ag,useContext:mn,useEffect:Uf,useImperativeHandle:Cg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Lg,useReducer:cu,useRef:Mg,useState:function(){return cu(bo)},useDebugValue:Bf,useDeferredValue:function(n){var e=gn();return Pg(e,dt.memoizedState,n)},useTransition:function(){var n=cu(bo)[0],e=gn().memoizedState;return[n,e]},useMutableSource:gg,useSyncExternalStore:vg,useId:Rg,unstable_isNewReconciler:!1},Ux={readContext:mn,useCallback:Ag,useContext:mn,useEffect:Uf,useImperativeHandle:Cg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Lg,useReducer:fu,useRef:Mg,useState:function(){return fu(bo)},useDebugValue:Bf,useDeferredValue:function(n){var e=gn();return dt===null?e.memoizedState=n:Pg(e,dt.memoizedState,n)},useTransition:function(){var n=fu(bo)[0],e=gn().memoizedState;return[n,e]},useMutableSource:gg,useSyncExternalStore:vg,useId:Rg,unstable_isNewReconciler:!1};function xs(n,e){try{var t="",i=e;do t+=dv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function hu(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Ic(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Bx=typeof WeakMap=="function"?WeakMap:Map;function zg(n,e,t){t=ti(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){hl||(hl=!0,Hc=i),Ic(n,e)},t}function kg(n,e,t){t=ti(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ic(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ic(n,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function od(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Bx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=e_.bind(null,n,e,t),e.then(n,n))}function ad(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ld(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ti(-1,1),e.tag=2,Di(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var Vx=li.ReactCurrentOwner,Ht=!1;function Dt(n,e,t,i){e.child=n===null?pg(e,null,t,i):gs(e,n.child,t,i)}function ud(n,e,t,i,r){t=t.render;var s=e.ref;return ls(e,r),i=Ff(n,e,t,i,s,r),t=Of(),n!==null&&!Ht?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ai(n,e,r)):(Ze&&t&&Tf(e),e.flags|=1,Dt(n,e,i,r),e.child)}function cd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!$f(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Fg(n,e,s,i,r)):(n=Ha(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:_o,t(o,i)&&n.ref===e.ref)return ai(n,e,r)}return e.flags|=1,n=zi(s,i),n.ref=e.ref,n.return=e,e.child=n}function Fg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(_o(s,i)&&n.ref===e.ref)if(Ht=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Ht=!0);else return e.lanes=n.lanes,ai(n,e,r)}return Nc(n,e,t,i,r)}function Og(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(ts,Jt),Jt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,qe(ts,Jt),Jt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,qe(ts,Jt),Jt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,qe(ts,Jt),Jt|=i;return Dt(n,e,r,t),e.child}function Ug(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Nc(n,e,t,i,r){var s=jt(t)?fr:Pt.current;return s=ps(e,s),ls(e,r),t=Ff(n,e,t,i,s,r),i=Of(),n!==null&&!Ht?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ai(n,e,r)):(Ze&&i&&Tf(e),e.flags|=1,Dt(n,e,t,r),e.child)}function fd(n,e,t,i,r){if(jt(t)){var s=!0;nl(e)}else s=!1;if(ls(e,r),e.stateNode===null)Ba(n,e),hg(e,t,i),Dc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=mn(u):(u=jt(t)?fr:Pt.current,u=ps(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&nd(e,o,i,u),wi=!1;var h=e.memoizedState;o.state=h,al(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Wt.current||wi?(typeof c=="function"&&(Rc(e,t,c,i),l=e.memoizedState),(a=wi||td(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,cg(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:wn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=mn(l):(l=jt(t)?fr:Pt.current,l=ps(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&nd(e,o,i,l),wi=!1,h=e.memoizedState,o.state=h,al(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||Wt.current||wi?(typeof m=="function"&&(Rc(e,t,m,i),x=e.memoizedState),(u=wi||td(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return zc(n,e,t,i,s,r)}function zc(n,e,t,i,r,s){Ug(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zh(e,t,!1),ai(n,e,s);i=e.stateNode,Vx.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=gs(e,n.child,null,s),e.child=gs(e,null,a,s)):Dt(n,e,a,s),e.memoizedState=i.state,r&&Zh(e,t,!0),e.child}function Bg(n){var e=n.stateNode;e.pendingContext?Yh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Yh(n,e.context,!1),If(n,e.containerInfo)}function hd(n,e,t,i,r){return ms(),Cf(r),e.flags|=256,Dt(n,e,t,i),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Fc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vg(n,e,t){var i=e.pendingProps,r=Je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),qe(Je,r&1),n===null)return Lc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ll(o,i,0,null),n=ar(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Fc(t),e.memoizedState=kc,n):Vf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=zi(a,s):(s=ar(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Fc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=kc,i}return s=n.child,n=s.sibling,i=zi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Vf(n,e){return e=Ll({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function na(n,e,t,i){return i!==null&&Cf(i),gs(e,n.child,null,t),n=Vf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Gx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=hu(Error(de(422))),na(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ll({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&gs(e,n.child,null,o),e.child.memoizedState=Fc(o),e.memoizedState=kc,s);if((e.mode&1)===0)return na(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=hu(s,i,void 0),na(n,e,o,i)}if(a=(o&n.childLanes)!==0,Ht||a){if(i=yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,oi(n,r),An(i,n,r,-1))}return qf(),i=hu(Error(de(421))),na(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=t_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Qt=Ri(r.nextSibling),Kt=e,Ze=!0,En=null,n!==null&&(an[ln++]=Kn,an[ln++]=ei,an[ln++]=hr,Kn=n.id,ei=n.overflow,hr=e),e=Vf(e,i.children),e.flags|=4096,e)}function dd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pc(n.return,e,t)}function du(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Gg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dt(n,e,i.children,t),i=Je.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dd(n,t,e);else if(n.tag===19)dd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(qe(Je,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ll(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),du(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ll(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}du(e,!0,t,null,s);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ai(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),pr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=zi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=zi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Hx(n,e,t){switch(e.tag){case 3:Bg(e),ms();break;case 5:mg(e);break;case 1:jt(e.type)&&nl(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;qe(sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(qe(Je,Je.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Vg(n,e,t):(qe(Je,Je.current&1),n=ai(n,e,t),n!==null?n.sibling:null);qe(Je,Je.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Gg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),qe(Je,Je.current),i)break;return null;case 22:case 23:return e.lanes=0,Og(n,e,t)}return ai(n,e,t)}var Hg,Oc,Wg,jg;Hg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Oc=function(){};Wg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,nr(On.current);var s=null;switch(t){case"input":r=oc(n,r),i=oc(n,i),s=[];break;case"select":r=et({},r,{value:void 0}),i=et({},i,{value:void 0}),s=[];break;case"textarea":r=uc(n,r),i=uc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=el)}fc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};jg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Bs(n,e){if(!Ze)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function bt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Wx(n,e,t){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return jt(e.type)&&tl(),bt(e),null;case 3:return i=e.stateNode,vs(),Ye(Wt),Ye(Pt),zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ea(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,En!==null&&(Xc(En),En=null))),Oc(n,e),bt(e),null;case 5:Nf(e);var r=nr(Eo.current);if(t=e.type,n!==null&&e.stateNode!=null)Wg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return bt(e),null}if(n=nr(On.current),ea(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[zn]=e,i[wo]=s,n=(e.mode&1)!==0,t){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<Ys.length;r++)$e(Ys[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":wh(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":Eh(i,s),$e("invalid",i)}fc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,n),r=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(t){case"input":jo(i),Mh(i,s,!0);break;case"textarea":jo(i),Th(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=el)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[zn]=e,n[wo]=i,Hg(n,e,!1,!1),e.stateNode=n;e:{switch(o=hc(t,i),t){case"dialog":$e("cancel",n),$e("close",n),r=i;break;case"iframe":case"object":case"embed":$e("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ys.length;r++)$e(Ys[r],n);r=i;break;case"source":$e("error",n),r=i;break;case"img":case"image":case"link":$e("error",n),$e("load",n),r=i;break;case"details":$e("toggle",n),r=i;break;case"input":wh(n,i),r=oc(n,i),$e("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=et({},i,{value:void 0}),$e("invalid",n);break;case"textarea":Eh(n,i),r=uc(n,i),$e("invalid",n);break;default:r=i}fc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_m(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ho(n,l):typeof l=="number"&&ho(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",n):l!=null&&ff(n,s,l,o))}switch(t){case"input":jo(n),Mh(n,i,!1);break;case"textarea":jo(n),Th(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?rs(n,!!i.multiple,s,!1):i.defaultValue!=null&&rs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=el)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bt(e),null;case 6:if(n&&e.stateNode!=null)jg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=nr(Eo.current),nr(On.current),ea(e)){if(i=e.stateNode,t=e.memoizedProps,i[zn]=e,(s=i.nodeValue!==t)&&(n=Kt,n!==null))switch(n.tag){case 3:Ko(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[zn]=e,e.stateNode=i}return bt(e),null;case 13:if(Ye(Je),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&Qt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)lg(),ms(),e.flags|=98560,s=!1;else if(s=ea(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[zn]=e}else ms(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bt(e),s=!1}else En!==null&&(Xc(En),En=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Je.current&1)!==0?pt===0&&(pt=3):qf())),e.updateQueue!==null&&(e.flags|=4),bt(e),null);case 4:return vs(),Oc(n,e),n===null&&yo(e.stateNode.containerInfo),bt(e),null;case 10:return Pf(e.type._context),bt(e),null;case 17:return jt(e.type)&&tl(),bt(e),null;case 19:if(Ye(Je),s=e.memoizedState,s===null)return bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bs(s,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=ll(n),o!==null){for(e.flags|=128,Bs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return qe(Je,Je.current&1|2),e.child}n=n.sibling}s.tail!==null&&at()>_s&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304)}else{if(!i)if(n=ll(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ze)return bt(e),null}else 2*at()-s.renderingStartTime>_s&&t!==1073741824&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,t=Je.current,qe(Je,i?t&1|2:t&1),e):(bt(e),null);case 22:case 23:return Xf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Jt&1073741824)!==0&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function jx(n,e){switch(bf(e),e.tag){case 1:return jt(e.type)&&tl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return vs(),Ye(Wt),Ye(Pt),zf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(Ye(Je),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));ms()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ye(Je),null;case 4:return vs(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var ia=!1,Lt=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,Me=null;function es(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){rt(n,e,i)}else t.current=null}function Uc(n,e,t){try{t()}catch(i){rt(n,e,i)}}var pd=!1;function qx(n,e){if(wc=Ja,n=Ym(),Ef(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mc={focusedElem:n,selectionRange:t},Ja=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){e=Me;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,d=x.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?g:wn(e.type,g),d);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(y){rt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return x=pd,pd=!1,x}function so(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uc(e,t,s)}r=r.next}while(r!==i)}}function Cl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Xg(n){var e=n.alternate;e!==null&&(n.alternate=null,Xg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[zn],delete e[wo],delete e[bc],delete e[Lx],delete e[Px])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qg(n){return n.tag===5||n.tag===3||n.tag===4}function md(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=el));else if(i!==4&&(n=n.child,n!==null))for(Vc(n,e,t),n=n.sibling;n!==null;)Vc(n,e,t),n=n.sibling}function Gc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Gc(n,e,t),n=n.sibling;n!==null;)Gc(n,e,t),n=n.sibling}var wt=null,Mn=!1;function fi(n,e,t){for(t=t.child;t!==null;)$g(n,e,t),t=t.sibling}function $g(n,e,t){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(_l,t)}catch{}switch(t.tag){case 5:Lt||es(t,e);case 6:var i=wt,r=Mn;wt=null,fi(n,e,t),wt=i,Mn=r,wt!==null&&(Mn?(n=wt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):wt.removeChild(t.stateNode));break;case 18:wt!==null&&(Mn?(n=wt,t=t.stateNode,n.nodeType===8?ou(n.parentNode,t):n.nodeType===1&&ou(n,t),vo(n)):ou(wt,t.stateNode));break;case 4:i=wt,r=Mn,wt=t.stateNode.containerInfo,Mn=!0,fi(n,e,t),wt=i,Mn=r;break;case 0:case 11:case 14:case 15:if(!Lt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Uc(t,e,o),r=r.next}while(r!==i)}fi(n,e,t);break;case 1:if(!Lt&&(es(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){rt(t,e,a)}fi(n,e,t);break;case 21:fi(n,e,t);break;case 22:t.mode&1?(Lt=(i=Lt)||t.memoizedState!==null,fi(n,e,t),Lt=i):fi(n,e,t);break;default:fi(n,e,t)}}function gd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Xx),e.forEach(function(i){var r=n_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function vn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,Mn=!1;break e;case 3:wt=a.stateNode.containerInfo,Mn=!0;break e;case 4:wt=a.stateNode.containerInfo,Mn=!0;break e}a=a.return}if(wt===null)throw Error(de(160));$g(s,o,r),wt=null,Mn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yg(e,n),e=e.sibling}function Yg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vn(e,n),Dn(n),i&4){try{so(3,n,n.return),Cl(3,n)}catch(g){rt(n,n.return,g)}try{so(5,n,n.return)}catch(g){rt(n,n.return,g)}}break;case 1:vn(e,n),Dn(n),i&512&&t!==null&&es(t,t.return);break;case 5:if(vn(e,n),Dn(n),i&512&&t!==null&&es(t,t.return),n.flags&32){var r=n.stateNode;try{ho(r,"")}catch(g){rt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gm(r,s),hc(a,o);var u=hc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Sm(r,f):c==="dangerouslySetInnerHTML"?_m(r,f):c==="children"?ho(r,f):ff(r,c,f,u)}switch(a){case"input":ac(r,s);break;case"textarea":vm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?rs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?rs(r,!!s.multiple,s.defaultValue,!0):rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[wo]=s}catch(g){rt(n,n.return,g)}}break;case 6:if(vn(e,n),Dn(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){rt(n,n.return,g)}}break;case 3:if(vn(e,n),Dn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(g){rt(n,n.return,g)}break;case 4:vn(e,n),Dn(n);break;case 13:vn(e,n),Dn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=at())),i&4&&gd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Lt=(u=Lt)||c,vn(e,n),Lt=u):vn(e,n),Dn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(Me=n,c=n.child;c!==null;){for(f=Me=c;Me!==null;){switch(h=Me,m=h.child,h.tag){case 0:case 11:case 14:case 15:so(4,h,h.return);break;case 1:es(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){rt(i,t,g)}}break;case 5:es(h,h.return);break;case 22:if(h.memoizedState!==null){xd(f);continue}}m!==null?(m.return=h,Me=m):xd(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ym("display",o))}catch(g){rt(n,n.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){rt(n,n.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(e,n),Dn(n),i&4&&gd(n);break;case 21:break;default:vn(e,n),Dn(n)}}function Dn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(qg(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=md(n);Gc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=md(n);Vc(n,a,o);break;default:throw Error(de(161))}}catch(l){rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $x(n,e,t){Me=n,Zg(n)}function Zg(n,e,t){for(var i=(n.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Lt;a=ia;var u=Lt;if(ia=o,(Lt=l)&&!u)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?_d(r):l!==null?(l.return=o,Me=l):_d(r);for(;s!==null;)Me=s,Zg(s),s=s.sibling;Me=r,ia=a,Lt=u}vd(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,Me=s):vd(n)}}function vd(n){for(;Me!==null;){var e=Me;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Lt||Cl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Lt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:wn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ed(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ed(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Lt||e.flags&512&&Bc(e)}catch(h){rt(e,e.return,h)}}if(e===n){Me=null;break}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}}function xd(n){for(;Me!==null;){var e=Me;if(e===n){Me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Me=t;break}Me=e.return}}function _d(n){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Cl(4,e)}catch(l){rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){rt(e,r,l)}}var s=e.return;try{Bc(e)}catch(l){rt(e,s,l)}break;case 5:var o=e.return;try{Bc(e)}catch(l){rt(e,o,l)}}}catch(l){rt(e,e.return,l)}if(e===n){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var Yx=Math.ceil,fl=li.ReactCurrentDispatcher,Gf=li.ReactCurrentOwner,dn=li.ReactCurrentBatchConfig,Be=0,yt=null,ft=null,Mt=0,Jt=0,ts=Vi(0),pt=0,Ao=null,pr=0,Al=0,Hf=0,oo=null,Vt=null,Wf=0,_s=1/0,Yn=null,hl=!1,Hc=null,Ii=null,ra=!1,Ci=null,dl=0,ao=0,Wc=null,Va=-1,Ga=0;function zt(){return(Be&6)!==0?at():Va!==-1?Va:Va=at()}function Ni(n){return(n.mode&1)===0?1:(Be&2)!==0&&Mt!==0?Mt&-Mt:Dx.transition!==null?(Ga===0&&(Ga=Im()),Ga):(n=Xe,n!==0||(n=window.event,n=n===void 0?16:Bm(n.type)),n)}function An(n,e,t,i){if(50<ao)throw ao=0,Wc=null,Error(de(185));ko(n,t,i),((Be&2)===0||n!==yt)&&(n===yt&&((Be&2)===0&&(Al|=t),pt===4&&Ti(n,Mt)),Xt(n,i),t===1&&Be===0&&(e.mode&1)===0&&(_s=at()+500,El&&Gi()))}function Xt(n,e){var t=n.callbackNode;Dv(n,e);var i=Za(n,n===yt?Mt:0);if(i===0)t!==null&&Ah(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Ah(t),e===1)n.tag===0?Rx(yd.bind(null,n)):sg(yd.bind(null,n)),Cx(function(){(Be&6)===0&&Gi()}),t=null;else{switch(Nm(i)){case 1:t=gf;break;case 4:t=Rm;break;case 16:t=Ya;break;case 536870912:t=Dm;break;default:t=Ya}t=r0(t,Jg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Jg(n,e){if(Va=-1,Ga=0,(Be&6)!==0)throw Error(de(327));var t=n.callbackNode;if(us()&&n.callbackNode!==t)return null;var i=Za(n,n===yt?Mt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=pl(n,i);else{e=i;var r=Be;Be|=2;var s=Kg();(yt!==n||Mt!==e)&&(Yn=null,_s=at()+500,or(n,e));do try{Qx();break}catch(a){Qg(n,a)}while(1);Lf(),fl.current=s,Be=r,ft!==null?e=0:(yt=null,Mt=0,e=pt)}if(e!==0){if(e===2&&(r=vc(n),r!==0&&(i=r,e=jc(n,r))),e===1)throw t=Ao,or(n,0),Ti(n,i),Xt(n,at()),t;if(e===6)Ti(n,i);else{if(r=n.current.alternate,(i&30)===0&&!Zx(r)&&(e=pl(n,i),e===2&&(s=vc(n),s!==0&&(i=s,e=jc(n,s))),e===1))throw t=Ao,or(n,0),Ti(n,i),Xt(n,at()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Ji(n,Vt,Yn);break;case 3:if(Ti(n,i),(i&130023424)===i&&(e=Wf+500-at(),10<e)){if(Za(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){zt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Tc(Ji.bind(null,n,Vt,Yn),e);break}Ji(n,Vt,Yn);break;case 4:if(Ti(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Cn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=at()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yx(i/1960))-i,10<i){n.timeoutHandle=Tc(Ji.bind(null,n,Vt,Yn),i);break}Ji(n,Vt,Yn);break;case 5:Ji(n,Vt,Yn);break;default:throw Error(de(329))}}}return Xt(n,at()),n.callbackNode===t?Jg.bind(null,n):null}function jc(n,e){var t=oo;return n.current.memoizedState.isDehydrated&&(or(n,e).flags|=256),n=pl(n,e),n!==2&&(e=Vt,Vt=t,e!==null&&Xc(e)),n}function Xc(n){Vt===null?Vt=n:Vt.push.apply(Vt,n)}function Zx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ln(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ti(n,e){for(e&=~Hf,e&=~Al,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Cn(e),i=1<<t;n[t]=-1,e&=~i}}function yd(n){if((Be&6)!==0)throw Error(de(327));us();var e=Za(n,0);if((e&1)===0)return Xt(n,at()),null;var t=pl(n,e);if(n.tag!==0&&t===2){var i=vc(n);i!==0&&(e=i,t=jc(n,i))}if(t===1)throw t=Ao,or(n,0),Ti(n,e),Xt(n,at()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ji(n,Vt,Yn),Xt(n,at()),null}function jf(n,e){var t=Be;Be|=1;try{return n(e)}finally{Be=t,Be===0&&(_s=at()+500,El&&Gi())}}function mr(n){Ci!==null&&Ci.tag===0&&(Be&6)===0&&us();var e=Be;Be|=1;var t=dn.transition,i=Xe;try{if(dn.transition=null,Xe=1,n)return n()}finally{Xe=i,dn.transition=t,Be=e,(Be&6)===0&&Gi()}}function Xf(){Jt=ts.current,Ye(ts)}function or(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,bx(t)),ft!==null)for(t=ft.return;t!==null;){var i=t;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tl();break;case 3:vs(),Ye(Wt),Ye(Pt),zf();break;case 5:Nf(i);break;case 4:vs();break;case 13:Ye(Je);break;case 19:Ye(Je);break;case 10:Pf(i.type._context);break;case 22:case 23:Xf()}t=t.return}if(yt=n,ft=n=zi(n.current,null),Mt=Jt=e,pt=0,Ao=null,Hf=Al=pr=0,Vt=oo=null,tr!==null){for(e=0;e<tr.length;e++)if(t=tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}tr=null}return n}function Qg(n,e){do{var t=ft;try{if(Lf(),Oa.current=cl,ul){for(var i=Ke.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ul=!1}if(dr=0,vt=dt=Ke=null,ro=!1,To=0,Gf.current=null,t===null||t.return===null){pt=1,Ao=e,ft=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=ad(o);if(m!==null){m.flags&=-257,ld(m,o,a,s,e),m.mode&1&&od(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if((e&1)===0){od(s,u,e),qf();break e}l=Error(de(426))}}else if(Ze&&a.mode&1){var d=ad(o);if(d!==null){(d.flags&65536)===0&&(d.flags|=256),ld(d,o,a,s,e),Cf(xs(l,a));break e}}s=l=xs(l,a),pt!==4&&(pt=2),oo===null?oo=[s]:oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=zg(s,l,e);Kh(s,p);break e;case 1:a=l;var v=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ii===null||!Ii.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=kg(s,a,e);Kh(s,y);break e}}s=s.return}while(s!==null)}t0(t)}catch(w){e=w,ft===t&&t!==null&&(ft=t=t.return);continue}break}while(1)}function Kg(){var n=fl.current;return fl.current=cl,n===null?cl:n}function qf(){(pt===0||pt===3||pt===2)&&(pt=4),yt===null||(pr&268435455)===0&&(Al&268435455)===0||Ti(yt,Mt)}function pl(n,e){var t=Be;Be|=2;var i=Kg();(yt!==n||Mt!==e)&&(Yn=null,or(n,e));do try{Jx();break}catch(r){Qg(n,r)}while(1);if(Lf(),Be=t,fl.current=i,ft!==null)throw Error(de(261));return yt=null,Mt=0,pt}function Jx(){for(;ft!==null;)e0(ft)}function Qx(){for(;ft!==null&&!Mv();)e0(ft)}function e0(n){var e=i0(n.alternate,n,Jt);n.memoizedProps=n.pendingProps,e===null?t0(n):ft=e,Gf.current=null}function t0(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Wx(t,e,Jt),t!==null){ft=t;return}}else{if(t=jx(t,e),t!==null){t.flags&=32767,ft=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ft=null;return}}if(e=e.sibling,e!==null){ft=e;return}ft=e=n}while(e!==null);pt===0&&(pt=5)}function Ji(n,e,t){var i=Xe,r=dn.transition;try{dn.transition=null,Xe=1,Kx(n,e,t,i)}finally{dn.transition=r,Xe=i}return null}function Kx(n,e,t,i){do us();while(Ci!==null);if((Be&6)!==0)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Iv(n,s),n===yt&&(ft=yt=null,Mt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ra||(ra=!0,r0(Ya,function(){return us(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=dn.transition,dn.transition=null;var o=Xe;Xe=1;var a=Be;Be|=4,Gf.current=null,qx(n,t),Yg(t,n),_x(Mc),Ja=!!wc,Mc=wc=null,n.current=t,$x(t),Ev(),Be=a,Xe=o,dn.transition=s}else n.current=t;if(ra&&(ra=!1,Ci=n,dl=r),s=n.pendingLanes,s===0&&(Ii=null),Cv(t.stateNode),Xt(n,at()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(hl)throw hl=!1,n=Hc,Hc=null,n;return(dl&1)!==0&&n.tag!==0&&us(),s=n.pendingLanes,(s&1)!==0?n===Wc?ao++:(ao=0,Wc=n):ao=0,Gi(),null}function us(){if(Ci!==null){var n=Nm(dl),e=dn.transition,t=Xe;try{if(dn.transition=null,Xe=16>n?16:n,Ci===null)var i=!1;else{if(n=Ci,Ci=null,dl=0,(Be&6)!==0)throw Error(de(331));var r=Be;for(Be|=4,Me=n.current;Me!==null;){var s=Me,o=s.child;if((Me.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:so(8,c,s)}var f=c.child;if(f!==null)f.return=c,Me=f;else for(;Me!==null;){c=Me;var h=c.sibling,m=c.return;if(Xg(c),c===u){Me=null;break}if(h!==null){h.return=m,Me=h;break}Me=m}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var d=g.sibling;g.sibling=null,g=d}while(g!==null)}}Me=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Me=p;break e}Me=s.return}}var v=n.current;for(Me=v;Me!==null;){o=Me;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,Me=_;else e:for(o=v;Me!==null;){if(a=Me,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Cl(9,a)}}catch(w){rt(a,a.return,w)}if(a===o){Me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Me=y;break e}Me=a.return}}if(Be=r,Gi(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(_l,n)}catch{}i=!0}return i}finally{Xe=t,dn.transition=e}}return!1}function Sd(n,e,t){e=xs(t,e),e=zg(n,e,1),n=Di(n,e,1),e=zt(),n!==null&&(ko(n,1,e),Xt(n,e))}function rt(n,e,t){if(n.tag===3)Sd(n,n,t);else for(;e!==null;){if(e.tag===3){Sd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){n=xs(t,n),n=kg(e,n,1),e=Di(e,n,1),n=zt(),e!==null&&(ko(e,1,n),Xt(e,n));break}}e=e.return}}function e_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=zt(),n.pingedLanes|=n.suspendedLanes&t,yt===n&&(Mt&t)===t&&(pt===4||pt===3&&(Mt&130023424)===Mt&&500>at()-Wf?or(n,0):Hf|=t),Xt(n,e)}function n0(n,e){e===0&&((n.mode&1)===0?e=1:(e=$o,$o<<=1,($o&130023424)===0&&($o=4194304)));var t=zt();n=oi(n,e),n!==null&&(ko(n,e,t),Xt(n,t))}function t_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),n0(n,t)}function n_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),n0(n,t)}var i0;i0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Wt.current)Ht=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Ht=!1,Hx(n,e,t);Ht=(n.flags&131072)!==0}else Ht=!1,Ze&&(e.flags&1048576)!==0&&og(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ba(n,e),n=e.pendingProps;var r=ps(e,Pt.current);ls(e,t),r=Ff(null,e,i,n,r,t);var s=Of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(i)?(s=!0,nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=Tl,e.stateNode=r,r._reactInternals=e,Dc(e,i,n,t),e=zc(null,e,i,!0,s,t)):(e.tag=0,Ze&&s&&Tf(e),Dt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ba(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=r_(i),n=wn(i,n),r){case 0:e=Nc(null,e,i,n,t);break e;case 1:e=fd(null,e,i,n,t);break e;case 11:e=ud(null,e,i,n,t);break e;case 14:e=cd(null,e,i,wn(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Nc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),fd(n,e,i,r,t);case 3:e:{if(Bg(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cg(n,e),al(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(de(423)),e),e=hd(n,e,i,t,r);break e}else if(i!==r){r=xs(Error(de(424)),e),e=hd(n,e,i,t,r);break e}else for(Qt=Ri(e.stateNode.containerInfo.firstChild),Kt=e,Ze=!0,En=null,t=pg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ms(),i===r){e=ai(n,e,t);break e}Dt(n,e,i,t)}e=e.child}return e;case 5:return mg(e),n===null&&Lc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ec(i,r)?o=null:s!==null&&Ec(i,s)&&(e.flags|=32),Ug(n,e),Dt(n,e,o,t),e.child;case 6:return n===null&&Lc(e),null;case 13:return Vg(n,e,t);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=gs(e,null,i,t):Dt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),ud(n,e,i,r,t);case 7:return Dt(n,e,e.pendingProps,t),e.child;case 8:return Dt(n,e,e.pendingProps.children,t),e.child;case 12:return Dt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,qe(sl,i._currentValue),i._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===r.children&&!Wt.current){e=ai(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ti(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ls(e,t),r=mn(r),i=i(r),e.flags|=1,Dt(n,e,i,t),e.child;case 14:return i=e.type,r=wn(i,e.pendingProps),r=wn(i.type,r),cd(n,e,i,r,t);case 15:return Fg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Ba(n,e),e.tag=1,jt(i)?(n=!0,nl(e)):n=!1,ls(e,t),hg(e,i,r),Dc(e,i,r,t),zc(null,e,i,!0,n,t);case 19:return Gg(n,e,t);case 22:return Og(n,e,t)}throw Error(de(156,e.tag))};function r0(n,e){return Pm(n,e)}function i_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(n,e,t,i){return new i_(n,e,t,i)}function $f(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r_(n){if(typeof n=="function")return $f(n)?1:0;if(n!=null){if(n=n.$$typeof,n===df)return 11;if(n===pf)return 14}return 2}function zi(n,e){var t=n.alternate;return t===null?(t=fn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ha(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")$f(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case jr:return ar(t.children,r,s,e);case hf:o=8,r|=8;break;case nc:return n=fn(12,t,e,r|2),n.elementType=nc,n.lanes=s,n;case ic:return n=fn(13,t,e,r),n.elementType=ic,n.lanes=s,n;case rc:return n=fn(19,t,e,r),n.elementType=rc,n.lanes=s,n;case dm:return Ll(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fm:o=10;break e;case hm:o=9;break e;case df:o=11;break e;case pf:o=14;break e;case Si:o=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=fn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ar(n,e,t,i){return n=fn(7,n,i,e),n.lanes=t,n}function Ll(n,e,t,i){return n=fn(22,n,i,e),n.elementType=dm,n.lanes=t,n.stateNode={isHidden:!1},n}function pu(n,e,t){return n=fn(6,n,null,e),n.lanes=t,n}function mu(n,e,t){return e=fn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function s_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yf(n,e,t,i,r,s,o,a,l){return n=new s_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),n}function o_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function s0(n){if(!n)return Oi;n=n._reactInternals;e:{if(Sr(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(jt(t))return rg(n,t,e)}return e}function o0(n,e,t,i,r,s,o,a,l){return n=Yf(t,i,!0,n,r,s,o,a,l),n.context=s0(null),t=n.current,i=zt(),r=Ni(t),s=ti(i,r),s.callback=e!=null?e:null,Di(t,s,r),n.current.lanes=r,ko(n,r,i),Xt(n,i),n}function Pl(n,e,t,i){var r=e.current,s=zt(),o=Ni(r);return t=s0(t),e.context===null?e.context=t:e.pendingContext=t,e=ti(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Di(r,e,o),n!==null&&(An(n,r,o,s),Fa(n,r,o)),o}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Zf(n,e){wd(n,e),(n=n.alternate)&&wd(n,e)}function a_(){return null}var a0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jf(n){this._internalRoot=n}Rl.prototype.render=Jf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));Pl(n,e,null,null)};Rl.prototype.unmount=Jf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;mr(function(){Pl(null,n,null,null)}),e[si]=null}};function Rl(n){this._internalRoot=n}Rl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ei.length&&e!==0&&e<Ei[t].priority;t++);Ei.splice(t,0,n),t===0&&Um(n)}};function Qf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Md(){}function l_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ml(o);s.call(u)}}var o=o0(e,i,n,0,null,!1,!1,"",Md);return n._reactRootContainer=o,n[si]=o.current,yo(n.nodeType===8?n.parentNode:n),mr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ml(l);a.call(u)}}var l=Yf(n,0,!1,null,null,!1,!1,"",Md);return n._reactRootContainer=l,n[si]=l.current,yo(n.nodeType===8?n.parentNode:n),mr(function(){Pl(e,l,t,i)}),l}function Il(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ml(o);a.call(l)}}Pl(e,o,n,r)}else o=l_(t,e,n,r,i);return ml(o)}zm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=$s(e.pendingLanes);t!==0&&(vf(e,t|1),Xt(e,at()),(Be&6)===0&&(_s=at()+500,Gi()))}break;case 13:mr(function(){var i=oi(n,1);if(i!==null){var r=zt();An(i,n,1,r)}}),Zf(n,1)}};xf=function(n){if(n.tag===13){var e=oi(n,134217728);if(e!==null){var t=zt();An(e,n,134217728,t)}Zf(n,134217728)}};km=function(n){if(n.tag===13){var e=Ni(n),t=oi(n,e);if(t!==null){var i=zt();An(t,n,e,i)}Zf(n,e)}};Fm=function(){return Xe};Om=function(n,e){var t=Xe;try{return Xe=n,e()}finally{Xe=t}};pc=function(n,e,t){switch(e){case"input":if(ac(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ml(i);if(!r)throw Error(de(90));mm(i),ac(i,r)}}}break;case"textarea":vm(n,t);break;case"select":e=t.value,e!=null&&rs(n,!!t.multiple,e,!1)}};Em=jf;Tm=mr;var u_={usingClientEntryPoint:!1,Events:[Oo,Yr,Ml,wm,Mm,jf]},Vs={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},c_={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:li.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Am(n),n===null?null:n.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||a_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{_l=sa.inject(c_),Fn=sa}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u_;tn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(de(200));return o_(n,e,null,t)};tn.createRoot=function(n,e){if(!Qf(n))throw Error(de(299));var t=!1,i="",r=a0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yf(n,1,!1,null,null,t,!1,i,r),n[si]=e.current,yo(n.nodeType===8?n.parentNode:n),new Jf(e)};tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=Am(e),n=n===null?null:n.stateNode,n};tn.flushSync=function(n){return mr(n)};tn.hydrate=function(n,e,t){if(!Dl(e))throw Error(de(200));return Il(null,n,e,!0,t)};tn.hydrateRoot=function(n,e,t){if(!Qf(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=a0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=o0(e,null,n,1,t!=null?t:null,r,!1,s,o),n[si]=e.current,yo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Rl(e)};tn.render=function(n,e,t){if(!Dl(e))throw Error(de(200));return Il(null,n,e,!1,t)};tn.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(de(40));return n._reactRootContainer?(mr(function(){Il(null,null,n,!1,function(){n._reactRootContainer=null,n[si]=null})}),!0):!1};tn.unstable_batchedUpdates=jf;tn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Dl(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return Il(n,e,t,!1,i)};tn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=tn})(om);var Ed=om.exports;ec.createRoot=Ed.createRoot,ec.hydrateRoot=Ed.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="144",f_=0,Td=1,h_=2,l0=1,d_=2,Zs=3,ys=0,pn=1,hn=2,ki=0,cs=1,bd=2,Cd=3,Ad=4,p_=5,Hr=100,m_=101,g_=102,Ld=103,Pd=104,v_=200,x_=201,__=202,y_=203,u0=204,c0=205,S_=206,w_=207,M_=208,E_=209,T_=210,b_=0,C_=1,A_=2,qc=3,L_=4,P_=5,R_=6,D_=7,eh=0,I_=1,N_=2,ni=0,z_=1,k_=2,F_=3,O_=4,U_=5,f0=300,Ss=301,ws=302,$c=303,Yc=304,Nl=306,Zc=1e3,Tn=1001,Jc=1002,Gt=1003,Rd=1004,Dd=1005,un=1006,B_=1007,zl=1008,gr=1009,V_=1010,G_=1011,h0=1012,H_=1013,ir=1014,rr=1015,Lo=1016,W_=1017,j_=1018,fs=1020,X_=1021,q_=1022,kn=1023,$_=1024,Y_=1025,lr=1026,Ms=1027,Z_=1028,J_=1029,Q_=1030,K_=1031,ey=1033,gu=33776,vu=33777,xu=33778,_u=33779,Id=35840,Nd=35841,zd=35842,kd=35843,ty=36196,Fd=37492,Od=37496,Ud=37808,Bd=37809,Vd=37810,Gd=37811,Hd=37812,Wd=37813,jd=37814,Xd=37815,qd=37816,$d=37817,Yd=37818,Zd=37819,Jd=37820,Qd=37821,Kd=36492,vr=3e3,it=3001,ny=3200,iy=3201,th=0,ry=1,Zn="srgb",sr="srgb-linear",yu=7680,sy=519,ep=35044,tp="300 es",Qc=1035;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=Math.PI/180,np=180/Math.PI;function As(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function oy(n,e){return(n%e+e)%e}function wu(n,e,t){return(1-t)*n+t*e}function ip(n){return(n&n-1)===0&&n!==0}function Kc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oa(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],x=i[8],g=r[0],d=r[3],p=r[6],v=r[1],_=r[4],y=r[7],w=r[2],M=r[5],b=r[8];return s[0]=o*g+a*v+l*w,s[3]=o*d+a*_+l*M,s[6]=o*p+a*y+l*b,s[1]=u*g+c*v+f*w,s[4]=u*d+c*_+f*M,s[7]=u*p+c*y+f*b,s[2]=h*g+m*v+x*w,s[5]=h*d+m*_+x*M,s[8]=h*p+m*y+x*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function d0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Mu={[Zn]:{[sr]:ur},[sr]:{[Zn]:Wa}},xn={legacyMode:!0,get workingColorSpace(){return sr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Mu[e]&&Mu[e][t]!==void 0){const i=Mu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},_n={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Eu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function la(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=sr){return this.r=e,this.g=t,this.b=i,xn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=sr){if(e=oy(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Eu(o,s,e+1/3),this.g=Eu(o,s,e),this.b=Eu(o,s,e-1/3)}return xn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const i=p0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return xn.fromWorkingColorSpace(la(this,ht),e),It(ht.r*255,0,255)<<16^It(ht.g*255,0,255)<<8^It(ht.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sr){xn.fromWorkingColorSpace(la(this,ht),t);const i=ht.r,r=ht.g,s=ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=sr){return xn.fromWorkingColorSpace(la(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Zn){return xn.fromWorkingColorSpace(la(this,ht),e),e!==Zn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(_n),_n.h+=e,_n.s+=t,_n.l+=i,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(aa);const i=wu(_n.h,aa.h,t),r=wu(_n.s,aa.s,t),s=wu(_n.l,aa.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=p0;let Cr;class m0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=gl("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class g0{constructor(e=null){this.isSource=!0,this.uuid=As(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tu(r[o].image)):s.push(Tu(r[o]))}else s=Tu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Tu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?m0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ay=0;class Pn extends wr{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=Tn,r=Tn,s=un,o=zl,a=kn,l=gr,u=1,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=As(),this.name="",this.source=new g0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zc:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zc:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=f0;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],x=l[9],g=l[2],d=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(x-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(x+d)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(m+1)/2,w=(p+1)/2,M=(c+h)/4,b=(f+g)/4,S=(x+d)/4;return _>y&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=b/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=M/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((d-x)*(d-x)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(d-x)/v,this.y=(f-g)/v,this.z=(h-c)/v,this.w=Math.acos((u+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xr extends wr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:un,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new g0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class v0 extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ly extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(f!==g||l!==h||u!==m||c!==x){let d=1-a;const p=l*h+u*m+c*x+f*g,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),M=Math.atan2(w,p*v);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w}const y=a*v;if(l=l*d+h*y,u=u*d+m*y,c=c*d+x*y,f=f*d+g*y,d===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*f+l*m-u*h,e[t+1]=l*x+c*h+u*f-a*m,e[t+2]=u*x+c*m+a*h-l*f,e[t+3]=c*x-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f-h*m*x;break;case"YXZ":this._x=h*c*f+u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f+h*m*x;break;case"ZXY":this._x=h*c*f-u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f-h*m*x;break;case"ZYX":this._x=h*c*f-u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f+h*m*x;break;case"YZX":this._x=h*c*f+u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f-h*m*x;break;case"XZY":this._x=h*c*f-u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-f*-o,this.y=c*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new G,rp=new Ls;class Bo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],h=e[l+2];c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),h=e.getZ(l);c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ji.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else i.boundingBox===null&&i.computeBoundingBox(),Cu.copy(i.boundingBox),Cu.applyMatrix4(e.matrixWorld),this.union(Cu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),ua.subVectors(this.max,Gs),Ar.subVectors(e.a,Gs),Lr.subVectors(e.b,Gs),Pr.subVectors(e.c,Gs),hi.subVectors(Lr,Ar),di.subVectors(Pr,Lr),Xi.subVectors(Ar,Pr);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Xi.z,Xi.y,hi.z,0,-hi.x,di.z,0,-di.x,Xi.z,0,-Xi.x,-hi.y,hi.x,0,-di.y,di.x,0,-Xi.y,Xi.x,0];return!Au(t,Ar,Lr,Pr,ua)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,Ar,Lr,Pr,ua))?!1:(ca.crossVectors(hi,di),t=[ca.x,ca.y,ca.z],Au(t,Ar,Lr,Pr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new G,new G,new G,new G,new G,new G,new G,new G],ji=new G,Cu=new Bo,Ar=new G,Lr=new G,Pr=new G,hi=new G,di=new G,Xi=new G,Gs=new G,ua=new G,ca=new G,qi=new G;function Au(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qi.fromArray(n,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),u=t.dot(qi),c=i.dot(qi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const uy=new Bo,sp=new G,fa=new G,Lu=new G;class nh{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Lu.subVectors(e,this.center);const t=Lu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Lu.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?fa.set(0,0,1).multiplyScalar(e.radius):fa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(sp.copy(e.center).add(fa)),this.expandByPoint(sp.copy(e.center).sub(fa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new G,Pu=new G,ha=new G,pi=new G,Ru=new G,da=new G,Du=new G;class x0{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.direction).multiplyScalar(t).add(this.origin),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pu.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Pu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=pi.dot(this.direction),l=-pi.dot(ha),u=pi.lengthSq(),c=Math.abs(1-o*o);let f,h,m,x;if(c>0)if(f=o*l-a,h=o*a-l,x=s*c,f>=0)if(h>=-x)if(h<=x){const g=1/c;f*=g,h*=g,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(ha).multiplyScalar(h).add(Pu),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,s){Ru.subVectors(t,e),da.subVectors(i,e),Du.crossVectors(Ru,da);let o=this.direction.dot(Du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(da.crossVectors(pi,da));if(l<0)return null;const u=a*this.direction.dot(Ru.cross(pi));if(u<0||l+u>o)return null;const c=-a*pi.dot(Du);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,f,h,m,x,g,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=m,p[7]=x,p[11]=g,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,x=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+x*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,x=u*c,g=u*f;t[0]=h+g*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,x=u*c,g=u*f;t[0]=h-g*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,x=a*c,g=a*f;t[0]=l*c,t[4]=x*u-m,t[8]=h*u+g,t[1]=l*f,t[5]=g*u+h,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=g-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+x,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,m=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+g,t[5]=o*c,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*c,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,fy)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),mi.crossVectors(i,Yt),mi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),mi.crossVectors(i,Yt)),mi.normalize(),pa.crossVectors(Yt,mi),r[0]=mi.x,r[4]=pa.x,r[8]=Yt.x,r[1]=mi.y,r[5]=pa.y,r[9]=Yt.y,r[2]=mi.z,r[6]=pa.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],x=i[2],g=i[6],d=i[10],p=i[14],v=i[3],_=i[7],y=i[11],w=i[15],M=r[0],b=r[4],S=r[8],A=r[12],z=r[1],Z=r[5],q=r[9],H=r[13],V=r[2],K=r[6],ne=r[10],Y=r[14],P=r[3],k=r[7],U=r[11],se=r[15];return s[0]=o*M+a*z+l*V+u*P,s[4]=o*b+a*Z+l*K+u*k,s[8]=o*S+a*q+l*ne+u*U,s[12]=o*A+a*H+l*Y+u*se,s[1]=c*M+f*z+h*V+m*P,s[5]=c*b+f*Z+h*K+m*k,s[9]=c*S+f*q+h*ne+m*U,s[13]=c*A+f*H+h*Y+m*se,s[2]=x*M+g*z+d*V+p*P,s[6]=x*b+g*Z+d*K+p*k,s[10]=x*S+g*q+d*ne+p*U,s[14]=x*A+g*H+d*Y+p*se,s[3]=v*M+_*z+y*V+w*P,s[7]=v*b+_*Z+y*K+w*k,s[11]=v*S+_*q+y*ne+w*U,s[15]=v*A+_*H+y*Y+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],x=e[3],g=e[7],d=e[11],p=e[15];return x*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+g*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+d*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+p*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],x=e[12],g=e[13],d=e[14],p=e[15],v=f*d*u-g*h*u+g*l*m-a*d*m-f*l*p+a*h*p,_=x*h*u-c*d*u-x*l*m+o*d*m+c*l*p-o*h*p,y=c*g*u-x*f*u+x*a*m-o*g*m-c*a*p+o*f*p,w=x*f*l-c*g*l-x*a*h+o*g*h+c*a*d-o*f*d,M=t*v+i*_+r*y+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(g*h*s-f*d*s-g*r*m+i*d*m+f*r*p-i*h*p)*b,e[2]=(a*d*s-g*l*s+g*r*u-i*d*u-a*r*p+i*l*p)*b,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*b,e[4]=_*b,e[5]=(c*d*s-x*h*s+x*r*m-t*d*m-c*r*p+t*h*p)*b,e[6]=(x*l*s-o*d*s-x*r*u+t*d*u+o*r*p-t*l*p)*b,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*b,e[8]=y*b,e[9]=(x*f*s-c*g*s-x*i*m+t*g*m+c*i*p-t*f*p)*b,e[10]=(o*g*s-x*a*s+x*i*u-t*g*u-o*i*p+t*a*p)*b,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*b,e[12]=w*b,e[13]=(c*g*r-x*f*r+x*i*h-t*g*h-c*i*d+t*f*d)*b,e[14]=(x*a*r-o*g*r-x*i*l+t*g*l+o*i*d-t*a*d)*b,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,x=s*f,g=o*c,d=o*f,p=a*f,v=l*u,_=l*c,y=l*f,w=i.x,M=i.y,b=i.z;return r[0]=(1-(g+p))*w,r[1]=(m+y)*w,r[2]=(x-_)*w,r[3]=0,r[4]=(m-y)*M,r[5]=(1-(h+p))*M,r[6]=(d+v)*M,r[7]=0,r[8]=(x+_)*b,r[9]=(d-v)*b,r[10]=(1-(h+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const u=1/s,c=1/o,f=1/a;return yn.elements[0]*=u,yn.elements[1]*=u,yn.elements[2]*=u,yn.elements[4]*=c,yn.elements[5]*=c,yn.elements[6]*=c,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,h=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new G,yn=new lt,cy=new G(0,0,0),fy=new G(1,1,1),mi=new G,pa=new G,Yt=new G,op=new lt,ap=new Ls;class Vo{constructor(e=0,t=0,i=0,r=Vo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Vo.DefaultOrder="XYZ";Vo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hy=0;const lp=new G,Dr=new Ls,jn=new lt,ma=new G,Hs=new G,dy=new G,py=new Ls,up=new G(1,0,0),cp=new G(0,1,0),fp=new G(0,0,1),my={type:"added"},hp={type:"removed"};class St extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DefaultUp.clone();const e=new G,t=new Vo,i=new Ls,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new xt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=St.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DefaultMatrixWorldAutoUpdate,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Hs,ma,this.up):jn.lookAt(ma,Hs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(jn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(my)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DefaultUp=new G(0,1,0);St.DefaultMatrixAutoUpdate=!0;St.DefaultMatrixWorldAutoUpdate=!0;const Sn=new G,Xn=new G,Iu=new G,qn=new G,Ir=new G,Nr=new G,dp=new G,Nu=new G,zu=new G,ku=new G;class Qn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),Xn.subVectors(i,t),Iu.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Xn),l=Sn.dot(Iu),u=Xn.dot(Xn),c=Xn.dot(Iu),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,qn),l.set(0,0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),Xn.subVectors(e,t),Sn.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Nr.subVectors(s,i),Nu.subVectors(e,i);const l=Ir.dot(Nu),u=Nr.dot(Nu);if(l<=0&&u<=0)return t.copy(i);zu.subVectors(e,r);const c=Ir.dot(zu),f=Nr.dot(zu);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ir,o);ku.subVectors(e,s);const m=Ir.dot(ku),x=Nr.dot(ku);if(x>=0&&m<=x)return t.copy(s);const g=m*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Nr,a);const d=c*x-m*f;if(d<=0&&f-c>=0&&m-x>=0)return dp.subVectors(s,r),a=(f-c)/(f-c+(m-x)),t.copy(r).addScaledVector(dp,a);const p=1/(d+g+h);return o=g*p,a=h*p,t.copy(i).addScaledVector(Ir,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gy=0;class Ps extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=As(),this.name="",this.type="Material",this.blending=cs,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=u0,this.blendDst=c0,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yu,this.stencilZFail=yu,this.stencilZPass=yu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rh extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new G,ga=new ce;class Un{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=ep,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _0 extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class y0 extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vy=0;const on=new lt,Fu=new St,zr=new G,Zt=new Bo,Ws=new Bo,gt=new G;class Bn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d0(e)?y0:_0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Zt.min,Ws.min),Zt.expandByPoint(gt),gt.addVectors(Zt.max,Ws.max),Zt.expandByPoint(gt)):(Zt.expandByPoint(Ws.min),Zt.expandByPoint(Ws.max))}Zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)gt.fromBufferAttribute(a,u),l&&(zr.fromBufferAttribute(e,u),gt.add(zr)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let z=0;z<a;z++)u[z]=new G,c[z]=new G;const f=new G,h=new G,m=new G,x=new ce,g=new ce,d=new ce,p=new G,v=new G;function _(z,Z,q){f.fromArray(r,z*3),h.fromArray(r,Z*3),m.fromArray(r,q*3),x.fromArray(o,z*2),g.fromArray(o,Z*2),d.fromArray(o,q*2),h.sub(f),m.sub(f),g.sub(x),d.sub(x);const H=1/(g.x*d.y-d.x*g.y);!isFinite(H)||(p.copy(h).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(H),v.copy(m).multiplyScalar(g.x).addScaledVector(h,-d.x).multiplyScalar(H),u[z].add(p),u[Z].add(p),u[q].add(p),c[z].add(v),c[Z].add(v),c[q].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let z=0,Z=y.length;z<Z;++z){const q=y[z],H=q.start,V=q.count;for(let K=H,ne=H+V;K<ne;K+=3)_(i[K+0],i[K+1],i[K+2])}const w=new G,M=new G,b=new G,S=new G;function A(z){b.fromArray(s,z*3),S.copy(b);const Z=u[z];w.copy(Z),w.sub(b.multiplyScalar(b.dot(Z))).normalize(),M.crossVectors(S,Z);const H=M.dot(c[z])<0?-1:1;l[z*4]=w.x,l[z*4+1]=w.y,l[z*4+2]=w.z,l[z*4+3]=H}for(let z=0,Z=y.length;z<Z;++z){const q=y[z],H=q.start,V=q.count;for(let K=H,ne=H+V;K<ne;K+=3)A(i[K+0]),A(i[K+1]),A(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),g=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,d),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,d),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,x=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*c;for(let p=0;p<c;p++)h[x++]=u[m++]}return new Un(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const pp=new lt,kr=new x0,Ou=new nh,gi=new G,vi=new G,xi=new G,Uu=new G,Bu=new G,Vu=new G,va=new G,xa=new G,_a=new G,ya=new ce,Sa=new ce,wa=new ce,Gu=new G,Ma=new G;class Nt extends St{constructor(e=new Bn,t=new rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ou.copy(i.boundingSphere),Ou.applyMatrix4(s),e.ray.intersectsSphere(Ou)===!1)||(pp.copy(s).invert(),kr.copy(e.ray).applyMatrix4(pp),i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,d=m.length;g<d;g++){const p=m[g],v=r[p.materialIndex],_=Math.max(p.start,x.start),y=Math.min(a.count,Math.min(p.start+p.count,x.start+x.count));for(let w=_,M=y;w<M;w+=3){const b=a.getX(w),S=a.getX(w+1),A=a.getX(w+2);o=Ea(this,v,e,kr,l,u,c,f,h,b,S,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const g=Math.max(0,x.start),d=Math.min(a.count,x.start+x.count);for(let p=g,v=d;p<v;p+=3){const _=a.getX(p),y=a.getX(p+1),w=a.getX(p+2);o=Ea(this,r,e,kr,l,u,c,f,h,_,y,w),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,d=m.length;g<d;g++){const p=m[g],v=r[p.materialIndex],_=Math.max(p.start,x.start),y=Math.min(l.count,Math.min(p.start+p.count,x.start+x.count));for(let w=_,M=y;w<M;w+=3){const b=w,S=w+1,A=w+2;o=Ea(this,v,e,kr,l,u,c,f,h,b,S,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const g=Math.max(0,x.start),d=Math.min(l.count,x.start+x.count);for(let p=g,v=d;p<v;p+=3){const _=p,y=p+1,w=p+2;o=Ea(this,r,e,kr,l,u,c,f,h,_,y,w),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function xy(n,e,t,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==hn,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ma);return u<t.near||u>t.far?null:{distance:u,point:Ma.clone(),object:n}}function Ea(n,e,t,i,r,s,o,a,l,u,c,f){gi.fromBufferAttribute(r,u),vi.fromBufferAttribute(r,c),xi.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){va.set(0,0,0),xa.set(0,0,0),_a.set(0,0,0);for(let x=0,g=s.length;x<g;x++){const d=h[x],p=s[x];d!==0&&(Uu.fromBufferAttribute(p,u),Bu.fromBufferAttribute(p,c),Vu.fromBufferAttribute(p,f),o?(va.addScaledVector(Uu,d),xa.addScaledVector(Bu,d),_a.addScaledVector(Vu,d)):(va.addScaledVector(Uu.sub(gi),d),xa.addScaledVector(Bu.sub(vi),d),_a.addScaledVector(Vu.sub(xi),d)))}gi.add(va),vi.add(xa),xi.add(_a)}n.isSkinnedMesh&&(n.boneTransform(u,gi),n.boneTransform(c,vi),n.boneTransform(f,xi));const m=xy(n,e,t,i,gi,vi,xi,Gu);if(m){a&&(ya.fromBufferAttribute(a,u),Sa.fromBufferAttribute(a,c),wa.fromBufferAttribute(a,f),m.uv=Qn.getUV(Gu,gi,vi,xi,ya,Sa,wa,new ce)),l&&(ya.fromBufferAttribute(l,u),Sa.fromBufferAttribute(l,c),wa.fromBufferAttribute(l,f),m.uv2=Qn.getUV(Gu,gi,vi,xi,ya,Sa,wa,new ce));const x={a:u,b:c,c:f,normal:new G,materialIndex:0};Qn.getNormal(gi,vi,xi,x.normal),m.face=x}return m}class Rs extends Bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(f,2));function x(g,d,p,v,_,y,w,M,b,S,A){const z=y/b,Z=w/S,q=y/2,H=w/2,V=M/2,K=b+1,ne=S+1;let Y=0,P=0;const k=new G;for(let U=0;U<ne;U++){const se=U*Z-H;for(let N=0;N<K;N++){const I=N*z-q;k[g]=I*v,k[d]=se*_,k[p]=V,u.push(k.x,k.y,k.z),k[g]=0,k[d]=0,k[p]=M>0?1:-1,c.push(k.x,k.y,k.z),f.push(N/b),f.push(1-U/S),Y+=1}}for(let U=0;U<S;U++)for(let se=0;se<b;se++){const N=h+se+K*U,I=h+se+K*(U+1),E=h+(se+1)+K*(U+1),B=h+(se+1)+K*U;l.push(N,I,B),l.push(I,E,B),P+=6}a.addGroup(m,P,A),m+=P,h+=Y}}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=Es(n[t]);for(const r in i)e[r]=i[r]}return e}function _y(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const yy={clone:Es,merge:At};var Sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sy,this.fragmentShader=wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=_y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class S0 extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends S0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Su*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=90,Or=1;class My extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new cn(Fr,Or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new G(1,0,0)),this.add(r);const s=new cn(Fr,Or,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new G(-1,0,0)),this.add(s);const o=new cn(Fr,Or,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new G(0,1,0)),this.add(o);const a=new cn(Fr,Or,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new G(0,-1,0)),this.add(a);const l=new cn(Fr,Or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new G(0,0,1)),this.add(l);const u=new cn(Fr,Or,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new G(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ni,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class w0 extends Pn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ey extends xr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new w0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rs(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ki});s.uniforms.tEquirect.value=t;const o=new Nt(r,s),a=t.minFilter;return t.minFilter===zl&&(t.minFilter=un),new My(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Hu=new G,Ty=new G,by=new xt;class Mi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hu.subVectors(i,t).cross(Ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||by.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new nh,Ta=new G;class sh{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],h=i[8],m=i[9],x=i[10],g=i[11],d=i[12],p=i[13],v=i[14],_=i[15];return t[0].setComponents(a-r,f-l,g-h,_-d).normalize(),t[1].setComponents(a+r,f+l,g+h,_+d).normalize(),t[2].setComponents(a+s,f+u,g+m,_+p).normalize(),t[3].setComponents(a-s,f-u,g-m,_-p).normalize(),t[4].setComponents(a-o,f-c,g-x,_-v).normalize(),t[5].setComponents(a+o,f+c,g+x,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function M0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cy(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const h=c.array,m=c.updateRange;n.bindBuffer(f,u),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class oh extends Bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],x=[],g=[],d=[];for(let p=0;p<c;p++){const v=p*h-o;for(let _=0;_<u;_++){const y=_*f-s;x.push(y,-v,0),g.push(0,0,1),d.push(_/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const _=v+u*p,y=v+u*(p+1),w=v+1+u*(p+1),M=v+1+u*p;m.push(_,y,M),m.push(y,w,M)}this.setIndex(m),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(d,2))}static fromJSON(e){return new oh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ny="vec3 transformed = vec3( position );",zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Fy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e1="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,g1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,x1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,w1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,C1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,R1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,U1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,V1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,G1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,lS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,xS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_S=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,SS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,wS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,MS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ES=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,PS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,DS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ew=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:Ay,alphamap_pars_fragment:Ly,alphatest_fragment:Py,alphatest_pars_fragment:Ry,aomap_fragment:Dy,aomap_pars_fragment:Iy,begin_vertex:Ny,beginnormal_vertex:zy,bsdfs:ky,iridescence_fragment:Fy,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Uy,clipping_planes_pars_fragment:By,clipping_planes_pars_vertex:Vy,clipping_planes_vertex:Gy,color_fragment:Hy,color_pars_fragment:Wy,color_pars_vertex:jy,color_vertex:Xy,common:qy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:Yy,displacementmap_pars_vertex:Zy,displacementmap_vertex:Jy,emissivemap_fragment:Qy,emissivemap_pars_fragment:Ky,encodings_fragment:e1,encodings_pars_fragment:t1,envmap_fragment:n1,envmap_common_pars_fragment:i1,envmap_pars_fragment:r1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:v1,envmap_vertex:o1,fog_vertex:a1,fog_pars_vertex:l1,fog_fragment:u1,fog_pars_fragment:c1,gradientmap_pars_fragment:f1,lightmap_fragment:h1,lightmap_pars_fragment:d1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:x1,lights_toon_pars_fragment:_1,lights_phong_fragment:y1,lights_phong_pars_fragment:S1,lights_physical_fragment:w1,lights_physical_pars_fragment:M1,lights_fragment_begin:E1,lights_fragment_maps:T1,lights_fragment_end:b1,logdepthbuf_fragment:C1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:P1,map_fragment:R1,map_pars_fragment:D1,map_particle_fragment:I1,map_particle_pars_fragment:N1,metalnessmap_fragment:z1,metalnessmap_pars_fragment:k1,morphcolor_vertex:F1,morphnormal_vertex:O1,morphtarget_pars_vertex:U1,morphtarget_vertex:B1,normal_fragment_begin:V1,normal_fragment_maps:G1,normal_pars_fragment:H1,normal_pars_vertex:W1,normal_vertex:j1,normalmap_pars_fragment:X1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:Y1,iridescence_pars_fragment:Z1,output_fragment:J1,packing:Q1,premultiplied_alpha_fragment:K1,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:oS,shadowmap_vertex:aS,shadowmask_pars_fragment:lS,skinbase_vertex:uS,skinning_pars_vertex:cS,skinning_vertex:fS,skinnormal_vertex:hS,specularmap_fragment:dS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:vS,transmission_pars_fragment:xS,uv_pars_fragment:_S,uv_pars_vertex:yS,uv_vertex:SS,uv2_pars_fragment:wS,uv2_pars_vertex:MS,uv2_vertex:ES,worldpos_vertex:TS,background_vert:bS,background_frag:CS,cube_vert:AS,cube_frag:LS,depth_vert:PS,depth_frag:RS,distanceRGBA_vert:DS,distanceRGBA_frag:IS,equirect_vert:NS,equirect_frag:zS,linedashed_vert:kS,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:US,meshlambert_vert:BS,meshlambert_frag:VS,meshmatcap_vert:GS,meshmatcap_frag:HS,meshnormal_vert:WS,meshnormal_frag:jS,meshphong_vert:XS,meshphong_frag:qS,meshphysical_vert:$S,meshphysical_frag:YS,meshtoon_vert:ZS,meshtoon_frag:JS,points_vert:QS,points_frag:KS,shadow_vert:ew,shadow_frag:tw,sprite_vert:nw,sprite_frag:iw},xe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Nn={basic:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:At([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:At([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:At([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:At([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:At([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:At([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:At([xe.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:At([xe.common,xe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:At([xe.lights,xe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Nn.physical={uniforms:At([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function rw(n,e,t,i,r,s){const o=new We(0);let a=r===!0?0:1,l,u,c=null,f=0,h=null;function m(g,d){let p=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));const _=n.xr,y=_.getSession&&_.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?x(o,a):v&&v.isColor&&(x(v,1),p=!0),(n.autoClear||p)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Nl)?(u===void 0&&(u=new Nt(new Rs(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Es(Nn.cube.uniforms),vertexShader:Nn.cube.vertexShader,fragmentShader:Nn.cube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,h=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new oh(2,2),new _r({name:"BackgroundMaterial",uniforms:Es(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,h=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,d){t.buffers.color.setClear(g.r,g.g,g.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(g,d=1){o.set(g),a=d,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,x(o,a)},render:m}}function sw(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let u=l,c=!1;function f(V,K,ne,Y,P){let k=!1;if(o){const U=g(Y,ne,K);u!==U&&(u=U,m(u.object)),k=p(V,Y,ne,P),k&&v(V,Y,ne,P)}else{const U=K.wireframe===!0;(u.geometry!==Y.id||u.program!==ne.id||u.wireframe!==U)&&(u.geometry=Y.id,u.program=ne.id,u.wireframe=U,k=!0)}P!==null&&t.update(P,34963),(k||c)&&(c=!1,S(V,K,ne,Y),P!==null&&n.bindBuffer(34963,t.get(P).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(V){return i.isWebGL2?n.bindVertexArray(V):s.bindVertexArrayOES(V)}function x(V){return i.isWebGL2?n.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function g(V,K,ne){const Y=ne.wireframe===!0;let P=a[V.id];P===void 0&&(P={},a[V.id]=P);let k=P[K.id];k===void 0&&(k={},P[K.id]=k);let U=k[Y];return U===void 0&&(U=d(h()),k[Y]=U),U}function d(V){const K=[],ne=[],Y=[];for(let P=0;P<r;P++)K[P]=0,ne[P]=0,Y[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ne,attributeDivisors:Y,object:V,attributes:{},index:null}}function p(V,K,ne,Y){const P=u.attributes,k=K.attributes;let U=0;const se=ne.getAttributes();for(const N in se)if(se[N].location>=0){const E=P[N];let B=k[N];if(B===void 0&&(N==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),N==="instanceColor"&&V.instanceColor&&(B=V.instanceColor)),E===void 0||E.attribute!==B||B&&E.data!==B.data)return!0;U++}return u.attributesNum!==U||u.index!==Y}function v(V,K,ne,Y){const P={},k=K.attributes;let U=0;const se=ne.getAttributes();for(const N in se)if(se[N].location>=0){let E=k[N];E===void 0&&(N==="instanceMatrix"&&V.instanceMatrix&&(E=V.instanceMatrix),N==="instanceColor"&&V.instanceColor&&(E=V.instanceColor));const B={};B.attribute=E,E&&E.data&&(B.data=E.data),P[N]=B,U++}u.attributes=P,u.attributesNum=U,u.index=Y}function _(){const V=u.newAttributes;for(let K=0,ne=V.length;K<ne;K++)V[K]=0}function y(V){w(V,0)}function w(V,K){const ne=u.newAttributes,Y=u.enabledAttributes,P=u.attributeDivisors;ne[V]=1,Y[V]===0&&(n.enableVertexAttribArray(V),Y[V]=1),P[V]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,K),P[V]=K)}function M(){const V=u.newAttributes,K=u.enabledAttributes;for(let ne=0,Y=K.length;ne<Y;ne++)K[ne]!==V[ne]&&(n.disableVertexAttribArray(ne),K[ne]=0)}function b(V,K,ne,Y,P,k){i.isWebGL2===!0&&(ne===5124||ne===5125)?n.vertexAttribIPointer(V,K,ne,P,k):n.vertexAttribPointer(V,K,ne,Y,P,k)}function S(V,K,ne,Y){if(i.isWebGL2===!1&&(V.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const P=Y.attributes,k=ne.getAttributes(),U=K.defaultAttributeValues;for(const se in k){const N=k[se];if(N.location>=0){let I=P[se];if(I===void 0&&(se==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),se==="instanceColor"&&V.instanceColor&&(I=V.instanceColor)),I!==void 0){const E=I.normalized,B=I.itemSize,F=t.get(I);if(F===void 0)continue;const O=F.buffer,ee=F.type,he=F.bytesPerElement;if(I.isInterleavedBufferAttribute){const re=I.data,me=re.stride,j=I.offset;if(re.isInstancedInterleavedBuffer){for(let Q=0;Q<N.locationSize;Q++)w(N.location+Q,re.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Q=0;Q<N.locationSize;Q++)y(N.location+Q);n.bindBuffer(34962,O);for(let Q=0;Q<N.locationSize;Q++)b(N.location+Q,B/N.locationSize,ee,E,me*he,(j+B/N.locationSize*Q)*he)}else{if(I.isInstancedBufferAttribute){for(let re=0;re<N.locationSize;re++)w(N.location+re,I.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let re=0;re<N.locationSize;re++)y(N.location+re);n.bindBuffer(34962,O);for(let re=0;re<N.locationSize;re++)b(N.location+re,B/N.locationSize,ee,E,B*he,B/N.locationSize*re*he)}}else if(U!==void 0){const E=U[se];if(E!==void 0)switch(E.length){case 2:n.vertexAttrib2fv(N.location,E);break;case 3:n.vertexAttrib3fv(N.location,E);break;case 4:n.vertexAttrib4fv(N.location,E);break;default:n.vertexAttrib1fv(N.location,E)}}}}M()}function A(){q();for(const V in a){const K=a[V];for(const ne in K){const Y=K[ne];for(const P in Y)x(Y[P].object),delete Y[P];delete K[ne]}delete a[V]}}function z(V){if(a[V.id]===void 0)return;const K=a[V.id];for(const ne in K){const Y=K[ne];for(const P in Y)x(Y[P].object),delete Y[P];delete K[ne]}delete a[V.id]}function Z(V){for(const K in a){const ne=a[K];if(ne[V.id]===void 0)continue;const Y=ne[V.id];for(const P in Y)x(Y[P].object),delete Y[P];delete ne[V.id]}}function q(){H(),c=!0,u!==l&&(u=l,m(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:z,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:M}}function ow(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function aw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),g=n.getParameter(34921),d=n.getParameter(36347),p=n.getParameter(36348),v=n.getParameter(36349),_=h>0,y=o||e.has("OES_texture_float"),w=_&&y,M=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:M}}function lw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mi,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||i!==0||r;return r=h,t=c(f,m,0),i=f.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,h,m){const x=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,p=n.get(f);if(!r||x===null||x.length===0||s&&!d)s?c(null):u();else{const v=s?0:i,_=v*4;let y=p.clippingState||null;l.value=y,y=c(x,h,_,m);for(let w=0;w!==_;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,x){const g=f!==null?f.length:0;let d=null;if(g!==0){if(d=l.value,x!==!0||d===null){const p=m+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<p)&&(d=new Float32Array(p));for(let _=0,y=m;_!==g;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function uw(n){let e=new WeakMap;function t(o,a){return a===$c?o.mapping=Ss:a===Yc&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===$c||a===Yc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ey(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class E0 extends S0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ns=4,mp=[.125,.215,.35,.446,.526,.582],Ki=20,Wu=new E0,gp=new We;let ju=null;const Qi=(1+Math.sqrt(5))/2,Br=1/Qi,vp=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Qi,Br),new G(0,Qi,-Br),new G(Br,0,Qi),new G(-Br,0,Qi),new G(Qi,Br,0),new G(-Qi,Br,0)];class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ju=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Lo,format:kn,encoding:vr,depthBuffer:!1},r=_p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(s)),this._blurMaterial=fw(s,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Wu)}_sceneToCubeUV(e,t,i,r){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(gp),c.toneMapping=ni,c.autoClear=!1;const m=new rh({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),x=new Nt(new Rs,m);let g=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,g=!0):(m.color.copy(gp),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const _=this._cubeSize;ba(r,v*_,p>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ss||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ba(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vp[(r-1)%vp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Nt(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),g=s/x,d=isFinite(s)?1+Math.floor(c*g):Ki;d>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ki}`);const p=[];let v=0;for(let b=0;b<Ki;++b){const S=b/g,A=Math.exp(-S*S/2);p.push(A),b===0?v+=A:b<d&&(v+=2*A)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const y=this._sizeLods[r],w=3*y*(r>_-ns?r-_+ns:0),M=4*(this._cubeSize-y);ba(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(f,Wu)}}function cw(n){const e=[],t=[],i=[];let r=n;const s=n-ns+1+mp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ns?l=mp[o-n+ns-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,x=6,g=3,d=2,p=1,v=new Float32Array(g*x*m),_=new Float32Array(d*x*m),y=new Float32Array(p*x*m);for(let M=0;M<m;M++){const b=M%3*2/3-1,S=M>2?0:-1,A=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];v.set(A,g*x*M),_.set(h,d*x*M);const z=[M,M,M,M,M,M];y.set(z,p*x*M)}const w=new Bn;w.setAttribute("position",new Un(v,g)),w.setAttribute("uv",new Un(_,d)),w.setAttribute("faceIndex",new Un(y,p)),e.push(w),r>ns&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _p(n,e,t){const i=new xr(n,e,t);return i.texture.mapping=Nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fw(n,e,t){const i=new Float32Array(Ki),r=new G(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function yp(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Sp(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===$c||l===Yc,c=l===Ss||l===ws;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new xp(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new xp(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pw(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const g=m[x];for(let d=0,p=g.length;d<p;d++)e.update(g[d],34962)}}function u(f){const h=[],m=f.index,x=f.attributes.position;let g=0;if(m!==null){const v=m.array;g=m.version;for(let _=0,y=v.length;_<y;_+=3){const w=v[_+0],M=v[_+1],b=v[_+2];h.push(w,M,M,b,b,w)}}else{const v=x.array;g=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const w=_+0,M=_+1,b=_+2;h.push(w,M,M,b,b,w)}}const d=new(d0(h)?y0:_0)(h,1);d.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function mw(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let g,d;if(r)g=n,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,m,a,h*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function gw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vw(n,e){return n[0]-e[0]}function xw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _w(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,h){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=g!==void 0?g.length:0;let p=s.get(c);if(p===void 0||p.count!==d){let ne=function(){V.dispose(),s.delete(c),c.removeEventListener("dispose",ne)};var x=ne;p!==void 0&&p.texture.dispose();const y=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let z=0;y===!0&&(z=1),w===!0&&(z=2),M===!0&&(z=3);let Z=c.attributes.position.count*z,q=1;Z>e.maxTextureSize&&(q=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const H=new Float32Array(Z*q*4*d),V=new v0(H,Z,q,d);V.type=rr,V.needsUpdate=!0;const K=z*4;for(let Y=0;Y<d;Y++){const P=b[Y],k=S[Y],U=A[Y],se=Z*q*4*Y;for(let N=0;N<P.count;N++){const I=N*K;y===!0&&(o.fromBufferAttribute(P,N),H[se+I+0]=o.x,H[se+I+1]=o.y,H[se+I+2]=o.z,H[se+I+3]=0),w===!0&&(o.fromBufferAttribute(k,N),H[se+I+4]=o.x,H[se+I+5]=o.y,H[se+I+6]=o.z,H[se+I+7]=0),M===!0&&(o.fromBufferAttribute(U,N),H[se+I+8]=o.x,H[se+I+9]=o.y,H[se+I+10]=o.z,H[se+I+11]=U.itemSize===4?o.w:1)}}p={count:d,texture:V,size:new ce(Z,q)},s.set(c,p),c.addEventListener("dispose",ne)}let v=0;for(let y=0;y<m.length;y++)v+=m[y];const _=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let d=i[c.id];if(d===void 0||d.length!==g){d=[];for(let w=0;w<g;w++)d[w]=[w,0];i[c.id]=d}for(let w=0;w<g;w++){const M=d[w];M[0]=w,M[1]=m[w]}d.sort(xw);for(let w=0;w<8;w++)w<g&&d[w][1]?(a[w][0]=d[w][0],a[w][1]=d[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(vw);const p=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let w=0;w<8;w++){const M=a[w],b=M[0],S=M[1];b!==Number.MAX_SAFE_INTEGER&&S?(p&&c.getAttribute("morphTarget"+w)!==p[b]&&c.setAttribute("morphTarget"+w,p[b]),v&&c.getAttribute("morphNormal"+w)!==v[b]&&c.setAttribute("morphNormal"+w,v[b]),r[w]=S,_+=S):(p&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),v&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),r[w]=0)}const y=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function yw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const T0=new Pn,b0=new v0,C0=new ly,A0=new w0,wp=[],Mp=[],Ep=new Float32Array(16),Tp=new Float32Array(9),bp=new Float32Array(4);function Ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wp[r];if(s===void 0&&(s=new Float32Array(r),wp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kl(n,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Tw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;bp.set(i),n.uniformMatrix2fv(this.addr,!1,bp),Ot(t,i)}}function bw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Tp.set(i),n.uniformMatrix3fv(this.addr,!1,Tp),Ot(t,i)}}function Cw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Ep.set(i),n.uniformMatrix4fv(this.addr,!1,Ep),Ot(t,i)}}function Aw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lw(n,e){const t=this.cache;Ft(t,e)||(n.uniform2iv(this.addr,e),Ot(t,e))}function Pw(n,e){const t=this.cache;Ft(t,e)||(n.uniform3iv(this.addr,e),Ot(t,e))}function Rw(n,e){const t=this.cache;Ft(t,e)||(n.uniform4iv(this.addr,e),Ot(t,e))}function Dw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Iw(n,e){const t=this.cache;Ft(t,e)||(n.uniform2uiv(this.addr,e),Ot(t,e))}function Nw(n,e){const t=this.cache;Ft(t,e)||(n.uniform3uiv(this.addr,e),Ot(t,e))}function zw(n,e){const t=this.cache;Ft(t,e)||(n.uniform4uiv(this.addr,e),Ot(t,e))}function kw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||T0,r)}function Fw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||C0,r)}function Ow(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||A0,r)}function Uw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||b0,r)}function Bw(n){switch(n){case 5126:return Sw;case 35664:return ww;case 35665:return Mw;case 35666:return Ew;case 35674:return Tw;case 35675:return bw;case 35676:return Cw;case 5124:case 35670:return Aw;case 35667:case 35671:return Lw;case 35668:case 35672:return Pw;case 35669:case 35673:return Rw;case 5125:return Dw;case 36294:return Iw;case 36295:return Nw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Uw}}function Vw(n,e){n.uniform1fv(this.addr,e)}function Gw(n,e){const t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function Hw(n,e){const t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function Ww(n,e){const t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function jw(n,e){const t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xw(n,e){const t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qw(n,e){const t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $w(n,e){n.uniform1iv(this.addr,e)}function Yw(n,e){n.uniform2iv(this.addr,e)}function Zw(n,e){n.uniform3iv(this.addr,e)}function Jw(n,e){n.uniform4iv(this.addr,e)}function Qw(n,e){n.uniform1uiv(this.addr,e)}function Kw(n,e){n.uniform2uiv(this.addr,e)}function eM(n,e){n.uniform3uiv(this.addr,e)}function tM(n,e){n.uniform4uiv(this.addr,e)}function nM(n,e,t){const i=e.length,r=kl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||T0,r[s])}function iM(n,e,t){const i=e.length,r=kl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||C0,r[s])}function rM(n,e,t){const i=e.length,r=kl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||A0,r[s])}function sM(n,e,t){const i=e.length,r=kl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||b0,r[s])}function oM(n){switch(n){case 5126:return Vw;case 35664:return Gw;case 35665:return Hw;case 35666:return Ww;case 35674:return jw;case 35675:return Xw;case 35676:return qw;case 5124:case 35670:return $w;case 35667:case 35671:return Yw;case 35668:case 35672:return Zw;case 35669:case 35673:return Jw;case 5125:return Qw;case 36294:return Kw;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}class aM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bw(t.type)}}class lM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=oM(t.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function Cp(n,e){n.seq.push(e),n.map[e.id]=e}function cM(n,e,t){const i=n.name,r=i.length;for(Xu.lastIndex=0;;){const s=Xu.exec(i),o=Xu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Cp(t,u===void 0?new aM(a,n,e):new lM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new uM(a),Cp(t,f)),t=f}}}class ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ap(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let fM=0;function hM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function dM(n){switch(n){case vr:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Lp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hM(n.getShaderSource(e),o)}else return r}function pM(n,e){const t=dM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mM(n,e){let t;switch(e){case z_:t="Linear";break;case k_:t="Reinhard";break;case F_:t="OptimizedCineon";break;case O_:t="ACESFilmic";break;case U_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function vM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function Pp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(n){return n.replace(_M,yM)}function yM(n,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ef(t)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(n){return n.replace(SM,wM)}function wM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ip(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===d_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zs&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ss:case ws:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function bM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case eh:e="ENVMAP_BLENDING_MULTIPLY";break;case I_:e="ENVMAP_BLENDING_MIX";break;case N_:e="ENVMAP_BLENDING_ADD";break}return e}function CM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=MM(t),u=EM(t),c=TM(t),f=bM(t),h=CM(t),m=t.isWebGL2?"":gM(t),x=vM(s),g=r.createProgram();let d,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(Js).join(`
`),d.length>0&&(d+=`
`),p=[m,x].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(d=[Ip(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[m,Ip(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ke.tonemapping_pars_fragment:"",t.toneMapping!==ni?mM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,pM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=ef(o),o=Pp(o,t),o=Rp(o,t),a=ef(a),a=Pp(a,t),a=Rp(a,t),o=Dp(o),a=Dp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+d+o,y=v+p+a,w=Ap(r,35633,_),M=Ap(r,35632,y);if(r.attachShader(g,w),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(w).trim(),Z=r.getShaderInfoLog(M).trim();let q=!0,H=!0;if(r.getProgramParameter(g,35714)===!1){q=!1;const V=Lp(r,w,"vertex"),K=Lp(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+A+`
`+V+`
`+K)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(z===""||Z==="")&&(H=!1);H&&(this.diagnostics={runnable:q,programLog:A,vertexShader:{log:z,prefix:d},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(w),r.deleteShader(M);let b;this.getUniforms=function(){return b===void 0&&(b=new ja(r,g)),b};let S;return this.getAttributes=function(){return S===void 0&&(S=xM(r,g)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=M,this}let LM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RM(e),t.set(e,i)),i}}class RM{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}}function DM(n,e,t,i,r,s,o){const a=new ih,l=new PM,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S,A,z,Z,q){const H=Z.fog,V=q.geometry,K=S.isMeshStandardMaterial?Z.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),Y=!!ne&&ne.mapping===Nl?ne.image.height:null,P=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const k=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,U=k!==void 0?k.length:0;let se=0;V.morphAttributes.position!==void 0&&(se=1),V.morphAttributes.normal!==void 0&&(se=2),V.morphAttributes.color!==void 0&&(se=3);let N,I,E,B;if(P){const me=Nn[P];N=me.vertexShader,I=me.fragmentShader}else N=S.vertexShader,I=S.fragmentShader,l.update(S),E=l.getVertexShaderID(S),B=l.getFragmentShaderID(S);const F=n.getRenderTarget(),O=S.alphaTest>0,ee=S.clearcoat>0,he=S.iridescence>0;return{isWebGL2:c,shaderID:P,shaderName:S.type,vertexShader:N,fragmentShader:I,defines:S.defines,customVertexShaderID:E,customFragmentShaderID:B,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:F===null?n.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:vr,map:!!S.map,matcap:!!S.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:Y,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===ry,tangentSpaceNormalMap:S.normalMapType===th,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===it,clearcoat:ee,clearcoatMap:ee&&!!S.clearcoatMap,clearcoatRoughnessMap:ee&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:ee&&!!S.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!S.iridescenceMap,iridescenceThicknessMap:he&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===cs,alphaMap:!!S.alphaMap,alphaTest:O,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!V.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:ni,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===pn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)A.push(z),A.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(p(A,S),v(A,S),A.push(n.outputEncoding)),A.push(S.customProgramCacheKey),A.join()}function p(S,A){S.push(A.precision),S.push(A.outputEncoding),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.combine),S.push(A.vertexUvs),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),S.push(a.mask)}function _(S){const A=x[S.type];let z;if(A){const Z=Nn[A];z=yy.clone(Z.uniforms)}else z=S.uniforms;return z}function y(S,A){let z;for(let Z=0,q=u.length;Z<q;Z++){const H=u[Z];if(H.cacheKey===A){z=H,++z.usedTimes;break}}return z===void 0&&(z=new AM(n,A,S,s),u.push(z)),z}function w(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:b}}function IM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function NM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,x,g,d){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=g,p.group=d),e++,p}function a(f,h,m,x,g,d){const p=o(f,h,m,x,g,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(f,h,m,x,g,d){const p=o(f,h,m,x,g,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function u(f,h){t.length>1&&t.sort(f||NM),i.length>1&&i.sort(h||Np),r.length>1&&r.sort(h||Np)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function zM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zp,n.set(i,[o])):r>=s.length?(o=new zp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new We};break;case"SpotLight":t={position:new G,direction:new G,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OM=0;function UM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BM(n,e){const t=new kM,i=FM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new G);const s=new G,o=new lt,a=new lt;function l(c,f){let h=0,m=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let g=0,d=0,p=0,v=0,_=0,y=0,w=0,M=0,b=0,S=0;c.sort(UM);const A=f!==!0?Math.PI:1;for(let Z=0,q=c.length;Z<q;Z++){const H=c[Z],V=H.color,K=H.intensity,ne=H.distance,Y=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=V.r*K*A,m+=V.g*K*A,x+=V.b*K*A;else if(H.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],K);else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity*A),H.castShadow){const k=H.shadow,U=i.get(H);U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,r.directionalShadow[g]=U,r.directionalShadowMap[g]=Y,r.directionalShadowMatrix[g]=H.shadow.matrix,y++}r.directional[g]=P,g++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(V).multiplyScalar(K*A),P.distance=ne,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[p]=P;const k=H.shadow;if(H.map&&(r.spotLightMap[b]=H.map,b++,k.updateMatrices(H),H.castShadow&&S++),r.spotLightMatrix[p]=k.matrix,H.castShadow){const U=i.get(H);U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,r.spotShadow[p]=U,r.spotShadowMap[p]=Y,M++}p++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(V).multiplyScalar(K),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[v]=P,v++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity*A),P.distance=H.distance,P.decay=H.decay,H.castShadow){const k=H.shadow,U=i.get(H);U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,U.shadowCameraNear=k.camera.near,U.shadowCameraFar=k.camera.far,r.pointShadow[d]=U,r.pointShadowMap[d]=Y,r.pointShadowMatrix[d]=H.shadow.matrix,w++}r.point[d]=P,d++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(K*A),P.groundColor.copy(H.groundColor).multiplyScalar(K*A),r.hemi[_]=P,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==g||z.pointLength!==d||z.spotLength!==p||z.rectAreaLength!==v||z.hemiLength!==_||z.numDirectionalShadows!==y||z.numPointShadows!==w||z.numSpotShadows!==M||z.numSpotMaps!==b)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=v,r.point.length=d,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=M+b-S,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=S,z.directionalLength=g,z.pointLength=d,z.spotLength=p,z.rectAreaLength=v,z.hemiLength=_,z.numDirectionalShadows=y,z.numPointShadows=w,z.numSpotShadows=M,z.numSpotMaps=b,r.version=OM++)}function u(c,f){let h=0,m=0,x=0,g=0,d=0;const p=f.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const y=c[v];if(y.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),x++}else if(y.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){const w=r.hemi[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),d++}}}return{setup:l,setupView:u,state:r}}function kp(n,e){const t=new BM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function VM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new kp(n,e),t.set(s,[l])):o>=a.length?(l=new kp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class GM extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HM extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(n,e,t){let i=new sh;const r=new ce,s=new ce,o=new _t,a=new GM({depthPacking:iy}),l=new HM,u={},c=t.maxTextureSize,f={0:pn,1:ys,2:hn},h=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:WM,fragmentShader:jM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Bn;x.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Nt(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0,this.render=function(y,w,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ki),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let Z=0,q=y.length;Z<q;Z++){const H=y[Z],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const K=V.getFrameExtents();if(r.multiply(K),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,V.mapSize.y=s.y)),V.map===null){const Y=this.type!==Zs?{minFilter:Gt,magFilter:Gt}:{};V.map=new xr(r.x,r.y,Y),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ne=V.getViewportCount();for(let Y=0;Y<ne;Y++){const P=V.getViewport(Y);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),z.viewport(o),V.updateMatrices(H,Y),i=V.getFrustum(),_(w,M,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Zs&&p(V,M),V.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(b,S,A)};function p(y,w){const M=e.update(g);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new xr(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,M,h,g,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,M,m,g,null)}function v(y,w,M,b,S,A){let z=null;const Z=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Z!==void 0?z=Z:z=M.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const q=z.uuid,H=w.uuid;let V=u[q];V===void 0&&(V={},u[q]=V);let K=V[H];K===void 0&&(K=z.clone(),V[H]=K),z=K}return z.visible=w.visible,z.wireframe=w.wireframe,A===Zs?z.side=w.shadowSide!==null?w.shadowSide:w.side:z.side=w.shadowSide!==null?w.shadowSide:f[w.side],z.alphaMap=w.alphaMap,z.alphaTest=w.alphaTest,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,M.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(M.matrixWorld),z.nearDistance=b,z.farDistance=S),z}function _(y,w,M,b,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Zs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const Z=e.update(y),q=y.material;if(Array.isArray(q)){const H=Z.groups;for(let V=0,K=H.length;V<K;V++){const ne=H[V],Y=q[ne.materialIndex];if(Y&&Y.visible){const P=v(y,Y,b,M.near,M.far,S);n.renderBufferDirect(M,null,Z,P,y,ne)}}}else if(q.visible){const H=v(y,q,b,M.near,M.far,S);n.renderBufferDirect(M,null,Z,H,y,null)}}const z=y.children;for(let Z=0,q=z.length;Z<q;Z++)_(z[Z],w,M,b,S)}}function qM(n,e,t){const i=t.isWebGL2;function r(){let W=!1;const we=new _t;let oe=null;const Se=new _t(0,0,0,0);return{setMask:function(ye){oe!==ye&&!W&&(n.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){W=ye},setClear:function(ye,Ve,mt,ot,ui){ui===!0&&(ye*=ot,Ve*=ot,mt*=ot),we.set(ye,Ve,mt,ot),Se.equals(we)===!1&&(n.clearColor(ye,Ve,mt,ot),Se.copy(we))},reset:function(){W=!1,oe=null,Se.set(-1,0,0,0)}}}function s(){let W=!1,we=null,oe=null,Se=null;return{setTest:function(ye){ye?O(2929):ee(2929)},setMask:function(ye){we!==ye&&!W&&(n.depthMask(ye),we=ye)},setFunc:function(ye){if(oe!==ye){if(ye)switch(ye){case b_:n.depthFunc(512);break;case C_:n.depthFunc(519);break;case A_:n.depthFunc(513);break;case qc:n.depthFunc(515);break;case L_:n.depthFunc(514);break;case P_:n.depthFunc(518);break;case R_:n.depthFunc(516);break;case D_:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);oe=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Se!==ye&&(n.clearDepth(ye),Se=ye)},reset:function(){W=!1,we=null,oe=null,Se=null}}}function o(){let W=!1,we=null,oe=null,Se=null,ye=null,Ve=null,mt=null,ot=null,ui=null;return{setTest:function(tt){W||(tt?O(2960):ee(2960))},setMask:function(tt){we!==tt&&!W&&(n.stencilMask(tt),we=tt)},setFunc:function(tt,Gn,rn){(oe!==tt||Se!==Gn||ye!==rn)&&(n.stencilFunc(tt,Gn,rn),oe=tt,Se=Gn,ye=rn)},setOp:function(tt,Gn,rn){(Ve!==tt||mt!==Gn||ot!==rn)&&(n.stencilOp(tt,Gn,rn),Ve=tt,mt=Gn,ot=rn)},setLocked:function(tt){W=tt},setClear:function(tt){ui!==tt&&(n.clearStencil(tt),ui=tt)},reset:function(){W=!1,we=null,oe=null,Se=null,ye=null,Ve=null,mt=null,ot=null,ui=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,g=[],d=null,p=!1,v=null,_=null,y=null,w=null,M=null,b=null,S=null,A=!1,z=null,Z=null,q=null,H=null,V=null;const K=n.getParameter(35661);let ne=!1,Y=0;const P=n.getParameter(7938);P.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(P)[1]),ne=Y>=1):P.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),ne=Y>=2);let k=null,U={};const se=n.getParameter(3088),N=n.getParameter(2978),I=new _t().fromArray(se),E=new _t().fromArray(N);function B(W,we,oe){const Se=new Uint8Array(4),ye=n.createTexture();n.bindTexture(W,ye),n.texParameteri(W,10241,9728),n.texParameteri(W,10240,9728);for(let Ve=0;Ve<oe;Ve++)n.texImage2D(we+Ve,0,6408,1,1,0,6408,5121,Se);return ye}const F={};F[3553]=B(3553,3553,1),F[34067]=B(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),O(2929),l.setFunc(qc),D(!1),L(Td),O(2884),$(ki);function O(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function ee(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function he(W,we){return m[W]!==we?(n.bindFramebuffer(W,we),m[W]=we,i&&(W===36009&&(m[36160]=we),W===36160&&(m[36009]=we)),!0):!1}function re(W,we){let oe=g,Se=!1;if(W)if(oe=x.get(we),oe===void 0&&(oe=[],x.set(we,oe)),W.isWebGLMultipleRenderTargets){const ye=W.texture;if(oe.length!==ye.length||oe[0]!==36064){for(let Ve=0,mt=ye.length;Ve<mt;Ve++)oe[Ve]=36064+Ve;oe.length=ye.length,Se=!0}}else oe[0]!==36064&&(oe[0]=36064,Se=!0);else oe[0]!==1029&&(oe[0]=1029,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function me(W){return d!==W?(n.useProgram(W),d=W,!0):!1}const j={[Hr]:32774,[m_]:32778,[g_]:32779};if(i)j[Ld]=32775,j[Pd]=32776;else{const W=e.get("EXT_blend_minmax");W!==null&&(j[Ld]=W.MIN_EXT,j[Pd]=W.MAX_EXT)}const Q={[v_]:0,[x_]:1,[__]:768,[u0]:770,[T_]:776,[M_]:774,[S_]:772,[y_]:769,[c0]:771,[E_]:775,[w_]:773};function $(W,we,oe,Se,ye,Ve,mt,ot){if(W===ki){p===!0&&(ee(3042),p=!1);return}if(p===!1&&(O(3042),p=!0),W!==p_){if(W!==v||ot!==A){if((_!==Hr||M!==Hr)&&(n.blendEquation(32774),_=Hr,M=Hr),ot)switch(W){case cs:n.blendFuncSeparate(1,771,1,771);break;case bd:n.blendFunc(1,1);break;case Cd:n.blendFuncSeparate(0,769,0,1);break;case Ad:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case cs:n.blendFuncSeparate(770,771,1,771);break;case bd:n.blendFunc(770,1);break;case Cd:n.blendFuncSeparate(0,769,0,1);break;case Ad:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,w=null,b=null,S=null,v=W,A=ot}return}ye=ye||we,Ve=Ve||oe,mt=mt||Se,(we!==_||ye!==M)&&(n.blendEquationSeparate(j[we],j[ye]),_=we,M=ye),(oe!==y||Se!==w||Ve!==b||mt!==S)&&(n.blendFuncSeparate(Q[oe],Q[Se],Q[Ve],Q[mt]),y=oe,w=Se,b=Ve,S=mt),v=W,A=null}function le(W,we){W.side===hn?ee(2884):O(2884);let oe=W.side===pn;we&&(oe=!oe),D(oe),W.blending===cs&&W.transparent===!1?$(ki):$(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const Se=W.stencilWrite;u.setTest(Se),Se&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ge(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?O(32926):ee(32926)}function D(W){z!==W&&(W?n.frontFace(2304):n.frontFace(2305),z=W)}function L(W){W!==f_?(O(2884),W!==Z&&(W===Td?n.cullFace(1029):W===h_?n.cullFace(1028):n.cullFace(1032))):ee(2884),Z=W}function fe(W){W!==q&&(ne&&n.lineWidth(W),q=W)}function ge(W,we,oe){W?(O(32823),(H!==we||V!==oe)&&(n.polygonOffset(we,oe),H=we,V=oe)):ee(32823)}function Le(W){W?O(3089):ee(3089)}function Re(W){W===void 0&&(W=33984+K-1),k!==W&&(n.activeTexture(W),k=W)}function R(W,we){k===null&&Re();let oe=U[k];oe===void 0&&(oe={type:void 0,texture:void 0},U[k]=oe),(oe.type!==W||oe.texture!==we)&&(n.bindTexture(W,we||F[W]),oe.type=W,oe.texture=we)}function T(){const W=U[k];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(W){I.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),I.copy(W))}function Te(W){E.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),E.copy(W))}function Ne(W,we){let oe=f.get(we);oe===void 0&&(oe=new WeakMap,f.set(we,oe));let Se=oe.get(W);Se===void 0&&(Se=n.getUniformBlockIndex(we,W.name),oe.set(W,Se))}function Ge(W,we){const Se=f.get(we).get(W);c.get(W)!==Se&&(n.uniformBlockBinding(we,Se,W.__bindingPointIndex),c.set(W,Se))}function st(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},k=null,U={},m={},x=new WeakMap,g=[],d=null,p=!1,v=null,_=null,y=null,w=null,M=null,b=null,S=null,A=!1,z=null,Z=null,q=null,H=null,V=null,I.set(0,0,n.canvas.width,n.canvas.height),E.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:O,disable:ee,bindFramebuffer:he,drawBuffers:re,useProgram:me,setBlending:$,setMaterial:le,setFlipSided:D,setCullFace:L,setLineWidth:fe,setPolygonOffset:ge,setScissorTest:Le,activeTexture:Re,bindTexture:R,unbindTexture:T,compressedTexImage2D:te,texImage2D:be,texImage3D:Ee,updateUBOMapping:Ne,uniformBlockBinding:Ge,texStorage2D:Pe,texStorage3D:ie,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:_e,scissor:Ce,viewport:Te,reset:st}}function $M(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let g;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,T){return p?new OffscreenCanvas(R,T):gl("canvas")}function _(R,T,te,pe){let ve=1;if((R.width>pe||R.height>pe)&&(ve=pe/Math.max(R.width,R.height)),ve<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const _e=T?Kc:Math.floor,Pe=_e(ve*R.width),ie=_e(ve*R.height);g===void 0&&(g=v(Pe,ie));const be=te?v(Pe,ie):g;return be.width=Pe,be.height=ie,be.getContext("2d").drawImage(R,0,0,Pe,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Pe+"x"+ie+")."),be}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return ip(R.width)&&ip(R.height)}function w(R){return a?!1:R.wrapS!==Tn||R.wrapT!==Tn||R.minFilter!==Gt&&R.minFilter!==un}function M(R,T){return R.generateMipmaps&&T&&R.minFilter!==Gt&&R.minFilter!==un}function b(R){n.generateMipmap(R)}function S(R,T,te,pe,ve=!1){if(a===!1)return T;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e=T;return T===6403&&(te===5126&&(_e=33326),te===5131&&(_e=33325),te===5121&&(_e=33321)),T===33319&&(te===5126&&(_e=33328),te===5131&&(_e=33327),te===5121&&(_e=33323)),T===6408&&(te===5126&&(_e=34836),te===5131&&(_e=34842),te===5121&&(_e=pe===it&&ve===!1?35907:32856),te===32819&&(_e=32854),te===32820&&(_e=32855)),(_e===33325||_e===33326||_e===33327||_e===33328||_e===34842||_e===34836)&&e.get("EXT_color_buffer_float"),_e}function A(R,T,te){return M(R,te)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function z(R){return R===Gt||R===Rd||R===Dd?9728:9729}function Z(R){const T=R.target;T.removeEventListener("dispose",Z),H(T),T.isVideoTexture&&x.delete(T)}function q(R){const T=R.target;T.removeEventListener("dispose",q),K(T)}function H(R){const T=i.get(R);if(T.__webglInit===void 0)return;const te=R.source,pe=d.get(te);if(pe){const ve=pe[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&V(R),Object.keys(pe).length===0&&d.delete(te)}i.remove(R)}function V(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const te=R.source,pe=d.get(te);delete pe[T.__cacheKey],o.memory.textures--}function K(R){const T=R.texture,te=i.get(R),pe=i.get(T);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++)n.deleteFramebuffer(te.__webglFramebuffer[ve]),te.__webglDepthbuffer&&n.deleteRenderbuffer(te.__webglDepthbuffer[ve]);else{if(n.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&n.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&n.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let ve=0;ve<te.__webglColorRenderbuffer.length;ve++)te.__webglColorRenderbuffer[ve]&&n.deleteRenderbuffer(te.__webglColorRenderbuffer[ve]);te.__webglDepthRenderbuffer&&n.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ve=0,_e=T.length;ve<_e;ve++){const Pe=i.get(T[ve]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(T[ve])}i.remove(T),i.remove(R)}let ne=0;function Y(){ne=0}function P(){const R=ne;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),ne+=1,R}function k(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.encoding),T.join()}function U(R,T){const te=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&te.__version!==R.version){const pe=R.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(te,R,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,te.__webglTexture)}function se(R,T){const te=i.get(R);if(R.version>0&&te.__version!==R.version){ee(te,R,T);return}t.activeTexture(33984+T),t.bindTexture(35866,te.__webglTexture)}function N(R,T){const te=i.get(R);if(R.version>0&&te.__version!==R.version){ee(te,R,T);return}t.activeTexture(33984+T),t.bindTexture(32879,te.__webglTexture)}function I(R,T){const te=i.get(R);if(R.version>0&&te.__version!==R.version){he(te,R,T);return}t.activeTexture(33984+T),t.bindTexture(34067,te.__webglTexture)}const E={[Zc]:10497,[Tn]:33071,[Jc]:33648},B={[Gt]:9728,[Rd]:9984,[Dd]:9986,[un]:9729,[B_]:9985,[zl]:9987};function F(R,T,te){if(te?(n.texParameteri(R,10242,E[T.wrapS]),n.texParameteri(R,10243,E[T.wrapT]),(R===32879||R===35866)&&n.texParameteri(R,32882,E[T.wrapR]),n.texParameteri(R,10240,B[T.magFilter]),n.texParameteri(R,10241,B[T.minFilter])):(n.texParameteri(R,10242,33071),n.texParameteri(R,10243,33071),(R===32879||R===35866)&&n.texParameteri(R,32882,33071),(T.wrapS!==Tn||T.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,10240,z(T.magFilter)),n.texParameteri(R,10241,z(T.minFilter)),T.minFilter!==Gt&&T.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(T.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Lo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(R,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function O(R,T){let te=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",Z));const pe=T.source;let ve=d.get(pe);ve===void 0&&(ve={},d.set(pe,ve));const _e=k(T);if(_e!==R.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,te=!0),ve[_e].usedTimes++;const Pe=ve[R.__cacheKey];Pe!==void 0&&(ve[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&V(T)),R.__cacheKey=_e,R.__webglTexture=ve[_e].texture}return te}function ee(R,T,te){let pe=3553;T.isDataArrayTexture&&(pe=35866),T.isData3DTexture&&(pe=32879);const ve=O(R,T),_e=T.source;if(t.activeTexture(33984+te),t.bindTexture(pe,R.__webglTexture),_e.version!==_e.__currentVersion||ve===!0){n.pixelStorei(37440,T.flipY),n.pixelStorei(37441,T.premultiplyAlpha),n.pixelStorei(3317,T.unpackAlignment),n.pixelStorei(37443,0);const Pe=w(T)&&y(T.image)===!1;let ie=_(T.image,Pe,!1,c);ie=Re(T,ie);const be=y(ie)||a,Ee=s.convert(T.format,T.encoding);let Ce=s.convert(T.type),Te=S(T.internalFormat,Ee,Ce,T.encoding,T.isVideoTexture);F(pe,T,be);let Ne;const Ge=T.mipmaps,st=a&&T.isVideoTexture!==!0,W=_e.__currentVersion===void 0||ve===!0,we=A(T,ie,be);if(T.isDepthTexture)Te=6402,a?T.type===rr?Te=36012:T.type===ir?Te=33190:T.type===fs?Te=35056:Te=33189:T.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===lr&&Te===6402&&T.type!==h0&&T.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ir,Ce=s.convert(T.type)),T.format===Ms&&Te===6402&&(Te=34041,T.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=fs,Ce=s.convert(T.type))),W&&(st?t.texStorage2D(3553,1,Te,ie.width,ie.height):t.texImage2D(3553,0,Te,ie.width,ie.height,0,Ee,Ce,null));else if(T.isDataTexture)if(Ge.length>0&&be){st&&W&&t.texStorage2D(3553,we,Te,Ge[0].width,Ge[0].height);for(let oe=0,Se=Ge.length;oe<Se;oe++)Ne=Ge[oe],st?t.texSubImage2D(3553,oe,0,0,Ne.width,Ne.height,Ee,Ce,Ne.data):t.texImage2D(3553,oe,Te,Ne.width,Ne.height,0,Ee,Ce,Ne.data);T.generateMipmaps=!1}else st?(W&&t.texStorage2D(3553,we,Te,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,ie.width,ie.height,Ee,Ce,ie.data)):t.texImage2D(3553,0,Te,ie.width,ie.height,0,Ee,Ce,ie.data);else if(T.isCompressedTexture){st&&W&&t.texStorage2D(3553,we,Te,Ge[0].width,Ge[0].height);for(let oe=0,Se=Ge.length;oe<Se;oe++)Ne=Ge[oe],T.format!==kn?Ee!==null?st?t.compressedTexSubImage2D(3553,oe,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(3553,oe,Te,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(3553,oe,0,0,Ne.width,Ne.height,Ee,Ce,Ne.data):t.texImage2D(3553,oe,Te,Ne.width,Ne.height,0,Ee,Ce,Ne.data)}else if(T.isDataArrayTexture)st?(W&&t.texStorage3D(35866,we,Te,ie.width,ie.height,ie.depth),t.texSubImage3D(35866,0,0,0,0,ie.width,ie.height,ie.depth,Ee,Ce,ie.data)):t.texImage3D(35866,0,Te,ie.width,ie.height,ie.depth,0,Ee,Ce,ie.data);else if(T.isData3DTexture)st?(W&&t.texStorage3D(32879,we,Te,ie.width,ie.height,ie.depth),t.texSubImage3D(32879,0,0,0,0,ie.width,ie.height,ie.depth,Ee,Ce,ie.data)):t.texImage3D(32879,0,Te,ie.width,ie.height,ie.depth,0,Ee,Ce,ie.data);else if(T.isFramebufferTexture){if(W)if(st)t.texStorage2D(3553,we,Te,ie.width,ie.height);else{let oe=ie.width,Se=ie.height;for(let ye=0;ye<we;ye++)t.texImage2D(3553,ye,Te,oe,Se,0,Ee,Ce,null),oe>>=1,Se>>=1}}else if(Ge.length>0&&be){st&&W&&t.texStorage2D(3553,we,Te,Ge[0].width,Ge[0].height);for(let oe=0,Se=Ge.length;oe<Se;oe++)Ne=Ge[oe],st?t.texSubImage2D(3553,oe,0,0,Ee,Ce,Ne):t.texImage2D(3553,oe,Te,Ee,Ce,Ne);T.generateMipmaps=!1}else st?(W&&t.texStorage2D(3553,we,Te,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,Ee,Ce,ie)):t.texImage2D(3553,0,Te,Ee,Ce,ie);M(T,be)&&b(pe),_e.__currentVersion=_e.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function he(R,T,te){if(T.image.length!==6)return;const pe=O(R,T),ve=T.source;if(t.activeTexture(33984+te),t.bindTexture(34067,R.__webglTexture),ve.version!==ve.__currentVersion||pe===!0){n.pixelStorei(37440,T.flipY),n.pixelStorei(37441,T.premultiplyAlpha),n.pixelStorei(3317,T.unpackAlignment),n.pixelStorei(37443,0);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,Pe=T.image[0]&&T.image[0].isDataTexture,ie=[];for(let oe=0;oe<6;oe++)!_e&&!Pe?ie[oe]=_(T.image[oe],!1,!0,u):ie[oe]=Pe?T.image[oe].image:T.image[oe],ie[oe]=Re(T,ie[oe]);const be=ie[0],Ee=y(be)||a,Ce=s.convert(T.format,T.encoding),Te=s.convert(T.type),Ne=S(T.internalFormat,Ce,Te,T.encoding),Ge=a&&T.isVideoTexture!==!0,st=ve.__currentVersion===void 0||pe===!0;let W=A(T,be,Ee);F(34067,T,Ee);let we;if(_e){Ge&&st&&t.texStorage2D(34067,W,Ne,be.width,be.height);for(let oe=0;oe<6;oe++){we=ie[oe].mipmaps;for(let Se=0;Se<we.length;Se++){const ye=we[Se];T.format!==kn?Ce!==null?Ge?t.compressedTexSubImage2D(34069+oe,Se,0,0,ye.width,ye.height,Ce,ye.data):t.compressedTexImage2D(34069+oe,Se,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+oe,Se,0,0,ye.width,ye.height,Ce,Te,ye.data):t.texImage2D(34069+oe,Se,Ne,ye.width,ye.height,0,Ce,Te,ye.data)}}}else{we=T.mipmaps,Ge&&st&&(we.length>0&&W++,t.texStorage2D(34067,W,Ne,ie[0].width,ie[0].height));for(let oe=0;oe<6;oe++)if(Pe){Ge?t.texSubImage2D(34069+oe,0,0,0,ie[oe].width,ie[oe].height,Ce,Te,ie[oe].data):t.texImage2D(34069+oe,0,Ne,ie[oe].width,ie[oe].height,0,Ce,Te,ie[oe].data);for(let Se=0;Se<we.length;Se++){const Ve=we[Se].image[oe].image;Ge?t.texSubImage2D(34069+oe,Se+1,0,0,Ve.width,Ve.height,Ce,Te,Ve.data):t.texImage2D(34069+oe,Se+1,Ne,Ve.width,Ve.height,0,Ce,Te,Ve.data)}}else{Ge?t.texSubImage2D(34069+oe,0,0,0,Ce,Te,ie[oe]):t.texImage2D(34069+oe,0,Ne,Ce,Te,ie[oe]);for(let Se=0;Se<we.length;Se++){const ye=we[Se];Ge?t.texSubImage2D(34069+oe,Se+1,0,0,Ce,Te,ye.image[oe]):t.texImage2D(34069+oe,Se+1,Ne,Ce,Te,ye.image[oe])}}}M(T,Ee)&&b(34067),ve.__currentVersion=ve.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function re(R,T,te,pe,ve){const _e=s.convert(te.format,te.encoding),Pe=s.convert(te.type),ie=S(te.internalFormat,_e,Pe,te.encoding);i.get(T).__hasExternalTextures||(ve===32879||ve===35866?t.texImage3D(ve,0,ie,T.width,T.height,T.depth,0,_e,Pe,null):t.texImage2D(ve,0,ie,T.width,T.height,0,_e,Pe,null)),t.bindFramebuffer(36160,R),ge(T)?h.framebufferTexture2DMultisampleEXT(36160,pe,ve,i.get(te).__webglTexture,0,fe(T)):n.framebufferTexture2D(36160,pe,ve,i.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(R,T,te){if(n.bindRenderbuffer(36161,R),T.depthBuffer&&!T.stencilBuffer){let pe=33189;if(te||ge(T)){const ve=T.depthTexture;ve&&ve.isDepthTexture&&(ve.type===rr?pe=36012:ve.type===ir&&(pe=33190));const _e=fe(T);ge(T)?h.renderbufferStorageMultisampleEXT(36161,_e,pe,T.width,T.height):n.renderbufferStorageMultisample(36161,_e,pe,T.width,T.height)}else n.renderbufferStorage(36161,pe,T.width,T.height);n.framebufferRenderbuffer(36160,36096,36161,R)}else if(T.depthBuffer&&T.stencilBuffer){const pe=fe(T);te&&ge(T)===!1?n.renderbufferStorageMultisample(36161,pe,35056,T.width,T.height):ge(T)?h.renderbufferStorageMultisampleEXT(36161,pe,35056,T.width,T.height):n.renderbufferStorage(36161,34041,T.width,T.height),n.framebufferRenderbuffer(36160,33306,36161,R)}else{const pe=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ve=0;ve<pe.length;ve++){const _e=pe[ve],Pe=s.convert(_e.format,_e.encoding),ie=s.convert(_e.type),be=S(_e.internalFormat,Pe,ie,_e.encoding),Ee=fe(T);te&&ge(T)===!1?n.renderbufferStorageMultisample(36161,Ee,be,T.width,T.height):ge(T)?h.renderbufferStorageMultisampleEXT(36161,Ee,be,T.width,T.height):n.renderbufferStorage(36161,be,T.width,T.height)}}n.bindRenderbuffer(36161,null)}function j(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const pe=i.get(T.depthTexture).__webglTexture,ve=fe(T);if(T.depthTexture.format===lr)ge(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,ve):n.framebufferTexture2D(36160,36096,3553,pe,0);else if(T.depthTexture.format===Ms)ge(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,ve):n.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function Q(R){const T=i.get(R),te=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");j(T.__webglFramebuffer,R)}else if(te){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(36160,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]=n.createRenderbuffer(),me(T.__webglDepthbuffer[pe],R,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),me(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function $(R,T,te){const pe=i.get(R);T!==void 0&&re(pe.__webglFramebuffer,R,R.texture,36064,3553),te!==void 0&&Q(R)}function le(R){const T=R.texture,te=i.get(R),pe=i.get(T);R.addEventListener("dispose",q),R.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=T.version,o.memory.textures++);const ve=R.isWebGLCubeRenderTarget===!0,_e=R.isWebGLMultipleRenderTargets===!0,Pe=y(R)||a;if(ve){te.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)te.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(te.__webglFramebuffer=n.createFramebuffer(),_e)if(r.drawBuffers){const ie=R.texture;for(let be=0,Ee=ie.length;be<Ee;be++){const Ce=i.get(ie[be]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ge(R)===!1){const ie=_e?T:[T];te.__webglMultisampledFramebuffer=n.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer);for(let be=0;be<ie.length;be++){const Ee=ie[be];te.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(36161,te.__webglColorRenderbuffer[be]);const Ce=s.convert(Ee.format,Ee.encoding),Te=s.convert(Ee.type),Ne=S(Ee.internalFormat,Ce,Te,Ee.encoding),Ge=fe(R);n.renderbufferStorageMultisample(36161,Ge,Ne,R.width,R.height),n.framebufferRenderbuffer(36160,36064+be,36161,te.__webglColorRenderbuffer[be])}n.bindRenderbuffer(36161,null),R.depthBuffer&&(te.__webglDepthRenderbuffer=n.createRenderbuffer(),me(te.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(ve){t.bindTexture(34067,pe.__webglTexture),F(34067,T,Pe);for(let ie=0;ie<6;ie++)re(te.__webglFramebuffer[ie],R,T,36064,34069+ie);M(T,Pe)&&b(34067),t.unbindTexture()}else if(_e){const ie=R.texture;for(let be=0,Ee=ie.length;be<Ee;be++){const Ce=ie[be],Te=i.get(Ce);t.bindTexture(3553,Te.__webglTexture),F(3553,Ce,Pe),re(te.__webglFramebuffer,R,Ce,36064+be,3553),M(Ce,Pe)&&b(3553)}t.unbindTexture()}else{let ie=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ie=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,pe.__webglTexture),F(ie,T,Pe),re(te.__webglFramebuffer,R,T,36064,ie),M(T,Pe)&&b(ie),t.unbindTexture()}R.depthBuffer&&Q(R)}function D(R){const T=y(R)||a,te=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let pe=0,ve=te.length;pe<ve;pe++){const _e=te[pe];if(M(_e,T)){const Pe=R.isWebGLCubeRenderTarget?34067:3553,ie=i.get(_e).__webglTexture;t.bindTexture(Pe,ie),b(Pe),t.unbindTexture()}}}function L(R){if(a&&R.samples>0&&ge(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],te=R.width,pe=R.height;let ve=16384;const _e=[],Pe=R.stencilBuffer?33306:36096,ie=i.get(R),be=R.isWebGLMultipleRenderTargets===!0;if(be)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,ie.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ie.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){_e.push(36064+Ee),R.depthBuffer&&_e.push(Pe);const Ce=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(Ce===!1&&(R.depthBuffer&&(ve|=256),R.stencilBuffer&&(ve|=1024)),be&&n.framebufferRenderbuffer(36008,36064,36161,ie.__webglColorRenderbuffer[Ee]),Ce===!0&&(n.invalidateFramebuffer(36008,[Pe]),n.invalidateFramebuffer(36009,[Pe])),be){const Te=i.get(T[Ee]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Te,0)}n.blitFramebuffer(0,0,te,pe,0,0,te,pe,ve,9728),m&&n.invalidateFramebuffer(36008,_e)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),be)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ee,36161,ie.__webglColorRenderbuffer[Ee]);const Ce=i.get(T[Ee]).__webglTexture;t.bindFramebuffer(36160,ie.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ee,3553,Ce,0)}t.bindFramebuffer(36009,ie.__webglMultisampledFramebuffer)}}function fe(R){return Math.min(f,R.samples)}function ge(R){const T=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Le(R){const T=o.render.frame;x.get(R)!==T&&(x.set(R,T),R.update())}function Re(R,T){const te=R.encoding,pe=R.format,ve=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Qc||te!==vr&&(te===it?a===!1?e.has("EXT_sRGB")===!0&&pe===kn?(R.format=Qc,R.minFilter=un,R.generateMipmaps=!1):T=m0.sRGBToLinear(T):(pe!==kn||ve!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",te)),T}this.allocateTextureUnit=P,this.resetTextureUnits=Y,this.setTexture2D=U,this.setTexture2DArray=se,this.setTexture3D=N,this.setTextureCube=I,this.rebindTextures=$,this.setupRenderTarget=le,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ge}function YM(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===gr)return 5121;if(s===W_)return 32819;if(s===j_)return 32820;if(s===V_)return 5120;if(s===G_)return 5122;if(s===h0)return 5123;if(s===H_)return 5124;if(s===ir)return 5125;if(s===rr)return 5126;if(s===Lo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===X_)return 6406;if(s===kn)return 6408;if(s===$_)return 6409;if(s===Y_)return 6410;if(s===lr)return 6402;if(s===Ms)return 34041;if(s===Z_)return 6403;if(s===q_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Qc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===J_)return 36244;if(s===Q_)return 33319;if(s===K_)return 33320;if(s===ey)return 36249;if(s===gu||s===vu||s===xu||s===_u)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Id||s===Nd||s===zd||s===kd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ty)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fd||s===Od)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fd)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Od)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ud||s===Bd||s===Vd||s===Gd||s===Hd||s===Wd||s===jd||s===Xd||s===qd||s===$d||s===Yd||s===Zd||s===Jd||s===Qd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ud)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$d)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qd)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Kd)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===fs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ZM extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const d=t.getJointPose(g,i);if(u.joints[g.jointName]===void 0){const v=new bn;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[g.jointName]=v,u.add(v)}const p=u.joints[g.jointName];d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=d.radius),p.visible=d!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,x=.005;u.inputState.pinching&&h>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class QM extends Pn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:lr,c!==lr&&c!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===lr&&(i=ir),i===void 0&&c===Ms&&(i=fs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1}}class KM extends wr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,h=null,m=null;const x=t.getContextAttributes();let g=null,d=null;const p=[],v=[],_=new cn;_.layers.enable(1),_.viewport=new _t;const y=new cn;y.layers.enable(2),y.viewport=new _t;const w=[_,y],M=new ZM;M.layers.enable(1),M.layers.enable(2);let b=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let U=p[k];return U===void 0&&(U=new qu,p[k]=U),U.getTargetRaySpace()},this.getControllerGrip=function(k){let U=p[k];return U===void 0&&(U=new qu,p[k]=U),U.getGripSpace()},this.getHand=function(k){let U=p[k];return U===void 0&&(U=new qu,p[k]=U),U.getHandSpace()};function A(k){const U=v.indexOf(k.inputSource);if(U===-1)return;const se=p[U];se!==void 0&&se.dispatchEvent({type:k.type,data:k.inputSource})}function z(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Z);for(let k=0;k<p.length;k++){const U=v[k];U!==null&&(v[k]=null,p[k].disconnect(U))}b=null,S=null,e.setRenderTarget(g),h=null,f=null,c=null,r=null,d=null,P.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:h}),d=new xr(h.framebufferWidth,h.framebufferHeight,{format:kn,type:gr,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let U=null,se=null,N=null;x.depth&&(N=x.stencil?35056:33190,U=x.stencil?Ms:lr,se=x.stencil?fs:ir);const I={colorFormat:32856,depthFormat:N,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(I),r.updateRenderState({layers:[f]}),d=new xr(f.textureWidth,f.textureHeight,{format:kn,type:gr,depthTexture:new QM(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const E=e.properties.get(d);E.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),P.setContext(r),P.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Z(k){for(let U=0;U<k.removed.length;U++){const se=k.removed[U],N=v.indexOf(se);N>=0&&(v[N]=null,p[N].dispatchEvent({type:"disconnected",data:se}))}for(let U=0;U<k.added.length;U++){const se=k.added[U];let N=v.indexOf(se);if(N===-1){for(let E=0;E<p.length;E++)if(E>=v.length){v.push(se),N=E;break}else if(v[E]===null){v[E]=se,N=E;break}if(N===-1)break}const I=p[N];I&&I.dispatchEvent({type:"connected",data:se})}}const q=new G,H=new G;function V(k,U,se){q.setFromMatrixPosition(U.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);const N=q.distanceTo(H),I=U.projectionMatrix.elements,E=se.projectionMatrix.elements,B=I[14]/(I[10]-1),F=I[14]/(I[10]+1),O=(I[9]+1)/I[5],ee=(I[9]-1)/I[5],he=(I[8]-1)/I[0],re=(E[8]+1)/E[0],me=B*he,j=B*re,Q=N/(-he+re),$=Q*-he;U.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX($),k.translateZ(Q),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const le=B+Q,D=F+Q,L=me-$,fe=j+(N-$),ge=O*F/D*le,Le=ee*F/D*le;k.projectionMatrix.makePerspective(L,fe,ge,Le,le,D)}function K(k,U){U===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(U.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;M.near=y.near=_.near=k.near,M.far=y.far=_.far=k.far,(b!==M.near||S!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,S=M.far);const U=k.parent,se=M.cameras;K(M,U);for(let I=0;I<se.length;I++)K(se[I],U);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),k.matrix.copy(M.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const N=k.children;for(let I=0,E=N.length;I<E;I++)N[I].updateMatrixWorld(!0);se.length===2?V(M,_,y):M.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)};let ne=null;function Y(k,U){if(u=U.getViewerPose(l||o),m=U,u!==null){const se=u.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let N=!1;se.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let I=0;I<se.length;I++){const E=se[I];let B=null;if(h!==null)B=h.getViewport(E);else{const O=c.getViewSubImage(f,E);B=O.viewport,I===0&&(e.setRenderTargetTextures(d,O.colorTexture,f.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(d))}let F=w[I];F===void 0&&(F=new cn,F.layers.enable(I),F.viewport=new _t,w[I]=F),F.matrix.fromArray(E.transform.matrix),F.projectionMatrix.fromArray(E.projectionMatrix),F.viewport.set(B.x,B.y,B.width,B.height),I===0&&M.matrix.copy(F.matrix),N===!0&&M.cameras.push(F)}}for(let se=0;se<p.length;se++){const N=v[se],I=p[se];N!==null&&I!==void 0&&I.update(N,U,l||o)}ne&&ne(k,U),m=null}const P=new M0;P.setAnimationLoop(Y),this.setAnimationLoop=function(k){ne=k},this.dispose=function(){}}}function e2(n,e){function t(g,d){g.fogColor.value.copy(d.color),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,p,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),c(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&h(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?a(g,d,p,v):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.bumpMap&&(g.bumpMap.value=d.bumpMap,g.bumpScale.value=d.bumpScale,d.side===pn&&(g.bumpScale.value*=-1)),d.displacementMap&&(g.displacementMap.value=d.displacementMap,g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap),d.normalMap&&(g.normalMap.value=d.normalMap,g.normalScale.value.copy(d.normalScale),d.side===pn&&g.normalScale.value.negate()),d.specularMap&&(g.specularMap.value=d.specularMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const p=e.get(d).envMap;if(p&&(g.envMap.value=p,g.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const y=n.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),g.uvTransform.value.copy(v.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uv2Transform.value.copy(_.matrix))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function a(g,d,p,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*p,g.scale.value=v*.5,d.map&&(g.map.value=d.map),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let p;d.map?p=d.map:d.alphaMap&&(p=d.alphaMap),p!==void 0&&(p.matrixAutoUpdate===!0&&p.updateMatrix(),g.uvTransform.value.copy(p.matrix))}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function c(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.roughness.value=d.roughness,g.metalness.value=d.metalness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function h(g,d,p){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),g.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===pn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap)}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){g.referencePosition.value.copy(d.referencePosition),g.nearDistance.value=d.nearDistance,g.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function t2(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function u(v,_){let y=r[v.id];y===void 0&&(x(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",d));const w=_.program;i.updateUBOMapping(v,w);const M=e.render.frame;s[v.id]!==M&&(h(v),s[v.id]=M)}function c(v){const _=f();v.__bindingPointIndex=_;const y=n.createBuffer(),w=v.__size,M=v.usage;return n.bindBuffer(35345,y),n.bufferData(35345,w,M),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(35345,_);for(let M=0,b=y.length;M<b;M++){const S=y[M];if(m(S,M,w)===!0){const A=S.value,z=S.__offset;typeof A=="number"?(S.__data[0]=A,n.bufferSubData(35345,z,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):A.toArray(S.__data),n.bufferSubData(35345,z,S.__data))}}n.bindBuffer(35345,null)}function m(v,_,y){const w=v.value;if(y[_]===void 0)return typeof w=="number"?y[_]=w:y[_]=w.clone(),!0;if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const M=y[_];if(M.equals(w)===!1)return M.copy(w),!0}return!1}function x(v){const _=v.uniforms;let y=0;const w=16;let M=0;for(let b=0,S=_.length;b<S;b++){const A=_[b],z=g(A);if(A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,b>0){M=y%w;const Z=w-M;M!==0&&Z-z.boundary<0&&(y+=w-M,A.__offset=y)}y+=z.storage}return M=y%w,M>0&&(y+=w-M),v.__size=y,v.__cache={},this}function g(v){const _=v.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function d(v){const _=v.target;_.removeEventListener("dispose",d);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}function n2(){const n=gl("canvas");return n.style.display="block",n}function L0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:n2(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vr,this.physicallyCorrectLights=!1,this.toneMapping=ni,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let d=!1,p=0,v=0,_=null,y=-1,w=null;const M=new _t,b=new _t;let S=null,A=e.width,z=e.height,Z=1,q=null,H=null;const V=new _t(0,0,A,z),K=new _t(0,0,A,z);let ne=!1;const Y=new sh;let P=!1,k=!1,U=null;const se=new lt,N=new ce,I=new G,E={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function B(){return _===null?Z:1}let F=t;function O(C,J){for(let ae=0;ae<C.length;ae++){const X=C[ae],ue=e.getContext(X,J);if(ue!==null)return ue}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kf}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Ge,!1),e.addEventListener("webglcontextcreationerror",st,!1),F===null){const J=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&J.shift(),F=O(J,C),F===null)throw O(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ee,he,re,me,j,Q,$,le,D,L,fe,ge,Le,Re,R,T,te,pe,ve,_e,Pe,ie,be,Ee;function Ce(){ee=new dw(F),he=new aw(F,ee,n),ee.init(he),ie=new YM(F,ee,he),re=new qM(F,ee,he),me=new gw,j=new IM,Q=new $M(F,ee,re,j,he,ie,me),$=new uw(g),le=new hw(g),D=new Cy(F,he),be=new sw(F,ee,D,he),L=new pw(F,D,me,be),fe=new yw(F,L,D,me),ve=new _w(F,he,Q),T=new lw(j),ge=new DM(g,$,le,ee,he,be,T),Le=new e2(g,j),Re=new zM,R=new VM(ee,he),pe=new rw(g,$,re,fe,c,o),te=new XM(g,fe,he),Ee=new t2(F,me,he,re),_e=new ow(F,ee,me,he),Pe=new mw(F,ee,me,he),me.programs=ge.programs,g.capabilities=he,g.extensions=ee,g.properties=j,g.renderLists=Re,g.shadowMap=te,g.state=re,g.info=me}Ce();const Te=new KM(g,F);this.xr=Te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(A,z,!1))},this.getSize=function(C){return C.set(A,z)},this.setSize=function(C,J,ae){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,z=J,e.width=Math.floor(C*Z),e.height=Math.floor(J*Z),ae!==!1&&(e.style.width=C+"px",e.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(A*Z,z*Z).floor()},this.setDrawingBufferSize=function(C,J,ae){A=C,z=J,Z=ae,e.width=Math.floor(C*ae),e.height=Math.floor(J*ae),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,J,ae,X){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,J,ae,X),re.viewport(M.copy(V).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,J,ae,X){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,J,ae,X),re.scissor(b.copy(K).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){re.setScissorTest(ne=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){H=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(C=!0,J=!0,ae=!0){let X=0;C&&(X|=16384),J&&(X|=256),ae&&(X|=1024),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Ge,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Re.dispose(),R.dispose(),j.dispose(),$.dispose(),le.dispose(),fe.dispose(),be.dispose(),Ee.dispose(),ge.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ve),Te.removeEventListener("sessionend",mt),U&&(U.dispose(),U=null),ot.stop()};function Ne(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const C=me.autoReset,J=te.enabled,ae=te.autoUpdate,X=te.needsUpdate,ue=te.type;Ce(),me.autoReset=C,te.enabled=J,te.autoUpdate=ae,te.needsUpdate=X,te.type=ue}function st(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function W(C){const J=C.target;J.removeEventListener("dispose",W),we(J)}function we(C){oe(C),j.remove(C)}function oe(C){const J=j.get(C).programs;J!==void 0&&(J.forEach(function(ae){ge.releaseProgram(ae)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ae,X,ue,Ae){J===null&&(J=E);const De=ue.isMesh&&ue.matrixWorld.determinant()<0,ze=G0(C,J,ae,X,ue);re.setMaterial(X,De);let Ie=ae.index;const je=ae.attributes.position;if(Ie===null){if(je===void 0||je.count===0)return}else if(Ie.count===0)return;let Oe=1;X.wireframe===!0&&(Ie=L.getWireframeAttribute(ae),Oe=2),be.setup(ue,X,ze,ae,Ie);let Ue,nt=_e;Ie!==null&&(Ue=D.get(Ie),nt=Pe,nt.setIndex(Ue));const Hi=Ie!==null?Ie.count:je.count,Mr=ae.drawRange.start*Oe,Er=ae.drawRange.count*Oe,Rn=Ae!==null?Ae.start*Oe:0,He=Ae!==null?Ae.count*Oe:1/0,Tr=Math.max(Mr,Rn),ut=Math.min(Hi,Mr+Er,Rn+He)-1,sn=Math.max(0,ut-Tr+1);if(sn!==0){if(ue.isMesh)X.wireframe===!0?(re.setLineWidth(X.wireframeLinewidth*B()),nt.setMode(1)):nt.setMode(4);else if(ue.isLine){let ci=X.linewidth;ci===void 0&&(ci=1),re.setLineWidth(ci*B()),ue.isLineSegments?nt.setMode(1):ue.isLineLoop?nt.setMode(2):nt.setMode(3)}else ue.isPoints?nt.setMode(0):ue.isSprite&&nt.setMode(4);if(ue.isInstancedMesh)nt.renderInstances(Tr,sn,ue.count);else if(ae.isInstancedBufferGeometry){const ci=Math.min(ae.instanceCount,ae._maxInstanceCount);nt.renderInstances(Tr,sn,ci)}else nt.render(Tr,sn)}},this.compile=function(C,J){function ae(X,ue,Ae){X.transparent===!0&&X.side===hn?(X.side=pn,X.needsUpdate=!0,Go(X,ue,Ae),X.side=ys,X.needsUpdate=!0,Go(X,ue,Ae),X.side=hn):Go(X,ue,Ae)}h=R.get(C),h.init(),x.push(h),C.traverseVisible(function(X){X.isLight&&X.layers.test(J.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(g.physicallyCorrectLights),C.traverse(function(X){const ue=X.material;if(ue)if(Array.isArray(ue))for(let Ae=0;Ae<ue.length;Ae++){const De=ue[Ae];ae(De,C,X)}else ae(ue,C,X)}),x.pop(),h=null};let Se=null;function ye(C){Se&&Se(C)}function Ve(){ot.stop()}function mt(){ot.start()}const ot=new M0;ot.setAnimationLoop(ye),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(C){Se=C,Te.setAnimationLoop(C),C===null?ot.stop():ot.start()},Te.addEventListener("sessionstart",Ve),Te.addEventListener("sessionend",mt),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(J),J=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,J,_),h=R.get(C,x.length),h.init(),x.push(h),se.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Y.setFromProjectionMatrix(se),k=this.localClippingEnabled,P=T.init(this.clippingPlanes,k,J),f=Re.get(C,m.length),f.init(),m.push(f),ui(C,J,0,g.sortObjects),f.finish(),g.sortObjects===!0&&f.sort(q,H),P===!0&&T.beginShadows();const ae=h.state.shadowsArray;if(te.render(ae,C,J),P===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(f,C),h.setupLights(g.physicallyCorrectLights),J.isArrayCamera){const X=J.cameras;for(let ue=0,Ae=X.length;ue<Ae;ue++){const De=X[ue];tt(f,C,De,De.viewport)}}else tt(f,C,J);_!==null&&(Q.updateMultisampleRenderTarget(_),Q.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(g,C,J),be.resetDefaultState(),y=-1,w=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ui(C,J,ae,X){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){X&&I.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const De=fe.update(C),ze=C.material;ze.visible&&f.push(C,De,ze,ae,I.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==me.render.frame&&(C.skeleton.update(),C.skeleton.frame=me.render.frame),!C.frustumCulled||Y.intersectsObject(C))){X&&I.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const De=fe.update(C),ze=C.material;if(Array.isArray(ze)){const Ie=De.groups;for(let je=0,Oe=Ie.length;je<Oe;je++){const Ue=Ie[je],nt=ze[Ue.materialIndex];nt&&nt.visible&&f.push(C,De,nt,ae,I.z,Ue)}}else ze.visible&&f.push(C,De,ze,ae,I.z,null)}}const Ae=C.children;for(let De=0,ze=Ae.length;De<ze;De++)ui(Ae[De],J,ae,X)}function tt(C,J,ae,X){const ue=C.opaque,Ae=C.transmissive,De=C.transparent;h.setupLightsView(ae),Ae.length>0&&Gn(ue,J,ae),X&&re.viewport(M.copy(X)),ue.length>0&&rn(ue,J,ae),Ae.length>0&&rn(Ae,J,ae),De.length>0&&rn(De,J,ae),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Gn(C,J,ae){const X=he.isWebGL2;U===null&&(U=new xr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?Lo:gr,minFilter:zl,samples:X&&s===!0?4:0})),g.getDrawingBufferSize(N),X?U.setSize(N.x,N.y):U.setSize(Kc(N.x),Kc(N.y));const ue=g.getRenderTarget();g.setRenderTarget(U),g.clear();const Ae=g.toneMapping;g.toneMapping=ni,rn(C,J,ae),g.toneMapping=Ae,Q.updateMultisampleRenderTarget(U),Q.updateRenderTargetMipmap(U),g.setRenderTarget(ue)}function rn(C,J,ae){const X=J.isScene===!0?J.overrideMaterial:null;for(let ue=0,Ae=C.length;ue<Ae;ue++){const De=C[ue],ze=De.object,Ie=De.geometry,je=X===null?De.material:X,Oe=De.group;ze.layers.test(ae.layers)&&V0(ze,J,ae,Ie,je,Oe)}}function V0(C,J,ae,X,ue,Ae){C.onBeforeRender(g,J,ae,X,ue,Ae),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(g,J,ae,X,C,Ae),ue.transparent===!0&&ue.side===hn?(ue.side=pn,ue.needsUpdate=!0,g.renderBufferDirect(ae,J,X,ue,C,Ae),ue.side=ys,ue.needsUpdate=!0,g.renderBufferDirect(ae,J,X,ue,C,Ae),ue.side=hn):g.renderBufferDirect(ae,J,X,ue,C,Ae),C.onAfterRender(g,J,ae,X,ue,Ae)}function Go(C,J,ae){J.isScene!==!0&&(J=E);const X=j.get(C),ue=h.state.lights,Ae=h.state.shadowsArray,De=ue.state.version,ze=ge.getParameters(C,ue.state,Ae,J,ae),Ie=ge.getProgramCacheKey(ze);let je=X.programs;X.environment=C.isMeshStandardMaterial?J.environment:null,X.fog=J.fog,X.envMap=(C.isMeshStandardMaterial?le:$).get(C.envMap||X.environment),je===void 0&&(C.addEventListener("dispose",W),je=new Map,X.programs=je);let Oe=je.get(Ie);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===De)return ph(C,ze),Oe}else ze.uniforms=ge.getUniforms(C),C.onBuild(ae,ze,g),C.onBeforeCompile(ze,g),Oe=ge.acquireProgram(ze,Ie),je.set(Ie,Oe),X.uniforms=ze.uniforms;const Ue=X.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=T.uniform),ph(C,ze),X.needsLights=W0(C),X.lightsStateVersion=De,X.needsLights&&(Ue.ambientLightColor.value=ue.state.ambient,Ue.lightProbe.value=ue.state.probe,Ue.directionalLights.value=ue.state.directional,Ue.directionalLightShadows.value=ue.state.directionalShadow,Ue.spotLights.value=ue.state.spot,Ue.spotLightShadows.value=ue.state.spotShadow,Ue.rectAreaLights.value=ue.state.rectArea,Ue.ltc_1.value=ue.state.rectAreaLTC1,Ue.ltc_2.value=ue.state.rectAreaLTC2,Ue.pointLights.value=ue.state.point,Ue.pointLightShadows.value=ue.state.pointShadow,Ue.hemisphereLights.value=ue.state.hemi,Ue.directionalShadowMap.value=ue.state.directionalShadowMap,Ue.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Ue.spotShadowMap.value=ue.state.spotShadowMap,Ue.spotLightMatrix.value=ue.state.spotLightMatrix,Ue.spotLightMap.value=ue.state.spotLightMap,Ue.pointShadowMap.value=ue.state.pointShadowMap,Ue.pointShadowMatrix.value=ue.state.pointShadowMatrix);const nt=Oe.getUniforms(),Hi=ja.seqWithValue(nt.seq,Ue);return X.currentProgram=Oe,X.uniformsList=Hi,Oe}function ph(C,J){const ae=j.get(C);ae.outputEncoding=J.outputEncoding,ae.instancing=J.instancing,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function G0(C,J,ae,X,ue){J.isScene!==!0&&(J=E),Q.resetTextureUnits();const Ae=J.fog,De=X.isMeshStandardMaterial?J.environment:null,ze=_===null?g.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:vr,Ie=(X.isMeshStandardMaterial?le:$).get(X.envMap||De),je=X.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Oe=!!X.normalMap&&!!ae.attributes.tangent,Ue=!!ae.morphAttributes.position,nt=!!ae.morphAttributes.normal,Hi=!!ae.morphAttributes.color,Mr=X.toneMapped?g.toneMapping:ni,Er=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Rn=Er!==void 0?Er.length:0,He=j.get(X),Tr=h.state.lights;if(P===!0&&(k===!0||C!==w)){const qt=C===w&&X.id===y;T.setState(X,C,qt)}let ut=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Tr.state.version||He.outputEncoding!==ze||ue.isInstancedMesh&&He.instancing===!1||!ue.isInstancedMesh&&He.instancing===!0||ue.isSkinnedMesh&&He.skinning===!1||!ue.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ie||X.fog===!0&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==T.numPlanes||He.numIntersection!==T.numIntersection)||He.vertexAlphas!==je||He.vertexTangents!==Oe||He.morphTargets!==Ue||He.morphNormals!==nt||He.morphColors!==Hi||He.toneMapping!==Mr||he.isWebGL2===!0&&He.morphTargetsCount!==Rn)&&(ut=!0):(ut=!0,He.__version=X.version);let sn=He.currentProgram;ut===!0&&(sn=Go(X,J,ue));let ci=!1,Is=!1,Vl=!1;const Rt=sn.getUniforms(),Wi=He.uniforms;if(re.useProgram(sn.program)&&(ci=!0,Is=!0,Vl=!0),X.id!==y&&(y=X.id,Is=!0),ci||w!==C){if(Rt.setValue(F,"projectionMatrix",C.projectionMatrix),he.logarithmicDepthBuffer&&Rt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,Is=!0,Vl=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const qt=Rt.map.cameraPosition;qt!==void 0&&qt.setValue(F,I.setFromMatrixPosition(C.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ue.isSkinnedMesh)&&Rt.setValue(F,"viewMatrix",C.matrixWorldInverse)}if(ue.isSkinnedMesh){Rt.setOptional(F,ue,"bindMatrix"),Rt.setOptional(F,ue,"bindMatrixInverse");const qt=ue.skeleton;qt&&(he.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Rt.setValue(F,"boneTexture",qt.boneTexture,Q),Rt.setValue(F,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gl=ae.morphAttributes;if((Gl.position!==void 0||Gl.normal!==void 0||Gl.color!==void 0&&he.isWebGL2===!0)&&ve.update(ue,ae,X,sn),(Is||He.receiveShadow!==ue.receiveShadow)&&(He.receiveShadow=ue.receiveShadow,Rt.setValue(F,"receiveShadow",ue.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Wi.envMap.value=Ie,Wi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Is&&(Rt.setValue(F,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&H0(Wi,Vl),Ae&&X.fog===!0&&Le.refreshFogUniforms(Wi,Ae),Le.refreshMaterialUniforms(Wi,X,Z,z,U),ja.upload(F,He.uniformsList,Wi,Q)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ja.upload(F,He.uniformsList,Wi,Q),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(F,"center",ue.center),Rt.setValue(F,"modelViewMatrix",ue.modelViewMatrix),Rt.setValue(F,"normalMatrix",ue.normalMatrix),Rt.setValue(F,"modelMatrix",ue.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qt=X.uniformsGroups;for(let Hl=0,j0=qt.length;Hl<j0;Hl++)if(he.isWebGL2){const mh=qt[Hl];Ee.update(mh,sn),Ee.bind(mh,sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sn}function H0(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function W0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,J,ae){j.get(C.texture).__webglTexture=J,j.get(C.depthTexture).__webglTexture=ae;const X=j.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=ae===void 0,X.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,J){const ae=j.get(C);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,ae=0){_=C,p=J,v=ae;let X=!0;if(C){const Ie=j.get(C);Ie.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(36160,null),X=!1):Ie.__webglFramebuffer===void 0?Q.setupRenderTarget(C):Ie.__hasExternalTextures&&Q.rebindTextures(C,j.get(C.texture).__webglTexture,j.get(C.depthTexture).__webglTexture)}let ue=null,Ae=!1,De=!1;if(C){const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture)&&(De=!0);const je=j.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ue=je[J],Ae=!0):he.isWebGL2&&C.samples>0&&Q.useMultisampledRTT(C)===!1?ue=j.get(C).__webglMultisampledFramebuffer:ue=je,M.copy(C.viewport),b.copy(C.scissor),S=C.scissorTest}else M.copy(V).multiplyScalar(Z).floor(),b.copy(K).multiplyScalar(Z).floor(),S=ne;if(re.bindFramebuffer(36160,ue)&&he.drawBuffers&&X&&re.drawBuffers(C,ue),re.viewport(M),re.scissor(b),re.setScissorTest(S),Ae){const Ie=j.get(C.texture);F.framebufferTexture2D(36160,36064,34069+J,Ie.__webglTexture,ae)}else if(De){const Ie=j.get(C.texture),je=J||0;F.framebufferTextureLayer(36160,36064,Ie.__webglTexture,ae||0,je)}y=-1},this.readRenderTargetPixels=function(C,J,ae,X,ue,Ae,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){re.bindFramebuffer(36160,ze);try{const Ie=C.texture,je=Ie.format,Oe=Ie.type;if(je!==kn&&ie.convert(je)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Oe===Lo&&(ee.has("EXT_color_buffer_half_float")||he.isWebGL2&&ee.has("EXT_color_buffer_float"));if(Oe!==gr&&ie.convert(Oe)!==F.getParameter(35738)&&!(Oe===rr&&(he.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-X&&ae>=0&&ae<=C.height-ue&&F.readPixels(J,ae,X,ue,ie.convert(je),ie.convert(Oe),Ae)}finally{const Ie=_!==null?j.get(_).__webglFramebuffer:null;re.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(C,J,ae=0){const X=Math.pow(2,-ae),ue=Math.floor(J.image.width*X),Ae=Math.floor(J.image.height*X);Q.setTexture2D(J,0),F.copyTexSubImage2D(3553,ae,0,0,C.x,C.y,ue,Ae),re.unbindTexture()},this.copyTextureToTexture=function(C,J,ae,X=0){const ue=J.image.width,Ae=J.image.height,De=ie.convert(ae.format),ze=ie.convert(ae.type);Q.setTexture2D(ae,0),F.pixelStorei(37440,ae.flipY),F.pixelStorei(37441,ae.premultiplyAlpha),F.pixelStorei(3317,ae.unpackAlignment),J.isDataTexture?F.texSubImage2D(3553,X,C.x,C.y,ue,Ae,De,ze,J.image.data):J.isCompressedTexture?F.compressedTexSubImage2D(3553,X,C.x,C.y,J.mipmaps[0].width,J.mipmaps[0].height,De,J.mipmaps[0].data):F.texSubImage2D(3553,X,C.x,C.y,De,ze,J.image),X===0&&ae.generateMipmaps&&F.generateMipmap(3553),re.unbindTexture()},this.copyTextureToTexture3D=function(C,J,ae,X,ue=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=C.max.x-C.min.x+1,De=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,Ie=ie.convert(X.format),je=ie.convert(X.type);let Oe;if(X.isData3DTexture)Q.setTexture3D(X,0),Oe=32879;else if(X.isDataArrayTexture)Q.setTexture2DArray(X,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,X.flipY),F.pixelStorei(37441,X.premultiplyAlpha),F.pixelStorei(3317,X.unpackAlignment);const Ue=F.getParameter(3314),nt=F.getParameter(32878),Hi=F.getParameter(3316),Mr=F.getParameter(3315),Er=F.getParameter(32877),Rn=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;F.pixelStorei(3314,Rn.width),F.pixelStorei(32878,Rn.height),F.pixelStorei(3316,C.min.x),F.pixelStorei(3315,C.min.y),F.pixelStorei(32877,C.min.z),ae.isDataTexture||ae.isData3DTexture?F.texSubImage3D(Oe,ue,J.x,J.y,J.z,Ae,De,ze,Ie,je,Rn.data):ae.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Oe,ue,J.x,J.y,J.z,Ae,De,ze,Ie,Rn.data)):F.texSubImage3D(Oe,ue,J.x,J.y,J.z,Ae,De,ze,Ie,je,Rn),F.pixelStorei(3314,Ue),F.pixelStorei(32878,nt),F.pixelStorei(3316,Hi),F.pixelStorei(3315,Mr),F.pixelStorei(32877,Er),ue===0&&X.generateMipmaps&&F.generateMipmap(Oe),re.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Q.setTextureCube(C,0):C.isData3DTexture?Q.setTexture3D(C,0):C.isDataArrayTexture?Q.setTexture2DArray(C,0):Q.setTexture2D(C,0),re.unbindTexture()},this.resetState=function(){p=0,v=0,_=null,re.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class i2 extends L0{}i2.prototype.isWebGL1Renderer=!0;class r2 extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,m=(o-c)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ce:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new G,r=[],s=[],o=[],a=new G,l=new lt;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new G)}s[0]=new G,o[0]=new G;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(It(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(It(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lh extends Vn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ce,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=u-this.aY;l=h*c-m*f+this.aX,u=h*f+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class s2 extends lh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uh(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,m*=c,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ca=new G,$u=new uh,Yu=new uh,Zu=new uh;class o2 extends Vn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new G){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Ca.subVectors(r[0],r[1]).add(r[0]),u=Ca);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Ca.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(c),m);g<1e-4&&(g=1),x<1e-4&&(x=g),d<1e-4&&(d=g),$u.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,x,g,d),Yu.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,x,g,d),Zu.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,x,g,d)}else this.curveType==="catmullrom"&&($u.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Yu.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),Zu.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set($u.calc(l),Yu.calc(l),Zu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fp(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function a2(n,e){const t=1-n;return t*t*e}function l2(n,e){return 2*(1-n)*n*e}function u2(n,e){return n*n*e}function lo(n,e,t,i){return a2(n,e)+l2(n,t)+u2(n,i)}function c2(n,e){const t=1-n;return t*t*t*e}function f2(n,e){const t=1-n;return 3*t*t*n*e}function h2(n,e){return 3*(1-n)*n*n*e}function d2(n,e){return n*n*n*e}function uo(n,e,t,i,r){return c2(n,e)+f2(n,t)+h2(n,i)+d2(n,r)}class P0 extends Vn{constructor(e=new ce,t=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ce){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(uo(e,r.x,s.x,o.x,a.x),uo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class p2 extends Vn{constructor(e=new G,t=new G,i=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new G){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(uo(e,r.x,s.x,o.x,a.x),uo(e,r.y,s.y,o.y,a.y),uo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ch extends Vn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new ce;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m2 extends Vn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R0 extends Vn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(lo(e,r.x,s.x,o.x),lo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g2 extends Vn{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(lo(e,r.x,s.x,o.x),lo(e,r.y,s.y,o.y),lo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D0 extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Fp(a,l.x,u.x,c.x,f.x),Fp(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var I0=Object.freeze({__proto__:null,ArcCurve:s2,CatmullRomCurve3:o2,CubicBezierCurve:P0,CubicBezierCurve3:p2,EllipseCurve:lh,LineCurve:ch,LineCurve3:m2,QuadraticBezierCurve:R0,QuadraticBezierCurve3:g2,SplineCurve:D0});class v2 extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ch(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new I0[r.type]().fromJSON(r))}return this}}class hs extends v2{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ch(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new R0(this.currentPoint.clone(),new ce(e,t),new ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new P0(this.currentPoint.clone(),new ce(e,t),new ce(i,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new D0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new lh(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class co extends hs{constructor(e){super(e),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new hs().fromJSON(r))}return this}}const x2={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=N0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,m;if(i&&(s=M2(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let x=t;x<r;x+=t)f=n[x],h=n[x+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);m=Math.max(u-a,c-l),m=m!==0?1/m:0}return Po(s,o,t,a,l,m),o}};function N0(n,e,t,i,r){let s,o;if(r===N2(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Op(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Op(s,n[s],n[s+1],o);return o&&Fl(o,o.next)&&(Do(o),o=o.next),o}function Ui(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fl(t,t.next)||Qe(t.prev,t,t.next)===0)){if(Do(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Po(n,e,t,i,r,s,o){if(!n)return;!o&&s&&A2(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?y2(n,i,r,s):_2(n)){e.push(l.i/t),e.push(n.i/t),e.push(u.i/t),Do(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=S2(Ui(n),e,t),Po(n,e,t,i,r,s,2)):o===2&&w2(n,e,t,i,r,s):Po(Ui(n),e,t,i,r,s,1);break}}}function _2(n){const e=n.prev,t=n,i=n.next;if(Qe(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(is(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Qe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function y2(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Qe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,u=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,c=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,f=tf(a,l,e,t,i),h=tf(u,c,e,t,i);let m=n.prevZ,x=n.nextZ;for(;m&&m.z>=f&&x&&x.z<=h;){if(m!==n.prev&&m!==n.next&&is(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Qe(m.prev,m,m.next)>=0||(m=m.prevZ,x!==n.prev&&x!==n.next&&is(r.x,r.y,s.x,s.y,o.x,o.y,x.x,x.y)&&Qe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=f;){if(m!==n.prev&&m!==n.next&&is(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Qe(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=h;){if(x!==n.prev&&x!==n.next&&is(r.x,r.y,s.x,s.y,o.x,o.y,x.x,x.y)&&Qe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function S2(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Fl(r,s)&&z0(r,i,i.next,s)&&Ro(r,s)&&Ro(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),Do(i),Do(i.next),i=n=s),i=i.next}while(i!==n);return Ui(i)}function w2(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&R2(o,a)){let l=k0(o,a);o=Ui(o,o.next),l=Ui(l,l.next),Po(o,e,t,i,r,s),Po(l,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function M2(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=N0(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(P2(u));for(r.sort(E2),s=0;s<r.length;s++)T2(r[s],t),t=Ui(t,t.next);return t}function E2(n,e){return n.x-e.x}function T2(n,e){if(e=b2(n,e),e){const t=k0(e,n);Ui(e,e.next),Ui(t,t.next)}}function b2(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s){if(s=h,h===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,l=o.x,u=o.y;let c=1/0,f;t=o;do i>=t.x&&t.x>=l&&i!==t.x&&is(r<u?i:s,r,l,u,r<u?s:i,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(i-t.x),Ro(t,n)&&(f<c||f===c&&(t.x>o.x||t.x===o.x&&C2(o,t)))&&(o=t,c=f)),t=t.next;while(t!==a);return o}function C2(n,e){return Qe(n.prev,n,e.prev)<0&&Qe(e.next,n,n.next)<0}function A2(n,e,t,i){let r=n;do r.z===null&&(r.z=tf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,L2(r)}function L2(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function tf(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function P2(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function is(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function R2(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!D2(n,e)&&(Ro(n,e)&&Ro(e,n)&&I2(n,e)&&(Qe(n.prev,n,e.prev)||Qe(n,e.prev,e))||Fl(n,e)&&Qe(n.prev,n,n.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fl(n,e){return n.x===e.x&&n.y===e.y}function z0(n,e,t,i){const r=La(Qe(n,e,t)),s=La(Qe(n,e,i)),o=La(Qe(t,i,n)),a=La(Qe(t,i,e));return!!(r!==s&&o!==a||r===0&&Aa(n,t,e)||s===0&&Aa(n,i,e)||o===0&&Aa(t,n,i)||a===0&&Aa(t,e,i))}function Aa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function La(n){return n>0?1:n<0?-1:0}function D2(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&z0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ro(n,e){return Qe(n.prev,n,n.next)<0?Qe(n,e,n.next)>=0&&Qe(n,n.prev,e)>=0:Qe(n,e,n.prev)<0||Qe(n,n.next,e)<0}function I2(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function k0(n,e){const t=new nf(n.i,n.x,n.y),i=new nf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Op(n,e,t,i){const r=new nf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Do(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function N2(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class cr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Up(e),Bp(i,e);let o=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Bp(i,t[l]);const a=x2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Up(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ol extends Bn{constructor(e=new co([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new kt(r,3)),this.setAttribute("uv",new kt(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:z2;let _,y=!1,w,M,b,S;p&&(_=p.getSpacedPoints(c),y=!0,h=!1,w=p.computeFrenetFrames(c,!1),M=new G,b=new G,S=new G),h||(d=0,m=0,x=0,g=0);const A=a.extractPoints(u);let z=A.shape;const Z=A.holes;if(!cr.isClockWise(z)){z=z.reverse();for(let j=0,Q=Z.length;j<Q;j++){const $=Z[j];cr.isClockWise($)&&(Z[j]=$.reverse())}}const H=cr.triangulateShape(z,Z),V=z;for(let j=0,Q=Z.length;j<Q;j++){const $=Z[j];z=z.concat($)}function K(j,Q,$){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().multiplyScalar($).add(j)}const ne=z.length,Y=H.length;function P(j,Q,$){let le,D,L;const fe=j.x-Q.x,ge=j.y-Q.y,Le=$.x-j.x,Re=$.y-j.y,R=fe*fe+ge*ge,T=fe*Re-ge*Le;if(Math.abs(T)>Number.EPSILON){const te=Math.sqrt(R),pe=Math.sqrt(Le*Le+Re*Re),ve=Q.x-ge/te,_e=Q.y+fe/te,Pe=$.x-Re/pe,ie=$.y+Le/pe,be=((Pe-ve)*Re-(ie-_e)*Le)/(fe*Re-ge*Le);le=ve+fe*be-j.x,D=_e+ge*be-j.y;const Ee=le*le+D*D;if(Ee<=2)return new ce(le,D);L=Math.sqrt(Ee/2)}else{let te=!1;fe>Number.EPSILON?Le>Number.EPSILON&&(te=!0):fe<-Number.EPSILON?Le<-Number.EPSILON&&(te=!0):Math.sign(ge)===Math.sign(Re)&&(te=!0),te?(le=-ge,D=fe,L=Math.sqrt(R)):(le=fe,D=ge,L=Math.sqrt(R/2))}return new ce(le/L,D/L)}const k=[];for(let j=0,Q=V.length,$=Q-1,le=j+1;j<Q;j++,$++,le++)$===Q&&($=0),le===Q&&(le=0),k[j]=P(V[j],V[$],V[le]);const U=[];let se,N=k.concat();for(let j=0,Q=Z.length;j<Q;j++){const $=Z[j];se=[];for(let le=0,D=$.length,L=D-1,fe=le+1;le<D;le++,L++,fe++)L===D&&(L=0),fe===D&&(fe=0),se[le]=P($[le],$[L],$[fe]);U.push(se),N=N.concat(se)}for(let j=0;j<d;j++){const Q=j/d,$=m*Math.cos(Q*Math.PI/2),le=x*Math.sin(Q*Math.PI/2)+g;for(let D=0,L=V.length;D<L;D++){const fe=K(V[D],k[D],le);O(fe.x,fe.y,-$)}for(let D=0,L=Z.length;D<L;D++){const fe=Z[D];se=U[D];for(let ge=0,Le=fe.length;ge<Le;ge++){const Re=K(fe[ge],se[ge],le);O(Re.x,Re.y,-$)}}}const I=x+g;for(let j=0;j<ne;j++){const Q=h?K(z[j],N[j],I):z[j];y?(b.copy(w.normals[0]).multiplyScalar(Q.x),M.copy(w.binormals[0]).multiplyScalar(Q.y),S.copy(_[0]).add(b).add(M),O(S.x,S.y,S.z)):O(Q.x,Q.y,0)}for(let j=1;j<=c;j++)for(let Q=0;Q<ne;Q++){const $=h?K(z[Q],N[Q],I):z[Q];y?(b.copy(w.normals[j]).multiplyScalar($.x),M.copy(w.binormals[j]).multiplyScalar($.y),S.copy(_[j]).add(b).add(M),O(S.x,S.y,S.z)):O($.x,$.y,f/c*j)}for(let j=d-1;j>=0;j--){const Q=j/d,$=m*Math.cos(Q*Math.PI/2),le=x*Math.sin(Q*Math.PI/2)+g;for(let D=0,L=V.length;D<L;D++){const fe=K(V[D],k[D],le);O(fe.x,fe.y,f+$)}for(let D=0,L=Z.length;D<L;D++){const fe=Z[D];se=U[D];for(let ge=0,Le=fe.length;ge<Le;ge++){const Re=K(fe[ge],se[ge],le);y?O(Re.x,Re.y+_[c-1].y,_[c-1].x+$):O(Re.x,Re.y,f+$)}}}E(),B();function E(){const j=r.length/3;if(h){let Q=0,$=ne*Q;for(let le=0;le<Y;le++){const D=H[le];ee(D[2]+$,D[1]+$,D[0]+$)}Q=c+d*2,$=ne*Q;for(let le=0;le<Y;le++){const D=H[le];ee(D[0]+$,D[1]+$,D[2]+$)}}else{for(let Q=0;Q<Y;Q++){const $=H[Q];ee($[2],$[1],$[0])}for(let Q=0;Q<Y;Q++){const $=H[Q];ee($[0]+ne*c,$[1]+ne*c,$[2]+ne*c)}}i.addGroup(j,r.length/3-j,0)}function B(){const j=r.length/3;let Q=0;F(V,Q),Q+=V.length;for(let $=0,le=Z.length;$<le;$++){const D=Z[$];F(D,Q),Q+=D.length}i.addGroup(j,r.length/3-j,1)}function F(j,Q){let $=j.length;for(;--$>=0;){const le=$;let D=$-1;D<0&&(D=j.length-1);for(let L=0,fe=c+d*2;L<fe;L++){const ge=ne*L,Le=ne*(L+1),Re=Q+le+ge,R=Q+D+ge,T=Q+D+Le,te=Q+le+Le;he(Re,R,T,te)}}}function O(j,Q,$){l.push(j),l.push(Q),l.push($)}function ee(j,Q,$){re(j),re(Q),re($);const le=r.length/3,D=v.generateTopUV(i,r,le-3,le-2,le-1);me(D[0]),me(D[1]),me(D[2])}function he(j,Q,$,le){re(j),re(Q),re(le),re(Q),re($),re(le);const D=r.length/3,L=v.generateSideWallUV(i,r,D-6,D-3,D-2,D-1);me(L[0]),me(L[1]),me(L[3]),me(L[1]),me(L[2]),me(L[3])}function re(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function me(j){s.push(j.x),s.push(j.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return k2(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new I0[r.type]().fromJSON(r)),new Ol(i,e.options)}}const z2={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ce(s,o),new ce(a,l),new ce(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],m=e[r*3+1],x=e[r*3+2],g=e[s*3],d=e[s*3+1],p=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ce(o,1-l),new ce(u,1-f),new ce(h,1-x),new ce(g,1-p)]:[new ce(a,1-l),new ce(c,1-f),new ce(m,1-x),new ce(d,1-p)]}};function k2(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class vl extends Bn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new G,h=new G,m=[],x=[],g=[],d=[];for(let p=0;p<=i;p++){const v=[],_=p/i;let y=0;p==0&&o==0?y=.5/t:p==i&&l==Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const M=w/t;f.x=-e*Math.cos(r+M*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+M*s)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),d.push(M+y,1-_),v.push(u++)}c.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const _=c[p][v+1],y=c[p][v],w=c[p+1][v],M=c[p+1][v+1];(p!==0||o>0)&&m.push(_,y,M),(p!==i-1||l<Math.PI)&&m.push(y,w,M)}this.setIndex(m),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(d,2))}static fromJSON(e){return new vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class F2 extends Ps{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends Ps{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new We(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class O2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],x=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const U2=new O2;class Ul{constructor(e){this.manager=e!==void 0?e:U2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const $n={};class B2 extends Error{constructor(e,t){super(e),this.response=t}}class fh extends Ul{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vp.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:i,onError:r});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=$n[e],f=u.body.getReader(),h=u.headers.get("Content-Length"),m=h?parseInt(h):0,x=m!==0;let g=0;const d=new ReadableStream({start(p){v();function v(){f.read().then(({done:_,value:y})=>{if(_)p.close();else{g+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:m});for(let M=0,b=c.length;M<b;M++){const S=c[M];S.onProgress&&S.onProgress(w)}p.enqueue(y),v()}})}}});return new Response(d)}else throw new B2(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return u.arrayBuffer().then(x=>m.decode(x))}}}).then(u=>{Vp.add(e,u);const c=$n[e];delete $n[e];for(let f=0,h=c.length;f<h;f++){const m=c[f];m.onLoad&&m.onLoad(u)}}).catch(u=>{const c=$n[e];if(c===void 0)throw this.manager.itemError(e),u;delete $n[e];for(let f=0,h=c.length;f<h;f++){const m=c[f];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class V2 extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gp=new lt,Hp=new G,Wp=new G;class G2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Gp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class H2 extends G2{constructor(){super(new E0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ju extends V2{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DefaultUp),this.updateMatrix(),this.target=new St,this.shadow=new H2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let Pa;const F0={getContext:function(){return Pa===void 0&&(Pa=new(window.AudioContext||window.webkitAudioContext)),Pa},setContext:function(n){Pa=n}};class W2 extends Ul{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new fh(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);F0.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}}class j2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jp(){return(typeof performance>"u"?Date:performance).now()}const $i=new G,Xp=new Ls,X2=new G,Yi=new G;class q2 extends St{constructor(){super(),this.type="AudioListener",this.context=F0.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new j2}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose($i,Xp,X2),Yi.set(0,0,-1).applyQuaternion(Xp),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime($i.x,r),t.positionY.linearRampToValueAtTime($i.y,r),t.positionZ.linearRampToValueAtTime($i.z,r),t.forwardX.linearRampToValueAtTime(Yi.x,r),t.forwardY.linearRampToValueAtTime(Yi.y,r),t.forwardZ.linearRampToValueAtTime(Yi.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition($i.x,$i.y,$i.z),t.setOrientation(Yi.x,Yi.y,Yi.z,i.x,i.y,i.z)}}class Vr extends St{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class O0{constructor(e,t,i=0,r=1/0){this.ray=new x0(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return rf(e,this,i,t),i.sort(qp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rf(e[r],this,i,t);return i.sort(qp),i}}function qp(n,e){return n.distance-e.distance}function rf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)rf(r[s],e,t,!0)}}const $p=new ce;class $2{constructor(e=new ce(1/0,1/0),t=new ce(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$p.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $p.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class yi{constructor(){this.type="ShapePath",this.color=new We,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new hs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const v=[];for(let _=0,y=p.length;_<y;_++){const w=p[_],M=new co;M.curves=w.curves,v.push(M)}return v}function i(p,v){const _=v.length;let y=!1;for(let w=_-1,M=0;M<_;w=M++){let b=v[w],S=v[M],A=S.x-b.x,z=S.y-b.y;if(Math.abs(z)>Number.EPSILON){if(z<0&&(b=v[M],A=-A,S=v[w],z=-z),p.y<b.y||p.y>S.y)continue;if(p.y===b.y){if(p.x===b.x)return!0}else{const Z=z*(p.x-b.x)-A*(p.y-b.y);if(Z===0)return!0;if(Z<0)continue;y=!y}}else{if(p.y!==b.y)continue;if(S.x<=p.x&&p.x<=b.x||b.x<=p.x&&p.x<=S.x)return!0}}return y}const r=cr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new co,l.curves=a.curves,u.push(l),u;let c=!r(s[0].getPoints());c=e?!c:c;const f=[],h=[];let m=[],x=0,g;h[x]=void 0,m[x]=[];for(let p=0,v=s.length;p<v;p++)a=s[p],g=a.getPoints(),o=r(g),o=e?!o:o,o?(!c&&h[x]&&x++,h[x]={s:new co,p:g},h[x].s.curves=a.curves,c&&x++,m[x]=[]):m[x].push({h:a,p:g[0]});if(!h[0])return t(s);if(h.length>1){let p=!1,v=0;for(let _=0,y=h.length;_<y;_++)f[_]=[];for(let _=0,y=h.length;_<y;_++){const w=m[_];for(let M=0;M<w.length;M++){const b=w[M];let S=!0;for(let A=0;A<h.length;A++)i(b.p,h[A].p)&&(_!==A&&v++,S?(S=!1,f[A].push(b)):p=!0);S&&f[_].push(b)}}v>0&&p===!1&&(m=f)}let d;for(let p=0,v=h.length;p<v;p++){l=h[p].s,u.push(l),d=m[p];for(let _=0,y=d.length;_<y;_++)l.holes.push(d[_].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);const Gr=new Mi,_i=new O0,js=new ce,Yp=new G,Ra=new G,Qu=new G,Zp=new lt;class Y2 extends wr{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,s=null;const o=[],a=this;function l(){i.addEventListener("pointermove",m),i.addEventListener("pointerdown",x),i.addEventListener("pointerup",g),i.addEventListener("pointerleave",g)}function u(){i.removeEventListener("pointermove",m),i.removeEventListener("pointerdown",x),i.removeEventListener("pointerup",g),i.removeEventListener("pointerleave",g),i.style.cursor=""}function c(){u()}function f(){return e}function h(){return _i}function m(p){if(a.enabled!==!1){if(d(p),_i.setFromCamera(js,t),r){_i.ray.intersectPlane(Gr,Ra)&&r.position.copy(Ra.sub(Yp).applyMatrix4(Zp)),a.dispatchEvent({type:"drag",object:r});return}if(p.pointerType==="mouse"||p.pointerType==="pen")if(o.length=0,_i.setFromCamera(js,t),_i.intersectObjects(e,!0,o),o.length>0){const v=o[0].object;Gr.setFromNormalAndCoplanarPoint(t.getWorldDirection(Gr.normal),Qu.setFromMatrixPosition(v.matrixWorld)),s!==v&&s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null),s!==v&&(a.dispatchEvent({type:"hoveron",object:v}),i.style.cursor="pointer",s=v)}else s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null)}}function x(p){a.enabled!==!1&&(d(p),o.length=0,_i.setFromCamera(js,t),_i.intersectObjects(e,!0,o),o.length>0&&(r=a.transformGroup===!0?e[0]:o[0].object,Gr.setFromNormalAndCoplanarPoint(t.getWorldDirection(Gr.normal),Qu.setFromMatrixPosition(r.matrixWorld)),_i.ray.intersectPlane(Gr,Ra)&&(Zp.copy(r.parent.matrixWorld).invert(),Yp.copy(Ra).sub(Qu.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",a.dispatchEvent({type:"dragstart",object:r})))}function g(){a.enabled!==!1&&(r&&(a.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=s?"pointer":"auto")}function d(p){const v=i.getBoundingClientRect();js.x=(p.clientX-v.left)/v.width*2-1,js.y=-(p.clientY-v.top)/v.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=u,this.dispose=c,this.getObjects=f,this.getRaycaster=h}}class Z2{constructor(e,t){this.canvasID=e,this.bgcolor=t}initScene(){this.camera=new cn(40,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=500,this.scene=new r2;const e=document.getElementById(this.canvasID);this.renderer=new L0({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(this.bgcolor),document.body.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.updateProjectionMatrix()}}class xl extends Ul{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,r){const s=this,o=new fh(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const t=this;function i(N,I){if(N.nodeType!==1)return;const E=y(N);let B=!1,F=null;switch(N.nodeName){case"svg":I=x(N,I);break;case"style":s(N);break;case"g":I=x(N,I);break;case"path":I=x(N,I),N.hasAttribute("d")&&(F=r(N));break;case"rect":I=x(N,I),F=l(N);break;case"polygon":I=x(N,I),F=u(N);break;case"polyline":I=x(N,I),F=c(N);break;case"circle":I=x(N,I),F=f(N);break;case"ellipse":I=x(N,I),F=h(N);break;case"line":I=x(N,I),F=m(N);break;case"defs":B=!0;break;case"use":I=x(N,I);const he=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),re=N.viewportElement.getElementById(he);re?i(re,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+he);break}F&&(I.fill!==void 0&&I.fill!=="none"&&F.color.setStyle(I.fill),M(F,k),z.push(F),F.userData={node:N,style:I});const O=N.childNodes;for(let ee=0;ee<O.length;ee++){const he=O[ee];B&&he.nodeName!=="style"&&he.nodeName!=="defs"||i(he,I)}E&&(q.pop(),q.length>0?k.copy(q[q.length-1]):k.identity())}function r(N){const I=new yi,E=new ce,B=new ce,F=new ce;let O=!0,ee=!1;const re=N.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let me=0,j=re.length;me<j;me++){const Q=re[me],$=Q.charAt(0),le=Q.slice(1).trim();O===!0&&(ee=!0,O=!1);let D;switch($){case"M":D=d(le);for(let L=0,fe=D.length;L<fe;L+=2)E.x=D[L+0],E.y=D[L+1],B.x=E.x,B.y=E.y,L===0?I.moveTo(E.x,E.y):I.lineTo(E.x,E.y),L===0&&F.copy(E);break;case"H":D=d(le);for(let L=0,fe=D.length;L<fe;L++)E.x=D[L],B.x=E.x,B.y=E.y,I.lineTo(E.x,E.y),L===0&&ee===!0&&F.copy(E);break;case"V":D=d(le);for(let L=0,fe=D.length;L<fe;L++)E.y=D[L],B.x=E.x,B.y=E.y,I.lineTo(E.x,E.y),L===0&&ee===!0&&F.copy(E);break;case"L":D=d(le);for(let L=0,fe=D.length;L<fe;L+=2)E.x=D[L+0],E.y=D[L+1],B.x=E.x,B.y=E.y,I.lineTo(E.x,E.y),L===0&&ee===!0&&F.copy(E);break;case"C":D=d(le);for(let L=0,fe=D.length;L<fe;L+=6)I.bezierCurveTo(D[L+0],D[L+1],D[L+2],D[L+3],D[L+4],D[L+5]),B.x=D[L+2],B.y=D[L+3],E.x=D[L+4],E.y=D[L+5],L===0&&ee===!0&&F.copy(E);break;case"S":D=d(le);for(let L=0,fe=D.length;L<fe;L+=4)I.bezierCurveTo(g(E.x,B.x),g(E.y,B.y),D[L+0],D[L+1],D[L+2],D[L+3]),B.x=D[L+0],B.y=D[L+1],E.x=D[L+2],E.y=D[L+3],L===0&&ee===!0&&F.copy(E);break;case"Q":D=d(le);for(let L=0,fe=D.length;L<fe;L+=4)I.quadraticCurveTo(D[L+0],D[L+1],D[L+2],D[L+3]),B.x=D[L+0],B.y=D[L+1],E.x=D[L+2],E.y=D[L+3],L===0&&ee===!0&&F.copy(E);break;case"T":D=d(le);for(let L=0,fe=D.length;L<fe;L+=2){const ge=g(E.x,B.x),Le=g(E.y,B.y);I.quadraticCurveTo(ge,Le,D[L+0],D[L+1]),B.x=ge,B.y=Le,E.x=D[L+0],E.y=D[L+1],L===0&&ee===!0&&F.copy(E)}break;case"A":D=d(le,[3,4],7);for(let L=0,fe=D.length;L<fe;L+=7){if(D[L+5]==E.x&&D[L+6]==E.y)continue;const ge=E.clone();E.x=D[L+5],E.y=D[L+6],B.x=E.x,B.y=E.y,o(I,D[L],D[L+1],D[L+2],D[L+3],D[L+4],ge,E),L===0&&ee===!0&&F.copy(E)}break;case"m":D=d(le);for(let L=0,fe=D.length;L<fe;L+=2)E.x+=D[L+0],E.y+=D[L+1],B.x=E.x,B.y=E.y,L===0?I.moveTo(E.x,E.y):I.lineTo(E.x,E.y),L===0&&F.copy(E);break;case"h":D=d(le);for(let L=0,fe=D.length;L<fe;L++)E.x+=D[L],B.x=E.x,B.y=E.y,I.lineTo(E.x,E.y),L===0&&ee===!0&&F.copy(E);break;case"v":D=d(le);for(let L=0,fe=D.length;L<fe;L++)E.y+=D[L],B.x=E.x,B.y=E.y,I.lineTo(E.x,E.y),L===0&&ee===!0&&F.copy(E);break;case"l":D=d(le);for(let L=0,fe=D.length;L<fe;L+=2)E.x+=D[L+0],E.y+=D[L+1],B.x=E.x,B.y=E.y,I.lineTo(E.x,E.y),L===0&&ee===!0&&F.copy(E);break;case"c":D=d(le);for(let L=0,fe=D.length;L<fe;L+=6)I.bezierCurveTo(E.x+D[L+0],E.y+D[L+1],E.x+D[L+2],E.y+D[L+3],E.x+D[L+4],E.y+D[L+5]),B.x=E.x+D[L+2],B.y=E.y+D[L+3],E.x+=D[L+4],E.y+=D[L+5],L===0&&ee===!0&&F.copy(E);break;case"s":D=d(le);for(let L=0,fe=D.length;L<fe;L+=4)I.bezierCurveTo(g(E.x,B.x),g(E.y,B.y),E.x+D[L+0],E.y+D[L+1],E.x+D[L+2],E.y+D[L+3]),B.x=E.x+D[L+0],B.y=E.y+D[L+1],E.x+=D[L+2],E.y+=D[L+3],L===0&&ee===!0&&F.copy(E);break;case"q":D=d(le);for(let L=0,fe=D.length;L<fe;L+=4)I.quadraticCurveTo(E.x+D[L+0],E.y+D[L+1],E.x+D[L+2],E.y+D[L+3]),B.x=E.x+D[L+0],B.y=E.y+D[L+1],E.x+=D[L+2],E.y+=D[L+3],L===0&&ee===!0&&F.copy(E);break;case"t":D=d(le);for(let L=0,fe=D.length;L<fe;L+=2){const ge=g(E.x,B.x),Le=g(E.y,B.y);I.quadraticCurveTo(ge,Le,E.x+D[L+0],E.y+D[L+1]),B.x=ge,B.y=Le,E.x=E.x+D[L+0],E.y=E.y+D[L+1],L===0&&ee===!0&&F.copy(E)}break;case"a":D=d(le,[3,4],7);for(let L=0,fe=D.length;L<fe;L+=7){if(D[L+5]==0&&D[L+6]==0)continue;const ge=E.clone();E.x+=D[L+5],E.y+=D[L+6],B.x=E.x,B.y=E.y,o(I,D[L],D[L+1],D[L+2],D[L+3],D[L+4],ge,E),L===0&&ee===!0&&F.copy(E)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(E.copy(F),I.currentPath.currentPoint.copy(E),O=!0);break;default:console.warn(Q)}ee=!1}return I}function s(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let I=0;I<N.sheet.cssRules.length;I++){const E=N.sheet.cssRules[I];if(E.type!==1)continue;const B=E.selectorText.split(/,/gm).filter(Boolean).map(F=>F.trim());for(let F=0;F<B.length;F++){const O=Object.fromEntries(Object.entries(E.style).filter(([,ee])=>ee!==""));Z[B[F]]=Object.assign(Z[B[F]]||{},O)}}}function o(N,I,E,B,F,O,ee,he){if(I==0||E==0){N.lineTo(he.x,he.y);return}B=B*Math.PI/180,I=Math.abs(I),E=Math.abs(E);const re=(ee.x-he.x)/2,me=(ee.y-he.y)/2,j=Math.cos(B)*re+Math.sin(B)*me,Q=-Math.sin(B)*re+Math.cos(B)*me;let $=I*I,le=E*E;const D=j*j,L=Q*Q,fe=D/$+L/le;if(fe>1){const Pe=Math.sqrt(fe);I=Pe*I,E=Pe*E,$=I*I,le=E*E}const ge=$*L+le*D,Le=($*le-ge)/ge;let Re=Math.sqrt(Math.max(0,Le));F===O&&(Re=-Re);const R=Re*I*Q/E,T=-Re*E*j/I,te=Math.cos(B)*R-Math.sin(B)*T+(ee.x+he.x)/2,pe=Math.sin(B)*R+Math.cos(B)*T+(ee.y+he.y)/2,ve=a(1,0,(j-R)/I,(Q-T)/E),_e=a((j-R)/I,(Q-T)/E,(-j-R)/I,(-Q-T)/E)%(Math.PI*2);N.currentPath.absellipse(te,pe,I,E,ve,ve+_e,O===0,B)}function a(N,I,E,B){const F=N*E+I*B,O=Math.sqrt(N*N+I*I)*Math.sqrt(E*E+B*B);let ee=Math.acos(Math.max(-1,Math.min(1,F/O)));return N*B-I*E<0&&(ee=-ee),ee}function l(N){const I=_(N.getAttribute("x")||0),E=_(N.getAttribute("y")||0),B=_(N.getAttribute("rx")||N.getAttribute("ry")||0),F=_(N.getAttribute("ry")||N.getAttribute("rx")||0),O=_(N.getAttribute("width")),ee=_(N.getAttribute("height")),he=1-.551915024494,re=new yi;return re.moveTo(I+B,E),re.lineTo(I+O-B,E),(B!==0||F!==0)&&re.bezierCurveTo(I+O-B*he,E,I+O,E+F*he,I+O,E+F),re.lineTo(I+O,E+ee-F),(B!==0||F!==0)&&re.bezierCurveTo(I+O,E+ee-F*he,I+O-B*he,E+ee,I+O-B,E+ee),re.lineTo(I+B,E+ee),(B!==0||F!==0)&&re.bezierCurveTo(I+B*he,E+ee,I,E+ee-F*he,I,E+ee-F),re.lineTo(I,E+F),(B!==0||F!==0)&&re.bezierCurveTo(I,E+F*he,I+B*he,E,I+B,E),re}function u(N){function I(O,ee,he){const re=_(ee),me=_(he);F===0?B.moveTo(re,me):B.lineTo(re,me),F++}const E=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,B=new yi;let F=0;return N.getAttribute("points").replace(E,I),B.currentPath.autoClose=!0,B}function c(N){function I(O,ee,he){const re=_(ee),me=_(he);F===0?B.moveTo(re,me):B.lineTo(re,me),F++}const E=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,B=new yi;let F=0;return N.getAttribute("points").replace(E,I),B.currentPath.autoClose=!1,B}function f(N){const I=_(N.getAttribute("cx")||0),E=_(N.getAttribute("cy")||0),B=_(N.getAttribute("r")||0),F=new hs;F.absarc(I,E,B,0,Math.PI*2);const O=new yi;return O.subPaths.push(F),O}function h(N){const I=_(N.getAttribute("cx")||0),E=_(N.getAttribute("cy")||0),B=_(N.getAttribute("rx")||0),F=_(N.getAttribute("ry")||0),O=new hs;O.absellipse(I,E,B,F,0,Math.PI*2);const ee=new yi;return ee.subPaths.push(O),ee}function m(N){const I=_(N.getAttribute("x1")||0),E=_(N.getAttribute("y1")||0),B=_(N.getAttribute("x2")||0),F=_(N.getAttribute("y2")||0),O=new yi;return O.moveTo(I,E),O.lineTo(B,F),O.currentPath.autoClose=!1,O}function x(N,I){I=Object.assign({},I);let E={};if(N.hasAttribute("class")){const ee=N.getAttribute("class").split(/\s/).filter(Boolean).map(he=>he.trim());for(let he=0;he<ee.length;he++)E=Object.assign(E,Z["."+ee[he]])}N.hasAttribute("id")&&(E=Object.assign(E,Z["#"+N.getAttribute("id")]));function B(ee,he,re){re===void 0&&(re=function(j){return j.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),j}),N.hasAttribute(ee)&&(I[he]=re(N.getAttribute(ee))),E[ee]&&(I[he]=re(E[ee])),N.style&&N.style[ee]!==""&&(I[he]=re(N.style[ee]))}function F(ee){return Math.max(0,Math.min(1,_(ee)))}function O(ee){return Math.max(0,_(ee))}return B("fill","fill"),B("fill-opacity","fillOpacity",F),B("fill-rule","fillRule"),B("opacity","opacity",F),B("stroke","stroke"),B("stroke-opacity","strokeOpacity",F),B("stroke-width","strokeWidth",O),B("stroke-linejoin","strokeLineJoin"),B("stroke-linecap","strokeLineCap"),B("stroke-miterlimit","strokeMiterLimit",O),B("visibility","visibility"),I}function g(N,I){return N-(I-N)}function d(N,I,E){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const B={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},F=0,O=1,ee=2,he=3;let re=F,me=!0,j="",Q="";const $=[];function le(ge,Le,Re){const R=new SyntaxError('Unexpected character "'+ge+'" at index '+Le+".");throw R.partial=Re,R}function D(){j!==""&&(Q===""?$.push(Number(j)):$.push(Number(j)*Math.pow(10,Number(Q)))),j="",Q=""}let L;const fe=N.length;for(let ge=0;ge<fe;ge++){if(L=N[ge],Array.isArray(I)&&I.includes($.length%E)&&B.FLAGS.test(L)){re=O,j=L,D();continue}if(re===F){if(B.WHITESPACE.test(L))continue;if(B.DIGIT.test(L)||B.SIGN.test(L)){re=O,j=L;continue}if(B.POINT.test(L)){re=ee,j=L;continue}B.COMMA.test(L)&&(me&&le(L,ge,$),me=!0)}if(re===O){if(B.DIGIT.test(L)){j+=L;continue}if(B.POINT.test(L)){j+=L,re=ee;continue}if(B.EXP.test(L)){re=he;continue}B.SIGN.test(L)&&j.length===1&&B.SIGN.test(j[0])&&le(L,ge,$)}if(re===ee){if(B.DIGIT.test(L)){j+=L;continue}if(B.EXP.test(L)){re=he;continue}B.POINT.test(L)&&j[j.length-1]==="."&&le(L,ge,$)}if(re===he){if(B.DIGIT.test(L)){Q+=L;continue}if(B.SIGN.test(L)){if(Q===""){Q+=L;continue}Q.length===1&&B.SIGN.test(Q)&&le(L,ge,$)}}B.WHITESPACE.test(L)?(D(),re=F,me=!1):B.COMMA.test(L)?(D(),re=F,me=!0):B.SIGN.test(L)?(D(),re=O,j=L):B.POINT.test(L)?(D(),re=ee,j=L):le(L,ge,$)}return D(),$}const p=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(N){let I="px";if(typeof N=="string"||N instanceof String)for(let B=0,F=p.length;B<F;B++){const O=p[B];if(N.endsWith(O)){I=O,N=N.substring(0,N.length-O.length);break}}let E;return I==="px"&&t.defaultUnit!=="px"?E=v.in[t.defaultUnit]/t.defaultDPI:(E=v[I][t.defaultUnit],E<0&&(E=v[I].in*t.defaultDPI)),E*parseFloat(N)}function y(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const I=w(N);return q.length>0&&I.premultiply(q[q.length-1]),k.copy(I),q.push(I),I}function w(N){const I=new xt,E=H;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const B=_(N.getAttribute("x")),F=_(N.getAttribute("y"));I.translate(B,F)}if(N.hasAttribute("transform")){const B=N.getAttribute("transform").split(")");for(let F=B.length-1;F>=0;F--){const O=B[F].trim();if(O==="")continue;const ee=O.indexOf("("),he=O.length;if(ee>0&&ee<he){const re=O.slice(0,ee),me=d(O.slice(ee+1));switch(E.identity(),re){case"translate":if(me.length>=1){const j=me[0];let Q=0;me.length>=2&&(Q=me[1]),E.translate(j,Q)}break;case"rotate":if(me.length>=1){let j=0,Q=0,$=0;j=-me[0]*Math.PI/180,me.length>=3&&(Q=me[1],$=me[2]),V.identity().translate(-Q,-$),K.identity().rotate(j),ne.multiplyMatrices(K,V),V.identity().translate(Q,$),E.multiplyMatrices(V,ne)}break;case"scale":if(me.length>=1){const j=me[0];let Q=j;me.length>=2&&(Q=me[1]),E.scale(j,Q)}break;case"skewX":me.length===1&&E.set(1,Math.tan(me[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":me.length===1&&E.set(1,0,0,Math.tan(me[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":me.length===6&&E.set(me[0],me[2],me[4],me[1],me[3],me[5],0,0,1);break}}I.premultiply(E)}}return I}function M(N,I){function E(O){P.set(O.x,O.y,1).applyMatrix3(I),O.set(P.x,P.y)}const B=b(I),F=N.subPaths;for(let O=0,ee=F.length;O<ee;O++){const re=F[O].curves;for(let me=0;me<re.length;me++){const j=re[me];j.isLineCurve?(E(j.v1),E(j.v2)):j.isCubicBezierCurve?(E(j.v0),E(j.v1),E(j.v2),E(j.v3)):j.isQuadraticBezierCurve?(E(j.v0),E(j.v1),E(j.v2)):j.isEllipseCurve&&(B&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),Y.set(j.aX,j.aY),E(Y),j.aX=Y.x,j.aY=Y.y,j.xRadius*=S(I),j.yRadius*=A(I))}}}function b(N){return N.elements[1]!==0||N.elements[3]!==0}function S(N){const I=N.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function A(N){const I=N.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}const z=[],Z={},q=[],H=new xt,V=new xt,K=new xt,ne=new xt,Y=new ce,P=new G,k=new xt,U=new DOMParser().parseFromString(e,"image/svg+xml");return i(U.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:z,xml:U.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(d,p,v,_){const y=d.x,w=p.x,M=v.x,b=_.x,S=d.y,A=p.y,z=v.y,Z=_.y,q=(b-M)*(S-z)-(Z-z)*(y-M),H=(w-y)*(S-z)-(A-S)*(y-M),V=(Z-z)*(w-y)-(b-M)*(A-S),K=q/V,ne=H/V;if(V===0&&q!==0||K<=0||K>=1||ne<0||ne>1)return null;if(q===0&&V===0){for(let Y=0;Y<2;Y++)if(o(Y===0?v:_,d,p),r.loc==i.ORIGIN){const P=Y===0?v:_;return{x:P.x,y:P.y,t:r.t}}else if(r.loc==i.BETWEEN){const P=+(y+r.t*(w-y)).toPrecision(10),k=+(S+r.t*(A-S)).toPrecision(10);return{x:P,y:k,t:r.t}}return null}else{for(let k=0;k<2;k++)if(o(k===0?v:_,d,p),r.loc==i.ORIGIN){const U=k===0?v:_;return{x:U.x,y:U.y,t:r.t}}const Y=+(y+K*(w-y)).toPrecision(10),P=+(S+K*(A-S)).toPrecision(10);return{x:Y,y:P,t:K}}}function o(d,p,v){const _=v.x-p.x,y=v.y-p.y,w=d.x-p.x,M=d.y-p.y,b=_*M-w*y;if(d.x===p.x&&d.y===p.y){r.loc=i.ORIGIN,r.t=0;return}if(d.x===v.x&&d.y===v.y){r.loc=i.DESTINATION,r.t=1;return}if(b<-Number.EPSILON){r.loc=i.LEFT;return}if(b>Number.EPSILON){r.loc=i.RIGHT;return}if(_*w<0||y*M<0){r.loc=i.BEHIND;return}if(Math.sqrt(_*_+y*y)<Math.sqrt(w*w+M*M)){r.loc=i.BEYOND;return}let S;_!==0?S=w/_:S=M/y,r.loc=i.BETWEEN,r.t=S}function a(d,p){const v=[],_=[];for(let y=1;y<d.length;y++){const w=d[y-1],M=d[y];for(let b=1;b<p.length;b++){const S=p[b-1],A=p[b],z=s(w,M,S,A);z!==null&&v.find(Z=>Z.t<=z.t+Number.EPSILON&&Z.t>=z.t-Number.EPSILON)===void 0&&(v.push(z),_.push(new ce(z.x,z.y)))}}return _}function l(d,p,v){const _=new ce;p.getCenter(_);const y=[];return v.forEach(w=>{w.boundingBox.containsPoint(_)&&a(d,w.points).forEach(b=>{y.push({identifier:w.identifier,isCW:w.isCW,point:b})})}),y.sort((w,M)=>w.point.x-M.point.x),y}function u(d,p,v,_,y){(y==null||y==="")&&(y="nonzero");const w=new ce;d.boundingBox.getCenter(w);const M=[new ce(v,w.y),new ce(_,w.y)],b=l(M,d.boundingBox,p);b.sort((H,V)=>H.point.x-V.point.x);const S=[],A=[];b.forEach(H=>{H.identifier===d.identifier?S.push(H):A.push(H)});const z=S[0].point.x,Z=[];let q=0;for(;q<A.length&&A[q].point.x<z;)Z.length>0&&Z[Z.length-1]===A[q].identifier?Z.pop():Z.push(A[q].identifier),q++;if(Z.push(d.identifier),y==="evenodd"){const H=Z.length%2===0,V=Z[Z.length-2];return{identifier:d.identifier,isHole:H,for:V}}else if(y==="nonzero"){let H=!0,V=null,K=null;for(let ne=0;ne<Z.length;ne++){const Y=Z[ne];H?(K=p[Y].isCW,H=!1,V=Y):K!==p[Y].isCW&&(K=p[Y].isCW,H=!0)}return{identifier:d.identifier,isHole:H,for:V}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let c=0,f=999999999,h=-999999999,m=e.subPaths.map(d=>{const p=d.getPoints();let v=-999999999,_=999999999,y=-999999999,w=999999999;for(let M=0;M<p.length;M++){const b=p[M];b.y>v&&(v=b.y),b.y<_&&(_=b.y),b.x>y&&(y=b.x),b.x<w&&(w=b.x)}return h<=y&&(h=y+1),f>=w&&(f=w-1),{curves:d.curves,points:p,isCW:cr.isClockWise(p),identifier:c++,boundingBox:new $2(new ce(w,_),new ce(y,v))}});m=m.filter(d=>d.points.length>1);const x=m.map(d=>{var p;return u(d,m,f,h,(p=e.userData)==null?void 0:p.style.fillRule)}),g=[];return m.forEach(d=>{if(!x[d.identifier].isHole){const v=new co;v.curves=d.curves,x.filter(y=>y.isHole&&y.for===d.identifier).forEach(y=>{const w=m[y.identifier],M=new hs;M.curves=w.curves,v.holes.push(M)}),g.push(v)}}),g}static getStrokeStyle(e,t,i,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,i,r){const s=[],o=[],a=[];if(xl.pointsToStrokeWithBuffers(e,t,i,r,s,o,a)===0)return null;const l=new Bn;return l.setAttribute("position",new kt(s,3)),l.setAttribute("normal",new kt(o,3)),l.setAttribute("uv",new kt(a,2)),l}static pointsToStrokeWithBuffers(e,t,i,r,s,o,a,l){const u=new ce,c=new ce,f=new ce,h=new ce,m=new ce,x=new ce,g=new ce,d=new ce,p=new ce,v=new ce,_=new ce,y=new ce,w=new ce,M=new ce,b=new ce,S=new ce,A=new ce;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=Q(e);const z=e.length;if(z<2)return 0;const Z=e[0].equals(e[z-1]);let q,H=e[0],V;const K=t.strokeWidth/2,ne=1/(z-1);let Y=0,P,k,U,se,N=!1,I=0,E=l*3,B=l*2;F(e[0],e[1],u).multiplyScalar(K),d.copy(e[0]).sub(u),p.copy(e[0]).add(u),v.copy(d),_.copy(p);for(let $=1;$<z;$++){q=e[$],$===z-1?Z?V=e[1]:V=void 0:V=e[$+1];const le=u;if(F(H,q,le),f.copy(le).multiplyScalar(K),y.copy(q).sub(f),w.copy(q).add(f),P=Y+ne,k=!1,V!==void 0){F(q,V,c),f.copy(c).multiplyScalar(K),M.copy(q).sub(f),b.copy(q).add(f),U=!0,f.subVectors(V,H),le.dot(f)<0&&(U=!1),$===1&&(N=U),f.subVectors(V,q),f.normalize();const D=Math.abs(le.dot(f));if(D>Number.EPSILON){const L=K/D;f.multiplyScalar(-L),h.subVectors(q,H),m.copy(h).setLength(L).add(f),S.copy(m).negate();const fe=m.length(),ge=h.length();h.divideScalar(ge),x.subVectors(V,q);const Le=x.length();switch(x.divideScalar(Le),h.dot(S)<ge&&x.dot(S)<Le&&(k=!0),A.copy(m).add(q),S.add(q),se=!1,k?U?(b.copy(S),w.copy(S)):(M.copy(S),y.copy(S)):he(),t.strokeLineJoin){case"bevel":re(U,k,P);break;case"round":me(U,k),U?ee(q,y,M,P,0):ee(q,b,w,P,1);break;case"miter":case"miter-clip":default:const Re=K*t.strokeMiterLimit/fe;if(Re<1)if(t.strokeLineJoin!=="miter-clip"){re(U,k,P);break}else me(U,k),U?(x.subVectors(A,y).multiplyScalar(Re).add(y),g.subVectors(A,M).multiplyScalar(Re).add(M),O(y,P,0),O(x,P,0),O(q,P,.5),O(q,P,.5),O(x,P,0),O(g,P,0),O(q,P,.5),O(g,P,0),O(M,P,0)):(x.subVectors(A,w).multiplyScalar(Re).add(w),g.subVectors(A,b).multiplyScalar(Re).add(b),O(w,P,1),O(x,P,1),O(q,P,.5),O(q,P,.5),O(x,P,1),O(g,P,1),O(q,P,.5),O(g,P,1),O(b,P,1));else k?(U?(O(p,Y,1),O(d,Y,0),O(A,P,0),O(p,Y,1),O(A,P,0),O(S,P,1)):(O(p,Y,1),O(d,Y,0),O(A,P,1),O(d,Y,0),O(S,P,0),O(A,P,1)),U?M.copy(A):b.copy(A)):U?(O(y,P,0),O(A,P,0),O(q,P,.5),O(q,P,.5),O(A,P,0),O(M,P,0)):(O(w,P,1),O(A,P,1),O(q,P,.5),O(q,P,.5),O(A,P,1),O(b,P,1)),se=!0;break}}else he()}else he();!Z&&$===z-1&&j(e[0],v,_,U,!0,Y),Y=P,H=q,d.copy(M),p.copy(b)}if(!Z)j(q,y,w,U,!1,P);else if(k&&s){let $=A,le=S;N!==U&&($=S,le=A),U?(se||N)&&(le.toArray(s,0*3),le.toArray(s,3*3),se&&$.toArray(s,1*3)):(se||!N)&&(le.toArray(s,1*3),le.toArray(s,3*3),se&&$.toArray(s,0*3))}return I;function F($,le,D){return D.subVectors(le,$),D.set(-D.y,D.x).normalize()}function O($,le,D){s&&(s[E]=$.x,s[E+1]=$.y,s[E+2]=0,o&&(o[E]=0,o[E+1]=0,o[E+2]=1),E+=3,a&&(a[B]=le,a[B+1]=D,B+=2)),I+=3}function ee($,le,D,L,fe){u.copy(le).sub($).normalize(),c.copy(D).sub($).normalize();let ge=Math.PI;const Le=u.dot(c);Math.abs(Le)<1&&(ge=Math.abs(Math.acos(Le))),ge/=i,f.copy(le);for(let Re=0,R=i-1;Re<R;Re++)h.copy(f).rotateAround($,ge),O(f,L,fe),O(h,L,fe),O($,L,.5),f.copy(h);O(h,L,fe),O(D,L,fe),O($,L,.5)}function he(){O(p,Y,1),O(d,Y,0),O(y,P,0),O(p,Y,1),O(y,P,1),O(w,P,0)}function re($,le,D){le?$?(O(p,Y,1),O(d,Y,0),O(y,P,0),O(p,Y,1),O(y,P,0),O(S,P,1),O(y,D,0),O(M,D,0),O(S,D,.5)):(O(p,Y,1),O(d,Y,0),O(w,P,1),O(d,Y,0),O(S,P,0),O(w,P,1),O(w,D,1),O(b,D,0),O(S,D,.5)):$?(O(y,D,0),O(M,D,0),O(q,D,.5)):(O(w,D,1),O(b,D,0),O(q,D,.5))}function me($,le){le&&($?(O(p,Y,1),O(d,Y,0),O(y,P,0),O(p,Y,1),O(y,P,0),O(S,P,1),O(y,Y,0),O(q,P,.5),O(S,P,1),O(q,P,.5),O(M,Y,0),O(S,P,1)):(O(p,Y,1),O(d,Y,0),O(w,P,1),O(d,Y,0),O(S,P,0),O(w,P,1),O(w,Y,1),O(S,P,0),O(q,P,.5),O(q,P,.5),O(S,P,0),O(b,Y,1)))}function j($,le,D,L,fe,ge){switch(t.strokeLineCap){case"round":fe?ee($,D,le,ge,.5):ee($,le,D,ge,.5);break;case"square":if(fe)u.subVectors(le,$),c.set(u.y,-u.x),f.addVectors(u,c).add($),h.subVectors(c,u).add($),L?(f.toArray(s,1*3),h.toArray(s,0*3),h.toArray(s,3*3)):(f.toArray(s,1*3),f.toArray(s,3*3),h.toArray(s,0*3));else{u.subVectors(D,$),c.set(u.y,-u.x),f.addVectors(u,c).add($),h.subVectors(c,u).add($);const Le=s.length;L?(f.toArray(s,Le-1*3),h.toArray(s,Le-2*3),h.toArray(s,Le-4*3)):(f.toArray(s,Le-2*3),h.toArray(s,Le-1*3),h.toArray(s,Le-4*3))}break}}function Q($){let le=!1;for(let L=1,fe=$.length-1;L<fe;L++)if($[L].distanceTo($[L+1])<r){le=!0;break}if(!le)return $;const D=[];D.push($[0]);for(let L=1,fe=$.length-1;L<fe;L++)$[L].distanceTo($[L+1])>=r&&D.push($[L]);return D.push($[$.length-1]),D}}}class J2{constructor(){this.board=new bn,this.hiddenTiles=new bn,this.crowsAndVulture=new bn,this.board.scale.x=.2,this.board.scale.y=.2,this.board.scale.z=.2;var e={size:30,height:400,curveSegments:3,bevelThickness:1,bevelSize:2,bevelEnabled:!0,material:0,extrudeMaterial:1};const t=new xl,i=new bn;t.load("src/assets/kaooaBoardImg.svg",function(x){const g=x.paths;for(let p=0;p<g.length;p++){const v=g[p];new rh({color:v.color,side:hn,depthWrite:!1});const _=xl.createShapes(v);for(let y=0;y<_.length;y++){const w=_[y],M=new Ol(w,e);var d=new F2({color:16777215,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});const b=new Nt(M,d);i.add(b)}i.position.set(-170,-50,0),i.rotateZ(12)}},function(x){console.log(x.loaded/x.total*100+"% loaded")},function(x){console.log(x)}),this.board.add(i);const r=this.getHiddenTiles(-13,100,-2),s=this.getHiddenTiles(62,-95,-2),o=this.getHiddenTiles(95,30,-2),a=this.getHiddenTiles(-35,25,-4),l=this.getHiddenTiles(16,28,-4),u=this.getHiddenTiles(-66,-100,-4),c=this.getHiddenTiles(-113,18,-4),f=this.getHiddenTiles(-5,-54,-4),h=this.getHiddenTiles(33,-20,-4),m=this.getHiddenTiles(-49,-26,-4);r.alt="1",r.crowMoves=[a,l],r.vultureMoves=[a,l,h,m],s.alt="2",s.crowMoves=[f,h],s.vultureMoves=[f,h,l,m],o.alt="3",o.crowMoves=[l,h],o.vultureMoves=[l,h,f,a],a.alt="4",a.crowMoves=[r,c,l,m],a.vultureMoves=[m,l,c,r,o,u],l.alt="5",l.crowMoves=[r,a,o,h],l.vultureMoves=[a,h,o,r,s,c],u.alt="6",u.crowMoves=[f,m],u.vultureMoves=[f,m,a,h],c.alt="7",c.crowMoves=[a,m],c.vultureMoves=[a,m,f,l],f.alt="8",f.crowMoves=[u,m,h,s],f.vultureMoves=[m,h,u,s,o,c],h.alt="9",h.crowMoves=[s,f,l,o],h.vultureMoves=[f,l,s,o,r,u],m.alt="10",m.crowMoves=[u,f,a,c],m.vultureMoves=[f,a,u,c,r,s],this.hiddenTiles.add(r),this.hiddenTiles.add(s),this.hiddenTiles.add(o),this.hiddenTiles.add(a),this.hiddenTiles.add(l),this.hiddenTiles.add(u),this.hiddenTiles.add(c),this.hiddenTiles.add(f),this.hiddenTiles.add(h),this.hiddenTiles.add(m),this.crowsAndVulture.add(this.getNewCrow(200,0,15)),this.crowsAndVulture.add(this.getNewCrow(200,12,15)),this.crowsAndVulture.add(this.getNewCrow(200,24,15)),this.crowsAndVulture.add(this.getNewCrow(200,36,15)),this.crowsAndVulture.add(this.getNewCrow(200,48,15)),this.crowsAndVulture.add(this.getNewCrow(200,60,15)),this.crowsAndVulture.add(this.getNewCrow(200,72,15)),this.vulturePlayer=this.getVulture(200,-48,15),this.crowsAndVulture.add(this.vulturePlayer),this.board.add(this.hiddenTiles),this.board.add(this.crowsAndVulture)}getHiddenTiles(e,t,i){const r=new Rs(20,20,100),s=new ii({color:16777215,side:hn}),o=new Nt(r,s);return o.visible=!1,o.position.x=e,o.position.y=t,o.position.z=i,o.x=e,o.y=t,o.z=i,o.isOccupied=!1,o.currPlayer=void 0,o}getNewCrow(e,t,i){const r=new vl(10,20,20),s=new ii({color:6746781,side:hn}),o=new Nt(r,s);return o.position.x=e,o.position.y=t,o.position.z=i,o.x=e,o.y=t,o.z=i,o.player="crow",o.nextMoves=[],o.currPos=void 0,o}getVulture(e,t,i){const r=new vl(11,20,20),s=new ii({color:15042439,side:hn}),o=new Nt(r,s);return o.position.x=e,o.position.y=t,o.position.z=i,o.x=e,o.y=t,o.z=i,o.player="vulture",o.nextMoves=[],o.currPos=void 0,o}}class hh extends Ul{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new fh(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new Q2(e)}}class Q2{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=K2(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function K2(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const c=i[u];if(c===`
`)a=0,l-=s;else{const f=eE(c,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function eE(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new yi;let a,l,u,c,f,h,m,x;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,p=g.length;d<p;)switch(g[d++]){case"m":a=g[d++]*e+t,l=g[d++]*e+i,o.moveTo(a,l);break;case"l":a=g[d++]*e+t,l=g[d++]*e+i,o.lineTo(a,l);break;case"q":u=g[d++]*e+t,c=g[d++]*e+i,f=g[d++]*e+t,h=g[d++]*e+i,o.quadraticCurveTo(f,h,u,c);break;case"b":u=g[d++]*e+t,c=g[d++]*e+i,f=g[d++]*e+t,h=g[d++]*e+i,m=g[d++]*e+t,x=g[d++]*e+i,o.bezierCurveTo(f,h,m,x,u,c);break}}return{offsetX:s.ha*e,path:o}}class dh extends Ol{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class Ku{constructor(e){this.board=new bn,new hh().load("src/assets/Karma_Future_Regular.json",i=>{const r=new dh(e,{font:i,size:6,height:2}),s=new Nt(r,[new ii({color:16777215}),new ii({color:6038273})]);s.castShadow=!0,s.scale.x=2.5,s.scale.y=2.5,s.scale.z=2.5,s.position.x=-300,s.position.y=120,this.board.add(s)})}}class Jp{constructor(e){this.board=new bn,new hh().load("src/assets/Karma_Future_Regular.json",i=>{const r=new dh(`${e} WON!!`,{font:i,size:10,height:4}),s=new Nt(r,[new ii({color:4474081}),new ii({color:16777215})]);s.castShadow=!0,s.scale.x=3.5,s.scale.y=3.5,s.scale.z=3.5,s.position.x=-150,s.position.y=0,this.board.add(s)})}}class tE{constructor(){this.board=new bn,new hh().load("src/assets/Karma_Future_Regular.json",t=>{const i=new dh("START KAOOA",{font:t,size:10,height:4}),r=new Nt(i,[new ii({color:4474081}),new ii({color:16777215})]);r.castShadow=!0,r.scale.x=3.5,r.scale.y=3.5,r.scale.z=3.5,r.position.x=-150,r.position.y=0,this.board.add(r)})}}var U0={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=No.exports,iE=Symbol.for("react.element"),rE=Symbol.for("react.fragment"),sE=Object.prototype.hasOwnProperty,oE=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aE={key:!0,ref:!0,__self:!0,__source:!0};function B0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sE.call(e,i)&&!aE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iE,type:n,key:s,ref:o,props:r,_owner:oE.current}}Bl.Fragment=rE;Bl.jsx=B0;Bl.jsxs=B0;(function(n){n.exports=Bl})(U0);const Io=U0.exports.jsx;var Qs=[];function Qp(){const n=JSON.stringify(Qs),e=new Blob([n],{type:"text/plain"}),t=URL.createObjectURL(e),i=document.createElement("a");i.download="mouse_events.json",i.href=t,i.click()}function lE(){const n="kaooaCanvas",e="#000000";return No.exports.useEffect(()=>{const t=new Z2(n,e);t.initScene(),t.animate();const i=new J2;var r=new Ku("CROW'S TURN");const s=new Ju(9385410,1),o=new Ju(2736798,1),a=new Ju(13177105,1);a.position.set(1,0,0),s.position.set(0,0,1),t.scene.add(o),t.scene.add(a),t.scene.add(s),window.localStorage.clear();var l=!1,u=0;t.scene.add(new tE().board);const c=new q2;t.camera.add(c);const f=new W2,h=new Vr(c);f.load("src/assets/startkaooa.mp3",q=>{h.setBuffer(q),h.setLoop(!1),h.setVolume(1)});const m=new Vr(c);f.load("src/assets/crowswon.mp3",q=>{m.setBuffer(q),m.setLoop(!1),m.setVolume(1)});const x=new Vr(c);f.load("src/assets/killcrow.mp3",q=>{x.setBuffer(q),x.setLoop(!1),x.setVolume(1)});const g=new Vr(c);f.load("src/assets/movecorrect.mp3",q=>{g.setBuffer(q),g.setLoop(!1),g.setVolume(1)});const d=new Vr(c);f.load("src/assets/movewrong.mp3",q=>{d.setBuffer(q),d.setLoop(!1),d.setVolume(1)});const p=new Vr(c);f.load("src/assets/vulturewon.mp3",q=>{p.setBuffer(q),p.setLoop(!1),p.setVolume(1)});const v=q=>{if(Qs.push([`MouseEvents${u}`,"clicked"]),u++,!l){h.play(),l=!0,t.scene.remove(t.scene.children[3]),t.scene.add(i.board);var H=2e-4;const V=()=>{i.board.scale.x<1&&(i.board.scale.x+=H,i.board.rotation.z+=.03),i.board.scale.y<1&&(i.board.scale.y+=H),i.board.scale.z<1&&(i.board.scale.z+=H),H*=2,requestAnimationFrame(V)},K=()=>{i.board.scale.x<1&&(i.board.rotation.z+=.003,requestAnimationFrame(K))};K(),V(),t.scene.add(r.board)}};window.addEventListener("click",v,!1);const _=new Y2(i.crowsAndVulture.children,t.camera,t.renderer.domElement),y=new ce,w=new O0;var M,b=!0,S=i.vulturePlayer,A=-300,z=0;_.addEventListener("dragstart",q=>{Qs.push([`MouseEvents${u}`,"drag started"]),u++,b&&q.object.player=="crow"||!b&&q.object.player=="vulture"?M=q.object:M=void 0}),_.addEventListener("dragend",q=>{Qs.push([`MouseEvents${u}`,"drag ended"]),u++,q.object.position.x=q.object.x,q.object.position.y=q.object.y,q.object.position.z=q.object.z});const Z=q=>{Qs.push([`MouseEvents${k}`,"mouse up"]),k++,y.x=q.clientX/window.innerWidth*2-1,y.y=-(q.clientY/window.innerHeight)*2+1,w.setFromCamera(y,t.camera);const H=w.intersectObjects(i.hiddenTiles.children);if(H.length>0&&!H[0].object.isOccupied){var V=[];M.nextMoves&&(V=M.nextMoves);var K=V.length,ne=V,Y=!0;if(M.player=="vulture"&&ne.length!=0&&(ne=ne.slice(-1*K,-2)),ne.length!=0&&(Y=!1,ne.forEach(N=>{N.uuid===H[0].object.uuid&&(Y=!0)})),!Y&&M.player=="vulture"){var P=V.slice(-2);Y=!1;for(var k=0;k<2;k++){var U=P[k];U.uuid===H[0].object.uuid&&(k==0&&ne[1].isOccupied?(x.play(),ne[1].isOccupied=!1,ne[1].currPlayer.position.x=A,A+=10,ne[1].currPlayer.position.y=-25,z++,Y=!0):k==1&&ne[0].isOccupied&&(x.play(),ne[0].isOccupied=!1,ne[0].currPlayer.position.x=A,A+=10,ne[0].currPlayer.position.y=-25,z++,Y=!0))}}Y?(g.play(),M.position.x=H[0].object.x,M.position.y=H[0].object.y,M.x=H[0].object.x,M.y=H[0].object.y,H[0].object.isOccupied=!0,H[0].object.currPlayer=M,M.currPos!=null&&(M.currPos.isOccupied=!1),M.currPos=H[0].object,M.player=="crow"?M.nextMoves=H[0].object.crowMoves:M.nextMoves=H[0].object.vultureMoves,b?(t.scene.remove(r.board),r=new Ku("VULTURE'S TURN")):(t.scene.remove(r.board),r=new Ku("CROW'S TURN!")),t.scene.add(r.board),b=!b):d.play()}else d.play();if(!b&&S.nextMoves.length!=0){var se=!0;S.nextMoves.forEach(N=>{N.isOccupied==!1&&(se=!1)}),se&&(t.scene.remove(t.scene.children[3]),t.scene.remove(t.scene.children[4]),t.scene.remove(r.board),t.scene.add(new Jp("CROWS").board),window.addEventListener("mouseup",N=>{N.stopImmediatePropagation()},!0),m.play(),Qp())}else b&&z==4&&(t.scene.remove(t.scene.children[3]),t.scene.remove(t.scene.children[4]),t.scene.remove(r.board),t.scene.add(new Jp("VULTURE").board),window.addEventListener("mouseup",N=>{N.stopImmediatePropagation()},!0),p.play(),Qp())};window.addEventListener("mouseup",Z,!1)},[]),Io("div",{className:"flex flex-col items-center justify-center",children:Io("canvas",{id:n})})}function uE(){return Io(lE,{})}ec.createRoot(document.getElementById("root")).render(Io(lv.StrictMode,{children:Io(uE,{})}));
