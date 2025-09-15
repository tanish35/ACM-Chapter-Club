import Link from "next/link";

function NavLinkListItem({ link, text }: { link: string; text: String }) {
    return (
        <li>
            <Link
                href={link}
                className="p-4 block text-sm font-medium hover:text-[#005a83]"
            >
                {text}
            </Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full px-4 py-3 text-lg text-gray-700 md:py-0 bg-white">
                <Link href="/" className="flex items-center cursor-pointer p-3">
                    <img
                        className="h-12 mr-3"
                        alt="jadavpur university acm student chapter logo"
                        src="/ju-acm.svg"
                    />
                    <h2 className="font-semibold text-sm leading-2 text-sky-800">
                        JU ACM
                        <br />
                        Student Chapter
                    </h2>
                </Link>
                <img
                    className="block w-6 h-6 cursor-pointer md:hidden"
                    alt="hamburger menu button"
                    src="/hamburger.png"
                />

                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 hidden w-full md:items-center md:w-auto">
                    <NavLinkListItem link="/" text="Home" />
                    <NavLinkListItem link="/contact" text="Contact" />
                    <NavLinkListItem link="/events" text="Events" />
                    <NavLinkListItem link="/register" text="Register" />
                </ul>
            </nav>
        </header>
    );
}
