import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../../styles/tailwind.css"
import "../../styles/globals.css"
const inter = Inter({ subsets: ["latin"] });
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "QuikGist",
  description: "Nigeria's biggest gist site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} prose customWidth100`}>
      {draftMode().isEnabled && (
          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        )}
        <Navbar />
        {children}
        {draftMode().isEnabled && <VisualEditing />}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-CHFQTSV073" />
    </html>
  );
}
