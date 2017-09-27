import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Pagina5Page } from '../pagina5/pagina5';
import { Pagina6Page } from '../pagina6/pagina6';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerta: AlertController) {

  }
 otraPagina(){
 	this.navCtrl.push(Pagina6Page);
 }
alertaBasica(){
	let miAlerta = this.alerta.create({
		title: 'titulo de la alerta',
		message: 'mensaje de la alerta',
		buttons:['entendido']
	});
	miAlerta.present();
}
alertaBasica2(){
	let miAlerta = this.alerta.create({
		title: 'titulo de la alerta',
		message: 'mensaje de la alerta',
		inputs: [
        {
          name: 'nombre',
          placeholder: 'nombre'
        },
      ],
		buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar clickedo');
          }
        },
        {
          text: 'guardar',
          handler: data => {
            console.log('guardado clickedo');
          }
        }
      ]
	});
	miAlerta.present();
}
}
