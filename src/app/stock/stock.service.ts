import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, 'the first stock', 1.99, 3.5, 'this is the first stock', ['IT', 'ANGU']),
    new Stock(2, 'the second stock', 2.99, 2.5, 'this is the second stock', ['IT', 'BAT']),
    new Stock(3, 'the third stock', 3.99, 1.5, 'this is the third stock', ['IT', 'FIN']),
    new Stock(4, 'the forth stock', 4.99, 4.5, 'this is the forth stock', ['IT', 'INTERNET']),
    new Stock(5, 'the fifth stock', 3.99, 3.5, 'this is the fifth stock', ['IT', 'ECON'])
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    var stock = this.stocks.find(stock => stock.id == id);

    if (!stock){
      stock = new Stock(0, '', 0, 0, '', []);
    }
    return stock;
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
