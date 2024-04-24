import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee/employee.service';
import { OnInit } from '@angular/core';
import { Employee } from '../services/employee/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css',
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee;
  employeeId: any;

  constructor(
    private activatedRouteute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeId = this.activatedRouteute.snapshot.paramMap.get('id');
    // alert(this.employeeId);

    this.employeeService.getEmployee(this.employeeId).subscribe((res: any) => {
      this.employee = res;
    });
  }

  updateEmployee() {
    var inputDate = {
      name: this.employee.name,
      designation: this.employee.designation,
      email: this.employee.email,
      phone: this.employee.phone,
    };

    this.employeeService.updateEmployee(inputDate, this.employeeId).subscribe({
      next: (res: any) => {
        alert('Updated successfully');
        this.router.navigate(['employees']);
      },
    });
  }
}
