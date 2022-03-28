import Head from "next/head";

export default function Meta(props) {
  const { title, description, keywords } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="keywords" content={keywords} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Some title",
  description: "Some description",
  keywords: 'text 1, text 2'
};
