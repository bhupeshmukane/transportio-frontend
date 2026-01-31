import PublicNavbar from "../common/PublicNavbar";
import Footer from "./Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-screen bg-slate-50">{children}</main>
      <Footer />
    </>
  );
}
