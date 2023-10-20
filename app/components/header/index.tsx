import Navbaricon from "./_navbaricon"
import Navbartheme from "./_navbartheme"
function Header() {
  return (
    <>
    <nav className="navbar container mx-auto pt-2">
        <div className="grid grid-cols-2 ">
            <div className=" ">
            <Navbaricon/>
            </div>
            <div className="mr-4 mx-auto my-auto">
            <Navbartheme/>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Header