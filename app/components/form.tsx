import React from 'react'
import Button from './button'

export default function Form() {
  return (
    <>
    <h2 className="mt-4 mb-4 text-center text-3xl font-normal text-transparent bg-clip-text 
          bg-gradient-to-r from-wispskyblue from-23.53% 
          via-wispblue via-49.84% to-wispgreen to-102%">
    Ready to take the first step?
    </h2>

    <form action="">
         <div className="mb-5">
           <input type="text" id="name" name="name" placeholder="Your name" className="border border-wispskyblue shadow p-2 w-full rounded-lg"/>
         </div>
         <div className="mb-5">
           <input type="text" id="name" name="name" placeholder="Your work Email" className="border border-wispskyblue shadow p-2 w-full rounded-lg"/>
         </div>
         <div className="mb-5">
           <input type="text" id="name" name="name" placeholder="Some other details?" className="border border-wispskyblue shadow p-2 w-full rounded-lg"/>
         </div>
         {/* <button type="button" 
    className="text-white
     w-52 h-13 px-3 py-5 
     rounded-[12px] 
      bg-gradient-to-r from-wispskyblue from-35.84% 
      via-wispblue via-68.3% to-wispgreen to- 97.5%  "
       >Join the waitlist</button> */}
       <Button buttonName='Sign me Up!'></Button>
         </form>
    </>
  )
}
