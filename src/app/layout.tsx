import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";
import ComponentContact from "./component/contact/page";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["200","300","400","500","600", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        {children}
        <ComponentContact />
      </body>
    </html>
  );
}
