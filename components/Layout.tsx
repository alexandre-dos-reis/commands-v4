import { ReactNode, useState } from "react";
import { type GlobalPropsType } from "utils/global-props";
import { Hamburger } from "./Hamburger";
import { Link } from "./Link";
import { SearchBar } from "./SearchBar";

interface LayoutProps extends GlobalPropsType {
  children: ReactNode;
}

export const Layout = ({ commands, children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCmdSlug, setCurrentCmdSlug] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleClickCommand = (cmd: string) => {
    setIsOpen(false);
    setCurrentCmdSlug(cmd);
  };

  return (
    <div className="grid grid-cols-5 auto-rows-min lg:auto-rows-auto gap-4 h-screen">
      <header className="col-span-5 bg-red-200 flex gap-4 items-center justify-between p-3">
        <section className="flex gap-4 items-center">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          <h1 className="text-3xl">Commandes</h1>
        </section>
        <section>
          <SearchBar value={searchText} setValue={setSearchText} />
        </section>
        <section>
          <nav>
            <ul className="flex gap-4 items-center text-lg">
              <li>
                <Link href="#">Accueil</Link>
              </li>
              <li>
                <Link href="#">A propos</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } col-span-5 lg:block lg:col-span-1 bg-blue-200 overflow-y-auto p-3`}
      >
        <nav>
          <ul className="flex flex-wrap gap-2 font-mono text-sm">
            {commands?.map((c) => (
              <li
                key={c.id}
                className={`border border-solid border-gray-500 px-2 py-[2px] rounded-md ${
                  currentCmdSlug === c.slug
                    ? "text-white bg-gray-800"
                    : "text-inherit bg-inherit"
                }`}
              >
                <Link
                  href={`/${c?.slug}`}
                  onClick={() => handleClickCommand(c.slug)}
                >
                  {c?.tab}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main
        className={`${
          isOpen ? "hidden" : "block"
        } col-span-5 lg:block lg:col-span-4 bg-green-200 overflow-y-auto p-3`}
      >
        {children}
      </main>
      {/* <footer className="col-span-5 bg-red-200 h-min">
        FOOTER v4 | créé par Alexandre Dos Reis | Code Source | 2022
      </footer> */}
    </div>
  );
};
