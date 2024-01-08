import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton /> 
   
      <Content>
        <Icon />
        
        <Highlight 
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Input 
          placeholder='Nome da Turma'
          onChangeText={setGroup}
        />

        <Button 
          title='Criar'
          style={{ marginTop: 20}}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
