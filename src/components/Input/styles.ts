import styled, { DefaultTheme } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700};

  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;
`;