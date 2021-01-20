import Document, { Html, Head, Main, NextScript } from "next/document";

interface CustomDocumentInteface {
  url: string;
  title: string;
  description: string;
}

class CustomDocument extends Document implements CustomDocumentInteface {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  url = "http://example.com";
  title = "Demo";
  description = "Demo of Next.js";

  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta name="description" content={this.description} />
          <meta name="og:title" content={this.title} />
          <meta name="og:url" content={this.url} />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default CustomDocument;
