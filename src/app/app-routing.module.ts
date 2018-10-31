import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { BrowseComponent } from "./browse/browse.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home(browseTab:browse//searchTab:search)",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  { path: "browse", component: BrowseComponent, outlet: "browseTab" },
  { path: "search", component: SearchComponent, outlet: "searchTab" }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
