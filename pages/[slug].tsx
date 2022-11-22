import { getAllCommandsQuery, getOneCommandQuery } from "graphql/queries";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { getGlobalProps } from "utils/global-props";
import { useHydrateAtoms } from "jotai/utils";
import { currentCmdSlugAtom } from "utils/store";
import { CommandItems } from "components/CommandItems";
import { Markdown } from "components/Markdown";
import { useEffect } from "react";
import router from "next/router";
import { ENV_VARS } from "utils/env-vars";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getAllCommandsQuery()).map((c) => ({
      params: { slug: c.slug },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      globalProps: await getGlobalProps(),
      selectedCommand: await getOneCommandQuery(ctx.params?.slug as string),
    },
    revalidate: 300, // 5 min
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

  const imgQuality = "fit=cover&height=170&quality=80";
  const src = `${ENV_VARS.ASSETS_ENDPOINT}/${selectedCommand.image}?${imgQuality}`;
  return (
    <>
      <div className="h-1" id={top} />
      <div className="max-w-4xl mx-auto w-full my-10">
        <header className="mb-10">
          {selectedCommand.image ? (
            <div className="flex justify-center align-middle h-[170px] relative mb-10">
              <Image
                className="object-contain"
                fill
                src={src}
                alt={selectedCommand.title}
              />
            </div>
          ) : (
            <h1 className="text-5xl font-bold text-center mb-10">
              {selectedCommand.title}
            </h1>
          )}
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
