import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { DocsSidebar } from '@/components/docs-sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <DocsSidebar />
        <main className="flex-1 md:ml-64 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
