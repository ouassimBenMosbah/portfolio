import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectPreviewComponent } from '../../presentational/project-preview/project-preview.component';
import { ProjectsFetcherService } from '../projects-fetcher-service/projects-fetcher.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, ProjectPreviewComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  public projects$ = inject(ProjectsFetcherService).fetchProjects();
}
