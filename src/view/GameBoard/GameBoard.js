import React, { useEffect, useState, useRef, createRef } from 'react';
import Square from '../components/Square/Square';
import Pivot from '../components/Pivot/Pivot';
import useStyles from './GameBoard.styles';

const createMatrix = () => {
    const matrix = [];
    for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
            row[j] = 0;
        }
        matrix[i] = row;
    }

    return matrix;
};

const GameBoard = () => {
    const classes = useStyles();
    const [board, setBoard] = useState(createMatrix());
    const refs = useRef(board.map((row) => row.map(() => createRef())));
    
    return (
        <div className={classes.root}>
            {board.map((row, i) => (
                row.map((col, j) => (
                    <Square ref={refs.current[i][j]} key={j} />
                ))
            ))}
            <Pivot
                topLeft={refs.current[0][0]}
                topRight={refs.current[0][1]}
                bottomLeft={refs.current[1][0]}
                bottomRight={refs.current[1][1]}
            />

            <Pivot
                topLeft={refs.current[0][1]}
                topRight={refs.current[0][2]}
                bottomLeft={refs.current[1][1]}
                bottomRight={refs.current[1][2]}
            />
        </div>
    );
};

export default GameBoard;