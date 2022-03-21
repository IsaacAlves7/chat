import {Dialog, withStyles, Box, Typography} from '@material-ui/core';
import Button from '@mui/material/Button';
import {GoogleLogin} from 'react-google-login';
import { useContext } from 'react';
import '../../index.css'

import { AccountContext } from '../../context/AccountProvider';

const style = {
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '12%'
    }
}

const Login = ({classes}) => {
    const clientId = '538364591142-qrrbfmrb64f498felsa7o4uct93949k4.apps.googleusercontent.com';
    
    const {account, setAccount} = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        console.log('Login successfuly!', res.profileObj);
        setAccount(res.profileObj);
    }

    const onLoginFailure = () => {
        console.log('Login Failed!');
    }

    return(
        <Dialog
           open={true}
           classes={{paper: classes.dialogPaper}}
           BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
        <Box>
            <Box>
                <Typography class="App"><h1>Autenticação de Usuário</h1></Typography>
            </Box>
            <Box>
               <div class="form-control App">
		           <label for="room">Informe quem é você: </label>
		           <select name="room" id="room">
		           	  <option value="Consumidor">Consumidor</option>
		           	  <option value="Segurador">Segurador/Corretor</option>
		           	  <option value="Lojista">Lojista/Oficina</option>
		           	  <option value="Atendente">Vendedor/Atendente autoglass</option>
		           </select>
		       </div>
            </Box>
            <Box class="App" style={{marginTop: 107}}>
                <GoogleLogin
                   clientId={clientId}
                   buttonText='Continue com Google'
                   cookiePolicy={'single_host_origin'}
                   isSignedIn={true}
                   onSuccess={onLoginSuccess}
                   onFailure={onLoginFailure}
                />
                <Typography style={{marginTop: 27, marginBottom: 27}}>ou</Typography>
                <Button 
                  variant="contained" 
                  style={{backgroundColor: '#164194'}}
                  >
                  Logar no portal
                </Button>
            </Box>
        </Box>

        </Dialog>
    )
}

export default withStyles(style)(Login);