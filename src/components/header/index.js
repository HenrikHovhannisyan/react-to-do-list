import './header.css';
import React, { useState } from 'react';

const Header = ( props ) => {
    const [value, setValue] = useState('');
    return (
        <>
            <input type='text' onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => props.listHandler(value)}>Add</button>
        </>
    )
}


export default Header;
