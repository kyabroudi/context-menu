import {Injectable} from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {CastResponse, CastResponseContainer} from "cast-response";
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";


/*@CastResponseContainer({
  $pagination: {
    model: () => Pagination,
    shape: {
      'rs.*': () => JobTitle,
    },
  },
  $default: {
    model: () => JobTitle,
  },
})*/
@CastResponseContainer({
  $default: {
    model: () => Product,
  },
})
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  @CastResponse()
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://dummyjson.com/products")
      .pipe(
        map((resp: any) => {
          return resp.products;
        }));
  }

}
