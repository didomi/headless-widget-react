"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[5496],{5496:function(t,e,n){n.r(e),n.d(e,{didomi_search_bar:function(){return l}});var i=n(4165),a=n(5861),o=n(5671),r=n(3144),u=n(221),c=n(5743),l=function(){function t(e){var n=this;(0,o.Z)(this,t),(0,u.r)(this,e),this.focusChange=(0,u.c)(this,"focusChange",7),this.valueChange=(0,u.c)(this,"valueChange",7),this.isCollapsed=!1,this.autoCollapse=!0,this.initialCollapsed=!1,this.variant="main",this.onValueChange=function(t){var e=t.target;e&&(n.value=e.value,n.valueChange.emit(n.value))},this.onClickOutside=function(t){n.closeFromOutsideOnClick(t.target)},this.toggleCollapsing=function(){n.isCollapsed=!n.isCollapsed}}return(0,r.Z)(t,[{key:"componentWillLoad",value:function(){this.onCollapsedChange()}},{key:"onCollapsedChange",value:function(){this.isCollapsed=this.initialCollapsed}},{key:"setFocus",value:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.didomiTextSearchInput&&this.didomiTextSearchInput.setFocus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){document.addEventListener("click",this.onClickOutside)}},{key:"disconnectedCallback",value:function(){document.removeEventListener("click",this.onClickOutside)}},{key:"componentDidUpdate",value:function(){var t;this.isCollapsed||null===(t=this.didomiTextSearchInput)||void 0===t||t.setFocus()}},{key:"closeFromOutsideOnClick",value:function(t){var e=this.el;!this.autoCollapse||this.isCollapsed||e.contains(t)||(this.isCollapsed=!0)}},{key:"render",value:function(){var t=this,e=(0,c.c)("didomi-text-search-input",this.el.tagName),n=(0,c.c)("didomi-icon",this.el.tagName),i=(0,c.c)("didomi-button",this.el.tagName),a=(0,c.c)("didomi-tooltip",this.el.tagName),o="secondary"===this.variant,r=!this.isCollapsed||o,l=r&&!this.label;return(0,u.h)(u.a,{class:"didomi-search-bar ".concat(l?"didomi-search-bar--has-padding":"")},r?(0,u.h)(e,{ref:function(e){return t.didomiTextSearchInput=e},label:"main"===this.variant?this.label:null,placeholder:this.placeholder,type:"text",value:this.value,variant:this.variant,onValueChange:this.onValueChange,hideErrorMessage:!0}):(0,u.h)(a,{content:this.tooltipContent,trigger:"mouseenter focus",placement:"top"},(0,u.h)(i,{"data-iconname":"search",onClick:this.toggleCollapsing,variant:"secondary",class:"didomi-button-wrapper didomi-button-secondary"},(0,u.h)(n,{name:"search",class:"didomi-search-bar-icon"}))))}},{key:"el",get:function(){return(0,u.g)(this)}}],[{key:"watchers",get:function(){return{initialCollapsed:["onCollapsedChange"]}}}]),t}();l.style=".didomi-search-bar .didomi-input-wrapper{min-width:300px}.didomi-search-bar .didomi-base-input .didomi-base-input-native-input::placeholder{color:#526e7a}.didomi-search-bar--has-padding{padding:4px 0}"},5743:function(t,e,n){n.d(e,{a:function(){return f},b:function(){return d},c:function(){return c},d:function(){return h},e:function(){return l},f:function(){return r},g:function(){return a},h:function(){return o},i:function(){return u},j:function(){return s},r:function(){return m}});var i=n(7762);function a(){return"_"+Math.random().toString(36).substr(2,9)}function o(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]')).length>0}function r(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]'))}var u=function(t){var e={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){t.hasAttribute(n)&&(null!==t.getAttribute(n)&&(e[n]=t.getAttribute(n)),t.removeAttribute(n))})),e};function c(t,e){var n=e.toLowerCase().split("-");if("didomi"!==n[0]){var i=!1,a=n.reduce((function(t,e){return"didomi"===e||i?(i=!0,t):"".concat(t).concat(e,"-")}),"");return"".concat(a).concat(t)}return t}function l(t){var e,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];clearTimeout(e),e=setTimeout((function(){t.apply(n,o)}),i)}}function s(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var e=document.createElement("div");return e.classList.add("didomi-overlay-container"),document.body.appendChild(e),e}function d(t,e){var n=document.getElementById(e);if(t.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(t);else{var i=document.querySelector(".didomi-overlay-container");if(i)i.appendChild(t);else{var a=document.createElement("div");a.classList.add("didomi-overlay-container"),a.style.zIndex="1000",a.style.position="fixed",a.appendChild(t),document.body.appendChild(a)}}}function h(t,e){var n=document.body.querySelector(".didomi-overlay-container #".concat(t));n&&e&&(null===e||void 0===e||e.appendChild(n))}var f=function(t,e,n){if(t&&e){var a=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(n)}}));if(null===a||void 0===a?void 0:a.length){var o,r=(0,i.Z)(a);try{for(r.s();!(o=r.n()).done;){var u=o.value;e.setAttribute(u.name,u.value)}}catch(c){r.e(c)}finally{r.f()}}}},m=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,e,n){n.d(e,{Z:function(){return a}});var i=n(181);function a(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,i.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,r=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw r}}}}}}]);
//# sourceMappingURL=5496.95623a4d.chunk.js.map