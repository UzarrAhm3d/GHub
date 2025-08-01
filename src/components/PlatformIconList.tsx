import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: { [key: string ]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (

        <Icon as={iconMap[platform.slug]} key={platform.id} color={"gray.400"}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
