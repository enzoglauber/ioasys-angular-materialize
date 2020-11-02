import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CardCompanyComponent } from './card-company/card-company.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDatailComponent } from './company-datail/company-datail.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [CompaniesComponent, CompanyDatailComponent, CardCompanyComponent],
  imports: [
    SharedModule,
    CompanyRoutingModule,
    CommonModule
  ]
})
export class CompanyModule { }
