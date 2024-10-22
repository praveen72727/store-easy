import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHostsComponent } from './components/search-hosts/search-hosts.component';

const routes: Routes = [
   {
   path: 'search-hosts',
   component: SearchHostsComponent,
   }
  // {
  //   path: 'all-leads-information-list',
  //   component: LeadsLayoutInfoComponent,
  //   children: [
  //     {
  //       path: 'agent/:agentId',
  //       component: SelectLeadInfoDetailsComponent,
  //       children: [
  //         {
  //           path: '', // Empty path to make it the default child route
  //           component: SelectLeadFollowUpListComponent,
  //           outlet: 'followUp', // Assigning to auxiliary outlet
  //         },
  //         {
  //           path: '', // Empty path to make it the default child route
  //           component: SelectLeadNotesListComponent,
  //           outlet: 'notes', // Assigning to auxiliary outlet
  //         },
  //         {
  //           path: '', // Empty path to make it the default child route
  //           component: SelectLeadAttachmentsListComponent,
  //           outlet: 'attachments', // Assigning to auxiliary outlet
  //         },
  //       ],
  //     },
  //     {
  //       path: 'task/:taskId',
  //       component: SelectLeadInfoDetailsComponent,
  //     },
  //     {
  //       path: 'customer/:customerId',
  //       component: SelectLeadInfoDetailsComponent,
  //     },
  //     {
  //       path: 'lead/:leadId',
  //       component: SelectLeadInfoDetailsComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'lead-details',
  //   component: LeadDetailsComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-profile-info',
  //   component: LeadProfileInfoComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-profile-info/:id',
  //   component: LeadProfileInfoComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-profile',
  //   component: LeadProfileComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-profile/:id',
  //   component: LeadProfileComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-address',
  //   component: LeadAddressComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-address/:id',
  //   component: LeadAddressComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-owner-info',
  //   component: LeadGenNextInformationComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-owner-info/:leadId',
  //   component: LeadGenNextInformationComponent,
  //   data: {
  //     title: 'Lead Owner Information',
  //   },
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-owner-info-list',
  //   component: LeadGenNextInformationListComponent,
  //   data: {
  //     title: 'Lead Owner Information LIst',
  //   },
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-upload',
  //   component: LeadNextGenUploadComponent,
  //   data: {
  //     title: 'Lead Upload',
  //   },
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'lead-upload/:id',
  //   component: LeadNextGenUploadComponent,
  //   data: {
  //     title: 'Lead Upload',
  //   },
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'batch-upload-search',
  //   component: BatchUploadSearchComponent,
  //   data: {
  //     title: 'Batch Upload Report',
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
