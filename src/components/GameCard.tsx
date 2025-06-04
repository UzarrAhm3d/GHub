import type { Game } from '@/hooks/useGames'
import { Card, Image, Text } from "@chakra-ui/react"
import PlatformIconList from './PlatformIconList'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="320px" overflow="hidden" borderRadius="lg" boxShadow="md">

        <Image 
            src={game.background_image}
            width="100%"
            height="180px"
            objectFit="cover"
            borderTopRadius="lg"/>

        <Card.Body>
            <Card.Title mt="2">{game.name}</Card.Title>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard