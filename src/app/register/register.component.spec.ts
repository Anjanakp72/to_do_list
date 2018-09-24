import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let auth: AuthenticationService;  
  const route: ActivatedRoute = new ActivatedRoute();  
  const router = Router ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, RegisterComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [{provide: ActivatedRoute, useValue: route}, {provide: Router, useValue: router}, {provide: AuthenticationService, useValue: auth}]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
