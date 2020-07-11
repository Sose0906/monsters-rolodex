import React from 'react';
import Card from "../Card/Card";
import './_CardList.css';

function CardList(props) {

    return (<div className='card-list'>
        {props.monsters.map(monster => (
            <Card monster={monster} key={monster.id}/>
            ))}

    </div>)
}


export default CardList
