import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GameDetails = () => {
    const [game, setGame] = useState({});

    const params = useParams();
    
    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${params.id}`)
        .then((res) => setGame(res.data))
    }, [params.id]);

    return (
        <div>
            {
                game &&
                <p>{game.name}</p>
            }
        </div>
    )
};

export default GameDetails;