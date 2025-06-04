import { Button, ClientOnly, HStack, IconButton, Image, Skeleton, Text } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import logo from '../assets/logo.webp';

const Navbar = () => {

  const { toggleColorMode, colorMode } = useColorMode()

  return (

    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image src={logo} boxSize={"60px"}/>
        
        <Text>Navbar</Text>

        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="sm">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly> 
    </HStack>
  )
}

export default Navbar