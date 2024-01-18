import { useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { AppError } from '@utils/AppError';

import { groupCreate } from '@storage/group/groupCreate';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      if(group.trim().length === 0) {
        return Alert.alert('Nova Turma', 'Informe o nome da turma.');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Nova Turma', error.message);
      } else {
        Alert.alert('Nova Turma', 'Não foi possível criar uma nova turma.');
        console.log(error);
      }
    }
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
