"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[6105],{6105:function(t,e,n){n.r(e),n.d(e,{didomi_carousel_content_slide:function(){return c}});var i=n(5671),o=n(3144),r=n(221),a=n(5743),c=function(){function t(e){(0,i.Z)(this,t),(0,r.r)(this,e),this.mediaType="image",this.altText="",this.isActive=!1}return(0,o.Z)(t,[{key:"handleStatusChange",value:function(t){var e;t||"video"!==this.mediaType||null===(e=this.videoRef)||void 0===e||e.pause()}},{key:"render",value:function(){var t=this,e=(0,a.h)(this.el,"content"),n=(0,a.c)("didomi-chip",this.el.tagName);return(0,r.h)(r.a,{class:"didomi-carousel-content-slide","aria-hidden":this.isActive?"true":"false"},e&&(0,r.h)("div",{class:"didomi-carousel-content-slide-content"},this.contentHeader&&(0,r.h)("div",{class:"didomi-carousel-content-slide-content-header"},this.contentHeader),this.contentTag&&(0,r.h)(n,{class:"didomi-carousel-content-slide-content-tag",basicType:"info-alternative",label:this.contentTag}),(0,r.h)("div",{class:"didomi-carousel-content-slide-content-slot"},(0,r.h)("slot",{name:"content"}))),"image"===this.mediaType?(0,r.h)("img",{class:"didomi-carousel-content-slide-media didomi-carousel-content-slide-img",src:this.mediaSrc,alt:this.altText}):(0,r.h)("video",{ref:function(e){return t.videoRef=e},class:"didomi-carousel-content-slide-media",src:this.mediaSrc,controls:!0}))}},{key:"el",get:function(){return(0,r.g)(this)}}],[{key:"watchers",get:function(){return{isActive:["handleStatusChange"]}}}]),t}();c.style='.didomi-carousel-content-slide{display:flex;height:100%;position:absolute;background-color:#ffffff;width:100%;--contentMaxWidth:412px;--mobileMediaHeight:222px;--mobileBottomSpace:72px}.didomi-carousel-content-slide-content{min-width:var(--contentMaxWidth);width:var(--contentMaxWidth);display:flex;flex-direction:column;padding-top:64px;padding-bottom:96px;padding-left:64px}.didomi-carousel-content-slide-content-slot{max-width:calc(var(--contentMaxWidth) - 64px * 2);flex:1;overflow:auto}.didomi-carousel-content-slide-content-tag{margin-bottom:8px}.didomi-carousel-content-slide-content-header{font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:16px;letter-spacing:0px;line-height:20px;font-weight:600;text-transform:uppercase;color:#265973;margin-bottom:48px}.didomi-carousel-content-slide-media{height:100%;flex:1}.didomi-carousel-content-slide-slide-img{object-fit:cover}@media (max-width: 792px){.didomi-carousel-content-slide{flex-direction:column-reverse;margin-bottom:var(--mobileBottomSpace);height:calc(100% - var(--mobileBottomSpace))}.didomi-carousel-content-slide-content{min-width:100%;width:100%;justify-content:center;align-items:center;padding:0}.didomi-carousel-content-slide-content-header{margin-top:32px;margin-bottom:32px}.didomi-carousel-content-slide-content-title-slot,.didomi-carousel-content-slide-content-slot{max-width:100%;overflow:initial;text-align:center;padding:0 24px}.didomi-carousel-content-slide-content-slot{margin-bottom:24px}}'},5743:function(t,e,n){n.d(e,{a:function(){return f},b:function(){return s},c:function(){return d},d:function(){return m},e:function(){return l},f:function(){return a},g:function(){return o},h:function(){return r},i:function(){return c},j:function(){return u},r:function(){return h}});var i=n(7762);function o(){return"_"+Math.random().toString(36).substr(2,9)}function r(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]')).length>0}function a(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]'))}var c=function(t){var e={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){t.hasAttribute(n)&&(null!==t.getAttribute(n)&&(e[n]=t.getAttribute(n)),t.removeAttribute(n))})),e};function d(t,e){var n=e.toLowerCase().split("-");if("didomi"!==n[0]){var i=!1,o=n.reduce((function(t,e){return"didomi"===e||i?(i=!0,t):"".concat(t).concat(e,"-")}),"");return"".concat(o).concat(t)}return t}function l(t){var e,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];clearTimeout(e),e=setTimeout((function(){t.apply(n,r)}),i)}}function u(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var e=document.createElement("div");return e.classList.add("didomi-overlay-container"),document.body.appendChild(e),e}function s(t,e){var n=document.getElementById(e);if(t.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(t);else{var i=document.querySelector(".didomi-overlay-container");if(i)i.appendChild(t);else{var o=document.createElement("div");o.classList.add("didomi-overlay-container"),o.style.zIndex="1000",o.style.position="fixed",o.appendChild(t),document.body.appendChild(o)}}}function m(t,e){var n=document.body.querySelector(".didomi-overlay-container #".concat(t));n&&e&&(null===e||void 0===e||e.appendChild(n))}var f=function(t,e,n){if(t&&e){var o=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(n)}}));if(null===o||void 0===o?void 0:o.length){var r,a=(0,i.Z)(o);try{for(a.s();!(r=a.n()).done;){var c=r.value;e.setAttribute(c.name,c.value)}}catch(d){a.e(d)}finally{a.f()}}}},h=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,e,n){n.d(e,{Z:function(){return o}});var i=n(181);function o(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,i.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw a}}}}}}]);
//# sourceMappingURL=6105.c31b46db.chunk.js.map