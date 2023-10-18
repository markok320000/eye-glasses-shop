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
import Footer from "./components/footer/Footer";
import FilterAndSortBar from "./sunglasses/FilterAndSortBar";
import FilterModal from "./sunglasses/FilterModal";
import { ReduxProvider } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANNNI",
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
        <div className="">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
