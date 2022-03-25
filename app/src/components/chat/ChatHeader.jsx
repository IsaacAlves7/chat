import { useContext } from 'react';
import { Box, Typography, makeStyles, Avatar, IconButton } from '@material-ui/core';
import { Search, MoreVert } from '@material-ui/icons';
import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        height: 57,
        background: '#f0f2f5',
        padding: '10px 16px',
        alignItems: 'center'
    },
    dp: {
        width: 37,
        height: 37,
        borderRadius: '50%'
    },
    name: {
        marginLeft: 10,
        fontSize: 16,
        marginTop: 2
    },
    status: {
        marginLeft: 10,
        fontSize: 12,
        color: 'gray',
    },
    rightContainer: {
        marginLeft: 'auto',
        '& > *': {
            fontSize: 22,
            color: '#54656f'
        }
    }
});

const ChatHeader = () => {
    const classes = useStyles();
    
    const {person} = useContext(UserContext);

    return (
         <Box className={classes.header}>
            <Avatar src={person.imageUrl} alt="Your contact" className={classes.dp}/>
            <Box>
                <Typography className={classes.name}>{person.name}</Typography>
                <Typography className={classes.status} title={person.status}>{person.status}Online</Typography>
            </Box>
            <Box className={classes.rightContainer}>
                <IconButton title='Pesquisar...'><Search/></IconButton>
                <IconButton title='Mais opções'><MoreVert/></IconButton>
            </Box>
         </Box>  
    )
}

export default ChatHeader;