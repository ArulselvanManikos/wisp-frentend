import React from 'react'
type propTypes ={
  open: boolean;
  onClose: ()=> void;
  children: React.ReactNode;
}

const Model: React.FC<propTypes> = ({ open,onClose,children}) => {
    
  return (
    <div 
    className={`fixed inset-0  backdrop-blur-sm flex
    justify-center items-center transition-colors ${open? "visible bg-black/20" : "invisible"}
    `}
    onClick={onClose} >
        <div 
        className={`bg-white rounded-lg shadow p-7 transition-all max-w-md 
                    ${open ?"scale-100 opacity-100" : "scale-110 opacity-0"}`}
                    onClick={(e)=> e.stopPropagation()}>
            <button className='absolute -top-1 -right-1 border
            border-neutral-200 rounded-full w-5 h-5 text-gray-400 bg-white 
            hover:bg-gray-50 hover:text-gray-700' onClick={onClose}>X</button>
            {children}
        </div>

    </div>
  )
};

export default Model