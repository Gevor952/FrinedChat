import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptFriendComponent } from './accept.friend.component';

describe('AcceptFriendComponent', () => {
  let component: AcceptFriendComponent;
  let fixture: ComponentFixture<AcceptFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptFriendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
