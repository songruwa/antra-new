import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeDataService } from '../employee-data.service';
import { Employee, DataEntity } from '../employee.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  requiredForm!: FormGroup;
  submittedData: any = null;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private employeeDataService: EmployeeDataService){}

  ngOnInit(): void {
    this.employeeDataService.people$.subscribe((response: Employee) => {
      let names: string[] = [];
      if(response && response.data){
        names = response.data.map(employee => `${employee.first_name} ${employee.last_name}`);
      }
      
      this.requiredForm = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(`^(${names.join('|')})$`)]],
        message: ['', [Validators.required, Validators.minLength(10)]]
      });
    });
  }

  get f() {
    return this.requiredForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.requiredForm.valid) {
      this.submittedData = this.requiredForm.value;
    }
  }
}
