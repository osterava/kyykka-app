import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><Link href="/">Jyväskylän mestaruuskyykkä</Link></li>
        <li><Link href="/aikataulu">Aikataulu</Link></li>
        <li><Link href="/lohkojako">Lohkojako</Link></li>
        <li><Link href="/tulokset">Tulokset</Link></li>
        <li><Link href="/saannot">Säännöt</Link></li>
      </ul>
    </nav>
  );
}
