import apiClient from '@/services/api-client';
import { Text } from '@chakra-ui/react';
import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'

interface Game {
    id: number,
    name: string
}

interface FetchGameResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState();

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<FetchGameResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) {
                    return;
                }
                setError(err.message)
            });

        return () => controller.abort();
    }, [])

  return (
    <ul>
        { error && <Text color={'red'}>{error}</Text> }
        {games.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default GameGrid