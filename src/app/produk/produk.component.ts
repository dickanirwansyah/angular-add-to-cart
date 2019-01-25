import {Component, OnInit} from '@angular/core';
import {ProdukEntities} from '../entities/produk.entities';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'produk-component',
    templateUrl: './index.component.html',
    styles: [`
        div {
            padding-top: 10px
        }
    `]
})
export class ProdukComponent implements OnInit{
    
    productEntities: ProdukEntities[];
    constructor(private produkService: ProductService){}

    ngOnInit(){
        this.findAll();
    }

    /** list dummy produk item  */
    findAll(){
       this.productEntities = this.produkService.findAll();
       console.log(this.productEntities);
    }

}