import {NgModule} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContextMenuComponent} from "../components/context-menu/context-menu.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ContextMenuComponent,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(registry: MatIconRegistry, domSanitizer: DomSanitizer) {
    registry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi/mdi.svg')
    );
  }

}
