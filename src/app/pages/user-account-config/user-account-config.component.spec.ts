import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountConfigComponent } from './user-account-config.component';

describe('UserAccountConfigComponent', () => {
  let component: UserAccountConfigComponent;
  let fixture: ComponentFixture<UserAccountConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAccountConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
