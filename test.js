var co = require('co');
var MeCab = new require('./mecab.js');
var testWord = 'すもももももももものうち';

co(function *() {
    var result = yield MeCab.parse(testWord);
    console.log(result);

    var result = yield MeCab.wakachi(testWord);
    console.log(result);

    var result = yield MeCab.parseFormat(testWord);
    console.log(result);
})();

