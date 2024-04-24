import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Department } from '../services/department/department.model';
import { DepartmentService } from '../services/department/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartment();
  }

  loadDepartment(): void {
    this.departmentService
      .getAllDepartment()
      .subscribe((data: Department[]) => {
        this.departments = data;
      });
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.loadDepartment();
    });
  }
}
