import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { GroupCard } from '@components/GroupCard';
import { Button } from '@components/Button';

import { Container } from './styles';

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
        contentContainerStyle={groups.length === 0 && { flex: 1, marginTop: -100}}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
      />

      <Button 
        title='Criar nova turma'
      />

    </Container>
  );
}
