import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerCompnent } from './Server/Server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './Warning/warning-alert.component';
import { SuccessComponent } from './success/success.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectvesComponent } from './directves/directves.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerCompnent,
    ServersComponent,
    WarningAlertComponent,
    SuccessComponent,
    BindingsComponent,
    DirectvesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
