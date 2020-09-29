import React from 'react';
import clsx from  'clsx';
import { KeyboardArrowRight as RightArrow } from '@material-ui/icons';
import { KeyboardArrowLeft as LeftArrow } from '@material-ui/icons';

import { useRotate } from '../../../hooks';
import useStyles from './Pivot.styles';

const pivotMap =[
    [0,0], [0,1], [0,2], [0,3],
    [1,0], [1,1], [1,2], [1,3],
    [2,0], [2,1], [2,2], [2,3],
    [3,0], [3,1], [3,2], [3,3],
];

const Pivot = ({ index }) => {
    const classes = useStyles();
    const { rotateLeft, rotateRight } = useRotate();
    const row = pivotMap[index][0];
    const col = pivotMap[index][1]
    
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
            <div
                className={ clsx(classes.rotateButton, classes.left) }
                onClick={() => rotateLeft(row, col)}>
                    <LeftArrow />
            </div>
            <div
                className={ clsx(classes.rotateButton, classes.right) }
                onClick={() => rotateRight(row, col)}>
                    <RightArrow />
            </div>
        </div>
    );
};

export default Pivot;