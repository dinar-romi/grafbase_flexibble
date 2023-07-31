import { Footer, Navbar } from "@/components";
import "./global.css";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
