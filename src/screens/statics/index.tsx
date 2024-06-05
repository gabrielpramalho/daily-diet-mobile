import { GeneralStatics } from "@/components/general-statics";
import { StaticsContainer } from "./styles";
import { HeaderStatics } from "@/components/header-statics";


interface StaticsProps {
  isNegative?: boolean
}


export function Statics({ isNegative=false }: StaticsProps) {
  return (
    <StaticsContainer isNegative={isNegative}>
      <HeaderStatics />

      <GeneralStatics />
    </StaticsContainer>
  )
}