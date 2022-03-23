import { Box, Avatar, Typography, makeStyles } from '@material-ui/core';
import { useContext } from 'react';

const useStyles = makeStyles ({
    component: {
        display: 'flex',
        height: 40,
        borderTop: '1px solid #ebebeb',
        cursor: 'pointer',
        padding: '13px 0'
    },
    displayPicture: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginLeft: 14
    },

})

const Conversation = ({ user }) => {
    const url = user.imageUrl;
    const classes = useStyles(useContext);
    return (
        <Box className={classes.component}>
           <Box>
               <Avatar src={url} alt="contact-picture" className={classes.displayPicture}/>    
           </Box>
           <Box>
               <Typography>{user.name}</Typography>
           </Box>
        </Box>
    )
}

export default Conversation;