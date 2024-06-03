import { Image } from "react-native";
import { AvatarContainer, AvatarImage } from "./styles";

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage 
        source={{ uri: 'https://github.com/gabrielpramalho.png' }} 
      />
    </AvatarContainer>
  )
}