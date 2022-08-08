import React from 'react';
import FriendInfo from './FriendInfo';
import Message from './Message';
import MessageSend from './MessageSend';

// --------------------------------------------------------------------------------------------------------------------------------

const RightSide = (props) => {

const {currentfriend,inputHendle,newMessage,sendMessage,message,scrollRef,emojiSend,ImageSend,activeUser,typingMessage} = props;
// console.log(currentfriend);

  return (
    <div className='col-9'>
        <div className='right-side'>
            <input type='checkbox' id='dot' />
            <div className='row'>
                <div className='col-8'>
                    <div className='message-send-show'>
                        <div className='header'>
                            <div className='image-name'>
                                <div className='image'>
                                    <img src={currentfriend.image} alt='' />

                                    {
                                        activeUser && activeUser.length > 0 && activeUser.some(u => u.userId === currentfriend._id) ? <div className='active-icon'></div> : '' 
                                    }

                                </div>
                                <div className='name'>
                                    <h3>{currentfriend.userName}</h3>
                                </div>
                            </div>

                          <div className='icons'>
                            
                                <div className='icon' title='Iniciar uma ligação de voz'>
                                  <svg role="presentation" fill="#0084ff" width="30px" height="30px" viewBox="0 0 36 36"><path d="M25.753 28.2c1.07-.357 1.816-1.275 2.423-2.225a2.05 2.05 0 00.037-2.151 4.998 4.998 0 00-.723-.963 11.594 11.594 0 00-2.888-2.112c-.58-.299-1.272-.212-1.808.159l-2.098 1.452a.472.472 0 01-.437.055 11.557 11.557 0 01-4.045-2.63 11.554 11.554 0 01-2.63-4.044.472.472 0 01.056-.437l1.453-2.098c.37-.536.457-1.228.158-1.807A11.587 11.587 0 0013.14 8.51a4.995 4.995 0 00-.963-.723 2.05 2.05 0 00-2.15.037c-.951.607-1.87 1.353-2.225 2.424-1.174 3.527 1.187 8.461 5.338 12.613 4.152 4.151 9.086 6.512 12.614 5.338z"></path></svg>
                                </div>

                                <div className='icon' title='Iniciar uma ligação de vídeo'>
                                  <svg role="presentation" fill="#0084ff" width="34px" height="34px" viewBox="0 0 36 36"><path d="M9 9.5a4 4 0 00-4 4v9a4 4 0 004 4h10a4 4 0 004-4v-9a4 4 0 00-4-4H9zm16.829 12.032l3.723 1.861A1 1 0 0031 22.5v-9a1 1 0 00-1.448-.894l-3.723 1.861A1.5 1.5 0 0025 15.81v4.38a1.5 1.5 0 00.829 1.342z"></path></svg>
                                </div>

                                <div className='icon'>
                                    <label htmlFor='dot' title='Informações da conversa'><svg role="presentation" fill="#0084ff" width="28px" height="28px" viewBox="0 0 36 36"><path d="M18 29C24.0751 29 29 24.0751 29 18C29 11.9249 24.0751 7 18 7C11.9249 7 7 11.9249 7 18C7 24.0751 11.9249 29 18 29ZM19.5 18C19.5 18.8284 18.8284 19.5 18 19.5C17.1716 19.5 16.5 18.8284 16.5 18C16.5 17.1716 17.1716 16.5 18 16.5C18.8284 16.5 19.5 17.1716 19.5 18ZM23 19.5C23.8284 19.5 24.5 18.8284 24.5 18C24.5 17.1716 23.8284 16.5 23 16.5C22.1716 16.5 21.5 17.1716 21.5 18C21.5 18.8284 22.1716 19.5 23 19.5ZM14.5 18C14.5 18.8284 13.8284 19.5 13 19.5C12.1716 19.5 11.5 18.8284 11.5 18C11.5 17.1716 12.1716 16.5 13 16.5C13.8284 16.5 14.5 17.1716 14.5 18Z" fill="#0084ff" fill-rule="evenodd" clip-rule="evenodd"></path></svg></label>
                                </div>

                          </div>
                        </div>

                        <Message 
                        message = { message }
                        currentfriend = {currentfriend}
                        scrollRef = {scrollRef}
                        typingMessage={typingMessage}
                        />
                        <MessageSend 
                        inputHendle = {inputHendle}
                        newMessage = {newMessage}
                        sendMessage = {sendMessage}
                        emojiSend = {emojiSend}
                        ImageSend = {ImageSend}
                        />
                        
                    </div>
                </div>

                <div className='col-4'>
                   <FriendInfo message={message} currentfriend={currentfriend} activeUser = {activeUser} />
                </div>

            </div>
        </div>
    </div>
  )
};

export default RightSide;