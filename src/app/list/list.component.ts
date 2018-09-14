import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	listData: any;
  statusMsg: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getListData();
  }
  
  getListData(){
    this.http.get('/api/').subscribe(data => {
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
    this.router.navigate(['/create-list']);
  }
  deleteList(id){
    this.http.delete('/api/' + id).subscribe(res => {
      this.statusMsg = "To Do List Deleted Successfully";
      this.getListData();
    }, (err: HttpErrorResponse)=> {
      console.log(err.message);
    });
  }
}
