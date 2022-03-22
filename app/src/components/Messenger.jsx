import { AppBar,Toolbar,makeStyles,Box } from "@material-ui/core";
import Login from './account/Login';
import '../index.css';
import {AccountContext} from '../context/AccountProvider'
import React, {useContext} from 'react';
import ChatBox from './ChatBox'

const useStyles = makeStyles({
    component: {
      height: '100vh'
    },
    loginHeader: {
        height: 200,
        backgroundColor: '#164194',
        boxShadow: 'none'
    },
    header: {
        height: 127,
        background: '#164194',
        boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    return (
        <Box className={classes.component}>
            <AppBar className={account ? classes.header : classes.loginHeader}>
              <Toolbar></Toolbar>
          </AppBar>
          { account ? <ChatBox /> : <Login /> }
        </Box>
    )
}

export default Messenger;