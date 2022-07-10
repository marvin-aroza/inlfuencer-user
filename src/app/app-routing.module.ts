import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './-shared/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    loadChildren: () => import(`./_Modules/pages/pages.module`).then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
