import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path : '',  loadChildren : './components/articles/articles.module#ArticlesModule'},
    {path : '**', pathMatch : 'full',  redirectTo : '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
