import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectsListComponent } from '../features/projects-list/projects-list.component';

@Component({
  selector: 'app-projects-route',
  templateUrl: './projects-route.component.html',
  styleUrl: './projects-route.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ProjectsListComponent],
})
export default class ProjectsRouteComponent {}
