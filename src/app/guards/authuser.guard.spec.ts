import { TestBed } from '@angular/core/testing';

import { AuthUserGuard } from './authuser.guard';

describe('AuthuserGuard', () => {
  let guard: AuthUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
