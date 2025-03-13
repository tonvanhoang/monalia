"use client"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";
import ComponentContact from "./component/contact/page";
import ComponentNominee from "./component/nominee/page";
import { Noto_Sans } from "next/font/google";

import { useEffect } from "react";

const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={notoSans.className}>
        {children}
        <ComponentNominee/>
        <ComponentContact />
      </body>
    </html>
  );
}
