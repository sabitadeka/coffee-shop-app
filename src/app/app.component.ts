import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  DataService
} from './service/data.service';
import {
  forkJoin
} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coffee-shop-app';
  isLoadingState = true;
  restServiceError = false;
  coffeeShopData: any = {};
  userArray = ['coach', 'rochelle', 'bill', 'zoey', 'nick', 'francis', 'louis', 'ellis'];
  arraOfDues: Array < any > = [];
  constructor(private dataService: DataService) {}
  /**
   * Initialize the app
   */
  ngOnInit() {
    this.loadJSONDataAsynchronously();
  }
  /**
   * Load prices.json orders.json, payments.json data asynchronously
   * DataService file loads these json data
   */
  loadJSONDataAsynchronously() {
    this.isLoadingState = true;
    const arrOfOrderMadeByTheUser: Array < any > = [];
    const arrOfTotalOrderCost: Array < any > = [];
    const arrOfTotalPaymentCost: Array < any > = [];
    /**
     * GET list of beverages
     * GET list of payments
     * GET list of prices with size
     * From Dataservice
     */
    const ordersData = this.dataService.getListOfBeverages();
    const paymentsData = this.dataService.getListOfPayments();
    const pricesData = this.dataService.getListOfBeveragesWithSizeAndPrice();
    forkJoin([ordersData, paymentsData, pricesData]).subscribe(
      res => {
        this.coffeeShopData = {
          orderData: this.extractDataToUse(res[0]),
          paymentData: this.extractDataToUse(res[1]),
          priceData: this.extractDataToUse(res[2]),
        };
        this.isLoadingState = false;

        // For each order in order data file append the price property in order data
        this.coffeeShopData.orderData.forEach(order => {
          const key = 'price';
          order[key] = this.derivePriceOfTheDrink(this.coffeeShopData.priceData, order.drink, order.size);
        });
        // Sorting the order.json based for each user
        this.userArray.forEach(username => {
          const sortedOrderByTheUser = this.sortOrdersBasedOnUser(this.coffeeShopData.orderData, username);
          arrOfOrderMadeByTheUser.push(sortedOrderByTheUser);
          // Sorting the orders for each user
          const totalPaymentByTheUser = this.deriveTotalPaymentCost(this.coffeeShopData.paymentData, username);
          arrOfTotalPaymentCost.push(totalPaymentByTheUser);
        });

        // Calculate the total order made by the user
        arrOfOrderMadeByTheUser.forEach(orderByuser => {
          const arr2 = this.deriveTotalOrderCost(orderByuser);
          arrOfTotalOrderCost.push(arr2);
        });
        for (let i = 0; i < this.userArray.length; i++) {
          const dueAmount = arrOfTotalPaymentCost[i] - arrOfTotalOrderCost[i];
          this.arraOfDues.push({
            totalPayment: arrOfTotalPaymentCost[i],
            totalOrder: arrOfTotalOrderCost[i],
            dueAmount,
            user: this.userArray[i]
          });
        }
      },
      () => {
        this.restServiceError = true;
        this.isLoadingState = false;
      }
    );
  }
  extractDataToUse(res) {
    return res;
  }

  /**
   * Clubbed together the orders made by the same user
   */
  sortOrdersBasedOnUser(orderData, userName: string) {
    const ordersPerPerson: Array < any > = [];
    orderData.forEach(order => {
      if (order.user === userName) {
        ordersPerPerson.push(order);
      }
    });
    return ordersPerPerson;
  }

  /**
   * For each user checking the price of the drink in the price json data
   * And mapping the price for the user for the drink ordered in the price json data
   */
  derivePriceOfTheDrink(pricesArray, drinkName, drinkSize) {
    const drinkObj = pricesArray.find((name) => name.drink_name === drinkName);
    return drinkObj.prices[drinkSize];
  }

  /**
   * Calculate total cost of the orders made by the user
   */
  deriveTotalOrderCost(ordersArray) {
    let totalOrderCost = 0;
    ordersArray.forEach(order => {
      totalOrderCost = totalOrderCost + order.price;
    });
    return totalOrderCost;
  }

  /**
   * Calculate total payments made by the user
   */
  deriveTotalPaymentCost(paymentsArray, userName) {
    let totalPaymentCost = 0;
    paymentsArray.forEach(order => {
      if (order.user === userName) {
        totalPaymentCost = totalPaymentCost + order.amount;
      }
    });
    return totalPaymentCost;
  }
}
