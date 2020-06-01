import React from 'react';
import useStyles from './Pivot.styles';

const numberRegex = /-?\d+/;

const Pivot = ({onClick}) => {
    const classes = useStyles();
    
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
        <div className={classes.root} onClick={onClick}>
            click
        </div>
    );
};

export default Pivot;