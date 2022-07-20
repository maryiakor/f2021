import React, {FC} from "react";
import "./ButtonProps.css";

const ButtonProps = (
  {
    color = "blue",
     disabled,
      children,
      onClick,
    }:
     {
       // если вопр знак то, не обязательное свлйство
       color?: string,
       disabled?: boolean,
       children: React.ReactNode,
       onClick: () => void;
      }) => {
  return <button onClick={onClick} disabled = {disabled} style={{color:color}}>{children}</button>;
};

export default ButtonProps;
