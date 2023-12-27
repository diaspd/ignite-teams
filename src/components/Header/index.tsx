import { Container, BackButton, BackIcon, Logo } from "./styles";

import logoImg from '@assets/logo.png';

type BackButtonProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: BackButtonProps) {
  return (
    <Container>
      { showBackButton &&  
        (
          <BackButton>
           <BackIcon />
          </BackButton>
        )
      }

      <Logo source={logoImg} />
    </Container>
  )
}