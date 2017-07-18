import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor(public router:Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, 'the first stock', 1.99, 3.5, 'this is the first stock', ['IT', 'ANGU']),
      new Stock(2, 'the second stock', 2.99, 2.5, 'this is the second stock', ['IT', 'BAT']),
      new Stock(3, 'the third stock', 3.99, 1.5, 'this is the third stock', ['IT', 'FIN']),
      new Stock(4, 'the forth stock', 4.99, 4.5, 'this is the forth stock', ['IT', 'INTERNET']),
      new Stock(5, 'the fifth stock', 3.99, 3.5, 'this is the fifth stock', ['IT', 'ECON'])
    ];
  }

  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/' + stock.id);

  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) {
  }
}
