webpackJsonp([1],{"/kga":function(t,e,i){"use strict";var n=i("JkZY"),s=(n.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[n.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("z3SG")},null,null);e.a=o.exports},"0nrA":function(t,e){},"1BU7":function(t,e){},"62KO":function(t,e,i){"use strict";var n=i("/kga"),s=(n.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:n.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,n=e.target,s=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&(t.msg=i.concat([null])):a>-1&&(t.msg=i.slice(0,a).concat(i.slice(a+1)))}else t.msg=s}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("P1tG")},null,null);e.a=o.exports},Avcx:function(t,e){},BfUi:function(t,e,i){(function(t){t.baseUrl="http://working.api.rzzc.ltd",t.wxUrl="http://wx.api.rzzc.ltd",t.url={chatGetTitle:"chat/get-title",wx_share:"/wechat/wxinfo"},t.page={size:20}}).call(e,i("DuR2"))},Bfwr:function(t,e,i){"use strict";Boolean,String,String,String;var n={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var a=i("VU/8")(n,s,!1,function(t){i("QaG2")},null,null);e.a=a.exports},Dds8:function(t,e){},EwZo:function(t,e){var i={versions:function(){var t=navigator.userAgent;navigator.appVersion;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari")}}(),isWechat:function(){if(this.versions.mobile)return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},language:(navigator.browserLanguage||navigator.language).toLowerCase()};t.exports=i},IenS:function(t,e,i){"use strict";(function(t){e.a=r;var n=i("7+uW"),s=i("YaEn"),a=i("n6Wb"),o=i("yD8N");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.title,a=e.desc,o=e.timelineTitle,r=e.link,l=e.imgUrl,u=window.location.href,c=s.a.history.current.query.wxid;u&&c&&n.a.http.post(t.wxUrl+t.url.wx_share,{url:u,wxid:c}).then(function(t){n.a.wechat.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]})}),n.a.wechat.ready(function(){n.a.wechat.updateAppMessageShareData({title:i,desc:a||"这里是分享朋友的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/T2afCN3o",success:function(){}}),n.a.wechat.updateTimelineShareData({title:o||a||"这里是分享朋友圈的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/bQtHr9Iz",success:function(){}})}),n.a.wechat.error(function(t){})}n.a.use(a.a),n.a.use(o.a),n.a.prototype.$wxShare=r}).call(e,i("DuR2"))},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},s,!1,function(t){i("xlC/")},"data-v-78c328f6",null).exports,o=i("YaEn"),r=i("BfUi"),l=i.n(r),u=i("Z1y9"),c=i("EwZo"),d=i.n(c),h=i("IenS"),p=i("3BeM"),f=i("NXWw"),v=i("Peep"),m=i("Y+qm"),w=i("n6Wb");Object(h.a)(o.a),n.a.use(m.a),n.a.use(p.a),n.a.use(f.a),n.a.use(v.a),n.a.config.productionTip=!1,n.a.use(l.a),n.a.use(u.a),n.a.use(d.a),n.a.use(w.a),d.a.isWechat(),new n.a({el:"#app",router:o.a,components:{App:a},template:"<App/>"});var g=n.a.wechat;n.a.prototype.wxShare=function(t){g.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:t.jsApiList}),g.ready(function(){g.onMenuShareAppMessage({title:"分享朋友测试",desc:"这是分享朋友测试这是分享朋友测试这是分享朋友测试这是分享朋友测试这是分享朋友测试这是分享朋友测试",link:"http://working.rzzc.ltd",imgUrl:"http://agentapi.sxmj.szdhkj.com.cn/public/images/icon.png"}),g.onMenuShareTimeline({title:"分享朋友圈测试",desc:"这是分享朋友圈测试这是分享朋友圈测试这是分享朋友圈测试这是分享朋友圈测试这是分享朋友圈测试",link:"http://working.rzzc.ltd",imgUrl:"http://agentapi.sxmj.szdhkj.com.cn/public/images/icon.png"})})}},P1tG:function(t,e){},QaG2:function(t,e){},TVmP:function(t,e,i){"use strict";var n=i("0FxO"),s=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(n.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("ly+5")},null,null).exports,r=(String,{components:{XButton:o},props:{invitor:String,required:!0},data:function(){return{wxid:this.$route.query.wxid}},methods:{show:function(){this.$router.push({path:"/show",query:{wxid:this.wxid}})}}}),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-footer"},[e("div",{staticClass:"ui-invite"},[this._v(this._s(this.invitor)+"邀请你加入群聊")]),this._v(" "),e("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:this.show}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-role"},[e("p",[this._v("1.您和群里其他人都不是朋友关系，请注意隐私安全。")]),this._v(" "),e("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var u=i("VU/8")(r,l,!1,function(t){i("Dds8")},"data-v-6c3fb506",null);e.a=u.exports},YaEn:function(t,e,i){"use strict";var n=i("7+uW"),s=i("/ocq"),a=(i("z2ZC"),i("hzeF")),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("Header"),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"ui-logo"}),t._v(" "),i("div",{staticClass:"ui-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{ref:"c",staticClass:"ui-num"},[t._v(t._s(t.enrollment)+"人")])]),t._v(" "),i("Footer",{attrs:{invitor:t.invitor}})],1)},staticRenderFns:[]};var r=function(t){i("ifDu")},l=i("VU/8")(a.a,o,!1,r,null,null).exports,u=i("mzja"),c=i("/kga"),d=(i("BfUi"),i("IenS")),h=(u.a,c.a,{name:"Show",components:{Alert:u.a,XDialog:c.a},data:function(){return{now:"",invitor:"123"}},created:function(){Object(d.a)({title:"111",desc:"222",link:"http://working.rzzc.ltd/main?wxid=1",logo:""}),this.getNowTime(),this.go()},methods:{modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getNowTime:function(){var t=new Date,e="";e=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var i=t.getHours()+":"+e;this.now=i},go:function(){var t=this,e=1,i=setInterval(function(){switch(e){case 1:(n=t.$refs.go1)&&(n.style.display="block");break;case 2:(n=t.$refs.go2)&&(n.style.display="block");break;case 3:(n=t.$refs.go3)&&(n.style.display="block");break;case 4:(n=t.$refs.go4)&&(n.style.display="block");break;case 5:(n=t.$refs.go5)&&(n.style.display="block");break;case 6:(n=t.$refs.go6)&&(n.style.display="block");break;case 7:(n=t.$refs.go7)&&(n.style.display="block");break;case 8:var n;(n=t.$refs.go8)&&(n.style.display="block");break;case 9:clearInterval(i)}e++;var s=document.getElementById("show"),a=s.scrollHeight;s.scrollTop=a},800)},jumpFun:function(){window.location.href="http://www.baidu.com"}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var n=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),s=Number(e.pageY);i,n=s}catch(t){alert(t)}});var s=document.getElementById("show");s.ontouchmove=function(t){var e=t.touches[0],i=s.scrollTop,a=s.scrollHeight-s.offsetHeight;0===i?e.clientY>n&&t.preventDefault():i===a&&e.clientY<n&&t.preventDefault()}}}),p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"show"}},[i("div",{staticClass:"show"},[i("div",{ref:"go1",staticClass:"ui-show-step1 step"},[t._v(t._s(t.now))]),t._v(" "),i("div",{ref:"go2",staticClass:"ui-show-step2 step"},[t._v('"'),i("span",[t._v(t._s(t.invitor))]),t._v('"邀请你加入了群聊，群聊参与人还有: 这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德')]),t._v(" "),i("div",{ref:"go3",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(0)]),t._v(" "),i("div",{ref:"go4",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(1)]),t._v(" "),i("div",{ref:"go5",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(2)]),t._v(" "),i("div",{ref:"go6",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(3)]),t._v(" "),i("div",{ref:"go7",staticClass:"ui-show-step4 step"},[t._v('\n      你被"'),i("span",[t._v("群主")]),t._v('"移除群聊\n    ')]),t._v(" "),i("div",{ref:"go8",staticClass:"ui-show-step5 step"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[t._m(4),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])]),t._v(" "),t._m(6)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-01"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-02"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-03"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-text"},[this._v("\n          这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话。\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-title"},[this._v("提示：完成分享任务，可重新进群"),e("br"),this._v("（请分享到一个微信群）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-content"},[this._v("当前群人数"),e("span",[this._v("321")]),this._v("人")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-footer"},[e("span",{staticClass:"show-voice"}),this._v(" "),e("span",{staticClass:"show-input"}),this._v(" "),e("span",{staticClass:"show-smile"}),this._v(" "),e("span",{staticClass:"show-plus"})])}]};var f=i("VU/8")(h,p,!1,function(t){i("nFYC")},null,null).exports,v={name:"Process",data:function(){return{}},created:function(){},methods:{jumpFun:function(){window.location.href="http://www.baidu.com"}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var n=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),s=Number(e.pageY);i,n=s}catch(t){alert(t)}});var s=document.getElementById("main");s.ontouchmove=function(t){var e=t.touches[0],i=s.scrollTop,a=s.scrollHeight-s.offsetHeight;0===i?e.clientY>n&&t.preventDefault():i===a&&e.clientY<n&&t.preventDefault()}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"Process"}},[this._v("\n  234567890\n")])},staticRenderFns:[]};var w=i("VU/8")(v,m,!1,function(t){i("1BU7")},null,null).exports;n.a.use(s.a);var g=new s.a({hashbang:!0,mode:"history",routes:[{path:"/main",name:"群聊邀请",component:l,meta:{title:"这里是首页分享",shareDesc:"首页分享测试首页分享测试首页分享测试首页分享测试",timelineTitle:"首页分享朋友圈的内容描述首页分享朋友圈的内容描述首页分享朋友圈的内容描述",imgUrl:""}},{path:"/show",name:"邀您加入群聊",component:f,meta:{title:"次页分享的标题",shareDesc:"次页分享的内容描述次页分享的内容描述次页分享的内容描述次页分享的内容描述",timelineTitle:"次页朋友圈的内容描述次页朋友圈的内容描述次页朋友圈的内容描述次页朋友圈的内容描述",imgUrl:""}},{path:"/process",name:"邀您加入群聊",component:w,meta:{title:"Process页分享的标题",shareDesc:"Process次页分享的内容描述次页分享的内容描述次页分享的内容描述次页分享的内容描述",timelineTitle:"Process次页朋友圈的内容描述次页朋友圈的内容描述次页朋友圈的内容描述次页朋友圈的内容描述",imgUrl:""}}]});g.beforeEach(function(t,e,i){document.getElementById("titleId").innerHTML=t.name,i()}),g.afterEach(function(t,e){t.component});e.a=g},Z1y9:function(t,e,i){"use strict";(function(t){var n=i("pFYg"),s=i.n(n),a=i("//Fk"),o=i.n(a),r=i("mtWM"),l=i.n(r),u=i("YaEn"),c=i("mw3O"),d=i.n(c),h=i("iPXC");l.a.defaults.baseURL=t.baseUrl,l.a.defaults.timeout=5e4,l.a.interceptors.request.use(function(t){var e=h.a.getCookie();return window.location.href.indexOf("friendsCircle")<=-1&&(e||u.a.push({path:"/"})),"multipart/form-data"!=t.headers["Content-Type"]&&(t.data=d.a.stringify(t.data)),t},function(t){return console.log("http请求拦截器",t),o.a.reject(t)}),l.a.interceptors.response.use(function(t){return-1==t.data.code&&u.a.push({path:"/"}),t},function(t){if(t.response){var e={404:"http://www.aylan.me/404",501:"http://www.aylan.me/error"};void 0===!e[t.response.status]&&u.a.push(e[t.response.status])}return console.log("http响应拦截器",t),o.a.reject(t.response.data)});var p={get:function(t,e){if(!t||"string"!=typeof t)throw new Error("必须传入字符串类型的url地址");var i={url:t,method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"},paramsSerializer:function(t){return d.a.stringify(t,{arrayFormat:"brackets"})},withCredentials:!0};if(e&&"object"!==(void 0===e?"undefined":s()(e)))throw new Error("data为对象类型");return e&&"object"===(void 0===e?"undefined":s()(e))&&(i.params=e),new o.a(function(t,e){l()(i).then(function(e){t(e.data)}).catch(function(t){console.log("get",t)})})},post:function(t,e){if(!t||"string"!=typeof t)throw new Error("必须传入字符串类型的url地址");var i={url:t,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},withCredentials:!0};if("object"!==(void 0===e?"undefined":s()(e)))throw new Error("data为对象类型");return e&&"object"===(void 0===e?"undefined":s()(e))&&(i.data=e),new o.a(function(t,e){l()(i).then(function(e){t(e.data)}).catch(function(t){console.log("post",t)})})},jsonp:function(t){if(!t||"string"!=typeof t)throw new Error("必须传入字符串类型的url地址");return new o.a(function(e,i){window.jsonCallBack=function(t){e(t)};var n=document.createElement("script");n.type="text/javascript",n.src=t+"&callback=jsonCallBack",document.getElementsByTagName("head")[0].appendChild(n),setTimeout(function(){document.getElementsByTagName("head")[0].removeChild(n)},500)})},upload:function(t,e){if(console.log("data",t),!t||"string"!=typeof t)throw new Error("必须传入字符串类型的url地址");var i={url:t,method:"POST",headers:{"Content-Type":"multipart/form-data"},data:e,withCredentials:!0};return new o.a(function(t,e){console.log(i),l()(i).then(function(e){t(e.data)}).catch(function(t){console.log("upload",t)})})}};e.a={install:function(t,e){Object.defineProperty(t.prototype,"$http",{value:p})}}}).call(e,i("DuR2"))},hzeF:function(t,e,i){"use strict";(function(t){var n=i("teIl"),s=i("TVmP"),a=i("BfUi");i.n(a);e.a={components:{Header:n.a,Footer:s.a},name:"Main",data:function(){return{title:"*",enrollment:"*",invitor:"*"}},created:function(){this.$vux.loading.show(),this.getApi()},methods:{getApi:function(){var e=this,i=this;i.$http.post(t.url.chatGetTitle,{}).then(function(t){t&&(i.$vux.loading.hide(),e.title=t.title,e.enrollment=t.enrollment,e.invitor=t.invitor)})},jumpFun:function(){window.location.href="http://www.baidu.com"}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var n=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),s=Number(e.pageY);i,n=s}catch(t){alert(t)}});var s=document.getElementById("main");s.ontouchmove=function(t){var e=t.touches[0],i=s.scrollTop,a=s.scrollHeight-s.offsetHeight;0===i?e.clientY>n&&t.preventDefault():i===a&&e.clientY<n&&t.preventDefault()}}}}).call(e,i("DuR2"))},iPXC:function(t,e,i){"use strict";i("Av7u");var n=i("AoLr"),s={info:{},getCookie:function(t){var e=new n;return t?e.get(t):e.get("_dianhai_")},setCookie:function(t){var e=new n;t?e.set(t,this.info,{exp:3600}):e.set("_dianhai_",this.info,{exp:3600})},removeCookie:function(t){var e=new n;t?e.delete(t):e.delete("_dianhai_")}};e.a=s},ifDu:function(t,e){},kp3f:function(t,e){},"ly+5":function(t,e){},mzja:function(t,e,i){"use strict";var n=i("/kga"),s=(n.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:n.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("kp3f")},null,null);e.a=o.exports},nFYC:function(t,e){},rLAy:function(t,e,i){"use strict";var n=i("xNvf"),s=(n.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[n.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("0nrA")},null,null);e.a=o.exports},teIl:function(t,e,i){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-header"},[e("div",{staticClass:"ui-back"},[e("i",{staticClass:"fa fa-angle-left fa-lg",attrs:{"aria-hidden":"true"}}),this._v("\n      返回\n    ")])])}]};var s=i("VU/8")({data:function(){return{title:"这里是一个测试"}},created:function(){}},n,!1,function(t){i("Avcx")},null,null);e.a=s.exports},"xlC/":function(t,e){},z2ZC:function(t,e,i){"use strict";(function(t){var e=i("teIl"),n=i("TVmP"),s=i("BfUi");i.n(s),e.a,n.a}).call(e,i("DuR2"))},z3SG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2aca66e552eaafb24d8d.js.map