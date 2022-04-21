import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  title:String="Product List";
  //product is the model class for a product item
  products: ProductModel[] = [];
  //image properties
  imageWidth: number=50;
  imageMargin: number=2;
  
  showImage: boolean=false;
  constructor( private productService:ProductService, private router:Router, public _auth:AuthService) { 
  }

  toggleImage():void{
    this.showImage=!this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      console.log(this.products)
    })
  }

}
