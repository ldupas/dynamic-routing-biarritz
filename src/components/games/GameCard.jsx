import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
    const { id, name, background_image } = game;

    return (
        <div>
            <Link to={`/${id}`}>
                <h2>{name}</h2>
                <img src={background_image} alt={name} />
            </Link>
        </div>
    )
}

export default GameCard;