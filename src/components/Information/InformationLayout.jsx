import React from 'react';
import styles from './Information.module.css';

function InformationLayout({ children }) {
    return <div className={styles['information']}>{children}</div>;
}

export default InformationLayout;
