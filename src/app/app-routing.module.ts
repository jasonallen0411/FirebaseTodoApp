import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AuthGuard } from './auth.guard';
import { LoginComponentComponent } from './login-component/login-component.component';


const routes: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'login',      component: LoginComponentComponent },
    { path: 'todos',      component: TodosComponent, canActivate:[AuthGuard] },
    { path: 'todos/details/:todoID',      component: TodoDetailsComponent },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
