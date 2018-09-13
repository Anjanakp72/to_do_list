import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListDetailComponent implements OnInit {
	listDetailData = {};
	listId: any;
  constructor(private route: ActivatedRoute, private router:Router, private http: HttpClient) { }

  ngOnInit() {
  	if(this.route.snapshot.params['id']){
  		this.listId = this.route.snapshot.params['id'];
  		console.log("list id ", this.listId);
  		this.http.get('/api/' + this.listId).subscribe(data => {
  			this.listDetailData = data;
  		});
  	}
  }

	goBack(){
		this.router.navigate(['/todo']);
	}
}
