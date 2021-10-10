import '../styles/navbar.css'
import logo from "../../images/logo.png";
import { useHistory } from 'react-router';

const Navbar = (props) => 
{
    const history = useHistory();
    return(
        <div className="outer-navbar">
            <div className="navbar-left">
                <i class="fas fa-align-justify fa-2x" onClick = {() => {history.push("/sidepanel")}}></i>
                <div className="navbar-left-logo">
                    <img src={logo} className="navbar-left-logo-image" alt=""/>
                </div>
                <div className="navbar-left-home" onClick = {() => {history.push("/")}}>
                    <i class="fas fa-home-lg-alt"></i>Home
                </div>
                <div className="navbar-left-cart" onClick = {() => {history.push("/cart")}}>
                    <i class="fas fa-shopping-cart"></i>Cart
                </div>
                <div className="navbar-left-about">
                    <i class="fab fa-atlassian"></i>About
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-right-search">
                    <input type="text" placeholder="Search.." className="navbar-right-search-field"/>
                    <div className="navbar-right-search-button">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div className="navbar-right-profile">
                    <i class="fas fa-user"></i> Profile
                </div>
            </div>
        </div>
    );
}

export default Navbar;