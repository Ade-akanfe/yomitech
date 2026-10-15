import Logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

const Board = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <Link className="brand" href="#home" aria-label="Yomtech Limited home">
        <span className="brand-mark">
          <Image src={Logo} fill sizes="36px" alt="" />
        </span>
        <span className="brand-name">
          YOMTECH
          <span>LIMITED</span>
        </span>
      </Link>
      <p>Car body repairs and refinishing in Birmingham.</p>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#work">Our work</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </div>
  </footer>
);

export default Board;
