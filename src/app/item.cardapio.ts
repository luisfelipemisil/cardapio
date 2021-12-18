export interface ItemCardapio {
    nome: string,
    foto: string, //TODO change this
    preco: number,
    descricao: string,
    categoria: string //TODO set this
}

export const mocks: ItemCardapio[] = [
    {
      nome: 'hamburgao',
      foto: 'test',
      preco: 15.99,
      descricao: 'meteu essa?',
      categoria: 'undefined'
    },
    {
      nome: 'hamburgao2',
      foto: 'test',
      preco: 15.99,
      descricao: 'metestes esta?!?!?!',
      categoria: 'undefined'
    }
]