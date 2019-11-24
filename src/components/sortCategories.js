import React from 'react';

const SortCategories =()=>{
    return (
    <div>                            
       <span >Order by</span>
            <select name="options" className="select">
                <option selected>Select</option>
                <option value="first">1</option>
                <option value="second">2</option>
                <option value="third">3</option>
            </select> 
    </div>
    )
}
export default SortCategories;