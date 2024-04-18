import { Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({ subsets: ["latin"],weight:"500" });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://tuyensinh.ttu.edu.vn/wp-content/themes/ttu-v1.0.1/assets/images/logo.svg" />
        <title>Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế</title>
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
