import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import RotateContext, { initialState } from './RotateContext';

const createGameBoard = () => {
    const board = [];
    let id = 0;
    for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
            row[j] = {
                id,
                row: i,
                col: j,
            };

            id++;
        }
        board[i] = row;
    }

    return board;
};

const RotateProvider = ({ children }) => {
    const [gameBoard, setGameBoard] = useState(createGameBoard());

    const rotateRight = useCallback((row, col) => {
        setGameBoard((prevState) => {
            const prevBoard = [...prevState];
            for (let i = 0; i < prevBoard[0].length; i++) {
                for (let j = 0; j < prevBoard[1].length; j++) {
                    if (prevBoard[i][j].row === row && prevBoard[i][j].col === col) {
                        const temp = prevBoard[i][j].id;
                        prevBoard[i][j].id = prevBoard[i+1][j].id;
                        prevBoard[i+1][j].id = prevBoard[i+1][j+1].id;
                        prevBoard[i+1][j+1].id = prevBoard[i][j+1].id;
                        prevBoard[i][j+1].id = temp;
                        return prevBoard;
                    }
                }
            }
        });
    }, [setGameBoard]);

    const rotateLeft = useCallback((row, col) => {
        setGameBoard((prevState) => {
            const prevBoard = [...prevState];
            for (let i = 0; i < prevBoard[0].length; i++) {
                for (let j = 0; j < prevBoard[1].length; j++) {
                    if (prevBoard[i][j].row === row && prevBoard[i][j].col === col) {
                        const temp = prevBoard[i][j].id;
                        prevBoard[i][j].id = prevBoard[i][j+1].id;
                        prevBoard[i][j+1].id = prevBoard[i+1][j+1].id;
                        prevBoard[i+1][j+1].id = prevBoard[i+1][j].id;
                        prevBoard[i+1][j].id = temp;
                        
                        return prevBoard;
                    }
                }
            }
        });
    }, [setGameBoard]);

    const ctx = useMemo(() => ({
        gameBoard,
        rotateRight,
        rotateLeft,
    }), [gameBoard, rotateRight, rotateLeft]);

    return <RotateContext.Provider value={ctx}>{children}</RotateContext.Provider>
}

export const useRotate = () => useContext(RotateContext);

export default RotateProvider;

