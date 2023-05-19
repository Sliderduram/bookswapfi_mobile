# BookSwapify

## Integrantes

- Luiz Rioja
- Rafael Duram
- Fabrício Diniz

## Instruções para execução

```sh
# Clone este repositório
$ git clone

# Acesse a pasta do projeto no terminal/cmd
$ cd bookswapify_mobile

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start

# Execute a API com JSON Server
$ npm run server
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn server

# O servidor iniciará na porta 3333 - acesse <http://localhost:3333>
```

> Caso tenha erro do Axios realizar alguma chamada para a API, executar o passo opcional abaixo

```sh
adb reverse tcp:3333 tcp:3333
```
