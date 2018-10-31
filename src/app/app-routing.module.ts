import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { BrowseComponent } from "./browse/browse.component";
import { SearchComponent } from "./search/search.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "settings",
    component: SettingsComponent
  },

  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "browse", component: BrowseComponent, outlet: "browseTab" },
      { path: "search", component: SearchComponent, outlet: "searchTab" }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
