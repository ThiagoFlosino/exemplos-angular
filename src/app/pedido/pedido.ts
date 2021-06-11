import { Produto } from "../produto/produto";

export interface Pedido {
    id:Number,
    mesa:Number,
    itensPedido: Array<Produto>
  }
  