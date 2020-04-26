import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { SchedulePageModule } from '../schedule/schedule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    SchedulePageModule,
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
