import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {

    const { games, error } = useGames();

  return (
    <>
        { error && <Text color={'red'}>{error}</Text> }
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spaceY={6}>
          {games.map(item => (
            <GameCard key={item.id} game={item}/>
          ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid