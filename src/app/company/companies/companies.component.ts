import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from '../../core/services/company.service';
import { Company } from '../../shared/interfaces';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies$: Observable<Array<Company>>
  constructor(
    private companyService: CompanyService
  ) {
    this.companyService.index().subscribe()
  }
  
  ngOnInit(): void {
    this.companies$ = this.companyService.companies$
    this.companies$.subscribe(companies => console.log(companies, 'companies'))

  }

}
