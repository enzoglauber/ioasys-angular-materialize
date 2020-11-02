import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CompanyService } from '../../core/services/company.service';
import { Company } from '../../shared/interfaces';

@Injectable()
export class CompanyDetailResolver implements Resolve<Company> {
  constructor(
    private companyService: CompanyService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const id: string = route.params['idcompany']
    return this.companyService.show(id);
  }
}
