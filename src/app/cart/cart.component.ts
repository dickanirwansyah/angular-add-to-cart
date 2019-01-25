import {Component, OnInit} from '@angular/core';
import {ItemEntities} from '../entities/item.entities';
import {ProdukEntities} from '../entities/produk.entities';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'cart-component',
    templateUrl: './index.component.html',
    styles: [`
        div {
            padding-top: 10px
        }
    `]
})
export class CartComponent implements OnInit{

    public items: ItemEntities[] = [];
    public total: number = 0;

    constructor(
        private activateRoute: ActivatedRoute,
        private produkService: ProductService
    ){}

    ngOnInit(){
        this.activateRoute.params.subscribe(params => {
            var id = params['id'];
            if(id){
                var item: ItemEntities = {
                    product: this.produkService.findOne(id),
                    quantity: 1
                };
                if(localStorage.getItem('cart') == null){
                    let cart: any = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }else{
                    let cart: any = JSON.parse(localStorage.getItem('cart'));
                    let index: number = -1;
                    for (var i=0; i < cart.length; i++){
                        let item: ItemEntities = JSON.parse(cart[i]);
                        if(item.product.id == id){
                            index = i;
                            break;
                        }
                    }
                    if(index == -1){
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }else{
                        let item: ItemEntities = JSON.parse(cart[index]);
                        item.quantity += 1;
                        cart[index] = JSON.stringify(item);
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                }
                this.loadCart();
            }else{
                this.loadCart();
            }
        });
    }

    loadCart(): void {
        this.total = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i=0; i < cart.length; i++){
            let item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
            this.total += item.product.price * item.quantity;
        }
    }

    remove(id: string): void {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let index: number=-1;
        for (var i=0; i < cart.length; i++){
            let item: ItemEntities = JSON.parse(cart[i]);
            if(item.product.id == id){
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        this.loadCart();
    }
}