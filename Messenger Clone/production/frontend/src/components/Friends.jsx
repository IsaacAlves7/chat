import React from 'react';
import moment from 'moment';
import{FaRegCheckCircle}from "react-icons/fa";

// ------------------------------------------------------------------------------------------------------------------------------

const Friends = (props) => {
  const {fndInfo,msgInfo} = props.friend;
  const myId = props.myId;
  const {activeUser} = props;
//   console.log(activeUser);

  return (
    <div className='friend'>
        <div className='friend-image'>
            <div className='image'>
                <img src={fndInfo.image} alt={fndInfo.userName} title={`Converse com ${fndInfo.userName}`} />
                {
                    activeUser && activeUser.length > 0 && activeUser.some(u => u.userId === fndInfo._id) ? <div className='active_icon'></div> : ''
                }
            </div>
        </div>

        <div className='friend-name-seen'>
            <div className='friend-name'>
                <h4 className={ msgInfo?.senderId !== myId && msgInfo?.status !== undefined && msgInfo.status !== 'seen Fd_name'?'unseen_message Fd_name' : 'Fd_name' } title={fndInfo.userName}>{fndInfo.userName}</h4>
                <div className='msg-time'>
                    {
                       msgInfo && msgInfo.senderId === myId ? <span className='vc'>Você: </span> : msgInfo && msgInfo.message.text ? <span style={{color: 'limegreen'}} className={ msgInfo?.senderId !== myId && msgInfo?.status !== undefined && msgInfo.status !== 'seen'?'unseen_message ' : '' }>{fndInfo.userName + ': '} </span> : ''
                    }
                    {
                        msgInfo && msgInfo.message.text ? <span className={ msgInfo?.senderId !== myId && msgInfo?.status !== undefined && msgInfo.status !== 'seen'?'unseen_message' : '' }>{msgInfo.message.text.slice(0, 10)}</span> : msgInfo && msgInfo.message.image ? <span>Enviou uma imagem</span> : <span>Entrou no chat</span>
                    }
                    <span className='time'> • {msgInfo ? moment(msgInfo.createdAt).fromNow() : moment(fndInfo.createdAt).fromNow()}</span>
                </div>
            </div>

               {
                   myId === msgInfo?.senderId ?
                   <div className='seen-unseen-icon'>
                     {
                         msgInfo.status === 'seen' ? <img src={fndInfo.image} alt={fndInfo.image} title={`Visto por ${fndInfo.userName}`}/> : msgInfo.status === 'delivared' ? <div className='delivared'><FaRegCheckCircle /></div> : <div className='unseen'> </div>
                     }

                   </div> : 
                   <div className='seen-unseen-icon'>
                       {
                           msgInfo?.status !== undefined && msgInfo?.status !== 'seen'? <div className='seen-icon'> </div> : ''
                       }
                       <div className='seen-icon'>
                            
                       </div>
                   </div>
               }     

        </div>

    </div>
  )
};

export default Friends;