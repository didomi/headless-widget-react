"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[9301],{9301:function(t,e,n){n.r(e),n.d(e,{didomi_table_th:function(){return c}});var r=n(4165),i=n(5861),o=n(5671),a=n(3144),u=n(221),s=n(5743),c=function(){function t(e){(0,o.Z)(this,t),(0,u.r)(this,e),this.sortColumnChange=(0,u.c)(this,"sortColumnChange",7),this.cellAlign="left",this.sortable=!1,this.isSorting=!1}return(0,a.Z)(t,[{key:"setSortable",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.sortable=!0;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setUnSortable",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.sortable=!1;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setSortDirection",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.sortDirection=e;case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"isSortable",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.sortable&&this.sortId);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"hasSortId",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!!this.sortId);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setAsSortingColumn",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.isSorting=!0;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setAsNotSortingColumn",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.isSorting=!1;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"headerClickedHandler",value:function(){if(this.sortable&&this.sortId){var t="desc"===this.sortDirection?"asc":"desc";this.sortDirection=t,this.sortColumnChange.emit({sortId:this.sortId,direction:t})}}},{key:"render",value:function(){var t=(0,s.c)("didomi-icon",this.el.tagName);return(0,u.h)(u.a,{role:"columnheader",class:{"didomi-table-th":!0,"didomi-table-th-center":"center"===this.cellAlign,"didomi-table-th-right":"right"===this.cellAlign,"didomi-table-th-sortable":this.sortable&&!!this.sortId},style:{minWidth:"".concat(this.minWidth?this.minWidth:0,"px")}},(0,u.h)("div",{class:"didomi-table-th-text"},(0,u.h)("slot",null)),this.sortId&&this.isSorting&&(0,u.h)(t,{class:"didomi-table-th-sort-icon",name:"asc"===this.sortDirection?"arrow-up-sm":"arrow-down-sm"}))}},{key:"el",get:function(){return(0,u.g)(this)}}]),t}();c.style=".didomi-table-th{display:flex;flex:1;align-items:center;padding-left:32px}.didomi-table-th-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:4px}.didomi-table-th-sort-icon{margin-left:8px;will-change:transform;transform:rotateZ(0);animation:transform 400ms ease-in-out}.didomi-table-th-sortable{cursor:pointer}.didomi-table-th-center{justify-content:center}.didomi-table-th-right{justify-content:flex-end}.didomi-table-th:hover .didomi-table-th-sort-icon{transform:rotateZ(-180deg)}.didomi-table-th-select{box-sizing:border-box;width:64px;max-width:64px}.didomi-table-th-select .didomi-checkbox{display:flex}"},5743:function(t,e,n){n.d(e,{a:function(){return h},b:function(){return d},c:function(){return s},d:function(){return f},e:function(){return c},f:function(){return a},g:function(){return i},h:function(){return o},i:function(){return u},j:function(){return l},r:function(){return m}});var r=n(7762);function i(){return"_"+Math.random().toString(36).substr(2,9)}function o(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]')).length>0}function a(t,e){return t.querySelectorAll('[slot="'.concat(e,'"]'))}var u=function(t){var e={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(n){t.hasAttribute(n)&&(null!==t.getAttribute(n)&&(e[n]=t.getAttribute(n)),t.removeAttribute(n))})),e};function s(t,e){var n=e.toLowerCase().split("-");if("didomi"!==n[0]){var r=!1,i=n.reduce((function(t,e){return"didomi"===e||r?(r=!0,t):"".concat(t).concat(e,"-")}),"");return"".concat(i).concat(t)}return t}function c(t){var e,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];clearTimeout(e),e=setTimeout((function(){t.apply(n,o)}),r)}}function l(){var t=document.body.querySelector(".didomi-overlay-container");if(t)return t;var e=document.createElement("div");return e.classList.add("didomi-overlay-container"),document.body.appendChild(e),e}function d(t,e){var n=document.getElementById(e);if(t.style.zIndex="1",n)n.className.includes("didomi-overlay-container")||n.classList.add("didomi-overlay-container"),n.appendChild(t);else{var r=document.querySelector(".didomi-overlay-container");if(r)r.appendChild(t);else{var i=document.createElement("div");i.classList.add("didomi-overlay-container"),i.style.zIndex="1000",i.style.position="fixed",i.appendChild(t),document.body.appendChild(i)}}}function f(t,e){var n=document.body.querySelector(".didomi-overlay-container #".concat(t));n&&e&&(null===e||void 0===e||e.appendChild(n))}var h=function(t,e,n){if(t&&e){var i=Array.from(t.attributes).filter((function(t){return t.name.startsWith("data-")})).map((function(t){return{name:t.name,value:"".concat(t.value,"-").concat(n)}}));if(null===i||void 0===i?void 0:i.length){var o,a=(0,r.Z)(i);try{for(a.s();!(o=a.n()).done;){var u=o.value;e.setAttribute(u.name,u.value)}}catch(s){a.e(s)}finally{a.f()}}}},m=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)}},7762:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(181);function i(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,r.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}}}]);
//# sourceMappingURL=9301.56ab742e.chunk.js.map