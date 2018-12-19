import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetTodosServiceService } from '../get-todos-service.service';
import { getTestBed } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoItems:Observable<any[]>;
  db:any;
  gt;

addTodo(taskInput){
  this.gt.addTodo(taskInput)
}

todoCompleted(k,c){
  this.gt.todoCompleted(k,c);
}

  
  
  

  constructor(db: AngularFireDatabase, gt:GetTodosServiceService, afa:AngularFireAuth) {

    this.todoItems = gt.todoItems;
      this.gt = gt;
      this.db = db;

      afa.auth.onAuthStateChanged(user =>{
        if(user){
          console.log(user);
          this.todoItems = db.list("/users/" + user.uid).snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val(), updateText:""})))
          )
        }
      });
      }

  ngOnInit() {
  }

}
