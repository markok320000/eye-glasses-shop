import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import HeaderOffer from "./components/navbar/HeaderOffer";
import SideBarMenuModal from "./components/modals/SideBarMenuModal";
import useSideBarMenuModal from "./hooks/useSideBarMenuModal";
import SideBar from "./components/modals/SideBar";
import ShoppingBagSideBarModalWrapper from "./components/modals/ShoppingBagSideBar";
import ShoppingBagSideBar from "./components/modals/ShoppingBagSideBar";
import FavouritesSideBar from "./components/modals/FavouritesSideBar/FavouritesSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANNI",
  description: "Eyeglass shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderOffer />
        <Navbar />
        <SideBar />
        <ShoppingBagSideBar />
        <FavouritesSideBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
