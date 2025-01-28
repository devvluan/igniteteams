import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  justify-content: center;
`;