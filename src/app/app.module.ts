import { PortalModule } from '@angular/cdk/portal';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { environment } from '@environments/environment';
import { AppComponent } from '@index/container/app.component';
import { CustomSerializer, effects, reducers } from '@index/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { META_REDUCERS as metaReducers, STORE_INSTRUMENT } from '@shared/config/ngrx.config';
import { API_URL } from '@shared/config/token.config';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoaderInterceptor } from './spinner/spinner.interceptor';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PortalModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    STORE_INSTRUMENT,
    AppRoutingModule,

  ],
  declarations: [AppComponent, SpinnerComponent],
  providers: [
    { provide: API_URL, useValue: environment.apiUrl },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
