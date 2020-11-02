import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "companyAbbr" })
export class CompanyAbbr implements PipeTransform {
  transform(value: string): string {
    const formatted = value.toUpperCase().trim().replace(/[^\w\s]/gi, '');
    return `${formatted.charAt(0)}${formatted.charAt(formatted.length-1)}`;
  }
}