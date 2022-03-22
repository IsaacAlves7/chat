import { InputBase, Box, makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#fff',
        height: 43,
        maginTop: 7,
        display: 'flex',
        alignItems: 'center',
    },
    search: {
        borderRadius: 8,
        backgroundColor: '#f0f2f5',
        position: 'initial',
        margin: '0 13px',
        marginTop: 7,
        marginBottom: 7,
        display: 'flex',
        alignItems: 'center',
        height: '32px',
        padding: '10px 10px'
        // '&:hover': {
        //   backgroundColor: '#fff',
        // }
    },
    searchIcon: {
        color: '#54656f',
        marginTop: '3px',
        marginLeft: '3px'
    },
    inputRoot: {
        width: "100%",
        marginLeft: 14,
        fontSize: '14px',
        fontWeight: '400 thin',
        color: '#202020'
    }
}));

const Search = () => {
    const classes = useStyles();

    return (
       <Box>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
                <SearchIcon fontSize='small'/>
            </Box>
            <InputBase
               placeholder='Pesquisar ou começar uma nova conversa'
               title='Caixa de texto de pesquisa'
               classes={{
                   root: classes.inputRoot,
                   input: classes.inputInput
               }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box> 
       </Box>
    )
}

export default Search;