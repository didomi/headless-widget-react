"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[3656],{3656:function(t,e,i){i.r(e),i.d(e,{didomi_filters_container:function(){return s}});var n=i(4165),r=i(5861),o=i(5671),a=i(3144),d=i(221),l=i(5743),s=function(){function t(e){var i=this;(0,o.Z)(this,t),(0,d.r)(this,e),this.applyClicked=(0,d.c)(this,"applyClicked",7),this.resetClicked=(0,d.c)(this,"resetClicked",7),this.isExpanded=!1,this.toggleTextVisible=!0,this.formIsDirty=!1,this.toggleDisabled=!1,this.handleApplyClick=function(){i.applyClicked.emit()},this.handleResetClick=function(){i.resetClicked.emit()},this.toggle=function(){i.toggleDisabled||(i.isExpanded=!i.isExpanded)}}return(0,a.Z)(t,[{key:"collapse",value:function(){var t=(0,r.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.isExpanded=!1;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"expande",value:function(){var t=(0,r.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.isExpanded=!0;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidRender",value:function(){(0,l.a)(this.el,this.el.querySelector(".didomi-filters-container-toggle"),"toggle-button"),(0,l.a)(this.el,this.el.querySelector(".didomi-filters-container-reset-btn"),"reset-button"),(0,l.a)(this.el,this.el.querySelector(".didomi-filters-container-apply-btn"),"apply-button")}},{key:"render",value:function(){var t=(0,l.c)("didomi-icon",this.el.tagName),e=(0,l.c)("didomi-button",this.el.tagName),i=(0,l.c)("didomi-button-group",this.el.tagName);return(0,d.h)(d.a,{class:"didomi-filters-container"},(0,d.h)("div",{class:"didomi-filters-container-wrapper","data-expanded":this.isExpanded},(0,d.h)(e,{class:"didomi-filters-container-toggle",size:"small",rounded:!0,"icon-left":"filters",disabled:this.toggleDisabled,"aria-expanded":this.isExpanded,"aria-controls":"didomi-filters-body",onClick:this.toggle},this.toggleTextVisible&&(0,d.h)("span",{class:"didomi-filters-container-toggle-label"},"Filters"),(0,d.h)(t,{class:"didomi-filters-container-toggle-icon",name:"down-on"})),(0,d.h)("div",{id:"didomi-filters-body",class:"didomi-filters-container-body"},(0,d.h)("slot",null),(0,d.h)(i,{class:"didomi-filters-container-footer"},this.formIsDirty&&(0,d.h)(e,{class:"didomi-filters-container-reset-btn",variant:"secondary",onClick:this.handleResetClick},"Reset filters"),(0,d.h)(e,{class:"didomi-filters-container-apply-btn",disabled:!this.formIsDirty,onClick:this.handleApplyClick},"Apply filters")))))}},{key:"el",get:function(){return(0,d.g)(this)}}]),t}();s.style=".didomi-filters-container-wrapper{border-radius:16px;border:1px dotted transparent;display:flex;flex-direction:column;padding:0;transition:padding 300ms}.didomi-filters-container-toggle{align-items:center;align-self:flex-end;display:inline-flex;margin-right:16px}.didomi-filters-container-toggle .didomi-button-wrapper{transition:color 300ms, background-color 300ms}.didomi-filters-container-toggle-icon{transition:transform 300ms}.didomi-filters-container-filter-icon{margin-right:8px}.didomi-filters-container-toggle-label{font-size:18px;margin-right:8px}.didomi-filters-container-body{display:none;padding:0 56px}.didomi-filters-container-footer{display:flex;justify-content:flex-end}.didomi-filters-container-apply-btn{margin-right:0}.didomi-filters-container-wrapper[data-expanded]{border-color:#265973;padding:16px 0 24px;box-shadow:0px 5px 10px 0px rgba(0, 0, 0, 0.08)}.didomi-filters-container-wrapper[data-expanded] .didomi-filters-container-toggle{margin-bottom:8px}.didomi-filters-container-wrapper[data-expanded] .didomi-filters-container-toggle-icon{transform:rotate(180deg)}.didomi-filters-container-wrapper[data-expanded] .didomi-filters-container-toggle .didomi-button-wrapper{background-color:transparent;color:#265973;transition:background-color 300ms ease-in-out}.didomi-filters-container-wrapper[data-expanded] .didomi-filters-container-toggle .didomi-button-wrapper:hover{background-color:transparent !important;box-shadow:none;color:#3186af}.didomi-filters-container-wrapper[data-expanded] .didomi-filters-container-body{display:flex;flex-direction:column}"},5743:function(t,e,i){i.d(e,{a:function(){return p},b:function(){return u},c:function(){return l},d:function(){return f},e:function(){return s},f:function(){return a},g:function(){return r},h:function(){return o},i:function(){return d},j:function(){return c},r:function(){return m}});var n=i(7762);function r(){return"_"+Math.random().toString(36).substr(2,9)}function o(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]')).length>0}function a(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]'))}var d=function(t){var e={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(i){t.hasAttribute(i)&&(null!==t.getAttribute(i)&&(e[i]=t.getAttribute(i)),t.removeAttribute(i))})),e};function l(t,e){var i=e.toLowerCase().split("-");if("didomi"!==i[0]){var n=!1,r=i.reduce((function(t,e){return"didomi"===e||n?(n=!0,t):"".concat(t).concat(e,"-")}),"");return"".concat(r).concat(t)}return t}function s(t){var e,i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(e),e=setTimeout((function(){t.apply(i,o)}),n)}}function c(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var e=document.createElement("div");return e.classList.add("didomi-overlay-container"),document.body.appendChild(e),e}function u(t,e){var i=document.getElementById(e);if(t.style.zIndex="1",i)i.className.includes("didomi-overlay-container")||i.classList.add("didomi-overlay-container"),i.appendChild(t);else{var n=document.querySelector(".didomi-overlay-container");if(n)n.appendChild(t);else{var r=document.createElement("div");r.classList.add("didomi-overlay-container"),r.style.zIndex="1000",r.style.position="fixed",r.appendChild(t),document.body.appendChild(r)}}}function f(t,e){var i=document.body.querySelector(".didomi-overlay-container #".concat(t));i&&e&&(null===e||void 0===e||e.appendChild(i))}var p=function(t,e,i){if(t&&e){var r=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(i)}}));if(null===r||void 0===r?void 0:r.length){var o,a=(0,n.Z)(r);try{for(a.s();!(o=a.n()).done;){var d=o.value;e.setAttribute(d.name,d.value)}}catch(l){a.e(l)}finally{a.f()}}}},m=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(181);function r(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.Z)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,d=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return d=t.done,t},e:function(t){l=!0,a=t},f:function(){try{d||null==i.return||i.return()}finally{if(l)throw a}}}}}}]);
//# sourceMappingURL=3656.b7e8034d.chunk.js.map