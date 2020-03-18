import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
//import {  AnimationController } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { trigger, style, animate, transition, group, query, animateChild } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public displayAchievement: boolean = false;
  public segment:string="home";
  public file: MediaObject ;
  public play_status:boolean;
    constructor(
     private toastCtrl: ToastController,
     private media: Media,
     private router:Router,
     private nativeAudio: NativeAudio
      ){
        this.file  = this.media.create('https://firebasestorage.googleapis.com/v0/b/ponder-de3b1.appspot.com/o/mvzwPZlfx7hhvl1F7NhtSFOCtuJ2%2Faudio%2F1580883857616_Save%20your%20career%20from%20being%20spoiled.mp3?alt=media&token=f3f4ece9-59d2-470e-9659-bbc9256bff9c');
        console.log(this.file);
        this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

     this.file.onSuccess.subscribe(() => console.log('Action is successful'));

     this.file.onError.subscribe(error => console.log('Error!', error));
        let va = "https://firebasestorage.googleapis.com/v0/b/ponder-de3b1.appspot.com/o/mvzwPZlfx7hhvl1F7NhtSFOCtuJ2%2Faudio%2F1580883857616_Save%20your%20career%20from%20being%20spoiled.mp3?alt=media&token=f3f4ece9-59d2-470e-9659-bbc9256bff9c";
    // }).catch(e=>{
    //   console.log(e);
    // });
    // this.nativeAudio.preloadComplex('uniqueId2', 'https://firebasestorage.googleapis.com/v0/b/ponder-de3b1.appspot.com/o/mvzwPZlfx7hhvl1F7NhtSFOCtuJ2%2Faudio%2F1580883857616_Save%20your%20career%20from%20being%20spoiled.mp3?alt=media&token=f3f4ece9-59d2-470e-9659-bbc9256bff9c', 1, 1, 0).then(onSuccess=>{
      
    // }).catch(e=>{
    //   console.log(e);
    // });
    // this.nativeAudio.play('uniqueId1').then(onSuccess=>{
      
    // }).catch(e=>{
    //   console.log(e);
    // });
    // // can optionally pass a callback to be called when the file is done playing
    // this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
    
    // this.nativeAudio.loop('uniqueId2').then(onSuccess=>{
      
    // }).catch(e=>{
    //   console.log(e);
    // });
    
    // this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess=>{
      
    // }).catch(e=>{
    //   console.log(e);
    // });
    
    // this.nativeAudio.stop('uniqueId1').then(onSuccess=>{
      
    // }).catch(e=>{
    //   console.log(e);
    // });
    
    // this.nativeAudio.unload('uniqueId1').then(onSuccess=>{
      
    // }).catch(e=>{
    //   console.log(e);
    // });

  }
play(){
this.play_status =!this.play_status
if(this.play_status){
  console.log("play");
  let duration = this.file.getDuration();
console.log(this.file,duration);
  this.file.play();
}
else{
  console.log("pause");
  this.file.pause();
}
}

animation(){
  this.router.navigateByUrl('/ionic-animations');
}
  test(){

    this.toastCtrl.create({
      message: 'Achievement unlocked!',
      duration: 2000
    }).then((toast) => {
      toast.present();
    });

    this.displayAchievement = true;

    setTimeout(() => {
      this.displayAchievement = false;
    }, 3000);

  }

}
