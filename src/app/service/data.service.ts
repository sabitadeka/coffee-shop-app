import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  orderUrl = 'assets/data/orders.json';
  paymentsrUrl = 'assets/data/payments.json';
  pricesUrl = 'assets/data/prices.json';

  constructor(private httpClient: HttpClient) {}

  /**
   *  Calls the service to GET the list of prices of coffee
   */
  getListOfBeverages() {
    return this.httpClient.get(this.orderUrl);
  }
  /**
   *  Calls the service to GET the list of beverages with size and price
   */
  getListOfBeveragesWithSizeAndPrice() {
    return this.httpClient.get(this.pricesUrl);
  }
  /**
   *  Calls the service to GET the list payments made by the customer
   */
  getListOfPayments() {
    return this.httpClient.get(this.paymentsrUrl);
  }
}

