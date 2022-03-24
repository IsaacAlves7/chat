import {useContext} from 'react';
import {UserContext} from '../../context/UserProvider';
import {Box, Typography, makeStyles, Avatar} from '@material-ui/core';
import {Search, MoreVert} from '@material-ui/icons';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        height: 57,
        background: '#f0f2f5',
        padding: '10px 16px',
    }
});

const ChatHeader = () => {
    const classes = useStyles();
    const { person } = useContext(UserContext);

    return (
        <>
         <Box className={classes.header}>
            <Avatar src={person.imageUrl} alt="Your contact"/>
            <Box>
                <Typography>{person.name}</Typography>
                <Typography>User Status (Online, Typing, Offline, Removed, Stand By)</Typography>
            </Box>
            <Box>
                <Search/>
                <MoreVert/>
            </Box>
         </Box>
        </>
        
    )
}

export default ChatHeader;