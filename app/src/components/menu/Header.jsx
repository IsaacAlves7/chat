import {Box, Avatar, makeStyles} from '@material-ui/core';
import {AccountContext} from '../../context/AccountProvider'
import { useContext, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { IconButton } from '@mui/material';
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles ({
    header: {
        height: 57, // '25 auto' || 59
        width: '100%',
        background: '#f0f2f5',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #ccc'
    },
    avatar: {
    //     height: 37,
    //     width: 37,
    //     borderRadius: '50%'
    '&:hover': {
        opacity: '70%'
    }
    },
    icons: {
        position: 'absolute',
        marginLeft: 'auto',
        left: 241,
        marginTop: 2,
        '& > *': {
            marginLeft: 2,
            cursor: 'pointer'
        },
        '& :last-child': {
            color: '#54656f'
        }
    }
})

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {account} = useContext(AccountContext);
    // console.log(account);

    const toggleDrawer = () => {
        setOpen(true);
    }

    return (
    //   <p>Hello from Header</p>
    <>
      <Box className={classes.header}>
            <Avatar src={account.imageUrl} onClick={() => toggleDrawer()} title="Perfil" alt="Perfil" style={{cursor: 'pointer'}} className={classes.avatar} /> {/* Pode ser uma <img> também!*/}
            <Box className={classes.icons}>
                <IconButton title="Status"><svg version="1.1" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" style={{cursor: 'pointer'}}><path fill="#54656f" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg></IconButton>
                <IconButton title='Nova mensagem'><svg viewBox="0 0 24 24" width="24" height="24"><path fill="#54656f" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg></IconButton>
                <IconButton title="Mais opções"><HeaderMenu/></IconButton>
            </Box>
        </Box>
        <Drawer open={open} setOpen={setOpen}/>
    </>
      
    );
}

export default Header;