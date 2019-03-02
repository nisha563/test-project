/**************************** PUSH SERVER CODE *********************************
 * DEVELOPED BY BOON SOFTWARE PRIVATE LIMITED ******************
 * *****************************************************************************/


import * as FirebaseApp from 'firebase/app';
import * as firebase from 'firebase';
import * as env  from './config/environment'
import "firebase/database";
import 'firebase/storage';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { observe } from "rxjs-observe";
//import {AngularFireDatabase} from 'angularfire2/database';
//firebase.auth().languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
//
let appName = "RestaurantManagement";
let pathSeparator = "/";
let userNodeName = "users";
let emailVerifiedNodeName = "emailVerified";
//import * as XMLHttpRequest from 'xmlhttprequest';
//let xhr = new XMLHttpRequest();
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
// Initialize the Firebase application.
// --
// NOTE: Obviously, I'm obfuscating my app credentials here.
let app: FirebaseApp.app.App = FirebaseApp.initializeApp(env.environment.firebaseConfig);
let  db: firebase.database.Database = app.database();
firebase.auth().useDeviceLanguage();


var admin = require('firebase-admin');
var serviceAccount = require('./service_key/asansolcollege-6bdb4-8e52ac6b3349.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https:///asansolcollege-6bdb4.firebaseio.com'
});

let userPath = appName + pathSeparator + userNodeName;

let nodeRef = db.ref(userPath);
//Search through all the nodes for the device tokens
nodeRef.once("value",(snapshot) => {

  snapshot.forEach((childSnapshot)=>{
    childSnapshot.ref.child('devices').once("value",(grandChildSnapshot)=>{
      let val = grandChildSnapshot.val();
      let key = grandChildSnapshot.key;
      if(val){
        for (let key in val) {
          let json = val[key];
          let token = json["token"];

          console.log("saved token:",token);

          let message = {
            data: {
              score: '850',
            },
            token: token
          };

          // Send a message to the device corresponding to the provided
          // registration token.
          admin.messaging().send(message)
            .then((response) => {
              // Response is a message ID string.
              console.log('Successfully sent message:', response);
            })
            .catch((error) => {
              console.log('Error sending message:', error);
            });






        }
      }
    });

  });


});



//
//
// Add firebase query code here either based on email or name or any other criteria
// This registration token comes from the client FCM SDKs.
let registrationToken = "fzG8wXrFezM:APA91bEv0sBXzUtDwAxW_rl5jdZPabEIYEEbuQDfYtlZgzzlGB3TAEYUGggj9Vcoi7wd0Vo_8606aevQobKisLebMVv4wPiDxOxoYV2iFKa-vmZEwiJtedyuDTCu-uPofQ3PCeAY21_O";
// See documentation on defining a message payload.

