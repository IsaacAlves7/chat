<a href="https://github.com/IsaacAlves7/chat-projects"><img src="https://fabricadecursos.com.br/wp-content/uploads/2020/04/cases-autoglass.jpg" width="100%"></a>

# AUTOGLASS CHAT
It's a project of **private Chat web application** for the AUTOGLASS company and his users. This application was made with *MERN* stack (MongoDB, Express, React.js and Node.js) + *Socket.io* + *GCP Authentication API* + *JWT*.

## Project Architecture
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160253589-5d87ef9a-29de-4f19-90c4-7a992cb71087.png"></div><br \>

The used architecture for this project was the **MVC architecture** (Model View Controller).

Where the *View* is the Client Application (front-end) sending requests to *Controller* that is your Server Application (back-end), and this manipuling the data on *Model* and controlling the route traffic, that rendering on View and this displays on Model.

### MVC architecture design for MERN stack
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160254779-cd2b8ddb-541a-45f3-a55a-38f6f4bf13ed.png" width="87%"></div><br \>

It's the standard solution of Web Applications architecture with MERN stack and REST API.

In additional, has been made one implementation with the Socket.io library, the GCP Authentication API and JWT for the chat application.

## About the used tecnologies
### MERN stack
- <a href="https://www.mongodb.com/">MongoDB (v5.0.6)</a> 
- <a href="https://expressjs.com/pt-br/">Express (v4.17.1)</a>
- <a href="https://pt-br.reactjs.org/">React.js (v17.0.2)</a>
- <a href="https://nodejs.org/en/">Node.js (v16.14.0)</a>

### Package manager
- <a href="https://www.npmjs.com/">NPM (v8.3.1)</a>

### Dependences
- <a href="https://www.npmjs.com/package/moment">Moment (v2.29.1)</a>
- <a href="https://www.npmjs.com/package/axios">Axios (v0.21.1)</a>
- <a href="https://www.npmjs.com/package/cors">Cors (v2.8.5)</a>
- <a href="https://www.npmjs.com/package/body-parser">Body-parser (v1.19.0)</a>
- <a href="https://www.npmjs.com/package/nodemon">Nodemon (v2.0.9)</a>
- <a href="https://www.npmjs.com/package/dot-env">Dot-Env (v10.0.0)</a>
- <a href="https://www.npmjs.com/package/mongoose">Mongoose (v5.13.0)</a>
- <a href="https://www.npmjs.com/package/multer">Multer (v1.4.2)</a>
- <a href="https://www.npmjs.com/package/react-google-login">react-google-login (v5.2.2)</a>
- <a href="">JWT (v)</a>
- <a href="">Material-UI (v)</a>

### Developer tools
- <a href="">Git LFS - Large Files Storage ()</a>
- <a href="">Git ()</a>
- <a href="">Postman ()</a>
- <a href="">.gitignore ()</a>
- <a href="">launch.json ()</a>
- <a href="">firebase.js ()</a>
- <a href="">VS Code ()</a>

### Directories (Folders and files of the Application)
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160254373-904dfb69-ff45-4aaa-939a-85821848633b.png" width="100%"></div><br \>

First of all, enter in the project folder and i'll explain all about the directories and files of this project:

- `./vscode/` is the folder that contains the `launch.json` file, this is a Node.js debugger in the Visual Studio Code editor (optional);

- `./client/` is the folder of front-end web application (necessary);

- `./server/` is the folder of the back-end web application (necessary);

- `./socket/` is the folder of back-end web application library (necessary);

- `.gitignore` is a skip/ ignore file for modules when you're pushing the repository to the GitHub (optional);

- `.gitattributes` is a file of **Git LFS - Large File Storage** for reduce the large storage of any file (optional);

- `README.md` is the documentation of the project written in Markdown (optional).

### Execution order to start the app on terminal
This project has an execution order on terminal, follow the steps below:

1. Run the `socket` directory on `./socket/index.js` directory:
```
cd socket
nodemon index.js
```
> It's the Socket.io library running the Node.js back-end application in an alone folder, listening the `3000` port (the same of client).

2. Run the `server` directory on `./server/index.js` directory:
```
cd server
nodemon index.js
```
> It's the Model and Controller running the Node.js back-end application in an alone folder on `8000` port.

3. Run the `client` directory on `./src/index.js` directory:
```
cd client
npm run start
```
> It's the View running the React.js front-end application in an alone folder on `3000` port.

## GCP - Google Cloud Plataform API
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/google-cloud-2.svg" width="177em"></div><br \>

Learn more how create the Google Cloud OAuth Client ID: 

Copy and drop on the `data.js` file:
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

## JWT
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" width="177em"></div><br \>

## RESTful API/ REST API
<div align="center"><img src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png" width="17.3%"><img src="https://www.rlogical.com/wp-content/uploads/2021/08/rest-api-model.png" width="47%"></div>

<div align="center">
<details><summary><b title="(click to open)">⚙️ REST API with Axios library</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

The **Axios** library is a 

## Debugger
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" width="177em"></div><br \>

## MongoDB configuration
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="177em"></div><br \>

Copy and drop on 

### Network Access

#### Local IP Address
```
<IP>/32
```
#### Joker IP Address
```
0.0.0.0/0
```
### `./server/database/db.js`
```javascript
mongodb+srv://<username>:<password>@cluster0.94nsy.mongodb.net/<database>?retryWrites=true&w=majority
```

## Otimization
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/159167177-49b2c872-9b04-4ca1-aa65-488b74786981.jpeg" width="87%"></div><br \>

Pelo peso dos arquivos com extensão `.js` e `.css` estarem sobrecarregando a capacidade de armazenamento do repositório do GitHub, foram substituídos por arquivos com extensão `.jsx` e apenas uma folha de estilo chamada `index.css`.

## `.env` file
---

# View (Front-End/ Client project)
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="177em"></div>

<div align="center">
<details><summary><b title="(click to open)">⚙️ REST API with Axios library</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

This project resides on `.client`

# Getting Started with Create React App

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

# Controller (Back-End/ Server project)
<div align="center"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width="177em"></div>

<div align="center">
<details><summary><b title="(click to open)">⚙️ REST API with Axios library</b></summary>
<div align="center">
<img src="https://symbols.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg" width="277em">
</div>

</details>
</div>

The **controller** is where the traffic of the application is controlled by routes and the API.

---
# Model (ODM Back-End)
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="177em"><img src="https://miro.medium.com/max/370/1*jO715XDC1YAEsWUwovWUQw.png" width="277em"></div>

<div align="center">
<details><summary><b title="(click to open)">⚙️ REST API with Axios library</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

---

# Socket.io (The bidirectional real-time execution)
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" width="177em"></div><br \>

<div align="center">
<details><summary><b title="(click to open)">⚙️ REST API with Axios library</b></summary>
<div align="center">

<div align="center"><img src="https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-mongodb-mern-stack-example-architecture.png" width="87%"></div><br \>

</div>

</details>
</div>

The **Socket.io** is a realtime application framework (Node.JS server). This enables real-time bidirectional event-based communication. It consists of:

- a Node.js server (this repository);
- a Javascript client library for the browser (or a Node.js client).

---

## Author
This project was made by **HeadMind Partners** (ex-Beijaflore) company.

| [<img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEy1FNaUiE1dw/company-logo_200_200/0/1641465970668?e=1656547200&v=beta&t=ctTiEK8RvXTv5HRyfkVySu3JXgjuSr8_qwT8jvscWU4" width="110"><br><sub>HeadMind Partners</sub>](https://www.headmind.com/pt/) | [<img src="https://avatars.githubusercontent.com/u/61624336?v=4" width="110"><br><sub>@IsaacAlves7 - Digital trainee</sub>](https://github.com/IsaacAlves7) 
|:-:|:-:|
