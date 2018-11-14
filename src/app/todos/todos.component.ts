import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoItems:Observable<any[]>;
  db:any;

  todoCompleted(k,c){
    this.db.list('/todos').update(k, { completed: c });
  }


  addTodo(taskInput){
    this.db.list('/todos').push({"completed":false, "task":taskInput,"user":"Test User"});

  }
  
  removeTodo(k){
    this.db.list('/todos').remove(k);
  }

  updateTodo(k,v){
    this.db.list('/todos').update(k, { task: v });
  }

  constructor(db: AngularFireDatabase) {

    this.todoItems = db.list('/todos').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val(), update:false, updateText:"" }))
      )
    );

      this.db = db;

      // db.list('/todos').snapshotChanges().subscribe( tdItem => {
      //   this.todoItems = tdItem;
      //   console.log(tdItem[0].key);
      //   });
      }

  ngOnInit() {
  }

}
