import { createContext } from 'react';

export const initialState = {
    subscribers: {}
};

const RotateContext = createContext(initialState);

export default RotateContext;