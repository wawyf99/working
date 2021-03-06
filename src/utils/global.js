/**
 * 全局接口请求地址类
 */
// 正式环境
global.baseUrl = "https://working.api.ssmulu.com";
global.wxUrl = "https://wx.api.ssmulu.com";
//本地环境
/*global.baseUrl = "http://localhost:3030";
global.wxUrl = "http://localhost:3031";*/
//微信分享IOS链接处理;
//global.appEntryUrl = '';

//api全局路由
global.url = {
  chatGetTitle: "/chat/get-title",
  get_wx_share: '/chat/getWxShare',
  domain_skip: '/chat/domainSkip',
  wx_share: "/wechat/wxinfo",  //获取微信相关信息
};

global.public = {
  Wxshare : '',
  WxConfig : '',
  step : '',
};

global.page = {
  size: 20
}
