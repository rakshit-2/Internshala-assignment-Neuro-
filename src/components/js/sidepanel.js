import '../styles/sidepanel.css'
import Navbar from './navbar';
import { useHistory } from 'react-router';

const Sidepanel = (props) => 
{
    const history = useHistory();
    return(
        <>
            <div>
                <Navbar/>
            </div>
            <div className="gap-filler"></div>
            <div className="sidepanel-out">
                <div className="sidepanel-mid-outer">
                    <div className="sidepanel-inner">
                        <div className="side-inner-outer">
                            <div className="side-signin">
                                Sign in
                            </div>
                            <div className="side-other">
                                <div className="side-other-ele" onClick = {() => {history.push("/mans")}}>
                                    Men's ClothingMen's 
                                </div>
                                <div className="side-other-ele" onClick = {() => {history.push("/womens")}}>
                                    Women's Clothing
                                </div>
                                <div className="side-other-ele" onClick = {() => {history.push("/electronics")}}>
                                    Electronics
                                </div>
                                <div className="side-other-ele" onClick = {() => {history.push("/jewelery")}}>
                                    Jewelery
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidepanel-right" onClick = {() => {history.push("/")}}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidepanel;