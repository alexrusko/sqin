import React from 'react';

import { useRotate } from '../../../hooks';
import useStyles from './Pivot.styles';

const Pivot = ({index}) => {
    const classes = useStyles();
    const { rotateRight, rotateLeft } = useRotate();

    const onRotateRight = () => {
        rotateRight(index);
    };

    const onRotateLeft = () => {
        rotateLeft(index);
    }
    
    /* const onRightClicked = () => {
        const currentRotationTopLeft = topLeft.current.style.transform.match(numberRegex)?.[0] || 0;
        const currentRotationTopRight = topRight.current.style.transform.match(numberRegex)?.[0] || 0;
        const currentRotationBottomLeft = bottomLeft.current.style.transform.match(numberRegex)?.[0] || 0;
        const currentRotationBottomRight = bottomRight.current.style.transform.match(numberRegex)?.[0] || 0;

        topLeft.current.style.transformOrigin = 'bottom right';
        topLeft.current.style.transform = `rotate(${+currentRotationTopLeft + 90}deg)`;

        topRight.current.style.transformOrigin = 'bottom left';
        topRight.current.style.transform = `rotate(${+currentRotationTopRight + 90}deg)`;

        bottomLeft.current.style.transformOrigin = 'top right';
        bottomLeft.current.style.transform = `rotate(${+currentRotationBottomLeft + 90}deg)`;

        bottomRight.current.style.transformOrigin = 'top left';
        bottomRight.current.style.transform = `rotate(${+currentRotationBottomRight + 90}deg)`;
    }; */
    
    return (
        <div className={classes.root}>
            <span onClick={onRotateLeft}>left</span>|
            <span onClick={onRotateRight}>right</span>
        </div>
    );
};

export default Pivot;