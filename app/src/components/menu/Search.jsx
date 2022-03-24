import { InputBase, Box, makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#fff',
        height: 51.7,
        top: 4.2,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '',
        borderBottom: '1px solid #f0f2f5',
        borderRight: '1px solid #ebebeb'
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
        height: '37px', // Aqui aumenta a barra de pesquisa
        padding: '10px 10px',
        width: '100%'
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

const Search = ({ setText }) => {
    const classes = useStyles();

    return (
       <Box className={classes.component}>
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
              onChange={(e) => setText(e.target.value)}
            />
          </Box> 
       </Box>
    )
}

export default Search;