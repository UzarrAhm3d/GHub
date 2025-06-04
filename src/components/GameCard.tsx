import type { Game } from '@/hooks/useGames'
import { Card, Image } from "@chakra-ui/react"

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="320px" overflow="hidden" borderRadius="lg" boxShadow="md">

        <Image 
            src={game.background_image}
            width="100%"
            height="180px" // fixed height
            objectFit="cover" // crop image to fit nicely
            borderTopRadius="lg"/>

        <Card.Body>
            <Card.Title mt="2">{game.name}</Card.Title>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard