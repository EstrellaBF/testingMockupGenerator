import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	public employees: string;

	getData: string;
	postData: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  	//this.employees = this.employeeService.getEmployees();
  	this.employeeService.getEmployees()
  		.subscribe(data => this.employees  = JSON.stringify(data), 
  			error => console.log(error),
  			() => console.log('se acabó')
  		);
  }

  onTestGet() {
    this.employeeService.getCurrentTime()
      .subscribe(
          data => this.getData = JSON.stringify(data),
          error => console.log(error),
          () => console.log('completed') 
        );
  }

  onTestPost() {
    this.employeeService.postJSON()
    .subscribe(
      data => this.postData = JSON.stringify(data),
      error => console.log(error),
      () => console.log('completed') 
    )
  }

  

}
