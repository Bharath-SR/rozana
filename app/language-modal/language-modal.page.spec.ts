import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguageModalPage } from './language-modal.page';

describe('LanguageModalPage', () => {
  let component: LanguageModalPage;
  let fixture: ComponentFixture<LanguageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
