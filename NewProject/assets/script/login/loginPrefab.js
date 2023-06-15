import globalMgr from '../common/golbleMgr'
cc.Class({
    extends: cc.Component,
    properties: {

    },



    onLoad() {

    },

    start() {

    },
    onButtonClicket(target, custom) {
        console.log('点击的按钮是', custom);
        switch (custom) {
            case '游客登陆':
                console.log('游客登陆按钮被点击了');
                break;
            case '微信登陆':
                console.log('微信登陆按钮被点击了');
                break;
            case '测试1登陆':
                globalMgr.messageMgr.sendLoginMessage(100000).then((result)=>{
                    console.log('promise回调回来的参数是:',result);
                    globalMgr.userData._id = result.id;
                    globalMgr.userData._nickName = result.nickName;
                    globalMgr.userData._houserCardCount = result.houseCardCount;

                   this.node.parent.emit('进入大厅界面',null);
                    
                    
                }).catch((err)=>{
                    console.log('出现错误');
                })
                break;
            case '测试2登陆':
                globalMgr.messageMgr.sendLoginMessage(100001);
                break;
            case '测试3登陆':
                globalMgr.messageMgr.sendLoginMessage(100003);
                break;
            case '测试4登陆':
                globalMgr.messageMgr.sendLoginMessage(100004);
                break;
        }
    }
    // update (dt) {},
});
