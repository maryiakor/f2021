import React, {useState} from 'react';
import './Button.css';

const Button = () => {
    const [buttonText, setButtonText] = useState('Click please me!');
    return (
        <button className="my-button"
                onClick={() => setButtonText('Thank you')}
        >
            {buttonText}
        </button>
    )
};

export default Button;