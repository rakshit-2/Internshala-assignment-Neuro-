import './jewelery.css';
import Navbar from '../../molecules/navbarFile/navbar';
import { useState } from 'react';
import axios from 'axios';

const Jewelery = (props) => 
{
    function jewlCardPrinter(je)
    {
        var arr = []
        for(let i=0;i<je.length;i++)
        {
            arr.push(<div className="jewl-card">
                        <div className="jewl-card-top" >
                            <img src={je[i].image} className="jewl-card-image" alt=""/>
                        </div>
                        <div className="jewl-card-bottom">
                            <div className="jewl-card-bottom-title">
                                {je[i].title}
                            </div>
                            <div className="jewl-card-bottom-price-cart">
                                <div className="jewl-card-bottom-price">
                                    $ {je[i].price}
                                </div>
                            </div>
                        </div>
                    </div>)
        }
        return (arr);
    }
    const [jewelery, setJewelery] = useState([])
        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/jewelery`,
        }).then(res => {
            setJewelery(res.data)
        }).catch(err => {
            console.log(err)
        });
    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div className="gap-filler"></div>
        <div className="all-outer">
            <div className="all-heading">
                Jewelery
            </div>
            <div className="all-products">
                {jewlCardPrinter(jewelery)}
            </div>
        </div>
        </>
    );
}

export default Jewelery;