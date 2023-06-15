import MessageMgr from "../network/meessageMgr"
import userData from "./userData"
import UserData from "./userData"
const globalMgr = {
    messageMgr:new MessageMgr,
    userData:UserData.getInstance(),
    mainScene:undefined
}

export default globalMgr