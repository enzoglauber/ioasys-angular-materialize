import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { Company } from '../../shared/interfaces';
import { ApiService } from './api.service';

@Injectable()
export class CompanyService {
  private companies = new BehaviorSubject<Array<Company>>(null);
  public companies$ = this.companies.asObservable().pipe(distinctUntilChanged());

  constructor (
    private apiService: ApiService
  ) {}
  
  index(): Observable<any> {
    return this.apiService.get('/enterprises').pipe(
      map(({ enterprises }) => this.setCompany(enterprises))
    );
  }

  getCompany = (): Array<Company> => this.companies.value
  setCompany = (companies: Array<Company>): void => this.nextCompany(companies)
  private nextCompany = (companies: Array<Company>): void => this.companies.next(companies)
}
