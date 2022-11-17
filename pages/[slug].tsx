import { getAllCommandsQuery, getOneCommandQuery } from "graphql/queries";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { getGlobalProps } from "utils/global-props";
import ReactMarkdown from "react-markdown";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getAllCommandsQuery()).map((c) => ({
      params: { slug: c.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      globalProps: await getGlobalProps(),
      selectedCommand: await getOneCommandQuery(ctx.params?.slug as string),
    },
  };
};

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  selectedCommand,
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">{selectedCommand.title}</h1>
      <ul>
        {selectedCommand.sub_commands?.map((sc) => (
          <li key={sc?.id} className="mb-3">
            <ReactMarkdown>{sc?.info as string}</ReactMarkdown>
            <div>{sc?.item}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
