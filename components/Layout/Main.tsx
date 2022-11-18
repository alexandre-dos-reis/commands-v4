import { useAtom } from "jotai";
import { ReactNode } from "react";
import { menuAtom } from "utils/store";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  const [isOpen] = useAtom(menuAtom);
  return (
    <main
      className={`${
        isOpen ? "hidden" : "block"
      } lg:block overflow-y-scroll p-3 h-full w-full`}
    >
      <div className="max-w-xl mx-auto">{children}</div>
    </main>
  );
};
