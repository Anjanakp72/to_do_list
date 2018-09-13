import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { CreateListComponent } from './create-list/create-list.component';

const routes: Routes = [
{
	path: '', redirectTo: '/todo', pathMatch: 'full'
},
{
	path: 'todo', component: ListComponent
},
{
	path: 'create-list', component: CreateListComponent
},
{
	path: 'todo-detail/:id', component: ListDetailComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
