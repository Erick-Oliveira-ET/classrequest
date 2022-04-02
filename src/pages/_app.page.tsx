import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProfileProvider } from "context/Profile";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { ColorModeScript } from "@chakra-ui/color-mode";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ufulendário!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Aplicativo para auxiliar na escolha de matérias do curso de Engenharia Mecatrônica da Universidade Federal de Uberlândia (UFU) utilizando o fluxograma oficial do curso."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://classrequest.vercel.app /" />
        <meta property="og:title" content="Fluxograma Mecatrônica" />
        <meta
          property="og:description"
          content="Aplicativo para auxiliar na escolha de matérias do curso de Engenharia Mecatrônica da Universidade Federal de Uberlândia (UFU) utilizando o fluxograma oficial do curso."
        />
        <meta property="og:image" content="/screenshot.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://classrequest.vercel.app/"
        />
        <meta property="twitter:title" content="Fluxograma Mecatrônica" />
        <meta
          property="twitter:description"
          content="Aplicativo para auxiliar na escolha de matérias do curso de Engenharia Mecatrônica da Universidade Federal de Uberlândia (UFU) utilizando o fluxograma oficial do curso."
        />
        <meta property="twitter:image" content="/screenshot.png"></meta>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <ProfileProvider>
          <Component {...pageProps} />
        </ProfileProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
