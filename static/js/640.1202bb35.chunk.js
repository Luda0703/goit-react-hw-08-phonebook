"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[640],{6640:function(n,e,r){r.r(e),r.d(e,{App:function(){return U}});var o,t,a,i,c,s,d,l=r(168),u=r(7686),p=u.Z.form(o||(o=(0,l.Z)(["\n\n"]))),x=u.Z.label(t||(t=(0,l.Z)(["\ndisplay: blok;\ntext-align: start;\ncolor: #696969;\n"]))),b=u.Z.input(a||(a=(0,l.Z)(["\npadding: 15px;\nborder-radius:7px;\n// border:0px;\nbackground-color: #C0C0C0;\ndisplay: block;\nmargin-top: 5px;\nmargin-bottom: 15px;\nwidth: 200px;  \ncolor: white;\nfont-size:18px;\nborder: 1px solid #FFDAB9;\n\n:focus {\n    outline-color: rgba(0,0,0,0);\n    background: rgba(255,255,255,.95);\n    color: #e74c3c;\n    border: 1px solid #FFDAB9;\n\n"]))),h=u.Z.button(i||(i=(0,l.Z)(["\nbackground-color: #2F4F4F;\ncolor: #FFFFFF;\nwidth: 100px;\nborder-radius:7px;\npadding: 8px;\n"]))),m=r(9434),f=r(2413),g=function(n){return n.contacts.items},F=function(n){return n.filter},Z=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},j=function(n){var e=n.contacts.items,r=n.filter;return r?e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())})):e},k=r(1686),C=r.n(k),w=r(184);function y(){var n=(0,m.I0)(),e=(0,m.v9)(g),r=function(r){var o=r.name,t=r.phone;if(e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()||n.phone===t})))return C().Notify.info("".concat(o," or ").concat(t," is already in contacts"));n((0,f.uK)({name:o,phone:t}))};return(0,w.jsxs)(p,{onSubmit:function(n){n.preventDefault();var e=n.target,o=e.elements.name.value,t=e.elements.number.value;r({name:o,phone:t}),e.reset()},children:[(0,w.jsxs)(x,{children:[" ","Name",(0,w.jsx)(b,{type:"text",value:e.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(x,{children:[" ","Phone number",(0,w.jsx)(b,{type:"tel",value:e.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(h,{type:"submit",children:"Add contact"})]})}var A,z,_,D,B,L,I,E,N=u.Z.div(c||(c=(0,l.Z)(["\n"]))),P=u.Z.label(s||(s=(0,l.Z)(["\ndisplay: blok;\ntext-align: start;\ncolor: #696969;\n"]))),q=u.Z.input(d||(d=(0,l.Z)(["\npadding: 15px;\nborder-radius:7px;\n// border:0px;\nbackground-color: #C0C0C0;\ndisplay: block;\nmargin-top: 5px;\nmargin-bottom: 15px;\nwidth: 200px;  \ncolor: white;\nfont-size:18px;\nborder: 1px solid #FFDAB9;\n\n:focus {\n    outline-color: rgba(0,0,0,0);\n    background: rgba(255,255,255,.95);\n    color: #e74c3c;\n    border: 1px solid #FFDAB9;\n\n"]))),K=r(4110),G=function(){var n=(0,m.I0)(),e=(0,m.v9)(F);return(0,w.jsx)(N,{children:(0,w.jsxs)(P,{children:["Find contacts by name",(0,w.jsx)(q,{type:"name",value:e,onChange:function(e){return n((0,K.b)(e.currentTarget.value))}})]})})},J=u.Z.ul(A||(A=(0,l.Z)(["\nlist-style: none;\npadding: 0;\n"]))),M=u.Z.li(z||(z=(0,l.Z)(["\n"]))),S=u.Z.button(_||(_=(0,l.Z)(["\nbackground-color: #2F4F4F;\ncolor: #FFFFFF;\nwidth: 100px;\nborder-radius:7px;\npadding: 8px;\n"]))),T=u.Z.p(D||(D=(0,l.Z)(["\ncolor: #696969;\nfont-size:18px;\n"]))),$=function(){var n=(0,m.I0)(),e=(0,m.v9)(j);return(0,w.jsx)(J,{children:e.map((function(e){var r=e.name,o=e.phone,t=e.id;return(0,w.jsxs)(M,{children:[(0,w.jsxs)(T,{children:[r,": ",o]}),(0,w.jsx)(S,{type:"button",onClick:function(){return n((0,f.GK)(t))},children:"Delete"})]},t)}))})},H=u.Z.div(B||(B=(0,l.Z)(["\n border: 1px solid #FFDAB9;\nposition: relative;\nmargin: 50px auto;\n  width: 300px;\n  height: auto;\n  text-align: start;\n  padding: 30px;\n  background-color: #FFE4E1;\n  border-radius: 10px;\n"]))),O=u.Z.h1(L||(L=(0,l.Z)(["\ncolor: #696969;\n"]))),Q=u.Z.h2(I||(I=(0,l.Z)(["\ncolor: #696969;\n"]))),R=(u.Z.p(E||(E=(0,l.Z)(["\ncolor: #696969;\nfont-size:18px;\n"]))),r(2791));function U(){var n=(0,m.v9)(Z),e=(0,m.v9)(v),r=(0,m.I0)();return(0,R.useEffect)((function(){r((0,f.yF)())}),[r]),(0,w.jsxs)(H,{children:[(0,w.jsx)(O,{children:"Phonebook"}),(0,w.jsx)(y,{}),(0,w.jsx)(Q,{children:"Contacts "}),(0,w.jsx)(G,{}),(0,w.jsx)($,{}),n&&(0,w.jsx)("div",{children:"Loading..."}),e&&(0,w.jsx)("div",{children:e})]})}}}]);
//# sourceMappingURL=640.1202bb35.chunk.js.map