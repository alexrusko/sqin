import React from 'react';
import Square from '../Square/Square'
import useStyles from './RotatingSquare.styles';

const RotatingSquare = () => {
    const classes = useStyles();

    return (
        <div className={classes.rotatingSquare}>
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
};

export default RotatingSquare;