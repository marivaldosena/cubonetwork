import { Injectable } from '@angular/core';
import { Employee } from 'app/employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class EmployeeDataService {
  private employees = [];
  url =  'http://localhost:3000/employees';

  constructor(private http: Http) { }

  async getEmployees(): Promise<any> {
    let response = await this.http.get(this.url).toPromise();
    this.employees = response.json();
    return this.employees;
  }

  createEmployee(employee: Employee) {
    this.http.post(this.url, employee).subscribe(res => {
      console.log(res);
      this.employees.push(res);
    });
  }
}
