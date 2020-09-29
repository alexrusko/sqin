import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'row wrap',
        width: '350px',
        boxShadow: '0px 0px 8px -1px rgba(0,0,0,0.75)',
    },
    pivotContainer: {
        position: 'absolute',
        top: '35px',
        left: '35px',
        width: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        gridTemplateColumns: '70px 70px 70px 70px',
        gridTemplateRows: '70px 70px 70px 70px'
    }
});

export default useStyles;