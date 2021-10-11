import '../styles/navbar.css';
import Navbar from './navbar';
import Carousel from './carousel';
import Products from './Products';
import '../styles/main.css';

const Main = (props) => 
{
    return(
        <div className="main">
            <div>
                <Navbar/>
            </div>
            <div>
                <Carousel/>
            </div>
            <div>
                <Products handleState={props.handleState} infoButton={props.infoButton}/>
            </div>
        </div>
    );
}

export default Main;