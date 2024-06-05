import { BoxStatic } from "../box-static";
import { Container, Title, Wrapper, WrapperHorizontal } from "./styles";

export function GeneralStatics() {
  return (
    <Container>
      <Title>Estatísticas gerais</Title>

      <Wrapper>
        <BoxStatic
          title="97"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <BoxStatic
          title="109"
          subtitle="refeições registradas"
        />

        <WrapperHorizontal>
          <BoxStatic
            title="99"
            subtitle="refeições dentro da dieta"
            variant="negative"
          />
          <BoxStatic
            title="10"
            subtitle="refeições fora da dieta"
            variant="positive"
          />
        </WrapperHorizontal>
      </Wrapper>
    </Container>
  )
}