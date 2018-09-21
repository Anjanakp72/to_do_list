import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListDetailComponent implements OnInit {
	listDetailData = {};
	listId: any;
  constructor(private route: ActivatedRoute, private router:Router, private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit() {
  	if(this.route.snapshot.params['id']){
  		this.listId = this.route.snapshot.params['id'];
      this.auth.getlistdetail(this.listId).subscribe(data => {
        this.listDetailData = data;
      });

  		// this.http.get('/api/' + this.listId).subscribe(data => {
  		// 	this.listDetailData = data;
  		// });
  	}
  }

	goBack(){
		this.router.navigate(['/todo']);
	}
}
