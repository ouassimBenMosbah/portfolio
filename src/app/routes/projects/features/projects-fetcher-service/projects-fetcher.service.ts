import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IProject {
  title: string;
  description: string;
  codeSrc: string;
  previewSrc: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsFetcherService {
  public fetchProjects(): Observable<IProject[]> {
    return of([
      {
        title: `Projet 1`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        codeSrc: `https://github.com/ouassimBenMosbah`,
        previewSrc: '/assets/images/project1.jpeg',
      },
      {
        title: `Projet 2`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        codeSrc: `https://github.com/ouassimBenMosbah`,
        previewSrc: '/assets/images/project2.jpeg',
      },
    ]);
  }
}
