import React from 'react';

const Notebook = (props) => {
    let {brand, model, cost, img} = props;
    return (
        <div>
            <h1>Brand: {brand}</h1>
            <h2>Model: {model}</h2>
            <h2>Cost: {cost}</h2>
            <img
                src={img}
                alt={brand}/>
        </div>
    );
};

export default Notebook;