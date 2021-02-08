import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpponentComponent } from './opponent/opponent.component';
import { TableComponent } from './table/table.component';
import { CommComponent } from './comm/comm.component';

import { ServerService } from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    OpponentComponent,
    TableComponent,
    CommComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
