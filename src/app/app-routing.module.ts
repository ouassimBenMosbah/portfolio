import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/home/home-route/home-route.component'),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./routes/resume/resume-route/resume-route.component'),
    data: {
      resumeSrc: '/assets/images/resume_ouassim.pdf',
    },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./routes/projects/projects-route/projects-route.component'),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./routes/contact/contact-route/contact-route.component'),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
