class MessageMgr{
    constructor(){
        this._ws = undefined;
        this._callBackMap = {};
    };
    connectServer(){
        let self = this;
        return new Promise((resolve,reject)=>{
            let ws = new WebSocket("ws://124.222.62.205:3001");    
            ws.onopen = function (evt) {
                console.log("与服务端连接成功");
                
                resolve();
            };
            ws.onmessage = function (data) {
                let message = JSON.parse(data.data);
                console.log('解析的数据是',message);
                let type = message.type;
                let messageData = message.data;
                
                self.rspMessage(type,messageData)
            };
    
            ws.onclose = function (){
                console.log("与服务端断开连接");
            };
            ws.onerror = function(){
                console.log('网络连接失败');
                reject();
            }
            this._ws = ws;
        })    
    }
    rspMessage(type,messageData){
        let cb = this._callBackMap[type]
        if(cb){
            cb(messageData);
            
        }
    }
    sendLoginMessage(id){
        return new Promise((resolve,reject)=>{
            this.sendMessage('login',id,(result)=>{
                if(result.err){
                    reject(result.err)
                }else{
                    resolve(result);
                }
            })
        })   
    }

    sendCreateRoomMessage(roomData){
        return new Promise((resolve,reject)=>{
            this.sendMessage('create_room',roomData,(result)=>{
                if(result.err){
                    reject(result.err)
                }else{
                    resolve(result);
                }
            })
        })
    }
    sendMessage(type,data,cb){
        let tmpData = {
            type:type,
            data:data,
        }
        this._callBackMap[type] = cb;
        this._ws.send(JSON.stringify(tmpData));
    }
}
export default MessageMgr