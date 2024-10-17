import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  public projects = [
    {
      name: 'Projet 1',
      description: "Un projet en Angular sur lequel j'ai travaillé.",
      link: 'https://github.com/ouassimBenMosbah',
    },
    {
      name: 'Projet 2',
      description: 'Un autre projet basé sur TypeScript et Angular.',
      link: 'https://github.com/ouassimBenMosbah',
    },
  ];
  constructor() {}

  public ngOnInit(): void {}
}
