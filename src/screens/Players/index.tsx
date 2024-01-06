import { Container } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title='Nome do grupo'
        subtitle='adicione pessoas e separe os times'
      />

      <ButtonIcon />
    </Container>
  );
}
