import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pages/home/home.component'),
  },
  {
    path: 'resume',
    loadComponent: () => import('./components/pages/resume/resume.component'),
    data: {
      resumeSrc: '/assets/images/resume_ouassim.pdf',
    },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/pages/projects/projects.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/pages/contact/contact.component'),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
