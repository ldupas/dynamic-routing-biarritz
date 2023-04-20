import { useState } from 'react';
import { Link } from "react-router-dom";
import './GameCard.css';

const GameCard = ({ game }) => {
    const { id, name, rating, background_image } = game;
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSwitched, setIsSwitched] = useState(false);
    const [count, setCount] = useState(0);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
    };

    const switchButton = () => {
        setIsSwitched(!isSwitched)
    };

    const increment = () => {
        setCount(count +1)
    };

    const decrement = () => {
        setCount(count -1)
    };



    return (
        <div className={isSwitched ? 'main-light' : 'main-dark'}>
            <button onClick={switchButton}>{isSwitched ? 'Dark' : 'Light'}</button>
            <Link to={`/${id}`}>
                <h2>{name}</h2>
            </Link>
            <p>Rating : {rating}</p>
            <button onClick={handleFavorite}>
                {
                    isFavorite ? '❤️' : '🤍'
                }
            </button>
            <img src={background_image} alt={name} className="game-img"/>
            <div className='cart'>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default GameCard;