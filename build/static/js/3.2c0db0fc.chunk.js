/*! For license information please see 3.2c0db0fc.chunk.js.LICENSE.txt */
(this.webpackJsonpsuperwashndry=this.webpackJsonpsuperwashndry||[]).push([[3],{20:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var c=s.apply(null,r);c&&e.push(c)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var n in r)t.call(r,n)&&r[n]&&e.push(n);else e.push(r.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(a,[]))||(e.exports=r)}()},21:function(e,a,t){"use strict";t(0);var r=t(3);a.a=function(){var e=new Date;return Object(r.jsx)("footer",{className:"py-3 text-center mt-4",children:Object(r.jsxs)("p",{className:"py-2 text-white",children:["Copyright \xa9 ",e.getFullYear()," Super Wash n Dry | All Rights Reserved."]})})}},23:function(e,a,t){e.exports=t(24)()},24:function(e,a,t){"use strict";var r=t(25);function s(){}function l(){}l.resetWarningCache=s,e.exports=function(){function e(e,a,t,s,l,c){if(c!==r){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:l,resetWarningCache:s};return t.PropTypes=t,t}},25:function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},27:function(e,a,t){"use strict";t.r(a);var r=t(4),s=t(0);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=t(20),d=t.n(o),g=t(3),j=["as","disabled"];function m(e){var a=e.tagName,t=e.disabled,r=e.href,s=e.target,l=e.rel,c=e.onClick,n=e.tabIndex,i=void 0===n?0:n,o=e.type;a||(a=null!=r||null!=s||null!=l?"a":"button");var d={tagName:a};if("button"===a)return[{type:o||"button",disabled:t},d];var g=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==c||c(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:i,href:"a"===a&&t?void 0:r,target:"a"===a?s:void 0,"aria-disabled":t||void 0,rel:"a"===a?l:void 0,onClick:g,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),g(e))}},d]}var h=s.forwardRef((function(e,a){var t=e.as,s=e.disabled,l=function(e,a){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,j),c=m(Object.assign({tagName:t,disabled:s},l)),n=Object(r.a)(c,2),i=n[0],o=n[1].tagName;return Object(g.jsx)(o,Object.assign({},l,i,{ref:a}))}));h.displayName="Button";var p=s.createContext({prefixes:{}});p.Consumer,p.Provider;function b(e,a){var t=Object(s.useContext)(p).prefixes;return e||t[a]||a}var u=["as","bsPrefix","variant","size","active","className"],f=s.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,l=e.variant,c=e.size,o=e.active,j=e.className,h=i(e,u),p=b(s,"btn"),f=m(n({tagName:t},h)),y=Object(r.a)(f,2),x=y[0],O=y[1].tagName;return Object(g.jsx)(O,n(n(n({},h),x),{},{ref:a,className:d()(j,p,o&&"active",l&&"".concat(p,"-").concat(l),c&&"".concat(p,"-").concat(c),h.href&&h.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var y=f,x=t(23),O=t.n(x),v=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],N=(O.a.string,O.a.bool,O.a.bool,O.a.bool,O.a.bool,s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.fluid,l=e.rounded,c=e.roundedCircle,o=e.thumbnail,j=i(e,v);return t=b(t,"img"),Object(g.jsx)("img",n(n({ref:a},j),{},{className:d()(r,s&&"".concat(t,"-fluid"),l&&"rounded",c&&"rounded-circle",o&&"".concat(t,"-thumbnail"))}))})));N.displayName="Image",N.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var w=N,P=function(e){return Object(g.jsx)("header",{className:"app-header",style:{backgroundImage:'url("/images/superwashndrycover.jpg")'},children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("nav",{className:"navigation-bar",children:[Object(g.jsx)("div",{className:"logo",children:Object(g.jsx)("a",{className:"App-link",href:"/",children:Object(g.jsx)("img",{src:"images/swd-logo.png",width:"250",alt:"Super Wash n Dry Logo"})})}),Object(g.jsx)("div",{className:"menu-items",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{onClick:function(){e.childNodes.scrollIntoView({behavior:"smooth"})},children:"Gallery"}),Object(g.jsx)("li",{onClick:function(){e.node.scrollIntoView({behavior:"smooth"})},children:"Contact Us"})]})})]}),Object(g.jsx)("div",{className:"sub-header",children:Object(g.jsxs)("div",{className:"call-to-action-container",children:[Object(g.jsxs)("div",{className:"call-to-action",children:[Object(g.jsx)("h1",{className:"text-white",style:{fontSize:"50px"},children:"Let us super wash n dry"}),Object(g.jsx)("h2",{className:"text-white pb-2",children:"Your Clothes"}),Object(g.jsx)("a",{href:"tel:9164184902",children:Object(g.jsx)(y,{variant:"dark",size:"lg",style:{borderRadius:"30px"},children:"Get in Contact"})})]}),Object(g.jsx)("div",{className:"call-to-action-image",children:Object(g.jsx)(w,{src:"/images/cover-photo.jpg",rounded:!0})})]})})]})})},k=t(21),C=function(e){var a=Object(s.useState)(),t=Object(r.a)(a,2),l=t[0],c=t[1];e.galleryNode(l);return Object(g.jsxs)("div",{className:"gallery-container",ref:function(e){return c(e)},children:[Object(g.jsx)("h1",{className:"text-center py-4",id:"unique",children:"Gallery"}),Object(g.jsx)("div",{className:"gallery-photos",children:Object(g.jsx)("div",{className:"row justify-content-center",children:["/images/galleryphotos/galleryimage (1).jpg","/images/galleryphotos/galleryimage (2).jpg","/images/galleryphotos/galleryimage (3).jpg","/images/galleryphotos/galleryimage (4).jpg","/images/galleryphotos/galleryimage (5).jpg","/images/galleryphotos/galleryimage (6).jpg","/images/galleryphotos/galleryimage (7).jpg","/images/galleryphotos/galleryimage (8).jpg","/images/galleryphotos/galleryimage (9).jpg","/images/galleryphotos/galleryimage (10).jpg","/images/galleryphotos/galleryimage (11).jpg","/images/galleryphotos/galleryimage (12).jpg","/images/galleryphotos/galleryimage (13).jpg","/images/galleryphotos/galleryimage (14).jpg","/images/galleryphotos/galleryimage (15).jpg","/images/galleryphotos/galleryimage (16).jpg","/images/galleryphotos/galleryimage (17).jpg","/images/galleryphotos/galleryimage (18).jpg","/images/galleryphotos/galleryimage (19).jpg","/images/galleryphotos/galleryimage (20).jpg","/images/galleryphotos/galleryimage (21).jpg","/images/galleryphotos/galleryimage (22).jpg","/images/galleryphotos/galleryimage (23).jpg","/images/galleryphotos/galleryimage (24).jpg","/images/galleryphotos/galleryimage (25).jpg","/images/galleryphotos/galleryimage (26).jpg","/images/galleryphotos/galleryimage (27).jpg","/images/galleryphotos/galleryimage (28).jpg","/images/galleryphotos/galleryimage (29).jpg","/images/galleryphotos/galleryimage (30).jpg","/images/galleryphotos/galleryimage (31).jpg","/images/galleryphotos/galleryimage (32).jpg"].map((function(e,a){return Object(g.jsx)("div",{className:"col-sm-12 text-center col-md-4 shadow-sm p-3 border h-100",children:Object(g.jsx)("img",{src:e,className:"img-thumbnail",alt:"Gallery"})},a)}))})})]})},S=/-(.)/g;var D=["className","bsPrefix","as"],W=function(e){return e[0].toUpperCase()+(a=e,a.replace(S,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function T(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,r=void 0===t?W(e):t,l=a.Component,c=a.defaultProps,o=s.forwardRef((function(a,t){var r=a.className,s=a.bsPrefix,c=a.as,o=void 0===c?l||"div":c,j=i(a,D),m=b(s,e);return Object(g.jsx)(o,n({ref:t,className:d()(r,m)},j))}));return o.defaultProps=c,o.displayName=r,o}var I=function(e){return s.forwardRef((function(a,t){return Object(g.jsx)("div",n(n({},a),{},{ref:t,className:d()(a.className,e)}))}))},R=["bsPrefix","className","variant","as"],E=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.variant,l=e.as,c=void 0===l?"img":l,o=i(e,R),j=b(t,"card-img");return Object(g.jsx)(c,n({ref:a,className:d()(s?"".concat(j,"-").concat(s):j,r)},o))}));E.displayName="CardImg";var _=E,A=s.createContext(null);A.displayName="CardHeaderContext";var B=A,q=["bsPrefix","className","as"],z=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,c=void 0===l?"div":l,o=i(e,q),j=b(t,"card-header"),m=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(g.jsx)(B.Provider,{value:m,children:Object(g.jsx)(c,n(n({ref:a},o),{},{className:d()(r,j)}))})}));z.displayName="CardHeader";var F=z,G=["bsPrefix","className","bg","text","border","body","children","as"],H=I("h5"),L=I("h6"),M=T("card-body"),U=T("card-title",{Component:H}),Y=T("card-subtitle",{Component:L}),V=T("card-link",{Component:"a"}),J=T("card-text",{Component:"p"}),K=T("card-footer"),Q=T("card-img-overlay"),X=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.bg,l=e.text,c=e.border,o=e.body,j=e.children,m=e.as,h=void 0===m?"div":m,p=i(e,G),u=b(t,"card");return Object(g.jsx)(h,n(n({ref:a},p),{},{className:d()(r,u,s&&"bg-".concat(s),l&&"text-".concat(l),c&&"border-".concat(c)),children:o?Object(g.jsx)(M,{children:j}):j}))}));X.displayName="Card",X.defaultProps={body:!1};var Z=Object.assign(X,{Img:_,Title:U,Subtitle:Y,Body:M,Link:V,Text:J,Header:F,Footer:K,ImgOverlay:Q});a.default=function(){var e=Object(s.useState)(),a=Object(r.a)(e,2),t=a[0],l=a[1],c=Object(s.useState)(),n=Object(r.a)(c,2),i=n[0],o=n[1];return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("div",{className:"home-container",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)(P,{node:t,childNodes:i}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"super-wash-info",children:[Object(g.jsx)("h1",{className:"text-center py-4",id:"unique",children:"Why Super Wash n Dry?"}),Object(g.jsx)("div",{className:"super-watch-content",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-4",children:Object(g.jsxs)(Z,{children:[Object(g.jsx)("div",{className:"icon-info text-center mt-5",children:Object(g.jsx)("i",{className:"fas fa-money-bill-wave fa-4x",style:{color:"#36567E"}})}),Object(g.jsxs)(Z.Body,{children:[Object(g.jsx)(Z.Title,{style:{textAlign:"center"},children:Object(g.jsx)("h3",{style:{fontWeight:"bold"},children:"Incredible Prices"})}),Object(g.jsx)(Z.Text,{children:"Super Wash n Dry provides excellent prices that allows you to do more loads as well as blows away other laundromat competitors."})]})]})}),Object(g.jsx)("div",{className:"col-lg-4",children:Object(g.jsxs)(Z,{children:[Object(g.jsx)("div",{className:"icon-info text-center mt-5",children:Object(g.jsx)("i",{className:"fas fa-walking fa-4x",style:{color:"#36567E"}})}),Object(g.jsxs)(Z.Body,{children:[Object(g.jsx)(Z.Title,{style:{textAlign:"center"},children:Object(g.jsx)("h3",{style:{fontWeight:"bold"},children:"Simple & Easy Convenience"})}),Object(g.jsx)(Z.Text,{children:"Our hours are flexible to meet customers needs for cleaning clothes. In addition, available times are on our website below to see when we are open for operating hours."})]})]})}),Object(g.jsx)("div",{className:"col-lg-4",children:Object(g.jsxs)(Z,{children:[Object(g.jsx)("div",{className:"icon-info text-center mt-5",children:Object(g.jsx)("i",{className:"fas fa-air-freshener fa-4x",style:{color:"#36567E"}})}),Object(g.jsxs)(Z.Body,{children:[Object(g.jsx)(Z.Title,{style:{textAlign:"center"},children:Object(g.jsx)("h3",{style:{fontWeight:"bold"},children:"Excellent Quality"})}),Object(g.jsx)(Z.Text,{children:"Our machines are always cleaned and have a vast amount of selection options on how customers would like their clothes cleaned and dryed to provide the highest quality of cleasiness."})]})]})})]})}),Object(g.jsx)(C,{node:t,galleryNode:function(e){o(e)}}),Object(g.jsxs)("div",{className:"clean-container",children:[Object(g.jsx)("h1",{className:"text-center py-4",id:"unique",children:"New Facility!"}),Object(g.jsxs)("div",{className:"row align-items-center justify-content-between",children:[Object(g.jsx)("div",{className:"col-lg-6 col-md-12 order-2 text-center",children:Object(g.jsx)("p",{className:"pt-4",children:"Super Wash N Dry is now under new management and will be taking the appropriate measures to make sure that our building is meeting customers highest standards and quality for clean clothes! We clean our machine regularly to meet Covid-19 Federal Guidelines."})}),Object(g.jsx)("div",{className:"col-lg-4 col-md-12 text-center order-1",children:Object(g.jsx)(w,{src:"/images/Soap-Monochromatic.svg",rounded:!0,style:{border:"3px solid #36567E"}})})]})]}),Object(g.jsxs)("div",{className:"contact-container",children:[Object(g.jsx)("h1",{className:"text-center py-4",id:"unique",children:"Contact us"}),Object(g.jsx)("div",{className:"contact",ref:function(e){return l(e)},children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-lg-5 p-4 align-items-center",style:{backgroundColor:"#5899e8"},children:[Object(g.jsx)("h3",{className:"contact-info text-white",style:{fontWeight:"bold"},children:"Contact Information"}),Object(g.jsxs)("a",{href:"tel:9164184434",className:"phone text-white d-block pt-3",children:[Object(g.jsx)("strong",{children:"Phone:"})," (916) 418-4434"]}),Object(g.jsxs)("a",{href:"https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535",className:"address text-white d-block pt-3",target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)("strong",{children:"Address:"})," 2030 Del Paso Blvd, Sacramento, CA 95815"]}),Object(g.jsx)("h3",{className:"contact-info py-3 text-white",style:{fontWeight:"bold"},children:"Business Hours"}),Object(g.jsx)("p",{className:"text-white",children:Object(g.jsx)("strong",{children:"Open every day 7 day a week from 7AM - 10PM"})}),Object(g.jsx)("p",{className:"text-white",children:Object(g.jsx)("strong",{children:"Last Wash @ 8:30PM"})}),Object(g.jsx)("h3",{className:"contact-info pt-3 text-white",style:{fontWeight:"bold"},children:"Social Media"}),Object(g.jsxs)("div",{className:"contact-social-media",children:[Object(g.jsx)("a",{href:"https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535",target:"_blank",rel:"noopener noreferrer",title:"Super Wash n Dry Google Directions",className:"d-inline-block p-3",children:Object(g.jsx)("i",{className:"fab fa-google fa-3x"})}),Object(g.jsx)("a",{href:"https://www.yelp.com/biz/super-wash-n-dry-sacramento",target:"_blank",rel:"noopener noreferrer",title:"Super Wash n Dry Yelp",className:"d-inline-block p-3",children:Object(g.jsx)("i",{className:"fab fa-yelp fa-3x"})}),Object(g.jsx)("a",{href:"https://www.facebook.com/superwashndrydelpaso",target:"_blank",rel:"noopener noreferrer",title:"Super Wash n Dry Facebook Page",className:"d-inline-block p-3",children:Object(g.jsx)("i",{className:"fab fa-facebook fa-3x"})})]})]}),Object(g.jsx)("div",{className:"col-lg-7",children:Object(g.jsx)("div",{className:"map",children:Object(g.jsx)(w,{src:"/images/swd-map.jpg",className:"w-100",style:{border:"3px solid #36567E"},rounded:!0})})})]})})]})]})}),Object(g.jsx)(k.a,{})]})})})}}}]);
//# sourceMappingURL=3.2c0db0fc.chunk.js.map