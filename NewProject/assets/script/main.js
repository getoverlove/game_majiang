cc.Class({
    extends: cc.Component,

    properties: {
        loginPrefab: cc.Prefab,

    },



    onLoad() {
        let loginNode = cc.instantiate(this.loginPrefab);
        this.node.addChild(loginNode);
        
        var ws = new WebSocket("ws://127.0.0.1:3001");

        ws.onopen = function (evt) {
            console.log("与服务端连接成功");
            ws.send("Hello WebSockets!");
        };

        ws.onmessage = function (data) {
            console.log("服务端发来了消息: " + data);
            ws.close();
        };

        ws.onclose = function (){
            console.log("与服务端断开连接");
        };

    },

    start() {

    },

    update(dt) { },
});
