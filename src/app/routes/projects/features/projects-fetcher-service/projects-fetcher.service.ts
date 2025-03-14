import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IProject {
  title: string;
  description: string;
  codeSrc: string;
  previewSrc?: string;
  liveDemoSrc?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsFetcherService {
  public fetchProjects(): Observable<IProject[]> {
    return of([
      {
        title: 'Self-service bicycles',
        description: `Self-Service Bicycles est une application web permettant d'afficher en temps réel la disponibilité des vélos et des places dans les stations en libre-service via l'API JCDecaux. Développée avec Angular, elle utilise un serveur proxy pour contourner les restrictions CORS. Ce projet met en avant mes compétences en intégration d'API, en gestion d'état et en développement front-end structuré.`,
        codeSrc: 'https://github.com/ouassimBenMosbah/self-service-bicycles',
        previewSrc:
          'https://github.com/ouassimBenMosbah/self-service-bicycles/raw/master/src/assets/images/demo.gif',
        liveDemoSrc: 'https://ouassimbenmosbah.github.io/self-service-bicycles',
      },
      {
        title: 'Short reckonings',
        description:
          'Short Reckonings est une application web permettant de centraliser des dépenses communes et de simplifier le remboursement entre participants, à la manière de Tricount. Développée avec Angular, Material Design, Jest et Cypress, elle met en avant mes compétences en algorithmie et en développement front-end structuré et testé.',
        codeSrc: 'https://github.com/ouassimBenMosbah/short-reckonings',
        previewSrc:
          'https://raw.githubusercontent.com/ouassimBenMosbah/short-reckonings/master/src/assets/demo.gif',
        liveDemoSrc: 'https://ouassimbenmosbah.github.io/short-reckonings',
      },
      {
        title: 'Portfolio',
        description:
          'Ce projet est le site que vous consultez actuellement. Conçue pour présenter mes projets, compétences et parcours professionnel, il a été développé en Angular et testé en jest.',
        codeSrc: 'https://github.com/ouassimBenMosbah/portfolio',
      },
    ]);
  }
}
