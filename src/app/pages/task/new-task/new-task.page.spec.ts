import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTaskPage } from './new-task.page';

describe('NewTaskPage', () => {
  let component: NewTaskPage;
  let fixture: ComponentFixture<NewTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
