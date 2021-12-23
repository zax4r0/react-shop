import { ReactNode } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default IndexLayout;
