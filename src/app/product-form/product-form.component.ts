import { Component, Output, EventEmitter } from '@angular/core';

@Component(
    {
        selector: 'add-product',
        templateUrl:'./product-form.component.html'
    }
)

export class ProductFormComponent
{
    @Output() onAddNewProduct : EventEmitter<any> = new EventEmitter();
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: string;
    starRating: string;
    imageUrl: string;

    addNewProduct()
    {
        this.onAddNewProduct.emit(
            {
                productName: this.productName,
                productCode: this.productCode,
                releaseDate: this.releaseDate,
                description: this.description,
                price: this.price,
                starRating: this.starRating,
                imageUrl: this.imageUrl
            }
        )

        this.productName = "";
        this.productCode = "";
        this.releaseDate = "";
        this.description = "";
        this.price = "";
        this.starRating = "";
        this.imageUrl = "";
    }
}
