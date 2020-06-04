import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import RotateContext, { initialState } from './RotateContext';

const rotate = () => {

};

const pivotMap = [
    [[0,0], [0,1], [1,0], [1,1]],
    [[0,1], [0,2], [1,1], [1,2]],
    [[0,2], [0,3], [1,2], [1,3]],
    [[0,3], [0,4], [1,3], [1,4]],
    [[1,0], [1,1], [2,0], [2,1]],
    [[1,1], [1,2], [2,1], [2,2]],
    [[1,2], [1,3], [2,2], [2,3]],
    [[1,3], [1,4], [2,3], [2,4]],
    [[2,0], [2,1], [3,0], [3,1]],
    [[2,1], [2,2], [3,1], [3,2]],
    [[2,2], [2,3], [3,2], [3,3]],
    [[2,3], [2,4], [3,3], [3,4]],
    [[3,0], [3,1], [4,0], [4,1]],
    [[3,1], [3,2], [4,1], [4,2]],
    [[3,2], [3,3], [4,2], [4,3]],
    [[3,3], [3,4], [4,3], [4,4]],
]

const getPivots = (row, col) => {
    return pivotMap
            .filter((pivot) => pivot.some((cords) => cords[0] === row && cords[1] === col))
            .map((pivot) => pivotMap.indexOf(pivot));
};

const getPivotPoint = (index) => {
    if (index === 0) {
        return 'bottom right';
    } else if (index === 1) {
        return 'bottom left';
    } else if (index === 2) {
        return 'top right';
    } else if (index === 3) {
        return 'top left';
    }
};

const RotateProvider = ({ children }) => {
    const [subcribers, setSubscribers] = useState({});

    const subscribeToPivot = useCallback((onRotateLeft, onRotateRight, row, col) => {
        getPivots(row, col).forEach((pivot) => {
            setSubscribers((prevState) => ({
                ...prevState,
                [pivot]: {
                    left: [...(prevState[pivot]?.left || []), onRotateLeft],
                    right: [...(prevState[pivot]?.right || []), onRotateRight]
                },
            }));
        });
    }, [setSubscribers]);

    const rotateRight = useCallback((index) => {
        subcribers[index].right.forEach((callback, i) => callback(getPivotPoint(i)));
    }, [subcribers]);

    const rotateLeft = useCallback((index) => {
        subcribers[index].left.forEach((callback, i) => callback(getPivotPoint(i)));
    }, [subcribers]);

    const ctx = useMemo(() => ({
        subscribeToPivot,
        rotateRight,
        rotateLeft,
    }), [subscribeToPivot, rotateRight, rotateLeft]);

    return <RotateContext.Provider value={ctx}>{children}</RotateContext.Provider>
}

export const useRotate = () => useContext(RotateContext);

export default RotateProvider;

