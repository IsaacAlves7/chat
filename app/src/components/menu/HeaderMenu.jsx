import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu, MenuItem, makeStyles} from '@material-ui/core';
import {useState, useContext} from 'react';
import {GoogleLogout} from 'react-google-login';
import {clientId} from '../../constants/data';
import {AccountContext} from '../../context/AccountProvider';
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles ({
    menuItem: {
        fontSize: 14,
        padding: '12px 21px',
        color: 'rgba(0, 0, 0, 0.77)'
    }
})

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const {setAccount} = useContext(AccountContext);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = () => {
        console.log('You has been logged out successfuly!');
        console.clear();
        setAccount('');
    }

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
         <MoreVertIcon onClick={handleClick} />

         <Menu
            id="basic-menu"
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            openClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
           <MenuItem className={classes.menuItem} onClick={() => {handleClose(); toggleDrawer()}}>Perfil</MenuItem>
           <MenuItem className={classes.menuItem} onClick={() => handleClose()}>Mensagens favoritas</MenuItem>
           <MenuItem className={classes.menuItem} onClick={() => handleClose()}>Configurações</MenuItem>
           <MenuItem className={classes.menuItem} onClick={() => handleClose()}>
           <GoogleLogout
                  clientId={clientId}
                  buttonText="Desconectar"
                  onLogoutSuccess={onLogoutSuccess}
               />
           </MenuItem>
         </Menu>
         <Drawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}

export default HeaderMenu;