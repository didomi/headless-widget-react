"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[9168],{9168:function(e,t,n){n.r(t),n.d(t,{didomi_text_search_input:function(){return s}});var i=n(4165),r=n(5861),a=n(5671),o=n(3144),u=n(221),c=n(5743),s=function(){function e(t){var n=this;(0,a.Z)(this,e),(0,u.r)(this,t),this.focusChange=(0,u.c)(this,"focusChange",7),this.valueChange=(0,u.c)(this,"valueChange",7),this.clearClick=(0,u.c)(this,"clearClick",7),this.inheritedAttributes={},this.disabled=!1,this.required=!1,this.variant="main",this.hideErrorMessage=!1,this.size="md",this.collapsible=!1,this.onValueChange=function(e){e.stopPropagation();var t=e.target;t&&(n.value=t.value,n.valueChange.emit(n.value))},this.handleSearchIconClick=function(){n.didomiBaseInput.setFocus()},this.handleClearIconClick=function(e){e.preventDefault(),0===e.button?(n.value&&(n.value="",n.valueChange.emit("")),n.didomiBaseInput.setFocus(),n.clearClick.emit()):e.stopImmediatePropagation()}}return(0,o.Z)(e,[{key:"setFocus",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.didomiBaseInput&&this.didomiBaseInput.setFocus();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setBlur",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.didomiBaseInput&&this.didomiBaseInput.setBlur();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,c.i)(this.el,["aria-haspopup","aria-owns","aria-expanded","aria-autocomplete"])}},{key:"render",value:function(){var e=this,t=(0,c.c)("didomi-base-input",this.el.tagName),n=(0,c.c)("didomi-icon",this.el.tagName),i="xs"===this.size?"search-sm":"search",r="xs"===this.size?"close-sm":"close-cancel";return(0,u.h)(u.a,{class:"didomi-text-search-input"},(0,u.h)(t,Object.assign({ref:function(t){return e.didomiBaseInput=t},name:this.name,label:this.label,placeholder:this.placeholder,type:"text",disabled:this.disabled,required:this.required,value:this.value,collapsible:this.collapsible,collapsibleWidth:this.collapsibleWidth,autocomplete:"off",autocorrect:"off",onValueChange:this.onValueChange,variant:this.variant,error:this.error,hideErrorMessage:this.hideErrorMessage,size:this.size},this.inheritedAttributes),(0,u.h)("slot",{name:"description"}),(0,u.h)(n,{slot:"left",name:i,onClick:this.handleSearchIconClick}),(0,u.h)("button",{type:"button",class:{"didomi-text-search-input__clear-icon":!0,"didomi-text-search-input__clear-icon-hidden":!this.value,"didomi-text-search-input__clear-icon-xs":"xs"===this.size},slot:"right",title:"Clear search",onClick:this.handleClearIconClick},(0,u.h)(n,{name:r}))))}},{key:"el",get:function(){return(0,u.g)(this)}}]),e}();s.style=".didomi-text-search-input__clear-icon{cursor:pointer;outline:none !important;background:transparent;padding:8px;margin:0;border:none;border-radius:100%;height:32px;width:32px;display:flex;align-items:center;justify-content:flex-end}.didomi-text-search-input__clear-icon:focus{box-shadow:0 0 0 3px #84d1eb}.didomi-text-search-input__clear-icon-hidden{visibility:hidden}.didomi-text-search-input__clear-icon-xs{height:20px;width:20px}"},5743:function(e,t,n){n.d(t,{a:function(){return f},b:function(){return d},c:function(){return c},d:function(){return h},e:function(){return s},f:function(){return o},g:function(){return r},h:function(){return a},i:function(){return u},j:function(){return l},r:function(){return m}});var i=n(7762);function r(){return"_"+Math.random().toString(36).substr(2,9)}function a(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]')).length>0}function o(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]'))}var u=function(e){var t={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){e.hasAttribute(n)&&(null!==e.getAttribute(n)&&(t[n]=e.getAttribute(n)),e.removeAttribute(n))})),t};function c(e,t){var n=t.toLowerCase().split("-");if("didomi"!==n[0]){var i=!1,r=n.reduce((function(e,t){return"didomi"===t||i?(i=!0,e):"".concat(e).concat(t,"-")}),"");return"".concat(r).concat(e)}return e}function s(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];clearTimeout(t),t=setTimeout((function(){e.apply(n,a)}),i)}}function l(){var e=document.body.querySelector(".didomi-overlay-container");if(e)return e;var t=document.createElement("div");return t.classList.add("didomi-overlay-container"),document.body.appendChild(t),t}function d(e,t){var n=document.getElementById(t);if(e.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(e);else{var i=document.querySelector(".didomi-overlay-container");if(i)i.appendChild(e);else{var r=document.createElement("div");r.classList.add("didomi-overlay-container"),r.style.zIndex="1000",r.style.position="fixed",r.appendChild(e),document.body.appendChild(r)}}}function h(e,t){var n=document.body.querySelector(".didomi-overlay-container #".concat(e));n&&t&&(null===t||void 0===t||t.appendChild(n))}var f=function(e,t,n){if(e&&t){var r=Array.from(e.attributes).filter((function(e){return e.name.startsWith("data-")})).map((function(e){return{name:e.name,value:"".concat(e.value,"-").concat(n)}}));if(null===r||void 0===r?void 0:r.length){var a,o=(0,i.Z)(r);try{for(o.s();!(a=o.n()).done;){var u=a.value;t.setAttribute(u.name,u.value)}}catch(c){o.e(c)}finally{o.f()}}}},m=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)}},7762:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(181);function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,i.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw o}}}}}}]);
//# sourceMappingURL=9168.ea1d281c.chunk.js.map