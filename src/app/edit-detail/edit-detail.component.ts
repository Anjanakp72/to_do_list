import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, NgForm, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
	editForm: FormGroup;	
	listDetailData = {};
	updatedList = {}; 
	items:any;
	listId: any = 0;
	postData:any;
  	rowCount:number = 1;	
  	statusMsg: string;
  	updateStatus: boolean = true;

  constructor(private route: ActivatedRoute, private router:Router, private formBuilder: FormBuilder,  private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit() {
  	if(this.route.snapshot.params['id']){  		
  		this.listId = this.route.snapshot.params['id'];
		  	this.editForm = this.formBuilder.group({
		  		srno: new FormControl('', [Validators.required,Validators.minLength(1),Validators.pattern(/\d/)]),
		  		title: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(30)]),
		  		remarks: new FormControl('', [Validators.maxLength(30)]),
		  		status: new FormControl('', [Validators.required ]),
		  		items: this.formBuilder.array([])
		  	});

  		this.auth.getlistdetail(this.listId).subscribe(data => {
  			this.listDetailData = data;
			this.editForm.controls.srno.setValue(this.listDetailData['srno']);
			this.editForm.controls.title.setValue(this.listDetailData['title']);
			this.editForm.controls.remarks.setValue(this.listDetailData['remarks']);
			this.editForm.controls.status.setValue(this.listDetailData['status']);
      if(this.listDetailData['items'] && this.listDetailData['items'].length)
      {
        this.rowCount = this.listDetailData['items'].length;  
        for(let lstItem of this.listDetailData['items']){
        this.items = this.editForm.get('items') as FormArray;
        this.items.push(this.populateListItems(lstItem));              
        }
        
      }else{
        this.rowCount = 0;
      }
			

  		});
  	}
  }

  createListItems(iCount:number): FormGroup{    
    this.rowCount++;
    return this.formBuilder.group({      
      listno: new FormControl(iCount + 1, [Validators.required, Validators.maxLength(4) ]),
      todoCaption: new FormControl('', [Validators.required]),
    });
  }

  cancelEdit(){

      this.editForm.controls.srno.setValue(this.listDetailData['srno']);
      this.editForm.controls.title.setValue(this.listDetailData['title']);
      this.editForm.controls.remarks.setValue(this.listDetailData['remarks']);
      this.editForm.controls.status.setValue(this.listDetailData['status']);
      this.rowCount = this.listDetailData['items'].length;
      this.items = this.editForm.get('items') as FormArray;
 
      let x = 0;
      while(x < this.items.length){
        this.items.removeAt(x);
      }      

        for(let lstItem of this.listDetailData['items']){
        this.items.push(this.populateListItems(lstItem));              
        }

  }

  addItem(iCount:number){
	  this.items = this.editForm.get('items') as FormArray;
	  this.items.push(this.createListItems(iCount));            	
  }

  removeItem(x:number){
	  this.items = this.editForm.get('items') as FormArray;
	  this.items.removeAt(x);
  }

  populateListItems(listItem: any): FormGroup{    
    return this.formBuilder.group({      
      listno: new FormControl(listItem.listno, [Validators.required, Validators.maxLength(4) ]),
      todoCaption: new FormControl(listItem.todoCaption, [Validators.required]),
    });
  }

  updateList(){
    this.postData = this.editForm.value;
    this.auth.updatelist(this.listId, this.postData).subscribe(resp => {
      this.statusMsg = "To Do List Updated Successfully. " ;
  		this.auth.getlistdetail(this.listId).subscribe(data => {
  			this.updatedList = data;
  		});
      this.updateStatus = false;    
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }


  createList() {
    //this.router.navigate(['/create-list']);
  }

	goHome(){
		//this.router.navigate(['/todo']);
	}
}
