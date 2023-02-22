import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <div>
            <h2 className={css.message}>{message}</h2>
        </div>
    );
};

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};