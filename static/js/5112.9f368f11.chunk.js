"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[5112],{5112:function(t,n,o){o.r(n),o.d(n,{didomi_copy_text:function(){return a}});var e=o(5671),i=o(3144),r=o(221),c=o(5743),a=function(){function t(n){(0,e.Z)(this,t),(0,r.r)(this,n),this.textCopied=(0,r.c)(this,"textCopied",7),this.isIconPersistent=!1,this.iconSize="large",this.variation="basic",this.truncate=!1}return(0,i.Z)(t,[{key:"handleClick",value:function(){var t=this;navigator.clipboard.writeText(this.text).then((function(){return t.textCopied.emit()})).catch((function(){return console.error("Error while copying text.")}))}},{key:"render",value:function(){var t=(0,c.c)("didomi-icon",this.el.tagName),n={"didomi-copy-text-button":!0,"didomi-copy-text-button-clear":"basic-clear"===this.variation,"didomi-copy-text-button-outline":"basic-outline"===this.variation},o={"didomi-copy-text-button-text":!0,"didomi-copy-text-button-text-truncate":this.truncate},e={"didomi-copy-text-icon":!0,"didomi-copy-text-icon-dynamic":!this.isIconPersistent,"didomi-copy-text-icon-small":"small"===this.iconSize};return(0,r.h)(r.a,{class:"didomi-copy-text"},(0,r.h)("button",{class:n},(0,r.h)("div",{class:o},(0,r.h)("slot",null)),(0,r.h)(t,{class:e,name:"copy"})))}},{key:"el",get:function(){return(0,r.g)(this)}}]),t}();a.style='.didomi-copy-text{display:inline-block}.didomi-copy-text-button{width:100%;align-items:center;cursor:pointer;display:inline-flex;background-color:white;outline:none;margin:inherit;padding:4px;border-radius:8px;border:none}.didomi-copy-text-button-clear{background-color:transparent}.didomi-copy-text-button-text{width:100%;overflow:auto}.didomi-copy-text-button-text-truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.didomi-copy-text-button:focus{outline:none;box-shadow:0 0 0 3px #84d1eb}.didomi-copy-text-button:hover .didomi-copy-text-icon-dynamic{opacity:1}.didomi-copy-text-button .didomi-copy-text-icon{color:#265973;margin-left:4px;width:16px;transition:color 0.3s}.didomi-copy-text-button .didomi-copy-text-icon-small{width:7px}.didomi-copy-text-button .didomi-copy-text-icon-dynamic{opacity:0;transition:opacity 300ms}.didomi-copy-text-button-outline{--basicColor:#265973;padding:16px 24px;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold" !important;font-size:14px !important;font-weight:600 !important;letter-spacing:0px !important;line-height:20px !important;border-radius:25px;color:var(--basicColor);border:1px dashed #9ebdcb;transition:border 0.3s, color 0.3s}.didomi-copy-text-button-outline .didomi-copy-text-icon{margin-left:8px}.didomi-copy-text-button-outline:hover{color:#3186af;border-color:#3186af}.didomi-copy-text-button-outline:hover .didomi-copy-text-icon{color:#3186af}'},5743:function(t,n,o){o.d(n,{a:function(){return p},b:function(){return s},c:function(){return d},d:function(){return m},e:function(){return u},f:function(){return c},g:function(){return i},h:function(){return r},i:function(){return a},j:function(){return l},r:function(){return f}});var e=o(7762);function i(){return"_"+Math.random().toString(36).substr(2,9)}function r(t,n){return t.querySelectorAll('[slot="'.concat(n,'"]')).length>0}function c(t,n){return t.querySelectorAll('[slot="'.concat(n,'"]'))}var a=function(t){var n={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(o){t.hasAttribute(o)&&(null!==t.getAttribute(o)&&(n[o]=t.getAttribute(o)),t.removeAttribute(o))})),n};function d(t,n){var o=n.toLowerCase().split("-");if("didomi"!==o[0]){var e=!1,i=o.reduce((function(t,n){return"didomi"===n||e?(e=!0,t):"".concat(t).concat(n,"-")}),"");return"".concat(i).concat(t)}return t}function u(t){var n,o=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];clearTimeout(n),n=setTimeout((function(){t.apply(o,r)}),e)}}function l(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var n=document.createElement("div");return n.classList.add("didomi-overlay-container"),document.body.appendChild(n),n}function s(t,n){var o=document.getElementById(n);if(t.style.zIndex="1",o)o.className.includes("didomi-overlay-container")||o.classList.add("didomi-overlay-container"),o.appendChild(t);else{var e=document.querySelector(".didomi-overlay-container");if(e)e.appendChild(t);else{var i=document.createElement("div");i.classList.add("didomi-overlay-container"),i.style.zIndex="1000",i.style.position="fixed",i.appendChild(t),document.body.appendChild(i)}}}function m(t,n){var o=document.body.querySelector(".didomi-overlay-container #".concat(t));o&&n&&(null===n||void 0===n||n.appendChild(o))}var p=function(t,n,o){if(t&&n){var i=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(o)}}));if(null===i||void 0===i?void 0:i.length){var r,c=(0,e.Z)(i);try{for(c.s();!(r=c.n()).done;){var a=r.value;n.setAttribute(a.name,a.value)}}catch(d){c.e(d)}finally{c.f()}}}},f=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,n,o){o.d(n,{Z:function(){return i}});var e=o(181);function i(t,n){var o="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=(0,e.Z)(t))||n&&t&&"number"===typeof t.length){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,d=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return a=t.done,t},e:function(t){d=!0,c=t},f:function(){try{a||null==o.return||o.return()}finally{if(d)throw c}}}}}}]);
//# sourceMappingURL=5112.9f368f11.chunk.js.map