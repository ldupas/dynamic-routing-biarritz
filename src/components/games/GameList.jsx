import { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from './GameCard';
import './GameList.css';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        axios.get('https://apis.wilders.dev/wild-games/games/')
        .then((res) => setGames(res.data))
    }, []);

    const toggleFilter = () => {
        setIsFiltered(!isFiltered)
    };

    return (
        <div className='GameList'>
            <button onClick={toggleFilter}>{isFiltered ? 'All games' : 'Best Games'}</button>
            {
                games && isFiltered ?
                <div className='game-card'>
                {
                games
                .filter((game) => (game.rating >= 4.25))
                .map((game) => (
                    <GameCard key={game.id} game={game} />
                )) 
                }
                </div>
                :

                <div className='game-card'>
                {
                games
                .map((game) => (
                    <GameCard key={game.id} game={game} />
                ))
                }
                </div>
            }
        </div>
    )
}

export default GameList