import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-balancesheet',
  templateUrl: './customer-balancesheet.component.html',
  styleUrls: ['./customer-balancesheet.component.css']
})
export class CustomerBalancesheetComponent implements OnInit {
  @Input() arraOfDuesPerUser = [];
  constructor() { }

  ngOnInit(): void {
  }

}
