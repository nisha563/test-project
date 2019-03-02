import {Location} from './location'

export interface Device{
  name?:string,
  uuid?:string
  deviceID?:string,
    serialNumber?:string,
    deviceName?:string,
    modelNumber?:string,
    modelName?:string,
    deviceType?:string,
    spaceLeft?:any,
    batteryStatus?:any,
    operatingSystemplatform?:any,
    operatingSystemVersion?:any,
    appVersion?:any,
    deviceIP?:any,
    deviceCarrierIP?:any,
    gpsLocations?:Location,
    gpsLocationCurrent?:Location
  gpsLocationLast?:Location
  firebaseToken?:string,
    notificationBadgeCount?:number,
    manufacturer?:string,
    authType?:string,
    isAuthorized?:string
};
