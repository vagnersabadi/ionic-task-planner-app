import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTaskPage } from '../task/new-task/new-task.page';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  tasks: any[] = [
    { hour: 1, colorHex: '#F9BE7C', title: 'Project Research' },
    { hour: 5, colorHex: '#e77480', title: 'Call' },
    { hour: 8, colorHex: '#7494e7', title: 'Make tasks for the medical app' },
    { hour: 1, colorHex: '#459ea1', title: 'Design meeting' },

  ];


  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  async create() {
    const modal = await this.modal.create({
      component: NewTaskPage
    });
    return await modal.present();
  }

}
