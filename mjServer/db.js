let mysql = require('mysql');

class Db {
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
    getUserInfo(){
        return new Promise((resolve,reject)=>{
            this._mysql.query('select * from b_users',(err,result)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = Db;