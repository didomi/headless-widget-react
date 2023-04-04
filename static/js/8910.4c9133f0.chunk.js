"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[8910],{8910:function(o,d,e){e.r(d),e.d(d,{didomi_dropdown:function(){return f}});var i=e(4165),r=e(5861),t=e(5671),n=e(3144),a=e(221),s=e(5743),p=e(1811),l=e(5688),c=e(1329),m={xxxs:4,xxs:8,xs:16,s:24,m:32,l:48,xl:64,"-xxxs":-4,"-xxs":-8,"-xs":-16,"-s":-24,"-m":-32,"-l":-48,"-xl":-64,none:0},f=function(){function o(d){var e=this;(0,t.Z)(this,o),(0,a.r)(this,d),this.selectionChanged=(0,a.c)(this,"selectionChanged",7),this.dropdownId="dropdown-"+(0,s.g)(),this.buttonId="dropdown-btn-"+(0,s.g)(),this.position="fixed",this.variant="standard",this.distance="xs",this.distanceX="xs",this.disabled=!1,this.maxVisibleItems=4,this.getDropdownItems=function(){e.didomiLIItems=Array.from(document.querySelectorAll("#".concat(e.dropdownId," .didomi-option")))},this.toggleDropdown=(0,r.Z)((0,i.Z)().mark((function o(){return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e.popperOverlay.isOpen()?e.closeDropdown():e.openDropdown();case 1:case"end":return o.stop()}}),o)}))),this.closeDropdown=function(){e.popperOverlay.close()},this.closeCleanUp=function(){var o;e.didomiLIItems.forEach((function(o){o.querySelector("li").setAttribute("tabindex","-1"),o.removeEventListener("clickEl",e.handleItemSelect)})),null===(o=e.target)||void 0===o||o.removeAttribute("data-opened")},this.openDropdown=function(){e.popperOverlay.open()},this.openSetUp=function(){e.didomiLIItems.forEach((function(o){o.querySelector("li").setAttribute("tabindex","0"),o.addEventListener("clickEl",e.handleItemSelect)})),e.target.setAttribute("data-opened","")},this.cleanUpSelection=function(){e.didomiLIItems.forEach((function(o){return null===o||void 0===o?void 0:o.removeAttribute("item-selected")}))},this.handleItemSelect=function(o){e.closeDropdown();var d=o.target;e.selectionChanged.emit({name:d.getAttribute("item-text"),value:d.getAttribute("item-value")})},this.closeTargetFromOutsideOnClick=function(){var o=(0,r.Z)((0,i.Z)().mark((function o(d){var r,t;return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(d.target===e.target||(null===(r=e.el)||void 0===r?void 0:r.contains(d.target))||(null===(t=e.target)||void 0===t?void 0:t.contains(d.target))){o.next=3;break}return o.next=3,e.closeDropdown();case 3:case"end":return o.stop()}}),o)})));return function(d){return o.apply(this,arguments)}}(),this.handleKeyDown=function(o){o.preventDefault();var d=o.target;if(e.getDropdownItems(),d){var i=e.didomiLIItems.filter((function(o){return!o.hasAttribute("item-disabled")})).map((function(o){return o.querySelector("li")})),r=i.findIndex((function(o){return o===d}));if(!(o.ctrlKey||o.altKey||o.metaKey))switch(o.code){case"Tab":case"Escape":e.closeDropdown();break;case"Space":case"Enter":i[r].click();break;case"Up":case"ArrowUp":case"ArrowLeft":r<=0?i[i.length-1].focus():i[r-1].focus();break;case"Down":case"ArrowDown":case"ArrowRight":r>=i.length-1?i[0].focus():i[r+1].focus();break;case"Home":case"PageUp":i[0].focus();break;case"End":case"PageDown":i[i.length-1].focus()}}},this.assignButtonRef=function(o){e.targetEl||(e.targetEl=o)}}return(0,n.Z)(o,[{key:"updatedSelectedValue",value:function(o){if(o){this.cleanUpSelection();var d=this.didomiLIItems.find((function(d){return d.getAttribute("item-text")===o}));d&&d.setAttribute("item-selected","")}}},{key:"componentDidRender",value:function(){var o;this.hasScroll=this.maxVisibleItems<(null===(o=this.didomiLIItems)||void 0===o?void 0:o.length)}},{key:"target",get:function(){return this.for?document.getElementById(this.for):this.targetEl}},{key:"offsetSize",get:function(){return m[this.distance]||m.xxs}},{key:"horizontalOffsetSize",get:function(){return m[this.distanceX]||0}},{key:"componentDidLoad",value:function(){var o=(0,r.Z)((0,i.Z)().mark((function o(){var d,e=this;return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.getDropdownItems(),this.cleanUpSelection(),this.for&&document.getElementById(this.for)&&this.target.addEventListener("click",this.toggleDropdown),this.popperOverlay=new p.P(this.target,this.dropdownRef,this.attachTo,{onOpen:this.openSetUp,onClickOutside:function(o){return e.closeTargetFromOutsideOnClick(o)},onKeyDown:function(o){return e.handleKeyDown(o)},onClose:this.closeCleanUp,placement:"bordered"===this.variant?"bottom":"bottom-end",strategy:this.position,modifiers:[l.p,{name:"preventOverflow",options:{boundary:document.getElementById(this.boundaryElementId)||document.body}},c.f,{name:"flip",options:{boundary:document.getElementById(this.boundaryElementId)||document.body,allowedAutoPlacements:["top"]}},c.o,{name:"offset",options:{offset:[this.horizontalOffsetSize,this.offsetSize]}}]}),this.selectedValue&&(d=this.didomiLIItems.find((function(o){return o.getAttribute("item-text")===e.selectedValue})))&&d.setAttribute("item-selected","");case 5:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){var o;if(null===(o=this.popperOverlay)||void 0===o||o.destroy(),this.for){var d=document.getElementById(this.for);d&&d.removeEventListener("click",this.toggleDropdown)}}},{key:"isOpen",value:function(){var o=(0,r.Z)((0,i.Z)().mark((function o(){return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",this.popperOverlay.isOpen());case 1:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"open",value:function(){var o=(0,r.Z)((0,i.Z)().mark((function o(){return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.openDropdown();case 1:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"close",value:function(){var o=(0,r.Z)((0,i.Z)().mark((function o(){return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.closeDropdown();case 1:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"render",value:function(){var o=this,d="".concat(this.maxVisibleItems*("bordered"===this.variant?40:64),"px"),e=(0,s.c)("didomi-icon",this.el.tagName);return(0,a.h)(a.a,{class:{"didomi-dropdown":!0,"didomi-dropdown-bordered":"bordered"===this.variant,"didomi-dropdown-blue":"blue"===this.variant,"didomi-dropdown-disabled":this.disabled}},(0,a.h)("input",{class:"select-input",value:this.selectedValue}),!this.for&&(0,a.h)("button",{id:this.buttonId,disabled:this.disabled,ref:this.assignButtonRef,class:"didomi-dropdown-content",onClick:this.toggleDropdown},this.selectedValue||"Select a value",(0,a.h)(e,{class:"didomi-dropdown-icon",name:"down-on"})),(0,a.h)("div",{class:{"didomi-dropdown-wrapper":!0,"didomi-dropdown-wrapper-bordered":"bordered"===this.variant,"didomi-dropdown-wrapper-blue":"blue"===this.variant},id:this.dropdownId,ref:function(d){return o.dropdownRef=d}},(0,a.h)("ul",{class:{"didomi-dropdown-list":!0,"didomi-dropdown-scroll":this.hasScroll},role:"list",style:{"max-height":d,transform:"".concat("translateY(-".concat(this.offsetSize,"px)"))}},(0,a.h)("slot",null))))}},{key:"el",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{selectedValue:["updatedSelectedValue"]}}}]),o}();f.style='.didomi-dropdown .select-input{display:none}.didomi-dropdown.didomi-dropdown-disable .didomi-dropdown-wrapper .didomi-dropdown-list{display:none}.didomi-dropdown.didomi-dropdown-blue .didomi-dropdown-content{color:#265973}.didomi-dropdown.didomi-dropdown-blue .didomi-dropdown-content:hover:not(:disabled){color:#3186af}.didomi-dropdown.didomi-dropdown-blue .didomi-dropdown-content:disabled{color:#9ebdcb;cursor:not-allowed}.didomi-dropdown.didomi-dropdown-bordered .didomi-dropdown-content{background-color:#ffffff;border:1px solid #9ebdcb;border-radius:8px;color:#1d4153;padding:8px;padding-right:4px;font-family:"IBM Plex Sans", "IBMPlexSans";font-size:14px;font-weight:400;letter-spacing:0px;line-height:20px;min-width:52px}.didomi-dropdown.didomi-dropdown-bordered .didomi-dropdown-content[data-opened] .didomi-dropdown-icon{transform:scale(0.5) rotate(180deg)}.didomi-dropdown.didomi-dropdown-bordered .didomi-dropdown-content .didomi-dropdown-icon{transform:scale(0.5);margin-left:4px;transition-duration:300ms;transition-property:transform}.didomi-dropdown.didomi-dropdown-bordered .didomi-dropdown-content:hover:not(:disabled){color:#265973 !important;border-color:#265973 !important}.didomi-dropdown.didomi-dropdown-bordered .didomi-dropdown-content:disabled{border:1px solid #9ebdcb;color:#9ebdcb;cursor:not-allowed}.didomi-dropdown .didomi-dropdown-content{cursor:pointer;outline:none;background-color:transparent;border:none;display:inline-flex;align-items:center;justify-content:center;padding:16px;color:#ffffff;font-family:"IBM Plex Sans", "IBMPlexSans-SemiBold";font-size:16px;letter-spacing:0px;line-height:20px;font-weight:600}.didomi-dropdown .didomi-dropdown-content[data-opened] .didomi-dropdown-icon{transform:rotate(180deg)}.didomi-dropdown .didomi-dropdown-content:hover:not(:disabled){color:#ffd5c8}.didomi-dropdown .didomi-dropdown-content:disabled{cursor:not-allowed}.didomi-dropdown .didomi-dropdown-content .didomi-dropdown-icon{margin-left:16px;transition-duration:300ms;transition-property:transform}.didomi-overlay-container .didomi-dropdown-wrapper{min-width:240px}.didomi-overlay-container .didomi-dropdown-wrapper[data-popper-placement] .didomi-dropdown-list{transform:translateY(0) !important}.didomi-overlay-container .didomi-dropdown-wrapper .didomi-dropdown-list{transition-property:transform;display:block;box-shadow:0px 24px 24px 1px rgba(0, 0, 0, 0.12);padding:0;margin:0;background-color:#ffffff;border:1px solid #ffd5c8;border-radius:8px;transition-property:transform;transition-duration:300ms;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#ffd5c8 #ffffff}.didomi-overlay-container .didomi-dropdown-wrapper .didomi-dropdown-list::-webkit-scrollbar{height:4px;width:4px;border-radius:8px}.didomi-overlay-container .didomi-dropdown-wrapper .didomi-dropdown-list::-webkit-scrollbar-track{background:#ffffff}.didomi-overlay-container .didomi-dropdown-wrapper .didomi-dropdown-list::-webkit-scrollbar-thumb{background-color:#ffd5c8;border-radius:4px;border:1px solid #ffffff}.didomi-overlay-container .didomi-dropdown-wrapper .didomi-dropdown-list.didomi-dropdown-scroll{border-top-right-radius:0;border-bottom-right-radius:0}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list{background-color:#ffffff;border-color:#265973;scrollbar-width:thin;scrollbar-color:#265973 #ffffff}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list::-webkit-scrollbar{height:4px;width:4px;border-radius:8px}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list::-webkit-scrollbar-track{background:#ffffff}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list::-webkit-scrollbar-thumb{background-color:#265973;border-radius:4px;border:1px solid #ffffff}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list.didomi-dropdown-scroll .didomi-option{border-right:1px solid #265973}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list .didomi-option{height:40px;border-left:none;border-right:none;transition:background-color 300ms ease-in-out}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list .didomi-option .option-item{padding:0px 16px}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list .didomi-option .option-item:not(.disabled){cursor:pointer}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list .didomi-option .option-item:hover{background-color:#e2f1f8}.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list .didomi-option .option-item.selected,.didomi-overlay-container .didomi-dropdown-wrapper-bordered .didomi-dropdown-list .didomi-option .option-item:active{background-color:#e2f1f8}.didomi-overlay-container .didomi-dropdown-wrapper-blue .didomi-dropdown-list{scrollbar-width:thin;scrollbar-color:#265973 #ffffff;border:1px solid #9ebdcb}.didomi-overlay-container .didomi-dropdown-wrapper-blue .didomi-dropdown-list::-webkit-scrollbar{height:6px;width:6px;border-radius:8px}.didomi-overlay-container .didomi-dropdown-wrapper-blue .didomi-dropdown-list::-webkit-scrollbar-track{background:#ffffff}.didomi-overlay-container .didomi-dropdown-wrapper-blue .didomi-dropdown-list::-webkit-scrollbar-thumb{background-color:#265973;border-radius:6px;border:1px solid #ffffff}.didomi-overlay-container .didomi-dropdown-wrapper-blue .didomi-option .option-item:hover{background-color:#eff7fb}.didomi-overlay-container .didomi-dropdown-wrapper-blue .didomi-option .option-item.selected,.didomi-overlay-container .didomi-dropdown-wrapper-blue .didomi-option .option-item:active{background-color:#e2f1f8}'}}]);
//# sourceMappingURL=8910.4c9133f0.chunk.js.map