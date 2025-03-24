import { NavLink } from "react-router-dom"

export default function Header (){
    return(
        <>
            <header>
                <nav className="navbar navbar-expand navbar-light bg-dark">
                    <div className="nav navbar-nav">
                        <NavLink className="nav-item nav-link" to='/'>
                        Home
                        </NavLink>
                        <NavLink className="nav-item nav-link" to='/partecipants'>
                        Partecipants
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    )
}