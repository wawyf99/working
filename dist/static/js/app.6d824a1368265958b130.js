webpackJsonp([1],{"/kga":function(t,e,i){"use strict";var s=i("JkZY"),a=(s.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[s.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("z3SG")},null,null);e.a=o.exports},"0nrA":function(t,e){},"2SKQ":function(t,e,i){"use strict";i("mvsn");var s=i("TWGN"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}})},staticRenderFns:[]};var n=function(t){i("Orc6")},o=i("VU/8")(s.a,a,!1,n,null,null);e.a=o.exports},"4Kl6":function(t,e,i){"use strict";var s=i("mzja"),a=i("/kga"),n=(s.a,a.a,{name:"Process",components:{Alert:s.a,XDialog:a.a},data:function(){return{step:this.$route.query.step,wxid:this.$route.query.wxid,words:""}},created:function(){this.getAlertBox(),this.$refs.alertBox.style.display="block"},watch:{$route:function(t,e){this.step=this.$route.query.step,this.getAlertBox(),this.$refs.alertBox.style.display="block"}},methods:{jumpFun:function(){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})},modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getAlertBox:function(){var t=this.step,e="";switch(t=parseInt(t)){case 1:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享<i class="ui-color-red"> 1 </i>个不同的群</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 2:e='<div class="font-one">分享失败 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-five">分享到相同的群或者个人会失败<br>请继续分享到<i class="ui-color-red"> 2 </i>个不同的群！</div><div class="font-six"><i class="ui-color-red">即可进群</i></div>';break;case 3:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享到<i class="ui-color-red"> 1 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 4:e='<div class="font-seven"><i class="ui-color-red">分享完成</i></div><div class="font-eight">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';break;case 5:e='<div class="font-one" style="font-weight: bold; color: red;" >注意 <i class="ui-color-red" >✘</i></div><div class="ui-color-red" style="margin-top: 0.4rem;">必须【公开】分享才可以进群</div><div class="font-four" style="margin-top: 0.2rem;">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>'}this.words=e}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var s=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),a=Number(e.pageY);i,s=a}catch(t){alert(t)}});var a=document.getElementById("Process");a.ontouchmove=function(t){var e=t.touches[0],i=a.scrollTop,n=a.scrollHeight-a.offsetHeight;0===i?e.clientY>s&&t.preventDefault():i===n&&e.clientY<s&&t.preventDefault()};var n=document.documentElement.clientHeight;document.getElementById("Process").style.height=n+"px"}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Process"}},[1==t.step?i("div",{staticClass:"box-one",attrs:{id:"ProcessDiv"}}):2==t.step?i("div",{staticClass:"box-two",attrs:{id:"ProcessDiv"}}):3==t.step?i("div",{staticClass:"box-three",attrs:{id:"ProcessDiv"}}):4==t.step?i("div",{staticClass:"box-four",attrs:{id:"ProcessDiv"}}):5==t.step?i("div",{staticClass:"box-five",attrs:{id:"ProcessDiv"}}):t._e(),t._v(" "),i("div",{staticClass:"ui-show-step5 process"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[i("div",{staticClass:"ui-content",domProps:{innerHTML:t._s(t.words)}}),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])])},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("h49L")},null,null);e.a=r.exports},"5I+Q":function(t,e){},"62KO":function(t,e,i){"use strict";var s=i("/kga"),a=(s.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:s.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&(t.msg=i.concat([null])):n>-1&&(t.msg=i.slice(0,n).concat(i.slice(n+1)))}else t.msg=a}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("P1tG")},null,null);e.a=o.exports},AYI0:function(t,e){var i={jumpA2:function(){var t=window.location.host;console.log(t)}};t.exports=i},BfUi:function(t,e,i){(function(t){t.baseUrl="https://working.api.ssmulu.com",t.wxUrl="https://wx.api.ssmulu.com",t.url={chatGetTitle:"/chat/get-title",get_wx_share:"/chat/getWxShare",domain_skip:"/chat/domainSkip",wx_share:"/wechat/wxinfo"},t.public={Wxshare:"",WxConfig:"",step:""},t.page={size:20}}).call(e,i("DuR2"))},Bfwr:function(t,e,i){"use strict";Boolean,String,String,String;var s={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("QaG2")},null,null);e.a=n.exports},BsPA:function(t,e,i){"use strict";var s=i("Dd8w"),a=i.n(s),n=i("YtJ0"),o=i("NYxO"),r=(a()({},Object(o.d)(["count"])),a()({},Object(o.c)(["add","reduce"]),Object(o.b)(["addAction","reduceAction"])),n.a,{name:"count",data:function(){return{msg:"Hello Wolrd !"}},computed:a()({},Object(o.d)(["count"])),methods:a()({},Object(o.c)(["add","reduce"]),Object(o.b)(["addAction","reduceAction"])),store:n.a}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v(t._s(t.msg))]),i("hr"),t._v(" "),i("h1",[t._v(t._s(t.count))]),t._v(" "),i("p",[i("button",{on:{click:function(e){t.$store.commit("add",10)}}},[t._v("+")]),t._v(" "),i("button",{on:{click:t.reduce}},[t._v("-")])]),t._v(" "),i("p",[i("button",{on:{click:t.addAction}},[t._v("+")]),t._v(" "),i("button",{on:{click:t.reduceAction}},[t._v("-")])])])},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("5I+Q")},"data-v-7ef8e23a",null);e.a=c.exports},EwZo:function(t,e){var i={versions:function(){var t=navigator.userAgent;navigator.appVersion;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari")}}(),isWechat:function(){return!!this.versions.mobile&&(!this.versions.webdebugger&&"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i))},language:(navigator.browserLanguage||navigator.language).toLowerCase()};t.exports=i},IenS:function(t,e,i){"use strict";(function(t){e.a=r;var s=i("7+uW"),a=(i("YaEn"),i("n6Wb")),n=i("yD8N"),o=(i("iPXC"),i("YtJ0"));function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.title,a=e.desc,n=e.timelineTitle,r=e.link,l=e.logo,c=e.flock_logo,u=e.sort,d=e.wxid,h=o.a.state.step,p=window.location.href;if(p&&0==h)s.default.http.post(t.wxUrl+t.url.wx_share,{url:p,wxid:d}).then(function(t){o.a.state.WxConfig=t.data,s.default.wechat.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","hideAllNonBaseMenuItem","showMenuItems"]});var e=u;e||(e=1),1==e?(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"]})):2==e?(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:timeline"]})):3==e&&(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}))});else if(p&&h>0){var f=o.a.state.WxConfig;s.default.wechat.config({debug:!1,appId:f.appId,timestamp:f.timestamp,nonceStr:f.nonceStr,signature:f.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","hideAllNonBaseMenuItem","showMenuItems"]});var v=u;v||(v=1),1==v?(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"]})):2==v?(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:timeline"]})):3==v&&(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}))}s.default.wechat.ready(function(){s.default.wechat.onMenuShareAppMessage({title:i,desc:a||"这里是分享朋友的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/T2afCN3o",success:function(t){switch(h&&(h=parseInt(h)),h){case 0:h=1,o.a.commit("update",h);break;case 1:h=2,o.a.commit("update",h);break;case 2:h=3,o.a.commit("update",h);break;case 3:h=4,o.a.commit("update",h);break;case 4:h=5,o.a.commit("update",h);break;case 5:s.default.http.post("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url});break;default:h=1,o.a.commit("update",h)}}}),s.default.wechat.onMenuShareTimeline({title:n||"这里是分享朋友圈的内容",link:r||window.location.href,imgUrl:c||"https://dwz.cn/bQtHr9Iz",success:function(){switch(h&&(h=parseInt(h)),h){case 0:h=1,o.a.commit("update",h);break;case 1:h=2,o.a.commit("update",h);break;case 2:h=3,o.a.commit("update",h);break;case 3:h=4,o.a.commit("update",h);break;case 4:h=5,o.a.commit("update",h);break;case 5:s.default.http.post("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url});break;default:h=1,o.a.commit("update",h)}}});var t=u;t||(t=1),1==t?(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"]})):2==t?(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:timeline"]})):3==t&&(s.default.wechat.hideAllNonBaseMenuItem(),s.default.wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}))}),s.default.wechat.error(function(t){})}s.default.use(a.a),s.default.use(n.a),s.default.prototype.$wxShare=r}).call(e,i("DuR2"))},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("NYxO"),n=i("EwZo"),o=i.n(n),r={name:"App",data:function(){return{uaSort:{webkitOverflowScrolling:""}}},created:function(){o.a.versions.android&&(this.uaSort.webkitOverflowScrolling="touch")}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.uaSort,attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("rbuh")},"data-v-44ba50bc",null).exports,u=i("YaEn"),d=i("BfUi"),h=i.n(d),p=i("AYI0"),f=i.n(p),v=i("IenS"),m=i("j1M6"),w=i.n(m),g=i("bHfy"),_=i.n(g),x=i("3BeM"),b=i("NXWw"),y=i("Peep"),k=i("Y+qm"),C=i("yD8N"),S=i("n6Wb");Object(v.a)(u.a),s.default.use(k.a),s.default.use(x.a),s.default.use(b.a),s.default.use(y.a),s.default.use(w.a,_.a),s.default.use(a.a),s.default.use(h.a),s.default.use(o.a),s.default.use(S.a),s.default.use(C.a),s.default.use(f.a),f.a.jumpA2(),o.a.isWechat(),s.default.prototype.$step=0,s.default.prototype.$Wxshare="";var I=new a.a.Store({});I.registerModule("vux",{state:{loading:!1,showBack:!0,title:"555555555",number:""},mutations:{updateLoading:function(t,e){t.loading=e},updateShowBack:function(t,e){t.showBack=e},updateTitle:function(t,e){t.title=e},updateNumber:function(t,e){var i="";e<=0?t.number=i:(i=e.toString(),t.number=i)}}}),new s.default({el:"#app",router:u.a,store:I,components:{App:c},template:"<App/>"})},Orc6:function(t,e){},P1tG:function(t,e){},PDZB:function(t,e){},QaG2:function(t,e){},RRNw:function(t,e,i){"use strict";(function(t){var s=i("EwZo");i.n(s);e.a={components:{},name:"Main",data:function(){return{title:"*",enrollment:"*",invitor:"*",wxid:this.$route.query.wxid,url:""}},created:function(){this.$vux.loading.show(),this.getApi();var t=["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"],e=Math.floor(Math.random()*t.length);this.invitor=t[e]},methods:{getApi:function(){var e=this,i=this,s=IpQuery.city,a=IpQuery.province,n="";n=s?s.replace(/市/,""):a.replace(/省/,""),i.$http.post(t.baseUrl+t.url.chatGetTitle,{}).then(function(s){s.status&&(i.$vux.loading.hide(),i.title=s.data.title.replace(/city/,n),i.enrollment=s.data.enrollment,i.$http.post(t.baseUrl+t.url.domain_skip,{type:"C1"}).then(function(t){e.url=t.data}))})},jumpFun:function(){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})},show:function(t){if(1==t){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})}else window.location.href=this.url}},mounted:function(){new IScroll("#wrappers",{mouseWheel:!0,click:!1,taps:!0}),document.addEventListener("touchmove",function(t){t.preventDefault()},!!isPassive()&&{capture:!1,passive:!1});var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1)}}}).call(e,i("DuR2"))},TWGN:function(t,e,i){"use strict";(function(t){e.a={name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){this.domain()},methods:{domain:function(){this.$http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){})}}}}).call(e,i("DuR2"))},W3Ur:function(t,e,i){"use strict";i("bdlu");var s=i("RRNw"),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("div",{attrs:{id:"wrappers"}},[i("div",{attrs:{id:"scrollers"}},[i("div",{staticClass:"main"},[i("div",{staticClass:"ui-logo"}),t._v(" "),i("div",{staticClass:"ui-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{ref:"c",staticClass:"ui-num"},[t._v(t._s(t.enrollment)+"人")])]),t._v(" "),i("div",{staticClass:"ui-footer"},[i("div",{staticClass:"ui-invite"},[t._v(t._s(t.invitor)+" 邀您加入群聊")]),t._v(" "),i("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:function(e){t.show(2)}}}),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-role"},[e("p",[this._v("1.您和群里其他人都不是朋友关系，注意隐私安全。")]),this._v(" "),e("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var n=function(t){i("PDZB")},o=i("VU/8")(s.a,a,!1,n,null,null);e.a=o.exports},YaEn:function(t,e,i){"use strict";(function(t){var s=i("7+uW"),a=i("/ocq"),n=i("jcuN"),o=i("2SKQ"),r=i("Z6yZ"),l=i("W3Ur"),c=i("BsPA"),u=i("4Kl6"),d=i("IenS"),h=i("EwZo"),p=i.n(h),f=(i("iPXC"),i("YtJ0"));s.default.use(a.a);var v=new a.a({hashbang:!1,mode:"history",routes:[{path:"/",name:"",component:o.a},{path:"/count",name:"",component:c.a},{path:"/mark1",name:"",component:r.a},{path:"/mark3",name:"群聊邀请",component:l.a},{path:"/mark4",name:"邀您加入群聊",component:n.a},{path:"/mark5",name:"邀您加入群聊",component:u.a}]});v.beforeEach(function(e,i,a){if(p.a.isWechat()){"/mark4"==e.path&&0!=f.a.state.step&&(window.location.href="https://xw.qq.com/"),document.getElementById("titleId").innerHTML=e.name;var n="http://a3.xinhuanet.com/c?sid=574&impid=8ce74a5e7b8f407f92c9458ffe8f1e0a&cam=789&adgid=789&crid=3553&uid=55efaac86d6942048aecdb4d2b7824cf&d=xinhuanetv2&url=http%3A%2F%2Ftj.xinhuanet.com%2F&ref=&i=1966948576&tm=1535527310&sig=56a0e773a2ec6f81c34959f1e90754ae&click=";if("/mark1"==e.path)s.default.http.post(t.baseUrl+t.url.domain_skip,{type:"A2"}).then(function(t){var e=n+t.data;window.location.href=e});else if("/mark2"==e.path)s.default.http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){var e=n+t.data;window.location.href=e});else{0==f.a.state.step&&s.default.http.post(t.baseUrl+t.url.get_wx_share,{}).then(function(t){var e=t.data.data;f.a.state.Wxshare=t.data.data;var i=IpQuery.city,s=IpQuery.province,a="",n=["👑","🔥","✨","🌟","💫","💥","💦","💤","💋","💎","❤","💕","💘","🐾","🌹","🌴","🍀","✏","✈","🔞","✅","🍭","🍦","🍉","☀","⚡","⭐","🐝","🐕","👣","🌂","🍎","🎀","🏀","🍼","👠","💐","🌺","🌻","🌀","🎈","💡","🍒","🍇","🍌","🔍","♨","🚀","🚲","💉","🔑","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒"],o=n[Math.floor(Math.random()*n.length)],r=n[Math.floor(Math.random()*n.length)];a=i?i.replace(/市/,""):s.replace(/省/,"");var l=e[0].url,c=e[0].title.replace(/city/,a).replace(/icon/,o).replace(/icon/,r),u=e[0].describe.replace(/city/,a).replace(/icon/,o).replace(/icon/,r),h=e[0].flock_title.replace(/city/,a).replace(/icon/,o).replace(/icon/,r),p=e[0].logo,v=e[0].wxid,m=e[0].flock_logo;Object(d.a)({title:c,desc:u,timelineTitle:h,link:l,logo:p,flock_logo:m,sort:"1",wxid:v})}),a()}}else window.location.href="https://xw.qq.com/"}),v.afterEach(function(t,e){}),e.a=v}).call(e,i("DuR2"))},YtJ0:function(t,e,i){"use strict";var s=i("7+uW"),a=i("NYxO");s.default.use(a.a);var n={addAction:function(t){t.commit("add",10),setTimeout(function(){t.commit("reduce")},1e3)},reduceAction:function(t){(0,t.commit)("reduce")}};e.a=new a.a.Store({state:{step:0,WxConfig:"",WxShare:""},mutations:{add:function(t,e){t.count+=e},reduce:function(t){t.count--},update:function(t,e){t.step=e}},getters:{count:function(t){return t.count+=10}},actions:n})},Z6yZ:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}},[this._v("\n  123\n")])},staticRenderFns:[]};var a=i("VU/8")({name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){}},s,!1,function(t){i("wGEc")},null,null);e.a=a.exports},bdlu:function(t,e,i){"use strict";(function(t){var e=i("EwZo");i.n(e)}).call(e,i("DuR2"))},bs7h:function(t,e){},h49L:function(t,e){},iPXC:function(t,e,i){"use strict";i("Av7u"),i("AoLr")},jcuN:function(t,e,i){"use strict";var s=i("n6Wb"),a=i("yD8N"),n=i("mzja"),o=i("/kga"),r=(i("BfUi"),i("EwZo"),i("IenS")),l=i("YtJ0"),c=(i("NYxO"),s.a,a.a,n.a,o.a,l.a,{name:"Show",components:{WechatPlugin:s.a,AjaxPlugin:a.a,Alert:n.a,XDialog:o.a},data:function(){return{step:0,uaSort:{webkitOverflowScrolling:""},now:"",invitor:"",shareUrl:"",wxid:this.$route.query.wxid,city:"",background1:{backgroundImage:"",backgroundRepeat:"no-repeat"},background2:{backgroundImage:"",backgroundRepeat:"no-repeat"},background3:{backgroundImage:"",backgroundRepeat:"no-repeat"},background4:{backgroundImage:"",backgroundRepeat:"no-repeat"},group1:"",group2:"",group3:"",name1:"",name2:"",name3:""}},store:l.a,computed:{listenStep:function(){return l.a.state.step}},created:function(){if(0==this.step){var t=["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"],e=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],i=["01","02","03","04","05","06","07","08"];t=t.sort(function(){return.5-Math.random()}),e=e.sort(function(){return.5-Math.random()}),i=i.sort(function(){return.5-Math.random()});var s=Math.floor(Math.random()*i.length);i.splice(s,1);var a=Math.floor(Math.random()*i.length);i.splice(a,1);var n=Math.floor(Math.random()*i.length);i.splice(n,1),this.background1.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.background2.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.background3.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.background4.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e.splice(1,1)[0]+".jpg')",this.name1=t.splice(1,1)[0],this.name2=t.splice(1,1)[0],this.name3=t.splice(1,1)[0],this.name4=t.splice(1,1)[0],this.invitor=t.splice(1,1)[0],this.group1="show-img-"+i.splice(1,1)[0],this.group2="show-img-"+i.splice(1,1)[0],this.group3="show-img-"+i.splice(1,1)[0],this.getNowTime();var o=IpQuery.city,r=IpQuery.province,l="";l=o?o.replace(/市/,""):r.replace(/省/,""),this.city=l}},watch:{listenStep:function(t,e){this.step=t,this.getAlertBox(),this.wxShareFun(),this.setScoll()}},methods:{modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getNowTime:function(){var t=new Date,e="";e=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var i=t.getHours()+":"+e;this.now=i},jumpFun:function(){this.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(function(t){window.location.href=t.data.url})},getAlertBox:function(){var t=this.step,e="";switch(t=parseInt(t)){case 1:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享<i class="ui-color-red"> 1 </i>个不同的群</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 2:e='<div class="font-one">分享失败 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-five">分享到相同的群或者个人会失败<br>请继续分享到<i class="ui-color-red"> 2 </i>个不同的群！</div><div class="font-six"><i class="ui-color-red">即可进群</i></div>';break;case 3:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享到<i class="ui-color-red"> 1 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 4:e='<div class="font-seven"><i class="ui-color-red">分享完成</i></div><div class="font-eight">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';break;case 5:e='<div class="font-one" style="font-weight: bold; color: red;" >注意 <i class="ui-color-red" >✘</i></div><div class="ui-color-red" style="margin-top: 0.4rem;">必须【公开】分享才可以进群</div><div class="font-four" style="margin-top: 0.2rem;">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>'}this.words=e},wxShareFun:function(){var t=this.step,e=l.a.state.Wxshare,i=IpQuery.city,s=IpQuery.province,a="",n=["👑","🔥","✨","🌟","💫","💥","💦","💤","💋","💎","❤","💕","💘","🐾","🌹","🌴","🍀","✏","✈","🔞","✅","🍭","🍦","🍉","☀","⚡","⭐","🐝","🐕","👣","🌂","🍎","🎀","🏀","🍼","👠","💐","🌺","🌻","🌀","🎈","💡","🍒","🍇","🍌","🔍","♨","🚀","🚲","💉","🔑","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒"],o=n[Math.floor(Math.random()*n.length)],c=n[Math.floor(Math.random()*n.length)];a=i?i.replace(/市/,""):s.replace(/省/,"");var u=e[t].url,d=e[t].title.replace(/city/,a).replace(/icon/,o).replace(/icon/,c),h=e[t].describe.replace(/city/,a).replace(/icon/,o).replace(/icon/,c),p=e[t].flock_title.replace(/city/,a).replace(/icon/,o).replace(/icon/,c),f=e[t].logo,v=e[t].wxid,m=e[t].flock_logo;Object(r.a)({title:d,desc:h,timelineTitle:p,link:u,logo:f,flock_logo:m,sort:"1",wxid:v})},setScoll:function(){}},mounted:function(){if(0==this.step){var t=new IScroll("#wrapper",{mouseWheel:!0,click:!0,taps:!0}),e=1,i=setInterval(function(){var s=document.querySelector("#scroller div:nth-child("+e+")");if(s?s.style.display="block":clearInterval(i),e>5&&t.scrollTo(0,t.maxScrollY-10),10==++e){var a=document.querySelector(".last-cen"),n=document.querySelector(".footerCen");a&&(a.style.display="block"),n&&(n.style.display="block"),clearInterval(i)}},500);document.addEventListener("touchmove",function(t){t.preventDefault()},!!isPassive()&&{capture:!1,passive:!1})}var s,a=this,n=window.location.href;s={title:"title",url:n},window.history.pushState(s,"title",n),window.addEventListener("popstate",function(t){a.jumpFun()},!1)}}),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.step?t.step?i("div",{attrs:{id:"process"}},[i("div",{attrs:{id:"wrappers"}},[i("div",{attrs:{id:"scrollers"}},[1==t.step?i("div",{staticClass:"box-one"}):t._e(),t._v(" "),2==t.step?i("div",{staticClass:"box-two"}):t._e(),t._v(" "),3==t.step?i("div",{staticClass:"box-three"}):t._e(),t._v(" "),4==t.step?i("div",{staticClass:"box-four"}):t._e(),t._v(" "),5==t.step?i("div",{staticClass:"box-five"}):t._e(),t._v(" "),i("div",{staticClass:"ui-show-step5 process"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[i("div",{staticClass:"ui-content",domProps:{innerHTML:t._s(t.words)}}),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])])])]):t._e():i("div",{attrs:{id:"join"}},[i("div",{attrs:{id:"wrapper"}},[i("div",{attrs:{id:"scroller"}},[i("p",{staticStyle:{height:"0.5rem"}}),t._v(" "),i("div",{ref:"go1",staticClass:"ui-show-step1 step"},[t._v(t._s(t.now))]),t._v(" "),i("div",{ref:"go2",staticClass:"ui-show-step2 step"},[t._v('"'),i("span",[t._v(t._s(t.invitor))]),t._v('"邀您加入群聊，群聊参与人还有：辞予、那一夜、床摇得厉害、你的呻吟、甜腻、强哥、七尺大乳、漂洋过海、用贞操换真钞、清晨的眼泪、孟老师、性感↗小娘们、孤寂、淫领风骚、小影、爱到深处て腿自开、无心、吻我杀我、林萌')]),t._v(" "),i("div",{ref:"go3",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background4}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name1))]),t._v(" "),i("div",{class:t.group1})])]),t._v(" "),i("div",{ref:"go4",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background1}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name2))]),t._v(" "),i("div",{class:t.group2})])]),t._v(" "),i("div",{ref:"go5",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background2}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name3))]),t._v(" "),i("div",{class:t.group3})])]),t._v(" "),i("div",{ref:"go6",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background3}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name4))]),t._v(" "),i("div",{staticClass:"show-text"},[t._v("\n              群里有没有"+t._s(t.city)+"本地的小哥哥要约的，本人在校大学生，因经济困难想做下兼职补贴下零用，要求素质高，体贴，必须带TT，进群加我私聊。\n            ")])])]),t._v(" "),i("div",{ref:"go7",staticClass:"ui-show-step4 step"},[t._v('\n          你被"'),i("span",[t._v("群主")]),t._v('"移除群聊\n        ')]),t._v(" "),i("div",{staticStyle:{height:"0.5rem"}})]),t._v(" "),i("div",{staticClass:"last-cen"},[i("div",{ref:"go8",staticClass:"ui-show-cen",attrs:{id:"cen"},on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-title"},[this._v("提示：完成分享任务，可重新进群"),e("br"),this._v("（请分享到一个微信群）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-content"},[this._v("当前群人数"),e("span",[this._v("321")]),this._v("人")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footerId",attrs:{id:"footerId"}},[e("span",{staticClass:"show-voice"}),this._v(" "),e("span",{staticClass:"show-input"}),this._v(" "),e("span",{staticClass:"show-smile"}),this._v(" "),e("span",{staticClass:"show-plus"}),this._v(" "),e("div",{staticClass:"footerCen"})])}]};var d=i("VU/8")(c,u,!1,function(t){i("bs7h")},null,null);e.a=d.exports},kp3f:function(t,e){},mvsn:function(t,e,i){"use strict";(function(t){}).call(e,i("DuR2"))},mzja:function(t,e,i){"use strict";var s=i("/kga"),a=(s.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:s.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("kp3f")},null,null);e.a=o.exports},rLAy:function(t,e,i){"use strict";var s=i("xNvf"),a=(s.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("0nrA")},null,null);e.a=o.exports},rbuh:function(t,e){},wGEc:function(t,e){},z3SG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6d824a1368265958b130.js.map