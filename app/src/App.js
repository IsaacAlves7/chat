import './index.css';
import Messenger from './components/Messenger';
// import {WhatsappMessenger} from './components/Messenger'; importando mais de uma função no mesmo arquivo

function App() {
  return ( // Toda função de return(), dentro dela, necessita de uma Tag HTML5 para iniciar o overrides de importação (<></> Tag vazia = recomendado)
   <div>
      {/* <p>Hello, World!</p> */}
      <Messenger/> {/* Aqui ela está chamando a função de importação para dentro da função do App */}
      {/*<WhatsappMessenger/>*/}
    </div>
  );
}
// Aqui ela está exportando a função App, para outros arquivos acessarem pela importação 
// Somente um export default é permitido por módulo
// Para você exportar mais de uma função, é necessário usar o export na própria função: export const função () => {}
export default App;