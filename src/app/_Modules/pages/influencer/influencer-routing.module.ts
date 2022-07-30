import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerViewComponent } from './influencer-view/influencer-view.component';
import { InfluencerComponent } from './influencer/influencer.component';

const routes: Routes = [
  {
    path: ':id',
    component: InfluencerViewComponent
  },
  {
    path: '',
    component: InfluencerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerRoutingModule { }
