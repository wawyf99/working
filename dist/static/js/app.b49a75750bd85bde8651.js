webpackJsonp([1],{"/kga":function(t,e,n){"use strict";var i=n("JkZY"),a=(i.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[i.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("z3SG")},null,null);e.a=o.exports},"0nrA":function(t,e){},"2SKQ":function(t,e,n){"use strict";n("mvsn");var i=n("TWGN"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}})},staticRenderFns:[]};var s=function(t){n("Orc6")},o=n("VU/8")(i.a,a,!1,s,null,null);e.a=o.exports},"4Kl6":function(t,e,n){"use strict";var i=n("mzja"),a=n("/kga"),s=(i.a,a.a,{name:"Process",components:{Alert:i.a,XDialog:a.a},data:function(){return{step:this.$route.query.step,wxid:this.$route.query.wxid,words:""}},created:function(){this.getAlertBox()},watch:{$route:function(t,e){this.step=this.$route.query.step,this.getAlertBox(),this.$refs.alertBox.style.display="block"}},methods:{jumpFun:function(){this.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url})},modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getAlertBox:function(){var t=this.step,e="";switch(t=parseInt(t)){case 1:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享<i class="ui-color-red"> 1 </i>个不同的群</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 2:e='<div class="font-one">分享失败 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-two">分享到相同的群或者个人会失败<br>请继续分享到<i class="ui-color-red"> 2 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 3:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享到<i class="ui-color-red"> 1 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 4:e='<div class="font-one"><i class="ui-color-red">分享完成</i></div><div class="font-four">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';break;case 5:e='<div class="font-six">由于参与人数过多！<br>群主稍后拉你进群，请耐心等待</div><div class="font-seven">朋友圈信息不可删除 <br><i>否则无法核实！</i></div>'}this.words=e}},mounted:function(){var t,e=this,n=window.location.href;t={title:"title",url:n},window.history.pushState(t,"title",n),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var i=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],n=Number(e.pageX),a=Number(e.pageY);n,i=a}catch(t){alert(t)}});var a=document.getElementById("Process");a.ontouchmove=function(t){var e=t.touches[0],n=a.scrollTop,s=a.scrollHeight-a.offsetHeight;0===n?e.clientY>i&&t.preventDefault():n===s&&e.clientY<i&&t.preventDefault()};var s=document.documentElement.clientHeight;document.getElementById("Process").style.height=s+"px"}}),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Process"}},[1==t.step?n("div",{staticClass:"box-one",attrs:{id:"ProcessDiv"}}):2==t.step?n("div",{staticClass:"box-two",attrs:{id:"ProcessDiv"}}):3==t.step?n("div",{staticClass:"box-three",attrs:{id:"ProcessDiv"}}):4==t.step?n("div",{staticClass:"box-four",attrs:{id:"ProcessDiv"}}):5==t.step?n("div",{staticClass:"box-five",attrs:{id:"ProcessDiv"}}):t._e(),t._v(" "),n("div",{staticClass:"ui-show-step5 process"},[n("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),n("div",{ref:"alertBox",staticClass:"ui-show-alert"},[n("div",{staticClass:"ui-content",domProps:{innerHTML:t._s(t.words)}}),t._v(" "),n("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])])},staticRenderFns:[]};var r=n("VU/8")(s,o,!1,function(t){n("AU3W")},null,null);e.a=r.exports},"62KO":function(t,e,n){"use strict";var i=n("/kga"),a=(i.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?n("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var n=t.msg,i=e.target,a=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&(t.msg=n.concat([null])):s>-1&&(t.msg=n.slice(0,s).concat(n.slice(s+1)))}else t.msg=a}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?n("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("P1tG")},null,null);e.a=o.exports},AU3W:function(t,e){},AYI0:function(t,e){var n={jumpA2:function(){var t=window.location.host;console.log(t)}};t.exports=n},BfUi:function(t,e,n){(function(t){t.baseUrl="https://working.api.ssmulu.com",t.wxUrl="https://wx.api.ssmulu.com",t.url={chatGetTitle:"/chat/get-title",get_wx_share:"/chat/getWxShare",domain_skip:"/chat/domainSkip",wx_share:"/wechat/wxinfo"},t.page={size:20}}).call(e,n("DuR2"))},Bfwr:function(t,e,n){"use strict";Boolean,String,String,String;var i={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(t){n("QaG2")},null,null);e.a=s.exports},EwZo:function(t,e){var n={versions:function(){var t=navigator.userAgent;navigator.appVersion;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari")}}(),isWechat:function(){return!!this.versions.mobile&&(!this.versions.webdebugger&&"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i))},language:(navigator.browserLanguage||navigator.language).toLowerCase()};t.exports=n},IenS:function(t,e,n){"use strict";(function(t){e.a=r;var i=n("7+uW"),a=n("YaEn"),s=n("n6Wb"),o=n("yD8N");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.title,s=e.desc,o=e.timelineTitle,r=e.link,l=e.logo,u=e.flock_logo,c=e.sort,d=e.wxid,h=window.location.href,p=a.a.history.current.query.step;h&&i.a.http.post(t.wxUrl+t.url.wx_share,{url:h,wxid:d}).then(function(t){i.a.wechat.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","hideAllNonBaseMenuItem","showMenuItems"]});var e=c;e||(e=1),1==e?(i.a.wechat.hideAllNonBaseMenuItem(),i.a.wechat.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"]})):2==e?(i.a.wechat.hideAllNonBaseMenuItem(),i.a.wechat.showMenuItems({menuList:["menuItem:share:timeline"]})):3==e&&(i.a.wechat.hideAllNonBaseMenuItem(),i.a.wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}))}),i.a.wechat.ready(function(){i.a.wechat.onMenuShareAppMessage({title:n,desc:s||"这里是分享朋友的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/T2afCN3o",success:function(){switch(p&&(p=parseInt(p)),p){case 0:case 1:p=2,a.a.push({path:"/mark5",query:{step:p}});break;case 2:p=3,a.a.push({path:"/mark5",query:{step:p}});break;case 3:p=4,a.a.push({path:"/mark5",query:{step:p}});break;case 4:p=5,a.a.push({path:"/mark5",query:{step:p}});break;case 5:i.a.http.post("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url});break;default:p=1,a.a.push({path:"/mark5",query:{step:p}})}}}),i.a.wechat.onMenuShareTimeline({title:o||"这里是分享朋友圈的内容",link:r||window.location.href,imgUrl:u||"https://dwz.cn/bQtHr9Iz",success:function(){switch(p&&(p=parseInt(p)),p){case 0:case 1:p=2,a.a.push({path:"/mark5",query:{step:p}});break;case 2:p=3,a.a.push({path:"/mark5",query:{step:p}});break;case 3:p=4,a.a.push({path:"/mark5",query:{step:p}});break;case 4:p=5,a.a.push({path:"/mark5",query:{step:p}});break;case 5:i.a.http.post("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url});break;default:p=1,a.a.push({path:"/mark5",query:{step:p}})}}});var t=c;t||(t=1),1==t?(i.a.wechat.hideAllNonBaseMenuItem(),i.a.wechat.showMenuItems({menuList:["menuItem:share:timeline","menuItem:share:appMessage"]})):2==t?(i.a.wechat.hideAllNonBaseMenuItem(),i.a.wechat.showMenuItems({menuList:["menuItem:share:timeline"]})):3==t&&(i.a.wechat.hideAllNonBaseMenuItem(),i.a.wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}))}),i.a.wechat.error(function(t){})}i.a.use(s.a),i.a.use(o.a),i.a.prototype.$wxShare=r}).call(e,n("DuR2"))},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("EwZo"),s=n.n(a),o={name:"App",data:function(){return{uaSort:{webkitOverflowScrolling:""}}},created:function(){s.a.versions.android&&(this.uaSort.webkitOverflowScrolling="touch")}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.uaSort,attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")(o,r,!1,function(t){n("rbuh")},"data-v-44ba50bc",null).exports,u=n("YaEn"),c=n("BfUi"),d=n.n(c),h=n("AYI0"),p=n.n(h),m=n("IenS"),f=n("3BeM"),v=n("NXWw"),w=n("Peep"),g=n("Y+qm"),_=n("yD8N"),x=n("n6Wb");Object(m.a)(u.a),i.a.use(g.a),i.a.use(f.a),i.a.use(v.a),i.a.use(w.a),i.a.use(d.a),i.a.use(s.a),i.a.use(x.a),i.a.use(_.a),i.a.use(p.a),p.a.jumpA2(),s.a.isWechat(),new i.a({el:"#app",router:u.a,components:{App:l},template:"<App/>"})},Orc6:function(t,e){},"P+rG":function(t,e){},P1tG:function(t,e){},QaG2:function(t,e){},RC8D:function(t,e){},RRNw:function(t,e,n){"use strict";(function(t){var i=n("teIl"),a=n("EwZo");n.n(a);e.a={components:{Header:i.a},name:"Main",data:function(){return{title:"*",enrollment:"*",invitor:"*",wxid:this.$route.query.wxid,url:""}},created:function(){this.$vux.loading.show(),this.getApi();var t=["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"],e=Math.floor(Math.random()*t.length);this.invitor=t[e]},methods:{getApi:function(){var e=this,n=this,i=IpQuery.city,a=IpQuery.province,s="";s=i?i.replace(/市/,""):a.replace(/省/,""),n.$http.post(t.baseUrl+t.url.chatGetTitle,{}).then(function(i){i.status&&(n.$vux.loading.hide(),n.title=i.data.title.replace(/city/,s),n.enrollment=i.data.enrollment,n.$http.post(t.baseUrl+t.url.domain_skip,{type:"C1"}).then(function(t){e.url=t.data+"?t=s"}))})},jumpFun:function(){this.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url})},show:function(){window.location.href=this.url}},mounted:function(){var t,e=this,n=window.location.href;t={title:"title",url:n},window.history.pushState(t,"title",n),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var i=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],n=Number(e.pageX),a=Number(e.pageY);n,i=a}catch(t){alert(t)}});var a=document.getElementById("main");a.ontouchmove=function(t){var e=t.touches[0],n=a.scrollTop,s=a.scrollHeight-a.offsetHeight;0===n?e.clientY>i&&t.preventDefault():n===s&&e.clientY<i&&t.preventDefault()}}}}).call(e,n("DuR2"))},TWGN:function(t,e,n){"use strict";(function(t){e.a={name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){this.domain()},methods:{domain:function(){this.$http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){})}}}}).call(e,n("DuR2"))},W3Ur:function(t,e,n){"use strict";n("bdlu");var i=n("RRNw"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("Header"),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"ui-logo"}),t._v(" "),n("div",{staticClass:"ui-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{ref:"c",staticClass:"ui-num"},[t._v(t._s(t.enrollment)+"人")])]),t._v(" "),n("div",{staticClass:"ui-footer"},[n("div",{staticClass:"ui-invite"},[t._v(t._s(t.invitor)+" 邀请你加入群聊")]),t._v(" "),n("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:t.show}}),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-role"},[e("p",[this._v("1.您和群里其他人都不是朋友关系，请注意隐私安全。")]),this._v(" "),e("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var s=function(t){n("P+rG")},o=n("VU/8")(i.a,a,!1,s,null,null);e.a=o.exports},YaEn:function(t,e,n){"use strict";(function(t){var i=n("7+uW"),a=n("/ocq"),s=n("jcuN"),o=n("2SKQ"),r=n("Z6yZ"),l=n("W3Ur"),u=n("4Kl6"),c=n("IenS"),d=n("EwZo");n.n(d);i.a.use(a.a);var h=new a.a({hashbang:!1,mode:"history",routes:[{path:"/",name:"",component:o.a},{path:"/mark1",name:"",component:r.a},{path:"/mark3",name:"群聊邀请",component:l.a},{path:"/mark4",name:"邀您加入群聊",component:s.a},{path:"/mark5",name:"邀您加入群聊",component:u.a}]});h.beforeEach(function(e,n,a){if("/mark4"!=e.path||e.query.t?"/mark5"==e.path&&"/mark4"!=n.path&&"/mark5"!=n.path&&(window.location.href="https://xw.qq.com/"):window.location.href="https://xw.qq.com/",document.getElementById("titleId").innerHTML=e.name,"/mark1"==e.path)i.a.http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){window.location.href=t.data});else{if("/mark4"==e.path||"/mark5"==e.path){var s=IpQuery.city,o=IpQuery.province,r="",l=["👑","🔥","✨","🌟","💫","💥","💦","💤","💋","💎","❤","💕","💘","🐾","🌹","🌴","🍀","✏","✈","🔞","✅","🍭","🍦","🍉","☀","⚡","⭐","🐝","🐕","👣","🌂","🍎","🎀","🏀","🍼","👠","💐","🌺","🌻","🌀","🎈","💡","🍒","🍇","🍌","🔍","♨","🚀","🚲","💉","🔑","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒"],u=l[Math.floor(Math.random()*l.length)];r=s?s.replace(/市/,""):o.replace(/省/,""),i.a.http.post(t.baseUrl+t.url.get_wx_share,{}).then(function(t){var n=t.data.url,i=t.data.title.replace(/city/,r).replace(/icon/,u),a=t.data.describe.replace(/city/,r).replace(/icon/,u),s=t.data.flock_title.replace(/city/,r).replace(/icon/,u),o=t.data.logo,l=t.data.wxid,d="",h=t.data.flock_logo;d="4"==e.query.step||"5"==e.query.step?2:"1"==e.query.step||"2"==e.query.step||"3"==e.query.step?3:1,console.log(d),Object(c.a)({title:i,desc:a,timelineTitle:s,link:n,logo:o,flock_logo:h,sort:d,wxid:l})})}a()}}),h.afterEach(function(t,e){}),e.a=h}).call(e,n("DuR2"))},Z6yZ:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}},[this._v("\n  123\n")])},staticRenderFns:[]};var a=n("VU/8")({name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){}},i,!1,function(t){n("wGEc")},null,null);e.a=a.exports},bdlu:function(t,e,n){"use strict";(function(t){var e=n("teIl"),i=n("EwZo");n.n(i),e.a}).call(e,n("DuR2"))},jcuN:function(t,e,n){"use strict";var i=n("mzja"),a=n("/kga"),s=(n("BfUi"),n("EwZo"),i.a,a.a,{name:"Show",components:{Alert:i.a,XDialog:a.a},data:function(){return{name3:""}},created:function(){},methods:{go:function(){var t=this,e=1,n=setInterval(function(){switch(e){case 1:(i=t.$refs.go1)&&(i.style.display="block");break;case 2:(i=t.$refs.go2)&&(i.style.display="block");break;case 3:(i=t.$refs.go3)&&(i.style.display="block");break;case 4:var i=t.$refs.go4;document.getElementById("footerId").style.position="fixed",i&&(i.style.display="block");break;case 5:(i=t.$refs.go5)&&(i.style.display="block");break;case 6:(i=t.$refs.go6)&&(i.style.display="block");break;case 7:(i=t.$refs.go7)&&(i.style.display="block");break;case 8:i=t.$refs.go8;var a=t.$refs.alertBox;i&&(i.style.display="block",a.style.display="block");break;case 9:clearInterval(n)}var s=document.getElementById("show1").scrollHeight;document.getElementById("app").scrollTop=s,document.getElementById("cen").style.height=s+"px",e++},800)}},mounted:function(){var t,e=this,n=window.location.href;t={title:"title",url:n},window.history.pushState(t,"title",n),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var i=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],n=Number(e.pageX),a=Number(e.pageY);n,i=a}catch(t){alert(t)}});var a=document.getElementById("section");a.ontouchmove=function(t){var e=t.touches[0],n=a.scrollTop,s=a.scrollHeight-a.offsetHeight;0===n?e.clientY>i&&t.preventDefault():n===s&&e.clientY<i&&t.preventDefault()}}}),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"join"}},[e("div",{staticClass:"section",attrs:{id:"section"}},[this._v("\n      1\n      2\n      3\n      4\n      5\n      6\n      7\n      8\n    ")]),this._v(" "),e("div",{staticClass:"footer"},[e("span",{staticClass:"show-voice"}),this._v(" "),e("span",{staticClass:"show-input"}),this._v(" "),e("span",{staticClass:"show-smile"}),this._v(" "),e("span",{staticClass:"show-plus"})])])}]};var r=n("VU/8")(s,o,!1,function(t){n("zW3T")},null,null);e.a=r.exports},kp3f:function(t,e){},mvsn:function(t,e,n){"use strict";(function(t){}).call(e,n("DuR2"))},mzja:function(t,e,n){"use strict";var i=n("/kga"),a=(i.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:i.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("kp3f")},null,null);e.a=o.exports},rLAy:function(t,e,n){"use strict";var i=n("xNvf"),a=(i.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("0nrA")},null,null);e.a=o.exports},rbuh:function(t,e){},teIl:function(t,e,n){"use strict";var i={data:function(){return{title:"这里是一个测试"}},created:function(){},methods:{jumpFun:function(){this.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url})}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-header"},[e("div",{staticClass:"ui-back",on:{click:this.jumpFun}},[e("i",{staticClass:"fa fa-angle-left fa-lg",attrs:{"aria-hidden":"true"}}),this._v("\n      返回\n    ")])])},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(t){n("RC8D")},null,null);e.a=s.exports},wGEc:function(t,e){},z3SG:function(t,e){},zW3T:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b49a75750bd85bde8651.js.map