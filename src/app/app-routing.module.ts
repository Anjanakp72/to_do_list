import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { CreateListComponent } from './create-list/create-list.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-login', component: LoginComponent },
  { path: 'todo-register', component: RegisterComponent },
  { path: 'todo-profile', component: ProfileComponent, canActivate: [AuthGuardService] }
,
{
	path: 'todo', component: ListComponent
},
{
  path: 'todo-list', component: ListComponent
},
{
	path: 'todo-createnew', component: CreateListComponent
},
{
	path: 'todo-detail/:id', component: ListDetailComponent 
},
{
	path: 'todo-edit/:id', component: EditDetailComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
