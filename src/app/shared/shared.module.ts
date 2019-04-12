import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { LoadingBarService, LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SafeHTMLPipe } from './safe-html.pipe';

@NgModule({
  declarations: [PageHeaderComponent, LoadingPageComponent, SafeHTMLPipe],
  imports: [CommonModule, LoadingBarModule, LoadingBarHttpClientModule],
  providers: [LoadingBarService],
  exports: [PageHeaderComponent, LoadingPageComponent, SafeHTMLPipe],
})
export class SharedModule {}