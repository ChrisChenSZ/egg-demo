'use strict';
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

exports.loginToken = function(data, expires = 7200) {
  const exp = Math.floor(Date.now() / 1000) + expires;
  const cert = fs.readFileSync(
    path.join(__dirname, '../public/rsa_privatge_key.pem')
  ); // 私钥，看后面生成方法
  const token = jwt.sign({ data, exp }, cert, { algorithm: 'RS256' });
  return token;
};
