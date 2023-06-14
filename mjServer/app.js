let MessageMgr = require('./messageMgr')
let DB = require('./db');


let db = new DB();
let messageMgr = new MessageMgr();
db.getUserInfo().then((result) => {
    console.log('数据库巡查数据成功返回的结果是--》》', result);
}).catch((err) => {
    console.log('数据库查询失败 错误原因--》》', err)
})

messageMgr.createServer();

