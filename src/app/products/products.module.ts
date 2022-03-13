import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { components } from '@products/components';
import { containers } from '@products/containers';
import { guards } from '@products/guards';
import { ProductsRoutingModule } from '@products/products-routing.module';
import { providers } from '@products/services';
import { effects, reducers } from '@products/store';





@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...providers, ...guards],
  declarations: [
    ...containers,
    ...components
  ],
  exports: [
    ...containers,
    ...components
  ],
})
export class ProductsModule { }
