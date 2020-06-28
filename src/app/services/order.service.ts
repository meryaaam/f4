import { Injectable } from '@angular/core';
import { ProductOrder } from '../models/ProductOrder.model';
import { ProductOrders } from '../models/ProductOrders.model';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private productsUrl = 'http://localhost:8034/api/products';
  private ordersUrl = 'http://localhost:8034/api/orders';

  private productOrder: ProductOrder;
  private orders: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  private total: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
      return this.http.get( this.productsUrl);
  }

  saveOrder(order: ProductOrders) {
      return this.http.post(this.ordersUrl, order);
  }

  set SelectedProductOrder(value: ProductOrder) {
      this.productOrder = value;
      this.productOrderSubject.next();
  }

  get SelectedProductOrder() {
      return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
      this.orders = value;
      this.ordersSubject.next();
  }

  get ProductOrders() {
      return this.orders;
  }

  get Total() {
      return this.total;
  }

  set Total(value: number) {
      this.total = value;
      this.totalSubject.next();
  }
}
