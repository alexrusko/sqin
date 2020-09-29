import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    square: {
        height: '70px',
        width: '70px',
        border: '1px solid white',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.5s transform ease-in-out',
        //boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.75)',
    },
    red: {
        background: '#63a4ff',
    },
    blue: {
        background: '#004ba0',
    }
});

export default useStyles;