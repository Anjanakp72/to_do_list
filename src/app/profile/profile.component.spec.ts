import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let auth: AuthenticationService;  
  const route: ActivatedRoute = new ActivatedRoute();  
  const router = Router ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],      
      declarations: [ ProfileComponent ],
      providers: [{provide: ActivatedRoute, useValue: route}, {provide: Router, useValue: router}, {provide: AuthenticationService, useValue: auth}]
    })
    .compileComponents();
    auth = TestBed.get(AuthenticationService);          
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
