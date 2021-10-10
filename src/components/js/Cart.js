import '../styles/cart.css';
import Navbar from './navbar';
import sale3 from '../../images/sale3.JPG';

const Cart = (props) => 
{
    function cartCardDisplay(obj)
    {
        var cartCardList=[]
        for(var i=0;i<obj.length;i++)
        {
            cartCardList.push(<div className="cart-card">
                                <div className="cart-card-image-out">
                                    <img src={obj[i].image} className="cart-card-image"/>
                                </div>
                                <div className="cart-card-title">
                                    {obj[i].title}
                                </div>
                                <div className="cart-card-price">
                                    $ {obj[i].price}
                                </div>
                                <div className="cart-card-reviews">
                                    Revires {obj[i].id}
                                </div>
                            </div>)
        }
        return cartCardList;
        
    }




    function totalAmountCal(props)
    {
        var totalAmount=0;
        for(var i=0;i<props.length;i++)
        {
            totalAmount=totalAmount+props[i].price;
        }
        totalAmount.toFixed(2);
        return totalAmount;
    }

    function quantityCheck(props)
    {
        return props.length;
    }

    
    const d = new Date();

    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div className="gap-filler"></div>
        <div className="cart-outer">
            <div className="cart-upper">
                <div className="cart-left">
                    {cartCardDisplay(props.cartElements)}
                </div>
                <div className="cart-right">
                    <div className="cart-right-total">
                        Date of purchase : {d.getDate()}-{d.getMonth()+1}-{d.getFullYear()}
                    </div>
                    <div className="cart-right-total">
                        Date of Delivery : {d.getDate()+4}-{d.getMonth()+1}-{d.getFullYear()}
                    </div>
                    <div className="cart-right-total">
                        Quantity : {quantityCheck(props.cartElements)}
                    </div>
                    <div className="cart-right-total-heading">
                        Total Amount
                    </div>
                    <div className="cart-right-total-amount">
                        $ {totalAmountCal(props.cartElements)}
                    </div>
                    <div className="cart-right-checkout">
                        CHECKOUT
                    </div>
                    <div className="cart-right-ads">
                        <img src={sale3} className="cart-right-ads-image"/>
                    </div>
                </div>
            </div>
            <div className="cart-bottom">
                <div className="cart-empty-button" onClick={()=>{props.empty()}}>
                    Empty Cart
                </div>
            </div>
        </div>
        </>
    );
}

export default Cart;