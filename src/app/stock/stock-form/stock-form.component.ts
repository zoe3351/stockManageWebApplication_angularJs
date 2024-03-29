import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock = new Stock(0, "", 0, 0, "", []);

  categories = ["IT", "Internet", "Finance"];


  formModel: FormGroup;

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) {

  }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    //this.stock = this.stockService.getStock(stockId);

    let fb = new FormBuilder();

    this.formModel = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required]],
        desc: [''],
        categories: fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false)
        ], this.categoriesValidator)
      }
    );

    this.stockService.getStock(stockId).subscribe(
      data => {
        this.stock = data;
        this.formModel.reset({
          name: data.name,
          price: data.price,
          desc: data.desc,
          categories: [
            data.categories.indexOf(this.categories[0]) != -1,
            data.categories.indexOf(this.categories[1]) != -1,
            data.categories.indexOf(this.categories[2]) != -1,
          ]
        })
      }
    );
  }

  categoriesValidator(control: FormArray){
    var valid = false;

    control.controls.forEach(control => {
      if(control.value){
        valid = true;
      }
    });

    if (valid) {
      return null;
    } else {
      return {categoriesLength: true};
    }
  }

  cancel(){
    this.router.navigateByUrl('/stock');
  }

  save(){
    this.formModel.value.rating = this.stock.rating;
    var categoriesName = [];
    var index = 0;
    for (var i = 0; i < 3; i++){
      if (this.formModel.value.categories[i]){
        categoriesName[index++] = this.categories[i];
      }
    }

    this.formModel.value.categories = categoriesName;
    console.log(this.stock.rating);
    console.log(this.formModel.value);
    this.router.navigateByUrl('/stock');
  }

}
