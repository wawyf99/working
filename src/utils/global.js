/**
 * 全局接口请求地址类
 */
// 正式环境
global.baseUrl = "http://working.api.rzzc.ltd";
//本地环境
//global.baseUrl = "http://localhost:3030";
//微信分享域名
global.wxUrl = 'http://working.rzzc.ltd';
//微信分享IOS链接处理;
global.appEntryUrl = '';

//api全局路由
global.url = {
  chatGetTitle: "chart/get-title",

  wx_share: "/wechat/wxinfo",  //获取微信相关信息
};

global.page = {
  size: 20
}
