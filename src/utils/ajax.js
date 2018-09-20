import axios from 'axios';
import router from '../router/index'
import qs from 'qs'
import cookie from "./cookie";

axios.defaults.baseURL = global.baseUrl;
axios.defaults.timeout = 50000;

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// http请求拦截器
axios.interceptors.request.use((config) => {
  let tokens = null;
  //   // 获取存储在cookie中的值，如果存在则在每个ajax请求的头部加上
  //   document.cookie.split(';').forEach((e, i) => {
  //     if (e.split('=')[0].trim() === 'token') tokens = e.split('=')[1];
  //   });
  //   if (tokens && typeof tokens === 'string') config.headers.Authorization = tokens;
  //post 清秀序列表
  //   if (config.method == 'post') {
  //     config.data = qs.stringify(config.data);
  //   }
  // console.log(config.headers['Content-Type']);
  let info = cookie.getCookie();
  var _url = window.location.href;
  if(_url.indexOf('friendsCircle') <= -1){
    if (!info) {
      router.push({
        path: "/"
      });
    }
  }

  //上传文件不转换参数
  if (config.headers['Content-Type'] != "multipart/form-data") {
    //config.data = new URLSearchParams(config.data);
    //config.data = new URLSearchParams(qs.stringify(config.data));
    config.data = qs.stringify(config.data);
  }
  return config;
}, (err) => {
  console.log('http请求拦截器', err);
  return Promise.reject(err);
});

// http响应拦截器
axios.interceptors.response.use((config) => {
  if (config.data.code == -1) {
    router.push({
      path: '/'
    });
  }
  return config;
}, (err) => {
  if (err.response) {
    // 根据返回的错误状态码，跳转到对应的缺省页面
    let handle = {
      404: 'http://www.aylan.me/404',
      501: 'http://www.aylan.me/error'
    };
    if (!handle[err.response.status] === undefined) router.push(handle[err.response.status]);
  }
  console.log('http响应拦截器', err);
  // 返回对应的错误信息，可以在axios中的catch中继续处理
  return Promise.reject(err.response.data);
});

const ajax = {
  /*
   ** get(url,data).then((res) => { console.log(res) });
   **
   ** @params url——请求地址（必填），data——请求参数（非必填）
   ** @params res——服务器返回结果
   */
  get: function (url, data) {
    if (!url || typeof url !== 'string') throw new Error('必须传入字符串类型的url地址');
    let formData = {
      url: url,
      method: 'GET',
      // 设置请求头为application/x-www-form-urlencoded
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // 将序列化参数转换为字符串，使用这种方法需要先引入qs，也可以直接用JSON.stringify()进行转换
      paramsSerializer: function (params) {
        return qs.stringify(params, {
          arrayFormat: 'brackets'
        });
      },
      // 设置跨域请求为true，如果是cros同源请求的话，则可以不用加此项
      withCredentials: true
    };
    // 判断data的类型是否为Object
    if (data && typeof data !== 'object') throw new Error('data为对象类型');
    // 判断参数是否存在，存在则传入方法中
    if (data && typeof data === 'object') formData.params = data;
    // 使用Promise方法异步处理请求
    return new Promise(function (resolve, reject) {
      axios(formData).then(function (res) {
        // 后端返回的数据挂载在res.data内
        resolve(res.data);
      }).catch(function (err) {
        // 报错处理
        console.log('get', err);
      })
    });
  },

  /*
   ** post(url,data).then((res) => { console.log(res) });
   **
   ** @params url——请求地址（必填），data——请求参数（非必填）
   ** @params res——服务器返回结果
   */
  post: function (url, data) {
    if (!url || typeof url !== 'string') throw new Error('必须传入字符串类型的url地址');
    let formData = {
      url: url,
      method: 'POST',
      // 设置请求头为application/json
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      // 设置跨域请求为true，如果是cros同源请求的话，则可以不用加此项
      withCredentials: true
    };
    // 判断data的类型是否为Object
    if (typeof data !== 'object') throw new Error('data为对象类型');
    // 判断参数是否存在，存在则传入方法中
    if (data && typeof data === 'object') formData.data = data;
    // 使用Promise方法异步处理请求
    return new Promise(function (resolve, reject) {
      axios(formData).then(function (res) {
        // 后端返回的数据挂载在res.data内
        resolve(res.data);
      }).catch(function (err) {
        // 报错处理
        console.log('post', err);
      })
    });
  },
  /*
   ** jsonp(url).then((res) => { console.log(res) });
   **
   ** @params url——请求地址（必填）
   ** @params res——服务器返回结果
   */
  jsonp: function (url) {
    // 判断url是否存在以及是否为字符串
    if (!url || typeof url !== 'string') throw new Error('必须传入字符串类型的url地址');
    return new Promise((resolve, reject) => {
      // 处理返回的结果
      window.jsonCallBack = (result) => {
        resolve(result)
      }
      // 在页面创建script标签，并将src设置为请求地址，取回数据之后移除script标签
      let JSONP = document.createElement("script");
      JSONP.type = "text/javascript";
      JSONP.src = `${url}&callback=jsonCallBack`;
      document.getElementsByTagName("head")[0].appendChild(JSONP);
      setTimeout(() => {
        document.getElementsByTagName("head")[0].removeChild(JSONP)
      }, 500)
    })
  },
  /*
   ** upload(url,data).then((res) => { console.log(res) });
   **
   ** @params url——请求地址（必填）,data——请求参数，FormData对象（必填）
   ** @params res——服务器返回结果
   */
  upload: function (url, data) {
    console.log("data", url);
    // 对url以及data进行类型检测
    if (!url || typeof url !== 'string') throw new Error('必须传入字符串类型的url地址');
    //if (!data || typeof data !== 'function') throw new Error('内容不能为空');
    let formData = {
      url: url,
      method: 'POST',
      // 设置请求头为multipart/form-data
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data,
      // 设置跨域请求为true
      withCredentials: true
    };
    return new Promise(function (resolve, reject) {
      console.log(formData);
      axios(formData).then(function (res) {
        // 后端返回的数据挂载在res.data内
        resolve(res.data)
      }).catch(function (err) {
        // 报错处理
        console.log('upload', err);
      })
    });
  }
}
// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", {
      value: ajax
    });
  }
};
