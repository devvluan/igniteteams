import Groups from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
