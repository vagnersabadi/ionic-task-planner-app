import { Component, OnInit } from '@angular/core';
import { NewTaskPage } from '../task/new-task/new-task.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  tasks: any[] = [
    {
      hour: 1,
      colorHex: '#F9BE7C',
      title: 'Project Research',
      description: undefined
    },
    {
      hour: 5,
      colorHex: '#e77480',
      title: 'Call',
      description: 'Discuss with the customer of the medical apllication the references that he send.'
    },
    {
      hour: 8,
      colorHex: '#7494e7',
      title: 'Make tasks for the medical app',
      description: undefined
    },
    {
      hour: 1,
      colorHex: '#459ea1',
      title: 'Design meeting',
      description: 'Discuss with designer new tasks for the medical appp. Tell how the call went.'
    },

  ];


  constructor(
    public modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async create() {
    const modal = await this.modalController.create({
      component: NewTaskPage
    });
    return await modal.present();
  }

  close() {
    this.modalController.dismiss();
  }

}
