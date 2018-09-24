import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
	let authGuardService: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthenticationService, AuthGuardService]
    });
  
    authGuardService = TestBed.get(AuthGuardService);    
  });



  it('should be created', () => {
    expect(authGuardService).toBeTruthy();
  });
});
