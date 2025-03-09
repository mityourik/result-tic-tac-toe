import React from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';
import styles from './Information.module.css';

function Information({ currentPlayer, isGameEnded, isDraw }) {
    let status = `Ходит: ${currentPlayer}`;
    if (isDraw) status = 'Ничья';
    else if (isGameEnded) status = `Победа: ${currentPlayer}`;

    return (
        <InformationLayout>
            <p className={styles['information__status']}>{status}</p>
        </InformationLayout>
    );
}

Information.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
};

export default Information;
