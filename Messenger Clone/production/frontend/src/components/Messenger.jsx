import React, { useEffect, useState, useRef } from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import ActiveFriend from './ActiveFriend';
import Friends from './Friends';
import RightSide from './RightSide';
import {useDispatch,useSelector} from 'react-redux';
import { getFriends,messageSend,getMessage,ImageMessageSend,seenMessage,updateMessage,getTheme,themeSet } from '../store/actions/messengerAction';
import { userLogout } from '../store/actions/authAction';

import toast,{Toaster} from 'react-hot-toast';
import {io} from 'socket.io-client'; 
import useSound from 'use-sound';
import notificationSound from '../audio/sounds/notification.mp3';
import sendingSound from '../audio/sounds/message.wav';

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Messenger

const Messenger = () => {

const [notificationSPlay] = useSound(notificationSound);
const [sendingSPlay] = useSound(sendingSound);

const scrollRef = useRef();
const socket = useRef();

const {friends,message,messageSendSuccess,message_get_success,themeMood,new_user_add} = useSelector(state => state.messenger );
const {myInfo} = useSelector(state => state.auth);

const [currentfriend, setCurrentFriend] = useState('');
const [newMessage, setNewMessage] = useState('');

const [activeUser, setActiveUser] = useState([]);
const [socketMessage, setSocketMessage] = useState('');
const [typingMessage, setTypingMessage] = useState('');
// console.log(currentfriend);

useEffect(() => {
       socket.current = io('/'); // ws://localhost:8000
       socket.current.on('getMessage',(data) => {
         setSocketMessage(data);
       })

       socket.current.on('typingMessageGet',(data) => {
         setTypingMessage(data);
       })

       socket.current.on('msgSeenResponse', msg => {
           dispatch({
              type : 'SEEN_MESSAGE',
              payload : {
                  msgInfo : msg
              }
           })
        })

       socket.current.on('msgDelivaredResponse', msg => {
           dispatch({
              type : 'DELIVARED_MESSAGE',
              payload : {
                  msgInfo : msg
              }
           })
        })

        socket.current.on('seenSuccess', data => {
            dispatch({
                type : 'SEEN_ALL',
                payload : data
            })
        })
},[]);

useEffect(() => {
    if(socketMessage && currentfriend){
        if(socketMessage.senderId === currentfriend._id && socketMessage.reseverId === myInfo.id){
            dispatch({
                type: 'SOCKET_MESSAGE',
                payload : {
                    message: socketMessage
                }
            })
            dispatch(seenMessage(socketMessage));
            socket.current.emit('messageSeen',socketMessage);
            dispatch({
                type: 'UPDATE_FRIEND_MESSAGE',
                payload: {
                    msgInfo : socketMessage,
                    status : 'seen'
                }
            })

        }
    }
    setSocketMessage();
},[socketMessage]);

useEffect(() => {
       socket.current.emit('addUser', myInfo.id, myInfo)
},[]);

useEffect(() => {
       socket.current.on('getUser', (users) => {
           const filterUser = users.filter(u => u.userId !== myInfo.id);
           setActiveUser(filterUser);
       })
},[]);

useEffect(() => {
       socket.current.on('new_user_add', data => {
           dispatch({
               type : 'NEW_USER_ADD',
               payload : {
                 new_user_add : data
               }
           })
       })
},[]);

useEffect(() => {
    if(socketMessage && socketMessage.senderId !== currentfriend._id && socketMessage.reseverId === myInfo.id){
        notificationSPlay();
        toast.success(`${socketMessage.senderName} enviou uma nova mensagem `);
        dispatch(updateMessage(socketMessage));
        socket.current.emit(updateMessage(socketMessage)); // delivaredMessage
        dispatch({
            type: 'UPDATE_FRIEND_MESSAGE',
            payload : {
                msgInfo : socketMessage,
                status : 'delivared'
            }
        })

    }
},[socketMessage]);

const inputHendle = (e) => {
    setNewMessage(e.target.value);

    socket.current.emit('typingMessage',{
        senderId : myInfo.id,
        reseverId : currentfriend._id,
        msg : e.target.value
    })
}
// console.log(newMessage);

const sendMessage = (e) => {
    e.preventDefault();
    sendingSPlay();
    const data = {
        senderName : myInfo.userName,
        reseverId : currentfriend._id,
        message : newMessage ? newMessage : 'Olá!'
    }

    socket.current.emit('sendMessage',{
        senderId: myInfo.id,
        senderName: myInfo.userName,
        reseverId: currentfriend._id,
        time: new Date(),
        message: {
            text : newMessage ? newMessage : 'Olá!',
            image : ''
        }
    })
    socket.current.emit('typingMessage',{
        senderId : myInfo.id,
        reseverId : currentfriend._id,
        msg : ''
    })
    // console.log(newMessage);
    dispatch(messageSend(data));
    setNewMessage('')
}

useEffect(()=>{
    if(messageSendSuccess){
        socket.current.emit(sendMessage, message[message.length -1]);
        dispatch({
            type: 'UPDATE_FRIEND_MESSAGE',
            payload: {
                msgInfo: message[message.length -1]
            }
        })
        
        dispatch({
          type: 'MESSAGE_SEND_SUCCESS_CLEAR'
        })
    }
}, [messageSendSuccess]);

// console.log(currentfriend);

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getFriends());
    dispatch({type:'NEW_USER_ADD_CLEAR'})
}, [new_user_add]);
    
useEffect(()=>{
    if(friends && friends.length > 0)
    setCurrentFriend(friends[0].fndInfo);
},[friends]);
    
useEffect(()=>{
    dispatch(getMessage(currentfriend._id));
    if(friends.length > 0){
        dispatch({
            type: 'UPDATE',
            payload : {
                id : currentfriend._id
            }
        })
    }
},[currentfriend?._id]);

useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior: 'smooth'})
},[message]);

useEffect(()=>{
    if(message.length > 0){
        if(message[message.length -1].senderId !== myInfo.id && message[message.length -1].status !== 'seen'){
            dispatch({
                type: 'UPDATE',
                payload : {
                    id : currentfriend._id
                }
            })
           socket.current.emit('seen', { senderId: currentfriend._id, reseverId: myInfo.id })
           dispatch(seenMessage({ _id: message[message.length -1]._id }
           )) 
        }
    }
    dispatch ({
       type: 'MESSAGE_GET_SUCCESS_CLEAR'
    })

},[message_get_success]);

const emojiSend = (emu) => {
    console.log(emu);
    setNewMessage(`${newMessage}` + emu);
    socket.current.emit('typingMessage',{
        senderId : myInfo.id,
        reseverId : currentfriend._id,
        msg : emu
    })
}

const ImageSend = (e) => {
    if(e.target.files.length !== 0){
        sendingSPlay();

        const formData = new FormData();
            formData.append('senderName',myInfo.userName);
            formData.append('reseverId',currentfriend._id);
            formData.append('image',e.target.files[0]);
            // console.log(e.target.files[0]);
            
            dispatch(ImageMessageSend(formData));
        }
}

const [hide, setHide] = useState(true);

const logout = () => {
    dispatch(userLogout());
    socket.current.emit('logout', myInfo.id);
}

useEffect(() => {
    dispatch(getTheme());
},[ ]);

const search = (e) => {
    const getFriendClass = document.getElementsByClassName('hover-friend');
    // console.log(getFriendClass);
    const friendNameClass = document.getElementsByClassName('Fd_name');
    // console.log(friendNameClass);
    for(var i = 0; i < getFriendClass.length, i < friendNameClass.length; i++){
        let text = friendNameClass[i].innerText.toLowerCase();
        console.log(text)
        if(text.indexOf(e.target.value.toLowerCase()) > -1){
            getFriendClass[i].style.display = '';
        } else {
            getFriendClass[i].style.display = 'none';
        }
    }
    // console.log(e.target.value)
}

// ===============================================================================================================================================

return (
    <div className={themeMood === 'dark' ? 'messenger theme' : 'messenger'}>
        <Toaster
        position={'top-right'}
        reverseOrder = {false}
        toastOptions={{
            style : {
                fontSize : '18px'
            }
        }}
        />
        
        <div className='row'>
            <div className='col-3'>
                <div className='left-side'>
                    <div className='top'>
                        <div className='image-name'>
                            <div className='image'>
                                <img src={myInfo.image} alt={myInfo.image} title={myInfo.userName} />
                            </div>
                            <div className='name'>
                                <h3>Bate-papos</h3> 
                                {/* <h3>{myInfo.userName}</h3>  */}
                            </div>
                        </div>
                        <div className='icons'>
                            
                            <div onClick={() => setHide(!hide) } className='icon' title='Sala do Messenger'>
                            <svg viewBox="0 0 36 36" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 moj8do2t" fill="currentColor" height="28" width="28"><path clip-rule="evenodd" d="M5 13.5a4 4 0 014-4h10a4 4 0 014 4v9a4 4 0 01-4 4H9a4 4 0 01-4-4v-9zm8 0a1 1 0 112 0v3.25c0 .138.112.25.25.25h3.25a1 1 0 110 2h-3.25a.25.25 0 00-.25.25v3.25a1 1 0 11-2 0v-3.25a.25.25 0 00-.25-.25H9.5a1 1 0 110-2h3.25a.25.25 0 00.25-.25V13.5z" fill-rule="evenodd"></path><path d="M29.552 23.393l-3.723-1.861A1.5 1.5 0 0125 20.19v-4.38a1.5 1.5 0 01.829-1.342l3.723-1.861A1 1 0 0131 13.5v9a1 1 0 01-1.448.894z"></path></svg>
                            </div>
                            
                            <div onClick={() => setHide(!hide) } className='icon' title='Nova mensagem'>
                            <svg viewBox="0 0 36 36" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 rs22bh7c" fill="currentColor" height="28" width="28"><path d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"></path><path d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"></path></svg>
                            </div>

                            {/* <div className='icon' title='Configurações'>
                                <FaEdit />
                            </div> */}

                            <div className={hide ? 'theme_logout' : 'theme_logout show'}>
                                <h3>Dark Mode</h3>
                                
                                <div className='on'>
                                    <label htmlFor='dark'>ON</label>
                                    <input onChange={(e) => dispatch(themeSet(e.target.value))} type='radio' value='dark' name='theme' id='dark' style={{cursor: 'pointer'}} />
                                </div>

                                <div className='of'>
                                    <label htmlFor='white'>OFF</label>
                                    <input onChange={(e) => dispatch(themeSet(e.target.value))} type='radio' value='white' name='theme' id='white' style={{cursor: 'pointer'}} />
                                </div>

                                <div onClick={logout} className='logout' title='Sair/ Encerrar seção'>
                                    <FaSignOutAlt /> &nbsp;Desconectar
                                </div>

                            </div>

                        </div>
                    </div>
                  <div className='friend-search'>
                      <div className='search'>
                        <button><svg fill="#777" viewBox="0 0 16 16" width="17px" height="17px" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh gl3lb2sf hhz5lgdu"><g fill-rule="evenodd" transform="translate(-448 -544)"><g fill-rule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg></button>
                        <input onChange={search} type='text' placeholder='Pesquisar no Messenger' title='Caixa de texto de pesquisa' className='form-control'/>
                      </div>
                  </div>

                  <div className='active-friends'>

                    {
                        activeUser && activeUser.length > 0 ? activeUser.map(u => 
                        <ActiveFriend setCurrentFriend = {setCurrentFriend} user={u} />) : ''
                    }
                    
                  </div>

                  <div className='friends'> 
                    {
                        friends && friends.length>0 ? friends.map((fd) => <div onClick={() => setCurrentFriend(fd.fndInfo)} className={currentfriend._id === fd.fndInfo._id ? 'hover-friend active' : 'hover-friend' }>
                        <Friends activeUser={activeUser} myId={myInfo.id} friend={fd} /> 
                        </div> ) : 'Nenhum contato encontrado!'
                    }

                  </div>
                  
                </div>
            </div>

            {
                currentfriend ?  <RightSide
                currentfriend={currentfriend}
                inputHendle={inputHendle}
                newMessage={newMessage}
                sendMessage={sendMessage}
                message={message}
                scrollRef={scrollRef}
                emojiSend={emojiSend}
                ImageSend={ImageSend}
                activeUser={activeUser}
                typingMessage={typingMessage}
                /> : 'Por favor, selecione um contato!'
            }

        </div>
    </div>
  )
};

export default Messenger;