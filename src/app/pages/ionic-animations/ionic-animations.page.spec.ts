import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicAnimationsPage } from './ionic-animations.page';

describe('IonicAnimationsPage', () => {
  let component: IonicAnimationsPage;
  let fixture: ComponentFixture<IonicAnimationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicAnimationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicAnimationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
