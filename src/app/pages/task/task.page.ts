import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  tasks: { title: string, icon: string, count_now: number, count_started: number, color: string }[] =
    [
      { title: 'To Do', count_now: 5, count_started: 1, icon: 'time-outline', color: 'danger' },
      { title: 'In Progress', count_now: 1, count_started: 1, icon: 'refresh-outline', color: 'primary' },
      { title: 'Done', count_now: 18, count_started: 18, icon: 'play-forward-outline', color: 'blue' }
    ];


  constructor() { }

  ngOnInit() {
  }

}
