import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import useStyles from './Page.styles';

const Page = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <GameBoard/>
        </div>
    );

};

export default Page;