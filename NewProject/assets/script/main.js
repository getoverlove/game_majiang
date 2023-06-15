import globalMgr from './common/golbleMgr'

cc.Class({
    extends: cc.Component,

    properties: {
        loginPrefab: cc.Prefab,
        hallPrefab:cc.Prefab,
        gameNode:cc.Prefab,
    },



    onLoad() {
        this.node.on('进入大厅界面',()=>{
            this.inistaceNode(this.hallPrefab);
        })
        this.node.on('进入游戏界面',()=>{
            this.inistaceNode(this.gameNode);
        })

        this.inistaceNode(this.loginPrefab);
        globalMgr.messageMgr.connectServer().then(()=>{
            console.log('网络连接成功');
            
        }).catch(()=>{
            console.log('网络连接失败');
        })
        globalMgr.mainScene = this.node;
    },
    inistaceNode(prefab){
        if(this.currentNode){
            this.currentNode.destroy();
        }
        let node = cc.instantiate(prefab);
        this.currentNode = node;
        this.node.addChild(node);
    },

    start() {

    },

    // update(dt) { },
});
