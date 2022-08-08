import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Lottie from 'react-lottie';
import animationData from '../animations/typing.json';
// ----------------------------------------------------------------------------------------------------------------------------

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Message = ({message,currentfriend,scrollRef,typingMessage}) => {

  const {myInfo} = useSelector(state=>state.auth);
  return (
    <>
        <div className='message-show'>

            {
               message && message.length > 0 ? message.map((m, index) => m.senderId === myInfo.id ? <div ref={scrollRef} className='my-message'>
                <div className='image-message'>
                    <div className='my-text'>
                        <p className='message-text'> {m.message.text === '' ? <img src={m.message.image} alt='' /> : m.message.text } </p>

                            {

                              index === message.length -1 && m.senderId === myInfo.id ? m.status === 'seen' ? <img className='img' src={currentfriend.image} alt='' title={`Visto por ${currentfriend.userName}`} style={{cursor: 'pointer'}} /> : m.status === 'delivared' ? <span> <svg class="crt8y2ji j83agx80 pfnyh3mw kkf49tns cgat1ltu hrs1iv20 abiwlrkh gab7stmx i4qgphn6" width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" fill="#ccc"><title>Entregue</title><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.774-10.407a1 1 0 00-1.73-1.004L7.417 9.114a.15.15 0 01-.236.031L5.798 7.762a1 1 0 00-1.414 1.414l2.44 2.44a1 1 0 001.572-.205l3.378-5.818z" title='Entregue' style={{cursor: 'pointer'}}></path></svg> </span> : <span> <svg class="crt8y2ji j83agx80 pfnyh3mw kkf49tns cgat1ltu hrs1iv20 abiwlrkh gab7stmx i4qgphn6" width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" fill='#ccc'><title>Entregue</title><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.774-10.407a1 1 0 00-1.73-1.004L7.417 9.114a.15.15 0 01-.236.031L5.798 7.762a1 1 0 00-1.414 1.414l2.44 2.44a1 1 0 001.572-.205l3.378-5.818z" title='Entregue' style={{cursor: 'pointer'}}></path></svg> </span> : ''
                            
                            }

                    </div>
                </div>
                {/* <div className='time'>
                    { moment(currentfriend.createdAt).fromNow() }
                </div> */}
               </div> : <div ref={scrollRef} className='fd-message'>
                <div className='image-message-time'>
                    <img src={currentfriend.image} alt=''/>
                    <div className='message-time'>
                        <div className='fd-text'>
                          <p className='message-text'>{m.message.text === '' ? <img src={m.message.image} alt=''/> : m.message.text }</p>
                        </div>
                        {/* <div className='time'>
                          { moment(currentfriend.createdAt).fromNow() }
                        </div> */}
                    </div>
                </div>
             </div>

            ) : ''}

        </div>   
        {
            typingMessage && typingMessage.msg && typingMessage.senderId === currentfriend._id ?  <div className='typing-message'>
            <div className='fd-message'>
                 <div className='image-message-time'>
                     <img src={currentfriend.image} alt=''/>
                     <div className='message-time'>
                         <div className='fd-text'>
                            <p className='time'> 
                            <Lottie 
                               title={`${currentfriend.userName} está digitando...`}
                               options={defaultOptions}
                               width={70}
                               style={{marginBottom: 15, marginLeft: 0, cursor: 'pointer'}}
                            />
                            </p>
                         </div>
                     </div>
                 </div>
             </div>
         </div> : <div className='friend_connect'> 
                      <img src={currentfriend.image} alt=''/>
                      <h3>{currentfriend.userName}</h3>
                      <span> { moment(currentfriend.createdAt).fromNow() } </span>
                    </div> && ''
        }
    </>
  );
}

export default Message;