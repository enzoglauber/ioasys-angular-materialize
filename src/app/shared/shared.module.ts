import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShowAuthedDirective } from './directives/show-authed.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShowAuthedDirective
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShowAuthedDirective
  ],
})
export class SharedModule { }
