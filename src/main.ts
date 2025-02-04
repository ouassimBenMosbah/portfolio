import {
  enableProdMode,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  bootstrapApplication,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app/routes/root/app-routing.module';
import { AppRootComponent } from './app/routes/root/app-root/app-root.component';
import { environment } from './environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppRootComponent, {
  providers: [
    provideAnimationsAsync(),
    provideClientHydration(withEventReplay()),
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
  ],
});
