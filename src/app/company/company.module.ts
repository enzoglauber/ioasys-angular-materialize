import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDatailComponent } from './company-datail/company-datail.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CardCompanyComponent } from './card-company/card-company.component';

@NgModule({
  declarations: [CompaniesComponent, CompanyDatailComponent, CardCompanyComponent],
  imports: [
    SharedModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
