import { useNavigation } from "expo-router";

import { Container, Content, Icon } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export default function NewGroup() {
  const navigation = useNavigation();
  function handleNew() {
    navigation.navigate("players", { group: "Rocket" });
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

        <Input placeholder="Nome da turma" />

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
