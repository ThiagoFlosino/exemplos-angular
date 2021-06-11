import { Produto } from './../produto/produto';
import { Component, OnChanges, OnInit } from '@angular/core';
import { AcessoApiService } from '../service/acesso-api.service';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  pedido: Pedido = {} as Pedido;
  valorTotal: number = 0;
  constructor(private produtoApi: AcessoApiService) {
    this.produtoApi.pedido.subscribe((data) => {
      this.pedido = data;
    });
  }

  ngOnInit(): void {
  }
  getValor(){
    this.valorTotal = 0;
    if(this.pedido && this.pedido.itensPedido){
      this.pedido.itensPedido.forEach((element:Produto) => {
        this.valorTotal += element.price;
      });
    }
    return this.valorTotal;
  }

}
