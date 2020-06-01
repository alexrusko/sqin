import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    square: {
        height: '70px',
        width: '70px',
        border: '1px solid black',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.5s transform ease-in-out',
        background: '#ff9e80',
        //boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.75)',
    },
    dot: {
        width: '10px',
        height: '10px',
        background: 'black',
        borderRadius: '50%',
    }
});

export default useStyles;