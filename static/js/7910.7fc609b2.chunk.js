"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[7910],{7910:function(e,t,n){n.r(t),n.d(t,{didomi_tree_card:function(){return d}});var r=n(5671),i=n(3144),o=n(221),a=n(5743),d=function(){function e(t){var n=this;(0,r.Z)(this,e),(0,o.r)(this,t),this.cardId=(0,a.g)(),this.isExpanded=!0,this.toggle=function(){n.isExpanded=!n.isExpanded}}return(0,i.Z)(e,[{key:"render",value:function(){var e=(0,a.c)("didomi-card-container",this.el.tagName),t=(0,a.c)("didomi-icon-button",this.el.tagName),n=(0,a.c)("didomi-icon",this.el.tagName),r=(0,a.c)("didomi-collapse",this.el.tagName),i="didomi-tree-card-collapse-".concat(this.cardId);return(0,o.h)(o.a,{class:"didomi-tree-card"},(0,o.h)(e,null,(0,o.h)("header",{class:"didomi-tree-card-header"},(0,o.h)("div",{class:"didomi-tree-card-header-col-left"},(0,o.h)(n,{class:"flex-shrink-0",name:this.headerIcon,"aria-hidden":"true"}),(0,o.h)("div",{class:"didomi-tree-card-header-text"},this.headerText)),(0,o.h)("div",{class:"didomi-tree-card-header-col-right"},(0,o.h)("slot",{name:"header-controls"}),(0,o.h)(t,{class:"didomi-tree-card-toggle-btn",variant:"rounded-border",size:"small",icon:"down-on-sm","aria-expanded":this.isExpanded?"true":"false","aria-controls":i,onClick:this.toggle}))),(0,o.h)(r,{id:i,"is-expanded":this.isExpanded},(0,o.h)("section",{class:"didomi-tree-card-body"},(0,o.h)("slot",null)))))}},{key:"el",get:function(){return(0,o.g)(this)}}]),e}();d.style='.didomi-tree-card{color:#1d4153;display:block;--card-inner-padding:16px 0}.didomi-tree-card-header{align-items:center;display:flex;justify-content:space-between;padding:0 16px;gap:24px}.didomi-tree-card-header-col-left{align-items:center;display:flex;gap:8px}.didomi-tree-card-header-text{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:16px;font-weight:600;letter-spacing:0px;line-height:24px}.didomi-tree-card-header-col-right{align-items:center;display:flex;gap:8px}.didomi-tree-card-body{border-top:2px solid #c9dfe8;margin-top:16px;padding:0 16px 0 24px}.didomi-tree-card-toggle-btn{transition:transform 300ms}.didomi-tree-card-toggle-btn[aria-expanded=true]{transform:rotate(180deg)}'},5743:function(e,t,n){n.d(t,{a:function(){return m},b:function(){return s},c:function(){return c},d:function(){return f},e:function(){return l},f:function(){return a},g:function(){return i},h:function(){return o},i:function(){return d},j:function(){return u},r:function(){return h}});var r=n(7762);function i(){return"_"+Math.random().toString(36).substr(2,9)}function o(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]')).length>0}function a(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]'))}var d=function(e){var t={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){e.hasAttribute(n)&&(null!==e.getAttribute(n)&&(t[n]=e.getAttribute(n)),e.removeAttribute(n))})),t};function c(e,t){var n=t.toLowerCase().split("-");if("didomi"!==n[0]){var r=!1,i=n.reduce((function(e,t){return"didomi"===t||r?(r=!0,e):"".concat(e).concat(t,"-")}),"");return"".concat(i).concat(e)}return e}function l(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){e.apply(n,o)}),r)}}function u(){var e=document.body.querySelector(".didomi-overlay-container");if(e)return e;var t=document.createElement("div");return t.classList.add("didomi-overlay-container"),document.body.appendChild(t),t}function s(e,t){var n=document.getElementById(t);if(e.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(e);else{var r=document.querySelector(".didomi-overlay-container");if(r)r.appendChild(e);else{var i=document.createElement("div");i.classList.add("didomi-overlay-container"),i.style.zIndex="1000",i.style.position="fixed",i.appendChild(e),document.body.appendChild(i)}}}function f(e,t){var n=document.body.querySelector(".didomi-overlay-container #".concat(e));n&&t&&(null===t||void 0===t||t.appendChild(n))}var m=function(e,t,n){if(e&&t){var i=Array.from(e.attributes).filter((function(e){return e.name.startsWith("data-")})).map((function(e){return{name:e.name,value:"".concat(e.value,"-").concat(n)}}));if(null===i||void 0===i?void 0:i.length){var o,a=(0,r.Z)(i);try{for(a.s();!(o=a.n()).done;){var d=o.value;t.setAttribute(d.name,d.value)}}catch(c){a.e(c)}finally{a.f()}}}},h=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)}},7762:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(181);function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,d=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return d=e.done,e},e:function(e){c=!0,a=e},f:function(){try{d||null==n.return||n.return()}finally{if(c)throw a}}}}}}]);
//# sourceMappingURL=7910.7fc609b2.chunk.js.map