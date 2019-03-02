import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { environment } from '../environments/environment';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Firebase } from '@ionic-native/firebase';
import { Http } from '@angular/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx'
export const firebaseConfig = environment.firebaseConfig;
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
 AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
      File,
    Camera,
     TextToSpeech,
  AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
