export const selectGameState = (state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
    field: state.field,
    winningCells: state.winningCells,
});
