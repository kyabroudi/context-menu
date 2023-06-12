import {InterceptModel} from "cast-response";
import {ProductInterceptor} from "../interceptors/product-interceptor";


const {send, receive} = new ProductInterceptor();

@InterceptModel({send, receive})
export class Product {
  id!: number;
  title!: string;
  description!: string;
  price!: number;
  discountPercentage!: number;
}
