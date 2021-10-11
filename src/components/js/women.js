import '../styles/women.css';
import Navbar from './navbar';
import { useState } from 'react';
import axios from 'axios';

const Women = (props) => 
{
    function womensCardPrinter(women)
    {
        var arr = []
        for(let i=0;i<women.length;i++)
        {
            arr.push(<div className="womens-card">
                        <div className="womens-card-top" >
                            <img src={women[i].image} className="womens-card-image" alt=""/>
                        </div>
                        <div className="womens-card-bottom">
                            <div className="womens-card-bottom-title">
                                {women[i].title}
                            </div>
                            <div className="womens-card-bottom-price-cart">
                                <div className="womens-card-bottom-price">
                                    $ {women[i].price}
                                </div>
                            </div>
                        </div>
                    </div>)
        }
        return (arr);
    }
    const [women, setWomen] = useState([])
        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/women's clothing`,
        }).then(res => {
            setWomen(res.data)
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
                Womens's Clothing
            </div>
            <div className="all-products">
                {womensCardPrinter(women)}
            </div>
        </div>
        </>
    );
}

export default Women;