import { getGlobalProps } from "utils/global-props";

export const getStaticProps = async () => {
  return {
    props: {
      globalProps: await getGlobalProps(),
    },
  };
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl my-10 text-center">⛔ Erreur 404</h1>
      <p>Oups désolé ! Cette page n&apos;existe pas.</p>
    </>
  );
}
