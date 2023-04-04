"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[2840],{2840:function(t,e,n){n.r(e),n.d(e,{didomi_partner_button:function(){return u}});var r=n(5671),i=n(3144),o=n(221),a=n(5743),u=function(){function t(e){var n=this;(0,r.Z)(this,t),(0,o.r)(this,e),this.inheritedAttributes={},this.disabled=!1,this.type="button",this.partner="google",this.handleClick=function(t){if(n.disabled&&(t.preventDefault(),t.stopPropagation()),"submit"===n.type||"reset"===n.type){var e=n.el.closest("form");if(void 0!==e&&null!==e){t.preventDefault();var r=document.createElement("button");r.type=n.type,r.style.display="none",r.name="fake-button",e.appendChild(r),r.click(),r.remove()}}}}return(0,i.Z)(t,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,a.i)(this.el,["aria-label","aria-controls"])}},{key:"render",value:function(){var t=(0,a.c)("didomi-icon",this.el.tagName);return(0,o.h)(o.a,{onClick:this.handleClick,"aria-disabled":this.disabled?"true":null,class:"didomi-partner-button"},(0,o.h)("button",Object.assign({class:"didomi-partner-button-wrapper",autoFocus:this.autoFocus,disabled:this.disabled,name:this.name,type:this.type,form:this.form},this.inheritedAttributes),(0,o.h)("div",{class:"didomi-partner-button-icon"},(0,o.h)(t,{name:this.partner})),(0,o.h)("div",{class:"didomi-partner-button-label"},(0,o.h)("slot",null))))}},{key:"el",get:function(){return(0,o.g)(this)}}]),t}();u.style=".didomi-partner-button{display:inline-block;min-width:200px;width:100%}.didomi-partner-button .didomi-partner-button-wrapper{height:56px;width:inherit;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;font-family:Roboto;font-style:normal;font-weight:500;font-size:14px;line-height:16px;background-color:#ffffff;color:#757575;border:1px solid #e2f1f8;padding:0 8px;border-radius:4px;text-transform:none;outline:0;transition:background-color 300ms ease-in-out;position:relative}.didomi-partner-button .didomi-partner-button-wrapper .didomi-partner-button-label{white-space:nowrap;padding-left:24px}.didomi-partner-button .didomi-partner-button-wrapper .didomi-partner-button-icon{display:inline-flex;align-items:center;justify-content:center}.didomi-partner-button .didomi-partner-button-wrapper:hover:not(:disabled){cursor:pointer;border-color:#265973;color:#265973}.didomi-partner-button .didomi-partner-button-wrapper:disabled{cursor:not-allowed}.didomi-partner-button .didomi-partner-button-wrapper:disabled .didomi-partner-button-label{pointer-events:none}"},5743:function(t,e,n){n.d(e,{a:function(){return p},b:function(){return s},c:function(){return d},d:function(){return f},e:function(){return l},f:function(){return a},g:function(){return i},h:function(){return o},i:function(){return u},j:function(){return c},r:function(){return m}});var r=n(7762);function i(){return"_"+Math.random().toString(36).substr(2,9)}function o(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]')).length>0}function a(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]'))}var u=function(t){var e={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){t.hasAttribute(n)&&(null!==t.getAttribute(n)&&(e[n]=t.getAttribute(n)),t.removeAttribute(n))})),e};function d(t,e){var n=e.toLowerCase().split("-");if("didomi"!==n[0]){var r=!1,i=n.reduce((function(t,e){return"didomi"===e||r?(r=!0,t):"".concat(t).concat(e,"-")}),"");return"".concat(i).concat(t)}return t}function l(t){var e,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];clearTimeout(e),e=setTimeout((function(){t.apply(n,o)}),r)}}function c(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var e=document.createElement("div");return e.classList.add("didomi-overlay-container"),document.body.appendChild(e),e}function s(t,e){var n=document.getElementById(e);if(t.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(t);else{var r=document.querySelector(".didomi-overlay-container");if(r)r.appendChild(t);else{var i=document.createElement("div");i.classList.add("didomi-overlay-container"),i.style.zIndex="1000",i.style.position="fixed",i.appendChild(t),document.body.appendChild(i)}}}function f(t,e){var n=document.body.querySelector(".didomi-overlay-container #".concat(t));n&&e&&(null===e||void 0===e||e.appendChild(n))}var p=function(t,e,n){if(t&&e){var i=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(n)}}));if(null===i||void 0===i?void 0:i.length){var o,a=(0,r.Z)(i);try{for(a.s();!(o=a.n()).done;){var u=o.value;e.setAttribute(u.name,u.value)}}catch(d){a.e(d)}finally{a.f()}}}},m=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(181);function i(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,r.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){d=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(d)throw a}}}}}}]);
//# sourceMappingURL=2840.57080591.chunk.js.map