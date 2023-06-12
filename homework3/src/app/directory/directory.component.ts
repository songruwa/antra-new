import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import {Employee, DataEntity} from '../employee.interface';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  employee_info?: DataEntity[]

  constructor(private employeeDataService: EmployeeDataService) {}

  ngOnInit() {
    this.employeeDataService.people$.subscribe((response: Employee) => {
      this.employee_info = response.data || [];
      console.log(this.employee_info);
    });
  }  

}