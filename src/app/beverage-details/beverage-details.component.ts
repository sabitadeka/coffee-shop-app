import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-beverage-details',
  templateUrl: './beverage-details.component.html',
  styleUrls: ['./beverage-details.component.css']
})
export class BeverageDetailsComponent implements OnInit {
  @Input() pricesData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
