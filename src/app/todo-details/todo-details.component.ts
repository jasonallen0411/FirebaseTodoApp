import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { GetTodosServiceService } from '../get-todos-service.service';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

 todo = {
  task:'',
  completed:'',
  user:'',
  key:''
 }
 gt;
 db;
 router;
 uid;

 updateTodo(k,v){
   this.gt.updateTodo(k,v);
}

removeTodo(k){
  this.gt.removeTodo(k);
  this.router.navigate(['/todos']);
}

  constructor(private route: ActivatedRoute, 
    db: AngularFireDatabase, 
    gt: GetTodosServiceService,
    router: Router
    
    ) { 
      this.router = router;
      this.gt = gt;
      this.db = db;
      this.uid = this.route.snapshot.paramMap.get('todoID');
      gt.todoItems.subscribe(data => {
        data.forEach((item, i) => {
          console.log(item.key, this.uid);
          if(item.key === this.uid){
            this.todo.task = data[i].task;
            this.todo.completed = data[i].completed;
            this.todo.user = data[i].user;
            this.todo.key = data[i].key;
        }
      });
      
    });
  }
  
  ngOnInit() {
  }

}
