import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule)
  },
  {
    path: 'about',
    loadChildren: () => import(`./about/about.module`).then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import(`./contact/contact.module`).then(m => m.ContactModule)
  },
  {
    path: 'influencer',
    loadChildren: () => import(`./influencer/influencer.module`).then(m => m.InfluencerModule)
  },
  {
    path: 'services',
    loadChildren: () => import(`./services/services.module`).then(m => m.ServicesModule)
  },
  {
    path: 'blog',
    loadChildren: () => import(`./blog/blog.module`).then(m => m.BlogModule)
  },
  {
    path: 'home',
    loadChildren: () => import(`./homepage/homepage.module`).then(m => m.HomepageModule)
  },
  {
    path: '',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
