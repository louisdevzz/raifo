'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/component/Header";
import { useState } from "react";
import Footer from "../components/Footer";

const roboto = Roboto({ subsets: ["latin"],weight:"400" });


export default function RootLayout({ children }) {
  const [open,setOpen] = useState(false);
  const [isShow,setIsShow] = useState(false);

  const isOpen = isShow?isShow:open;

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/logo/logo.svg" />
        <title>Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế</title>
      </head>
      <body className={`${roboto.className} ${isOpen?"fixed right-0 left-0":""}`}>
        <Header open={open} setOpen={setOpen} setIsShow={setIsShow} isShow={isShow}/>
        <div className="xl:max-w-screen-2xl lg:max-w-screen-xl max-w-screen-lg mx-auto xl:mt-12 lg:px-10 xl:px-[75px] px-3 mt-5">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
