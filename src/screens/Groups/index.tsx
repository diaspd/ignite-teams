import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { GroupCard } from '@components/GroupCard';
import { Button } from '@components/Button';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  },[]));

  return (
    <Container>
      <Header />

      <Highlight 
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre sua primeira turma!"/>
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1, marginTop: -100}}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />

    </Container>
  );
}
