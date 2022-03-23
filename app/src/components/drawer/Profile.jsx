import {Box, Avatar, makeStyles, Typography} from '@material-ui/core';
import {AccountContext} from '../../context/AccountProvider';
import {useContext} from 'react';

const useStyles = makeStyles({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center'
    // alignItems: 'center'
  },
   avatar: {
     width: '48%',
     height: '48%',
     cursor: 'pointer',
     marginTop: 28,
     marginBottom: 28,
     borderRadius: '50%',
     '&:hover': {
        opacity: '70%'
      }
   },
   titleName: {
     color: '#164194',
     fontSize: 'small',
     marginBottom: 7
   },
   name: {
     color: '#202020',
     marginBottom: 4
   },
   nameContainer: {
     background: '#fff',
     padding: '10px',
     boxShadow: '-1px 3px 7px -1px rgba(164,164,164,0.42)',
     borderRight: '1px solid #ededed'
   },
   description: {
     fontSize: 14,
     color: '#8696a0',
     padding: 17
   }
})

const Profile = () => {
  const {account} = useContext(AccountContext);
  const classes = useStyles();

    return (
        <>
          <Box className={classes.imageContainer}>
            <Avatar src={account.imageUrl} title={account.name} alt='Profile-Pic' className={classes.avatar}/>
          </Box>

          <Box className={classes.nameContainer}>
            <Typography className={classes.titleName}>Seu nome</Typography>
            <Typography className={classes.name}>{account.name}</Typography>
          </Box>

          <Box className={classes.descriptionContainer}>
            <Typography className={classes.description}>Tel: +55 21 99527-2677</Typography>
          </Box>
          
          <Box className={classes.nameContainer}>
            <Typography className={classes.titleName}>Ocupação</Typography>
            <Typography className={classes.name}>Consumidor</Typography>
          </Box>

        </>
    )
}

export default Profile;