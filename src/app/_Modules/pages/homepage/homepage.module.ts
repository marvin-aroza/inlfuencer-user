import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    HomepageComponent,
    AboutComponent,
    FeaturesComponent,
    WorkComponent,
    ServicesComponent,
    BlogsComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
