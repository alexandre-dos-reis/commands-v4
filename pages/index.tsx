import { useAtom } from "jotai";
import { useRef } from "react";
import { getGlobalProps } from "utils/global-props";
import { searchTextAtom } from "utils/store";

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
      <p>Bienvenue sur mon répertoire de commandes.</p>
      <p>
        Ce site a pour but de répertorier les commandes Unix que j&apos;utilise
        tous les jours et que j&apos;oublie très souvent. 😅
      </p>
      <p>
        Les environnements dans lequels elles sont effectuées sont
        principalement Gnu/Linux, Debian, Ubuntu et MacOs.
      </p>
    </>
  );
}
