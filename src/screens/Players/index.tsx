import { Container, Form } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title='Nome do grupo'
        subtitle='adicione pessoas e separe os times'
      />

      <Form>
        <Input 
          placeholder="Nome do integrante"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" type="PRIMARY"/>
      </Form>
    </Container>
  );
}
