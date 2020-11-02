import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, switchMap } from 'rxjs/operators';

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

  show(id: string): Observable<Array<Company>> {
    return this.apiService.get(`/enterprises/${id}`).pipe(pluck('enterprise'));
  }

  search(terms: Subject<string>): Observable<any> {
    return terms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(name => this.searchBy(name))
    )
  }

  searchBy(name: string): Observable<any> {
    const search = `?name=${name}`
    return this.apiService.get(`/enterprises${search}`).pipe(
      map(({ enterprises }) => this.setCompany(enterprises))
    );
  }

  getCompany = (): Array<Company> => this.companies.value
  setCompany = (companies: Array<Company>): void => this.nextCompany(companies)
  private nextCompany = (companies: Array<Company>): void => this.companies.next(companies)
}

// index – Lista os dados da tabela
// show – Mostra um item específico
// create – Retorna a View para criar um item da tabela
// store – Salva o novo item na tabela
// edit – Retorna a View para edição do dado
// update – Salva a atualização do dado
// destroy – Remove o dado