import Herocaptionleft from "./_herocaptionleftgrid"
import Herocaptionright from "./_herocaptionrightgrid"

function Herosection() {
  return (
    <>
    <nav className="container mx-auto ">
        <div className="grid grid-cols-2 fixed ">
            <div className="mt-[150px] ">
           <Herocaptionleft/>
            </div>
            <div className="mt-[100px]">
            <Herocaptionright/>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Herosection