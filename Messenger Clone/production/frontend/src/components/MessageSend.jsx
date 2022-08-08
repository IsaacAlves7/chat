import React, {useEffect} from 'react';

// ------------------------------------------------------------------------------------------------------------------------------

const MessageSend = ({inputHendle,newMessage,sendMessage,ImageSend}) => {
      
  return(
    <div className='message-send-section'>
        <input type='checkbox' id='emoji'/>

        <div className='file hover-attachment'>
            <div className='add-attachment'>
                Abrir mais ações
            </div>
            <svg viewBox="0 0 36 36" height="28px" width="28px" class="a8c37x1j muag1w35 dlv3wnog enqfppq2 rl04r1d5 ms05siws hr662l2t b7h9ocf4 crt8y2ji tftn3vyl"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-1-16a1 1 0 112 0v3.75c0 .138.112.25.25.25H23a1 1 0 110 2h-3.75a.25.25 0 00-.25.25V23a1 1 0 11-2 0v-3.75a.25.25 0 00-.25-.25H13a1 1 0 110-2h3.75a.25.25 0 00.25-.25V13z" fill="#0084ff"></path></svg>
        </div>

        <div className='file hover-image'>
            <div className='add-image'>
                Anexar um arquivo
            </div>
            <input onChange={ImageSend} type="file" id="pic" className='form-control'/>
            <label htmlFor='pic'>
            <svg viewBox="0 0 36 36" height="28px" width="28px" class="a8c37x1j muag1w35 dlv3wnog enqfppq2 rl04r1d5 ms05siws hr662l2t b7h9ocf4 crt8y2ji"><path d="M13.5 16.5a2 2 0 100-4 2 2 0 000 4z" fill="#0084ff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12v12a4 4 0 004 4h14a4 4 0 004-4V12a4 4 0 00-4-4H11a4 4 0 00-4 4zm18-1.5H11A1.5 1.5 0 009.5 12v9.546a.25.25 0 00.375.217L15 18.803a6 6 0 016 0l5.125 2.96a.25.25 0 00.375-.217V12a1.5 1.5 0 00-1.5-1.5z" fill="#0084ff"></path></svg>
            </label>
        </div>

        <div className='file hover-gift'>
            <div className='add-gift'>
                Presentear
            </div>
            <svg viewBox="0 0 36 36" height="28px" width="28px" class="a8c37x1j muag1w35 dlv3wnog enqfppq2 rl04r1d5 ms05siws hr662l2t b7h9ocf4 crt8y2ji"><path d="M8 12a4 4 0 014-4h12a4 4 0 014 4v5a1 1 0 01-1 1h-3a6 6 0 00-6 6v3a1 1 0 01-1 1h-5a4 4 0 01-4-4V12z" fill="#0084ff"></path><path d="M20 27c0 .89 1.077 1.33 1.707.7l5.993-5.993c.63-.63.19-1.707-.7-1.707h-3a4 4 0 00-4 4v3z" fill="#0084ff"></path></svg>
        </div>

        <div className='file hover-gift'>
            <div className='add-gift'>
                Presentear
            </div>
            <svg viewBox="0 0 36 36" height="28px" width="28px" class="a8c37x1j muag1w35 dlv3wnog enqfppq2 rl04r1d5 ms05siws hr662l2t b7h9ocf4 crt8y2ji"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11a4 4 0 014-4h8c1.067 0 2.035.417 2.753 1.098.517.491 1.151.902 1.866.902H26a4 4 0 014 4v12a4 4 0 01-4 4h-8a3.986 3.986 0 01-2.752-1.098c-.518-.491-1.152-.902-1.866-.902H10a4 4 0 01-4-4V11zm7.865 4.908a1.948 1.948 0 00-1.321-.456c-.461.02-.918.214-1.295.576-.378.363-.65.873-.754 1.457a2.927 2.927 0 00.209 1.708c.236.52.611.915 1.046 1.14a1.87 1.87 0 001.36.152c.454-.122.88-.419 1.195-.868.098-.14.183-.291.253-.451.068-.154-.052-.316-.22-.316H12.85a.85.85 0 010-1.7h2.8c.47 0 .85.38.85.85a4.53 4.53 0 01-.803 2.593c-.527.75-1.277 1.3-2.144 1.534a3.57 3.57 0 01-2.586-.285c-.8-.414-1.43-1.107-1.811-1.947a4.628 4.628 0 01-.335-2.706 4.357 4.357 0 011.25-2.388 3.697 3.697 0 012.398-1.048 3.647 3.647 0 012.472.838.85.85 0 01-1.076 1.317zM22.7 19.6a.25.25 0 01.25-.25h2.75a.85.85 0 000-1.7h-2.75a.25.25 0 01-.25-.25v-1.45a.25.25 0 01.25-.25h3.2a.85.85 0 100-1.7h-4.3a.85.85 0 00-.85.85v6.3a.85.85 0 001.7 0V19.6zm-3.35-4.75a.85.85 0 00-1.7 0v6.3a.85.85 0 001.7 0v-6.3z" fill="#0084ff"></path></svg>
        </div>

        <div className='message-type'> 
            <input type="text" onChange={inputHendle} name="message" title='Mensagem' id='message' placeholder='Aa' className='form-control' value={newMessage} />

            <div className='file hover-mic' title='Escolha um emoji'>
                <div className='add-mic'>
                    Escolha um emoji
                </div>
                <svg class="a8c37x1j muag1w35 dlv3wnog enqfppq2 rl04r1d5 ms05siws hr662l2t b7h9ocf4 crt8y2ji" height="28px" viewBox="0 0 36 36" width="28px"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-5.25-13c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zm7.5 0c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zm-7.52 5.464a1 1 0 011.41-.12 5.963 5.963 0 003.856 1.406c1.47 0 2.813-.528 3.856-1.406a1 1 0 111.288 1.53 7.962 7.962 0 01-5.144 1.876 7.962 7.962 0 01-5.144-1.877 1 1 0 01-.121-1.409z" fill="#0084ff"></path></svg>
            </div>

        </div>

        <div onClick={sendMessage} className='file hover-gift' title='Enviar um like'>
            <label> <svg viewBox="0 0 22 23" height="20" width="20" class="crt8y2ji"><path d="M10.987 0c1.104 0 3.67.726 3.67 5.149 0 1.232-.123 2.001-.209 2.534a16.11 16.11 0 00-.048.314l-.001.005a.36.36 0 00.362.406c4.399 0 6.748 1.164 6.748 2.353 0 .533-.2 1.02-.527 1.395a.11.11 0 00.023.163 2.13 2.13 0 01.992 1.79c0 .86-.477 1.598-1.215 1.943a.11.11 0 00-.046.157c.207.328.329.713.329 1.128 0 .946-.547 1.741-1.406 2.029a.109.109 0 00-.068.137c.061.184.098.38.098.584 0 1.056-1.776 1.913-5.95 1.913-3.05 0-5.154-.545-5.963-.936-.595-.288-1.276-.81-1.276-2.34v-6.086c0-1.72.958-2.87 1.911-4.014C9.357 7.49 10.3 6.36 10.3 4.681c0-1.34-.091-2.19-.159-2.817-.039-.368-.07-.66-.07-.928 0-.527.385-.934.917-.936zM3.5 11h-2C.5 11 0 13.686 0 17s.5 6 1.5 6h2a1 1 0 001-1V12a1 1 0 00-1-1z" fill="#0084ff"></path></svg> </label> {/* <svg width="20px" height="20px" viewBox="0 0 24 24" class="crt8y2ji"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0084ff"></path></svg> */}
        </div>

    </div>
  );
 };

export default MessageSend;