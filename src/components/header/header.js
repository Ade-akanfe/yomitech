"use client";

import Logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#contact", label: "Contact" },
];

const Brand = () => (
  <Link className="brand" href="#home" aria-label="Yomtech Limited home">
    <span className="brand-mark">
      <Image src={Logo} fill sizes="52px" alt="" />
    </span>
    <span className="brand-name">
      YOMTECH
      <span>LIMITED</span>
    </span>
  </Link>
);

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="button" href="tel:+447538733798">
            Call us
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="button" href="tel:+447538733798" onClick={() => setOpen(false)}>
            Call us
          </a>
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
