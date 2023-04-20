import { Link } from "react-router-dom";
import './GameCard.css';

const GameCard = ({ game }) => {
    const { id, name, rating, background_image } = game;

    return (
        <div>
            <Link to={`/${id}`}>
                <h2>{name}</h2>
            </Link>
                <p>Rating : {rating}</p>
                <img src={background_image} alt={name} className="game-img"/>
        </div>
    )
}

export default GameCard;