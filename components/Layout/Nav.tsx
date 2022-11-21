import { Link } from "components/Link";
import { SearchBar } from "components/SearchBar";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GlobalPropsType } from "utils/global-props";
import {
  currentCmdSlugAtom,
  matchedAtom,
  menuAtom,
  searchTextAtom,
} from "utils/store";

interface NavProps {
  commands: GlobalPropsType["commands"];
}

export const Nav = ({ commands }: NavProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useAtom(menuAtom);
  const [currentCmdSlug, setCurrentCmdSlug] = useAtom(currentCmdSlugAtom);
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const [, setIsMatched] = useAtom(matchedAtom);

  const handleClickCommand = (cmd: string) => {
    setIsOpen(false);
    setCurrentCmdSlug(cmd);
    setSearchText("");
  };

  const filteredCommands = commands?.filter((c) =>
    c.tab.includes(searchText.toLowerCase())
  );

  useEffect(() => {
    if (
      filteredCommands?.length === 1 &&
      filteredCommands[0]?.tab === searchText &&
      currentCmdSlug !== searchText
    ) {
      setIsOpen(false);
      setCurrentCmdSlug(filteredCommands[0]?.slug);
      setSearchText("");
      setIsMatched(true)
      router.push(`/${filteredCommands[0].tab}`);
    }
  }, [currentCmdSlug, filteredCommands, searchText]);

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } lg:block overflow-y-auto h-full w-full lg:w-[400px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 scrollbar-thumb-rounded-lg`}
    >
      <div className="flex md:hidden justify-center items-center mt-2 mb-5">
        <SearchBar />
      </div>
      <nav className="lg:h-full overflow-y-scroll p-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 scrollbar-thumb-rounded-lg">
        {filteredCommands?.length === 0 ? (
          <div className="w-full h-full flex flex-col gap-10 justify-center items-center text-center text-2xl font-bold">
            Aucune
            <br />
            commande
            <br />
            trouvée !<br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
          </div>
        ) : (
          <ul className="flex flex-wrap gap-2 lg:gap-3 font-mono">
            {filteredCommands
              ?.sort((a, b) => a?.cmd_order! - b?.cmd_order!)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/${c?.slug}`}
                  onClick={() => handleClickCommand(c.slug)}
                >
                  <li
                    className={`border border-solid border-gray-500 px-2 py-[2px] rounded-md ${
                      currentCmdSlug === c.slug
                        ? "text-inherit bg-inherit bg-gray-200"
                        : "text-white bg-gray-700 hover:opacity-70"
                    }`}
                  >
                    {c?.tab}
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </nav>
    </aside>
  );
};
