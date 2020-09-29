import React, { useEffect } from 'react';
import Square from '../components/Square/Square';
import Pivot from '../components/Pivot/Pivot';
import { useRotate } from '../../hooks';
import useStyles from './GameBoard.styles';

const GameBoard = () => {
    const classes = useStyles();
    const { gameBoard } = useRotate();

    //const refs = useRef(gameBoard.map((row) => row.map(() => createRef())));
    
    return (
        <div className={classes.root}>
            {gameBoard.map((row, i) => (
                row.map((col, j) => (
                    <Square
                        index={col.id}
                        key={col.id} />
                ))
            ))}

            <div className={classes.pivotContainer}>
                <Pivot index={0}/>
                <Pivot index={1}/>
                <Pivot index={2}/>
                <Pivot index={3}/>
                <Pivot index={4}/>
                <Pivot index={5}/>
                <Pivot index={6}/>
                <Pivot index={7}/>
                <Pivot index={8}/>
                <Pivot index={9}/>
                <Pivot index={10}/>
                <Pivot index={11}/>
                <Pivot index={12}/>
                <Pivot index={13}/>
                <Pivot index={14}/>
                <Pivot index={15}/>
            </div>
        </div>
    );
};

export default GameBoard;