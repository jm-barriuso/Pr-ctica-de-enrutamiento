import React from 'react';
import { useParams } from 'react-router-dom';

const ColorText = () => {
    
    const { id, color, bgcolor } = useParams();    
    return (
        <div>
            <h2 style={{backgroundColor:bgcolor, color:color}}h2>The word is: {id}</h2>
        </div>
    );
}

export default ColorText;
