import {
  TestBed,
  async
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  AppComponent
} from './app.component';
import {
  DataService
} from './service/data.service';
describe('AppComponent', () => {
  const orderDataMock = [{
    user: 'coach',
    drink: 'long black',
    size: 'medium'
  },
    {
      user: 'ellis',
      drink: 'long black',
      size: 'small'
    },
    {
      user: 'rochelle',
      drink: 'flat white',
      size: 'large'
    },
    {
      user: 'coach',
      drink: 'flat white',
      size: 'large'
    },
    {
      user: 'zoey',
      drink: 'long black',
      size: 'medium'
    },
    {
      user: 'zoey',
      drink: 'short espresso',
      size: 'small'
    },
    {
      user: 'nick',
      drink: 'mocha',
      size: 'large'
    },
    {
      user: 'bill',
      drink: 'supermochacrapucaramelcream',
      size: 'ultra'
    },
    {
      user: 'ellis',
      drink: 'mocha',
      size: 'small'
    },
    {
      user: 'rochelle',
      drink: 'short espresso',
      size: 'small'
    },
    {
      user: 'francis',
      drink: 'long black',
      size: 'small'
    },
    {
      user: 'coach',
      drink: 'mocha',
      size: 'medium'
    },
    {
      user: 'coach',
      drink: 'short espresso',
      size: 'small'
    },
    {
      user: 'rochelle',
      drink: 'long black',
      size: 'medium'
    },
    {
      user: 'bill',
      drink: 'mocha',
      size: 'medium'
    },
    {
      user: 'ellis',
      drink: 'mocha',
      size: 'small'
    },
    {
      user: 'louis',
      drink: 'mocha',
      size: 'small'
    },
    {
      user: 'coach',
      drink: 'latte',
      size: 'medium'
    },
    {
      user: 'zoey',
      drink: 'flat white',
      size: 'large'
    }
  ];
  const priceDataMock = [{
    drink_name: 'short espresso',
    prices: {
      small: 3.0
    }
  },
    {
      drink_name: 'latte',
      prices: {
        small: 3.5,
        medium: 4.0,
        large: 4.5
      }
    },
    {
      drink_name: 'flat white',
      prices: {
        small: 3.5,
        medium: 4.0,
        large: 4.5
      }
    },
    {
      drink_name: 'long black',
      prices: {
        small: 3.25,
        medium: 3.5
      }
    },
    {
      drink_name: 'mocha',
      prices: {
        small: 4.0,
        medium: 4.5,
        large: 5.0
      }
    },
    {
      drink_name: 'supermochacrapucaramelcream',
      prices: {
        large: 5.0,
        huge: 5.5,
        mega: 6.0,
        ultra: 7.0
      }
    }
  ];
  const paymentsDataMock = [{
    user: 'coach',
    amount: 27
  },
    {
      user: 'rochelle',
      amount: 22
    },
    {
      user: 'bill',
      amount: 41
    },
    {
      user: 'zoey',
      amount: 0
    },
    {
      user: 'bill',
      amount: 36
    },
    {
      user: 'nick',
      amount: 48
    },
    {
      user: 'coach',
      amount: 42
    },
    {
      user: 'rochelle',
      amount: 36
    },
    {
      user: 'nick',
      amount: 48
    },
    {
      user: 'francis',
      amount: 45
    },
    {
      user: 'rochelle',
      amount: 27
    },
    {
      user: 'francis',
      amount: 31
    },
    {
      user: 'zoey',
      amount: 9
    },
    {
      user: 'nick',
      amount: 47
    },
    {
      user: 'louis',
      amount: 12
    },
    {
      user: 'rochelle',
      amount: 10
    },
    {
      user: 'zoey',
      amount: 43
    },
    {
      user: 'francis',
      amount: 36
    },
    {
      user: 'zoey',
      amount: 49
    },
    {
      user: 'ellis',
      amount: 24
    }
  ];
  let dataServiceMock: DataService;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'coffee-shop-app'`, async (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('coffee-shop-app');
  }));
});
