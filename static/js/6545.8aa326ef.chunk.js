"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[6545],{6545:function(e,i,t){t.r(i),t.d(i,{didomi_switch:function(){return c}});var d=t(5671),o=t(3144),n=t(221),r=t(5743),c=function(){function e(i){var t=this;(0,d.Z)(this,e),(0,n.r)(this,i),this.valueChange=(0,n.c)(this,"valueChange",7),this.hasMiddleOption=!1,this.labelVariant="boxed",this.required=!1,this.accent=!1,this.hideErrorMessage=!1,this.hasLabel=!1,this.selection="not-selected",this.direction="right",this.switchId="didomi-switch-id_".concat((0,r.g)()),this.getSelectionValue=function(){return t.hasMiddleOption&&(t.valueMiddle&&t.value===t.valueMiddle||"middle"===t.value)?"middle":t.valueSelected&&t.value===t.valueSelected||"selected"===t.value?"selected":"not-selected"},this.getValueFromSelection=function(e){return"middle"===e?void 0!==t.valueMiddle?t.valueMiddle:"middle":"selected"===e?void 0!==t.valueSelected?t.valueSelected:"selected":void 0!==t.valueNotSelected?t.valueNotSelected:"not-selected"},this.changeValue=function(e){"not-selected"===t.selection&&(t.direction="right"),"middle"===t.selection&&(t.direction="not-selected"===e?"left":"right"),"selected"===t.selection&&(t.direction="left"),t.selection=e;var i=t.getValueFromSelection(e);t.value=i,t.valueChange.emit(i)},this.handleClick=function(e){var i=e.target.value;t.hasMiddleOption||i!==t.getSelectionValue()?t.changeValue(i):t.changeValue("selected"===i?"not-selected":"selected")},this.handleKeyUp=function(e){if(!t.disabled){var i="not-selected",d=t.getSelectionValue();"Enter"!==e.key&&"Space"!==e.key&&" "!==e.key||("not-selected"===d&&(i=t.hasMiddleOption?"middle":"selected"),"selected"===d&&(i=t.hasMiddleOption?"middle":"not-selected"),"middle"===d&&(i="left"===t.direction?"not-selected":"selected"),t.hasMiddleOption||i!==t.getSelectionValue()?t.changeValue(i):t.changeValue("selected"===i?"not-selected":"selected")),e.stopPropagation()}},this.validateLabelContent=function(){var e,i,d;t.hasLabel=!!(null===(i=null===(e=t.el.querySelector("label div"))||void 0===e?void 0:e.children)||void 0===i?void 0:i.length)||!!(null===(d=t.el.querySelector("label div"))||void 0===d?void 0:d.textContent)}}return(0,o.Z)(e,[{key:"componentDidLoad",value:function(){this.validateLabelContent()}},{key:"componentDidUpdate",value:function(){this.validateLabelContent()}},{key:"render",value:function(){var e=this.getSelectionValue();return(0,n.h)(n.a,{class:"didomi-switch"},(0,n.h)("div",{class:{"didomi-switch-wrapper":!0,"didomi-switch-disabled":this.disabled,"didomi-switch-invalid":!!this.error,"didomi-switch-boxed":"boxed"===this.labelVariant&&this.hasLabel,"didomi-switch-selected":"selected"===e,"didomi-switch-accent":this.accent}},(0,n.h)("label",{class:{"didomi-switch-label":!0,"didomi-switch-label-hidden":!this.hasLabel},htmlFor:this.switchId},(0,n.h)("div",null,(0,n.h)("slot",null))),(0,n.h)("div",{id:this.switchId,role:"radiogroup",tabIndex:this.disabled?-1:0,onKeyUp:this.handleKeyUp,class:"didomi-switch-container"},(0,n.h)("input",{id:"not-selected",class:"didomi-switch-not-selected",type:"radio",value:"not-selected",tabIndex:-1,"aria-label":"not-selected",disabled:this.disabled,checked:"not-selected"===e,onClick:this.handleClick}),this.hasMiddleOption&&(0,n.h)("input",{id:"middle",class:"didomi-switch-middle",value:"middle",tabIndex:-1,"aria-label":"middle",type:"radio",disabled:this.disabled,checked:"middle"===e,onClick:this.handleClick}),(0,n.h)("input",{id:"selected",value:"selected",class:"didomi-switch-selected",type:"radio",tabIndex:-1,"aria-label":"selected",checked:"selected"===e,disabled:this.disabled,onClick:this.handleClick}),(0,n.h)("span",{class:"toggle-thumb"}))),(0,n.h)("div",null,!this.hideErrorMessage&&(0,n.h)("div",{class:"didomi-switch-error"},this.error?this.error:(0,n.h)("span",null,"\xa0"))))}},{key:"el",get:function(){return(0,n.g)(this)}}]),e}();c.style='.didomi-switch{display:inline-flex;width:100%;flex-direction:column}.didomi-switch .didomi-switch-wrapper{flex:1;display:inline-flex;align-items:center;justify-content:space-between}.didomi-switch .didomi-switch-wrapper.didomi-switch-invalid.didomi-switch-boxed{border:1px solid #b10e00}.didomi-switch .didomi-switch-wrapper.didomi-switch-disabled .didomi-switch-label{color:#526e7a !important}.didomi-switch .didomi-switch-wrapper.didomi-switch-disabled .toggle-thumb{background-color:#9ebdcb !important}.didomi-switch .didomi-switch-wrapper.didomi-switch-disabled input{cursor:not-allowed !important}.didomi-switch .didomi-switch-wrapper.didomi-switch-selected.didomi-switch-boxed{border:1px solid #eff7fb;background-color:#eff7fb}.didomi-switch .didomi-switch-wrapper.didomi-switch-accent.didomi-switch-boxed{border:1px solid #ffffff;background-color:#ffffff}.didomi-switch .didomi-switch-wrapper.didomi-switch-boxed{border:1px solid #f9fafa;background-color:#f9fafa;border-radius:4px;padding:12px 16px}.didomi-switch .didomi-switch-wrapper .didomi-switch-label{font-family:"IBM Plex Sans", "IBMPlexSans";font-size:14px;font-weight:400;letter-spacing:0px;line-height:20px;color:#1d4153;padding-right:16px}.didomi-switch .didomi-switch-wrapper .didomi-switch-label-hidden{display:none}.didomi-switch .didomi-switch-wrapper .didomi-switch-container{display:inline-flex;width:40px;min-width:40px;height:20px;min-height:20px;position:relative;box-sizing:content-box;border-radius:10px}.didomi-switch .didomi-switch-wrapper .didomi-switch-container:focus{outline:3px solid #84d1eb}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .toggle-thumb{position:absolute;top:0;left:0;right:0;bottom:0;padding:2px;display:flex;justify-content:space-between;align-items:center;border-radius:10px;box-sizing:border-box;border:1px solid #c9dfe8;cursor:pointer;transition:0.4s all ease}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .toggle-thumb:before{content:"";height:16px;width:16px;border-radius:50%;background-color:#ffffff;transition:0.4s all ease}.didomi-switch .didomi-switch-wrapper .didomi-switch-container input{cursor:pointer;opacity:0;flex:1;height:100%;padding:1px;margin:0;z-index:2;position:relative}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .didomi-switch-not-selected:checked~.toggle-thumb{background-color:#e2f1f8}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .didomi-switch-not-selected:checked~.toggle-thumb:before{box-shadow:2px 0px 2px #8da8b5;transform:translateX(0px)}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .didomi-switch-middle:checked~.toggle-thumb{background-color:#3186af}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .didomi-switch-middle:checked~.toggle-thumb:before{box-shadow:0px 0px 2px #0a3448;transform:translateX(10px)}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .didomi-switch-selected:checked~.toggle-thumb{background-color:#21c6b2}.didomi-switch .didomi-switch-wrapper .didomi-switch-container .didomi-switch-selected:checked~.toggle-thumb:before{box-shadow:-2px 0px 2px #0d776a;transform:translateX(20px)}.didomi-switch .didomi-switch-error{font-family:"IBM Plex Sans", "IBMPlexSans";font-size:12px;letter-spacing:0px;line-height:18px;font-weight:400;color:#b10e00;margin-top:4px}'},5743:function(e,i,t){t.d(i,{a:function(){return m},b:function(){return h},c:function(){return a},d:function(){return u},e:function(){return l},f:function(){return r},g:function(){return o},h:function(){return n},i:function(){return c},j:function(){return s},r:function(){return p}});var d=t(7762);function o(){return"_"+Math.random().toString(36).substr(2,9)}function n(e,i){return e.querySelectorAll('[slot="'.concat(i,'"]')).length>0}function r(e,i){return e.querySelectorAll('[slot="'.concat(i,'"]'))}var c=function(e){var i={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(i[t]=e.getAttribute(t)),e.removeAttribute(t))})),i};function a(e,i){var t=i.toLowerCase().split("-");if("didomi"!==t[0]){var d=!1,o=t.reduce((function(e,i){return"didomi"===i||d?(d=!0,e):"".concat(e).concat(i,"-")}),"");return"".concat(o).concat(e)}return e}function l(e){var i,t=this,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];clearTimeout(i),i=setTimeout((function(){e.apply(t,n)}),d)}}function s(){var e=document.body.querySelector(".didomi-overlay-container");if(e)return e;var i=document.createElement("div");return i.classList.add("didomi-overlay-container"),document.body.appendChild(i),i}function h(e,i){var t=document.getElementById(i);if(e.style.zIndex="1",t)t.className.includes("didomi-overlay-container")||t.classList.add("didomi-overlay-container"),t.appendChild(e);else{var d=document.querySelector(".didomi-overlay-container");if(d)d.appendChild(e);else{var o=document.createElement("div");o.classList.add("didomi-overlay-container"),o.style.zIndex="1000",o.style.position="fixed",o.appendChild(e),document.body.appendChild(o)}}}function u(e,i){var t=document.body.querySelector(".didomi-overlay-container #".concat(e));t&&i&&(null===i||void 0===i||i.appendChild(t))}var m=function(e,i,t){if(e&&i){var o=Array.from(e.attributes).filter((function(e){return e.name.startsWith("data-")})).map((function(e){return{name:e.name,value:"".concat(e.value,"-").concat(t)}}));if(null===o||void 0===o?void 0:o.length){var n,r=(0,d.Z)(o);try{for(r.s();!(n=r.n()).done;){var c=n.value;i.setAttribute(c.name,c.value)}}catch(a){r.e(a)}finally{r.f()}}}},p=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)}},7762:function(e,i,t){t.d(i,{Z:function(){return o}});var d=t(181);function o(e,i){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,d.Z)(e))||i&&e&&"number"===typeof e.length){t&&(e=t);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){a=!0,r=e},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw r}}}}}}]);
//# sourceMappingURL=6545.8aa326ef.chunk.js.map