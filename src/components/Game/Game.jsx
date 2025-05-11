import React, { useEffect, useState } from 'react';
import { ACTIONS } from '../../constants';
import { store } from '../../store';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';
import GameLayout from './GameLayout';

function Game() {
    const [gameState, setGameState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setGameState(store.getState());
        });
        return () => unsubscribe();
    }, []);

    const resetGame = () => {
        store.dispatch({ type: ACTIONS.RESTART_GAME });
    };

    return (
        <GameLayout>
            <Information
                currentPlayer={gameState.currentPlayer}
                isGameEnded={gameState.isGameEnded}
                isDraw={gameState.isDraw}
            />
            <Field
                field={gameState.field}
                currentPlayer={gameState.currentPlayer}
                isGameEnded={gameState.isGameEnded}
                winningCells={gameState.winningCells}
            />
            <button className={styles['game__reset']} onClick={resetGame}>
                Начать заново
            </button>
        </GameLayout>
    );
}

export default Game;
