import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './route.module';

import { AuthGuardService } from './services/auth-guard.service';
import { AtmServiceService } from './services/atm-service.service';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './components/atmoperations/atmoperations.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { MainopComponent } from './components/mainop/mainop.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    AtmoperationsComponent,
    AuthenticateComponent,
    MainopComponent
  ],
  imports: [
    BrowserModule  ,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AtmServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
