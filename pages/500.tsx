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
      <h1 className="text-2xl my-10 text-center">💥 Erreur 500</h1>
      <p>Oups désolé ! Le serveur a planté.</p>
    </>
  );
}
