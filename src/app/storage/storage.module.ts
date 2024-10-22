import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { SearchHostsComponent } from './components/search-hosts/search-hosts.component';


@NgModule({
  declarations: [
    SearchHostsComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule
  ]
})
export class StorageModule { }
