import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HttpTokenInterceptor } from './interceptors';
import { ApiService, AuthGuard, JwtService, UserService } from './services';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    JwtService,
    UserService,
    LoadingService
  ]
})
export class CoreModule { }
