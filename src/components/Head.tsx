import Head from "next/head";
import { FC } from "react";

type HeadProps = {
  title?: string;
  description?: string;
};

const PageHeader: FC<HeadProps> = ({ title = "Tsks", description }) => {
  const defaultDescription = "Simple Todo App";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={defaultDescription || description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { PageHeader };
