import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BrowseComponent } from "./browse/browse.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [AppComponent, HomeComponent, BrowseComponent, SearchComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
