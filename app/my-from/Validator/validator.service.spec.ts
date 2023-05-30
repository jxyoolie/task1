import { TestBed } from '@angular/core/testing';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

beforeEach(() => {
  TestBed.configureTestingModule({});
  service = TestBed.inject(ValidatorService);
});

it('should be created', () => {
  expect(service).toBeTruthy();
});

it('перевірка чи число більше 3', () => {
  let s = service.validate_number(-15);
  expect(s).toBe(false);
});

});
