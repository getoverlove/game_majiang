class User {
    constructor(id,nickNmae,houseCardCount) {
        this._id = id;
        this._nickName = nickNmae;
        this._houseCardCount = houseCardCount;
    }
    getPlayerInfo(){
        let tmpData = {
            id:this._id,
            nickName:this._nickName,
            houseCardCount:this._houseCardCount,
        }
        return tmpData;
    }
}

module.exports = User;