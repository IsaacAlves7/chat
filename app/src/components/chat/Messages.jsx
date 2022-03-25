import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Footer from './Footer';

const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/61624336/158646759-35652e56-a828-46e2-a5aa-03132439db10.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    component: {
        height: '80vh'
    }
})

const Messages = () => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.component}>
                Hello from Messages <svg viewBox="0 0 16 15" width="16" height="15" class="Visto"><path fill="#ccc" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
            </Box>
            <Footer/>
        </Box>
    )
}

export default Messages;