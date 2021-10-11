import '../styles/navbar.css'
import { useHistory } from 'react-router';
import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BallotIcon from '@mui/icons-material/Ballot';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import PersonIcon from '@mui/icons-material/Person';






const Navbar = (props) => 
{
    const history = useHistory();
    return(
        <div className="outer-navbar">
            <div className="navbar-left">
                <ClearAllIcon variant="contained" sx={{ fontSize: 50 }} onClick = {() => {history.push("/sidepanel")}}/>
                <Button variant="none" size="small" startIcon={<HomeIcon />} onClick = {() => {history.push("/")}}>Home</Button>
                <Button variant="none" size="small" startIcon={<ShoppingCartIcon />} onClick = {() => {history.push("/cart")}}>Cart</Button>
                <Button variant="none" size="small" startIcon={<BallotIcon />} >All</Button>
            </div>
            <div className="navbar-right">
                <div className="navbar-right-search">
                    <input type="text" placeholder="Search.." className="navbar-right-search-field"/>
                    <div className="navbar-right-search-button">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <Button variant="none" size="small" startIcon={<PersonIcon />}>Profile</Button>
            </div>
        </div>
    );
}

export default Navbar;