import globalMgr from '../common/golbleMgr'
cc.Class({
    extends: cc.Component,

    properties: {
        houseNumber:cc.Label,
    },

   

    onLoad () {
        // console.log(this.houseNumber);
        this.houseNumber.string = '房间号:' + globalMgr.userData._roomID
    },

    start () {

    },

    // update (dt) {},
});
