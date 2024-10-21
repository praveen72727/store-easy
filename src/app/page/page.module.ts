import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PageRoutingModule } from "./page-routing.module";

import { PageComponent } from "./page.component";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    NgbModule,
    [SwiperModule]
  ],
  exports: [],
  declarations: [
    PageComponent
  ],
  providers: [],
})
export class PageModule { }
