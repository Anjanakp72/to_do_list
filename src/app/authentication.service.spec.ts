import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('AuthenticationService', () => {
	let auth: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthenticationService]
    });    
  auth = TestBed.get(AuthenticationService);  
  });

  it('should be created', () => {
    expect(auth).toBeTruthy();
  });
  
});
