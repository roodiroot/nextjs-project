import Container from "@/components/Container";
import ContentMarkdown from "@/components/utils-component/content-markdown";
import Path from "@/components/utils-component/Path";
import { Download } from "lucide-react";
import { GetServerSideProps } from "next";
import Head from "next/head";

const URL = "https://strapi.kondish.su";

type Content = {
  id: number;
  documentId: "jdj4zsd7wifj13mnnb873bte";
  name: string;
  content: string;
  slug: string;
  file: {
    url: string;
  };
};

type Props = {
  content: Content;
};

export default function PrivacyPolicyPage({ content }: Props) {
  return (
    <>
      <Head>
        <title>Политика по использованию персональных данных</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Path />
        <ContentMarkdown content={content?.content} className="text-sm" />
        <div className="py-10">
          <a
            target="_blank"
            className="text-sm text-orange-500 undeline"
            href={URL + content?.file.url}
          >
            <span>Скачать фаил</span>
            <Download className="h-4 w-4 inline ml-2" />
          </a>
        </div>
      </Container>
    </>
  );
}

// Это выполняется на сервере при каждом запросе
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(
    URL + "/api/docs/q5q69dh9f07sq5y4lwbjtp1e?populate=*"
  );
  const content = await res.json();

  return {
    props: {
      content: content.data,
    },
  };
};
