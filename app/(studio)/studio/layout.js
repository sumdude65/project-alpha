export const metadata = {
  title: "QuikGist Content Studio",
  description: "Nigeria's biggest gist site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
