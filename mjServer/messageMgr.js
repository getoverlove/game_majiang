const ws = require('nodejs-websocket');

class MessageMgr {
    static getInstance(){
        if(MessageMgr.instance){
            return MessageMgr.instance;
        }else {
            MessageMgr.instance = new MessageMgr();
            return MessageMgr.instance;
        }
    }
    constructor() {

    }
    createServer(){
        let webSocket  = ws.createServer((client)=>{
            client.on('text',(data)=>{
                console.log('客户端发来了消息-->>',data);
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
        })

        webSocket.listen(3001);
    }
    responseMessage(type,data,client){
        console.log('发来的消息类型是--->>>',type);
        console.log('发来的数据是--->>>',data);
        switch (type) {
            case'login':
                global.instance.userMgr.responseUserLoginMessage(data,client).then((result)=>{
                    console.log('登陆返回的是信息是',result);
                    this.sendMessage(type,result,client)
                }).catch((err)=>{
                    console.log('未查到此玩家',err);
                })
                break;
        }
    }
    sendMessage(type,data,client){
        let tmpData = {
            type:type,
            data:data,
        }
        client.send(JSON.stringify(tmpData));
    }
}
global.instance.messageMgr = MessageMgr.getInstance();
module.exports = MessageMgr;