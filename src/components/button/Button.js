import React from 'react';
import classnames from 'classnames';

import './Button.scss';

const Button = ({ children, fullWidth, ...props }) => (
    <button
        className={classnames("button", {
            'button--full-width': fullWidth,
        })}
        {...props}
    >
        { children }
    </button>
);

export default Button;