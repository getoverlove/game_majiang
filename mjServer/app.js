global.instance = {};

let MessageMgr = require('./messageMgr')
let DB = require('./db');
let UserMgr = require('./userMgr')


global.instance.messageMgr.createServer();


