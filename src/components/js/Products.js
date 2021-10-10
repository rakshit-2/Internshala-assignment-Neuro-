import '../styles/Products.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

function rowDisplay(catogary,men,women,jewelery,electronics,props)
{
    var li=[]
    var rowValue;
    for(var i=0;i<4;i++)
    {
        rowValue=<div className="products-row">
                            <div className="products-row-heading">
                                {catogary[i]}
                            </div>
                            <div className="products-row-showcase">
                                <Card catogary={catogary[i]} men={men} women={women} jewelery={jewelery} electronics={electronics} handleState={props.handleState}/>
                                
                            </div>
                        </div>
        li.push(rowValue);
    }
    return li;
}




const Products = (props) => 
{
    const [catogary,setcatogary]=useState(["Electronics","Men's Clothing","Women's Clothing","Jewelery"])
    const [electronics, setElectronics] = useState([])
    const [men, setMen] = useState([])
    const [women, setWomen] = useState([])
    const [jewelery, setJewelery] = useState([])

    useEffect(() => {
        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/electronics`,
        }).then(res => {
            setElectronics(res.data)
        }).catch(err => {
            console.log(err)
        });

        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/men's clothing`,
        }).then(res => {
            setMen(res.data)
        }).catch(err => {
            console.log(err)
        });

        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/women's clothing`,
        }).then(res => {
            setWomen(res.data)
        }).catch(err => {
            console.log(err)
        });

        axios({ 
            method: 'get',
            url: `https://fakestoreapi.com/products/category/jewelery`,
        }).then(res => {
            setJewelery(res.data)
        }).catch(err => {
            console.log(err)
        });
    }, []);

    if(men.length > 0 && women.length > 0 && jewelery.length > 0 && electronics.length > 0)
    {
        return(
            <div className="products-outer">
               {rowDisplay(catogary,men,women,jewelery,electronics,props)}
            </div>
        );
    }
    else{
        return(
            <>
            </>
        );
    }
    
}

export default Products;