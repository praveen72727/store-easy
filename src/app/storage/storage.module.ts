import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { StorageRoutingModule } from './storage-routing.module';
import { SearchHostsComponent } from './components/search-hosts/search-hosts.component';


@NgModule({
  declarations: [
    SearchHostsComponent
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
