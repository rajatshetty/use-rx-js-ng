import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  body: string;
  private http: Http;
  constructor(http:Http){
    this.http = http;
  }
  ngOnInit() {
    this.getAllTodos().subscribe();
  }

  public getAllTodos(): Observable<any> {
    debugger;
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .map(response => {
        const todos = response.json();
        this.body = todos.body;
        console.log(todos.body);
      });
  }
  
}
