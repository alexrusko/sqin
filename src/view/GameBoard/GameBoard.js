import React, { useEffect, useState, useRef, createRef } from 'react';
import Square from '../components/Square/Square';
import Pivot from '../components/Pivot/Pivot';
import useStyles from './GameBoard.styles';

const createGameBoard = () => {
    const board = [];
    let index = 0;
    for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
            row[j] = {
                id: index,
                row: i,
                col: j,
            };

            index++;
        }
        board[i] = row;
    }

    return board;
};

const GameBoard = () => {
    const classes = useStyles();
    const [board, setBoard] = useState(createGameBoard());
    console.log(board);
    //const refs = useRef(board.map((row) => row.map(() => createRef())));
    
    return (
        <div className={classes.root}>
            {board.map((row, i) => (
                row.map((col, j) => (
                    <Square
                        row={i}
                        col={j}
                        key={j} />
                ))
            ))}
            <Pivot
               index={0}
            />

            <Pivot
                index={1}
            />
        </div>
    );
};

export default GameBoard;