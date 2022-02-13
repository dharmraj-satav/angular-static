import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [{
  path:'users',component: UsersComponent},{
  path: 'home', component: HomeComponent 
},{path: 'contact', component: ContactComponent },
{
  path:'todos' ,loadChildren:()=>import('./todos/todos.module').then(m=>m.TodosModule),
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
