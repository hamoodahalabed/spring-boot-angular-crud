import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/employees/';

  constructor(private http: HttpClient) {} // inject httpclint

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}${employeeId}`);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

  updateEmployee(inputDate: Employee, employeeId: number) {
    return this.http.put(`${this.apiUrl}${employeeId}`, inputDate);
  }

  AddEmployee(newEmployee: Employee): Observable<any> {
    return this.http.post(this.apiUrl, newEmployee);
  }
}
