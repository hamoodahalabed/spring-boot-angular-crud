import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee/employee.service';
import { Employee } from '../services/employee/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  newEmployee: Employee = {
    id: 0,
    name: '',
    designation: '',
    email: '',
    phone: '',
  };
  constructor(
    private employeeSerive: EmployeeService,
    private router: Router
  ) {}

  AddEmployee() {
    this.employeeSerive.AddEmployee(this.newEmployee).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
        this.router.navigate(['/management']);
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }
}
