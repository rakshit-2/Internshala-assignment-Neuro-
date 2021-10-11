import '../styles/information.css';
import Navbar from './navbar';
import * as React from 'react';

const Information = (props) => 
{
    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div className="gap-filler"></div>
        <div className="info-outer">
            <div className="info-left">
                <img src={props.in.image} className="info-left-image" alt=""/>
            </div>
            <div className="info-right">
                <div className="info-right-title">
                    {props.in.title}
                </div>
                <div className="info-right-desc">
                    {props.in.description}
                </div>
                <div className="info-right-price">
                    Price : {props.in.price}
                </div>
                <div className="info-right-price">
                    Rating : {props.in.rating.rate}
                </div>
                <div className="info-right-price">
                    Count : {props.in.rating.count}
                </div>
            </div>
        </div>
        </>
    );
}

export default Information;