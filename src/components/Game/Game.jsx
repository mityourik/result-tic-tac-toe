import React, { useEffect, useState } from 'react';
import { ACTIONS } from '../../constants';
import { store } from '../../store';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';
import GameLayout from './GameLayout';

function Game() {
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            forceUpdate({});
        });
        return () => unsubscribe();
    }, []);

    const resetGame = () => {
        store.dispatch({ type: ACTIONS.RESTART_GAME });
    };

    return (
        <GameLayout>
            <Information />
            <Field />
            <button className={styles['game__reset']} onClick={resetGame}>
                Начать заново
            </button>
        </GameLayout>
    );
}

export default Game;
