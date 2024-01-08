import { useNavigation } from "@react-navigation/native";

import { Container, BackButton, BackIcon, Logo } from "./styles";

import logoImg from '@assets/logo.png';

type BackButtonProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: BackButtonProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      { showBackButton &&  
        (
          <BackButton onPress={handleGoBack}>
           <BackIcon />
          </BackButton>
        )
      }

      <Logo source={logoImg} />
    </Container>
  )
}