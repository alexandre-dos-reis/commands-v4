import { Link } from "components/Link";
import { Hamburger } from "../Hamburger";
import { SearchBar } from "../SearchBar";

export const Header = () => {
  return (
    <header className="lg:col-span-5 bg-red-200 flex gap-4 items-center justify-between p-3 h-min">
      <section className="flex gap-4 items-center">
        <Hamburger />
      </section>
      <section className="flex gap-20 items-center">
        <Link href="/">
          <h1 className="text-3xl">Commandes Unix</h1>
        </Link>
        <SearchBar />
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
