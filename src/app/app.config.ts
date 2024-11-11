import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { GlobalConfig, provideToastr } from 'ngx-toastr';

const ToastrConfig: Partial<GlobalConfig> = {
  positionClass: 'toast-top-center',
  preventDuplicates: true,
  progressBar: true,
  timeOut: 5000,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideToastr(ToastrConfig),
  ],
};
