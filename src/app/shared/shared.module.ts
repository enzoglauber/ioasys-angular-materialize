import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './components/loading/loading.component';
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
    FormsModule,
    ReactiveFormsModule,

    HeaderComponent,
    FooterComponent,
    ShowAuthedDirective,
    LoadingComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShowAuthedDirective,
    LoadingComponent
  ],
})
export class SharedModule { }
