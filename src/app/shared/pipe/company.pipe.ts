import { Pipe, PipeTransform } from '@angular/core';
import { CompanyService } from '../service/company.service';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  constructor(private companyService: CompanyService) { }

  transform(value: string, ...args: any[]): any {
    return this.companyService.findById(value);
  }

}
