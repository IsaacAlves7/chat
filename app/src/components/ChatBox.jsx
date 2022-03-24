// Material UI
import {Dialog, withStyles, Box, makeStyles} from '@material-ui/core';
// component
import Menu from './menu/Menu';
import Chat from  "./chat/Chat";

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: 380
    },
    rightComponent: {
        width: '100%'
    }
})

const style = {
    dialogPaper: {
        height: '95%',
        width: '91%',
        overflow: 'hidden',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%'
    }
}

const ChatBox = ({ classes }) => {
    const classname = useStyles();

    return (
        <Dialog
            open={true}
            classes={{ paper: classes.dialogPaper }}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
          <Box className={classname.component}>
              <Box className={classname.leftComponent}>
                  <Menu />
                  {/*<p>Hello from menu</p> */}
              </Box>
              <Box className={classname.rightComponent}>
                  {/* Hello from rightComponent */}
                  <Chat/>
              </Box>
          </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatBox);