import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {  AnimationController } from '@ionic/angular';
import { trigger, style, animate, transition, group, query, animateChild } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public displayAchievement: boolean = false;
  public segment:string="home";
  constructor(
    private toastCtrl: ToastController
  ) {}

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
