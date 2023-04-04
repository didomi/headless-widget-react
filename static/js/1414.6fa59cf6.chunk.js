"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[1414],{1414:function(t,e,n){n.r(e),n.d(e,{didomi_small_push:function(){return l}});var i=n(5671),r=n(3144),o=n(221),a=n(5743),l=function(){function t(e){(0,i.Z)(this,t),(0,o.r)(this,e),this.inheritedAttributes={},this.size="md",this.smallIcon="arrow-left",this.target="_self"}return(0,r.Z)(t,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,a.i)(this.el,["aria-label"])}},{key:"getContent",value:function(){var t=(0,a.c)("didomi-icon",this.el.tagName);return(0,o.h)("div",{class:"didomi-small-push-content","data-size":this.size},(0,o.h)("div",null,(0,o.h)("div",{class:"didomi-small-push-text"},this.text),(0,o.h)("div",{class:"didomi-small-push-highlighted-text"},this.highlightedText)),(0,o.h)(t,{class:"didomi-small-push-small-icon",name:this.smallIcon}))}},{key:"render",value:function(){return(0,o.h)(o.a,{class:"didomi-small-push"},this.href?(0,o.h)("a",Object.assign({class:"didomi-small-push-wrapper",href:this.href,target:this.target},this.inheritedAttributes),this.getContent()):(0,o.h)("button",Object.assign({class:"didomi-small-push-wrapper"},this.inheritedAttributes),this.getContent()))}},{key:"el",get:function(){return(0,o.g)(this)}}]),t}();l.style='.didomi-small-push-wrapper{background-color:#fffbf9;border-radius:8px;border:1px solid transparent;box-shadow:0px 2.7672564983px 2.2138051987px 0px rgba(0, 0, 0, 0.02), 0px 6.6501021385px 5.3200817108px 0px rgba(0, 0, 0, 0.03), 0px 12.5215520859px 10.017241478px 0px rgba(0, 0, 0, 0.04), 0px 22.336309433px 17.8690471649px 0px rgba(0, 0, 0, 0.05);box-sizing:border-box;display:inline-block;padding:8px 16px;transition:border 300ms;min-height:56px}.didomi-small-push-wrapper:hover{border-color:#c9dfe8;cursor:pointer;text-decoration:none}.didomi-small-push-wrapper:focus{outline:3px solid #84d1eb}a.didomi-small-push-wrapper{text-decoration:none;color:unset}button.didomi-small-push-wrapper{text-align:left}.didomi-small-push-content{border-right:solid 1px #265973;justify-content:center;gap:16px;display:flex}.didomi-small-push-content[data-size=sm]{min-width:auto}.didomi-small-push-text{color:#265973;font-family:"IBM Plex Serif", "IBMPlexSerif";font-size:12px}.didomi-small-push-highlighted-text{color:#265973;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:14px;font-weight:600;letter-spacing:0px;line-height:20px}.didomi-small-push-small-icon{align-self:center;color:#1d4153;margin-right:3px;width:7px}'},5743:function(t,e,n){n.d(e,{a:function(){return m},b:function(){return c},c:function(){return u},d:function(){return h},e:function(){return s},f:function(){return a},g:function(){return r},h:function(){return o},i:function(){return l},j:function(){return d},r:function(){return f}});var i=n(7762);function r(){return"_"+Math.random().toString(36).substr(2,9)}function o(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]')).length>0}function a(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]'))}var l=function(t){var e={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){t.hasAttribute(n)&&(null!==t.getAttribute(n)&&(e[n]=t.getAttribute(n)),t.removeAttribute(n))})),e};function u(t,e){var n=e.toLowerCase().split("-");if("didomi"!==n[0]){var i=!1,r=n.reduce((function(t,e){return"didomi"===e||i?(i=!0,t):"".concat(t).concat(e,"-")}),"");return"".concat(r).concat(t)}return t}function s(t){var e,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(e),e=setTimeout((function(){t.apply(n,o)}),i)}}function d(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var e=document.createElement("div");return e.classList.add("didomi-overlay-container"),document.body.appendChild(e),e}function c(t,e){var n=document.getElementById(e);if(t.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(t);else{var i=document.querySelector(".didomi-overlay-container");if(i)i.appendChild(t);else{var r=document.createElement("div");r.classList.add("didomi-overlay-container"),r.style.zIndex="1000",r.style.position="fixed",r.appendChild(t),document.body.appendChild(r)}}}function h(t,e){var n=document.body.querySelector(".didomi-overlay-container #".concat(t));n&&e&&(null===e||void 0===e||e.appendChild(n))}var m=function(t,e,n){if(t&&e){var r=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(n)}}));if(null===r||void 0===r?void 0:r.length){var o,a=(0,i.Z)(r);try{for(a.s();!(o=a.n()).done;){var l=o.value;e.setAttribute(l.name,l.value)}}catch(u){a.e(u)}finally{a.f()}}}},f=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(181);function r(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,i.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw a}}}}}}]);
//# sourceMappingURL=1414.6fa59cf6.chunk.js.map