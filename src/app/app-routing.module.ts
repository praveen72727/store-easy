import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { DASHBOARD_ROUTES } from './pages/dashboard/dashboard.routes';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo:  'dashboard/home', //'dashboard/home'
    pathMatch: 'full',
  },
  {
    path: 'dashboard', //path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'full Views',
      //allowedRoles: [APPROLES.ADMIN, APPROLES.CALLCENTERAGENT, APPROLES.SYSTEMADMIN, APPROLES.TRAVELAGENT],
    },
    children: DASHBOARD_ROUTES,
    canActivate: [AuthGuard],
  },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  {
    path: '**',
    redirectTo: 'pages/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
