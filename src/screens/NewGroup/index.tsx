import { useState } from "react";
import { useNavigation } from "expo-router";

import { groupCreate } from "@storage/group/groupCreate";

import { Container, Content, Icon } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();
  async function handleNew() {
    await groupCreate(group);
    navigation.navigate("players", { group });
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          type="PRIMARY"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
