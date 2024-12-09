import Image from "next/image";
import logo from "../../public/images/logo_header.png"
import HeaderFonts from "../HeaderFonts/page"
export default function Header() {
    return (
        <header className="header">
        <div className="logo">
        <Image
            src={logo}
     alt="Logo"
     width={30} 
         height={30}
   />   
          <span>Furniro</span>
        </div>
        <nav className="nav">
            <li>Home</li>
            <li>Shop</li>
            <li> Blog</li>
            <li>Contact</li>
          {/* <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link> */}
        </nav>
        <div className="icons">
        <HeaderFonts/>
        </div>
      </header>

    );
  }