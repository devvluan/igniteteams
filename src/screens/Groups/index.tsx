import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import { Alert, FlatList } from "react-native";

import { groupsGetAll } from "@storage/group/groupsGetAll";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { Container } from "./styles";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      await groupsGetAll().then(setGroups);
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas.");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      console.log("carregou");
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
