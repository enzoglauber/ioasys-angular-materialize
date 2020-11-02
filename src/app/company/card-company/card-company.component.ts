import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.scss']
})
export class CardCompanyComponent implements OnInit {
  @Input() company: Company;

  constructor() { }

  ngOnInit(): void {
    // console.log('company: ', this.company)
  }

}
