/*! For license information please see 5.de66886a.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-08-phonebook-hooks"]=this["webpackJsonpgoit-react-hw-08-phonebook-hooks"]||[]).push([[5],{116:function(t,e,n){},117:function(t,e,n){"use strict";n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return H}));var o=n(0),r=n(25),s=n(164),i=n(118),a=n.n(i);n(19);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}var l={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(t)&&this.list.get(t).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(r)}))}};function d(t){return"number"===typeof t&&!isNaN(t)}function f(t){return"boolean"===typeof t}function p(t){return"string"===typeof t}function v(t){return"function"===typeof t}function m(t){return"string"===typeof t?t:null}function g(t){return 0===t||t}var y=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(t){return Object(o.isValidElement)(t)||p(t)||v(t)||d(t)}var h={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},O={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function T(t){var e,n,r=t.enter,i=t.exit,a=t.duration,c=void 0===a?750:a,l=t.appendPosition,d=void 0!==l&&l,f=t.collapse,p=void 0===f||f,v=t.collapseDuration,m=void 0===v?300:v;return Array.isArray(c)&&2===c.length?(e=c[0],n=c[1]):e=n=c,function(t){var a=t.children,c=t.position,l=t.preventExitTransition,f=t.done,v=u(t,["children","position","preventExitTransition","done"]),g=d?r+"--"+c:r,y=d?i+"--"+c:i,b=function t(){var e=v.nodeRef.current;e&&(e.removeEventListener("animationend",t),p?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout((function(){return e()}),n)}))}))}(e,f,m):f())};return Object(o.createElement)(s.a,Object.assign({},v,{timeout:l?p?m:50:{enter:e,exit:p?n+m:n+50},onEnter:function(){var t=v.nodeRef.current;t&&(t.classList.add(g),t.style.animationFillMode="forwards",t.style.animationDuration=e+"ms")},onEntered:function(){var t=v.nodeRef.current;t&&(t.classList.remove(g),t.style.cssText="")},onExit:l?b:function(){var t=v.nodeRef.current;t&&(t.classList.add(y),t.style.animationFillMode="forwards",t.style.animationDuration=n+"ms",t.addEventListener("animationend",b))},unmountOnExit:!0}),a)}}function E(t){var e=t.closeToast,n=t.type,r=t.ariaLabel,s=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":s},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function C(t){var e,n,r=t.delay,s=t.isRunning,i=t.closeToast,u=t.type,l=t.hide,d=t.className,f=t.style,p=t.controlledProgress,v=t.progress,m=t.rtl,g=t.isIn,y=c(c({},f),{},{animationDuration:r+"ms",animationPlayState:s?"running":"paused",opacity:l?0:1});p&&(y.transform="scaleX("+v+")");var b=a()("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,((e={})["Toastify__progress-bar--rtl"]=m,e),d),h=((n={})[p&&v>=1?"onTransitionEnd":"onAnimationEnd"]=p&&v<1?null:function(){g&&i()},n);return Object(o.createElement)("div",Object.assign({className:b,style:y},h))}C.defaultProps={type:O.DEFAULT,hide:!1};var I=function(t){var e,n=function(t){var e=Object(o.useState)(!0),n=e[0],r=e[1],s=Object(o.useState)(!1),i=s[0],a=s[1],c=Object(o.useRef)(null),u=X({start:0,x:0,y:0,deltaX:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=X(t,!0),d=t.autoClose,f=t.pauseOnHover,p=t.closeToast,m=t.onClick,g=t.closeOnClick;function y(e){var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.start=u.x=V(e.nativeEvent),u.removalDistance=n.offsetWidth*(t.draggablePercent/100)}function b(){if(u.boundingRect){var e=u.boundingRect,n=e.top,o=e.bottom,r=e.left,s=e.right;t.pauseOnHover&&u.x>=r&&u.x<=s&&u.y>=n&&u.y<=o?O():h()}}function h(){r(!0)}function O(){r(!1)}function T(t){var e=c.current;u.canDrag&&(n&&O(),u.x=V(t),u.deltaX=u.x-u.start,u.y=function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}(t),u.start!==u.x&&(u.canCloseOnClick=!1),e.style.transform="translateX("+u.deltaX+"px)",e.style.opacity=""+(1-Math.abs(u.deltaX/u.removalDistance)))}function E(){var e=c.current;if(u.canDrag){if(u.canDrag=!1,Math.abs(u.deltaX)>u.removalDistance)return a(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translateX(0)",e.style.opacity="1"}}Object(o.useEffect)((function(){return v(t.onOpen)&&t.onOpen(Object(o.isValidElement)(t.children)&&t.children.props),function(){v(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return t.draggable&&(document.addEventListener("mousemove",T),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T),document.addEventListener("touchend",E)),function(){t.draggable&&(document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E))}}),[t.draggable]),Object(o.useEffect)((function(){return t.pauseOnFocusLoss&&(window.addEventListener("focus",h),window.addEventListener("blur",O)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",O))}}),[t.pauseOnFocusLoss]);var C={onMouseDown:y,onTouchStart:y,onMouseUp:b,onTouchEnd:b};d&&f&&(C.onMouseEnter=O,C.onMouseLeave=h);g&&(C.onClick=function(t){m&&m(t),u.canCloseOnClick&&p()});return{playToast:h,pauseToast:O,isRunning:n,preventExitTransition:i,toastRef:c,eventHandlers:C}}(t),r=n.isRunning,s=n.preventExitTransition,i=n.toastRef,c=n.eventHandlers,u=t.closeButton,l=t.children,d=t.autoClose,f=t.onClick,p=t.type,m=t.hideProgressBar,g=t.closeToast,y=t.transition,b=t.position,h=t.className,O=t.style,T=t.bodyClassName,E=t.bodyStyle,I=t.progressClassName,j=t.progressStyle,R=t.updateId,_=t.role,k=t.progress,w=t.rtl,L=t.toastId,N=t.deleteToast,P=a()("Toastify__toast","Toastify__toast--"+p,((e={})["Toastify__toast--rtl"]=w,e),h),x=!!k;return Object(o.createElement)(y,{in:t.in,appear:!0,done:N,position:b,preventExitTransition:s,nodeRef:i},Object(o.createElement)("div",Object.assign({id:L,onClick:f,className:P},c,{style:O,ref:i}),Object(o.createElement)("div",Object.assign({},t.in&&{role:_},{className:a()("Toastify__toast-body",T),style:E}),l),function(t){if(!t)return null;var e={closeToast:g,type:p};return v(t)?t(e):Object(o.isValidElement)(t)?Object(o.cloneElement)(t,e):void 0}(u),(d||x)&&Object(o.createElement)(C,Object.assign({},R&&!x?{key:"pb-"+R}:{},{rtl:w,delay:d,isRunning:r,isIn:t.in,closeToast:g,hide:m,type:p,style:j,className:I,controlledProgress:x,progress:k}))))},j=T({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),R=function(t){var e=t.children,n=t.className,r=t.style,s=u(t,["children","className","style"]);return delete s.in,Object(o.createElement)("div",{className:n,style:r},o.Children.map(e,(function(t){return Object(o.cloneElement)(t,s)})))},_=function(t){var e=function(t){var e=Object(o.useReducer)((function(t){return t+1}),0)[1],n=Object(o.useReducer)(Q,[]),r=n[0],s=n[1],i=Object(o.useRef)(null),a=X(0),c=X([]),y=X({}),h=X({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:O,getToast:function(t){return y[t]||null}});function O(t){return-1!==r.indexOf(t)}function T(t){var e=t.containerId,n=h.props,o=n.limit,r=n.enableMultiContainer;o&&(!e||h.containerId===e&&r)&&(a-=c.length,c=[])}function E(t){var e=c.length;if((a=g(t)?a-1:a-h.displayedToast)<0&&(a=0),e>0){var n=g(t)?1:h.props.limit;if(1===e||1===n)h.displayedToast++,C();else{var o=n>e?e:n;h.displayedToast=o;for(var r=0;r<o;r++)C()}}s({type:"REMOVE",toastId:t})}function C(){var t=c.shift(),e=t.toastContent,n=t.toastProps,o=t.staleId;setTimeout((function(){j(e,n,o)}),500)}function I(t,n){var r=n.delay,s=n.staleId,l=u(n,["delay","staleId"]);if(b(t)&&!function(t){var e=t.containerId,n=t.toastId,o=t.updateId;return!!(!i.current||h.props.enableMultiContainer&&e!==h.props.containerId||h.isToastActive(n)&&null==o)}(l)){var g=l.toastId,O=l.updateId,T=h.props,C=function(){return E(g)},I=!(0,h.isToastActive)(g);I&&a++;var R,_,k={toastId:g,updateId:O,key:l.key||h.toastKey++,type:l.type,closeToast:C,closeButton:l.closeButton,rtl:T.rtl,position:l.position||T.position,transition:l.transition||T.transition,className:m(l.className||T.toastClassName),bodyClassName:m(l.bodyClassName||T.bodyClassName),style:l.style||T.toastStyle,bodyStyle:l.bodyStyle||T.bodyStyle,onClick:l.onClick||T.onClick,pauseOnHover:f(l.pauseOnHover)?l.pauseOnHover:T.pauseOnHover,pauseOnFocusLoss:f(l.pauseOnFocusLoss)?l.pauseOnFocusLoss:T.pauseOnFocusLoss,draggable:f(l.draggable)?l.draggable:T.draggable,draggablePercent:d(l.draggablePercent)?l.draggablePercent:T.draggablePercent,closeOnClick:f(l.closeOnClick)?l.closeOnClick:T.closeOnClick,progressClassName:m(l.progressClassName||T.progressClassName),progressStyle:l.progressStyle||T.progressStyle,autoClose:(R=l.autoClose,_=T.autoClose,!1===R||d(R)&&R>0?R:_),hideProgressBar:f(l.hideProgressBar)?l.hideProgressBar:T.hideProgressBar,progress:l.progress,role:p(l.role)?l.role:T.role,deleteToast:function(){!function(t){delete y[t],e()}(g)}};v(l.onOpen)&&(k.onOpen=l.onOpen),v(l.onClose)&&(k.onClose=l.onClose);var w=T.closeButton;!1===l.closeButton||b(l.closeButton)?w=l.closeButton:!0===l.closeButton&&(w=!b(T.closeButton)||T.closeButton),k.closeButton=w;var L=t;Object(o.isValidElement)(t)&&!p(t.type)?L=Object(o.cloneElement)(t,{closeToast:C}):v(t)&&(L=t({closeToast:C})),T.limit&&T.limit>0&&a>T.limit&&I?c.push({toastContent:L,toastProps:k,staleId:s}):d(r)&&r>0?setTimeout((function(){j(L,k,s)}),r):j(L,k,s)}}function j(t,e,n){var o=e.toastId;y[o]={content:t,props:e},s({type:"ADD",toastId:o,staleId:n})}function R(e){for(var n={},o=t.newestOnTop?Object.keys(y).reverse():Object.keys(y),r=0;r<o.length;r++){var s=y[o[r]],i=s.props.position;n[i]||(n[i]=[]),n[i].push(s)}return Object.keys(n).map((function(t){return e(t,n[t])}))}return Object(o.useEffect)((function(){return h.containerId=t.containerId,l.cancelEmit(3).on(0,I).on(1,(function(t){return i.current&&E(t)})).on(5,T).emit(2,h),function(){return l.emit(3,h)}}),[]),Object(o.useEffect)((function(){h.isToastActive=O,h.displayedToast=r.length,l.emit(4,r.length,t.containerId)}),[r]),Object(o.useEffect)((function(){h.props=t})),{getToastToRender:R,collection:y,containerRef:i,isToastActive:O}}(t),n=e.getToastToRender,r=e.containerRef,s=e.isToastActive,i=t.className,y=t.style,h=t.rtl,O=t.containerId;return Object(o.createElement)("div",{ref:r,className:"Toastify",id:O},n((function(t,e){var n,r={className:a()("Toastify__toast-container","Toastify__toast-container--"+t,(n={},n["Toastify__toast-container--rtl"]=h,n),m(i)),style:0===e.length?c(c({},y),{},{pointerEvents:"none"}):c({},y)};return Object(o.createElement)(R,Object.assign({},r,{key:"container-"+t}),e.map((function(t){var e=t.content,n=t.props;return Object(o.createElement)(I,Object.assign({},n,{in:s(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?E:n.closeButton}),e)})))})))};_.defaultProps={position:h.TOP_RIGHT,transition:j,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:E,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,role:"alert"};var k,w,L,N=new Map,P=[],x=!1;function A(){return N.size>0}function B(t,e){var n=function(t){return A()?N.get(t||k):null}(e.containerId);return n?n.getToast(t):null}function D(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function S(t){return t&&(p(t.toastId)||d(t.toastId))?t.toastId:D()}function M(t,e){return A()?l.emit(0,t,e):(P.push({content:t,options:e}),x&&y&&(x=!1,w=document.createElement("div"),document.body.appendChild(w),Object(r.render)(Object(o.createElement)(_,Object.assign({},L)),w))),e.toastId}function F(t,e){return c(c({},e),{},{type:e&&e.type||t,toastId:S(e)})}var H=function(t,e){return M(t,F(O.DEFAULT,e))};function X(t,e){void 0===e&&(e=!1);var n=Object(o.useRef)(t);return Object(o.useEffect)((function(){e&&(n.current=t)})),n.current}function Q(t,e){switch(e.type){case"ADD":return[].concat(t,[e.toastId]).filter((function(t){return t!==e.staleId}));case"REMOVE":return g(e.toastId)?t.filter((function(t){return t!==e.toastId})):[]}}function V(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}H.success=function(t,e){return M(t,F(O.SUCCESS,e))},H.info=function(t,e){return M(t,F(O.INFO,e))},H.error=function(t,e){return M(t,F(O.ERROR,e))},H.warning=function(t,e){return M(t,F(O.WARNING,e))},H.dark=function(t,e){return M(t,F(O.DARK,e))},H.warn=H.warning,H.dismiss=function(t){return A()&&l.emit(1,t)},H.clearWaitingQueue=function(t){return void 0===t&&(t={}),A()&&l.emit(5,t)},H.isActive=function(t){var e=!1;return N.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},H.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=B(t,e);if(n){var o=n.props,r=n.content,s=c(c(c({},o),e),{},{toastId:e.toastId||t,updateId:D()});s.toastId!==t&&(s.staleId=t);var i="undefined"!==typeof s.render?s.render:r;delete s.render,M(i,s)}}),0)},H.done=function(t){H.update(t,{progress:1})},H.onChange=function(t){return v(t)&&l.on(4,t),function(){v(t)&&l.off(4,t)}},H.configure=function(t){void 0===t&&(t={}),x=!0,L=t},H.POSITION=h,H.TYPE=O,l.on(2,(function(t){k=t.containerId||t,N.set(k,t),P.forEach((function(t){l.emit(0,t.content,t.options)})),P=[]})).on(3,(function(t){N.delete(t.containerId||t),0===N.size&&l.off(0).off(1).off(5),y&&w&&document.body.removeChild(w)}))},118:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var s=typeof o;if("string"===s||"number"===s)t.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&t.push(i)}else if("object"===s)for(var a in o)n.call(o,a)&&o[a]&&t.push(a)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()}}]);
//# sourceMappingURL=5.de66886a.chunk.js.map