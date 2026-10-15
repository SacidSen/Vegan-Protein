import type { ReactNode } from "react";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;