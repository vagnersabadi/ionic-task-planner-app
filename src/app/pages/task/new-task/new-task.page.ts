import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  constructor(
    private modal: ModalController

  ) { }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }

}
