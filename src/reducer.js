import { ACTIONS, initialState } from './constants';

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET_FIELD:
            return {
                ...state,
                field: payload.field,
                currentPlayer: payload.currentPlayer,
            };
        case ACTIONS.SET_WINNER:
            return {
                ...state,
                isGameEnded: true,
                winningCells: payload,
            };
        case ACTIONS.SET_DRAW:
            return {
                ...state,
                isGameEnded: true,
                isDraw: true,
            };
        case ACTIONS.RESTART_GAME:
            return initialState;
        default:
            return state;
    }
};
