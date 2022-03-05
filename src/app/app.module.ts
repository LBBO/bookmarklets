import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BookmarkletsComponent } from './bookmarklets/bookmarklets.component'

@NgModule({
  declarations: [AppComponent, CardComponent, BookmarkletsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
