"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[874],{874:function(e,t,i){i.r(t),i.d(t,{didomi_toggle_button:function(){return l}});var n=i(5671),a=i(3144),o=i(221),l=function(){function e(t){(0,n.Z)(this,e),(0,o.r)(this,t),this.valueChange=(0,o.c)(this,"valueChange",7),this.value="",this.disabled=!1}return(0,a.Z)(e,[{key:"handleValueChange",value:function(){this.markOptions()}},{key:"handleDisabledChange",value:function(){this.setDisabledForOptions()}},{key:"handleOptionClicked",value:function(e){this.value=e.detail,this.valueChange.emit(e.detail)}},{key:"options",get:function(){return Array.from(this.el.querySelectorAll(".didomi-toggle-button-option"))}},{key:"componentDidLoad",value:function(){this.markOptions(),this.setDisabledForOptions()}},{key:"markOptions",value:function(){var e=this;this.options.forEach((function(t){t.getAttribute("value")===e.value?t.setAttribute("selected","true"):t.removeAttribute("selected")}))}},{key:"setDisabledForOptions",value:function(){var e=this;this.options.forEach((function(t){e.disabled?t.setAttribute("disabled","true"):t.removeAttribute("disabled")}))}},{key:"render",value:function(){return(0,o.h)(o.a,{class:"didomi-toggle-button"},(0,o.h)("slot",null))}},{key:"el",get:function(){return(0,o.g)(this)}}],[{key:"watchers",get:function(){return{value:["handleValueChange"],disabled:["handleDisabledChange"]}}}]),e}();l.style=".didomi-toggle-button{--_toggle-br:20px;align-items:center;background-color:#f9fafa;border-radius:var(--_toggle-br);border:1px solid #c9dfe8;display:inline-flex}.didomi-toggle-button[disabled]{filter:grayscale(1)}"}}]);
//# sourceMappingURL=874.e8e177c5.chunk.js.map