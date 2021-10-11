import Navbar from '../../molecules/navbarFile/navbar';
import Carousel from '../../molecules/carouselFile/carousel';
import Products from '../../molecules/productsFile/Products';
import './main.css';

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