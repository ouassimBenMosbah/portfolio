import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export default class ProjectsComponent {
  public projects = [
    {
      name: `Project 1`,
      description: `An angular project`,
      link: `https://github.com/ouassimBenMosbah`,
    },
    {
      name: `Projet 2`,
      description: `another project based on TypeScript and Angular.`,
      link: `https://github.com/ouassimBenMosbah`,
    },
  ];
}
