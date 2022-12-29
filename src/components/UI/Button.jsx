import React from 'react';

const Button = (ButtonProps) => {
    return (
        <button className={ButtonProps.className} type={ButtonProps.type}>{ButtonProps.value}</button>
    );
};

export default Button;