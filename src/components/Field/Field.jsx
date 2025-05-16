import { useDispatch } from 'react-redux';
import { setDraw, setField, setWinner } from '../../actions/gameActions';
import { WIN_PATTERNS } from '../../constants';
import styles from './Field.module.css';
import FieldLayout from './FieldLayout';

function Field({ field, currentPlayer, isGameEnded, winningCells }) {
    const dispatch = useDispatch();

    const handleCellClick = (index) => {
        if (field[index] !== '' || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;

        const winningCombination = WIN_PATTERNS.find((pattern) =>
            pattern.every((i) => newField[i] === currentPlayer)
        );

        if (winningCombination) {
            dispatch(setField(newField, currentPlayer));
            dispatch(setWinner(winningCombination));
            return;
        }

        if (!newField.includes('')) {
            dispatch(setField(newField, currentPlayer));
            dispatch(setDraw());
            return;
        }

        dispatch(setField(newField, currentPlayer === 'X' ? '0' : 'X'));
    };

    return (
        <FieldLayout>
            {field.map((cell, index) => (
                <button
                    key={index}
                    className={`${styles.field__cell} ${
                        winningCells?.includes(index)
                            ? styles.field__cell__winner
                            : ''
                    }`}
                    onClick={() => handleCellClick(index)}
                >
                    {cell}
                </button>
            ))}
        </FieldLayout>
    );
}

export default Field;
