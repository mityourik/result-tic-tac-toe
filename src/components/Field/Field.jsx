import React, { useEffect, useState } from 'react';
import { ACTIONS, WIN_PATTERNS } from '../../constants';
import { store } from '../../store';
import styles from './Field.module.css';
import FieldLayout from './FieldLayout';

function Field() {
    const [, forceUpdate] = useState({});
    const state = store.getState();

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            forceUpdate({});
        });
        return () => unsubscribe();
    }, []);

    const handleCellClick = (index) => {
        if (state.field[index] !== '' || state.isGameEnded) return;

        const newField = [...state.field];
        newField[index] = state.currentPlayer;

        const winningCombination = WIN_PATTERNS.find((pattern) =>
            pattern.every((i) => newField[i] === state.currentPlayer)
        );

        if (winningCombination) {
            store.dispatch({
                type: ACTIONS.SET_FIELD,
                payload: {
                    field: newField,
                    currentPlayer: state.currentPlayer,
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
                    currentPlayer: state.currentPlayer,
                },
            });
            store.dispatch({ type: ACTIONS.SET_DRAW });
            return;
        }

        store.dispatch({
            type: ACTIONS.SET_FIELD,
            payload: {
                field: newField,
                currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
            },
        });
    };

    return (
        <FieldLayout>
            {state.field.map((cell, index) => (
                <button
                    key={index}
                    className={`${styles['field__cell']} ${
                        state.winningCells.includes(index)
                            ? styles['field__cell__winner']
                            : ''
                    } ${state.isGameEnded ? styles['game-ended'] : ''}`}
                    onClick={() => handleCellClick(index)}
                >
                    {cell}
                </button>
            ))}
        </FieldLayout>
    );
}

export default Field;
