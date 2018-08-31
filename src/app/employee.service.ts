import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = "/assets/data/employees.json";

  constructor(private http :  HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
  	return this.http.get<IEmployee[]>(this.url);
  	/*
  	return [
		{"id": 1, "name": "Andrew", "age": 30},
		{"id": 2, "name": "Brandon", "age": 25},
		{"id": 3, "name": "Christina", "age": 26},
		{"id": 4, "name": "Elena", "age": 28},
	]
	*/
  }

  getCurrentTime() {
  	return this.http.get('http://date.jsontest.com ').pipe(
  			map(res => res)
  		)
  }

  postJSON() {
  	//const headers = new Headers().set("Content-Type", "application/json");
  	/*
  	var json = JSON.stringify({var1: 'test', var2 : 3});
  	var params = "json=" + json;
  	var headers = new Headers();

  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	*/
	
  	return this.http.post('http://jsonplaceholder.typicode.com/posts',
  		{
	  	  title: 'foo',
	      body: 'bar',
	      userId: 1
  		})
  		.pipe(map(res=> res, 
  			err => {console.log("error")}));
	  }

}
