import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href='/' aria-label='Home'>NoteHub</Link>
      <nav aria-label="Main Navigation">
        <ul className="navigation">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;