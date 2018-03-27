import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DataDisplayModule } from "./data-display/data-display.module";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { DataService } from "../providers/data/data.service";

@NgModule({
  declarations: [AppComponent, DashboardComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, DataDisplayModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
