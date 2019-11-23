import React from 'react';
import SortCategories from './SortCategories'
import NumberProduct from './NumberProduct'
import Item from './Item'

const MainContent =()=>{
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <NumberProduct/>
                </div>
                <div className='col-md-6'>
                    <SortCategories/>
                </div>
            </div>

            <div className='row'>
                <Item/>
            </div>
        </div>
    )
}

export default MainContent;