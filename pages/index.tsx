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
      <h2 className="text-3xl font-bold underline">
        Bienvenue sur mon répertoire de commandes.
      </h2>
      <p>
        Ce site a pour but de répertorier les commandes en CLI que
        j&apos;utilise tous les jours afin de ne pas les oublier.
      </p>
      <p>
        Les environnements dans lequels elles sont effectuées sont
        principalement Gnu/Linux, Debian, Ubuntu et MacOs.
      </p>
    </>
  );
}
