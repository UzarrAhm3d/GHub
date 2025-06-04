import useGames from '@/hooks/useGames';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {

    const { games, error } = useGames();

  return (
    <ul>
        { error && <Text color={'red'}>{error}</Text> }
        {games.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default GameGrid