import { Link } from 'react-router-dom'

import './Header.css'

const Header = ()=>{
    return(
        <>
        <div className="Header">
            <h1>
                To-Do-List
            </h1>
            <h4>
                <Link to="/About" >About</Link>
            </h4>
            <h4>
                <Link to="/Bloog" >Bloog</Link>
            </h4>

        </div>
        </>
    )
}

export default Header