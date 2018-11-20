const crypto = require('crypto');

const until = {
  Rand(randomFlag, min, max){
    var str = "",
      pos = "",
      range = min,
      arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // 随机产生
    if(randomFlag){
      range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
      pos = Math.round(Math.random() * (arr.length-1));
      str += arr[pos];
    }
    return str;
  },

  //加密
  aesEncrypt(encrypted, key){
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  },

  //解密
  aesDecrypt(encrypted, key){
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  },

  //文字解码
  wordsDecode(words){
    return unescape(words.replace(/\\u/g, '%u'));
  }
}

module.exports = until;
