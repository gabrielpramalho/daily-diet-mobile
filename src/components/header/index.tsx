import { Image } from "react-native";
import { Avatar } from "../avatar";
import { HeaderContainer } from "./styles";

import logo from '@/assets/Logo.png'

export function Header() {
  return(
    <HeaderContainer>
      <Image source={logo} />
      <Avatar />
    </HeaderContainer>
  )
}