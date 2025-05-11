import React from 'react';
import styles from './Information.module.css';
import InformationLayout from './InformationLayout';

function Information({ currentPlayer, isGameEnded, isDraw }) {
    const getStatus = () => {
        if (isDraw) return 'Ничья!';
        if (isGameEnded) return `Победил ${currentPlayer}!`;
        return `Ходит: ${currentPlayer}`;
    };

    return (
        <InformationLayout>
            <h1 className={styles['information__title']}>крестики-нолики</h1>
            <div className={styles['information__status']}>{getStatus()}</div>
        </InformationLayout>
    );
}

export default Information;
