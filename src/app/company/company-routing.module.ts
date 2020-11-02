import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies/companies.component';
import { CompanyDatailComponent } from './company-datail/company-datail.component';
import { CompanyDetailResolver } from './company-datail/company-detail-resolver.service';

const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'company/:idcompany',
    component: CompanyDatailComponent,
    resolve: {
      company: CompanyDetailResolver
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
