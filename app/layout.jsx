import "./globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title:{
    default:"Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế",
    template:"%s | Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế"
  },
  description:"Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế",
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế',
    description: 'Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế Đại Học Tân Tạo',
    url: 'https://research-ttu.vercel.app',
    siteName: 'Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế',
    images: '/background/background_home.jpg',
  },
  keywords: ['Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế', 'Đại Học Tân Tạo', 'Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế Đại Học Tân Tạo',"Phòng Hợp Tác Quốc Tế","Phòng Quản Lý Khoa Học"],
  metadataBase: new URL('https://research-ttu.vercel.app'),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  assets: ['https://research-ttu.vercel.app/assets'],
  category: ['education','scientific research','cooperate'],

}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/logo/favicon.ico" />
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
