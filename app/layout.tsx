import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <nav className="flex justify-center gap-4 p-4 bg-green-600">
          <Link href={"/"}>
            <h2 className="text-white">Home</h2>
          </Link>
          <Link href={"/notes"}>
            <h2 className="text-white">Notes</h2>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
