"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[8678],{8678:function(t,i,n){n.r(i),n.d(i,{didomi_content_promotion_card:function(){return c}});var o=n(5671),e=n(3144),r=n(221),a=n(5743),c=function(){function t(i){var n=this;(0,o.Z)(this,t),(0,r.r)(this,i),this.ctaClicked=(0,r.c)(this,"ctaClicked",7),this.tags=[],this.compatibilities=[],this.chips=[],this.handleCtaClicked=function(){n.ctaClicked.emit()}}return(0,e.Z)(t,[{key:"render",value:function(){var t=(0,a.c)("didomi-button",this.el.tagName),i=(0,a.c)("didomi-chip",this.el.tagName),n=(0,a.c)("didomi-card-container",this.el.tagName),o=(0,a.c)("didomi-content-promotion-card-shortened-items",this.el.tagName);return(0,r.h)(r.a,{class:"didomi-content-promotion-card"},(0,r.h)(n,{class:"didomi-content-promotion-card-container"},(0,r.h)("div",{class:"didomi-content-promotion-card-inner"},(0,r.h)("section",{class:"didomi-content-promotion-card-header"},(0,r.h)("ul",{class:"didomi-content-promotion-card-chips"},this.chips.map((function(t){return(0,r.h)("li",null,(0,r.h)(i,{label:t}))}))),(0,r.h)("div",{class:"didomi-content-promotion-card-img-wrapper"},(0,r.h)("img",{class:"didomi-content-promotion-card-img",src:this.imgSrc,alt:""}))),(0,r.h)("section",{class:"didomi-content-promotion-card-body"},!!this.tags.length&&(0,r.h)(o,{class:"didomi-content-promotion-card-tags-list",items:this.tags}),(0,r.h)("div",{class:"didomi-content-promotion-card-title"},this.titleText),(0,r.h)("div",{class:"didomi-content-promotion-card-description"},this.description),(0,r.h)("section",{class:"didomi-content-promotion-card-footer"},!!this.compatibilities.length&&(0,r.h)(o,{class:"didomi-content-promotion-card-compatibilities",items:this.compatibilities,"items-types":"compatibility","items-label":this.compatibilitiesLabel}),(0,r.h)(t,{class:"didomi-content-promotion-card-cta",size:"small",variant:"secondary",onClick:this.handleCtaClicked},this.ctaText))))))}},{key:"el",get:function(){return(0,r.g)(this)}}]),t}();c.style='.didomi-content-promotion-card{display:block;--card-inner-padding:0}.didomi-content-promotion-card-container{height:100%}.didomi-content-promotion-card ul{list-style:none;margin:0;padding:0}.didomi-content-promotion-card-inner{display:flex;flex-direction:column;height:100%;overflow:hidden}.didomi-content-promotion-card-header{border-radius:8px 8px 0 0;background-color:#f9fafa;padding:74px 24px 32px 24px;position:relative}.didomi-content-promotion-card-chips{display:inline-flex;gap:8px;position:absolute;right:24px;top:24px}.didomi-content-promotion-card-img-wrapper{height:56px}.didomi-content-promotion-card-img{display:block;max-height:100%;margin-inline:auto;max-width:100%}.didomi-content-promotion-card-body{display:flex;flex-direction:column;flex-grow:1;padding:55px 24px 24px;position:relative}.didomi-content-promotion-card-tags-list{left:24px;position:absolute;right:24px;top:16px}.didomi-content-promotion-card-title{color:#1d4153;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:18px;font-weight:600;letter-spacing:0px;line-height:26px}.didomi-content-promotion-card-description{color:#1d4153;margin-bottom:24px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-family:"IBM Plex Sans", "IBMPlexSans-Light";font-size:16px;font-weight:300;letter-spacing:0px;line-height:24px}.didomi-content-promotion-card-footer{align-items:center;display:flex;gap:48px;margin-top:auto}.didomi-content-promotion-card-compatibilities{position:relative;width:calc(100% - 48px - 100px)}.didomi-content-promotion-card-cta{margin-left:auto}'},5743:function(t,i,n){n.d(i,{a:function(){return p},b:function(){return m},c:function(){return d},d:function(){return u},e:function(){return l},f:function(){return a},g:function(){return e},h:function(){return r},i:function(){return c},j:function(){return s},r:function(){return h}});var o=n(7762);function e(){return"_"+Math.random().toString(36).substr(2,9)}function r(t,i){return t.querySelectorAll('[slot="'.concat(i,'"]')).length>0}function a(t,i){return t.querySelectorAll('[slot="'.concat(i,'"]'))}var c=function(t){var i={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){t.hasAttribute(n)&&(null!==t.getAttribute(n)&&(i[n]=t.getAttribute(n)),t.removeAttribute(n))})),i};function d(t,i){var n=i.toLowerCase().split("-");if("didomi"!==n[0]){var o=!1,e=n.reduce((function(t,i){return"didomi"===i||o?(o=!0,t):"".concat(t).concat(i,"-")}),"");return"".concat(e).concat(t)}return t}function l(t){var i,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];clearTimeout(i),i=setTimeout((function(){t.apply(n,r)}),o)}}function s(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var i=document.createElement("div");return i.classList.add("didomi-overlay-container"),document.body.appendChild(i),i}function m(t,i){var n=document.getElementById(i);if(t.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(t);else{var o=document.querySelector(".didomi-overlay-container");if(o)o.appendChild(t);else{var e=document.createElement("div");e.classList.add("didomi-overlay-container"),e.style.zIndex="1000",e.style.position="fixed",e.appendChild(t),document.body.appendChild(e)}}}function u(t,i){var n=document.body.querySelector(".didomi-overlay-container #".concat(t));n&&i&&(null===i||void 0===i||i.appendChild(n))}var p=function(t,i,n){if(t&&i){var e=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(n)}}));if(null===e||void 0===e?void 0:e.length){var r,a=(0,o.Z)(e);try{for(a.s();!(r=a.n()).done;){var c=r.value;i.setAttribute(c.name,c.value)}}catch(d){a.e(d)}finally{a.f()}}}},h=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,i,n){n.d(i,{Z:function(){return e}});var o=n(181);function e(t,i){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,o.Z)(t))||i&&t&&"number"===typeof t.length){n&&(t=n);var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw a}}}}}}]);
//# sourceMappingURL=8678.12a9dc77.chunk.js.map