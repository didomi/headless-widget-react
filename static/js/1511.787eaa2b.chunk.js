"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[1511],{1511:function(e,t,n){n.r(t),n.d(t,{didomi_tree_card_branch:function(){return c}});var r=n(5671),i=n(3144),o=n(221),a=n(5743),c=function(){function e(t){(0,r.Z)(this,e),(0,o.r)(this,t)}return(0,i.Z)(e,[{key:"render",value:function(){var e=(0,a.c)("didomi-icon",this.el.tagName);return(0,o.h)(o.a,{class:"didomi-tree-card-branch"},(0,o.h)("div",{class:"didomi-tree-card-branch-header"},(0,o.h)(e,{class:"flex-shrink-0",name:this.headerIcon,"aria-hidden":"true"}),(0,o.h)("div",{class:"didomi-tree-card-branch-header-content"},(0,o.h)("div",{class:"didomi-tree-card-branch-header-text"},this.headerText),(0,o.h)("slot",{name:"header-controls"}))),(0,o.h)("div",{class:"didomi-tree-card-branch-body"},(0,o.h)("slot",null)))}},{key:"el",get:function(){return(0,o.g)(this)}}]),e}();c.style='.didomi-tree-card-branch{border-bottom:1px dotted #c9dfe8;display:block;padding-block:16px}.didomi-tree-card-branch-header{align-items:center;display:flex;gap:8px}.didomi-tree-card-branch-header-content{align-items:center;background-color:#f9fafa;display:flex;gap:24px;flex-grow:1;justify-content:space-between}.didomi-tree-card-branch-header-text{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:16px;font-weight:600;letter-spacing:0px;line-height:24px}.didomi-tree-card-branch-body{--x-shift:7px;border-left:1px solid #c9dfe8;margin-left:var(--x-shift);padding:8px 0 0 calc(24px - var(--x-shift))}'},5743:function(e,t,n){n.d(t,{a:function(){return h},b:function(){return f},c:function(){return d},d:function(){return s},e:function(){return u},f:function(){return a},g:function(){return i},h:function(){return o},i:function(){return c},j:function(){return l},r:function(){return m}});var r=n(7762);function i(){return"_"+Math.random().toString(36).substr(2,9)}function o(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]')).length>0}function a(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]'))}var c=function(e){var t={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){e.hasAttribute(n)&&(null!==e.getAttribute(n)&&(t[n]=e.getAttribute(n)),e.removeAttribute(n))})),t};function d(e,t){var n=t.toLowerCase().split("-");if("didomi"!==n[0]){var r=!1,i=n.reduce((function(e,t){return"didomi"===t||r?(r=!0,e):"".concat(e).concat(t,"-")}),"");return"".concat(i).concat(e)}return e}function u(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){e.apply(n,o)}),r)}}function l(){var e=document.body.querySelector(".didomi-overlay-container");if(e)return e;var t=document.createElement("div");return t.classList.add("didomi-overlay-container"),document.body.appendChild(t),t}function f(e,t){var n=document.getElementById(t);if(e.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(e);else{var r=document.querySelector(".didomi-overlay-container");if(r)r.appendChild(e);else{var i=document.createElement("div");i.classList.add("didomi-overlay-container"),i.style.zIndex="1000",i.style.position="fixed",i.appendChild(e),document.body.appendChild(i)}}}function s(e,t){var n=document.body.querySelector(".didomi-overlay-container #".concat(e));n&&t&&(null===t||void 0===t||t.appendChild(n))}var h=function(e,t,n){if(e&&t){var i=Array.from(e.attributes).filter((function(e){return e.name.startsWith("data-")})).map((function(e){return{name:e.name,value:"".concat(e.value,"-").concat(n)}}));if(null===i||void 0===i?void 0:i.length){var o,a=(0,r.Z)(i);try{for(a.s();!(o=a.n()).done;){var c=o.value;t.setAttribute(c.name,c.value)}}catch(d){a.e(d)}finally{a.f()}}}},m=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)}},7762:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(181);function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw a}}}}}}]);
//# sourceMappingURL=1511.787eaa2b.chunk.js.map