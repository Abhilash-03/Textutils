(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),o=(c(9),c(2)),l=(c(10),c(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-2"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Darkmode"})]})]})]})})}function b(e){var t=Object(n.useState)({color:"black",backgroundColor:"white",borderRadius:"6px"}),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),b=i[0],d=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:a,mystyle:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("textarea",{className:"form-control",value:b,onChange:function(e){d(e.target.value)},style:a,id:"myBox",rows:"8",mystyle:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"}}),Object(l.jsx)("button",{className:"btn btn-outline-primary my-3",onClick:function(){var t=b.toUpperCase();d(t),e.showAlert("Converted to uppercase","success")},children:"Convert to uppercase"}),Object(l.jsx)("button",{className:"btn btn-outline-danger my-3 mx-3",onClick:function(){var t=b.toLowerCase();d(t),e.showAlert("Converted to lowercase","success")},children:"Convert to lowercase"}),Object(l.jsx)("button",{className:"btn btn-outline-success my-3 mx-3",onClick:function(){"black"===a.color?s({color:"chartreuse",backgroundColor:"black",border:"2px solid chartreuse",borderRadius:"8px"}):s({color:"black",backgroundColor:"white"})},children:"color"}),Object(l.jsx)("button",{className:"btn btn-outline-info my-3 mx-3",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=b,window.speechSynthesis.speak(e)},children:"Read text"}),Object(l.jsx)("button",{className:"btn btn-outline-primary my-3 mx-3",onClick:function(){window.speechSynthesis.cancel()},children:"Stop reading"}),Object(l.jsx)("button",{className:"btn btn-outline-dark my-3 mx-3",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy"}),Object(l.jsx)("button",{className:"btn btn-outline-primary my-3 mx-3",onClick:function(){d(" "),e.showAlert("Text has been cleared!","success")},children:"Clear text"})]})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:" Your text summary "}),Object(l.jsxs)("p",{children:[b.split(" ").length," words and ",b.length," character "]}),Object(l.jsxs)("p",{children:[.008*b.split(" ").length," minutes to read"]}),Object(l.jsx)("h2",{children:" Preview "}),Object(l.jsx)("p",{children:b.length>0?b:"Enter something in the text box above to preview it here"})]})]})}function d(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}i.defaultProps={title:"Set title here",aboutText:"About"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),u=r[0],h=r[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),3e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"Textutils",mode:c,toggleMode:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled!","success")):(a("light"),document.body.style.backgroundColor="white",m("light mode has been enabled!","success"))}}),Object(l.jsx)(d,{alert:u}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(b,{showAlert:m,heading:"Enter the text to analyize",mode:c})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c1122074.chunk.js.map