import HeaderComponent from "@/components/header/header";
import "./globals.css";
import image1 from "@/assets/logo.jpg";

export const metadata = {
  title: "Yomtech Limited | Car Body Repairs in Birmingham",
  description:
    "Expert car body repairs, accident restoration and spray painting in Birmingham. Contact Yomtech Limited to discuss your repair and get a quote.",
  openGraph: {
    title: "Yomtech Limited | Car Body Repairs in Birmingham",
    description:
      "Expert car body repairs, accident restoration and spray painting in Birmingham. Contact Yomtech Limited to discuss your repair and get a quote.",
    siteName: "Yomtech Limited",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yomtech Limited | Car Body Repairs in Birmingham",
    description:
      "Expert car body repairs, accident restoration and spray painting in Birmingham.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href={image1.src} />
      </head>
      <body>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
