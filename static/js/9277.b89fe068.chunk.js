"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[9277],{9277:function(i,t,e){e.r(t),e.d(t,{didomi_illustration:function(){return h}});var n=e(5671),s=e(3144),r=e(221),o=new Map,a=new Map,l=function(i){var t=document.createElement("div");t.innerHTML=i;var e=t.firstElementChild;return e&&"svg"===e.nodeName.toLowerCase()&&u(e)?t.innerHTML:""},u=function i(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].value;if("string"===typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(var s=0;s<t.childNodes.length;s++)if(!i(t.childNodes[s]))return!1}return!0},h=function(){function i(t){(0,n.Z)(this,i),(0,r.r)(this,t),this.isVisible=!1,this.lazy=!1}return(0,s.Z)(i,[{key:"connectedCallback",value:function(){var i=this;this.waitUntilVisible(this.el,"30px",(function(){i.isVisible=!0,i.loadIllustration()}))}},{key:"disconnectedCallback",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"waitUntilVisible",value:function(i,t,e){var n=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var s=this.io=new window.IntersectionObserver((function(i){i[0].isIntersecting&&(s.disconnect(),n.io=void 0,e())}),{rootMargin:t});s.observe(i)}else e()}},{key:"loadIllustration",value:function(){var i=this;if(this.isVisible&&this.name){var t="https://uilib.didomi.io/assets/illustrations/".concat(this.name,".svg");if(function(i){var t=a.get(i);if(!t){if("undefined"===typeof fetch||"undefined"===typeof document)return o.set(i,""),Promise.resolve();t=fetch(i).then((function(t){if(t.ok)return t.text().then((function(t){t=l(t),o.set(i,t||"")}));o.set(i,"")})),a.set(i,t)}return t}(t).then((function(){return i.svgContent=o.get(t)})),!this.ariaLabel&&"true"!==this.ariaHidden){var e=this.name;e&&(this.ariaLabel=e.replace(/\-/g," "))}}}},{key:"render",value:function(){return(0,r.h)(r.a,{name:this.name,role:"img"},this.svgContent?(0,r.h)("div",{class:"didomi-illustration-inner",innerHTML:this.svgContent}):(0,r.h)("div",{class:"didomi-illustration-inner"}))}},{key:"el",get:function(){return(0,r.g)(this)}}],[{key:"assetsDirs",get:function(){return["illustrations"]}},{key:"watchers",get:function(){return{name:["loadIllustration"]}}}]),i}();h.style=":host{display:inline-block;line-height:0;box-sizing:content-box !important}:host .didomi-illustration-inner{display:inline-block;width:inherit;height:inherit}:host .didomi-illustration-inner svg{width:100%;height:100%}:host(.flip-rtl) .illustration-inner{transform:scaleX(-1)}"}}]);
//# sourceMappingURL=9277.b89fe068.chunk.js.map