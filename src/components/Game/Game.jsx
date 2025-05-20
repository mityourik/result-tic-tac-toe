import { useDispatch } from 'react-redux';
import { restartGame } from '../../actions/gameActions';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';
import GameLayout from './GameLayout';

function Game() {
    const dispatch = useDispatch();

    const handleResetGame = () => {
        dispatch(restartGame());
    };

    return (
        <GameLayout>
            <Information />
            <Field />
            <button className={styles['game__reset']} onClick={handleResetGame}>
                Начать заново
            </button>
        </GameLayout>
    );
}

export default Game;
