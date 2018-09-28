import { AuthenticationService, UserDetails } from '../authentication.service';
import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { EditDetailComponent } from './edit-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const dummyListDetails = [
{"_id":"5ba523ebd7b685108096f20b","srno":1,"title":"Sprint 1","remarks":"sprint plan","status":"open","items":[{"_id":"5ba523ebd7b685108096f212","listno":1,"todoCaption":"Gather requirements"},{"_id":"5ba523ebd7b685108096f211","listno":2,"todoCaption":"Write Stories"},{"_id":"5ba523ebd7b685108096f210","listno":3,"todoCaption":"Write Test Cases"},{"_id":"5ba523ebd7b685108096f20f","listno":4,"todoCaption":"Develop"},{"_id":"5ba523ebd7b685108096f20e","listno":5,"todoCaption":"Test"},{"_id":"5ba523ebd7b685108096f20d","listno":6,"todoCaption":"Review"},{"_id":"5ba523ebd7b685108096f20c","listno":7,"todoCaption":"Release"}],"createdOn":"2018-09-21T17:01:31.928Z","__v":0}
];

class FakeAuthenticationService {
  getlistdetail(listId = 1){
    return Observable.of(dummyListDetails);
  }
}

describe('EditDetailComponent', () => {

  let component: EditDetailComponent;
  let auth:AuthenticationService;
  let fixture: ComponentFixture<EditDetailComponent>;
  let spy: any;
  let http: HttpClient;
  let router:  Router;
  const formBuilder: FormBuilder = new FormBuilder();
  const route: ActivatedRoute = new ActivatedRoute();


//{provide: FormBuilder, useValue: formBuilder}, {provide: ActivatedRoute, useValue: route}, {provide: Router, useValue: router},

  beforeEach(async(() => {
    let injector;
    auth = new AuthenticationService(http, router);  
    component = new EditDetailComponent(route, router, formBuilder,  http, auth);
    TestBed.configureTestingModule({
      declarations: [ EditDetailComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule,HttpClientModule, ReactiveFormsModule ],       
      providers: [  {provide: AuthenticationService, useClass: FakeAuthenticationService}, { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } }]
    })
    .compileComponents();

    injector = getTestBed();
    auth = injector.get(AuthenticationService);

  }));

  beforeEach(() => {
      //auth = TestBed.get(AuthenticationService);  

      fixture = TestBed.createComponent(EditDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();    
  });

  // it('should create', inject([ActivatedRoute, Router, FormBuilder, AuthenticationService], (route: ActivatedRoute, router: Router, formBuilder: FormBuilder, auth: AuthenticationService) => {
  //   fixture.detectChanges();    
  //   expect(component).toBeTruthy();
  // }));

  describe('#ngOnInit', () => {
    it('should load todo list details', ()  => {
      let listData: any = dummyListDetails;            
      //component.ngOnInit();      
      listData = component.listDetailData;
      expect(listData.length).toBe(1);
    });
  });

});
