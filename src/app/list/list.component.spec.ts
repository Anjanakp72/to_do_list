import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const dummyListData = [{"_id":"5b9ba23d70b351083e4e4818","srno":4,"title":"Sprint 3A","remarks":"sprint plan",
"status":"open","items":[{"_id":"5ba517a72ebc5a0e20be9c24","listno":1,"todoCaption":"Hello World"}],
"createdOn":"2018-09-14T11:57:49.928Z","__v":0},{"_id":"5b9ce36c95a05b07622f4e3b","srno":2,
"title":"UI Sprint 2","remarks":"sprint 2 planning","status":"open",
"items":[{"_id":"5b9d010ce928df09ec6cc2c9","listno":1,"todoCaption":"Gather Requirements "},
{"_id":"5b9d010ce928df09ec6cc2c8","listno":2,"todoCaption":"Plan Sprint Tasks"},
{"_id":"5b9d010ce928df09ec6cc2c7","listno":3,"todoCaption":"Create Story"},
{"_id":"5b9d010ce928df09ec6cc2c6","listno":4,"todoCaption":"Write Test Cases"},
{"_id":"5b9d010ce928df09ec6cc2c5","listno":5,"todoCaption":"Development and Unit Testing"},
{"_id":"5b9d010ce928df09ec6cc2c4","listno":6,"todoCaption":"QA Deployment"},
{"_id":"5b9d010ce928df09ec6cc2c3","listno":7,"todoCaption":"UAT"},
{"_id":"5b9d010ce928df09ec6cc2c2","listno":8,"todoCaption":"Prod Release"}],"createdOn":"2018-09-15T10:48:12.158Z","__v":0},
{"_id":"5ba523ebd7b685108096f20b","srno":1,"title":"Sprint 1","remarks":"sprint plan","status":"open","items":[{"_id":"5ba523ebd7b685108096f212","listno":1,"todoCaption":"Gather requirements"},{"_id":"5ba523ebd7b685108096f211","listno":2,"todoCaption":"Write Stories"},{"_id":"5ba523ebd7b685108096f210","listno":3,"todoCaption":"Write Test Cases"},{"_id":"5ba523ebd7b685108096f20f","listno":4,"todoCaption":"Develop"},{"_id":"5ba523ebd7b685108096f20e","listno":5,"todoCaption":"Test"},
{"_id":"5ba523ebd7b685108096f20d","listno":6,"todoCaption":"Review"},
{"_id":"5ba523ebd7b685108096f20c","listno":7,"todoCaption":"Release"}],"createdOn":"2018-09-21T17:01:31.928Z","__v":0}];

class FakeAuthenticationService {
  getalltodolists(){
    return Observable.of(dummyListData);
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let auth: AuthenticationService;
  let http: HttpClient;  
  let router:  Router;  
  const route: ActivatedRoute = new ActivatedRoute();  

  beforeEach(async(() => {
    let injector;
    auth = new AuthenticationService(http, router);  
    component = new ListComponent(router, http, auth);


    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule],             
      providers: [{provide: ActivatedRoute, useValue: route}, {provide: Router, useValue: router},{provide: AuthenticationService, useClass:FakeAuthenticationService}]
    })
    .compileComponents();
    injector = getTestBed();
    auth = injector.get(AuthenticationService);

  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should load list component', () => {
  //   expect(component).toBeTruthy();
  // });

  describe('#ngOnInit', () => {
    it('should load todo list details', ()  => {
      let listData: any = dummyListData;            
      //component.ngOnInit();      
      listData = component.listData;
      expect(listData.length).toBe(3);
    });
  });


});
