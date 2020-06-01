import React from 'react';

import { useRotate } from '../../../hooks';
import useStyles from './Square.styles';

const Square = React.forwardRef((props, ref) => {
    const classes = useStyles();
    const { subscribeToRotate } = useRotate();

    //subscribeToRotate()
    
    return (
        <div ref={ref} className={classes.square}>
            <div className={classes.dot} />
        </div>
    );
});

export default Square;