import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditeprofilePage } from './editeprofile.page';

describe('EditeprofilePage', () => {
  let component: EditeprofilePage;
  let fixture: ComponentFixture<EditeprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditeprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
