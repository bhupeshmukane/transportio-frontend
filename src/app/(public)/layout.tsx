import PublicNavbar from "@/src/components/public/common/PublicNavbar";
import PublicFooter from "@/src/components/public/common/PublicFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PublicNavbar />
      <main className="flex-1 w-full ">
        {children}
      </main>
      <PublicFooter />
    </div>
  );
}
