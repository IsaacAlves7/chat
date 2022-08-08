import React from 'react';
import {IoChevronDownOutline} from "react-icons/io5";

// -----------------------------------------------------------------------------------------------------------------------------------

const FriendInfo = ({currentfriend,activeUser,message}) => {
  return (
    <div className='friend-info'>
        <input type='checkbox' id='gallery'/>
        <div className='image-name'>
            <div className='image'>
                <img src={currentfriend.image} alt={currentfriend.name}/> 
            </div>

            <div className='name'>
                <h4>{currentfriend.userName}</h4>
            </div>

            {
                activeUser && activeUser.length > 0 && activeUser.some(u => u.
                userId === currentfriend._id) ? <div
                className='active-user'>Online agora</div> : <div className='offline-user'>Offline</div>
            }

        </div>       

        <div className='others'>

            <div className='custom-chat'>
                <h3>Personalizar bate-papo</h3>
                <IoChevronDownOutline/>
            </div>

            <div className='media'>
                <h3>Mídia, arquivos e links</h3>
                <label htmlFor='gallery'><IoChevronDownOutline/></label>
            </div>

            <div className='privacy'>
                <h3>Privacidade e Suporte</h3>
                <IoChevronDownOutline/>
            </div>

        </div>

        <div className='gallery'>
            {/* <img src='/image/457361624336.jpg' alt=''/> */}
            {
                message && message.length > 0 ? message.map((m,index)=>m.message.image && <img key={index} src={m.message.image} />) : 'Nenhuma imagem'
            }
        </div>

    </div>
  )
}

export default FriendInfo;