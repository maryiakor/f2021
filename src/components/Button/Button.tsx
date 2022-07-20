import React,{useState} from 'react';
import './Button.css';

const Button = () => {
    const [buttonText, setButtonText] = useState('Click me please'); 
    //let ButtonText = 'Click please me!';

    console.log(buttonText);
    // сообщаем об изменении 
    
    return(
          <button className="my-button" 
             onClick={() => setButtonText('aaaa')}
             >
                 {buttonText}
                 </button>);   
};

export default Button;