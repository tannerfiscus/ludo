import React from 'react';
import classnames from 'classnames';

import './Input.scss';
import Text from '../text/Text';

const Input = ({ label, ...props }) => (
    <label className={classnames("label", {
        'label--populated': !!props.value,
    })}>
        <input
            className="input"
            {...props}
        />
        <span className="label-text">
            <Text>{label}</Text>
        </span>
    </label>
);

export default Input;