import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../../styles/tailwind.css"
import "../../styles/globals.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InfoQuill",
  description: "Nigeria's biggest gist site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} prose customWidth100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
