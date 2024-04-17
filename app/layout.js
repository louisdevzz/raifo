import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://tuyensinh.ttu.edu.vn/wp-content/themes/ttu-v1.0.1/assets/images/logo.svg" />
        <title>Phòng quản lý khoa học và hợp tác quốc tế</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
