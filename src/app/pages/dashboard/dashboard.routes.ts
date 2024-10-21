import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../page/page.module').then((m) => m.PageModule),
  },
  // {
  //   path: 'customer',
  //   loadChildren: () => import('../../customer/customer.module').then((m) => m.CustomerModule),
  // },
  // {
  //   path: 'pax',
  //   loadChildren: () => import('../../pax/pax.module').then((m) => m.PaxModule),
  // },
  // {
  //   path: 'bank',
  //   loadChildren: () => import('../../bank/bank.module').then((m) => m.BankModule),
  // },
  // {
  //   path: 'branch',
  //   loadChildren: () => import('../../branch/branch.module').then((m) => m.BranchModule),
  // },
  // {
  //   path: 'product',
  //   loadChildren: () => import('../../product-module/product-module.module').then((m) => m.ProductModuleModule),
  // },
  // {
  //   path: 'budget',
  //   loadChildren: () => import('../../budgets/budgets.module').then((m) => m.BudgetsModule),
  // },
  // {
  //   path: 'customer-contract',
  //   loadChildren: () =>
  //     import('../../customer-contract/customer-contract.module').then((m) => m.CustomerContractModule),
  // },
  // {
  //   path: 'lead',
  //   loadChildren: () => import('../../lead/lead.module').then((m) => m.LeadModule),
  // },
  // {
  //   path: 'hotel-master',
  //   loadChildren: () => import('../../hotel-master/hotel-master.module').then((m) => m.HotelMasterModule),
  // },
  // {
  //   path: 'hospital',
  //   loadChildren: () => import('../../hospital/hospital.module').then((m) => m.HospitalModule),
  // },
  // {
  //   path: 'flow',
  //   loadChildren: () =>
  //     import('../../call-flow-management-next-gen/call-flow-management-next-gen.module').then(
  //       (m) => m.CallFlowManagementNextGenModule
  //     ),
  // },
];
