import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FaRegCheckCircle } from 'react-icons/fa';

// ----------------------------------------------------------------------------------------------------------------------------

const Message = ({message,currentfriend,scrollRef,typingMessage}) => {
  const {myInfo} = useSelector(state=>state.auth);
  return (
    <>
        <div className='message-show'>

            {
               message && message.length > 0 ? message.map((m, index) => m.senderId === myInfo.id ? <div ref={scrollRef} className='my-message'>
                <div className='image-message'>
                    <div className='my-text'>
                        <p className='message-text'> {m.message.text === '' ? <img src={`./image/${m.message.image}`} alt=''/> : m.message.text } </p>

                            {

                              index === message.length -1 && m.senderId === myInfo.id ? m.status === 'seen' ? <img className='img' src={`./image/${currentfriend.image}`} alt='' title={`Visto por ${currentfriend.userName}`} style={{cursor: 'pointer'}}/> : m.status === 'delivared' ? <span> <FaRegCheckCircle title='Entregue' style={{cursor: 'pointer'}}/> </span> : <span> <FaRegCheckCircle title='Entregue' style={{cursor: 'pointer'}}/> </span> : ''
                            
                            }

                    </div>
                </div>
                <div className='time'>
                    { moment(currentfriend.createdAt).format('h:mm a') }
                </div>
               </div> : <div ref={scrollRef} className='fd-message'>
                <div className='image-message-time'>
                    <img src={`./image/${currentfriend.image}`} alt=''/>
                    <div className='message-time'>
                        <div className='fd-text'>
                          <p className='message-text'>{m.message.text === '' ? <img src={`./image/${m.message.image}`} alt=''/> : m.message.text }</p>
                        </div>
                        <div className='time'>
                          { moment(currentfriend.createdAt).format('h:mm a') }
                        </div>
                    </div>
                </div>
             </div>

            ) : ''}

        </div>   
        {
            typingMessage && typingMessage.msg && typingMessage.senderId === currentfriend._id ?  <div className='typing-message'>
            <div className='fd-message'>
                 <div className='image-message-time'>
                     <img src={`./image/${currentfriend.image}`} alt=''/>
                     <div className='message-time'>
                         <div className='fd-text'>
                             <p className='time'>Digitando...</p>
                         </div>
                         <div className='time'>
                           { moment(currentfriend.createdAt).format('h:mm a') }
                         </div>
                     </div>
                 </div>
             </div>
         </div> : <div className='friend_connect'> 
                      <img src={`./image/${currentfriend.image}`} alt=''/>
                      <h3>{currentfriend.userName}</h3>
                      <span> { moment(currentfriend.createdAt).startOf('mini').fromNow(true) } </span>
                    </div> && ''
        }
    </>
  );
}

export default Message;