import React from 'react';
import SortCategories from './SortCategories'
import NumberProduct from './NumberProduct'
import Item from './Item'

import shirt from '../images/shirt.jpg'

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
                <Item itemImage ={shirt}/>

            </div>
        </div>
    )
}

export default MainContent;