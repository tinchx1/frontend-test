"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import "./Navbar.scss";
import { LogoEmpresa } from "public/icons";

export interface NavbarProps {
  currentLang?: "EN" | "ES" | "BR";
}

export function Navbar({ currentLang = "ES" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languages: Array<"EN" | "ES" | "BR"> = ["EN", "ES", "BR"];
  const navItems: Array<{ label: string; href: string }> = [
    { label: "Item 1", href: "#item1" },
    { label: "Item 2", href: "#item2" },
    { label: "Item 3", href: "#item3" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link href="/" className="navbar__logo">
          <LogoEmpresa color="#0AAA9D" />
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Open menu"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>

        <nav
          id="navbar-menu"
          className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}
          aria-label="Site navigation"
        >
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.href} className="navbar__link">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Language selector" className="navbar__language-nav">
          <ul className="navbar__languages">
            {languages.map((lang, index) => {
              const isActive = lang === currentLang;
              return (
                <li
                  key={lang}
                  className={`navbar__lang ${isActive ? "navbar__lang--active" : ""}`}
                >
                  <Link href="/" >
                    {lang}
                  </Link>
                  {index < languages.length - 1 && (
                    <span className="navbar__separator" aria-hidden="true">
                      |
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
} 