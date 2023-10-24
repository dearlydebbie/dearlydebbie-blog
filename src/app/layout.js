import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/navbar";
import Footer from "@/Components/Footer/footer";
import { ThemeContextProvider } from "../../public/Context/ThemeContext";
import ThemeProvider from "@/Providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DearlyDebbie Blog",
  description: "The best blog app ever!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}