import { AppBar,Toolbar,makeStyles } from "@material-ui/core";
import Login from './account/Login';
import '../index.css';

const useStyles = makeStyles({
    component: {
      height: '100vh'
    },
    loginHeader: {
        height: 200,
        backgroundColor: '#164194',
        boxShadow: 'none'
    }

})

const Messenger = () => {
    const classes = useStyles();
    return (
        <>
          <AppBar className={classes.loginHeader}>
              <strong class="App-logo">AUTOGLASS CHAT</strong>
              <Toolbar></Toolbar>
          </AppBar>
          <Login/>
        </>
        
    )
}

// export const WhatsappMessenger = () => {
//     return (
//         <>
//          <p>Hello from WhatsappMessenger</p>
//         </>
//     )
// }

export default Messenger;