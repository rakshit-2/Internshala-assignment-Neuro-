import '../styles/card.css'

function imagePlacer(catogary,men,women,jewelery,electronics)
{
    if(catogary==="Men's Clothing")
    {
        return men.image
    }
    else if(catogary==="Women's Clothing")
    {
        return women.image
    }
    else if(catogary==="Electronics")
    {
        return electronics.image
    }
    else if(catogary==="Jewelery")
    {
        return jewelery.image
    }
    else{return("https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg")}
}




function titlePlacer(catogary,men,women,jewelery,electronics)
{
    if(catogary==="Men's Clothing")
    {
        return men.title
    }
    else if(catogary==="Women's Clothing")
    {
        return women.title
    }
    else if(catogary==="Electronics")
    {
        return electronics.title
    }
    else if(catogary==="Jewelery")
    {
        return jewelery.title
    }
    else{return("fake stuff")}
}



function pricePlacer(catogary,men,women,jewelery,electronics)
{
    if(catogary==="Men's Clothing")
    {
        return men.price
    }
    else if(catogary==="Women's Clothing")
    {
        return women.price
    }
    else if(catogary==="Electronics")
    {
        return electronics.price
    }
    else if(catogary==="Jewelery")
    {
        return jewelery.price
    }
    else{return("fake stuff")}
}

function addtocart(catogary,men,women,jewelery,electronics)
{
    if(catogary==="Men's Clothing")
    {
        return men
    }
    else if(catogary==="Women's Clothing")
    {
        return women
    }
    else if(catogary==="Electronics")
    {
        return electronics
    }
    else if(catogary==="Jewelery")
    {
        return jewelery
    }
    else{return(1)}
}


const Card = (props) => 
{
    var arr = []
    for(let i=0;i<4;i++)
    {
        arr.push(<div className="products-card">
                    <div className="products-card-top" >
                        <img src={imagePlacer(props.catogary, props.men[i], props.women[i], props.jewelery[i], props.electronics[i])} className="products-card-image" alt=""/>
                    </div>
                    <div className="products-card-bottom">
                        <div className="product-card-bottom-title">
                            {titlePlacer(props.catogary, props.men[i], props.women[i], props.jewelery[i], props.electronics[i])}
                        </div>
                        <div className="product-card-bottom-price-cart">
                            <div className="products-card-bottom-price">
                                $ {pricePlacer(props.catogary, props.men[i], props.women[i], props.jewelery[i], props.electronics[i])}
                            </div>
                            <div className="products-card-bottom-cart" onClick={()=>{props.handleState(addtocart(props.catogary, props.men[i], props.women[i], props.jewelery[i], props.electronics[i]))}}>
                                <i class="fas fa-plus-circle fa-2x"></i>{'\u00A0'}Add To Cart
                            </div>
                        </div>
                    </div>
                </div>)
    } 

    return(
        <>
            {arr}
        </>
    );
}

export default Card;