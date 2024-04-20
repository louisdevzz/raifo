import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({ subsets: ["latin"],weight:"400" });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://tuyensinh.ttu.edu.vn/wp-content/themes/ttu-v1.0.1/assets/images/logo.svg" />
        <title>Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế</title>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
