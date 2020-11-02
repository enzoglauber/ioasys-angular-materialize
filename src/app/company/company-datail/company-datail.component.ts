import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Company } from '../../shared/interfaces';

@Component({
  selector: 'app-company-datail',
  templateUrl: './company-datail.component.html',
  styleUrls: ['./company-datail.component.scss']
})
export class CompanyDatailComponent implements OnInit {
  company: Company;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { company: Company }) => {
      this.company = data.company
    });
  }

}
