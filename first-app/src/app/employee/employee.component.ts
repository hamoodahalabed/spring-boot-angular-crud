import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Employee } from '../services/employee/employee.model';
import { EmployeeService } from '../services/employee/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  tempEmployee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number, action): void {
    let snackBarRef = this.snackBar.open('Employee deleted!', action, {
      duration: 2000,
    });

    this.employeeService.getEmployee(id).subscribe(
      (employee: Employee) => {
        this.tempEmployee = employee;
        console.log(this.tempEmployee); // Display or use the employee data here
      },
      (error) => {
        console.error('Error fetching employee:', error);
      }
    );

    snackBarRef.afterDismissed().subscribe(() => {});

    snackBarRef.onAction().subscribe(() => {
      this.employeeService.AddEmployee(this.tempEmployee).subscribe(
        (response) => {
          console.log('Employee added successfully:', response);
          this.router
            .navigateByUrl('/management', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/management']);
            });
        },
        (error) => {
          console.error('Error adding employee:', error);
        }
      );
    });

    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
