import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostWelcomePageComponent } from './components/host-welcome-page/host-welcome-page.component';
import { HostRegistrationComponent } from './components/host-registration/host-registration.component';

const routes: Routes = [
  {
    path: 'become-a-host',
    component: HostWelcomePageComponent,
    },
    {
     path: 'host-registration',
     component: HostRegistrationComponent,
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
