webpackJsonp([1],{"/kga":function(t,e,i){"use strict";var s=i("JkZY"),n=(s.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[s.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("z3SG")},null,null);e.a=o.exports},"0nrA":function(t,e){},"4+/K":function(t,e){},"62KO":function(t,e,i){"use strict";var s=i("/kga"),n=(s.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:s.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,s=e.target,n=!!s.checked;if(Array.isArray(i)){var a=t._i(i,null);s.checked?a<0&&(t.msg=i.concat([null])):a>-1&&(t.msg=i.slice(0,a).concat(i.slice(a+1)))}else t.msg=n}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("P1tG")},null,null);e.a=o.exports},"6I6t":function(t,e){},AYI0:function(t,e){var i={jumpA2:function(){var t=window.location.host;console.log(t)}};t.exports=i},Avcx:function(t,e){},BfUi:function(t,e,i){(function(t){t.baseUrl="http://working.api.rzzc.ltd",t.wxUrl="http://wx.api.rzzc.ltd",t.url={chatGetTitle:"/chat/get-title",get_wx_share:"/chat/getWxShare",domain_skip:"/chat/domainSkip",wx_share:"/wechat/wxinfo"},t.page={size:20}}).call(e,i("DuR2"))},Bfwr:function(t,e,i){"use strict";Boolean,String,String,String;var s={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("QaG2")},null,null);e.a=a.exports},EwZo:function(t,e){var i={versions:function(){var t=navigator.userAgent;navigator.appVersion;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari")}}(),isWechat:function(){if(this.versions.mobile)return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},language:(navigator.browserLanguage||navigator.language).toLowerCase()};t.exports=i},Fv8J:function(t,e,i){"use strict";(function(t){e.a={name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){this.domain()},methods:{domain:function(){var e=this;this.$http.post(t.baseUrl+t.url.domain_skip,{type:"A2"}).then(function(t){window.location.href="http://localhost:3000/mark2?wxid="+e.wxid})}}}}).call(e,i("DuR2"))},GNDw:function(t,e){},IenS:function(t,e,i){"use strict";(function(t){e.a=r;var s=i("7+uW"),n=i("YaEn"),a=i("n6Wb"),o=i("yD8N");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.title,a=e.desc,o=e.timelineTitle,r=e.link,l=e.imgUrl,u=window.location.href,c=n.a.history.current.query.step,h=n.a.history.current.query.wxid;u&&h&&s.a.http.post(t.wxUrl+t.url.wx_share,{url:u,wxid:h}).then(function(t){s.a.wechat.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline"]})}),s.a.wechat.ready(function(){s.a.wechat.onMenuShareAppMessage({title:i,desc:a||"这里是分享朋友的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/T2afCN3o",success:function(){switch(c&&(c=parseInt(c)),c){case 0:case 1:c=2,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 2:c=3,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 3:c=4,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 4:c=5,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 5:c=6,n.a.push({path:"/",query:{wxid:h}});break;default:c=1,n.a.push({path:"/process",query:{step:c,wxid:h}})}}}),s.a.wechat.onMenuShareTimeline({title:o||a||"这里是分享朋友圈的内容",link:r||window.location.href,imgUrl:l||"https://dwz.cn/bQtHr9Iz",success:function(){switch(c&&(c=parseInt(c)),c){case 0:case 1:c=2,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 2:c=3,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 3:c=4,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 4:c=5,n.a.push({path:"/process",query:{step:c,wxid:h}});break;case 5:c=6,n.a.push({path:"/",query:{wxid:h}});break;default:c=1,n.a.push({path:"/process",query:{step:c,wxid:h}})}}})}),s.a.wechat.error(function(t){})}s.a.use(a.a),s.a.use(o.a),s.a.prototype.$wxShare=r}).call(e,i("DuR2"))},"Lwt/":function(t,e,i){"use strict";(function(t){var s=i("mzja"),n=i("/kga"),a=i("BfUi"),o=(i.n(a),i("IenS"));e.a={name:"Show",components:{Alert:s.a,XDialog:n.a},data:function(){return{now:"",invitor:this.$route.query.invitor,shareUrl:"",wxid:this.$route.query.wxid}},created:function(){this.getNowTime(),this.go(),this.getWxShare()},methods:{getWxShare:function(){var e=this;this.$http.post(t.baseUrl+t.url.get_wx_share,{}).then(function(t){e.shareUrl=t.data;var i=e.shareUrl+e.wxid;console.log(i),Object(o.a)({title:"111",desc:"222",link:i,logo:""})})},modalbox:function(){this.$refs.alertBox.style.display="block"},toggles:function(){this.$refs.alertBox.style.display="none"},getNowTime:function(){var t=new Date,e="";e=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var i=t.getHours()+":"+e;this.now=i},go:function(){var t=this,e=1,i=setInterval(function(){switch(e){case 1:(s=t.$refs.go1)&&(s.style.display="block");break;case 2:(s=t.$refs.go2)&&(s.style.display="block");break;case 3:(s=t.$refs.go3)&&(s.style.display="block");break;case 4:(s=t.$refs.go4)&&(s.style.display="block");break;case 5:(s=t.$refs.go5)&&(s.style.display="block");break;case 6:(s=t.$refs.go6)&&(s.style.display="block");break;case 7:(s=t.$refs.go7)&&(s.style.display="block");break;case 8:var s;(s=t.$refs.go8)&&(s.style.display="block");break;case 9:clearInterval(i)}e++;var n=document.getElementById("show"),a=n.scrollHeight;n.scrollTop=a},800)},jumpFun:function(){window.location.href="http://www.baidu.com"}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var s=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),n=Number(e.pageY);i,s=n}catch(t){alert(t)}});var n=document.getElementById("show");n.ontouchmove=function(t){var e=t.touches[0],i=n.scrollTop,a=n.scrollHeight-n.offsetHeight;0===i?e.clientY>s&&t.preventDefault():i===a&&e.clientY<s&&t.preventDefault()}}}}).call(e,i("DuR2"))},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("xlC/")},"data-v-78c328f6",null).exports,o=i("YaEn"),r=i("BfUi"),l=i.n(r),u=i("AYI0"),c=i.n(u),h=i("EwZo"),d=i.n(h),p=i("IenS"),v=i("3BeM"),f=i("NXWw"),m=i("Peep"),w=i("Y+qm"),g=i("yD8N"),_=i("n6Wb");Object(p.a)(o.a),s.a.use(w.a),s.a.use(v.a),s.a.use(f.a),s.a.use(m.a),s.a.use(l.a),s.a.use(d.a),s.a.use(_.a),s.a.use(g.a),s.a.use(c.a),c.a.jumpA2(),d.a.isWechat(),new s.a({el:"#app",router:o.a,components:{App:a},template:"<App/>"})},P1tG:function(t,e){},QaG2:function(t,e){},RRNw:function(t,e,i){"use strict";(function(t){var s=i("teIl");e.a={components:{Header:s.a},name:"Main",data:function(){return{title:"*",enrollment:"*",invitor:"*",wxid:this.$route.query.wxid,url:""}},created:function(){this.$vux.loading.show(),this.getApi()},methods:{getApi:function(){var e=this,i=this;i.$http.post(t.baseUrl+t.url.chatGetTitle,{}).then(function(s){s.status&&(i.$vux.loading.hide(),i.title=s.data.title,i.enrollment=s.data.enrollment,i.invitor=s.data.invitor,i.$http.post(t.baseUrl+t.url.domain_skip,{type:"C1"}).then(function(t){e.url="http://localhost:3000/mark4?wxid="+e.wxid+"&invitor="+e.invitor}))})},jumpFun:function(){window.location.href="http://www.baidu.com"},show:function(){window.location.href=this.url}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var s=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),n=Number(e.pageY);i,s=n}catch(t){alert(t)}});var n=document.getElementById("main");n.ontouchmove=function(t){var e=t.touches[0],i=n.scrollTop,a=n.scrollHeight-n.offsetHeight;0===i?e.clientY>s&&t.preventDefault():i===a&&e.clientY<s&&t.preventDefault()}}}}).call(e,i("DuR2"))},TWGN:function(t,e,i){"use strict";(function(t){e.a={name:"",data:function(){return{wxid:this.$route.query.wxid}},created:function(){this.domain()},methods:{domain:function(){var e=this;this.$http.post(t.baseUrl+t.url.domain_skip,{type:"B1"}).then(function(t){window.location.href="http://localhost:3000/mark3?wxid="+e.wxid})}}}}).call(e,i("DuR2"))},UFVa:function(t,e){},YaEn:function(t,e,i){"use strict";var s=i("7+uW"),n=i("/ocq"),a=(i("hUsp"),i("Lwt/")),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"show"}},[i("div",{staticClass:"show"},[i("div",{ref:"go1",staticClass:"ui-show-step1 step"},[t._v(t._s(t.now))]),t._v(" "),i("div",{ref:"go2",staticClass:"ui-show-step2 step"},[t._v('"'),i("span",[t._v(t._s(t.invitor))]),t._v('"邀请你加入了群聊，群聊参与人还有: 这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德')]),t._v(" "),i("div",{ref:"go3",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(0)]),t._v(" "),i("div",{ref:"go4",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(1)]),t._v(" "),i("div",{ref:"go5",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(2)]),t._v(" "),i("div",{ref:"go6",staticClass:"ui-show-step3 step clearfix"},[i("div",{staticClass:"show-left"}),t._v(" "),t._m(3)]),t._v(" "),i("div",{ref:"go7",staticClass:"ui-show-step4 step"},[t._v('\n      你被"'),i("span",[t._v("群主")]),t._v('"移除群聊\n    ')]),t._v(" "),i("div",{ref:"go8",staticClass:"ui-show-step5 step"},[i("div",{staticClass:"ui-show-cen",on:{click:t.modalbox}}),t._v(" "),i("div",{ref:"alertBox",staticClass:"ui-show-alert"},[t._m(4),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"alert-btn",on:{click:t.toggles}},[t._v("好的")])])]),t._v(" "),t._m(6)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-01"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-02"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-img-03"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-right"},[e("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),e("div",{staticClass:"show-text"},[this._v("\n          这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话。\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-title"},[this._v("提示：完成分享任务，可重新进群"),e("br"),this._v("（请分享到一个微信群）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-content"},[this._v("当前群人数"),e("span",[this._v("321")]),this._v("人")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show-footer"},[e("span",{staticClass:"show-voice"}),this._v(" "),e("span",{staticClass:"show-input"}),this._v(" "),e("span",{staticClass:"show-smile"}),this._v(" "),e("span",{staticClass:"show-plus"})])}]};var r=function(t){i("UFVa")},l=i("VU/8")(a.a,o,!1,r,null,null).exports,u=(i("mvsn"),i("TWGN")),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}})},staticRenderFns:[]};var h=function(t){i("a7u8")},d=i("VU/8")(u.a,c,!1,h,null,null).exports,p=(i("piN0"),i("Fv8J")),v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}})},staticRenderFns:[]};var f=function(t){i("6I6t")},m=i("VU/8")(p.a,v,!1,f,null,null).exports,w=(i("bdlu"),i("RRNw")),g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("Header"),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"ui-logo"}),t._v(" "),i("div",{staticClass:"ui-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{ref:"c",staticClass:"ui-num"},[t._v(t._s(t.enrollment)+"人")])]),t._v(" "),i("div",{staticClass:"ui-footer"},[i("div",{staticClass:"ui-invite"},[t._v(t._s(t.invitor)+"邀请你加入群聊")]),t._v(" "),i("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:t.show}}),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-role"},[e("p",[this._v("1.您和群里其他人都不是朋友关系，请注意隐私安全。")]),this._v(" "),e("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var _=function(t){i("GNDw")},x=i("VU/8")(w.a,g,!1,_,null,null).exports,y=i("IenS"),b={name:"Process",data:function(){return{step:this.$route.query.step}},created:function(){Object(y.a)({title:"444",desc:"555",link:"http://working.rzzc.ltd/?wxid=1",logo:""})},watch:{$route:function(t,e){this.step=this.$route.query.step}},methods:{jumpFun:function(){window.location.href="http://www.baidu.com"}},mounted:function(){var t,e=this,i=window.location.href;t={title:"title",url:i},window.history.pushState(t,"title",i),window.addEventListener("popstate",function(t){e.jumpFun()},!1),window.document.oncontextmenu=function(t){t.preventDefault()};var s=0;document.addEventListener("touchstart",function(t){try{var e=t.touches[0],i=Number(e.pageX),n=Number(e.pageY);i,s=n}catch(t){alert(t)}});var n=document.getElementById("Process");n.ontouchmove=function(t){var e=t.touches[0],i=n.scrollTop,a=n.scrollHeight-n.offsetHeight;0===i?e.clientY>s&&t.preventDefault():i===a&&e.clientY<s&&t.preventDefault()};var a=document.documentElement.clientHeight;document.getElementById("Process").style.height=a+"px"}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Process"}},[1==this.step?e("div",{staticClass:"box-one",attrs:{id:"ProcessDiv"}}):2==this.step?e("div",{staticClass:"box-two",attrs:{id:"ProcessDiv"}}):3==this.step?e("div",{staticClass:"box-three",attrs:{id:"ProcessDiv"}}):4==this.step?e("div",{staticClass:"box-four",attrs:{id:"ProcessDiv"}}):5==this.step?e("div",{staticClass:"box-five",attrs:{id:"ProcessDiv"}}):this._e()])},staticRenderFns:[]};var k=i("VU/8")(b,C,!1,function(t){i("4+/K")},null,null).exports;s.a.use(n.a);var S=new n.a({hashbang:!1,mode:"history",routes:[{path:"/",name:"",component:m},{path:"/mark2",name:"",component:d},{path:"/mark3",name:"群聊邀请",component:x},{path:"/mark4",name:"邀您加入群聊",component:l},{path:"/mark5",name:"邀您加入群聊",component:k}]});S.beforeEach(function(t,e,i){document.getElementById("titleId").innerHTML=t.name,i()}),S.afterEach(function(t,e){t.component});e.a=S},a7u8:function(t,e){},bdlu:function(t,e,i){"use strict";(function(t){i("teIl").a}).call(e,i("DuR2"))},hUsp:function(t,e,i){"use strict";(function(t){var e=i("mzja"),s=i("/kga"),n=i("BfUi");i.n(n),i("IenS"),e.a,s.a}).call(e,i("DuR2"))},kp3f:function(t,e){},mvsn:function(t,e,i){"use strict";(function(t){}).call(e,i("DuR2"))},mzja:function(t,e,i){"use strict";var s=i("/kga"),n=(s.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:s.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("kp3f")},null,null);e.a=o.exports},piN0:function(t,e,i){"use strict";(function(t){}).call(e,i("DuR2"))},rLAy:function(t,e,i){"use strict";var s=i("xNvf"),n=(s.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("0nrA")},null,null);e.a=o.exports},teIl:function(t,e,i){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-header"},[e("div",{staticClass:"ui-back"},[e("i",{staticClass:"fa fa-angle-left fa-lg",attrs:{"aria-hidden":"true"}}),this._v("\n      返回\n    ")])])}]};var n=i("VU/8")({data:function(){return{title:"这里是一个测试"}},created:function(){}},s,!1,function(t){i("Avcx")},null,null);e.a=n.exports},"xlC/":function(t,e){},z3SG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1630139c2054d26203ab.js.map