import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoverComponent } from "./cover/cover.component";
import { HomeComponent } from "./home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { MediaComponent } from "./media/media.component";

// Styling
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { InformationComponent } from "./information/information.component";

@NgModule({
  declarations: [
    CoverComponent,
    HomeComponent,
    AboutUsComponent,
    MediaComponent,
    InformationComponent,
  ],
  imports: [CommonModule, NgbCarouselModule],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
