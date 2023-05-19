# BookSwapify

## Resumo da aplicação

O BookSwapify é uma aplicação para troca e doação de livros. A versão do bootcamp é web portanto o que temos aqui é uma adaptação do modelo original feita em React Native.

Para esse trabalho implementamos a tela de **cadastro**, **login** e a tela de **configurações** para atender aos requisitos de quantidade de telas e de conceitos de aplicações mobile como **componentização**, **estados**, **eventos** e **navegação**.

[Protótipo da aplicação](https://www.figma.com/file/TuShY4en84DDKiYxrB65AS/BookSwapify?type=design&node-id=106%3A84&t=nsLV9BcYB8lU1tgk-1)

## Integrantes

- Luiz Rioja
- Rafael Duram
- Fabrício Diniz

## Instruções para execução

```sh
# Clone este repositório
$ git clone git@github.com:Sliderduram/bookswapfi_mobile.git

# Acesse a pasta do projeto no terminal/cmd
$ cd bookswapfi_mobile

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start

# Execute a API criada com JSON Server
$ npm run server
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn server

# O servidor iniciará na porta 3333 - acesse <http://localhost:3333>
```

> Caso tenha erro do Axios realizar alguma chamada para a API, executar o passo opcional abaixo

```sh
adb reverse tcp:3333 tcp:3333
```
