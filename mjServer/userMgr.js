let user = require('./user')

class UserMgr {
    static getInstance(){
        if(UserMgr.instance){
            return UserMgr.instance;
        }else {
            UserMgr.instance = new UserMgr();
            return UserMgr.instance;
        }
    }
    constructor() {
        this._userList = [];
    }
    responseUserLoginMessage(id,client){
        return new Promise((resolve, reject) => {
            for (let i = 0; i < this._userList.length ; i++) {
                let player = this._userList[i];
                if(player._id === id){
                    resolve(player.getPlayerInfo());
                    return;
                }
            }
            global.instance.db.getUserInfo(id).then((result)=>{
                if(result.length > 0){
                    let id = result[0].user_id;
                    let nickName = result[0].user_name;
                    let houseCardCount = result[0].user_house_card_count;
                    let player = new user(id,nickName,houseCardCount,client);
                    this._userList.push(player);
                    resolve(player.getPlayerInfo());
                }else{
                    reject({err:'数据库未有此玩家信息'});
                }
            }).catch((err)=>{
                console.log('为查询到此玩家',err);
            })

        })
        // global.instance.db.getUserInfo(id).then((result)=>{
        //     console.log('获取玩家信息成功',result);
        // }).catch((err)=>{
        //     console.log('为查询到此玩家',err);
        // })
    }
}
global.instance.userMgr = UserMgr.getInstance();
module.exports = UserMgr;