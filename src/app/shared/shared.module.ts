import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingBarModule, LoadingBarService } from "@ngx-loading-bar/core";
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { LoadingPageComponent } from "./loading-page/loading-page.component";
import { MarkdownPipe } from "./markdown.pipe";
import { NumToMonthPipe } from "./num-to-month.pipe";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { SafeHTMLPipe } from "./safe-html.pipe";

@NgModule({
  declarations: [
    PageHeaderComponent,
    LoadingPageComponent,
    SafeHTMLPipe,
    NumToMonthPipe,
    MarkdownPipe,
  ],
  imports: [CommonModule, LoadingBarModule, LoadingBarHttpClientModule],
  providers: [LoadingBarService],
  exports: [
    PageHeaderComponent,
    LoadingPageComponent,
    SafeHTMLPipe,
    NumToMonthPipe,
    MarkdownPipe,
  ],
})
export class SharedModule {}
