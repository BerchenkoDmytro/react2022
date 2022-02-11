import React from 'react';
import notebook from "../notebook/Notebook";
import Notebook from "../notebook/Notebook";

let notebooks =[
    {
        id: 1,
        brand:'Apple',
        model: 'PRO',
        cost: 500,
        img:'https://appleinsider.ru/wp-content/uploads/2021/10/new_mbp_14_16_2_inches-750x484.jpg'
    },  {
        id: 2,
        brand:'HP',
        model: '15S',
        cost: 400,
        img:'https://www.hp.com/gb-en/shop/Html/Merch/Images/c06751173_390x286.jpg'
    },  {
        id: 3,
        brand:'ASUS',
        model: 'PRO15S',
        cost: 300,
        img:'https://itc.ua/wp-content/uploads/2021/10/asus-vivobook-15-oled-3.jpg'
    },  {
        id: 4,
        brand:'LG',
        model: 'RO23',
        cost: 200,
        img:'https://mzimg.com/big/o6/dqx5795z1o6.jpg'
    }
]

const Notebooks = () => {
    return (
        <div>
            {notebooks.map(notebook=><Notebook notebook={notebook}/>)}
        </div>
    );
};

export default Notebooks;