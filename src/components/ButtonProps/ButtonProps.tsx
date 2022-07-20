import React from 'react';

const ButtonProps = (
    {
        color = "blue",
        disabled,
        children,
        onClick,
    }:
        {
            color?: string;
            disabled?: boolean;
            children: React.ReactNode;
            onClick: () => void;
        }) => {
    return <button
        onClick={onClick}
        disabled={disabled}
        style={{color: color}}
    >
        {children}
    </button>
};

export default ButtonProps;