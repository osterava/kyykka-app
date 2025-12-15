"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-header">
        <Link href="/" className="brand">
          Jyväskylän mestaruuskyykkä 2026
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
          <li>Valikko</li>
          <span className="line"></span>
          <li><Link href="/aikataulu">Aikataulu</Link></li>
          <li><Link href="/lohkojako">Lohkojako</Link></li>
          <li><Link href="/tulokset">Tulokset</Link></li>
          <li><Link href="/saannot">Säännöt</Link></li>
        </ul>
    </nav>
  );
}
