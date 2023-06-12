import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee, DataEntity } from './employee.interface';

@Injectable()
export class EmployeeDataService {
  private baseURL: string = 'https://reqres.in/api/users';

  private employee_list$: BehaviorSubject<Employee> = new BehaviorSubject<Employee>({} as Employee);
  public people$: Observable<Employee> = this.employee_list$.asObservable();  

  constructor(private http: HttpClient) {
    this.fetchEmployees();
  }

  getJSON(): Observable<Employee> {
    return this.http.get<Employee>(this.baseURL);
  }

  fetchEmployees(): void {
    this.getJSON().subscribe({
      next: (employee: Employee) => {
        this.employee_list$.next(employee);
      },
      error: (error: any) => {
        console.error('Error fetching employees: ', error);
      },
      complete: () => {
        console.log('Employee fetch completed');
      },
    });
  }
  
}
