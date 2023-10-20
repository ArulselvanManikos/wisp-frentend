import React from 'react'


type props = {
    buttonName: string;
    onClick? : React.MouseEventHandler ;
    
}
const Button: React.FC<props> = ({ buttonName,onClick}) => {

  return (
    <><button type="button" 
    className="text-white
     w-52 h-10 px-2 py-2  
     rounded-[12px] 
      bg-gradient-to-r from-wispskyblue from-35.84% 
      via-wispblue via-68.3% to-wispgreen to- 97.5%  "
      onClick={ onClick} >{buttonName}</button></>
  )
};
export default Button;
