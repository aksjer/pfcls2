import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { GesturesComponent } from './gestures/gestures.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game.service';
import { SharedService } from './shared.service';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    GesturesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    SharedService,
    GameService
  ],
  entryComponents: [
    GesturesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
