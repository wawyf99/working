webpackJsonp([1],{"/kga":function(t,e,i){"use strict";var s=i("JkZY"),a=(s.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[s.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("z3SG")},null,null);e.a=o.exports},"0nrA":function(t,e){},"2SKQ":function(t,e,i){"use strict";i("mvsn");var s=i("TWGN"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}})},staticRenderFns:[]};var n=function(t){i("Orc6")},o=i("VU/8")(s.a,a,!1,n,null,null);e.a=o.exports},"4Kl6":function(t,e,i){"use strict";var s=i("mzja"),a=i("/kga"),n=(s.a,a.a,{name:"Process",components:{Alert:s.a,XDialog:a.a},data:function(){return{step:this.$route.query.step,wxid:this.$route.query.wxid,words:""}},created:function(){this.getAlertBox()},watch:{$route:function(t,e){this.step=this.$route.query.step,this.getAlertBox(),this.$refs.alertBox.style.display="block"}},methods:{jumpFun:function(){this.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url})},modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getAlertBox:function(){var t=this.step,e="";switch(t=parseInt(t)){case 1:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享<i class="ui-color-red"> 1 </i>个不同的群</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 2:e='<div class="font-one">分享失败 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-two">分享到相同的群或者个人会失败<br>请继续分享到<i class="ui-color-red"> 2 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 3:e='<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享到<i class="ui-color-red"> 1 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';break;case 4:e='<div class="font-one"><i class="ui-color-red">分享完成</i></div><div class="font-four">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';break;case 5:e='<div class="font-six">由于参与人数过多！<br>群主稍后拉你进群，请耐心等待</div><div class="font-seven">朋友圈信息不可删除 <br><i>否则无法核实！</i></div>'}this.words=e}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var s=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),a=Number(e.pageY);i,s=a}catch(t){alert(t)}});var a=document.getElementById("Process");a.ontouchmove=function(t){var e=t.touches[0],i=a.scrollTop,n=a.scrollHeight-a.offsetHeight;0===i?e.clientY>s&&t.preventDefault():i===n&&e.clientY<s&&t.preventDefault()};var n=document.documentElement.clientHeight;document.getElementById("Process").style.height=n+"px"}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Process"}},[1==t.step?i("div",{staticClass:"box-one",attrs:{id:"ProcessDiv"}}):2==t.step?i("div",{staticClass:"box-two",attrs:{id:"ProcessDiv"}}):3==t.step?i("div",{staticClass:"box-three",attrs:{id:"ProcessDiv"}}):4==t.step?i("div",{staticClass:"box-four",attrs:{id:"ProcessDiv"}}):5==t.step?i("div",{staticClass:"box-five",attrs:{id:"ProcessDiv"}}):t._e(),t._v(" "),i("div",{staticClass:"ui-show-step5 process"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[i("div",{staticClass:"ui-content",domProps:{innerHTML:t._s(t.words)}}),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])])])},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("AU3W")},null,null);e.a=r.exports},"62KO":function(t,e,i){"use strict";var s=i("/kga"),a=(s.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:s.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&(t.msg=i.concat([null])):n>-1&&(t.msg=i.slice(0,n).concat(i.slice(n+1)))}else t.msg=a}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("P1tG")},null,null);e.a=o.exports},AU3W:function(t,e){},AYI0:function(t,e){var i={jumpA2:function(){var t=window.location.host;console.log(t)}};t.exports=i},BfUi:function(t,e,i){(function(t){t.baseUrl="http://working.api.ssmulu.com",t.wxUrl="http://wx.api.ssmulu.com",t.outs="http://www.youqingmulu.com",t.url={chatGetTitle:"/chat/get-title",get_wx_share:"/chat/getWxShare",domain_skip:"/chat/domainSkip",wx_share:"/wechat/wxinfo"},t.page={size:20}}).call(e,i("DuR2"))},Bfwr:function(t,e,i){"use strict";Boolean,String,String,String;var s={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("QaG2")},null,null);e.a=n.exports},EwZo:function(t,e){var i={versions:function(){var t=navigator.userAgent;navigator.appVersion;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari")}}(),isWechat:function(){if(this.versions.mobile)return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},language:(navigator.browserLanguage||navigator.language).toLowerCase()};t.exports=i},IenS:function(t,e,i){"use strict";(function(t){e.a=r;var s=i("7+uW"),a=i("YaEn"),n=i("n6Wb"),o=i("yD8N");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.title,n=e.desc,o=e.timelineTitle,r=e.link,l=e.logo,c=e.flock_logo,u=(e.type,window.location.href),d=a.a.history.current.query.step,h=a.a.history.current.query.wxid;u&&h&&s.a.http.post(t.wxUrl+t.url.wx_share,{url:u,wxid:h}).then(function(t){s.a.wechat.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["checkJsApi","onMenuShareAppMessage","onMenuShareTimeline","hideAllNonBaseMenuItem","showMenuItems"]})}),s.a.wechat.ready(function(){s.a.wechat.hideAllNonBaseMenuItem({success:function(t){console.log(t)},fail:function(t){console.log(t)}}),s.a.wechat.onMenuShareAppMessage({title:i,desc:n||"这里是分享朋友的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/T2afCN3o",success:function(){switch(d&&(d=parseInt(d)),d){case 0:case 1:d=2,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 2:d=3,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 3:d=4,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 4:d=5,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 5:d=6,s.a.http.post("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url});break;default:d=1,a.a.push({path:"/mark5",query:{step:d,wxid:h}})}}}),s.a.wechat.onMenuShareTimeline({title:o||"这里是分享朋友圈的内容",link:r||window.location.href,imgUrl:c||"https://dwz.cn/bQtHr9Iz",success:function(){switch(d&&(d=parseInt(d)),d){case 0:case 1:d=2,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 2:d=3,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 3:d=4,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 4:d=5,a.a.push({path:"/mark5",query:{step:d,wxid:h}});break;case 5:d=6,window.location.href="http://www.baidu.com";break;default:d=1,a.a.push({path:"/mark5",query:{step:d,wxid:h}})}}})}),s.a.wechat.error(function(t){})}s.a.use(n.a),s.a.use(o.a),s.a.prototype.$wxShare=r}).call(e,i("DuR2"))},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("xlC/")},"data-v-78c328f6",null).exports,o=i("YaEn"),r=i("BfUi"),l=i.n(r),c=i("AYI0"),u=i.n(c),d=i("EwZo"),h=i.n(d),p=i("IenS"),v=i("3BeM"),f=i("NXWw"),m=i("Peep"),w=i("Y+qm"),g=i("yD8N"),_=i("n6Wb");Object(p.a)(o.a),s.a.use(w.a),s.a.use(v.a),s.a.use(f.a),s.a.use(m.a),s.a.use(l.a),s.a.use(h.a),s.a.use(_.a),s.a.use(g.a),s.a.use(u.a),u.a.jumpA2(),h.a.isWechat(),new s.a({el:"#app",router:o.a,components:{App:n},template:"<App/>"})},Orc6:function(t,e){},P1tG:function(t,e){},QaG2:function(t,e){},RC8D:function(t,e){},RRNw:function(t,e,i){"use strict";(function(t){var s=i("teIl");e.a={components:{Header:s.a},name:"Main",data:function(){return{title:"*",enrollment:"*",invitor:"*",wxid:this.$route.query.wxid,url:""}},created:function(){this.$vux.loading.show(),this.getApi()},methods:{getApi:function(){var e=this,i=this,s=IpQuery.city,a=IpQuery.province,n="";n=s?s.replace(/市/,""):a.replace(/省/,""),i.$http.post(t.baseUrl+t.url.chatGetTitle,{}).then(function(s){s.status&&(i.$vux.loading.hide(),i.title=s.data.title.replace(/city/,n),i.enrollment=s.data.enrollment,i.invitor=s.data.invitor,i.$http.post(t.baseUrl+t.url.domain_skip,{type:"C1"}).then(function(t){e.url=t.data+e.wxid+"&invitor="+e.invitor}))})},jumpFun:function(){this.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url})},show:function(){window.location.href=this.url}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var s=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),a=Number(e.pageY);i,s=a}catch(t){alert(t)}});var a=document.getElementById("main");a.ontouchmove=function(t){var e=t.touches[0],i=a.scrollTop,n=a.scrollHeight-a.offsetHeight;0===i?e.clientY>s&&t.preventDefault():i===n&&e.clientY<s&&t.preventDefault()}}}}).call(e,i("DuR2"))},TWGN:function(t,e,i){"use strict";(function(t){e.a={name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){this.domain()},methods:{domain:function(){this.$http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){})}}}}).call(e,i("DuR2"))},W3Ur:function(t,e,i){"use strict";i("bdlu");var s=i("RRNw"),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("Header"),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"ui-logo"}),t._v(" "),i("div",{staticClass:"ui-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{ref:"c",staticClass:"ui-num"},[t._v(t._s(t.enrollment)+"人")])]),t._v(" "),i("div",{staticClass:"ui-footer"},[i("div",{staticClass:"ui-invite"},[t._v(t._s(t.invitor)+"邀请你加入群聊")]),t._v(" "),i("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:t.show}}),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-role"},[e("p",[this._v("1.您和群里其他人都不是朋友关系，请注意隐私安全。")]),this._v(" "),e("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var n=function(t){i("gklN")},o=i("VU/8")(s.a,a,!1,n,null,null);e.a=o.exports},YaEn:function(t,e,i){"use strict";(function(t){var s=i("7+uW"),a=i("/ocq"),n=i("jcuN"),o=i("2SKQ"),r=i("Z6yZ"),l=i("W3Ur"),c=i("4Kl6"),u=i("IenS");s.a.use(a.a);var d=new a.a({hashbang:!1,mode:"history",routes:[{path:"/",name:"",component:r.a},{path:"/mark2",name:"",component:o.a},{path:"/mark3",name:"群聊邀请",component:l.a},{path:"/mark4",name:"邀您加入群聊",component:n.a},{path:"/mark5",name:"邀您加入群聊",component:c.a}]});d.beforeEach(function(e,i,a){if(document.getElementById("titleId").innerHTML=e.name,"/"==e.path){var n=e.query.wxid;console.log(n),s.a.http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){window.location.href=t.data+n})}else{if("/mark4"==e.path||"/mark5"==e.path){var o=e.query.wxid,r=IpQuery.city,l=IpQuery.province,c="",d="",h=["👑","🔥","✨","🌟","💫","💥","💦","💤","💋","💎","❤","💕","💘","🐾","🌹","🌴","🍀","✏","✈","🔞","✅","🍭","🍦","🍉","☀","⚡","⭐","🐝","🐕","👣","🌂","🍎","🎀","🏀","🍼","👠","💐","🌺","🌻","🌀","🎈","💡","🍒","🍇","🍌","🔍","♨","🚀","🚲","💉","🔑","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒"],p=h[Math.floor(Math.random()*h.length)];d=r?r.replace(/市/,""):l.replace(/省/,""),e.query.step?"5"==e.query.step||"6"==e.query.step?c=2:"1"!=e.query.step&&"2"!=e.query.step&&"3"!=e.query.step&&"4"!=e.query.step||(c=3):c=1,s.a.http.post(t.baseUrl+t.url.get_wx_share,{}).then(function(t){var e=t.data.url+o,i=t.data.title.replace(/city/,d).replace(/icon/,p),s=t.data.describe.replace(/city/,d).replace(/icon/,p),a=t.data.flock_title.replace(/city/,d).replace(/icon/,p),n=t.data.logo,r=t.data.flock_logo;Object(u.a)({title:i,desc:s,timelineTitle:a,link:e,logo:n,flock_logo:r,type:c})})}a()}}),d.afterEach(function(t,e){}),e.a=d}).call(e,i("DuR2"))},Z6yZ:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}},[this._v("\n  123\n")])},staticRenderFns:[]};var a=i("VU/8")({name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){}},s,!1,function(t){i("wGEc")},null,null);e.a=a.exports},bdlu:function(t,e,i){"use strict";(function(t){i("teIl").a}).call(e,i("DuR2"))},gklN:function(t,e){},jcuN:function(t,e,i){"use strict";var s=i("mzja"),a=i("/kga"),n=(i("BfUi"),s.a,a.a,{name:"Show",components:{Alert:s.a,XDialog:a.a},data:function(){return{now:"",invitor:this.$route.query.invitor,shareUrl:"",wxid:this.$route.query.wxid,city:"",background:{backgroundImage:"",backgroundRepeat:"no-repeat"},name:""}},created:function(){var t=["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"],e=["01","02","03","04"],i=Math.floor(Math.random()*e.length),s=Math.floor(Math.random()*t.length);this.background.backgroundImage="url('http://working.ssmulu.com/avatar/avatar-"+e[i]+".jpg')",this.name=t[s],this.getNowTime(),this.go()},methods:{modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getNowTime:function(){var t=new Date,e="";e=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var i=t.getHours()+":"+e;this.now=i},go:function(){var t=this,e=1,i=setInterval(function(){switch(e){case 1:(s=t.$refs.go1)&&(s.style.display="block");break;case 2:(s=t.$refs.go2)&&(s.style.display="block");break;case 3:(s=t.$refs.go3)&&(s.style.display="block");break;case 4:(s=t.$refs.go4)&&(s.style.display="block");break;case 5:(s=t.$refs.go5)&&(s.style.display="block");break;case 6:(s=t.$refs.go6)&&(s.style.display="block");break;case 7:(s=t.$refs.go7)&&(s.style.display="block");break;case 8:var s;(s=t.$refs.go8)&&(s.style.display="block");break;case 9:clearInterval(i)}e++;var a=document.getElementById("show"),n=a.scrollHeight;a.scrollTop=n},800)},jumpFun:function(){this.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url})}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var s=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),a=Number(e.pageY);i,s=a}catch(t){alert(t)}});var a=document.getElementById("show");a.ontouchmove=function(t){var e=t.touches[0],i=a.scrollTop,n=a.scrollHeight-a.offsetHeight;0===i?e.clientY>s&&t.preventDefault():i===n&&e.clientY<s&&t.preventDefault()}}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"show"}},[i("div",{staticClass:"show"},[i("div",{ref:"go1",staticClass:"ui-show-step1 step"},[t._v(t._s(t.now))]),t._v(" "),i("div",{ref:"go2",staticClass:"ui-show-step2 step"},[t._v('"'),i("span",[t._v(t._s(t.invitor))]),t._v('"邀请你加入群聊，群聊参与人还有：辞予、那一夜、床摇得厉害、你的呻吟、甜腻、强哥、七尺大乳、漂洋过海、用贞操换真钞、清晨的眼泪、孟老师、性感↗小娘们、孤寂、淫领风骚、小影、爱到深处て腿自开、无心、吻我杀我、林萌')]),t._v(" "),i("div",{ref:"go3",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticClass:"show-img-01"})])]),t._v(" "),i("div",{ref:"go4",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticClass:"show-img-02"})])]),t._v(" "),i("div",{ref:"go5",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticClass:"show-img-03"})])]),t._v(" "),i("div",{ref:"go6",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left",style:t.background}),t._v(" "),i("div",{staticClass:"show-right"},[i("div",{staticClass:"show-person"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticClass:"show-text"},[t._v("\n          群里有没有"+t._s(t.city)+"本地的小哥哥要约的，本人在校大学生，因经济困难想做下兼职补贴下零用，要求素质高，体贴，必须带TT，进群加我私聊。\n        ")])])]),t._v(" "),i("div",{ref:"go7",staticClass:"ui-show-step4 step"},[t._v('\n      你被"'),i("span",[t._v("群主")]),t._v('"移除群聊\n    ')]),t._v(" "),i("div",{ref:"go8",staticClass:"ui-show-step5 step"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-title"},[this._v("提示：完成分享任务，可重新进群"),e("br"),this._v("（请分享到一个微信群）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-content"},[this._v("当前群人数"),e("span",[this._v("321")]),this._v("人")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-footer"},[e("span",{staticClass:"show-voice"}),this._v(" "),e("span",{staticClass:"show-input"}),this._v(" "),e("span",{staticClass:"show-smile"}),this._v(" "),e("span",{staticClass:"show-plus"})])}]};var r=i("VU/8")(n,o,!1,function(t){i("sAQ5")},null,null);e.a=r.exports},kp3f:function(t,e){},mvsn:function(t,e,i){"use strict";(function(t){}).call(e,i("DuR2"))},mzja:function(t,e,i){"use strict";var s=i("/kga"),a=(s.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:s.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("kp3f")},null,null);e.a=o.exports},rLAy:function(t,e,i){"use strict";var s=i("xNvf"),a=(s.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("0nrA")},null,null);e.a=o.exports},sAQ5:function(t,e){},teIl:function(t,e,i){"use strict";var s={data:function(){return{title:"这里是一个测试"}},created:function(){},methods:{jumpFun:function(){this.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(function(t){window.location.href=t.data.url})}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-header"},[e("div",{staticClass:"ui-back",on:{click:this.jumpFun}},[e("i",{staticClass:"fa fa-angle-left fa-lg",attrs:{"aria-hidden":"true"}}),this._v("\n      返回\n    ")])])},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("RC8D")},null,null);e.a=n.exports},wGEc:function(t,e){},"xlC/":function(t,e){},z3SG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.85851f311c2368635ca7.js.map