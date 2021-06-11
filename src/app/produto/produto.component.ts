import { Pedido } from './../pedido/pedido';
import { AcessoApiService } from '../service/acesso-api.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  Itens: Array<Produto> = [];
  listItens: any = [];
  constructor(private produtoApi: AcessoApiService) {
  }

  ngOnInit(): void {
    this.produtoApi.getProdutos().subscribe((data) => {
      this.Itens = data;
    });
  }

  teste(item: any){
    let atualizado = this.produtoApi.getPedido();
    if(!atualizado.itensPedido){
      atualizado.itensPedido = new Array<Produto>();
    }
    atualizado.itensPedido.push(item);
    this.produtoApi.setProdutoNoPedido(atualizado);
  }
}
