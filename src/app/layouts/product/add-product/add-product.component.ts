import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { StorageService } from 'src/app/shared/services/storage.service'
import { Product } from 'src/app/shared/models/product';

declare var $: any;
declare var require: any;
declare var toastr: any;
const shortId = require('shortid');
const moment = require('moment');

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: [ './add-product.component.scss' ]
})
export class AddProductComponent implements OnInit {
	product: Product = new Product();
	constructor(private productService: ProductService, private storageService: StorageService) {}

	ngOnInit() {
		this.storageService.GetImageDemo().subscribe(path=>{
			this.product.productImageUrl = path;
		});
	}

	createProduct(productForm: NgForm) {
		productForm.value['productId'] = 'PROD_' + shortId.generate();
		productForm.value['productAdded'] = moment().unix();
		productForm.value['ratings'] = Math.floor(Math.random() * 5 + 1);
		if (productForm.value['productImageUrl'] === undefined) {

			productForm.value['productImageUrl'] = 'http://via.placeholder.com/640x360/007bff/ffffff';
			//productForm.value['productImageUrl'] = this.storageService.GetImageDemo();
			
		}

		productForm.value['favourite'] = false;

		const date = productForm.value['productAdded'];

		this.productService.createProduct(productForm.value);

		this.product = new Product();

		$('#exampleModalLong').modal('hide');

		toastr.success('product ' + productForm.value['productName'] + 'is added successfully', 'Product Creation');
	}
	createProduct2(product: Product) {
		//product= new Product();
		console.log(product)
		product.productId = shortId.generate();
		product.productAdded = moment().unix();
		product.ratings = Math.floor(Math.random() * 5 + 1);
		//if (productForm.value['productImageUrl'] === undefined) {
			product.productImageUrl = 'http://via.placeholder.com/640x360/007bff/ffffff';
		//}
		//this.product.productName = 'Paquete Matrimonial';
		//this.product.productPrice = 100;
		//this.product.productQuatity = 1;
		//this.product.productCategory =  'Eventos';
		//this.product.productQuatity = 10;
		//this.product.productDescription='Este es un paquete matrimonial que cuenta con sillas y mesas...';
		product.favourite = false;

		const date = this.product.productAdded;
		console.log(product)
		this.productService.createProduct(product);

		this.product = new Product();

		$('#exampleModalLong').modal('hide');

		toastr.success('product ' + this.product.productName + 'is added successfully', 'Product Creation');
	}
}
