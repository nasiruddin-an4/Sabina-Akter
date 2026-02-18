"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { usePathname } from "next/navigation";

export default function LayoutProvider({ children, siteInfo }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar siteInfo={siteInfo} />
      <main className="min-h-screen">{children}</main>
      <Footer siteInfo={siteInfo} />
      <BackToTop />
    </>
  );
}
