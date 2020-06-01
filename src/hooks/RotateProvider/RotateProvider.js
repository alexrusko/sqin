import React, { useContext, useState, useCallback, useMemo } from 'react';
import RotateContext, { initialState } from './RotateContext';

const RotateProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const test = useCallback(() => console.log('test'), []);
    
    const ctx = useMemo(() => ({
        test
    }), [test]);

    return <RotateContext.Provider value={ctx}>{children}</RotateContext.Provider>
}

export const useRotate = () => useContext(RotateContext);

export default RotateProvider;

