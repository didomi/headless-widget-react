"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[9043],{9043:function(e,t,i){i.r(t),i.d(t,{didomi_header_illustration:function(){return c}});var n=i(5671),r=i(3144),s=i(221),o=new Map,a=new Map,l=function(e){var t=document.createElement("div");t.innerHTML=e;var i=t.firstElementChild;return i&&"svg"===i.nodeName.toLowerCase()&&u(i)?t.innerHTML:""},u=function e(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var i=0;i<t.attributes.length;i++){var n=t.attributes[i].value;if("string"===typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(var r=0;r<t.childNodes.length;r++)if(!e(t.childNodes[r]))return!1}return!0},c=function(){function e(t){(0,n.Z)(this,e),(0,s.r)(this,t),this.isVisible=!1,this.lazy=!1}return(0,r.Z)(e,[{key:"connectedCallback",value:function(){var e=this;this.waitUntilVisible(this.el,"30px",(function(){e.isVisible=!0,e.loadIllustration()}))}},{key:"disconnectedCallback",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"waitUntilVisible",value:function(e,t,i){var n=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var r=this.io=new window.IntersectionObserver((function(e){e[0].isIntersecting&&(r.disconnect(),n.io=void 0,i())}),{rootMargin:t});r.observe(e)}else i()}},{key:"loadIllustration",value:function(){var e=this;if(this.isVisible&&this.name){var t="https://uilib.didomi.io/assets/header-illustrations/".concat(this.name,".svg");if(function(e){var t=a.get(e);if(!t){if("undefined"===typeof fetch||"undefined"===typeof document)return o.set(e,""),Promise.resolve();t=fetch(e).then((function(t){if(t.ok)return t.text().then((function(t){t=l(t),o.set(e,t||"")}));o.set(e,"")})),a.set(e,t)}return t}(t).then((function(){return e.svgContent=o.get(t)})),!this.ariaLabel&&"true"!==this.ariaHidden){var i=this.name;i&&(this.ariaLabel=i.replace(/\-/g," "))}}}},{key:"render",value:function(){return(0,s.h)(s.a,{name:this.name,role:"img"},this.svgContent?(0,s.h)("div",{class:"header-illustration-inner",innerHTML:this.svgContent}):(0,s.h)("div",{class:"illustration-inner"}))}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"assetsDirs",get:function(){return["header-illustration"]}},{key:"watchers",get:function(){return{name:["loadIllustration"]}}}]),e}();c.style=":host{display:inline-block;box-sizing:content-box !important}:host .header-illustration-inner{display:flex}:host(.flip-rtl) .illustration-inner{transform:scaleX(-1)}"}}]);
//# sourceMappingURL=9043.18a3726b.chunk.js.map