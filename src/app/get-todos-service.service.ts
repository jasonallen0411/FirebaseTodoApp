import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class GetTodosServiceService {
  todoItems:Observable<any[]>;
  user:any;
  db;
  uid;

  removeTodo(k){
    this.db.list('/users/' + this.uid).remove(k);
  }

  updateTodo(k,v){
    this.db.list('/users/' + this.uid).update(k, { task: v });
  }

  todoCompleted(k,c){
    this.db.list('/users/' + this.uid).update(k, { completed: c });
  }

  addTodo(taskInput){
    console.log('The user is:' + this.uid);
    this.db.list('/users/' + this.uid).push({task: taskInput, completed: false});
    
  }

  constructor(db: AngularFireDatabase, afa:AngularFireAuth) {
    this.db = db;
    afa.auth.onAuthStateChanged(user => {
      if(user){
        this.uid = user.uid;
        this.todoItems = db.list("/users/" + user.uid).snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val(), updateText:""})))
        )

      }
    });

  }
}
  
