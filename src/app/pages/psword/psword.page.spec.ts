import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PswordPage } from './psword.page';

describe('PswordPage', () => {
  let component: PswordPage;
  let fixture: ComponentFixture<PswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
