import React from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';
import styles from './Field.module.css';

function Field({ field, onCellClick, winningCells }) {
    return (
        <FieldLayout>
            {field.map((cell, index) => (
                <button
                    key={index}
                    className={`${styles['field__cell']} ${
                        winningCells.includes(index)
                            ? styles['field__cell__winner']
                            : ''
                    }`}
                    onClick={() => onCellClick(index)}
                >
                    {cell}
                </button>
            ))}
        </FieldLayout>
    );
}

Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCellClick: PropTypes.func.isRequired,
    winningCells: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Field;
