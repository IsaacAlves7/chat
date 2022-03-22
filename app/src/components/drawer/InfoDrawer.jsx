import { Drawer, Box, Typography, makeStyles } from "@material-ui/core";
import { ArrowBack } from '@material-ui/icons';
import { useState } from "react";
import Profile from './Profile';

const useStyles = makeStyles({
    header: {
        background: '#113273',
        height: 109,
        color: '#fff',
        display: 'flex',
        '& > *': {
            marginTop: 'auto',
            marginLeft: 27,
            top: -17,
            left: -7,
            fontWeight: 700,
            position: 'relative'
        }
    },
    component: {
        background: '#ededed',
        height: '84%'
    }
});

const InfoDrawer = ({ open, setOpen }) => {

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Drawer open={open} onClose={handleClose}>
           <Box className={classes.header}>
               <ArrowBack onClick={() => handleClose()} style={{cursor: 'pointer'}}/>
               <Typography>Perfil</Typography>
           </Box> 
           <Box className={classes.component}>
               <Profile/>
           </Box>
        </Drawer>
    )
}

export default InfoDrawer;