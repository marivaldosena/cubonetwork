import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { EmployeeDataService } from "../employee-data.service";
import { Employee } from 'app/employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @ViewChild('f') form: any;
  model: Employee = new Employee();

  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.createEmployee(this.model);
      console.log(this);
      this.form.reset();
    }
  }

  private createEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee);
  }
}
