import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { GetTodosServiceService} from './get-todos-service.service';
import { AuthGuard } from './auth.guard';
import { LoginComponentComponent } from './login-component/login-component.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PageNotFoundComponent,
    HomeComponent,
    TodoDetailsComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
    
  ],
  providers: [GetTodosServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
