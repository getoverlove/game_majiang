class User {
    constructor(id,nickNmae,houseCardCount,client) {
        this._id = id;
        this._nickName = nickNmae;
        this._houseCardCount = houseCardCount;
        this._client = client;
        this.init(this._client);
    }
    getPlayerInfo(){
        let tmpData = {
            id:this._id,
            nickName:this._nickName,
            houseCardCount:this._houseCardCount,
        }
        return tmpData;
    }
    init(client){
        client.on('text',(data)=>{
            console.log('玩家类---》》》客户端发来了消息-->>',data);
            let message = JSON.parse(data);
            let type = message.type;
            let tmpData = message.data;

            this.responseMessage(type,tmpData,client);
        })
        client.on('close',()=>{
            console.log('网络连接以断开');
        })
        client.on('error',()=>{
            console.log('网络连接出错');
        })
    }
    responseMessage(type,data,client){
        switch (type) {
            case'login':
                global.instance.userMgr.responseUserLoginMessage(data,client).then((result)=>{
                    console.log('登陆返回的是信息是',result);
                    //this.sendMessage(type,result,client)
                }).catch((err)=>{
                    console.log('未查到此玩家',err);
                })
                break;
        }
    }
}

module.exports = User;