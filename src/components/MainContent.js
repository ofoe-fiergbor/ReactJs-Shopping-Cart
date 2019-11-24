import React from 'react';
import SortCategories from './SortCategories'
import NumberProduct from './NumberProduct'
import Item from './Item'

import shirt1 from '../images/shirt1.jpg'
import shirt2 from '../images/shirt2.jpg'
import shirt3 from '../images/shirt3.jpg'
import shirt4 from '../images/shirt4.jpg'
import shirt5 from '../images/shirt5.jpg'
import shirt6 from '../images/shirt6.jpg'
import shirt7 from '../images/shirt7.jpg'
import shirt8 from '../images/shirt8.jpg'
import shirt9 from '../images/shirt9.jpg'
import shirt10 from '../images/shirt10.jpg'
import shirt11 from '../images/shirt11.jpg'
import shirt12 from '../images/shirt12.jpg'



const MainContent =()=>{
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <NumberProduct/>
                </div>
                <div className='col-md-6 text-right'>
                    <SortCategories/>
                </div>
            </div>

            <div className='row'>
                <Item itemImage ={shirt1}/>
                <Item itemImage ={shirt2}/>
                <Item itemImage ={shirt3}/>
                <Item itemImage ={shirt4}/>
                <Item itemImage ={shirt5}/>
                <Item itemImage ={shirt6}/>
                <Item itemImage ={shirt7}/>
                <Item itemImage ={shirt8}/>
                <Item itemImage ={shirt9}/>
                <Item itemImage ={shirt10}/>
                <Item itemImage ={shirt11}/>
                <Item itemImage ={shirt12}/>
            </div>
        </div>
    )
}

export default MainContent;