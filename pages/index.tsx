import Head from "next/head";
import { Inter } from "next/font/google";

import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen ${inter.className} main-container min-w-[800px] bg-[#FFFFFF]`}
    >
      <Head>
        <title>Mainstack Dashboard Assignment - Chizaram Igolo</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <Sidebar />
      <Dashboard />
    </main>
  );
}
