import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './components/loading/loading.component';
import { AutofocusDirective } from './directives/auto-focus.directive';
import { ShowAuthedDirective } from './directives/show-authed.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CompanyAbbr } from './pipes/company-abbr.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    HeaderComponent,
    FooterComponent,
    LoadingComponent,

    CompanyAbbr,
    AutofocusDirective,
    ShowAuthedDirective,    
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    
    CompanyAbbr,
    AutofocusDirective,
    ShowAuthedDirective,
  ],
})
export class SharedModule { }
