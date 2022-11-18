import type { ReactNode } from "react";
import type { GlobalPropsType } from "utils/global-props";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";
import { Footer } from "./Footer";

interface LayoutProps extends GlobalPropsType {
  children: ReactNode;
}

export const Layout = ({ commands, children }: LayoutProps) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 lg:auto-rows-auto h-screen">
      <Header />
      <Nav commands={commands} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
