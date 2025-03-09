import React from 'react';
import PropTypes from 'prop-types';
import styles from './Information.module.css';

function InformationLayout({ children }) {
    return <div className={styles.information}>{children}</div>;
}

InformationLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default InformationLayout;
