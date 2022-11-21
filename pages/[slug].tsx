import { getAllCommandsQuery, getOneCommandQuery } from "graphql/queries";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { getGlobalProps } from "utils/global-props";
import ReactMarkdown from "react-markdown";
import { useHydrateAtoms } from "jotai/utils";
import { currentCmdSlugAtom } from "utils/store";
import { CommandItems } from "components/CommandItems";
import { Markdown } from "components/Markdown";
import { useEffect } from "react";
import router from "next/router";

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
  useHydrateAtoms([[currentCmdSlugAtom, selectedCommand.slug]] as const);

  const top = "top";

  useEffect(() => {
    // https://github.com/vercel/next.js/issues/28778
    router.events.on("routeChangeComplete", () => {
      document.getElementById(top)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  return (
    <>
      <div className=""></div>
      <div className="max-w-4xl mx-auto w-full my-10" id={top}>
        <header className="mb-10">
          <h1 className="text-5xl font-bold text-center mb-10">
            {selectedCommand.title}
          </h1>
          <Markdown bigger>{selectedCommand.description}</Markdown>
        </header>
        <main>
          <CommandItems {...selectedCommand} />
        </main>
      </div>
    </>
  );
};

export default Page;
