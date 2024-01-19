import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarDashboardComponent } from './sellar-dashboard.component';

describe('SellarDashboardComponent', () => {
  let component: SellarDashboardComponent;
  let fixture: ComponentFixture<SellarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellarDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
