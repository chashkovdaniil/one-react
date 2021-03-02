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
        <li key={index}><Link href={link.href}>{link.title}</Link></li>
    );
    return (
        <header>
            <nav>
                <ul className="menu">{navLinks}</ul>
            </nav>
        </header>
    );
}