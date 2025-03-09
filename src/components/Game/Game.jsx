import React, { useState } from 'react';
import GameLayout from './GameLayout';
import Information from '../Information/Information';
import Field from '../Field/Field';
import styles from './Game.module.css';

const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function Game() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(Array(9).fill(''));
    const [winningCells, setWinningCells] = useState([]);

    const handleCellClick = (index) => {
        if (field[index] !== '' || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;
        setField(newField);

        const winningCombination = WIN_PATTERNS.find((pattern) =>
            pattern.every((i) => newField[i] === currentPlayer)
        );

        if (winningCombination) {
            setWinningCells(winningCombination);
            setIsGameEnded(true);
            return;
        }

        if (!newField.includes('')) {
            setIsGameEnded(true);
            setIsDraw(true);
            return;
        }

        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    };

    const resetGame = () => {
        setField(Array(9).fill(''));
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
        setWinningCells([]);
    };

    return (
        <GameLayout>
            <Information
                currentPlayer={currentPlayer}
                isGameEnded={isGameEnded}
                isDraw={isDraw}
            />
            <Field
                field={field}
                onCellClick={handleCellClick}
                winningCells={winningCells}
            />
            <button className={styles['game__reset']} onClick={resetGame}>
                Начать заново
            </button>
        </GameLayout>
    );
}

export default Game;
