import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my/my.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponent,
  },
  {
    path: 'mf',
    loadChildren: () => import('microfront/HelloModule').then(m => m.HelloModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
