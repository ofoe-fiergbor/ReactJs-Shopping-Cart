import React from 'react';
import SideBar from './SideBar'
import MainContent from './MainContent';

const ShoppingcarPage = ()=> {
    return(
        <div className = 'container'>
            <div className = 'row'>
                <div className='col-md-3'>
                    <SideBar/>
                </div>
                <div className='col-md-9'>
                    <MainContent/>
                </div>

            </div>
            
        </div>
    )
}

export default ShoppingcarPage;