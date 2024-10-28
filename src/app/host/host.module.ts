import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { FileUploadModule } from 'ng2-file-upload';

import { HostRoutingModule } from './host-routing.module';
import { HostWelcomePageComponent } from './components/host-welcome-page/host-welcome-page.component';
import { HostRegistrationComponent } from './components/host-registration/host-registration.component';


@NgModule({
  declarations: [
    HostWelcomePageComponent,
    HostRegistrationComponent
  ],
  imports: [
    CommonModule,
    HostRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FileUploadModule
  ]
})
export class HostModule { }
