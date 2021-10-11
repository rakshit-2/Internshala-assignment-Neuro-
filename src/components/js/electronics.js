import '../styles/electronics.css';
import Navbar from './navbar';
import { useState } from 'react';
import axios from 'axios';

const Electronics = (props) => 
{
    function electCardPrinter(ele)
    {
        var arr = []
        for(let i=0;i<ele.length;i++)
        {
            arr.push(<div className="elect-card">
                        <div className="elect-card-top" >
                            <img src={ele[i].image} className="elect-card-image" alt=""/>
                        </div>
                        <div className="elect-card-bottom">
                            <div className="elect-card-bottom-title">
                                {ele[i].title}
                            </div>
                            <div className="elect-card-bottom-price-cart">
                                <div className="elect-card-bottom-price">
                                    $ {ele[i].price}
                                </div>
                            </div>
                        </div>
                    </div>)
        }
        return (arr);
    }
    const [electronics, setElectronics] = useState([])
        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/electronics`,
        }).then(res => {
            setElectronics(res.data)
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
                Electonics
            </div>
            <div className="all-products">
                {electCardPrinter(electronics)}
            </div>
        </div>
        </>
    );
}

export default Electronics;