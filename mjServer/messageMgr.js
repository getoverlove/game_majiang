const ws = require('nodejs-websocket');

class MessageMgr {
    constructor() {

    }
    createServer(){
        let webSocket  = ws.createServer((client)=>{
            client.on('text',(data)=>{
                console.log('客户端发来了消息-->>',data);
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
}

module.exports = MessageMgr;