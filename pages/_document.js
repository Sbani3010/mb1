import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="/bootstrap-5.2.2-dist/css/bootstrap.min.css"
        />

        <link rel="stylesheet" href="/fontawesome-free-6.2.1-web/css/all.css" />
        <script
          src="/bootstrap-5.2.2-dist/js/bootstrap.min.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
