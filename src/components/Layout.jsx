import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-clip">
      <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 w-72 h-72 rounded-full bg-sky-200/40 blur-3xl" />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
