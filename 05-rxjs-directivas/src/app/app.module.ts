import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveModule } from './reactive/reactive.module';
import { ThemeDirective } from './directives/theme.directive';
import { BtnDirective } from './directives/btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThemeDirective,
    BtnDirective
  ],
  imports: [
    BrowserModule, ReactiveModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
