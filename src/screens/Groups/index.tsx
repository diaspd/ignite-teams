import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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
        contentContainerStyle={groups.length === 0 && { flex: 1}}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
      />

    </Container>
  );
}
