import type { Metadata } from "next";
import "./globals.css";
import "./main.css";
import Footer from "./components/footer";
import Nav from "./components/nav";

export const metadata: Metadata = {
  title: "Jyväskylän mestaruuskyykkä",
  description: "Jyväskylän mestaruuskyykkä tapahtumasivu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-width">
          <div className="content-width">
        <Nav />
        {children}
        <Footer />
        </div>
        </div>
      </body>
    </html>
  );
}
