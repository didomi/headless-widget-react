"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[6335],{6335:function(t,n,e){e.r(n),e.d(n,{didomi_back_to_top_button:function(){return u}});var r=e(5671),o=e(3144),i=e(221),a=e(5743),u=function(){function t(n){var e=this;(0,r.Z)(this,t),(0,i.r)(this,n),this.inheritedAttributes={},this.text="Top",this.behavior="auto",this.handleClick=function(){(e.targetRef||window).scrollTo({top:0,behavior:e.behavior})}}return(0,o.Z)(t,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,a.i)(this.el,["aria-label"])}},{key:"render",value:function(){var t=(0,a.c)("didomi-icon",this.el.tagName);return(0,i.h)(i.a,{class:"didomi-back-to-top-button-wrapper"},(0,i.h)("div",{onClick:this.handleClick,class:"didomi-back-to-top-button"},(0,i.h)(t,Object.assign({name:"arrow-up",text:this.text},this.inheritedAttributes)),this.text&&(0,i.h)("span",{class:"didomi-back-to-top-button--text"},this.text)))}},{key:"el",get:function(){return(0,i.g)(this)}}]),t}();u.style=".didomi-back-to-top-button{display:flex;align-items:center;color:#526e7a;font-weight:600;font-size:14px;cursor:pointer;transition:colors 3s;border-radius:4px;border:1px solid transparent}.didomi-back-to-top-button--text{margin-left:8px;padding-right:3px}.didomi-back-to-top-button:hover{color:#668a99}"},5743:function(t,n,e){e.d(n,{a:function(){return m},b:function(){return s},c:function(){return c},d:function(){return f},e:function(){return d},f:function(){return a},g:function(){return o},h:function(){return i},i:function(){return u},j:function(){return l},r:function(){return h}});var r=e(7762);function o(){return"_"+Math.random().toString(36).substr(2,9)}function i(t,n){return t.querySelectorAll('[slot="'.concat(n,'"]')).length>0}function a(t,n){return t.querySelectorAll('[slot="'.concat(n,'"]'))}var u=function(t){var n={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(e){t.hasAttribute(e)&&(null!==t.getAttribute(e)&&(n[e]=t.getAttribute(e)),t.removeAttribute(e))})),n};function c(t,n){var e=n.toLowerCase().split("-");if("didomi"!==e[0]){var r=!1,o=e.reduce((function(t,n){return"didomi"===n||r?(r=!0,t):"".concat(t).concat(n,"-")}),"");return"".concat(o).concat(t)}return t}function d(t){var n,e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){t.apply(e,i)}),r)}}function l(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var n=document.createElement("div");return n.classList.add("didomi-overlay-container"),document.body.appendChild(n),n}function s(t,n){var e=document.getElementById(n);if(t.style.zIndex="1",e)e.className.includes("didomi-overlay-container")||e.classList.add("didomi-overlay-container"),e.appendChild(t);else{var r=document.querySelector(".didomi-overlay-container");if(r)r.appendChild(t);else{var o=document.createElement("div");o.classList.add("didomi-overlay-container"),o.style.zIndex="1000",o.style.position="fixed",o.appendChild(t),document.body.appendChild(o)}}}function f(t,n){var e=document.body.querySelector(".didomi-overlay-container #".concat(t));e&&n&&(null===n||void 0===n||n.appendChild(e))}var m=function(t,n,e){if(t&&n){var o=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(e)}}));if(null===o||void 0===o?void 0:o.length){var i,a=(0,r.Z)(o);try{for(a.s();!(i=a.n()).done;){var u=i.value;n.setAttribute(u.name,u.value)}}catch(c){a.e(c)}finally{a.f()}}}},h=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(181);function o(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,r.Z)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}}}]);
//# sourceMappingURL=6335.2e7b5bf0.chunk.js.map