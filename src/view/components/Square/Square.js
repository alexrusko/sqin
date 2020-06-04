import React, { useEffect, useCallback, useRef } from 'react';

import { useRotate } from '../../../hooks';
import useStyles from './Square.styles';

const numberRegex = /-?\d+/;

const Square = ({ row, col }) => {
    const classes = useStyles();
    const { subscribeToPivot } = useRotate();
    const squareRef = useRef(null)

    const onRotateLeft = useCallback((pivotPoint) => {
        const currentRotation = squareRef.current.style.transform.match(numberRegex)?.[0] || 0;
        squareRef.current.style.transformOrigin = pivotPoint;
        squareRef.current.style.transform = `rotate(${+currentRotation - 90}deg)`;
    }, [squareRef]);

    const onRotateRight = useCallback((pivotPoint) => {
        const currentRotation = squareRef.current.style.transform.match(numberRegex)?.[0] || 0;
        squareRef.current.style.transformOrigin = pivotPoint;
        squareRef.current.style.transform = `rotate(${+currentRotation + 90}deg)`;
    }, [squareRef]);
    
    useEffect(() => {
        subscribeToPivot(onRotateLeft, onRotateRight, row, col)
    }, [subscribeToPivot, onRotateLeft, onRotateRight, row, col]);
    
    return (
        <div ref={squareRef} className={classes.square}>
            <span>{row}{col}</span>
            <div className={classes.dot} />
        </div>
    );
};

export default Square;