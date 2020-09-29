import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
       width: '30px',
       height: '30px',
       borderRadius: '50%',
       display: 'flex',
       background: '#ffd0b0',
       boxShadow: '0px 0px 8px -1px rgba(0,0,0,0.75)',
       opacity: '0.2',
       transition: 'all 0.5s',
       '& svg': {
            display: 'none',
            color: '#ffab91',
        },
       '&:hover': {
            transform: 'scale(1.2)',
            opacity: '1',
            '& svg': {
                display: 'block',
            }
        }
    },
    rotateButton: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background 0.5s',
        '&:hover': {
            background: '#c97b63',
        }
    },
    left: {
        borderRadius: '60px 0 0 60px',
    },
    right: {
        borderRadius: '0 60px 60px 0',
    }
});

export default useStyles;