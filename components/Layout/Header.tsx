import { Link } from "components/Link";
import { useAtom } from "jotai";
import { searchTextAtom } from "utils/store";
import { Hamburger } from "../Hamburger";
import { SearchBar } from "../SearchBar";

export const Header = () => {
  const [_, setSearchText] = useAtom(searchTextAtom);

  return (
    <header className="flex gap-4 items-center justify-between p-3 h-min border border-gray-300">
      <section className="flex gap-4 items-center">
        <Hamburger />
      </section>
      <section className="flex gap-20 items-center">
        <Link href="/">
          <h1
            onClick={() => setSearchText("")}
            className="text-3xl whitespace-nowrap font-mono uppercase font-bold text-gray-700"
          >
            Commandes Unix
          </h1>
        </Link>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </section>
      <section>
        <nav>
          <ul className="flex gap-4 items-center text-lg">
            {/* <li>
              <Link href="/">Accueil</Link>
            </li> */}
            {/* <li>
              <Link href="#">A propos</Link>
            </li> */}
            {/* <li>
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
      </section>
    </header>
  );
};
