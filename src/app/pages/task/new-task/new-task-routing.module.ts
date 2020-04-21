import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTaskPage } from './new-task.page';

const routes: Routes = [
  {
    path: '',
    component: NewTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTaskPageRoutingModule {}
