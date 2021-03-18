import Link from 'next/link';

export default function Header(props: any) {
  const navLinks = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Projects",
      href: "/#projects"
    },
    {
      title: "Contacts",
      href: "/#contacts"
    },
    {
      title: "About us",
      href: "/#aboutus"
    },
  ].map((link: any, index: number) =>
    <div key={index} className="header__link"><Link href={link.href}>{link.title}</Link></div>
  );

  return (
    <header className="header">
      <h2 className="logotype">One</h2>
      <nav>
        {navLinks}
      </nav>
      <nav>
        <div className="header__link">
          <Link href="/login#form">
            <a className="link">Login</a>
          </Link>
        </div>
        <div className="header__link">
          <Link href="/signup#form">
            <a className="link link_bordered">Sign up</a>
          </Link>
        </div>
      </nav>

    </header>
  );
}