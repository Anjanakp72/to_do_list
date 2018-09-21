import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	listData: any;
  statusMsg: string;
  constructor(private router: Router, private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getListData();
  }

  getListData(){
    this.auth.getalltodolists().subscribe(data => {
      this.listData = data;
    });
  }

  showdetails(id: any){
    this.router.navigate(['/todo-detail', id]);
  }

  editList(id: any){
    this.router.navigate(['/todo-edit', id]);
  }

  createList() {
    this.router.navigate(['/todo-createnew']);
  }
  deleteList(id){
    this.auth.deletelist(id).subscribe(data => {
      this.statusMsg = "To Do List Deleted Successfully";
      this.getListData();
    }, (err: HttpErrorResponse)=> {
      console.log(err.message);
    });
  }
}
