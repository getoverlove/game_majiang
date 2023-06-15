class userData{
    static getInstance(){
        if(userData.instance){
            return userData.instance
        }else{
             userData.instance = new userData();
             return userData.instance;
        }
    }
    constructor(){
        this._id = undefined;
        this._nickName = undefined;
        this._houserCardCount = undefined;
        this._roomID = undefined;
    } 
}

export default userData;