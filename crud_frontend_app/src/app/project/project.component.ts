import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from '../services/project/project.model';
import { ProjectService } from '../services/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}
