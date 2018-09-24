import { AuthenticationService, UserDetails } from '../authentication.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListDetailComponent } from './list-detail.component';


describe('ListDetailComponent', () => {
  let component: ListDetailComponent;
  let fixture: ComponentFixture<ListDetailComponent>;
  let auth: AuthenticationService;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],      
      declarations: [ ListDetailComponent ],
      providers: [ {provide: AuthenticationService, useValue: auth}]
    })
    .compileComponents();
    auth = TestBed.get(AuthenticationService);      
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
