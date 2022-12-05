import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "../app-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { HTTP404Component } from "./http404/http404.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [FooterComponent, HTTP404Component, NavigationComponent],
  imports: [CommonModule, NgbCollapseModule, AppRoutingModule],
  exports: [AppRoutingModule, NavigationComponent, FooterComponent],
})
export class CoreModule {}
