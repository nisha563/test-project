import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/storage';
//import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {AngularFirestore} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import {take,map,combineAll} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { startWith } from 'rxjs/operators';
// or
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { interval } from 'rxjs/observable/interval';
//export const firebaseConfig = environment.firebaseConfig;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 appName:any = 'DemoData';
 userNodePath:string = null;
  pathSeparator:string = "/";
  imageFile:any;
imageFilePath: File;
userNode:any;
  require: any;
  fromDate:string;
  toDate:string;
  img:Array<any>=[];
  itemList:Array<any>=[];

  private userNodeRef:any;
  constructor(public navCtrl: NavController,
    public afDB: AngularFireDatabase,
private file: File,

private camera: Camera
  ) {
  this.userNodePath =this.appName+this.pathSeparator;
 this.userNode = this.afDB.database.ref(this.userNodePath);
  this.userNodeRef = firebase.storage().ref('/imges/');
console.log(this.userNodeRef);
  }
uploadToFirebase(){
var metadata = {
  contentType: 'image/jpeg',
};
  console.log("uploadToFirebase");
      this.userNodeRef = firebase.storage()
                        .ref("");
this.userNode.push(this.imageFilePath);
      let uploadTask = this.userNodeRef.putString(this.imageFilePath);
      uploadTask.on(
        "state_changed",
        (_snap: any) => {
          console.log(
            "progess " +
              (_snap.bytesTransferred / _snap.totalBytes) * 100
          );

        });
}

   selectfile(){



   }
rxjsfun(){
const sourceOne = of(1, 2, 3);
const sourceTwo = of(4, 5, 6);
const example = sourceOne.pipe(concat(sourceTwo));
const subscribe = example.subscribe(val =>
  console.log('Example: Basic concat:', val)
);
const One = of(1,2,3);
const Two = of(4, 5, 6);
const ex = One.pipe(concat(Two));
let startwith=One.pipe(startWith(3));
let exle=startwith.subscribe(dt=>{
console.log(dt);
});
const sub = ex.subscribe(val =>
  console.log('Example: Basic concat:', val)
);

//** interval in obj ************
const source = interval(1000).pipe(take(2));
//map each emitted value from source to interval observable that takes 5 values
const exple = source.pipe(
  map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5)))
);
const combined = example.pipe(combineAll());

const sb = combined.subscribe(val => console.log(val));
//*******from operater in obj*********
const promiseSource = from([1,2,3,4,5]);
let filt=promiseSource.pipe(filter(dt=>dt%2===0));
let con=filt.subscribe(pm=>{
console.log(pm);
});


}

ionViewDidLoad() {
  this.userNode.once("value",(snapshot)=>{
            if(snapshot.val()){
 snapshot.forEach((childSnapshot)=> {
this.img.push(childSnapshot.val());
 });
            }
            });
this.rxjsfun();
}
fromdate($event){
this.fromDate=this.fromDate;
console.log(this.fromDate);
}
todate($event){
this.toDate=this.toDate;
console.log(this.toDate);

}
add(){
let params={
"date":this.toDate,
  "item":" roll"
}

this.userNode.push(params);

}

getinfo(){
//this.itemList.length=0;
console.log(this.fromDate);
this.userNode.orderByChild("date").startAt(this.fromDate).once("value",(snapshot)=>{

console.log(snapshot.val());
snapshot.forEach ((childSnapshot)=> {
//this.itemList.push(childSnapshot.val());
  let childRef = childSnapshot.ref;
childRef.orderByChild("date").endAt(this.toDate).once("value",(snap)=>{
let param={
  item:snap.val().item,
no_of_plate:1
}
let index:number=0;
index =this.index(this.itemList,snap.val().item);
if(index<0){
  this.itemList.push(param);
}
else if(index>=0){
this.itemList[index].no_of_plate+=1;

}
  console.log(snap.val());
snap.forEach ((child)=> {

});
});

});
});
console.log(this.itemList);

}
index(orderList:any,itemlist:any){
 var data = orderList;
    var index = -1;
 let filteredObj = data.find(function(item, i){
                // If item index of orderlist is same as of item **********
        if(item.item == itemlist){
                    //**if plate type is equel to plate type of item********
            index = i;
        }
      });
 return index;

}
upload(){

this.navCtrl.push("FirestoragePage");
}
genpdf(){

this.navCtrl.push("PdfgenPage");
}

gentext(){

this.navCtrl.push("TexttospeechPage");
}



}
