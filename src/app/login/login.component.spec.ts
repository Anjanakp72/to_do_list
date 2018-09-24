import { AuthenticationService, TokenPayload } from '../authentication.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth: AuthenticationService;  
  const route: ActivatedRoute = new ActivatedRoute();  
  const router = Router ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],      
      declarations: [ AppComponent, LoginComponent ],  
      providers: [{provide: ActivatedRoute, useValue: route}, {provide: AuthenticationService, useValue: auth}]
    })
    .compileComponents();
    auth = TestBed.get(AuthenticationService);              
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([Router], (router: Router) => {
    expect(component).toBeTruthy();
  }));
});
