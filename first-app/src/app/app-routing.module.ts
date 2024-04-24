import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components that you want to route to
import { HomeComponent } from './home/home.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManagementComponent } from './management-component/management-component.component';
import { NothingComponent } from './nothing/nothing.component';

const routes: Routes = [
  { path: 'management', component: ManagementComponent },
  { path: 'nothing', component: NothingComponent },
  { path: 'employees/:id/edit', component: EmployeeEditComponent },
  { path: 'management/addEmployee', component: AddEmployeeComponent },
  { path: '**', component: HomeComponent },

  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
