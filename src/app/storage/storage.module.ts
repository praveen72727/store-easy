import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { StorageRoutingModule } from './storage-routing.module';
import { SearchHostsComponent } from './components/search-hosts/search-hosts.component';
import { StorageDetailsComponent } from './components/storage-details/storage-details.component';
import { StartAndDurationComponent } from './components/start-and-duration/start-and-duration.component';
import { StoringTypeComponent } from './components/storing-type/storing-type.component';
import { ProtectionPlanComponent } from './components/protection-plan/protection-plan.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';


@NgModule({
  declarations: [
    SearchHostsComponent,
    StorageDetailsComponent,
    StartAndDurationComponent,
    StoringTypeComponent,
    ProtectionPlanComponent,
    PaymentInfoComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ]
})
export class StorageModule { }
