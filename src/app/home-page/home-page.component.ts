import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/models/product';
import {ProductService} from '../shared/services/product.service';

import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(list => this.products = list);
  }
}
