const CryptoJS = require('crypto-js');
const cache = require('web-storage-cache');
// /**
//  * cookie 类
//  */
// class Cookie {
//   constructor(user) {
//     this.info = user;
//     this.key = "__dhkj__";
//   }
//   /**
//    * 获取cookie
//    */
//   getCookie() {
//     var wsCache = new cache();
//     let val = wsCache.get('_dianhai_');
//     // let decrypted = CryptoJS.AES.decrypt(val, this.key, {
//     //   mode: CryptoJS.mode.ECB,
//     //   padding: CryptoJS.pad.Pkcs7
//     // });
//     // decrypted = CryptoJS.enc.Utf8.stringify(decrypted); // 转换为 utf8 字符串
//     return val;
//   }
//   /**
//    * 写入cookie
//    */
//   setCookie() {
//     var wsCache = new cache();
//     // var encryptedData = CryptoJS.AES.encrypt(this.info, this.key, {
//     //   mode: CryptoJS.mode.ECB,
//     //   padding: CryptoJS.pad.Pkcs7
//     // });
//     wsCache.set('_dianhai_', this.info, {
//       exp: 7200
//     });
//   }
// }
const Cookie = {
  info: {},
  /**
   * 获取cookie
   */
  getCookie(name) {
    var wsCache = new cache();
    let val = '';
    if(name){
      val = wsCache.get(name);
    }else{
      val = wsCache.get('_dianhai_');
    }

    // let decrypted = CryptoJS.AES.decrypt(val, this.key, {
    //   mode: CryptoJS.mode.ECB,
    //   padding: CryptoJS.pad.Pkcs7
    // });
    // decrypted = CryptoJS.enc.Utf8.stringify(decrypted); // 转换为 utf8 字符串
    return val;
  },
  /**
   * 写入cookie
   */
  setCookie(name) {
    var wsCache = new cache();
    // var encryptedData = CryptoJS.AES.encrypt(this.info, this.key, {
    //   mode: CryptoJS.mode.ECB,
    //   padding: CryptoJS.pad.Pkcs7
    // });
    if(name){
      wsCache.set(name, this.info, {
        exp: 3600
      });
    }else{
      wsCache.set('_working_', this.info, {
        exp: 3600
      });
    }

  },
  removeCookie(name) {
    var wsCache = new cache();
    if(name){
      wsCache.delete(name);
    }else{
      wsCache.delete('_working_');
    }

  }
}

export default Cookie;
