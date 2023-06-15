let mysql = require('mysql');

class Db {
    static getInstance(){
        if(Db.instance){
            return Db.instance;
        }else {
            Db.instance = new Db();
            return Db.instance;
        }
    }
    constructor() {
        let Mysql = mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            password : 'ax109304*',
            database : 'b_majiang'
        })
        Mysql.connect();
        console.log('数据库连接成功');
        this._mysql = Mysql;
    }
    getUserInfo(id){
        return new Promise((resolve,reject)=>{
            this._mysql.query('select * from user_info',(err,result)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}
global.instance.db = Db.getInstance();
module.exports = Db;