import {Box} from '@material-ui/core';
// components
import ChatHeader from './ChatHeader';
import Messages from './Messages';

const Chat = () => {
    return (
        // <p>Hello from Chat</p>
         <Box>
           <ChatHeader/>
           <Messages/>
         </Box>
    )
}

export default Chat;