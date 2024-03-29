import HeaderComponent from "@/components/header/header";
import "./globals.css";
import image1 from "@/assets/logo.jpg";

export const metadata = {
  title: "YOMTECH LIMITED",
  description: "An Automobile Car Body, Repair Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={image1.src} />
      </head>
      <body className="bg-deep_blue z-30 relative">
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
