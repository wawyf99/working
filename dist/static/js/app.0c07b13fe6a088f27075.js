webpackJsonp([1],{"0lXm":function(t,e){},"1OpW":function(t,e){},ESEr:function(t,e){},IUJA:function(t,e){},JGLT:function(t,e,i){"use strict";var s=i("jHHs"),n=(s.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:s.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,s=e.target,n=!!s.checked;if(Array.isArray(i)){var a=t._i(i,null);s.checked?a<0&&(t.msg=i.concat([null])):a>-1&&(t.msg=i.slice(0,a).concat(i.slice(a+1)))}else t.msg=n}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var o=i("C7Lr")(n,a,!1,function(t){i("h8pS")},null,null);e.a=o.exports},Jg55:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("IvJb"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},n,!1,function(t){i("Jg55")},"data-v-a1ed10d2",null).exports,o=i("zO6J"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-header"},[e("div",{staticClass:"ui-back"},[e("i",{staticClass:"fa fa-angle-left fa-lg",attrs:{"aria-hidden":"true"}}),this._v("\n      返回\n    ")])])}]};var l=i("C7Lr")({data:function(){return{title:"这里是一个测试"}},created:function(){}},r,!1,function(t){i("Q6wu")},null,null).exports,u=i("7+S+"),c=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(u.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]};var h=i("C7Lr")(c,d,!1,function(t){i("tD2p")},null,null).exports,v={components:{XButton:h},data:function(){return{title:""}},methods:{show:function(){this.$router.push({name:"邀您加入群聊"})}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-footer"},[e("div",{staticClass:"ui-invite"},[this._v("亦柔邀请你加入群聊")]),this._v(" "),e("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:this.show}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-role"},[e("p",[this._v("1.您和群里其他人都不是朋友关系，请注意隐私安全。")]),this._v(" "),e("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var f=i("C7Lr")(v,m,!1,function(t){i("ov49")},"data-v-a47bfb78",null).exports,p={components:{Header:l,Footer:f},name:"Main",data:function(){return{msg:""}},created:function(){},mounted:function(){document.getElementById("main").addEventListener("touchmove",function(t){t._isScroller||t.preventDefault()})}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("Header"),this._v(" "),this._m(0),this._v(" "),e("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"ui-logo"}),this._v(" "),e("div",{staticClass:"ui-title"},[this._v("再测试一遍")]),this._v(" "),e("div",{staticClass:"ui-num"},[this._v("352人")])])}]};var _=i("C7Lr")(p,g,!1,function(t){i("ESEr")},null,null).exports,w=i("mqrw"),y=i("jHHs"),C=(w.a,y.a,{name:"Show",components:{Alert:w.a,XDialog:y.a},data:function(){return{now:""}},created:function(){this.getNowTime(),this.go()},methods:{modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getNowTime:function(){var t=new Date,e="";e=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var i=t.getHours()+":"+e;this.now=i},go:function(){var t=this,e=1,i=setInterval(function(){switch(console.log(e),e){case 1:t.$refs.go1.style.display="block";break;case 2:t.$refs.go2.style.display="block";break;case 3:t.$refs.go3.style.display="block";break;case 4:t.$refs.go4.style.display="block";break;case 5:t.$refs.go5.style.display="block";break;case 6:t.$refs.go6.style.display="block";break;case 7:t.$refs.go7.style.display="block";break;case 8:t.$refs.go8.style.display="block";break;case 9:clearInterval(i)}e++;var s=document.documentElement.scrollHeight||document.body.scrollHeight;document.documentElement.scrollTop=s,document.body.scrollTop=s},800)}},mounted:function(){document.getElementById("show").addEventListener("touchmove",function(t){t._isScroller||(t._isScroller=!0)})}}),b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"show"}},[i("div",{staticClass:"show"},[i("div",{ref:"go1",staticClass:"ui-show-step1"},[t._v(t._s(t.now))]),t._v(" "),i("div",{ref:"go2",staticClass:"ui-show-step2"},[t._v('"'),i("span",[t._v("亦柔")]),t._v('"邀请你加入了群聊，群聊参与人还有: 这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德')]),t._v(" "),i("div",{ref:"go3",staticClass:"ui-show-step3 clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(0)]),t._v(" "),i("div",{ref:"go4",staticClass:"ui-show-step3 clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(1)]),t._v(" "),i("div",{ref:"go5",staticClass:"ui-show-step3 clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(2)]),t._v(" "),i("div",{ref:"go6",staticClass:"ui-show-step3 clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(3)]),t._v(" "),i("div",{ref:"go7",staticClass:"ui-show-step4"},[t._v('\n      你被"'),i("span",[t._v("群主")]),t._v('"移除群聊\n    ')]),t._v(" "),i("div",{ref:"go8",staticClass:"ui-show-step5"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[t._m(4),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-01"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-02"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-03"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-text"},[this._v("\n          这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话。\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-title"},[this._v("提示：完成分享任务，可重新进群"),e("br"),this._v("（请分享到一个微信群）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-content"},[this._v("当前群人数"),e("span",[this._v("321")]),this._v("人")])}]};var x=i("C7Lr")(C,b,!1,function(t){i("IUJA")},null,null).exports;s.a.use(o.a);var S=new o.a({hashbang:!0,mode:"history",routes:[{path:"/",name:"群聊邀请",component:_},{path:"/show",name:"邀您加入群聊",component:x}]});S.beforeEach(function(t,e,i){document.getElementById("titleId").innerHTML=t.name,i()});var k=S,B=i("DMPO"),$=i.n(B),I=i("9f8V"),T=i("e58e"),E=i("mdno");s.a.use(I.a),s.a.use(T.a),s.a.use(E.a),s.a.config.productionTip=!1,s.a.use($.a),new s.a({el:"#app",router:k,components:{App:a},template:"<App/>"})},Q6wu:function(t,e){},f4gh:function(t,e,i){"use strict";var s=i("YKQd"),n=(s.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("C7Lr")(n,a,!1,function(t){i("0lXm")},null,null);e.a=o.exports},h8pS:function(t,e){},jHHs:function(t,e,i){"use strict";var s=i("uc2b"),n=(s.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[s.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=i("C7Lr")(n,a,!1,function(t){i("wdDN")},null,null);e.a=o.exports},mqrw:function(t,e,i){"use strict";var s=i("jHHs"),n=(s.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:s.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var o=i("C7Lr")(n,a,!1,function(t){i("1OpW")},null,null);e.a=o.exports},ov49:function(t,e){},tD2p:function(t,e){},wdDN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0c07b13fe6a088f27075.js.map