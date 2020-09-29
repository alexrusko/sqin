import React, { useEffect, useCallback, useRef } from 'react';
import clsx from  'clsx';

import { useRotate } from '../../../hooks';
import useStyles from './Square.styles';

const numberRegex = /-?\d+/;

const Square = ({ index }) => {
    const classes = useStyles();
    const squareRef = useRef(null)
    
    return (
        <div
            ref={squareRef}
            className={clsx(classes.square, index % 2 === 0 ? classes.red : classes.blue)} />
    );
};

export default Square;