(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(11),r=n.n(c),o=(n(79),n(20)),l=n(16),s=n(67),d=(n(81),n(149)),j=n(148),b=n(150),u=n(59),h=function(e,t){return u.create({baseURL:"https://api.ke22.ru",headers:{"Content-Type":"application/json",Accept:"application/json"}}).get("/geo/locality/?term=".concat(e,"&count=").concat(t))},O=n(152),m=n(9);var g=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.a)({mode:"onChange"}),r=c.register,u=c.handleSubmit,g=c.formState,p=g.errors,x=(g.submitCount,c.watch),f=Object(i.useState)([]),v=Object(l.a)(f,2),y=v[0],C=v[1],S=Object(i.useState)([]),q=Object(l.a)(S,2),B=q[0],k=q[1],w=x("name"),L=x("age"),T=x("email"),E=(x("city"),!L||!w||!T||Object.keys(p).length>0);return Object(m.jsxs)("div",{style:{margin:"auto",width:"50vw"},children:[Object(m.jsx)(O.a,{open:n,onClose:function(){a(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:Object(m.jsxs)("div",{style:{padding:40},children:[Object(m.jsx)("h3",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}),Object(m.jsxs)("p",{children:["\u0418\u043c\u044f: ",w]}),Object(m.jsxs)("p",{children:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",L]}),Object(m.jsxs)("p",{children:["Email: ",T]}),Object(m.jsxs)("p",{children:["\u0413\u043e\u0440\u043e\u0434: ",B.full_title]})]})}),Object(m.jsx)("h1",{children:"\u0424\u043e\u0440\u043c\u0430"}),Object(m.jsxs)("form",{onSubmit:u((function(e){a(!0)})),children:[Object(m.jsxs)("div",{style:{marginBottom:30},children:[Object(m.jsx)(d.a,Object(o.a)(Object(o.a)({},r("name",{maxLength:10})),{},{required:!0,id:"outlined-required",label:"\u0418\u043c\u044f",variant:"outlined"})),p.name&&Object(m.jsx)("p",{children:"\u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),Object(m.jsxs)("div",{style:{marginBottom:30},children:[Object(m.jsx)(d.a,Object(o.a)(Object(o.a)({error:p.age},r("age",{required:!0,pattern:/\d?\d/,min:10,max:99})),{},{id:"outlined-required",label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",variant:"outlined"})),p.age&&Object(m.jsx)("p",{children:"\u043e\u0442 10 \u0434\u043e 99"})]}),Object(m.jsxs)("div",{style:{marginBottom:30},children:[Object(m.jsx)(d.a,Object(o.a)(Object(o.a)({},r("email",{required:!0,pattern:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})),{},{required:!0,id:"outlined-required",label:"Email",variant:"outlined"})),p.email&&Object(m.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email"})]}),Object(m.jsx)("div",{style:{marginBottom:30},children:Object(m.jsx)(b.a,{disableListWrap:!0,id:"combo-box-demo",options:y.map((function(e){return e.full_title})),fullWidth:!0,renderInput:function(e){return Object(m.jsx)(d.a,Object(o.a)(Object(o.a)(Object(o.a)({},e),r("city",{})),{},{onChange:function(e){!function(e){e.length>=1&&h(e,10).then((function(e){C(e.data)}))}(e.target.value)},label:"\u0413\u043e\u0440\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0433\u0440\u0443\u0437\u0430",variant:"outlined"}))},noOptionsText:"\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430",onChange:function(e){console.log("change"),function(e,t){e&&e.length>=1&&h(e,1).then((function(e){k(e.data[0])}))}(e.target.valueOf().innerText)}})}),Object(m.jsx)("div",{style:{marginBottom:30},children:Object(m.jsx)(j.a,{disabled:E,type:"submit",variant:"contained",color:"primary",children:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),p()},79:function(e,t,n){},81:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.0decf0fc.chunk.js.map