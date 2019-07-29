import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  notificacoes: any = [];

  token: any = '';

  constructor(
    public navCtrl: NavController
  ){
    // this.getNotificacoes();
    this.token = localStorage.getItem('tokenPush');
  }

  getNotificacoes() {
    this.notificacoes = [
      {
        titulo: 'Bolsa tem alta e dólar cai',
        texto: 'O Ibovespa opera em leve alta nesta sexta-feira, enquanto reage ao noticiário externo.',
        data: new Date()
      },
      {
        titulo: 'Bolsa tem alta e dólar cai',
        texto: 'O Ibovespa opera em leve alta nesta sexta-feira, enquanto reage ao noticiário externo.',
        data: new Date()
      },
      {
        titulo: 'Bolsa tem alta e dólar cai',
        texto: 'O Ibovespa opera em leve alta nesta sexta-feira, enquanto reage ao noticiário externo.',
        data: new Date()
      },
      {
        titulo: 'Bolsa tem alta e dólar cai',
        texto: 'O Ibovespa opera em leve alta nesta sexta-feira, enquanto reage ao noticiário externo.',
        data: new Date()
      },
    ]
  }
}
