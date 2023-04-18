import { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from './GameCard';

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get('https://apis.wilders.dev/wild-games/games/')
        .then((res) => setGames(res.data))
    }, [])

    return (
        <div>
            {
                games &&
                games.map((game) => (
                    <GameCard key={game.id} game={game} id={game.id} />
                ))
            }
        </div>
    )
}

export default GameList