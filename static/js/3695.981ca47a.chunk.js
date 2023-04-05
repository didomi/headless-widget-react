"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[3695],{3695:function(e,t,i){i.r(t),i.d(t,{didomi_collapsible_tab_header:function(){return c}});var o=i(4165),a=i(5861),n=i(5671),d=i(3144),l=i(221),r=i(5743),c=function(){function e(t){var i=this;(0,n.Z)(this,e),(0,l.r)(this,t),this.tabSelected=(0,l.c)(this,"tabSelected",7),this.active=!1,this.expanded=!1,this.handleClick=function(){i.tabSelected.emit(),i.expanded=!i.expanded},this.handleKeyDown=function(e){"Enter"!==e.code&&"Space"!==e.code||(e.preventDefault(),e.stopPropagation(),i.tabSelected.emit(),i.expanded=!i.expanded)}}return(0,d.Z)(e,[{key:"setActive",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.active=!0;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setInactive",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.active=!1;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleExpanded",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.expanded=!!t;case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"tabFocus",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.el.querySelector("button").focus();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"tabBlur",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.el.querySelector("button").blur();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=(0,r.c)("didomi-icon",this.el.tagName),t=(0,r.c)("didomi-chip",this.el.tagName);return(0,l.h)(l.a,{class:{"didomi-collapsible-tab-header":!0,"didomi-collapsible-tab-header-active":this.active}},(0,l.h)("div",{class:{"didomi-collapsible-tab-header-rounded-left":this.active&&this.expanded}}),(0,l.h)("button",{class:{"didomi-collapsible-tab-header-button":!0,active:this.active&&this.expanded},role:"tab",onClick:this.handleClick,onKeyDown:this.handleKeyDown,"aria-selected":JSON.stringify(this.active)},(0,l.h)("div",{class:"didomi-collapsible-tab-header-button-content"},(0,l.h)("div",{class:"didomi-collapsible-tab-header-button-content-desc"},this.tabDescription&&(0,l.h)("span",{class:"didomi-collapsible-tab-header-button-content-desc-description"},this.tabDescription),this.tabTitle&&(0,l.h)("span",{class:"didomi-collapsible-tab-header-button-content-desc-title"},this.tabTitle)),this.tabInfo&&(0,l.h)(t,{class:"didomi-collapsible-tab-header-button-content-info",label:this.tabInfo,variation:this.expanded?"basic":"basic-outline","basic-type":this.expanded?"info":"default"})),(0,l.h)("div",{class:{"didomi-collapsible-tab-header-button-collapse":!0,"didomi-collapsible-tab-header-button-collapse-expanded":this.active&&this.expanded}},(0,l.h)(e,{name:"down-on"})),(0,l.h)("div",{class:"didomi-collapsible-tab-header-active-focus"})),(0,l.h)("div",{class:{"didomi-collapsible-tab-header-rounded-right":this.active&&this.expanded}}))}},{key:"el",get:function(){return(0,l.g)(this)}}]),e}();c.style='.didomi-collapsible-tab-header{flex:1;box-sizing:border-box;position:relative;isolation:isolate}.didomi-collapsible-tab-header.didomi-collapsible-tab-header-active .didomi-collapsible-tab-header-rounded-left{position:absolute;border-bottom-right-radius:8px;box-shadow:4px 4px 0 4px white;height:8px;width:8px;bottom:0;left:-8px;z-index:1}.didomi-collapsible-tab-header.didomi-collapsible-tab-header-active .didomi-collapsible-tab-header-rounded-right{position:absolute;border-bottom-left-radius:8px;box-shadow:-4px 4px 0 4px white;height:8px;width:8px;bottom:0;right:-8px;z-index:1}.didomi-collapsible-tab-header-button{z-index:2;width:100%;height:calc(100% - 16px);margin-bottom:16px;background-color:white;border:1px solid white;border-radius:8px;outline:none !important;cursor:pointer;display:flex;flex-direction:column;align-items:center;color:#1d4153;padding:24px 16px 16px 16px}.didomi-collapsible-tab-header-button-collapse{display:flex;justify-content:center;align-items:center;background-color:#f9fafa;border-radius:100%;width:36px;height:36px;border:none;cursor:pointer;position:absolute;top:12px;right:12px;transform:rotate(0deg);transition:transform 200ms ease-in-out;z-index:1}.didomi-collapsible-tab-header-button-collapse.didomi-collapsible-tab-header-button-collapse-expanded{transform:rotate(180deg)}.didomi-collapsible-tab-header-button-content{display:flex;flex-direction:column;justify-content:center;align-items:center}.didomi-collapsible-tab-header-button-content-desc{display:flex;flex-direction:column;justify-content:center;align-items:center}.didomi-collapsible-tab-header-button-content-desc-description{font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:14px;font-weight:600;letter-spacing:0px;line-height:20px}.didomi-collapsible-tab-header-button-content-desc-title{height:72px;display:flex;align-items:center;justify-content:center;font-family:IBM Plex Sans;font-size:42px;font-style:normal;font-weight:700;line-height:72px;letter-spacing:0px}.didomi-collapsible-tab-header-button.active{position:relative;height:100%;border-bottom-right-radius:0;border-bottom-left-radius:0;background-color:white}.didomi-collapsible-tab-header-button:hover:not(.active):not(:focus){border:1px solid #c9dfe8}.didomi-collapsible-tab-header-button:focus:not(.active){box-shadow:0 0 0 3px #84d1eb}.didomi-collapsible-tab-header-button:focus.active .didomi-collapsible-tab-header-active-focus{position:absolute;width:calc(100% - 2px);height:calc(100% - 2px);top:0;left:0;border-radius:8px;padding:1px;box-shadow:0 0 0 2px inset #84d1eb}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header{margin:0 8px}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header:first-child{margin-left:0}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header:first-child .didomi-collapsible-tab-header-rounded-left{position:absolute;background-color:white;border-radius:0;border:0;box-shadow:0;height:8px;width:8px;bottom:-8px;left:0}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header:last-child{margin-right:0}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header:last-child .didomi-collapsible-tab-header-rounded-right{position:absolute;background-color:white;border-radius:0;border:0;box-shadow:0;height:8px;width:8px;bottom:-8px;right:0}@media (max-width: 960px){.didomi-collapsible-tab-headers .didomi-collapsible-tab-header{margin:0;height:67px}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header.didomi-collapsible-tab-header-active{top:auto !important}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header:not(.didomi-collapsible-tab-header-active){position:absolute;left:0;right:0;height:67px;z-index:1}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button{margin:0;height:100%;position:relative;display:flex;flex-direction:row;padding:16px}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button-content{width:100%;display:flex;flex-direction:row;justify-content:flex-start}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button-content-desc{display:flex;flex-direction:row-reverse;justify-content:flex-end;flex:1}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button-content-desc-title{height:auto;font-size:24px;line-height:24px;margin-right:16px}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button-collapse{position:relative;top:auto;right:auto;margin-left:8px}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button:focus{box-shadow:0 0 0 2px #84d1eb}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button.active:not(:focus){border-bottom:1px solid #e2f1f8}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header-button.active .didomi-collapsible-tab-header-active-focus{display:none}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header .didomi-collapsible-tab-panels{transform:scaleY(1)}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header .didomi-collapsible-tab-header-rounded-left{display:none}.didomi-collapsible-tab-headers .didomi-collapsible-tab-header .didomi-collapsible-tab-header-rounded-right{display:none;box-shadow:0 0 0 2px inset #84d1eb}}@media (min-width: 960px){.didomi-collapsible-tab-headers .didomi-collapsible-tab-header{top:auto !important;padding-top:0 !important}}'},5743:function(e,t,i){i.d(t,{a:function(){return u},b:function(){return b},c:function(){return r},d:function(){return p},e:function(){return c},f:function(){return d},g:function(){return a},h:function(){return n},i:function(){return l},j:function(){return s},r:function(){return h}});var o=i(7762);function a(){return"_"+Math.random().toString(36).substr(2,9)}function n(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]')).length>0}function d(e,t){return e.querySelectorAll('[slot="'.concat(t,'"]'))}var l=function(e){var t={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(i){e.hasAttribute(i)&&(null!==e.getAttribute(i)&&(t[i]=e.getAttribute(i)),e.removeAttribute(i))})),t};function r(e,t){var i=t.toLowerCase().split("-");if("didomi"!==i[0]){var o=!1,a=i.reduce((function(e,t){return"didomi"===t||o?(o=!0,e):"".concat(e).concat(t,"-")}),"");return"".concat(a).concat(e)}return e}function c(e){var t,i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var a=arguments.length,n=new Array(a),d=0;d<a;d++)n[d]=arguments[d];clearTimeout(t),t=setTimeout((function(){e.apply(i,n)}),o)}}function s(){var e=document.body.querySelector(".didomi-overlay-container");if(e)return e;var t=document.createElement("div");return t.classList.add("didomi-overlay-container"),document.body.appendChild(t),t}function b(e,t){var i=document.getElementById(t);if(e.style.zIndex="1",i)i.className.includes("didomi-overlay-container")||i.classList.add("didomi-overlay-container"),i.appendChild(e);else{var o=document.querySelector(".didomi-overlay-container");if(o)o.appendChild(e);else{var a=document.createElement("div");a.classList.add("didomi-overlay-container"),a.style.zIndex="1000",a.style.position="fixed",a.appendChild(e),document.body.appendChild(a)}}}function p(e,t){var i=document.body.querySelector(".didomi-overlay-container #".concat(e));i&&t&&(null===t||void 0===t||t.appendChild(i))}var u=function(e,t,i){if(e&&t){var a=Array.from(e.attributes).filter((function(e){return e.name.startsWith("data-")})).map((function(e){return{name:e.name,value:"".concat(e.value,"-").concat(i)}}));if(null===a||void 0===a?void 0:a.length){var n,d=(0,o.Z)(a);try{for(d.s();!(n=d.n()).done;){var l=n.value;t.setAttribute(l.name,l.value)}}catch(r){d.e(r)}finally{d.f()}}}},h=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)}},7762:function(e,t,i){i.d(t,{Z:function(){return a}});var o=i(181);function a(e,t){var i="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=(0,o.Z)(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,l=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){r=!0,d=e},f:function(){try{l||null==i.return||i.return()}finally{if(r)throw d}}}}}}]);
//# sourceMappingURL=3695.981ca47a.chunk.js.map