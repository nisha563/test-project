import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  Platform } from 'ionic-angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

/**
 * Generated class for the PdfgenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdfgen',
  templateUrl: 'pdfgen.html',
})
export class PdfgenPage {
/* letterObj = {
    to: '',
    from: '',
    text: ''
  }*/
  to :string;
  from:string;
  text:string;
  pdfObj = null;

  constructor(public navCtrl: NavController,
    private plt: Platform, private file: File,
// private fileOpener: FileOpener,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfgenPage');
  }
/*createPdf() {
    var docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: 'thghgh', alignment: 'right' },

        { text: 'From', style: 'subheader' },
        { text: this.from },

        { text: 'To', style: 'subheader' },
        this.to,

        { text: this.text, style: 'story', margin: [0, 20, 0, 20] },

        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }*/
}
