import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UdetailPage } from './udetail.page';

describe('UdetailPage', () => {
  let component: UdetailPage;
  let fixture: ComponentFixture<UdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
