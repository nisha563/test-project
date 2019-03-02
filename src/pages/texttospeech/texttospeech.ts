import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx'
/**
 * Generated class for the TexttospeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-texttospeech',
  templateUrl: 'texttospeech.html',
})
export class TexttospeechPage {
text: string;
  rate: number;
  locale: string
  constructor(public navCtrl: NavController,
  private tts: TextToSpeech,
    public navParams: NavParams) {
  this.text = 'Initial text';
    this.rate = 1;
    this.locale = 'en-US';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TexttospeechPage');
  }
playText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
getspeech(){
this.tts.speak('Hello World')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log("errorsgot",reason));
    console.log('ionViewDidLoad TexttospeechPage');
  }





}
