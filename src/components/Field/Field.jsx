import React from 'react';
import { ACTIONS, WIN_PATTERNS } from '../../constants';
import { store } from '../../store';
import styles from './Field.module.css';
import FieldLayout from './FieldLayout';

function Field({ field, currentPlayer, isGameEnded, winningCells }) {
    const handleCellClick = (index) => {
        if (field[index] !== '' || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;

        const winningCombination = WIN_PATTERNS.find((pattern) =>
            pattern.every((i) => newField[i] === currentPlayer)
        );

        if (winningCombination) {
            store.dispatch({
                type: ACTIONS.SET_FIELD,
                payload: {
                    field: newField,
                    currentPlayer: currentPlayer,
                },
            });
            store.dispatch({
                type: ACTIONS.SET_WINNER,
                payload: winningCombination,
            });
            return;
        }

        if (!newField.includes('')) {
            store.dispatch({
                type: ACTIONS.SET_FIELD,
                payload: {
                    field: newField,
                    currentPlayer: currentPlayer,
                },
            });
            store.dispatch({ type: ACTIONS.SET_DRAW });
            return;
        }

        store.dispatch({
            type: ACTIONS.SET_FIELD,
            payload: {
                field: newField,
                currentPlayer: currentPlayer === 'X' ? '0' : 'X',
            },
        });
    };

    return (
        <FieldLayout>
            {field.map((cell, index) => (
                <button
                    key={index}
                    className={`${styles['field__cell']} ${
                        winningCells.includes(index)
                            ? styles['field__cell__winner']
                            : ''
                    } ${isGameEnded ? styles['game-ended'] : ''}`}
                    onClick={() => handleCellClick(index)}
                >
                    {cell}
                </button>
            ))}
        </FieldLayout>
    );
}

export default Field;
