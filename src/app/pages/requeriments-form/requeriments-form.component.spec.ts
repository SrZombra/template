import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentsFormComponent } from './requeriments-form.component';

describe('RequerimentsFormComponent', () => {
  let component: RequerimentsFormComponent;
  let fixture: ComponentFixture<RequerimentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
