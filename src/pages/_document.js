import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="title" content="Chham Dararaksmey - Web Developer" />
          <meta
            name="description"
            content="I am Chham Dararaksmey, Have over 3 years of experience in maintaining existing applications or creating one from scratch. Lives by Attitude is everything. and always 100% in everything I do. Constantly strive to learn new things and seek advices for improvement in everything. Passionate in coding, especially when it involves creating applications that help others to achieve success. Graduated from RUPP University with a bachelor degree of B.S. in Computer Science. Feel free to contact me if you need my help or know more about me!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Chham Dararaksmey - Web Developer" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://embed.tawk.to/66816f9eeaf3bd8d4d1688cf/1i1kpo1ar"
            async
            charSet="UTF-8"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}