import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

function FieldLayout({ children }) {
    return <div className={styles['field']}>{children}</div>;
}

FieldLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FieldLayout;
