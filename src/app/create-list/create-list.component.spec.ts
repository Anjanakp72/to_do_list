import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { CreateListComponent } from './create-list.component';
import { AuthenticationService, UserDetails } from '../authentication.service';

describe('CreateListComponent', () => {
  let component: CreateListComponent;
  let fixture: ComponentFixture<CreateListComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let auth: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule ],            
      declarations: [ CreateListComponent ],
      providers: [ {provide: FormBuilder, useValue: formBuilder }, {provide: AuthenticationService, useValue: auth}]      
    })
    .compileComponents();
    auth = TestBed.get(AuthenticationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
