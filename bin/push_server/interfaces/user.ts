import {Device} from './device';
import {Address} from './address';
export interface User{
  firstName?:string,
    lastName?:string,
    email?:string,
    authType?:string,
    uid?:string,
    emailVerified?:boolean,
    phoneNumber?:string,
    address?:Address,
    gpsLocation?:any,
    deviceIDCurrent?:Location,
    deviceIDHistory?:Location,
    lastAppOpenTime?:Date,
    lastActivityTime?:Date,
    device?:Array<Device>,
    currentDevices?:Array<Device>
};
