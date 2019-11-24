import React from 'react';
import shirt from '../images/shirt.jpg'

const Item =(props)=>{
    console.log(props)

    return (
        <div>
            <div className="col-sm-6 col-md-3">
                <div className="thumbnail thumbnail-custom">
                    <img src={props.itemImage} alt="test"/>
                    <div className="text text-center"><p>Free Shipping</p></div>
                    <div className="caption caption-custom text-center">
                        <h5>Cat Tee Summer T-shirt</h5>
                        <div className="dash"></div>
                        <div><p className="text-center"><span>$</span>10.<span>90</span> <br/> <span>or 9 x$1.21</span></p></div>
                        <p><a href="#" className="btn btn-primary btn-custom" role="button">Add to Cart</a></p>  
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item;