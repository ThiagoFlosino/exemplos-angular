import { Pedido } from './../pedido/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcessoApiService {

  private pedidosSubject: BehaviorSubject<Pedido>;
  public pedido: Observable<any>;

  constructor (private http: HttpClient) { 
    this.pedidosSubject = new BehaviorSubject<Pedido>({} as Pedido);
    this.pedido = this.pedidosSubject.asObservable();

  }

  getProdutos(): Observable<any>{
    return this.http.get('/api/products');
  }
  getPedido() {
    return this.pedidosSubject.value;
  }
  setPedido(valor:Pedido) {
    this.pedidosSubject.next(valor);
  }
  setProdutoNoPedido(valor: Pedido) {
    this.pedidosSubject.next(valor);
  }
}
