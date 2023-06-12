import {Component} from '@angular/core';
import {ContextMenuActionContract} from "../shared/context-menu-action-contract";
import {ProductService} from "../services/product.service";
import {Product} from "../model/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-tour-of-heroes';
  displayedColumns: string[] = ['id', 'title', 'description', 'price'];
  dataSource: Product[] = [];
  actions: ContextMenuActionContract<Product>[] = [
    {
      name: 'view',
      type: 'action',
      label: 'view',
      icon: 'eye',
      callback: item => {
        //  this.view$.next(item);
        console.log(item);
      },
    },
    {
      name: 'edit',
      type: 'action',
      label: 'edit',
      icon: 'eye',
      callback: item => {
        // this.edit$.next(item);
        console.log(item);
      },
    }
  ]

  constructor(private perService: ProductService) {
    this.perService.getProducts()
      .subscribe((items) => {
        console.log(items);
        this.dataSource = items;
      })
  }

}
