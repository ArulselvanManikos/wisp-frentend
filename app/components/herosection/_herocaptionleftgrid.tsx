import React, { useState } from 'react'
import Model from '../model'; 
import Form from '../form';
import Button from '../button';

function Herocaptionleft() {

  const [open,setOpen] = useState<boolean>(false);
  
  return (
    <>
        <h1 className="herocaption font-[500] text-7xl leading-20 ">
            Running out of ideas<br/> for your 
            <span className="text-wispskyblue  underline"> Newsletter</span>?
        </h1>

          <p className='mt-10 font-[400] text-lg'>
          It&apos;s about time your marketing team leverages the true <br/>
          power of generative AI. CRMwisp is coming soon to<br/>
          theatres near you — and online right here!<br/>
          </p>

        <div className='mt-10'>
        {/* <button type="button" 
        className="text-white
        w-52 h-13 px-3 py-5 
        rounded-[12px] 
          bg-gradient-to-r from-wispskyblue from-35.84% 
          via-wispblue via-68.3% to-wispgreen to- 97.5%  "
          onClick={()=>setOpen(true)} >Join the waitlist</button>
        */}
        <Button buttonName='Join the waitlist' onClick={()=>setOpen(true)}></Button>
        </div>
        <Model open={open} onClose={()=>setOpen(false)}>
          <Form/>
        </Model>
    </>
  )
}

export default Herocaptionleft