import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina5',
  templateUrl: 'pagina5.html',
})
export class Pagina5Page {
	item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina5Page');
  }

}
