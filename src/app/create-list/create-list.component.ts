import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
	createNew: FormGroup;
	items: any;

  constructor(private router: Router, httpClient: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.createNew = this.formBuilder.group({
  		srno: new FormControl('', [Validators.required, Validators.pattern(/\d{3}/)]),
  		title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  		remarks: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  		status: new FormControl(false, [Validators.required ]),
  		items: this.formBuilder.array([this.createListItems()])
  	})
  }

  createListItems(): FormGroup{    

    return this.formBuilder.group({      
      listno: new FormControl('', [Validators.required, Validators.maxLength(4),Validators.pattern(/\d/) ]),
      todoCaption: new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9._%+-]$/)]),
    });
  }

  addItem(){
	  this.items = this.createNew.get('items') as FormArray;
	  this.items.push(this.createListItems());            	
  }

  removeItem(x:number){
	  this.items = this.createNew.get('items') as FormArray;
	  this.items.removeAt(x);
  }
  
  createNewList(){
  	
  }
}
