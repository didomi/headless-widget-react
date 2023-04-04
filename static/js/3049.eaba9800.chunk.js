"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[3049],{3049:function(t,e,n){n.r(e),n.d(e,{didomi_nav_tabs:function(){return s}});var a=n(4165),r=n(5861),i=n(5671),o=n(3144),d=n(221),s=function(){function t(e){var n=this;(0,i.Z)(this,t),(0,d.r)(this,e),this.getTabHeading=function(){return n.el.querySelector(".didomi-nav-tab-heading")},this.getTabContentWrapper=function(){return n.el.querySelector(".didomi-nav-tab-contents")},this.getTabContent=function(){return n.el.querySelector(".didomi-nav-tab-content")},this.getTabHeaders=(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.heading){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,Promise.all(Array.from(n.heading.querySelectorAll(".didomi-nav-tab-header")));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),this.handleHeaderClicked=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(e){var r,i,o,d,s,c,u;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=1!==e.detail.which,!(e.detail.ctrlKey||e.detail.shiftKey||e.detail.altKey||r)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.getTabHeaders();case 5:i=t.sent,o=i.find((function(t){var e,n;return null===(n=null===(e=t.querySelector("a"))||void 0===e?void 0:e.classList)||void 0===n?void 0:n.contains("didomi-active-tab")})),d=e.target,o!==d&&(s=i.findIndex((function(t){return t===o})),c=i.findIndex((function(t){return t===d})),u=c>s?"to-left":"to-right",n.animateTabChange(u));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.buildComponentDom=function(){if(n.el.classList.add("didomi-nav-tabs"),n.heading=n.getTabHeading(),!n.heading)throw new Error("Tab element must contain a valid <didomi-nav-tab-heading> element");n.heading.addEventListener("keydown",n.handleKeyDown),n.el.appendChild(n.heading);var t=n.getTabContentWrapper();if(!t)throw new Error("Tab element must contain a valid <nav-tab-contents> element");n.el.appendChild(t)},this.handleKeyDown=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(e){var r,i,o,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.target,"Tab"!==e.key&&e.preventDefault(),r){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,n.getTabHeaders();case 6:if(i=t.sent,o=i.map((function(t){return t.querySelector("button")})),d=o.findIndex((function(t){return t===r})),!(e.ctrlKey||e.altKey||e.metaKey||"Tab"===e.key)){t.next=13;break}return t.abrupt("return");case 13:t.t0=e.code,t.next="Space"===t.t0||"Enter"===t.t0?16:"Escape"===t.t0?18:"Up"===t.t0||"ArrowUp"===t.t0||"ArrowLeft"===t.t0?20:"Down"===t.t0||"ArrowDown"===t.t0||"ArrowRight"===t.t0?22:"Home"===t.t0||"PageUp"===t.t0?24:"End"===t.t0||"PageDown"===t.t0?26:28;break;case 16:return i[d].tabActivate(),t.abrupt("break",28);case 18:return i[d].tabBlur(),t.abrupt("break",28);case 20:return 0===d?i[i.length-1].tabFocus():i[d-1].tabFocus(),t.abrupt("break",28);case 22:return d===i.length-1?i[0].tabFocus():i[d+1].tabFocus(),t.abrupt("break",28);case 24:return i[0].tabFocus(),t.abrupt("break",28);case 26:return i[i.length-1].tabFocus(),t.abrupt("break",28);case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}return(0,o.Z)(t,[{key:"animateTabChange",value:function(t){var e=this.getTabContentWrapper();if(!e.classList.contains("didomi-nav-tab-contents-animating")){var n=this.getTabContent(),a=n.cloneNode(!0),r="to-left"===t?"didomi-nav-tab-content-new-from-right":"didomi-nav-tab-content-new-from-left",i="to-left"===t?"didomi-nav-tab-content-temp-to-left":"didomi-nav-tab-content-temp-to-right";n.classList.add(r),n.classList.add("didomi-nav-tab-content-new"),e.classList.add("didomi-nav-tab-contents-animating"),a.classList.add("didomi-nav-tab-content-temp"),n.insertAdjacentElement("afterend",a),setTimeout((function(){a.classList.add(i),n.classList.add("didomi-nav-tab-content-new-to-default"),setTimeout((function(){n.classList.remove("didomi-nav-tab-content-new"),n.classList.remove(r),n.classList.remove("didomi-nav-tab-content-new-to-default"),e.classList.remove("didomi-nav-tab-contents-animating"),a.remove()}),400)}),10)}}},{key:"componentDidLoad",value:function(){this.buildComponentDom(),this.el.addEventListener("headerClicked",this.handleHeaderClicked)}},{key:"el",get:function(){return(0,d.g)(this)}}]),t}();s.style=".didomi-nav-tabs{width:100%;display:flex;flex-direction:column}"}}]);
//# sourceMappingURL=3049.eaba9800.chunk.js.map