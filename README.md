<h1 align="center">
  <img src="./docs/logo.svg">
</h1>

<h4 align="center"> Bootcamp GoStack 11 🚀</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leon-carvalho/gobarber-web?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leon-carvalho/gobarber-web">

  <a href="https://github.com/leon-carvalho/gobarber-web/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leon-carvalho/gobarber-web">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </a>
</p>

## 📍Índice

- [Sobre o projeto](#about)
- [Como rodar este projeto?](#run)
  - [Pré-requisitos](#prerequisit)
  - [Rodando o projeto](#running)
- [Tecnologias](#techs)
- [Demonstração](#demo)
- [Como contribuir](#contributing)
- [Agradecimentos](#acknowledgement)
- [Autores](#authors)
- [License](#license)

## 🕵️‍♂️ Sobre o projeto <a name="about"></a>

**GoBarber** - aplicação para agendar e gerenciar serviços de beleza com foco em barbearias, onde prestadores de serviços podem se cadastrar, e usuários poderão marcar agendamentos com estes prestadores.

O GoBarber possuí uma API Rest global e diferentes versões com base no tipo de usuário:

- 🖥 Web - voltada para os prestadores de serviço oferece um dashboard para visualização dos agendamentos.
- 📱 [Mobile][gobarber-mobile] - voltada para o usuário onde é possível criar agendamentos com um prestador.
- 🚏 [API REST][gobarber-api] - "global" serve dados tanto para os prestadores de serviço quanto usuários.



## 🚀 Como rodar este projeto? <a name="run"></a>

### Pré-requisitos <a name="prerequisit"></a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js][nodejs] - para executar JavaScript fora do navegador
- [NPM] ou [Yarn] para instalar as dependências do projeto
- [API do GoBarber][gobarber-api] - para consumir os dados dos usuários, agendamentos...
- [Git](https://git-scm.com) - caso queira clonar o projeto no GitHub (Você pode simplesmente fazer o dowload pelo GitHub caso ache melhor)


> 🚨🚨 IMPORTANTE!! 🚨🚨 - é preciso estar executando a `API do GoBarber` para ter acesso aos dados que serão consumidos por esta aplicação.

Acesse o repositório com a [API do GoBarber][gobarber-api] para saber como executá-lo.

### Rodando o projeto <a name="running"></a>

```bash
# Clone este repositório
$ git clone https://github.com/leon-carvalho/gobarber-web

# Acesse a pasta do projeto no terminal/cmd
$ cd gobarber-web

# Instale as dependências
$ yarn
# Ou use NPM se preferir
$ npm install

# Execute os testes da aplicação com o comando
$ yarn test

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta em um servidor local basta acessar http://localhost:3000
```
## 🛠 Tecnologias <a name="techs"></a>

Principais ferramentas usadas na construção do projeto:

- React
- Axios
- Unform
- ESLint
- Prettier
- Date Fns
- Polished
- TypeScript
- React Icons
- React Spring
- EditorConfig
- React Router Dom
- Styled Components
- React Day Picker

## 👀 Demonstração <a name="demo"></a>

Prints das telas da aplicação:

<div align="center">
  <img src="./docs/demo.svg"></img>
</div>

## 🤔 Como contribuir para o projeto? <a name="contributing"></a>
1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 👏 Agradecimentos <a name="acknowledgement"></a>
- [Time da Rocketseat][rs]
- [Diego Fernandes, CTO at Rocketseat][diego3g]

## ✍🏽 Autores <a name="authors"></a>

Feito com ❤️ por Leonardo Carvalho

GitHub - [@leon-carvalho][github]

LinkedIn - [entre em contato!][linkedin]

## 📝 Licença <a name="license"></a>
Este projeto esta sobe a licença MIT. Veja a [LICENÇA](./LICENSE) para saber mais.

[react]: https://pt-br.reactjs.org/
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[jest]: https://www.jestjs.io
[yarn]: https://yarnpkg.com/
[rs]: https://rocketseat.com.br
[diego3g]: https://github.com/diego3g
[gobarber-api]: https://github.com/leon-carvalho/gobarber-api
[gobarber-mobile]: https://github.com/leon-carvalho/gobarber-mobile
[github]: https://github.com/leon-carvalho/
[linkedin]: https://www.linkedin.com/in/leonardo-dev/
