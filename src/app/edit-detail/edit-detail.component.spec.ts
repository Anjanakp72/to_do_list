import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditDetailComponent } from './edit-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';

describe('EditDetailComponent', () => {
  let component: EditDetailComponent;
  let fixture: ComponentFixture<EditDetailComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const route: ActivatedRoute = new ActivatedRoute();
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [ RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule ],       
      declarations: [ EditDetailComponent ],
      providers: [ {provide: FormBuilder, useValue: formBuilder}, {provide: ActivatedRoute, useValue: route}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
