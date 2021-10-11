import '../styles/mans.css';
import Navbar from './navbar';
import { useState } from 'react';
import axios from 'axios';

const Mans = (props) => 
{
    function mensCardPrinter(men)
    {
        var arr = []
        for(let i=0;i<men.length;i++)
        {
            arr.push(<div className="mans-card">
                        <div className="mans-card-top" >
                            <img src={men[i].image} className="mans-card-image" alt=""/>
                        </div>
                        <div className="mans-card-bottom">
                            <div className="mans-card-bottom-title">
                                {men[i].title}
                            </div>
                            <div className="mans-card-bottom-price-cart">
                                <div className="mans-card-bottom-price">
                                    $ {men[i].price}
                                </div>
                            </div>
                        </div>
                    </div>)
        }
        return (arr);
    }
    const [men, setMen] = useState([])
        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/men's clothing`,
        }).then(res => {
            setMen(res.data)
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
                Men's Clothing
            </div>
            <div className="all-products">
                {mensCardPrinter(men)}
            </div>
        </div>
        </>
    );
}

export default Mans;