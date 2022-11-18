import { Link } from "components/Link";
import { useAtom } from "jotai";
import { GlobalPropsType } from "utils/global-props";
import { currentCmdSlugAtom, menuAtom } from "utils/store";

interface NavProps {
  commands: GlobalPropsType["commands"];
}

export const Nav = ({ commands }: NavProps) => {
  const [isOpen, setIsOpen] = useAtom(menuAtom);
  const [currentCmdSlug, setCurrentCmdSlug] = useAtom(currentCmdSlugAtom);

  const handleClickCommand = (cmd: string) => {
    setIsOpen(false);
    setCurrentCmdSlug(cmd);
  };

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } lg:block overflow-y-auto p-3 h-full lg:max-w-xs`}
    >
      <nav>
        <ul className="flex flex-wrap gap-2 lg:gap-3 font-mono">
          {commands?.map((c) => (
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
      </nav>
    </aside>
  );
};
