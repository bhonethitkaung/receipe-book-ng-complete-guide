import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ReceipesModule, do not have to import ReceipesModule because it is already implemented in lazy loading
    // ShoppingListModule,
    SharedModule,
    CoreModule,
    // AuthModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
