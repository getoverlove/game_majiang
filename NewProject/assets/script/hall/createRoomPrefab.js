import globalMgr from '../common/golbleMgr'

cc.Class({
    extends: cc.Component,

    properties: {
        
    },



    onLoad () {
        this.roomData = {
            playerNumber:4,         //玩家人数
            gameNumber:4,           //游戏局数
        }
    },

    start () {

    },

    onButtonClicked(event,custom){
        switch(custom){
            case"关闭":
                this.node.destroy();
            break;
            case"确定":
                let roomData = undefined;
                globalMgr.messageMgr.sendCreateRoomMessage(this.roomData).then((data)=>{
                    console.log('创建房间成功',data);
                    globalMgr.userData._roomID = data.roomID;
                    console.log('存储房间号为',globalMgr.userData._roomID);
                    globalMgr.mainScene.emit('进入游戏界面',null);
                }).catch(()=>{
                    console.log('创建房间失败');
                })
                this.node.destroy();
            break;
        }
    }

    // update (dt) {},
});
