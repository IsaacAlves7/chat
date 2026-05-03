<!--
https://youtu.be/59pumSluRj4
https://youtu.be/Q-y8ASwOYgQ
https://youtu.be/aLCu3vWot2E
https://youtu.be/oYMtCGfYMB8
https://youtu.be/cnxrhXORmnE
https://youtu.be/CkRGJC0ytdU
https://youtu.be/vl5CJIhy5oU
https://youtu.be/SYP54qp4aMM
https://youtu.be/NHCOPoqqFPc
https://youtu.be/8e_4KIj4jBs


https://youtu.be/43wwRPwQhvM
-->

# 💬 Chat Application
<img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" height="77" align="right">

Essa aplicação de <a href="https://medium.com/@m.romaniiuk/system-design-chat-application-1d6fbf21b372">chat</a> foi feita com MERN stack (MongoDB, Express, React.js e Node.js) e algumas bibliotecas e APIs JavaScript para a construção de funcionalidades importantes no projeto.

APIs:
- REST API
- Cloudinary

Front-end stylesheet:
- Bootstrap
- Material-UI
- Chakra-UI
- Node-Sass
- Styled-components
- CSS

Bibliotecas:
- Socket.io (SocketIO)
- WebRTC
- Pusher
- SocketIO
- Twilio

Connections, Auth, HTTP-clients e middlewares: Como projetamos um aplicativo de bate-papo como WhatsApp, Facebook Messenger ou Discord? O diagrama abaixo mostra um design para um aplicativo de bate-papo 1 para 1 simplificado.

<img height="477" align="right" src="https://github.com/user-attachments/assets/cfd169a6-d9c9-40a0-93de-11d220baab85" />

- Axios
- CORS
- Body-parser
- cookie-parser
- express.static
- Proxy
- JWT
- errorhandler
- method-override
- React
- Redux
- Socket.io
- MongoDB
- Node.js
- Express
- Node-Sass
- JWT
- WebRTC

Fluxo de login do usuário:

1. Passo 1: Alice faz login no aplicativo de bate-papo e estabelece uma conexão de soquete da web com o lado do servidor.
2. Passos 2-4: O serviço de presença recebe a notificação de Alice, atualiza sua presença e notifica os amigos de Alice sobre sua presença.

Fluxo de mensagens:

- Passos 1-2: Alice envia uma mensagem de bate-papo para Bob. A mensagem de chat é roteada para o Serviço de Chat A.

- Etapas 3 a 4: A mensagem de chat é enviada para o serviço de sequenciamento, que gera uma ID exclusiva e é mantida no repositório de mensagens.

- Passo 5: A mensagem de chat é enviada para a fila de sincronização de mensagens para sincronizar com o serviço de chat do Bob.

- Passo 6: Antes de encaminhar a mensagem, o serviço de sincronização de mensagens verifica a presença de Bob:
a) Se Bob estiver online, a mensagem de bate-papo será enviada para o serviço de bate-papo B.
b) Se Bob estiver offline, a mensagem será enviada para o servidor de push e enviada para o dispositivo de Bob.

- Etapas 7 a 8: Se Bob estiver online, a mensagem de bate-papo será enviada para Bob por meio do soquete da Web

<img width="517" height="443" alt="Captura de tela 2026-04-03 165707" src="https://github.com/user-attachments/assets/1d7e1e0c-9fae-4ed7-854a-a359bcc558cf" />
