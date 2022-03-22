import './index.css';
import Messenger from './components/Messenger'; // the same thing of import Mess as Messenger from './components/Messenger'
// import {WhatsappMessenger} from './components/Messenger'; importando mais de uma função no mesmo arquivo
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './components/theme/TemplateProvider'

function App() { // Toda função de return(), dentro dela, necessita da tag de exportação para iniciar o overrides de importação
  return ( // Caso sejam Tags HTML5 necessitam que sejam encadeadas pelas tais (<></> Tag vazia = recomendado)
        <TemplateProvider>
          <AccountProvider>
            <Messenger/> {/* Aqui ela está chamando a função de importação para dentro da função do App */}
          </AccountProvider>
        </TemplateProvider>
  );
}
// Aqui ela está exportando a função App, para outros arquivos acessarem pela importação 
// Somente um export default é permitido por módulo
// Para você exportar mais de uma função, é necessário usar o export na própria função: export const função () => {}
export default App;