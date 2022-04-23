import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cel:number;
  fah:number;
  km:number;
  mi:number;
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