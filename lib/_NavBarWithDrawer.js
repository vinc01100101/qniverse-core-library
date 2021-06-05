!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports["@qniverse/core"]=t(require("react"),require("react-dom")):e["@qniverse/core"]=t(e.React,e.ReactDOM)}(this,(function(e,t){return(()=>{"use strict";var r={5491:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(6888),a=r.n(n),o=r(8304),l=r(2822),i=r(8867),c=r(5517),s=r(5757),u=r(7812),m=r(2318),f=r(5258),p=r(8358),d=r(602);const h=(0,r(1120).Z)((function(e){return{toolbar:{display:"flex",justifyContent:"space-between","& > div":{display:"flex","& > .appbar-logo-container":{width:120,display:"flex",alignItems:"center"}}},navLinks:{"& > .MuiIconButton-label":(t={color:e.palette.primary.contrastText,fontSize:15},r=e.breakpoints.down("sm"),n={display:"flex",flexDirection:"column",fontSize:8},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t)},drawerContainer:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",background:"white",width:"300px",padding:"20px"},listItemText:{textDecoration:"none",color:"black"},footerList:{background:e.palette.primary.main,"& svg":{color:e.palette.primary.contrastText}},logo:{width:"100%"},logoContainer:{width:"100%",background:e.palette.primary.main},copyRight:{color:e.palette.primary.contrastText,fontStyle:"normal",fontWeight:"normal",fontSize:"14px",lineHeight:"18px",opacity:"0.5"},advertise:{background:e.palette.secondary.main,position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",height:38,width:"100%",zIndex:1,"& a":{textDecoration:"none",color:e.palette.secondary.contrastText}}};var t,r,n}));var y=r(5221),b=a().createElement("svg",{width:24,height:24},a().createElement("use",{xlinkHref:"#logo-linkedin"})),g=a().createElement("svg",{width:24,height:24},a().createElement("use",{xlinkHref:"#logo-youtube"})),v=a().createElement("svg",{width:24,height:24},a().createElement("use",{xlinkHref:"#logo-facebook"})),k=a().createElement("svg",{width:24,height:24},a().createElement("use",{xlinkHref:"#logo-instagram"}));function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e){var t,r,n=e.drawerContent,x=[[y.default.links.facebook,v,"Facebook"],[y.default.links.instagram,k,"Instagram"],[y.default.links.youtube,g,"YouTube"],[y.default.links.linkedIn,b,"Linked In"]],w=y.default.anchorElement,O=h(),j=(t=a().useState(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),Z=j[0],S=j[1],C=function(e){return function(t){S(e)}};return a().createElement("div",null,a().createElement(o.Z,{anchor:"left",open:Z,onOpen:C(!0),onClose:C(!1),disableBackdropTransition:!0,disableDiscovery:!0,disableSwipeToOpen:!0,transitionDuration:{appear:500,enter:500,exit:500}},a().createElement("div",{className:O.drawerContainer},a().createElement(l.Z,null,a().createElement(i.Z,{className:O.logoContainer,onClick:C(!1)},a().createElement(w,{href:"/"},a().createElement("img",{src:y.default.companyLogoSrc,className:O.logo}))),void 0!==n&&a().createElement(a().Fragment,null,a().createElement(i.Z,{onClick:C(!1)},n),a().createElement(c.Z,null)),y.default.drawerList.map((function(e,t){return a().createElement(w,{key:t,href:y.default.links[e][0],target:y.default.links[e][1]?"_blank":"_self",onClick:C(!1),className:O.listItemText},a().createElement(i.Z,{button:!0},a().createElement(s.Z,{primary:e,primaryTypographyProps:{variant:"body1"}})))}))),a().createElement(l.Z,{className:O.footerList},a().createElement(i.Z,null,x.map((function(e,t){return a().createElement(u.Z,{"aria-label":e[2],key:t,href:e[0],target:"_blank"},e[1])}))),a().createElement(i.Z,null,a().createElement(m.Z,{className:O.copyRight},"© Copyright 2020, Automart.PH",a().createElement("br",null),"All rights reserved"))))),a().createElement(f.Z,{style:{height:64}},a().createElement(p.Z,{style:{height:64},className:O.toolbar},a().createElement("div",null,a().createElement(u.Z,{"aria-label":"Menu Button",edge:"start",color:"inherit",onClick:C(!0)},a().createElement(d.Z,null)),a().createElement("a",{"aria-label":"Home",href:"#",className:"appbar-logo-container"},a().createElement("img",{src:y.default.companyLogoSrc,className:O.logo}))),a().createElement("div",null,y.default.navList.map((function(e,t){var r=y.default.navIcons[t];return a().createElement(u.Z,{key:t,href:y.default.links[e][0],target:"_blank","aria-label":e,className:O.navLinks},a().createElement(r,null),e)}))))),a().createElement(p.Z,{style:{height:64}}),a().createElement("div",{className:O.advertise},a().createElement("a",{href:y.default.advertise.link,target:"_blank"},y.default.advertise.text)),a().createElement(p.Z,null))}},6384:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n}),(0,r(4811).ZP)({});const n={palette:{primary:{light:"#ffc004",main:"#fabd09",dark:"#e8af04",contrastText:"#242424",background:"rgba(255,147,44,.6)"},secondary:{light:"#9fd497",main:"#809b8a ",dark:"#42743d",contrastText:"#fff"}},typography:{fontFamily:["Courier Prime"]}}},5221:(e,t,r)=>{r.d(t,{default:()=>i});var n=r(6888),a=r.n(n);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{theme:r(6384),links:{automart:"http://automart.ph/",motomart:"http://motomart.ph/",sellMyCar:"http://sellmycar.automart.ph/sell-my-car",facebook:"https://www.facebook.com/automartph/",instagram:"https://www.instagram.com/automartph/",youtube:"https://www.youtube.com/channel/UCh-uSYHQZPeNMFkIZzBBbDw",linkedIn:"https://www.linkedin.com/company/automart-ph/",Home:["/"]},navList:[],navIcons:[],drawerList:["Home"],footerList:[],advertise:{},anchorElement:function(e){return a().createElement("a",e)},imageElement:function(e){return a().createElement("img",e)}})},6888:t=>{t.exports=e},3757:e=>{e.exports=t}},n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return r[e](t,t.exports,a),t.exports}return a.m=r,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={989:0},t=[[5491,294,660,393]],r=e=>{},n=(n,o)=>{for(var l,i,[c,s,u,m]=o,f=0,p=[];f<c.length;f++)i=c[f],a.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(l in s)a.o(s,l)&&(a.m[l]=s[l]);for(u&&u(a),n&&n(o);p.length;)p.shift()();return m&&t.push.apply(t,m),r()},o=this.webpackChunk_qniverse_core=this.webpackChunk_qniverse_core||[];function l(){for(var r,n=0;n<t.length;n++){for(var o=t[n],l=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(l=!1)}l&&(t.splice(n--,1),r=a(a.s=o[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),r}o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o));var i=a.x;a.x=()=>(a.x=i||(e=>{}),(r=l)())})(),a.x()})()}));