"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[2557],{2557:function(o,e,i){i.r(e),i.d(e,{didomi_modal:function(){return u}});var t=i(4165),n=i(5861),a=i(2982),d=i(5671),r=i(3144),c=i(221),l=i(5743),s=i(8788),u=function(){function o(e){var i=this;(0,d.Z)(this,o),(0,c.r)(this,e),this.openChange=(0,c.c)(this,"openChange",7),this.isOpen=!1,this.permanent=!1,this.returnFocusAfterClose=!0,this.closable=!1,this.variant="main",this.setDataAttributes=function(){var o=i.isOpen?i.openedModal:i.el;(0,l.a)(i.el,o.querySelector(".didomi-modal-card-close .didomi-icon-button"),"close-button")},this.setUpFocusTrap=function(){var o,e=i.el.querySelector(".didomi-modal-card")||document.body.querySelector(".didomi-overlay-container #".concat(i.openModalId," .didomi-modal-card"));if(e){if(!i.initialFocus){var t=Array.from(e.querySelectorAll("button"));o=t[t.length-1]}i.focusTrap=(0,s.c)([e],{allowOutsideClick:i.permanent,clickOutsideDeactivates:!i.permanent,initialFocus:i.initialFocus||o,fallbackFocus:e,returnFocusOnDeactivate:i.returnFocusAfterClose,onDeactivate:function(){i.permanent||i.close()}})}},this.observer=new MutationObserver((function(o){o.forEach((function(o){if("childList"===o.type){var e=document.body.querySelector(".didomi-overlay-container"),t=Array.from(e.children).filter((function(o){return!o.classList.contains("didomi-modal-backdrop")}));i.focusTrap.updateContainerElements([].concat((0,a.Z)(t),[i.openedModal]))}}))})),this.openModal=function(){var o,e,t;if(!i.openedModal){var n=i.el.querySelector(".didomi-modal-backdrop");n.style.padding="24px";var a=null===n||void 0===n?void 0:n.querySelector(".didomi-modal-card");a.style.maxHeight="100%",a.style.overflow="auto",i.openModalId="didomi-modal-".concat((0,l.g)()),null===n||void 0===n||n.setAttribute("id",i.openModalId),(0,l.b)(n,i.attachTo),null===(o=i.focusTrap)||void 0===o||o.activate();var d=document.body.querySelector(".didomi-overlay-container");d&&(null===(e=i.observer)||void 0===e||e.observe(d,{childList:!0})),i.openChange.emit(!0),null===(t=null===a||void 0===a?void 0:a.classList)||void 0===t||t.add("didomi-modal-card-opened")}},this.closeModal=function(){var o,e,t,n=document.body.querySelector(".didomi-overlay-container").querySelector(".didomi-modal-backdrop .didomi-modal-card");null===(o=null===n||void 0===n?void 0:n.classList)||void 0===o||o.remove("didomi-modal-card-opened"),(0,l.d)(i.openModalId,i.el),i.openModalId=void 0,i.openChange.emit(!1),null===(e=i.focusTrap)||void 0===e||e.deactivate(),null===(t=i.observer)||void 0===t||t.disconnect()},this.handleCloseClicked=function(){i.close()}}return(0,r.Z)(o,[{key:"openChanged",value:function(o){o?this.openModal():this.closeModal()}},{key:"permanentChanged",value:function(){this.setUpFocusTrap(),this.focusTrap.activate()}},{key:"initialFocusChanged",value:function(){this.setUpFocusTrap(),this.focusTrap.activate()}},{key:"open",value:function(){var o=(0,n.Z)((0,t.Z)().mark((function o(){return(0,t.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.isOpen=!0;case 1:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"close",value:function(){var o=(0,n.Z)((0,t.Z)().mark((function o(){return(0,t.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.isOpen=!1;case 1:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.isOpen&&this.close()}},{key:"componentDidLoad",value:function(){this.setUpFocusTrap(),this.isOpen&&this.openModal()}},{key:"componentDidRender",value:function(){var o=this;setTimeout((function(){return o.setDataAttributes()}),0)}},{key:"openedModal",get:function(){return document.body.querySelector(".didomi-overlay-container #".concat(this.openModalId))}},{key:"render",value:function(){var o=(0,l.c)("didomi-icon-button",this.el.tagName);return(0,c.h)(c.a,{class:"didomi-modal"},(0,c.h)("div",{class:"didomi-modal-backdrop"},(0,c.h)("div",{class:{"didomi-modal-card":!0,"didomi-modal-card-slim":"slim"===this.variant}},this.closable&&(0,c.h)("div",{class:"didomi-modal-card-close"},(0,c.h)(o,{variant:"rounded",icon:"close-cancel",onClick:this.handleCloseClicked})),(0,c.h)("slot",null))))}},{key:"el",get:function(){return(0,c.g)(this)}}],[{key:"watchers",get:function(){return{isOpen:["openChanged"],permanent:["permanentChanged"],initialFocus:["initialFocusChanged"]}}}]),o}();u.style=".didomi-modal{display:none}.didomi-overlay-container .didomi-modal-backdrop{display:flex;width:100vw;height:100vh;position:fixed;left:0px;top:0px;justify-content:center;align-items:center;background-color:rgba(29, 65, 83, 0.9);overflow:auto}.didomi-overlay-container .didomi-modal-backdrop .didomi-modal-card{max-width:600px;display:flex;flex-direction:column;align-items:center;text-align:center;width:100%;padding:64px;border-radius:16px;box-sizing:border-box;background-color:#ffffff;box-shadow:0px 34px 60px 0px rgba(0, 0, 0, 0.15);position:relative;margin:32px;transform:scale(0.95);transition:transform 600ms cubic-bezier(0.165, 0.84, 0.44, 1)}.didomi-overlay-container .didomi-modal-backdrop .didomi-modal-card.didomi-modal-card-slim{padding:56px;max-width:460px;margin:16px}.didomi-overlay-container .didomi-modal-backdrop .didomi-modal-card-close{position:absolute;top:0;right:0;padding:16px}.didomi-overlay-container .didomi-modal-backdrop .didomi-modal-card-opened{transform:scale(1)}"}}]);
//# sourceMappingURL=2557.feb0e843.chunk.js.map