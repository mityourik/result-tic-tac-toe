import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../../actions/gameActions';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';
import GameLayout from './GameLayout';

function Game() {
    const gameState = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleResetGame = () => {
        dispatch(restartGame());
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
            <button className={styles['game__reset']} onClick={handleResetGame}>
                Начать заново
            </button>
        </GameLayout>
    );
}

export default Game;
