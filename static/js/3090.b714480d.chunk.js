"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[3090],{3090:function(i,e,t){t.r(e),t.d(e,{didomi_drawer:function(){return s}});var a=t(5671),r=t(3144),o=t(221),n=t(8788),d=t(5743),s=function(){function i(e){var t=this;(0,a.Z)(this,i),(0,o.r)(this,e),this.close=(0,o.c)(this,"close",7),this.drawerId="didomi-drawer-".concat((0,d.g)()),this.inheritedAttributes={},this.isOpen=!1,this.setUpFocusTrap=function(){t.focusTrap=(0,n.c)([t.drawerContainer],{onDeactivate:t.emitClose,initialFocus:t.initialFocus})},this.emitClose=function(){t.close.emit()},this.openDrawer=function(){t.setPanelOffset(),(0,d.b)(t.drawerContainer),t.focusTrap.activate()},this.closeDrawer=function(){var i;setTimeout((function(){(0,d.d)(t.drawerId,t.el)}),600),null===(i=t.focusTrap)||void 0===i||i.deactivate()},this.setPanelOffset=function(){var i=0;if(t.panelVisualContainer){var e=document.querySelector(t.panelVisualContainer),a=null===e||void 0===e?void 0:e.getBoundingClientRect();i=(null===a||void 0===a?void 0:a.top)||0}t.drawerContainer.style.setProperty("--drawer-panel-top-offset",i+"px")}}return(0,r.Z)(i,[{key:"openChanged",value:function(i){i?this.openDrawer():this.closeDrawer()}},{key:"initialFocusChanged",value:function(){this.setUpFocusTrap()}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,d.i)(this.el,["aria-label","aria-description","aria-labelledby","aria-describedby"])}},{key:"componentDidLoad",value:function(){this.setUpFocusTrap(),this.isOpen&&this.openDrawer()}},{key:"disconnectedCallback",value:function(){this.isOpen&&this.closeDrawer()}},{key:"render",value:function(){var i=this,e=(0,d.c)("didomi-icon-button",this.el.tagName);return(0,o.h)(o.a,{class:"didomi-drawer"},(0,o.h)("div",Object.assign({id:this.drawerId,class:"didomi-drawer-container","data-is-active":this.isOpen,ref:function(e){return i.drawerContainer=e},style:{"--drawer-animation-duration":"600ms"},role:"dialog","aria-modal":"true"},this.inheritedAttributes),(0,o.h)("div",{class:"didomi-drawer-backdrop",onClick:this.emitClose}),(0,o.h)("div",{class:"didomi-drawer-panel"},(0,o.h)(e,{class:"didomi-drawer-close-btn",variant:"rounded",icon:"close-cancel",onClick:this.emitClose}),(0,o.h)("slot",null))))}},{key:"el",get:function(){return(0,o.g)(this)}}],[{key:"watchers",get:function(){return{isOpen:["openChanged"],initialFocus:["initialFocusChanged"]}}}]),i}();s.style=".didomi-drawer{display:none}.didomi-drawer-container{height:100vh;inset:0;position:fixed;width:100vw}.didomi-drawer-backdrop{background-color:rgba(158, 189, 203, 0.1);inset:0;opacity:0;position:absolute;transition:opacity var(--drawer-animation-duration)}.didomi-drawer-panel{--panel-left-padding:60px;background-color:#fffbf9;border-left:1px solid #ffd5c8;box-shadow:-4px 0px 8px 0px rgba(0, 0, 0, 0.05);box-sizing:border-box;display:flex;flex-direction:column;gap:50px;height:calc(100vh - var(--drawer-panel-top-offset, 0));padding:64px 8px 88px 0;position:absolute;right:-100%;top:var(--drawer-panel-top-offset, 0);transition:right var(--drawer-animation-duration) ease-out;width:573px}.didomi-drawer-close-btn{color:#1d4153;position:absolute;right:40px;top:40px}.didomi-drawer-container[data-is-active] .didomi-drawer-panel{right:0}.didomi-drawer-container[data-is-active] .didomi-drawer-backdrop{opacity:1}"}}]);
//# sourceMappingURL=3090.b714480d.chunk.js.map