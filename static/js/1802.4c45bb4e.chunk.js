"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[1802],{1802:function(e,t,n){n.r(t),n.d(t,{didomi_collapsible_section:function(){return l}});var i=n(5671),o=n(3144),r=n(221),a=n(5743),l=function(){function e(t){var n=this;(0,i.Z)(this,e),(0,r.r)(this,t),this.sectionToggle=(0,r.c)(this,"sectionToggle",7),this.isCollapsed=!0,this.handleSelect=function(){n.isCollapsed=!n.isCollapsed,n.sectionToggle.emit(n.isCollapsed)}}return(0,o.Z)(e,[{key:"render",value:function(){var e=(0,a.c)("didomi-collapse",this.el.tagName),t=(0,a.c)("didomi-icon",this.el.tagName);return(0,r.h)(r.a,{class:"didomi-collapsible-section","aria-expanded":!this.isCollapsed},(0,r.h)("button",{type:"button",class:"didomi-collapsible-section__header",onClick:this.handleSelect},(0,r.h)("span",{class:"didomi-collapsible-section__header_text"},this.label),(0,r.h)(t,{class:{"didomi-collapsible-section__header_icon":!0,"didomi-collapsible-section__header_icon_expanded":!this.isCollapsed},name:"down-on"})),(0,r.h)(e,{"is-expanded":!this.isCollapsed},(0,r.h)("div",{class:"didomi-collapsible-section__content"},(0,r.h)("slot",null))))}},{key:"el",get:function(){return(0,r.g)(this)}}]),e}();l.style='.didomi-collapsible-section{display:inline-block;width:100%;border-radius:4px;border:1px solid #265973;padding:0 16px}.didomi-collapsible-section:focus-within{outline:3px solid #84d1eb}.didomi-collapsible-section__header{width:100%;display:flex;justify-content:center;align-items:center;color:#1d4153;padding:16px 0;outline:none !important;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:14px;font-weight:600;letter-spacing:0px;line-height:20px}.didomi-collapsible-section__header_text{flex:1}.didomi-collapsible-section__header_icon{transition-duration:300ms;transition-property:transform}.didomi-collapsible-section__header_icon_expanded{transform:rotate(-180deg)}.didomi-collapsible-section__content{padding-bottom:16px}'},5743:function(e,t,n){n.d(t,{a:function(){return m},b:function(){return u},c:function(){return c},d:function(){return f},e:function(){return d},f:function(){return a},g:function(){return o},h:function(){return r},i:function(){return l},j:function(){return s},r:function(){return p}});var i=n(7762);function o(){return"_"+Math.random().toString(36).substr(2,9)}function r(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]')).length>0}function a(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]'))}var l=function(e){var t={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){e.hasAttribute(n)&&(null!==e.getAttribute(n)&&(t[n]=e.getAttribute(n)),e.removeAttribute(n))})),t};function c(e,t){var n=t.toLowerCase().split("-");if("didomi"!==n[0]){var i=!1,o=n.reduce((function(e,t){return"didomi"===t||i?(i=!0,e):"".concat(e).concat(t,"-")}),"");return"".concat(o).concat(e)}return e}function d(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){e.apply(n,r)}),i)}}function s(){var e=document.body.querySelector(".didomi-overlay-container");if(e)return e;var t=document.createElement("div");return t.classList.add("didomi-overlay-container"),document.body.appendChild(t),t}function u(e,t){var n=document.getElementById(t);if(e.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(e);else{var i=document.querySelector(".didomi-overlay-container");if(i)i.appendChild(e);else{var o=document.createElement("div");o.classList.add("didomi-overlay-container"),o.style.zIndex="1000",o.style.position="fixed",o.appendChild(e),document.body.appendChild(o)}}}function f(e,t){var n=document.body.querySelector(".didomi-overlay-container #".concat(e));n&&t&&(null===t||void 0===t||t.appendChild(n))}var m=function(e,t,n){if(e&&t){var o=Array.from(e.attributes).filter((function(e){return e.name.startsWith("data-")})).map((function(e){return{name:e.name,value:"".concat(e.value,"-").concat(n)}}));if(null===o||void 0===o?void 0:o.length){var r,a=(0,i.Z)(o);try{for(a.s();!(r=a.n()).done;){var l=r.value;t.setAttribute(l.name,l.value)}}catch(c){a.e(c)}finally{a.f()}}}},p=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)}},7762:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(181);function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,i.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}}}]);
//# sourceMappingURL=1802.4c45bb4e.chunk.js.map