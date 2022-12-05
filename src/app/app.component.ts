import { Component } from "@angular/core";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  loadingBarSpinner: boolean;
  loadingBarColor: string;

  constructor(private loadingBar: LoadingBarService) {
    this.loadingBarSpinner = false;
    this.loadingBarColor = "#3498db";
  }
}
