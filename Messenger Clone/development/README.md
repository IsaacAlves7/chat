# 💬 AUTOGLASS CHAT (2022) <img src="https://img.shields.io/github/license/IsaacAlves7/AUTOGLASS-CHAT.svg"> <img src="https://img.shields.io/github/release/IsaacAlves7/AUTOGLASS-CHAT.svg">

<a href="https://www.autoglass.com.br/"><img src="https://user-images.githubusercontent.com/61624336/163305759-469b95aa-70ea-4ec9-b39d-b3c57d1d1412.png" alt="AUTOGLASS CHAT.png" align="right" width="217" title="Visite o site da AUTOGLASS e acesse o app"></a>

Esse é um projeto de aplicação web de Chat privado para a empresa AUTOGLASS. Essa aplicação web foi desenvolvida com um conjunto padrão de tecnologias denominado <b><a href="https://upflow.me/entendendo-o-mern-stack-o-que-e/">MERN stack</a></b> (MongoDB, Express, React.js e Node.js) e em adicional a biblioteca <a href="https://socket.io/">Socket.IO</a> para a execução bidirecional em tempo-real da aplicação. <!-- e a biblioteca <a href="https://webrtc.org/">WebRTC</a> para a comunicação em chamadas de vídeo e audio.  -->

Esse projeto inclue as seguintes funcionalidades:

- [x] Usuários randômicos enviando mensagens e mantendo contato entre si; 
- [x] Status de usuário: Ativo ou nenhum;
- [x] Armazenamento de mensagens e usuários no banco de dados;
- [x] Envia arquivos de imagens na área do chat com as extensões: `.png`, `.jpeg` e `.gif`;
- [x] Descrição: Detalhes de perfil do usuário;
- [x] Sistema de autenticação de usuários, área de Login e cadastro para o registro de usuários (clientes e vendedores);
- [ ] Layout responsivo de acordo com a interface do dispositivo do usuário;
- [ ] CRUD (C.R.U.D - Create/ Read/ Update/ Delete);
- [ ] Notificações com sons;
- [ ] Envia outros tipos de arquivos: documentos
- [ ] Preview de usuário destinário escrevendo um texto;
- [ ] Barra de pesquisa de procurar usuário;
- [ ] Chat privado entre cliente e vendedor;
- [ ] Grava audios;
- [ ] Chamadas de vídeo e audio.

> Esse projeto teve a duração de um mês e foi trabalhado por meio de uma POC, solução de validação, testes, desenvolvimento, modelagem de dados, otimização e depuração.

## <a href="#">Extra</a>: As possíveis implementações válidas nesse projeto
<img src="https://user-images.githubusercontent.com/61624336/163307236-86849cb7-061a-465d-8acd-d2abe4783069.png" alt="AUTOGLASS CHAT.png" align="right" width="177">

Foi criada uma solução de validação para futuras possibilidades de implementações nesse projeto:

- <a href="https://www.npmjs.com/package/react-google-login">react-google-login</a>: Autenticação da API Client do GCP - Google Cloud Plataform (Continue acessando o chat com sua conta Google), porém o usuário precisará declarar algumas informações extras na área do chat, como um pop-up pedindo mais informações (como Telefone, CNPJ e tipo de usuário); 
- <a href="https://pusher.com/">Pusher</a> e <a href="https://www.twilio.com/pt-br/">Twilio</a> são outras boas soluções para comunicação em real-time com a API;
- A dockerização dessa aplicação também é válida com o orquestrador de contêineres **Docker** e a ferramenta para muitos contêineres **Docker Compose**;
- Implementação de uma aplicação já existente desenvolvida em **.NET Core**.

> Portanto, o projeto está aberto para novas funcionalidades e atualizações! No entanto, mantenha o código original, uma mudança muito drástica pode quebrar a aplicação.

# 🔩 Arquitetura do projeto
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160253589-5d87ef9a-29de-4f19-90c4-7a992cb71087.png"></div><br \>

A arquitetura adotada para este projeto foi a arquitetura **MVC** (Model View Controller), uma arquitetura ideal para aplicações web no modelo cliente e servidor.

Onde a **View** é a aplicação do lado do cliente (front-end) enviando requisições para o **Controller** que é sua aplicação do lado do servidor (back-end), e esta manipulando os dados (ODM - Object Document Mapper, traduzido como _Mapeador de Documentos de Objeto_) no **Model**, e controlando o tráfego das rotas da aplicação, cujo renderiza na _View_ os documentos do Model.

> A conexão entre o cliente e o servidor é via **REST API** com um _proxy_ configurado e um _cliente HTTP_ (Axios) no lado do cliente e um _middleware_ (Body Parser) no lado do servidor.

> Lembrando que em vez de você usar um proxy no lado do cliente, você pode usar um **CORS** - _Cross-Origin Resource Sharing_  no lado do servidor sem problemas, então opte pela melhor solução no seu projeto.

## Design da arquitetura (padrão MVC para MERN stack)
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160254779-cd2b8ddb-541a-45f3-a55a-38f6f4bf13ed.png" width="87%"></div><br \>

> 💡 Note que a diferença entre qualquer **Web stack** é acerca do framework e o banco de dados utilizados nela, pois a estrutura e a lógica permanece a mesma na construção.

> 💡 Além disso, note que também temos a opção de `Navigation/ Router`, isso pois, no React Native (framework JavaScript para criação de aplicativos mobile híbridos para iOS e Android) temos o módulo **Navigation** que em termos de funcionalidade é bastante similar ao **Router**, portanto, também pode ser aplicado nessa arquitetura.

## Todas as tecnologias usadas no projeto
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/163313379-1905f880-16e7-45d7-b273-5187eb148962.png" align="center" height="177"></div><br />

Esse é um levantamento sobre as tecnologias utilizadas nesse projeto com as suas respectivas versões funcionando na etapa de desenvolvimento.

Caso deseje instalar mais dependências, acesse: https://www.npmjs.com/

- <a href="https://www.mongodb.com/">MongoDB (v5.0.6)</a> 
- <a href="https://expressjs.com/pt-br/">Express (v4.17.1)</a>
- <a href="https://pt-br.reactjs.org/">React.js (v17.0.2)</a>
- <a href="https://nodejs.org/en/">Node.js (v16.14.0)</a>
- <a href="https://www.npmjs.com/">NPM (v8.3.1)</a>
- <a href="https://www.npmjs.com/package/redux">Redux (v0.21.1)</a>
- <a href="https://www.npmjs.com/package/axios">Axios (v0.21.1)</a>
- <a href="https://www.npmjs.com/package/bcrypt">Bcrypt (v1.19.0)</a>
- <a href="https://www.npmjs.com/package/jsonwebtoken">JWT - JSON Web Token (v8.5.1)</a>
- <a href="https://www.npmjs.com/package/nodemon">Nodemon (v2.0.9)</a>
- <a href="https://www.npmjs.com/package/dot-env">Dot-Env (v10.0.0)</a>
- <a href="https://www.npmjs.com/package/mongoose">Mongoose (v5.13.0)</a>
- <a href="https://www.npmjs.com/package/multer">Concurrently (v1.4.2)</a>
- <a href="https://www.npmjs.com/package/multer">Cookie Parser (v1.4.2)</a>
- <a href="https://www.npmjs.com/package/socket.io-client">socket.io-client (v4.1.2)</a>
- <a href="https://www.npmjs.com/package/socket.io">socket.io (v4.1.2)</a>

<!-- 
<a href="https://www.npmjs.com/package/react-google-login">react-google-login (v5.2.2)</a>
<a href="https://mui.com/pt/">Material-UI (v4.11.4)</a>
<a href="https://www.npmjs.com/package/socket.io-client">react-chips (v4.1.2)</a>
<a href="https://www.npmjs.com/package/socket.io-client">colors</a>
- <a href="https://www.npmjs.com/package/multer">Multer (v1.4.2)</a>

-->

---

# 🗂️ Diretórios (Pastas e arquivos usados na aplicação)
<pre>
AUTOGLASS-CHAT
├── README.md
├── .gitignore
├── <b>socket</b>
|   ├── node_modules
|   ├── package-lock.json
|   ├── package.json
|   └── <a href="#socket.js">socket.js</a>  
├── <b>backend</b>
|   ├── node_modules
|   ├── controllers
|   ├── middleware
|   ├── models
|   ├── routes
|   ├── package-lock.json
|   ├── package.json
|   └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.html">server.js</a>
└── <b>frontend</b>
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── <b>public</b>
    |   └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.html</a>
    └── <b>src</b>
        ├── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">App.js</a>
        ├── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.css</a>
        └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.js</a>
    
<b>Quantidade:</b> 7 diretórios e 9 arquivos
<b>Volume total:</b> 377 MB
</pre>

<a href="https://www.autoglass.com.br/"><img src="https://user-images.githubusercontent.com/61624336/163688983-3002af28-c6b9-4855-9fcb-9687ff40e43a.png" alt="AUTOGLASS CHAT.png" align="right" width="277"></a>

Antes de tudo, entre na pasta do projeto e explico tudo sobre os diretórios e arquivos deste projeto:

- `./vscode/` é a pasta que contém o arquivo `launch.json`, esse é um Node.js debugger no editor Visual Studio Code (opcional);

- `./frontend/` é a pasta da aplicação web front-end (necessário);

- `./backend/` é a pasta da aplicação web back-end (necessário);

- `./socket/` é a pasta da biblioteca SocketIO atuando em conjunto com a aplicação web back-end (necessário);

- `.gitignore` é um arquivo de ignorar modulos quando quando você dá um push no repositório do GitHub (opcional);

- `README.md` é a documentação do projeto escrito em Markdown (opcional).

> Em alguns projetos, o nome da pasta pode variar entre `client`, `server`, `api`, `app`, `front` ou `back`, assim como também pode ser o projeto inteiro em somente uma pasta ou em pastas isoladas, isso é algo totalmente opcional, desde que a funcionalidade seja a mesma.

> Da mesma forma como o arquivo inicial/ principal da aplicação back-end seja `index.js` ou `server.js`, porém você precisa declarar isso no arquivo `package.json`.

Note que para cada arquivo há uma funcionalidade importante para desempenhar no chat, mas isso também pode ser customizável em somente poucos arquivos, porém as chances de seu código gerar mais erros é bem maior, devido o processamento da aplicação.

## Ordem de execução para iniciar a etapa de desenvolvimento
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/164298683-bc17d081-9b6d-4c9c-b8f2-1a5290b12774.jpg"></div>

Antes de tudo, rode o comando abaixo para instalar as dependências do arquivo `package.json` nos dois diretórios do projeto e executar a aplicação no modo desenvolvimento.

**Melhor comando para instalar todas as dependências**:
```sh
npm install && cd frontend && npm install
```

Ou

**Comando manual (individualmente)**:
```sh
npm install && npm start
```

Este projeto possui uma ordem de execução no terminal, então siga os passos abaixo:

1. Rode o diretório `backend`:
```sh
npm install && npm start
```

Se o comando acima não funcionar para inicializar a aplicação no modo de desenvolvimento, tente uma dessas três opções abaixo:

```sh
npm run server
```

Ou

```sh
nodemon backend/server.js
```

Ou

```sh
node backend/server.js
```

Uma outra solução bem bacana é com o **Concurrently**, que executa os dois terminais (do front-end e do backend) em apenas um pelo `package.json` do backend, veja abaixo a configuração:

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)

```json
  "scripts": {
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \" npm run server\" \" npm run client \""
  },
```

Para executá-lo basta inserir o comando abaixo:

```sh
npm run dev
```

> Este é o _Model_, _Controller_ e _API_ rodando a aplicação web back-end do Node.js na porta `5000`.

2. Rode o diretório `frontend`:
```sh
cd frontend
npm install && npm start
```

> Esse é o _View_ rodando a aplicação front-end do React.js na porta `3000`.

---

# 🚘 Client side (Lado do cliente)
- React.js
- Socket.io (client)
- Axios

A **criação do front-end** (View) consiste em: criar uma aplicação com a biblioteca JavaScript chamado React.js, criar as interfaces de login, cadastro e a do chat. 

#  🏎️ View <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}"> <img src="https://img.shields.io/badge/React-v17.0.2-20232A?style=badge&logo=react&logoColor=61DAFB">

<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="177em"></div>

O projeto reside na pasta `./frontend/` e foi desenvolvido com a biblioteca da linguagem de programação JavaScript chamado **React.js** com o modelo SPA - Single Page Application para a construção de interfaces.

**Inicialização do projeto:**
```sh
npx create-react-app frontend && cd frontend
npm start
```

**Instalação de todas as dependências:**
```sh
npm i axios@0.25.0 moment@2.29.1 jwt-decode@3.1.2 node-sass@7.0.1 react-alert@7.0.3 react-alert-template-basic@1.0.2 react-hot-toast@2.2.0 react-icons@4.3.1 icons@1.0.0 react-redux@7.2.6 redux@4.1.2 redux-thunk@2.4.1 react-router-dom@6.2.1 socket.io-client@4.4.1
```

**(Padrão) Algumas dependências no `package.json`:**

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
```

## Layout da interface da aplicação (UI)
<div align="center"><a href="https://www.npmjs.com/package/node-sass"><img src="https://cdn.worldvectorlogo.com/logos/node-sass.svg" alt="framework front-end" width="177"></a></div>

```sh
npm i node-sass
```

O layout da aplicação é baseada no **Node-sass** que é uma biblioteca que fornece ligação para Node.js para LibSass, a versão C do popular pré-processador de folha de estilo, **Sass**, componentes React e React Hooks. O modelo abaixo explica como foi feito o layout da página junto com cada componente:

### Paleta de cores
<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" align="right" height="57">

Há uma paleta de cores feita com variáveis em `_reset.scss` para definir o estilo padrão da aplicação, inspirada no estilo do:

- **Messenger**, **Whatsapp** e **Instagram** (from Meta).

## Otimização da aplicação front-end
Pelo peso dos arquivos com extensão `.js` e `.css` estarem sobrecarregando a capacidade de armazenamento do repositório do GitHub, podemos substituir por arquivos com extensão `.jsx` e apenas uma folha de estilo chamada `index.css`.

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/159167177-49b2c872-9b04-4ca1-aa65-488b74786981.jpeg"></div><br />

Além disso, excluimos os diretórios `.node_modules` e os arquivos `package-lock.json`, isso permite que sua aplicação fique leve para subir para um repositório, mas para utilizar a aplicação para desenvolvimento é necessário rodar o comando, no diretório da aplicação, `npm install` para instalar as dependências.

# 📦 Bibliotecas importantes para o View

Algumas bibliotecas no front-end merecem destaque, pelo simples fato de serem elas que atuam para a aplicação funcionar junto com o servidor.

## React Router DOM <img src="https://img.shields.io/badge/React_Router-v6.2.1-20232A?style=badge&logo=React-Router&logoColor=ED1C24">
<div align="center"><img src="https://iconape.com/wp-content/files/sm/371377/svg/371377.svg" height="177"></div><br \>

```sh
npm i react-router-dom@6.2.1
```

Com o React Router é possível criar rotas da aplicação no lado do cliente, isso permite fazer as áreas de Login e Registro, sem precisar do Router e do Controller no back-end! Estamos utilizando a versão 6 da biblioteca, cujo tem novas implementações e é bem diferente da versão 5.

### Configurando o React Router DOM
Siga os passos abaixo:

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/messenger/login" element={<Login />} />
          <Route path="/messenger/register" element={<Register />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
```

[![Login.jsx](https://img.shields.io/badge/-./frontend/src/components/Login.jsx-000?style=social&logo=React&logoColor=61DAFB)](#)
```jsx
import React from 'react';

const Login = () => {
  return (
    <div><h1>This is Login Page</h1></div>
    )
};

export default Login;
```

[![Register.jsx](https://img.shields.io/badge/-./frontend/src/components/Register.jsx-000?style=social&logo=React&logoColor=61DAFB)](#)
```jsx
import React from 'react';

const Register = () => {
  return (
    <div><h1>This is Register Page</h1></div>
    )
};

export default Register;
```

> Dessa forma, funcionou tranquilamente as rotas `/messenger/login` e `/messenger/register`.

## Axios
<div align="center"><img src="https://github.com/IsaacAlves7/AUTOGLASS-CHAT/blob/hotfix/Axios.svg" height="57"></div><br />

```
npm i axios
```

O **Axios** é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico, ele pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo `http`, enquanto no lado do cliente (navegador) usa `XMLHttpRequests`.

![react-node-express-mongodb-mern-stack-example-architecture](https://user-images.githubusercontent.com/61624336/165542067-41c759a4-e6ee-4c17-bb06-178bb9c73410.png)

Portanto, ele é essencial para que a comunicação do REST API ocorra na aplicação entre o **View** e o **Router** (etapa final do front-end para a etapa do início do back-end), e do _Router_ para o **Controller** e talvez, consecutivamente, do _Controller_ para o **Model**, retornando, dessa forma, para o _View_ de forma renderizada.

### (Proxy) Conexão do front-end com o back-end
<div align="center"><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Forward_proxy_h2g2bob.svg/1200px-Forward_proxy_h2g2bob.svg.png" width="100%"></a></div>

A conexão do frontend com o backend é realizada a partir de um **proxy** com o o endereço da aplicação back-end, dentro do arquivo `package.json`:

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)
```json
"proxy": "http://localhost:5000"
```

> Em redes de computadores, um **servidor proxy** é um aplicativo de servidor que atua como intermediário entre um cliente que solicita um recurso e o servidor que fornece esse recurso. 
> 
> Um detalhe importante e interessante a ser lembrado é que se você possui um proxy, não precisa utilizar um CORS para fazer requests na API entre o cliente e o servidor, pois o CORS possui a função de seu servidor back-end ser acessivel a qualquer request.
>
> Se você não estiver hospedando sua própria API, provavelmente não precisará do proxy, então utilize o CORS.

Com o proxy configurado e o Axios funcionando na autenticação do usuário no lado do cliente, podemos fazer a API de registro se conectar ao back-end na porta `5000`.

## Redux
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/redux.svg" height="177"></div><br \>

```
npm i react-redux redux-thunk
```

O **Redux** é uma biblioteca JavaScript de código aberto para gerenciar e armazenar os estados de aplicações escritos em JavaScript. É mais comumente usado como um ecossistema para as bibliotecas como React.js para criação de interfaces para usuários.

## Socket.io-client
<div align="center"><img src="https://symbols.getvecta.com/stencil_96/15_socketio.2c4cc254de.svg" height="177"></div><br \>

```
npm install socket.io-client@4.4.1
```

É necessário instalar o socket.io tanto no lado do cliente quanto no lado do servidor, para que o reconhecimento em tempo real possa ser executado.

---

# 🚥 Server Side (Lado do servidor)
- MongoDB
- Mongoose
- Node.js
- Express.js
- Socket.io
- JWT

A **criação do back-end** (Router, Config, Middleware, Controller e Model) consiste em: criar um servidor com Express.js em conexão com MongoDB, criar rotas para login e cadastro, criar um sistema de autenticação com JWT e testar as APIs com a ferramenta POSTMAN.

# 🚏 Router

# 🚦 Controller <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}"> <img src="https://img.shields.io/badge/Node.js-v16.13.0-limegreen?style=badge&logo=Node.js&logoColor=00FF00"> <img src="https://img.shields.io/badge/Express.js-v4.17.2-yellow?style=badge&logo=Express&logoColor=yellow"> <img src="https://img.shields.io/badge/NPM-v8.1.0-CB3837?style=badge&logo=npm&logoColor=CB3837">
<div align="center"><a href="https://nodejs.org/en/"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width="177em"></a></div><br \>

O **controller** é onde se concentra todo o back-end, lado do servidor, da aplicação realizado no ambiente de execução chamado **Node.js**, cujo controlamos o tráfego da aplicação, ou seja, ele que direciona para onde a aplicação front-end irá executar uma determinada ação dentro da arquitetura, seja para manipular os objetos dos dados no banco de dados, consumir alguma API, ou fazendo requisições e respostas com os métodos HTTP.

**Inicialização do projeto:**

```sh
npm init --y
```

**Instalação de todas as dependências:**
```sh
npm i bcrypt@5.0.1 body-parser@1.19.1 concurrently@7.0.0 cookie-parser@1.4.6 dotenv@14.2.0 express@4.17.2 formidable@2.0.1 jsonwebtoken@8.5.1 mongoose@6.1.8 nodemon@2.0.15 validator@13.7.0
```

## Express
<div align="center">
<a href="https://expressjs.com/pt-br/"><img src="https://symbols.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg" width="177em"></a>
</div><br \>

```
npm i express 
```

Com o framework Express nós podemos controlar todas as requisições e respostas dos métodos HTTP, as rotas da aplicação e consumo das APIs, clientes HTTP e o mapeamento de dados do objeto pelos modelos do banco de dados, tudo isso de maneira bem simplista e minimalista no Node.js.

# 📦 Bibliotecas importantes para o Controller
Algumas bibliotecas no back-end merecem destaque, pelo simples fato de serem elas que atuam para a aplicação funcionar junto com o cliente e o banco de dados.

## Dot-Env (`.env`)
```
npm i dot-env
```

O arquivo `.env` é uma variável de ambiente para guardar os segredos da sua aplicação para que elas sejam referenciadas e acessadas pela aplicação, no caso, os tipos de segredos em geral podem ser: IDs, endereços IP, portas, senhas, usuários, tokens e entre outros dados sigilosos. Com a criação desse arquivo é possível garantir uma segurança a mais para a sua aplicação.

Abaixo, será mostrado o arquivo `config.env` que a aplicação precisa para ficar de pé:

```
PORT=5000
DATABASE_URL=mongodb://localhost:27017/autoglassChatDB
SECRET=ASHDFKLAHSD2323
TOKEN_EXP=7d
COOKIE_EXP=7
```

> Em `DATABASE_URL`, você também pode colocar o endereço do `connect` do **MongoDB Atlas Cloud** no lugar do MongoDB Compass localhost.

Podemos referenciar da seguinte maneira na aplicação: `process.env.<VARIÁVEL>`.

## JWT - JSON Web Token
<div align="center"><a href="https://jwt.io"><img src="https://cdn.worldvectorlogo.com/logos/jwtio-json-web-token.svg" width="277em"></a></div>

```
npm i jsonwebtoken
```

O **JWT**, acrônimo para **J**SON **W**eb **T**oken, é muito utilizado quando fazemos autenticação via API, onde utiliza o JSON para a comunicação de dados com o Token. Apesar de ser considerado ideal para autenticação, o JWT é um recurso de autorização.

Com o JWT fica muito mais fácil de gerenciar o acesso de usuários na área de Login e Cadastro e distinguir cada um. 

Caso se você estiver logado no chat e quiser deslogar, sem conseguir acessar a rota da área de login, recomendo seguir os seguintes passos abaixo:

1. Abrir em **ferramentas de desenvolvedor** ou **inspecionar** no browser;
2. Clicar na seção: **Application**;
3. Ir na seção `Local Storage > http://localhost:3000/` e deletar a key `authToken`;
4. Próximo passo é acessar a área de login em: http://localhost:3000/messenger/login  

## Body-parser
O **Body-parser** é um middleware que analisa o corpo da solicitação e preenche `req.body`.

---

# 🏦 Banco de dados (MongoDB)
<div align="center"><a href="https://www.mongodb.com/"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="177em"></a></div><br \>

Existe mais de uma forma de utilizar o banco de dados MongoDB, a forma como utilizamos nesse projeto é na nossa máquina local com a ferramenta **MongoDB Compass**, mas você pode também utilizar o banco via <a href="https://cloud.mongodb.com/v2/622f221066be4f23a140d585#metrics/replicaSet/6255d826dbe1fa4335d4cca5/explorer/autoglassChat/chats/find">Atlas MongoDB cloud</a>, para isso siga os passos abaixo:

## MongoDB Atlas cloud
Nesse ambiente de banco de dados na nuvem, você irá criar um cluster com o ambiente da **AWS - Amazon Web Services**, na região de `us-east-1` (Norte da Virgínia) e logo depois você precisa configurar o acesso de rede do seu cluster:

### Network Access
Você precisa configurar sua rede com o endereço IP local para acessar ao banco de dados ou você pode optar por um endereço _Joker IP_, que significa que seu IP sairá por qualquer lugar, não importando para a localização onde o usuário for acessar.

#### Local IP Address
```
<ENDEREÇO_IP>/32
```

#### Joker IP Address (De qualquer lugar)
```
0.0.0.0/0
```

### `./backend/config/database.js`

**Endereço do banco de dados via MongoDB Atlas Cloud**:
```javascript
mongodb+srv://<username>:<password>@cluster0.94nsy.mongodb.net/<database>?retryWrites=true&w=majority
```

> Dessa forma, será criado um banco de dados no seu cluster e junto com cada _Schema_ vão ser criadas _collections_ (coleções) com os dados inseridos pelas _APIs_.

## MongoDB Compass
<div align="center"><a href="https://www.mongodb.com/"><img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/mongodb_compass_macos_bigsur_icon_189933.png" width="177em"></a></div><br \>

Vou mostrar como você pode utilizar o banco de dados do MongoDB diretamente pela sua máquina local, através do MongoDB Compass:

![MongoDB Compass](https://user-images.githubusercontent.com/61624336/165021958-cbdcce52-ee7e-4313-8f92-0592ee8fc6ee.png)

> Se você estiver usando o MongoDB Compass no Windows, por favor inicie o serviço do MongoDB em `Serviços`.

**Endereço do banco de dados via MongoDB Compass**:
```sh
mongodb://localhost:27017/autoglassChatDB
```

---

# ⛽ Model <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}"> 
<div align="center"><img src="https://miro.medium.com/max/724/1*vK4MHL_jpKKmUFGjE5H9jw.png" width="477em"></div><br \>

O Model, assim como o Controller, também atua no lado do servidor. O **MongoDB** é um exemplo de banco de dados de documentos - você usaria um **ODM** (Mapeador de Documentos de Objeto) para traduzir entre seus objetos no código e a representação do documento dos dados (se necessário).

Os dados são criados a partir de _Schemas_ (esquemas), e cada Schema é pertencente a alguma _Collection_ (coleção) do Chat, em relação ao(s): Usuários, Vendedores, Mensagens ou até Grupos.

# 📦 Bibliotecas importantes para o Model

Algumas bibliotecas no back-end merecem destaque, pelo simples fato de serem elas que atuam para a aplicação funcionar junto com a API do servidor e o banco de dados.

## Mongoose
<div align="center"><img src="https://ais-10072.kxcdn.com/wp-content/uploads/2020/08/mongoose.png" width="177">&nbsp;&nbsp;<img src="https://miro.medium.com/max/370/1*jO715XDC1YAEsWUwovWUQw.png" width="177"></div><br \>

```
npm i mongoose
```

A biblioteca Mongoose serve para conectar a aplicação em escrita Node.js e Express ao banco de dados MongoDB e também para manipular os seus dados.

![odm](https://user-images.githubusercontent.com/61624336/163627472-1652924e-0ef1-4ff5-a711-d20c23b21696.png)

## Bcrypt

```
npm i bcrypt
```

O **Bcrypt** tem a função de encriptar a senha a fim de torná-las seguras contra invasores e agentes maliciosos.

---

# 🚌 Socket.io <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}"> 
<div align="center"><img src="https://symbols.getvecta.com/stencil_96/15_socketio.2c4cc254de.svg" height="177"></div><br \>

Crie uma pasta para instalar a biblioteca **SocketIO** individualmente da aplicação back-end.

```sh
mkdir socket
npm i socket.io nodemon
```

---

# ⚙️ Testando as APIs com Postman
<div align="center"><a href="https://www.postman.com/"><img src="https://cdn.worldvectorlogo.com/logos/postman.svg" height="177"></a></div>

O **Postman** é uma excelente ferramenta para testar e manipular APIs, assim como **métodos HTTP** (GET, POST, PUT e entre outros) ou requisições e respostas de uma aplicação web.

> ⚠️ Recomendamos excluir os dados nas APIs e não diretamente no banco de dados, pode causar instabilidades na execução da aplicação.

Veja abaixo como testar todas as APIs da aplicação durante a etapa de desenvolvimento:

### Criando um Environment
Precisa criar um environment para armazenar as variáveis de ambiente no Postman, nomeamos esse environment como `AUTOGLASS-CHAT`.

| VARIABLE | INITIAL VALUE | CURRENT VALUE |
|----------|---------------|---------------|
|   URL    |               |http://localhost:5000|

### Testando a rota primária (padrão)
Cole o endereço `{{URL}}/`, e em seguida clique em `send`:

![Postman](https://img.shields.io/badge/GET-{{URL}}/-orange?style=badge&logo=postman&logoColor=white)

> Após isso, irá retornar o status de resposta: `200 OK`, isso significa que foi a rota está funcionando perfeitamente! E também irá retornar o resultado de resposta do método `GET`.

<pre>
This is from backend Server
</pre>

### Testando a rota de autenticação de Login e Registro
Cole o endereço `{{URL}}/api/auth/login`, e em seguida clique em `send`:

![Postman](https://img.shields.io/badge/POST-{{URL}}/api/auth/login-orange?style=badge&logo=postman&logoColor=white)

> Após isso, irá retornar o status de resposta: `200 OK`, isso significa que foi a rota está funcionando perfeitamente! E também irá retornar o resultado de resposta do método `POST`.

<pre>
login route
</pre>

Da mesma forma, funciona também com o Registro:
![Postman](https://img.shields.io/badge/POST-{{URL}}/api/auth/register-orange?style=badge&logo=postman&logoColor=white)

<pre>
register route
</pre>

### Testando a API do registro
A rota `/api/auth/register` serve para cadastrar um novo usuário pela API até o banco de dados na tabela `users`. Com o endereço `{{URL}}/api/auth/register`, adicione em `Body > raw` com os seguintes dados no formato `JSON`, e após isso clique em `send`:

![Postman](https://img.shields.io/badge/POST-{{URL}}/api/auth/register-orange?style=badge&logo=postman&logoColor=white)
[![JSON](https://img.shields.io/badge/-JSON-fff?style=social&logo=JSON&logoColor=gray)](#)
```json
{
    "username":"Isaac",
    "mail":"isaac@example.com",
    "password":"12345678",
    "ocupation":"Consumidor (Cliente)",
    "cnpj":"12114536762353",
    "tel":"+55 21 99527-2677",
    "instalacao": "Não",
    "estoque": "Sim",
    "servico": "Leve (Veículo pequeno)",
    "pic": "https://avatars.githubusercontent.com/u/61624336?v=4"
}
```

> Após isso, irá retornar o status de resposta: `200 OK`, isso significa que foi reconhecido com sucesso!

<pre>
register route
</pre>

### Testando a API de Login
A rota `{{URL}}/api/messenger/user-login` serve para devolver as informações do usuário cadastradas no banco de dados na coleção `users`. Com o endereço `{{URL}}/api/messenger/user-login`, adicione em `raw` com os seguintes dados no formato `JSON`, e após isso clique em `send`:

![Postman](https://img.shields.io/badge/POST-{{URL}}/api/messenger/user-login-orange?style=badge&logo=postman&logoColor=white)
[![JSON](https://img.shields.io/badge/-JSON-fff?style=social&logo=JSON&logoColor=gray)](#)
```json
{
    "email":"isaac7@example.com",
    "password":"12345678"
}
```

> Após isso, irá retornar o status de resposta: `200 OK`, isso significa que chegou com sucesso!

Tanto para o teste da API de Login e registro retornarão a mesma resposta de detalhes de usuário:

<pre>
{
      _id: new ObjectId("6266919c877b84b090337825"),
      userName: 'Isaac',
      email: 'isaac7@example.com',
      password: '$2b$10$XzPMun9KEgkPP2q5SgEsvOghCyKd/koTmM0cu/H9luuIycsJ2Wf7G',
      image: '457361624336.jpg',
      createdAt: 2022-04-25T12:18:36.890Z,
      updatedAt: 2022-04-25T12:18:36.890Z,
      __v: 0
}
</pre>

### Search User

`GET | {{URL}}/api/user/?search=piyush&lastname=agarwal`

| KEY | VALUE | DESCRIPTION |
|----------|---------------|---------------|
| [X] search    |               |                     |
| [X] lastname |                  |                     |

No terminal:

```sh
{ search: 'piyush', lastname: 'agarwal' }
```

### Authorization Middleware
`GET | {{URL}}/api/user/?search=p`

Na seção `Authorization`, selecione na opção `Bearer Token` e insira o token do usuário cadastrado no sistema.

**Token** 
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWNjZjgyNjE1ZDg1ZWM4ZmFlZWQ3ZSIsImlhdCI6MTY1MDI1NTg4NCwiZXhwIjoxNjUyODQ3ODg0fQ.RCgdrqjcuUKW4CAjfF4gJtvT17iHFehY528QZqn6Zy4
```

### Testando a API do chat (Create or Access a One on one Chat)

![Postman](https://img.shields.io/badge/POST-{{URL}}/api/chat-orange?style=badge&logo=postman&logoColor=white)
[![JSON](https://img.shields.io/badge/-JSON-fff?style=social&logo=JSON&logoColor=gray)](#)

Primeiro de tudo, utilize aquele Token como variável de ambiente (com escopo global): `TOKEN`, depois insira na seção `Authorization` em Token: `{{TOKEN}}`.

Com o endereço `{{URL}}/api/chat`, adicione em `Body > raw` com os seguintes dados no formato `JSON`, e após isso clique em `send`:

```json
{
    "_id": "625b55c710e2ed147e67d0c2"
}
```

> Logo, será retornado os usuários com as letras iniciais `i`. 

<pre>
{
    "_id": "625d06c107f426dc8ec729e1",
    "chatName": "sender",
    "isGroupChat": false,
    "users": [
        {
            "_id": "625ccf82615d85ec8faeed7e",
            "name": "Isaac Alves Pinheiro",
            "email": "isaac7@example.com",
            "ocupation": "Consumidor (Cliente)",
            "cnpj": "121145367623516",
            "servico": "Leve (Veículo pequeno)",
            "instalacao": "Não",
            "estoque": "Sim",
            "pic": "https://plantrainforest.com/wp-content/plugins/give/assets/dist/images/anonymous-user.svg",
            "createdAt": "2022-04-18T02:40:02.076Z",
            "updatedAt": "2022-04-18T02:40:02.076Z",
            "__v": 0
        },
        {
            "_id": "625b55c710e2ed147e67d0c2",
            "name": "Isaac Alves",
            "email": "isaac@example.com",
            "ocupation": "Consultor (Cliente)",
            "pic": "https://plantrainforest.com/wp-content/plugins/give/assets/dist/images/anonymous-user.svg",
            "createdAt": "2022-04-16T23:48:23.980Z",
            "updatedAt": "2022-04-16T23:48:23.980Z",
            "__v": 0
        }
    ],
    "createdAt": "2022-04-18T06:35:45.538Z",
    "updatedAt": "2022-04-18T06:35:45.538Z",
    "__v": 0
}
</pre>

### Testando a API de usuários do chat (Fetch User Chats API)

![Postman](https://img.shields.io/badge/GET-{{URL}}/api/chat-orange?style=badge&logo=postman&logoColor=white)

Dessa forma, ele consegue acessar o chat de conversa com outro usuário.

<pre>
[
    {
        "_id": "625d06c107f426dc8ec729e1",
        "chatName": "sender",
        "isGroupChat": false,
        "users": [
            "625ccf82615d85ec8faeed7e",
            "625b55c710e2ed147e67d0c2"
        ],
        "createdAt": "2022-04-18T06:35:45.538Z",
        "updatedAt": "2022-04-18T06:35:45.538Z",
        "__v": 0
    }
]
</pre>

---

# 🏢 Empresa
Esse projeto foi desenvolvido pela empresa **HeadMind Partners Brasil**.

<div align="center">

[<img src="https://user-images.githubusercontent.com/61624336/164135810-7a6e74ac-5b71-466c-a506-d57a823a2937.jpg" width="1000px" /><br><sub>HeadMind Partners Brasil</sub>](https://www.headmind.com/pt/) 
|:-:|
