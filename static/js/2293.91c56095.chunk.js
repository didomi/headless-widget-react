"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[2293],{2293:function(o,t,i){i.r(t),i.d(t,{didomi_promotional_push:function(){return d}});var n=i(5671),r=i(3144),e=i(221),a=i(5743),d=function(){function o(t){(0,n.Z)(this,o),(0,e.r)(this,t),this.variant="normal",this.borderStyle="normal",this.vertical=!1,this.alignment="left"}return(0,r.Z)(o,[{key:"render",value:function(){var o=(0,a.h)(this.el,"img");return(0,e.h)(e.a,{class:{"didomi-promotional-push":!0,"didomi-promotional-push-light":"light"===this.variant,"didomi-promotional-push-no-border":"plain"===this.borderStyle,"didomi-promotional-push-center":"center"===this.alignment,"didomi-promotional-push-right":"right"===this.alignment,"didomi-promotional-push-vertical":this.vertical}},o&&(0,e.h)("div",{class:"didomi-promotional-push-img-wrapper"},(0,e.h)("slot",{name:"img"})),(0,e.h)("div",{class:"didomi-promotional-push-body"},(0,e.h)("div",{class:"didomi-promotional-push-title"},(0,e.h)("slot",{name:"title"})),(0,e.h)("div",{class:"didomi-promotional-push-description"},(0,e.h)("slot",{name:"description"}))),(0,e.h)("div",{class:"didomi-promotional-push-cta-wrapper"},(0,e.h)("slot",{name:"cta"})))}},{key:"el",get:function(){return(0,e.g)(this)}}]),o}();d.style='.didomi-promotional-push{align-items:center;background-color:var(--push-bg, #f9fafa);border-radius:8px;box-shadow:0px 2.7672564983px 2.2138051987px 0px rgba(0, 0, 0, 0.02), 0px 6.6501021385px 5.3200817108px 0px rgba(0, 0, 0, 0.03), 0px 12.5215520859px 10.017241478px 0px rgba(0, 0, 0, 0.04), 0px 22.336309433px 17.8690471649px 0px rgba(0, 0, 0, 0.05);display:flex;gap:16px;padding:24px}.didomi-promotional-push.didomi-promotional-push-center{justify-content:center}.didomi-promotional-push.didomi-promotional-push-center .didomi-promotional-push-cta-wrapper{margin-left:unset}.didomi-promotional-push.didomi-promotional-push-right{justify-content:right}.didomi-promotional-push.didomi-promotional-push-right .didomi-promotional-push-cta-wrapper{margin-left:unset}.didomi-promotional-push.didomi-promotional-push-light{background:var(--push-bg, linear-gradient(314.18deg, #1d4153 0%, #276f94 136.67%))}.didomi-promotional-push.didomi-promotional-push-light .didomi-promotional-push-body{color:white}.didomi-promotional-push.didomi-promotional-push-no-border{padding:16px 24px;border-radius:0;box-shadow:none}.didomi-promotional-push.didomi-promotional-push-vertical{flex-direction:column;align-items:center;text-align:center}.didomi-promotional-push.didomi-promotional-push-vertical .didomi-promotional-push-cta-wrapper{margin-left:unset}.didomi-promotional-push .didomi-promotional-push-body{color:#1d4153}.didomi-promotional-push .didomi-promotional-push-title{margin-bottom:4px;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:16px;letter-spacing:0px;line-height:20px;font-weight:600}.didomi-promotional-push .didomi-promotional-push-description{font-family:"IBM Plex Sans", "IBMPlexSans";font-size:16px;font-weight:400;letter-spacing:0px;line-height:24px}.didomi-promotional-push .didomi-promotional-push-cta-wrapper{flex-shrink:0;margin-left:auto}'},5743:function(o,t,i){i.d(t,{a:function(){return c},b:function(){return m},c:function(){return u},d:function(){return s},e:function(){return l},f:function(){return a},g:function(){return r},h:function(){return e},i:function(){return d},j:function(){return p},r:function(){return h}});var n=i(7762);function r(){return"_"+Math.random().toString(36).substr(2,9)}function e(o,t){return o.querySelectorAll('[slot="'.concat(t,'"]')).length>0}function a(o,t){return o.querySelectorAll('[slot="'.concat(t,'"]'))}var d=function(o){var t={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(i){o.hasAttribute(i)&&(null!==o.getAttribute(i)&&(t[i]=o.getAttribute(i)),o.removeAttribute(i))})),t};function u(o,t){var i=t.toLowerCase().split("-");if("didomi"!==i[0]){var n=!1,r=i.reduce((function(o,t){return"didomi"===t||n?(n=!0,o):"".concat(o).concat(t,"-")}),"");return"".concat(r).concat(o)}return o}function l(o){var t,i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,e=new Array(r),a=0;a<r;a++)e[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){o.apply(i,e)}),n)}}function p(){var o=document.body.querySelector(".didomi-overlay-container");if(o)return o;var t=document.createElement("div");return t.classList.add("didomi-overlay-container"),document.body.appendChild(t),t}function m(o,t){var i=document.getElementById(t);if(o.style.zIndex="1",i)i.className.includes("didomi-overlay-container")||i.classList.add("didomi-overlay-container"),i.appendChild(o);else{var n=document.querySelector(".didomi-overlay-container");if(n)n.appendChild(o);else{var r=document.createElement("div");r.classList.add("didomi-overlay-container"),r.style.zIndex="1000",r.style.position="fixed",r.appendChild(o),document.body.appendChild(r)}}}function s(o,t){var i=document.body.querySelector(".didomi-overlay-container #".concat(o));i&&t&&(null===t||void 0===t||t.appendChild(i))}var c=function(o,t,i){if(o&&t){var r=Array.from(o.attributes).filter((function(o){return o.name.startsWith("data-")})).map((function(o){return{name:o.name,value:"".concat(o.value,"-").concat(i)}}));if(null===r||void 0===r?void 0:r.length){var e,a=(0,n.Z)(r);try{for(a.s();!(e=a.n()).done;){var d=e.value;t.setAttribute(d.name,d.value)}}catch(u){a.e(u)}finally{a.f()}}}},h=function(o){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(o):"function"===typeof requestAnimationFrame?requestAnimationFrame(o):setTimeout(o)}},7762:function(o,t,i){i.d(t,{Z:function(){return r}});var n=i(181);function r(o,t){var i="undefined"!==typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!i){if(Array.isArray(o)||(i=(0,n.Z)(o))||t&&o&&"number"===typeof o.length){i&&(o=i);var r=0,e=function(){};return{s:e,n:function(){return r>=o.length?{done:!0}:{done:!1,value:o[r++]}},e:function(o){throw o},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,d=!0,u=!1;return{s:function(){i=i.call(o)},n:function(){var o=i.next();return d=o.done,o},e:function(o){u=!0,a=o},f:function(){try{d||null==i.return||i.return()}finally{if(u)throw a}}}}}}]);
//# sourceMappingURL=2293.91c56095.chunk.js.map