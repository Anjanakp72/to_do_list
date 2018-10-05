import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ProfileComponent } from './profile.component';

const dummyProfileData = [{"_id":"5ba0a27b21b71c0d173d304b","name":"Ashish","email":"ashish@gmail.com","salt":"50c4530e6dd0cfd7bbf9ffe08f544fba","hash":"0595c0bc31310054631dddbf0c30c34aac58842527687d5af24d1d6134810d926b0b46f841ac5953aee60e40a11e1cbebf9f4c94d6bc68f58dcf776ae52c012d","__v":0}];

class FakeAuthenticationService {
  profile(){
    return Observable.of(dummyProfileData);
  }
}


describe('ProfileComponent', () => {

  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let auth: AuthenticationService;  
  let http: HttpClient;    
  let router: Router ;
  const route: ActivatedRoute = new ActivatedRoute();  

  beforeEach(async(() => {
    let injector;
    auth = new AuthenticationService(http, router);  
    component = new ProfileComponent( auth);

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],      
      declarations: [ ProfileComponent ],
      providers: [{provide: ActivatedRoute, useValue: route}, {provide: Router, useValue: router}, {provide: AuthenticationService, useClass:FakeAuthenticationService}]
    })
    .compileComponents();
    injector = getTestBed();    
    auth = injector.get(AuthenticationService);          
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  describe('#ngOnInit', () => {
    it('should load profile data', ()  => {
      let details: any = dummyProfileData;    

      spyOn(auth,'profile').and.callFake(()=> {
        return Observable.from([details]);
      });

      component.ngOnInit();      
      details = component.details;
      expect(component.details).toEqual(details);
    });
  });

});
