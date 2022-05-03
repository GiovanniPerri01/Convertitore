import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})
export class ConvertitorePage implements OnInit {

  cval:number;
  fval:number;
  kval:number;
  mval:number;

  gradiC(x){
    this.cval = 1.8 * x + 32;
  }

  gradiF(x){
    this.fval = (x - 32) / 1.8;
  }

  disK(x){
    this.kval = x * 0.62137;
  }

  disM(x){
    this.mval = x / 0.62137;
  }

  constructor() { }

  ngOnInit() {
  }

}
