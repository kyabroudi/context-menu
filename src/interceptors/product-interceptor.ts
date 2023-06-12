import {ModelInterceptorContract} from "cast-response";
import {Product} from "../model/Product";

export class ProductInterceptor implements ModelInterceptorContract<Product> {
  send(model: Partial<Product>): Partial<Product> {
    //  console.log('model send', model);

    return model;
  }

  receive(model: Product): Product {
    // console.log('model recieve', model);
    return model;
  }
}
