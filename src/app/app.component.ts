import { Component } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { EmployeeDataService } from "./employee-data.service";
import { Employee } from 'app/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css.scss']
})
export class AppComponent implements OnInit {
  title = 'CADASTRE-SE';
  chart_data = {};
  chart_options = {};
  chart_type = '';
  total_share = 0;
  employees = [];

  constructor(private employeeService: EmployeeDataService) {
  }

  async ngOnInit() {
    await this.getEmployees();

  }

  async ngOnchanges() {
  }

  enableChart() {
    let rotulos = this.employees.map(e => e.name + ' ' + e.lastname);
    this.chart_type = 'doughnut';
    this.chart_data = {
      labels: rotulos,
      datasets: [
        {
          data: this.employees.map(e => e.share),
          backgroundColor: [
            '#F44336', '#9C27B0', '#673AB7', '#FF9800',
            '#E91E63', '#03A9F4', '#00BCD4', '#795548',
            '#009688', '#4CAF50', '#8BC34A', '#9E9E9E',
            '#673AB7', '#3F51B5', '#2196F3', '#FF5722',
            '#CDDC39', '#FFEB3B', '#FFC107', '#607D8B'
          ]
        }
      ]
    };
    this.chart_options = {
      responsive: true,
      legend: {
        position: 'right',
        labels: {
          fontSize: 14,
          padding: 5,
          boxWidth: 20
        }
      },
      animation: {
        animateScale: true
      },
      maintainAspectRatio: true,
    };
  }

  getTotalShare() {
    return this.employees.reduce((total, e) => total + e.share, 0);
  }

  getEmployees() {
    this
      .employeeService
      .getEmployees()
      .then(res => {
        this.employees = res;
        this.total_share = this.getTotalShare();
        this.enableChart();
      })
    ;
  }
}
