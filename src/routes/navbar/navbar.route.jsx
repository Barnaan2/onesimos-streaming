import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/footer.route";
import { Fragment } from "react";
import './navbar.style.css';
const Navbar = ()=>{
return(
    <Fragment>
<div className="navbar-container">
    <div className="logo">
 <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Portrait_of_Onesimus_Nesib.jpg" alt="Onesimos" />
    </div>
    <div className="navbar-links">
    <Link  className="navbar-link" to="/">
            Home 
        </Link>
        <Link className="navbar-link" to="/services">
         service
        </Link> 
        <Link className="navbar-link" to="/give">
        give
        </Link> 
    </div>
</div>
<Outlet/>
<Footer/>
    </Fragment>
);
}
export default Navbar;