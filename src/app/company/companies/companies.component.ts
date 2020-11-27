import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { CompanyService } from '../../core/services/company.service';
import { Company } from '../../shared/interfaces';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'] 
})
export class CompaniesComponent implements OnInit {
  @ViewChild('inputSearch') inputSearch: ElementRef;

  isSearchMode = false;
  companies$: Observable<Array<Company>>
  search: string = '';
  search$ = new Subject<string>();

  constructor(
    private companyService: CompanyService
  ) {
    this.companyService.index().subscribe()
    this.companyService.search(this.search$).subscribe();
  }
  
  ngOnInit(): void {
    this.companies$ = this.companyService.companies$
  }

  toggleSearchMode(): void {
    this.isSearchMode = !this.isSearchMode
    console.log('this.input', this.inputSearch);
    
    if(this.inputSearch) {
      setTimeout(() => {
        this.inputSearch.nativeElement.focus()
      }, 500)
    }
  }

  closeSearch(): void {
    this.setSearch('')
    this.toggleSearchMode()
  }

  setSearch(value): void {
    this.search = value;
    this.search$.next(value);
  }

}
