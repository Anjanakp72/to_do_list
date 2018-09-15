import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder,FormGroupDirective, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
	createNew: FormGroup;
	items: any;
  postData: any;
  statusMsg: string;
  listDetailData: any;
  addNew: boolean = true;
  rowCount:number = 1;
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.createNew = this.formBuilder.group({
  		srno: new FormControl('', [Validators.required, Validators.minLength(1),Validators.pattern(/\d/)]),
  		title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
  		remarks: new FormControl('', [Validators.maxLength(30)]),
  		status: new FormControl('', [Validators.required ]),
  		items: this.formBuilder.array([this.createListItems(this.rowCount)])
  	});
  }

  createListItems(iCount:number): FormGroup{    
    this.rowCount++;
    return this.formBuilder.group({      
      listno: new FormControl(iCount, [Validators.required, Validators.maxLength(4),Validators.pattern(/\d/) ]),
      todoCaption: new FormControl('', [Validators.required]),
    });
  }

  addItem(iCount:number){
	  this.items = this.createNew.get('items') as FormArray;
	  this.items.push(this.createListItems(iCount));            	
  }

  removeItem(x:number){
    this.rowCount--;    
	  this.items = this.createNew.get('items') as FormArray;
	  this.items.removeAt(x);
  }
  
  createNewList(){
    this.postData = this.createNew.value;
    this.http.post('/api/', this.postData).subscribe(resp => {
      this.statusMsg = "To Do List added Successfully. " ;
      this.listDetailData = resp;
      this.cleanUpForm();
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

  cleanUpForm(){
      this.createNew.reset();
      this.items = this.createNew.get('items') as FormArray;
      let xCount = this.items.length;
      while(xCount > 0){
        this.items.removeAt(xCount);
        xCount--;
      }
      this.addNew = false;    
  }

  addMore(){
    this.statusMsg = null;
    this.listDetailData = null;
    this.addNew = true;
  }

  goHome(){
    this.router.navigate(['/todo']);
  }





}
