import {
  TestBed
} from '@angular/core/testing';
import {
  HttpClientModule
} from '@angular/common/http';

import {
  DataService
} from './data.service';
import {
  HttpTestingController
} from '@angular/common/http/testing';
export interface Order {
  user: string;
  drink: string;
  size: string;
}

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });
  it('should be created', () => {
    const service: DataService = TestBed.inject(DataService);
    expect(service).toBeTruthy();
  });
});


