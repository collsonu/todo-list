(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(6),r=n.n(s),o=(n(12),n(7)),j=n(5),a=n(0),u=function(t){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"todo_style",children:[Object(a.jsx)("i",{className:"fas fa-times-circle",onClick:function(){t.onSelect(t.id)}}),Object(a.jsx)("li",{children:t.text})]})})},l=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)([]),r=Object(j.a)(s,2),l=r[0],b=r[1],d=function(t){b((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"main_div",children:Object(a.jsxs)("div",{className:"center_div",children:[Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"ToDo List"}),Object(a.jsx)("br",{}),Object(a.jsxs)("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),b((function(t){return[].concat(Object(o.a)(t),[n])})),i("")},children:[Object(a.jsx)("input",{type:"text",placeholder:"Add a Items",value:n,onChange:function(t){i(t.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"+"})]}),Object(a.jsx)("ol",{children:l.map((function(t,e){return Object(a.jsx)(u,{id:e,text:t,onSelect:d},e)}))})]})})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.e6d48aa6.chunk.js.map