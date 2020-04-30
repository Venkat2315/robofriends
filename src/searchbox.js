import React from 'react';

const searchbox=({searchChange,searchfeild})=>{
    return(
        <div className='pa2'>
        <input  
        className='pa3 ba b--black br-pill bg-mid-gray' 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        />
        </div>
    );
}
export default searchbox;