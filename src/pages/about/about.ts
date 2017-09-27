import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	lista: Array<any> = [
	{
		titulo: "Perro",
		color:"blue"
	},
	{
		titulo: "Gato",
		color:"red"
	}
	]

  constructor(public navCtrl: NavController) {

  }

}
