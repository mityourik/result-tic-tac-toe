import React, { useEffect, useState } from 'react';
import { store } from '../../store';
import styles from './Information.module.css';
import InformationLayout from './InformationLayout';

function Information() {
    const [, forceUpdate] = useState({});
    const { currentPlayer, isGameEnded, isDraw } = store.getState();

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            forceUpdate({});
        });
        return () => unsubscribe();
    }, []);

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
