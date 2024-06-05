import { Container, Subtitle, Title } from "./styles";

export interface BoxStaticProps {
  title: string
  subtitle: string
  variant?: 'default' | 'positive' | 'negative'
}

export function BoxStatic({ title, subtitle, variant='default' }: BoxStaticProps) {
  return(
    <Container variant={variant}>
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}