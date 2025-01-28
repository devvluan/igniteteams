import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }: { theme: DefaultTheme, type: Props["type"] }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;