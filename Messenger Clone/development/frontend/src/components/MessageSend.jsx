import React, {useEffect} from 'react';
import {FaPlusCircle,FaFileImage,FaGift,FaPaperPlane,FaMicrophone} from "react-icons/fa";

// ------------------------------------------------------------------------------------------------------------------------------

const MessageSend = ({inputHendle,newMessage,sendMessage,ImageSend}) => {
      
  return(
    <div className='message-send-section'>
        <input type='checkbox' id='emoji'/>

        {/* <div className='file hover-attachment'>
            <div className='add-attachment'>
                Anexar
            </div>
            <FaPlusCircle/>
        </div> */}

        <div className='file hover-image'>
            <div className='add-image'>
                Carregar imagem
            </div>
            <input onChange={ImageSend} type="file" id="pic" className='form-control'/>
            <label htmlFor='pic'>
                <FaFileImage/>
            </label>
        </div>

        {/* <div className='file hover-gift'>
            <div className='add-gift'>
                Presentear
            </div>
            <FaGift />
        </div> */}

        <div className='message-type'> 
            <input type="text" onChange={inputHendle} name="message" title='Mensagem' id='message' placeholder='Aa' className='form-control' value={newMessage} />


            {/* <div className='file hover-mic' title='Gravar audio'>
                <div className='add-mic'>
                    Gravar
                </div>
                <FaMicrophone/>
            </div> */}

        </div>

        <div onClick={sendMessage} className='file hover-gift' title='Enviar mensagem'>
            <label> <FaPaperPlane/> </label>
        </div>

    </div>
  );
 };

export default MessageSend;