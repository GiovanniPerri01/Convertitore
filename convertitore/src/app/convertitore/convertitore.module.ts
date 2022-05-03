import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertitorePageRoutingModule } from './convertitore-routing.module';

import { ConvertitorePage } from './convertitore.page';
import { InputBoxComponent } from '../components/input-box/input-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertitorePageRoutingModule
  ],
  declarations: [ConvertitorePage, InputBoxComponent]
})
export class ConvertitorePageModule {}
