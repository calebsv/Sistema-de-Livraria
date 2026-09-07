# Library Management

Sistema simples de gerenciamento de uma biblioteca desenvolvido em JavaScript.

## Funcionalidades

O sistema permite executar diferentes ações sobre os livros e leitores:

* Listar livros
* Listar leitores
* Adicionar livros
* Pesquisar livros por título
* Filtrar livros por gênero
* Marcar livros como lidos
* Adicionar avaliações aos livros

## Fluxo `markAsRead`

A ação `markAsRead` recebe um objeto contendo:

```js
{
    bookId: 1,
    rating: 5
}
```

O fluxo realiza as seguintes etapas:

1. Procura o livro pelo `id`.
2. Verifica se o livro existe.
3. Valida se a avaliação é um número entre 1 e 5.
4. Define `isRead` como `true`.
5. Salva a avaliação no campo `rating`.
6. Retorna uma mensagem informando o resultado da operação.

### Possíveis resultados

```text
Book marked as read!
Invalid rating! Please rate between 1 and 5
Book not found!
```

## Tecnologias

* JavaScript
* Arrays
* Objetos
* `switch`
* `for`
* `find()`
* Manipulação de dados

## Objetivo

Praticar estruturas de controle, manipulação de arrays e objetos e implementação de diferentes operações em um sistema de gerenciamento de biblioteca.
