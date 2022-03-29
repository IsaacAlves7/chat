<a href="https://github.com/IsaacAlves7/chat-projects"><img src="https://fabricadecursos.com.br/wp-content/uploads/2020/04/cases-autoglass.jpg" width="100%"></a>

# AUTOGLASS CHAT (2022)
Esse é um projeto de aplicação web de Chat privado para a empresa AUTOGLASS e seus usuários. Esta aplicação foi feita com MERN stack (MongoDB, Express, React.js e Node.js) + Socket.io + API de autenticação do GCP - Google Cloud Plataform + JWT - JSON Web Token.

## Arquitetura do projeto
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160253589-5d87ef9a-29de-4f19-90c4-7a992cb71087.png"></div><br \>

A arquitetura utilizada para este projeto foi a arquitetura **MVC** (Model View Controller).

Onde a **View** é a Aplicação Cliente (front-end) enviando requisições para o **Controller** que é sua Aplicação do Servidor (back-end), e esta manipulando os dados (ODM - Object Data Model com banco de dados) no **Model** e controlando o tráfego das rotas da aplicação, que renderiza na View e isso é exibido no Model.

### Design da arquitetura MVC para MERN stack
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160254779-cd2b8ddb-541a-45f3-a55a-38f6f4bf13ed.png" width="87%"></div><br \>

## Tudo sobre as tecnologias usadas
### MERN stack
- <a href="https://www.mongodb.com/">MongoDB (v5.0.6)</a> 
- <a href="https://expressjs.com/pt-br/">Express (v4.17.1)</a>
- <a href="https://pt-br.reactjs.org/">React.js (v17.0.2)</a>
- <a href="https://nodejs.org/en/">Node.js (v16.14.0)</a>

### Package manager
- <a href="https://www.npmjs.com/">NPM (v8.3.1)</a>

### Dependências
- <a href="https://www.npmjs.com/package/moment">Moment (v2.29.1)</a>
- <a href="https://www.npmjs.com/package/axios">Axios (v0.21.1)</a>
- <a href="https://www.npmjs.com/package/cors">Cors (v2.8.5)</a>
- <a href="https://www.npmjs.com/package/body-parser">Body-parser (v1.19.0)</a>
- <a href="https://www.npmjs.com/package/nodemon">Nodemon (v2.0.9)</a>
- <a href="https://www.npmjs.com/package/dot-env">Dot-Env (v10.0.0)</a>
- <a href="https://www.npmjs.com/package/mongoose">Mongoose (v5.13.0)</a>
- <a href="https://www.npmjs.com/package/multer">Multer (v1.4.2)</a>
- <a href="https://www.npmjs.com/package/react-google-login">react-google-login (v5.2.2)</a>
- <a href="https://www.npmjs.com/package/socket.io-client">socket.io-client (v4.1.2)</a>
- <a href="https://mui.com/pt/">Material-UI (v4.11.4)</a>

## Diretórios (Pastas e arquivos da Aplicação)
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160254373-904dfb69-ff45-4aaa-939a-85821848633b.png" width="100%"></div><br \>

Antes de tudo, entre na pasta do projeto e explico tudo sobre os diretórios e arquivos deste projeto:

- `./vscode/` é a pasta que contém o arquivo `launch.json`, esse é um Node.js debugger no editor Visual Studio Code (opcional);

- `./client/` é a pasta da aplicação web front-end (necessário);

- `./server/` é a pasta da aplicação web back-end (necessário);

- `./socket/` é a pasta da biblioteca da aplicação web back-end (necessário);

- `.gitignore` é um arquivo de ignorar modulos quando quando você dá um push no repositório do GitHub (opcional);

- `.gitattributes` é um arquivo do **Git LFS - Large File Storage** para reduzir arquivos de grande largura de armazenamento para o repositório do GitHub, tendo o limite de 1.5GB para o free (opcional);

- `README.md` é a documentação do projeto escrito em Markdown (opcional).

## Ordem de execução para iniciar o app no terminal
Este projeto possui uma ordem de execução no terminal, siga os passos abaixo:

1. Rode o diretório `socket` no `./socket/index.js`:
```
cd socket
nodemon index.js
```
> Esse é a biblioteca Socket.io rodando o Node.js de forma isolada do _Controller_, ouvindo a porta `3000` (a mesma do cliente).

2. Rode o diretório `server` no `./server/index.js`:
```
cd server
nodemon index.js
```
> Este é o _Model_ e _Controller_ rodando a aplicação web back-end do Node.js na porta `8000`.

3. Rode o diretório `client` no `./src/index.js`:
```
cd client
npm run start
```
> Esse é o _View_ rodando a aplicação front-end do React.js na porta `3000`.

## GCP - Google Cloud Plataform Auth Credential API
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/google-cloud-2.svg" width="177em"></div><br \>

Aprenda mais sobre como criar o Google Cloud OAuth Client ID: https://console.cloud.google.com/apis/credentials?project=autoglass-chat&supportedpurview=project

Copie e cole no arquivo `data.js`:

### Google Client ID (googleId)
```
538364591142-4u1kde577futhoc4kq2rglojs9f163bt.apps.googleusercontent.com
```
### EXTRA: Secret Key (no-used)
```
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
```

### `./client/src/constants/data.js`
```javascript
export const clientId = '<googleId>';
```

## JWT - JSON Web Token
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" width="177em"></div><br \>

O **JWT**, acrônimo para **J**SON **W**eb **T**oken, é muito utilizado quando fazemos autenticação via API, onde utiliza o JSON para a comunicação de dados com o Token. Apesar de ser considerado ideal para autenticação, o JWT é um recurso de autorização.

## RESTful API (REST API)
<div align="center"><img src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png" width="17.3%"><img src="https://www.rlogical.com/wp-content/uploads/2021/08/rest-api-model.png" width="47%"></div><br \>

<div align="center">
<details><summary><b title="(click to open)">⚙️ REST API with Axios library</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

A biblioteca **Axios** é um cliente HTTP baseado em _promise_ para o navegador e node.js.  

## Node.js and React.js Debugger
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" width="177em"></div><br \>

Saiba mais como depurar um código com Node.js (back-end) ou React.js (front-end):
- https://www.alura.com.br/artigos/debugando-projetos-nodejs-no-vscode
- https://youtu.be/LX-kstxcWbI
- https://youtu.be/Lb20EoDja50
- https://youtu.be/nolpm5iIyio

## Configuração do MongoDB (via cloud)
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="177em"></div><br \>

### Network Access

#### Local IP Address (from home or company)
```
<IP>/32
```

#### Joker IP Address (from anywhere)
```
0.0.0.0/0
```

### `./server/database/db.js`
```javascript
mongodb+srv://<username>:<password>@cluster0.94nsy.mongodb.net/<database>?retryWrites=true&w=majority
```

## Otimização da aplicação
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/159167177-49b2c872-9b04-4ca1-aa65-488b74786981.jpeg" width="87%"></div><br \>

Pelo peso dos arquivos com extensão `.js` e `.css` estarem sobrecarregando a capacidade de armazenamento do repositório do GitHub, foram substituídos por arquivos com extensão `.jsx` e apenas uma folha de estilo chamada `index.css`.

## `.env`
O arquivo `.env` é uma variável de ambiente para guardar os segredos da sua aplicação para que elas sejam referenciadas e acessadas pela aplicação, no caso, os tipos de segredos em geral podem ser: endereço IP, portas, senhas, usuários, tokens e entre outros dados sigilosos. Com a criação desse arquivo é possível garantir uma segurança a mais para a sua aplicação.

Abaixo, será mostrado o modelo de .env que a aplicação precisa para ficar de pé:

```
DB_USERNAME=<mongodb_user>
DB_PASSWORD=<mongodb_password>
PORT=<back-end-app_port>
```

---

# View (Aplicação Front-End/ Client)
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="177em"></div>

<div align="center">
<details><summary><b title="(click to open)">➕ More about the View</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

This project resides on `.client`

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

# Controller (Aplicação Back-End/ Server)
<div align="center"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width="177em"></div>

<div align="center">
<details><summary><b title="(click to open)">➕ More about the Controller</b></summary>
<div align="center">
<img src="https://symbols.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg" width="277em">
</div>

</details>
</div>

The **controller** is where the traffic of the application is controlled by routes and the API.

---

# Model (ODM - Object Data Model no Back-End)
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="177em"><img src="https://miro.medium.com/max/370/1*jO715XDC1YAEsWUwovWUQw.png" width="277em"></div>

<div align="center">
<details><summary><b title="(click to open)">➕ More about the Model</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

---

# Socket.io (Execução bidirecional em tempo real)
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" width="177em"></div><br \>

<div align="center">
<details><summary><b title="(click to open)">➕ More about the Socket.io</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

O **Socket.io** é um framework/ biblioteca para execução e comunicação bidirecional em tempo real para aplicações. Isso consiste em:

- um servidor Node.js;
- uma biblioteca cliente Javascript para o navegador (ou um cliente Node.js).

---

# Autor do projeto
Esse projeto foi feito pela empresa **HeadMind Partners Brasil**: 

| [<img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEy1FNaUiE1dw/company-logo_200_200/0/1641465970668?e=1656547200&v=beta&t=ctTiEK8RvXTv5HRyfkVySu3JXgjuSr8_qwT8jvscWU4" width="110"><br><sub>HeadMind Partners</sub>](https://www.headmind.com/pt/) | [<img src="https://avatars.githubusercontent.com/u/61624336?v=4" width="110"><br><sub>@IsaacAlves7</sub>](https://github.com/IsaacAlves7) 
|:-:|:-:|
