import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})
export class ConvertitorePage implements OnInit {
  C:number;
  F:number;
  KM:number;
  MI:number;

  notificaConversione(messaggio:string){

    console.log(messaggio);
    const messDiviso = messaggio.split(":");

    if(messDiviso[0] === "C"){
      this.F=+messDiviso[1];
    }

    if(messDiviso[0] === "F"){
      this.C=+messDiviso[1];
    }

    if(messDiviso[0] === "KM"){
      this.MI=+messDiviso[1];
    }

    if(messDiviso[0] === "MI"){
      this.KM=+messDiviso[1];
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
