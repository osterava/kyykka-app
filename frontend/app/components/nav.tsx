"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-header">
        <Link href="/" className="brand">
          JYVÄSKYLÄN MESTARUUSKYYKKÄ–2026
        </Link>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Avaa valikko"
        >
          ☰
        </button>

        <span
          className="desktop-menu"
          onClick={() => setOpen(!open)}
        >
          Valikko
        </span>
      </div>

      <ul className={`nav-list ${open ? "open" : ""}`}>
          <li>VALIKKO</li>
          <span className="line"></span>
          <li><Link href="/aikataulu">AIKATAULU</Link></li>
          <li><Link href="/lohkojako">LOHKOJAKO</Link></li>
          <li><Link href="/tulokset">TULOKSET</Link></li>
          <li><Link href="/saannot">SÄÄNNÖT</Link></li>
        </ul>
    </nav>
  );
}
