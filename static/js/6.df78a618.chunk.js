(this["webpackJsonpgoit-react-hw-08-phonebook-hooks"]=this["webpackJsonpgoit-react-hw-08-phonebook-hooks"]||[]).push([[6],{157:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return b}));var n=t(100),o=t(0),r=t.n(o),i=t(6),l=t(7),m=t(161),s=t(155),c=t(158),u=t(156),p=t(149),d=t(153);function b(){var a=Object(i.b)(),e=Object(o.useState)(""),t=Object(n.a)(e,2),b=t[0],g=t[1],f=Object(o.useState)(""),h=Object(n.a)(f,2),v=h[0],w=h[1],E=Object(o.useCallback)((function(a){var e=a.target,t=e.name,n=e.value;"email"===t?g(n):"password"===t&&w(n)}),[]),k=Object(p.a)((function(a){return{paper:{marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:a.spacing(1),backgroundColor:a.palette.secondary.main},form:{width:"100%",marginTop:a.spacing(1)},submit:{margin:a.spacing(3,0,2)}}}));return r.a.createElement(d.a,{component:"main",maxWidth:"xs"},r.a.createElement(s.a,null),r.a.createElement("div",{className:k.paper},r.a.createElement(u.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(l.a.logIn({email:b,password:v})),g(""),w("")},className:k.form,autoComplete:"off",noValidate:!0},r.a.createElement(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:b,onChange:E,autoComplete:"email",autoFocus:!0}),r.a.createElement(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:v,onChange:E,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:k.submit},"Sign In"))))}}}]);
//# sourceMappingURL=6.df78a618.chunk.js.map