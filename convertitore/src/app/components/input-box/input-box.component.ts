import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent implements OnInit {

  @Input()
  unita:string;

  @Input() 
  valore:number;

  @Output()
  eventoConversione = new EventEmitter<string>();

  convertiValore(){

    let valoreConvertito = 0;

    if(this.unita == "C"){
      valoreConvertito = 1.8 * this.valore + 32;
    } 

    if(this.unita == "F"){ 
      valoreConvertito = (this.valore - 32) / 1.8;
    }

    if(this.unita == "KM"){
      valoreConvertito = this.valore * 0.62137; ; 
    }

    if(this.unita == "MI"){
      valoreConvertito = this.valore / 0.62137; 
    }
    
    this.eventoConversione.emit(this.unita+":"+valoreConvertito);
  }
  constructor() { }

  ngOnInit() {}

}
