"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[500],{2500:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,i,u,c,s=t(9439),a=t(2791),h=t(168),f=t(6444),l=f.ZP.h1(r||(r=(0,h.Z)(["\n  margin: 0 auto ;\n  text-align: center;\n  padding: ","px ","px;\n  font-weight: ",";\n  font-size: ",";\n  text-decoration: underline;\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.visited})),d=f.ZP.header(o||(o=(0,h.Z)(["\nmargin: 0 auto;\nwidth: 600px;\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ","px;\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: ",";\n\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.lightOrange}),(function(n){return n.theme.shadows.normal}),(function(n){return n.theme.radii.normal})),m=f.ZP.form(i||(i=(0,h.Z)(["\nmargin : 0 auto;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  background-color: #fff;\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.radii.normal})),p=f.ZP.button(u||(u=(0,h.Z)(["\n  display: block;\n  width: 60px;\n  height: ","px;\n  padding-top: ","px;\n    font-size: ",";\n   border: 0;\n  background-color:",";\n    opacity: 0.8;\n  transition: background-color ",", opacity ",";\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n    box-shadow: ",";\n    background-color:",";\n\n  }\n"])),(function(n){return n.theme.sizes[5]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.section}),(function(n){return n.theme.transitions.cubic}),(function(n){return n.theme.transitions.cubic}),(function(n){return n.theme.shadows.white}),(function(n){return n.theme.colors.orange})),g=f.ZP.input(c||(c=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: ","px;\n  font: inherit;\n  font-size: ",";\n  font-weight: ",";\n  /* text-align: center; */\n  border: none;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  /* box-shadow:  ","; */\n;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.sizes[5]}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.shadows.inner})),x=t(5763),b=t(1087),w=t(184),Z=function(){var n=(0,a.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],o=(0,b.lr)(),i=(0,s.Z)(o,2)[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{children:"Movies Search"}),(0,w.jsx)(d,{children:(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault(),i(t?{query:t}:{}),r("")},children:[(0,w.jsx)(p,{type:"submit",children:(0,w.jsx)(x.a4h,{})}),(0,w.jsx)(g,{type:"text",autocomplete:"off",value:t,autoFocus:!0,placeholder:"Search movie",onChange:function(n){r(n.target.value)}})]})})]})},v=t(7689),j=t(2219),y=t(8647),k=t(8908),S=function(){var n=(0,a.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],o=(0,a.useState)(""),i=(0,s.Z)(o,2),u=i[0],c=i[1],h=(0,b.lr)(),f=(0,s.Z)(h,1)[0],l=(0,v.TH)(),d=f.get("query");return(0,a.useEffect)((function(){r([]),c(""),d&&(0,j.kN)(d).then((function(n){if(0===n.results.length)throw new Error("OOPS... Nothing Found... Sorry..");r(n.results)})).catch((function(n){return c(n.message)}))}),[d,f]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{children:[(0,w.jsx)(Z,{}),u&&(0,w.jsx)(k.Z,{children:u}),d&&(0,w.jsx)(y.Z,{movies:t,location:l})]})})}}}]);
//# sourceMappingURL=500.d8ae9e45.chunk.js.map