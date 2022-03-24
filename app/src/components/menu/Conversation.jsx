import { Box, Avatar, Typography, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { setConversation } from '../../service/api';
import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles ({
    component: {
        display: 'flex',
        height: 77,
        borderTop: '1px solid #ebebeb',
        cursor: 'pointer',
        padding: '13px 0',
        '&:hover': {
            background: '#f8f8f8'
        }
    },
    displayPicture: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginLeft: 14
    },
    contactName: {
        marginLeft: 17,
        marginTop: 4
    }

})

const Conversation = ({ user }) => {
    const url = user.imageUrl;
    const classes = useStyles(useContext);
    const {account} = useContext(AccountContext);
    const {setPerson} = useContext(AccountContext);
    
    const setUser = async () => {
        setPerson(user);
        
        await setConversation({ 
            senderId: account.googleId,
            receiverId: user.googleId
        });
    }
    return (
        <Box className={classes.component} onClick={() => setUser()} title={user.name}>
           <Box>
               <Avatar src={url} alt="contact-picture" className={classes.displayPicture}/>    
           </Box>
           <Box>
               <Typography className={classes.contactName}>{user.name}</Typography>
           </Box>
        </Box>
    )
}

export default Conversation;