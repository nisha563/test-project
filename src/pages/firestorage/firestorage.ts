import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { map } from 'rxjs/operators';

//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the FirestoragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface FileUpload{
  key: string;
    name: string;
    url: string;
    file: File;
};
@IonicPage()
@Component({
  selector: 'page-firestorage',
  templateUrl: 'firestorage.html',
})
export class FirestoragePage {
private basePath = '/uploads';
 fileUploads: any[];
 selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  constructor(public navCtrl: NavController,
    private db: AngularFireDatabase,
//private transfer: FileTransfer,
    private file: File,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirestoragePage');
 this.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
console.log("firestoreg");

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.name}`).put(fileUpload.file);
console.log("firestoreg");
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        console.log(snapshot);
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.name;
          this.saveFileData(fileUpload);
        });
      }
    );
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }

  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
 deleteUpload(fileUpload) {
    this.deleteFileUpload(fileUpload);
  }
 selectFile(event) {
    const file = event.target.files.item(0);
 console.log("select file");
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
 console.log("file",this.selectedFiles);
    } else {
      alert('invalid format!');
    }
   this.upload(file);
  }

  upload(files) {
    let file = this.selectedFiles.item(0);
    console.log(file,"filelist",FileList,"selectedfiles",this.selectedFiles);
    this.selectedFiles = undefined;
//  this.currentFileUpload.file = file;
console.log("file",this.currentFileUpload,file);
this.currentFileUpload=files;

//  this.currentFileUpload = new FileUpload(file);
    this.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}
