import '../styles/carousel.css'
import sale1 from '../../images/sale1.JPG'
import sale2 from '../../images/sale2.JPG'
import sale3 from '../../images/sale3.JPG'

const Carousel = (props) => 
{
    return(
        <>
            <div className="gap-filler"></div>
            <div className="carousel-outer">
                <div className="carousel-left">
                    <img src={sale1} className="carousel-left-sale1" alt=""/>
                </div>
                <div className="carousel-right">
                    <div className="carousel-right-top">
                        <img src={sale2} className="carousel-right-top-sale2" alt=""/>
                    </div>
                    <div className="carousel-right-bottom">
                        <img src={sale3} className="carousel-right-bottom-sale3" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;