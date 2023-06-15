import globalMgr from '../common/golbleMgr'

cc.Class({
    extends: cc.Component,

    properties: {
        idLabel: cc.Label,
        nickName: cc.Label,
        houseCardCount: cc.Label,
        createRoomPrefab:cc.Prefab,
    },



    onLoad() {
        this.init();
    },

    start() {

    },
    init() {
        this.idLabel.string = "ID:" + globalMgr.userData._id;
        this.nickName.string = globalMgr.userData._nickName;
        this.houseCardCount.string = globalMgr.userData._houserCardCount;
    },
    onButtonClick(event, custom) {
        switch (custom) {
            case '创建':
                console.log('创建房间按钮点击了');
                let createRoomNode = cc.instantiate(this.createRoomPrefab);
                this.node.addChild(createRoomNode);
                break;
            case '加入':
                console.log('加入房间按钮点击了');
                break;

            default:
                break
        }
    }

    // update (dt) {},
});
