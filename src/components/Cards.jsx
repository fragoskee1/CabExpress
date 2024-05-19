import React, { useState, useEffect } from 'react';
import Card from './Card';

function Cards() {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('https://localhost4000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData()
    }, []);

  return (
    <>
    {Cards &&
        Cards.length > 0 &&
        cards.map(card => <Card key={card._id} card={card} />)}
    </>
  );
}

export default Cards;
