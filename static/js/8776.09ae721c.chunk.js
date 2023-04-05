"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[8776],{8776:function(e,i,t){t.r(i),t.d(i,{didomi_color_picker_input:function(){return u}});var o=t(5671),n=t(3144),r=t(221),l=t(2475),a=t(5743),s=t(1811),u=function(){function e(i){var t=this;(0,o.Z)(this,e),(0,r.r)(this,i),this.valueChange=(0,r.c)(this,"valueChange",7),this.inheritedAttributes={},this.placement="top-end",this.inputId="didomi-color-picker-id-".concat((0,a.g)()),this.isValidColor=function(e){var i=(new Option).style;return i.color=e,""!==i.color},this.handleColorChange=function(e){e.stopPropagation(),t.value=e.target.value,t.isColorValid&&t.valueChange.emit(t.value)},this.handleBlur=function(e){setTimeout((function(){e.detail||t.closeColorPicker()}))},this.handleMouseEnter=function(){t.openColorPicker(!1)},this.handleMouseLeave=function(){t.shouldStayOpen||t.closeColorPicker()},this.openColorPicker=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.popperOverlay.isOpen()||t.popperOverlay.open(),e&&(t.inputRef.querySelector("input").focus(),t.inputRef.querySelector("input").select(),t.shouldStayOpen=!0)},this.closeColorPicker=function(){t.popperOverlay.isOpen()&&(t.popperOverlay.close(),t.shouldStayOpen=!1)},this.handleKeyDown=function(e){e.key!==l.K.Enter&&e.key!==l.K.Space||(e.preventDefault(),t.openColorPicker(!0))},this.handleInputKeyDown=function(e){e.key===l.K.Enter&&(e.preventDefault(),t.closeColorPicker(),t.shouldStayOpen=!1)}}return(0,n.Z)(e,[{key:"valueChanged",value:function(e){this.updateColorValidity(e)}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,a.i)(this.el,["aria-label"])}},{key:"componentDidLoad",value:function(){this.updateColorValidity(this.value),this.popperOverlay=new s.P(this.el.querySelector(".didomi-color-picker-input__label"),this.inputRef,null,{placement:this.placement,strategy:"fixed",modifiers:[{options:{altAxis:!0,padding:4}}]})}},{key:"disconnectedCallback",value:function(){this.popperOverlay.destroy()}},{key:"updateColorValidity",value:function(e){this.isColorValid=this.isValidColor(e)}},{key:"render",value:function(){var e=this,i=(0,a.c)("didomi-text-input",this.el.tagName),t=(0,a.c)("didomi-illustration",this.el.tagName),o={backgroundColor:this.value};return(0,r.h)(r.a,{class:{"":!0}},(0,r.h)("label",{class:"didomi-color-picker-input__label",htmlFor:this.inputId,tabIndex:0,onClick:function(){return e.openColorPicker()},onKeyDown:this.handleKeyDown,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.isColorValid?(0,r.h)("div",{class:"didomi-color-picker-input__circle",style:o}):(0,r.h)(t,{name:"transparent-background-grid",class:"didomi-color-picker-input__illustration"})),(0,r.h)(i,Object.assign({},this.inheritedAttributes,{"aria-haspopup":"true",ref:function(i){return e.inputRef=i},class:"didomi-color-picker-input__field",id:this.inputId,type:"text",size:"xs",value:this.value,hideErrorMessage:!0,onInput:this.handleColorChange,onFocusChange:this.handleBlur,onKeyDown:this.handleInputKeyDown})))}},{key:"el",get:function(){return(0,r.g)(this)}}],[{key:"watchers",get:function(){return{value:["valueChanged"]}}}]),e}();u.style=".didomi-color-picker-input{display:block}.didomi-color-picker-input__label{display:block;overflow:hidden;width:32px;height:32px;border-radius:50%;padding:3px;background:#ffffff;border:1px solid #668a99;cursor:pointer}.didomi-color-picker-input__circle{width:100%;height:100%;border-radius:50%;overflow:hidden}.didomi-color-picker-input__field{width:81px;padding-bottom:4px}.didomi-color-picker-input__illustration{border-radius:50%;overflow:hidden}"},2475:function(e,i,t){var o;t.d(i,{K:function(){return o}}),function(e){e.Enter="Enter",e.Escape="Escape",e.Space=" "}(o||(o={}))}}]);
//# sourceMappingURL=8776.09ae721c.chunk.js.map