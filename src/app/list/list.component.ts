import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	listData: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('/api/').subscribe(data => {
  		this.listData = data;
  	});
  }

  showdetails(id: any){
    this.router.navigate(['/todo-detail', id]);
  }

  createList() {
    this.router.navigate(['/create-list']);
  }
}
