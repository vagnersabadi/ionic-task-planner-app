import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SchedulePage } from './schedule.page';
import { NewTaskPageModule } from '../task/new-task/new-task.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTaskPageModule
  ],
  declarations: [SchedulePage],
  entryComponents: [SchedulePage]

})
export class SchedulePageModule {}
