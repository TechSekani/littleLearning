import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Outfit, Raleway } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

export const metadata = {
  title: "Little Learners",
  description: "Welcome to Little Learners Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${raleway.variable}`}>
      <body className=" bg-[#FFF5F0] py-3 px-3 md:px-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
