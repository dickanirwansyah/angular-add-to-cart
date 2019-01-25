import {Injectable} from '@angular/core';
import {ProdukEntities} from '../entities/produk.entities';

@Injectable()
export class ProductService {

    private products: ProdukEntities[];

    constructor(){
        this.products = [
            { id: "p/001", name: "Iphone 4G", price: 20000, quantity: 10, photo: "assets/ANGULAR-IPHONE.jpg"},
            { id: "p/002", name: "Iphone 5S", price: 40000, quantity: 9, photo: "image1.png"},
            { id: "p/003", name: "Samsung Galaxy", price: 24000, quantity: 7, photo: "image.jpg"},
            { id: "p/003", name: "OVO Smartphone", price: 25000, quantity: 7, photo: "image.jpg"},
            { id: "p/003", name: "Xiaomi Redmi 4x", price: 24000, quantity: 7, photo: "image.jpg"},
            { id: "p/003", name: "Xiaomi Dragon", price: 24000, quantity: 7, photo: "image.jpg"},
            { id: "p/003", name: "Samsung Galaxy S9", price: 24000, quantity: 7, photo: "image.jpg"},
            { id: "p/003", name: "Iphone 6x", price: 24000, quantity: 7, photo: "image.jpg"},
            { id: "p/003", name: "Nexus", price: 24000, quantity: 7, photo: "image.jpg"},
            { id: "p/003", name: "Google Phone", price: 24000, quantity: 7, photo: "image.jpg"}
        ];
    }

    findAll(): ProdukEntities[] {
        return this.products;
    }

    findOne(id: string): ProdukEntities {
        return this.products[this.getSelectedIndex(id)]
    }

    getSelectedIndex(id: string): number {
        for (var i = 0; i < this.products.length; i++){
            if(this.products[i].id == id){
                return i;
            }
        }
        return -1;
    }

}