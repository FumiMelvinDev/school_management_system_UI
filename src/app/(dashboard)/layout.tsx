import Link from "next/link";
import "../globals.css";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex px-2">
      {/* sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="Vercel Logo" width={32} height={32} />
          <span className="hidden lg:block text-semibold">Nghonyama</span>
        </Link>
        <Menu />
      </div>

      {/* main */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#d8f5f3] overflow-y-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
