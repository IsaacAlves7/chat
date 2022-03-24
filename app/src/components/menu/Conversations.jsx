import { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../service/api';
import { Box, makeStyles } from '@material-ui/core';
import Conversation from './Conversation';
import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
    component: {
        height: '81vh',
        overflow: 'overlay',
        borderRight: '1px solid #ebebeb'
    }
});

const Conversations = ({ text }) => {
    const classes = useStyles();
    
    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async() => {
            const data = await getUsers();
            const filteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    }, [text]);

    return (
        <Box className={classes.component}>
            {
              users.map(user => ( user.googleId !== account.googleId && <Conversation user={user}/>))
            }
        </Box>
    )
}

export default Conversations;