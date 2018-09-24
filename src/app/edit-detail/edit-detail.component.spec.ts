import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { EditDetailComponent } from './edit-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable  } from 'rxjs';


import { AuthenticationService, UserDetails } from '../authentication.service';

describe('EditDetailComponent', () => {
  let component: EditDetailComponent;
  let fixture: ComponentFixture<EditDetailComponent>;
  let auth: AuthenticationService;  
  const formBuilder: FormBuilder = new FormBuilder();
  const route: ActivatedRoute = new ActivatedRoute();
  const router = Router ;

//{provide: FormBuilder, useValue: formBuilder}, {provide: ActivatedRoute, useValue: route}, {provide: Router, useValue: router},

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [ RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule ],       
      declarations: [ EditDetailComponent ],
      providers: [  {provide: AuthenticationService, useValue: auth}, { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } }]
    })
    .compileComponents();

    auth = TestBed.get(AuthenticationService);  



  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([ActivatedRoute, Router, FormBuilder, AuthenticationService], (route: ActivatedRoute, router: Router, formBuilder: FormBuilder, auth: AuthenticationService) => {
  const listId = 1;  
  const userData = {"_id":"5b9ba23d70b351083e4e4818","srno":4,"title":"Sprint 3A","remarks":"sprint plan","status":"open","items":[{"_id":"5ba517a72ebc5a0e20be9c24","listno":1,"todoCaption":"Hello World"}],"createdOn":"2018-09-14T11:57:49.928Z","__v":0};
  let listDetailData;
  spyOn(auth, 'getlistdetail').and.returnValue(userData);
    auth.getlistdetail(listId).subscribe(res => {
      listDetailData = res;
    });    
    expect(component).toBeTruthy();
  }));
});
