import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department.model';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8080/api/departments/';

  constructor(private http: HttpClient) {}

  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
