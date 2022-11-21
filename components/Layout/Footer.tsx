import { Link } from "components/Link";



export const Footer = () => {
  const linkStyle = "underline underline-offset-2 hover:opacity-60";

  return (
    <footer className="text-center py-3 h-min border border-gray-300">
      v4 | créé par{" "}
      <Link className={linkStyle} href="https://alexandre-dosreis.me">
        Alexandre Dos Reis
      </Link>{" "}
      |{" "}
      <Link
        className={linkStyle}
        href="https://github.com/alexandre-dos-reis/commands-v4"
      >
        Code Source
      </Link>{" "}
      | {new Date().getFullYear()}
    </footer>
  );
};
