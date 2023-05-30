// ionic generate service validator

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
 
  validate_number (value:number) {
    if (value>3) return true;
    else return false;
  }
  
  constructor() { }
}