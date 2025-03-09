import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.module.css';

function GameLayout({ children }) {
    return (
        <div className={styles['game']}>
            <h1 className={styles['game__title']}>Крестики-Нолики</h1>
            {children}
        </div>
    );
}

GameLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GameLayout;
