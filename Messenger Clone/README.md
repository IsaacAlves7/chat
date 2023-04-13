# 💬 Messenger Clone (2022) <img src="https://img.shields.io/github/license/IsaacAlves7/AUTOGLASS-CHAT.svg"> <img src="https://img.shields.io/github/v/release/maksen-git/Fabrica-AutoGlass-Chat-Prototipo">

<a href="https://www.autoglass.com.br/"><img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" alt="AUTOGLASS CHAT.png" align="right" height="177" title="Visite o site da AUTOGLASS e acesse o app"></a>

Essa aplicação web foi desenvolvida com um conjunto padrão de tecnologias denominado <b><a href="https://upflow.me/entendendo-o-mern-stack-o-que-e/">MERN stack</a></b> (MongoDB, Express, React.js e Node.js) e em adicional a biblioteca <a href="https://socket.io/">Socket.IO</a> para a execução bidirecional em tempo-real da aplicação. <!-- e a biblioteca <a href="https://webrtc.org/">WebRTC</a> para a comunicação em chamadas de vídeo e audio.  -->

<!-- Endereço da aplicação no ambiente de produção: https://prod-autoglass-chat-heroku.app/ -->

## As funcionalidades do Messenger
Esse projeto inclue as seguintes funcionalidades:

- [x] CRUD (C.R.U.D - Create/ Read/ Update/ Delete);
- [x] Usuários randômicos enviando mensagens e mantendo contato entre si; 
- [x] Armazenamento de mensagens e usuários no banco de dados;
- [x] Envia arquivos de imagem na área do chat com as extensões: `.png`, `.jpeg`, `.jpg` e `.gif`;
- [x] Descrição: Detalhes de perfil do usuário;
- [x] Sistema de autenticação de usuários, área de Login e cadastro para o registro de usuários (clientes e vendedores);
- [x] Notificação de usuário destinário escrevendo um texto (Digitando...);
- [x] Notificação de mensagens com sons;
- [x] Status de usuário: Ativo ou nenhum;
- [x] Status de visualização: Visto, não-visto e entregue;
- [x] Menu de opções: modo Claro/Escuro e Desconectar da área do chat;
- [x] Barra de pesquisa para encontrar contatos;
- [x] Histórico de mídia compartilhada;
- [ ] Chat privado entre cliente e vendedor;
- [ ] Layout responsivo de acordo com a interface do dispositivo do usuário.
<!-- 
- [ ] Envia outros tipos de arquivos: documentos
- [ ] Grava audios;
- [ ] Chamadas de vídeo e audio. 
-->

> Esse projeto teve a duração de um mês e foi trabalhado por meio de uma POC, solução de validação, testes, desenvolvimento, modelagem de dados, otimização e depuração.

## <a href="#">Extra</a>: As possíveis implementações válidas nesse projeto
<img src="https://user-images.githubusercontent.com/61624336/163307236-86849cb7-061a-465d-8acd-d2abe4783069.png" alt="AUTOGLASS CHAT.png" align="right" width="177">

Foi criada uma solução de validação para futuras possibilidades de implementações nesse projeto:

- <a href="https://pusher.com/">Pusher</a> e <a href="https://www.twilio.com/pt-br/">Twilio</a> são outras boas soluções para comunicação em real-time com a API;
- A dockerização dessa aplicação também é válida com o orquestrador de contêineres **Docker** e a ferramenta para muitos contêineres **Docker Compose**;
- Implementação de uma aplicação já existente desenvolvida em **.NET Core**.

> Portanto, o projeto está aberto para novas funcionalidades e atualizações! No entanto, mantenha o código original, uma mudança muito drástica pode quebrar a aplicação.

# ♻️ Arquitetura do projeto
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160253589-5d87ef9a-29de-4f19-90c4-7a992cb71087.png"></div><br \>

A arquitetura adotada para este projeto foi a arquitetura **MVC** (Model View Controller), uma arquitetura ideal e bidirecional para aplicações web utilizando o modelo cliente-servidor.

<p>Onde o <b>View</b> é a aplicação do lado do cliente (front-end) enviando requisições para o <b>Controller</b> que é sua aplicação do lado do servidor (back-end), e esta manipulando os dados (<b>ODM</b> - Object Document Mapper, traduzido como Mapeador de Documentos de Objeto) no <b>Model</b>, e controlando o tráfego das rotas da aplicação, cujo renderiza na <i>View</i> os documentos do Model. Dessa forma, podemos criar qualquer tipo de aplicação web.</p><br \>

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/166125903-e4930306-3418-4bfe-a3bc-7446ea4f59e9.png" height="177px"></div><br \>

> ♻️ A conexão entre o lado do cliente e o servidor é via **REST API** com um _proxy_ configurado com o endereço IP do localhost da aplicação back-end com o protocolo **HTTP** (onde faremos requisições e respostas), cujo possui: um _cliente HTTP_ para chamadas da API (Axios) no lado do cliente e um _middleware_ (Body Parser) no lado do servidor. Então, podemos dizer que a nossa aplicação funciona como um **CRUD** (Create/Read/Update/Delete).

> 🔨 **Opcional**: Lembrando que em vez de você usar um proxy no lado do cliente, você pode usar um **CORS** - _Cross-Origin Resource Sharing_  no lado do servidor sem problemas, então opte pela melhor solução no seu projeto.

> 🔨 **Opcional**: Na parte de upload de arquivos e imagens você pode utilizar a biblioteca JavaScript chamada **Multer**, cujo é um middleware do Node.js para lidar com dados `multipart/form-data`, que é usado principalmente para fazer upload de arquivos. No entanto, o _Multer_ preenche somente formulários com dados `multipart` (`multipart/form-data`).

## Design da arquitetura (padrão MVC para MERN stack)
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160254779-cd2b8ddb-541a-45f3-a55a-38f6f4bf13ed.png" width="87%"></div><br \>

> 💡 Note que a diferença entre qualquer **Web stack** é acerca do framework e o banco de dados utilizados nela, pois a estrutura e a lógica permanece a mesma na construção.
> 
> 💡 Você pode utilizar as funcionalidades do padrão MVC em uma organização estrutural de arquivos isolados ou atuando lado a lado dentro de poucos arquivos, mas vamos imaginar que seu projeto cresça e ganhe funcionalidades novas...é preciso distinguir cada trecho do seu código para que não aja algum tipo de conflito entre os escopos, variáveis ou funções.
>
> 💡 Note também que todas as funcionalidades da aplicação são interligadas entre si por meio de uma API com a comunicação de solicitação e resposta dos métodos do protocolo HTTP. Portanto, seu projeto precisa ter essa boa comunicação para ele funcionar.

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
- <a href="https://www.npmjs.com/package/jsonwebtoken">jwt-decode (v8.5.1)</a>
- <a href="https://www.npmjs.com/package/jsonwebtoken">Moment (v2.29.1)</a>
- <a href="https://www.npmjs.com/package/nodemon">Nodemon (v2.0.9)</a>
- <a href="https://www.npmjs.com/package/dot-env">Dot-Env (v10.0.0)</a>
- <a href="https://www.npmjs.com/package/mongoose">Mongoose (v5.13.0)</a>
- <a href="https://www.npmjs.com/package/multer">Concurrently (v1.4.2)</a>
- <a href="https://www.npmjs.com/package/multer">Cookie Parser (v1.4.2)</a>
- <a href="https://www.npmjs.com/package/multer">Node-Sass (v7.0.1)</a>
- <a href="https://www.npmjs.com/package/multer">react-hot-toast (v2.2.0)</a>
- <a href="https://www.npmjs.com/package/multer">formidable (v2.0.1)</a>
- <a href="https://www.npmjs.com/package/multer">validator (v13.7.0)</a>
- <a href="https://www.npmjs.com/package/multer">react-alert (v7.0.3)</a>
- <a href="https://www.npmjs.com/package/multer">use-sound (v4.0.1)</a>
- <a href="https://www.npmjs.com/package/socket.io-client">socket.io-client (v4.1.2)</a>
- <a href="https://www.npmjs.com/package/socket.io">socket.io (v4.1.2)</a>
- <a href="https://www.npmjs.com/package/cloudinary">cloudinary (v1.29.1)</a>

<!-- 
<a href="https://www.npmjs.com/package/react-google-login">react-google-login (v5.2.2)</a>
<a href="https://mui.com/pt/">Material-UI (v4.11.4)</a>
<a href="https://www.npmjs.com/package/socket.io-client">react-chips (v4.1.2)</a>
<a href="https://www.npmjs.com/package/socket.io-client">colors</a>
- <a href="https://www.npmjs.com/package/multer">Multer (v1.4.2)</a>

-->

# 🗂️ Diretórios (Pastas e arquivos usados na aplicação)
<pre>
AUTOGLASS-CHAT
├── README.md
├── .gitignore
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

<a href="https://www.autoglass.com.br/"><img src="https://user-images.githubusercontent.com/61624336/163688983-3002af28-c6b9-4855-9fcb-9687ff40e43a.png" alt="AUTOGLASS CHAT.png" align="right" height="177"></a>

Antes de tudo, entre na pasta do projeto e explico tudo sobre os diretórios e arquivos deste projeto:

- `./vscode/` é a pasta que contém o arquivo `launch.json`, esse é um Node.js debugger no editor Visual Studio Code (opcional);

- `./frontend/` é a pasta da aplicação web front-end (necessário);

- `./backend/` é a pasta da aplicação web back-end (necessário);

- `.gitignore` é um arquivo de ignorar modulos quando quando você dá um push no repositório do GitHub (opcional);

- `README.md` é a documentação do projeto escrito em Markdown (opcional).

> 💡 Em alguns projetos, o nome da pasta pode variar entre `client`, `server`, `api`, `app`, `front` ou `back`, assim como também pode ser o projeto inteiro em somente uma pasta ou em pastas isoladas, isso é algo totalmente opcional, desde que a funcionalidade seja a mesma.

> 💡 Da mesma forma como o arquivo inicial/ principal da aplicação back-end seja `index.js` ou `server.js`, porém você precisa declarar isso no arquivo `package.json`.

Note que para cada arquivo há uma funcionalidade importante para desempenhar no chat, mas isso também pode ser customizável em somente poucos arquivos, porém as chances de seu código gerar mais erros é bem maior, devido o processamento da aplicação, portanto, deixe seu código bem estruturado.

---

# 🚧 Etapa de desenvolvimento
Nessa etapa, é desenvolvida a aplicação com o endereço local da sua máquina e focando o código-fonte apenas nas funcionalidades essenciais do chat.

## Ordem de execução para iniciar a etapa de desenvolvimento
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/164298683-bc17d081-9b6d-4c9c-b8f2-1a5290b12774.jpg"></div><br />

Antes de tudo, rode o comando abaixo para instalar as dependências do arquivo `package.json` nos dois diretórios do projeto e executar a aplicação no modo desenvolvimento.

### Melhor comando para instalar todas as dependências:
Copie e cole o comando do terminal na pasta do projeto: `./Fabrica-AutoGlass-Chat-Prototipo/`.

```sh
npm install && cd frontend && npm install
```

> Após esse procedimento ser finalizado, serão instaladas todas as dependências da aplicação.

### Concurrently - Inicializando a aplicação no modo de desenvolvimento:
Uma solução bem bacana para inicializar a aplicação, no modo de desenvolvimento, é a biblioteca **Concurrently**, que executa os dois terminais (do front-end e do backend) em apenas um pelo `package.json` do backend, veja abaixo a configuração:

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)

```json
  "scripts": {
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \" npm run server\" \" npm run client \""
  },
```

Para executá-lo no modo de desenvolvimento, basta inserir o comando abaixo:

```sh
npm run dev
```

> Com a execução do comando acima, **primeiro será inicializado o back-end** e **depois o front-end** da sua aplicação, somente assim ela irá funcionar.

> Este é o _Model_, _Controller_, _API_ e a biblioteca do _Socket.io_ rodando na aplicação web back-end do Node.js na porta `5000`.

> Esse é o _View_ rodando a aplicação front-end do React.js na porta `3000`.

É de extrema importância que a API e a conexão com o banco de dados esteja funcionando ao inicializar a aplicação, caso contrário, o usuário irá se deparar com a seguinte tela de erro:

> Essa tela indica que seu View foi inicializado, mas tem algo de errado com o Reducer, ou com a API ou com o banco de dados.

# 🔓 Chat público
A construção de um chat público é ideal na etapa de desenvolvimento para testar as funcionalidades dele. Portanto, foi feito a versão `pre-alpha` contendo as funcionalidades principais do chat e mantendo o modo público de contato entre usuários.

Contudo, depois de finalizado será feita uma atualização para a versão `alpha` com a privatização de contatos, ou seja, o chat será privado entre o cliente e o vendedor da AUTOGLASS.

# 🚘 Client side (Lado do cliente) <img src="https://img.shields.io/badge/React-v17.0.2-20232A?style=badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Redux-v4.1.2-6F0BD9?style=badge&logo=Redux&logoColor=8C6CD9"> <img src="https://img.shields.io/badge/Node_Sass-v4.1.2-F049AF?style=badge&logo=Sass&logoColor=F049AF">

<img width="100%" alt="MERN-stack" src="https://user-images.githubusercontent.com/61624336/166125261-ea7d2d1c-4048-43d7-a7f1-83faad7ad1b5.png"> 

A **criação do front-end** (View) consiste em: criar uma aplicação com a biblioteca JavaScript chamado React.js, criar as interfaces de login, cadastro e a do chat. E para que ocorram todas essas funcionalidades, foram usadas as seguintes tecnologias abaixo:

- React.js
- Redux
- Node-Sass
- React-icons
- Socket.io (client)
- Axios
- Proxy 

#  🏎️ View <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}">

<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="177em"></div>

O projeto reside na pasta `./frontend/` e foi desenvolvido com a biblioteca da linguagem de programação JavaScript chamado **React.js** com o modelo SPA - Single Page Application para a construção de interfaces.

### Inicialização do projeto (View):
```sh
npx create-react-app frontend && cd frontend
npm start
```

### Instalação de todas as dependências (View):
```sh
npm i axios@0.25.0 moment@2.29.1 jwt-decode@3.1.2 node-sass@7.0.1 react-alert@7.0.3 react-alert-template-basic@1.0.2 react-hot-toast@2.2.0 react-icons@4.3.1 icons@1.0.0 react-redux@7.2.6 redux@4.1.2 redux-thunk@2.4.1 react-router-dom@6.2.1 socket.io-client@4.4.1
```

### (Padrão) Algumas dependências no `package.json` (View):

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

> Caso se a versão do seu React.js seja a mais atualizada, copie e cole essa no `package.json`, que ele irá rodar a versão estável desse projeto.

### (Padrão) Página da aplicação front-end (View):

[![index.html](https://img.shields.io/badge/-index.html-000?style=social&logo=HTML5&logoColor=E34F26)](#)
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="https://www.autoglass.com.br/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#09009B" />
    <title>AUTOGLASS CHAT</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### (Padrão) Arquivo raiz da aplicação front-end (View):

[![index.js](https://img.shields.io/badge/-index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './main.scss';
import {Provider} from 'react-redux';
import store from './store/index.js';

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import alertTemplate from 'react-alert-template-basic';

const options = {
  timeout : 5000,
  positions: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={alertTemplate} {...options} >
      <App />
    </AlertProvider>
   </Provider>
  ,
 document.getElementById('root')
);
```

### (Padrão) Arquivo da aplicação front-end (View):

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Messenger from "./components/Messenger";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/messenger/login" element={<Login />} />
          <Route path="/messenger/register" element={<Register />} />
          <Route path="/" element={<Messenger />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
```

> A aplicação front-end é renderizada na aplicação raiz (`index.js`) e dela para o corpo da página (`index.html`).

## Layout da interface da aplicação (UI) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=badge&logo=Sass&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=badge&logo=CSS3&logoColor=white) ![React.js](https://img.shields.io/badge/React.js-61DAFB?style=badge&logo=React&logoColor=white) 
<div align="center"><a href="https://www.npmjs.com/package/node-sass"><img src="https://cdn.worldvectorlogo.com/logos/node-sass.svg" alt="framework front-end" width="177"></a></div>

```sh
npm i node-sass
```

O layout da aplicação é baseada no **Node-sass** que é uma biblioteca que fornece ligação para Node.js para LibSass, a versão C do popular pré-processador de folha de estilo, chamado **Sass**. O modelo abaixo explica como foi feito o layout da página junto com cada componente React.js juntamente com o Node-Sass:

<pre>
+-- sass
|   +-- base
|   |  +-- _reset.scss
|   +-- components
|   |  +-- _activeFriend.scss
|   |  +-- index.css
</pre>

### Arquivo principal
<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" align="right" height="57">

Com o arquivo `main.scss` nós importamos todas as folhas de estilos do Sass para dentro de somente um arquivo e fazemos referência dele diretamente na aplicação.

### Paleta de cores
<img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" align="right" height="47">

Há uma paleta de cores feita com variáveis em `_reset.scss` para definir o estilo padrão da aplicação, inspirada no estilo do <b><a href="https://github.com/facebook">Meta</a></b>:

- **Messenger**
- **Whatsapp**
- **Instagram**

> Muito clean, minimalista e sucinto para qualquer usuário entender as funcionalidades exercidas na aplicação.

## Otimização da aplicação front-end
Pelo peso dos arquivos com extensão `.js` e `.css` estarem sobrecarregando a capacidade de armazenamento do repositório do GitHub, podemos substituir por arquivos com extensão `.jsx` e apenas uma folha de estilo chamada `index.css`.

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/159167177-49b2c872-9b04-4ca1-aa65-488b74786981.jpeg"></div><br />

Além disso, excluimos os diretórios `.node_modules` e os arquivos `package-lock.json`, isso permite que sua aplicação fique leve para subir para um repositório, mas para utilizar a aplicação para desenvolvimento é necessário rodar o comando, no diretório da aplicação, `npm install` para instalar as dependências.

## React-icons
<div align="center"><a href="https://www.npmjs.com/package/node-sass"><img src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" alt="framework front-end" width="177"></a></div>

Você pode fazer uso de várias ícones `.svg` sem precisar instalar algum framework front-end para isso, o que deixa sua aplicação bastante leve e performática.

# 📦 Bibliotecas importantes para o View

Algumas bibliotecas no front-end merecem destaque, pelo simples fato de serem elas que atuam para a aplicação funcionar junto com o servidor.

## React Router DOM <img src="https://img.shields.io/badge/React_Router-v6.2.1-20232A?style=badge&logo=React-Router&logoColor=ED1C24">
<div align="center"><img src="https://iconape.com/wp-content/files/sm/371377/svg/371377.svg" height="157"></div><br \>

```sh
npm i react-router-dom@6.2.1
```

Com o **React Router** é possível criar rotas e navegações da aplicação no lado do cliente, isso permite fazer as áreas de Login e Registro, sem precisar do Router e do Controller no back-end! Estamos utilizando a versão 6 da biblioteca, cujo tem novas implementações e é bem diferente da versão 5.

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
import Messenger from "./components/Messenger";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/messenger/login" element={<Login />} />
          <Route path="/messenger/register" element={<Register />} />
          <Route path="/" element={<Messenger />} />
        </Routes>
      </BrowserRouter>    
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
<div align="center"><img src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png" height="177"></div><br />

```
npm i axios
```

O **Axios** é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico, ele pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo `http`, enquanto no lado do cliente (navegador) usa `XMLHttpRequests`.

![react-node-express-mongodb-mern-stack-example-architecture](https://user-images.githubusercontent.com/61624336/165542067-41c759a4-e6ee-4c17-bb06-178bb9c73410.png)

Portanto, ele é essencial para que a comunicação do REST API ocorra na aplicação entre o **View** e o **Router** (etapa final do front-end para a etapa do início do back-end), e do _Router_ para o **Controller** e talvez, consecutivamente, do _Controller_ para o **Model**, retornando, dessa forma, para o _View_ de forma renderizada.

### (Proxy) Conexão do front-end com o back-end no ambiente de desenvolvimento
<div align="center"><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Forward_proxy_h2g2bob.svg/1200px-Forward_proxy_h2g2bob.svg.png" height="277"></a></div><br \>

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
npm i redux react-redux redux-thunk
```

O **Redux** é uma biblioteca JavaScript de código aberto para gerenciar e armazenar os estados de aplicações escritos em JavaScript. É mais comumente usado como um ecossistema para as bibliotecas dessa linguagem, como o React.js, com a finalidade de construção de interfaces para usuários.

### Fluxo de dados do Redux
<div align="center"><img src="https://repository-images.githubusercontent.com/224272914/9f688f00-1071-11ea-9187-0162a4e3044c" height="277"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif" height="277"></div><br />

Utilizamos o Redux na aplicação React.js para acionar as ações como funções. A ideia é centralizar o estado para que você não precise reescrever e também compartilhar ele para outro bloco da aplicação. Ou seja, é mais dinâmico do que usar o React Hooks para realizar esse compartilhamento de estados.

<pre>
store
├── actions
│   ├── authAction.js
│   └── messengerAction.js
├── reducers
|   ├── authReducer.js
│   └── messengerReducer.js
├── types
|   ├── authType.js
│   └── messengerType.js
└── index.js
</pre>

## Socket.io-client
<div align="center"><img src="https://symbols.getvecta.com/stencil_96/15_socketio.2c4cc254de.svg" height="177"></div><br \>

```
npm install socket.io-client@4.4.1
```

É necessário instalar o socket.io tanto no lado do cliente quanto no lado do servidor, para que o reconhecimento em tempo real possa ser executado.

---

# 🚥 Server Side (Lado do servidor) <img src="https://img.shields.io/badge/Node.js-v16.13.0-limegreen?style=badge&logo=Node.js&logoColor=00FF00"> <img src="https://img.shields.io/badge/Express.js-v4.17.2-yellow?style=badge&logo=Express&logoColor=yellow"> <img src="https://img.shields.io/badge/NPM-v8.1.0-CB3837?style=badge&logo=npm&logoColor=CB3837">

<img width="100%" alt="MERN-stack" src="https://user-images.githubusercontent.com/61624336/166125261-ea7d2d1c-4048-43d7-a7f1-83faad7ad1b5.png"> 

A **criação do back-end** (Router, Config, Middleware, Controller e Model) consiste em: criar um servidor com Express.js em conexão com MongoDB, criar rotas da API para login e cadastro, criar as APIs de mensagens, criar as APIs de usuários, criar um sistema de autenticação com JWT e testar as APIs com a ferramenta POSTMAN. E para que ocorram todas essas funcionalidades, foram usadas as seguintes tecnologias abaixo:

- MongoDB
- Mongoose
- Node.js
- Express.js
- Socket.io
- JWT

## Node.js
<div align="center"><a href="https://nodejs.org/en/"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width="177em"></a></div><br \>

Com o ambiente de execução de JavaScript no servidor chamado **Node.js** podemos rodar a linguagem JavaScript no servidor, juntamente com o framework **Express**, que é o grande responsável pela aplicação back-end funcionar no cenário desse projeto.

## Express
<div align="center">
<a href="https://expressjs.com/pt-br/"><img src="https://symbols.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg" width="177em"></a>
</div><br \>

Com o framework **Express** nós podemos controlar todas as requisições e respostas dos métodos HTTP, as rotas da aplicação e consumo das APIs, clientes HTTP e o mapeamento de dados do objeto pelos modelos do banco de dados, tudo isso de maneira bem simplista e minimalista no Node.js.

**Inicialização do projeto:**

```sh
npm init --y
```

**Instalação de todas as dependências:**
```sh
npm i bcrypt@5.0.1 body-parser@1.19.1 concurrently@7.0.0 cookie-parser@1.4.6 dotenv@14.2.0 express@4.17.2 formidable@2.0.1 jsonwebtoken@8.5.1 mongoose@6.1.8 nodemon@2.0.15 validator@13.7.0
```

Então, foi criado o arquivo `server.js`, o arquivo principal da aplicação back-end:

[![server.js](https://img.shields.io/badge/-server.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript

```

# 🛠️ Config
Nesse diretório ficam todas as configurações da sua aplicação, seja a conexão com o banco de dados, arquivos `.env` e entre outros.

[![config.env](https://img.shields.io/badge/-config.env-fff?style=social&logo=Spring-Security&logoColor=yellow)](#)
```javascript

```

[![database.js](https://img.shields.io/badge/-database.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```javascript

```

# ⚒️ Middleware
Nesse diretório se encontra o arquivo de middleware que faz a conexão do Auth token de login do usuário no back-end.

[![authMiddleware.js](https://img.shields.io/badge/-authMiddleware.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```

```

# 🚏 Router
Com o Router fazemos as requisições e respostas com os métodos HTTP das rotas da aplicação back-end e apontamos para o Controller, onde lá ele fará o controle de ações dessas rotas. Dentro do diretório `./routes/` existe um arquivo responsável por essa funcionalidade:

[![authRoute.js](https://img.shields.io/badge/-authRoute.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)

<pre>
</pre>

O outro arquivo, faz as duas funcionalidades em uma (Router + Controller), visto que a conexão com o Controller não ocorreu bem:

[![messengerRoute.js](https://img.shields.io/badge/-messengerRoute.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)

<pre>
</pre>

# 🚦 Controller <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}"> 

O **controller** é onde se concentra a ação do back-end, rodando a aplicação no ambiente de execução chamado **Node.js**, cujo controlamos a 

[![authController.js](https://img.shields.io/badge/-authController.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```

```

# 📦 Bibliotecas importantes para o Config, Middleware, Router e Controller
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
ATLAS_DATABASE_URL=mongodb+srv://isaac:i770@cluster0.94nsy.mongodb.net/prodMessengerDB?retryWrites=true&w=majority
SECRET=ASHDFKLAHSD2323
TOKEN_EXP=7d
COOKIE_EXP=7
CLOUD_NAME=isaacalves7 
API_KEY=658366239586916
API_SECRET=YDSdH0j38xHQhdDDhV3BAjgCRNE
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

O JWT fica localizado nesses ambientes do chat:

[![authMiddleware.js](https://img.shields.io/badge/-authMiddleware.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```

```

## Body-parser
O **Body-parser** é um middleware que analisa o corpo da solicitação e preenche `req.body`.

# ⛽ Model <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}"> 
<div align="center"><img src="https://miro.medium.com/max/724/1*vK4MHL_jpKKmUFGjE5H9jw.png" width="477em"></div><br \>

O Model, assim como o Controller, também atua no lado do servidor. O **MongoDB** é um exemplo de banco de dados de documentos - você usaria um **ODM** (Mapeador de Documentos de Objeto) para traduzir entre seus objetos no código e a representação do documento dos dados (se necessário).

Os dados são criados a partir de _Schemas_ (esquemas), e cada Schema é pertencente a alguma _Collection_ (coleção) do Chat, em relação ao(s): Usuários, Vendedores e Mensagens.

# 🏦 Banco de dados (MongoDB)
<div align="center"><a href="https://www.mongodb.com/"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="177em"></a></div><br \>

Existe mais de uma forma de utilizar o banco de dados MongoDB, a forma como utilizamos nesse projeto é na nossa máquina local com a ferramenta <a href="https://www.mongodb.com/try/download/compass">MongoDB Compass</a>, mas você pode também utilizar o banco via <a href="https://cloud.mongodb.com/v2/622f221066be4f23a140d585#metrics/replicaSet/6255d826dbe1fa4335d4cca5/explorer/autoglassChat/chats/find">Atlas MongoDB cloud</a>, para isso siga os passos abaixo:

## MongoDB Compass (Banco de desenvolvimento)
<div align="center"><a href="https://www.mongodb.com/"><img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/mongodb_compass_macos_bigsur_icon_189933.png" width="177em"></a></div><br \>

Vou mostrar como você pode utilizar o banco de dados do MongoDB diretamente pela sua máquina local, através do MongoDB Compass:

![MongoDB Compass](https://user-images.githubusercontent.com/61624336/165021958-cbdcce52-ee7e-4313-8f92-0592ee8fc6ee.png)

> Se você estiver usando o MongoDB Compass no Windows, por favor inicie o serviço do MongoDB em `Serviços`.

**Endereço do banco de dados via MongoDB Compass**:
```sh
mongodb://localhost:27017/devMessengerDB
```

## MongoDB Atlas cloud (Banco de produção)
<div align="center"><a href="https://www.mongodb.com/"><img src="https://i0.wp.com/mongosilverback.net/wp-content/uploads/2020/08/atlas.png?resize=720%2C288&ssl=1" width="377"></a></div>

Nesse ambiente de banco de dados na nuvem, você irá criar um **cluster** com o ambiente da **AWS - Amazon Web Services**, na região de `us-east-1` (Norte da Virgínia) e logo depois você precisa configurar o acesso de rede do seu cluster:

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

### Endereço do banco de dados via MongoDB Atlas Cloud
[![database.js](https://img.shields.io/badge/-./backend/config/database.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```javascript
mongodb+srv://isaac:i770@cluster0.94nsy.mongodb.net/prodMessengerDB?retryWrites=true&w=majority
```

> Dessa forma, será criado um banco de dados no seu cluster e junto com cada _Schema_ vão ser criadas _collections_ (coleções) com os dados inseridos pelas _APIs_.

# 📦 Bibliotecas importantes para o Model

Algumas bibliotecas no back-end merecem destaque, pelo simples fato de serem elas que atuam para a aplicação funcionar junto com a API do servidor e o banco de dados.

## Mongoose
<div align="center"><img src="https://ais-10072.kxcdn.com/wp-content/uploads/2020/08/mongoose.png" width="177">&nbsp;&nbsp;<img src="https://miro.medium.com/max/370/1*jO715XDC1YAEsWUwovWUQw.png" width="177"></div><br \>

```
npm i mongoose
```

A biblioteca Mongoose serve para conectar a aplicação escrita em Node.js e Express com o banco de dados MongoDB e também para manipular os seus dados.

![odm](https://user-images.githubusercontent.com/61624336/163627472-1652924e-0ef1-4ff5-a711-d20c23b21696.png)

## Bcrypt

```
npm i bcrypt
```

O **Bcrypt** tem a função de encriptar a senha a fim de torná-las seguras contra invasores e agentes maliciosos.

Com as duas bibliotecas instaladas, vamos direto para pasta `./models/` e lá vamos criar os seguintes arquivos:

[![authModel.js](https://img.shields.io/badge/-authModel.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```javascript
```

[![messageModel.js](https://img.shields.io/badge/-messageModel.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```javascript
```

# 🚌 Socket.io <img src="https://badge-size.herokuapp.com/{username}/{repo}/{branch}/{filename}"> 
<div align="center"><img src="https://symbols.getvecta.com/stencil_96/15_socketio.2c4cc254de.svg" height="177"></div><br \>

```sh
mkdir socket
npm i socket.io nodemon
```

Crie uma pasta chamada `./socket/` para instalar a biblioteca **SocketIO** individualmente da aplicação back-end. Com ela, será configurada a biblioteca socket.io e o nodemon para a sua execução em tempo real.

[![socket.js](https://img.shields.io/badge/-socket.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
const io = require('socket.io')(8000,{
    cors : {
        origin : '*',
        methods : ['GET','POST']
    }
})

let users = [];
const addUser = (userId,socketId,userInfo) => {
    const checkUser = users.some(u=> u.userId === userId);

    if(!checkUser){
        users.push({userId,socketId,userInfo});
    }
}
const userRemove = (socketId) => {
    users = users.filter(u=>u.socketId !== socketId);
}

const findFriend = (id) => {
    return users.find(u=>u.userId === id);
}

io.on('connection',(socket)=>{
    console.log('Socket is connecting...')
    socket.on('addUser',(userId,userInfo)=>{
        addUser(userId,socket.id,userInfo);
        io.emit('getUser',users);
    });
    socket.on('sendMessage',(data)=>{
        const user = findFriend(data.reseverId);
        // console.log(user);

        if(user !== undefined){
            socket.to(user.socketId).emit('getMessage',{
                senderId : data.senderId,
                senderName : data.senderName,
                reseverId : data.reseverId,
                createAt : data.time,
                message : {
                    text : data.message.text,
                    image : data.message.image
                } 
            })
        }
    })

    socket.on('disconnect', () => {
        console.log('user is disconnect...');
        userRemove(socket.id);
        io.emit('getUser',users);
    })
})
```

## Cloudinary (Upload das imagens na nuvem)
<div align="center"><img src="https://res.cloudinary.com/demo/image/upload/cloudinary_icon.png" height="177"></div>

```
npm i cloudinary
```

Vamos fazer os uploads das fotos de perfil ou outros documentos, mas para isso será preciso algum ambiente com capacidade de armazenamento eficaz para tal tarefa.

Isso é a escolha, alguns utilizam algum serviço de armazenamento na computação em nuvem como o **Amazon S3 - Simple Storage Service**, porém iremos utilizar o **Cloudinary**, uma solução gratuita.

- Para saber como integrar com a sua aplicação Node.js, acesse: https://cloudinary.com/documentation/node_integration
- Acesse o endereço para a área do dashboard: https://cloudinary.com/console/c-a9df15816f0e18d2cf546b5d8ef6a3
- Acesse a área de mídia dos seus arquivos: https://cloudinary.com/console/c-a9df15816f0e18d2cf546b5d8ef6a3/media_library/folders/home
- Acesse o endereço para a área de upload: https://cloudinary.com/console/c-a9df15816f0e18d2cf546b5d8ef6a3/settings/upload

Acesse a área de upload e clique em <a href="https://cloudinary.com/console/c-a9df15816f0e18d2cf546b5d8ef6a3/upload_presets/new">Add upload present</a>.

Em `Upload preset name` nomeie o projeto como `AUTOGLASS-CHAT` e depois clique em `Save`. Veja que já foi criado seu ambiente de upload chamado `AUTOGLASS-CHAT`. 

Na seção `Signing Mode:` configure para `Unsigned`, isso é muito importante para a aplicação funcionar! 

### Cloud name
```
isaacalves7
```

### API Base URL
```
https://api.cloudnary.com/v1_1/isaacalves7
```

### API Environment variable
```
CLOUDINARY_URL=cloudinary://658366239586916:YDSdH0j38xHQhdDDhV3BAjgCRNE@isaacalves7
```

### Base and Seccure delivery URL
```
http://res.cloudinary.com/isaacalves7
```

### API do UPLOAD
```
https://api.cloudinary.com/v1_1/isaacalves7/image/upload
```

Com o relacionamento de dados entre entidades (cliente e o vendedor), haverá uma "ocultação" de usuários de outras regiões para o vendedor permitindo somente ter contato com o cliente daquela região.

# ⚙️ Testando as APIs com Postman
<div align="center"><a href="https://www.postman.com/"><img src="https://cdn.worldvectorlogo.com/logos/postman.svg" height="177"></a></div>

O **Postman** é uma excelente ferramenta para testar e manipular APIs, assim como **métodos HTTP** (GET, POST, PUT e entre outros) ou requisições e respostas de uma aplicação web.

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
    "tel":"+55 21 99527-2677",
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

---

# 🏠 Etapa de produção
A etapa de produção é a etapa final do projeto da sua aplicação, e logo em seguida, ele seguirá com a atualização: `alpha`.

# 🧱 Executando a aplicação no modo de produção
Nessa etapa, foram adicionadas algumas modificações na estrutura do código-fonte da etapa de desenvolvimento, como:

```javascript
```

- ❌ O **proxy** configurado no `package.json` do `./frontend/` foi **removido**;

### Rodando o código no modo `build`
```sh
npm run build
```

### Executando apenas o código back-end no modo `build`
```sh
npm run start
```

### Executando o código do front e back-end no modo `build`
```sh
npm run server
```
