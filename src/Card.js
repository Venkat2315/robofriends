import React from 'react';
const Card =({name,email,id,username}) =>{
    return(
        <div className='bg-light-red dib br-pill pa2 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?50x50`} alt='robots'/>
            <div>
                <h3>{name}</h3>
                <p>EMAIL->{email}</p>
            </div>
        </div>
    );
}
export default Card;