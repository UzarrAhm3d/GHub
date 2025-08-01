import type { Game } from '@/hooks/useGames'
import { Card, HStack, Image, Text } from "@chakra-ui/react"
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '@/services/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="320px" overflow="hidden" borderRadius="lg" boxShadow="md">

        <Image 
            src={getCroppedImageUrl(game.background_image)}
            width="100%"
            height="180px"
            objectFit="cover"
            borderTopRadius="lg"/>

        <Card.Body>
            <Card.Title mt="2">{game.name}</Card.Title>
            <HStack className='space-between'>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
              <CriticScore score={game.metacritic} />
            </HStack>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard