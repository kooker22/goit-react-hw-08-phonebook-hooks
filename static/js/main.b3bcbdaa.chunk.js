(this["webpackJsonpgoit-react-hw-08-phonebook-hooks"]=this["webpackJsonpgoit-react-hw-08-phonebook-hooks"]||[]).push([[1],{20:function(e,t,n){e.exports={menu:"AuthNav_menu__clM_q",link:"AuthNav_link__1Wz0w",btn:"AuthNav_btn__240hg"}},24:function(e,t,n){e.exports={container:"UserMenu_container__TEyx0",avatar:"UserMenu_avatar__1Q5QW",name:"UserMenu_name__2D4fz",link:"UserMenu_link__e4TVq",btn:"UserMenu_btn__ELgVJ"}},46:function(e,t,n){e.exports={link:"NavBar_link__3PdIS"}},47:function(e,t,n){e.exports=n.p+"static/media/default-avatar.ccafcf34.png"},48:function(e,t,n){},50:function(e,t,n){e.exports=n(81)},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return C})),n.d(t,"c",(function(){return y}));var r,c,a,u,o=n(1),s={registerRequest:Object(o.b)("auth/registerRequest"),registerSuccess:Object(o.b)("auth/registerSuccess"),registerError:Object(o.b)("auth/registerError"),loginRequest:Object(o.b)("auth/loginRequest"),loginSuccess:Object(o.b)("auth/loginSuccess"),loginError:Object(o.b)("auth/loginError"),logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),getCurrentUserRequest:Object(o.b)("auth/getCurrentUserRequest"),getCurrentUserSucces:Object(o.b)("auth/getCurrentUserSucces"),getCurrentUserError:Object(o.b)("auth/getCurrentUserError")},i=n(2),l=n(5),b={name:null,email:null},f=Object(o.c)(b,(r={},Object(i.a)(r,s.registerSuccess,(function(e,t){return t.payload.user})),Object(i.a)(r,s.loginSuccess,(function(e,t){return t.payload.user})),Object(i.a)(r,s.logoutSuccess,(function(e,t){return b})),Object(i.a)(r,s.getCurrentUserSucces,(function(e,t){return t.payload})),r)),g=Object(o.c)(null,(c={},Object(i.a)(c,s.registerSuccess,(function(e,t){return t.payload.token})),Object(i.a)(c,s.loginSuccess,(function(e,t){return t.payload.token})),Object(i.a)(c,s.logoutSuccess,(function(){return null})),c)),d=function(e,t){return t.payload},j=Object(o.c)(null,(a={},Object(i.a)(a,s.registerError,d),Object(i.a)(a,s.loginError,d),Object(i.a)(a,s.logoutError,d),Object(i.a)(a,s.getCurrentUserError,d),a)),O=Object(o.c)(!1,(u={},Object(i.a)(u,s.registerSuccess,(function(){return!0})),Object(i.a)(u,s.loginSuccess,(function(){return!0})),Object(i.a)(u,s.getCurrentUserSucces,(function(){return!0})),Object(i.a)(u,s.registerError,(function(){return!1})),Object(i.a)(u,s.loginError,(function(){return!1})),Object(i.a)(u,s.getCurrentUserError,(function(){return!1})),Object(i.a)(u,s.logoutSuccess,(function(){return!1})),u)),h=Object(l.c)({user:f,token:g,isAuthenticated:O,error:j}),m=n(16),p=n.n(m),E=n(23),v=n(18),k=n.n(v);k.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var S=function(e){k.a.defaults.headers.common.Authorization="Bearer ".concat(e)},_=function(){k.a.defaults.headers.common.Authorization=""},C={register:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(s.registerRequest()),t.prev=1,t.next=4,k.a.post("/users/signup",e);case 4:r=t.sent,S(r.data.token),n(s.registerSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(s.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(E.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s.loginRequest),e.prev=1,e.next=4,k.a.post("users/logout");case 4:_(),t(s.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(s.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(s.loginRequest),t.prev=1,t.next=4,k.a.post("users/login",e);case 4:r=t.sent,S(r.data.token),n(s.loginSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(s.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(E.a)(p.a.mark((function e(t,n){var r,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(),c=r.auth.token){e.next=3;break}return e.abrupt("return");case 3:return S(c),t(s.getCurrentUserRequest()),e.prev=5,e.next=8,k.a.get("/users/current");case 8:a=e.sent,t(s.getCurrentUserSucces(a.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(s.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},y={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUserName:function(e){return e.auth.user.name}}},81:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),u=n.n(a),o=n(25),s=n.n(o),i=n(15),l=n(43),b=n(6),f=n(1),g=n(17),d=n(45),j=n.n(d),O=n(2),h=n(49),m=n(5),p=n(9),E=Object(f.c)([],(r={},Object(O.a)(r,p.j,(function(e,t){return t.payload})),Object(O.a)(r,p.c,(function(e,t){var n=t.payload;return[].concat(Object(h.a)(e),[n])})),Object(O.a)(r,p.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),v=Object(f.c)("",Object(O.a)({},p.d,(function(e,t){return t.payload}))),k=Object(f.c)(!1,(c={},Object(O.a)(c,p.i,(function(){return!0})),Object(O.a)(c,p.j,(function(){return!1})),Object(O.a)(c,p.h,(function(){return!1})),Object(O.a)(c,p.b,(function(){return!0})),Object(O.a)(c,p.c,(function(){return!1})),Object(O.a)(c,p.a,(function(){return!1})),Object(O.a)(c,p.f,(function(){return!0})),Object(O.a)(c,p.g,(function(){return!1})),Object(O.a)(c,p.e,(function(){return!1})),c)),S=Object(f.c)(null,{}),_=Object(m.c)({contacts:E,filter:v,loading:k,error:S}),C=n(7),y={key:"auth",storage:j.a,whitelist:["token"]},U=Object(f.a)({reducer:{auth:Object(g.g)(y,C.b),phonebook:_},devTools:!1,middleware:Object(f.d)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})}),x={store:U,persistor:Object(g.h)(U)},q=n(4),A=n(46),N=n.n(A);function w(){var e=Object(b.c)(C.c.getIsAuthenticated);return u.a.createElement("nav",null,e&&u.a.createElement(i.b,{to:"/contacts",exact:!0,className:N.a.link},"Phonebook"))}var R=n(47),T=n.n(R),z=n(24),I=n.n(z);function M(){var e=Object(b.b)(),t=Object(b.c)(C.c.getUserName),n=Object(a.useCallback)((function(){e(C.a.logOut())}),[e]);return u.a.createElement("div",{className:I.a.container},u.a.createElement("img",{src:T.a,alt:"",width:"32",className:I.a.avatar}),u.a.createElement("span",{className:I.a.name},"Welcome, ",t),u.a.createElement("button",{type:"button",className:I.a.btn,onClick:n},"Logout"))}var L=n(20),P=n.n(L),B=function(){return u.a.createElement("div",{className:P.a.menu},u.a.createElement("button",{type:"button",className:P.a.btn},u.a.createElement(i.b,{to:"/register",exact:!0,className:P.a.link},"Sign Up")),u.a.createElement("button",{type:"button",className:P.a.btn},u.a.createElement(i.b,{to:"/login",exact:!0,className:P.a.link},"Log in")))},J=n(48),W=n.n(J);function F(){var e=Object(b.c)(C.c.getIsAuthenticated);return u.a.createElement("header",{className:W.a.header},u.a.createElement(w,null),e?u.a.createElement(M,null):u.a.createElement(B,null))}var Q=n(27);function V(e){e.isAuthenticated;var t=e.redirectTo,n=e.children,r=Object(Q.a)(e,["isAuthenticated","redirectTo","children"]),c=Object(b.c)(C.c.getIsAuthenticated);return u.a.createElement(q.b,r,c?n:u.a.createElement(q.a,{to:t}))}function D(e){e.isAuthenticated;var t=e.redirectTo,n=e.children,r=Object(Q.a)(e,["isAuthenticated","redirectTo","children"]),c=Object(b.c)(C.c.getIsAuthenticated);return u.a.createElement(q.b,r,c&&r.restricted?u.a.createElement(q.a,{to:t}):n)}var G=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(4)]).then(n.bind(null,160))})),H=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,162))})),K=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,157))}));function X(){var e=Object(b.b)();return Object(a.useEffect)((function(){e(C.a.getCurrentUser())}),[e]),u.a.createElement(u.a.Fragment,null,u.a.createElement(F,null),u.a.createElement(a.Suspense,{fallback:u.a.createElement("p",null,"Loading... ")},u.a.createElement(q.d,null,u.a.createElement(V,{exact:!0,path:"/contacts",redirectTo:"/login"},u.a.createElement(G,null)),u.a.createElement(D,{path:"/register",restricted:!0,redirectTo:"/"},u.a.createElement(H,null)),u.a.createElement(D,{restricted:!0,redirectTo:"/contacts",path:"/login"},u.a.createElement(K,null)))))}n(80);s.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(b.a,{store:x.store},u.a.createElement(l.a,{loading:null,persistor:x.persistor},u.a.createElement(i.a,null,u.a.createElement(X,null))))),document.getElementById("root"))},9:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"h",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return g}));var r=n(1),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),o=Object(r.b)("contacts/addContactSuccess"),s=Object(r.b)("contacts/addContactRequest"),i=Object(r.b)("contacts/addContactError"),l=Object(r.b)("contacts/deleteContactSuccess"),b=Object(r.b)("contacts/deleteContactRequest"),f=Object(r.b)("contacts/deleteContactError"),g=Object(r.b)("phonebook/changeFilter",(function(e){return{payload:e}}))}},[[50,2,3]]]);
//# sourceMappingURL=main.b3bcbdaa.chunk.js.map