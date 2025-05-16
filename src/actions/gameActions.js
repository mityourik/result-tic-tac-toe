import { ACTIONS } from '../constants';

export const setField = (field, currentPlayer) => ({
    type: ACTIONS.SET_FIELD,
    payload: {
        field,
        currentPlayer,
    },
});

export const setWinner = (winningCells) => ({
    type: ACTIONS.SET_WINNER,
    payload: winningCells,
});

export const setDraw = () => ({
    type: ACTIONS.SET_DRAW,
});

export const restartGame = () => ({
    type: ACTIONS.RESTART_GAME,
});
