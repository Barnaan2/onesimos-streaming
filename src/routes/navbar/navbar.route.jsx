import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/footer.route";
import { Fragment } from "react";
import './navbar.style.css';
const Navbar = ()=>{
return(
    <Fragment>
<header>
    <div className="logo">
 <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Portrait_of_Onesimus_Nesib.jpg" alt="Onesimos" />
    </div>
    <nav className="navbar-links">
    <Link  className="navbar-link" to="/">
            Home 
        </Link>
        <Link className="navbar-link" to="/services">
         service
        </Link> 
        <Link className="navbar-link" to="/give">
        give
        </Link> 
    </nav>
    <div className="form">
        <input type="search" placeholder="search for church" />
    </div>
</header>
<Outlet/>
<Footer/>
    </Fragment>
);
}
export default Navbar;