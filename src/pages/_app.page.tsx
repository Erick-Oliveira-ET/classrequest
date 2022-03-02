import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProfileProvider } from "context/Profile";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { ColorModeScript } from "@chakra-ui/color-mode";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ProfileProvider>
  );
}
export default MyApp;
