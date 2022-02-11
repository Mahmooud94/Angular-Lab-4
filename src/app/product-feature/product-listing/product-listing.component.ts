import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
productArray: Product[] = [
  name: 'Camera',
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
