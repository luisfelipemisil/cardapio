export interface ItemCardapio { //this is for sending
  nome: string,
  foto: string, //TODO change this
  preco: number,
  descricao: string,
  categoria: string, //TODO set this
}

export interface ItemCardapioList { //this is for showing
  nome: string,
  foto: string, //TODO change this
  preco: number,
  descricao: string,
  categoria: string, //TODO set this
  checked: false
}

export interface CategoriaCardapio {
  categoria: string,
  itens: ItemCardapioList[]
}