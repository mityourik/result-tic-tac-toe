export const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const initialState = {
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false,
    field: Array(9).fill(''),
    winningCells: [],
};

export const ACTIONS = {
    SET_FIELD: 'SET_FIELD',
    SET_WINNER: 'SET_WINNER',
    SET_DRAW: 'SET_DRAW',
    RESTART_GAME: 'RESTART_GAME',
};
