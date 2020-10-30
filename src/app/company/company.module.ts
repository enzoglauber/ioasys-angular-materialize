import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDatailComponent } from './company-datail/company-datail.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [CompaniesComponent, CompanyDatailComponent],
  imports: [
    SharedModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
