import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../home/home-route/home-route.component'),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('../resume/resume-route/resume-route.component'),
    data: {
      resumeSrc: '/assets/images/resume_ouassim.pdf',
    },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('../projects/projects-route/projects-route.component'),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../contact/contact-route/contact-route.component'),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
